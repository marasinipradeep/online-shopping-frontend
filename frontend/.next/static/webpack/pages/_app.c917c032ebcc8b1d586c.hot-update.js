webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _jsxFileName = \"/Users/pradeepmarasini/Desktop/OnlineShoppingFrontEnd/online-shopping-frontend/frontend/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n  displayName: \"Header__Logo\",\n  componentId: \"sc-2cpreo-0\"\n})([\"font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:\", \";color:white;text-transform:uppercase;text-decoration:none;}@media(max-width:1300px){margin:0;text-align:center;}\"], function (props) {\n  return props.theme.red;\n});\n_c = Logo;\nvar StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header.withConfig({\n  displayName: \"Header__StyledHeader\",\n  componentId: \"sc-2cpreo-1\"\n})([\".bar{border-bottom:10px solid \", \";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}\"], function (props) {\n  return props.theme.black;\n});\n_c2 = StyledHeader;\nfunction Header() {\n  return __jsx(StyledHeader, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"bar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(Logo, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 25\n    }\n  }, \"Slick Fits\"))), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"sub-bar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"Search\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"Cart\"));\n}\n_c3 = Header;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Logo\");\n$RefreshReg$(_c2, \"StyledHeader\");\n$RefreshReg$(_c3, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJMb2dvIiwic3R5bGVkIiwiaDEiLCJwcm9wcyIsInRoZW1lIiwicmVkIiwiU3R5bGVkSGVhZGVyIiwiaGVhZGVyIiwiYmxhY2siLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLGlQQVFPLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBaEI7QUFBQSxDQVJaLENBQVY7S0FBTUwsSTtBQW1CTixJQUFNTSxZQUFZLEdBQUdMLHlEQUFNLENBQUNNLE1BQVY7QUFBQTtBQUFBO0FBQUEsMklBRWEsVUFBQUosS0FBSztBQUFBLFNBQUVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxLQUFkO0FBQUEsQ0FGbEIsQ0FBbEI7TUFBTUYsWTtBQVlTLFNBQVNHLE1BQVQsR0FBa0I7QUFDN0IsU0FDSSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBREosQ0FESixFQU1JLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBREosRUFVSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosQ0FWSixFQWNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSixDQURKO0FBbUJIO01BcEJ1QkEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcbmZvbnQtc2l6ZTo0cmVtO1xubWFyZ2luLWxlZnQ6MnJlbTtcbnBvc2l0aW9uOnJlbGF0aXZlO1xuei1pbmRleDoyO1xudHJhbnNmb3JtOnNrZXcoLTdkZWcpO1xuYXtcbiAgICBwYWRkaW5nOjAuNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQ6JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yZWR9O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbkBtZWRpYShtYXgtd2lkdGg6MTMwMHB4KXtcbiAgICBtYXJnaW46MDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbmA7XG5cbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4uYmFye1xuICAgIGJvcmRlci1ib3R0b206MTBweCBzb2xpZCAke3Byb3BzPT5wcm9wcy50aGVtZS5ibGFja307XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIDFmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczpzdHJldGNoO1xuICAgIFxufVxuXG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkSGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNsaWNrIEZpdHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0xvZ28+XG4gICAgICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWJhclwiPlxuICAgICAgICAgICAgICAgIDxwID5TZWFyY2g8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5DYXJ0PC9kaXY+XG5cbiAgICAgICAgPC9TdHlsZWRIZWFkZXI+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})