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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Core {

    constructor(driver, element, options) {
        console.log(options);

        this.layers = [];
        this.layergroupid = null;


        driver.init(element, options);
        this.configureApi(options);

    }

    configureApi(options) {
        var urlTemplate = options.maps_api_config.maps_api_template.replace("{user}", options.maps_api_config.user_name);
        var urlWithApi = urlTemplate + '/api/v1/map';

        var body = {
            layers: options.layers
        };

        fetch(urlWithApi, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then((json) => {
            this.layergroupid = json.layergroupid;
            this.layers = json.layers;
            console.log(json);
        });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Core);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__idriver__ = __webpack_require__(2);


class GoogleMapsDriver extends __WEBPACK_IMPORTED_MODULE_0__idriver__["a" /* default */] {

    constructor() {
        super();
        this.map = null;
    }

    init(element, options) {
        var location = JSON.parse(options.center);
        this.map = new google.maps.Map(element, {
          center: {lat: location[0], lng: location[1]},
          zoom: options.zoom
        });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (GoogleMapsDriver);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class IDriver {
    init(element, options) {
        console.error("Method not implemented");
    }
}

/* harmony default export */ __webpack_exports__["a"] = (IDriver);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drivers_googlemaps__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core__ = __webpack_require__(0);



class Minicarto {
    constructor(element, options) {

        if (!element) console.error("Invalid DOM element to init Carto SDK.");

        if (!options) console.error("Missing options.");

        this.core = new __WEBPACK_IMPORTED_MODULE_1__core_core__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0__drivers_googlemaps__["a" /* default */](), element, options);
    }
}

window.carto = {
    Minicarto: Minicarto
};


/***/ })
/******/ ]);