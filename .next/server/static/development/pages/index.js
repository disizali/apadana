module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Ads.jsx":
/*!****************************!*\
  !*** ./components/Ads.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ads; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sky */ "./components/Sky.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Ads.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Ads extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "ads",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u062A\u0628\u0644\u06CC\u063A\u0627\u062A \u062F\u0631 \u06AF\u0648\u06AF\u0644",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), __jsx("div", {
      className: "google-results",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, [...Array(10).keys()].map(item => {
      return __jsx("div", {
        className: "result",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), __jsx("p", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), __jsx("p", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    })));
  }

}

/***/ }),

/***/ "./components/Apadana.jsx":
/*!********************************!*\
  !*** ./components/Apadana.jsx ***!
  \********************************/
/*! exports provided: Apadana, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apadana", function() { return Apadana; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Apadana.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Apadana extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "apadana",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx("div", {
      className: "plans d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("div", {
      className: "plan d-flex justify-content-start align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-personal-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0634\u062E\u0635\u06CC"), __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "\u06F2\u066C\u06F0\u06F0\u06F0\u066C\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646")), __jsx("div", {
      className: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\u062F\u0631 \u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u0634\u062A\u0631\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0633\u062A. \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0641\u0631\u0645 \u0647\u0627\u06CC \u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627 \u0648 \u06CC\u0627 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u0627\u0642\u062F\u0627\u0645 \u0628\u0647 \u062A\u0645\u0627\u0633 \u0646\u0645\u0627\u06CC\u06CC\u062F ."), __jsx("button", {
      className: "btn px-4 d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-rocket mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u06A9\u0634\u0648\u0631\u06CC \u0634\u062F\u0646"))), __jsx("div", {
      className: "plan d-flex justify-content-start align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-standard-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0634\u0631\u06A9\u062A\u06CC"), __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\u06F4\u066C\u06F0\u06F0\u06F0\u066C\u06F0\u06F0\u06F0 \u062A\u0648\u0645\u0627\u0646")), __jsx("div", {
      className: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "\u062F\u0631 \u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u0634\u062A\u0631\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0633\u062A. \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0641\u0631\u0645 \u0647\u0627\u06CC \u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627 \u0648 \u06CC\u0627 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u0627\u0642\u062F\u0627\u0645 \u0628\u0647 \u062A\u0645\u0627\u0633 \u0646\u0645\u0627\u06CC\u06CC\u062F ."), __jsx("button", {
      className: "btn float-left mr-auto mt-auto px-4 d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-rocket mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u062C\u0647\u0627\u0646\u06CC \u0634\u062F\u0646"))), __jsx("div", {
      className: "plan d-flex justify-content-start align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-customize-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("h2", {
      className: "gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC"), __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F ")), __jsx("div", {
      className: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\u062F\u0631 \u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u0634\u062A\u0631\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0633\u062A. \u0634\u0645\u0627 \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0641\u0631\u0645 \u0647\u0627\u06CC \u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627 \u0648 \u06CC\u0627 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646 \u0627\u0642\u062F\u0627\u0645 \u0628\u0647 \u062A\u0645\u0627\u0633 \u0646\u0645\u0627\u06CC\u06CC\u062F ."), __jsx("button", {
      className: "btn float-left mr-auto mt-auto px-4 d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-space-shuttle mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u06A9\u0647\u06A9\u0634\u0627\u0646\u06CC \u0634\u062F\u0646")))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Apadana);

/***/ }),

/***/ "./components/Develop.jsx":
/*!********************************!*\
  !*** ./components/Develop.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Develop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sky */ "./components/Sky.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Develop.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Develop extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/Earth.jsx":
/*!******************************!*\
  !*** ./components/Earth.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Earth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Earth.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Earth extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    __webpack_require__(/*! ../src/earch.js */ "./src/earch.js");
  }

  render() {
    const {
      changeTab,
      tab
    } = this.props;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), __jsx("canvas", {
      id: "earth",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("div", {
      className: "dots",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: `dot-1 d-flex align-items-center ${tab == 1 && "active"}`,
      onClick: () => changeTab(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("div", {
      className: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "\u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627")), __jsx("div", {
      className: `dot-2 d-flex align-items-center ${tab == 2 && "active"}`,
      onClick: () => changeTab(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("div", {
      className: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "\u0633\u0626\u0648 \u0648 \u062A\u0648\u0644\u06CC\u062F \u0645\u062D\u062A\u0648\u0627")), __jsx("div", {
      className: `dot-3 d-flex align-items-center ${tab == 3 && "active"}`,
      onClick: () => changeTab(3),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("div", {
      className: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646")), __jsx("div", {
      className: `dot-4 d-flex align-items-center ${tab == 4 && "active"}`,
      onClick: () => changeTab(4),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("div", {
      className: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "\u062A\u0628\u0644\u06CC\u063A\u0627\u062A \u062F\u0631 \u06AF\u0648\u06AF\u0644")), __jsx("div", {
      className: `dot-5 d-flex align-items-center ${tab == 5 && "active"}`,
      onClick: () => changeTab(5),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("div", {
      className: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631 \u0647\u0627"))));
  }

}

/***/ }),

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("main", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), this.props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Navbar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("nav", {
      className: "d-flex justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx("h1", {
      className: "mr-2 mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "\u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627"), __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-user-astronaut mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "\u0645\u0634\u0627\u0648\u0631\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646")), __jsx("div", {
      className: "d-flex numbers text-left align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-satellite-dish mx-1 justify-content-around",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("div", {
      className: "d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("strong", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\u06F0\u06F2\u06F1-\u06F4\u06F4\u06F2\u06F5\u06F9\u06F6\u06F8\u06F8"), __jsx("strong", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "\u06F0\u06F2\u06F1-\u06F4\u06F4\u06F2\u06F5\u06F9\u06F6\u06F1\u06F1")))));
  }

}

/***/ }),

/***/ "./components/Samples.jsx":
/*!********************************!*\
  !*** ./components/Samples.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Samples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sky */ "./components/Sky.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Samples.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Samples extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./components/Seo.jsx":
/*!****************************!*\
  !*** ./components/Seo.jsx ***!
  \****************************/
/*! exports provided: Seo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seo", function() { return Seo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sky */ "./components/Sky.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Seo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Seo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "seo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u0633\u0626\u0648",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Seo);

/***/ }),

/***/ "./components/Sky.jsx":
/*!****************************!*\
  !*** ./components/Sky.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SkyBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Sky.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const countOfStars = 200;
const countOfMeteors = 10;
class SkyBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "sky",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, [...Array(countOfStars).keys()].map(item => {
      return __jsx("div", {
        className: `star star-${item}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    }), [...Array(countOfMeteors).keys()].map(item => {
      return __jsx("div", {
        className: `meteor meteor-${item}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    }), __jsx("h1", {
      className: "text-white h-100 align-items-center d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, this.props.title)));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Earth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Earth */ "./components/Earth.jsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Apadana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Apadana */ "./components/Apadana.jsx");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Seo */ "./components/Seo.jsx");
/* harmony import */ var _components_Develop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Develop */ "./components/Develop.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Ads__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Ads */ "./components/Ads.jsx");
/* harmony import */ var _components_Samples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Samples */ "./components/Samples.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      tab: 4
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({
      tab
    });
  }

  getContent() {
    const {
      tab
    } = this.state;

    switch (tab) {
      case 1:
        return __jsx(_components_Apadana__WEBPACK_IMPORTED_MODULE_3__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        });

      case 2:
        return __jsx(_components_Seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });

      case 3:
        return __jsx(_components_Develop__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        });

      case 4:
        return __jsx(_components_Ads__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        });

      case 5:
        return __jsx(_components_Samples__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        });
    }
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "\u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627")), __jsx(_components_Earth__WEBPACK_IMPORTED_MODULE_1__["default"], {
      changeTab: this.changeTab,
      tab: this.state.tab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.getContent()));
  }

}

/***/ }),

/***/ "./src/earch.js":
/*!**********************!*\
  !*** ./src/earch.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _parseInt = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");

//(function(){
var AMOUNT = 200,
    d = 25,
    R = 200,
    adjustment = true,
    adaptive = true,
    obliquity = 23 / 180 * 3.14,
    roV1 = 0.0022,
    roV2 = -0.0005,
    ro1 = 0,
    ro2 = 0,
    canvas = "#earth",
    color = "#C0C0C0",
    fogC = "#A9A9A9",
    T_earth = "images/earth.png";
var camera, scene, renderer;
var positions = [],
    particles,
    particle,
    count = 0,
    dpr,
    lastW,
    W = window.innerWidth,
    H = window.innerHeight,
    aspect = W / H,
    vMin = Math.min(W, H);
var mouseX = 0,
    mouseY = 0,
    x0,
    y0;
var lookAt = new THREE.Vector3(0, 0, 0),
    canvas = document.querySelector(canvas);
renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
  canvas: canvas
}); //

renderer.setSize(W, H); //renderer.context.getExtension('OES_standard_derivatives');

camera = new THREE.PerspectiveCamera(18, aspect, 1, 10000);
scene = new THREE.Scene();
var Emap = new THREE.TextureLoader().load(T_earth);
Emap.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()) || 1;
var Wmaterial = new THREE.MeshStandardMaterial({
  onBeforeCompile: function (sh) {
    sh.vertexShader = "\
#define MYSHADER\n\
attribute float center, bright;\n\
varying vec3 vCenter, vPos, vV0, vV1, vV2;\n\
varying float vBright;\n\
" + sh.vertexShader.replace(/}\s*$/, "\
vBright=bright;\n\
int c=int(center);\n\
vCenter = vec3(c==0, c==1, c==2);\n\
vPos=position;\n\
gl_Position = projectionMatrix * modelViewMatrix * vec4(vPos, 1);\n\
vV0=vCenter[0]*vPos;\n\
vV1=vCenter[1]*vPos;\n\
vV2=vCenter[2]*vPos;\n\
}			");
    sh.fragmentShader = "\
#define MYSHADER\n\
varying vec3 vCenter, vPos, vV0, vV1, vV2;\n\
varying float vBright;\n\
" + sh.fragmentShader.replace("#include <alphamap_fragment>", "\
#include <alphamap_fragment>\n\
vec3 d = fwidth( vCenter );\n\
vec3 a3 = smoothstep( vec3(0.0), d * 1.4, vCenter+0.4*d-1.0/fogDepth );\n\
float scale = dot(normalize(vViewPosition), vNormal);\n\
scale = 1.0-scale*scale;\n\
float dist = distance(vPos, vV0.xyz/vCenter.x);\n\
dist = min(dist, distance(vPos, vV1.xyz/vCenter.y));\n\
dist = min(dist, distance(vPos, vV2.xyz/vCenter.z));\n\
float b3 = smoothstep(1.5, 1.8, dist-1.5*scale*scale );\n\
float edgeFactorTri=min(b3,min( min( a3.x, a3.y ), a3.z ));\n\
diffuseColor.a *= mix( 1.0,  0.0, edgeFactorTri );\n\
float dissipation=" + (posZ + 0.5 * R + 0.01) + ";\n\
diffuseColor.a *= smoothstep( 20.0,  0.0, fogDepth-dissipation );\n\
			").replace("	#include <fog_fragment>", "\
float lVc=length(vCenter);\n\
gl_FragColor.rgb *= smoothstep( " + R * 0.8888 + ", " + R * 1.201 + ", fogDepth );\n\
gl_FragColor.rgb = mix( gl_FragColor.rgb, vec3(3), (.1*lVc+pow(lVc,8.0))*vBright );\n\
#include <fog_fragment>\
			"); //console.log(sh, sh.vertexShader, sh.fragmentShader);
  },
  roughness: 0.5,
  metalness: 0.964,
  envMapIntensity: 5,
  emissive: 0,
  // refractionRatio: -0.12,
  transparent: true,
  alphaTest: 0.05
}); //, opacity: 0

Wmaterial.color.set(fogC);
Wmaterial.side = 2;
Wmaterial.extensions = {
  derivatives: 1
};
var geometry = new THREE.IcosahedronGeometry(R, 3); //OctahedronGeometry

for (var i = 0; i < geometry.vertices.length; i++) {
  geometry.vertices[i].applyEuler(new THREE.Euler(Math.random() * 0.06, Math.random() * 0.06, Math.random() * 0.06));
}

var bGeometry = new THREE.BufferGeometry().fromGeometry(geometry);
var position = bGeometry.attributes.position;
var centers = new Int8Array(position.count);
var brights = new Float32Array(position.count);
var points = [],
    activePoints = [],
    vCount = geometry.vertices.length,
    dCount = 0,
    dMid = 0;

for (var i = 0, l = position.count; i < l; i++) {
  var c = centers[i] = i % 3,
      j = (i - c) / 3;
  brights[i] = 0;
  if (i < vCount) points[i] = {
    siblings: [],
    distances: [],
    indexes: [],
    brightness: 0,
    v: 0,
    a: 0,
    f: 0,
    dr: 0,
    r: 1
  };
}

function addSiblings(a, b, one) {
  if (points[a].siblings.indexOf(points[b]) < 0) {
    points[a].pos = geometry.vertices[a].clone();
    points[a].siblings.push(points[b]);
    var d = geometry.vertices[a].distanceTo(geometry.vertices[b]);
    points[a].distances.push(d);
    dMid += d;
    dCount++;
  }

  if (!one) addSiblings(b, a, 1);
}

geometry.faces.forEach(function (face, i) {
  addSiblings(face.a, face.b);
  addSiblings(face.a, face.c);
  addSiblings(face.c, face.b);
  points[face.a].indexes.push(i * 3);
  points[face.b].indexes.push(i * 3 + 1);
  points[face.c].indexes.push(i * 3 + 2);
});
dMid /= dCount;
var ttl = 10;

(function setActive(n) {
  if (!n) return;

  var i = _parseInt(Math.random() * vCount);

  if (geometry.vertices[i].z < -100) setActive();else points[i].isActive = ttl, activePoints.push(points[i]);
  setActive(n - 1);
})(10);

bGeometry.addAttribute("center", new THREE.BufferAttribute(centers, 1));
bGeometry.addAttribute("bright", new THREE.BufferAttribute(brights, 1));
var Ematerial = Wmaterial.clone();
Ematerial.alphaMap = Emap;
Ematerial.transparent = false;
Ematerial.side = 0;
var cubeCamera = new THREE.CubeCamera(1, 2 * R, 256);
cubeCamera.position.z = 0.47 * R;
Ematerial.envMap = cubeCamera.renderTarget.texture;
Ematerial.envMap.minFilter = THREE.LinearMipMapLinearFilter;
Ematerial.envMap.mapping = THREE.CubeReflectionMapping;
var Earth = new THREE.Mesh(new THREE.IcosahedronGeometry(R * 0.77, 3), Ematerial);
var wGeometry = geometry.clone();
particles = new THREE.Group();
let world = new THREE.Group();
var Net = new THREE.Mesh(bGeometry, Wmaterial);
particles.add(Net, Earth); //new THREE.Points(geometry, Pmaterial),
//particles.rotation.order='YXZ'

world.add(particles);
scene.add(world); // POSITIONS :

var posZ = 1700; //distance to camera
//scene.position.set(-12,54,0);
//camera.position.y=camera.position.z=2000

scene.fog = new THREE.Fog(fogC, posZ - R / 2, posZ + R);
let hLight = new THREE.HemisphereLight("#fff", 0, 23);
world.add(hLight);
hLight.position.set(0, 0, 1); // interactions

var dx,
    dy = dx = x0 = y0 = 0,
    active,
    abc = ["a", "b", "c"],
    movedPoints = [],
    activeF = [],
    ready,
    raycaster = new THREE.Raycaster(),
    mouse = new THREE.Vector2();

window.getWpos = function () {
  return [scene.position, scene.rotation, camera];
};

function interact() {
  mouse.x = x0 / W * 2 - 1;
  mouse.y = -(y0 / H) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  movedPoints.forEach(function (point, i) {
    point.f = 0;
  });
  activeF = [];
  if (!active) return;
  var inters = raycaster.intersectObject(Net)[0],
      ind,
      vert;
  if (!inters) return;
  point = Net.worldToLocal(inters.point.clone());

  for (var i = 0; i < 3; i++) {
    ind = inters.face[abc[i]];
    if (!points.some(function (p, i) {
      return p.indexes.indexOf(ind) >= 0 && (vert = i + "");
    })) return;
    activeF[vert] = Math.max(1 - point.distanceTo(points[vert].pos) / dMid, 0) * 100;
  } // console.log(activeF, points[vert]);

}

canvas.onpointerdown = canvas.onmousedown = canvas.ontouchstart = function (e) {
  active = e.changedTouches ? e.changedTouches[0] : e;
  x0 = active.clientX;
  y0 = active.clientY;
  e.preventDefault();
  interact();
};

let onpointermove = onmousemove = ontouchmove = function (e) {
  if (!active || !ready) return;

  if (!e.buttons) {
    active = false;
    return;
  }

  var touches = e.changedTouches;
  if (active.identifier !== undefined && e.type != "touchmove") return;

  if (touches) {
    if (touches[0].identifier == active.identifier) e = touches[0];else return;
  } else {
    e.preventDefault();
  } //if (e.type==mousemove && !e.which) return


  dx = (5 * dx + x0 - (x0 = e.clientX)) / 6;
  dy = (5 * dy + y0 - (y0 = e.clientY)) / 6; //console.log(e.type, active.identifier, dx, x0)

  interact();
  ready = 0;
};

onmouseup = onpointerup = ontouchup = ontouchcancel = onpointercancel = onblur = function (e) {
  active = false; //console.log()

  interact();
};

var t0 = new Date() * 1,
    dMax = 80,
    dMin = 1000 / 33,
    dT = 1000 / 50,
    af,
    Pactive = [],
    m = 3000000,
    k = 400,
    k0 = 1,
    f0 = 0.01,
    fv = 1000,
    posArr = bGeometry.attributes.position.array,
    pUp = 0,
    pDn = [],
    flTimer = [],
    vecTest = new THREE.Vector3(),
    transStart,
    pLast,
    transactions = [];
requestAnimationFrame(function animate() {
  requestAnimationFrame(animate);
  var t = new Date() * 1,
      dt = t - t0;
  if (dt < dMin) return; // !Eh ||

  dt = Math.min(dt, dMax);
  t0 = t;
  var dd = dt / dT;
  var pos = canvas.getBoundingClientRect(),
      dY = window.innerHeight - document.documentElement.getBoundingClientRect().bottom;
  if (pos.bottom <= 0 || pos.top >= window.innerHeight) return;

  if (dpr != (dpr = window.devicePixelRatio) || W != (W = window.innerWidth) || H != (H = window.innerHeight)) {
    vMin = Math.min(W, H);
    renderer.setSize(W, H);
    renderer.setPixelRatio(dpr);
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
  }

  var addPoints = [];
  activePoints.forEach(function (point, i) {
    var b = point.brightness;

    if (point.isActive && (b += (point.speed || 0.3) * (b + 0.05) * dd) > 1) {
      //
      point.siblings.forEach(function (s, j) {
        if (activePoints.indexOf(s) > -1) return; //console.log(11);

        s.speed = 3.7 / point.distances[j]; //s.from=point;

        if (s.isActive = Math.random() > 0.6) activePoints.push(s);
      });
      point.isActive = 0;
    } else if (!point.isActive && (b -= b * 0.056 * dd) < 0.005) {
      b = 0; //point.from=

      activePoints.splice(i, 1);
    }

    point.brightness = b;
    point.indexes.forEach(function (i) {
      brights[i] = b;
    });
  });
  points.forEach(function (point, i) {
    var d = 0;
    point.siblings.forEach(function (s, j) {
      d += s.dr;
    });
    d = d / point.siblings.length - point.dr;
    point.f = -(activeF[i] || 0) * 0.4 + d * k - point.dr * k0 * (1 + Math.abs(1 - point.r)) - point.v * fv;
    point.v += point.f * dt / m;
    point.r = 1 + point.dr;
    point.indexes.forEach(function (j) {
      //brights[i]+=point.f; return;
      posArr[j *= 3] = point.r * point.pos.x;
      posArr[j + 1] = point.r * point.pos.y;
      posArr[j + 2] = point.r * point.pos.z;
    });
  });
  points.forEach(function (point, i) {
    if (!point.v) return;
    var dd = point.v * dt;
    point.dr += dd;
  });
  bGeometry.attributes.bright.needsUpdate = true;
  bGeometry.attributes.position.needsUpdate = true;
  camera.position.z += (posZ - camera.position.z) * 0.085 * dd;
  ro1 += roV1 * dd;
  ro2 += roV2 * dd;
  particles.rotation.set(0, 0, 0);
  particles.rotateY(ro2).rotateX(obliquity).rotateY(ro1);
  particles.rotation.y -= 0.0009;
  dx *= 1 - 0.03 * dd;
  dy *= 1 - 0.03 * dd;
  ro2 -= dx * 0.002; //+(W/2-y0)*(W/2-x0)*dy/vMin*.00004;

  world.rotation.x -= dy * 0.002;
  var sro = world.rotation.x *= 0.92;
  Net.applyMatrix(new THREE.Matrix4().getInverse(particles.matrixWorld).multiply(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-dy * 0.003, -dx * 0.002, 0))).multiply(particles.matrixWorld) //new THREE.Matrix4()
  );
  Earth.visible = !1;
  scene.scale.set(0.33, 0.33, 0.65); //.applyEuler(new THREE.Euler(-sro,0,0))

  cubeCamera.update(renderer, scene);
  Earth.visible = !0;
  scene.scale.set(1, 1, 1);
  particles.matrixWorldNeedsUpdate = true;
  renderer.render(scene, camera);
  ready = 1;
}); //})()

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/imac/Desktop/APADANA/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map