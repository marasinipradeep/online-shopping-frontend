webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Meta */ \"./components/Meta.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pradeepmarasini/Desktop/OnlineShoppingFrontEnd/online-shopping-frontend/frontend/components/Page.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\"\\n@font-face {\\n    font-family:'radnika_next' ;\\n    src: url('/static/radnikanext-medium-webfont.woff2')\\n    format('woff2');\\n    font-weight:normal;\\n    font-style:normal;\\n}\\nhtml{\\n    box-sizing:border-box;\\n    font-size:10px;\\n}\\n*, *:before, *:after{\\n    box-sizing:inherit;\\n}\\nbody{\\n    padding:0;\\n    margin:0;\\n    font-size:1.5rem;\\n    line-height:2;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n //injectGlobal is deprecate so use createGlobalStyle\n\n\n\nvar theme = {\n  red: \"#FF0000\",\n  black: \"#393939\",\n  grey: \"#3A3A3A\",\n  lightgrey: '#E1E1E1',\n  offWhite: '#EDEDED',\n  maxWidth: '1000px',\n  bs: '0 12px 24px 0 rgba(0,0,0,0.09)' //box shadow\n\n};\nvar StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"Page__StyledPage\",\n  componentId: \"sc-4u7a64-0\"\n})([\"background:white;color:\", \";\"], function (props) {\n  return props.theme.black;\n});\n_c = StyledPage;\nvar Inner = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"Page__Inner\",\n  componentId: \"sc-4u7a64-1\"\n})([\"max-width:\", \";margin:0 auto;padding:2rem;\"], function (props) {\n  return props.theme.maxWidth;\n});\n_c2 = Inner;\nObject(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"createGlobalStyle\"])(_templateObject());\n\nvar Page = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Page, _Component);\n\n  var _super = _createSuper(Page);\n\n  function Page() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Page);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Page, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"ThemeProvider\"], {\n        theme: theme,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, __jsx(StyledPage, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }\n      }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 17\n        }\n      }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 17\n        }\n      }), __jsx(Inner, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 15\n        }\n      }, this.props.children)));\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledPage\");\n$RefreshReg$(_c2, \"Inner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzPzE3NWMiXSwibmFtZXMiOlsidGhlbWUiLCJyZWQiLCJibGFjayIsImdyZXkiLCJsaWdodGdyZXkiLCJvZmZXaGl0ZSIsIm1heFdpZHRoIiwiYnMiLCJTdHlsZWRQYWdlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJJbm5lciIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUGFnZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUMwRTs7QUFDMUU7QUFDQTtBQUdBLElBQU1BLEtBQUssR0FBRztBQUNWQyxLQUFHLEVBQUMsU0FETTtBQUVWQyxPQUFLLEVBQUMsU0FGSTtBQUdWQyxNQUFJLEVBQUMsU0FISztBQUlWQyxXQUFTLEVBQUMsU0FKQTtBQUtWQyxVQUFRLEVBQUMsU0FMQztBQU1WQyxVQUFRLEVBQUMsUUFOQztBQU9WQyxJQUFFLEVBQUMsZ0NBUE8sQ0FPeUI7O0FBUHpCLENBQWQ7QUFVQSxJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUNBRVIsVUFBQUMsS0FBSztBQUFBLFNBQUVBLEtBQUssQ0FBQ1gsS0FBTixDQUFZRSxLQUFkO0FBQUEsQ0FGRyxDQUFoQjtLQUFNTSxVO0FBS04sSUFBTUksS0FBSyxHQUFFSCx5REFBTSxDQUFDQyxHQUFUO0FBQUE7QUFBQTtBQUFBLG1EQUNDLFVBQUFDLEtBQUs7QUFBQSxTQUFFQSxLQUFLLENBQUNYLEtBQU4sQ0FBWU0sUUFBZDtBQUFBLENBRE4sQ0FBWDtNQUFNTSxLO0FBTU5DLDJFQUFpQixtQkFBakI7O0lBdUJxQkMsSTs7Ozs7Ozs7Ozs7Ozs2QkFDUjtBQUNMLGFBQ0ksTUFBQywrREFBRDtBQUFlLGFBQUssRUFBRWQsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVEsS0FBS1csS0FBTCxDQUFXSSxRQUFuQixDQUhGLENBREEsQ0FESjtBQVNIOzs7O0VBWDZCQywrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlcixjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnOy8vaW5qZWN0R2xvYmFsIGlzIGRlcHJlY2F0ZSBzbyB1c2UgY3JlYXRlR2xvYmFsU3R5bGVcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJztcblxuXG5jb25zdCB0aGVtZSA9IHtcbiAgICByZWQ6XCIjRkYwMDAwXCIsXG4gICAgYmxhY2s6XCIjMzkzOTM5XCIsXG4gICAgZ3JleTpcIiMzQTNBM0FcIixcbiAgICBsaWdodGdyZXk6JyNFMUUxRTEnLFxuICAgIG9mZldoaXRlOicjRURFREVEJyxcbiAgICBtYXhXaWR0aDonMTAwMHB4JyxcbiAgICBiczonMCAxMnB4IDI0cHggMCByZ2JhKDAsMCwwLDAuMDkpJy8vYm94IHNoYWRvd1xufTtcblxuY29uc3QgU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXG5iYWNrZ3JvdW5kOndoaXRlO1xuY29sb3I6JHtwcm9wcz0+cHJvcHMudGhlbWUuYmxhY2t9O1xuYDtcblxuY29uc3QgSW5uZXIgPXN0eWxlZC5kaXZgXG5tYXgtd2lkdGg6JHtwcm9wcz0+cHJvcHMudGhlbWUubWF4V2lkdGh9O1xubWFyZ2luOjAgYXV0bztcbnBhZGRpbmc6MnJlbTtcbmA7XG5cbmNyZWF0ZUdsb2JhbFN0eWxlYFxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6J3JhZG5pa2FfbmV4dCcgO1xuICAgIHNyYzogdXJsKCcvc3RhdGljL3JhZG5pa2FuZXh0LW1lZGl1bS13ZWJmb250LndvZmYyJylcbiAgICBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xufVxuaHRtbHtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOjEwcHg7XG59XG4qLCAqOmJlZm9yZSwgKjphZnRlcntcbiAgICBib3gtc2l6aW5nOmluaGVyaXQ7XG59XG5ib2R5e1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBmb250LXNpemU6MS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OjI7XG59XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPFN0eWxlZFBhZ2U+XG4gICAgICAgICAgICAgICAgPE1ldGEvPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgICA8SW5uZXI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9Jbm5lcj4gIFxuICAgICAgICAgICAgPC9TdHlsZWRQYWdlPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ })

})