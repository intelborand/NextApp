"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Carousel.module.css */ \"./styles/Carousel.module.css\");\n/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\nvar Carousel = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Carousel, Component1);\n    var _super = _createSuper(Carousel);\n    function Carousel(props) {\n        _classCallCheck(this, Carousel);\n        return _super.call(this, props);\n    }\n    _createClass(Carousel, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var settings = {\n                    dots: true,\n                    infinite: false,\n                    speed: 500,\n                    slidesToShow: 6,\n                    slidesToScroll: 4,\n                    initialSlide: 0,\n                    responsive: [\n                        {\n                            breakpoint: 1024,\n                            settings: {\n                                slidesToShow: 3,\n                                slidesToScroll: 3,\n                                infinite: true,\n                                dots: true\n                            }\n                        },\n                        {\n                            breakpoint: 600,\n                            settings: {\n                                slidesToShow: 2,\n                                slidesToScroll: 2,\n                                initialSlide: 2\n                            }\n                        },\n                        {\n                            breakpoint: 480,\n                            settings: {\n                                slidesToShow: 1,\n                                slidesToScroll: 1\n                            }\n                        }\n                    ]\n                };\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().carousel),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" \",\n                                this.props.title,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, settings, {\n                            children: [\n                                1,\n                                2,\n                                3,\n                                4,\n                                5,\n                                6,\n                                7,\n                                8\n                            ].map(function(item, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),\n                                            children: item\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc) - item,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    children: \"JDKXK\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 25\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"xczdfS\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true);\n                            })\n                        }), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return Carousel;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNSO0FBRWlCO0FBRW5DLFlBQWMsaUJBTHpCOzs7O2FBS2lCSSxRQUFRLENBRWJDLEtBQUs7O2lDQUNQQSxLQUFLOzs7O1lBR2pCQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRzs7Z0JBQ0wsSUFBSUMsUUFBUSxHQUFHO29CQUNmQyxJQUFJLEVBQUUsSUFBSTtvQkFDVkMsUUFBUSxFQUFFLEtBQUs7b0JBQ2ZDLEtBQUssRUFBRSxHQUFHO29CQUNWQyxZQUFZLEVBQUUsQ0FBQztvQkFDZkMsY0FBYyxFQUFFLENBQUM7b0JBQ2pCQyxZQUFZLEVBQUUsQ0FBQztvQkFDZkMsVUFBVSxFQUFFO3dCQUNWOzRCQUNFQyxVQUFVLEVBQUUsSUFBSTs0QkFDaEJSLFFBQVEsRUFBRTtnQ0FDUkksWUFBWSxFQUFFLENBQUM7Z0NBQ2ZDLGNBQWMsRUFBRSxDQUFDO2dDQUNqQkgsUUFBUSxFQUFFLElBQUk7Z0NBQ2RELElBQUksRUFBRSxJQUFJOzZCQUNYO3lCQUNGO3dCQUNEOzRCQUNFTyxVQUFVLEVBQUUsR0FBRzs0QkFDZlIsUUFBUSxFQUFFO2dDQUNSSSxZQUFZLEVBQUUsQ0FBQztnQ0FDZkMsY0FBYyxFQUFFLENBQUM7Z0NBQ2pCQyxZQUFZLEVBQUUsQ0FBQzs2QkFDaEI7eUJBQ0Y7d0JBQ0Q7NEJBQ0VFLFVBQVUsRUFBRSxHQUFHOzRCQUNmUixRQUFRLEVBQUU7Z0NBQ1JJLFlBQVksRUFBRSxDQUFDO2dDQUNmQyxjQUFjLEVBQUUsQ0FBQzs2QkFDbEI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QscUJBQ0UsOERBQUNJLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWQsNkVBQWU7O3NDQUM3Qiw4REFBQ2dCLElBQUU7O2dDQUFDLEdBQUM7Z0NBQUMsSUFBSSxDQUFDZCxLQUFLLENBQUNlLEtBQUs7Z0NBQUMsR0FBQzs7Ozs7O2dDQUFLO3NDQUM3Qiw4REFBQ2xCLG1EQUFNLG9CQUFLSyxRQUFRO3NDQUNqQjtBQUFDLGlDQUFDO0FBQUMsaUNBQUM7QUFBQyxpQ0FBQztBQUFDLGlDQUFDO0FBQUMsaUNBQUM7QUFBQyxpQ0FBQztBQUFDLGlDQUFDO0FBQUMsaUNBQUM7NkJBQUMsQ0FBQ2MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO2dDQUNwQyxxQkFDSTs7c0RBQ0UsOERBQUNQLEtBQUc7NENBQUNDLFNBQVMsRUFBRWQseUVBQVc7c0RBQWVtQixJQUFJOzJDQUFaQyxLQUFLOzs7O2lEQUFjO3NEQUNyRCw4REFBQ1AsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFFZCx5RUFBVyxHQUFDbUIsSUFBSTs7OERBQzVCLDhEQUFDRyxJQUFFOzhEQUFDLE9BQUs7Ozs7O3lEQUFLOzhEQUNkLDhEQUFDQyxHQUFDOzhEQUFDLFFBQU07Ozs7O3lEQUFJOzs7Ozs7aURBQ1g7O2dEQUNMLENBRU47NkJBQ0YsQ0FBQzs7Ozs7Z0NBQ0c7Ozs7Ozt3QkFDTCxDQUNOO2FBQ0g7Ozs7Q0FDRixDQTdEcUN6Qiw0Q0FBUyxDQTZEOUM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzPzI3YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2Fyb3VzZWwubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICBzcGVlZDogNTAwLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgIDxoMj4ge3RoaXMucHJvcHMudGl0bGV9IDwvaDI+XHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAge1sxLDIsMyw0LDUsNiw3LDhdLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0ga2V5PXtpbmRleH0+e2l0ZW19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjLWl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+SkRLWEs8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD54Y3pkZlM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJzdHlsZXMiLCJDYXJvdXNlbCIsInByb3BzIiwicmVuZGVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW5pdGlhbFNsaWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJvdXNlbCIsImgyIiwidGl0bGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkZXNjIiwiaDUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

});