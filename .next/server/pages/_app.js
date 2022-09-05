module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/skin/skin-3.css":
/*!*****************************!*\
  !*** ./css/skin/skin-3.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/skin/skin-3.css */ "./css/skin/skin-3.css");
/* harmony import */ var _css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_3_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Powdero\\Desktop\\MTS\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 //import "../css/skin/skin-1.css";
//import "../css/skin/skin-2.css";






function MyApp({
  Component,
  pageProps
}) {
  const {
    0: toggle1,
    1: setToggle1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: body_,
    1: setbody_
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: layout,
    1: setLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("wide");
  const {
    0: header,
    1: setHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("fixed");
  const {
    0: header_,
    1: setHeader_
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: sliderValu,
    1: setSliderValu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(20);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default()();

  function toggle() {
    setToggle1(!toggle1);
  }

  const layoutChange = name => {
    setLayout(name);
    body_.className = name;
  };

  const backGroundChage = value => {
    if (value === "color_1") {
      body_.style.backgroundColor = "rgb(137, 110, 255)";
    } else if (value === "color_2") {
      body_.style.backgroundColor = "rgb(245, 95, 141)";
    } else if (value === "color_3") {
      body_.style.backgroundColor = "rgb(239, 20, 110)";
    }
  };

  const backGroundImage = value => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };

  const chageHeader = value => {
    setHeader(value);

    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = value => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "page-wraper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://1.envato.market/VLMVO",
      target: "_blank",
      className: "bt-buy-now theme-btn",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "ti-shopping-cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Buy Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://w3itexperts.ticksy.com",
      target: "_blank",
      className: "bt-support-now theme-btn",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "ti-headphone-alt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "scroltop icon-up",
        type: "button",
        style: {
          display: "inline-block"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fa fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-rangeslider":
/*!************************************!*\
  !*** external "react-rangeslider" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rangeslider");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-scroll-position");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJhbmdlc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJ1c2VTdGF0ZSIsImJvZHlfIiwic2V0Ym9keV8iLCJsYXlvdXQiLCJzZXRMYXlvdXQiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsInNsaWRlclZhbHUiLCJzZXRTbGlkZXJWYWx1IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbFBvc2l0aW9uIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJ0b2dnbGUiLCJsYXlvdXRDaGFuZ2UiLCJuYW1lIiwiY2xhc3NOYW1lIiwiYmFja0dyb3VuZENoYWdlIiwidmFsdWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tHcm91bmRJbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiY2hhZ2VIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbkNoYW5nZSIsInBhZGRpbmciLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FB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QUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFHRSxlQUFTLEVBQUMsc0JBSFo7QUFBQSw4QkFLRTtBQUFHLGlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBYUU7QUFDRSxVQUFJLEVBQUMsZ0NBRFA7QUFFRSxZQUFNLEVBQUMsUUFGVDtBQUdFLGVBQVMsRUFBQywwQkFIWjtBQUFBLDhCQUtFO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFxQkU7QUFBRyxVQUFJLEVBQUMsTUFBUjtBQUFBLDZCQUNFO0FBQ0UsaUJBQVMsRUFBQyxrQkFEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFO0FBQUVxQyxpQkFBTyxFQUFFO0FBQVgsU0FIVDtBQUFBLCtCQUtFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBLGtCQURGO0FBaUNEOztBQUVjdkMsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXJhbmdlc2xpZGVyXCI7XHJcbmltcG9ydCBcInJlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuLy9pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcbi8vaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0yLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N3aXRjaGVyLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0b2dnbGUxLCBzZXRUb2dnbGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9keV8sIHNldGJvZHlfXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFwid2lkZVwiKTtcclxuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoXCJmaXhlZFwiKTtcclxuICBjb25zdCBbaGVhZGVyXywgc2V0SGVhZGVyX10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzbGlkZXJWYWx1LCBzZXRTbGlkZXJWYWx1XSA9IHVzZVN0YXRlKDIwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuICAgIHNldEhlYWRlcl8oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmFyLXdyYXBlclwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGF5b3V0Q2hhbmdlID0gKG5hbWUpID0+IHtcclxuICAgIHNldExheW91dChuYW1lKTtcclxuICAgIGJvZHlfLmNsYXNzTmFtZSA9IG5hbWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja0dyb3VuZENoYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiY29sb3JfMVwiKSB7XHJcbiAgICAgIGJvZHlfLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDEzNywgMTEwLCAyNTUpXCI7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImNvbG9yXzJcIikge1xyXG4gICAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNDUsIDk1LCAxNDEpXCI7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImNvbG9yXzNcIikge1xyXG4gICAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMzksIDIwLCAxMTApXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja0dyb3VuZEltYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dmFsdWV9KWA7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiYXV0b1wiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRIZWFkZXIodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSk7XHJcbiAgICBib2R5Xy5zdHlsZS5wYWRkaW5nID0gdmFsdWUgKyBcInB4XCI7XHJcbiAgfTtcclxuXHJcbiAgaGVhZGVyID09PSBcImZpeGVkXCIgJiYgc2Nyb2xsUG9zaXRpb24gPiAxMFxyXG4gICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXHJcbiAgICA6IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vMS5lbnZhdG8ubWFya2V0L1ZMTVZPXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LWJ1eS1ub3cgdGhlbWUtYnRuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXNob3BwaW5nLWNhcnRcIiAvPlxyXG4gICAgICAgIDxzcGFuPkJ1eSBOb3c8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93M2l0ZXhwZXJ0cy50aWNrc3kuY29tXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LXN1cHBvcnQtbm93IHRoZW1lLWJ0blwiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1oZWFkcGhvbmUtYWx0XCIgLz5cclxuICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjdG9wXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2x0b3AgaWNvbi11cFwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy11cFwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yYW5nZXNsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXNjcm9sbC1wb3NpdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9