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
/* harmony import */ var persianjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! persianjs */ "persianjs");
/* harmony import */ var persianjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(persianjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Ads.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const newPositions = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 6,
  6: 7,
  7: 8,
  8: 9
};
class Ads extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      targetPosition: 0,
      title: "ویرا وب آپادانا",
      description: "توضیحات وب سایت",
      link: "https://apweb.ir",
      sliding: true,
      price: 100000,
      keywords: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.changePositionHandler = this.changePositionHandler.bind(this);
    this.addKeyword = this.addKeyword.bind(this);
    this.nativeToggleModal = this.nativeToggleModal.bind(this);
  }

  changeHandler(e) {
    let targetState = e.target.id.replace("ad-", "");
    this.setState({
      [targetState]: e.target.value
    });
  }

  changePositionHandler(e) {
    const currentPosition = e.target.value;
    this.setState({
      targetPosition: newPositions[currentPosition],
      position: currentPosition,
      price: currentPosition < 5 ? currentPosition * 100000 : currentPosition * 10000
    });
  }

  addKeyword(e) {
    const {
      keywords
    } = this.state;

    if (e.key == "Enter" & !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.includes(keywords, e.target.value)) {
      let newKeywords = keywords;
      newKeywords.push(e.target.value);
      e.target.value = "";
      this.setState({
        keywords: newKeywords
      });
    }
  }

  removeKeyword(target) {
    let {
      keywords
    } = this.state;
    let newKeywords = keywords;

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.pull(newKeywords, target);

    this.setState({
      keywords: newKeywords
    });
  }

  nativeToggleModal() {
    const {
      toggleModal: parentToggleModal
    } = this.props;
    parentToggleModal({
      ads: this.state
    });
  }

  render() {
    const {
      title,
      link,
      description,
      position,
      targetPosition,
      price,
      keywords
    } = this.state;
    return __jsx("div", {
      className: "ads",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u062A\u0628\u0644\u06CC\u063A\u0627\u062A \u062F\u0631 \u06AF\u0648\u06AF\u0644",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx("div", {
      className: "d-flex mt-5 rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "google-results w-50 ml-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, [...Array(10).keys()].map((item, index) => {
      if (index == targetPosition) {
        return __jsx("div", {
          className: "result target",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, __jsx("h3", {
          className: "text-primary bg-white text-right mb-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, title), __jsx("p", {
          className: "link bg-transparent text-success text-right my-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, link, __jsx("span", {
          className: "rounded ml-1 px-1 border border-success text-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Ad")), __jsx("p", {
          className: "description text-muted bg-transparent text-right mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, description));
      }

      return __jsx("div", {
        className: "result",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx("p", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx("p", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }));
    })), __jsx("div", {
      className: "google-target d-flex flex-column justify-content-around w-50 mr-5 rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "ad-title",
      className: "w-100 text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "\u0633\u0631\u0628\u0631\u06AF \u0648\u0628 \u0633\u0627\u06CC\u062A"), __jsx("input", {
      type: "text",
      className: "form-control",
      id: "ad-title",
      value: title,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "ad-link",
      className: "w-100 text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "\u0644\u06CC\u0646\u06A9 \u0633\u0627\u06CC\u062A"), __jsx("input", {
      type: "text",
      className: "form-control",
      id: "ad-link",
      value: link,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "ad-description",
      className: "w-100 text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"), __jsx("textarea", {
      className: "form-control",
      id: "ad-description",
      value: description,
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "ad-description",
      className: "w-100 text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "\u06A9\u0644\u0645\u0627\u062A \u06A9\u0644\u06CC\u062F\u06CC"), __jsx("ul", {
      className: "d-flex p-0 keywords-list py-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, keywords.map((item, index) => {
      return __jsx("li", {
        className: "bg-success text-light rounded mx-1 border p-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("i", {
        className: "far fa-times-circle ml-1 remove",
        onClick: () => this.removeKeyword(item),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), item);
    })), __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "\u06A9\u0644\u0645\u0647 \u06A9\u0644\u06CC\u062F\u06CC \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0648 Enter \u0628\u0632\u0646\u06CC\u062F",
      onKeyDown: this.addKeyword,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), __jsx("label", {
      htmlFor: "ad-position",
      className: "w-100 text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "\u0645\u0648\u0642\u0639\u06CC\u062A"), __jsx("input", {
      className: "form-control slider",
      type: "range",
      id: "ad-position",
      min: 1,
      max: 8,
      value: position,
      onChange: this.changePositionHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), __jsx("div", {
      className: "d-flex w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("hr", {
      className: "w-50 bg-muted mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }), __jsx("hr", {
      className: "w-50 bg-muted mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), __jsx("div", {
      className: "d-flex w-100 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("span", {
      className: "text-muted w-50",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "\u0686\u0647\u0627\u0631 \u062A\u0627\u06CC \u0628\u0627\u0644\u0627"), __jsx("span", {
      className: "text-muted w-50",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "\u0686\u0647\u0627\u0631 \u062A\u0627\u06CC \u067E\u0627\u06CC\u06CC\u0646"))), __jsx("div", {
      className: "d-flex justify-content-between align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "success",
      onClick: this.nativeToggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A")))));
  }

}

/***/ }),

/***/ "./components/Apadana.jsx":
/*!********************************!*\
  !*** ./components/Apadana.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Apadana; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sky */ "./components/Sky.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Apadana.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Apadana extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "apadana",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), __jsx("div", {
      className: "d-flex rtl mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "w-50 text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h5", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "\u0622\u0646\u0686\u0647 \u0627\u0632 \u0645\u0627 \u0628\u0627\u06CC\u062F \u0628\u062F\u0627\u0646\u06CC\u062F"), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("li", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-map-marker-alt ml-1 text-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("span", {
      className: "text-orange mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\u0622\u062F\u0631\u0633 : "), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "\u0645\u0631\u0632\u062F\u0627\u0631\u0627\u0646 \u062E\u06CC\u0627\u0628\u0627\u0646 \u0627\u0628\u0631\u0627\u0647\u06CC\u0645\u06CC \u0628\u0631\u062C \u0627\u0644\u0648\u0646\u062F \u0637\u0628\u0642\u0647 \u06F7 \u062C\u0646\u0648\u0628\u06CC \u0648\u0627\u062D\u062F \u06F7\u06F0\u06F7")), __jsx("li", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-building ml-1 text-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("span", {
      className: "text-orange mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "\u0634\u0645\u0627\u0631\u0647 \u062B\u0628\u062A : "), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "531911"))), __jsx("h5", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "\u0631\u0627\u0647 \u0647\u0627\u06CC \u0627\u0631\u062A\u0628\u0627\u0637\u06CC"), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("li", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-user-astronaut ml-1 text-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("span", {
      className: "text-orange mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "\u062A\u0644\u0641\u0646 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC : "), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "\u06F4\u06F4\u06F2\u06F5\u06F9\u06F6\u06F8\u06F8-\u06F0\u06F2\u06F1")), __jsx("li", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-phone ml-1 text-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("span", {
      className: "text-orange mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "\u062A\u0644\u0641\u0646 \u0645\u0634\u0627\u0648\u0631\u0647 : "), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "\u06F4\u06F4\u06F2\u06F5\u06F9\u06F6\u06F1\u06F1-\u06F0\u06F2\u06F1")), __jsx("li", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("i", {
      className: "fab fa-instagram ml-1 text-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("span", {
      className: "text-orange mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "\u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645 \u0645\u0627 : "), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("a", {
      href: "http://instagram.com/virawebapadana",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "@virawebapadana")))), __jsx("h5", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\u0627\u0645\u0648\u0631 \u0645\u0627\u0644\u06CC"), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("li", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-credit-card ml-1 text-orange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx("span", {
      className: "text-orange mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\u067E\u0631\u062F\u0627\u062E\u062A \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0627 \u0632\u0631\u06CC\u0646 \u067E\u0627\u0644 :", " "), __jsx("span", {
      className: "text-muted mr-1 bg-warning px-3 py-2 rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("a", {
      href: "http://zarinp.al/apweb.ir",
      className: "text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "\u067E\u0631\u062F\u0627\u062E\u062A")))), __jsx("h5", {
      className: "my-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "\u0646\u0645\u0627\u062F \u0647\u0627"), __jsx("ul", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("li", {
      className: "rounded bg-white shadow mx-1 d-flex flex-column border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("img", {
      src: "/images/enamad.png",
      alt: "enamad",
      width: "50",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })), __jsx("li", {
      className: "rounded bg-white shadow mx-1 d-flex flex-column border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      src: "/images/samandehi.png",
      alt: "samandehi",
      width: "50",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), __jsx("li", {
      className: "rounded bg-white shadow mx-1 d-flex flex-column border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("img", {
      src: "/images/zarinpal.png",
      alt: "zarinpal",
      width: "50",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      id: "iwmf-certificate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })))), __jsx("div", {
      className: "w-50",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-62095387" + " " + "mapouter rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-62095387" + " " + "gmap_canvas rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      src: "/images/map.png",
      width: "480",
      height: "460",
      className: "jsx-62095387" + " " + "rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "62095387",
      __self: this
    }, ".mapouter.jsx-62095387{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas.jsx-62095387{overflow:hidden;background:none !important;height:500px;width:600px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbWFjL0Rlc2t0b3AvQVBBREFOQS9jb21wb25lbnRzL0FwYWRhbmEuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHMEIsQUFHcUMsQUFNRixnQkFDVyxFQU5WLGlCQUNKLFFBTUEsS0FMRCxRQU1BLElBTGQsUUFNQSIsImZpbGUiOiIvVXNlcnMvaW1hYy9EZXNrdG9wL0FQQURBTkEvY29tcG9uZW50cy9BcGFkYW5hLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTa3kgZnJvbSBcIi4vU2t5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwYWRhbmEgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBhZGFuYVwiPlxuICAgICAgICA8U2t5IHRpdGxlPVwi2YjbjNix2Kcg2YjYqCDYotm+2KfYr9in2YbYp1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IHJ0bCBtdC01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUwIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJteS0zXCI+2KLZhtqG2Ycg2KfYsiDZhdinINio2KfbjNivINio2K/Yp9mG24zYrzwvaDU+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFsIGZhLW1hcC1tYXJrZXItYWx0IG1sLTEgdGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIG14LTFcIj7Yotiv2LHYsyA6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG1yLTFcIj5cbiAgICAgICAgICAgICAgICAgINmF2LHYstiv2KfYsdin2YYg2K7bjNin2KjYp9mGINin2KjYsdin2YfbjNmF24wg2KjYsdisINin2YTZiNmG2K8g2LfYqNmC2Ycg27cg2KzZhtmI2KjbjCDZiNin2K3YryDbt9uw27dcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFsIGZhLWJ1aWxkaW5nIG1sLTEgdGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIG14LTFcIj7YtNmF2KfYsdmHINir2KjYqiA6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG1yLTFcIj41MzE5MTE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTNcIj7Ysdin2Ycg2YfYp9uMINin2LHYqtio2KfYt9uMPC9oNT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWwgZmEtdXNlci1hc3Ryb25hdXQgbWwtMSB0ZXh0LW9yYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UgbXgtMVwiPtiq2YTZgdmGINm+2LTYqtuM2KjYp9mG24wgOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtci0xXCI+27TbtNuy27Xbudu227jbuC3bsNuy27E8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFsIGZhLXBob25lIG1sLTEgdGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIG14LTFcIj7YqtmE2YHZhiDZhdi02KfZiNix2YcgOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtci0xXCI+27TbtNuy27Xbudu227HbsS3bsNuy27E8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbSBtbC0xIHRleHQtb3JhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZSBteC0xXCI+2KfbjNmG2LPYqtin2q/Ysdin2YUg2YXYpyA6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIG1yLTFcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vaW5zdGFncmFtLmNvbS92aXJhd2ViYXBhZGFuYVwiPlxuICAgICAgICAgICAgICAgICAgICBAdmlyYXdlYmFwYWRhbmFcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTNcIj7Yp9mF2YjYsSDZhdin2YTbjDwvaDU+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFsIGZhLWNyZWRpdC1jYXJkIG1sLTEgdGV4dC1vcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIG14LTFcIj5cbiAgICAgICAgICAgICAgICAgINm+2LHYr9in2K7YqiDZhdiz2KrZgtuM2YUg2KjYpyDYstix24zZhiDZvtin2YQgOntcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtci0xIGJnLXdhcm5pbmcgcHgtMyBweS0yIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vemFyaW5wLmFsL2Fwd2ViLmlyXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICDZvtix2K/Yp9iu2KpcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTNcIj7ZhtmF2KfYryDZh9inPC9oNT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctd2hpdGUgc2hhZG93IG14LTEgZC1mbGV4IGZsZXgtY29sdW1uIGJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9lbmFtYWQucG5nXCIgYWx0PVwiZW5hbWFkXCIgd2lkdGg9XCI1MFwiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLXdoaXRlIHNoYWRvdyBteC0xIGQtZmxleCBmbGV4LWNvbHVtbiBib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2FtYW5kZWhpLnBuZ1wiIGFsdD1cInNhbWFuZGVoaVwiIHdpZHRoPVwiNTBcIiAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicm91bmRlZCBiZy13aGl0ZSBzaGFkb3cgbXgtMSBkLWZsZXggZmxleC1jb2x1bW4gYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3phcmlucGFsLnBuZ1wiIGFsdD1cInphcmlucGFsXCIgd2lkdGg9XCI1MFwiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIml3bWYtY2VydGlmaWNhdGVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcG91dGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbWFwX2NhbnZhcyByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9tYXAucG5nXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDgwXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ2MFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJnbWFwX2NhbnZhc1wiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP3E9JUQ4JUE4JUQ4JUIxJUQ4JUFDJTIwJUQ4JUE3JUQ5JTg0JUQ5JTg4JUQ5JTg2JUQ4JUFGJnQ9Jno9MTMmaWU9VVRGOCZpd2xvYz0mb3V0cHV0PWVtYmVkXCJcbiAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICBzY3JvbGxpbmc9XCJub1wiXG4gICAgICAgICAgICAgICAgPjwvaWZyYW1lPiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAubWFwb3V0ZXIge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ21hcF9jYW52YXMge1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/imac/Desktop/APADANA/components/Apadana.jsx */")))));
  }

}

/***/ }),

/***/ "./components/Contact.jsx":
/*!********************************!*\
  !*** ./components/Contact.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalExample; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Contact.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class ModalExample extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  saveContact() {
    const {
      firstName,
      lastName,
      website,
      phoneNumber
    } = this.state;
    let {
      information
    } = this.props;
    information = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(information);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3000/api/contact", {
      firstName,
      lastName,
      website,
      phoneNumber,
      information
    });
    alert("درخواست شما ثبت و همکاران ما به زودی با شما تماس خواهند گرفت .");
    this.setState({
      modal: false
    });
  }

  render() {
    const {
      modal
    } = this.props;
    return __jsx("div", {
      className: "rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      isOpen: modal,
      toggle: this.props.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], {
      toggle: this.toggleModal,
      className: "ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "\u0641\u0631\u0645 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], {
      className: "rtl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex justify-content-around",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex flex-column justify-content-start text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "firstName",
      className: "text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\u0646\u0627\u0645"), __jsx("input", {
      type: "text",
      id: "firstName",
      className: "form-control",
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), __jsx("div", {
      className: "d-flex flex-column justify-content-start text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "lastName",
      className: "text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"), __jsx("input", {
      type: "text",
      id: "lastName",
      className: "form-control",
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))), __jsx("div", {
      className: "d-flex justify-content-around",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex flex-column justify-content-start text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "website",
      className: "text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "\u0633\u0627\u06CC\u062A \u0634\u0645\u0627 ( \u0627\u062E\u062A\u06CC\u0627\u0631\u06CC )"), __jsx("input", {
      type: "text",
      id: "website",
      className: "form-control",
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), __jsx("div", {
      className: "d-flex flex-column justify-content-start text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "phoneNumber",
      className: "text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633"), __jsx("input", {
      type: "text",
      id: "phoneNumber",
      className: "form-control",
      onChange: this.changeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "primary",
      onClick: this.props.toggleModal,
      onClick: this.saveContact,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "\u0628\u0627 \u0645\u0646 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F"), " ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "secondary",
      onClick: this.props.toggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "\u0644\u063A\u0648"))));
  }

}

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var persianjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! persianjs */ "persianjs");
/* harmony import */ var persianjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(persianjs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Develop.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const personalArray = [{
  icon: "globe",
  text: "دامنه رایگان",
  active: true
}, {
  icon: "server",
  text: "سرور رایگان",
  active: true
}, {
  icon: "ad",
  text: "10 لیر ترکیه تبلیغ رایگان در گوگل",
  active: true
}, {
  icon: "lock-alt",
  text: "SSL",
  active: false,
  price: 400000
}, {
  icon: "palette",
  text: "قالب اختصاصی",
  active: false,
  price: 1500000
}, {
  icon: "shopping-bag",
  text: "فروشگاه",
  active: false,
  price: 500000
}, {
  icon: "users",
  text: "باشگاه مشتریان",
  active: false,
  price: 1000000
}, {
  icon: "chart-line",
  text: "سئو سالانه",
  active: false,
  price: 7000000
}];
const organisationArray = [{
  icon: "globe",
  text: "دامنه رایگان",
  active: true
}, {
  icon: "server",
  text: "سرور رایگان",
  active: true
}, {
  icon: "ad",
  text: "50 لیر ترکیه تبلیغ رایگان در گوگل",
  active: true
}, {
  icon: "lock-alt",
  text: "SSL رایگان",
  active: true
}, {
  icon: "palette",
  text: "قالب اختصاصی",
  active: false,
  price: 3000000
}, {
  icon: "shopping-bag",
  text: "فروشگاه",
  active: false,
  price: 4000000
}, {
  icon: "users",
  text: "باشگاه مشتریان",
  active: false,
  price: 4000000
}, {
  icon: "chart-line",
  text: "سئو",
  active: false,
  price: 5000000
}, {
  icon: "mobile",
  text: "اپلیکیشن موبایل",
  active: false,
  price: 10000000
}];
const customizeArray = [{
  icon: "globe",
  text: "دامنه رایگان",
  active: true
}, {
  icon: "server",
  text: "سرور رایگان",
  active: true
}, {
  icon: "ad",
  text: "200 لیر ترکیه تبلیغ رایگان در گوگل",
  active: true
}, {
  icon: "lock-alt",
  text: "SSL",
  active: true
}, {
  icon: "palette",
  text: "قالب اختصاصی",
  active: true
}, {
  icon: "shopping-bag",
  text: "فروشگاه",
  active: true
}, {
  icon: "users",
  text: "باشگاه مشتریان",
  active: true
}, {
  icon: "chart-line",
  text: "سئو رایگان",
  active: true
}, {
  icon: "mobile",
  text: "اپلیکیشن موبایل",
  active: true
}, {
  icon: "project-diagram",
  text: "CRM",
  active: true
}, {
  icon: "clipboard-list",
  text: "سیستم رزرواسیون",
  active: true
}, {
  icon: "smile-wink",
  text: "و هر چیزی که شما نیاز داشته باشید ...",
  active: true
}];
class Develop extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      personal: [],
      personalPrice: 2000000,
      organizationPrice: 4000000,
      organization: []
    };
    this.selectFeature = this.selectFeature.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  selectFeature(plan, data, price) {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(this.state[plan], {
      data
    }) == -1) {
      return this.setState({
        [plan]: [...this.state[plan], {
          data,
          price
        }]
      });
    }

    this.setState({
      [plan]: this.state[plan].filter(item => item.data != data)
    });
  }

  getTotalPrice(plan) {
    const totalSelectedPlan = this.state[plan].reduce((total, current) => {
      return total + current.price;
    }, 0);
    return (+this.state[`${plan}Price`] + +totalSelectedPlan).toLocaleString();
  }

  render() {
    return __jsx("div", {
      className: "develop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "plans d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "plan d-flex justify-content-start align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-personal-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0634\u062E\u0635\u06CC"), __jsx("strong", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, persianjs__WEBPACK_IMPORTED_MODULE_2___default()(this.getTotalPrice("personal")).englishNumber().toString(), " ", "\u062A\u0648\u0645\u0627\u0646")), __jsx("div", {
      className: "d-flex flex-column body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("p", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u0627\u0641\u0631\u0627\u062F \u0628\u0627 \u0647\u0632\u06CC\u0646\u0647 \u06A9\u0645 \u0648 \u0627\u0642\u062A\u0635\u0627\u062F\u06CC")), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, personalArray.filter(item => item.active).map((item, index) => {
      return __jsx("li", {
        key: index,
        className: `feature rounded d-flex align-items-center ml-2 active`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, item.text));
    })), __jsx("p", {
      className: "text-dark mt-3 description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("span", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "\u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u0633\u0641\u0627\u0631\u0634\u06CC"), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "( \u062F\u0631 \u0635\u0648\u0631\u062A \u0646\u06CC\u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F )")), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, personalArray.filter(item => !item.active).map((item, index) => {
      return __jsx("li", {
        key: index,
        className: `feature rounded d-flex align-items-center ml-2 deactive ${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(this.state.personal, {
          data: item.text
        }) != -1 && "bg-success text-white selected"}`,
        onClick: () => this.selectFeature("personal", item.text, item.price),
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, item.text));
    }))), __jsx("button", {
      className: "order btn d-flex",
      onClick: () => this.props.toggleModal({
        develop: "personal"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-rocket mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u06A9\u0634\u0648\u0631\u06CC \u0634\u062F\u0646")), __jsx("button", {
      className: "description btn d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"), __jsx("i", {
      className: "fas fa-sort-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }))), __jsx("div", {
      className: "plan d-flex justify-content-start align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-standard-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0634\u0631\u06A9\u062A\u06CC"), __jsx("strong", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, persianjs__WEBPACK_IMPORTED_MODULE_2___default()(this.getTotalPrice("organization")).englishNumber().toString(), " ", "\u062A\u0648\u0645\u0627\u0646")), __jsx("div", {
      className: "d-flex flex-column body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("p", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u0634\u0631\u06A9\u062A \u0647\u0627 \u0648 \u0633\u0627\u0632\u0645\u0627\u0646 \u0647\u0627\u06CC \u06A9\u0648\u0686\u06A9")), __jsx("ul", {
      className: "features d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chunk(organisationArray.filter(item => item.active), 3).map((item, index) => {
      return __jsx("ul", {
        className: "d-flex pb-1",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, item.map((feature, index) => {
        return __jsx("li", {
          key: index,
          className: `feature rounded d-flex align-items-center ml-2 active`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, __jsx("i", {
          className: `fal fa-${feature.icon} mx-1`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }), __jsx("span", {
          className: "mx-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, feature.text));
      }));
    })), __jsx("p", {
      className: "text-dark mt-3 description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx("span", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "\u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u0633\u0641\u0627\u0631\u0634\u06CC"), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "( \u062F\u0631 \u0635\u0648\u0631\u062A \u0646\u06CC\u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F )")), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, organisationArray.filter(item => !item.active).map((item, index) => {
      return __jsx("li", {
        key: index,
        className: `feature rounded d-flex align-items-center ml-2 deactive ${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(this.state.organization, {
          data: item.text
        }) != -1 && "bg-success text-white selected"}`,
        onClick: () => this.selectFeature("organization", item.text, item.price),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, item.text));
    }))), __jsx("button", {
      className: "order btn d-flex",
      onClick: () => this.props.toggleModal({
        develop: "company"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-rocket mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    })), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u062C\u0647\u0627\u0646\u06CC \u0634\u062F\u0646")), __jsx("button", {
      className: "description btn d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"), __jsx("i", {
      className: "fas fa-sort-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }))), __jsx("div", {
      className: "plan d-flex justify-content-start align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-customize-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx("h2", {
      className: "gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC"), __jsx("strong", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, "\u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F ")), __jsx("div", {
      className: "d-flex flex-column body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, __jsx("p", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u0634\u0631\u06A9\u062A \u0647\u0627 \u0627\u0634\u062E\u0627\u0635 \u0628\u0627 \u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u06A9\u0627\u0645\u0644\u0627 \u0633\u0641\u0627\u0631\u0634\u06CC")), __jsx("ul", {
      className: "features d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chunk(customizeArray.filter(item => item.active), 3).map((item, index) => {
      return __jsx("ul", {
        className: "d-flex pb-1",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, item.map((feature, index) => {
        return __jsx("li", {
          className: `feature rounded d-flex align-items-center ml-2 active`,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        }, __jsx("i", {
          className: `fal fa-${feature.icon} mx-1`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }), __jsx("span", {
          className: "mx-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, feature.text));
      }));
    })), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, customizeArray.filter(item => !item.active).map((item, index) => {
      return __jsx("li", {
        key: index,
        className: `feature rounded d-flex align-items-center ml-2 deactive ${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(this.state.organization, {
          data: item.text
        }) != -1 && "bg-success text-white selected"}`,
        onClick: () => this.selectFeature("organization", item.text, item.price),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, item.text));
    }))), __jsx("button", {
      className: "order btn d-flex",
      onClick: () => this.props.toggleModal({
        develop: "customize"
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-space-shuttle mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    })), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u06A9\u0647\u06A9\u0634\u0627\u0646\u06CC \u0634\u062F\u0646")), __jsx("button", {
      className: "description btn d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"), __jsx("i", {
      className: "fas fa-sort-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    })))));
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
        lineNumber: 6
      },
      __self: this
    }, __jsx("img", {
      src: "/images/footer2.jpeg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), __jsx("div", {
      className: "text-dark text-right rtl mr-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u06A9\u0644\u06CC\u0647 \u062D\u0642\u0648\u0642 \u0645\u0627\u062F\u06CC \u0648 \u0645\u0639\u0646\u0648\u06CC \u0645\u062A\u0639\u0644\u0642 \u0628\u0647 \u0634\u0631\u06A9\u062A \u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u0645\u06CC \u0628\u0627\u0634\u062F"), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-copyright",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), "copyright 2020")));
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
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("img", {
      src: "/images/logo_full.png",
      width: "150",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    })), __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-user-astronaut mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\u0645\u0634\u0627\u0648\u0631\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646")), __jsx("div", {
      className: "d-flex numbers text-left align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-satellite-dish mx-1 justify-content-around",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      className: "d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("strong", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "\u06F0\u06F2\u06F1-\u06F4\u06F4\u06F2\u06F5\u06F9\u06F6\u06F8\u06F8"), __jsx("strong", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Samples.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const countOfStars = 400;

const samples = [{
  title: "چلیپا کابل پویا",
  link: "chalipacable.ir",
  image: "chalipa",
  technologies: [{
    name: "Node.js",
    image: "nodejs"
  }, {
    name: "React.js",
    image: "react"
  }, {
    name: "Next.js",
    image: "nextjs"
  }]
}, {
  title: "سپاهان لوله",
  link: "sepahangroup.com",
  image: "sepahangroup",
  technologies: [{
    name: "Node.js",
    image: "nodejs"
  }, {
    name: "React.js",
    image: "react"
  }, {
    name: "Next.js",
    image: "nextjs"
  }]
}, {
  title: "چاپ رز",
  link: "chaperose.com",
  image: "chaperose",
  technologies: [{
    name: "Wordpress",
    image: "wordpress"
  }, {
    name: "Elementor",
    image: "elementor"
  }, {
    name: "Next.js",
    image: "nextjs"
  }]
}];
class Samples extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "samples",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u0646\u0645\u0648\u0646\u0647 \u06A9\u0627\u0631\u0647\u0627",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), [...Array(countOfStars).keys()].map(item => {
      return __jsx("div", {
        className: `star sample-star-${item}`,
        key: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      });
    }), __jsx("ul", {
      className: "rtl mx-2 samples-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, samples.map(item => {
      return __jsx("li", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "d-flex justify-content-between",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        className: "d-flex align-items-center justify-content-center flex-column text-right",
        sm: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "sample-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "title-line-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("i", {
        className: "parent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), __jsx("i", {
        className: "child-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx("i", {
        className: "child-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), __jsx("i", {
        className: "child-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx("i", {
        className: "child-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("i", {
        className: "child-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx("div", {
        className: "first-top-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("div", {
        className: "second-top-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("div", {
        className: "top-border-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("h5", {
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, item.title), __jsx("div", {
        className: "first-bottom-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("div", {
        className: "second-bottom-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("div", {
        className: "bottom-border-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx("div", {
        className: "title-line-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("i", {
        className: "parent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx("i", {
        className: "child-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx("i", {
        className: "child-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("i", {
        className: "child-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), __jsx("i", {
        className: "child-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), __jsx("i", {
        className: "child-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        className: "sample-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        className: "frame d-flex flex-column justify-content-center align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, item.link)), __jsx("img", {
        src: `/images/samples/${item.image}.png`,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "d-flex flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, item.technologies.map(technology => {
        return __jsx("div", {
          className: "d-flex align-items-center justify-content-around",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("img", {
          src: `/images/technologies/${technology.image}.png`,
          alt: technology.name,
          className: "technology-icon my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), __jsx("span", {
          className: "text-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, technology.name));
      })))));
    })));
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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sky */ "./components/Sky.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var persianjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! persianjs */ "persianjs");
/* harmony import */ var persianjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(persianjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Seo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







class Seo extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      keyword: "",
      currentPosition: 5,
      targetPosition: 1,
      features: [],
      loading: false
    };
    this.addNewKeyword = this.addNewKeyword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.selectFeatures = this.selectFeatures.bind(this);
    this.removeKeyword = this.removeKeyword.bind(this);
    this.nativeToggleModal = this.nativeToggleModal.bind(this);
  }

  async addNewKeyword(e) {
    const {
      keywords
    } = this.state;
    const query = e.target.value;

    if (e.key == "Enter" && query && !lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(keywords, query)) {
      this.setState({
        loading: true
      });
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(`http://localhost:3000/api/google/${encodeURI(query)}`);
      this.setState({
        keywords: [{
          query: query,
          count: data.totalResults * 2
        }, ...keywords],
        keyword: "",
        loading: false
      });
    }
  }

  removeKeyword(target) {
    const {
      keywords
    } = this.state;
    this.setState({
      keywords: keywords.filter(item => item != target)
    });
  }

  getTotalPrice() {
    const {
      keywords,
      currentPosition,
      targetPosition,
      features
    } = this.state;
    let totalPrice = 0;
    totalPrice = keywords.reduce((total, current) => {
      return total + current.count / (current.count > 10000000 ? 10 : 1);
    }, 0);
    const newPercents = {
      1: [0.5, 0],
      2: [0.8, 0.6],
      3: [1, 0.7],
      4: [1.2, 0.9],
      5: [1.5, 1]
    };
    totalPrice = totalPrice * newPercents[currentPosition][targetPosition];
    if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(features, 1)) totalPrice += 400000;
    if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(features, 2)) totalPrice += 2000000;
    totalPrice = totalPrice ? totalPrice : 0;
    return [persianjs__WEBPACK_IMPORTED_MODULE_10___default()(Math.floor(totalPrice).toLocaleString()).englishNumber().toString(), totalPrice];
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  selectFeatures(feature) {
    const {
      features
    } = this.state;

    if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(features, feature)) {
      return this.setState({
        features: features.filter(item => {
          return item !== feature;
        })
      });
    }

    return this.setState({
      features: [...features, feature]
    });
  }

  nativeToggleModal() {
    const {
      toggleModal: parentToggleModal
    } = this.props;
    parentToggleModal({
      seo: _objectSpread({}, this.state, {
        price: this.getTotalPrice()[1]
      })
    });
  }

  render() {
    const {
      keywords,
      keyword,
      currentPosition,
      targetPosition,
      features,
      loading
    } = this.state;
    const totalPrice = this.getTotalPrice();
    return __jsx("div", {
      className: "seo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "\u0633\u0626\u0648 \u0648 \u062A\u0648\u0644\u06CC\u062F \u0645\u062D\u062A\u0648\u0627",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), __jsx("div", {
      className: "seo-container d-flex flex-column w-100 mt-5 rtl text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "w-50 mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "keyword",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "\u06A9\u0644\u0645\u0647 \u06A9\u0644\u06CC\u062F\u06CC \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u0648 enter \u0628\u0632\u0646\u06CC\u062F"), __jsx("div", {
      className: "d-flex flex-column align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      id: "keyword",
      name: "keyword",
      onKeyPress: this.addNewKeyword,
      onChange: this.handleChange,
      value: keyword,
      autoComplete: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }), __jsx("span", {
      className: `spinner-border spinner-border-sm my-1 ${loading ? `active` : `deactive`}`,
      role: "status",
      "aria-hidden": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), __jsx("ul", {
      className: "keywoards",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, keywords.map((item, index) => {
      return __jsx("li", {
        key: index,
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("span", {
        className: "p-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx("i", {
        className: "far fa-times-circle ml-1 remove",
        onClick: () => this.removeKeyword(item),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), item.query, __jsx("span", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, " ", __jsx("i", {
        className: "fas fa-sort-down point",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), " ", persianjs__WEBPACK_IMPORTED_MODULE_10___default()((item.count / (item.count > 10000000 ? 10 : 1)).toLocaleString()).englishNumber().toString())));
    }))), __jsx("div", {
      className: "bg-white w-50 mx-2 d-flex flex-column justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "current-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "\u0633\u0627\u06CC\u062A\u062A \u0627\u0644\u0627\u0646 \u0635\u0641\u062D\u0647 \u0686\u0646\u062F\u0645\u0647 \u061F"), __jsx("ul", {
      className: "list-selector d-flex p-0",
      id: "current-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 1 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 1
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "\u0627\u0648\u0644"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 2 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 2
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "\u062F\u0648\u0645"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 3 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 3
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "\u0633\u0648\u0645"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 4 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 4
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "\u0686\u0647\u0627\u0631\u0645"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 5 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 5
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "\u067E\u0646\u062C\u0645 \u06CC\u0627 \u0628\u06CC\u0634\u062A\u0631")), __jsx("label", {
      htmlFor: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "\u0645\u06CC\u062E\u0648\u0627\u06CC \u06A9\u062C\u0627\u06CC \u0635\u0641\u062D\u0647 \u0627\u0648\u0644 \u0628\u0627\u0634\u06CC \u061F"), __jsx("ul", {
      className: "list-selector d-flex p-0 w-100",
      id: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${targetPosition === 0 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        targetPosition: 0
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "\u0633\u0647 \u062A\u0627\u06CC \u0627\u0648\u0644"), __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${targetPosition === 1 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        targetPosition: 1
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, "\u0645\u0647\u0645 \u0646\u06CC\u0633\u062A")), __jsx("label", {
      htmlFor: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "\u0686\u0647 \u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u062F\u06CC\u06AF\u0647 \u0627\u06CC \u0644\u0627\u0632\u0645 \u062F\u0627\u0631\u06CC\u062F \u061F"), __jsx("ul", {
      className: "list-selector d-flex p-0 w-100",
      id: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(features, 1) ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.selectFeatures(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "\u06AF\u0648\u06AF\u0644 \u0645\u067E"), __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(features, 2) ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.selectFeatures(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, "\u062D\u0627\u0644 \u062E\u0648\u0628 \u06A9\u0646 \u0633\u0627\u06CC\u062A"))), __jsx("div", {
      className: "d-flex justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, "\u0642\u06CC\u0645\u062A \u062A\u062E\u0645\u06CC\u0646\u06CC"), __jsx("span", {
      className: "text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, totalPrice[1] == 0 ? __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-laugh-squint",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, "\u062A\u0627 \u0627\u06CC\u0646\u062C\u0627\u0634 \u06A9\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646\u0647")) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, __jsx("span", {
      className: "row-price ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, totalPrice[0]), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "\u062A\u0648\u0645\u0627\u0646")))))), __jsx("div", {
      className: "d-flex flex-column discounts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, __jsx("span", {
      className: "text-success mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-gift",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }), "\u0647\u062F\u06CC\u0647 \u0647\u0627"), __jsx("ul", {
      className: "d-flex justify-content-between unstyled p-0  mx-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, "\u0628\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062E\u0631\u06CC\u062F"), __jsx("b", {
      className: "bg-light p-1 rounded discount-title border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }), "\u06F4\u06F0\u06F0 \u0644\u06CC\u0631 \u062A\u0628\u0644\u06CC\u063A \u062F\u0631 \u06AF\u0648\u06AF\u0644"), " ", __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, "\u0627\u0632 \u0645\u0627 \u0647\u062F\u06CC\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F")), __jsx("li", {
      className: "discount-status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, this.getTotalPrice()[1] >= 10000000 ? __jsx("span", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-grin-hearts ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }), "\u0634\u0645\u0627 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u0647\u062F\u06CC\u0647 \u0647\u0627 \u0647\u0633\u062A\u06CC\u062F") : __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, "\u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u062A\u062E\u0641\u06CC\u0641 \u0646\u0634\u062F\u06CC\u062F"))), __jsx("ul", {
      className: "d-flex justify-content-between unstyled p-0  mx-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, __jsx("li", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, "\u0628\u0627 \u06F1\u06F5 \u062A\u0648\u0645\u0627\u0646 \u062E\u0631\u06CC\u062F \u0627\u0632 \u0645\u0627 \u0645\u0648\u0627\u0631\u062F \u0631\u0648 \u0628\u0647 \u0631\u0648 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062A \u0633\u0627\u0644\u0627\u0646\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F :"), __jsx("ul", {
      className: "d-flex p-0 items mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }), "SSL"), __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }), "\u0633\u0631\u0648\u0631"), __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }), "\u062F\u0627\u0645\u0646\u0647"))), __jsx("li", {
      className: "discount-status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, this.getTotalPrice()[1] >= 15000000 ? __jsx("span", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-grin-hearts ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }), "\u0634\u0645\u0627 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u0647\u062F\u06CC\u0647 \u0647\u0627 \u0647\u0633\u062A\u06CC\u062F") : __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, "\u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u062A\u062E\u0641\u06CC\u0641 \u0646\u0634\u062F\u06CC\u062F"))), __jsx("ul", {
      className: "d-flex justify-content-between unstyled p-0 mx-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, __jsx("li", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, "\u0628\u0627 \u06F3\u06F0 \u062A\u0648\u0645\u0627\u0646 \u062E\u0631\u06CC\u062F \u066C \u06CC\u06A9 \u0645\u0648\u0631\u062F \u0631\u0627 \u0628\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u062E\u0648\u062F \u0647\u062F\u06CC\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F :"), __jsx("ul", {
      className: "d-flex p-0 items mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }), "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, " \u06CC\u0627 "), __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }), "\u0637\u0631\u0627\u062D\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646"))), __jsx("li", {
      className: "discount-status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, this.getTotalPrice()[1] >= 30000000 ? __jsx("span", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-grin-hearts ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }), "\u0634\u0645\u0627 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u0647\u062F\u06CC\u0647 \u0647\u0627 \u0647\u0633\u062A\u06CC\u062F") : __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, "\u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u062A\u062E\u0641\u06CC\u0641 \u0646\u0634\u062F\u06CC\u062F")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      color: "success",
      onClick: this.nativeToggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646")));
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
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Sky.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // const countOfStars = 200;


class SkyBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "sky d-flex jsutifu-content-center align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "particles",
      params: {
        particles: {
          number: {
            value: 25
          },
          size: {
            value: 3
          },
          line_linked: {
            color: "#ddd"
          },
          color: {
            value: "#ddd"
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "particles-second",
      params: {
        particles: {
          number: {
            value: 15
          },
          size: {
            value: 3
          },
          line_linked: {
            color: "#f1f1f1"
          },
          color: {
            value: "#FF6E1B"
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx("h1", {
      className: "text-white h-100 align-items-center d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, this.props.title)));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      modal: false,
      information: {}
    };
    this.changeTab = this.changeTab.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(information) {
    this.setState({
      modal: !this.state.modal,
      information
    });
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
            lineNumber: 29
          },
          __self: this
        });

      case 2:
        return __jsx(_components_Seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          toggleModal: this.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        });

      case 3:
        return __jsx(_components_Develop__WEBPACK_IMPORTED_MODULE_5__["default"], {
          toggleModal: this.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });

      case 4:
        return __jsx(_components_Ads__WEBPACK_IMPORTED_MODULE_7__["default"], {
          toggleModal: this.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        });

      case 5:
        return __jsx(_components_Samples__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        });
    }
  }

  render() {
    const {
      modal,
      information
    } = this.state;
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627")), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
      modal: modal,
      toggleModal: this.toggleModal,
      information: information,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx(_components_Earth__WEBPACK_IMPORTED_MODULE_1__["default"], {
      changeTab: this.changeTab,
      tab: this.state.tab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "persianjs":
/*!****************************!*\
  !*** external "persianjs" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("persianjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map