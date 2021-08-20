var $4MyI3$path = require("path");
var $4MyI3$util = require("util");
var $4MyI3$events = require("events");
var $4MyI3$child_process = require("child_process");
var $4MyI3$parcelplugin = require("@parcel/plugin");
var $4MyI3$parcelutils = require("@parcel/utils");
var $4MyI3$parceldiagnostic = require("@parcel/diagnostic");
var $4MyI3$asyncmutex = require("async-mutex");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "util", () => $7a0a3bb9d42cdb31$export$321a875a76c72525, (v) => $7a0a3bb9d42cdb31$export$321a875a76c72525 = v);
$parcel$export(module.exports, "runTranspile", () => $7a0a3bb9d42cdb31$export$9ffa1dc06aa8ec98, (v) => $7a0a3bb9d42cdb31$export$9ffa1dc06aa8ec98 = v);
$parcel$export(module.exports, "atomicCopy", () => $7a0a3bb9d42cdb31$export$5d802e62d0c54a86, (v) => $7a0a3bb9d42cdb31$export$5d802e62d0c54a86 = v);
$parcel$export(module.exports, "quote", () => $7a0a3bb9d42cdb31$export$e422c70965167810, (v) => $7a0a3bb9d42cdb31$export$e422c70965167810 = v);
$parcel$export(module.exports, "ThrowableDiagnostic", () => $7a0a3bb9d42cdb31$export$fa917723a36b56cc, (v) => $7a0a3bb9d42cdb31$export$fa917723a36b56cc = v);
$parcel$export(module.exports, "Transformer", () => $7a0a3bb9d42cdb31$export$92ac9bc33ffc3c11, (v) => $7a0a3bb9d42cdb31$export$92ac9bc33ffc3c11 = v);
$parcel$export(module.exports, "Mutex", () => $7a0a3bb9d42cdb31$export$4045815d8631e39f, (v) => $7a0a3bb9d42cdb31$export$4045815d8631e39f = v);
$parcel$export(module.exports, "finishStream", () => $7a0a3bb9d42cdb31$export$198ce26543efd3b6, (v) => $7a0a3bb9d42cdb31$export$198ce26543efd3b6 = v);
$parcel$export(module.exports, "path", () => $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44, (v) => $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44 = v);
$parcel$export(module.exports, "events", () => $7a0a3bb9d42cdb31$export$fc4ac6ce2f1d593c, (v) => $7a0a3bb9d42cdb31$export$fc4ac6ce2f1d593c = v);
$parcel$export(module.exports, "default", () => $7a0a3bb9d42cdb31$export$9099ad97b570f7c, (v) => $7a0a3bb9d42cdb31$export$9099ad97b570f7c = v);
$parcel$export(module.exports, "exec", () => $7a0a3bb9d42cdb31$export$e9c4b7f95f606ffe, (v) => $7a0a3bb9d42cdb31$export$e9c4b7f95f606ffe = v);
$parcel$export(module.exports, "py_replace", () => $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613, (v) => $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613 = v);
$parcel$export(module.exports, "dedent", () => $7a0a3bb9d42cdb31$export$49ff9ed0e6760426, (v) => $7a0a3bb9d42cdb31$export$49ff9ed0e6760426 = v);
$parcel$export(module.exports, "utils", () => $7a0a3bb9d42cdb31$export$62aa50bb6ab7dbf5, (v) => $7a0a3bb9d42cdb31$export$62aa50bb6ab7dbf5 = v);
$parcel$export(module.exports, "transform", () => $7a0a3bb9d42cdb31$export$4b169b49e1a4823b, (v) => $7a0a3bb9d42cdb31$export$4b169b49e1a4823b = v);
$parcel$export(module.exports, "loadConfig", () => $7a0a3bb9d42cdb31$export$61057949f91cdd57, (v) => $7a0a3bb9d42cdb31$export$61057949f91cdd57 = v);
// Transcrypt'ed from Python, 2021-08-16 23:28:29
var $7a52c43e09303a0d$var$__name__ = 'org.transcrypt.__runtime__';
var $7a52c43e09303a0d$export$5dd42dbc3daf4a43 = {
};
$7a52c43e09303a0d$export$5dd42dbc3daf4a43.interpreter_name = 'python';
$7a52c43e09303a0d$export$5dd42dbc3daf4a43.transpiler_name = 'transcrypt';
$7a52c43e09303a0d$export$5dd42dbc3daf4a43.executor_name = $7a52c43e09303a0d$export$5dd42dbc3daf4a43.transpiler_name;
$7a52c43e09303a0d$export$5dd42dbc3daf4a43.transpiler_version = '3.9.0';
function $7a52c43e09303a0d$export$f12b341ded39ecc8(headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split('.');
        var firstNewIndex = tailChain.length;
        for(var index = 0; index < tailChain.length; index++){
            if (!current.hasOwnProperty(tailChain[index])) {
                firstNewIndex = index;
                break;
            }
            current = current[tailChain[index]];
        }
        for(var index = firstNewIndex; index < tailChain.length; index++){
            current[tailChain[index]] = {
            };
            current = current[tailChain[index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames(value))Object.defineProperty(current, attrib, {
        get () {
            return value[attrib];
        },
        enumerable: true,
        configurable: true
    });
}
function $7a52c43e09303a0d$export$86d79b8757c54b0d(module) {
    if (!module.__inited__) {
        module.__all__.__init__(module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
}
function $7a52c43e09303a0d$export$cafca11ebe1ce115(aThis, func, quotedFuncName) {
    if (aThis) {
        if (aThis.hasOwnProperty('__class__') || typeof aThis == 'string' || aThis instanceof String) {
            if (quotedFuncName) Object.defineProperty(aThis, quotedFuncName, {
                value: function() {
                    var args = [].slice.apply(arguments);
                    return func.apply(null, [
                        aThis
                    ].concat(args));
                },
                writable: true,
                enumerable: true,
                configurable: true
            });
            return function() {
                var args = [].slice.apply(arguments);
                return func.apply(null, [
                    aThis.__proxy__ ? aThis.__proxy__ : aThis
                ].concat(args));
            };
        } else return func;
    } else return func;
}
function $7a52c43e09303a0d$export$560b02426fd39071(aThis, func, quotedFuncName) {
    if (aThis.hasOwnProperty('__class__')) return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis.__class__
        ].concat(args));
    };
    else return function() {
        var args = [].slice.apply(arguments);
        return func.apply(null, [
            aThis
        ].concat(args));
    };
}
function $7a52c43e09303a0d$export$49f4c1b21e9937dc(aThis, func, quotedFuncName) {
    return func;
}
var $7a52c43e09303a0d$export$167e177dfb3b273a = {
    __name__: 'type',
    __bases__: [],
    __new__: function(meta, name, bases, attribs) {
        var cls = function() {
            var args = [].slice.apply(arguments);
            return cls.__new__(args);
        };
        for(var index = bases.length - 1; index >= 0; index--){
            var base = bases[index];
            for(var attrib in base){
                var descrip = Object.getOwnPropertyDescriptor(base, attrib);
                if (descrip == null) continue;
                Object.defineProperty(cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols(base)){
                let descrip = Object.getOwnPropertyDescriptor(base, symbol);
                Object.defineProperty(cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith('py_') ? name.slice(3) : name;
        cls.__bases__ = bases;
        for(var attrib in attribs){
            var descrip = Object.getOwnPropertyDescriptor(attribs, attrib);
            Object.defineProperty(cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols(attribs)){
            let descrip = Object.getOwnPropertyDescriptor(attribs, symbol);
            Object.defineProperty(cls, symbol, descrip);
        }
        return cls;
    }
};
$7a52c43e09303a0d$export$167e177dfb3b273a.__metaclass__ = $7a52c43e09303a0d$export$167e177dfb3b273a;
var $7a52c43e09303a0d$export$e7ccb258e737aeac = {
    __init__: function(self) {
    },
    __metaclass__: $7a52c43e09303a0d$export$167e177dfb3b273a,
    __name__: 'object',
    __bases__: [],
    __new__: function(args) {
        var instance = Object.create(this, {
            __class__: {
                value: this,
                enumerable: true
            }
        });
        if ('__getattr__' in this || '__setattr__' in this) {
            instance.__proxy__ = new Proxy(instance, {
                get: function(target, name) {
                    let result = target[name];
                    if (result == undefined) return target.__getattr__(name);
                    else return result;
                },
                set: function(target, name, value) {
                    try {
                        target.__setattr__(name, value);
                    } catch (exception) {
                        target[name] = value;
                    }
                    return true;
                }
            });
            instance = instance.__proxy__;
        }
        this.__init__.apply(null, [
            instance
        ].concat(args));
        return instance;
    }
};
function $7a52c43e09303a0d$export$b1b3a64966170e2(name, bases, attribs, meta) {
    if (meta === undefined) meta = bases[0].__metaclass__;
    return meta.__new__(meta, name, bases, attribs);
}
function $7a52c43e09303a0d$export$9b67f8da4bac6668() {
}
function $7a52c43e09303a0d$export$9cab05107fe5a875() {
    var args = [].slice.apply(arguments);
    if (typeof args[0] == 'object' && '__call__' in args[0]) return args[0].__call__.apply(args[1], args.slice(2));
    else return args[0].apply(args[1], args.slice(2));
}
$7a52c43e09303a0d$export$5dd42dbc3daf4a43.executor_name = $7a52c43e09303a0d$export$5dd42dbc3daf4a43.transpiler_name;
var $7a52c43e09303a0d$var$__main__ = {
    __file__: ''
};
var $7a52c43e09303a0d$var$__except__ = null;
function $7a52c43e09303a0d$export$393aa2539655a022(anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
function $7a52c43e09303a0d$export$825f7ed6d2eec4d8(aClass, methodName) {
    for (let base of aClass.__bases__){
        if (methodName in base) return base[methodName];
    }
    throw new $7a52c43e09303a0d$export$78def641a670ec8f('Superclass method not found');
}
function $7a52c43e09303a0d$export$f5e86181b8261eaa(getter, setter) {
    if (!setter) setter = function() {
    };
    return {
        get: function() {
            return getter(this);
        },
        set: function(value) {
            setter(this, value);
        },
        enumerable: true
    };
}
function $7a52c43e09303a0d$export$c357b39b00d7ea5f(anObject, name, descriptor) {
    if (!anObject.hasOwnProperty(name)) Object.defineProperty(anObject, name, descriptor);
}
function $7a52c43e09303a0d$export$b8795f4f643ce74f(condition, message) {
    if (!condition) throw $7a52c43e09303a0d$export$423da3ac4dc8f1e1(message, new Error());
}
function $7a52c43e09303a0d$export$57ab96d4276d9815(object0, object1) {
    var result = {
    };
    for(var attrib in object0)result[attrib] = object0[attrib];
    for(var attrib in object1)result[attrib] = object1[attrib];
    return result;
}
function $7a52c43e09303a0d$export$e77fc0ddaf574187(targetClass, sourceClass) {
    let fieldNames = [
        '__reprfields__',
        '__comparefields__',
        '__initfields__'
    ];
    if (sourceClass[fieldNames[0]]) {
        if (targetClass[fieldNames[0]]) for (let fieldName of fieldNames)targetClass[fieldName] = new Set([
            ...targetClass[fieldName],
            ...sourceClass[fieldName]
        ]);
        else for (let fieldName1 of fieldNames)targetClass[fieldName1] = new Set(sourceClass[fieldName1]);
    }
}
function $7a52c43e09303a0d$export$ace12271d02298fb(manager, statements) {
    if ($7a52c43e09303a0d$export$2b466c54d7dcc89c(manager, '__enter__')) try {
        manager.__enter__();
        statements();
        manager.__exit__();
    } catch (exception) {
        if (!manager.__exit__(exception.name, exception, exception.stack)) throw exception;
    }
    else {
        statements();
        manager.close();
    }
}
function $7a52c43e09303a0d$export$a15498cd1770a225(obj) {
    var aList = [];
    for(var aKey in obj)aList.push(aKey.startsWith('py_') ? aKey.slice(3) : aKey);
    aList.sort();
    return aList;
}
function $7a52c43e09303a0d$export$9c818ab5ff043c3c(obj, name, value) {
    obj[name] = value;
}
function $7a52c43e09303a0d$export$83ce2c6f0e1ab925(obj, name) {
    return name in obj ? obj[name] : obj['py_' + name];
}
function $7a52c43e09303a0d$export$2b466c54d7dcc89c(obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    } catch (exception) {
        return false;
    }
}
function $7a52c43e09303a0d$export$665fd57ad33c8992(obj, name) {
    if (name in obj) delete obj[name];
    else delete obj['py_' + name];
}
function $7a52c43e09303a0d$export$32afe04e2f076f27(element, container) {
    if (container === undefined || container === null) return false;
    if (container.__contains__ instanceof Function) return container.__contains__(element);
    else return container.indexOf ? container.indexOf(element) > -1 : container.hasOwnProperty(element);
}
function $7a52c43e09303a0d$export$b9cd5f4e00fe9d9d(attrib) {
    return attrib.startswith('__') && attrib.endswith('__') || attrib == 'constructor' || attrib.startswith('py_');
}
function $7a52c43e09303a0d$export$b97e32db9a35b03b(anObject) {
    if (anObject === undefined || anObject === null) return 0;
    if (anObject.__len__ instanceof Function) return anObject.__len__();
    if (anObject.length !== undefined) return anObject.length;
    var length = 0;
    for(var attr in anObject)if (!$7a52c43e09303a0d$export$b9cd5f4e00fe9d9d(attr)) length++;
    return length;
}
function $7a52c43e09303a0d$export$4764fff07108d6c8(any) {
    return $7a52c43e09303a0d$export$ac00127539bcff4c(any) == $7a52c43e09303a0d$export$52e47097d66e073f ? any.py_keys() : any;
}
function $7a52c43e09303a0d$export$4b03b64ffe7377ff(keyed, key) {
    var result = keyed[key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array) {
            if (key == +key && key >= 0 && keyed.length > key) return result;
            else throw $7a52c43e09303a0d$export$3da2c5942ecd42f0(key, new Error());
        } else throw $7a52c43e09303a0d$export$b49034a5197ab7c0(key, new Error());
    }
    return result;
}
function $7a52c43e09303a0d$export$ad49ffd2fb378a8e(target) {
    return target === undefined || target === null ? false : [
        'boolean',
        'number'
    ].indexOf(typeof target) >= 0 ? target : target.__bool__ instanceof Function ? target.__bool__() ? target : false : target.__len__ instanceof Function ? target.__len__() !== 0 ? target : false : target instanceof Function ? target : $7a52c43e09303a0d$export$b97e32db9a35b03b(target) !== 0 ? target : false;
}
function $7a52c43e09303a0d$export$b9785d6007f29816(any) {
    if (any == 'inf') return Infinity;
    else if (any == '-inf') return -Infinity;
    else if (any == 'nan') return NaN;
    else if (isNaN(parseFloat(any))) {
        if (any === false) return 0;
        else if (any === true) return 1;
        else throw $7a52c43e09303a0d$export$49493f0afa0d9597("could not convert string to float: '" + $7a52c43e09303a0d$export$98439511fcec5fa7(any) + "'", new Error());
    } else return +any;
}
$7a52c43e09303a0d$export$b9785d6007f29816.__name__ = 'float';
$7a52c43e09303a0d$export$b9785d6007f29816.__bases__ = [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
];
function $7a52c43e09303a0d$export$2a93bff9c5949153(any) {
    return $7a52c43e09303a0d$export$b9785d6007f29816(any) | 0;
}
$7a52c43e09303a0d$export$2a93bff9c5949153.__name__ = 'int';
$7a52c43e09303a0d$export$2a93bff9c5949153.__bases__ = [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
];
function $7a52c43e09303a0d$export$1728711e5fc883bc(any) {
    return !!$7a52c43e09303a0d$export$ad49ffd2fb378a8e(any);
}
$7a52c43e09303a0d$export$1728711e5fc883bc.__name__ = 'bool';
$7a52c43e09303a0d$export$1728711e5fc883bc.__bases__ = [
    $7a52c43e09303a0d$export$2a93bff9c5949153
];
function $7a52c43e09303a0d$export$ac00127539bcff4c(anObject) {
    var aType = typeof anObject;
    if (aType == 'object') try {
        return '__class__' in anObject ? anObject.__class__ : $7a52c43e09303a0d$export$e7ccb258e737aeac;
    } catch (exception) {
        return aType;
    }
    else return aType == 'boolean' ? $7a52c43e09303a0d$export$1728711e5fc883bc : aType == 'string' ? $7a52c43e09303a0d$export$98439511fcec5fa7 : aType == 'number' ? anObject % 1 == 0 ? $7a52c43e09303a0d$export$2a93bff9c5949153 : $7a52c43e09303a0d$export$b9785d6007f29816 : null;
}
function $7a52c43e09303a0d$export$56574c66aea06b23(aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo){
            if ($7a52c43e09303a0d$export$56574c66aea06b23(aClass, aClass2)) return true;
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) return true;
        else {
            var bases = [].slice.call(aClass2.__bases__);
            while(bases.length){
                aClass2 = bases.shift();
                if (aClass2 == classinfo) return true;
                if (aClass2.__bases__.length) bases = [].slice.call(aClass2.__bases__).concat(bases);
            }
            return false;
        }
    } catch (exception) {
        return aClass == classinfo || classinfo == $7a52c43e09303a0d$export$e7ccb258e737aeac;
    }
}
function $7a52c43e09303a0d$export$8d7522aa2c9bafd3(anObject, classinfo) {
    try {
        return '__class__' in anObject ? $7a52c43e09303a0d$export$56574c66aea06b23(anObject.__class__, classinfo) : $7a52c43e09303a0d$export$56574c66aea06b23($7a52c43e09303a0d$export$ac00127539bcff4c(anObject), classinfo);
    } catch (exception) {
        return $7a52c43e09303a0d$export$56574c66aea06b23($7a52c43e09303a0d$export$ac00127539bcff4c(anObject), classinfo);
    }
}
function $7a52c43e09303a0d$export$a6b082569013daa(anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
}
function $7a52c43e09303a0d$export$561dc6dc524e0a39(anObject) {
    try {
        return anObject.__repr__();
    } catch (exception) {
        try {
            return anObject.__str__();
        } catch (exception1) {
            try {
                if (anObject == null) return 'None';
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for(var attrib in anObject)if (!$7a52c43e09303a0d$export$b9cd5f4e00fe9d9d(attrib)) {
                        if (attrib.isnumeric()) var attribRepr = attrib;
                        else var attribRepr = '\'' + attrib + '\'';
                        if (comma) result += ', ';
                        else comma = true;
                        result += attribRepr + ': ' + $7a52c43e09303a0d$export$561dc6dc524e0a39(anObject[attrib]);
                    }
                    result += '}';
                    return result;
                } else return typeof anObject == 'boolean' ? anObject.toString().capitalize() : anObject.toString();
            } catch (exception2) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
}
function $7a52c43e09303a0d$export$5842eddaaed2e339(charCode) {
    return String.fromCharCode(charCode);
}
function $7a52c43e09303a0d$export$661efce48d5ff2f4(aChar) {
    return aChar.charCodeAt(0);
}
function $7a52c43e09303a0d$export$ffab2942a44255a3(nrOrSeq) {
    return arguments.length == 1 ? Math.max(...nrOrSeq) : Math.max(...arguments);
}
function $7a52c43e09303a0d$export$d2311d9befc976e2(nrOrSeq) {
    return arguments.length == 1 ? Math.min(...nrOrSeq) : Math.min(...arguments);
}
var $7a52c43e09303a0d$export$a81d48f05eb20df1 = Math.abs;
function $7a52c43e09303a0d$export$f9488fbfb886385d(number, ndigits) {
    if (ndigits) {
        var scale = Math.pow(10, ndigits);
        number *= scale;
    }
    var rounded = Math.round(number);
    if (rounded - number == 0.5 && rounded % 2) rounded -= 1;
    if (ndigits) rounded /= scale;
    return rounded;
}
function $7a52c43e09303a0d$export$6d56acd4fc47bc32() {
    try {
        var result = this.__next__();
        return {
            value: result,
            done: false
        };
    } catch (exception) {
        return {
            value: undefined,
            done: true
        };
    }
}
function $7a52c43e09303a0d$export$3049139bee864850() {
    var result = this.next();
    if (result.done) throw $7a52c43e09303a0d$export$6a1b750c606e0b5b(new Error());
    else return result.value;
}
function $7a52c43e09303a0d$export$b249c7580d9e97bf(iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__();
        result.next = $7a52c43e09303a0d$export$6d56acd4fc47bc32;
    } else if ('selector' in iterable) {
        var result = $7a52c43e09303a0d$export$de39b7a853fc2fd(iterable).__iter__();
        result.next = $7a52c43e09303a0d$export$6d56acd4fc47bc32;
    } else if ('next' in iterable) {
        var result = iterable;
        if (!('__next__' in result)) result.__next__ = $7a52c43e09303a0d$export$3049139bee864850;
    } else if (Symbol.iterator in iterable) {
        var result = iterable[Symbol.iterator]();
        result.__next__ = $7a52c43e09303a0d$export$3049139bee864850;
    } else throw $7a52c43e09303a0d$export$a9e628e3487000bc(new Error());
    result[Symbol.iterator] = function() {
        return result;
    };
    return result;
}
function $7a52c43e09303a0d$export$5630cf1d0b2bf3d7(iterator) {
    try {
        var result = iterator.__next__();
    } catch (exception) {
        var result1 = iterator.next();
        if (result1.done) throw $7a52c43e09303a0d$export$6a1b750c606e0b5b(new Error());
        else return result1.value;
    }
    if (result == undefined) throw $7a52c43e09303a0d$export$6a1b750c606e0b5b(new Error());
    else return result;
}
function $7a52c43e09303a0d$export$c313b96ecc5b0999(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
$7a52c43e09303a0d$export$c313b96ecc5b0999.prototype.__next__ = function() {
    if (this.index < this.iterable.length) return this.iterable[this.index++];
    else throw $7a52c43e09303a0d$export$6a1b750c606e0b5b(new Error());
};
function $7a52c43e09303a0d$export$f5dfc02c29974248(iterable) {
    this.iterable = iterable;
    this.index = 0;
}
$7a52c43e09303a0d$export$f5dfc02c29974248.prototype.next = function() {
    if (this.index < this.iterable.py_keys.length) return {
        value: this.index++,
        done: false
    };
    else return {
        value: undefined,
        done: true
    };
};
function $7a52c43e09303a0d$export$dcd28fc5cd089b39(iterable) {
    iterable = iterable.slice();
    iterable.reverse();
    return iterable;
}
function $7a52c43e09303a0d$export$969de9d6b09f6847() {
    var args = [].slice.call(arguments);
    for(var i = 0; i < args.length; i++){
        if (typeof args[i] == 'string') args[i] = args[i].split('');
        else if (!Array.isArray(args[i])) args[i] = Array.from(args[i]);
    }
    var shortest = args.length == 0 ? [] : args.reduce(function(array0, array1) {
        return array0.length < array1.length ? array0 : array1;
    });
    return shortest.map(function(current, index) {
        return args.map(function(current1) {
            return current1[index];
        });
    });
}
function $7a52c43e09303a0d$export$70cf4d894226abe5(start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) step = 1;
    if (step > 0 && start >= stop || step < 0 && start <= stop) return [];
    var result2 = [];
    for(var i = start; step > 0 ? i < stop : i > stop; i += step)result2.push(i);
    return result2;
}
function $7a52c43e09303a0d$export$38c830da02e56d1e(iterable) {
    for (let item of iterable){
        if ($7a52c43e09303a0d$export$1728711e5fc883bc(item)) return true;
    }
    return false;
}
function $7a52c43e09303a0d$export$8dbdea330bbd6b3c(iterable) {
    for (let item of iterable){
        if (!$7a52c43e09303a0d$export$1728711e5fc883bc(item)) return false;
    }
    return true;
}
function $7a52c43e09303a0d$export$9f29eb1d42ccad4f(iterable) {
    let result2 = 0;
    for (let item of iterable)result2 += item;
    return result2;
}
function $7a52c43e09303a0d$export$2ebf3a9cc1917cf7(iterable) {
    return $7a52c43e09303a0d$export$969de9d6b09f6847($7a52c43e09303a0d$export$70cf4d894226abe5($7a52c43e09303a0d$export$b97e32db9a35b03b(iterable)), iterable);
}
function $7a52c43e09303a0d$export$e214a2731b80666a(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result2 = {
        };
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result2[attrib] = anObject[attrib];
        return result2;
    }
}
function $7a52c43e09303a0d$export$ddda085e115d9e5c(anObject) {
    if (anObject == null || typeof anObject == "object") return anObject;
    else {
        var result3 = {
        };
        for(var attrib in obj)if (anObject.hasOwnProperty(attrib)) result3[attrib] = $7a52c43e09303a0d$export$ddda085e115d9e5c(anObject[attrib]);
        return result3;
    }
}
function $7a52c43e09303a0d$export$de39b7a853fc2fd(iterable) {
    let instance = iterable ? Array.from(iterable) : [];
    return instance;
}
Array.prototype.__class__ = $7a52c43e09303a0d$export$de39b7a853fc2fd;
$7a52c43e09303a0d$export$de39b7a853fc2fd.__name__ = 'list';
$7a52c43e09303a0d$export$de39b7a853fc2fd.__bases__ = [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
];
Array.prototype.__iter__ = function() {
    return new $7a52c43e09303a0d$export$c313b96ecc5b0999(this);
};
Array.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    else if (stop > this.length) stop = this.length;
    if (step == 1) return Array.prototype.slice.call(this, start, stop);
    let result4 = $7a52c43e09303a0d$export$de39b7a853fc2fd([]);
    for(let index = start; index < stop; index += step)result4.push(this[index]);
    return result4;
};
Array.prototype.__setslice__ = function(start, stop, step, source) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    if (step == null) Array.prototype.splice.apply(this, [
        start,
        stop - start
    ].concat(source));
    else {
        let sourceIndex = 0;
        for(let targetIndex = start; targetIndex < stop; targetIndex += step)this[targetIndex] = source[sourceIndex++];
    }
};
Array.prototype.__repr__ = function() {
    if (this.__class__ == $7a52c43e09303a0d$export$77f8d2fc923b14e3 && !this.length) return 'set()';
    let result4 = !this.__class__ || this.__class__ == $7a52c43e09303a0d$export$de39b7a853fc2fd ? '[' : this.__class__ == $7a52c43e09303a0d$export$2f0714ac78eee100 ? '(' : '{';
    for(let index = 0; index < this.length; index++){
        if (index) result4 += ', ';
        result4 += $7a52c43e09303a0d$export$561dc6dc524e0a39(this[index]);
    }
    if (this.__class__ == $7a52c43e09303a0d$export$2f0714ac78eee100 && this.length == 1) result4 += ',';
    result4 += !this.__class__ || this.__class__ == $7a52c43e09303a0d$export$de39b7a853fc2fd ? ']' : this.__class__ == $7a52c43e09303a0d$export$2f0714ac78eee100 ? ')' : '}';
    return result4;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function(element) {
    this.push(element);
};
Array.prototype.py_clear = function() {
    this.length = 0;
};
Array.prototype.extend = function(aList) {
    this.push.apply(this, aList);
};
Array.prototype.insert = function(index, element) {
    this.splice(index, 0, element);
};
Array.prototype.remove = function(element) {
    let index = this.indexOf(element);
    if (index == -1) throw $7a52c43e09303a0d$export$49493f0afa0d9597("list.remove(x): x not in list", new Error());
    this.splice(index, 1);
};
Array.prototype.index = function(element) {
    return this.indexOf(element);
};
Array.prototype.py_pop = function(index) {
    if (index == undefined) return this.pop();
    else return this.splice(index, 1)[0];
};
Array.prototype.py_sort = function() {
    $7a52c43e09303a0d$export$2a0c251c6aa4dd57.apply(null, [
        this
    ].concat([].slice.apply(arguments)));
};
Array.prototype.__add__ = function(aList) {
    return $7a52c43e09303a0d$export$de39b7a853fc2fd(this.concat(aList));
};
Array.prototype.__mul__ = function(scalar) {
    let result4 = this;
    for(let i = 1; i < scalar; i++)result4 = result4.concat(this);
    return result4;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
function $7a52c43e09303a0d$export$2f0714ac78eee100(iterable) {
    let instance = iterable ? [].slice.apply(iterable) : [];
    instance.__class__ = $7a52c43e09303a0d$export$2f0714ac78eee100;
    return instance;
}
$7a52c43e09303a0d$export$2f0714ac78eee100.__name__ = 'tuple';
$7a52c43e09303a0d$export$2f0714ac78eee100.__bases__ = [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
];
function $7a52c43e09303a0d$export$77f8d2fc923b14e3(iterable) {
    let instance = [];
    if (iterable) for(let index = 0; index < iterable.length; index++)instance.add(iterable[index]);
    instance.__class__ = $7a52c43e09303a0d$export$77f8d2fc923b14e3;
    return instance;
}
$7a52c43e09303a0d$export$77f8d2fc923b14e3.__name__ = 'set';
$7a52c43e09303a0d$export$77f8d2fc923b14e3.__bases__ = [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
];
Array.prototype.__bindexOf__ = function(element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while(mindex <= maxdex){
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this[index] + '';
        if (middle < element) mindex = index + 1;
        else if (middle > element) maxdex = index - 1;
        else return index;
    }
    return -1;
};
Array.prototype.add = function(element) {
    if (this.indexOf(element) == -1) this.push(element);
};
Array.prototype.discard = function(element) {
    var index = this.indexOf(element);
    if (index != -1) this.splice(index, 1);
};
Array.prototype.isdisjoint = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) != -1) return false;
    }
    return true;
};
Array.prototype.issuperset = function(other) {
    this.sort();
    for(let i = 0; i < other.length; i++){
        if (this.__bindexOf__(other[i]) == -1) return false;
    }
    return true;
};
Array.prototype.issubset = function(other) {
    return $7a52c43e09303a0d$export$77f8d2fc923b14e3(other.slice()).issuperset(this);
};
Array.prototype.union = function(other) {
    let result4 = $7a52c43e09303a0d$export$77f8d2fc923b14e3(this.slice().sort());
    for(let i = 0; i < other.length; i++)if (result4.__bindexOf__(other[i]) == -1) result4.push(other[i]);
    return result4;
};
Array.prototype.intersection = function(other) {
    this.sort();
    let result4 = $7a52c43e09303a0d$export$77f8d2fc923b14e3();
    for(let i = 0; i < other.length; i++)if (this.__bindexOf__(other[i]) != -1) result4.push(other[i]);
    return result4;
};
Array.prototype.difference = function(other) {
    let sother = $7a52c43e09303a0d$export$77f8d2fc923b14e3(other.slice().sort());
    let result4 = $7a52c43e09303a0d$export$77f8d2fc923b14e3();
    for(let i = 0; i < this.length; i++)if (sother.__bindexOf__(this[i]) == -1) result4.push(this[i]);
    return result4;
};
Array.prototype.symmetric_difference = function(other) {
    return this.union(other).difference(this.intersection(other));
};
Array.prototype.py_update = function() {
    let updated = [].concat.apply(this.slice(), arguments).sort();
    this.py_clear();
    for(let i = 0; i < updated.length; i++)if (updated[i] != updated[i - 1]) this.push(updated[i]);
};
Array.prototype.__eq__ = function(other) {
    if (this.length != other.length) return false;
    if (this.__class__ == $7a52c43e09303a0d$export$77f8d2fc923b14e3) {
        this.sort();
        other.sort();
    }
    for(let i = 0; i < this.length; i++){
        if (this[i] != other[i]) return false;
    }
    return true;
};
Array.prototype.__ne__ = function(other) {
    return !this.__eq__(other);
};
Array.prototype.__le__ = function(other) {
    if (this.__class__ == $7a52c43e09303a0d$export$77f8d2fc923b14e3) return this.issubset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] > other[i]) return false;
            else if (this[i] < other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__ge__ = function(other) {
    if (this.__class__ == $7a52c43e09303a0d$export$77f8d2fc923b14e3) return this.issuperset(other);
    else {
        for(let i = 0; i < this.length; i++){
            if (this[i] < other[i]) return false;
            else if (this[i] > other[i]) return true;
        }
        return true;
    }
};
Array.prototype.__lt__ = function(other) {
    return this.__class__ == $7a52c43e09303a0d$export$77f8d2fc923b14e3 ? this.issubset(other) && !this.issuperset(other) : !this.__ge__(other);
};
Array.prototype.__gt__ = function(other) {
    return this.__class__ == $7a52c43e09303a0d$export$77f8d2fc923b14e3 ? this.issuperset(other) && !this.issubset(other) : !this.__le__(other);
};
function $7a52c43e09303a0d$export$7f427599be6e24c7(bytable, encoding) {
    if (bytable == undefined) return new Uint8Array(0);
    else {
        let aType = $7a52c43e09303a0d$export$ac00127539bcff4c(bytable);
        if (aType == $7a52c43e09303a0d$export$2a93bff9c5949153) return new Uint8Array(bytable);
        else if (aType == $7a52c43e09303a0d$export$98439511fcec5fa7) {
            let aBytes = new Uint8Array($7a52c43e09303a0d$export$b97e32db9a35b03b(bytable));
            for(let i = 0; i < $7a52c43e09303a0d$export$b97e32db9a35b03b(bytable); i++)aBytes[i] = bytable.charCodeAt(i);
            return aBytes;
        } else if (aType == $7a52c43e09303a0d$export$de39b7a853fc2fd || aType == $7a52c43e09303a0d$export$2f0714ac78eee100) return new Uint8Array(bytable);
        else throw $7a52c43e09303a0d$export$619bfe8fc1980243;
    }
}
var $7a52c43e09303a0d$export$4303199b5062ddc2 = $7a52c43e09303a0d$export$7f427599be6e24c7;
Uint8Array.prototype.__add__ = function(aBytes) {
    let result4 = new Uint8Array(this.length + aBytes.length);
    result4.set(this);
    result4.set(aBytes, this.length);
    return result4;
};
Uint8Array.prototype.__mul__ = function(scalar) {
    let result4 = new Uint8Array(scalar * this.length);
    for(let i = 0; i < scalar; i++)result4.set(this, i * this.length);
    return result4;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
function $7a52c43e09303a0d$export$98439511fcec5fa7(stringable) {
    if (typeof stringable === 'number') return stringable.toString();
    else try {
        return stringable.__str__();
    } catch (exception) {
        try {
            return $7a52c43e09303a0d$export$561dc6dc524e0a39(stringable);
        } catch (exception1) {
            return String(stringable);
        }
    }
}
String.prototype.__class__ = $7a52c43e09303a0d$export$98439511fcec5fa7;
$7a52c43e09303a0d$export$98439511fcec5fa7.__name__ = 'str';
$7a52c43e09303a0d$export$98439511fcec5fa7.__bases__ = [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
];
String.prototype.__iter__ = function() {
    new $7a52c43e09303a0d$export$c313b96ecc5b0999(this);
};
String.prototype.__repr__ = function() {
    return (this.indexOf('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"').py_replace('\t', '\\t').py_replace('\n', '\\n');
};
String.prototype.__str__ = function() {
    return this;
};
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.endswith = function(suffix) {
    if (suffix instanceof Array) for(var i = 0; i < suffix.length; i++){
        if (this.slice(-suffix[i].length) == suffix[i]) return true;
    }
    else return suffix == '' || this.slice(-suffix.length) == suffix;
    return false;
};
String.prototype.find = function(sub, start) {
    return this.indexOf(sub, start);
};
String.prototype.__getslice__ = function(start, stop, step) {
    if (start < 0) start = this.length + start;
    if (stop == null) stop = this.length;
    else if (stop < 0) stop = this.length + stop;
    var result4 = '';
    if (step == 1) result4 = this.substring(start, stop);
    else for(var index = start; index < stop; index += step)result4 = result4.concat(this.charAt(index));
    return result4;
};
$7a52c43e09303a0d$export$c357b39b00d7ea5f(String.prototype, 'format', {
    get: function() {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self) {
            var args = $7a52c43e09303a0d$export$2f0714ac78eee100([].slice.apply(arguments).slice(1));
            var autoIndex = 0;
            return self.replace(/\{(\w*)\}/g, function(match, key) {
                if (key == '') key = autoIndex++;
                if (key == +key) return args[key] === undefined ? match : $7a52c43e09303a0d$export$98439511fcec5fa7(args[key]);
                else {
                    for(var index = 0; index < args.length; index++){
                        if (typeof args[index] == 'object' && args[index][key] !== undefined) return $7a52c43e09303a0d$export$98439511fcec5fa7(args[index][key]);
                    }
                    return match;
                }
            });
        });
    },
    enumerable: true
});
String.prototype.isalnum = function() {
    return /^[0-9a-zA-Z]{1,}$/.test(this);
};
String.prototype.isalpha = function() {
    return /^[a-zA-Z]{1,}$/.test(this);
};
String.prototype.isdecimal = function() {
    return /^[0-9]{1,}$/.test(this);
};
String.prototype.isdigit = function() {
    return this.isdecimal();
};
String.prototype.islower = function() {
    return /^[a-z]{1,}$/.test(this);
};
String.prototype.isupper = function() {
    return /^[A-Z]{1,}$/.test(this);
};
String.prototype.isspace = function() {
    return /^[\s]{1,}$/.test(this);
};
String.prototype.isnumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
};
String.prototype.join = function(strings) {
    strings = Array.from(strings);
    return strings.join(this);
};
String.prototype.lower = function() {
    return this.toLowerCase();
};
String.prototype.py_replace = function(old, aNew, maxreplace) {
    return this.split(old, maxreplace).join(aNew);
};
String.prototype.lstrip = function() {
    return this.replace(/^\s*/g, '');
};
String.prototype.rfind = function(sub, start) {
    return this.lastIndexOf(sub, start);
};
String.prototype.rsplit = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result4 = stripped.split(sep);
        if (maxsplit < result4.length) {
            var maxrsplit = result4.length - maxsplit;
            return [
                result4.slice(0, maxrsplit).join(sep)
            ].concat(result4.slice(maxrsplit));
        } else return result4;
    }
};
String.prototype.rstrip = function() {
    return this.replace(/\s*$/g, '');
};
String.prototype.py_split = function(sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip();
    } else var stripped = this;
    if (maxsplit == undefined || maxsplit == -1) return stripped.split(sep);
    else {
        var result5 = stripped.split(sep);
        if (maxsplit < result5.length) return result5.slice(0, maxsplit).concat([
            result5.slice(maxsplit).join(sep)
        ]);
        else return result5;
    }
};
String.prototype.startswith = function(prefix) {
    if (prefix instanceof Array) for(var i = 0; i < prefix.length; i++){
        if (this.indexOf(prefix[i]) == 0) return true;
    }
    else return this.indexOf(prefix) == 0;
    return false;
};
String.prototype.strip = function() {
    return this.trim();
};
String.prototype.upper = function() {
    return this.toUpperCase();
};
String.prototype.__mul__ = function(scalar) {
    var result6 = '';
    for(var i = 0; i < scalar; i++)result6 = result6 + this;
    return result6;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function $7a52c43e09303a0d$var$__contains__(element) {
    return this.hasOwnProperty(element);
}
function $7a52c43e09303a0d$var$__keys__() {
    var keys = [];
    for(var attrib in this)if (!$7a52c43e09303a0d$export$b9cd5f4e00fe9d9d(attrib)) keys.push(attrib);
    return keys;
}
function $7a52c43e09303a0d$var$__items__() {
    var items = [];
    for(var attrib in this)if (!$7a52c43e09303a0d$export$b9cd5f4e00fe9d9d(attrib)) items.push([
        attrib,
        this[attrib]
    ]);
    return items;
}
function $7a52c43e09303a0d$var$__del__(key) {
    delete this[key];
}
function $7a52c43e09303a0d$var$__clear__() {
    for(var attrib in this)delete this[attrib];
}
function $7a52c43e09303a0d$var$__getdefault__(aKey, aDefault) {
    var result6 = this[aKey];
    if (result6 == undefined) result6 = this['py_' + aKey];
    return result6 == undefined ? aDefault == undefined ? null : aDefault : result6;
}
function $7a52c43e09303a0d$var$__setdefault__(aKey, aDefault) {
    var result6 = this[aKey];
    if (result6 != undefined) return result6;
    var val = aDefault == undefined ? null : aDefault;
    this[aKey] = val;
    return val;
}
function $7a52c43e09303a0d$var$__pop__(aKey, aDefault) {
    var result6 = this[aKey];
    if (result6 != undefined) {
        delete this[aKey];
        return result6;
    } else {
        if (aDefault === undefined) throw $7a52c43e09303a0d$export$b49034a5197ab7c0(aKey, new Error());
    }
    return aDefault;
}
function $7a52c43e09303a0d$var$__popitem__() {
    var aKey = Object.keys(this)[0];
    if (aKey == null) throw $7a52c43e09303a0d$export$b49034a5197ab7c0("popitem(): dictionary is empty", new Error());
    var result6 = $7a52c43e09303a0d$export$2f0714ac78eee100([
        aKey,
        this[aKey]
    ]);
    delete this[aKey];
    return result6;
}
function $7a52c43e09303a0d$var$__update__(aDict) {
    for(var aKey in aDict)this[aKey] = aDict[aKey];
}
function $7a52c43e09303a0d$var$__values__() {
    var values = [];
    for(var attrib in this)if (!$7a52c43e09303a0d$export$b9cd5f4e00fe9d9d(attrib)) values.push(this[attrib]);
    return values;
}
function $7a52c43e09303a0d$var$__dgetitem__(aKey) {
    return this[aKey];
}
function $7a52c43e09303a0d$var$__dsetitem__(aKey, aValue) {
    this[aKey] = aValue;
}
function $7a52c43e09303a0d$export$52e47097d66e073f(objectOrPairs) {
    var instance = {
    };
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) for(var index = 0; index < objectOrPairs.length; index++){
            var pair = objectOrPairs[index];
            if (!(pair instanceof Array) || pair.length != 2) throw $7a52c43e09303a0d$export$49493f0afa0d9597("dict update sequence element #" + index + " has length " + pair.length + "; 2 is required", new Error());
            var key = pair[0];
            var val = pair[1];
            if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                if (!$7a52c43e09303a0d$export$8d7522aa2c9bafd3(objectOrPairs, $7a52c43e09303a0d$export$52e47097d66e073f)) val = $7a52c43e09303a0d$export$52e47097d66e073f(val);
            }
            instance[key] = val;
        }
    } else {
        if ($7a52c43e09303a0d$export$8d7522aa2c9bafd3(objectOrPairs, $7a52c43e09303a0d$export$52e47097d66e073f)) {
            var aKeys = objectOrPairs.py_keys();
            for(var index = 0; index < aKeys.length; index++){
                var key = aKeys[index];
                instance[key] = objectOrPairs[key];
            }
        } else if (objectOrPairs instanceof Object) instance = objectOrPairs;
        else throw $7a52c43e09303a0d$export$49493f0afa0d9597("Invalid type of object for dict creation", new Error());
    }
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, '__class__', {
        value: $7a52c43e09303a0d$export$52e47097d66e073f,
        enumerable: false,
        writable: true
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, '__contains__', {
        value: $7a52c43e09303a0d$var$__contains__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_keys', {
        value: $7a52c43e09303a0d$var$__keys__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, '__iter__', {
        value: function() {
            new $7a52c43e09303a0d$export$c313b96ecc5b0999(this.py_keys());
        },
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, Symbol.iterator, {
        value: function() {
            new $7a52c43e09303a0d$export$f5dfc02c29974248(this.py_keys());
        },
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_items', {
        value: $7a52c43e09303a0d$var$__items__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_del', {
        value: $7a52c43e09303a0d$var$__del__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_clear', {
        value: $7a52c43e09303a0d$var$__clear__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_get', {
        value: $7a52c43e09303a0d$var$__getdefault__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_setdefault', {
        value: $7a52c43e09303a0d$var$__setdefault__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_pop', {
        value: $7a52c43e09303a0d$var$__pop__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_popitem', {
        value: $7a52c43e09303a0d$var$__popitem__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_update', {
        value: $7a52c43e09303a0d$var$__update__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, 'py_values', {
        value: $7a52c43e09303a0d$var$__values__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, '__getitem__', {
        value: $7a52c43e09303a0d$var$__dgetitem__,
        enumerable: false
    });
    $7a52c43e09303a0d$export$c357b39b00d7ea5f(instance, '__setitem__', {
        value: $7a52c43e09303a0d$var$__dsetitem__,
        enumerable: false
    });
    return instance;
}
$7a52c43e09303a0d$export$52e47097d66e073f.__name__ = 'dict';
$7a52c43e09303a0d$export$52e47097d66e073f.__bases__ = [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
];
function $7a52c43e09303a0d$var$__setdoc__(docString) {
    this.__doc__ = docString;
    return this;
}
$7a52c43e09303a0d$export$c357b39b00d7ea5f(Function.prototype, '__setdoc__', {
    value: $7a52c43e09303a0d$var$__setdoc__,
    enumerable: false
});
function $7a52c43e09303a0d$export$e5bec93a1a39745b(a, b) {
    if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return a % b;
}
function $7a52c43e09303a0d$export$3268f8b0808f73d3(a, b) {
    if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function $7a52c43e09303a0d$export$4372eaaae3922090(a, b) {
    if (typeof a == 'object' && '__pow__' in a) return a.__pow__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
var $7a52c43e09303a0d$export$e14c41d1916d1752 = $7a52c43e09303a0d$export$4372eaaae3922090;
function $7a52c43e09303a0d$export$c699ed6490bd1bef(a) {
    if (typeof a == 'object' && '__neg__' in a) return a.__neg__();
    else return -a;
}
function $7a52c43e09303a0d$export$a9a03daf42bf4d51(a, b) {
    return a.__matmul__(b);
}
function $7a52c43e09303a0d$export$9e39069e4c5987f9(a, b) {
    if (typeof a == 'object' && '__mul__' in a) return a.__mul__(b);
    else if (typeof b == 'object' && '__rmul__' in b) return b.__rmul__(a);
    else if (typeof a == 'string') return a.__mul__(b);
    else if (typeof b == 'string') return b.__rmul__(a);
    else return a * b;
}
function $7a52c43e09303a0d$export$84ce19e4b7e994f0(a, b) {
    if (typeof a == 'object' && '__truediv__' in a) return a.__truediv__(b);
    else if (typeof b == 'object' && '__rtruediv__' in b) return b.__rtruediv__(a);
    else if (typeof a == 'object' && '__div__' in a) return a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return b.__rdiv__(a);
    else return a / b;
}
function $7a52c43e09303a0d$export$344573d1b8ce1d6(a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) return a.__floordiv__(b);
    else if (typeof b == 'object' && '__rfloordiv__' in b) return b.__rfloordiv__(a);
    else if (typeof a == 'object' && '__div__' in a) return a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return b.__rdiv__(a);
    else return Math.floor(a / b);
}
function $7a52c43e09303a0d$export$3e5b2171fbed0036(a, b) {
    if (typeof a == 'object' && '__add__' in a) return a.__add__(b);
    else if (typeof b == 'object' && '__radd__' in b) return b.__radd__(a);
    else return a + b;
}
function $7a52c43e09303a0d$export$cd0877e06f3afc1a(a, b) {
    if (typeof a == 'object' && '__sub__' in a) return a.__sub__(b);
    else if (typeof b == 'object' && '__rsub__' in b) return b.__rsub__(a);
    else return a - b;
}
function $7a52c43e09303a0d$export$87917b655d969139(a, b) {
    if (typeof a == 'object' && '__lshift__' in a) return a.__lshift__(b);
    else if (typeof b == 'object' && '__rlshift__' in b) return b.__rlshift__(a);
    else return a << b;
}
function $7a52c43e09303a0d$export$22f325c9758db18d(a, b) {
    if (typeof a == 'object' && '__rshift__' in a) return a.__rshift__(b);
    else if (typeof b == 'object' && '__rrshift__' in b) return b.__rrshift__(a);
    else return a >> b;
}
function $7a52c43e09303a0d$export$f4712291cd32743e(a, b) {
    if (typeof a == 'object' && '__or__' in a) return a.__or__(b);
    else if (typeof b == 'object' && '__ror__' in b) return b.__ror__(a);
    else return a | b;
}
function $7a52c43e09303a0d$export$c20dce76a544f803(a, b) {
    if (typeof a == 'object' && '__xor__' in a) return a.__xor__(b);
    else if (typeof b == 'object' && '__rxor__' in b) return b.__rxor__(a);
    else return a ^ b;
}
function $7a52c43e09303a0d$export$30e7c159ae919b4f(a, b) {
    if (typeof a == 'object' && '__and__' in a) return a.__and__(b);
    else if (typeof b == 'object' && '__rand__' in b) return b.__rand__(a);
    else return a & b;
}
function $7a52c43e09303a0d$export$e0faacef56b5d03b(a, b) {
    if (typeof a == 'object' && '__eq__' in a) return a.__eq__(b);
    else return a == b;
}
function $7a52c43e09303a0d$export$1def26801bb20af8(a, b) {
    if (typeof a == 'object' && '__ne__' in a) return a.__ne__(b);
    else return a != b;
}
function $7a52c43e09303a0d$export$4c9a34d1dccc6deb(a, b) {
    if (typeof a == 'object' && '__lt__' in a) return a.__lt__(b);
    else return a < b;
}
function $7a52c43e09303a0d$export$2c99c46362173f3e(a, b) {
    if (typeof a == 'object' && '__le__' in a) return a.__le__(b);
    else return a <= b;
}
function $7a52c43e09303a0d$export$691437c4d9c42200(a, b) {
    if (typeof a == 'object' && '__gt__' in a) return a.__gt__(b);
    else return a > b;
}
function $7a52c43e09303a0d$export$7885bf0ddd4e6b90(a, b) {
    if (typeof a == 'object' && '__ge__' in a) return a.__ge__(b);
    else return a >= b;
}
function $7a52c43e09303a0d$export$6db056bcf8e2c6d0(a, b) {
    if ('__imatmul__' in a) return a.__imatmul__(b);
    else return a.__matmul__(b);
}
function $7a52c43e09303a0d$export$9439cae24a8af9a7(a, b) {
    if (typeof a == 'object' && '__pow__' in a) return a.__ipow__(b);
    else if (typeof a == 'object' && '__ipow__' in a) return a.__pow__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rpow__(a);
    else return Math.pow(a, b);
}
function $7a52c43e09303a0d$export$b135039379adb6e3(a, b) {
    if (typeof a == 'object' && '__imod__' in a) return a.__ismod__(b);
    else if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rpow__' in b) return b.__rmod__(a);
    else return a % b;
}
function $7a52c43e09303a0d$export$d3257f72eb9f27f7(a, b) {
    if (typeof a == 'object' && '__imod__' in a) return a.__imod__(b);
    else if (typeof a == 'object' && '__mod__' in a) return a.__mod__(b);
    else if (typeof b == 'object' && '__rmod__' in b) return b.__rmod__(a);
    else return (a % b + b) % b;
}
function $7a52c43e09303a0d$export$c9fb00fc9b60e3f5(a, b) {
    if (typeof a == 'object' && '__imul__' in a) return a.__imul__(b);
    else if (typeof a == 'object' && '__mul__' in a) return a = a.__mul__(b);
    else if (typeof b == 'object' && '__rmul__' in b) return a = b.__rmul__(a);
    else if (typeof a == 'string') return a = a.__mul__(b);
    else if (typeof b == 'string') return a = b.__rmul__(a);
    else return a *= b;
}
function $7a52c43e09303a0d$export$e4728c38258dd6c7(a, b) {
    if (typeof a == 'object' && '__idiv__' in a) return a.__idiv__(b);
    else if (typeof a == 'object' && '__div__' in a) return a = a.__div__(b);
    else if (typeof b == 'object' && '__rdiv__' in b) return a = b.__rdiv__(a);
    else return a /= b;
}
function $7a52c43e09303a0d$export$b857b8e2bd322a1a(a, b) {
    if (typeof a == 'object' && '__iadd__' in a) return a.__iadd__(b);
    else if (typeof a == 'object' && '__add__' in a) return a = a.__add__(b);
    else if (typeof b == 'object' && '__radd__' in b) return a = b.__radd__(a);
    else return a += b;
}
function $7a52c43e09303a0d$export$7d05b4c537a110bd(a, b) {
    if (typeof a == 'object' && '__isub__' in a) return a.__isub__(b);
    else if (typeof a == 'object' && '__sub__' in a) return a = a.__sub__(b);
    else if (typeof b == 'object' && '__rsub__' in b) return a = b.__rsub__(a);
    else return a -= b;
}
function $7a52c43e09303a0d$export$7ed8d0536b015c0f(a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) return a.__ilshift__(b);
    else if (typeof a == 'object' && '__lshift__' in a) return a = a.__lshift__(b);
    else if (typeof b == 'object' && '__rlshift__' in b) return a = b.__rlshift__(a);
    else return a <<= b;
}
function $7a52c43e09303a0d$export$6583d49551d1e6d8(a, b) {
    if (typeof a == 'object' && '__irshift__' in a) return a.__irshift__(b);
    else if (typeof a == 'object' && '__rshift__' in a) return a = a.__rshift__(b);
    else if (typeof b == 'object' && '__rrshift__' in b) return a = b.__rrshift__(a);
    else return a >>= b;
}
function $7a52c43e09303a0d$export$8f9636aa253071c3(a, b) {
    if (typeof a == 'object' && '__ior__' in a) return a.__ior__(b);
    else if (typeof a == 'object' && '__or__' in a) return a = a.__or__(b);
    else if (typeof b == 'object' && '__ror__' in b) return a = b.__ror__(a);
    else return a |= b;
}
function $7a52c43e09303a0d$export$9aef24b6a56f2bac(a, b) {
    if (typeof a == 'object' && '__ixor__' in a) return a.__ixor__(b);
    else if (typeof a == 'object' && '__xor__' in a) return a = a.__xor__(b);
    else if (typeof b == 'object' && '__rxor__' in b) return a = b.__rxor__(a);
    else return a ^= b;
}
function $7a52c43e09303a0d$export$b0b70e8440e471f5(a, b) {
    if (typeof a == 'object' && '__iand__' in a) return a.__iand__(b);
    else if (typeof a == 'object' && '__and__' in a) return a = a.__and__(b);
    else if (typeof b == 'object' && '__rand__' in b) return a = b.__rand__(a);
    else return a &= b;
}
function $7a52c43e09303a0d$export$74fbb9d3c8978565(container, key) {
    if (typeof container == 'object' && '__getitem__' in container) return container.__getitem__(key);
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) return container[container.length + key];
    else return container[key];
}
function $7a52c43e09303a0d$export$fba2007421f23e65(container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) container.__setitem__(key, value);
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) container[container.length + key] = value;
    else container[key] = value;
}
function $7a52c43e09303a0d$export$35c08a6f14dca58c(container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) return container.__getitem__([
        lower,
        upper,
        step
    ]);
    else return container.__getslice__(lower, upper, step);
}
function $7a52c43e09303a0d$export$1b030746ab9f11c1(container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) container.__setitem__([
        lower,
        upper,
        step
    ], value);
    else container.__setslice__(lower, upper, step, value);
}
var $7a52c43e09303a0d$export$9480c4ab56a1a5f = $7a52c43e09303a0d$export$b1b3a64966170e2('BaseException', [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
], {
    __module__: $7a52c43e09303a0d$var$__name__
});
var $7a52c43e09303a0d$export$78def641a670ec8f = $7a52c43e09303a0d$export$b1b3a64966170e2('Exception', [
    $7a52c43e09303a0d$export$9480c4ab56a1a5f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self) {
            var kwargs = $7a52c43e09303a0d$export$52e47097d66e073f();
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        default:
                            kwargs[__attrib0__] = __allkwargs0__[__attrib0__];
                    }
                    delete kwargs.__kwargtrans__;
                }
                var args = $7a52c43e09303a0d$export$2f0714ac78eee100([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = $7a52c43e09303a0d$export$2f0714ac78eee100();
            self.__args__ = args;
            if (kwargs.error != null) self.stack = kwargs.error.stack;
            else if (Error) self.stack = new Error().stack;
            else self.stack = 'No stack trace available';
        });
    },
    get __repr__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self) {
            if ($7a52c43e09303a0d$export$b97e32db9a35b03b(self.__args__) > 1) return '{}{}'.format(self.__class__.__name__, $7a52c43e09303a0d$export$561dc6dc524e0a39($7a52c43e09303a0d$export$2f0714ac78eee100(self.__args__)));
            else if ($7a52c43e09303a0d$export$b97e32db9a35b03b(self.__args__)) return '{}({})'.format(self.__class__.__name__, $7a52c43e09303a0d$export$561dc6dc524e0a39(self.__args__[0]));
            else return '{}()'.format(self.__class__.__name__);
        });
    },
    get __str__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self) {
            if ($7a52c43e09303a0d$export$b97e32db9a35b03b(self.__args__) > 1) return $7a52c43e09303a0d$export$98439511fcec5fa7($7a52c43e09303a0d$export$2f0714ac78eee100(self.__args__));
            else if ($7a52c43e09303a0d$export$b97e32db9a35b03b(self.__args__)) return $7a52c43e09303a0d$export$98439511fcec5fa7(self.__args__[0]);
            else return '';
        });
    }
});
var $7a52c43e09303a0d$export$a9e628e3487000bc = $7a52c43e09303a0d$export$b1b3a64966170e2('IterableError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, "Can't iterate over non-iterable", $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$6a1b750c606e0b5b = $7a52c43e09303a0d$export$b1b3a64966170e2('StopIteration', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, 'Iterator exhausted', $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$49493f0afa0d9597 = $7a52c43e09303a0d$export$b1b3a64966170e2('ValueError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, message, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, message, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$b49034a5197ab7c0 = $7a52c43e09303a0d$export$b1b3a64966170e2('KeyError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, message, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, message, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$423da3ac4dc8f1e1 = $7a52c43e09303a0d$export$b1b3a64966170e2('AssertionError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, message, error) {
            if (message) $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, message, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
            else $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$7dddeee6d9703b33 = $7a52c43e09303a0d$export$b1b3a64966170e2('NotImplementedError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, message, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, message, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$3da2c5942ecd42f0 = $7a52c43e09303a0d$export$b1b3a64966170e2('IndexError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, message, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, message, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$35fb84e44dcd6127 = $7a52c43e09303a0d$export$b1b3a64966170e2('AttributeError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, message, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, message, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$619bfe8fc1980243 = $7a52c43e09303a0d$export$b1b3a64966170e2('py_TypeError', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, message, error) {
            $7a52c43e09303a0d$export$78def641a670ec8f.__init__(self, message, $7a52c43e09303a0d$export$393aa2539655a022({
                error: error
            }));
        });
    }
});
var $7a52c43e09303a0d$export$8cba58e73850ba00 = $7a52c43e09303a0d$export$b1b3a64966170e2('Warning', [
    $7a52c43e09303a0d$export$78def641a670ec8f
], {
    __module__: $7a52c43e09303a0d$var$__name__
});
var $7a52c43e09303a0d$export$3da26684189ef249 = $7a52c43e09303a0d$export$b1b3a64966170e2('UserWarning', [
    $7a52c43e09303a0d$export$8cba58e73850ba00
], {
    __module__: $7a52c43e09303a0d$var$__name__
});
var $7a52c43e09303a0d$export$42834bb95ca43711 = $7a52c43e09303a0d$export$b1b3a64966170e2('DeprecationWarning', [
    $7a52c43e09303a0d$export$8cba58e73850ba00
], {
    __module__: $7a52c43e09303a0d$var$__name__
});
var $7a52c43e09303a0d$export$7cc88c256290a19c = $7a52c43e09303a0d$export$b1b3a64966170e2('RuntimeWarning', [
    $7a52c43e09303a0d$export$8cba58e73850ba00
], {
    __module__: $7a52c43e09303a0d$var$__name__
});
var $7a52c43e09303a0d$export$2a0c251c6aa4dd57 = function(iterable, key, reverse) {
    if (typeof key == 'undefined' || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == 'undefined' || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case 'iterable':
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case 'key':
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case 'reverse':
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if (key) iterable.sort(function __lambda__(a, b) {
        if (arguments.length) {
            var __ilastarg0__ = arguments.length - 1;
            if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                var __allkwargs0__ = arguments[__ilastarg0__--];
                for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                    case 'a':
                        var a = __allkwargs0__[__attrib0__];
                        break;
                    case 'b':
                        var b = __allkwargs0__[__attrib0__];
                        break;
                }
            }
        }
        return key(a) > key(b) ? 1 : -1;
    });
    else iterable.sort();
    if (reverse) iterable.reverse();
};
var $7a52c43e09303a0d$export$e7d22eb2c8e1668e = function(iterable, key, reverse) {
    if (typeof key == 'undefined' || key != null && key.hasOwnProperty("__kwargtrans__")) var key = null;
    if (typeof reverse == 'undefined' || reverse != null && reverse.hasOwnProperty("__kwargtrans__")) var reverse = false;
    if (arguments.length) {
        var __ilastarg0__ = arguments.length - 1;
        if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
            var __allkwargs0__ = arguments[__ilastarg0__--];
            for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                case 'iterable':
                    var iterable = __allkwargs0__[__attrib0__];
                    break;
                case 'key':
                    var key = __allkwargs0__[__attrib0__];
                    break;
                case 'reverse':
                    var reverse = __allkwargs0__[__attrib0__];
                    break;
            }
        }
    }
    if ($7a52c43e09303a0d$export$ac00127539bcff4c(iterable) == $7a52c43e09303a0d$export$52e47097d66e073f) var result6 = $7a52c43e09303a0d$export$e214a2731b80666a(iterable.py_keys());
    else var result6 = $7a52c43e09303a0d$export$e214a2731b80666a(iterable);
    $7a52c43e09303a0d$export$2a0c251c6aa4dd57(result6, key, reverse);
    return result6;
};
var $7a52c43e09303a0d$export$1b4d6c18dd597827 = function(func, iterable) {
    return (function() {
        var __accu0__ = [];
        for (var item of iterable)__accu0__.append(func(item));
        return __accu0__;
    })();
};
var $7a52c43e09303a0d$export$c40dadbd69639a45 = function(func, iterable) {
    if (func == null) var func = $7a52c43e09303a0d$export$1728711e5fc883bc;
    return (function() {
        var __accu0__ = [];
        for (var item of iterable)if (func(item)) __accu0__.append(item);
        return __accu0__;
    })();
};
var $7a52c43e09303a0d$export$f115765b494ebf53 = function(n, d) {
    return $7a52c43e09303a0d$export$2f0714ac78eee100([
        Math.floor(n / d),
        $7a52c43e09303a0d$export$3268f8b0808f73d3(n, d)
    ]);
};
var $7a52c43e09303a0d$export$c4983c858b158e46 = $7a52c43e09303a0d$export$b1b3a64966170e2('__Terminal__', [
    $7a52c43e09303a0d$export$e7ccb258e737aeac
], {
    __module__: $7a52c43e09303a0d$var$__name__,
    get __init__ () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self) {
            self.buffer = '';
            try {
                self.element = document.getElementById('__terminal__');
            } catch (__except0__) {
                self.element = null;
            }
            if (self.element) {
                self.element.style.overflowX = 'auto';
                self.element.style.boxSizing = 'border-box';
                self.element.style.padding = '5px';
                self.element.innerHTML = '_';
            }
        });
    },
    get print () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self) {
            var sep = ' ';
            var end = '\n';
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case 'sep':
                            var sep = __allkwargs0__[__attrib0__];
                            break;
                        case 'end':
                            var end = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
                var args = $7a52c43e09303a0d$export$2f0714ac78eee100([].slice.apply(arguments).slice(1, __ilastarg0__ + 1));
            } else var args = $7a52c43e09303a0d$export$2f0714ac78eee100();
            self.buffer = '{}{}{}'.format(self.buffer, sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append($7a52c43e09303a0d$export$98439511fcec5fa7(arg));
                return __accu0__;
            }()), end).__getslice__(-4096, null, 1);
            if (self.element) {
                self.element.innerHTML = self.buffer.py_replace('\n', '<br>').py_replace(' ', '&nbsp');
                self.element.scrollTop = self.element.scrollHeight;
            } else console.log(sep.join(function() {
                var __accu0__ = [];
                for (var arg of args)__accu0__.append($7a52c43e09303a0d$export$98439511fcec5fa7(arg));
                return __accu0__;
            }()));
        });
    },
    get input () {
        return $7a52c43e09303a0d$export$cafca11ebe1ce115(this, function(self, question) {
            if (arguments.length) {
                var __ilastarg0__ = arguments.length - 1;
                if (arguments[__ilastarg0__] && arguments[__ilastarg0__].hasOwnProperty("__kwargtrans__")) {
                    var __allkwargs0__ = arguments[__ilastarg0__--];
                    for(var __attrib0__ in __allkwargs0__)switch(__attrib0__){
                        case 'self':
                            var self = __allkwargs0__[__attrib0__];
                            break;
                        case 'question':
                            var question = __allkwargs0__[__attrib0__];
                            break;
                    }
                }
            }
            self.print('{}'.format(question), $7a52c43e09303a0d$export$393aa2539655a022({
                end: ''
            }));
            var answer = window.prompt('\n'.join(self.buffer.py_split('\n').__getslice__(-8, null, 1)));
            self.print(answer);
            return answer;
        });
    }
});
var $7a52c43e09303a0d$export$2c16a7849e1460ef = $7a52c43e09303a0d$export$c4983c858b158e46();
var $7a52c43e09303a0d$export$d76cabfeabc1e7a9 = $7a52c43e09303a0d$export$2c16a7849e1460ef.print;
var $7a52c43e09303a0d$export$75417c12d4a7d146 = $7a52c43e09303a0d$export$2c16a7849e1460ef.input; //# sourceMappingURL=org.transcrypt.__runtime__.map


// Transcrypt'ed from Python, 2021-08-17 21:29:14
var $7a0a3bb9d42cdb31$export$9099ad97b570f7c//# sourceMappingURL=TranscryptTransformer.map
;
var $7a0a3bb9d42cdb31$var$__name__ = '__main__';

var $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44 = $4MyI3$path;

var $7a0a3bb9d42cdb31$export$321a875a76c72525 = $4MyI3$util;

var $7a0a3bb9d42cdb31$export$fc4ac6ce2f1d593c = $4MyI3$events;

var $7a0a3bb9d42cdb31$export$e9c4b7f95f606ffe = $7a0a3bb9d42cdb31$export$321a875a76c72525.promisify($4MyI3$child_process.exec);

var $7a0a3bb9d42cdb31$export$92ac9bc33ffc3c11 = $4MyI3$parcelplugin.Transformer;

var $7a0a3bb9d42cdb31$export$62aa50bb6ab7dbf5 = $4MyI3$parcelutils;

var $7a0a3bb9d42cdb31$export$fa917723a36b56cc = $parcel$interopDefault($4MyI3$parceldiagnostic);

var $7a0a3bb9d42cdb31$export$4045815d8631e39f = $4MyI3$asyncmutex.Mutex;
var $7a0a3bb9d42cdb31$export$e422c70965167810 = function(s) {
    return '"' + s.py_replace('"', '\\"') + '"';
};
var $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613 = function(regex, repl, s, flags) {
    var r = new RegExp(regex, flags);
    return s['replace'](r, repl);
};
var $7a0a3bb9d42cdb31$export$49ff9ed0e6760426 = function(text) {
    var text = $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613('^[\\t ]*\\n', '\n', text, '');
    var text = $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613('\\n[\\t ]*$', '', text, '');
    var check = $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613('\\n[\\t ]*\\n', '\n', text, 'g');
    var pattern = new RegExp('\\n[\\t ]*', 'g');
    var match = check.match(pattern);
    if (match) {
        var size = $7a52c43e09303a0d$export$d2311d9befc976e2(function() {
            var __accu0__ = [];
            for (var value of match)__accu0__.append(value.length - 1);
            return $7a52c43e09303a0d$export$b249c7580d9e97bf(__accu0__);
        }());
        var text = $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613('\\n[\\t ]{' + size + '}', '\n', text, 'g');
    }
    return text;
};
var $7a0a3bb9d42cdb31$export$198ce26543efd3b6 = async function(stream, code) {
    await $7a0a3bb9d42cdb31$export$321a875a76c72525.promisify(stream.end).call(stream, code);
};
var $7a0a3bb9d42cdb31$export$5d802e62d0c54a86 = async function(opts, source, dest) {
    var mutex = opts.config['dirMutex'];
    var options = opts.options;
    var prefix = "// Transcrypt'ed from Python, ";
    var prefixLen = $7a52c43e09303a0d$export$b97e32db9a35b03b(prefix) + 19;
    await mutex.acquire();
    try {
        for (var f of options.inputFS.readdirSync(source)){
            var base = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.parse(f).base;
            var sourcePath = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(source, f);
            var destPath = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(dest, base);
            var code = $7a52c43e09303a0d$export$98439511fcec5fa7(await options.inputFS.readFile(sourcePath));
            if (code.startswith(prefix)) var code = code.__getslice__(prefixLen, null, 1);
            if (await options.inputFS.exists(destPath)) {
                var newCode = await options.inputFS.readFile(destPath);
                if (newCode == code) continue;
            }
            var stream = options.inputFS.createWriteStream(destPath);
            await $7a0a3bb9d42cdb31$export$198ce26543efd3b6(stream, code);
        }
    } finally{
        await mutex.release();
    }
};
var $7a0a3bb9d42cdb31$export$9ffa1dc06aa8ec98 = async function(opts, cwd, temp, filePath, importPath) {
    var tempDir = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(opts.config['transcryptDir'], temp);
    await opts.options.inputFS.mkdirp(tempDir);
    var xpath = opts.config['config'].py_get('xpath', '');
    if (!xpath.startsWith('/')) var xpath = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(opts.options.projectRoot, xpath);
    var cmd = ' '.join([
        'pipenv',
        'run',
        'transcrypt',
        '--nomin',
        '--map',
        '--verbose',
        '--xpath',
        $7a0a3bb9d42cdb31$export$e422c70965167810('$'.join([
            importPath,
            xpath
        ])),
        '--outdir',
        $7a0a3bb9d42cdb31$export$e422c70965167810(tempDir),
        $7a0a3bb9d42cdb31$export$e422c70965167810(filePath)
    ]);
    var cmdOptions = $7a52c43e09303a0d$export$52e47097d66e073f({
        'cwd': cwd,
        'encoding': 'utf8'
    });
    opts.logger.info($7a52c43e09303a0d$export$52e47097d66e073f({
        'message': 'Running transcrypt: {}'.format(cmd),
        'filePath': filePath,
        'type': 'py'
    }));
    var a = $7a0a3bb9d42cdb31$export$fa917723a36b56cc;
    try {
        await $7a0a3bb9d42cdb31$export$e9c4b7f95f606ffe(cmd, cmdOptions);
    } catch (__except0__) {
        if ($7a52c43e09303a0d$export$8d7522aa2c9bafd3(__except0__, $7a52c43e09303a0d$export$e7ccb258e737aeac)) {
            var err = __except0__;
            var __except1__ = new $7a0a3bb9d42cdb31$export$fa917723a36b56cc($7a52c43e09303a0d$export$52e47097d66e073f({
                'diagnostic': $7a52c43e09303a0d$export$52e47097d66e073f({
                    'message': 'Error compiling: {}'.format(err.stdout.toString()),
                    'filePath': filePath,
                    'type': 'py',
                    'origin': 'parcel-transformer-transcrypt'
                })
            }));
            __except1__.__cause__ = null;
            throw __except1__;
        } else throw __except0__;
    }
    await $7a0a3bb9d42cdb31$export$5d802e62d0c54a86(opts, tempDir, opts.config['transcryptDir']);
    opts.options.inputFS.rimraf(tempDir);
};
var $7a0a3bb9d42cdb31$export$61057949f91cdd57 = async function(opts) {
    opts.logger.info($7a52c43e09303a0d$export$52e47097d66e073f({
        'message': 'loadConfig {}: ({})'.format(opts.options.mode, opts.options.instanceId)
    }));
    var pkg = $7a52c43e09303a0d$export$52e47097d66e073f(await opts.config.getPackage());
    var config = $7a52c43e09303a0d$export$52e47097d66e073f(pkg.py_get('parcel-transformer-transcrypt', $7a52c43e09303a0d$export$52e47097d66e073f({
    })));
    var transcryptDir = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(opts.options.projectRoot, '__transcrypt__', opts.options.mode);
    await opts.options.inputFS.mkdirp(transcryptDir);
    return $7a52c43e09303a0d$export$52e47097d66e073f({
        'dirMutex': new $7a0a3bb9d42cdb31$export$4045815d8631e39f,
        'transcryptDir': transcryptDir,
        'config': config
    });
};
var $7a0a3bb9d42cdb31$export$4b169b49e1a4823b = async function(opts) {
    var transcryptDir = opts.config['transcryptDir'];
    var relativeTranscryptDir = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.relative(transcryptDir, opts.options.projectRoot);
    var cwd = opts.options.projectRoot;
    var filePath = opts.asset.filePath;
    var fileInfo = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.parse(filePath);
    opts.logger.info($7a52c43e09303a0d$export$52e47097d66e073f({
        'message': 'transform {}: {} ({}) ({})'.format(opts.options.mode, filePath, opts.asset.id, opts.options.instanceId),
        'filePath': filePath,
        'type': opts.asset['type']
    }));
    var relativeDir = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.relative(opts.options.projectRoot, fileInfo.dir);
    if (fileInfo.py_name == '__init__') var pyModule = relativeDir.py_replace($7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.sep, '.');
    else var pyModule = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(relativeDir, fileInfo['name']).py_replace($7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.sep, '.');
    if (fileInfo.ext == '.vue') {
        var p = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(transcryptDir, relativeDir);
        opts.options.inputFS.mkdirp(p);
        var filePath = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(p, fileInfo['name'] + '.py');
        var code = await opts.asset.getCode();
        opts.logger.info($7a52c43e09303a0d$export$52e47097d66e073f({
            'message': 'Creating temp: {}'.format(filePath)
        }));
        var stream = opts.options.inputFS.createWriteStream(filePath);
        await $7a0a3bb9d42cdb31$export$198ce26543efd3b6(stream, $7a0a3bb9d42cdb31$export$49ff9ed0e6760426(code));
        var cwd = transcryptDir;
    }
    var importPath = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(relativeTranscryptDir, relativeDir);
    await $7a0a3bb9d42cdb31$export$9ffa1dc06aa8ec98(opts, cwd, opts.asset.id, pyModule, importPath);
    var jsFile = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(transcryptDir, pyModule + '.js');
    var code = await opts.options.inputFS.readFile(jsFile, 'utf8');
    var newCode = $7a0a3bb9d42cdb31$export$7aa50e59f7fb6613('(require\\s*\\(\\s*[\'"])\\.', '$1{}/'.format(importPath), code, 'g');
    await opts.options.inputFS.writeFile(jsFile, newCode);
    var jsRootFile = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.sep + $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.relative(opts.options.projectRoot, jsFile);
    opts.asset['type'] = 'js';
    opts.asset.setCode('\n        //transcrypt\n        var module = require("{}");\n        export default module.default;\n    '.format(jsRootFile));
    var projectFile = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(transcryptDir, pyModule + '.project');
    try {
        var project = $7a52c43e09303a0d$export$52e47097d66e073f(JSON.parse(await opts.options.inputFS.readFile(projectFile, 'utf8')));
    } catch (__except0__) {
        opts.logger.error($7a52c43e09303a0d$export$52e47097d66e073f({
            'message': 'Error reading project file {}'.format(projectFile),
            'filePath': filePath,
            'type': opts.asset['type'],
            'source': 'parcel-transformer-transcrypt'
        }));
        var project1 = $7a52c43e09303a0d$export$52e47097d66e073f({
        });
    }
    var modules = project.py_get('modules', []);
    for (var module of modules){
        if ($7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.basename(module.source) == '__runtime__.py') continue;
        var modulePath = module.source != filePath ? module.source : opts.asset.filePath;
        if (!modulePath.startswith($7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.sep)) var modulePath = $7a0a3bb9d42cdb31$export$2d694b79c3fc5e44.join(transcryptDir, modulePath);
        console.log(modulePath);
        opts.asset.invalidateOnFileChange(modulePath);
    }
    return [
        opts.asset
    ];
};
$7a0a3bb9d42cdb31$export$9099ad97b570f7c = new $7a0a3bb9d42cdb31$export$92ac9bc33ffc3c11($7a52c43e09303a0d$export$52e47097d66e073f({
    'transform': $7a0a3bb9d42cdb31$export$4b169b49e1a4823b,
    'loadConfig': $7a0a3bb9d42cdb31$export$61057949f91cdd57
}));


//# sourceMappingURL=TranscryptTransformer.js.map
