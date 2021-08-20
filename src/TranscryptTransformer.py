
# Boilerplate to keep linter happy 
#__pragma__('skip')
# javascript supplied
require = None
exports: dict[str, any] = {}
JSON = None
console = None
RegExp = None
# provided by transcrypt
__new__ = None
object = None
#__pragma__('noskip')

# import nodejs packages
path = require('path')
util = require('util')
events = require('events')
exec = util.promisify(require('child_process').exec)

# import NPM packages
Transformer = require("@parcel/plugin").Transformer
#dedent = require('dedent-js')
utils = require('@parcel/utils')
ThrowableDiagnostic = require('@parcel/diagnostic')['default']
Mutex = require("async-mutex").Mutex 

def quote(s):
    return '"' + s.replace('"', '\\"') + '"'

# Javascript replaceall instead of Python because transcrypt re has regressions
def replace(regex, repl, s, flags):
    r = __new__( RegExp(regex, flags))
    return s['replace'](r, repl) 

def dedent(text: str):

    text = replace("^[\\t ]*\\n", "\n", text, "")
    text = replace("\\n[\\t ]*$", "", text, "")
    check = replace("\\n[\\t ]*\\n", "\n", text, "g")

    pattern = __new__( RegExp("\\n[\\t ]*", "g"))
    match = check.match(pattern)
    if match:
        size = min(value.length -1 for value in match)
        text = replace('\\n[\\t ]{' + size + '}', '\n', text, 'g')

    return text

async def finishStream(stream, code):
    await util.promisify(stream.end).call(stream, code)

async def atomicCopy(opts, source, dest):
    mutex = opts.config['dirMutex']
    options = opts.options
    prefix = "// Transcrypt'ed from Python, "
    prefixLen = len(prefix) + 19
    await mutex.acquire()
    try:
        for f in options.inputFS.readdirSync(source):
            base = path.parse(f).base
            sourcePath = path.join(source,f)
            destPath = path.join(dest, base)

            code  = str(await options.inputFS.readFile(sourcePath))
            if code.startswith(prefix):
                code = code[prefixLen:]
            if await options.inputFS.exists(destPath):
                newCode = await options.inputFS.readFile(destPath)
                if newCode == code:
                    continue
            stream = options.inputFS.createWriteStream(destPath)
            await finishStream(stream, code)
    finally:
        await mutex.release()
    
async def runTranspile(opts, cwd, temp, filePath, importPath):
    # because transcrypt likes to delete the target directory,
    # build in a temp directory then copy files out 

    tempDir = path.join(opts.config['transcryptDir'], temp)
    await opts.options.inputFS.mkdirp(tempDir)

    # extra search path from config or root
    xpath = opts.config['config'].get('xpath', '')
    if not xpath.startsWith('/'):
        xpath = path.join(opts.options.projectRoot, xpath) # make relative to root

    cmd = " ".join([
        'pipenv',
        'run',
        'transcrypt',
        '--nomin',
        '--map',
        '--verbose',
        '--xpath', quote('$'.join([
            importPath,
            xpath,
        ])),
        '--outdir', quote(tempDir),
        quote(filePath)
    ])
    cmdOptions = {
        'cwd': cwd,
        'encoding': 'utf8',
    }
    opts.logger.info({
        'message': f'Running transcrypt: {cmd}',
        'filePath': filePath,
        'type': 'py'
    })
    a = ThrowableDiagnostic
    try:
        await exec(cmd, cmdOptions)
    except object as err:
        raise __new__(ThrowableDiagnostic({
            "diagnostic": {
            'message': f'Error compiling: {err.stdout.toString()}',
            'filePath': filePath,
            'type': 'py',
            'origin': 'parcel-transformer-transcrypt'
            }
        })) 
    await atomicCopy(opts, tempDir, opts.config['transcryptDir'])
    opts.options.inputFS.rimraf(tempDir)


async def loadConfig(opts):
    opts.logger.info({
        'message': f'loadConfig {opts.options.mode}: ({opts.options.instanceId})',
    })

    #get config from package.json
    pkg = dict(await opts.config.getPackage())
    config = dict(pkg.get("parcel-transformer-transcrypt", {}))

    transcryptDir = path.join(opts.options.projectRoot, '__transcrypt__', opts.options.mode)
    await opts.options.inputFS.mkdirp(transcryptDir)
    return {
        'dirMutex': __new__(Mutex),
        'transcryptDir': transcryptDir,
        'config': config
    }

async def transform(opts):
    transcryptDir = opts.config['transcryptDir']
    relativeTranscryptDir = path.relative(transcryptDir, opts.options.projectRoot)
    cwd = opts.options.projectRoot  # directery to run transcrypt ij

    filePath = opts.asset.filePath
    fileInfo = path.parse(filePath)

    opts.logger.info({
        'message': f'transform {opts.options.mode}: {filePath} ({opts.asset.id}) ({opts.options.instanceId})',
        'filePath': filePath,
        'type': opts.asset['type']
    })

    # calculate module name from path
    relativeDir = path.relative(opts.options.projectRoot, fileInfo.dir)
    if (fileInfo.name == '__init__'):
        pyModule = relativeDir.replace(path.sep, '.')
    else:
        pyModule = path.join(relativeDir, fileInfo['name']).replace(path.sep, '.')

    # handle Vue files by copying script data out to temp file
    if (fileInfo.ext == '.vue'): 
        #opts.asset.invalidateOnFileChange(opts.asset.filePath)
        
        p = path.join(transcryptDir, relativeDir)
        opts.options.inputFS.mkdirp(p)
        filePath = path.join(p, fileInfo['name'] + ".py" )
        code = await opts.asset.getCode()
        opts.logger.info({
            'message': f'Creating temp: {filePath}'
        })
        stream = opts.options.inputFS.createWriteStream(filePath)
        await finishStream(stream, dedent(code))
        #await opts.options.inputFS.writeFile(
        #    filePath , 
        #    dedent(code)  # make sure to dedent as python hates whitespace
        #)
        cwd = transcryptDir
        
    # imports are done relative to original source file. 
    # This is the relative path back to the source file 
    importPath = path.join(relativeTranscryptDir,relativeDir)

    await runTranspile(opts, cwd, opts.asset.id, pyModule, importPath )

    # This adjusts relative imports using "require".  Any require beginning with a ., is adjusted
    # to start at the original source file.
    jsFile = path.join(transcryptDir, pyModule + '.js')
    code = await opts.options.inputFS.readFile(jsFile, 'utf8')
    newCode = replace("(require\\s*\\(\\s*['\"])\\.", f"$1{importPath}/", code, 'g')
    await opts.options.inputFS.writeFile(jsFile, newCode)

    # because of the complexities of transcrypt generating relative imports within the target dir
    # this just puts a stub in the source to point to the javascript code
    jsRootFile = path.sep + path.relative(opts.options.projectRoot, jsFile)
    opts.asset['type'] = 'js'
    opts.asset.setCode(f'''
        //transcrypt
        var module = require("{jsRootFile}");
        export default module.default;
    ''')

    # Add invalidate watchers for the python deps
    projectFile = path.join(transcryptDir, pyModule + '.project')
    try: 
        project = dict(JSON.parse(await opts.options.inputFS.readFile(projectFile, 'utf8')))
    except:
        opts.logger.error({
            'message': f'Error reading project file {projectFile}',
            'filePath': filePath,
            'type': opts.asset['type'],
            'source': 'parcel-transformer-transcrypt'
        })
        project = {}
    
    modules = project.get('modules', [])
    for module in modules:
        if path.basename(module.source) == '__runtime__.py':
            # skip runtime to avoid infinate loops
            continue
        modulePath = module.source if module.source != filePath else opts.asset.filePath
        if not  modulePath.startswith(path.sep):
            modulePath = path.join(transcryptDir, modulePath)
        console.log(modulePath)
        opts.asset.invalidateOnFileChange(modulePath)


    return [opts.asset]


exports['default'] = __new__(Transformer({
    "transform": transform,
    "loadConfig": loadConfig
}))
