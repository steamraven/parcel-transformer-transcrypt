"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _sourceMap() {
  const data = _interopRequireDefault(require("@parcel/source-map"));

  _sourceMap = function () {
    return data;
  };

  return data;
}

function _semver() {
  const data = _interopRequireDefault(require("semver"));

  _semver = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function () {
    return data;
  };

  return data;
}

function compiler() {
  const data = _interopRequireWildcard(require("@vue/compiler-sfc"));

  compiler = function () {
    return data;
  };

  return data;
}

function _consolidate() {
  const data = _interopRequireDefault(require("consolidate"));

  _consolidate = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe
// $FlowFixMe
const MODULE_BY_NAME_RE = /\.module\./; // TODO: Use language-specific config files during preprocessing

var _default = new (_plugin().Transformer)({
  async loadConfig({
    config
  }) {
    let conf = await config.getConfig(['.vuerc', '.vuerc.json', '.vuerc.js', 'vue.config.js'], {
      packageKey: 'vue'
    });
    let contents = {};

    if (conf) {
      config.invalidateOnStartup();
      contents = conf.contents;

      if (typeof contents !== 'object') {
        // TODO: codeframe
        throw new (_diagnostic().default)({
          diagnostic: {
            message: 'Vue config should be an object.',
            origin: '@parcel/transformer-vue'
          }
        });
      }
    }

    return {
      customBlocks: contents.customBlocks || {},
      filePath: conf && conf.filePath
    };
  },

  canReuseAST({
    ast
  }) {
    return ast.type === 'vue' && _semver().default.satisfies(ast.version, '^3.0.0');
  },

  async parse({
    asset
  }) {
    // TODO: This parses the vue component multiple times. Fix?
    let code = await asset.getCode();
    let parsed = compiler().parse(code, {
      sourceMap: true,
      filename: asset.filePath
    });

    if (parsed.errors.length) {
      throw new (_diagnostic().default)({
        diagnostic: parsed.errors.map(err => {
          return createDiagnostic(err, asset.filePath);
        })
      });
    }

    return {
      type: 'vue',
      version: '3.0.0',
      program: parsed.descriptor
    };
  },

  async transform({
    asset,
    options,
    resolve,
    config
  }) {
    let id = (0, _utils().hashObject)({
      filePath: asset.filePath
    }).slice(-6);
    let hmrId = id + '-hmr';
    let basePath = (0, _path().basename)(asset.filePath);
    let {
      template,
      script,
      styles,
      customBlocks
    } = (0, _nullthrows().default)(await asset.getAST()).program;

    if (asset.pipeline != null) {
      return processPipeline({
        asset,
        template,
        script,
        styles,
        customBlocks,
        config,
        basePath,
        options,
        resolve,
        id,
        hmrId
      });
    }

    return [{
      type: 'js',
      uniqueKey: asset.id + '-glue',
      content: `
let script;
let initialize = () => {
  script = ${script != null ? `require('script:./${basePath}');
  if (script.__esModule) script = script.default` : '{}'};
  ${template != null ? `script.render = require('template:./${basePath}').render;` : ''}
  ${styles.length !== 0 ? `script.__cssModules = require('style:./${basePath}').default;` : ''}
  ${customBlocks != null ? `require('custom:./${basePath}').default(script);` : ''}
  script.__scopeId = '${'data-v-' + id}';
  script.__file = ${JSON.stringify(options.mode === 'production' ? basePath : asset.filePath)};
};
initialize();
${options.hmrOptions ? `if (module.hot) {
  script.__hmrId = '${hmrId}';
  module.hot.accept(() => {
    setTimeout(() => {
      initialize();
      if (!__VUE_HMR_RUNTIME__.createRecord('${hmrId}', script)) {
        __VUE_HMR_RUNTIME__.reload('${hmrId}', script);
      }
    }, 0);
  });
}` : ''}
export default script;`
    }];
  }

});

exports.default = _default;

function createDiagnostic(err, filePath) {
  if (typeof err === 'string') {
    return {
      message: err,
      origin: '@parcel/transformer-vue',
      filePath
    };
  } // TODO: codeframe


  let diagnostic = {
    message: (0, _diagnostic().escapeMarkdown)(err.message),
    origin: '@parcel/transformer-vue',
    name: err.name,
    stack: err.stack
  };

  if (err.loc) {
    diagnostic.codeFrames = [{
      codeHighlights: [{
        start: {
          line: err.loc.start.line + err.loc.start.offset,
          column: err.loc.start.column
        },
        end: {
          line: err.loc.end.line + err.loc.end.offset,
          column: err.loc.end.column
        }
      }]
    }];
  }

  return diagnostic;
}

async function processPipeline({
  asset,
  template,
  script,
  styles,
  customBlocks,
  config,
  basePath,
  options,
  resolve,
  id,
  hmrId
}) {
  switch (asset.pipeline) {
    case 'template':
      {
        let isFunctional = template.functional;

        if (template.src) {
          template.content = (await options.inputFS.readFile(await resolve(asset.filePath, template.src))).toString();
          template.lang = (0, _path().extname)(template.src);
        }

        let content = template.content;

        if (template.lang && !['htm', 'html'].includes(template.lang)) {
          let preprocessor = _consolidate().default[template.lang];

          if (!preprocessor) {
            // TODO: codeframe
            throw new (_diagnostic().default)({
              diagnostic: {
                message: (0, _diagnostic().md)`Unknown template language: "${template.lang}"`,
                origin: '@parcel/transformer-vue'
              }
            });
          }

          content = await preprocessor.render(content, {});
        }

        let templateComp = compiler().compileTemplate({
          filename: asset.filePath,
          source: content,
          inMap: template.src ? undefined : template.map,
          scoped: styles.some(style => style.scoped),
          isFunctional,
          id
        });

        if (templateComp.errors.length) {
          throw new (_diagnostic().default)({
            diagnostic: templateComp.errors.map(err => {
              return createDiagnostic(err, asset.filePath);
            })
          });
        }

        let templateAsset = {
          type: 'js',
          uniqueKey: asset.id + '-template',
          ...(!template.src && asset.env.sourceMap && {
            map: createMap(templateComp.map, options.projectRoot)
          }),
          content: templateComp.code + `
${options.hmrOptions ? `if (module.hot) {
  module.hot.accept(() => {
    __VUE_HMR_RUNTIME__.rerender('${hmrId}', render);
  })
}` : ''}`
        };
        return [templateAsset];
      }

    case 'script':
      {
        if (script.src) {
          let src = await resolve(asset.filePath, script.src);
          script.content = (await options.inputFS.readFile(src)).toString();
          script.lang = (0, _path().extname)(script.src);
          asset.invalidateOnFileChange(src);
        }

        let type;

        switch (script.lang || 'js') {
          case 'javascript':
          case 'js':
            type = 'js';
            break;

          case 'typescript':
          case 'ts':
            type = 'ts';
            break;

          case 'coffeescript':
          case 'coffee':
            type = 'coffee';
            break;

          default:
            // TODO: codeframe
            type= script.lang
        }

        let scriptAsset = {
          type,
          uniqueKey: asset.id + '-script',
          content: script.content,
          ...(!script.src && asset.env.sourceMap && {
            map: createMap(script.map, options.projectRoot)
          })
        };
        return [scriptAsset];
      }

    case 'style':
      {
        let cssModules = {};
        let assets = await Promise.all(styles.map(async (style, i) => {
          if (style.src) {
            style.content = (await options.inputFS.readFile(await resolve(asset.filePath, style.src))).toString();

            if (!style.module) {
              style.module = MODULE_BY_NAME_RE.test(style.src);
            }

            style.lang = (0, _path().extname)(style.src);
          }

          switch (style.lang) {
            case 'less':
            case 'stylus':
            case 'styl':
            case 'scss':
            case 'sass':
            case 'css':
            case undefined:
              break;

            default:
              // TODO: codeframe
              throw new (_diagnostic().default)({
                diagnostic: {
                  message: (0, _diagnostic().md)`Unknown style language: "${style.lang}"`,
                  origin: '@parcel/transformer-vue'
                }
              });
          }

          let styleComp = await compiler().compileStyleAsync({
            filename: asset.filePath,
            source: style.content,
            modules: style.module,
            preprocessLang: style.lang || 'css',
            scoped: style.scoped,
            map: style.src ? undefined : style.map,
            id
          });

          if (styleComp.errors.length) {
            throw new (_diagnostic().default)({
              diagnostic: styleComp.errors.map(err => {
                return createDiagnostic(err, asset.filePath);
              })
            });
          }

          let styleAsset = {
            type: 'css',
            content: styleComp.code,
            sideEffects: true,
            ...(!style.src && asset.env.sourceMap && {
              map: createMap(style.map, options.projectRoot)
            }),
            uniqueKey: asset.id + '-style' + i
          };

          if (styleComp.modules) {
            if (typeof style.module === 'boolean') style.module = '$style';
            cssModules[style.module] = { ...cssModules[style.module],
              ...styleComp.modules
            };
          }

          return styleAsset;
        }));

        if (Object.keys(cssModules).length !== 0) {
          assets.push({
            type: 'js',
            uniqueKey: asset.id + '-cssModules',
            content: `
import {render} from 'template:./${basePath}';
let cssModules = ${JSON.stringify(cssModules)};
${options.hmrOptions ? `if (module.hot) {
  module.hot.accept(() => {
    __VUE_HMR_RUNTIME__.rerender('${hmrId}', render);
  });
};` : ''}
export default cssModules;`
          });
        }

        return assets;
      }

    case 'custom':
      {
        let toCall = []; // To satisfy flow

        if (!config) return [];
        let types = new Set();

        for (let block of customBlocks) {
          let {
            type,
            src,
            content,
            attrs
          } = block;

          if (!config.customBlocks[type]) {
            // TODO: codeframe
            throw new (_diagnostic().default)({
              diagnostic: {
                message: (0, _diagnostic().md)`No preprocessor found for block type ${type}`,
                origin: '@parcel/transformer-vue'
              }
            });
          }

          if (src) {
            content = (await options.inputFS.readFile(await resolve(asset.filePath, src))).toString();
          }

          toCall.push([type, content, attrs]);
          types.add(type);
        }

        return [{
          type: 'js',
          uniqueKey: asset.id + '-custom',
          content: `
let NOOP = () => {};
${(await Promise.all([...types].map(async type => `import p${type} from './${(0, _path().relative)((0, _path().dirname)(asset.filePath), await resolve((0, _nullthrows().default)(config.filePath), config.customBlocks[type]))}';
if (typeof p${type} !== 'function') {
  p${type} = NOOP;
}`))).join('\n')}
export default script => {
  ${toCall.map(([type, content, attrs]) => `  p${type}(script, ${JSON.stringify(content)}, ${JSON.stringify(attrs)});`).join('\n')}
}`
        }];
      }

    default:
      {
        return [];
      }
  }
}

function createMap(rawMap, projectRoot) {
  let newMap = new (_sourceMap().default)(projectRoot);
  newMap.addVLQMap(rawMap);
  return newMap;
}