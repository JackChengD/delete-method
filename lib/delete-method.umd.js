(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["delete-method"] = factory();
	else
		root["delete-method"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "f2a0");
/******/ })
/************************************************************************/
/******/ ({

/***/ "003a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "0144":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("9e4a");
var aCallable = __webpack_require__("3cd5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "028b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b168");
var fails = __webpack_require__("2f67");
var createElement = __webpack_require__("57c9");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0736":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("9e4a");
var fails = __webpack_require__("2f67");
var isCallable = __webpack_require__("4ca1");
var classof = __webpack_require__("9bb8");
var getBuiltIn = __webpack_require__("5c74");
var inspectSource = __webpack_require__("dbb0");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "0848":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var call = __webpack_require__("51c8");
var isCallable = __webpack_require__("4ca1");
var isObject = __webpack_require__("82c1");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "11e1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var DOMIterables = __webpack_require__("8129");
var DOMTokenListPrototype = __webpack_require__("52da");
var forEach = __webpack_require__("d521");
var createNonEnumerableProperty = __webpack_require__("131b");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "131b":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b168");
var definePropertyModule = __webpack_require__("6991");
var createPropertyDescriptor = __webpack_require__("7e0b");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "2409":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "2671":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("647a");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "2749":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var isArray = __webpack_require__("2671");
var isConstructor = __webpack_require__("0736");
var isObject = __webpack_require__("82c1");
var wellKnownSymbol = __webpack_require__("3944");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "2f67":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "31d9":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "339e":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("4410");
var store = __webpack_require__("8dd9");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2022 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "3424":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("3cd5");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "3503":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var uncurryThis = __webpack_require__("9e4a");
var fails = __webpack_require__("2f67");
var classof = __webpack_require__("647a");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "35ce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var isObject = __webpack_require__("82c1");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "3944":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var shared = __webpack_require__("339e");
var hasOwn = __webpack_require__("8196");
var uid = __webpack_require__("70aa");
var NATIVE_SYMBOL = __webpack_require__("79dc");
var USE_SYMBOL_AS_UID = __webpack_require__("ef09");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "3c11":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_64a8bc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d3ed");
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_64a8bc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_64a8bc49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3cd5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var isCallable = __webpack_require__("4ca1");
var tryToString = __webpack_require__("d32a");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "3cec":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b168");
var hasOwn = __webpack_require__("8196");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "3ff9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("a1a8");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".long-delete-wrap[data-v-64a8bc49]{height:100%;width:100%;border:1px solid #eee;overflow:hidden;margin:0 auto 20px;position:relative}.delete-btn[data-v-64a8bc49]{transition:all .4s linear;z-index:1;border:1px solid red;width:100px}.circle-shadow[data-v-64a8bc49],.delete-btn[data-v-64a8bc49]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);perspective-origin:50%}.circle-shadow[data-v-64a8bc49]{width:0;height:0;border-radius:50%;background:#eee;transition:all .5s linear;opacity:.5}.circle-shadow-scale[data-v-64a8bc49]{width:500px;height:500px}.delete-opacity-enter-active[data-v-64a8bc49],.delete-opacity-leave-active[data-v-64a8bc49]{transition:opacity .5s;-webkit-animation:deleteScale-data-v-64a8bc49 .5s;animation:deleteScale-data-v-64a8bc49 .5s}.delete-opacity-enter[data-v-64a8bc49],.delete-opacity-leave-to[data-v-64a8bc49]{opacity:0;animation:deleteScale-data-v-64a8bc49 .5s reverse}@-webkit-keyframes deleteScale-data-v-64a8bc49{0%{transform:translate(-50%,-50%) scale(0)}to{transform:translate(-50%,-50%) scale(1)}}@keyframes deleteScale-data-v-64a8bc49{0%{transform:translate(-50%,-50%) scale(0)}to{transform:translate(-50%,-50%) scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4410":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "4ca1":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "4e49":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var userAgent = __webpack_require__("4f50");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "4f50":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("5c74");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "51c8":
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "52da":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("57c9");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "57c9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var isObject = __webpack_require__("82c1");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "5925":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5a69":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0144");
var uncurryThis = __webpack_require__("9e4a");
var IndexedObject = __webpack_require__("3503");
var toObject = __webpack_require__("9d21");
var lengthOfArrayLike = __webpack_require__("dc00");
var arraySpeciesCreate = __webpack_require__("f9ce");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "5c74":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var isCallable = __webpack_require__("4ca1");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "5da5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var getBuiltIn = __webpack_require__("5c74");
var isCallable = __webpack_require__("4ca1");
var isPrototypeOf = __webpack_require__("b317");
var USE_SYMBOL_AS_UID = __webpack_require__("ef09");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "647a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("9e4a");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "6991":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var DESCRIPTORS = __webpack_require__("b168");
var IE8_DOM_DEFINE = __webpack_require__("028b");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("8c4e");
var anObject = __webpack_require__("35ce");
var toPropertyKey = __webpack_require__("987a");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "70aa":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("9e4a");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "7481":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var call = __webpack_require__("51c8");
var isObject = __webpack_require__("82c1");
var isSymbol = __webpack_require__("5da5");
var getMethod = __webpack_require__("3424");
var ordinaryToPrimitive = __webpack_require__("0848");
var wellKnownSymbol = __webpack_require__("3944");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "79dc":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("4e49");
var fails = __webpack_require__("2f67");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "7a4d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var isCallable = __webpack_require__("4ca1");
var hasOwn = __webpack_require__("8196");
var createNonEnumerableProperty = __webpack_require__("131b");
var setGlobal = __webpack_require__("003a");
var inspectSource = __webpack_require__("dbb0");
var InternalStateModule = __webpack_require__("b1e2");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("3cec").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7ac3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("a1ab");
var classof = __webpack_require__("9bb8");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "7e0b":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "8129":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "8196":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("9e4a");
var toObject = __webpack_require__("9d21");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "82c1":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("4ca1");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "874c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("a1a8");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".left-delete-wrap[data-v-05310474]{height:100%;width:100%;position:relative;transition:all .2s}.flex[data-v-05310474]{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.left-delete-wrap[data-type=\"0\"][data-v-05310474]{transform:translateZ(0)}.left-delete-wrap[data-type=\"1\"][data-v-05310474]{transform:translate3d(-100px,0,0)}.left-delete-wrap .left[data-v-05310474]{flex:1;border-right:1px solid #eee}.left-delete-wrap .right[data-v-05310474]{width:100px;height:100%;background:red;position:absolute;top:0;right:-101px;box-sizing:border-box}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "87c5":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("a1ab");
var redefine = __webpack_require__("7a4d");
var toString = __webpack_require__("7ac3");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "8c4e":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b168");
var fails = __webpack_require__("2f67");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "8dd9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var setGlobal = __webpack_require__("003a");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "987a":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("7481");
var isSymbol = __webpack_require__("5da5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "9bb8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var TO_STRING_TAG_SUPPORT = __webpack_require__("a1ab");
var isCallable = __webpack_require__("4ca1");
var classofRaw = __webpack_require__("647a");
var wellKnownSymbol = __webpack_require__("3944");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "9d21":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var requireObjectCoercible = __webpack_require__("d711");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "9e3f":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "9e4a":
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = bind && bind.bind(call, call);

module.exports = bind ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "a1a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "a1ab":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("3944");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "b0aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_05310474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb81");
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_05310474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_05310474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b11f":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("339e");
var uid = __webpack_require__("70aa");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "b168":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("2f67");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "b1e2":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("e689");
var global = __webpack_require__("d10e");
var uncurryThis = __webpack_require__("9e4a");
var isObject = __webpack_require__("82c1");
var createNonEnumerableProperty = __webpack_require__("131b");
var hasOwn = __webpack_require__("8196");
var shared = __webpack_require__("8dd9");
var sharedKey = __webpack_require__("b11f");
var hiddenKeys = __webpack_require__("31d9");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "b317":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("9e4a");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "d10e":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("2409")))

/***/ }),

/***/ "d32a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "d3ed":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3ff9");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("5925").default
var update = add("3dd4f43f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d521":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("5a69").forEach;
var arrayMethodIsStrict = __webpack_require__("ebcc");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "d6e7":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("9e3f");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "d711":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "dbb0":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("9e4a");
var isCallable = __webpack_require__("4ca1");
var store = __webpack_require__("8dd9");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "dc00":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("d6e7");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "e689":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("d10e");
var isCallable = __webpack_require__("4ca1");
var inspectSource = __webpack_require__("dbb0");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "eb81":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("874c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("5925").default
var update = add("4575192b", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "ebcc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("2f67");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "ef09":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("79dc");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "f2a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@3.20.2@core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("87c5");

// EXTERNAL MODULE: ./node_modules/_core-js@3.20.2@core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("11e1");

// EXTERNAL MODULE: ./node_modules/_core-js@3.20.2@core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("fd72");

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272c3cd6-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./packages/leftDelete/main.vue?vue&type=template&id=05310474&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"left-delete-wrap",attrs:{"data-type":"0"}},[_c('div',{staticClass:"flex",on:{"touchstart":_vm.touchStart,"touchend":_vm.touchEnd}},[_c('div',{staticClass:"left"},[_vm._t("default")],2),_c('div',{staticClass:"right flex"},[_c('div',{staticClass:"delete-btn",on:{"click":function($event){$event.stopPropagation();return _vm.deleteBox.apply(null, arguments)}}},[_vm._v("删除")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/leftDelete/main.vue?vue&type=template&id=05310474&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.3@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./packages/leftDelete/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/** 
 * 左滑删除
*/
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: "LeftDelete",
  data: function data() {
    return {
      startX: 0,
      endX: 0
    };
  },
  methods: {
    touchStart: function touchStart(e) {
      this.startX = e.touches[0].clientX;
    },
    touchEnd: function touchEnd(e) {
      // 当前滑动的父级元素
      var parentElement = e.currentTarget.parentElement; // 记录结束位置

      this.endX = e.changedTouches[0].clientX; // 左滑

      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        parentElement.dataset.type = 1; // 显示删除
      } // 右滑


      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        parentElement.dataset.type = 0; // 不显示删除
      }

      this.startX = 0;
      this.endX = 0;
    },
    deleteBox: function deleteBox() {
      this.$emit("emitDelete", 'left');
    }
  }
});
// CONCATENATED MODULE: ./packages/leftDelete/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var leftDelete_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/leftDelete/main.vue?vue&type=style&index=0&id=05310474&scoped=true&lang=css&
var mainvue_type_style_index_0_id_05310474_scoped_true_lang_css_ = __webpack_require__("b0aa");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/leftDelete/main.vue






/* normalize component */

var component = normalizeComponent(
  leftDelete_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "05310474",
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/leftDelete/index.js



main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var leftDelete = (main);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"272c3cd6-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./packages/longDelete/main.vue?vue&type=template&id=64a8bc49&scoped=true&
var mainvue_type_template_id_64a8bc49_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"long-delete-wrap",on:{"touchstart":_vm.showDeleteBtn,"touchend":_vm.clearBtnTimeOut}},[_vm._t("default"),_c('transition',{attrs:{"name":"delete-opacity"},on:{"after-enter":_vm.afterEnterDeteleOpacity,"after-leave":_vm.afterLeaveDeteleOpacity}},[(_vm.deleteShow)?_c('div',{staticClass:"delete-btn",class:{ 'delte-opacity': _vm.deleteShow },on:{"click":function($event){$event.stopPropagation();return _vm.deleteBox.apply(null, arguments)}}},[_vm._v(" 删除 ")]):_vm._e()]),_c('div',{staticClass:"circle-shadow",class:{ 'circle-shadow-scale': _vm.circleShow }})],2)}
var mainvue_type_template_id_64a8bc49_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/longDelete/main.vue?vue&type=template&id=64a8bc49&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.2.3@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./packages/longDelete/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/** 
 * 长按删除
*/
/* harmony default export */ var longDelete_mainvue_type_script_lang_js_ = ({
  name: "LongDelete",
  data: function data() {
    return {
      animateShow: false,
      circleShow: false,
      deleteShow: false,
      btnTimeOut: null
    };
  },
  methods: {
    showDeleteBtn: function showDeleteBtn() {
      var _this = this;

      this.clearBtnTimeOut();
      this.btnTimeOut = setTimeout(function () {
        _this.handleCircle();
      }, 300);
    },
    clearBtnTimeOut: function clearBtnTimeOut() {
      this.btnTimeOut && clearTimeout(this.btnTimeOut);
    },
    handleCircle: function handleCircle() {
      var _this2 = this;

      if (this.animateShow) return;
      this.animateShow = true;
      this.circleShow = !this.circleShow;
      setTimeout(function () {
        _this2.deleteShow = !_this2.deleteShow;
      }, 100);
    },
    afterEnterDeteleOpacity: function afterEnterDeteleOpacity() {
      this.animateShow = false;
    },
    afterLeaveDeteleOpacity: function afterLeaveDeteleOpacity() {
      this.animateShow = false;
    },
    deleteBox: function deleteBox() {
      this.$emit("emitDelete", 'long');
    }
  },
  destroyed: function destroyed() {
    this.animateShow = true;
  }
});
// CONCATENATED MODULE: ./packages/longDelete/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_longDelete_mainvue_type_script_lang_js_ = (longDelete_mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/longDelete/main.vue?vue&type=style&index=0&id=64a8bc49&scoped=true&lang=css&
var mainvue_type_style_index_0_id_64a8bc49_scoped_true_lang_css_ = __webpack_require__("3c11");

// CONCATENATED MODULE: ./packages/longDelete/main.vue






/* normalize component */

var main_component = normalizeComponent(
  packages_longDelete_mainvue_type_script_lang_js_,
  mainvue_type_template_id_64a8bc49_scoped_true_render,
  mainvue_type_template_id_64a8bc49_scoped_true_staticRenderFns,
  false,
  null,
  "64a8bc49",
  null
  
)

/* harmony default export */ var longDelete_main = (main_component.exports);
// CONCATENATED MODULE: ./packages/longDelete/index.js



longDelete_main.install = function (Vue) {
  Vue.component(longDelete_main.name, longDelete_main);
};

/* harmony default export */ var longDelete = (longDelete_main);
// CONCATENATED MODULE: ./packages/index.js





var components = [leftDelete, longDelete];

var install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  version: '1.0.0',
  install: install,
  LeftDelete: leftDelete,
  LongDelete: longDelete
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.15@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "f9ce":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("2749");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "fd72":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("b168");
var FUNCTION_NAME_EXISTS = __webpack_require__("3cec").EXISTS;
var uncurryThis = __webpack_require__("9e4a");
var defineProperty = __webpack_require__("6991").f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

/******/ });
});
//# sourceMappingURL=delete-method.umd.js.map