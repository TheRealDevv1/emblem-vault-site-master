(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./components/KeysModal.tsx":
/*!**********************************!*\
  !*** ./components/KeysModal.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeysModal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ \"./node_modules/copy-to-clipboard/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./constants.ts\");\nvar _jsxFileName = \"/Users/shannoncode/repo/Emblem.Currentwork/emblem-vault-site/components/KeysModal.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction KeysModal(_ref) {\n  _s();\n\n  var _this = this;\n\n  var isOpen = _ref.isOpen,\n      onClose = _ref.onClose,\n      mnemonic = _ref.mnemonic,\n      privKeyBTC = _ref.privKeyBTC,\n      privKeyETH = _ref.privKeyETH,\n      privValues = _ref.privValues,\n      addresses = _ref.addresses;\n  var phrase = mnemonic;\n  var btcKey = privKeyBTC;\n  var ethKey = privKeyETH;\n  var values = privValues;\n\n  var _useColorMode = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"])(),\n      colorMode = _useColorMode.colorMode;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      phraseCopied = _useState[0],\n      setPhraseCopied = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (phraseCopied) {\n      var timeout = setTimeout(function () {\n        setPhraseCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [phraseCopied]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      BTCKeyCopied = _useState2[0],\n      setBTCKeyCopied = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (BTCKeyCopied) {\n      var timeout = setTimeout(function () {\n        setBTCKeyCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [BTCKeyCopied]);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      ETHKeyCopied = _useState3[0],\n      setETHKeyCopied = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (ETHKeyCopied) {\n      var timeout = setTimeout(function () {\n        setETHKeyCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [ETHKeyCopied]);\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      BCHKeyCopied = _useState4[0],\n      setBCHKeyCopied = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (BCHKeyCopied) {\n      var timeout = setTimeout(function () {\n        setBCHKeyCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [BCHKeyCopied]);\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      valueCopied = _useState5[0],\n      setValueCopied = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (valueCopied) {\n      var timeout = setTimeout(function () {\n        setValueCopied(false);\n      }, 750);\n      return function () {\n        clearTimeout(timeout);\n      };\n    }\n  }, [valueCopied]);\n\n  function copyWithFlag(content, whichOne) {\n    copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(content);\n    whichOne == 'phrase' ? setPhraseCopied(true) : whichOne == 'BTCKey' ? setBTCKeyCopied(true) : whichOne == 'ETHKey' ? setETHKeyCopied(true) : whichOne == 'BCHKey' ? setBCHKeyCopied(true) : whichOne == 'values' ? setValueCopied(true) : null;\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    isOpen: isOpen,\n    onClose: onClose,\n    isCentered: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalOverlay\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalContent\"], {\n    color: _constants__WEBPACK_IMPORTED_MODULE_3__[\"COLOR\"][colorMode],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalHeader\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 11\n    }\n  }, \"Your Vault Keys\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalCloseButton\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ModalBody\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"column\",\n    mb: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 15\n    }\n  }, \"Your mnemonic phrase (click to copy):\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    width: \"100%\",\n    whiteSpace: \"unset\",\n    height: \"unset\",\n    p: 2,\n    onClick: function onClick() {\n      return copyWithFlag(phrase, 'phrase');\n    },\n    isActive: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 15\n    }\n  }, phraseCopied ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 33\n    }\n  }, \"Copied!\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 56\n    }\n  }, phrase))), privValues && privValues.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n    direction: \"row\",\n    mt: 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 15\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 17\n    }\n  }, \"Your Values (click to copy): \")), privValues.map(function (item, index) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      direction: \"row\",\n      key: index,\n      justify: \"space-between\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      isTruncated: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 21\n      }\n    }, item.key), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      whiteSpace: \"unset\",\n      height: \"unset\",\n      p: 2,\n      onClick: function onClick() {\n        return copyWithFlag(item.value, 'values');\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 21\n      }\n    }, valueCopied ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 38\n      }\n    }, \"Copied!\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      isTruncated: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 61\n      }\n    }, item.value)));\n  })) : null, addresses.length > 0 ? addresses.map(function (item, index) {\n    // if (item.coin == \"BCH\")\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      direction: \"row\",\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 21\n      }\n    }, \"Your \", item.coin, \" private key (click to copy):\")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      direction: \"row\",\n      justify: \"space-between\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 195,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      whiteSpace: \"unset\",\n      height: \"unset\",\n      p: 2,\n      onClick: function onClick() {\n        return copyWithFlag(item.key, 'BCHKey');\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 196,\n        columnNumber: 21\n      }\n    }, BCHKeyCopied ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 197,\n        columnNumber: 39\n      }\n    }, \"Copied!\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n      isTruncated: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 197,\n        columnNumber: 62\n      }\n    }, item.key))));\n  }) : null))));\n}\n\n_s(KeysModal, \"87W3d/IeqLasVw0GFhPIXFn3xag=\", false, function () {\n  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"useColorMode\"]];\n});\n\n_c = KeysModal;\n\nvar _c;\n\n$RefreshReg$(_c, \"KeysModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9LZXlzTW9kYWwudHN4P2QxYjAiXSwibmFtZXMiOlsiS2V5c01vZGFsIiwiaXNPcGVuIiwib25DbG9zZSIsIm1uZW1vbmljIiwicHJpdktleUJUQyIsInByaXZLZXlFVEgiLCJwcml2VmFsdWVzIiwiYWRkcmVzc2VzIiwicGhyYXNlIiwiYnRjS2V5IiwiZXRoS2V5IiwidmFsdWVzIiwidXNlQ29sb3JNb2RlIiwiY29sb3JNb2RlIiwidXNlU3RhdGUiLCJwaHJhc2VDb3BpZWQiLCJzZXRQaHJhc2VDb3BpZWQiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkJUQ0tleUNvcGllZCIsInNldEJUQ0tleUNvcGllZCIsIkVUSEtleUNvcGllZCIsInNldEVUSEtleUNvcGllZCIsIkJDSEtleUNvcGllZCIsInNldEJDSEtleUNvcGllZCIsInZhbHVlQ29waWVkIiwic2V0VmFsdWVDb3BpZWQiLCJjb3B5V2l0aEZsYWciLCJjb250ZW50Iiwid2hpY2hPbmUiLCJjb3B5IiwiQ09MT1IiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJ2YWx1ZSIsImNvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWUE7QUFDQTtBQU1lLFNBQVNBLFNBQVQsT0FnQkM7QUFBQTs7QUFBQTs7QUFBQSxNQWZkQyxNQWVjLFFBZmRBLE1BZWM7QUFBQSxNQWRkQyxPQWNjLFFBZGRBLE9BY2M7QUFBQSxNQWJkQyxRQWFjLFFBYmRBLFFBYWM7QUFBQSxNQVpkQyxVQVljLFFBWmRBLFVBWWM7QUFBQSxNQVhkQyxVQVdjLFFBWGRBLFVBV2M7QUFBQSxNQVZkQyxVQVVjLFFBVmRBLFVBVWM7QUFBQSxNQVRkQyxTQVNjLFFBVGRBLFNBU2M7QUFDZCxNQUFNQyxNQUFNLEdBQUdMLFFBQWY7QUFDQSxNQUFNTSxNQUFNLEdBQUdMLFVBQWY7QUFDQSxNQUFNTSxN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RTtBQUFBLGVBQU1YLFlBQVksQ0FBQ08sSUFBSSxDQUFDRSxHQUFOLEVBQVcsUUFBWCxDQUFsQjtBQUFBLE9BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR2IsWUFBWSxHQUFHLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxHQUEwQixNQUFDLG9EQUFEO0FBQU0saUJBQVcsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQlcsSUFBSSxDQUFDRSxHQUF4QixDQUR6QyxDQURGLENBTEYsQ0FERjtBQWFELEdBZnVCLENBQXZCLEdBZUcsSUF6RU4sQ0FERixDQUxGLENBRkYsQ0FERjtBQTBHRDs7R0E3TXVCdEMsUztVQXFCQVksNEQ7OztLQXJCQVosUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvS2V5c01vZGFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIE1vZGFsLFxuICBNb2RhbE92ZXJsYXksXG4gIE1vZGFsQ29udGVudCxcbiAgTW9kYWxIZWFkZXIsXG4gIE1vZGFsQ2xvc2VCdXR0b24sXG4gIE1vZGFsQm9keSxcbiAgVGV4dCxcbiAgU3RhY2ssXG4gIEJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCdcbmltcG9ydCB7IENPTE9SIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgYWRkcmVzcyB9IGZyb20gJ2JpdGNvaW5qcy1saWInXG5pbnRlcmZhY2UgRGF0YVZhbHVlcyB7XG4gIGtleTogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleXNNb2RhbCh7XG4gIGlzT3BlbixcbiAgb25DbG9zZSxcbiAgbW5lbW9uaWMsXG4gIHByaXZLZXlCVEMsXG4gIHByaXZLZXlFVEgsXG4gIHByaXZWYWx1ZXMsXG4gIGFkZHJlc3Nlc1xufToge1xuICBpc09wZW46IGJvb2xlYW5cbiAgb25DbG9zZTogKCkgPT4gdm9pZFxuICBtbmVtb25pYzogc3RyaW5nXG4gIHByaXZLZXlCVEM6IHN0cmluZ1xuICBwcml2S2V5RVRIOiBzdHJpbmdcbiAgcHJpdlZhbHVlczogQXJyYXk8b2JqZWN0PlxuICBhZGRyZXNzZXM6IGFueVxufSk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgcGhyYXNlID0gbW5lbW9uaWNcbiAgY29uc3QgYnRjS2V5ID0gcHJpdktleUJUQ1xuICBjb25zdCBldGhLZXkgPSBwcml2S2V5RVRIXG4gIGNvbnN0IHZhbHVlcyA9IHByaXZWYWx1ZXNcbiAgY29uc3QgeyBjb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG5cbiAgY29uc3QgW3BocmFzZUNvcGllZCwgc2V0UGhyYXNlQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBocmFzZUNvcGllZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRQaHJhc2VDb3BpZWQoZmFsc2UpXG4gICAgICB9LCA3NTApXG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwaHJhc2VDb3BpZWRdKVxuXG4gIGNvbnN0IFtCVENLZXlDb3BpZWQsIHNldEJUQ0tleUNvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoQlRDS2V5Q29waWVkKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEJUQ0tleUNvcGllZChmYWxzZSlcbiAgICAgIH0sIDc1MClcbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW0JUQ0tleUNvcGllZF0pXG5cbiAgY29uc3QgW0VUSEtleUNvcGllZCwgc2V0RVRIS2V5Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChFVEhLZXlDb3BpZWQpIHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0RVRIS2V5Q29waWVkKGZhbHNlKVxuICAgICAgfSwgNzUwKVxuICAgICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbRVRIS2V5Q29waWVkXSlcblxuICBjb25zdCBbQkNIS2V5Q29waWVkLCBzZXRCQ0hLZXlDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKEJDSEtleUNvcGllZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRCQ0hLZXlDb3BpZWQoZmFsc2UpXG4gICAgICB9LCA3NTApXG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtCQ0hLZXlDb3BpZWRdKVxuXG4gIGNvbnN0IFt2YWx1ZUNvcGllZCwgc2V0VmFsdWVDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlQ29waWVkKSB7XG4gICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFZhbHVlQ29waWVkKGZhbHNlKVxuICAgICAgfSwgNzUwKVxuICAgICAgcmV0dXJuICgpOiB2b2lkID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmFsdWVDb3BpZWRdKVxuXG4gIGZ1bmN0aW9uIGNvcHlXaXRoRmxhZyhjb250ZW50OiBzdHJpbmcsIHdoaWNoT25lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb3B5KGNvbnRlbnQpXG4gICAgd2hpY2hPbmUgPT0gJ3BocmFzZSdcbiAgICAgID8gc2V0UGhyYXNlQ29waWVkKHRydWUpXG4gICAgICA6IHdoaWNoT25lID09ICdCVENLZXknXG4gICAgICA/IHNldEJUQ0tleUNvcGllZCh0cnVlKVxuICAgICAgOiB3aGljaE9uZSA9PSAnRVRIS2V5J1xuICAgICAgPyBzZXRFVEhLZXlDb3BpZWQodHJ1ZSlcbiAgICAgIDogd2hpY2hPbmUgPT0gJ0JDSEtleSdcbiAgICAgID8gc2V0QkNIS2V5Q29waWVkKHRydWUpXG4gICAgICA6IHdoaWNoT25lID09ICd2YWx1ZXMnXG4gICAgICA/IHNldFZhbHVlQ29waWVkKHRydWUpXG4gICAgICA6IG51bGxcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9e29uQ2xvc2V9IGlzQ2VudGVyZWQ+XG4gICAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgICA8TW9kYWxDb250ZW50IGNvbG9yPXtDT0xPUltjb2xvck1vZGVdfT5cbiAgICAgICAgPE1vZGFsSGVhZGVyPlxuICAgICAgICAgIDxUZXh0PllvdXIgVmF1bHQgS2V5czwvVGV4dD5cbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgbWI9ezEwfT5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgPFRleHQ+WW91ciBtbmVtb25pYyBwaHJhc2UgKGNsaWNrIHRvIGNvcHkpOjwvVGV4dD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U9XCJ1bnNldFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwidW5zZXRcIlxuICAgICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVdpdGhGbGFnKHBocmFzZSwgJ3BocmFzZScpfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXt0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BocmFzZUNvcGllZCA/IDxUZXh0PkNvcGllZCE8L1RleHQ+IDogPFRleHQ+e3BocmFzZX08L1RleHQ+fVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgICAgICAgIHsvKiA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgbXQ9ezR9PlxuICAgICAgICAgICAgICA8VGV4dD5Zb3VyIEJUQyBwcml2YXRlIGtleSAoY2xpY2sgdG8gY29weSk6PC9UZXh0PlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gd2hpdGVTcGFjZT1cInVuc2V0XCIgaGVpZ2h0PVwidW5zZXRcIiBwPXsyfSBvbkNsaWNrPXsoKSA9PiBjb3B5V2l0aEZsYWcoYnRjS2V5LCAnQlRDS2V5Jyl9PlxuICAgICAgICAgICAgICAgIHtCVENLZXlDb3BpZWQgPyA8VGV4dD5Db3BpZWQhPC9UZXh0PiA6IDxUZXh0IGlzVHJ1bmNhdGVkPntidGNLZXl9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgbXQ9ezR9PlxuICAgICAgICAgICAgICA8VGV4dD5Zb3VyIEVUSCBwcml2YXRlIGtleSAoY2xpY2sgdG8gY29weSk6PC9UZXh0PlxuICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gd2hpdGVTcGFjZT1cInVuc2V0XCIgaGVpZ2h0PVwidW5zZXRcIiBwPXsyfSBvbkNsaWNrPXsoKSA9PiBjb3B5V2l0aEZsYWcoZXRoS2V5LCAnRVRIS2V5Jyl9PlxuICAgICAgICAgICAgICAgIHtFVEhLZXlDb3BpZWQgPyA8VGV4dD5Db3BpZWQhPC9UZXh0PiA6IDxUZXh0IGlzVHJ1bmNhdGVkPntldGhLZXl9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPiAqL31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge3ByaXZWYWx1ZXMgJiYgcHJpdlZhbHVlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIG10PXs0fT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFRleHQ+WW91ciBWYWx1ZXMgKGNsaWNrIHRvIGNvcHkpOiA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIHtwcml2VmFsdWVzLm1hcCgoaXRlbTogRGF0YVZhbHVlcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGtleT17aW5kZXh9IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGlzVHJ1bmNhdGVkPntpdGVtLmtleX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2hpdGVTcGFjZT1cInVuc2V0XCIgaGVpZ2h0PVwidW5zZXRcIiBwPXsyfSBvbkNsaWNrPXsoKSA9PiBjb3B5V2l0aEZsYWcoaXRlbS52YWx1ZSwgJ3ZhbHVlcycpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWVDb3BpZWQgPyA8VGV4dD5Db3BpZWQhPC9UZXh0PiA6IDxUZXh0IGlzVHJ1bmNhdGVkPntpdGVtLnZhbHVlfTwvVGV4dD59XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvPiBcbiAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHthZGRyZXNzZXMubGVuZ3RoID4gMCA/IGFkZHJlc3Nlcy5tYXAoKGl0ZW06IGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgLy8gaWYgKGl0ZW0uY29pbiA9PSBcIkJDSFwiKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgbXQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5Zb3VyIHtpdGVtLmNvaW59IHByaXZhdGUga2V5IChjbGljayB0byBjb3B5KTo8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB3aGl0ZVNwYWNlPVwidW5zZXRcIiBoZWlnaHQ9XCJ1bnNldFwiIHA9ezJ9IG9uQ2xpY2s9eygpID0+IGNvcHlXaXRoRmxhZyhpdGVtLmtleSwgJ0JDSEtleScpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7QkNIS2V5Q29waWVkID8gPFRleHQ+Q29waWVkITwvVGV4dD4gOiA8VGV4dCBpc1RydW5jYXRlZD57aXRlbS5rZXl9PC9UZXh0Pn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTogbnVsbH1cblxuICAgICAgICAgICAgey8qIHthZGRyZXNzZXMubGVuZ3RoID4gMCA/IGFkZHJlc3Nlcy5tYXAoKGl0ZW06IGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uY29pbiA9PSBcIk5NQ1wiKVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgbXQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5Zb3VyIE5NQyBwcml2YXRlIGtleSAoY2xpY2sgdG8gY29weSk6PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gd2hpdGVTcGFjZT1cInVuc2V0XCIgaGVpZ2h0PVwidW5zZXRcIiBwPXsyfSBvbkNsaWNrPXsoKSA9PiBjb3B5V2l0aEZsYWcoaXRlbS5rZXksICdCQ0hLZXknKX0+XG4gICAgICAgICAgICAgICAgICAgICAge0JDSEtleUNvcGllZCA/IDxUZXh0PkNvcGllZCE8L1RleHQ+IDogPFRleHQgaXNUcnVuY2F0ZWQ+e2l0ZW0ua2V5fTwvVGV4dD59XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk6IG51bGx9ICovfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICA8L01vZGFsQ29udGVudD5cbiAgICA8L01vZGFsPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/KeysModal.tsx\n");

/***/ })

}]);