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
      className: "ads w-100",
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sky */ "./components/Sky.jsx");
var _jsxFileName = "/Users/imac/Desktop/APADANA/components/Apadana.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Apadana extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "apadana",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "\u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), __jsx("div", {
      className: "d-flex rtl mt-5 flex-column flex-md-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "text-right w-100",
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
      className: "w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("iframe", {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.699251699539!2d51.34322471561307!3d35.73361433470401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfdcbf217f9b7%3A0xe3bc68f13b54059f!2z2YjbjNix2Kcg2YjYqCDYotm-2KfYr9in2YbYpw!5e0!3m2!1sen!2suk!4v1579678335188!5m2!1sen!2suk",
      width: "100%",
      height: "100%",
      frameBorder: "0",
      style: {
        border: 0
      },
      allowFullScreen: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))));
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
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
      className: "develop h-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: "plans d-flex flex-column h-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      className: "plan w-100 d-flex justify-content-start align-items-center p-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-personal-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0634\u062E\u0635\u06CC"), __jsx("strong", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, persianjs__WEBPACK_IMPORTED_MODULE_2___default()(this.getTotalPrice("personal")).englishNumber().toString(), " ", "\u062A\u0648\u0645\u0627\u0646")), __jsx("div", {
      className: "d-flex flex-column body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("p", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u0627\u0641\u0631\u0627\u062F \u0628\u0627 \u0647\u0632\u06CC\u0646\u0647 \u06A9\u0645 \u0648 \u0627\u0642\u062A\u0635\u0627\u062F\u06CC")), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, personalArray.filter(item => item.active).map((item, index) => {
      return __jsx("li", {
        key: index,
        className: `feature rounded d-flex align-items-center ml-2 active`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, item.text));
    })), __jsx("p", {
      className: "text-dark mt-3 description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx("span", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "\u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u0633\u0641\u0627\u0631\u0634\u06CC"), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "( \u062F\u0631 \u0635\u0648\u0631\u062A \u0646\u06CC\u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F )")), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
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
          lineNumber: 145
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
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
        lineNumber: 167
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("i", {
      className: "fal fa-rocket mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    })), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u06A9\u0634\u0648\u0631\u06CC \u0634\u062F\u0646")), __jsx("button", {
      className: "description btn d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"), __jsx("i", {
      className: "fas fa-sort-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      className: "plan w-100 d-flex justify-content-start align-items-center p-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-standard-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0634\u0631\u06A9\u062A\u06CC"), __jsx("strong", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, persianjs__WEBPACK_IMPORTED_MODULE_2___default()(this.getTotalPrice("organization")).englishNumber().toString(), " ", "\u062A\u0648\u0645\u0627\u0646")), __jsx("div", {
      className: "d-flex flex-column body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("p", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u0634\u0631\u06A9\u062A \u0647\u0627 \u0648 \u0633\u0627\u0632\u0645\u0627\u0646 \u0647\u0627\u06CC \u06A9\u0648\u0686\u06A9")), __jsx("ul", {
      className: "features d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chunk(organisationArray.filter(item => item.active), 3).map((item, index) => {
      return __jsx("ul", {
        className: "d-flex pb-1",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, item.map((feature, index) => {
        return __jsx("li", {
          key: index,
          className: `feature rounded d-flex align-items-center ml-2 active`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, __jsx("i", {
          className: `fal fa-${feature.icon} mx-1`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }), __jsx("span", {
          className: "mx-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, feature.text));
      }));
    })), __jsx("p", {
      className: "text-dark mt-3 description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, __jsx("span", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "\u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u0633\u0641\u0627\u0631\u0634\u06CC"), __jsx("span", {
      className: "text-muted mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "( \u062F\u0631 \u0635\u0648\u0631\u062A \u0646\u06CC\u0627\u0632 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F )")), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
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
          lineNumber: 232
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
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
        lineNumber: 253
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-rocket mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    })), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u062C\u0647\u0627\u0646\u06CC \u0634\u062F\u0646")), __jsx("button", {
      className: "description btn d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"), __jsx("i", {
      className: "fas fa-sort-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      className: "plan w-100 d-flex justify-content-start align-items-center p-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, __jsx("img", {
      src: "/images/plan-customize-2.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }), __jsx("div", {
      className: "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }), __jsx("div", {
      className: "square",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }), __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, __jsx("h2", {
      className: "gold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, "\u067E\u0644\u0646 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC"), __jsx("strong", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, "\u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F ")), __jsx("div", {
      className: "d-flex flex-column body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, __jsx("p", {
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u0634\u0631\u06A9\u062A \u0647\u0627 \u0627\u0634\u062E\u0627\u0635 \u0628\u0627 \u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u06A9\u0627\u0645\u0644\u0627 \u0633\u0641\u0627\u0631\u0634\u06CC")), __jsx("ul", {
      className: "features d-flex flex-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chunk(customizeArray.filter(item => item.active), 3).map((item, index) => {
      return __jsx("ul", {
        className: "d-flex pb-1",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, item.map((feature, index) => {
        return __jsx("li", {
          className: `feature rounded d-flex align-items-center ml-2 active`,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, __jsx("i", {
          className: `fal fa-${feature.icon} mx-1`,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }), __jsx("span", {
          className: "mx-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, feature.text));
      }));
    })), __jsx("ul", {
      className: "features d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
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
          lineNumber: 307
        },
        __self: this
      }, __jsx("i", {
        className: `fal fa-${item.icon} mx-1`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }), __jsx("span", {
        className: "mx-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
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
        lineNumber: 328
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, __jsx("i", {
      className: "far fa-space-shuttle mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }), __jsx("div", {
      className: "wind",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    })), __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, "\u0634\u0631\u0648\u0639 \u06A9\u0647\u06A9\u0634\u0627\u0646\u06CC \u0634\u062F\u0646")), __jsx("button", {
      className: "description btn d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, __jsx("span", {
      className: "mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, "\u062A\u0648\u0636\u06CC\u062D\u0627\u062A"), __jsx("i", {
      className: "fas fa-sort-down",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }))))));
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
    __webpack_require__(/*! ../src/earth.js */ "./src/earth.js");

    const earthHeight = document.getElementById("earth").height;
    const dot1 = document.getElementsByClassName("dot-1")[0];
    const dot2 = document.getElementsByClassName("dot-2")[0];
    const dot3 = document.getElementsByClassName("dot-3")[0];
    const dot4 = document.getElementsByClassName("dot-4")[0];
    const dot5 = document.getElementsByClassName("dot-5")[0];
    dot1.style.right = `${earthHeight / 4.6}px`;
    dot2.style.right = `${earthHeight / 3.65}px`;
    dot3.style.right = `${earthHeight / 3.45}px`;
    dot4.style.right = `${earthHeight / 3.89}px`;
    dot5.style.right = `${earthHeight / 5.9}px`;
    window.addEventListener("resize", e => {
      const earthHeight = document.getElementById("earth").height;
      dot1.style.right = `${earthHeight / 4.6}px`;
      dot2.style.right = `${earthHeight / 3.65}px`;
      dot3.style.right = `${earthHeight / 3.45}px`;
      dot4.style.right = `${earthHeight / 3.89}px`;
      dot5.style.right = `${earthHeight / 5.9}px`;
    });
  }

  render() {
    const {
      changeTab,
      tab
    } = this.props;
    return __jsx("div", {
      className: "earth",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("canvas", {
      id: "earth",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("div", {
      className: "dots",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: `dot-1 d-flex align-items-center ${tab == 1 && "active"}`,
      onClick: () => changeTab(1),
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
    }, "\u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627")), __jsx("div", {
      className: `dot-2 d-flex align-items-center ${tab == 2 && "active"}`,
      onClick: () => changeTab(2),
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
    }, "\u0633\u0626\u0648 \u0648 \u062A\u0648\u0644\u06CC\u062F \u0645\u062D\u062A\u0648\u0627")), __jsx("div", {
      className: `dot-3 d-flex align-items-center ${tab == 3 && "active"}`,
      onClick: () => changeTab(3),
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
    }, "\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u0648 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646")), __jsx("div", {
      className: `dot-4 d-flex align-items-center ${tab == 4 && "active"}`,
      onClick: () => changeTab(4),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), __jsx("div", {
      className: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "\u062A\u0628\u0644\u06CC\u063A\u0627\u062A \u062F\u0631 \u06AF\u0648\u06AF\u0644")), __jsx("div", {
      className: `dot-5 d-flex align-items-center ${tab == 5 && "active"}`,
      onClick: () => changeTab(5),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx("div", {
      className: "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx("div", {
      className: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
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
    }, samples.map((item, index) => {
      return __jsx("li", {
        className: "mb-4",
        key: index,
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
      }, item.technologies.map((technology, index) => {
        return __jsx("div", {
          className: "d-flex align-items-center justify-content-around",
          key: index,
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
      const count = data.totalResults < 300000 ? 300000 : data.totalResults * 2;
      this.setState({
        keywords: [{
          query: query,
          count
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
        lineNumber: 105
      },
      __self: this
    }, __jsx(_Sky__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "\u0633\u0626\u0648 \u0648 \u062A\u0648\u0644\u06CC\u062F \u0645\u062D\u062A\u0648\u0627",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), __jsx("div", {
      className: "seo-container d-flex flex-column w-100 mt-5 rtl text-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("div", {
      className: "w-50 mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "keyword",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "\u06A9\u0644\u0645\u0647 \u06A9\u0644\u06CC\u062F\u06CC \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u0648 enter \u0628\u0632\u0646\u06CC\u062F"), __jsx("div", {
      className: "d-flex flex-column align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
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
        lineNumber: 114
      },
      __self: this
    }), __jsx("span", {
      className: `spinner-border spinner-border-sm my-1 ${loading ? `active` : `deactive`}`,
      role: "status",
      "aria-hidden": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })), __jsx("ul", {
      className: "keywoards",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, keywords.map((item, index) => {
      return __jsx("li", {
        key: index,
        className: "my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx("span", {
        className: "p-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("i", {
        className: "far fa-times-circle ml-1 remove",
        onClick: () => this.removeKeyword(item),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), item.query, __jsx("span", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, " ", __jsx("i", {
        className: "fas fa-sort-down point",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), " ", persianjs__WEBPACK_IMPORTED_MODULE_10___default()((item.count / (item.count > 10000000 ? 10 : 1)).toLocaleString()).englishNumber().toString())));
    }))), __jsx("div", {
      className: "bg-white w-50 mx-2 d-flex flex-column justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("label", {
      htmlFor: "current-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "\u0633\u0627\u06CC\u062A\u062A \u0627\u0644\u0627\u0646 \u0635\u0641\u062D\u0647 \u0686\u0646\u062F\u0645\u0647 \u061F"), __jsx("ul", {
      className: "list-selector d-flex p-0",
      id: "current-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 1 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 1
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "\u0627\u0648\u0644"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 2 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 2
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "\u062F\u0648\u0645"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 3 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 3
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "\u0633\u0648\u0645"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 4 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 4
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "\u0686\u0647\u0627\u0631\u0645"), __jsx("li", {
      className: `mx-1 p-2 border rounded ${currentPosition === 5 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        currentPosition: 5
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "\u067E\u0646\u062C\u0645 \u06CC\u0627 \u0628\u06CC\u0634\u062A\u0631")), __jsx("label", {
      htmlFor: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "\u0645\u06CC\u062E\u0648\u0627\u06CC \u06A9\u062C\u0627\u06CC \u0635\u0641\u062D\u0647 \u0627\u0648\u0644 \u0628\u0627\u0634\u06CC \u061F"), __jsx("ul", {
      className: "list-selector d-flex p-0 w-100",
      id: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${targetPosition === 0 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        targetPosition: 0
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "\u0633\u0647 \u062A\u0627\u06CC \u0627\u0648\u0644"), __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${targetPosition === 1 ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.setState({
        targetPosition: 1
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "\u0645\u0647\u0645 \u0646\u06CC\u0633\u062A")), __jsx("label", {
      htmlFor: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, "\u0686\u0647 \u0627\u0645\u06A9\u0627\u0646\u0627\u062A \u062F\u06CC\u06AF\u0647 \u0627\u06CC \u0644\u0627\u0632\u0645 \u062F\u0627\u0631\u06CC\u062F \u061F"), __jsx("ul", {
      className: "list-selector d-flex p-0 w-100",
      id: "target-position",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(features, 1) ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.selectFeatures(1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, "\u06AF\u0648\u06AF\u0644 \u0645\u067E"), __jsx("li", {
      className: `mx-1 p-2 border rounded w-50 ${lodash__WEBPACK_IMPORTED_MODULE_9___default.a.includes(features, 2) ? "bg-primary text-white" : "bg-light"}`,
      onClick: () => this.selectFeatures(2),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, "\u062D\u0627\u0644 \u062E\u0648\u0628 \u06A9\u0646 \u0633\u0627\u06CC\u062A"))), __jsx("div", {
      className: "d-flex justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "\u0642\u06CC\u0645\u062A \u062A\u062E\u0645\u06CC\u0646\u06CC"), __jsx("span", {
      className: "text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, totalPrice[1] == 0 ? __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-laugh-squint",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, "\u062A\u0627 \u0627\u06CC\u0646\u062C\u0627\u0634 \u06A9\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646\u0647")) : __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, __jsx("span", {
      className: "row-price ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, totalPrice[0]), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "\u062A\u0648\u0645\u0627\u0646")))))), __jsx("div", {
      className: "d-flex flex-column discounts",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, __jsx("span", {
      className: "text-success mr-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-gift",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }), "\u0647\u062F\u06CC\u0647 \u0647\u0627"), __jsx("ul", {
      className: "d-flex justify-content-between unstyled p-0  mx-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, "\u0628\u0627 \u06F1\u06F0 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u062E\u0631\u06CC\u062F"), __jsx("b", {
      className: "bg-light p-1 rounded discount-title border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }), "\u06F4\u06F0\u06F0 \u0644\u06CC\u0631 \u062A\u0628\u0644\u06CC\u063A \u062F\u0631 \u06AF\u0648\u06AF\u0644"), " ", __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, "\u0627\u0632 \u0645\u0627 \u0647\u062F\u06CC\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F")), __jsx("li", {
      className: "discount-status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, this.getTotalPrice()[1] >= 10000000 ? __jsx("span", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-grin-hearts ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }), "\u0634\u0645\u0627 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u0647\u062F\u06CC\u0647 \u0647\u0627 \u0647\u0633\u062A\u06CC\u062F") : __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, "\u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u062A\u062E\u0641\u06CC\u0641 \u0646\u0634\u062F\u06CC\u062F"))), __jsx("ul", {
      className: "d-flex justify-content-between unstyled p-0  mx-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, __jsx("li", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, "\u0628\u0627 \u06F1\u06F5 \u062A\u0648\u0645\u0627\u0646 \u062E\u0631\u06CC\u062F \u0627\u0632 \u0645\u0627 \u0645\u0648\u0627\u0631\u062F \u0631\u0648 \u0628\u0647 \u0631\u0648 \u0631\u0627 \u0628\u0647 \u0635\u0648\u0631\u062A \u0633\u0627\u0644\u0627\u0646\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F :"), __jsx("ul", {
      className: "d-flex p-0 items mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }), "SSL"), __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }), "\u0633\u0631\u0648\u0631"), __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }), "\u062F\u0627\u0645\u0646\u0647"))), __jsx("li", {
      className: "discount-status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, this.getTotalPrice()[1] >= 15000000 ? __jsx("span", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-grin-hearts ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }), "\u0634\u0645\u0627 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u0647\u062F\u06CC\u0647 \u0647\u0627 \u0647\u0633\u062A\u06CC\u062F") : __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, "\u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u062A\u062E\u0641\u06CC\u0641 \u0646\u0634\u062F\u06CC\u062F"))), __jsx("ul", {
      className: "d-flex justify-content-between unstyled p-0 mx-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, __jsx("li", {
      className: "d-flex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }, __jsx("span", {
      className: "discount-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, "\u0628\u0627 \u06F3\u06F0 \u062A\u0648\u0645\u0627\u0646 \u062E\u0631\u06CC\u062F \u066C \u06CC\u06A9 \u0645\u0648\u0631\u062F \u0631\u0627 \u0628\u0647 \u0627\u0646\u062A\u062E\u0627\u0628 \u062E\u0648\u062F \u0647\u062F\u06CC\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F :"), __jsx("ul", {
      className: "d-flex p-0 items mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }), "\u0637\u0631\u0627\u062D\u06CC \u0648\u0628 \u0633\u0627\u06CC\u062A"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, " \u06CC\u0627 "), __jsx("li", {
      className: "bg-light p-1 rounded border mx-1 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-check mx-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }), "\u0637\u0631\u0627\u062D\u06CC \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646"))), __jsx("li", {
      className: "discount-status",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, this.getTotalPrice()[1] >= 30000000 ? __jsx("span", {
      className: "text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-grin-hearts ml-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }), "\u0634\u0645\u0627 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u0647\u062F\u06CC\u0647 \u0647\u0627 \u0647\u0633\u062A\u06CC\u062F") : __jsx("span", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, "\u0634\u0645\u0627 \u0647\u0646\u0648\u0632 \u0634\u0627\u0645\u0644 \u0627\u06CC\u0646 \u062A\u062E\u0641\u06CC\u0641 \u0646\u0634\u062F\u06CC\u062F")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      color: "success",
      onClick: this.nativeToggleModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385
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


class SkyBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "sky d-flex jsutifu-content-center align-items-center w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
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
        lineNumber: 8
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
        lineNumber: 33
      },
      __self: this
    }), __jsx("h1", {
      className: "text-white h-100 align-items-center d-flex justify-content-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, this.props.title)));
  }

}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/epsilon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/epsilon.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/epsilon */ "core-js/library/fn/number/epsilon");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-integer */ "core-js/library/fn/number/is-integer");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

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
      tab: 2,
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
    }, "\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0648 \u0637\u0631\u0627\u062D\u06CC \u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627"), __jsx("meta", {
      name: "description",
      content: "\u062A\u06CC\u0645 \u0648\u06CC\u0631\u0627 \u0648\u0628 \u0622\u067E\u0627\u062F\u0627\u0646\u0627 \u0628\u0627 \u062A\u06CC\u0645 \u062C\u0648\u0627\u0646 \u0648 \u062E\u0644\u0627\u0642 \u0627\u06CC\u062F\u0647 \u0647\u0627\u06CC \u0634\u0645\u0627 \u0631\u0627 \u0628\u0647 \u0648\u0627\u0642\u0639\u06CC\u062A \u062A\u0628\u062F\u06CC\u0644 \u062E\u0648\u0627\u0647\u062F \u06A9\u0631\u062F | \u062E\u062F\u0645\u0627\u062A \u0645\u0627 \u0634\u0627\u0645\u0644 \u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A \u066C\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0627\u062E\u062A\u0635\u0627\u0635\u06CC \u066C \u0633\u0627\u062E\u062A \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u066C \u0633\u0626\u0648 \u0648 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u0628\u06A9\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC \u0648 \u062A\u0628\u0644\u06CC\u063A\u0627\u062A \u062F\u0631 \u06AF\u0648\u06AF\u0644 \u0645\u06CC \u0628\u0627\u0634\u062F",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("meta", {
      name: "keywords",
      content: "bootstrap,node,node.js,react,vue,angular,front-end,back-end,seo,php,wordpress,ads,google ads,application ,mobile application ,mobile app,HTML,CSS,XML,JavaScript,\u0637\u0631\u0627\u062D\u06CC,\u0637\u0631\u0627\u062D\u06CC \u0633\u0627\u06CC\u062A,\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC,\u0633\u0626\u0648,\u0634\u0628\u06A9\u0647 \u0627\u062C\u062A\u0645\u0627\u0639\u06CC,\u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0633\u0627\u06CC\u062A,\u0633\u0627\u062E\u062A \u0633\u0627\u06CC\u062A,\u062A\u0628\u0644\u06CC\u063A\u0627\u062A \u062F\u0631 \u06AF\u0648\u06AF\u0644,\u06AF\u0648\u06AF\u0644 \u0627\u062F\u0648\u0631\u062F\u0632,\u062A\u06CC\u0632\u0631,\u0642\u0627\u0644\u0628 \u0627\u062E\u062A\u0635\u0627\u0635\u06CC\u0648\u0642\u0627\u0644\u0628 \u0622\u0645\u0627\u062F\u0647,\u0633\u0627\u06CC\u062A \u0648\u0631\u062F\u067E\u0631\u0633\u06CC",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
      modal: modal,
      toggleModal: this.toggleModal,
      information: information,
      className: "w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("div", {
      className: "d-flex flex-column p-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_components_Earth__WEBPACK_IMPORTED_MODULE_1__["default"], {
      changeTab: this.changeTab,
      tab: this.state.tab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, this.getContent())));
  }

}

/***/ }),

/***/ "./src/earth.js":
/*!**********************!*\
  !*** ./src/earth.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _parseInt = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");

//(function(){
const THREE = __webpack_require__(/*! ./three.min.js */ "./src/three.min.js");

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

/***/ "./src/three.min.js":
/*!**************************!*\
  !*** ./src/three.min.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from=__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");var _Object$freeze=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");var _Object$keys=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");var _JSON$stringify=__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");var _Object$create=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");var _Object$assign=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");var _Number$isInteger=__webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-integer */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js");var _Number$EPSILON=__webpack_require__(/*! @babel/runtime-corejs2/core-js/number/epsilon */ "./node_modules/@babel/runtime-corejs2/core-js/number/epsilon.js");var _parseFloat=__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");var _parseInt=__webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");var _WeakMap=__webpack_require__(/*! @babel/runtime-corejs2/core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");var _Array$isArray=__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");var _Object$defineProperties=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");var _Object$defineProperty=__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");// threejs.org/license
(function(k,xa){ true?xa(exports):undefined;})(this,function(k){function xa(){}function v(a,b){this.x=a||0;this.y=b||0;}function na(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1;}function n(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0;}function ta(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");}function ba(a,b,c,d,e,f,g,h,l,m){_Object$defineProperty(this,"id",{value:Li++});this.uuid=O.generateUUID();this.name="";this.image=void 0!==a?a:ba.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:ba.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==l?l:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new v(0,0);this.repeat=new v(1,1);this.center=new v(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new ta();this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null;}function da(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1;}function Ka(a,b,c){this.width=a;this.height=b;this.scissor=new da(0,0,a,b);this.scissorTest=!1;this.viewport=new da(0,0,a,b);c=c||{};this.texture=new ba(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.texture.image={};this.texture.image.width=a;this.texture.image.height=b;this.texture.generateMipmaps=void 0!==c.generateMipmaps?c.generateMipmaps:!1;this.texture.minFilter=void 0!==c.minFilter?c.minFilter:1006;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null;}function Pf(a,b,c){Ka.call(this,a,b,c);this.samples=4;}function P(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");}function Qb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||Qb.DefaultOrder;}function Qf(){this.mask=1;}function B(){_Object$defineProperty(this,"id",{value:Mi++});this.uuid=O.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=B.DefaultUp.clone();var a=new n(),b=new Qb(),c=new na(),d=new n(1,1,1);b._onChange(function(){c.setFromEuler(b,!1);});c._onChange(function(){b.setFromQuaternion(c,void 0,!1);});_Object$defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new P()},normalMatrix:{value:new ta()}});this.matrix=new P();this.matrixWorld=new P();this.matrixAutoUpdate=B.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Qf();this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};}function wd(){B.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0;"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}function ab(a,b){this.min=void 0!==a?a:new n(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new n(-Infinity,-Infinity,-Infinity);}function Rf(a,b,c,d,e){var f;var g=0;for(f=a.length-3;g<=f;g+=3){Rb.fromArray(a,g);var h=e.x*Math.abs(Rb.x)+e.y*Math.abs(Rb.y)+e.z*Math.abs(Rb.z),l=b.dot(Rb),m=c.dot(Rb),p=d.dot(Rb);if(Math.max(-Math.max(l,m,p),Math.min(l,m,p))>h)return!1;}return!0;}function nb(a,b){this.center=void 0!==a?a:new n();this.radius=void 0!==b?b:0;}function Sb(a,b){this.origin=void 0!==a?a:new n();this.direction=void 0!==b?b:new n();}function ia(a,b,c){this.a=void 0!==a?a:new n();this.b=void 0!==b?b:new n();this.c=void 0!==c?c:new n();}function J(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c);}function Sf(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a;}function Tf(a){return .04045>a?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4);}function Uf(a){return .0031308>a?12.92*a:1.055*Math.pow(a,.41666)-.055;}function yc(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new n();this.vertexNormals=_Array$isArray(d)?d:[];this.color=e&&e.isColor?e:new J();this.vertexColors=_Array$isArray(e)?e:[];this.materialIndex=void 0!==f?f:0;}function Q(){_Object$defineProperty(this,"id",{value:Ni++});this.uuid=O.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.vertexTangents=this.flatShading=!1;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.stencilFunc=519;this.stencilRef=0;this.stencilMask=255;this.stencilZPass=this.stencilZFail=this.stencilFail=7680;this.stencilWrite=!1;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.toneMapped=this.visible=!0;this.userData={};this.needsUpdate=!0;}function ya(a){Q.call(this);this.type="MeshBasicMaterial";this.color=new J(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a);}function N(a,b,c){if(_Array$isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0;}function xd(a,b,c){N.call(this,new Int8Array(a),b,c);}function yd(a,b,c){N.call(this,new Uint8Array(a),b,c);}function zd(a,b,c){N.call(this,new Uint8ClampedArray(a),b,c);}function Ad(a,b,c){N.call(this,new Int16Array(a),b,c);}function Tb(a,b,c){N.call(this,new Uint16Array(a),b,c);}function Bd(a,b,c){N.call(this,new Int32Array(a),b,c);}function Ub(a,b,c){N.call(this,new Uint32Array(a),b,c);}function A(a,b,c){N.call(this,new Float32Array(a),b,c);}function Cd(a,b,c){N.call(this,new Float64Array(a),b,c);}function dh(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1;}function eh(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b;}function D(){_Object$defineProperty(this,"id",{value:Oi+=2});this.uuid=O.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity};this.userData={};}function ra(a,b){B.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new D();this.material=void 0!==b?b:new ya({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets();}function fh(a,b,c,d,e,f,g,h){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,2!==b.side,h)))return null;De.copy(h);De.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(De);return b<c.near||b>c.far?null:{distance:b,point:De.clone(),object:a};}function Ee(a,b,c,d,e,f,g,h,l,m,p){Vb.fromBufferAttribute(e,l);Wb.fromBufferAttribute(e,m);Xb.fromBufferAttribute(e,p);e=a.morphTargetInfluences;if(b.morphTargets&&f&&e){Vf.set(0,0,0);Wf.set(0,0,0);Xf.set(0,0,0);for(var u=0,r=f.length;u<r;u++){var k=e[u],t=f[u];0!==k&&(gh.fromBufferAttribute(t,l),hh.fromBufferAttribute(t,m),ih.fromBufferAttribute(t,p),Vf.addScaledVector(gh.sub(Vb),k),Wf.addScaledVector(hh.sub(Wb),k),Xf.addScaledVector(ih.sub(Xb),k));}Vb.add(Vf);Wb.add(Wf);Xb.add(Xf);}if(a=fh(a,b,c,d,Vb,Wb,Xb,Dd))g&&(zc.fromBufferAttribute(g,l),Ac.fromBufferAttribute(g,m),Bc.fromBufferAttribute(g,p),a.uv=ia.getUV(Dd,Vb,Wb,Xb,zc,Ac,Bc,new v())),h&&(zc.fromBufferAttribute(h,l),Ac.fromBufferAttribute(h,m),Bc.fromBufferAttribute(h,p),a.uv2=ia.getUV(Dd,Vb,Wb,Xb,zc,Ac,Bc,new v())),g=new yc(l,m,p),ia.getNormal(Vb,Wb,Xb,g.normal),a.face=g;return a;}function G(){_Object$defineProperty(this,"id",{value:Pi+=2});this.uuid=O.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1;}function Cc(a,b,c,d,e,f){G.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new Bb(a,b,c,d,e,f));this.mergeVertices();}function Bb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,q,Fa,Fe,v){var t=f/Fa,y=g/Fe,w=f/2,E=g/2,x=q/2;g=Fa+1;var z=Fe+1,S=f=0,U,C,W=new n();for(C=0;C<z;C++){var ob=C*y-E;for(U=0;U<g;U++)W[a]=(U*t-w)*d,W[b]=ob*e,W[c]=x,m.push(W.x,W.y,W.z),W[a]=0,W[b]=0,W[c]=0<q?1:-1,p.push(W.x,W.y,W.z),u.push(U/Fa),u.push(1-C/Fe),f+=1;}for(C=0;C<Fe;C++)for(U=0;U<Fa;U++)a=r+U+g*(C+1),b=r+(U+1)+g*(C+1),c=r+(U+1)+g*C,l.push(r+U+g*C,a,c),l.push(a,b,c),S+=6;h.addGroup(k,S,v);k+=S;r+=f;}D.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;a=a||1;b=b||1;c=c||1;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var l=[],m=[],p=[],u=[],r=0,k=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(l);this.addAttribute("position",new A(m,3));this.addAttribute("normal",new A(p,3));this.addAttribute("uv",new A(u,2));}function Yb(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():_Array$isArray(e)?b[c][d]=e.slice():b[c][d]=e;}}return b;}function ka(a){for(var b={},c=0;c<a.length;c++){var d=Yb(a[c]),e;for(e in d)b[e]=d[e];}return b;}function va(a){Q.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a));}function bb(){B.call(this);this.type="Camera";this.matrixWorldInverse=new P();this.projectionMatrix=new P();this.projectionMatrixInverse=new P();}function la(a,b,c,d){bb.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix();}function Dc(a,b,c,d){B.call(this);this.type="CubeCamera";var e=new la(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new n(1,0,0));this.add(e);var f=new la(90,1,a,b);f.up.set(0,-1,0);f.lookAt(new n(-1,0,0));this.add(f);var g=new la(90,1,a,b);g.up.set(0,0,1);g.lookAt(new n(0,1,0));this.add(g);var h=new la(90,1,a,b);h.up.set(0,0,-1);h.lookAt(new n(0,-1,0));this.add(h);var l=new la(90,1,a,b);l.up.set(0,-1,0);l.lookAt(new n(0,0,1));this.add(l);var m=new la(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new n(0,0,-1));this.add(m);d=d||{format:1022,magFilter:1006,minFilter:1006};this.renderTarget=new Cb(c,c,d);this.renderTarget.texture.name="CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=a.getRenderTarget(),d=this.renderTarget,p=d.texture.generateMipmaps;d.texture.generateMipmaps=!1;a.setRenderTarget(d,0);a.render(b,e);a.setRenderTarget(d,1);a.render(b,f);a.setRenderTarget(d,2);a.render(b,g);a.setRenderTarget(d,3);a.render(b,h);a.setRenderTarget(d,4);a.render(b,l);d.texture.generateMipmaps=p;a.setRenderTarget(d,5);a.render(b,m);a.setRenderTarget(c);};this.clear=function(a,b,c,d){for(var e=a.getRenderTarget(),f=this.renderTarget,g=0;6>g;g++)a.setRenderTarget(f,g),a.clear(b,c,d);a.setRenderTarget(e);};}function Cb(a,b,c){Ka.call(this,a,b,c);}function Zb(a,b,c,d,e,f,g,h,l,m,p,u){ba.call(this,null,f,g,h,l,m,d,e,p,u);this.image={data:a,width:b,height:c};this.magFilter=void 0!==l?l:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1;}function cb(a,b){this.normal=void 0!==a?a:new n(1,0,0);this.constant=void 0!==b?b:0;}function Ed(a,b,c,d,e,f){this.planes=[void 0!==a?a:new cb(),void 0!==b?b:new cb(),void 0!==c?c:new cb(),void 0!==d?d:new cb(),void 0!==e?e:new cb(),void 0!==f?f:new cb()];}function Zf(){function a(e,f){!1!==c&&(d(e,f),b.requestAnimationFrame(a));}var b=null,c=!1,d=null;return{start:function(){!0!==c&&null!==d&&(b.requestAnimationFrame(a),c=!0);},stop:function(){c=!1;},setAnimationLoop:function(a){d=a;},setContext:function(a){b=a;}};}function Qi(a){function b(b,c){var d=b.array,e=b.dynamic?35048:35044,h=a.createBuffer();a.bindBuffer(c,h);a.bufferData(c,d,e);b.onUploadCallback();c=5126;d instanceof Float32Array?c=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c=5123:d instanceof Int16Array?c=5122:d instanceof Uint32Array?c=5125:d instanceof Int32Array?c=5124:d instanceof Int8Array?c=5120:d instanceof Uint8Array&&(c=5121);return{buffer:h,type:c,bytesPerElement:d.BYTES_PER_ELEMENT,version:b.version};}var c=new _WeakMap();return{get:function(a){a.isInterleavedBufferAttribute&&(a=a.data);return c.get(a);},remove:function(b){b.isInterleavedBufferAttribute&&(b=b.data);var d=c.get(b);d&&(a.deleteBuffer(d.buffer),c.delete(b));},update:function(d,e){d.isInterleavedBufferAttribute&&(d=d.data);var f=c.get(d);if(void 0===f)c.set(d,b(d,e));else if(f.version<d.version){var g=d,h=g.array,l=g.updateRange;a.bindBuffer(e,f.buffer);!1===g.dynamic?a.bufferData(e,h,35044):-1===l.count?a.bufferSubData(e,0,h):0===l.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(e,l.offset*h.BYTES_PER_ELEMENT,h.subarray(l.offset,l.offset+l.count)),l.count=-1);f.version=d.version;}}};}function Fd(a,b,c,d){G.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new $b(a,b,c,d));this.mergeVertices();}function $b(a,b,c,d){D.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,l=a/c,m=b/d,p=[],u=[],r=[],k=[];for(a=0;a<h;a++){var t=a*m-f;for(b=0;b<g;b++)u.push(b*l-e,-t,0),r.push(0,0,1),k.push(b/c),k.push(1-a/d);}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,p.push(b+g*a,e,h),p.push(e,f,h);this.setIndex(p);this.addAttribute("position",new A(u,3));this.addAttribute("normal",new A(r,3));this.addAttribute("uv",new A(k,2));}function Ri(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,a.g,a.b,c,d);}var f=new J(0),g=0,h,l,m=null,p=0;return{getClearColor:function(){return f;},setClearColor:function(a,b){f.set(a);g=void 0!==b?b:1;e(f,g);},getClearAlpha:function(){return g;},setClearAlpha:function(a){g=a;e(f,g);},render:function(b,d,k,t){d=d.background;k=a.vr;(k=k.getSession&&k.getSession())&&"additive"===k.environmentBlendMode&&(d=null);null===d?(e(f,g),m=null,p=0):d&&d.isColor&&(e(d,1),t=!0,m=null,p=0);(a.autoClear||t)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(d&&(d.isCubeTexture||d.isWebGLRenderTargetCube)){void 0===l&&(l=new ra(new Bb(1,1,1),new va({type:"BackgroundCubeMaterial",uniforms:Yb(db.cube.uniforms),vertexShader:db.cube.vertexShader,fragmentShader:db.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.removeAttribute("normal"),l.geometry.removeAttribute("uv"),l.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld);},_Object$defineProperty(l.material,"map",{get:function(){return this.uniforms.tCube.value;}}),c.update(l));t=d.isWebGLRenderTargetCube?d.texture:d;l.material.uniforms.tCube.value=t;l.material.uniforms.tFlip.value=d.isWebGLRenderTargetCube?1:-1;if(m!==d||p!==t.version)l.material.needsUpdate=!0,m=d,p=t.version;b.unshift(l,l.geometry,l.material,0,0,null);}else if(d&&d.isTexture){void 0===h&&(h=new ra(new $b(2,2),new va({type:"BackgroundMaterial",uniforms:Yb(db.background.uniforms),vertexShader:db.background.vertexShader,fragmentShader:db.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.removeAttribute("normal"),_Object$defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value;}}),c.update(h));h.material.uniforms.t2D.value=d;!0===d.matrixAutoUpdate&&d.updateMatrix();h.material.uniforms.uvTransform.value.copy(d.matrix);if(m!==d||p!==d.version)h.material.needsUpdate=!0,m=d,p=d.version;b.unshift(h,h.geometry,h.material,0,0,null);}}};}function Si(a,b,c,d){var e;this.setMode=function(a){e=a;};this.render=function(b,d){a.drawArrays(e,b,d);c.update(d,e);};this.renderInstances=function(f,g,h){if(d.isWebGL2){var l=a;var m="drawArraysInstanced";}else if(l=b.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",null===l){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}l[m](e,g,h,f.maxInstancedCount);c.update(h,e,f.maxInstancedCount);};}function Ti(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(35633,36338).precision&&0<a.getShaderPrecisionFormat(35632,36338).precision)return"highp";b="mediump";}return"mediump"===b&&0<a.getShaderPrecisionFormat(35633,36337).precision&&0<a.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp";}var e,f="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext,g=void 0!==c.precision?c.precision:"highp",h=d(g);h!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",h,"instead."),g=h);c=!0===c.logarithmicDepthBuffer;h=a.getParameter(34930);var l=a.getParameter(35660),m=a.getParameter(3379),p=a.getParameter(34076),u=a.getParameter(34921),k=a.getParameter(36347),q=a.getParameter(36348),t=a.getParameter(36349),y=0<l,n=f||!!b.get("OES_texture_float"),z=y&&n,x=f?a.getParameter(36183):0;return{isWebGL2:f,getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0;},getMaxPrecision:d,precision:g,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:l,maxTextureSize:m,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:k,maxVaryings:q,maxFragmentUniforms:t,vertexTextures:y,floatFragmentTextures:n,floatVertexTextures:z,maxSamples:x};}function Ui(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0;}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;l.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,l),h.normal.toArray(g,d),g[d+3]=h.constant;}m.value=g;m.needsUpdate=!0;}c.numPlanes=f;return g;}var c=this,d=null,e=0,f=!1,g=!1,h=new cb(),l=new ta(),m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h;};this.beginShadows=function(){g=!0;b(null);};this.endShadows=function(){g=!1;a();};this.setState=function(c,h,l,k,t,y){if(!f||null===c||0===c.length||g&&!l)g?b(null):a();else{l=g?0:e;var p=4*l,u=t.clippingState||null;m.value=u;u=b(c,k,p,y);for(c=0;c!==p;++c)u[c]=d[c];t.clippingState=u;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=l;}};}function Vi(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];switch(c){case"WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c);}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d;}};}function Wi(a,b,c){function d(a){var e=a.target;a=f.get(e);null!==a.index&&b.remove(a.index);for(var h in a.attributes)b.remove(a.attributes[h]);e.removeEventListener("dispose",d);f.delete(e);if(h=g.get(a))b.remove(h),g.delete(a);c.memory.geometries--;}function e(a){var c=[],d=a.index,e=a.attributes.position;if(null!==d){var f=d.array;d=d.version;e=0;for(var h=f.length;e<h;e+=3){var k=f[e+0],t=f[e+1],y=f[e+2];c.push(k,t,t,y,y,k);}}else for(f=e.array,d=e.version,e=0,h=f.length/3-1;e<h;e+=3)k=e+0,t=e+1,y=e+2,c.push(k,t,t,y,y,k);c=new(65535<eh(c)?Ub:Tb)(c,1);c.version=d;b.update(c,34963);(f=g.get(a))&&b.remove(f);g.set(a,c);}var f=new _WeakMap(),g=new _WeakMap();return{get:function(a,b){var e=f.get(b);if(e)return e;b.addEventListener("dispose",d);b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=new D().setFromObject(a)),e=b._bufferGeometry);f.set(b,e);c.memory.geometries++;return e;},update:function(a){var c=a.index,d=a.attributes;null!==c&&b.update(c,34963);for(var e in d)b.update(d[e],34962);a=a.morphAttributes;for(e in a){c=a[e];d=0;for(var f=c.length;d<f;d++)b.update(c[d],34962);}},getWireframeAttribute:function(a){var b=g.get(a);if(b){var c=a.index;null!==c&&b.version<c.version&&e(a);}else e(a);return g.get(a);}};}function Xi(a,b,c,d){var e,f,g;this.setMode=function(a){e=a;};this.setIndex=function(a){f=a.type;g=a.bytesPerElement;};this.render=function(b,d){a.drawElements(e,d,f,b*g);c.update(d,e);};this.renderInstances=function(h,l,m){if(d.isWebGL2){var p=a;var u="drawElementsInstanced";}else if(p=b.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===p){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return;}p[u](e,m,f,l*g,h.maxInstancedCount);c.update(m,e,h.maxInstancedCount);};}function Yi(a){var b={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:b,programs:null,autoReset:!0,reset:function(){b.frame++;b.calls=0;b.triangles=0;b.points=0;b.lines=0;},update:function(a,d,e){e=e||1;b.calls++;switch(d){case 4:b.triangles+=a/3*e;break;case 5:case 6:b.triangles+=e*(a-2);break;case 1:b.lines+=a/2*e;break;case 3:b.lines+=e*(a-1);break;case 2:b.lines+=e*a;break;case 0:b.points+=e*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);}}};}function Zi(a,b){return Math.abs(b[1])-Math.abs(a[1]);}function $i(a){var b={},c=new Float32Array(8);return{update:function(d,e,f,g){var h=d.morphTargetInfluences,l=h.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<l;m++)d[m]=[m,0];b[e.id]=d;}var p=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<l;m++){var u=d[m];0!==u[1]&&(p&&e.removeAttribute("morphTarget"+m),f&&e.removeAttribute("morphNormal"+m));}for(m=0;m<l;m++)u=d[m],u[0]=m,u[1]=h[m];d.sort(Zi);for(m=0;8>m;m++){if(u=d[m])if(h=u[0],l=u[1]){p&&e.addAttribute("morphTarget"+m,p[h]);f&&e.addAttribute("morphNormal"+m,f[h]);c[m]=l;continue;}c[m]=0;}g.getUniforms().setValue(a,"morphTargetInfluences",c);}};}function aj(a,b){var c={};return{update:function(d){var e=b.render.frame,f=d.geometry,g=a.get(d,f);c[g.id]!==e&&(f.isGeometry&&g.updateFromObject(d),a.update(g),c[g.id]=e);return g;},dispose:function(){c={};}};}function pb(a,b,c,d,e,f,g,h,l,m){a=void 0!==a?a:[];ba.call(this,a,void 0!==b?b:301,c,d,e,f,void 0!==g?g:1022,h,l,m);this.flipY=!1;}function Ec(a,b,c,d){ba.call(this,null);this.image={data:a,width:b,height:c,depth:d};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;}function Fc(a,b,c,d){ba.call(this,null);this.image={data:a,width:b,height:c,depth:d};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;}function Gc(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=kh[e];void 0===f&&(f=new Float32Array(e),kh[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f;}function La(a,b){if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0;}function Ga(a,b){for(var c=0,d=b.length;c<d;c++)a[c]=b[c];}function lh(a,b){var c=mh[b];void 0===c&&(c=new Int32Array(b),mh[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocateTextureUnit();return c;}function bj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1f(this.addr,b),c[0]=b);}function cj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y)a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y;}else La(c,b)||(a.uniform2fv(this.addr,b),Ga(c,b));}function dj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z)a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z;}else if(void 0!==b.r){if(c[0]!==b.r||c[1]!==b.g||c[2]!==b.b)a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b;}else La(c,b)||(a.uniform3fv(this.addr,b),Ga(c,b));}function ej(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w;}else La(c,b)||(a.uniform4fv(this.addr,b),Ga(c,b));}function fj(a,b){var c=this.cache,d=b.elements;void 0===d?La(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),Ga(c,b)):La(c,d)||(nh.set(d),a.uniformMatrix2fv(this.addr,!1,nh),Ga(c,d));}function gj(a,b){var c=this.cache,d=b.elements;void 0===d?La(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),Ga(c,b)):La(c,d)||(oh.set(d),a.uniformMatrix3fv(this.addr,!1,oh),Ga(c,d));}function hj(a,b){var c=this.cache,d=b.elements;void 0===d?La(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),Ga(c,b)):La(c,d)||(ph.set(d),a.uniformMatrix4fv(this.addr,!1,ph),Ga(c,d));}function ij(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTexture2D(b||qh,e);}function jj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture2DArray(b||kj,e);}function lj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture3D(b||mj,e);}function nj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTextureCube(b||rh,e);}function oj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1i(this.addr,b),c[0]=b);}function pj(a,b){var c=this.cache;La(c,b)||(a.uniform2iv(this.addr,b),Ga(c,b));}function qj(a,b){var c=this.cache;La(c,b)||(a.uniform3iv(this.addr,b),Ga(c,b));}function rj(a,b){var c=this.cache;La(c,b)||(a.uniform4iv(this.addr,b),Ga(c,b));}function sj(a){switch(a){case 5126:return bj;case 35664:return cj;case 35665:return dj;case 35666:return ej;case 35674:return fj;case 35675:return gj;case 35676:return hj;case 35678:case 36198:return ij;case 35679:return lj;case 35680:return nj;case 36289:return jj;case 5124:case 35670:return oj;case 35667:case 35671:return pj;case 35668:case 35672:return qj;case 35669:case 35673:return rj;}}function tj(a,b){a.uniform1fv(this.addr,b);}function uj(a,b){a.uniform1iv(this.addr,b);}function vj(a,b){a.uniform2iv(this.addr,b);}function wj(a,b){a.uniform3iv(this.addr,b);}function xj(a,b){a.uniform4iv(this.addr,b);}function yj(a,b){b=Gc(b,this.size,2);a.uniform2fv(this.addr,b);}function zj(a,b){b=Gc(b,this.size,3);a.uniform3fv(this.addr,b);}function Aj(a,b){b=Gc(b,this.size,4);a.uniform4fv(this.addr,b);}function Bj(a,b){b=Gc(b,this.size,4);a.uniformMatrix2fv(this.addr,!1,b);}function Cj(a,b){b=Gc(b,this.size,9);a.uniformMatrix3fv(this.addr,!1,b);}function Dj(a,b){b=Gc(b,this.size,16);a.uniformMatrix4fv(this.addr,!1,b);}function Ej(a,b,c){var d=b.length,e=lh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTexture2D(b[a]||qh,e[a]);}function Fj(a,b,c){var d=b.length,e=lh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTextureCube(b[a]||rh,e[a]);}function Gj(a){switch(a){case 5126:return tj;case 35664:return yj;case 35665:return zj;case 35666:return Aj;case 35674:return Bj;case 35675:return Cj;case 35676:return Dj;case 35678:return Ej;case 35680:return Fj;case 5124:case 35670:return uj;case 35667:case 35671:return vj;case 35668:case 35672:return wj;case 35669:case 35673:return xj;}}function Hj(a,b,c){this.id=a;this.addr=c;this.cache=[];this.setValue=sj(b.type);}function sh(a,b,c){this.id=a;this.addr=c;this.cache=[];this.size=b.size;this.setValue=Gj(b.type);}function th(a){this.id=a;this.seq=[];this.map={};}function Db(a,b){this.seq=[];this.map={};for(var c=a.getProgramParameter(b,35718),d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,l=h.length;for($f.lastIndex=0;;){var m=$f.exec(h),p=$f.lastIndex,u=m[1],k=m[3];"]"===m[2]&&(u|=0);if(void 0===k||"["===k&&p+2===l){h=g;e=void 0===k?new Hj(u,e,f):new sh(u,e,f);h.seq.push(e);h.map[e.id]=e;break;}else k=g.map[u],void 0===k&&(k=new th(u),u=g,g=k,u.seq.push(g),u.map[g.id]=g),g=k;}}}function uh(a,b,c){b=a.createShader(b);a.shaderSource(b,c);a.compileShader(b);return b;}function vh(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:throw Error("unsupported encoding: "+a);}}function wh(a,b,c){var d=a.getShaderParameter(b,35713),e=a.getShaderInfoLog(b).trim();if(d&&""===e)return"";a=a.getShaderSource(b).split("\n");for(b=0;b<a.length;b++)a[b]=b+1+": "+a[b];a=a.join("\n");return"THREE.WebGLShader: gl.getShaderInfoLog() "+c+"\n"+e+a;}function He(a,b){b=vh(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+"ToLinear"+b[1]+"; }";}function Ij(a,b){b=vh(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }";}function Jj(a,b){switch(b){case 1:b="Linear";break;case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b="OptimizedCineon";break;case 5:b="ACESFilmic";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }";}function Kj(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.tangentSpaceNormalMap||b.clearcoatNormalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gd).join("\n");}function Lj(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d);}return b.join("\n");}function Gd(a){return""!==a;}function xh(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,b.numPointLightShadows);}function yh(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection);}function ag(a){return a.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,function(a,c){a=K[c];if(void 0===a)throw Error("Can not resolve #include <"+c+">");return ag(a);});}function zh(a){return a.replace(/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=_parseInt(c);c<_parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a;});}function Mj(a,b,c,d,e,f,g){var h=a.getContext(),l=d.defines,m=e.vertexShader,p=e.fragmentShader,u="SHADOWMAP_TYPE_BASIC";1===f.shadowMapType?u="SHADOWMAP_TYPE_PCF":2===f.shadowMapType?u="SHADOWMAP_TYPE_PCF_SOFT":3===f.shadowMapType&&(u="SHADOWMAP_TYPE_VSM");var k="ENVMAP_TYPE_CUBE",q="ENVMAP_MODE_REFLECTION",t="ENVMAP_BLENDING_MULTIPLY";if(f.envMap){switch(d.envMap.mapping){case 301:case 302:k="ENVMAP_TYPE_CUBE";break;case 306:case 307:k="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:k="ENVMAP_TYPE_EQUIREC";break;case 305:k="ENVMAP_TYPE_SPHERE";}switch(d.envMap.mapping){case 302:case 304:q="ENVMAP_MODE_REFRACTION";}switch(d.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";}}var y=0<a.gammaFactor?a.gammaFactor:1,n=g.isWebGL2?"":Kj(d.extensions,f,b),z=Lj(l),x=h.createProgram();d.isRawShaderMaterial?(l=[z].filter(Gd).join("\n"),0<l.length&&(l+="\n"),b=[n,z].filter(Gd).join("\n"),0<b.length&&(b+="\n")):(l=["precision "+f.precision+" float;","precision "+f.precision+" int;","highp"===f.precision?"#define HIGH_PRECISION":"","#define SHADER_NAME "+e.name,z,f.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+y,"#define MAX_BONES "+f.maxBones,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+q:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.normalMap&&f.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",f.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",f.displacementMap&&f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexTangents?"#define USE_TANGENT":"",f.vertexColors?"#define USE_COLOR":"",f.vertexUvs?"#define USE_UV":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+u:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(g.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Gd).join("\n"),b=[n,"precision "+f.precision+" float;","precision "+f.precision+" int;","highp"===f.precision?"#define HIGH_PRECISION":"","#define SHADER_NAME "+e.name,z,f.alphaTest?"#define ALPHATEST "+f.alphaTest+(f.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+y,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.matcap?"#define USE_MATCAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+k:"",f.envMap?"#define "+q:"",f.envMap?"#define "+t:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.normalMap&&f.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",f.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.sheen?"#define USE_SHEEN":"",f.vertexTangents?"#define USE_TANGENT":"",f.vertexColors?"#define USE_COLOR":"",f.vertexUvs?"#define USE_UV":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+u:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(g.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"",(d.extensions&&d.extensions.shaderTextureLOD||f.envMap)&&(g.isWebGL2||b.get("EXT_shader_texture_lod"))?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==f.toneMapping?"#define TONE_MAPPING":"",0!==f.toneMapping?K.tonemapping_pars_fragment:"",0!==f.toneMapping?Jj("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.outputEncoding||f.mapEncoding||f.matcapEncoding||f.envMapEncoding||f.emissiveMapEncoding?K.encodings_pars_fragment:"",f.mapEncoding?He("mapTexelToLinear",f.mapEncoding):"",f.matcapEncoding?He("matcapTexelToLinear",f.matcapEncoding):"",f.envMapEncoding?He("envMapTexelToLinear",f.envMapEncoding):"",f.emissiveMapEncoding?He("emissiveMapTexelToLinear",f.emissiveMapEncoding):"",f.outputEncoding?Ij("linearToOutputTexel",f.outputEncoding):"",f.depthPacking?"#define DEPTH_PACKING "+d.depthPacking:"","\n"].filter(Gd).join("\n"));m=ag(m);m=xh(m,f);m=yh(m,f);p=ag(p);p=xh(p,f);p=yh(p,f);m=zh(m);p=zh(p);g.isWebGL2&&!d.isRawShaderMaterial&&(g=!1,u=/^\s*#version\s+300\s+es\s*\n/,d.isShaderMaterial&&null!==m.match(u)&&null!==p.match(u)&&(g=!0,m=m.replace(u,""),p=p.replace(u,"")),l="#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n"+l,b=["#version 300 es\n\n#define varying in",g?"":"out highp vec4 pc_fragColor;",g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+b);p=b+p;m=uh(h,35633,l+m);p=uh(h,35632,p);h.attachShader(x,m);h.attachShader(x,p);void 0!==d.index0AttributeName?h.bindAttribLocation(x,0,d.index0AttributeName):!0===f.morphTargets&&h.bindAttribLocation(x,0,"position");h.linkProgram(x);if(a.debug.checkShaderErrors){a=h.getProgramInfoLog(x).trim();f=h.getShaderInfoLog(m).trim();g=h.getShaderInfoLog(p).trim();k=u=!0;if(!1===h.getProgramParameter(x,35714))u=!1,q=wh(h,m,"vertex"),t=wh(h,p,"fragment"),console.error("THREE.WebGLProgram: shader error: ",h.getError(),"35715",h.getProgramParameter(x,35715),"gl.getProgramInfoLog",a,q,t);else if(""!==a)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",a);else if(""===f||""===g)k=!1;k&&(this.diagnostics={runnable:u,material:d,programLog:a,vertexShader:{log:f,prefix:l},fragmentShader:{log:g,prefix:b}});}h.deleteShader(m);h.deleteShader(p);var C;this.getUniforms=function(){void 0===C&&(C=new Db(h,x));return C;};var W;this.getAttributes=function(){if(void 0===W){for(var a={},b=h.getProgramParameter(x,35721),c=0;c<b;c++){var d=h.getActiveAttrib(x,c).name;a[d]=h.getAttribLocation(x,d);}W=a;}return W;};this.destroy=function(){h.deleteProgram(x);this.program=void 0;};this.name=e.name;this.id=Nj++;this.code=c;this.usedTimes=1;this.program=x;this.vertexShader=m;this.fragmentShader=p;return this;}function Oj(a,b,c){function d(a,b){if(a)a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding);else var c=3E3;3E3===c&&b&&(c=3007);return c;}var e=[],f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g="precision supportsVertexTextures map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");this.getParameters=function(b,e,g,p,u,k,q){var h=f[b.type];if(q.isSkinnedMesh){var l=q.skeleton.bones;if(c.floatVertexTextures)l=1024;else{var m=Math.min(Math.floor((c.maxVertexUniforms-20)/4),l.length);m<l.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+l.length+" bones. This GPU supports "+m+"."),l=0):l=m;}}else l=0;m=c.precision;null!==b.precision&&(m=c.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));var r=a.getRenderTarget();return{shaderID:h,precision:m,supportsVertexTextures:c.vertexTextures,outputEncoding:d(r?r.texture:null,a.gammaOutput),map:!!b.map,mapEncoding:d(b.map,a.gammaInput),matcap:!!b.matcap,matcapEncoding:d(b.matcap,a.gammaInput),envMap:!!b.envMap,envMapMode:b.envMap&&b.envMap.mapping,envMapEncoding:d(b.envMap,a.gammaInput),envMapCubeUV:!!b.envMap&&(306===b.envMap.mapping||307===b.envMap.mapping),lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:d(b.emissiveMap,a.gammaInput),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:1===b.normalMapType,tangentSpaceNormalMap:0===b.normalMapType,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,combine:b.combine,vertexTangents:b.normalMap&&b.vertexTangents,vertexColors:b.vertexColors,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap,fog:!!p,useFog:b.fog,fogExp2:p&&p.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c.logarithmicDepthBuffer,skinning:b.skinning&&0<l,maxBones:l,useVertexTexture:c.floatVertexTextures,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:e.directional.length,numPointLights:e.point.length,numSpotLights:e.spot.length,numRectAreaLights:e.rectArea.length,numHemiLights:e.hemi.length,numDirLightShadows:e.directionalShadowMap.length,numPointLightShadows:e.pointShadowMap.length,numSpotLightShadows:e.spotShadowMap.length,numClippingPlanes:u,numClipIntersection:k,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.receiveShadow&&0<g.length,shadowMapType:a.shadowMap.type,toneMapping:b.toneMapped?a.toneMapping:0,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:2===b.side,flipSided:1===b.side,depthPacking:void 0!==b.depthPacking?b.depthPacking:!1};};this.getProgramCode=function(b,c){var d=[];c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader));if(void 0!==b.defines)for(var e in b.defines)d.push(e),d.push(b.defines[e]);for(e=0;e<g.length;e++)d.push(c[g[e]]);d.push(b.onBeforeCompile.toString());d.push(a.gammaOutput);d.push(a.gammaFactor);return d.join();};this.acquireProgram=function(d,f,g,p){for(var h,l=0,m=e.length;l<m;l++){var k=e[l];if(k.code===p){h=k;++h.usedTimes;break;}}void 0===h&&(h=new Mj(a,b,p,d,f,g,c),e.push(h));return h;};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy();}};this.programs=e;}function Pj(){var a=new _WeakMap();return{get:function(b){var c=a.get(b);void 0===c&&(c={},a.set(b,c));return c;},remove:function(b){a.delete(b);},update:function(b,c,d){a.get(b)[c]=d;},dispose:function(){a=new _WeakMap();}};}function Qj(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id;}function Rj(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id;}function Ah(){function a(a,d,e,m,p,u){var g=b[c];void 0===g?(g={id:a.id,object:a,geometry:d,material:e,program:e.program||f,groupOrder:m,renderOrder:a.renderOrder,z:p,group:u},b[c]=g):(g.id=a.id,g.object=a,g.geometry=d,g.material=e,g.program=e.program||f,g.groupOrder=m,g.renderOrder=a.renderOrder,g.z=p,g.group=u);c++;return g;}var b=[],c=0,d=[],e=[],f={id:-1};return{opaque:d,transparent:e,init:function(){c=0;d.length=0;e.length=0;},push:function(b,c,f,m,p,u){b=a(b,c,f,m,p,u);(!0===f.transparent?e:d).push(b);},unshift:function(b,c,f,m,p,u){b=a(b,c,f,m,p,u);(!0===f.transparent?e:d).unshift(b);},sort:function(){1<d.length&&d.sort(Qj);1<e.length&&e.sort(Rj);}};}function Sj(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c);}var b=new _WeakMap();return{get:function(c,d){var e=b.get(c);if(void 0===e){var f=new Ah();b.set(c,new _WeakMap());b.get(c).set(d,f);c.addEventListener("dispose",a);}else f=e.get(d),void 0===f&&(f=new Ah(),e.set(d,f));return f;},dispose:function(){b=new _WeakMap();}};}function Tj(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case"DirectionalLight":var c={direction:new n(),color:new J(),shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new v()};break;case"SpotLight":c={position:new n(),direction:new n(),color:new J(),distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new v()};break;case"PointLight":c={position:new n(),color:new J(),distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new v(),shadowCameraNear:1,shadowCameraFar:1E3};break;case"HemisphereLight":c={direction:new n(),skyColor:new J(),groundColor:new J()};break;case"RectAreaLight":c={color:new J(),position:new n(),halfWidth:new n(),halfHeight:new n()};}return a[b.id]=c;}};}function Uj(a,b){return(b.castShadow?1:0)-(a.castShadow?1:0);}function Vj(){for(var a=new Tj(),b={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},c=0;9>c;c++)b.probe.push(new n());var d=new n(),e=new P(),f=new P();return{setup:function(c,h,l){for(var g=0,p=0,u=0,k=0;9>k;k++)b.probe[k].set(0,0,0);var q=h=0,t=0,y=0,n=0,z=0,x=0,C=0;l=l.matrixWorldInverse;c.sort(Uj);k=0;for(var W=c.length;k<W;k++){var E=c[k],Fa=E.color,v=E.intensity,A=E.distance,Ca=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)g+=Fa.r*v,p+=Fa.g*v,u+=Fa.b*v;else if(E.isLightProbe)for(Ca=0;9>Ca;Ca++)b.probe[Ca].addScaledVector(E.sh.coefficients[Ca],v);else if(E.isDirectionalLight){var I=a.get(E);I.color.copy(E.color).multiplyScalar(E.intensity);I.direction.setFromMatrixPosition(E.matrixWorld);d.setFromMatrixPosition(E.target.matrixWorld);I.direction.sub(d);I.direction.transformDirection(l);if(I.shadow=E.castShadow)v=E.shadow,I.shadowBias=v.bias,I.shadowRadius=v.radius,I.shadowMapSize=v.mapSize,b.directionalShadowMap[h]=Ca,b.directionalShadowMatrix[h]=E.shadow.matrix,z++;b.directional[h]=I;h++;}else if(E.isSpotLight){I=a.get(E);I.position.setFromMatrixPosition(E.matrixWorld);I.position.applyMatrix4(l);I.color.copy(Fa).multiplyScalar(v);I.distance=A;I.direction.setFromMatrixPosition(E.matrixWorld);d.setFromMatrixPosition(E.target.matrixWorld);I.direction.sub(d);I.direction.transformDirection(l);I.coneCos=Math.cos(E.angle);I.penumbraCos=Math.cos(E.angle*(1-E.penumbra));I.decay=E.decay;if(I.shadow=E.castShadow)v=E.shadow,I.shadowBias=v.bias,I.shadowRadius=v.radius,I.shadowMapSize=v.mapSize,b.spotShadowMap[t]=Ca,b.spotShadowMatrix[t]=E.shadow.matrix,C++;b.spot[t]=I;t++;}else if(E.isRectAreaLight)I=a.get(E),I.color.copy(Fa).multiplyScalar(v),I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(l),f.identity(),e.copy(E.matrixWorld),e.premultiply(l),f.extractRotation(e),I.halfWidth.set(.5*E.width,0,0),I.halfHeight.set(0,.5*E.height,0),I.halfWidth.applyMatrix4(f),I.halfHeight.applyMatrix4(f),b.rectArea[y]=I,y++;else if(E.isPointLight){I=a.get(E);I.position.setFromMatrixPosition(E.matrixWorld);I.position.applyMatrix4(l);I.color.copy(E.color).multiplyScalar(E.intensity);I.distance=E.distance;I.decay=E.decay;if(I.shadow=E.castShadow)v=E.shadow,I.shadowBias=v.bias,I.shadowRadius=v.radius,I.shadowMapSize=v.mapSize,I.shadowCameraNear=v.camera.near,I.shadowCameraFar=v.camera.far,b.pointShadowMap[q]=Ca,b.pointShadowMatrix[q]=E.shadow.matrix,x++;b.point[q]=I;q++;}else E.isHemisphereLight&&(I=a.get(E),I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(l),I.direction.normalize(),I.skyColor.copy(E.color).multiplyScalar(v),I.groundColor.copy(E.groundColor).multiplyScalar(v),b.hemi[n]=I,n++);}b.ambient[0]=g;b.ambient[1]=p;b.ambient[2]=u;c=b.hash;if(c.directionalLength!==h||c.pointLength!==q||c.spotLength!==t||c.rectAreaLength!==y||c.hemiLength!==n||c.numDirectionalShadows!==z||c.numPointShadows!==x||c.numSpotShadows!==C)b.directional.length=h,b.spot.length=t,b.rectArea.length=y,b.point.length=q,b.hemi.length=n,b.directionalShadowMap.length=z,b.pointShadowMap.length=x,b.spotShadowMap.length=C,b.directionalShadowMatrix.length=z,b.pointShadowMatrix.length=x,b.spotShadowMatrix.length=C,c.directionalLength=h,c.pointLength=q,c.spotLength=t,c.rectAreaLength=y,c.hemiLength=n,c.numDirectionalShadows=z,c.numPointShadows=x,c.numSpotShadows=C,b.version=Wj++;},state:b};}function Bh(){var a=new Vj(),b=[],c=[];return{init:function(){b.length=0;c.length=0;},state:{lightsArray:b,shadowsArray:c,lights:a},setupLights:function(d){a.setup(b,c,d);},pushLight:function(a){b.push(a);},pushShadow:function(a){c.push(a);}};}function Xj(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c);}var b=new _WeakMap();return{get:function(c,d){if(!1===b.has(c)){var e=new Bh();b.set(c,new _WeakMap());b.get(c).set(d,e);c.addEventListener("dispose",a);}else!1===b.get(c).has(d)?(e=new Bh(),b.get(c).set(d,e)):e=b.get(c).get(d);return e;},dispose:function(){b=new _WeakMap();}};}function Eb(a){Q.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a);}function Fb(a){Q.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new n();this.nearDistance=1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.lights=this.fog=!1;this.setValues(a);}function Ch(a,b,c){function d(b,c,d,e,f,g){var h=b.geometry;var l=m;var r=b.customDepthMaterial;d.isPointLight&&(l=p,r=b.customDistanceMaterial);r?l=r:(r=!1,c.morphTargets&&(h&&h.isBufferGeometry?r=h.morphAttributes&&h.morphAttributes.position&&0<h.morphAttributes.position.length:h&&h.isGeometry&&(r=h.morphTargets&&0<h.morphTargets.length)),b.isSkinnedMesh&&!1===c.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b),b=b.isSkinnedMesh&&c.skinning,h=0,r&&(h|=1),b&&(h|=2),l=l[h]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(h=l.uuid,r=c.uuid,b=u[h],void 0===b&&(b={},u[h]=b),h=b[r],void 0===h&&(h=l.clone(),b[r]=h),l=h);l.visible=c.visible;l.wireframe=c.wireframe;l.side=3===g?null!=c.shadowSide?c.shadowSide:c.side:null!=c.shadowSide?c.shadowSide:k[c.side];l.clipShadows=c.clipShadows;l.clippingPlanes=c.clippingPlanes;l.clipIntersection=c.clipIntersection;l.wireframeLinewidth=c.wireframeLinewidth;l.linewidth=c.linewidth;d.isPointLight&&l.isMeshDistanceMaterial&&(l.referencePosition.setFromMatrixPosition(d.matrixWorld),l.nearDistance=e,l.farDistance=f);return l;}function e(c,g,h,l,m){if(!1!==c.visible){if(c.layers.test(g.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&3===m)&&(!c.frustumCulled||f.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,c.matrixWorld);var p=b.update(c),u=c.material;if(_Array$isArray(u))for(var k=p.groups,r=0,t=k.length;r<t;r++){var q=k[r],n=u[q.materialIndex];n&&n.visible&&(n=d(c,n,l,h.near,h.far,m),a.renderBufferDirect(h,null,p,n,c,q));}else u.visible&&(n=d(c,u,l,h.near,h.far,m),a.renderBufferDirect(h,null,p,n,c,null));}c=c.children;p=0;for(u=c.length;p<u;p++)e(c[p],g,h,l,m);}}var f=new Ed(),g=new v(),h=new v(),l=new da(),m=Array(4),p=Array(4),u={},k={0:1,1:0,2:2},q=new va({defines:{SAMPLE_RATE:.25,HALF_SAMPLE_RATE:.125},uniforms:{shadow_pass:{value:null},resolution:{value:new v()},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}"}),t=q.clone();t.defines.HORIZONAL_PASS=1;var n=new D();n.addAttribute("position",new N(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var w=new ra(n,q);for(n=0;4!==n;++n){var z=0!==(n&1),x=0!==(n&2),C=new Eb({depthPacking:3201,morphTargets:z,skinning:x});m[n]=C;z=new Fb({morphTargets:z,skinning:x});p[n]=z;}var W=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(d,m,p){if(!1!==W.enabled&&(!1!==W.autoUpdate||!1!==W.needsUpdate)&&0!==d.length){var u=a.getRenderTarget(),k=a.getActiveCubeFace(),r=a.getActiveMipmapLevel(),n=a.state;n.setBlending(0);n.buffers.color.setClear(1,1,1,1);n.buffers.depth.setTest(!0);n.setScissorTest(!1);for(var y=0,x=d.length;y<x;y++){var C=d[y],S=C.shadow;if(void 0===S)console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");else{g.copy(S.mapSize);var U=S.getFrameExtents();g.multiply(U);h.copy(S.mapSize);if(g.x>c||g.y>c)console.warn("THREE.WebGLShadowMap:",C,"has shadow exceeding max texture size, reducing"),g.x>c&&(h.x=Math.floor(c/U.x),g.x=h.x*U.x,S.mapSize.x=h.x),g.y>c&&(h.y=Math.floor(c/U.y),g.y=h.y*U.y,S.mapSize.y=h.y);null!==S.map||S.isPointLightShadow||3!==this.type||(U={minFilter:1006,magFilter:1006,format:1023},S.map=new Ka(g.x,g.y,U),S.map.texture.name=C.name+".shadowMap",S.mapPass=new Ka(g.x,g.y,U),S.camera.updateProjectionMatrix());null===S.map&&(U={minFilter:1003,magFilter:1003,format:1023},S.map=new Ka(g.x,g.y,U),S.map.texture.name=C.name+".shadowMap",S.camera.updateProjectionMatrix());a.setRenderTarget(S.map);a.clear();U=S.getViewportCount();for(var z=0;z<U;z++){var E=S.getViewport(z);l.set(h.x*E.x,h.y*E.y,h.x*E.z,h.y*E.w);n.viewport(l);S.updateMatrices(C,p,z);f=S.getFrustum();e(m,p,S.camera,C,this.type);}S.isPointLightShadow||3!==this.type||(C=S,S=p,U=b.update(w),q.uniforms.shadow_pass.value=C.map.texture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,a.setRenderTarget(C.mapPass),a.clear(),a.renderBufferDirect(S,null,U,q,w,null),t.uniforms.shadow_pass.value=C.mapPass.texture,t.uniforms.resolution.value=C.mapSize,t.uniforms.radius.value=C.radius,a.setRenderTarget(C.map),a.clear(),a.renderBufferDirect(S,null,U,t,w,null));}}W.needsUpdate=!1;a.setRenderTarget(u,k,r);}};}function Yj(a,b,c,d){function e(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,10241,9728);a.texParameteri(b,10240,9728);for(b=0;b<d;b++)a.texImage2D(c+b,0,6408,1,1,0,6408,5121,e);return f;}function f(c,e){z[c]=1;0===x[c]&&(a.enableVertexAttribArray(c),x[c]=1);C[c]!==e&&((d.isWebGL2?a:b.get("ANGLE_instanced_arrays"))[d.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](c,e),C[c]=e);}function g(b){!0!==W[b]&&(a.enable(b),W[b]=!0);}function h(b){!1!==W[b]&&(a.disable(b),W[b]=!1);}function l(b,d,e,f,l,m,p,u){if(0===b)A&&(h(3042),A=!1);else if(A||(g(3042),A=!0),5!==b){if(b!==B||u!==S){if(100!==Ca||100!==Ge)a.blendEquation(32774),Ge=Ca=100;if(u)switch(b){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,0,769,771);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);}else switch(b){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);break;case 3:a.blendFunc(0,769);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);}J=H=D=I=null;B=b;S=u;}}else{l=l||d;m=m||e;p=p||f;if(d!==Ca||l!==Ge)a.blendEquationSeparate(c.convert(d),c.convert(l)),Ca=d,Ge=l;if(e!==I||f!==D||m!==H||p!==J)a.blendFuncSeparate(c.convert(e),c.convert(f),c.convert(m),c.convert(p)),I=e,D=f,H=m,J=p;B=b;S=null;}}function m(b){U!==b&&(b?a.frontFace(2304):a.frontFace(2305),U=b);}function p(b){0!==b?(g(2884),b!==Yf&&(1===b?a.cullFace(1029):2===b?a.cullFace(1028):a.cullFace(1032))):h(2884);Yf=b;}function u(b,c,d){if(b){if(g(32823),ob!==c||Dh!==d)a.polygonOffset(c,d),ob=c,Dh=d;}else h(32823);}function k(b){void 0===b&&(b=33984+F-1);Pa!==b&&(a.activeTexture(b),Pa=b);}var q=new function(){var b=!1,c=new da(),d=null,e=new da(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c);},setLocked:function(a){b=a;},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c));},reset:function(){b=!1;d=null;e.set(-1,0,0,0);}};}(),t=new function(){var b=!1,c=null,d=null,e=null;return{setTest:function(a){a?g(2929):h(2929);},setMask:function(d){c===d||b||(a.depthMask(d),c=d);},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515);}else a.depthFunc(515);d=b;}},setLocked:function(a){b=a;},setClear:function(b){e!==b&&(a.clearDepth(b),e=b);},reset:function(){b=!1;e=d=c=null;}};}(),n=new function(){var b=!1,c=null,d=null,e=null,f=null,l=null,m=null,p=null,u=null;return{setTest:function(a){b||(a?g(2960):h(2960));},setMask:function(d){c===d||b||(a.stencilMask(d),c=d);},setFunc:function(b,c,g){if(d!==b||e!==c||f!==g)a.stencilFunc(b,c,g),d=b,e=c,f=g;},setOp:function(b,c,d){if(l!==b||m!==c||p!==d)a.stencilOp(b,c,d),l=b,m=c,p=d;},setLocked:function(a){b=a;},setClear:function(b){u!==b&&(a.clearStencil(b),u=b);},reset:function(){b=!1;u=p=m=l=f=e=d=c=null;}};}(),w=a.getParameter(34921),z=new Uint8Array(w),x=new Uint8Array(w),C=new Uint8Array(w),W={},E=null,v=null,A=null,B=null,Ca=null,I=null,D=null,Ge=null,H=null,J=null,S=!1,U=null,Yf=null,jh=null,ob=null,Dh=null,F=a.getParameter(35661),G=!1;w=0;w=a.getParameter(7938);-1!==w.indexOf("WebGL")?(w=_parseFloat(/^WebGL ([0-9])/.exec(w)[1]),G=1<=w):-1!==w.indexOf("OpenGL ES")&&(w=_parseFloat(/^OpenGL ES ([0-9])/.exec(w)[1]),G=2<=w);var Pa=null,Q={},N=new da(),O=new da(),L={};L[3553]=e(3553,3553,1);L[34067]=e(34067,34069,6);q.setClear(0,0,0,1);t.setClear(1);n.setClear(0);g(2929);t.setFunc(3);m(!1);p(1);g(2884);l(0);return{buffers:{color:q,depth:t,stencil:n},initAttributes:function(){for(var a=0,b=z.length;a<b;a++)z[a]=0;},enableAttribute:function(a){f(a,0);},enableAttributeAndDivisor:f,disableUnusedAttributes:function(){for(var b=0,c=x.length;b!==c;++b)x[b]!==z[b]&&(a.disableVertexAttribArray(b),x[b]=0);},enable:g,disable:h,getCompressedTextureFormats:function(){if(null===E&&(E=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")||b.get("WEBGL_compressed_texture_astc")))for(var c=a.getParameter(34467),d=0;d<c.length;d++)E.push(c[d]);return E;},useProgram:function(b){return v!==b?(a.useProgram(b),v=b,!0):!1;},setBlending:l,setMaterial:function(a,b){2===a.side?h(2884):g(2884);var c=1===a.side;b&&(c=!c);m(c);1===a.blending&&!1===a.transparent?l(0):l(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha);t.setFunc(a.depthFunc);t.setTest(a.depthTest);t.setMask(a.depthWrite);q.setMask(a.colorWrite);b=a.stencilWrite;n.setTest(b);b&&(n.setFunc(a.stencilFunc,a.stencilRef,a.stencilMask),n.setOp(a.stencilFail,a.stencilZFail,a.stencilZPass));u(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits);},setFlipSided:m,setCullFace:p,setLineWidth:function(b){b!==jh&&(G&&a.lineWidth(b),jh=b);},setPolygonOffset:u,setScissorTest:function(a){a?g(3089):h(3089);},activeTexture:k,bindTexture:function(b,c){null===Pa&&k();var d=Q[Pa];void 0===d&&(d={type:void 0,texture:void 0},Q[Pa]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||L[b]),d.type=b,d.texture=c;},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments);}catch(X){console.error("THREE.WebGLState:",X);}},texImage2D:function(){try{a.texImage2D.apply(a,arguments);}catch(X){console.error("THREE.WebGLState:",X);}},texImage3D:function(){try{a.texImage3D.apply(a,arguments);}catch(X){console.error("THREE.WebGLState:",X);}},scissor:function(b){!1===N.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),N.copy(b));},viewport:function(b){!1===O.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),O.copy(b));},reset:function(){for(var b=0;b<x.length;b++)1===x[b]&&(a.disableVertexAttribArray(b),x[b]=0);W={};Pa=E=null;Q={};Yf=U=B=v=null;q.reset();t.reset();n.reset();}};}function Zj(a,b,c,d,e,f,g){function h(a,b){return D?new OffscreenCanvas(a,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas");}function l(a,b,c,d){var e=1;if(a.width>d||a.height>d)e=d/Math.max(a.width,a.height);if(1>e||!0===b){if("undefined"!==typeof HTMLImageElement&&a instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&a instanceof ImageBitmap)return d=b?O.floorPowerOfTwo:Math.floor,b=d(e*a.width),e=d(e*a.height),void 0===I&&(I=h(b,e)),c=c?h(b,e):I,c.width=b,c.height=e,c.getContext("2d").drawImage(a,0,0,b,e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+b+"x"+e+")."),c;"data"in a&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");}return a;}function m(a){return O.isPowerOfTwo(a.width)&&O.isPowerOfTwo(a.height);}function p(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter;}function u(b,c,e,f){a.generateMipmap(b);d.get(c).__maxMipLevel=Math.log(Math.max(e,f))*Math.LOG2E;}function k(a,c){if(!e.isWebGL2)return a;var d=a;6403===a&&(5126===c&&(d=33326),5131===c&&(d=33325),5121===c&&(d=33321));6407===a&&(5126===c&&(d=34837),5131===c&&(d=34843),5121===c&&(d=32849));6408===a&&(5126===c&&(d=34836),5131===c&&(d=34842),5121===c&&(d=32856));33325===d||33326===d||34842===d||34836===d?b.get("EXT_color_buffer_float"):(34843===d||34837===d)&&console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");return d;}function q(a){return 1003===a||1004===a||1005===a?9728:9729;}function t(b){b=b.target;b.removeEventListener("dispose",t);var c=d.get(b);void 0!==c.__webglInit&&(a.deleteTexture(c.__webglTexture),d.remove(b));b.isVideoTexture&&Ca.delete(b);g.memory.textures--;}function n(b){b=b.target;b.removeEventListener("dispose",n);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture);d.remove(b);}g.memory.textures--;}function w(a,b){var e=d.get(a);if(a.isVideoTexture){var f=g.render.frame;Ca.get(a)!==f&&(Ca.set(a,f),a.update());}if(0<a.version&&e.__version!==a.version)if(f=a.image,void 0===f)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(!1===f.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{E(e,a,b);return;}c.activeTexture(33984+b);c.bindTexture(3553,e.__webglTexture);}function z(b,g){if(6===b.image.length){var h=d.get(b);if(0<b.version&&h.__version!==b.version){W(h,b);c.activeTexture(33984+g);c.bindTexture(34067,h.__webglTexture);a.pixelStorei(37440,b.flipY);var r=b&&b.isCompressedTexture;g=b.image[0]&&b.image[0].isDataTexture;for(var t=[],q=0;6>q;q++)t[q]=r||g?g?b.image[q].image:b.image[q]:l(b.image[q],!1,!0,e.maxCubemapSize);var n=t[0],y=m(n)||e.isWebGL2,w=f.convert(b.format),x=f.convert(b.type),U=k(w,x);C(34067,b,y);if(r){for(q=0;6>q;q++){var S=t[q].mipmaps;for(r=0;r<S.length;r++){var z=S[r];1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(w)?c.compressedTexImage2D(34069+q,r,U,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+q,r,U,z.width,z.height,0,w,x,z.data);}}h.__maxMipLevel=S.length-1;}else{S=b.mipmaps;for(q=0;6>q;q++)if(g)for(c.texImage2D(34069+q,0,U,t[q].width,t[q].height,0,w,x,t[q].data),r=0;r<S.length;r++)z=S[r],z=z.image[q].image,c.texImage2D(34069+q,r+1,U,z.width,z.height,0,w,x,z.data);else for(c.texImage2D(34069+q,0,U,w,x,t[q]),r=0;r<S.length;r++)z=S[r],c.texImage2D(34069+q,r+1,U,w,x,z.image[q]);h.__maxMipLevel=S.length;}p(b,y)&&u(34067,b,n.width,n.height);h.__version=b.version;if(b.onUpdate)b.onUpdate(b);}else c.activeTexture(33984+g),c.bindTexture(34067,h.__webglTexture);}}function x(a,b){c.activeTexture(33984+b);c.bindTexture(34067,d.get(a).__webglTexture);}function C(c,g,h){h?(a.texParameteri(c,10242,f.convert(g.wrapS)),a.texParameteri(c,10243,f.convert(g.wrapT)),32879!==c&&35866!==c||a.texParameteri(c,32882,f.convert(g.wrapR)),a.texParameteri(c,10240,f.convert(g.magFilter)),a.texParameteri(c,10241,f.convert(g.minFilter))):(a.texParameteri(c,10242,33071),a.texParameteri(c,10243,33071),32879!==c&&35866!==c||a.texParameteri(c,32882,33071),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(c,10240,q(g.magFilter)),a.texParameteri(c,10241,q(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));!(h=b.get("EXT_texture_filter_anisotropic"))||1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===(e.isWebGL2||b.get("OES_texture_half_float_linear"))||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy);}function W(b,c){void 0===b.__webglInit&&(b.__webglInit=!0,c.addEventListener("dispose",t),b.__webglTexture=a.createTexture(),g.memory.textures++);}function E(b,d,g){var h=3553;d.isDataTexture2DArray&&(h=35866);d.isDataTexture3D&&(h=32879);W(b,d);c.activeTexture(33984+g);c.bindTexture(h,b.__webglTexture);a.pixelStorei(37440,d.flipY);a.pixelStorei(37441,d.premultiplyAlpha);a.pixelStorei(3317,d.unpackAlignment);g=e.isWebGL2?!1:1001!==d.wrapS||1001!==d.wrapT||1003!==d.minFilter&&1006!==d.minFilter;g=g&&!1===m(d.image);g=l(d.image,g,!1,e.maxTextureSize);var r=m(g)||e.isWebGL2,q=f.convert(d.format),t=f.convert(d.type),n=k(q,t);C(h,d,r);var y=d.mipmaps;if(d.isDepthTexture){n=6402;if(1015===d.type){if(!e.isWebGL2)throw Error("Float Depth Texture only supported in WebGL2.0");n=36012;}else e.isWebGL2&&(n=33189);1026===d.format&&6402===n&&1012!==d.type&&1014!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),d.type=1012,t=f.convert(d.type));1027===d.format&&(n=34041,1020!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),d.type=1020,t=f.convert(d.type)));c.texImage2D(3553,0,n,g.width,g.height,0,q,t,null);}else if(d.isDataTexture){if(0<y.length&&r){for(var w=0,x=y.length;w<x;w++)h=y[w],c.texImage2D(3553,w,n,h.width,h.height,0,q,t,h.data);d.generateMipmaps=!1;b.__maxMipLevel=y.length-1;}else c.texImage2D(3553,0,n,g.width,g.height,0,q,t,g.data),b.__maxMipLevel=0;}else if(d.isCompressedTexture){w=0;for(x=y.length;w<x;w++)h=y[w],1023!==d.format&&1022!==d.format?-1<c.getCompressedTextureFormats().indexOf(q)?c.compressedTexImage2D(3553,w,n,h.width,h.height,0,h.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,w,n,h.width,h.height,0,q,t,h.data);b.__maxMipLevel=y.length-1;}else if(d.isDataTexture2DArray)c.texImage3D(35866,0,n,g.width,g.height,g.depth,0,q,t,g.data),b.__maxMipLevel=0;else if(d.isDataTexture3D)c.texImage3D(32879,0,n,g.width,g.height,g.depth,0,q,t,g.data),b.__maxMipLevel=0;else if(0<y.length&&r){w=0;for(x=y.length;w<x;w++)h=y[w],c.texImage2D(3553,w,n,q,t,h);d.generateMipmaps=!1;b.__maxMipLevel=y.length-1;}else c.texImage2D(3553,0,n,q,t,g),b.__maxMipLevel=0;p(d,r)&&u(3553,d,g.width,g.height);b.__version=d.version;if(d.onUpdate)d.onUpdate(d);}function v(b,e,g,h){var l=f.convert(e.texture.format),m=f.convert(e.texture.type),p=k(l,m);c.texImage2D(h,0,p,e.width,e.height,0,l,m,null);a.bindFramebuffer(36160,b);a.framebufferTexture2D(36160,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(36160,null);}function A(b,c,d){a.bindRenderbuffer(36161,b);if(c.depthBuffer&&!c.stencilBuffer)d?(d=B(c),a.renderbufferStorageMultisample(36161,d,33189,c.width,c.height)):a.renderbufferStorage(36161,33189,c.width,c.height),a.framebufferRenderbuffer(36160,36096,36161,b);else if(c.depthBuffer&&c.stencilBuffer)d?(d=B(c),a.renderbufferStorageMultisample(36161,d,35056,c.width,c.height)):a.renderbufferStorage(36161,34041,c.width,c.height),a.framebufferRenderbuffer(36160,33306,36161,b);else{b=f.convert(c.texture.format);var e=f.convert(c.texture.type);b=k(b,e);d?(d=B(c),a.renderbufferStorageMultisample(36161,d,b,c.width,c.height)):a.renderbufferStorage(36161,b,c.width,c.height);}a.bindRenderbuffer(36161,null);}function B(a){return e.isWebGL2&&a.isWebGLMultisampleRenderTarget?Math.min(e.maxSamples,a.samples):0;}var Ca=new _WeakMap(),I,D="undefined"!==typeof OffscreenCanvas,H=0,J=!1,F=!1;this.allocateTextureUnit=function(){var a=H;a>=e.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+a+" texture units while this GPU supports only "+e.maxTextures);H+=1;return a;};this.resetTextureUnits=function(){H=0;};this.setTexture2D=w;this.setTexture2DArray=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?E(e,a,b):(c.activeTexture(33984+b),c.bindTexture(35866,e.__webglTexture));};this.setTexture3D=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?E(e,a,b):(c.activeTexture(33984+b),c.bindTexture(32879,e.__webglTexture));};this.setTextureCube=z;this.setTextureCubeDynamic=x;this.setupRenderTarget=function(b){var h=d.get(b),l=d.get(b.texture);b.addEventListener("dispose",n);l.__webglTexture=a.createTexture();g.memory.textures++;var r=!0===b.isWebGLRenderTargetCube,q=!0===b.isWebGLMultisampleRenderTarget,t=m(b)||e.isWebGL2;if(r)for(h.__webglFramebuffer=[],q=0;6>q;q++)h.__webglFramebuffer[q]=a.createFramebuffer();else if(h.__webglFramebuffer=a.createFramebuffer(),q)if(e.isWebGL2){h.__webglMultisampledFramebuffer=a.createFramebuffer();h.__webglColorRenderbuffer=a.createRenderbuffer();a.bindRenderbuffer(36161,h.__webglColorRenderbuffer);q=f.convert(b.texture.format);var y=f.convert(b.texture.type);q=k(q,y);y=B(b);a.renderbufferStorageMultisample(36161,y,q,b.width,b.height);a.bindFramebuffer(36160,h.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(36160,36064,36161,h.__webglColorRenderbuffer);a.bindRenderbuffer(36161,null);b.depthBuffer&&(h.__webglDepthRenderbuffer=a.createRenderbuffer(),A(h.__webglDepthRenderbuffer,b,!0));a.bindFramebuffer(36160,null);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(r){c.bindTexture(34067,l.__webglTexture);C(34067,b.texture,t);for(q=0;6>q;q++)v(h.__webglFramebuffer[q],b,36064,34069+q);p(b.texture,t)&&u(34067,b.texture,b.width,b.height);c.bindTexture(34067,null);}else c.bindTexture(3553,l.__webglTexture),C(3553,b.texture,t),v(h.__webglFramebuffer,b,36064,3553),p(b.texture,t)&&u(3553,b.texture,b.width,b.height),c.bindTexture(3553,null);if(b.depthBuffer){h=d.get(b);l=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(l)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported");a.bindFramebuffer(36160,h.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);w(b.depthTexture,0);h=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(36160,36096,3553,h,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(36160,33306,3553,h,0);else throw Error("Unknown depthTexture format");}else if(l)for(h.__webglDepthbuffer=[],l=0;6>l;l++)a.bindFramebuffer(36160,h.__webglFramebuffer[l]),h.__webglDepthbuffer[l]=a.createRenderbuffer(),A(h.__webglDepthbuffer[l],b);else a.bindFramebuffer(36160,h.__webglFramebuffer),h.__webglDepthbuffer=a.createRenderbuffer(),A(h.__webglDepthbuffer,b);a.bindFramebuffer(36160,null);}};this.updateRenderTargetMipmap=function(a){var b=a.texture,f=m(a)||e.isWebGL2;if(p(b,f)){f=a.isWebGLRenderTargetCube?34067:3553;var g=d.get(b).__webglTexture;c.bindTexture(f,g);u(f,b,a.width,a.height);c.bindTexture(f,null);}};this.updateMultisampleRenderTarget=function(b){if(b.isWebGLMultisampleRenderTarget)if(e.isWebGL2){var c=d.get(b);a.bindFramebuffer(36008,c.__webglMultisampledFramebuffer);a.bindFramebuffer(36009,c.__webglFramebuffer);c=b.width;var f=b.height,g=16384;b.depthBuffer&&(g|=256);b.stencilBuffer&&(g|=1024);a.blitFramebuffer(0,0,c,f,0,0,c,f,g,9728);}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");};this.safeSetTexture2D=function(a,b){a&&a.isWebGLRenderTarget&&(!1===J&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),J=!0),a=a.texture);w(a,b);};this.safeSetTextureCube=function(a,b){a&&a.isWebGLRenderTargetCube&&(!1===F&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),F=!0),a=a.texture);a&&a.isCubeTexture||_Array$isArray(a.image)&&6===a.image.length?z(a,b):x(a,b);};}function Eh(a,b,c){return{convert:function(a){if(1E3===a)return 10497;if(1001===a)return 33071;if(1002===a)return 33648;if(1003===a)return 9728;if(1004===a)return 9984;if(1005===a)return 9986;if(1006===a)return 9729;if(1007===a)return 9985;if(1008===a)return 9987;if(1009===a)return 5121;if(1017===a)return 32819;if(1018===a)return 32820;if(1019===a)return 33635;if(1010===a)return 5120;if(1011===a)return 5122;if(1012===a)return 5123;if(1013===a)return 5124;if(1014===a)return 5125;if(1015===a)return 5126;if(1016===a){if(c.isWebGL2)return 5131;var d=b.get("OES_texture_half_float");if(null!==d)return d.HALF_FLOAT_OES;}if(1021===a)return 6406;if(1022===a)return 6407;if(1023===a)return 6408;if(1024===a)return 6409;if(1025===a)return 6410;if(1026===a)return 6402;if(1027===a)return 34041;if(1028===a)return 6403;if(100===a)return 32774;if(101===a)return 32778;if(102===a)return 32779;if(200===a)return 0;if(201===a)return 1;if(202===a)return 768;if(203===a)return 769;if(204===a)return 770;if(205===a)return 771;if(206===a)return 772;if(207===a)return 773;if(208===a)return 774;if(209===a)return 775;if(210===a)return 776;if(33776===a||33777===a||33778===a||33779===a)if(d=b.get("WEBGL_compressed_texture_s3tc"),null!==d){if(33776===a)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===a)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===a)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===a)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT;}if(35840===a||35841===a||35842===a||35843===a)if(d=b.get("WEBGL_compressed_texture_pvrtc"),null!==d){if(35840===a)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===a)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===a)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===a)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;}if(36196===a&&(d=b.get("WEBGL_compressed_texture_etc1"),null!==d))return d.COMPRESSED_RGB_ETC1_WEBGL;if(37808===a||37809===a||37810===a||37811===a||37812===a||37813===a||37814===a||37815===a||37816===a||37817===a||37818===a||37819===a||37820===a||37821===a)if(d=b.get("WEBGL_compressed_texture_astc"),null!==d)return a;if(103===a||104===a){if(c.isWebGL2){if(103===a)return 32775;if(104===a)return 32776;}d=b.get("EXT_blend_minmax");if(null!==d){if(103===a)return d.MIN_EXT;if(104===a)return d.MAX_EXT;}}if(1020===a){if(c.isWebGL2)return 34042;d=b.get("WEBGL_depth_texture");if(null!==d)return d.UNSIGNED_INT_24_8_WEBGL;}return 0;}};}function Hc(){B.call(this);this.type="Group";}function Id(a){la.call(this);this.cameras=a||[];}function Fh(a,b,c){Gh.setFromMatrixPosition(b.matrixWorld);Hh.setFromMatrixPosition(c.matrixWorld);var d=Gh.distanceTo(Hh),e=b.projectionMatrix.elements,f=c.projectionMatrix.elements,g=e[14]/(e[10]-1);c=e[14]/(e[10]+1);var h=(e[9]+1)/e[5],l=(e[9]-1)/e[5],m=(e[8]-1)/e[0],p=(f[8]+1)/f[0];e=g*m;f=g*p;p=d/(-m+p);m=p*-m;b.matrixWorld.decompose(a.position,a.quaternion,a.scale);a.translateX(m);a.translateZ(p);a.matrixWorld.compose(a.position,a.quaternion,a.scale);a.matrixWorldInverse.getInverse(a.matrixWorld);b=g+p;g=c+p;a.projectionMatrix.makePerspective(e-m,f+(d-m),h*c/g*b,l*c/g*b,b,g);}function cg(a){function b(){return null!==h&&!0===h.isPresenting;}function c(){if(b()){var c=h.getEyeParameters("left");e=2*c.renderWidth*q;f=c.renderHeight*q;Fa=a.getPixelRatio();a.getSize(E);a.setDrawingBufferSize(e,f,1);x.viewport.set(0,0,e/2,f);C.viewport.set(e/2,0,e/2,f);B.start();g.dispatchEvent({type:"sessionstart"});}else g.enabled&&a.setDrawingBufferSize(E.width,E.height,Fa),B.stop(),g.dispatchEvent({type:"sessionend"});}function d(a,b){null!==b&&4===b.length&&a.set(b[0]*e,b[1]*f,b[2]*e,b[3]*f);}var e,f,g=this,h=null,l=null,m=null,p=[],u=new P(),k=new P(),q=1,t="local-floor"; false&&(false);var y=new P(),w=new na(),z=new n(),x=new la();x.viewport=new da();x.layers.enable(1);var C=new la();C.viewport=new da();C.layers.enable(2);var W=new Id([x,C]);W.layers.enable(1);W.layers.enable(2);var E=new v(),Fa,A=[];this.enabled=!1;this.getController=function(a){var b=p[a];void 0===b&&(b=new Hc(),b.matrixAutoUpdate=!1,b.visible=!1,p[a]=b);return b;};this.getDevice=function(){return h;};this.setDevice=function(a){void 0!==a&&(h=a);B.setContext(a);};this.setFramebufferScaleFactor=function(a){q=a;};this.setReferenceSpaceType=function(a){t=a;};this.setPoseTarget=function(a){void 0!==a&&(m=a);};this.getCamera=function(a){var c="local-floor"===t?1.6:0;if(!1===b())return a.position.set(0,c,0),a.rotation.set(0,0,0),a;h.depthNear=a.near;h.depthFar=a.far;h.getFrameData(l);if("local-floor"===t){var e=h.stageParameters;e?u.fromArray(e.sittingToStandingTransform):u.makeTranslation(0,c,0);}c=l.pose;e=null!==m?m:a;e.matrix.copy(u);e.matrix.decompose(e.position,e.quaternion,e.scale);null!==c.orientation&&(w.fromArray(c.orientation),e.quaternion.multiply(w));null!==c.position&&(w.setFromRotationMatrix(u),z.fromArray(c.position),z.applyQuaternion(w),e.position.add(z));e.updateMatrixWorld();x.near=a.near;C.near=a.near;x.far=a.far;C.far=a.far;x.matrixWorldInverse.fromArray(l.leftViewMatrix);C.matrixWorldInverse.fromArray(l.rightViewMatrix);k.getInverse(u);"local-floor"===t&&(x.matrixWorldInverse.multiply(k),C.matrixWorldInverse.multiply(k));a=e.parent;null!==a&&(y.getInverse(a.matrixWorld),x.matrixWorldInverse.multiply(y),C.matrixWorldInverse.multiply(y));x.matrixWorld.getInverse(x.matrixWorldInverse);C.matrixWorld.getInverse(C.matrixWorldInverse);x.projectionMatrix.fromArray(l.leftProjectionMatrix);C.projectionMatrix.fromArray(l.rightProjectionMatrix);Fh(W,x,C);a=h.getLayers();a.length&&(a=a[0],d(x.viewport,a.leftBounds),d(C.viewport,a.rightBounds));a:for(a=0;a<p.length;a++){c=p[a];b:{e=a;for(var f=navigator.getGamepads&&navigator.getGamepads(),g=0,r=0,q=f.length;g<q;g++){var n=f[g];if(n&&("Daydream Controller"===n.id||"Gear VR Controller"===n.id||"Oculus Go Controller"===n.id||"OpenVR Gamepad"===n.id||n.id.startsWith("Oculus Touch")||n.id.startsWith("HTC Vive Focus")||n.id.startsWith("Spatial Controller"))){if(r===e){e=n;break b;}r++;}}e=void 0;}if(void 0!==e&&void 0!==e.pose){if(null===e.pose)break a;f=e.pose;!1===f.hasPosition&&c.position.set(.2,-.6,-.05);null!==f.position&&c.position.fromArray(f.position);null!==f.orientation&&c.quaternion.fromArray(f.orientation);c.matrix.compose(c.position,c.quaternion,c.scale);c.matrix.premultiply(u);c.matrix.decompose(c.position,c.quaternion,c.scale);c.matrixWorldNeedsUpdate=!0;c.visible=!0;f="Daydream Controller"===e.id?0:1;void 0===A[a]&&(A[a]=!1);A[a]!==e.buttons[f].pressed&&(A[a]=e.buttons[f].pressed,!0===A[a]?c.dispatchEvent({type:"selectstart"}):(c.dispatchEvent({type:"selectend"}),c.dispatchEvent({type:"select"})));}else c.visible=!1;}return W;};this.getStandingMatrix=function(){return u;};this.isPresenting=b;var B=new Zf();this.setAnimationLoop=function(a){B.setAnimationLoop(a);b()&&B.start();};this.submitFrame=function(){b()&&h.submitFrame();};this.dispose=function(){ false&&false;};this.setFrameOfReferenceType=function(){console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.");};}function Ih(a,b){function c(){return null!==l&&null!==m;}function d(a){for(var b=0;b<k.length;b++)q[b]===a.inputSource&&k[b].dispatchEvent({type:a.type});}function e(){a.setFramebuffer(null);a.setRenderTarget(a.getRenderTarget());x.stop();h.dispatchEvent({type:"sessionend"});}function f(a){m=a;x.setContext(l);x.start();h.dispatchEvent({type:"sessionstart"});}function g(a,b){null===b?a.matrixWorld.copy(a.matrix):a.matrixWorld.multiplyMatrices(b.matrixWorld,a.matrix);a.matrixWorldInverse.getInverse(a.matrixWorld);}var h=this,l=null,m=null,p="local-floor",u=null,k=[],q=[],t=new la();t.layers.enable(1);t.viewport=new da();var n=new la();n.layers.enable(2);n.viewport=new da();var w=new Id([t,n]);w.layers.enable(1);w.layers.enable(2);this.enabled=!1;this.getController=function(a){var b=k[a];void 0===b&&(b=new Hc(),b.matrixAutoUpdate=!1,b.visible=!1,k[a]=b);return b;};this.setFramebufferScaleFactor=function(a){};this.setReferenceSpaceType=function(a){p=a;};this.getSession=function(){return l;};this.setSession=function(a){l=a;null!==l&&(l.addEventListener("select",d),l.addEventListener("selectstart",d),l.addEventListener("selectend",d),l.addEventListener("end",e),l.updateRenderState({baseLayer:new XRWebGLLayer(l,b)}),l.requestReferenceSpace(p).then(f),q=l.inputSources,l.addEventListener("inputsourceschange",function(){q=l.inputSources;console.log(q);for(var a=0;a<k.length;a++)k[a].userData.inputSource=q[a];}));};this.getCamera=function(a){if(c()){var b=a.parent,d=w.cameras;g(w,b);for(var e=0;e<d.length;e++)g(d[e],b);a.matrixWorld.copy(w.matrixWorld);a=a.children;e=0;for(b=a.length;e<b;e++)a[e].updateMatrixWorld(!0);Fh(w,t,n);return w;}return a;};this.isPresenting=c;var z=null,x=new Zf();x.setAnimationLoop(function(b,c){u=c.getViewerPose(m);if(null!==u){var d=u.views,e=l.renderState.baseLayer;a.setFramebuffer(e.framebuffer);for(var f=0;f<d.length;f++){var g=d[f],h=e.getViewport(g),p=w.cameras[f];p.matrix.fromArray(g.transform.inverse.matrix).getInverse(p.matrix);p.projectionMatrix.fromArray(g.projectionMatrix);p.viewport.set(h.x,h.y,h.width,h.height);0===f&&w.matrix.copy(p.matrix);}}for(f=0;f<k.length;f++){d=k[f];if(e=q[f])if(e=c.getPose(e.targetRaySpace,m),null!==e){d.matrix.fromArray(e.transform.matrix);d.matrix.decompose(d.position,d.rotation,d.scale);d.visible=!0;continue;}d.visible=!1;}z&&z(b);});this.setAnimationLoop=function(a){z=a;};this.dispose=function(){};this.getStandingMatrix=function(){console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed.");return new P();};this.getDevice=function(){console.warn("THREE.WebXRManager: getDevice() has been deprecated.");};this.setDevice=function(){console.warn("THREE.WebXRManager: setDevice() has been deprecated.");};this.setFrameOfReferenceType=function(){console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.");};this.submitFrame=function(){};}function dg(a){var b;function c(){oa=new Vi(M);Ea=new Ti(M,oa,a);Ea.isWebGL2||(oa.get("WEBGL_depth_texture"),oa.get("OES_texture_float"),oa.get("OES_texture_half_float"),oa.get("OES_texture_half_float_linear"),oa.get("OES_standard_derivatives"),oa.get("OES_element_index_uint"),oa.get("ANGLE_instanced_arrays"));oa.get("OES_texture_float_linear");ka=new Eh(M,oa,Ea);ha=new Yj(M,oa,ka,Ea);ha.scissor(T.copy(ja).multiplyScalar(fa).floor());ha.viewport(V.copy(ea).multiplyScalar(fa).floor());ia=new Yi(M);Z=new Pj();ca=new Zj(M,oa,ha,Z,Ea,ka,ia);ua=new Qi(M);wa=new Wi(M,ua,ia);qa=new aj(wa,ia);xa=new $i(M);na=new Oj(G,oa,Ea);va=new Sj();sa=new Xj();ma=new Ri(G,ha,qa,A);za=new Si(M,oa,ia,Ea);Ba=new Xi(M,oa,ia,Ea);ia.programs=na.programs;G.capabilities=Ea;G.extensions=oa;G.properties=Z;G.renderLists=va;G.state=ha;G.info=ia;}function d(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");Q=!0;}function e(){console.log("THREE.WebGLRenderer: Context Restored.");Q=!1;c();}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);Z.remove(a);}function g(a){var b=Z.get(a).program;a.program=void 0;void 0!==b&&na.releaseProgram(b);}function h(a,b){a.render(function(a){G.renderBufferImmediate(a,b);});}function l(a,b,c,d){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isGroup)c=a.renderOrder;else if(a.isLOD)!0===a.autoUpdate&&a.update(b);else if(a.isLight)F.pushLight(a),a.castShadow&&F.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||bg.intersectsSprite(a)){d&&Gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Hd);var e=qa.update(a),f=a.material;f.visible&&I.push(a,e,f,c,Gb.z,null);}}else if(a.isImmediateRenderObject)d&&Gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Hd),I.push(a,null,a.material,c,Gb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),!a.frustumCulled||bg.intersectsObject(a))if(d&&Gb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Hd),e=qa.update(a),f=a.material,_Array$isArray(f))for(var g=e.groups,h=0,m=g.length;h<m;h++){var p=g[h],k=f[p.materialIndex];k&&k.visible&&I.push(a,e,k,c,Gb.z,p);}else f.visible&&I.push(a,e,f,c,Gb.z,null);a=a.children;h=0;for(m=a.length;h<m;h++)l(a[h],b,c,d);}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,l=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera){Pa=c;for(var k=c.cameras,u=0,r=k.length;u<r;u++){var q=k[u];h.layers.test(q.layers)&&(ha.viewport(V.copy(q.viewport)),F.setupLights(q),p(h,b,q,l,m,g));}}else Pa=null,p(h,b,c,l,m,g);}}function p(a,c,d,e,f,g){a.onBeforeRender(G,c,d,e,f,g);F=sa.get(c,Pa||d);a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){ha.setMaterial(f);var l=r(d,c.fog,f,a);Y=b=null;ba=!1;h(a,l);}else G.renderBufferDirect(d,c.fog,e,f,a,g);a.onAfterRender(G,c,d,e,f,g);F=sa.get(c,Pa||d);}function k(a,b,c){var d=Z.get(a),e=F.state.lights,h=e.state.version;c=na.getParameters(a,e.state,F.state.shadowsArray,b,Oa.numPlanes,Oa.numIntersection,c);var l=na.getProgramCode(a,c),m=d.program,p=!0;if(void 0===m)a.addEventListener("dispose",f);else if(m.code!==l)g(a);else{if(d.lightsStateVersion!==h)d.lightsStateVersion=h;else if(void 0!==c.shaderID)return;p=!1;}p&&(c.shaderID?(l=db[c.shaderID],d.shader={name:a.type,uniforms:Yb(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}):d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader},a.onBeforeCompile(d.shader,G),l=na.getProgramCode(a,c),m=na.acquireProgram(a,d.shader,c,l),d.program=m,a.program=m);c=m.getAttributes();if(a.morphTargets)for(l=a.numSupportedMorphTargets=0;l<G.maxMorphTargets;l++)0<=c["morphTarget"+l]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(l=a.numSupportedMorphNormals=0;l<G.maxMorphNormals;l++)0<=c["morphNormal"+l]&&a.numSupportedMorphNormals++;c=d.shader.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Oa.numPlanes,d.numIntersection=Oa.numIntersection,c.clippingPlanes=Oa.uniform;d.fog=b;d.lightsStateVersion=h;a.lights&&(c.ambientLightColor.value=e.state.ambient,c.lightProbe.value=e.state.probe,c.directionalLights.value=e.state.directional,c.spotLights.value=e.state.spot,c.rectAreaLights.value=e.state.rectArea,c.pointLights.value=e.state.point,c.hemisphereLights.value=e.state.hemi,c.directionalShadowMap.value=e.state.directionalShadowMap,c.directionalShadowMatrix.value=e.state.directionalShadowMatrix,c.spotShadowMap.value=e.state.spotShadowMap,c.spotShadowMatrix.value=e.state.spotShadowMatrix,c.pointShadowMap.value=e.state.pointShadowMap,c.pointShadowMatrix.value=e.state.pointShadowMatrix);a=d.program.getUniforms();a=Db.seqWithValue(a.seq,c);d.uniformsList=a;}function r(a,b,c,d){ca.resetTextureUnits();var e=Z.get(c),f=F.state.lights;Ie&&(ta||a!==R)&&Oa.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,e,a===R&&c.id===ob);!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:c.lights&&e.lightsStateVersion!==f.state.version?c.needsUpdate=!0:void 0===e.numClippingPlanes||e.numClippingPlanes===Oa.numPlanes&&e.numIntersection===Oa.numIntersection||(c.needsUpdate=!0));c.needsUpdate&&(k(c,b,d),c.needsUpdate=!1);var g=!1,h=!1,l=!1;f=e.program;var m=f.getUniforms(),p=e.shader.uniforms;ha.useProgram(f.program)&&(l=h=g=!0);c.id!==ob&&(ob=c.id,h=!0);if(g||R!==a){m.setValue(M,"projectionMatrix",a.projectionMatrix);Ea.logarithmicDepthBuffer&&m.setValue(M,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));R!==a&&(R=a,l=h=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)g=m.map.cameraPosition,void 0!==g&&g.setValue(M,Gb.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&m.setValue(M,"viewMatrix",a.matrixWorldInverse);}if(c.skinning&&(m.setOptional(M,d,"bindMatrix"),m.setOptional(M,d,"bindMatrixInverse"),a=d.skeleton))if(g=a.bones,Ea.floatVertexTextures){if(void 0===a.boneTexture){g=Math.sqrt(4*g.length);g=O.ceilPowerOfTwo(g);g=Math.max(g,4);var u=new Float32Array(g*g*4);u.set(a.boneMatrices);var r=new Zb(u,g,g,1023,1015);r.needsUpdate=!0;a.boneMatrices=u;a.boneTexture=r;a.boneTextureSize=g;}m.setValue(M,"boneTexture",a.boneTexture,ca);m.setValue(M,"boneTextureSize",a.boneTextureSize);}else m.setOptional(M,a,"boneMatrices");h&&(m.setValue(M,"toneMappingExposure",G.toneMappingExposure),m.setValue(M,"toneMappingWhitePoint",G.toneMappingWhitePoint),c.lights&&(h=l,p.ambientLightColor.needsUpdate=h,p.lightProbe.needsUpdate=h,p.directionalLights.needsUpdate=h,p.pointLights.needsUpdate=h,p.spotLights.needsUpdate=h,p.rectAreaLights.needsUpdate=h,p.hemisphereLights.needsUpdate=h),b&&c.fog&&(p.fogColor.value.copy(b.color),b.isFog?(p.fogNear.value=b.near,p.fogFar.value=b.far):b.isFogExp2&&(p.fogDensity.value=b.density)),c.isMeshBasicMaterial?q(p,c):c.isMeshLambertMaterial?(q(p,c),c.emissiveMap&&(p.emissiveMap.value=c.emissiveMap)):c.isMeshPhongMaterial?(q(p,c),c.isMeshToonMaterial?(t(p,c),c.gradientMap&&(p.gradientMap.value=c.gradientMap)):t(p,c)):c.isMeshStandardMaterial?(q(p,c),c.isMeshPhysicalMaterial?(y(p,c),p.reflectivity.value=c.reflectivity,p.clearcoat.value=c.clearcoat,p.clearcoatRoughness.value=c.clearcoatRoughness,c.sheen&&p.sheen.value.copy(c.sheen),c.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),p.clearcoatNormalMap.value=c.clearcoatNormalMap,1===c.side&&p.clearcoatNormalScale.value.negate()),p.transparency.value=c.transparency):y(p,c)):c.isMeshMatcapMaterial?(q(p,c),c.matcap&&(p.matcap.value=c.matcap),c.bumpMap&&(p.bumpMap.value=c.bumpMap,p.bumpScale.value=c.bumpScale,1===c.side&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,p.normalScale.value.copy(c.normalScale),1===c.side&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias)):c.isMeshDepthMaterial?(q(p,c),c.displacementMap&&(p.displacementMap.value=c.displacementMap,p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias)):c.isMeshDistanceMaterial?(q(p,c),c.displacementMap&&(p.displacementMap.value=c.displacementMap,p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias),p.referencePosition.value.copy(c.referencePosition),p.nearDistance.value=c.nearDistance,p.farDistance.value=c.farDistance):c.isMeshNormalMaterial?(q(p,c),c.bumpMap&&(p.bumpMap.value=c.bumpMap,p.bumpScale.value=c.bumpScale,1===c.side&&(p.bumpScale.value*=-1)),c.normalMap&&(p.normalMap.value=c.normalMap,p.normalScale.value.copy(c.normalScale),1===c.side&&p.normalScale.value.negate()),c.displacementMap&&(p.displacementMap.value=c.displacementMap,p.displacementScale.value=c.displacementScale,p.displacementBias.value=c.displacementBias)):c.isLineBasicMaterial?(p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,c.isLineDashedMaterial&&(p.dashSize.value=c.dashSize,p.totalSize.value=c.dashSize+c.gapSize,p.scale.value=c.scale)):c.isPointsMaterial?(p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.size.value=c.size*fa,p.scale.value=.5*X,p.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&c.map.updateMatrix(),p.uvTransform.value.copy(c.map.matrix))):c.isSpriteMaterial?(p.diffuse.value.copy(c.color),p.opacity.value=c.opacity,p.rotation.value=c.rotation,p.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&c.map.updateMatrix(),p.uvTransform.value.copy(c.map.matrix))):c.isShadowMaterial&&(p.color.value.copy(c.color),p.opacity.value=c.opacity),void 0!==p.ltc_1&&(p.ltc_1.value=H.LTC_1),void 0!==p.ltc_2&&(p.ltc_2.value=H.LTC_2),Db.upload(M,e.uniformsList,p,ca));c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&(Db.upload(M,e.uniformsList,p,ca),c.uniformsNeedUpdate=!1);c.isSpriteMaterial&&m.setValue(M,"center",d.center);m.setValue(M,"modelViewMatrix",d.modelViewMatrix);m.setValue(M,"normalMatrix",d.normalMatrix);m.setValue(M,"modelMatrix",d.matrixWorld);return f;}function q(a,b){a.opacity.value=b.opacity;b.color&&a.diffuse.value.copy(b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);b.map&&(a.map.value=b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);b.envMap&&(a.envMap.value=b.envMap,a.flipEnvMap.value=b.envMap.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio,a.maxMipLevel.value=Z.get(b.envMap).__maxMipLevel);b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var c=b.map;else b.specularMap?c=b.specularMap:b.displacementMap?c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap);void 0!==c&&(c.isWebGLRenderTarget&&(c=c.texture),!0===c.matrixAutoUpdate&&c.updateMatrix(),a.uvTransform.value.copy(c.matrix));}function t(a,b){a.specular.value.copy(b.specular);a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);}function y(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity);}a=a||{};var w=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),z=void 0!==a.context?a.context:null,x=void 0!==a.alpha?a.alpha:!1,C=void 0!==a.depth?a.depth:!0,W=void 0!==a.stencil?a.stencil:!0,E=void 0!==a.antialias?a.antialias:!1,A=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,B=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,D=void 0!==a.powerPreference?a.powerPreference:"default",J=void 0!==a.failIfMajorPerformanceCaveat?a.failIfMajorPerformanceCaveat:!1,I=null,F=null;this.domElement=w;this.debug={checkShaderErrors:!0};this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var G=this,Q=!1,N=null,S=0,U=0,K=null,aa=null,ob=-1;var Y=b=null;var ba=!1;var R=null,Pa=null,V=new da(),T=new da(),la=null,L=w.width,X=w.height,fa=1,ea=new da(0,0,L,X),ja=new da(0,0,L,X),ra=!1,bg=new Ed(),Oa=new Ui(),Ie=!1,ta=!1,Hd=new P(),Gb=new n();try{x={alpha:x,depth:C,stencil:W,antialias:E,premultipliedAlpha:A,preserveDrawingBuffer:B,powerPreference:D,failIfMajorPerformanceCaveat:J,xrCompatible:!0};w.addEventListener("webglcontextlost",d,!1);w.addEventListener("webglcontextrestored",e,!1);var M=z||w.getContext("webgl",x)||w.getContext("experimental-webgl",x);if(null===M){if(null!==w.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.");}void 0===M.getShaderPrecisionFormat&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1};});}catch(Jh){throw console.error("THREE.WebGLRenderer: "+Jh.message),Jh;}var oa,Ea,ha,ia,Z,ca,ua,wa,qa,na,va,sa,ma,xa,za,Ba,ka;c();var pa="undefined"!==typeof navigator&&"xr"in navigator&&"supportsSession"in navigator.xr?new Ih(G,M):new cg(G);this.vr=pa;var Da=new Ch(G,qa,Ea.maxTextureSize);this.shadowMap=Da;this.getContext=function(){return M;};this.getContextAttributes=function(){return M.getContextAttributes();};this.forceContextLoss=function(){var a=oa.get("WEBGL_lose_context");a&&a.loseContext();};this.forceContextRestore=function(){var a=oa.get("WEBGL_lose_context");a&&a.restoreContext();};this.getPixelRatio=function(){return fa;};this.setPixelRatio=function(a){void 0!==a&&(fa=a,this.setSize(L,X,!1));};this.getSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),a=new v());return a.set(L,X);};this.setSize=function(a,b,c){pa.isPresenting()?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(L=a,X=b,w.width=Math.floor(a*fa),w.height=Math.floor(b*fa),!1!==c&&(w.style.width=a+"px",w.style.height=b+"px"),this.setViewport(0,0,a,b));};this.getDrawingBufferSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),a=new v());return a.set(L*fa,X*fa).floor();};this.setDrawingBufferSize=function(a,b,c){L=a;X=b;fa=c;w.width=Math.floor(a*c);w.height=Math.floor(b*c);this.setViewport(0,0,a,b);};this.getCurrentViewport=function(a){void 0===a&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),a=new da());return a.copy(V);};this.getViewport=function(a){return a.copy(ea);};this.setViewport=function(a,b,c,d){a.isVector4?ea.set(a.x,a.y,a.z,a.w):ea.set(a,b,c,d);ha.viewport(V.copy(ea).multiplyScalar(fa).floor());};this.getScissor=function(a){return a.copy(ja);};this.setScissor=function(a,b,c,d){a.isVector4?ja.set(a.x,a.y,a.z,a.w):ja.set(a,b,c,d);ha.scissor(T.copy(ja).multiplyScalar(fa).floor());};this.getScissorTest=function(){return ra;};this.setScissorTest=function(a){ha.setScissorTest(ra=a);};this.getClearColor=function(){return ma.getClearColor();};this.setClearColor=function(){ma.setClearColor.apply(ma,arguments);};this.getClearAlpha=function(){return ma.getClearAlpha();};this.setClearAlpha=function(){ma.setClearAlpha.apply(ma,arguments);};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=16384;if(void 0===b||b)d|=256;if(void 0===c||c)d|=1024;M.clear(d);};this.clearColor=function(){this.clear(!0,!1,!1);};this.clearDepth=function(){this.clear(!1,!0,!1);};this.clearStencil=function(){this.clear(!1,!1,!0);};this.dispose=function(){w.removeEventListener("webglcontextlost",d,!1);w.removeEventListener("webglcontextrestored",e,!1);va.dispose();sa.dispose();Z.dispose();qa.dispose();pa.dispose();ya.stop();};this.renderBufferImmediate=function(a,b){ha.initAttributes();var c=Z.get(a);a.hasPositions&&!c.position&&(c.position=M.createBuffer());a.hasNormals&&!c.normal&&(c.normal=M.createBuffer());a.hasUvs&&!c.uv&&(c.uv=M.createBuffer());a.hasColors&&!c.color&&(c.color=M.createBuffer());b=b.getAttributes();a.hasPositions&&(M.bindBuffer(34962,c.position),M.bufferData(34962,a.positionArray,35048),ha.enableAttribute(b.position),M.vertexAttribPointer(b.position,3,5126,!1,0,0));a.hasNormals&&(M.bindBuffer(34962,c.normal),M.bufferData(34962,a.normalArray,35048),ha.enableAttribute(b.normal),M.vertexAttribPointer(b.normal,3,5126,!1,0,0));a.hasUvs&&(M.bindBuffer(34962,c.uv),M.bufferData(34962,a.uvArray,35048),ha.enableAttribute(b.uv),M.vertexAttribPointer(b.uv,2,5126,!1,0,0));a.hasColors&&(M.bindBuffer(34962,c.color),M.bufferData(34962,a.colorArray,35048),ha.enableAttribute(b.color),M.vertexAttribPointer(b.color,3,5126,!1,0,0));ha.disableUnusedAttributes();M.drawArrays(4,0,a.count);a.count=0;};this.renderBufferDirect=function(a,c,d,e,f,g){var h=f.isMesh&&0>f.matrixWorld.determinant();ha.setMaterial(e,h);var l=r(a,c,e,f),m=!1;if(b!==d.id||Y!==l.id||ba!==(!0===e.wireframe))b=d.id,Y=l.id,ba=!0===e.wireframe,m=!0;f.morphTargetInfluences&&(xa.update(f,d,e,l),m=!0);h=d.index;var p=d.attributes.position;c=1;!0===e.wireframe&&(h=wa.getWireframeAttribute(d),c=2);a=za;if(null!==h){var k=ua.get(h);a=Ba;a.setIndex(k);}if(m){if(d&&d.isInstancedBufferGeometry&&!Ea.isWebGL2&&null===oa.get("ANGLE_instanced_arrays"))console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{ha.initAttributes();m=d.attributes;l=l.getAttributes();var u=e.defaultAttributeValues;for(v in l){var q=l[v];if(0<=q){var t=m[v];if(void 0!==t){var n=t.normalized,y=t.itemSize,w=ua.get(t);if(void 0!==w){var x=w.buffer,z=w.type;w=w.bytesPerElement;if(t.isInterleavedBufferAttribute){var C=t.data,E=C.stride;t=t.offset;C&&C.isInstancedInterleavedBuffer?(ha.enableAttributeAndDivisor(q,C.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=C.meshPerAttribute*C.count)):ha.enableAttribute(q);M.bindBuffer(34962,x);M.vertexAttribPointer(q,y,z,n,E*w,t*w);}else t.isInstancedBufferAttribute?(ha.enableAttributeAndDivisor(q,t.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=t.meshPerAttribute*t.count)):ha.enableAttribute(q),M.bindBuffer(34962,x),M.vertexAttribPointer(q,y,z,n,0,0);}}else if(void 0!==u&&(n=u[v],void 0!==n))switch(n.length){case 2:M.vertexAttrib2fv(q,n);break;case 3:M.vertexAttrib3fv(q,n);break;case 4:M.vertexAttrib4fv(q,n);break;default:M.vertexAttrib1fv(q,n);}}}ha.disableUnusedAttributes();}null!==h&&M.bindBuffer(34963,k.buffer);}k=Infinity;null!==h?k=h.count:void 0!==p&&(k=p.count);h=d.drawRange.start*c;p=null!==g?g.start*c:0;var v=Math.max(h,p);g=Math.max(0,Math.min(k,h+d.drawRange.count*c,p+(null!==g?g.count*c:Infinity))-1-v+1);if(0!==g){if(f.isMesh){if(!0===e.wireframe)ha.setLineWidth(e.wireframeLinewidth*(null===K?fa:1)),a.setMode(1);else switch(f.drawMode){case 0:a.setMode(4);break;case 1:a.setMode(5);break;case 2:a.setMode(6);}}else f.isLine?(e=e.linewidth,void 0===e&&(e=1),ha.setLineWidth(e*(null===K?fa:1)),f.isLineSegments?a.setMode(1):f.isLineLoop?a.setMode(2):a.setMode(3)):f.isPoints?a.setMode(0):f.isSprite&&a.setMode(4);d&&d.isInstancedBufferGeometry?0<d.maxInstancedCount&&a.renderInstances(d,v,g):a.render(v,g);}};this.compile=function(a,b){F=sa.get(a,b);F.init();a.traverse(function(a){a.isLight&&(F.pushLight(a),a.castShadow&&F.pushShadow(a));});F.setupLights(b);a.traverse(function(b){if(b.material)if(_Array$isArray(b.material))for(var c=0;c<b.material.length;c++)k(b.material[c],a.fog,b);else k(b.material,a.fog,b);});};var Aa=null,ya=new Zf();ya.setAnimationLoop(function(a){pa.isPresenting()||Aa&&Aa(a);}); false&&false;this.setAnimationLoop=function(a){Aa=a;pa.setAnimationLoop(a);ya.start();};this.render=function(a,c,d,e){if(void 0!==d){console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");var f=d;}if(void 0!==e){console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");var g=e;}c&&c.isCamera?Q||(Y=b=null,ba=!1,ob=-1,R=null,!0===a.autoUpdate&&a.updateMatrixWorld(),null===c.parent&&c.updateMatrixWorld(),pa.enabled&&(c=pa.getCamera(c)),F=sa.get(a,c),F.init(),a.onBeforeRender(G,a,c,f||K),Hd.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),bg.setFromMatrix(Hd),ta=this.localClippingEnabled,Ie=Oa.init(this.clippingPlanes,ta,c),I=va.get(a,c),I.init(),l(a,c,0,G.sortObjects),!0===G.sortObjects&&I.sort(),Ie&&Oa.beginShadows(),Da.render(F.state.shadowsArray,a,c),F.setupLights(c),Ie&&Oa.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==f&&this.setRenderTarget(f),ma.render(I,a,c,g),d=I.opaque,e=I.transparent,a.overrideMaterial?(f=a.overrideMaterial,d.length&&m(d,a,c,f),e.length&&m(e,a,c,f)):(d.length&&m(d,a,c),e.length&&m(e,a,c)),a.onAfterRender(G,a,c),null!==K&&(ca.updateRenderTargetMipmap(K),ca.updateMultisampleRenderTarget(K)),ha.buffers.depth.setTest(!0),ha.buffers.depth.setMask(!0),ha.buffers.color.setMask(!0),ha.setPolygonOffset(!1),pa.enabled&&pa.submitFrame(),F=I=null):console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");};this.setFramebuffer=function(a){N!==a&&M.bindFramebuffer(36160,a);N=a;};this.getActiveCubeFace=function(){return S;};this.getActiveMipmapLevel=function(){return U;};this.getRenderTarget=function(){return K;};this.setRenderTarget=function(a,b,c){K=a;S=b;U=c;a&&void 0===Z.get(a).__webglFramebuffer&&ca.setupRenderTarget(a);var d=N,e=!1;a?(d=Z.get(a).__webglFramebuffer,a.isWebGLRenderTargetCube?(d=d[b||0],e=!0):d=a.isWebGLMultisampleRenderTarget?Z.get(a).__webglMultisampledFramebuffer:d,V.copy(a.viewport),T.copy(a.scissor),la=a.scissorTest):(V.copy(ea).multiplyScalar(fa).floor(),T.copy(ja).multiplyScalar(fa).floor(),la=ra);aa!==d&&(M.bindFramebuffer(36160,d),aa=d);ha.viewport(V);ha.scissor(T);ha.setScissorTest(la);e&&(a=Z.get(a.texture),M.framebufferTexture2D(36160,36064,34069+(b||0),a.__webglTexture,c||0));};this.readRenderTargetPixels=function(a,b,c,d,e,f,g){if(a&&a.isWebGLRenderTarget){var h=Z.get(a).__webglFramebuffer;a.isWebGLRenderTargetCube&&void 0!==g&&(h=h[g]);if(h){g=!1;h!==aa&&(M.bindFramebuffer(36160,h),g=!0);try{var l=a.texture,m=l.format,p=l.type;1023!==m&&ka.convert(m)!==M.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===p||ka.convert(p)===M.getParameter(35738)||1015===p&&(Ea.isWebGL2||oa.get("OES_texture_float")||oa.get("WEBGL_color_buffer_float"))||1016===p&&(Ea.isWebGL2?oa.get("EXT_color_buffer_float"):oa.get("EXT_color_buffer_half_float"))?36053===M.checkFramebufferStatus(36160)?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&M.readPixels(b,c,d,e,ka.convert(m),ka.convert(p),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");}finally{g&&M.bindFramebuffer(36160,aa);}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");};this.copyFramebufferToTexture=function(a,b,c){var d=b.image.width,e=b.image.height,f=ka.convert(b.format);ca.setTexture2D(b,0);M.copyTexImage2D(3553,c||0,f,a.x,a.y,d,e,0);};this.copyTextureToTexture=function(a,b,c,d){var e=b.image.width,f=b.image.height,g=ka.convert(c.format),h=ka.convert(c.type);ca.setTexture2D(c,0);b.isDataTexture?M.texSubImage2D(3553,d||0,a.x,a.y,e,f,g,h,b.image.data):M.texSubImage2D(3553,d||0,a.x,a.y,g,h,b.image);};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}function Je(a,b){this.name="";this.color=new J(a);this.density=void 0!==b?b:2.5E-4;}function Ke(a,b,c){this.name="";this.color=new J(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3;}function ac(a,b){this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0;}function Jd(a,b,c,d){this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d;}function Hb(a){Q.call(this);this.type="SpriteMaterial";this.color=new J(16777215);this.map=null;this.rotation=0;this.sizeAttenuation=!0;this.lights=!1;this.transparent=!0;this.setValues(a);}function Kd(a){B.call(this);this.type="Sprite";if(void 0===Ic){Ic=new D();var b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]);b=new ac(b,5);Ic.setIndex([0,1,2,0,2,3]);Ic.addAttribute("position",new Jd(b,3,0,!1));Ic.addAttribute("uv",new Jd(b,2,3,!1));}this.geometry=Ic;this.material=void 0!==a?a:new Hb();this.center=new v(.5,.5);}function Le(a,b,c,d,e,f){Jc.subVectors(a,c).addScalar(.5).multiply(d);void 0!==e?(Ld.x=f*Jc.x-e*Jc.y,Ld.y=e*Jc.x+f*Jc.y):Ld.copy(Jc);a.copy(b);a.x+=Ld.x;a.y+=Ld.y;a.applyMatrix4(Kh);}function Md(){B.call(this);this.type="LOD";_Object$defineProperties(this,{levels:{enumerable:!0,value:[]}});this.autoUpdate=!0;}function Nd(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");ra.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new P();this.bindMatrixInverse=new P();}function Me(a,b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++)this.boneInverses.push(new P());}function eg(){B.call(this);this.type="Bone";}function Y(a){Q.call(this);this.type="LineBasicMaterial";this.color=new J(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a);}function ca(a,b,c){1===c&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");B.call(this);this.type="Line";this.geometry=void 0!==a?a:new D();this.material=void 0!==b?b:new Y({color:16777215*Math.random()});}function R(a,b){ca.call(this,a,b);this.type="LineSegments";}function Ne(a,b){ca.call(this,a,b);this.type="LineLoop";}function Qa(a){Q.call(this);this.type="PointsMaterial";this.color=new J(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=this.morphTargets=!1;this.setValues(a);}function Kc(a,b){B.call(this);this.type="Points";this.geometry=void 0!==a?a:new D();this.material=void 0!==b?b:new Qa({color:16777215*Math.random()});this.updateMorphTargets();}function fg(a,b,c,d,e,f,g){var h=gg.distanceSqToPoint(a);h<c&&(c=new n(),gg.closestPointToPoint(a,c),c.applyMatrix4(d),a=e.ray.origin.distanceTo(c),a<e.near||a>e.far||f.push({distance:a,distanceToRay:Math.sqrt(h),point:c,index:b,face:null,object:g}));}function hg(a,b,c,d,e,f,g,h,l){ba.call(this,a,b,c,d,e,f,g,h,l);this.format=void 0!==g?g:1022;this.minFilter=void 0!==f?f:1006;this.magFilter=void 0!==e?e:1006;this.generateMipmaps=!1;}function Lc(a,b,c,d,e,f,g,h,l,m,p,k){ba.call(this,null,f,g,h,l,m,d,e,p,k);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1;}function Od(a,b,c,d,e,f,g,h,l){ba.call(this,a,b,c,d,e,f,g,h,l);this.needsUpdate=!0;}function Pd(a,b,c,d,e,f,g,h,l,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);ba.call(this,null,d,e,f,g,h,m,c,l);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1;}function Mc(a){D.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},h=["a","b","c"];if(a&&a.isGeometry){var l=a.faces;var m=0;for(d=l.length;m<d;m++){var p=l[m];for(c=0;3>c;c++){var k=p[h[c]];var r=p[h[(c+1)%3]];f[0]=Math.min(k,r);f[1]=Math.max(k,r);k=f[0]+","+f[1];void 0===g[k]&&(g[k]={index1:f[0],index2:f[1]});}}for(k in g)m=g[k],h=a.vertices[m.index1],b.push(h.x,h.y,h.z),h=a.vertices[m.index2],b.push(h.x,h.y,h.z);}else if(a&&a.isBufferGeometry)if(h=new n(),null!==a.index){l=a.attributes.position;p=a.index;var q=a.groups;0===q.length&&(q=[{start:0,count:p.count,materialIndex:0}]);a=0;for(e=q.length;a<e;++a)for(m=q[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3)for(c=0;3>c;c++)k=p.getX(m+c),r=p.getX(m+(c+1)%3),f[0]=Math.min(k,r),f[1]=Math.max(k,r),k=f[0]+","+f[1],void 0===g[k]&&(g[k]={index1:f[0],index2:f[1]});for(k in g)m=g[k],h.fromBufferAttribute(l,m.index1),b.push(h.x,h.y,h.z),h.fromBufferAttribute(l,m.index2),b.push(h.x,h.y,h.z);}else for(l=a.attributes.position,m=0,d=l.count/3;m<d;m++)for(c=0;3>c;c++)g=3*m+c,h.fromBufferAttribute(l,g),b.push(h.x,h.y,h.z),g=3*m+(c+1)%3,h.fromBufferAttribute(l,g),b.push(h.x,h.y,h.z);this.addAttribute("position",new A(b,3));}function Qd(a,b,c){G.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Nc(a,b,c));this.mergeVertices();}function Nc(a,b,c){D.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new n(),l=new n(),m=new n(),p=new n(),k=new n(),r,q;3>a.length&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var t=b+1;for(r=0;r<=c;r++){var y=r/c;for(q=0;q<=b;q++){var w=q/b;a(w,y,l);e.push(l.x,l.y,l.z);0<=w-1E-5?(a(w-1E-5,y,m),p.subVectors(l,m)):(a(w+1E-5,y,m),p.subVectors(m,l));0<=y-1E-5?(a(w,y-1E-5,m),k.subVectors(l,m)):(a(w,y+1E-5,m),k.subVectors(m,l));h.crossVectors(p,k).normalize();f.push(h.x,h.y,h.z);g.push(w,y);}}for(r=0;r<c;r++)for(q=0;q<b;q++)a=r*t+q+1,h=(r+1)*t+q+1,l=(r+1)*t+q,d.push(r*t+q,a,l),d.push(a,h,l);this.setIndex(d);this.addAttribute("position",new A(e,3));this.addAttribute("normal",new A(f,3));this.addAttribute("uv",new A(g,2));}function Rd(a,b,c,d){G.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new pa(a,b,c,d));this.mergeVertices();}function pa(a,b,c,d){function e(a){h.push(a.x,a.y,a.z);}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2];}function g(a,b,c,d){0>d&&1===a.x&&(l[b]=a.x-1);0===c.x&&0===c.z&&(l[b]=d/2/Math.PI+.5);}D.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],l=[];(function(a){for(var c=new n(),d=new n(),g=new n(),h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var l,m,k=c,z=d,x=g,C=Math.pow(2,a),v=[];for(m=0;m<=C;m++){v[m]=[];var E=k.clone().lerp(x,m/C),A=z.clone().lerp(x,m/C),B=C-m;for(l=0;l<=B;l++)v[m][l]=0===l&&m===C?E:E.clone().lerp(A,l/B);}for(m=0;m<C;m++)for(l=0;l<2*(C-m)-1;l++)k=Math.floor(l/2),0===l%2?(e(v[m][k+1]),e(v[m+1][k]),e(v[m][k])):(e(v[m][k+1]),e(v[m+1][k+1]),e(v[m+1][k]));}})(d);(function(a){for(var b=new n(),c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z;})(c);(function(){for(var a=new n(),b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],l.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));a=new n();b=new n();for(var c=new n(),d=new n(),e=new v(),f=new v(),k=new v(),w=0,z=0;w<h.length;w+=9,z+=6){a.set(h[w+0],h[w+1],h[w+2]);b.set(h[w+3],h[w+4],h[w+5]);c.set(h[w+6],h[w+7],h[w+8]);e.set(l[z+0],l[z+1]);f.set(l[z+2],l[z+3]);k.set(l[z+4],l[z+5]);d.copy(a).add(b).add(c).divideScalar(3);var x=Math.atan2(d.z,-d.x);g(e,z+0,a,x);g(f,z+2,b,x);g(k,z+4,c,x);}for(a=0;a<l.length;a+=6)b=l[a+0],c=l[a+2],d=l[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(l[a+0]+=1),.2>c&&(l[a+2]+=1),.2>d&&(l[a+4]+=1));})();this.addAttribute("position",new A(h,3));this.addAttribute("normal",new A(h.slice(),3));this.addAttribute("uv",new A(l,2));0===d?this.computeVertexNormals():this.normalizeNormals();}function Sd(a,b){G.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Oc(a,b));this.mergeVertices();}function Oc(a,b){pa.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Td(a,b){G.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new bc(a,b));this.mergeVertices();}function bc(a,b){pa.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Ud(a,b){G.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Pc(a,b));this.mergeVertices();}function Pc(a,b){var c=(1+Math.sqrt(5))/2;pa.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Vd(a,b){G.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qc(a,b));this.mergeVertices();}function Qc(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;pa.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b};}function Wd(a,b,c,d,e,f){G.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new cc(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices();}function cc(a,b,c,d,e){function f(e){p=a.getPointAt(e/b,p);var f=g.normals[e];e=g.binormals[e];for(r=0;r<=d;r++){var m=r/d*Math.PI*2,k=Math.sin(m);m=-Math.cos(m);l.x=m*f.x+k*e.x;l.y=m*f.y+k*e.y;l.z=m*f.z+k*e.z;l.normalize();t.push(l.x,l.y,l.z);h.x=p.x+c*l.x;h.y=p.y+c*l.y;h.z=p.z+c*l.z;q.push(h.x,h.y,h.z);}}D.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new n(),l=new n(),m=new v(),p=new n(),k,r,q=[],t=[],y=[],w=[];for(k=0;k<b;k++)f(k);f(!1===e?b:0);for(k=0;k<=b;k++)for(r=0;r<=d;r++)m.x=k/b,m.y=r/d,y.push(m.x,m.y);(function(){for(r=1;r<=b;r++)for(k=1;k<=d;k++){var a=(d+1)*r+(k-1),c=(d+1)*r+k,e=(d+1)*(r-1)+k;w.push((d+1)*(r-1)+(k-1),a,e);w.push(a,c,e);}})();this.setIndex(w);this.addAttribute("position",new A(q,3));this.addAttribute("normal",new A(t,3));this.addAttribute("uv",new A(y,2));}function Xd(a,b,c,d,e,f,g){G.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Rc(a,b,c,d,e,f));this.mergeVertices();}function Rc(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5;}D.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],l=[],m=[],p=[],k,r=new n(),q=new n(),t=new n(),y=new n(),w=new n(),z=new n(),x=new n();for(k=0;k<=c;++k){var C=k/c*e*Math.PI*2;g(C,e,f,a,t);g(C+.01,e,f,a,y);z.subVectors(y,t);x.addVectors(y,t);w.crossVectors(z,x);x.crossVectors(w,z);w.normalize();x.normalize();for(C=0;C<=d;++C){var v=C/d*Math.PI*2,E=-b*Math.cos(v);v=b*Math.sin(v);r.x=t.x+(E*x.x+v*w.x);r.y=t.y+(E*x.y+v*w.y);r.z=t.z+(E*x.z+v*w.z);l.push(r.x,r.y,r.z);q.subVectors(r,t).normalize();m.push(q.x,q.y,q.z);p.push(k/c);p.push(C/d);}}for(C=1;C<=c;C++)for(k=1;k<=d;k++)a=(d+1)*C+(k-1),b=(d+1)*C+k,e=(d+1)*(C-1)+k,h.push((d+1)*(C-1)+(k-1),a,e),h.push(a,b,e);this.setIndex(h);this.addAttribute("position",new A(l,3));this.addAttribute("normal",new A(m,3));this.addAttribute("uv",new A(p,2));}function Yd(a,b,c,d,e){G.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Sc(a,b,c,d,e));this.mergeVertices();}function Sc(a,b,c,d,e){D.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],l=[],m=new n(),p=new n(),k=new n(),r,q;for(r=0;r<=c;r++)for(q=0;q<=d;q++){var t=q/d*e,y=r/c*Math.PI*2;p.x=(a+b*Math.cos(y))*Math.cos(t);p.y=(a+b*Math.cos(y))*Math.sin(t);p.z=b*Math.sin(y);g.push(p.x,p.y,p.z);m.x=a*Math.cos(t);m.y=a*Math.sin(t);k.subVectors(p,m).normalize();h.push(k.x,k.y,k.z);l.push(q/d);l.push(r/c);}for(r=1;r<=c;r++)for(q=1;q<=d;q++)a=(d+1)*(r-1)+q-1,b=(d+1)*(r-1)+q,e=(d+1)*r+q,f.push((d+1)*r+q-1,a,e),f.push(a,b,e);this.setIndex(f);this.addAttribute("position",new A(g,3));this.addAttribute("normal",new A(h,3));this.addAttribute("uv",new A(l,2));}function Lh(a,b,c,d,e){for(var f,g=0,h=b,l=c-d;h<c;h+=d)g+=(a[l]-a[h])*(a[h+1]+a[l+1]),l=h;if(e===0<g)for(e=b;e<c;e+=d)f=Mh(e,a[e],a[e+1],f);else for(e=c-d;e>=b;e-=d)f=Mh(e,a[e],a[e+1],f);f&&dc(f,f.next)&&(Zd(f),f=f.next);return f;}function $d(a,b){if(!a)return a;b||(b=a);do{var c=!1;if(a.steiner||!dc(a,a.next)&&0!==ua(a.prev,a,a.next))a=a.next;else{Zd(a);a=b=a.prev;if(a===a.next)break;c=!0;}}while(c||a!==b);return b;}function ae(a,b,c,d,e,f,g){if(a){if(!g&&f){var h=a,l=h;do null===l.z&&(l.z=ig(l.x,l.y,d,e,f)),l.prevZ=l.prev,l=l.nextZ=l.next;while(l!==h);l.prevZ.nextZ=null;l.prevZ=null;h=l;var m,p,k,r,q=1;do{l=h;var t=h=null;for(p=0;l;){p++;var n=l;for(m=k=0;m<q&&(k++,n=n.nextZ,n);m++);for(r=q;0<k||0<r&&n;)0!==k&&(0===r||!n||l.z<=n.z)?(m=l,l=l.nextZ,k--):(m=n,n=n.nextZ,r--),t?t.nextZ=m:h=m,m.prevZ=t,t=m;l=n;}t.nextZ=null;q*=2;}while(1<p);}for(h=a;a.prev!==a.next;){l=a.prev;n=a.next;if(f)t=ak(a,d,e,f);else a:if(t=a,p=t.prev,k=t,q=t.next,0<=ua(p,k,q))t=!1;else{for(m=t.next.next;m!==t.prev;){if(Tc(p.x,p.y,k.x,k.y,q.x,q.y,m.x,m.y)&&0<=ua(m.prev,m,m.next)){t=!1;break a;}m=m.next;}t=!0;}if(t)b.push(l.i/c),b.push(a.i/c),b.push(n.i/c),Zd(a),h=a=n.next;else if(a=n,a===h){if(!g)ae($d(a),b,c,d,e,f,1);else if(1===g){g=b;h=c;l=a;do n=l.prev,t=l.next.next,!dc(n,t)&&Nh(n,l,l.next,t)&&be(n,t)&&be(t,n)&&(g.push(n.i/h),g.push(l.i/h),g.push(t.i/h),Zd(l),Zd(l.next),l=a=t),l=l.next;while(l!==a);a=l;ae(a,b,c,d,e,f,2);}else if(2===g)a:{g=a;do{for(h=g.next.next;h!==g.prev;){if(l=g.i!==h.i){l=g;n=h;if(t=l.next.i!==n.i&&l.prev.i!==n.i){b:{t=l;do{if(t.i!==l.i&&t.next.i!==l.i&&t.i!==n.i&&t.next.i!==n.i&&Nh(t,t.next,l,n)){t=!0;break b;}t=t.next;}while(t!==l);t=!1;}t=!t;}if(t=t&&be(l,n)&&be(n,l)){t=l;p=!1;k=(l.x+n.x)/2;n=(l.y+n.y)/2;do t.y>n!==t.next.y>n&&t.next.y!==t.y&&k<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(p=!p),t=t.next;while(t!==l);t=p;}l=t;}if(l){a=Oh(g,h);g=$d(g,g.next);a=$d(a,a.next);ae(g,b,c,d,e,f);ae(a,b,c,d,e,f);break a;}h=h.next;}g=g.next;}while(g!==a);}break;}}}}function ak(a,b,c,d){var e=a.prev,f=a.next;if(0<=ua(e,a,f))return!1;var g=e.x>a.x?e.x>f.x?e.x:f.x:a.x>f.x?a.x:f.x,h=e.y>a.y?e.y>f.y?e.y:f.y:a.y>f.y?a.y:f.y,l=ig(e.x<a.x?e.x<f.x?e.x:f.x:a.x<f.x?a.x:f.x,e.y<a.y?e.y<f.y?e.y:f.y:a.y<f.y?a.y:f.y,b,c,d);b=ig(g,h,b,c,d);c=a.prevZ;for(d=a.nextZ;c&&c.z>=l&&d&&d.z<=b;){if(c!==a.prev&&c!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=ua(c.prev,c,c.next))return!1;c=c.prevZ;if(d!==a.prev&&d!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ua(d.prev,d,d.next))return!1;d=d.nextZ;}for(;c&&c.z>=l;){if(c!==a.prev&&c!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=ua(c.prev,c,c.next))return!1;c=c.prevZ;}for(;d&&d.z<=b;){if(d!==a.prev&&d!==a.next&&Tc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ua(d.prev,d,d.next))return!1;d=d.nextZ;}return!0;}function bk(a,b){return a.x-b.x;}function ck(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next;}var h=c.x<c.next.x?c:c.next;}}c=c.next;}while(c!==b);if(!h)return null;if(d===f)return h.prev;b=h;g=h.x;var l=h.y,m=Infinity;for(c=h.next;c!==b;){if(d>=c.x&&c.x>=g&&d!==c.x&&Tc(e<l?d:f,e,g,l,e<l?f:d,e,c.x,c.y)){var p=Math.abs(e-c.y)/(d-c.x);(p<m||p===m&&c.x>h.x)&&be(c,a)&&(h=c,m=p);}c=c.next;}return h;}function ig(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1;}function dk(a){var b=a,c=a;do{if(b.x<c.x||b.x===c.x&&b.y<c.y)c=b;b=b.next;}while(b!==a);return c;}function Tc(a,b,c,d,e,f,g,h){return 0<=(e-g)*(b-h)-(a-g)*(f-h)&&0<=(a-g)*(d-h)-(c-g)*(b-h)&&0<=(c-g)*(f-h)-(e-g)*(d-h);}function ua(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y);}function dc(a,b){return a.x===b.x&&a.y===b.y;}function Nh(a,b,c,d){return dc(a,c)&&dc(b,d)||dc(a,d)&&dc(c,b)?!0:0<ua(a,b,c)!==0<ua(a,b,d)&&0<ua(c,d,a)!==0<ua(c,d,b);}function be(a,b){return 0>ua(a.prev,a,a.next)?0<=ua(a,b,a.next)&&0<=ua(a,a.prev,b):0>ua(a,b,a.prev)||0>ua(a,a.next,b);}function Oh(a,b){var c=new jg(a.i,a.x,a.y),d=new jg(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d;}function Mh(a,b,c,d){a=new jg(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a;}function Zd(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ);}function jg(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1;}function Ph(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop();}function Qh(a,b){for(var c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y);}function ec(a,b){G.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new eb(a,b));this.mergeVertices();}function eb(a,b){function c(a){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a);}function g(a,b,c){var d=a.x-b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>_Number$EPSILON){var l=Math.sqrt(h),m=Math.sqrt(f*f+g*g);h=b.x-e/l;b=b.y+d/l;g=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=h+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new v(f,d);e=Math.sqrt(e/2);}else a=!1,d>_Number$EPSILON?f>_Number$EPSILON&&(a=!0):d<-_Number$EPSILON?f<-_Number$EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(h)):(f=d,d=e,e=Math.sqrt(h/2));return new v(f/e,d/e);}function h(a,b){for(L=a.length;0<=--L;){var c=L;var f=L-1;0>f&&(f=a.length-1);var g,h=x+2*D;for(g=0;g<h;g++){var l=Z*g,m=Z*(g+1),p=b+f+l,k=b+f+m;m=b+c+m;t(b+c+l);t(p);t(m);t(p);t(k);t(m);l=e.length/3;l=I.generateSideWallUV(d,e,l-6,l-3,l-2,l-1);y(l[0]);y(l[1]);y(l[3]);y(l[1]);y(l[2]);y(l[3]);}}}function l(a,b,c){w.push(a);w.push(b);w.push(c);}function k(a,b,c){t(a);t(b);t(c);a=e.length/3;a=I.generateTopUV(d,e,a-3,a-2,a-1);y(a[0]);y(a[1]);y(a[2]);}function t(a){e.push(w[3*a]);e.push(w[3*a+1]);e.push(w[3*a+2]);}function y(a){f.push(a.x);f.push(a.y);}var w=[],z=void 0!==b.curveSegments?b.curveSegments:12,x=void 0!==b.steps?b.steps:1,C=void 0!==b.depth?b.depth:100,W=void 0!==b.bevelEnabled?b.bevelEnabled:!0,E=void 0!==b.bevelThickness?b.bevelThickness:6,A=void 0!==b.bevelSize?b.bevelSize:E-2,B=void 0!==b.bevelOffset?b.bevelOffset:0,D=void 0!==b.bevelSegments?b.bevelSegments:3,F=b.extrudePath,I=void 0!==b.UVGenerator?b.UVGenerator:ek;void 0!==b.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),C=b.amount);var G=!1;if(F){var H=F.getSpacedPoints(x);G=!0;W=!1;var J=F.computeFrenetFrames(x,!1);var Q=new n();var S=new n();var U=new n();}W||(B=A=E=D=0);var N;z=a.extractPoints(z);a=z.shape;var O=z.holes;if(!qb.isClockWise(a)){a=a.reverse();var K=0;for(N=O.length;K<N;K++){var P=O[K];qb.isClockWise(P)&&(O[K]=P.reverse());}}var aa=qb.triangulateShape(a,O),Y=a;K=0;for(N=O.length;K<N;K++)P=O[K],a=a.concat(P);var R,Z=a.length,V,ba=aa.length;z=[];var L=0;var X=Y.length;var fa=X-1;for(R=L+1;L<X;L++,fa++,R++)fa===X&&(fa=0),R===X&&(R=0),z[L]=g(Y[L],Y[fa],Y[R]);F=[];var da=z.concat();K=0;for(N=O.length;K<N;K++){P=O[K];var ca=[];L=0;X=P.length;fa=X-1;for(R=L+1;L<X;L++,fa++,R++)fa===X&&(fa=0),R===X&&(R=0),ca[L]=g(P[L],P[fa],P[R]);F.push(ca);da=da.concat(ca);}for(fa=0;fa<D;fa++){X=fa/D;var ea=E*Math.cos(X*Math.PI/2);R=A*Math.sin(X*Math.PI/2)+B;L=0;for(X=Y.length;L<X;L++){var T=c(Y[L],z[L],R);l(T.x,T.y,-ea);}K=0;for(N=O.length;K<N;K++)for(P=O[K],ca=F[K],L=0,X=P.length;L<X;L++)T=c(P[L],ca[L],R),l(T.x,T.y,-ea);}R=A+B;for(L=0;L<Z;L++)T=W?c(a[L],da[L],R):a[L],G?(S.copy(J.normals[0]).multiplyScalar(T.x),Q.copy(J.binormals[0]).multiplyScalar(T.y),U.copy(H[0]).add(S).add(Q),l(U.x,U.y,U.z)):l(T.x,T.y,0);for(X=1;X<=x;X++)for(L=0;L<Z;L++)T=W?c(a[L],da[L],R):a[L],G?(S.copy(J.normals[X]).multiplyScalar(T.x),Q.copy(J.binormals[X]).multiplyScalar(T.y),U.copy(H[X]).add(S).add(Q),l(U.x,U.y,U.z)):l(T.x,T.y,C/x*X);for(fa=D-1;0<=fa;fa--){X=fa/D;ea=E*Math.cos(X*Math.PI/2);R=A*Math.sin(X*Math.PI/2)+B;L=0;for(X=Y.length;L<X;L++)T=c(Y[L],z[L],R),l(T.x,T.y,C+ea);K=0;for(N=O.length;K<N;K++)for(P=O[K],ca=F[K],L=0,X=P.length;L<X;L++)T=c(P[L],ca[L],R),G?l(T.x,T.y+H[x-1].y,H[x-1].x+ea):l(T.x,T.y,C+ea);}(function(){var a=e.length/3;if(W){var b=0*Z;for(L=0;L<ba;L++)V=aa[L],k(V[2]+b,V[1]+b,V[0]+b);b=Z*(x+2*D);for(L=0;L<ba;L++)V=aa[L],k(V[0]+b,V[1]+b,V[2]+b);}else{for(L=0;L<ba;L++)V=aa[L],k(V[2],V[1],V[0]);for(L=0;L<ba;L++)V=aa[L],k(V[0]+Z*x,V[1]+Z*x,V[2]+Z*x);}d.addGroup(a,e.length/3-a,0);})();(function(){var a=e.length/3,b=0;h(Y,b);b+=Y.length;K=0;for(N=O.length;K<N;K++)P=O[K],h(P,b),b+=P.length;d.addGroup(a,e.length/3-a,1);})();}D.call(this);this.type="ExtrudeBufferGeometry";this.parameters={shapes:a,options:b};a=_Array$isArray(a)?a:[a];for(var d=this,e=[],f=[],g=0,h=a.length;g<h;g++)c(a[g]);this.addAttribute("position",new A(e,3));this.addAttribute("uv",new A(f,2));this.computeVertexNormals();}function Rh(a,b,c){c.shapes=[];if(_Array$isArray(a))for(var d=0,e=a.length;d<e;d++)c.shapes.push(a[d].uuid);else c.shapes.push(a.uuid);void 0!==b.extrudePath&&(c.options.extrudePath=b.extrudePath.toJSON());return c;}function ce(a,b){G.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Uc(a,b));this.mergeVertices();}function Uc(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new G();a=c.generateShapes(a,b.size);b.depth=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);eb.call(this,a,b);this.type="TextBufferGeometry";}function de(a,b,c,d,e,f,g){G.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new Ib(a,b,c,d,e,f,g));this.mergeVertices();}function Ib(a,b,c,d,e,f,g){D.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=Math.min(f+g,Math.PI),l,m,p=0,k=[],r=new n(),q=new n(),t=[],y=[],w=[],z=[];for(m=0;m<=c;m++){var x=[],v=m/c,W=0;0==m&&0==f?W=.5/b:m==c&&h==Math.PI&&(W=-.5/b);for(l=0;l<=b;l++){var E=l/b;r.x=-a*Math.cos(d+E*e)*Math.sin(f+v*g);r.y=a*Math.cos(f+v*g);r.z=a*Math.sin(d+E*e)*Math.sin(f+v*g);y.push(r.x,r.y,r.z);q.copy(r).normalize();w.push(q.x,q.y,q.z);z.push(E+W,1-v);x.push(p++);}k.push(x);}for(m=0;m<c;m++)for(l=0;l<b;l++)a=k[m][l+1],d=k[m][l],e=k[m+1][l],g=k[m+1][l+1],(0!==m||0<f)&&t.push(a,d,g),(m!==c-1||h<Math.PI)&&t.push(d,e,g);this.setIndex(t);this.addAttribute("position",new A(y,3));this.addAttribute("normal",new A(w,3));this.addAttribute("uv",new A(z,2));}function ee(a,b,c,d,e,f){G.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Vc(a,b,c,d,e,f));this.mergeVertices();}function Vc(a,b,c,d,e,f){D.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],l=[],m=[],p=a,k=(b-a)/d,r=new n(),q=new v(),t,y;for(t=0;t<=d;t++){for(y=0;y<=c;y++)a=e+y/c*f,r.x=p*Math.cos(a),r.y=p*Math.sin(a),h.push(r.x,r.y,r.z),l.push(0,0,1),q.x=(r.x/b+1)/2,q.y=(r.y/b+1)/2,m.push(q.x,q.y);p+=k;}for(t=0;t<d;t++)for(b=t*(c+1),y=0;y<c;y++)a=y+b,e=a+c+1,f=a+c+2,p=a+1,g.push(a,e,p),g.push(e,f,p);this.setIndex(g);this.addAttribute("position",new A(h,3));this.addAttribute("normal",new A(l,3));this.addAttribute("uv",new A(m,2));}function fe(a,b,c,d){G.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Wc(a,b,c,d));this.mergeVertices();}function Wc(a,b,c,d){D.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=O.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,l=new n(),m=new v(),p;for(p=0;p<=b;p++){var k=c+p*h*d;var r=Math.sin(k),q=Math.cos(k);for(k=0;k<=a.length-1;k++)l.x=a[k].x*r,l.y=a[k].y,l.z=a[k].x*q,f.push(l.x,l.y,l.z),m.x=p/b,m.y=k/(a.length-1),g.push(m.x,m.y);}for(p=0;p<b;p++)for(k=0;k<a.length-1;k++)c=k+p*a.length,h=c+a.length,l=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,l,m);this.setIndex(e);this.addAttribute("position",new A(f,3));this.addAttribute("uv",new A(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new n(),f=new n(),g=new n(),c=b*a.length*3,k=p=0;p<a.length;p++,k+=3)e.x=d[k+0],e.y=d[k+1],e.z=d[k+2],f.x=d[c+k+0],f.y=d[c+k+1],f.z=d[c+k+2],g.addVectors(e,f).normalize(),d[k+0]=d[c+k+0]=g.x,d[k+1]=d[c+k+1]=g.y,d[k+2]=d[c+k+2]=g.z;}function fc(a,b){G.call(this);this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new gc(a,b));this.mergeVertices();}function gc(a,b){function c(a){var c,h=e.length/3;a=a.extractPoints(b);var m=a.shape,k=a.holes;!1===qb.isClockWise(m)&&(m=m.reverse());a=0;for(c=k.length;a<c;a++){var p=k[a];!0===qb.isClockWise(p)&&(k[a]=p.reverse());}var n=qb.triangulateShape(m,k);a=0;for(c=k.length;a<c;a++)p=k[a],m=m.concat(p);a=0;for(c=m.length;a<c;a++)p=m[a],e.push(p.x,p.y,0),f.push(0,0,1),g.push(p.x,p.y);a=0;for(c=n.length;a<c;a++)m=n[a],d.push(m[0]+h,m[1]+h,m[2]+h),l+=3;}D.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,l=0;if(!1===_Array$isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,l,m),h+=l,l=0;this.setIndex(d);this.addAttribute("position",new A(e,3));this.addAttribute("normal",new A(f,3));this.addAttribute("uv",new A(g,2));}function Sh(a,b){b.shapes=[];if(_Array$isArray(a))for(var c=0,d=a.length;c<d;c++)b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);return b;}function Xc(a,b){D.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(O.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new G();g.fromBufferGeometry(a);}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var h=0,l=g.length;h<l;h++)for(var m=g[h],k=0;3>k;k++){var n=m[f[k]];var r=m[f[(k+1)%3]];d[0]=Math.min(n,r);d[1]=Math.max(n,r);n=d[0]+","+d[1];void 0===e[n]?e[n]={index1:d[0],index2:d[1],face1:h,face2:void 0}:e[n].face2=h;}for(n in e)if(d=e[n],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);this.addAttribute("position",new A(c,3));}function hc(a,b,c,d,e,f,g,h){G.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new rb(a,b,c,d,e,f,g,h));this.mergeVertices();}function rb(a,b,c,d,e,f,g,h){function l(c){var e,f=new v(),l=new n(),p=0,y=!0===c?a:b,x=!0===c?1:-1;var A=t;for(e=1;e<=d;e++)u.push(0,w*x,0),r.push(0,x,0),q.push(.5,.5),t++;var B=t;for(e=0;e<=d;e++){var D=e/d*h+g,F=Math.cos(D);D=Math.sin(D);l.x=y*D;l.y=w*x;l.z=y*F;u.push(l.x,l.y,l.z);r.push(0,x,0);f.x=.5*F+.5;f.y=.5*D*x+.5;q.push(f.x,f.y);t++;}for(e=0;e<d;e++)f=A+e,l=B+e,!0===c?k.push(l,l+1,f):k.push(l+1,l,f),p+=3;m.addGroup(z,p,!0===c?1:2);z+=p;}D.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=[],u=[],r=[],q=[],t=0,y=[],w=c/2,z=0;(function(){var f,l,p=new n(),v=new n(),A=0,B=(b-a)/c;for(l=0;l<=e;l++){var D=[],F=l/e,I=F*(b-a)+a;for(f=0;f<=d;f++){var G=f/d,H=G*h+g,J=Math.sin(H);H=Math.cos(H);v.x=I*J;v.y=-F*c+w;v.z=I*H;u.push(v.x,v.y,v.z);p.set(J,B,H).normalize();r.push(p.x,p.y,p.z);q.push(G,1-F);D.push(t++);}y.push(D);}for(f=0;f<d;f++)for(l=0;l<e;l++)p=y[l+1][f],v=y[l+1][f+1],B=y[l][f+1],k.push(y[l][f],p,B),k.push(p,v,B),A+=6;m.addGroup(z,A,0);z+=A;})();!1===f&&(0<a&&l(!0),0<b&&l(!1));this.setIndex(k);this.addAttribute("position",new A(u,3));this.addAttribute("normal",new A(r,3));this.addAttribute("uv",new A(q,2));}function ge(a,b,c,d,e,f,g){hc.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g};}function he(a,b,c,d,e,f,g){rb.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g};}function ie(a,b,c,d){G.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new Yc(a,b,c,d));this.mergeVertices();}function Yc(a,b,c,d){D.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],l,m=new n(),k=new v();f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);var u=0;for(l=3;u<=b;u++,l+=3){var r=c+u/b*d;m.x=a*Math.cos(r);m.y=a*Math.sin(r);f.push(m.x,m.y,m.z);g.push(0,0,1);k.x=(f[l]/a+1)/2;k.y=(f[l+1]/a+1)/2;h.push(k.x,k.y);}for(l=1;l<=b;l++)e.push(l,l+1,0);this.setIndex(e);this.addAttribute("position",new A(f,3));this.addAttribute("normal",new A(g,3));this.addAttribute("uv",new A(h,2));}function ic(a){Q.call(this);this.type="ShadowMaterial";this.color=new J(0);this.transparent=!0;this.setValues(a);}function Zc(a){va.call(this,a);this.type="RawShaderMaterial";}function fb(a){Q.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new J(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function jc(a){fb.call(this);this.defines={STANDARD:"",PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearcoatRoughness=this.clearcoat=0;this.sheen=null;this.clearcoatNormalScale=new v(1,1);this.clearcoatNormalMap=null;this.transparency=0;this.setValues(a);}function Ra(a){Q.call(this);this.type="MeshPhongMaterial";this.color=new J(16777215);this.specular=new J(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function kc(a){Ra.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a);}function lc(a){Q.call(this);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;this.setValues(a);}function mc(a){Q.call(this);this.type="MeshLambertMaterial";this.color=new J(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function nc(a){Q.call(this);this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new J(16777215);this.bumpMap=this.map=this.matcap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new v(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=null;this.lights=this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);}function oc(a){Y.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a);}function Ha(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c;}function Oe(a,b,c,d){Ha.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0;}function je(a,b,c,d){Ha.call(this,a,b,c,d);}function Pe(a,b,c,d){Ha.call(this,a,b,c,d);}function wa(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=Z.convertArray(b,this.TimeBufferType);this.values=Z.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);}function Qe(a,b,c){wa.call(this,a,b,c);}function Re(a,b,c,d){wa.call(this,a,b,c,d);}function $c(a,b,c,d){wa.call(this,a,b,c,d);}function Se(a,b,c,d){Ha.call(this,a,b,c,d);}function ke(a,b,c,d){wa.call(this,a,b,c,d);}function Te(a,b,c,d){wa.call(this,a,b,c,d);}function ad(a,b,c,d){wa.call(this,a,b,c,d);}function Ma(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=O.generateUUID();0>this.duration&&this.resetDuration();}function fk(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $c;case"vector":case"vector2":case"vector3":case"vector4":return ad;case"color":return Re;case"quaternion":return ke;case"bool":case"boolean":return Qe;case"string":return Te;}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}function gk(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");var b=fk(a.type);if(void 0===a.times){var c=[],d=[];Z.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d;}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation);}function kg(a,b,c){var d=this,e=!1,f=0,g=0,h=void 0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0;};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad();};this.itemError=function(a){if(void 0!==d.onError)d.onError(a);};this.resolveURL=function(a){return h?h(a):a;};this.setURLModifier=function(a){h=a;return this;};}function aa(a){this.manager=void 0!==a?a:Th;this.crossOrigin="anonymous";this.resourcePath=this.path="";}function Na(a){aa.call(this,a);}function lg(a){aa.call(this,a);}function mg(a){aa.call(this,a);this._parser=null;}function Ue(a){aa.call(this,a);this._parser=null;}function bd(a){aa.call(this,a);}function Ve(a){aa.call(this,a);}function We(a){aa.call(this,a);}function F(){this.type="Curve";this.arcLengthDivisions=200;}function Ia(a,b,c,d,e,f,g,h){F.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=h||0;}function cd(a,b,c,d,e,f){Ia.call(this,a,b,c,c,d,e,f);this.type="ArcCurve";}function ng(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,l){e=l*(g-e);h=l*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h;},initNonuniformCatmullRom:function(e,f,g,h,l,m,k){e=((f-e)/l-(g-e)/(l+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+k)+(h-g)/k)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h;},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e;}};}function sa(a,b,c,d){F.call(this);this.type="CatmullRomCurve3";this.points=a||[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5;}function Uh(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c;}function le(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d;}function me(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e;}function Sa(a,b,c,d){F.call(this);this.type="CubicBezierCurve";this.v0=a||new v();this.v1=b||new v();this.v2=c||new v();this.v3=d||new v();}function gb(a,b,c,d){F.call(this);this.type="CubicBezierCurve3";this.v0=a||new n();this.v1=b||new n();this.v2=c||new n();this.v3=d||new n();}function Da(a,b){F.call(this);this.type="LineCurve";this.v1=a||new v();this.v2=b||new v();}function Ta(a,b){F.call(this);this.type="LineCurve3";this.v1=a||new n();this.v2=b||new n();}function Ua(a,b,c){F.call(this);this.type="QuadraticBezierCurve";this.v0=a||new v();this.v1=b||new v();this.v2=c||new v();}function hb(a,b,c){F.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new n();this.v1=b||new n();this.v2=c||new n();}function Va(a){F.call(this);this.type="SplineCurve";this.points=a||[];}function sb(){F.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1;}function Wa(a){sb.call(this);this.type="Path";this.currentPoint=new v();a&&this.setFromPoints(a);}function Jb(a){Wa.call(this,a);this.uuid=O.generateUUID();this.type="Shape";this.holes=[];}function V(a,b){B.call(this);this.type="Light";this.color=new J(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0;}function Xe(a,b,c){V.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(B.DefaultUp);this.updateMatrix();this.groundColor=new J(b);}function ib(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new v(512,512);this.mapPass=this.map=null;this.matrix=new P();this._frustum=new Ed();this._frameExtents=new v(1,1);this._viewportCount=1;this._viewports=[new da(0,0,1,1)];}function Ye(){ib.call(this,new la(50,1,.5,500));}function Ze(a,b,c,d,e,f){V.call(this,a,b);this.type="SpotLight";this.position.copy(B.DefaultUp);this.updateMatrix();this.target=new B();_Object$defineProperty(this,"power",{get:function(){return this.intensity*Math.PI;},set:function(a){this.intensity=a/Math.PI;}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new Ye();}function og(){ib.call(this,new la(90,1,.5,500));this._frameExtents=new v(4,2);this._viewportCount=6;this._viewports=[new da(2,1,1,1),new da(0,1,1,1),new da(3,1,1,1),new da(1,1,1,1),new da(3,0,1,1),new da(1,0,1,1)];this._cubeDirections=[new n(1,0,0),new n(-1,0,0),new n(0,0,1),new n(0,0,-1),new n(0,1,0),new n(0,-1,0)];this._cubeUps=[new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,0,1),new n(0,0,-1)];}function $e(a,b,c,d){V.call(this,a,b);this.type="PointLight";_Object$defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI;},set:function(a){this.intensity=a/(4*Math.PI);}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new og();}function ne(a,b,c,d,e,f){bb.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=void 0!==a?a:-1;this.right=void 0!==b?b:1;this.top=void 0!==c?c:1;this.bottom=void 0!==d?d:-1;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix();}function af(){ib.call(this,new ne(-5,5,5,-5,.5,500));}function bf(a,b){V.call(this,a,b);this.type="DirectionalLight";this.position.copy(B.DefaultUp);this.updateMatrix();this.target=new B();this.shadow=new af();}function cf(a,b){V.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0;}function df(a,b,c,d){V.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10;}function ef(a){aa.call(this,a);this.textures={};}function ff(){D.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0;}function gf(a,b,c,d){"number"===typeof c&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));N.call(this,a,b,c);this.meshPerAttribute=d||1;}function hf(a){aa.call(this,a);}function jf(a){aa.call(this,a);}function pg(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");aa.call(this,a);this.options=void 0;}function qg(){this.type="ShapePath";this.color=new J();this.subPaths=[];this.currentPath=null;}function rg(a){this.type="Font";this.data=a;}function sg(a){aa.call(this,a);}function kf(a){aa.call(this,a);}function lf(){this.coefficients=[];for(var a=0;9>a;a++)this.coefficients.push(new n());}function Xa(a,b){V.call(this,void 0,b);this.sh=void 0!==a?a:new lf();}function tg(a,b,c){Xa.call(this,void 0,c);a=new J().set(a);c=new J().set(b);b=new n(a.r,a.g,a.b);a=new n(c.r,c.g,c.b);c=Math.sqrt(Math.PI);var d=c*Math.sqrt(.75);this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d);}function ug(a,b){Xa.call(this,void 0,b);a=new J().set(a);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI));}function Vh(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new la();this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new la();this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1;this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null};}function vg(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1;}function wg(){B.call(this);this.type="AudioListener";this.context=xg.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null;this.timeDelta=0;this._clock=new vg();}function dd(a){B.call(this);this.type="Audio";this.listener=a;this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.offset=this.startTime=0;this.duration=void 0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[];}function yg(a){dd.call(this,a);this.panner=this.context.createPanner();this.panner.panningModel="HRTF";this.panner.connect(this.gain);}function zg(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser);}function Ag(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case"quaternion":b=this._slerp;break;case"string":case"bool":a=Array;b=this._select;break;default:b=this._lerp;}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0;}function Wh(a,b,c){c=c||ma.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c);}function ma(a,b,c){this.path=b;this.parsedPath=c||ma.parseTrackName(b);this.node=ma.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a;}function Xh(){this.uuid=O.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b)a[arguments[b].uuid]=b;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length;},get inUse(){return this.total-d.nCachedObjects_;}},get bindingsPerObject(){return d._bindings.length;}};}function Yh(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d;}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0;}function Bg(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1;}function mf(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a;}function Cg(a,b,c){ac.call(this,a,b);this.meshPerAttribute=c||1;}function Zh(a,b,c,d){this.ray=new Sb(a,b);this.near=c||0;this.far=d||Infinity;this.camera=null;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};_Object$defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points;}}});}function $h(a,b){return a.distance-b.distance;}function Dg(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)Dg(a[d],b,c,!0);}}function ai(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this;}function bi(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this;}function Eg(a,b){this.min=void 0!==a?a:new v(Infinity,Infinity);this.max=void 0!==b?b:new v(-Infinity,-Infinity);}function Fg(a,b){this.start=void 0!==a?a:new n();this.end=void 0!==b?b:new n();}function oe(a){B.call(this);this.material=a;this.render=function(){};}function pe(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new D();b=new A(6*b,3);c.addAttribute("position",b);R.call(this,c,new Y({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update();}function ed(a,b){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new D();b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1);}a.addAttribute("position",new A(b,3));b=new Y({fog:!1});this.cone=new R(a,b);this.add(this.cone);this.update();}function ci(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,ci(a.children[c]));return b;}function fd(a){for(var b=ci(a),c=new D(),d=[],e=[],f=new J(0,0,1),g=new J(0,1,0),h=0;h<b.length;h++){var l=b[h];l.parent&&l.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b));}c.addAttribute("position",new A(d,3));c.addAttribute("color",new A(e,3));d=new Y({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});R.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;}function gd(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new Ib(b,4,2);b=new ya({wireframe:!0,fog:!1});ra.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update();}function hd(a,b){this.type="RectAreaLightHelper";this.light=a;this.color=b;a=new D();a.addAttribute("position",new A([1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3));a.computeBoundingSphere();b=new Y({fog:!1});ca.call(this,a,b);a=new D();a.addAttribute("position",new A([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3));a.computeBoundingSphere();this.add(new ra(a,new ya({side:1,fog:!1})));this.update();}function id(a,b,c){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new bc(b);a.rotateY(.5*Math.PI);this.material=new ya({wireframe:!0,fog:!1});void 0===this.color&&(this.material.vertexColors=2);b=a.getAttribute("position");b=new Float32Array(3*b.count);a.addAttribute("color",new N(b,3));this.add(new ra(a,this.material));this.update();}function jd(a,b){this.lightProbe=a;this.size=b;a=new va({defines:{GAMMA_OUTPUT:""},uniforms:{sh:{value:this.lightProbe.sh.coefficients},intensity:{value:this.lightProbe.intensity}},vertexShader:"varying vec3 vNormal;\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"#define RECIPROCAL_PI 0.318309886\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\t// matrix is assumed to be orthogonal\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 linearToOutput( in vec3 a ) {\n\t#ifdef GAMMA_OUTPUT\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\t#else\n\t\treturn a;\n\t#endif\n}\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\t// normal is assumed to have unit length\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nuniform vec3 sh[ 9 ]; // sh coefficients\nuniform float intensity; // light probe intensity\nvarying vec3 vNormal;\nvoid main() {\n\tvec3 normal = normalize( vNormal );\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );\n\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;\n\toutgoingLight = linearToOutput( outgoingLight );\n\tgl_FragColor = vec4( outgoingLight, 1.0 );\n}"});b=new Ib(1,32,16);ra.call(this,b,a);this.onBeforeRender();}function nf(a,b,c,d){a=a||10;b=b||10;c=new J(void 0!==c?c:4473924);d=new J(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],l=0,m=0,k=-g;l<=b;l++,k+=f){a.push(-g,0,k,g,0,k);a.push(k,0,-g,k,0,g);var n=l===e?c:d;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;}b=new D();b.addAttribute("position",new A(a,3));b.addAttribute("color",new A(h,3));c=new Y({vertexColors:2});R.call(this,b,c);}function of(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new J(void 0!==e?e:4473924);f=new J(void 0!==f?f:8947848);var g=[],h=[],l;for(l=0;l<=b;l++){var m=l/b*2*Math.PI;var k=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(k,0,m);var n=l&1?e:f;h.push(n.r,n.g,n.b);h.push(n.r,n.g,n.b);}for(l=0;l<=c;l++){n=l&1?e:f;var r=a-a/c*l;for(b=0;b<d;b++)m=b/d*2*Math.PI,k=Math.sin(m)*r,m=Math.cos(m)*r,g.push(k,0,m),h.push(n.r,n.g,n.b),m=(b+1)/d*2*Math.PI,k=Math.sin(m)*r,m=Math.cos(m)*r,g.push(k,0,m),h.push(n.r,n.g,n.b);}a=new D();a.addAttribute("position",new A(g,3));a.addAttribute("color",new A(h,3));g=new Y({vertexColors:2});R.call(this,a,g);}function kd(a,b,c,d){this.audio=a;this.range=b||1;this.divisionsInnerAngle=c||16;this.divisionsOuterAngle=d||2;a=new D();b=new Float32Array(3*(3*(this.divisionsInnerAngle+2*this.divisionsOuterAngle)+3));a.addAttribute("position",new N(b,3));b=new Y({color:65280});c=new Y({color:16776960});ca.call(this,a,[c,b]);this.update();}function qe(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new D();b=new A(6*b,3);c.addAttribute("position",b);R.call(this,c,new Y({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update();}function ld(a,b,c){B.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new D();a.addAttribute("position",new A([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new Y({fog:!1});this.lightPlane=new ca(a,b);this.add(this.lightPlane);a=new D();a.addAttribute("position",new A([0,0,0,0,0,1],3));this.targetLine=new ca(a,b);this.add(this.targetLine);this.update();}function re(a){function b(a,b,d){c(a,d);c(b,d);}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1);}var d=new D(),e=new Y({color:16777215,vertexColors:1}),f=[],g=[],h={},l=new J(16755200),m=new J(16711680),k=new J(43775),n=new J(16777215),r=new J(3355443);b("n1","n2",l);b("n2","n4",l);b("n4","n3",l);b("n3","n1",l);b("f1","f2",l);b("f2","f4",l);b("f4","f3",l);b("f3","f1",l);b("n1","f1",l);b("n2","f2",l);b("n3","f3",l);b("n4","f4",l);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",k);b("u2","u3",k);b("u3","u1",k);b("c","t",n);b("p","c",r);b("cn1","cn2",r);b("cn3","cn4",r);b("cf1","cf2",r);b("cf3","cf4",r);d.addAttribute("position",new A(f,3));d.addAttribute("color",new A(g,3));R.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update();}function ea(a,b,c,d,e,f,g){pf.set(e,f,g).unproject(d);a=b[a];if(void 0!==a)for(c=c.getAttribute("position"),b=0,d=a.length;b<d;b++)c.setXYZ(a[b],pf.x,pf.y,pf.z);}function tb(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new D();d.setIndex(new N(a,1));d.addAttribute("position",new N(c,3));R.call(this,d,new Y({color:b}));this.matrixAutoUpdate=!1;this.update();}function se(a,b){this.type="Box3Helper";this.box=a;b=b||16776960;a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new D();c.setIndex(new N(a,1));c.addAttribute("position",new A([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));R.call(this,c,new Y({color:b}));this.geometry.computeBoundingSphere();}function te(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new D();b.addAttribute("position",new A([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));b.computeBoundingSphere();ca.call(this,b,new Y({color:a}));b=new D();b.addAttribute("position",new A([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new ra(b,new ya({color:a,opacity:.2,transparent:!0,depthWrite:!1})));}function ub(a,b,c,d,e,f){B.call(this);void 0===a&&(a=new n(0,0,1));void 0===b&&(b=new n(0,0,0));void 0===c&&(c=1);void 0===d&&(d=16776960);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===qf&&(qf=new D(),qf.addAttribute("position",new A([0,0,0,0,1,0],3)),Gg=new rb(0,.5,1,5,1),Gg.translate(0,-.5,0));this.position.copy(b);this.line=new ca(qf,new Y({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ra(Gg,new ya({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f);}function ue(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new D();a.addAttribute("position",new A(b,3));a.addAttribute("color",new A([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new Y({vertexColors:2});R.call(this,a,b);}function di(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");sa.call(this,a);this.type="catmullrom";this.closed=!0;}function ei(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");sa.call(this,a);this.type="catmullrom";}function Hg(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");sa.call(this,a);this.type="catmullrom";}void 0===_Number$EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===_Number$isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a;});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a;});!1==="name"in Function.prototype&&_Object$defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];}});void 0===_Object$assign&&(Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e]);}return b;});_Object$assign(xa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b);},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b);},removeEventListener:function(a,b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)));},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++)b[c].call(this,a);}}}});for(var qa=[],ve=0;256>ve;ve++)qa[ve]=(16>ve?"0":"")+ve.toString(16);var O={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,c=4294967295*Math.random()|0,d=4294967295*Math.random()|0;return(qa[a&255]+qa[a>>8&255]+qa[a>>16&255]+qa[a>>24&255]+"-"+qa[b&255]+qa[b>>8&255]+"-"+qa[b>>16&15|64]+qa[b>>24&255]+"-"+qa[c&63|128]+qa[c>>8&255]+"-"+qa[c>>16&255]+qa[c>>24&255]+qa[d&255]+qa[d>>8&255]+qa[d>>16&255]+qa[d>>24&255]).toUpperCase();},clamp:function(a,b,c){return Math.max(b,Math.min(c,a));},euclideanModulo:function(a,b){return(a%b+b)%b;},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b);},lerp:function(a,b,c){return(1-c)*a+c*b;},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a);},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10);},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1));},randFloat:function(a,b){return a+Math.random()*(b-a);},randFloatSpread:function(a){return a*(.5-Math.random());},degToRad:function(a){return a*O.DEG2RAD;},radToDeg:function(a){return a*O.RAD2DEG;},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a;},ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2));},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2));}};_Object$defineProperties(v.prototype,{width:{get:function(){return this.x;},set:function(a){this.x=a;}},height:{get:function(){return this.y;},set:function(a){this.y=a;}}});_Object$assign(v.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this;},setScalar:function(a){this.y=this.x=a;return this;},setX:function(a){this.x=a;return this;},setY:function(a){this.y=a;return this;},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y);},copy:function(a){this.x=a.x;this.y=a.y;return this;},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this;},addScalar:function(a){this.x+=a;this.y+=a;return this;},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this;},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this;},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this;},subScalar:function(a){this.x-=a;this.y-=a;return this;},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this;},multiply:function(a){this.x*=a.x;this.y*=a.y;return this;},multiplyScalar:function(a){this.x*=a;this.y*=a;return this;},divide:function(a){this.x/=a.x;this.y/=a.y;return this;},divideScalar:function(a){return this.multiplyScalar(1/a);},applyMatrix3:function(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=a[1]*b+a[4]*c+a[7];return this;},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this;},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this;},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this;},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));return this;},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this;},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this;},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this;},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this;},negate:function(){this.x=-this.x;this.y=-this.y;return this;},dot:function(a){return this.x*a.x+this.y*a.y;},cross:function(a){return this.x*a.y-this.y*a.x;},lengthSq:function(){return this.x*this.x+this.y*this.y;},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y);},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y);},normalize:function(){return this.divideScalar(this.length()||1);},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a;},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a;},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y);},setLength:function(a){return this.normalize().multiplyScalar(a);},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this;},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function(a){return a.x===this.x&&a.y===this.y;},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a;},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this;},rotateAround:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this;}});_Object$assign(na,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d);},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],l=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var k=e[f+1],n=e[f+2];e=e[f+3];if(c!==e||h!==d||l!==k||m!==n){f=1-g;var r=h*d+l*k+m*n+c*e,q=0<=r?1:-1,t=1-r*r;t>_Number$EPSILON&&(t=Math.sqrt(t),r=Math.atan2(t,r*q),f=Math.sin(f*r)/t,g=Math.sin(g*r)/t);q*=g;h=h*f+d*q;l=l*f+k*q;m=m*f+n*q;c=c*f+e*q;f===1-g&&(g=1/Math.sqrt(h*h+l*l+m*m+c*c),h*=g,l*=g,m*=g,c*=g);}a[b]=h;a[b+1]=l;a[b+2]=m;a[b+3]=c;}});_Object$defineProperties(na.prototype,{x:{get:function(){return this._x;},set:function(a){this._x=a;this._onChangeCallback();}},y:{get:function(){return this._y;},set:function(a){this._y=a;this._onChangeCallback();}},z:{get:function(){return this._z;},set:function(a){this._z=a;this._onChangeCallback();}},w:{get:function(){return this._w;},set:function(a){this._w=a;this._onChangeCallback();}}});_Object$assign(na.prototype,{isQuaternion:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this._onChangeCallback();return this;},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w);},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this._onChangeCallback();return this;},setFromEuler:function(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,h=f(c/2),l=f(d/2);f=f(e/2);c=g(c/2);d=g(d/2);e=g(e/2);"XYZ"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f-c*d*e):"YXZ"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f+c*d*e):"ZXY"===a?(this._x=c*l*f-h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f-c*d*e):"ZYX"===a?(this._x=c*l*f-h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f+c*d*e):"YZX"===a?(this._x=c*l*f+h*d*e,this._y=h*d*f+c*l*e,this._z=h*l*e-c*d*f,this._w=h*l*f-c*d*e):"XZY"===a&&(this._x=c*l*f-h*d*e,this._y=h*d*f-c*l*e,this._z=h*l*e+c*d*f,this._w=h*l*f+c*d*e);!1!==b&&this._onChangeCallback();return this;},setFromAxisAngle:function(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this._onChangeCallback();return this;},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],l=b[6];b=b[10];var m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(l-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(l-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+l)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+l)/c,this._z=.25*c);this._onChangeCallback();return this;},setFromUnitVectors:function(a,b){var c=a.dot(b)+1;1E-6>c?(c=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0):(this._x=0,this._y=-a.z,this._z=a.y)):(this._x=a.y*b.z-a.z*b.y,this._y=a.z*b.x-a.x*b.z,this._z=a.x*b.y-a.y*b.x);this._w=c;return this.normalize();},angleTo:function(a){return 2*Math.acos(Math.abs(O.clamp(this.dot(a),-1,1)));},rotateTowards:function(a,b){var c=this.angleTo(a);if(0===c)return this;this.slerp(a,Math.min(1,b/c));return this;},inverse:function(){return this.conjugate();},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this._onChangeCallback();return this;},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w;},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w;},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w);},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this._onChangeCallback();return this;},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a);},premultiply:function(a){return this.multiplyQuaternions(a,this);},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,h=b._z;b=b._w;this._x=c*b+a*f+d*h-e*g;this._y=d*b+a*g+e*f-c*h;this._z=e*b+a*h+c*g-d*f;this._w=a*b-c*f-d*g-e*h;this._onChangeCallback();return this;},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;a=1-g*g;if(a<=_Number$EPSILON)return g=1-b,this._w=g*f+b*this._w,this._x=g*c+b*this._x,this._y=g*d+b*this._y,this._z=g*e+b*this._z,this.normalize(),this._onChangeCallback(),this;a=Math.sqrt(a);var h=Math.atan2(a,g);g=Math.sin((1-b)*h)/a;b=Math.sin(b*h)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this._onChangeCallback();return this;},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w;},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this._onChangeCallback();return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a;},_onChange:function(a){this._onChangeCallback=a;return this;},_onChangeCallback:function(){}});var Ig=new n(),fi=new na();_Object$assign(n.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this;},setScalar:function(a){this.z=this.y=this.x=a;return this;},setX:function(a){this.x=a;return this;},setY:function(a){this.y=a;return this;},setZ:function(a){this.z=a;return this;},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z);},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this;},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this;},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this;},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this;},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this;},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this;},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this;},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this;},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this;},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this;},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this;},applyEuler:function(a){a&&a.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(fi.setFromEuler(a));},applyAxisAngle:function(a,b){return this.applyQuaternion(fi.setFromAxisAngle(a,b));},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this;},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this;},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,l=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=h*a+b*-e+l*-g-m*-f;this.y=l*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-l*-e;return this;},project:function(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix);},unproject:function(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld);},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize();},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this;},divideScalar:function(a){return this.multiplyScalar(1/a);},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this;},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this;},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this;},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));return this;},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this;},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this;},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this;},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this;},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this;},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z;},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z;},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z);},normalize:function(){return this.divideScalar(this.length()||1);},setLength:function(a){return this.normalize().multiplyScalar(a);},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this;},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},cross:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a);},crossVectors:function(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this;},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b);},projectOnPlane:function(a){Ig.copy(this).projectOnVector(a);return this.sub(Ig);},reflect:function(a){return this.sub(Ig.copy(a).multiplyScalar(2*this.dot(a)));},angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(O.clamp(a,-1,1));},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a;},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z);},setFromSpherical:function(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta);},setFromSphericalCoords:function(a,b,c){var d=Math.sin(b)*a;this.x=d*Math.sin(c);this.y=Math.cos(b)*a;this.z=d*Math.cos(c);return this;},setFromCylindrical:function(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y);},setFromCylindricalCoords:function(a,b,c){this.x=a*Math.sin(b);this.y=c;this.z=a*Math.cos(b);return this;},setFromMatrixPosition:function(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this;},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this;},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b);},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z;},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a;},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this;}});var pc=new n();_Object$assign(ta.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,l){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=l;return this;},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this;},clone:function(){return new this.constructor().fromArray(this.elements);},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this;},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this;},applyToBufferAttribute:function(a){for(var b=0,c=a.count;b<c;b++)pc.x=a.getX(b),pc.y=a.getY(b),pc.z=a.getZ(b),pc.applyMatrix3(this),a.setXYZ(b,pc.x,pc.y,pc.z);return a;},multiply:function(a){return this.multiplyMatrices(this,a);},premultiply:function(a){return this.multiplyMatrices(a,this);},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],h=c[4],l=c[7],m=c[2],k=c[5];c=c[8];var n=d[0],r=d[3],q=d[6],t=d[1],y=d[4],w=d[7],z=d[2],x=d[5];d=d[8];b[0]=a*n+e*t+f*z;b[3]=a*r+e*y+f*x;b[6]=a*q+e*w+f*d;b[1]=g*n+h*t+l*z;b[4]=g*r+h*y+l*x;b[7]=g*q+h*w+l*d;b[2]=m*n+k*t+c*z;b[5]=m*r+k*y+c*x;b[8]=m*q+k*w+c*d;return this;},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this;},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],l=a[7];a=a[8];return b*f*a-b*g*l-c*e*a+c*g*h+d*e*l-d*f*h;},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],l=c[5],m=c[6],k=c[7];c=c[8];var n=c*h-l*k,r=l*m-c*g,q=k*g-h*m,t=d*n+e*r+f*q;if(0===t){if(!0===b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");return this.identity();}b=1/t;a[0]=n*b;a[1]=(f*k-c*e)*b;a[2]=(l*e-f*h)*b;a[3]=r*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-l*d)*b;a[6]=q*b;a[7]=(e*m-k*d)*b;a[8]=(h*d-e*g)*b;return this;},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this;},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose();},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this;},setUvTransform:function(a,b,c,d,e,f,g){var h=Math.cos(e);e=Math.sin(e);this.set(c*h,c*e,-c*(h*f+e*g)+f+a,-d*e,d*h,-d*(-e*f+h*g)+g+b,0,0,1);},scale:function(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this;},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],h=c[4],l=c[7];c[0]=b*d+a*g;c[3]=b*e+a*h;c[6]=b*f+a*l;c[1]=-a*d+b*g;c[4]=-a*e+b*h;c[7]=-a*f+b*l;return this;},translate:function(a,b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this;},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0;},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a;}});var md,Kb={getDataURL:function(a){if("undefined"==typeof HTMLCanvasElement)return a.src;if(!(a instanceof HTMLCanvasElement)){void 0===md&&(md=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"));md.width=a.width;md.height=a.height;var b=md.getContext("2d");a instanceof ImageData?b.putImageData(a,0,0):b.drawImage(a,0,0,a.width,a.height);a=md;}return 2048<a.width||2048<a.height?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png");}},Li=0;ba.DEFAULT_IMAGE=void 0;ba.DEFAULT_MAPPING=300;ba.prototype=_Object$assign(_Object$create(xa.prototype),{constructor:ba,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this;},toJSON:function(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=O.generateUUID());if(!b&&void 0===a.images[d.uuid]){if(_Array$isArray(d)){var e=[];for(var f=0,g=d.length;f<g;f++)e.push(Kb.getDataURL(d[f]));}else e=Kb.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e};}c.image=d.uuid;}b||(a.textures[this.uuid]=c);return c;},dispose:function(){this.dispatchEvent({type:"dispose"});},transformUv:function(a){if(300!==this.mapping)return a;a.applyMatrix3(this.matrix);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x);}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y);}this.flipY&&(a.y=1-a.y);return a;}});_Object$defineProperty(ba.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++;}});_Object$defineProperties(da.prototype,{width:{get:function(){return this.z;},set:function(a){this.z=a;}},height:{get:function(){return this.w;},set:function(a){this.w=a;}}});_Object$assign(da.prototype,{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this;},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this;},setX:function(a){this.x=a;return this;},setY:function(a){this.y=a;return this;},setZ:function(a){this.z=a;return this;},setW:function(a){this.w=a;return this;},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this;},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w);},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this;},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this;},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this;},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this;},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this;},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this;},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this;},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this;},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this;},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this;},divideScalar:function(a){return this.multiplyScalar(1/a);},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this;},setAxisAngleFromRotationMatrix:function(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var h=a[2];var l=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-h)&&.01>Math.abs(g-l)){if(.1>Math.abs(c+e)&&.1>Math.abs(d+h)&&.1>Math.abs(g+l)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+h)/4;g=(g+l)/4;b>f&&b>m?.01>b?(l=0,c=h=.707106781):(l=Math.sqrt(b),h=c/l,c=d/l):f>m?.01>f?(l=.707106781,h=0,c=.707106781):(h=Math.sqrt(f),l=c/h,c=g/h):.01>m?(h=l=.707106781,c=0):(c=Math.sqrt(m),l=d/c,h=g/c);this.set(l,h,c,a);return this;}a=Math.sqrt((l-g)*(l-g)+(d-h)*(d-h)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(l-g)/a;this.y=(d-h)/a;this.z=(e-c)/a;this.w=Math.acos((b+f+m-1)/2);return this;},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this;},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this;},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this;},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));this.w=Math.max(a,Math.min(b,this.w));return this;},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)));},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this;},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this;},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this;},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this;},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this;},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w;},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w;},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w);},normalize:function(){return this.divideScalar(this.length()||1);},setLength:function(a){return this.normalize().multiplyScalar(a);},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this;},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w;},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a;},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this;}});Ka.prototype=_Object$assign(_Object$create(xa.prototype),{constructor:Ka,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.texture.image.width=a,this.texture.image.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b);},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this;},dispose:function(){this.dispatchEvent({type:"dispose"});}});Pf.prototype=_Object$assign(_Object$create(Ka.prototype),{constructor:Pf,isWebGLMultisampleRenderTarget:!0,copy:function(a){Ka.prototype.copy.call(this,a);this.samples=a.samples;return this;}});var Ja=new n(),ja=new P(),hk=new n(0,0,0),ik=new n(1,1,1),Lb=new n(),rf=new n(),za=new n();_Object$assign(P.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,l,m,k,n,r,q,t,y){var p=this.elements;p[0]=a;p[4]=b;p[8]=c;p[12]=d;p[1]=e;p[5]=f;p[9]=g;p[13]=h;p[2]=l;p[6]=m;p[10]=k;p[14]=n;p[3]=r;p[7]=q;p[11]=t;p[15]=y;return this;},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this;},clone:function(){return new P().fromArray(this.elements);},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this;},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this;},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this;},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this;},extractRotation:function(a){var b=this.elements,c=a.elements,d=1/Ja.setFromMatrixColumn(a,0).length(),e=1/Ja.setFromMatrixColumn(a,1).length();a=1/Ja.setFromMatrixColumn(a,2).length();b[0]=c[0]*d;b[1]=c[1]*d;b[2]=c[2]*d;b[3]=0;b[4]=c[4]*e;b[5]=c[5]*e;b[6]=c[6]*e;b[7]=0;b[8]=c[8]*a;b[9]=c[9]*a;b[10]=c[10]*a;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*h;var l=f*e,m=c*h,k=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=l+m*d;b[5]=a-k*d;b[9]=-c*g;b[2]=k-a*d;b[6]=m+l*d;b[10]=f*g;}else"YXZ"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a+k*c,b[4]=m*c-l,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=l*c-m,b[6]=k+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a-k*c,b[4]=-f*e,b[8]=m+l*c,b[1]=l+m*c,b[5]=f*h,b[9]=k-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,l=f*e,m=c*h,k=c*e,b[0]=g*h,b[4]=m*d-l,b[8]=a*d+k,b[1]=g*e,b[5]=k*d+a,b[9]=l*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=k-a*e,b[8]=m*e+l,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=l*e+m,b[10]=a-k*e):"XZY"===a.order&&(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+k,b[5]=f*h,b[9]=l*e-m,b[2]=m*e-l,b[6]=c*h,b[10]=k*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},makeRotationFromQuaternion:function(a){return this.compose(hk,a,ik);},lookAt:function(a,b,c){var d=this.elements;za.subVectors(a,b);0===za.lengthSq()&&(za.z=1);za.normalize();Lb.crossVectors(c,za);0===Lb.lengthSq()&&(1===Math.abs(c.z)?za.x+=1E-4:za.z+=1E-4,za.normalize(),Lb.crossVectors(c,za));Lb.normalize();rf.crossVectors(za,Lb);d[0]=Lb.x;d[4]=rf.x;d[8]=za.x;d[1]=Lb.y;d[5]=rf.y;d[9]=za.y;d[2]=Lb.z;d[6]=rf.z;d[10]=za.z;return this;},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a);},premultiply:function(a){return this.multiplyMatrices(a,this);},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],h=c[1],l=c[5],m=c[9],k=c[13],n=c[2],r=c[6],q=c[10],t=c[14],y=c[3],w=c[7],z=c[11];c=c[15];var x=d[0],v=d[4],A=d[8],E=d[12],B=d[1],D=d[5],F=d[9],G=d[13],I=d[2],H=d[6],J=d[10],K=d[14],N=d[3],O=d[7],P=d[11];d=d[15];b[0]=a*x+e*B+f*I+g*N;b[4]=a*v+e*D+f*H+g*O;b[8]=a*A+e*F+f*J+g*P;b[12]=a*E+e*G+f*K+g*d;b[1]=h*x+l*B+m*I+k*N;b[5]=h*v+l*D+m*H+k*O;b[9]=h*A+l*F+m*J+k*P;b[13]=h*E+l*G+m*K+k*d;b[2]=n*x+r*B+q*I+t*N;b[6]=n*v+r*D+q*H+t*O;b[10]=n*A+r*F+q*J+t*P;b[14]=n*E+r*G+q*K+t*d;b[3]=y*x+w*B+z*I+c*N;b[7]=y*v+w*D+z*H+c*O;b[11]=y*A+w*F+z*J+c*P;b[15]=y*E+w*G+z*K+c*d;return this;},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this;},applyToBufferAttribute:function(a){for(var b=0,c=a.count;b<c;b++)Ja.x=a.getX(b),Ja.y=a.getY(b),Ja.z=a.getZ(b),Ja.applyMatrix4(this),a.setXYZ(b,Ja.x,Ja.y,Ja.z);return a;},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],l=a[13],m=a[2],k=a[6],n=a[10],r=a[14];return a[3]*(+e*h*k-d*l*k-e*g*n+c*l*n+d*g*r-c*h*r)+a[7]*(+b*h*r-b*l*n+e*f*n-d*f*r+d*l*m-e*h*m)+a[11]*(+b*l*k-b*g*r-e*f*k+c*f*r+e*g*m-c*l*m)+a[15]*(-d*g*m-b*h*k+b*g*n+d*f*k-c*f*n+c*h*m);},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this;},setPosition:function(a,b,c){var d=this.elements;a.isVector3?(d[12]=a.x,d[13]=a.y,d[14]=a.z):(d[12]=a,d[13]=b,d[14]=c);return this;},getInverse:function(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],h=d[4],l=d[5],m=d[6],k=d[7],n=d[8],r=d[9],q=d[10],t=d[11],y=d[12],w=d[13],z=d[14];d=d[15];var x=r*z*k-w*q*k+w*m*t-l*z*t-r*m*d+l*q*d,v=y*q*k-n*z*k-y*m*t+h*z*t+n*m*d-h*q*d,A=n*w*k-y*r*k+y*l*t-h*w*t-n*l*d+h*r*d,E=y*r*m-n*w*m-y*l*q+h*w*q+n*l*z-h*r*z,B=a*x+e*v+f*A+g*E;if(0===B){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity();}b=1/B;c[0]=x*b;c[1]=(w*q*g-r*z*g-w*f*t+e*z*t+r*f*d-e*q*d)*b;c[2]=(l*z*g-w*m*g+w*f*k-e*z*k-l*f*d+e*m*d)*b;c[3]=(r*m*g-l*q*g-r*f*k+e*q*k+l*f*t-e*m*t)*b;c[4]=v*b;c[5]=(n*z*g-y*q*g+y*f*t-a*z*t-n*f*d+a*q*d)*b;c[6]=(y*m*g-h*z*g-y*f*k+a*z*k+h*f*d-a*m*d)*b;c[7]=(h*q*g-n*m*g+n*f*k-a*q*k-h*f*t+a*m*t)*b;c[8]=A*b;c[9]=(y*r*g-n*w*g-y*e*t+a*w*t+n*e*d-a*r*d)*b;c[10]=(h*w*g-y*l*g+y*e*k-a*w*k-h*e*d+a*l*d)*b;c[11]=(n*l*g-h*r*g-n*e*k+a*r*k+h*e*t-a*l*t)*b;c[12]=E*b;c[13]=(n*w*f-y*r*f+y*e*q-a*w*q-n*e*z+a*r*z)*b;c[14]=(y*l*f-h*w*f-y*e*m+a*w*m+h*e*z-a*l*z)*b;c[15]=(h*r*f-n*l*f+n*e*m-a*r*m-h*e*q+a*l*q)*b;return this;},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this;},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]));},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this;},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this;},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this;},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this;},makeRotationAxis:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,h=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,h*f+c,h*a-b*e,0,g*a-b*f,h*a+b*e,d*a*a+c,0,0,0,0,1);return this;},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this;},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this;},compose:function(a,b,c){var d=this.elements,e=b._x,f=b._y,g=b._z,h=b._w,l=e+e,m=f+f,k=g+g;b=e*l;var n=e*m;e*=k;var r=f*m;f*=k;g*=k;l*=h;m*=h;h*=k;k=c.x;var q=c.y;c=c.z;d[0]=(1-(r+g))*k;d[1]=(n+h)*k;d[2]=(e-m)*k;d[3]=0;d[4]=(n-h)*q;d[5]=(1-(b+g))*q;d[6]=(f+l)*q;d[7]=0;d[8]=(e+m)*c;d[9]=(f-l)*c;d[10]=(1-(b+r))*c;d[11]=0;d[12]=a.x;d[13]=a.y;d[14]=a.z;d[15]=1;return this;},decompose:function(a,b,c){var d=this.elements,e=Ja.set(d[0],d[1],d[2]).length(),f=Ja.set(d[4],d[5],d[6]).length(),g=Ja.set(d[8],d[9],d[10]).length();0>this.determinant()&&(e=-e);a.x=d[12];a.y=d[13];a.z=d[14];ja.copy(this);a=1/e;d=1/f;var h=1/g;ja.elements[0]*=a;ja.elements[1]*=a;ja.elements[2]*=a;ja.elements[4]*=d;ja.elements[5]*=d;ja.elements[6]*=d;ja.elements[8]*=h;ja.elements[9]*=h;ja.elements[10]*=h;b.setFromRotationMatrix(ja);c.x=e;c.y=f;c.z=g;return this;},makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this;},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),l=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*l;g[9]=0;g[13]=-((c+d)*l);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this;},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0;},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a;}});var gi=new P(),hi=new na();Qb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");Qb.DefaultOrder="XYZ";_Object$defineProperties(Qb.prototype,{x:{get:function(){return this._x;},set:function(a){this._x=a;this._onChangeCallback();}},y:{get:function(){return this._y;},set:function(a){this._y=a;this._onChangeCallback();}},z:{get:function(){return this._z;},set:function(a){this._z=a;this._onChangeCallback();}},order:{get:function(){return this._order;},set:function(a){this._order=a;this._onChangeCallback();}}});_Object$assign(Qb.prototype,{isEuler:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._onChangeCallback();return this;},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order);},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._onChangeCallback();return this;},setFromRotationMatrix:function(a,b,c){var d=O.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],l=e[5],m=e[9],k=e[2],n=e[6];e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.9999999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(n,l),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.9999999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-k,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(n,-1,1)),.9999999>Math.abs(n)?(this._y=Math.atan2(-k,e),this._z=Math.atan2(-f,l)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(k,-1,1)),.9999999>Math.abs(k)?(this._x=Math.atan2(n,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,l))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.9999999>Math.abs(h)?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-k,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.9999999>Math.abs(f)?(this._x=Math.atan2(n,l),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;!1!==c&&this._onChangeCallback();return this;},setFromQuaternion:function(a,b,c){gi.makeRotationFromQuaternion(a);return this.setFromRotationMatrix(gi,b,c);},setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order);},reorder:function(a){hi.setFromEuler(this);return this.setFromQuaternion(hi,a);},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order;},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._onChangeCallback();return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a;},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new n(this._x,this._y,this._z);},_onChange:function(a){this._onChangeCallback=a;return this;},_onChangeCallback:function(){}});_Object$assign(Qf.prototype,{set:function(a){this.mask=1<<a|0;},enable:function(a){this.mask=this.mask|1<<a|0;},enableAll:function(){this.mask=-1;},toggle:function(a){this.mask^=1<<a|0;},disable:function(a){this.mask&=~(1<<a|0);},disableAll:function(){this.mask=0;},test:function(a){return 0!==(this.mask&a.mask);}});var Mi=0,ii=new n(),nd=new na(),vb=new P(),sf=new n(),we=new n(),jk=new n(),kk=new na(),ji=new n(1,0,0),ki=new n(0,1,0),li=new n(0,0,1),lk={type:"added"},mk={type:"removed"};B.DefaultUp=new n(0,1,0);B.DefaultMatrixAutoUpdate=!0;B.prototype=_Object$assign(_Object$create(xa.prototype),{constructor:B,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrixAutoUpdate&&this.updateMatrix();this.matrix.premultiply(a);this.matrix.decompose(this.position,this.quaternion,this.scale);},applyQuaternion:function(a){this.quaternion.premultiply(a);return this;},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b);},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0);},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a);},setRotationFromQuaternion:function(a){this.quaternion.copy(a);},rotateOnAxis:function(a,b){nd.setFromAxisAngle(a,b);this.quaternion.multiply(nd);return this;},rotateOnWorldAxis:function(a,b){nd.setFromAxisAngle(a,b);this.quaternion.premultiply(nd);return this;},rotateX:function(a){return this.rotateOnAxis(ji,a);},rotateY:function(a){return this.rotateOnAxis(ki,a);},rotateZ:function(a){return this.rotateOnAxis(li,a);},translateOnAxis:function(a,b){ii.copy(a).applyQuaternion(this.quaternion);this.position.add(ii.multiplyScalar(b));return this;},translateX:function(a){return this.translateOnAxis(ji,a);},translateY:function(a){return this.translateOnAxis(ki,a);},translateZ:function(a){return this.translateOnAxis(li,a);},localToWorld:function(a){return a.applyMatrix4(this.matrixWorld);},worldToLocal:function(a){return a.applyMatrix4(vb.getInverse(this.matrixWorld));},lookAt:function(a,b,c){a.isVector3?sf.copy(a):sf.set(a,b,c);a=this.parent;this.updateWorldMatrix(!0,!1);we.setFromMatrixPosition(this.matrixWorld);this.isCamera||this.isLight?vb.lookAt(we,sf,this.up):vb.lookAt(sf,we,this.up);this.quaternion.setFromRotationMatrix(vb);a&&(vb.extractRotation(a.matrixWorld),nd.setFromRotationMatrix(vb),this.quaternion.premultiply(nd.inverse()));},add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this;}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(lk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this;},remove:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this;}b=this.children.indexOf(a);-1!==b&&(a.parent=null,this.children.splice(b,1),a.dispatchEvent(mk));return this;},attach:function(a){this.updateWorldMatrix(!0,!1);vb.getInverse(this.matrixWorld);null!==a.parent&&(a.parent.updateWorldMatrix(!0,!1),vb.multiply(a.parent.matrixWorld));a.applyMatrix(vb);a.updateWorldMatrix(!1,!1);this.add(a);return this;},getObjectById:function(a){return this.getObjectByProperty("id",a);},getObjectByName:function(a){return this.getObjectByProperty("name",a);},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e;}},getWorldPosition:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new n());this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld);},getWorldQuaternion:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),a=new na());this.updateMatrixWorld(!0);this.matrixWorld.decompose(we,a,jk);return a;},getWorldScale:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),a=new n());this.updateMatrixWorld(!0);this.matrixWorld.decompose(we,kk,a);return a;},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),a=new n());this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize();},raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a);},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a);}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a));},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0;},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a);},updateWorldMatrix:function(a,b){var c=this.parent;!0===a&&null!==c&&c.updateWorldMatrix(!0,!1);this.matrixAutoUpdate&&this.updateMatrix();null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(!0===b)for(a=this.children,b=0,c=a.length;b<c;b++)a[b].updateWorldMatrix(!1,!0);},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid;}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);!1===this.frustumCulled&&(f.frustumCulled=!1);0!==this.renderOrder&&(f.renderOrder=this.renderOrder);"{}"!==_JSON$stringify(this.userData)&&(f.userData=this.userData);f.layers=this.layers.mask;f.matrix=this.matrix.toArray();!1===this.matrixAutoUpdate&&(f.matrixAutoUpdate=!1);this.isMesh&&0!==this.drawMode&&(f.drawMode=this.drawMode);if(this.isMesh||this.isLine||this.isPoints){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,_Array$isArray(g))for(var h=0,l=g.length;h<l;h++)b(a.shapes,g[h]);else b(a.shapes,g);}if(void 0!==this.material)if(_Array$isArray(this.material)){g=[];h=0;for(l=this.material.length;h<l;h++)g.push(b(a.materials,this.material[h]));f.material=g;}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=[],h=0;h<this.children.length;h++)f.children.push(this.children[h].toJSON(a).object);if(d){d=c(a.geometries);h=c(a.materials);l=c(a.textures);var m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);0<h.length&&(e.materials=h);0<l.length&&(e.textures=l);0<m.length&&(e.images=m);0<g.length&&(e.shapes=g);}e.object=f;return e;},clone:function(a){return new this.constructor().copy(this,a);},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(_JSON$stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++)this.add(a.children[b].clone());return this;}});wd.prototype=_Object$assign(_Object$create(B.prototype),{constructor:wd,isScene:!0,copy:function(a,b){B.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this;},toJSON:function(a){var b=B.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b;},dispose:function(){this.dispatchEvent({type:"dispose"});}});var wb=[new n(),new n(),new n(),new n(),new n(),new n(),new n(),new n()],jb=new n(),od=new n(),pd=new n(),qd=new n(),Mb=new n(),Nb=new n(),qc=new n(),xe=new n(),tf=new n(),uf=new n(),Rb=new n();_Object$assign(ab.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.length;h<l;h+=3){var m=a[h],k=a[h+1],n=a[h+2];m<b&&(b=m);k<c&&(c=k);n<d&&(d=n);m>e&&(e=m);k>f&&(f=k);n>g&&(g=n);}this.min.set(b,c,d);this.max.set(e,f,g);return this;},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.count;h<l;h++){var m=a.getX(h),k=a.getY(h),n=a.getZ(h);m<b&&(b=m);k<c&&(c=k);n<d&&(d=n);m>e&&(e=m);k>f&&(f=k);n>g&&(g=n);}this.min.set(b,c,d);this.max.set(e,f,g);return this;},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this;},setFromCenterAndSize:function(a,b){b=jb.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this;},setFromObject:function(a){this.makeEmpty();return this.expandByObject(a);},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this;},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z;},getCenter:function(a){void 0===a&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new n());return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5);},getSize:function(a){void 0===a&&(console.warn("THREE.Box3: .getSize() target is now required"),a=new n());return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min);},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},expandByObject:function(a){var b;a.updateWorldMatrix(!1,!1);var c=a.geometry;if(void 0!==c)if(c.isGeometry){var d=c.vertices;c=0;for(b=d.length;c<b;c++)jb.copy(d[c]),jb.applyMatrix4(a.matrixWorld),this.expandByPoint(jb);}else if(c.isBufferGeometry&&(d=c.attributes.position,void 0!==d))for(c=0,b=d.count;c<b;c++)jb.fromBufferAttribute(d,c).applyMatrix4(a.matrixWorld),this.expandByPoint(jb);a=a.children;c=0;for(b=a.length;c<b;c++)this.expandByObject(a[c]);return this;},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0;},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z;},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box3: .getParameter() target is now required"),b=new n());return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z));},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0;},intersectsSphere:function(a){this.clampPoint(a.center,jb);return jb.distanceToSquared(a.center)<=a.radius*a.radius;},intersectsPlane:function(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x;}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=-a.constant&&c>=-a.constant;},intersectsTriangle:function(a){if(this.isEmpty())return!1;this.getCenter(xe);tf.subVectors(this.max,xe);od.subVectors(a.a,xe);pd.subVectors(a.b,xe);qd.subVectors(a.c,xe);Mb.subVectors(pd,od);Nb.subVectors(qd,pd);qc.subVectors(od,qd);a=[0,-Mb.z,Mb.y,0,-Nb.z,Nb.y,0,-qc.z,qc.y,Mb.z,0,-Mb.x,Nb.z,0,-Nb.x,qc.z,0,-qc.x,-Mb.y,Mb.x,0,-Nb.y,Nb.x,0,-qc.y,qc.x,0];if(!Rf(a,od,pd,qd,tf))return!1;a=[1,0,0,0,1,0,0,0,1];if(!Rf(a,od,pd,qd,tf))return!1;uf.crossVectors(Mb,Nb);a=[uf.x,uf.y,uf.z];return Rf(a,od,pd,qd,tf);},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new n());return b.copy(a).clamp(this.min,this.max);},distanceToPoint:function(a){return jb.copy(a).clamp(this.min,this.max).sub(a).length();},getBoundingSphere:function(a){void 0===a&&console.error("THREE.Box3: .getBoundingSphere() target is now required");this.getCenter(a.center);a.radius=.5*this.getSize(jb).length();return a;},intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this;},union:function(a){this.min.min(a.min);this.max.max(a.max);return this;},applyMatrix4:function(a){if(this.isEmpty())return this;wb[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a);wb[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a);wb[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a);wb[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a);wb[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a);wb[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a);wb[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a);wb[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a);this.setFromPoints(wb);return this;},translate:function(a){this.min.add(a);this.max.add(a);return this;},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max);}});var nk=new ab();_Object$assign(nb.prototype,{set:function(a,b){this.center.copy(a);this.radius=b;return this;},setFromPoints:function(a,b){var c=this.center;void 0!==b?c.copy(b):nk.setFromPoints(a).getCenter(c);for(var d=b=0,e=a.length;d<e;d++)b=Math.max(b,c.distanceToSquared(a[d]));this.radius=Math.sqrt(b);return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this;},empty:function(){return 0>=this.radius;},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius;},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius;},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b;},intersectsBox:function(a){return a.intersectsSphere(this);},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius;},clampPoint:function(a,b){var c=this.center.distanceToSquared(a);void 0===b&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),b=new n());b.copy(a);c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b;},getBoundingBox:function(a){void 0===a&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),a=new ab());a.set(this.center,this.center);a.expandByScalar(this.radius);return a;},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this;},translate:function(a){this.center.add(a);return this;},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius;}});var xb=new n(),Jg=new n(),vf=new n(),Ob=new n(),Kg=new n(),wf=new n(),Lg=new n();_Object$assign(Sb.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this;},at:function(a,b){void 0===b&&(console.warn("THREE.Ray: .at() target is now required"),b=new n());return b.copy(this.direction).multiplyScalar(a).add(this.origin);},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this;},recast:function(a){this.origin.copy(this.at(a,xb));return this;},closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new n());b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin);},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a));},distanceSqToPoint:function(a){var b=xb.subVectors(a,this.origin).dot(this.direction);if(0>b)return this.origin.distanceToSquared(a);xb.copy(this.direction).multiplyScalar(b).add(this.origin);return xb.distanceToSquared(a);},distanceSqToSegment:function(a,b,c,d){Jg.copy(a).add(b).multiplyScalar(.5);vf.copy(b).sub(a).normalize();Ob.copy(this.origin).sub(Jg);var e=.5*a.distanceTo(b),f=-this.direction.dot(vf),g=Ob.dot(this.direction),h=-Ob.dot(vf),l=Ob.lengthSq(),m=Math.abs(1-f*f);if(0<m){a=f*h-g;b=f*g-h;var k=e*m;0<=a?b>=-k?b<=k?(e=1/m,a*=e,b*=e,f=a*(a+f*b+2*g)+b*(f*a+b+2*h)+l):(b=e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):(b=-e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):b<=-k?(a=Math.max(0,-(-f*e+g)),b=0<a?-e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l):b<=k?(a=0,b=Math.min(Math.max(-e,-h),e),f=b*(b+2*h)+l):(a=Math.max(0,-(f*e+g)),b=0<a?e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l);}else b=0<f?-e:e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l;c&&c.copy(this.direction).multiplyScalar(a).add(this.origin);d&&d.copy(vf).multiplyScalar(b).add(Jg);return f;},intersectSphere:function(a,b){xb.subVectors(a.center,this.origin);var c=xb.dot(this.direction),d=xb.dot(xb)-c*c;a=a.radius*a.radius;if(d>a)return null;a=Math.sqrt(a-d);d=c-a;c+=a;return 0>d&&0>c?null:0>d?this.at(c,b):this.at(d,b);},intersectsSphere:function(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius;},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null;},intersectPlane:function(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b);},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1;},intersectBox:function(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x;}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var h=(a.min.y-f.y)*d;d*=a.max.y-f.y;}else h=(a.max.y-f.y)*d,d*=a.min.y-f.y;if(g>d||h>c)return null;if(h>g||g!==g)g=h;if(d<c||c!==c)c=d;0<=e?(h=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(h=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||h>c)return null;if(h>g||g!==g)g=h;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b);},intersectsBox:function(a){return null!==this.intersectBox(a,xb);},intersectTriangle:function(a,b,c,d,e){Kg.subVectors(b,a);wf.subVectors(c,a);Lg.crossVectors(Kg,wf);b=this.direction.dot(Lg);if(0<b){if(d)return null;d=1;}else if(0>b)d=-1,b=-b;else return null;Ob.subVectors(this.origin,a);a=d*this.direction.dot(wf.crossVectors(Ob,wf));if(0>a)return null;c=d*this.direction.dot(Kg.cross(Ob));if(0>c||a+c>b)return null;a=-d*Ob.dot(Lg);return 0>a?null:this.at(a/b,e);},applyMatrix4:function(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this;},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction);}});var Ya=new n(),yb=new n(),Mg=new n(),zb=new n(),rd=new n(),sd=new n(),mi=new n(),Ng=new n(),Og=new n(),Pg=new n();_Object$assign(ia,{getNormal:function(a,b,c,d){void 0===d&&(console.warn("THREE.Triangle: .getNormal() target is now required"),d=new n());d.subVectors(c,b);Ya.subVectors(a,b);d.cross(Ya);a=d.lengthSq();return 0<a?d.multiplyScalar(1/Math.sqrt(a)):d.set(0,0,0);},getBarycoord:function(a,b,c,d,e){Ya.subVectors(d,b);yb.subVectors(c,b);Mg.subVectors(a,b);a=Ya.dot(Ya);b=Ya.dot(yb);c=Ya.dot(Mg);var f=yb.dot(yb);d=yb.dot(Mg);var g=a*f-b*b;void 0===e&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),e=new n());if(0===g)return e.set(-2,-1,-1);g=1/g;f=(f*c-b*d)*g;a=(a*d-b*c)*g;return e.set(1-f-a,a,f);},containsPoint:function(a,b,c,d){ia.getBarycoord(a,b,c,d,zb);return 0<=zb.x&&0<=zb.y&&1>=zb.x+zb.y;},getUV:function(a,b,c,d,e,f,g,h){this.getBarycoord(a,b,c,d,zb);h.set(0,0);h.addScaledVector(e,zb.x);h.addScaledVector(f,zb.y);h.addScaledVector(g,zb.z);return h;},isFrontFacing:function(a,b,c,d){Ya.subVectors(c,b);yb.subVectors(a,b);return 0>Ya.cross(yb).dot(d)?!0:!1;}});_Object$assign(ia.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this;},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this;},getArea:function(){Ya.subVectors(this.c,this.b);yb.subVectors(this.a,this.b);return .5*Ya.cross(yb).length();},getMidpoint:function(a){void 0===a&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new n());return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3);},getNormal:function(a){return ia.getNormal(this.a,this.b,this.c,a);},getPlane:function(a){void 0===a&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new n());return a.setFromCoplanarPoints(this.a,this.b,this.c);},getBarycoord:function(a,b){return ia.getBarycoord(a,this.a,this.b,this.c,b);},getUV:function(a,b,c,d,e){return ia.getUV(a,this.a,this.b,this.c,b,c,d,e);},containsPoint:function(a){return ia.containsPoint(a,this.a,this.b,this.c);},isFrontFacing:function(a){return ia.isFrontFacing(this.a,this.b,this.c,a);},intersectsBox:function(a){return a.intersectsTriangle(this);},closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),b=new n());var c=this.a,d=this.b,e=this.c;rd.subVectors(d,c);sd.subVectors(e,c);Ng.subVectors(a,c);var f=rd.dot(Ng),g=sd.dot(Ng);if(0>=f&&0>=g)return b.copy(c);Og.subVectors(a,d);var h=rd.dot(Og),l=sd.dot(Og);if(0<=h&&l<=h)return b.copy(d);var m=f*l-h*g;if(0>=m&&0<=f&&0>=h)return d=f/(f-h),b.copy(c).addScaledVector(rd,d);Pg.subVectors(a,e);a=rd.dot(Pg);var k=sd.dot(Pg);if(0<=k&&a<=k)return b.copy(e);f=a*g-f*k;if(0>=f&&0<=g&&0>=k)return m=g/(g-k),b.copy(c).addScaledVector(sd,m);g=h*k-a*l;if(0>=g&&0<=l-h&&0<=a-k)return mi.subVectors(e,d),m=(l-h)/(l-h+(a-k)),b.copy(d).addScaledVector(mi,m);e=1/(g+f+m);d=f*e;m*=e;return b.copy(c).addScaledVector(rd,d).addScaledVector(sd,m);},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c);}});var ok={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Aa={h:0,s:0,l:0},xf={h:0,s:0,l:0};_Object$assign(J.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this;},setScalar:function(a){this.b=this.g=this.r=a;return this;},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this;},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this;},setHSL:function(a,b,c){a=O.euclideanModulo(a,1);b=O.clamp(b,0,1);c=O.clamp(c,0,1);0===b?this.r=this.g=this.b=c:(b=.5>=c?c*(1+b):c+b-c*b,c=2*c-b,this.r=Sf(c,b,a+1/3),this.g=Sf(c,b,a),this.b=Sf(c,b,a-1/3));return this;},setStyle:function(a){function b(b){void 0!==b&&1>_parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.");}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case"rgb":case"rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,_parseInt(c[1],10))/255,this.g=Math.min(255,_parseInt(c[2],10))/255,this.b=Math.min(255,_parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,_parseInt(c[1],10))/100,this.g=Math.min(100,_parseInt(c[2],10))/100,this.b=Math.min(100,_parseInt(c[3],10))/100,b(c[5]),this;break;case"hsl":case"hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=_parseFloat(c[1])/360;var e=_parseInt(c[2],10)/100,f=_parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f);}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=_parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=_parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=_parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=_parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=_parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=_parseInt(c.charAt(4)+c.charAt(5),16)/255,this;}a&&0<a.length&&(c=ok[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this;},clone:function(){return new this.constructor(this.r,this.g,this.b);},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this;},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this;},copyLinearToGamma:function(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this;},convertGammaToLinear:function(a){this.copyGammaToLinear(this,a);return this;},convertLinearToGamma:function(a){this.copyLinearToGamma(this,a);return this;},copySRGBToLinear:function(a){this.r=Tf(a.r);this.g=Tf(a.g);this.b=Tf(a.b);return this;},copyLinearToSRGB:function(a){this.r=Uf(a.r);this.g=Uf(a.g);this.b=Uf(a.b);return this;},convertSRGBToLinear:function(){this.copySRGBToLinear(this);return this;},convertLinearToSRGB:function(){this.copyLinearToSRGB(this);return this;},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0;},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6);},getHSL:function(a){void 0===a&&(console.warn("THREE.Color: .getHSL() target is now required"),a={h:0,s:0,l:0});var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var l=e-f;f=.5>=h?l/(e+f):l/(2-e-f);switch(e){case b:g=(c-d)/l+(c<d?6:0);break;case c:g=(d-b)/l+2;break;case d:g=(b-c)/l+4;}g/=6;}a.h=g;a.s=f;a.l=h;return a;},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")";},offsetHSL:function(a,b,c){this.getHSL(Aa);Aa.h+=a;Aa.s+=b;Aa.l+=c;this.setHSL(Aa.h,Aa.s,Aa.l);return this;},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this;},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this;},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this;},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this;},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this;},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this;},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this;},lerpHSL:function(a,b){this.getHSL(Aa);a.getHSL(xf);a=O.lerp(Aa.h,xf.h,b);var c=O.lerp(Aa.s,xf.s,b);b=O.lerp(Aa.l,xf.l,b);this.setHSL(a,c,b);return this;},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b;},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a;},toJSON:function(){return this.getHex();}});_Object$assign(yc.prototype,{clone:function(){return new this.constructor().copy(this);},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this;}});var Ni=0;Q.prototype=_Object$assign(_Object$create(xa.prototype),{constructor:Q,isMaterial:!0,onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]=c;}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var c=void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.emissiveIntensity&&1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearcoat&&(d.clearcoat=this.clearcoat);void 0!==this.clearcoatRoughness&&(d.clearcoatRoughness=this.clearcoatRoughness);this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(d.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,d.clearcoatNormalScale=this.clearcoatNormalScale.toArray());this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.matcap&&this.matcap.isTexture&&(d.matcap=this.matcap.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.aoMap&&this.aoMap.isTexture&&(d.aoMap=this.aoMap.toJSON(a).uuid,d.aoMapIntensity=this.aoMapIntensity);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalMapType=this.normalMapType,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity,d.refractionRatio=this.refractionRatio,void 0!==this.combine&&(d.combine=this.combine),void 0!==this.envMapIntensity&&(d.envMapIntensity=this.envMapIntensity));this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;d.stencilWrite=this.stencilWrite;d.stencilFunc=this.stencilFunc;d.stencilRef=this.stencilRef;d.stencilMask=this.stencilMask;d.stencilFail=this.stencilFail;d.stencilZFail=this.stencilZFail;d.stencilZPass=this.stencilZPass;this.rotation&&0!==this.rotation&&(d.rotation=this.rotation);!0===this.polygonOffset&&(d.polygonOffset=!0);0!==this.polygonOffsetFactor&&(d.polygonOffsetFactor=this.polygonOffsetFactor);0!==this.polygonOffsetUnits&&(d.polygonOffsetUnits=this.polygonOffsetUnits);this.linewidth&&1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.morphNormals&&(d.morphNormals=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);!1===this.toneMapped&&(d.toneMapped=!1);"{}"!==_JSON$stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.stencilWrite=a.stencilWrite;this.stencilFunc=a.stencilFunc;this.stencilRef=a.stencilRef;this.stencilMask=a.stencilMask;this.stencilFail=a.stencilFail;this.stencilZFail=a.stencilZFail;this.stencilZPass=a.stencilZPass;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.visible=a.visible;this.toneMapped=a.toneMapped;this.userData=JSON.parse(_JSON$stringify(a.userData));this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone();}this.clippingPlanes=c;this.shadowSide=a.shadowSide;return this;},dispose:function(){this.dispatchEvent({type:"dispose"});}});ya.prototype=_Object$create(Q.prototype);ya.prototype.constructor=ya;ya.prototype.isMeshBasicMaterial=!0;ya.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this;};_Object$defineProperty(N.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++;}});_Object$assign(N.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setArray:function(a){if(_Array$isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a;return this;},setDynamic:function(a){this.dynamic=a;return this;},copy:function(a){this.name=a.name;this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this;},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this;},copyArray:function(a){this.array.set(a);return this;},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new J());b[c++]=f.r;b[c++]=f.g;b[c++]=f.b;}return this;},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new v());b[c++]=f.x;b[c++]=f.y;}return this;},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new n());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;}return this;},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new da());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w;}return this;},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},getX:function(a){return this.array[a*this.itemSize];},setX:function(a,b){this.array[a*this.itemSize]=b;return this;},getY:function(a){return this.array[a*this.itemSize+1];},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this;},getZ:function(a){return this.array[a*this.itemSize+2];},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this;},getW:function(a){return this.array[a*this.itemSize+3];},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this;},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this;},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this;},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this;},onUpload:function(a){this.onUploadCallback=a;return this;},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this);},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};}});xd.prototype=_Object$create(N.prototype);xd.prototype.constructor=xd;yd.prototype=_Object$create(N.prototype);yd.prototype.constructor=yd;zd.prototype=_Object$create(N.prototype);zd.prototype.constructor=zd;Ad.prototype=_Object$create(N.prototype);Ad.prototype.constructor=Ad;Tb.prototype=_Object$create(N.prototype);Tb.prototype.constructor=Tb;Bd.prototype=_Object$create(N.prototype);Bd.prototype.constructor=Bd;Ub.prototype=_Object$create(N.prototype);Ub.prototype.constructor=Ub;A.prototype=_Object$create(N.prototype);A.prototype.constructor=A;Cd.prototype=_Object$create(N.prototype);Cd.prototype.constructor=Cd;_Object$assign(dh.prototype,{computeGroups:function(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c};}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b;},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length;if(0<h){var l=[];for(var m=0;m<h;m++)l[m]={name:g[m].name,data:[]};this.morphTargets.position=l;}var k=a.morphNormals,n=k.length;if(0<n){var r=[];for(m=0;m<n;m++)r[m]={name:k[m].name,data:[]};this.morphTargets.normal=r;}var q=a.skinIndices,t=a.skinWeights,y=q.length===c.length,w=t.length===c.length;0<c.length&&0===b.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(m=0;m<b.length;m++){var z=b[m];this.vertices.push(c[z.a],c[z.b],c[z.c]);var x=z.vertexNormals;3===x.length?this.normals.push(x[0],x[1],x[2]):(x=z.normal,this.normals.push(x,x,x));x=z.vertexColors;3===x.length?this.colors.push(x[0],x[1],x[2]):(x=z.color,this.colors.push(x,x,x));!0===e&&(x=d[0][m],void 0!==x?this.uvs.push(x[0],x[1],x[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new v(),new v(),new v())));!0===f&&(x=d[1][m],void 0!==x?this.uvs2.push(x[0],x[1],x[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new v(),new v(),new v())));for(x=0;x<h;x++){var C=g[x].vertices;l[x].data.push(C[z.a],C[z.b],C[z.c]);}for(x=0;x<n;x++)C=k[x].vertexNormals[m],r[x].data.push(C.a,C.b,C.c);y&&this.skinIndices.push(q[z.a],q[z.b],q[z.c]);w&&this.skinWeights.push(t[z.a],t[z.b],t[z.c]);}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this;}});var Oi=1,kb=new P(),Qg=new B(),yf=new n(),rc=new ab(),Rg=new ab(),Za=new n();D.prototype=_Object$assign(_Object$create(xa.prototype),{constructor:D,isBufferGeometry:!0,getIndex:function(){return this.index;},setIndex:function(a){_Array$isArray(a)?this.index=new(65535<eh(a)?Ub:Tb)(a,1):this.index=a;},addAttribute:function(a,b,c){if(!(b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute))return console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new N(b,c));if("index"===a)return console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),this;this.attributes[a]=b;return this;},getAttribute:function(a){return this.attributes[a];},removeAttribute:function(a){delete this.attributes[a];return this;},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0});},clearGroups:function(){this.groups=[];},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b;},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);var c=this.attributes.normal;void 0!==c&&(b=new ta().getNormalMatrix(a),b.applyToBufferAttribute(c),c.needsUpdate=!0);c=this.attributes.tangent;void 0!==c&&(b=new ta().getNormalMatrix(a),b.applyToBufferAttribute(c),c.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this;},rotateX:function(a){kb.makeRotationX(a);this.applyMatrix(kb);return this;},rotateY:function(a){kb.makeRotationY(a);this.applyMatrix(kb);return this;},rotateZ:function(a){kb.makeRotationZ(a);this.applyMatrix(kb);return this;},translate:function(a,b,c){kb.makeTranslation(a,b,c);this.applyMatrix(kb);return this;},scale:function(a,b,c){kb.makeScale(a,b,c);this.applyMatrix(kb);return this;},lookAt:function(a){Qg.lookAt(a);Qg.updateMatrix();this.applyMatrix(Qg.matrix);return this;},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(yf).negate();this.translate(yf.x,yf.y,yf.z);return this;},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new A(3*b.vertices.length,3);var c=new A(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new A(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone());}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this;},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0);}this.addAttribute("position",new A(b,3));return this;},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c;}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this;},fromGeometry:function(a){a.__directGeometry=new dh().fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry);},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",new N(b,3).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",new N(b,3).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",new N(b,3).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",new N(b,2).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",new N(b,2).copyVector2sArray(a.uvs2)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new A(3*g.data.length,3);h.name=g.name;b.push(h.copyVector3sArray(g.data));}this.morphAttributes[c]=b;}0<a.skinIndices.length&&(c=new A(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new A(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this;},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new ab());var a=this.attributes.position,b=this.morphAttributes.position;if(void 0!==a){if(this.boundingBox.setFromBufferAttribute(a),b){a=0;for(var c=b.length;a<c;a++)rc.setFromBufferAttribute(b[a]),this.boundingBox.expandByPoint(rc.min),this.boundingBox.expandByPoint(rc.max);}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new nb());var a=this.attributes.position,b=this.morphAttributes.position;if(a){var c=this.boundingSphere.center;rc.setFromBufferAttribute(a);if(b)for(var d=0,e=b.length;d<e;d++){var f=b[d];Rg.setFromBufferAttribute(f);rc.expandByPoint(Rg.min);rc.expandByPoint(Rg.max);}rc.getCenter(c);var g=0;d=0;for(e=a.count;d<e;d++)Za.fromBufferAttribute(a,d),g=Math.max(g,c.distanceToSquared(Za));if(b)for(d=0,e=b.length;d<e;d++){f=b[d];a=0;for(var h=f.count;a<h;a++)Za.fromBufferAttribute(f,a),g=Math.max(g,c.distanceToSquared(Za));}this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}},computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes;if(b.position){var c=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new N(new Float32Array(c.length),3));else for(var d=b.normal.array,e=0,f=d.length;e<f;e++)d[e]=0;d=b.normal.array;var g=new n(),h=new n(),l=new n(),m=new n(),k=new n();if(a){var u=a.array;e=0;for(f=a.count;e<f;e+=3){a=3*u[e+0];var r=3*u[e+1];var q=3*u[e+2];g.fromArray(c,a);h.fromArray(c,r);l.fromArray(c,q);m.subVectors(l,h);k.subVectors(g,h);m.cross(k);d[a]+=m.x;d[a+1]+=m.y;d[a+2]+=m.z;d[r]+=m.x;d[r+1]+=m.y;d[r+2]+=m.z;d[q]+=m.x;d[q+1]+=m.y;d[q+2]+=m.z;}}else for(e=0,f=c.length;e<f;e+=9)g.fromArray(c,e),h.fromArray(c,e+3),l.fromArray(c,e+6),m.subVectors(l,h),k.subVectors(g,h),m.cross(k),d[e]=m.x,d[e+1]=m.y,d[e+2]=m.z,d[e+3]=m.x,d[e+4]=m.y,d[e+5]=m.z,d[e+6]=m.x,d[e+7]=m.y,d[e+8]=m.z;this.normalizeNormals();b.normal.needsUpdate=!0;}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d]){var e=c[d].array,f=a.attributes[d],g=f.array,h=f.itemSize*b;f=Math.min(g.length,e.length-h);for(var l=0;l<f;l++,h++)e[h]=g[l];}return this;}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);},normalizeNormals:function(){for(var a=this.attributes.normal,b=0,c=a.count;b<c;b++)Za.x=a.getX(b),Za.y=a.getY(b),Za.z=a.getZ(b),Za.normalize(),a.setXYZ(b,Za.x,Za.y,Za.z);},toNonIndexed:function(){function a(a,b){var c=a.array;a=a.itemSize;for(var d=new c.constructor(b.length*a),e,f=0,g=0,h=b.length;g<h;g++){e=b[g]*a;for(var l=0;l<a;l++)d[f++]=c[e++];}return new N(d,a);}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var b=new D(),c=this.index.array,d=this.attributes,e;for(e in d){var f=d[e];f=a(f,c);b.addAttribute(e,f);}var g=this.morphAttributes;for(e in g){var h=[],l=g[e];d=0;for(var m=l.length;d<m;d++)f=l[d],f=a(f,c),h.push(f);b.morphAttributes[e]=h;}c=this.groups;d=0;for(e=c.length;d<e;d++)f=c[d],b.addGroup(f.start,f.count,f.materialIndex);return b;},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);0<_Object$keys(this.userData).length&&(a.userData=this.userData);if(void 0!==this.parameters){var b=this.parameters;for(m in b)void 0!==b[m]&&(a[m]=b[m]);return a;}a.data={attributes:{}};b=this.index;null!==b&&(a.data.index={type:b.array.constructor.name,array:Array.prototype.slice.call(b.array)});var c=this.attributes;for(m in c){b=c[m];var d=b.toJSON();""!==b.name&&(d.name=b.name);a.data.attributes[m]=d;}c={};var e=!1;for(m in this.morphAttributes){for(var f=this.morphAttributes[m],g=[],h=0,l=f.length;h<l;h++)b=f[h],d=b.toJSON(),""!==b.name&&(d.name=b.name),g.push(d);0<g.length&&(c[m]=g,e=!0);}e&&(a.data.morphAttributes=c);var m=this.groups;0<m.length&&(a.data.groups=JSON.parse(_JSON$stringify(m)));m=this.boundingSphere;null!==m&&(a.data.boundingSphere={center:m.center.toArray(),radius:m.radius});return a;},clone:function(){return new D().copy(this);},copy:function(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c)this.addAttribute(g,c[g].clone());var d=a.morphAttributes;for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++)e.push(f[c].clone());this.morphAttributes[g]=e;}var g=a.groups;c=0;for(b=g.length;c<b;c++)d=g[c],this.addGroup(d.start,d.count,d.materialIndex);g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;this.userData=a.userData;return this;},dispose:function(){this.dispatchEvent({type:"dispose"});}});var ni=new P(),sc=new Sb(),Sg=new nb(),Vb=new n(),Wb=new n(),Xb=new n(),gh=new n(),hh=new n(),ih=new n(),Vf=new n(),Wf=new n(),Xf=new n(),zc=new v(),Ac=new v(),Bc=new v(),Dd=new n(),De=new n();ra.prototype=_Object$assign(_Object$create(B.prototype),{constructor:ra,isMesh:!0,setDrawMode:function(a){this.drawMode=a;},copy:function(a){B.prototype.copy.call(this,a);this.drawMode=a.drawMode;void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=_Object$assign({},a.morphTargetDictionary));return this;},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=_Object$keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a;}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");},raycast:function(a,b){var c=this.geometry,d=this.material,e=this.matrixWorld;if(void 0!==d&&(null===c.boundingSphere&&c.computeBoundingSphere(),Sg.copy(c.boundingSphere),Sg.applyMatrix4(e),!1!==a.ray.intersectsSphere(Sg)&&(ni.getInverse(e),sc.copy(a.ray).applyMatrix4(ni),null===c.boundingBox||!1!==sc.intersectsBox(c.boundingBox))))if(c.isBufferGeometry){var f=c.index;e=c.attributes.position;var g=c.morphAttributes.position,h=c.attributes.uv,l=c.attributes.uv2,m=c.groups,k=c.drawRange,n,r;if(null!==f){if(_Array$isArray(d)){var q=0;for(n=m.length;q<n;q++){var t=m[q];var y=d[t.materialIndex];var w=Math.max(t.start,k.start);for(r=c=Math.min(t.start+t.count,k.start+k.count);w<r;w+=3){c=f.getX(w);var z=f.getX(w+1);var x=f.getX(w+2);if(c=Ee(this,y,a,sc,e,g,h,l,c,z,x))c.faceIndex=Math.floor(w/3),c.face.materialIndex=t.materialIndex,b.push(c);}}}else for(w=Math.max(0,k.start),c=Math.min(f.count,k.start+k.count),q=w,n=c;q<n;q+=3){if(c=f.getX(q),z=f.getX(q+1),x=f.getX(q+2),c=Ee(this,d,a,sc,e,g,h,l,c,z,x))c.faceIndex=Math.floor(q/3),b.push(c);}}else if(void 0!==e)if(_Array$isArray(d))for(q=0,n=m.length;q<n;q++)for(t=m[q],y=d[t.materialIndex],w=Math.max(t.start,k.start),r=c=Math.min(t.start+t.count,k.start+k.count);w<r;w+=3){if(c=w,z=w+1,x=w+2,c=Ee(this,y,a,sc,e,g,h,l,c,z,x))c.faceIndex=Math.floor(w/3),c.face.materialIndex=t.materialIndex,b.push(c);}else for(w=Math.max(0,k.start),c=Math.min(e.count,k.start+k.count),q=w,n=c;q<n;q+=3)if(c=q,z=q+1,x=q+2,c=Ee(this,d,a,sc,e,g,h,l,c,z,x))c.faceIndex=Math.floor(q/3),b.push(c);}else if(c.isGeometry)for(e=_Array$isArray(d),g=c.vertices,h=c.faces,c=c.faceVertexUvs[0],0<c.length&&(f=c),q=0,n=h.length;q<n;q++)if(t=h[q],c=e?d[t.materialIndex]:d,void 0!==c&&(l=g[t.a],m=g[t.b],k=g[t.c],c=fh(this,c,a,sc,l,m,k,Dd)))f&&f[q]&&(y=f[q],zc.copy(y[0]),Ac.copy(y[1]),Bc.copy(y[2]),c.uv=ia.getUV(Dd,l,m,k,zc,Ac,Bc,new v())),c.face=t,c.faceIndex=q,b.push(c);},clone:function(){return new this.constructor(this.geometry,this.material).copy(this);}});var Pi=0,lb=new P(),Tg=new B(),zf=new n();G.prototype=_Object$assign(_Object$create(xa.prototype),{constructor:G,isGeometry:!0,applyMatrix:function(a){for(var b=new ta().getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize();}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this;},rotateX:function(a){lb.makeRotationX(a);this.applyMatrix(lb);return this;},rotateY:function(a){lb.makeRotationY(a);this.applyMatrix(lb);return this;},rotateZ:function(a){lb.makeRotationZ(a);this.applyMatrix(lb);return this;},translate:function(a,b,c){lb.makeTranslation(a,b,c);this.applyMatrix(lb);return this;},scale:function(a,b,c){lb.makeScale(a,b,c);this.applyMatrix(lb);return this;},lookAt:function(a){Tg.lookAt(a);Tg.updateMatrix();this.applyMatrix(Tg.matrix);return this;},fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0===h?[]:[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()],m=void 0===g?[]:[new n().fromArray(g,3*a),new n().fromArray(g,3*b),new n().fromArray(g,3*d)];e=new yc(a,b,d,m,f,e);c.faces.push(e);void 0!==l&&c.faceVertexUvs[0].push([new v().fromArray(l,2*a),new v().fromArray(l,2*b),new v().fromArray(l,2*d)]);void 0!==k&&c.faceVertexUvs[1].push([new v().fromArray(k,2*a),new v().fromArray(k,2*b),new v().fromArray(k,2*d)]);}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,l=void 0!==e.uv?e.uv.array:void 0,k=void 0!==e.uv2?e.uv2.array:void 0;void 0!==k&&(this.faceVertexUvs[1]=[]);for(e=0;e<f.length;e+=3)c.vertices.push(new n().fromArray(f,e)),void 0!==h&&c.colors.push(new J().fromArray(h,e));var p=a.groups;if(0<p.length)for(e=0;e<p.length;e++){f=p[e];var u=f.start,r=u;for(u+=f.count;r<u;r+=3)void 0!==d?b(d[r],d[r+1],d[r+2],f.materialIndex):b(r,r+1,r+2,f.materialIndex);}else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this;},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(zf).negate();this.translate(zf.x,zf.y,zf.z);return this;},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new P();c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this;},computeFaceNormals:function(){for(var a=new n(),b=new n(),c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a);}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++)c[d]=new n();if(a){var e=new n(),f=new n();a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var h=this.vertices[b.b];var l=this.vertices[b.c];e.subVectors(l,h);f.subVectors(g,h);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e);}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++)b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);d=0;for(b=this.vertices.length;d<b;d++)c[d].normalize();a=0;for(d=this.faces.length;a<d;a++)b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0);},computeFlatVertexNormals:function(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone());}0<this.faces.length&&(this.normalsNeedUpdate=!0);},computeMorphNormals:function(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):d.__originalVertexNormals[e]=d.vertexNormals[e].clone();}var f=new G();f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var h=new n();var l={a:new n(),b:new n(),c:new n()};d.push(h);g.push(l);}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],h=g.faceNormals[c],l=g.vertexNormals[c],h.copy(d.normal),l.a.copy(d.vertexNormals[0]),l.b.copy(d.vertexNormals[1]),l.c.copy(d.vertexNormals[2]);}c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals;},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new ab());this.boundingBox.setFromPoints(this.vertices);},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new nb());this.boundingSphere.setFromPoints(this.vertices);},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,l=a.faces,k=this.colors,n=a.colors;void 0===c&&(c=0);void 0!==b&&(d=new ta().getNormalMatrix(b));for(var u=0,r=g.length;u<r;u++){var q=g[u].clone();void 0!==b&&q.applyMatrix4(b);f.push(q);}u=0;for(r=n.length;u<r;u++)k.push(n[u].clone());u=0;for(r=l.length;u<r;u++){g=l[u];var t=g.vertexNormals;n=g.vertexColors;k=new yc(g.a+e,g.b+e,g.c+e);k.normal.copy(g.normal);void 0!==d&&k.normal.applyMatrix3(d).normalize();b=0;for(f=t.length;b<f;b++)q=t[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),k.vertexNormals.push(q);k.color.copy(g.color);b=0;for(f=n.length;b<f;b++)q=n[b],k.vertexColors.push(q.clone());k.materialIndex=g.materialIndex+c;h.push(k);}u=0;for(r=a.faceVertexUvs.length;u<r;u++)for(c=a.faceVertexUvs[u],void 0===this.faceVertexUvs[u]&&(this.faceVertexUvs[u]=[]),b=0,f=c.length;b<f;b++){d=c[b];e=[];h=0;for(l=d.length;h<l;h++)e.push(d[h].clone());this.faceVertexUvs[u].push(e);}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a);},mergeVertices:function(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]];}a=[];f=0;for(e=this.faces.length;f<e;f++)for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++)if(d[g]===d[(g+1)%3]){a.push(f);break;}for(f=a.length-1;0<=f;f--)for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++)this.faceVertexUvs[c].splice(d,1);f=this.vertices.length-b.length;this.vertices=b;return f;},setFromPoints:function(a){this.vertices=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new n(d.x,d.y,d.z||0));}return this;},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex;});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h]);}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g);},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b);}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==k[b])return k[b];k[b]=l.length/3;l.push(a.x,a.y,a.z);return k[b];}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==u[b])return u[b];u[b]=n.length;n.push(a.getHex());return u[b];}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==q[b])return q[b];q[b]=r.length/2;r.push(a.x,a.y);return q[b];}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e;}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z);}h=[];var l=[],k={},n=[],u={},r=[],q={};for(g=0;g<this.faces.length;g++){var t=this.faces[g],y=void 0!==this.faceVertexUvs[0][g],w=0<t.normal.length(),v=0<t.vertexNormals.length,x=1!==t.color.r||1!==t.color.g||1!==t.color.b,C=0<t.vertexColors.length,A=0;A=a(A,0,0);A=a(A,1,!0);A=a(A,2,!1);A=a(A,3,y);A=a(A,4,w);A=a(A,5,v);A=a(A,6,x);A=a(A,7,C);h.push(A);h.push(t.a,t.b,t.c);h.push(t.materialIndex);y&&(y=this.faceVertexUvs[0][g],h.push(d(y[0]),d(y[1]),d(y[2])));w&&h.push(b(t.normal));v&&(w=t.vertexNormals,h.push(b(w[0]),b(w[1]),b(w[2])));x&&h.push(c(t.color));C&&(t=t.vertexColors,h.push(c(t[0]),c(t[1]),c(t[2])));}e.data={};e.data.vertices=f;e.data.normals=l;0<n.length&&(e.data.colors=n);0<r.length&&(e.data.uvs=[r]);e.data.faces=h;return e;},clone:function(){return new G().copy(this);},copy:function(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++)this.vertices.push(e[f].clone());e=a.colors;f=0;for(b=e.length;f<b;f++)this.colors.push(e[f].clone());e=a.faces;f=0;for(b=e.length;f<b;f++)this.faces.push(e[f].clone());f=0;for(b=a.faceVertexUvs.length;f<b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var h=g[e],l=[];var k=0;for(d=h.length;k<d;k++)l.push(h[k].clone());this.faceVertexUvs[f].push(l);}}k=a.morphTargets;f=0;for(b=k.length;f<b;f++){d={};d.name=k[f].name;if(void 0!==k[f].vertices)for(d.vertices=[],e=0,c=k[f].vertices.length;e<c;e++)d.vertices.push(k[f].vertices[e].clone());if(void 0!==k[f].normals)for(d.normals=[],e=0,c=k[f].normals.length;e<c;e++)d.normals.push(k[f].normals[e].clone());this.morphTargets.push(d);}k=a.morphNormals;f=0;for(b=k.length;f<b;f++){d={};if(void 0!==k[f].vertexNormals)for(d.vertexNormals=[],e=0,c=k[f].vertexNormals.length;e<c;e++)g=k[f].vertexNormals[e],h={},h.a=g.a.clone(),h.b=g.b.clone(),h.c=g.c.clone(),d.vertexNormals.push(h);if(void 0!==k[f].faceNormals)for(d.faceNormals=[],e=0,c=k[f].faceNormals.length;e<c;e++)d.faceNormals.push(k[f].faceNormals[e].clone());this.morphNormals.push(d);}e=a.skinWeights;f=0;for(b=e.length;f<b;f++)this.skinWeights.push(e[f].clone());e=a.skinIndices;f=0;for(b=e.length;f<b;f++)this.skinIndices.push(e[f].clone());e=a.lineDistances;f=0;for(b=e.length;f<b;f++)this.lineDistances.push(e[f]);f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this;},dispose:function(){this.dispatchEvent({type:"dispose"});}});Cc.prototype=_Object$create(G.prototype);Cc.prototype.constructor=Cc;Bb.prototype=_Object$create(D.prototype);Bb.prototype.constructor=Bb;var pk={clone:Yb,merge:ka};va.prototype=_Object$create(Q.prototype);va.prototype.constructor=va;va.prototype.isShaderMaterial=!0;va.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Yb(a.uniforms);this.defines=_Object$assign({},a.defines);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this;};va.prototype.toJSON=function(a){var b=Q.prototype.toJSON.call(this,a);b.uniforms={};for(var c in this.uniforms){var d=this.uniforms[c].value;b.uniforms[c]=d&&d.isTexture?{type:"t",value:d.toJSON(a).uuid}:d&&d.isColor?{type:"c",value:d.getHex()}:d&&d.isVector2?{type:"v2",value:d.toArray()}:d&&d.isVector3?{type:"v3",value:d.toArray()}:d&&d.isVector4?{type:"v4",value:d.toArray()}:d&&d.isMatrix3?{type:"m3",value:d.toArray()}:d&&d.isMatrix4?{type:"m4",value:d.toArray()}:{value:d};}0<_Object$keys(this.defines).length&&(b.defines=this.defines);b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader;a={};for(var e in this.extensions)!0===this.extensions[e]&&(a[e]=!0);0<_Object$keys(a).length&&(b.extensions=a);return b;};bb.prototype=_Object$assign(_Object$create(B.prototype),{constructor:bb,isCamera:!0,copy:function(a,b){B.prototype.copy.call(this,a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);this.projectionMatrixInverse.copy(a.projectionMatrixInverse);return this;},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new n());this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize();},updateMatrixWorld:function(a){B.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld);},clone:function(){return new this.constructor().copy(this);}});la.prototype=_Object$assign(_Object$create(bb.prototype),{constructor:la,isPerspectiveCamera:!0,copy:function(a,b){bb.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:_Object$assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this;},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*O.RAD2DEG*Math.atan(a);this.updateProjectionMatrix();},getFocalLength:function(){var a=Math.tan(.5*O.DEG2RAD*this.fov);return .5*this.getFilmHeight()/a;},getEffectiveFOV:function(){return 2*O.RAD2DEG*Math.atan(Math.tan(.5*O.DEG2RAD*this.fov)/this.zoom);},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1);},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1);},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix();},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix();},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*O.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,h=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/h;d*=f.width/g;c*=f.height/h;}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=_Object$assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a;}});Dc.prototype=_Object$create(B.prototype);Dc.prototype.constructor=Dc;Cb.prototype=_Object$create(Ka.prototype);Cb.prototype.constructor=Cb;Cb.prototype.isWebGLRenderTargetCube=!0;Cb.prototype.fromEquirectangularTexture=function(a,b){this.texture.type=b.type;this.texture.format=b.format;this.texture.encoding=b.encoding;var c=new wd(),d=new va({type:"CubemapFromEquirect",uniforms:Yb({tEquirect:{value:null}}),vertexShader:"varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",fragmentShader:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",side:1,blending:0});d.uniforms.tEquirect.value=b;b=new ra(new Bb(5,5,5),d);c.add(b);d=new Dc(1,10,1);d.renderTarget=this;d.renderTarget.texture.name="CubeCameraTexture";d.update(a,c);b.geometry.dispose();b.material.dispose();return this;};Zb.prototype=_Object$create(ba.prototype);Zb.prototype.constructor=Zb;Zb.prototype.isDataTexture=!0;var Ug=new n(),qk=new n(),rk=new ta();_Object$assign(cb.prototype,{isPlane:!0,set:function(a,b){this.normal.copy(a);this.constant=b;return this;},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this;},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this;},setFromCoplanarPoints:function(a,b,c){b=Ug.subVectors(c,b).cross(qk.subVectors(a,b)).normalize();this.setFromNormalAndCoplanarPoint(b,a);return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this;},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this;},negate:function(){this.constant*=-1;this.normal.negate();return this;},distanceToPoint:function(a){return this.normal.dot(a)+this.constant;},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius;},projectPoint:function(a,b){void 0===b&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new n());return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a);},intersectLine:function(a,b){void 0===b&&(console.warn("THREE.Plane: .intersectLine() target is now required"),b=new n());var c=a.delta(Ug),d=this.normal.dot(c);if(0===d){if(0===this.distanceToPoint(a.start))return b.copy(a.start);}else if(d=-(a.start.dot(this.normal)+this.constant)/d,!(0>d||1<d))return b.copy(c).multiplyScalar(d).add(a.start);},intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b;},intersectsBox:function(a){return a.intersectsPlane(this);},intersectsSphere:function(a){return a.intersectsPlane(this);},coplanarPoint:function(a){void 0===a&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new n());return a.copy(this.normal).multiplyScalar(-this.constant);},applyMatrix4:function(a,b){b=b||rk.getNormalMatrix(a);a=this.coplanarPoint(Ug).applyMatrix4(a);b=this.normal.applyMatrix3(b).normalize();this.constant=-a.dot(b);return this;},translate:function(a){this.constant-=a.dot(this.normal);return this;},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant;}});var td=new nb(),Af=new n();_Object$assign(Ed.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this;},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],l=c[6],k=c[7],n=c[8],u=c[9],r=c[10],q=c[11],t=c[12],y=c[13],w=c[14];c=c[15];b[0].setComponents(f-a,k-g,q-n,c-t).normalize();b[1].setComponents(f+a,k+g,q+n,c+t).normalize();b[2].setComponents(f+d,k+h,q+u,c+y).normalize();b[3].setComponents(f-d,k-h,q-u,c-y).normalize();b[4].setComponents(f-e,k-l,q-r,c-w).normalize();b[5].setComponents(f+e,k+l,q+r,c+w).normalize();return this;},intersectsObject:function(a){var b=a.geometry;null===b.boundingSphere&&b.computeBoundingSphere();td.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);return this.intersectsSphere(td);},intersectsSprite:function(a){td.center.set(0,0,0);td.radius=.7071067811865476;td.applyMatrix4(a.matrixWorld);return this.intersectsSphere(td);},intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0;},intersectsBox:function(a){for(var b=this.planes,c=0;6>c;c++){var d=b[c];Af.x=0<d.normal.x?a.max.x:a.min.x;Af.y=0<d.normal.y?a.max.y:a.min.y;Af.z=0<d.normal.z?a.max.z:a.min.z;if(0>d.distanceToPoint(Af))return!1;}return!0;},containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0;}});var K={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",lights_pars_begin:"uniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvec3 NfromST = cross( S, T );\n\t\t\tif( dot( NfromST, N ) > 0.0 ) {\n\t\t\t\tS *= -1.0;\n\t\t\t\tT *= -1.0;\n\t\t\t}\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif",clearcoat_normalmap_pars_fragment:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",uv_pars_fragment:"#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},H={common:{diffuse:{value:new J(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ta()},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new v(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new J(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new ta()}},sprite:{diffuse:{value:new J(15658734)},opacity:{value:1},center:{value:new v(.5,.5)},rotation:{value:0},map:{value:null},uvTransform:{value:new ta()}}},db={basic:{uniforms:ka([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:ka([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.fog,H.lights,{emissive:{value:new J(0)}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:ka([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:ka([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new J(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},matcap:{uniforms:ka([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:ka([H.points,H.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:ka([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:ka([H.common,H.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:ka([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:K.normal_vert,fragmentShader:K.normal_frag},sprite:{uniforms:ka([H.sprite,H.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new ta()},t2D:{value:null}},vertexShader:K.background_vert,fragmentShader:K.background_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distanceRGBA:{uniforms:ka([H.common,H.displacementmap,{referencePosition:{value:new n()},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:K.distanceRGBA_vert,fragmentShader:K.distanceRGBA_frag},shadow:{uniforms:ka([H.lights,H.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};db.physical={uniforms:ka([db.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new J(0)},clearcoatNormalScale:{value:new v(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};Fd.prototype=_Object$create(G.prototype);Fd.prototype.constructor=Fd;$b.prototype=_Object$create(D.prototype);$b.prototype.constructor=$b;pb.prototype=_Object$create(ba.prototype);pb.prototype.constructor=pb;pb.prototype.isCubeTexture=!0;_Object$defineProperty(pb.prototype,"images",{get:function(){return this.image;},set:function(a){this.image=a;}});Ec.prototype=_Object$create(ba.prototype);Ec.prototype.constructor=Ec;Ec.prototype.isDataTexture2DArray=!0;Fc.prototype=_Object$create(ba.prototype);Fc.prototype.constructor=Fc;Fc.prototype.isDataTexture3D=!0;var qh=new ba(),kj=new Ec(),mj=new Fc(),rh=new pb(),kh=[],mh=[],ph=new Float32Array(16),oh=new Float32Array(9),nh=new Float32Array(4);sh.prototype.updateCache=function(a){var b=this.cache;a instanceof Float32Array&&b.length!==a.length&&(this.cache=new Float32Array(a.length));Ga(b,a);};th.prototype.setValue=function(a,b,c){for(var d=this.seq,e=0,f=d.length;e!==f;++e){var g=d[e];g.setValue(a,b[g.id],c);}};var $f=/([\w\d_]+)(\])?(\[|\.)?/g;Db.prototype.setValue=function(a,b,c,d){b=this.map[b];void 0!==b&&b.setValue(a,c,d);};Db.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b);};Db.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d);}};Db.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f);}return c;};var Nj=0,Wj=0;Eb.prototype=_Object$create(Q.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isMeshDepthMaterial=!0;Eb.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this;};Fb.prototype=_Object$create(Q.prototype);Fb.prototype.constructor=Fb;Fb.prototype.isMeshDistanceMaterial=!0;Fb.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this;};Hc.prototype=_Object$assign(_Object$create(B.prototype),{constructor:Hc,isGroup:!0});Id.prototype=_Object$assign(_Object$create(la.prototype),{constructor:Id,isArrayCamera:!0});var Gh=new n(),Hh=new n();_Object$assign(cg.prototype,xa.prototype);_Object$assign(Ih.prototype,xa.prototype);_Object$assign(Je.prototype,{isFogExp2:!0,clone:function(){return new Je(this.color,this.density);},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density};}});_Object$assign(Ke.prototype,{isFog:!0,clone:function(){return new Ke(this.color,this.near,this.far);},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far};}});_Object$defineProperty(ac.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++;}});_Object$assign(ac.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setArray:function(a){if(_Array$isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.stride:0;this.array=a;return this;},setDynamic:function(a){this.dynamic=a;return this;},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this;},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this;},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},clone:function(){return new this.constructor().copy(this);},onUpload:function(a){this.onUploadCallback=a;return this;}});_Object$defineProperties(Jd.prototype,{count:{get:function(){return this.data.count;}},array:{get:function(){return this.data.array;}}});_Object$assign(Jd.prototype,{isInterleavedBufferAttribute:!0,setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this;},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this;},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this;},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this;},getX:function(a){return this.data.array[a*this.data.stride+this.offset];},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1];},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2];},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3];},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this;},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this;},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this;}});Hb.prototype=_Object$create(Q.prototype);Hb.prototype.constructor=Hb;Hb.prototype.isSpriteMaterial=!0;Hb.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;this.sizeAttenuation=a.sizeAttenuation;return this;};var Ic,ye=new n(),ud=new n(),vd=new n(),Jc=new v(),Ld=new v(),Kh=new P(),Bf=new n(),ze=new n(),Cf=new n(),oi=new v(),Vg=new v(),pi=new v();Kd.prototype=_Object$assign(_Object$create(B.prototype),{constructor:Kd,isSprite:!0,raycast:function(a,b){null===a.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');ud.setFromMatrixScale(this.matrixWorld);Kh.copy(a.camera.matrixWorld);this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse,this.matrixWorld);vd.setFromMatrixPosition(this.modelViewMatrix);a.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&ud.multiplyScalar(-vd.z);var c=this.material.rotation;if(0!==c){var d=Math.cos(c);var e=Math.sin(c);}c=this.center;Le(Bf.set(-.5,-.5,0),vd,c,ud,e,d);Le(ze.set(.5,-.5,0),vd,c,ud,e,d);Le(Cf.set(.5,.5,0),vd,c,ud,e,d);oi.set(0,0);Vg.set(1,0);pi.set(1,1);var f=a.ray.intersectTriangle(Bf,ze,Cf,!1,ye);if(null===f&&(Le(ze.set(-.5,.5,0),vd,c,ud,e,d),Vg.set(0,1),f=a.ray.intersectTriangle(Bf,Cf,ze,!1,ye),null===f))return;e=a.ray.origin.distanceTo(ye);e<a.near||e>a.far||b.push({distance:e,point:ye.clone(),uv:ia.getUV(ye,Bf,ze,Cf,oi,Vg,pi,new v()),face:null,object:this});},clone:function(){return new this.constructor(this.material).copy(this);},copy:function(a){B.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this;}});var Df=new n(),qi=new n();Md.prototype=_Object$assign(_Object$create(B.prototype),{constructor:Md,isLOD:!0,copy:function(a){B.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance);}return this;},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a);return this;},getObjectForDistance:function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object;},raycast:function(a,b){Df.setFromMatrixPosition(this.matrixWorld);var c=a.ray.origin.distanceTo(Df);this.getObjectForDistance(c).raycast(a,b);},update:function(a){var b=this.levels;if(1<b.length){Df.setFromMatrixPosition(a.matrixWorld);qi.setFromMatrixPosition(this.matrixWorld);a=Df.distanceTo(qi);b[0].object.visible=!0;for(var c=1,d=b.length;c<d;c++)if(a>=b[c].distance)b[c-1].object.visible=!1,b[c].object.visible=!0;else break;for(;c<d;c++)b[c].object.visible=!1;}},toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance});}return a;}});Nd.prototype=_Object$assign(_Object$create(ra.prototype),{constructor:Nd,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b);},pose:function(){this.skeleton.pose();},normalizeSkinWeights:function(){for(var a=new da(),b=this.geometry.attributes.skinWeight,c=0,d=b.count;c<d;c++){a.x=b.getX(c);a.y=b.getY(c);a.z=b.getZ(c);a.w=b.getW(c);var e=1/a.manhattanLength();Infinity!==e?a.multiplyScalar(e):a.set(1,0,0,0);b.setXYZW(c,a.x,a.y,a.z,a.w);}},updateMatrixWorld:function(a){ra.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode);},clone:function(){return new this.constructor(this.geometry,this.material).copy(this);}});var ri=new P(),sk=new P();_Object$assign(Me.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new P();this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c);}},pose:function(){var a,b;var c=0;for(b=this.bones.length;c<b;c++)(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);c=0;for(b=this.bones.length;c<b;c++)if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale);},update:function(){for(var a=this.bones,b=this.boneInverses,c=this.boneMatrices,d=this.boneTexture,e=0,f=a.length;e<f;e++)ri.multiplyMatrices(a[e]?a[e].matrixWorld:sk,b[e]),ri.toArray(c,16*e);void 0!==d&&(d.needsUpdate=!0);},clone:function(){return new Me(this.bones,this.boneInverses);},getBoneByName:function(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d;}}});eg.prototype=_Object$assign(_Object$create(B.prototype),{constructor:eg,isBone:!0});Y.prototype=_Object$create(Q.prototype);Y.prototype.constructor=Y;Y.prototype.isLineBasicMaterial=!0;Y.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this;};var si=new n(),ti=new n(),ui=new P(),Ef=new Sb(),Ae=new nb();ca.prototype=_Object$assign(_Object$create(B.prototype),{constructor:ca,isLine:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry){if(null===a.index){for(var b=a.attributes.position,c=[0],d=1,e=b.count;d<e;d++)si.fromBufferAttribute(b,d-1),ti.fromBufferAttribute(b,d),c[d]=c[d-1],c[d]+=si.distanceTo(ti);a.addAttribute("lineDistance",new A(c,1));}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");}else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,c[0]=0,d=1,e=b.length;d<e;d++)c[d]=c[d-1],c[d]+=b[d-1].distanceTo(b[d]);return this;},raycast:function(a,b){var c=a.linePrecision,d=this.geometry,e=this.matrixWorld;null===d.boundingSphere&&d.computeBoundingSphere();Ae.copy(d.boundingSphere);Ae.applyMatrix4(e);Ae.radius+=c;if(!1!==a.ray.intersectsSphere(Ae)){ui.getInverse(e);Ef.copy(a.ray).applyMatrix4(ui);c/=(this.scale.x+this.scale.y+this.scale.z)/3;c*=c;var f=new n(),g=new n();e=new n();var h=new n(),l=this&&this.isLineSegments?2:1;if(d.isBufferGeometry){var k=d.index,p=d.attributes.position.array;if(null!==k){k=k.array;d=0;for(var u=k.length-1;d<u;d+=l){var r=k[d+1];f.fromArray(p,3*k[d]);g.fromArray(p,3*r);r=Ef.distanceSqToSegment(f,g,h,e);r>c||(h.applyMatrix4(this.matrixWorld),r=a.ray.origin.distanceTo(h),r<a.near||r>a.far||b.push({distance:r,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}));}}else for(d=0,u=p.length/3-1;d<u;d+=l)f.fromArray(p,3*d),g.fromArray(p,3*d+3),r=Ef.distanceSqToSegment(f,g,h,e),r>c||(h.applyMatrix4(this.matrixWorld),r=a.ray.origin.distanceTo(h),r<a.near||r>a.far||b.push({distance:r,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}));}else if(d.isGeometry)for(f=d.vertices,g=f.length,d=0;d<g-1;d+=l)r=Ef.distanceSqToSegment(f[d],f[d+1],h,e),r>c||(h.applyMatrix4(this.matrixWorld),r=a.ray.origin.distanceTo(h),r<a.near||r>a.far||b.push({distance:r,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}));}},clone:function(){return new this.constructor(this.geometry,this.material).copy(this);}});var Ff=new n(),Gf=new n();R.prototype=_Object$assign(_Object$create(ca.prototype),{constructor:R,isLineSegments:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry){if(null===a.index){for(var b=a.attributes.position,c=[],d=0,e=b.count;d<e;d+=2)Ff.fromBufferAttribute(b,d),Gf.fromBufferAttribute(b,d+1),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Ff.distanceTo(Gf);a.addAttribute("lineDistance",new A(c,1));}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");}else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,d=0,e=b.length;d<e;d+=2)Ff.copy(b[d]),Gf.copy(b[d+1]),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Ff.distanceTo(Gf);return this;}});Ne.prototype=_Object$assign(_Object$create(ca.prototype),{constructor:Ne,isLineLoop:!0});Qa.prototype=_Object$create(Q.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isPointsMaterial=!0;Qa.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.morphTargets=a.morphTargets;return this;};var vi=new P(),gg=new Sb(),Be=new nb(),Hf=new n();Kc.prototype=_Object$assign(_Object$create(B.prototype),{constructor:Kc,isPoints:!0,raycast:function(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Points.threshold;null===c.boundingSphere&&c.computeBoundingSphere();Be.copy(c.boundingSphere);Be.applyMatrix4(d);Be.radius+=e;if(!1!==a.ray.intersectsSphere(Be))if(vi.getInverse(d),gg.copy(a.ray).applyMatrix4(vi),e/=(this.scale.x+this.scale.y+this.scale.z)/3,e*=e,c.isBufferGeometry){var f=c.index;c=c.attributes.position.array;if(null!==f){var g=f.array;f=0;for(var h=g.length;f<h;f++){var l=g[f];Hf.fromArray(c,3*l);fg(Hf,l,e,d,a,b,this);}}else for(f=0,g=c.length/3;f<g;f++)Hf.fromArray(c,3*f),fg(Hf,f,e,d,a,b,this);}else for(c=c.vertices,f=0,g=c.length;f<g;f++)fg(c[f],f,e,d,a,b,this);},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=_Object$keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a;}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");},clone:function(){return new this.constructor(this.geometry,this.material).copy(this);}});hg.prototype=_Object$assign(_Object$create(ba.prototype),{constructor:hg,isVideoTexture:!0,update:function(){var a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0);}});Lc.prototype=_Object$create(ba.prototype);Lc.prototype.constructor=Lc;Lc.prototype.isCompressedTexture=!0;Od.prototype=_Object$create(ba.prototype);Od.prototype.constructor=Od;Od.prototype.isCanvasTexture=!0;Pd.prototype=_Object$create(ba.prototype);Pd.prototype.constructor=Pd;Pd.prototype.isDepthTexture=!0;Mc.prototype=_Object$create(D.prototype);Mc.prototype.constructor=Mc;Qd.prototype=_Object$create(G.prototype);Qd.prototype.constructor=Qd;Nc.prototype=_Object$create(D.prototype);Nc.prototype.constructor=Nc;Rd.prototype=_Object$create(G.prototype);Rd.prototype.constructor=Rd;pa.prototype=_Object$create(D.prototype);pa.prototype.constructor=pa;Sd.prototype=_Object$create(G.prototype);Sd.prototype.constructor=Sd;Oc.prototype=_Object$create(pa.prototype);Oc.prototype.constructor=Oc;Td.prototype=_Object$create(G.prototype);Td.prototype.constructor=Td;bc.prototype=_Object$create(pa.prototype);bc.prototype.constructor=bc;Ud.prototype=_Object$create(G.prototype);Ud.prototype.constructor=Ud;Pc.prototype=_Object$create(pa.prototype);Pc.prototype.constructor=Pc;Vd.prototype=_Object$create(G.prototype);Vd.prototype.constructor=Vd;Qc.prototype=_Object$create(pa.prototype);Qc.prototype.constructor=Qc;Wd.prototype=_Object$create(G.prototype);Wd.prototype.constructor=Wd;cc.prototype=_Object$create(D.prototype);cc.prototype.constructor=cc;cc.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);a.path=this.parameters.path.toJSON();return a;};Xd.prototype=_Object$create(G.prototype);Xd.prototype.constructor=Xd;Rc.prototype=_Object$create(D.prototype);Rc.prototype.constructor=Rc;Yd.prototype=_Object$create(G.prototype);Yd.prototype.constructor=Yd;Sc.prototype=_Object$create(D.prototype);Sc.prototype.constructor=Sc;var tk={triangulate:function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=Lh(a,0,e,c,!0),g=[];if(!f||f.next===f.prev)return g;var h;if(d){var l=c;d=[];var k;var n=0;for(k=b.length;n<k;n++){var u=b[n]*l;var r=n<k-1?b[n+1]*l:a.length;u=Lh(a,u,r,l,!1);u===u.next&&(u.steiner=!0);d.push(dk(u));}d.sort(bk);for(n=0;n<d.length;n++){b=d[n];l=f;if(l=ck(b,l))b=Oh(l,b),$d(b,b.next);f=$d(f,f.next);}}if(a.length>80*c){var q=h=a[0];var t=d=a[1];for(l=c;l<e;l+=c)n=a[l],b=a[l+1],n<q&&(q=n),b<t&&(t=b),n>h&&(h=n),b>d&&(d=b);h=Math.max(h-q,d-t);h=0!==h?1/h:0;}ae(f,g,c,q,t,h);return g;}},qb={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return .5*c;},isClockWise:function(a){return 0>qb.area(a);},triangulateShape:function(a,b){var c=[],d=[],e=[];Ph(a);Qh(c,a);var f=a.length;b.forEach(Ph);for(a=0;a<b.length;a++)d.push(f),f+=b[a].length,Qh(c,b[a]);b=tk.triangulate(c,d);for(a=0;a<b.length;a+=3)e.push(b.slice(a,a+3));return e;}};ec.prototype=_Object$create(G.prototype);ec.prototype.constructor=ec;ec.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);return Rh(this.parameters.shapes,this.parameters.options,a);};eb.prototype=_Object$create(D.prototype);eb.prototype.constructor=eb;eb.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);return Rh(this.parameters.shapes,this.parameters.options,a);};var ek={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new v(b[3*c],b[3*c+1]),new v(a,d),new v(f,e)];},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],l=b[3*d+1];d=b[3*d+2];var k=b[3*e],n=b[3*e+1];e=b[3*e+2];var u=b[3*f],r=b[3*f+1];b=b[3*f+2];return .01>Math.abs(g-l)?[new v(a,1-c),new v(h,1-d),new v(k,1-e),new v(u,1-b)]:[new v(g,1-c),new v(l,1-d),new v(n,1-e),new v(r,1-b)];}};ce.prototype=_Object$create(G.prototype);ce.prototype.constructor=ce;Uc.prototype=_Object$create(eb.prototype);Uc.prototype.constructor=Uc;de.prototype=_Object$create(G.prototype);de.prototype.constructor=de;Ib.prototype=_Object$create(D.prototype);Ib.prototype.constructor=Ib;ee.prototype=_Object$create(G.prototype);ee.prototype.constructor=ee;Vc.prototype=_Object$create(D.prototype);Vc.prototype.constructor=Vc;fe.prototype=_Object$create(G.prototype);fe.prototype.constructor=fe;Wc.prototype=_Object$create(D.prototype);Wc.prototype.constructor=Wc;fc.prototype=_Object$create(G.prototype);fc.prototype.constructor=fc;fc.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);return Sh(this.parameters.shapes,a);};gc.prototype=_Object$create(D.prototype);gc.prototype.constructor=gc;gc.prototype.toJSON=function(){var a=D.prototype.toJSON.call(this);return Sh(this.parameters.shapes,a);};Xc.prototype=_Object$create(D.prototype);Xc.prototype.constructor=Xc;hc.prototype=_Object$create(G.prototype);hc.prototype.constructor=hc;rb.prototype=_Object$create(D.prototype);rb.prototype.constructor=rb;ge.prototype=_Object$create(hc.prototype);ge.prototype.constructor=ge;he.prototype=_Object$create(rb.prototype);he.prototype.constructor=he;ie.prototype=_Object$create(G.prototype);ie.prototype.constructor=ie;Yc.prototype=_Object$create(D.prototype);Yc.prototype.constructor=Yc;var Ba=_Object$freeze({WireframeGeometry:Mc,ParametricGeometry:Qd,ParametricBufferGeometry:Nc,TetrahedronGeometry:Sd,TetrahedronBufferGeometry:Oc,OctahedronGeometry:Td,OctahedronBufferGeometry:bc,IcosahedronGeometry:Ud,IcosahedronBufferGeometry:Pc,DodecahedronGeometry:Vd,DodecahedronBufferGeometry:Qc,PolyhedronGeometry:Rd,PolyhedronBufferGeometry:pa,TubeGeometry:Wd,TubeBufferGeometry:cc,TorusKnotGeometry:Xd,TorusKnotBufferGeometry:Rc,TorusGeometry:Yd,TorusBufferGeometry:Sc,TextGeometry:ce,TextBufferGeometry:Uc,SphereGeometry:de,SphereBufferGeometry:Ib,RingGeometry:ee,RingBufferGeometry:Vc,PlaneGeometry:Fd,PlaneBufferGeometry:$b,LatheGeometry:fe,LatheBufferGeometry:Wc,ShapeGeometry:fc,ShapeBufferGeometry:gc,ExtrudeGeometry:ec,ExtrudeBufferGeometry:eb,EdgesGeometry:Xc,ConeGeometry:ge,ConeBufferGeometry:he,CylinderGeometry:hc,CylinderBufferGeometry:rb,CircleGeometry:ie,CircleBufferGeometry:Yc,BoxGeometry:Cc,BoxBufferGeometry:Bb});ic.prototype=_Object$create(Q.prototype);ic.prototype.constructor=ic;ic.prototype.isShadowMaterial=!0;ic.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);return this;};Zc.prototype=_Object$create(va.prototype);Zc.prototype.constructor=Zc;Zc.prototype.isRawShaderMaterial=!0;fb.prototype=_Object$create(Q.prototype);fb.prototype.constructor=fb;fb.prototype.isMeshStandardMaterial=!0;fb.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};jc.prototype=_Object$create(fb.prototype);jc.prototype.constructor=jc;jc.prototype.isMeshPhysicalMaterial=!0;jc.prototype.copy=function(a){fb.prototype.copy.call(this,a);this.defines={STANDARD:"",PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearcoat=a.clearcoat;this.clearcoatRoughness=a.clearcoatRoughness;this.sheen=a.sheen?(this.sheen||new J()).copy(a.sheen):null;this.clearcoatNormalMap=a.clearcoatNormalMap;this.clearcoatNormalScale.copy(a.clearcoatNormalScale);this.transparency=a.transparency;return this;};Ra.prototype=_Object$create(Q.prototype);Ra.prototype.constructor=Ra;Ra.prototype.isMeshPhongMaterial=!0;Ra.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};kc.prototype=_Object$create(Ra.prototype);kc.prototype.constructor=kc;kc.prototype.isMeshToonMaterial=!0;kc.prototype.copy=function(a){Ra.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this;};lc.prototype=_Object$create(Q.prototype);lc.prototype.constructor=lc;lc.prototype.isMeshNormalMaterial=!0;lc.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};mc.prototype=_Object$create(Q.prototype);mc.prototype.constructor=mc;mc.prototype.isMeshLambertMaterial=!0;mc.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};nc.prototype=_Object$create(Q.prototype);nc.prototype.constructor=nc;nc.prototype.isMeshMatcapMaterial=!0;nc.prototype.copy=function(a){Q.prototype.copy.call(this,a);this.defines={MATCAP:""};this.color.copy(a.color);this.matcap=a.matcap;this.map=a.map;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.alphaMap=a.alphaMap;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};oc.prototype=_Object$create(Y.prototype);oc.prototype.constructor=oc;oc.prototype.isLineDashedMaterial=!0;oc.prototype.copy=function(a){Y.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this;};var uk=_Object$freeze({ShadowMaterial:ic,SpriteMaterial:Hb,RawShaderMaterial:Zc,ShaderMaterial:va,PointsMaterial:Qa,MeshPhysicalMaterial:jc,MeshStandardMaterial:fb,MeshPhongMaterial:Ra,MeshToonMaterial:kc,MeshNormalMaterial:lc,MeshLambertMaterial:mc,MeshDepthMaterial:Eb,MeshDistanceMaterial:Fb,MeshBasicMaterial:ya,MeshMatcapMaterial:nc,LineDashedMaterial:oc,LineBasicMaterial:Y,Material:Q}),Z={arraySlice:function(a,b,c){return Z.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):a.slice(b,c);},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a);},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView);},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c];});return c;},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,l=0;l!==b;++l)e[g++]=a[h+l];return e;},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(_Array$isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f);}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f);}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f);}}}};_Object$assign(Ha.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e);}if(c===f)break;e=d;d=b[++c];if(a<d)break b;}d=b.length;break c;}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b;}d=c;c=0;}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a);}this._cachedIndex=c;this.intervalChanged_(c,e,d);}return this.interpolate_(c,e,a,d);},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_;},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b;},interpolate_:function(){throw Error("call to abstract method");},intervalChanged_:function(){}});_Object$assign(Ha.prototype,{beforeStart_:Ha.prototype.copySampleValue_,afterEnd_:Ha.prototype.copySampleValue_});Oe.prototype=_Object$assign(_Object$create(Ha.prototype),{constructor:Oe,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c;}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b;}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d;},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,l=this._offsetPrev,k=this._offsetNext,n=this._weightPrev,u=this._weightNext,r=(c-b)/(d-b);c=r*r;d=c*r;b=-n*d+2*n*c-n*r;n=(1+n)*d+(-1.5-2*n)*c+(-.5+n)*r+1;r=(-1-u)*d+(1.5+u)*c+.5*r;u=u*d-u*c;for(c=0;c!==g;++c)e[c]=b*f[l+c]+n*f[h+c]+r*f[a+c]+u*f[k+c];return e;}});je.prototype=_Object$assign(_Object$create(Ha.prototype),{constructor:je,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e;}});Pe.prototype=_Object$assign(_Object$create(Ha.prototype),{constructor:Pe,interpolate_:function(a){return this.copySampleValue_(a-1);}});_Object$assign(wa,{toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,times:Z.convertArray(a.times,Array),values:Z.convertArray(a.values,Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c);}b.type=a.ValueTypeName;return b;}});_Object$assign(wa.prototype,{constructor:wa,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Pe(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodLinear:function(a){return new je(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:function(a){return new Oe(this.times,this.values,this.getValueSize(),a);},setInterpolation:function(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth;}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn("THREE.KeyframeTrack:",b);return this;}this.createInterpolant=b;return this;},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;}},getValueSize:function(){return this.values.length/this.times.length;},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this;},scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this;},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=Z.arraySlice(c,e,f),this.values=Z.arraySlice(this.values,e*a,f*a);return this;},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;b=this.values;var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break;}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break;}e=g;}if(void 0!==b&&Z.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d);a=!1;break;}return a;},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,l=a[g];if(l!==a[g+1]&&(1!==g||l!==l[0]))if(d)h=!0;else{var k=g*c,n=k-c,u=k+c;for(l=0;l!==c;++l){var r=b[k+l];if(r!==b[n+l]||r!==b[u+l]){h=!0;break;}}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,k=e*c,l=0;l!==c;++l)b[k+l]=b[h+l];++e;}}if(0<f){a[e]=a[f];h=f*c;k=e*c;for(l=0;l!==c;++l)b[k+l]=b[h+l];++e;}e!==a.length&&(this.times=Z.arraySlice(a,0,e),this.values=Z.arraySlice(b,0,e*c));return this;},clone:function(){var a=Z.arraySlice(this.times,0),b=Z.arraySlice(this.values,0);a=new this.constructor(this.name,a,b);a.createInterpolant=this.createInterpolant;return a;}});Qe.prototype=_Object$assign(_Object$create(wa.prototype),{constructor:Qe,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Re.prototype=_Object$assign(_Object$create(wa.prototype),{constructor:Re,ValueTypeName:"color"});$c.prototype=_Object$assign(_Object$create(wa.prototype),{constructor:$c,ValueTypeName:"number"});Se.prototype=_Object$assign(_Object$create(Ha.prototype),{constructor:Se,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)na.slerpFlat(e,0,f,a-g,f,a,b);return e;}});ke.prototype=_Object$assign(_Object$create(wa.prototype),{constructor:ke,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Se(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:void 0});Te.prototype=_Object$assign(_Object$create(wa.prototype),{constructor:Te,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});ad.prototype=_Object$assign(_Object$create(wa.prototype),{constructor:ad,ValueTypeName:"vector"});_Object$assign(Ma,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(gk(c[e]).scale(d));return new Ma(a.name,a.duration,b);},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid};for(var d=0,e=c.length;d!==e;++d)b.push(wa.toJSON(c[d]));return a;},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],l=[];h.push((g+e-1)%e,g,(g+1)%e);l.push(0,1,0);var k=Z.getKeyframeOrder(h);h=Z.sortedArray(h,1,k);l=Z.sortedArray(l,1,k);d||0!==h[0]||(h.push(e),l.push(l[0]));f.push(new $c(".morphTargetInfluences["+b[g].name+"]",h,l).scale(1/c));}return new Ma(a,-1,f);},findByName:function(a,b){var c=a;_Array$isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++)if(c[a].name===b)return c[a];return null;},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],l=h.name.match(e);if(l&&1<l.length){var k=l[1];(l=d[k])||(d[k]=l=[]);l.push(h);}}a=[];for(k in d)a.push(Ma.CreateFromMorphTargetSequence(k,d[k],b,c));return a;},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];Z.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g));}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30;a=a.hierarchy||[];for(var h=0;h<a.length;h++){var l=a[h].keys;if(l&&0!==l.length)if(l[0].morphTargets){f={};for(var k=0;k<l.length;k++)if(l[k].morphTargets)for(var n=0;n<l[k].morphTargets.length;n++)f[l[k].morphTargets[n]]=-1;for(var u in f){var r=[],q=[];for(n=0;n!==l[k].morphTargets.length;++n){var t=l[k];r.push(t.time);q.push(t.morphTarget===u?1:0);}d.push(new $c(".morphTargetInfluence["+u+"]",r,q));}f=f.length*(g||1);}else k=".bones["+b[h].name+"]",c(ad,k+".position",l,"pos",d),c(ke,k+".quaternion",l,"rot",d),c(ad,k+".scale",l,"scl",d);}return 0===d.length?null:new Ma(e,f,d);}});_Object$assign(Ma.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1]);}this.duration=a;return this;},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this;},validate:function(){for(var a=!0,b=0;b<this.tracks.length;b++)a=a&&this.tracks[b].validate();return a;},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this;},clone:function(){for(var a=[],b=0;b<this.tracks.length;b++)a.push(this.tracks[b].clone());return new Ma(this.name,this.duration,a);}});var tc={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b);},get:function(a){if(!1!==this.enabled)return this.files[a];},remove:function(a){delete this.files[a];},clear:function(){this.files={};}},Th=new kg();_Object$assign(aa.prototype,{load:function(){},parse:function(){},setCrossOrigin:function(a){this.crossOrigin=a;return this;},setPath:function(a){this.path=a;return this;},setResourcePath:function(a){this.resourcePath=a;return this;}});aa.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b);},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e;}return null;}};var $a={};Na.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:Na,load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=tc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a);},0),f;if(void 0!==$a[a])$a[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=g[1];var h=!!g[2];g=g[3];g=decodeURIComponent(g);h&&(g=atob(g));try{var l=(this.responseType||"").toLowerCase();switch(l){case"arraybuffer":case"blob":var k=new Uint8Array(g.length);for(h=0;h<g.length;h++)k[h]=g.charCodeAt(h);var n="blob"===l?new Blob([k.buffer],{type:c}):k.buffer;break;case"document":n=new DOMParser().parseFromString(g,c);break;case"json":n=JSON.parse(g);break;default:n=g;}setTimeout(function(){b&&b(n);e.manager.itemEnd(a);},0);}catch(r){setTimeout(function(){d&&d(r);e.manager.itemError(a);e.manager.itemEnd(a);},0);}}else{$a[a]=[];$a[a].push({onLoad:b,onProgress:c,onError:d});var u=new XMLHttpRequest();u.open("GET",a,!0);u.addEventListener("load",function(b){var c=this.response;tc.add(a,c);var d=$a[a];delete $a[a];if(200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var f=0,g=d.length;f<g;f++){var h=d[f];if(h.onLoad)h.onLoad(c);}}else{f=0;for(g=d.length;f<g;f++)if(h=d[f],h.onError)h.onError(b);e.manager.itemError(a);}e.manager.itemEnd(a);},!1);u.addEventListener("progress",function(b){for(var c=$a[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b);}},!1);u.addEventListener("error",function(b){var c=$a[a];delete $a[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b);}e.manager.itemError(a);e.manager.itemEnd(a);},!1);u.addEventListener("abort",function(b){var c=$a[a];delete $a[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b);}e.manager.itemError(a);e.manager.itemEnd(a);},!1);void 0!==this.responseType&&(u.responseType=this.responseType);void 0!==this.withCredentials&&(u.withCredentials=this.withCredentials);u.overrideMimeType&&u.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader)u.setRequestHeader(h,this.requestHeader[h]);u.send(null);}e.manager.itemStart(a);return u;}},setResponseType:function(a){this.responseType=a;return this;},setWithCredentials:function(a){this.withCredentials=a;return this;},setMimeType:function(a){this.mimeType=a;return this;},setRequestHeader:function(a){this.requestHeader=a;return this;}});lg.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:lg,load:function(a,b,c,d){var e=this,f=new Na(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function(a){for(var b=[],c=0;c<a.length;c++){var d=Ma.parse(a[c]);b.push(d);}return b;}});mg.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:mg,load:function(a,b,c,d){function e(e){l.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h));},c,d);}var f=this,g=[],h=new Lc();h.image=g;var l=new Na(this.manager);l.setPath(this.path);l.setResponseType("arraybuffer");if(_Array$isArray(a))for(var k=0,n=0,u=a.length;n<u;++n)e(n);else l.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height;}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h);},c,d);return h;}});Ue.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:Ue,load:function(a,b,c,d){var e=this,f=new Zb(),g=new Na(this.manager);g.setResponseType("arraybuffer");g.setPath(this.path);g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a);},c,d);return f;}});bd.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:bd,load:function(a,b,c,d){function e(){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);tc.add(a,this);b&&b(this);g.manager.itemEnd(a);}function f(b){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);d&&d(b);g.manager.itemError(a);g.manager.itemEnd(a);}void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var g=this,h=tc.get(a);if(void 0!==h)return g.manager.itemStart(a),setTimeout(function(){b&&b(h);g.manager.itemEnd(a);},0),h;var l=document.createElementNS("http://www.w3.org/1999/xhtml","img");l.addEventListener("load",e,!1);l.addEventListener("error",f,!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(l.crossOrigin=this.crossOrigin);g.manager.itemStart(a);l.src=a;return l;}});Ve.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:Ve,load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f));},void 0,d);}var f=new pb(),g=new bd(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f;}});We.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:We,load:function(a,b,c,d){var e=new ba(),f=new bd(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.jpe?g($|\?)/i)||0===a.search(/^data:image\/jpeg/);e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e);},c,d);return e;}});_Object$assign(F.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null;},getPointAt:function(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b);},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b;},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b;},getLength:function(){var a=this.getLengths();return a[a.length-1];},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f;}return this.cacheArcLengths=b;},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths();},getUtoTmapping:function(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;)if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break;}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1);},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize();},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a);},computeFrenetFrames:function(a,b){var c=new n(),d=[],e=[],f=[],g=new n(),h=new P(),l;for(l=0;l<=a;l++){var k=l/a;d[l]=this.getTangentAt(k);d[l].normalize();}e[0]=new n();f[0]=new n();l=Number.MAX_VALUE;k=Math.abs(d[0].x);var p=Math.abs(d[0].y),u=Math.abs(d[0].z);k<=l&&(l=k,c.set(1,0,0));p<=l&&(l=p,c.set(0,1,0));u<=l&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(l=1;l<=a;l++)e[l]=e[l-1].clone(),f[l]=f[l-1].clone(),g.crossVectors(d[l-1],d[l]),g.length()>_Number$EPSILON&&(g.normalize(),c=Math.acos(O.clamp(d[l-1].dot(d[l]),-1,1)),e[l].applyMatrix4(h.makeRotationAxis(g,c))),f[l].crossVectors(d[l],e[l]);if(!0===b)for(c=Math.acos(O.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),l=1;l<=a;l++)e[l].applyMatrix4(h.makeRotationAxis(d[l],c*l)),f[l].crossVectors(d[l],e[l]);return{tangents:d,normals:e,binormals:f};},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this;},toJSON:function(){var a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a;},fromJSON:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this;}});Ia.prototype=_Object$create(F.prototype);Ia.prototype.constructor=Ia;Ia.prototype.isEllipseCurve=!0;Ia.prototype.getPoint=function(a,b){b=b||new v();for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<_Number$EPSILON;0>d;)d+=c;for(;d>c;)d-=c;d<_Number$EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f);};Ia.prototype.copy=function(a){F.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this;};Ia.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a;};Ia.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this;};cd.prototype=_Object$create(Ia.prototype);cd.prototype.constructor=cd;cd.prototype.isArcCurve=!0;var If=new n(),Wg=new ng(),Xg=new ng(),Yg=new ng();sa.prototype=_Object$create(F.prototype);sa.prototype.constructor=sa;sa.prototype.isCatmullRomCurve3=!0;sa.prototype.getPoint=function(a,b){b=b||new n();var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/d)+1)*d:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else If.subVectors(c[0],c[1]).add(c[0]),f=If;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(If.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=If);if("centripetal"===this.curveType||"chordal"===this.curveType){var l="chordal"===this.curveType?.5:.25;d=Math.pow(f.distanceToSquared(g),l);e=Math.pow(g.distanceToSquared(h),l);l=Math.pow(h.distanceToSquared(c),l);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>l&&(l=e);Wg.initNonuniformCatmullRom(f.x,g.x,h.x,c.x,d,e,l);Xg.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,l);Yg.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,l);}else"catmullrom"===this.curveType&&(Wg.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),Xg.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),Yg.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(Wg.calc(a),Xg.calc(a),Yg.calc(a));return b;};sa.prototype.copy=function(a){F.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this;};sa.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a;};sa.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push(new n().fromArray(d));}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this;};Sa.prototype=_Object$create(F.prototype);Sa.prototype.constructor=Sa;Sa.prototype.isCubicBezierCurve=!0;Sa.prototype.getPoint=function(a,b){b=b||new v();var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(me(a,c.x,d.x,e.x,f.x),me(a,c.y,d.y,e.y,f.y));return b;};Sa.prototype.copy=function(a){F.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this;};Sa.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a;};Sa.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this;};gb.prototype=_Object$create(F.prototype);gb.prototype.constructor=gb;gb.prototype.isCubicBezierCurve3=!0;gb.prototype.getPoint=function(a,b){b=b||new n();var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(me(a,c.x,d.x,e.x,f.x),me(a,c.y,d.y,e.y,f.y),me(a,c.z,d.z,e.z,f.z));return b;};gb.prototype.copy=function(a){F.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this;};gb.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a;};gb.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this;};Da.prototype=_Object$create(F.prototype);Da.prototype.constructor=Da;Da.prototype.isLineCurve=!0;Da.prototype.getPoint=function(a,b){b=b||new v();1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b;};Da.prototype.getPointAt=function(a,b){return this.getPoint(a,b);};Da.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize();};Da.prototype.copy=function(a){F.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Da.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Da.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Ta.prototype=_Object$create(F.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isLineCurve3=!0;Ta.prototype.getPoint=function(a,b){b=b||new n();1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b;};Ta.prototype.getPointAt=function(a,b){return this.getPoint(a,b);};Ta.prototype.copy=function(a){F.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Ta.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Ta.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Ua.prototype=_Object$create(F.prototype);Ua.prototype.constructor=Ua;Ua.prototype.isQuadraticBezierCurve=!0;Ua.prototype.getPoint=function(a,b){b=b||new v();var c=this.v0,d=this.v1,e=this.v2;b.set(le(a,c.x,d.x,e.x),le(a,c.y,d.y,e.y));return b;};Ua.prototype.copy=function(a){F.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};Ua.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};Ua.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};hb.prototype=_Object$create(F.prototype);hb.prototype.constructor=hb;hb.prototype.isQuadraticBezierCurve3=!0;hb.prototype.getPoint=function(a,b){b=b||new n();var c=this.v0,d=this.v1,e=this.v2;b.set(le(a,c.x,d.x,e.x),le(a,c.y,d.y,e.y),le(a,c.z,d.z,e.z));return b;};hb.prototype.copy=function(a){F.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this;};hb.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a;};hb.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this;};Va.prototype=_Object$create(F.prototype);Va.prototype.constructor=Va;Va.prototype.isSplineCurve=!0;Va.prototype.getPoint=function(a,b){b=b||new v();var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-2?c.length-1:a+1];c=c[a>c.length-3?c.length-1:a+2];b.set(Uh(d,e.x,f.x,g.x,c.x),Uh(d,e.y,f.y,g.y,c.y));return b;};Va.prototype.copy=function(a){F.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());return this;};Va.prototype.toJSON=function(){var a=F.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());return a;};Va.prototype.fromJSON=function(a){F.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push(new v().fromArray(d));}return this;};var Zg=_Object$freeze({ArcCurve:cd,CatmullRomCurve3:sa,CubicBezierCurve:Sa,CubicBezierCurve3:gb,EllipseCurve:Ia,LineCurve:Da,LineCurve3:Ta,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:hb,SplineCurve:Va});sb.prototype=_Object$assign(_Object$create(F.prototype),{constructor:sb,add:function(a){this.curves.push(a);},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Da(b,a));},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++;}return null;},getLength:function(){var a=this.getCurveLengths();return a[a.length-1];},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths();},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a;},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b;},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h);}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b;},copy:function(a){F.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++)this.curves.push(a.curves[b].clone());this.autoClose=a.autoClose;return this;},toJSON:function(){var a=F.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++)a.curves.push(this.curves[b].toJSON());return a;},fromJSON:function(a){F.prototype.fromJSON.call(this,a);this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push(new Zg[d.type]().fromJSON(d));}return this;}});Wa.prototype=_Object$assign(_Object$create(sb.prototype),{constructor:Wa,setFromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y);},moveTo:function(a,b){this.currentPoint.set(a,b);},lineTo:function(a,b){var c=new Da(this.currentPoint.clone(),new v(a,b));this.curves.push(c);this.currentPoint.set(a,b);},quadraticCurveTo:function(a,b,c,d){a=new Ua(this.currentPoint.clone(),new v(a,b),new v(c,d));this.curves.push(a);this.currentPoint.set(c,d);},bezierCurveTo:function(a,b,c,d,e,f){a=new Sa(this.currentPoint.clone(),new v(a,b),new v(c,d),new v(e,f));this.curves.push(a);this.currentPoint.set(e,f);},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a);b=new Va(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1]);},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f);},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f);},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h);},absellipse:function(a,b,c,d,e,f,g,h){a=new Ia(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a);},copy:function(a){sb.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this;},toJSON:function(){var a=sb.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a;},fromJSON:function(a){sb.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this;}});Jb.prototype=_Object$assign(_Object$create(Wa.prototype),{constructor:Jb,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b;},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)};},copy:function(a){Wa.prototype.copy.call(this,a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++)this.holes.push(a.holes[b].clone());return this;},toJSON:function(){var a=Wa.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++)a.holes.push(this.holes[b].toJSON());return a;},fromJSON:function(a){Wa.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push(new Wa().fromJSON(d));}return this;}});V.prototype=_Object$assign(_Object$create(B.prototype),{constructor:V,isLight:!0,copy:function(a){B.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this;},toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a;}});Xe.prototype=_Object$assign(_Object$create(V.prototype),{constructor:Xe,isHemisphereLight:!0,copy:function(a){V.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this;}});_Object$assign(ib.prototype,{_projScreenMatrix:new P(),_lightPositionWorld:new n(),_lookTarget:new n(),getViewportCount:function(){return this._viewportCount;},getFrustum:function(){return this._frustum;},updateMatrices:function(a){var b=this.camera,c=this.matrix,d=this._projScreenMatrix,e=this._lookTarget,f=this._lightPositionWorld;f.setFromMatrixPosition(a.matrixWorld);b.position.copy(f);e.setFromMatrixPosition(a.target.matrixWorld);b.lookAt(e);b.updateMatrixWorld();d.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromMatrix(d);c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);c.multiply(b.projectionMatrix);c.multiply(b.matrixWorldInverse);},getViewport:function(a){return this._viewports[a];},getFrameExtents:function(){return this._frameExtents;},copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this;},clone:function(){return new this.constructor().copy(this);},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a;}});Ye.prototype=_Object$assign(_Object$create(ib.prototype),{constructor:Ye,isSpotLightShadow:!0,updateMatrices:function(a,b,c){var d=this.camera,e=2*O.RAD2DEG*a.angle,f=this.mapSize.width/this.mapSize.height,g=a.distance||d.far;if(e!==d.fov||f!==d.aspect||g!==d.far)d.fov=e,d.aspect=f,d.far=g,d.updateProjectionMatrix();ib.prototype.updateMatrices.call(this,a,b,c);}});Ze.prototype=_Object$assign(_Object$create(V.prototype),{constructor:Ze,isSpotLight:!0,copy:function(a){V.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});og.prototype=_Object$assign(_Object$create(ib.prototype),{constructor:og,isPointLightShadow:!0,updateMatrices:function(a,b,c){b=this.camera;var d=this.matrix,e=this._lightPositionWorld,f=this._lookTarget,g=this._projScreenMatrix;e.setFromMatrixPosition(a.matrixWorld);b.position.copy(e);f.copy(b.position);f.add(this._cubeDirections[c]);b.up.copy(this._cubeUps[c]);b.lookAt(f);b.updateMatrixWorld();d.makeTranslation(-e.x,-e.y,-e.z);g.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromMatrix(g);}});$e.prototype=_Object$assign(_Object$create(V.prototype),{constructor:$e,isPointLight:!0,copy:function(a){V.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this;}});ne.prototype=_Object$assign(_Object$create(bb.prototype),{constructor:ne,isOrthographicCamera:!0,copy:function(a,b){bb.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:_Object$assign({},a.view);return this;},setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix();},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix();},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;if(null!==this.view&&this.view.enabled){c=this.zoom/(this.view.width/this.view.fullWidth);b=this.zoom/(this.view.height/this.view.fullHeight);var f=(this.right-this.left)/this.view.width;d=(this.top-this.bottom)/this.view.height;e+=this.view.offsetX/c*f;c=e+this.view.width/c*f;a-=this.view.offsetY/b*d;b=a-this.view.height/b*d;}this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix);},toJSON:function(a){a=B.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=_Object$assign({},this.view));return a;}});af.prototype=_Object$assign(_Object$create(ib.prototype),{constructor:af,isDirectionalLightShadow:!0,updateMatrices:function(a,b,c){ib.prototype.updateMatrices.call(this,a,b,c);}});bf.prototype=_Object$assign(_Object$create(V.prototype),{constructor:bf,isDirectionalLight:!0,copy:function(a){V.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});cf.prototype=_Object$assign(_Object$create(V.prototype),{constructor:cf,isAmbientLight:!0});df.prototype=_Object$assign(_Object$create(V.prototype),{constructor:df,isRectAreaLight:!0,copy:function(a){V.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this;},toJSON:function(a){a=V.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a;}});ef.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:ef,load:function(a,b,c,d){var e=this,f=new Na(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a];}var c=this.textures,d=new uk[a.type]();void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearcoat&&(d.clearcoat=a.clearcoat);void 0!==a.clearcoatRoughness&&(d.clearcoatRoughness=a.clearcoatRoughness);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.combine&&(d.combine=a.combine);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.polygonOffset&&(d.polygonOffset=a.polygonOffset);void 0!==a.polygonOffsetFactor&&(d.polygonOffsetFactor=a.polygonOffsetFactor);void 0!==a.polygonOffsetUnits&&(d.polygonOffsetUnits=a.polygonOffsetUnits);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.morphNormals&&(d.morphNormals=a.morphNormals);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.toneMapped&&(d.toneMapped=a.toneMapped);void 0!==a.userData&&(d.userData=a.userData);if(void 0!==a.uniforms)for(var e in a.uniforms){var f=a.uniforms[e];d.uniforms[e]={};switch(f.type){case"t":d.uniforms[e].value=b(f.value);break;case"c":d.uniforms[e].value=new J().setHex(f.value);break;case"v2":d.uniforms[e].value=new v().fromArray(f.value);break;case"v3":d.uniforms[e].value=new n().fromArray(f.value);break;case"v4":d.uniforms[e].value=new da().fromArray(f.value);break;case"m3":d.uniforms[e].value=new ta().fromArray(f.value);case"m4":d.uniforms[e].value=new P().fromArray(f.value);break;default:d.uniforms[e].value=f.value;}}void 0!==a.defines&&(d.defines=a.defines);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);if(void 0!==a.extensions)for(var g in a.extensions)d.extensions[g]=a.extensions[g];void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.matcap&&(d.matcap=b(a.matcap));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));void 0!==a.normalMapType&&(d.normalMapType=a.normalMapType);void 0!==a.normalScale&&(e=a.normalScale,!1===_Array$isArray(e)&&(e=[e,e]),d.normalScale=new v().fromArray(e));void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.envMapIntensity&&(d.envMapIntensity=a.envMapIntensity);void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.refractionRatio&&(d.refractionRatio=a.refractionRatio);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));void 0!==a.clearcoatNormalMap&&(d.clearcoatNormalMap=b(a.clearcoatNormalMap));void 0!==a.clearcoatNormalScale&&(d.clearcoatNormalScale=new v().fromArray(a.clearcoatNormalScale));return d;},setTextures:function(a){this.textures=a;return this;}});var $g={decodeText:function(a){if("undefined"!==typeof TextDecoder)return new TextDecoder().decode(a);for(var b="",c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);try{return decodeURIComponent(escape(b));}catch(e){return b;}},extractUrlBase:function(a){var b=a.lastIndexOf("/");return-1===b?"./":a.substr(0,b+1);}};ff.prototype=_Object$assign(_Object$create(D.prototype),{constructor:ff,isInstancedBufferGeometry:!0,copy:function(a){D.prototype.copy.call(this,a);this.maxInstancedCount=a.maxInstancedCount;return this;},clone:function(){return new this.constructor().copy(this);},toJSON:function(){var a=D.prototype.toJSON.call(this);a.maxInstancedCount=this.maxInstancedCount;a.isInstancedBufferGeometry=!0;return a;}});gf.prototype=_Object$assign(_Object$create(N.prototype),{constructor:gf,isInstancedBufferAttribute:!0,copy:function(a){N.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;},toJSON:function(){var a=N.prototype.toJSON.call(this);a.meshPerAttribute=this.meshPerAttribute;a.isInstancedBufferAttribute=!0;return a;}});hf.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:hf,load:function(a,b,c,d){var e=this,f=new Na(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function(a){var b=a.isInstancedBufferGeometry?new ff():new D(),c=a.data.index;if(void 0!==c){var d=new ah[c.type](c.array);b.setIndex(new N(d,1));}c=a.data.attributes;for(var e in c){var f=c[e];d=new ah[f.type](f.array);d=new(f.isInstancedBufferAttribute?gf:N)(d,f.itemSize,f.normalized);void 0!==f.name&&(d.name=f.name);b.addAttribute(e,d);}var g=a.data.morphAttributes;if(g)for(e in g){var h=g[e],l=[];c=0;for(var k=h.length;c<k;c++)f=h[c],d=new ah[f.type](f.array),d=new N(d,f.itemSize,f.normalized),void 0!==f.name&&(d.name=f.name),l.push(d);b.morphAttributes[e]=l;}e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,f=e.length;c!==f;++c)d=e[c],b.addGroup(d.start,d.count,d.materialIndex);c=a.data.boundingSphere;void 0!==c&&(e=new n(),void 0!==c.center&&e.fromArray(c.center),b.boundingSphere=new nb(e,c.radius));a.name&&(b.name=a.name);a.userData&&(b.userData=a.userData);return b;}});var ah={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};jf.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:jf,load:function(a,b,c,d){var e=this,f=""===this.path?$g.extractUrlBase(a):this.path;this.resourcePath=this.resourcePath||f;f=new Na(e.manager);f.setPath(this.path);f.load(a,function(c){var f=null;try{f=JSON.parse(c);}catch(l){void 0!==d&&d(l);console.error("THREE:ObjectLoader: Can't parse "+a+".",l.message);return;}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a):e.parse(f,b);},c,d);},parse:function(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,function(){void 0!==b&&b(e);});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,d);var e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e;},parseShape:function(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=new Jb().fromJSON(a[c]);b[e.uuid]=e;}return b;},parseGeometries:function(a,b){var c={};if(void 0!==a)for(var d=new hf(),e=0,f=a.length;e<f;e++){var g=a[e];switch(g.type){case"PlaneGeometry":case"PlaneBufferGeometry":var h=new Ba[g.type](g.width,g.height,g.widthSegments,g.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":h=new Ba[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":h=new Ba[g.type](g.radius,g.segments,g.thetaStart,g.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":h=new Ba[g.type](g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":h=new Ba[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":h=new Ba[g.type](g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":h=new Ba[g.type](g.radius,g.detail);break;case"RingGeometry":case"RingBufferGeometry":h=new Ba[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":h=new Ba[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":h=new Ba[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);break;case"TubeGeometry":case"TubeBufferGeometry":h=new Ba[g.type](new Zg[g.path.type]().fromJSON(g.path),g.tubularSegments,g.radius,g.radialSegments,g.closed);break;case"LatheGeometry":case"LatheBufferGeometry":h=new Ba[g.type](g.points,g.segments,g.phiStart,g.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":h=new Ba[g.type](g.vertices,g.indices,g.radius,g.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":h=[];for(var l=0,k=g.shapes.length;l<k;l++){var n=b[g.shapes[l]];h.push(n);}h=new Ba[g.type](h,g.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":h=[];l=0;for(k=g.shapes.length;l<k;l++)n=b[g.shapes[l]],h.push(n);l=g.options.extrudePath;void 0!==l&&(g.options.extrudePath=new Zg[l.type]().fromJSON(l));h=new Ba[g.type](h,g.options);break;case"BufferGeometry":case"InstancedBufferGeometry":h=d.parse(g);break;case"Geometry":"THREE"in window&&"LegacyJSONLoader"in THREE?h=new THREE.LegacyJSONLoader().parse(g,this.resourcePath).geometry:console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+g.type+'"');continue;}h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);!0===h.isBufferGeometry&&void 0!==g.userData&&(h.userData=g.userData);c[g.uuid]=h;}return c;},parseMaterials:function(a,b){var c={},d={};if(void 0!==a){var e=new ef();e.setTextures(b);b=0;for(var f=a.length;b<f;b++){var g=a[b];if("MultiMaterial"===g.type){for(var h=[],l=0;l<g.materials.length;l++){var k=g.materials[l];void 0===c[k.uuid]&&(c[k.uuid]=e.parse(k));h.push(c[k.uuid]);}d[g.uuid]=h;}else void 0===c[g.uuid]&&(c[g.uuid]=e.parse(g)),d[g.uuid]=c[g.uuid];}}return d;},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=Ma.parse(d);void 0!==d.uuid&&(e.uuid=d.uuid);b.push(e);}return b;},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a);},void 0,function(){d.manager.itemError(a);d.manager.itemEnd(a);});}var d=this,e={};if(void 0!==a&&0<a.length){b=new kg(b);var f=new bd(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],l=h.url;if(_Array$isArray(l)){e[h.uuid]=[];for(var k=0,n=l.length;k<n;k++){var u=l[k];u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u)?u:d.resourcePath+u;e[h.uuid].push(c(u));}}else u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.resourcePath+h.url,e[h.uuid]=c(u);}}return e;},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a];}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=_Array$isArray(b[g.image])?new pb(b[g.image]):new ba(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,vk));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],wi),h.wrapT=c(g.wrap[1],wi));void 0!==g.format&&(h.format=g.format);void 0!==g.type&&(h.type=g.type);void 0!==g.encoding&&(h.encoding=g.encoding);void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,xi));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,xi));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);void 0!==g.premultiplyAlpha&&(h.premultiplyAlpha=g.premultiplyAlpha);void 0!==g.unpackAlignment&&(h.unpackAlignment=g.unpackAlignment);d[g.uuid]=h;}return d;},parseObject:function(a,b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a];}function e(a){if(void 0!==a){if(_Array$isArray(a)){for(var b=[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f]);}return b;}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a];}}switch(a.type){case"Scene":var f=new wd();void 0!==a.background&&_Number$isInteger(a.background)&&(f.background=new J(a.background));void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Ke(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Je(a.fog.color,a.fog.density)));break;case"PerspectiveCamera":f=new la(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=_Object$assign({},a.view));break;case"OrthographicCamera":f=new ne(a.left,a.right,a.top,a.bottom,a.near,a.far);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.view&&(f.view=_Object$assign({},a.view));break;case"AmbientLight":f=new cf(a.color,a.intensity);break;case"DirectionalLight":f=new bf(a.color,a.intensity);break;case"PointLight":f=new $e(a.color,a.intensity,a.distance,a.decay);break;case"RectAreaLight":f=new df(a.color,a.intensity,a.width,a.height);break;case"SpotLight":f=new Ze(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case"HemisphereLight":f=new Xe(a.color,a.groundColor,a.intensity);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new Nd(f,g):new ra(f,g);void 0!==a.drawMode&&f.setDrawMode(a.drawMode);break;case"LOD":f=new Md();break;case"Line":f=new ca(d(a.geometry),e(a.material),a.mode);break;case"LineLoop":f=new Ne(d(a.geometry),e(a.material));break;case"LineSegments":f=new R(d(a.geometry),e(a.material));break;case"PointCloud":case"Points":f=new Kc(d(a.geometry),e(a.material));break;case"Sprite":f=new Kd(e(a.material));break;case"Group":f=new Hc();break;default:f=new B();}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),void 0!==a.matrixAutoUpdate&&(f.matrixAutoUpdate=a.matrixAutoUpdate),f.matrixAutoUpdate&&f.matrix.decompose(f.position,f.quaternion,f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.frustumCulled&&(f.frustumCulled=a.frustumCulled);void 0!==a.renderOrder&&(f.renderOrder=a.renderOrder);void 0!==a.userData&&(f.userData=a.userData);void 0!==a.layers&&(f.layers.mask=a.layers);if(void 0!==a.children){g=a.children;for(var h=0;h<g.length;h++)f.add(this.parseObject(g[h],b,c));}if("LOD"===a.type)for(a=a.levels,g=0;g<a.length;g++){h=a[g];var l=f.getObjectByProperty("uuid",h.object);void 0!==l&&f.addLevel(l,h.distance);}return f;}});var vk={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},wi={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},xi={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};pg.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:pg,setOptions:function(a){this.options=a;return this;},load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=tc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a);},0),f;fetch(a).then(function(a){return a.blob();}).then(function(a){return void 0===e.options?createImageBitmap(a):createImageBitmap(a,e.options);}).then(function(c){tc.add(a,c);b&&b(c);e.manager.itemEnd(a);}).catch(function(b){d&&d(b);e.manager.itemError(a);e.manager.itemEnd(a);});e.manager.itemStart(a);}});_Object$assign(qg.prototype,{moveTo:function(a,b){this.currentPath=new Wa();this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b);},lineTo:function(a,b){this.currentPath.lineTo(a,b);},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d);},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f);},splineThru:function(a){this.currentPath.splineThru(a);},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Jb();f.curves=e.curves;b.push(f);}return b;}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],l=h.x-g.x,k=h.y-g.y;if(Math.abs(k)>_Number$EPSILON){if(0>k&&(g=b[f],l=-l,h=b[e],k=-k),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0;}else{e=k*(a.x-g.x)-l*(a.y-g.y);if(0===e)return!0;0>e||(d=!d);}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0;}return d;}var e=qb.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new Jb();h.curves=g.curves;b.push(h);return b;}var l=!e(f[0].getPoints());l=a?!l:l;h=[];var k=[],n=[],u=0;k[u]=void 0;n[u]=[];for(var r=0,q=f.length;r<q;r++){g=f[r];var t=g.getPoints();var y=e(t);(y=a?!y:y)?(!l&&k[u]&&u++,k[u]={s:new Jb(),p:t},k[u].s.curves=g.curves,l&&u++,n[u]=[]):n[u].push({h:g,p:t[0]});}if(!k[0])return c(f);if(1<k.length){r=!1;a=[];e=0;for(f=k.length;e<f;e++)h[e]=[];e=0;for(f=k.length;e<f;e++)for(g=n[e],y=0;y<g.length;y++){l=g[y];u=!0;for(t=0;t<k.length;t++)d(l.p,k[t].p)&&(e!==t&&a.push({froms:e,tos:t,hole:y}),u?(u=!1,h[t].push(l)):r=!0);u&&h[e].push(l);}0<a.length&&(r||(n=h));}r=0;for(e=k.length;r<e;r++)for(h=k[r].s,b.push(h),a=n[r],f=0,g=a.length;f<g;f++)h.holes.push(a[f].h);return b;}});_Object$assign(rg.prototype,{isFont:!0,generateShapes:function(a,b){void 0===b&&(b=100);var c=[],d=b;b=this.data;var e=_Array$from?_Array$from(a):String(a).split("");d/=b.resolution;var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,l=0;l<e.length;l++){var k=e[l];if("\n"===k)g=0,h-=f;else{var n=k;k=d;var u=g,r=h,q=b,t=q.glyphs[n]||q.glyphs["?"];if(t){n=new qg();if(t.o){q=t._cachedOutline||(t._cachedOutline=t.o.split(" "));for(var y=0,w=q.length;y<w;)switch(q[y++]){case"m":var v=q[y++]*k+u;var x=q[y++]*k+r;n.moveTo(v,x);break;case"l":v=q[y++]*k+u;x=q[y++]*k+r;n.lineTo(v,x);break;case"q":var A=q[y++]*k+u;var B=q[y++]*k+r;var E=q[y++]*k+u;var D=q[y++]*k+r;n.quadraticCurveTo(E,D,A,B);break;case"b":A=q[y++]*k+u,B=q[y++]*k+r,E=q[y++]*k+u,D=q[y++]*k+r,v=q[y++]*k+u,x=q[y++]*k+r,n.bezierCurveTo(E,D,v,x,A,B);}}k={offsetX:t.ha*k,path:n};}else console.error('THREE.Font: character "'+n+'" does not exists in font family '+q.familyName+"."),k=void 0;g+=k.offsetX;a.push(k.path);}}b=0;for(e=a.length;b<e;b++)Array.prototype.push.apply(c,a[b].toShapes());return c;}});sg.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:sg,load:function(a,b,c,d){var e=this,f=new Na(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a);}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2));}a=e.parse(c);b&&b(a);},c,d);},parse:function(a){return new rg(a);}});var Jf,xg={getContext:function(){void 0===Jf&&(Jf=new(window.AudioContext||window.webkitAudioContext)());return Jf;},setContext:function(a){Jf=a;}};kf.prototype=_Object$assign(_Object$create(aa.prototype),{constructor:kf,load:function(a,b,c,d){var e=new Na(this.manager);e.setResponseType("arraybuffer");e.setPath(this.path);e.load(a,function(a){a=a.slice(0);xg.getContext().decodeAudioData(a,function(a){b(a);});},c,d);}});_Object$assign(lf.prototype,{isSphericalHarmonics3:!0,set:function(a){for(var b=0;9>b;b++)this.coefficients[b].copy(a[b]);return this;},zero:function(){for(var a=0;9>a;a++)this.coefficients[a].set(0,0,0);return this;},getAt:function(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.282095);b.addScale(e[1],.488603*d);b.addScale(e[2],.488603*a);b.addScale(e[3],.488603*c);b.addScale(e[4],1.092548*c*d);b.addScale(e[5],1.092548*d*a);b.addScale(e[6],.315392*(3*a*a-1));b.addScale(e[7],1.092548*c*a);b.addScale(e[8],.546274*(c*c-d*d));return b;},getIrradianceAt:function(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.886227);b.addScale(e[1],1.023328*d);b.addScale(e[2],1.023328*a);b.addScale(e[3],1.023328*c);b.addScale(e[4],.858086*c*d);b.addScale(e[5],.858086*d*a);b.addScale(e[6],.743125*a*a-.247708);b.addScale(e[7],.858086*c*a);b.addScale(e[8],.429043*(c*c-d*d));return b;},add:function(a){for(var b=0;9>b;b++)this.coefficients[b].add(a.coefficients[b]);return this;},scale:function(a){for(var b=0;9>b;b++)this.coefficients[b].multiplyScalar(a);return this;},lerp:function(a,b){for(var c=0;9>c;c++)this.coefficients[c].lerp(a.coefficients[c],b);return this;},equals:function(a){for(var b=0;9>b;b++)if(!this.coefficients[b].equals(a.coefficients[b]))return!1;return!0;},copy:function(a){return this.set(a.coefficients);},clone:function(){return new this.constructor().copy(this);},fromArray:function(a,b){void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].fromArray(a,b+3*d);return this;},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].toArray(a,b+3*d);return a;}});_Object$assign(lf,{getBasisAt:function(a,b){var c=a.x,d=a.y;a=a.z;b[0]=.282095;b[1]=.488603*d;b[2]=.488603*a;b[3]=.488603*c;b[4]=1.092548*c*d;b[5]=1.092548*d*a;b[6]=.315392*(3*a*a-1);b[7]=1.092548*c*a;b[8]=.546274*(c*c-d*d);}});Xa.prototype=_Object$assign(_Object$create(V.prototype),{constructor:Xa,isLightProbe:!0,copy:function(a){V.prototype.copy.call(this,a);this.sh.copy(a.sh);this.intensity=a.intensity;return this;},toJSON:function(a){return V.prototype.toJSON.call(this,a);}});tg.prototype=_Object$assign(_Object$create(Xa.prototype),{constructor:tg,isHemisphereLightProbe:!0,copy:function(a){Xa.prototype.copy.call(this,a);return this;},toJSON:function(a){return Xa.prototype.toJSON.call(this,a);}});ug.prototype=_Object$assign(_Object$create(Xa.prototype),{constructor:ug,isAmbientLightProbe:!0,copy:function(a){Xa.prototype.copy.call(this,a);return this;},toJSON:function(a){return Xa.prototype.toJSON.call(this,a);}});var yi=new P(),zi=new P();_Object$assign(Vh.prototype,{update:function(a){var b=this._cache;if(b.focus!==a.focus||b.fov!==a.fov||b.aspect!==a.aspect*this.aspect||b.near!==a.near||b.far!==a.far||b.zoom!==a.zoom||b.eyeSep!==this.eyeSep){b.focus=a.focus;b.fov=a.fov;b.aspect=a.aspect*this.aspect;b.near=a.near;b.far=a.far;b.zoom=a.zoom;b.eyeSep=this.eyeSep;var c=a.projectionMatrix.clone(),d=b.eyeSep/2,e=d*b.near/b.focus,f=b.near*Math.tan(O.DEG2RAD*b.fov*.5)/b.zoom;zi.elements[12]=-d;yi.elements[12]=d;d=-f*b.aspect+e;var g=f*b.aspect+e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraL.projectionMatrix.copy(c);d=-f*b.aspect-e;g=f*b.aspect-e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraR.projectionMatrix.copy(c);}this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(zi);this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(yi);}});_Object$assign(vg.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0;},stop:function(){this.getElapsedTime();this.autoStart=this.running=!1;},getElapsedTime:function(){this.getDelta();return this.elapsedTime;},getDelta:function(){var a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a;}return a;}});var uc=new n(),Ai=new na(),wk=new n(),vc=new n();wg.prototype=_Object$assign(_Object$create(B.prototype),{constructor:wg,getInput:function(){return this.gain;},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null);return this;},getFilter:function(){return this.filter;},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination);return this;},getMasterVolume:function(){return this.gain.gain.value;},setMasterVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this;},updateMatrixWorld:function(a){B.prototype.updateMatrixWorld.call(this,a);a=this.context.listener;var b=this.up;this.timeDelta=this._clock.getDelta();this.matrixWorld.decompose(uc,Ai,wk);vc.set(0,0,-1).applyQuaternion(Ai);if(a.positionX){var c=this.context.currentTime+this.timeDelta;a.positionX.linearRampToValueAtTime(uc.x,c);a.positionY.linearRampToValueAtTime(uc.y,c);a.positionZ.linearRampToValueAtTime(uc.z,c);a.forwardX.linearRampToValueAtTime(vc.x,c);a.forwardY.linearRampToValueAtTime(vc.y,c);a.forwardZ.linearRampToValueAtTime(vc.z,c);a.upX.linearRampToValueAtTime(b.x,c);a.upY.linearRampToValueAtTime(b.y,c);a.upZ.linearRampToValueAtTime(b.z,c);}else a.setPosition(uc.x,uc.y,uc.z),a.setOrientation(vc.x,vc.y,vc.z,b.x,b.y,b.z);}});dd.prototype=_Object$assign(_Object$create(B.prototype),{constructor:dd,getOutput:function(){return this.gain;},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this;},setMediaElementSource:function(a){this.hasPlaybackControl=!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(a);this.connect();return this;},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this;},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);this.startTime=this.context.currentTime;a.start(this.startTime,this.offset,this.duration);this.isPlaying=!0;this.source=a;this.setDetune(this.detune);this.setPlaybackRate(this.playbackRate);return this.connect();}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return!0===this.isPlaying&&(this.source.stop(),this.source.onended=null,this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this;},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.source.onended=null,this.offset=0,this.isPlaying=!1,this;},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput());}else this.source.connect(this.getOutput());return this;},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput());}else this.source.disconnect(this.getOutput());return this;},getFilters:function(){return this.filters;},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this;},setDetune:function(a){this.detune=a;if(void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this;},getDetune:function(){return this.detune;},getFilter:function(){return this.getFilters()[0];},setFilter:function(a){return this.setFilters(a?[a]:[]);},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;},getPlaybackRate:function(){return this.playbackRate;},onEnded:function(){this.isPlaying=!1;},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop;},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this;},getVolume:function(){return this.gain.gain.value;},setVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this;}});var wc=new n(),Bi=new na(),xk=new n(),xc=new n();yg.prototype=_Object$assign(_Object$create(dd.prototype),{constructor:yg,getOutput:function(){return this.panner;},getRefDistance:function(){return this.panner.refDistance;},setRefDistance:function(a){this.panner.refDistance=a;return this;},getRolloffFactor:function(){return this.panner.rolloffFactor;},setRolloffFactor:function(a){this.panner.rolloffFactor=a;return this;},getDistanceModel:function(){return this.panner.distanceModel;},setDistanceModel:function(a){this.panner.distanceModel=a;return this;},getMaxDistance:function(){return this.panner.maxDistance;},setMaxDistance:function(a){this.panner.maxDistance=a;return this;},setDirectionalCone:function(a,b,c){this.panner.coneInnerAngle=a;this.panner.coneOuterAngle=b;this.panner.coneOuterGain=c;return this;},updateMatrixWorld:function(a){B.prototype.updateMatrixWorld.call(this,a);if(!0!==this.hasPlaybackControl||!1!==this.isPlaying)if(this.matrixWorld.decompose(wc,Bi,xk),xc.set(0,0,1).applyQuaternion(Bi),a=this.panner,a.positionX){var b=this.context.currentTime+this.listener.timeDelta;a.positionX.linearRampToValueAtTime(wc.x,b);a.positionY.linearRampToValueAtTime(wc.y,b);a.positionZ.linearRampToValueAtTime(wc.z,b);a.orientationX.linearRampToValueAtTime(xc.x,b);a.orientationY.linearRampToValueAtTime(xc.y,b);a.orientationZ.linearRampToValueAtTime(xc.z,b);}else a.setPosition(wc.x,wc.y,wc.z),a.setOrientation(xc.x,xc.y,xc.z);}});_Object$assign(zg.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data;},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length;}});_Object$assign(Ag.prototype,{accumulate:function(a,b){var c=this.buffer,d=this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e)c[a+e]=c[e];e=b;}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e;},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);d=b;for(var f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break;}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0;},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize);},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d];},_slerp:function(a,b,c,d){na.slerpFlat(a,b,a,b,a,c,d);},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d;}}});var yk=/[\[\]\.:\/]/g,zk="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",Ak=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),Bk=/(WCOD+)?/.source.replace("WCOD",zk),Ck=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Dk=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),Ek=new RegExp("^"+Ak+Bk+Ck+Dk+"$"),Fk=["material","materials","bones"];_Object$assign(Wh.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b);},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b);},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind();},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind();}});_Object$assign(ma,{Composite:Wh,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new ma.Composite(a,b,c):new ma(a,b,c);},sanitizeNodeName:function(a){return a.replace(/\s/g,"_").replace(yk,"");},parseTrackName:function(a){var b=Ek.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==Fk.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d);}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b;},findNode:function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c;}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===b||e.uuid===b||(e=d(e.children)))return e;}return null;};if(a=d(a.children))return a;}return null;}});_Object$assign(ma.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName];},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d];},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex];},function(a,b){this.resolvedProperty.toArray(a,b);}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b];},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0;},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty.fromArray(a,b);},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0;}]],getValue:function(a,b){this.bind();this.getValue(a,b);},setValue:function(a,b){this.bind();this.setValue(a,b);},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=ma.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return;}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return;}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return;}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break;}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return;}a=a[c];}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return;}a=a[f];}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;this.targetObject=a;void 0!==a.needsUpdate?b=this.Versioning.NeedsUpdate:void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return;}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return;}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++)if(a.geometry.morphAttributes.position[c].name===e){e=c;break;}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",this);return;}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break;}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e;}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):_Array$isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b];}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound;}});_Object$assign(ma.prototype,{_getValue_unbound:ma.prototype.getValue,_setValue_unbound:ma.prototype.setValue});_Object$assign(Xh.prototype,{isAnimationObjectGroup:!0,add:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,k=void 0,m=0,n=arguments.length;m!==n;++m){var u=arguments[m],r=u.uuid,q=d[r];if(void 0===q){q=b++;d[r]=q;a.push(u);r=0;for(var t=h;r!==t;++r)g[r].push(new ma(u,e[r],f[r]));}else if(q<c){k=a[q];var v=--c;t=a[v];d[t.uuid]=q;a[q]=t;d[r]=v;a[v]=u;r=0;for(t=h;r!==t;++r){var w=g[r],z=w[q];w[q]=w[v];void 0===z&&(z=new ma(u,e[r],f[r]));w[v]=z;}}else a[q]!==k&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");}this.nCachedObjects_=c;},remove:function(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=arguments[f],k=h.uuid,m=c[k];if(void 0!==m&&m>=b){var n=b++,u=a[n];c[u.uuid]=m;a[m]=u;c[k]=n;a[n]=h;h=0;for(k=e;h!==k;++h){u=d[h];var r=u[m];u[m]=u[n];u[n]=r;}}}this.nCachedObjects_=b;},uncache:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g].uuid,m=d[k];if(void 0!==m)if(delete d[k],m<c){k=--c;var n=a[k],u=--b,r=a[u];d[n.uuid]=m;a[m]=n;d[r.uuid]=k;a[k]=r;a.pop();n=0;for(r=f;n!==r;++n){var q=e[n],t=q[u];q[m]=q[k];q[k]=t;q.pop();}}else for(u=--b,r=a[u],d[r.uuid]=m,a[m]=r,a.pop(),n=0,r=f;n!==r;++n)q=e[n],q[m]=q[u],q.pop();}this.nCachedObjects_=c;},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,m=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(m);c=k;for(d=h.length;c!==d;++c)m[c]=new ma(h[c],a,b);return m;},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop();}}});_Object$assign(Yh.prototype,{play:function(){this._mixer._activateAction(this);return this;},stop:function(){this._mixer._deactivateAction(this);return this.reset();},reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping();},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this);},isScheduled:function(){return this._mixer._isActiveAction(this);},startAt:function(a){this._startTime=a;return this;},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this;},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading();},getEffectiveWeight:function(){return this._effectiveWeight;},fadeIn:function(a){return this._scheduleFading(a,0,1);},fadeOut:function(a){return this._scheduleFading(a,1,0);},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b);}return this;},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c);},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping();},getEffectiveTimeScale:function(){return this._effectiveTimeScale;},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping();},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping();},halt:function(a){return this.warp(this._effectiveTimeScale,0,a);},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this;},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},getMixer:function(){return this._mixer;},getClip:function(){return this._clip;},getRoot:function(){return this._localRoot||this._mixer._root;},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c;}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;e=this._propertyBindings;for(var f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a);}}else this._updateWeight(a);},_updateWeight:function(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1));}}return this._effectiveWeight=b;},_updateTimeScale:function(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b);}}return this._effectiveTimeScale=b;},_updateTime:function(a){var b=this.time+a,c=this._clip.duration,d=this.loop,e=this._loopCount,f=2202===d;if(0===a)return-1===e?b:f&&1===(e&1)?c-b:b;if(2200===d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else{this.time=b;break a;}this.clampWhenFinished?this.paused=!0:this.enabled=!1;this.time=b;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1});}else{-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===this.repetitions,!0,f));if(b>=c||0>b){d=Math.floor(b/c);b-=c*d;e+=Math.abs(d);var g=this.repetitions-e;0>=g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(1===g?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f),this._loopCount=e,this.time=b,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:d}));}else this.time=b;if(f&&1===(e&1))return c-b;}return b;},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402);},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this;}});Bg.prototype=_Object$assign(_Object$create(xa.prototype),{constructor:Bg,_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,k=h[g];void 0===k&&(k={},h[g]=k);for(h=0;h!==e;++h){var m=d[h],n=m.name,u=k[n];if(void 0===u){u=f[h];if(void 0!==u){null===u._cacheIndex&&(++u.referenceCount,this._addInactiveBinding(u,g,n));continue;}u=new Ag(ma.create(c,n,b&&b._propertyBindings[h].binding.parsedPath),m.ValueTypeName,m.getValueSize());++u.referenceCount;this._addInactiveBinding(u,g,n);}f[h]=u;a[h].resultBuffer=u.buffer;}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b);}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState());}this._lendAction(a);}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e));}this._takeBackAction(a);}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length;},get inUse(){return a._nActiveActions;}},bindings:{get total(){return a._bindings.length;},get inUse(){return a._nActiveBindings;}},controlInterpolants:{get total(){return a._controlInterpolants.length;},get inUse(){return a._nActiveControlInterpolants;}}};},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions;},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a;},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;c=this._actionsByClip;d=c[b];var e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a);},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d);}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a);},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];0===_Object$keys(f).length&&delete e[d];},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new je(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c;},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e;},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid;c="string"===typeof a?Ma.findByName(c,a):a;a=null!==c?c.uuid:a;var e=this._actionsByClip[a],f=null;if(void 0!==e){f=e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip);}if(null===c)return null;b=new Yh(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b;},existingAction:function(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?Ma.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null;},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this;},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,a,e,f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this;},getRoot:function(){return this._root;},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g);}delete c[a];}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c));}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d)a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a);},uncacheAction:function(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a));}});mf.prototype.clone=function(){return new mf(void 0===this.value.clone?this.value:this.value.clone());};Cg.prototype=_Object$assign(_Object$create(ac.prototype),{constructor:Cg,isInstancedInterleavedBuffer:!0,copy:function(a){ac.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;}});_Object$assign(Zh.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,b);},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize(),this.camera=b):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld),this.camera=b):console.error("THREE.Raycaster: Unsupported camera type.");},intersectObject:function(a,b,c){c=c||[];Dg(a,this,c,b);c.sort($h);return c;},intersectObjects:function(a,b,c){c=c||[];if(!1===_Array$isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)Dg(a[d],this,c,b);c.sort($h);return c;}});_Object$assign(ai.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this;},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this;},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z);},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+b*b+c*c);0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a,c),this.phi=Math.acos(O.clamp(b/this.radius,-1,1)));return this;}});_Object$assign(bi.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this;},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z);},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+c*c);this.theta=Math.atan2(a,c);this.y=b;return this;}});var Ci=new v();_Object$assign(Eg.prototype,{set:function(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this;},setFromCenterAndSize:function(a,b){b=Ci.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this;},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y;},getCenter:function(a){void 0===a&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new v());return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5);},getSize:function(a){void 0===a&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new v());return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min);},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0;},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y;},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new v());return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y));},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0;},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new v());return b.copy(a).clamp(this.min,this.max);},distanceToPoint:function(a){return Ci.copy(a).clamp(this.min,this.max).sub(a).length();},intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this;},union:function(a){this.min.min(a.min);this.max.max(a.max);return this;},translate:function(a){this.min.add(a);this.max.add(a);return this;},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max);}});var Di=new n(),Kf=new n();_Object$assign(Fg.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this;},clone:function(){return new this.constructor().copy(this);},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this;},getCenter:function(a){void 0===a&&(console.warn("THREE.Line3: .getCenter() target is now required"),a=new n());return a.addVectors(this.start,this.end).multiplyScalar(.5);},delta:function(a){void 0===a&&(console.warn("THREE.Line3: .delta() target is now required"),a=new n());return a.subVectors(this.end,this.start);},distanceSq:function(){return this.start.distanceToSquared(this.end);},distance:function(){return this.start.distanceTo(this.end);},at:function(a,b){void 0===b&&(console.warn("THREE.Line3: .at() target is now required"),b=new n());return this.delta(b).multiplyScalar(a).add(this.start);},closestPointToPointParameter:function(a,b){Di.subVectors(a,this.start);Kf.subVectors(this.end,this.start);a=Kf.dot(Kf);a=Kf.dot(Di)/a;b&&(a=O.clamp(a,0,1));return a;},closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);void 0===c&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new n());return this.delta(c).multiplyScalar(a).add(this.start);},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this;},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end);}});oe.prototype=_Object$create(B.prototype);oe.prototype.constructor=oe;oe.prototype.isImmediateRenderObject=!0;var mb=new n(),Ab=new n(),bh=new ta(),Gk=["a","b","c"];pe.prototype=_Object$create(R.prototype);pe.prototype.constructor=pe;pe.prototype.update=function(){this.object.updateMatrixWorld(!0);bh.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,b=this.geometry.attributes.position,c=this.object.geometry;if(c&&c.isGeometry)for(var d=c.vertices,e=c.faces,f=c=0,g=e.length;f<g;f++)for(var h=e[f],k=0,m=h.vertexNormals.length;k<m;k++){var n=h.vertexNormals[k];mb.copy(d[h[Gk[k]]]).applyMatrix4(a);Ab.copy(n).applyMatrix3(bh).normalize().multiplyScalar(this.size).add(mb);b.setXYZ(c,mb.x,mb.y,mb.z);c+=1;b.setXYZ(c,Ab.x,Ab.y,Ab.z);c+=1;}else if(c&&c.isBufferGeometry)for(d=c.attributes.position,e=c.attributes.normal,k=c=0,m=d.count;k<m;k++)mb.set(d.getX(k),d.getY(k),d.getZ(k)).applyMatrix4(a),Ab.set(e.getX(k),e.getY(k),e.getZ(k)),Ab.applyMatrix3(bh).normalize().multiplyScalar(this.size).add(mb),b.setXYZ(c,mb.x,mb.y,mb.z),c+=1,b.setXYZ(c,Ab.x,Ab.y,Ab.z),c+=1;b.needsUpdate=!0;};var Ei=new n();ed.prototype=_Object$create(B.prototype);ed.prototype.constructor=ed;ed.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose();};ed.prototype.update=function(){this.light.updateMatrixWorld();var a=this.light.distance?this.light.distance:1E3,b=a*Math.tan(this.light.angle);this.cone.scale.set(b,b,a);Ei.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(Ei);void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color);};var Pb=new n(),Lf=new P(),ch=new P();fd.prototype=_Object$create(R.prototype);fd.prototype.constructor=fd;fd.prototype.updateMatrixWorld=function(a){var b=this.bones,c=this.geometry,d=c.getAttribute("position");ch.getInverse(this.root.matrixWorld);for(var e=0,f=0;e<b.length;e++){var g=b[e];g.parent&&g.parent.isBone&&(Lf.multiplyMatrices(ch,g.matrixWorld),Pb.setFromMatrixPosition(Lf),d.setXYZ(f,Pb.x,Pb.y,Pb.z),Lf.multiplyMatrices(ch,g.parent.matrixWorld),Pb.setFromMatrixPosition(Lf),d.setXYZ(f+1,Pb.x,Pb.y,Pb.z),f+=2);}c.getAttribute("position").needsUpdate=!0;B.prototype.updateMatrixWorld.call(this,a);};gd.prototype=_Object$create(ra.prototype);gd.prototype.constructor=gd;gd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();};gd.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color);};hd.prototype=_Object$create(ca.prototype);hd.prototype.constructor=hd;hd.prototype.update=function(){this.scale.set(.5*this.light.width,.5*this.light.height,1);if(void 0!==this.color)this.material.color.set(this.color),this.children[0].material.color.set(this.color);else{this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var a=this.material.color,b=Math.max(a.r,a.g,a.b);1<b&&a.multiplyScalar(1/b);this.children[0].material.color.copy(this.material.color);}};hd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();this.children[0].geometry.dispose();this.children[0].material.dispose();};var Hk=new n(),Fi=new J(),Gi=new J();id.prototype=_Object$create(B.prototype);id.prototype.constructor=id;id.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose();};id.prototype.update=function(){var a=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var b=a.geometry.getAttribute("color");Fi.copy(this.light.color);Gi.copy(this.light.groundColor);for(var c=0,d=b.count;c<d;c++){var e=c<d/2?Fi:Gi;b.setXYZ(c,e.r,e.g,e.b);}b.needsUpdate=!0;}a.lookAt(Hk.setFromMatrixPosition(this.light.matrixWorld).negate());};jd.prototype=_Object$create(ra.prototype);jd.prototype.constructor=jd;jd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();};jd.prototype.onBeforeRender=function(){this.position.copy(this.lightProbe.position);this.scale.set(1,1,1).multiplyScalar(this.size);this.material.uniforms.intensity.value=this.lightProbe.intensity;};nf.prototype=_Object$assign(_Object$create(R.prototype),{constructor:nf,copy:function(a){R.prototype.copy.call(this,a);this.geometry.copy(a.geometry);this.material.copy(a.material);return this;},clone:function(){return new this.constructor().copy(this);}});of.prototype=_Object$create(R.prototype);of.prototype.constructor=of;kd.prototype=_Object$create(ca.prototype);kd.prototype.constructor=kd;kd.prototype.update=function(){function a(a,b,d,e){d=(b-a)/d;q.setXYZ(k,0,0,0);m++;for(n=a;n<b;n+=d)u=k+m,q.setXYZ(u,Math.sin(n)*c,0,Math.cos(n)*c),q.setXYZ(u+1,Math.sin(Math.min(n+d,b))*c,0,Math.cos(Math.min(n+d,b))*c),q.setXYZ(u+2,0,0,0),m+=3;r.addGroup(k,m,e);k+=m;m=0;}var b=this.audio,c=this.range,d=this.divisionsInnerAngle,e=this.divisionsOuterAngle,f=O.degToRad(b.panner.coneInnerAngle);b=O.degToRad(b.panner.coneOuterAngle);var g=f/2,h=b/2,k=0,m=0,n,u,r=this.geometry,q=r.attributes.position;r.clearGroups();a(-h,-g,e,0);a(-g,g,d,1);a(g,h,e,0);q.needsUpdate=!0;f===b&&(this.material[0].visible=!1);};kd.prototype.dispose=function(){this.geometry.dispose();this.material[0].dispose();this.material[1].dispose();};var Ce=new n(),Mf=new n(),Hi=new ta();qe.prototype=_Object$create(R.prototype);qe.prototype.constructor=qe;qe.prototype.update=function(){this.object.updateMatrixWorld(!0);Hi.getNormalMatrix(this.object.matrixWorld);var a=this.object.matrixWorld,b=this.geometry.attributes.position,c=this.object.geometry,d=c.vertices;c=c.faces;for(var e=0,f=0,g=c.length;f<g;f++){var h=c[f],k=h.normal;Ce.copy(d[h.a]).add(d[h.b]).add(d[h.c]).divideScalar(3).applyMatrix4(a);Mf.copy(k).applyMatrix3(Hi).normalize().multiplyScalar(this.size).add(Ce);b.setXYZ(e,Ce.x,Ce.y,Ce.z);e+=1;b.setXYZ(e,Mf.x,Mf.y,Mf.z);e+=1;}b.needsUpdate=!0;};var Ii=new n(),Nf=new n(),Ji=new n();ld.prototype=_Object$create(B.prototype);ld.prototype.constructor=ld;ld.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose();};ld.prototype.update=function(){Ii.setFromMatrixPosition(this.light.matrixWorld);Nf.setFromMatrixPosition(this.light.target.matrixWorld);Ji.subVectors(Nf,Ii);this.lightPlane.lookAt(Nf);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(Nf);this.targetLine.scale.z=Ji.length();};var pf=new n(),T=new bb();re.prototype=_Object$create(R.prototype);re.prototype.constructor=re;re.prototype.update=function(){var a=this.geometry,b=this.pointMap;T.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);ea("c",b,a,T,0,0,-1);ea("t",b,a,T,0,0,1);ea("n1",b,a,T,-1,-1,-1);ea("n2",b,a,T,1,-1,-1);ea("n3",b,a,T,-1,1,-1);ea("n4",b,a,T,1,1,-1);ea("f1",b,a,T,-1,-1,1);ea("f2",b,a,T,1,-1,1);ea("f3",b,a,T,-1,1,1);ea("f4",b,a,T,1,1,1);ea("u1",b,a,T,.7,1.1,-1);ea("u2",b,a,T,-.7,1.1,-1);ea("u3",b,a,T,0,2,-1);ea("cf1",b,a,T,-1,0,1);ea("cf2",b,a,T,1,0,1);ea("cf3",b,a,T,0,-1,1);ea("cf4",b,a,T,0,1,1);ea("cn1",b,a,T,-1,0,-1);ea("cn2",b,a,T,1,0,-1);ea("cn3",b,a,T,0,-1,-1);ea("cn4",b,a,T,0,1,-1);a.getAttribute("position").needsUpdate=!0;};var Of=new ab();tb.prototype=_Object$create(R.prototype);tb.prototype.constructor=tb;tb.prototype.update=function(a){void 0!==a&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");void 0!==this.object&&Of.setFromObject(this.object);if(!Of.isEmpty()){a=Of.min;var b=Of.max,c=this.geometry.attributes.position,d=c.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=a.x;d[4]=b.y;d[5]=b.z;d[6]=a.x;d[7]=a.y;d[8]=b.z;d[9]=b.x;d[10]=a.y;d[11]=b.z;d[12]=b.x;d[13]=b.y;d[14]=a.z;d[15]=a.x;d[16]=b.y;d[17]=a.z;d[18]=a.x;d[19]=a.y;d[20]=a.z;d[21]=b.x;d[22]=a.y;d[23]=a.z;c.needsUpdate=!0;this.geometry.computeBoundingSphere();}};tb.prototype.setFromObject=function(a){this.object=a;this.update();return this;};tb.prototype.copy=function(a){R.prototype.copy.call(this,a);this.object=a.object;return this;};tb.prototype.clone=function(){return new this.constructor().copy(this);};se.prototype=_Object$create(R.prototype);se.prototype.constructor=se;se.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),B.prototype.updateMatrixWorld.call(this,a));};te.prototype=_Object$create(ca.prototype);te.prototype.constructor=te;te.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.children[0].material.side=0>b?1:0;this.lookAt(this.plane.normal);B.prototype.updateMatrixWorld.call(this,a);};var Ki=new n(),qf,Gg;ub.prototype=_Object$create(B.prototype);ub.prototype.constructor=ub;ub.prototype.setDirection=function(a){.99999<a.y?this.quaternion.set(0,0,0,1):-.99999>a.y?this.quaternion.set(1,0,0,0):(Ki.set(a.z,0,-a.x).normalize(),this.quaternion.setFromAxisAngle(Ki,Math.acos(a.y)));};ub.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix();};ub.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a);};ub.prototype.copy=function(a){B.prototype.copy.call(this,a,!1);this.line.copy(a.line);this.cone.copy(a.cone);return this;};ub.prototype.clone=function(){return new this.constructor().copy(this);};ue.prototype=_Object$create(R.prototype);ue.prototype.constructor=ue;F.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=_Object$create(F.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a;};_Object$assign(sb.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getPoints(a);return this.createGeometry(a);},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a);},createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new G(),c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new n(e.x,e.y,e.z||0));}return b;}});_Object$assign(Wa.prototype,{fromPoints:function(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");this.setFromPoints(a);}});di.prototype=_Object$create(sa.prototype);ei.prototype=_Object$create(sa.prototype);Hg.prototype=_Object$create(sa.prototype);_Object$assign(Hg.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.");},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.");},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");}});nf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");};fd.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.");};_Object$assign(aa.prototype,{extractUrlBase:function(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");return $g.extractUrlBase(a);}});_Object$assign(jf.prototype,{setTexturePath:function(a){console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");return this.setResourcePath(a);}});_Object$assign(Eg.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a);},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a);}});_Object$assign(ab.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a);},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a);}});Fg.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a);};_Object$assign(O,{random16:function(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random();},nearestPowerOfTwo:function(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");return O.floorPowerOfTwo(a);},nextPowerOfTwo:function(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");return O.ceilPowerOfTwo(a);}});_Object$assign(ta.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b);},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this);},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");},applyToBuffer:function(a){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a);},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");}});_Object$assign(P.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a);},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b);},getPosition:function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return new n().setFromMatrixColumn(this,3);},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a);},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this);},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.");},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.");},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.");},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.");},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.");},applyToBuffer:function(a){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a);},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f);}});cb.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a);};na.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this);};_Object$assign(Sb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a);},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);}});_Object$assign(ia.prototype,{area:function(){console.warn("THREE.Triangle: .area() has been renamed to .getArea().");return this.getArea();},barycoordFromPoint:function(a,b){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return this.getBarycoord(a,b);},midpoint:function(a){console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");return this.getMidpoint(a);},normal:function(a){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return this.getNormal(a);},plane:function(a){console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");return this.getPlane(a);}});_Object$assign(ia,{barycoordFromPoint:function(a,b,c,d,e){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return ia.getBarycoord(a,b,c,d,e);},normal:function(a,b,c,d){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return ia.getNormal(a,b,c,d);}});_Object$assign(Jb.prototype,{extractAllPoints:function(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");return this.extractPoints(a);},extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new ec(this,a);},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new fc(this,a);}});_Object$assign(v.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},distanceToManhattan:function(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a);},lengthManhattan:function(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});_Object$assign(n.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a);},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a);},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a);},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a);},fromAttribute:function(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},distanceToManhattan:function(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a);},lengthManhattan:function(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});_Object$assign(da.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c);},lengthManhattan:function(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength();}});_Object$assign(G.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.");},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");}});_Object$assign(B.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a);},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a);},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");}});_Object$defineProperties(B.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order;},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a;}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");}}});_Object$defineProperties(Md.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels;}}});_Object$defineProperty(Me.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.");}});Nd.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.");};_Object$defineProperty(F.prototype,"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions;},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a;}});la.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a);};_Object$defineProperties(V.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.");}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a;}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a;}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a;}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a;}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a;}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a;}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a;}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a;}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.");}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a;}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a;}}});_Object$defineProperties(N.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length;}},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");}});_Object$assign(D.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a);},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b);},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups();},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");}});_Object$defineProperties(D.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups;}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups;}}});_Object$assign(eb.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");}});_Object$defineProperties(mf.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this;}}});_Object$defineProperties(Q.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.");},set:function(){console.warn("THREE.Material: .wrapAround has been removed.");}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.");},set:function(){console.warn("THREE.Material: .overdraw has been removed.");}},wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new J();}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a;}}});_Object$defineProperties(Ra.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1;},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");}}});_Object$defineProperties(va.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives;},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a;}}});_Object$assign(dg.prototype,{clearTarget:function(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");this.setRenderTarget(a);this.clear(b,c,d);},animate:function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");this.setAnimationLoop(a);},getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");return this.getRenderTarget();},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy();},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision;},resetGLState:function(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");return this.state.reset();},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float");},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float");},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives");},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc");},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc");},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax");},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");return this.capabilities.vertexTextures;},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays");},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a);},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");},getActiveMipMapLevel:function(){console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");return this.getActiveMipmapLevel();}});_Object$defineProperties(dg.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled;},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a;}},shadowMapType:{get:function(){return this.shadowMap.type;},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a;}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");}},context:{get:function(){console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");return this.getContext();}}});_Object$defineProperties(Ch.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");}}});_Object$defineProperties(Cb.prototype,{activeCubeFace:{set:function(){console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().");}},activeMipMapLevel:{set:function(){console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().");}}});_Object$defineProperties(Ka.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS;},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a;}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT;},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a;}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter;},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a;}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter;},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a;}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy;},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a;}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset;},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a;}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat;},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a;}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format;},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a;}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type;},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a;}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps;},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a;}}});_Object$defineProperties(cg.prototype,{standing:{set:function(){console.warn("THREE.WebVRManager: .standing has been removed.");}},userHeight:{set:function(){console.warn("THREE.WebVRManager: .userHeight has been removed.");}}});dd.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;new kf().load(a,function(a){b.setBuffer(a);});return this;};zg.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData();};Dc.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b);};Kb.crossOrigin=void 0;Kb.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new We();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;};Kb.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new Ve();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;};Kb.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");};Kb.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");};k.ACESFilmicToneMapping=5;k.AddEquation=100;k.AddOperation=2;k.AdditiveBlending=2;k.AlphaFormat=1021;k.AlwaysDepth=1;k.AlwaysStencilFunc=519;k.AmbientLight=cf;k.AmbientLightProbe=ug;k.AnimationClip=Ma;k.AnimationLoader=lg;k.AnimationMixer=Bg;k.AnimationObjectGroup=Xh;k.AnimationUtils=Z;k.ArcCurve=cd;k.ArrayCamera=Id;k.ArrowHelper=ub;k.Audio=dd;k.AudioAnalyser=zg;k.AudioContext=xg;k.AudioListener=wg;k.AudioLoader=kf;k.AxesHelper=ue;k.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new ue(a);};k.BackSide=1;k.BasicDepthPacking=3200;k.BasicShadowMap=0;k.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new Ue(a);};k.Bone=eg;k.BooleanKeyframeTrack=Qe;k.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new tb(a,b);};k.Box2=Eg;k.Box3=ab;k.Box3Helper=se;k.BoxBufferGeometry=Bb;k.BoxGeometry=Cc;k.BoxHelper=tb;k.BufferAttribute=N;k.BufferGeometry=D;k.BufferGeometryLoader=hf;k.ByteType=1010;k.Cache=tc;k.Camera=bb;k.CameraHelper=re;k.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed");};k.CanvasTexture=Od;k.CatmullRomCurve3=sa;k.CineonToneMapping=4;k.CircleBufferGeometry=Yc;k.CircleGeometry=ie;k.ClampToEdgeWrapping=1001;k.Clock=vg;k.ClosedSplineCurve3=di;k.Color=J;k.ColorKeyframeTrack=Re;k.CompressedTexture=Lc;k.CompressedTextureLoader=mg;k.ConeBufferGeometry=he;k.ConeGeometry=ge;k.CubeCamera=Dc;k.CubeGeometry=Cc;k.CubeReflectionMapping=301;k.CubeRefractionMapping=302;k.CubeTexture=pb;k.CubeTextureLoader=Ve;k.CubeUVReflectionMapping=306;k.CubeUVRefractionMapping=307;k.CubicBezierCurve=Sa;k.CubicBezierCurve3=gb;k.CubicInterpolant=Oe;k.CullFaceBack=1;k.CullFaceFront=2;k.CullFaceFrontBack=3;k.CullFaceNone=0;k.Curve=F;k.CurvePath=sb;k.CustomBlending=5;k.CylinderBufferGeometry=rb;k.CylinderGeometry=hc;k.Cylindrical=bi;k.DataTexture=Zb;k.DataTexture2DArray=Ec;k.DataTexture3D=Fc;k.DataTextureLoader=Ue;k.DecrementStencilOp=7683;k.DecrementWrapStencilOp=34056;k.DefaultLoadingManager=Th;k.DepthFormat=1026;k.DepthStencilFormat=1027;k.DepthTexture=Pd;k.DirectionalLight=bf;k.DirectionalLightHelper=ld;k.DirectionalLightShadow=af;k.DiscreteInterpolant=Pe;k.DodecahedronBufferGeometry=Qc;k.DodecahedronGeometry=Vd;k.DoubleSide=2;k.DstAlphaFactor=206;k.DstColorFactor=208;k.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return new N(a,b).setDynamic(!0);};k.EdgesGeometry=Xc;k.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new R(new Xc(a.geometry),new Y({color:void 0!==b?b:16777215}));};k.EllipseCurve=Ia;k.EqualDepth=4;k.EqualStencilFunc=514;k.EquirectangularReflectionMapping=303;k.EquirectangularRefractionMapping=304;k.Euler=Qb;k.EventDispatcher=xa;k.ExtrudeBufferGeometry=eb;k.ExtrudeGeometry=ec;k.Face3=yc;k.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new yc(a,b,c,e,f,g);};k.FaceColors=1;k.FaceNormalsHelper=qe;k.FileLoader=Na;k.FlatShading=1;k.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new A(a,b);};k.Float32BufferAttribute=A;k.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new Cd(a,b);};k.Float64BufferAttribute=Cd;k.FloatType=1015;k.Fog=Ke;k.FogExp2=Je;k.Font=rg;k.FontLoader=sg;k.FrontFaceDirectionCCW=1;k.FrontFaceDirectionCW=0;k.FrontSide=0;k.Frustum=Ed;k.GammaEncoding=3007;k.Geometry=G;k.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry;}a.merge(b,d,c);},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center();}};k.GreaterDepth=6;k.GreaterEqualDepth=5;k.GreaterEqualStencilFunc=518;k.GreaterStencilFunc=516;k.GridHelper=nf;k.Group=Hc;k.HalfFloatType=1016;k.HemisphereLight=Xe;k.HemisphereLightHelper=id;k.HemisphereLightProbe=tg;k.IcosahedronBufferGeometry=Pc;k.IcosahedronGeometry=Ud;k.ImageBitmapLoader=pg;k.ImageLoader=bd;k.ImageUtils=Kb;k.ImmediateRenderObject=oe;k.IncrementStencilOp=7682;k.IncrementWrapStencilOp=34055;k.InstancedBufferAttribute=gf;k.InstancedBufferGeometry=ff;k.InstancedInterleavedBuffer=Cg;k.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new Ad(a,b);};k.Int16BufferAttribute=Ad;k.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new Bd(a,b);};k.Int32BufferAttribute=Bd;k.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new xd(a,b);};k.Int8BufferAttribute=xd;k.IntType=1013;k.InterleavedBuffer=ac;k.InterleavedBufferAttribute=Jd;k.Interpolant=Ha;k.InterpolateDiscrete=2300;k.InterpolateLinear=2301;k.InterpolateSmooth=2302;k.InvertStencilOp=5386;k.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.");};k.KeepStencilOp=7680;k.KeyframeTrack=wa;k.LOD=Md;k.LatheBufferGeometry=Wc;k.LatheGeometry=fe;k.Layers=Qf;k.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js");};k.LessDepth=2;k.LessEqualDepth=3;k.LessEqualStencilFunc=515;k.LessStencilFunc=513;k.Light=V;k.LightProbe=Xa;k.LightProbeHelper=jd;k.LightShadow=ib;k.Line=ca;k.Line3=Fg;k.LineBasicMaterial=Y;k.LineCurve=Da;k.LineCurve3=Ta;k.LineDashedMaterial=oc;k.LineLoop=Ne;k.LinePieces=1;k.LineSegments=R;k.LineStrip=0;k.LinearEncoding=3E3;k.LinearFilter=1006;k.LinearInterpolant=je;k.LinearMipMapLinearFilter=1008;k.LinearMipMapNearestFilter=1007;k.LinearMipmapLinearFilter=1008;k.LinearMipmapNearestFilter=1007;k.LinearToneMapping=1;k.Loader=aa;k.LoaderUtils=$g;k.LoadingManager=kg;k.LogLuvEncoding=3003;k.LoopOnce=2200;k.LoopPingPong=2202;k.LoopRepeat=2201;k.LuminanceAlphaFormat=1025;k.LuminanceFormat=1024;k.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};k.Material=Q;k.MaterialLoader=ef;k.Math=O;k.Matrix3=ta;k.Matrix4=P;k.MaxEquation=104;k.Mesh=ra;k.MeshBasicMaterial=ya;k.MeshDepthMaterial=Eb;k.MeshDistanceMaterial=Fb;k.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a;};k.MeshLambertMaterial=mc;k.MeshMatcapMaterial=nc;k.MeshNormalMaterial=lc;k.MeshPhongMaterial=Ra;k.MeshPhysicalMaterial=jc;k.MeshStandardMaterial=fb;k.MeshToonMaterial=kc;k.MinEquation=103;k.MirroredRepeatWrapping=1002;k.MixOperation=1;k.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice();};return a;};k.MultiplyBlending=4;k.MultiplyOperation=0;k.NearestFilter=1003;k.NearestMipMapLinearFilter=1005;k.NearestMipMapNearestFilter=1004;k.NearestMipmapLinearFilter=1005;k.NearestMipmapNearestFilter=1004;k.NeverDepth=0;k.NeverStencilFunc=512;k.NoBlending=0;k.NoColors=0;k.NoToneMapping=0;k.NormalBlending=1;k.NotEqualDepth=7;k.NotEqualStencilFunc=517;k.NumberKeyframeTrack=$c;k.Object3D=B;k.ObjectLoader=jf;k.ObjectSpaceNormalMap=1;k.OctahedronBufferGeometry=bc;k.OctahedronGeometry=Td;k.OneFactor=201;k.OneMinusDstAlphaFactor=207;k.OneMinusDstColorFactor=209;k.OneMinusSrcAlphaFactor=205;k.OneMinusSrcColorFactor=203;k.OrthographicCamera=ne;k.PCFShadowMap=1;k.PCFSoftShadowMap=2;k.ParametricBufferGeometry=Nc;k.ParametricGeometry=Qd;k.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Kd(a);};k.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Qa(a);};k.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Kc(a,b);};k.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Qa(a);};k.Path=Wa;k.PerspectiveCamera=la;k.Plane=cb;k.PlaneBufferGeometry=$b;k.PlaneGeometry=Fd;k.PlaneHelper=te;k.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Kc(a,b);};k.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Qa(a);};k.PointLight=$e;k.PointLightHelper=gd;k.Points=Kc;k.PointsMaterial=Qa;k.PolarGridHelper=of;k.PolyhedronBufferGeometry=pa;k.PolyhedronGeometry=Rd;k.PositionalAudio=yg;k.PositionalAudioHelper=kd;k.PropertyBinding=ma;k.PropertyMixer=Ag;k.QuadraticBezierCurve=Ua;k.QuadraticBezierCurve3=hb;k.Quaternion=na;k.QuaternionKeyframeTrack=ke;k.QuaternionLinearInterpolant=Se;k.REVISION="108";k.RGBADepthPacking=3201;k.RGBAFormat=1023;k.RGBA_ASTC_10x10_Format=37819;k.RGBA_ASTC_10x5_Format=37816;k.RGBA_ASTC_10x6_Format=37817;k.RGBA_ASTC_10x8_Format=37818;k.RGBA_ASTC_12x10_Format=37820;k.RGBA_ASTC_12x12_Format=37821;k.RGBA_ASTC_4x4_Format=37808;k.RGBA_ASTC_5x4_Format=37809;k.RGBA_ASTC_5x5_Format=37810;k.RGBA_ASTC_6x5_Format=37811;k.RGBA_ASTC_6x6_Format=37812;k.RGBA_ASTC_8x5_Format=37813;k.RGBA_ASTC_8x6_Format=37814;k.RGBA_ASTC_8x8_Format=37815;k.RGBA_PVRTC_2BPPV1_Format=35843;k.RGBA_PVRTC_4BPPV1_Format=35842;k.RGBA_S3TC_DXT1_Format=33777;k.RGBA_S3TC_DXT3_Format=33778;k.RGBA_S3TC_DXT5_Format=33779;k.RGBDEncoding=3006;k.RGBEEncoding=3002;k.RGBEFormat=1023;k.RGBFormat=1022;k.RGBM16Encoding=3005;k.RGBM7Encoding=3004;k.RGB_ETC1_Format=36196;k.RGB_PVRTC_2BPPV1_Format=35841;k.RGB_PVRTC_4BPPV1_Format=35840;k.RGB_S3TC_DXT1_Format=33776;k.RawShaderMaterial=Zc;k.Ray=Sb;k.Raycaster=Zh;k.RectAreaLight=df;k.RectAreaLightHelper=hd;k.RedFormat=1028;k.ReinhardToneMapping=2;k.RepeatWrapping=1E3;k.ReplaceStencilOp=7681;k.ReverseSubtractEquation=102;k.RingBufferGeometry=Vc;k.RingGeometry=ee;k.Scene=wd;k.SceneUtils={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");}};k.ShaderChunk=K;k.ShaderLib=db;k.ShaderMaterial=va;k.ShadowMaterial=ic;k.Shape=Jb;k.ShapeBufferGeometry=gc;k.ShapeGeometry=fc;k.ShapePath=qg;k.ShapeUtils=qb;k.ShortType=1011;k.Skeleton=Me;k.SkeletonHelper=fd;k.SkinnedMesh=Nd;k.SmoothShading=2;k.Sphere=nb;k.SphereBufferGeometry=Ib;k.SphereGeometry=de;k.Spherical=ai;k.SphericalHarmonics3=lf;k.SphericalReflectionMapping=305;k.Spline=Hg;k.SplineCurve=Va;k.SplineCurve3=ei;k.SpotLight=Ze;k.SpotLightHelper=ed;k.SpotLightShadow=Ye;k.Sprite=Kd;k.SpriteMaterial=Hb;k.SrcAlphaFactor=204;k.SrcAlphaSaturateFactor=210;k.SrcColorFactor=202;k.StereoCamera=Vh;k.StringKeyframeTrack=Te;k.SubtractEquation=101;k.SubtractiveBlending=3;k.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};k.TangentSpaceNormalMap=0;k.TetrahedronBufferGeometry=Oc;k.TetrahedronGeometry=Sd;k.TextBufferGeometry=Uc;k.TextGeometry=ce;k.Texture=ba;k.TextureLoader=We;k.TorusBufferGeometry=Sc;k.TorusGeometry=Yd;k.TorusKnotBufferGeometry=Rc;k.TorusKnotGeometry=Xd;k.Triangle=ia;k.TriangleFanDrawMode=2;k.TriangleStripDrawMode=1;k.TrianglesDrawMode=0;k.TubeBufferGeometry=cc;k.TubeGeometry=Wd;k.UVMapping=300;k.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new Tb(a,b);};k.Uint16BufferAttribute=Tb;k.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new Ub(a,b);};k.Uint32BufferAttribute=Ub;k.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new yd(a,b);};k.Uint8BufferAttribute=yd;k.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new zd(a,b);};k.Uint8ClampedBufferAttribute=zd;k.Uncharted2ToneMapping=3;k.Uniform=mf;k.UniformsLib=H;k.UniformsUtils=pk;k.UnsignedByteType=1009;k.UnsignedInt248Type=1020;k.UnsignedIntType=1014;k.UnsignedShort4444Type=1017;k.UnsignedShort5551Type=1018;k.UnsignedShort565Type=1019;k.UnsignedShortType=1012;k.VSMShadowMap=3;k.Vector2=v;k.Vector3=n;k.Vector4=da;k.VectorKeyframeTrack=ad;k.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new n(a,b,c);};k.VertexColors=2;k.VertexNormalsHelper=pe;k.VideoTexture=hg;k.WebGLMultisampleRenderTarget=Pf;k.WebGLRenderTarget=Ka;k.WebGLRenderTargetCube=Cb;k.WebGLRenderer=dg;k.WebGLUtils=Eh;k.WireframeGeometry=Mc;k.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new R(new Mc(a.geometry),new Y({color:void 0!==b?b:16777215}));};k.WrapAroundEnding=2402;k.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Na(a);};k.ZeroCurvatureEnding=2400;k.ZeroFactor=200;k.ZeroSlopeEnding=2401;k.ZeroStencilOp=0;k.sRGBEncoding=3001;_Object$defineProperty(k,"__esModule",{value:!0});});

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

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/number/epsilon":
/*!****************************************************!*\
  !*** external "core-js/library/fn/number/epsilon" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/epsilon");

/***/ }),

/***/ "core-js/library/fn/number/is-integer":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/number/is-integer" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/is-integer");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

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

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map