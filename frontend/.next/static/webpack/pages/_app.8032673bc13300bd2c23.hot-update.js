webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Meta */ \"./components/Meta.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/pradeepmarasini/Desktop/OnlineShoppingFrontEnd/online-shopping-frontend/frontend/components/Page.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\"\\n@fon-@font-face {\\n    font-family:\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([\" ;\\n    src: url();\\n}\\nhtml{\\n    box-sizing:border-box;\\n    font-size:10px;\\n}\\n*, *:before, *:after{\\n    box-sizing:inherit;\\n}\\nbody{\\n    padding:0;\\n    margin:0;\\n    font-size:1.5rem;\\n    line-height:2;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n //injectGlobal is deprecate so use createGlobalStyle\n\n\n\nvar theme = {\n  red: \"#FF0000\",\n  black: \"#393939\",\n  grey: \"#3A3A3A\",\n  lightgrey: '#E1E1E1',\n  offWhite: '#EDEDED',\n  maxWidth: '1000px',\n  bs: '0 12px 24px 0 rgba(0,0,0,0.09)' //box shadow\n\n};\nvar StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"Page__StyledPage\",\n  componentId: \"sc-4u7a64-0\"\n})([\"background:white;color:\", \";\"], function (props) {\n  return props.theme.black;\n});\n_c = StyledPage;\nvar Inner = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  displayName: \"Page__Inner\",\n  componentId: \"sc-4u7a64-1\"\n})([\"max-width:\", \";margin:0 auto;padding:2rem;\"], function (props) {\n  return props.theme.maxWidth;\n});\n_c2 = Inner;\nObject(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"createGlobalStyle\"])(_templateObject2())(_templateObject());\n\nvar Page = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Page, _Component);\n\n  var _super = _createSuper(Page);\n\n  function Page() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Page);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Page, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_7__[\"ThemeProvider\"], {\n        theme: theme,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }\n      }, __jsx(StyledPage, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }\n      }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 17\n        }\n      }), __jsx(Inner, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 15\n        }\n      }, this.props.children)));\n    }\n  }]);\n\n  return Page;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n\n\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledPage\");\n$RefreshReg$(_c2, \"Inner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzPzE3NWMiXSwibmFtZXMiOlsidGhlbWUiLCJyZWQiLCJibGFjayIsImdyZXkiLCJsaWdodGdyZXkiLCJvZmZXaGl0ZSIsIm1heFdpZHRoIiwiYnMiLCJTdHlsZWRQYWdlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJJbm5lciIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUGFnZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FDMEU7O0FBQzFFO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUc7QUFDVkMsS0FBRyxFQUFDLFNBRE07QUFFVkMsT0FBSyxFQUFDLFNBRkk7QUFHVkMsTUFBSSxFQUFDLFNBSEs7QUFJVkMsV0FBUyxFQUFDLFNBSkE7QUFLVkMsVUFBUSxFQUFDLFNBTEM7QUFNVkMsVUFBUSxFQUFDLFFBTkM7QUFPVkMsSUFBRSxFQUFDLGdDQVBPLENBT3lCOztBQVB6QixDQUFkO0FBVUEsSUFBTUMsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUVSLFVBQUFDLEtBQUs7QUFBQSxTQUFFQSxLQUFLLENBQUNYLEtBQU4sQ0FBWUUsS0FBZDtBQUFBLENBRkcsQ0FBaEI7S0FBTU0sVTtBQUtOLElBQU1JLEtBQUssR0FBRUgseURBQU0sQ0FBQ0MsR0FBVDtBQUFBO0FBQUE7QUFBQSxtREFDQyxVQUFBQyxLQUFLO0FBQUEsU0FBRUEsS0FBSyxDQUFDWCxLQUFOLENBQVlNLFFBQWQ7QUFBQSxDQUROLENBQVg7TUFBTU0sSztBQU1OQywyRUFBaUIsb0JBQWpCOztJQW9CcUJDLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ1I7QUFDTCxhQUNJLE1BQUMsK0RBQUQ7QUFBZSxhQUFLLEVBQUVkLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFHRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRLEtBQUtXLEtBQUwsQ0FBV0ksUUFBbkIsQ0FIRixDQURBLENBREo7QUFTSDs7OztFQVg2QkMsK0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwge1RoZW1lUHJvdmlkZXIsY3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJzsvL2luamVjdEdsb2JhbCBpcyBkZXByZWNhdGUgc28gdXNlIGNyZWF0ZUdsb2JhbFN0eWxlXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBNZXRhIGZyb20gJy4vTWV0YSc7XG5cblxuY29uc3QgdGhlbWUgPSB7XG4gICAgcmVkOlwiI0ZGMDAwMFwiLFxuICAgIGJsYWNrOlwiIzM5MzkzOVwiLFxuICAgIGdyZXk6XCIjM0EzQTNBXCIsXG4gICAgbGlnaHRncmV5OicjRTFFMUUxJyxcbiAgICBvZmZXaGl0ZTonI0VERURFRCcsXG4gICAgbWF4V2lkdGg6JzEwMDBweCcsXG4gICAgYnM6JzAgMTJweCAyNHB4IDAgcmdiYSgwLDAsMCwwLjA5KScvL2JveCBzaGFkb3dcbn07XG5cbmNvbnN0IFN0eWxlZFBhZ2UgPSBzdHlsZWQuZGl2YFxuYmFja2dyb3VuZDp3aGl0ZTtcbmNvbG9yOiR7cHJvcHM9PnByb3BzLnRoZW1lLmJsYWNrfTtcbmA7XG5cbmNvbnN0IElubmVyID1zdHlsZWQuZGl2YFxubWF4LXdpZHRoOiR7cHJvcHM9PnByb3BzLnRoZW1lLm1heFdpZHRofTtcbm1hcmdpbjowIGF1dG87XG5wYWRkaW5nOjJyZW07XG5gO1xuXG5jcmVhdGVHbG9iYWxTdHlsZWBcbkBmb24tQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6YGAgO1xuICAgIHNyYzogdXJsKCk7XG59XG5odG1se1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICBmb250LXNpemU6MTBweDtcbn1cbiosICo6YmVmb3JlLCAqOmFmdGVye1xuICAgIGJveC1zaXppbmc6aW5oZXJpdDtcbn1cbmJvZHl7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6Mjtcbn1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICA8U3R5bGVkUGFnZT5cbiAgICAgICAgICAgICAgICA8TWV0YS8+XG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XG4gICAgICAgICAgICAgIDxJbm5lcj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L0lubmVyPiAgXG4gICAgICAgICAgICA8L1N0eWxlZFBhZ2U+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Page.js\n");

/***/ })

})