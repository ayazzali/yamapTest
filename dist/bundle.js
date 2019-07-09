/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ymaps/dist/ymaps.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/ymaps/dist/ymaps.esm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ymaps$1 = {\n  load: function load() {\n    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '//api-maps.yandex.ru/2.1/?lang=en_RU';\n\n    var getNsParamValue = function getNsParamValue() {\n      var results = src.match(/[\\\\?&]ns=([^&#]*)/);\n      return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));\n    };\n\n    if (!this.promise) {\n      this.promise = new Promise(function (resolve, reject) {\n        var scriptElement = document.createElement('script');\n        scriptElement.onload = resolve;\n        scriptElement.onerror = reject;\n        scriptElement.type = 'text/javascript';\n        scriptElement.src = src;\n        document.body.appendChild(scriptElement);\n      }).then(function () {\n        var ns = getNsParamValue();\n\n        if (ns && ns !== 'ymaps') {\n          (0, eval)(\"var ymaps = \".concat(ns, \";\"));\n        }\n\n        return new Promise(function (resolve) {\n          return ymaps.ready(resolve);\n        });\n      });\n    }\n\n    return this.promise;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ymaps$1);\n\n\n//# sourceURL=webpack:///./node_modules/ymaps/dist/ymaps.esm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _yanpm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yanpm */ \"./src/yanpm.js\");\n\r\n\r\nObject(_yanpm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/yanpm.js":
/*!**********************!*\
  !*** ./src/yanpm.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ymaps */ \"./node_modules/ymaps/dist/ymaps.esm.js\");\n\r\n\r\nfunction initYaMap() {\r\n\r\n  ymaps__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    .load()\r\n    .then(maps => {\r\n      const map = new maps.Map('map', {\r\n        center: [-8.369326, 115.166023],\r\n        zoom: 7\r\n      });\r\n    })\r\n    .catch(error => console.log('Failed to load Yandex Maps', error));\r\n  //\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initYaMap);\n\n//# sourceURL=webpack:///./src/yanpm.js?");

/***/ })

/******/ });