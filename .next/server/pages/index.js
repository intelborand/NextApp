/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Carousel.module.css":
/*!************************************!*\
  !*** ./styles/Carousel.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"carousel\": \"Carousel_carousel__7xJF1\",\n\t\"title\": \"Carousel_title__UqDCd\",\n\t\"items\": \"Carousel_items__WcyzV\",\n\t\"item\": \"Carousel_item__BkwdK\",\n\t\"descItem\": \"Carousel_descItem__NxcM_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ2Fyb3VzZWwubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHRlc3RhcHAvLi9zdHlsZXMvQ2Fyb3VzZWwubW9kdWxlLmNzcz81YWI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcm91c2VsXCI6IFwiQ2Fyb3VzZWxfY2Fyb3VzZWxfXzd4SkYxXCIsXG5cdFwidGl0bGVcIjogXCJDYXJvdXNlbF90aXRsZV9fVXFEQ2RcIixcblx0XCJpdGVtc1wiOiBcIkNhcm91c2VsX2l0ZW1zX19XY3l6VlwiLFxuXHRcIml0ZW1cIjogXCJDYXJvdXNlbF9pdGVtX19Ca3dkS1wiLFxuXHRcImRlc2NJdGVtXCI6IFwiQ2Fyb3VzZWxfZGVzY0l0ZW1fX054Y01fXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Carousel.module.css\n");

/***/ }),

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Carousel)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Carousel.module.css */ \"./styles/Carousel.module.css\");\n/* harmony import */ var _styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass Carousel extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n    }\n    render() {\n        var settings = {\n            dots: true,\n            infinite: false,\n            speed: 500,\n            slidesToShow: 6,\n            slidesToScroll: 4,\n            initialSlide: 0,\n            responsive: [\n                {\n                    breakpoint: 1024,\n                    settings: {\n                        slidesToShow: 3,\n                        slidesToScroll: 3,\n                        infinite: true,\n                        dots: true\n                    }\n                },\n                {\n                    breakpoint: 600,\n                    settings: {\n                        slidesToShow: 2,\n                        slidesToScroll: 2,\n                        initialSlide: 2\n                    }\n                },\n                {\n                    breakpoint: 480,\n                    settings: {\n                        slidesToShow: 1,\n                        slidesToScroll: 1\n                    }\n                }\n            ]\n        };\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().carousel),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: [\n                        \" \",\n                        this.props.title,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    ...settings,\n                    children: [\n                        1,\n                        2,\n                        3,\n                        4,\n                        5,\n                        6,\n                        7,\n                        8\n                    ].map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().items),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),\n                                    children: item\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Carousel_module_css__WEBPACK_IMPORTED_MODULE_3___default().descItem),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            children: \"Video Title\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Video describe\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                            lineNumber: 53,\n                            columnNumber: 19\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Carousel.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ1I7QUFFaUI7QUFFbkMsTUFBTUksUUFBUSxTQUFTSCw0Q0FBUztJQUUzQ0ksWUFBWUMsS0FBSyxDQUFDO1FBQ2QsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztLQUNoQjtJQUVIQyxNQUFNLEdBQUc7UUFDTCxJQUFJQyxRQUFRLEdBQUc7WUFDZkMsSUFBSSxFQUFFLElBQUk7WUFDVkMsUUFBUSxFQUFFLEtBQUs7WUFDZkMsS0FBSyxFQUFFLEdBQUc7WUFDVkMsWUFBWSxFQUFFLENBQUM7WUFDZkMsY0FBYyxFQUFFLENBQUM7WUFDakJDLFlBQVksRUFBRSxDQUFDO1lBQ2ZDLFVBQVUsRUFBRTtnQkFDVjtvQkFDRUMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCUixRQUFRLEVBQUU7d0JBQ1JJLFlBQVksRUFBRSxDQUFDO3dCQUNmQyxjQUFjLEVBQUUsQ0FBQzt3QkFDakJILFFBQVEsRUFBRSxJQUFJO3dCQUNkRCxJQUFJLEVBQUUsSUFBSTtxQkFDWDtpQkFDRjtnQkFDRDtvQkFDRU8sVUFBVSxFQUFFLEdBQUc7b0JBQ2ZSLFFBQVEsRUFBRTt3QkFDUkksWUFBWSxFQUFFLENBQUM7d0JBQ2ZDLGNBQWMsRUFBRSxDQUFDO3dCQUNqQkMsWUFBWSxFQUFFLENBQUM7cUJBQ2hCO2lCQUNGO2dCQUNEO29CQUNFRSxVQUFVLEVBQUUsR0FBRztvQkFDZlIsUUFBUSxFQUFFO3dCQUNSSSxZQUFZLEVBQUUsQ0FBQzt3QkFDZkMsY0FBYyxFQUFFLENBQUM7cUJBQ2xCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELHFCQUNFLDhEQUFDSSxLQUFHO1lBQUNDLFNBQVMsRUFBRWYsNkVBQWU7OzhCQUM3Qiw4REFBQ2lCLElBQUU7b0JBQUNGLFNBQVMsRUFBRWYsMEVBQVk7O3dCQUFFLEdBQUM7d0JBQUMsSUFBSSxDQUFDRyxLQUFLLENBQUNlLEtBQUs7d0JBQUMsR0FBQzs7Ozs7O3dCQUFLOzhCQUN0RCw4REFBQ25CLG9EQUFNO29CQUFFLEdBQUdNLFFBQVE7OEJBQ2pCO0FBQUMseUJBQUM7QUFBQyx5QkFBQztBQUFDLHlCQUFDO0FBQUMseUJBQUM7QUFBQyx5QkFBQztBQUFDLHlCQUFDO0FBQUMseUJBQUM7QUFBQyx5QkFBQztxQkFBQyxDQUFDYyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEdBQUs7d0JBQ3BDLHFCQUNJLDhEQUFDUCxLQUFHOzRCQUFDQyxTQUFTLEVBQUVmLDBFQUFZOzs4Q0FDMUIsOERBQUNjLEtBQUc7b0NBQUNDLFNBQVMsRUFBRWYseUVBQVc7OENBQWVvQixJQUFJO21DQUFaQyxLQUFLOzs7O3dDQUFjOzhDQUNyRCw4REFBQ1AsS0FBRztvQ0FBQ0MsU0FBUyxFQUFFZiw2RUFBZTs7c0RBQzNCLDhEQUFDd0IsSUFBRTtzREFBQyxhQUFXOzs7OztnREFBSztzREFDcEIsOERBQUNDLEdBQUM7c0RBQUMsZ0JBQWM7Ozs7O2dEQUFJOzs7Ozs7d0NBQ25COzs7Ozs7Z0NBQ0YsQ0FFVDtxQkFDRixDQUFDOzs7Ozt3QkFDRzs7Ozs7O2dCQUNMLENBQ047S0FDSDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHRlc3RhcHAvLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzPzI3YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2Fyb3VzZWwubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICBzcGVlZDogNTAwLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+IHt0aGlzLnByb3BzLnRpdGxlfSA8L2gzPlxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgIHtbMSwyLDMsNCw1LDYsNyw4XS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBrZXk9e2luZGV4fT57aXRlbX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlZpZGVvIFRpdGxlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmlkZW8gZGVzY3JpYmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJzdHlsZXMiLCJDYXJvdXNlbCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJyZW5kZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImRpdiIsImNsYXNzTmFtZSIsImNhcm91c2VsIiwiaDMiLCJ0aXRsZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIml0ZW1zIiwiZGVzY0l0ZW0iLCJoNSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ }),

/***/ "./components/Video.js":
/*!*****************************!*\
  !*** ./components/Video.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Video)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Video() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        id: \"my-video\",\n        class: \"video-js\",\n        controls: true,\n        preload: \"auto\",\n        width: \"100%\",\n        height: \"800\",\n        poster: \"MyPoster.jpg\",\n        \"data-setup\": \"{}\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                src: \"MY_VIDEO.mp4\",\n                type: \"video/mp4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Video.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                src: \"MY_VIDEO.webm\",\n                type: \"video/webm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Video.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\Video.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFJVixTQUFTQyxLQUFLLEdBQUc7SUFDOUIscUJBQ0UsOERBQUNDLE9BQUs7UUFDRUMsRUFBRSxFQUFDLFVBQVU7UUFDYkMsS0FBSyxFQUFDLFVBQVU7UUFDaEJDLFFBQVE7UUFDUkMsT0FBTyxFQUFDLE1BQU07UUFDZEMsS0FBSyxFQUFDLE1BQU07UUFDWkMsTUFBTSxFQUFDLEtBQUs7UUFDWkMsTUFBTSxFQUFDLGNBQWM7UUFDckJDLFlBQVUsRUFBQyxJQUFJOzswQkFFZiw4REFBQ0MsUUFBTTtnQkFBQ0MsR0FBRyxFQUFDLGNBQWM7Z0JBQUNDLElBQUksRUFBQyxXQUFXOzs7OztvQkFBRzswQkFDOUMsOERBQUNGLFFBQU07Z0JBQUNDLEdBQUcsRUFBQyxlQUFlO2dCQUFDQyxJQUFJLEVBQUMsWUFBWTs7Ozs7b0JBQUc7Ozs7OztZQUMxQyxDQUNmO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdGFwcC8uL2NvbXBvbmVudHMvVmlkZW8uanM/ZmQ4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dmlkZW9cclxuICAgICAgICAgICAgaWQ9XCJteS12aWRlb1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidmlkZW8tanNcIlxyXG4gICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICBwcmVsb2FkPVwiYXV0b1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwMFwiXHJcbiAgICAgICAgICAgIHBvc3Rlcj1cIk15UG9zdGVyLmpwZ1wiXHJcbiAgICAgICAgICAgIGRhdGEtc2V0dXA9XCJ7fVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJNWV9WSURFTy5tcDRcIiB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9XCJNWV9WSURFTy53ZWJtXCIgdHlwZT1cInZpZGVvL3dlYm1cIiAvPlxyXG4gICAgICAgICAgPC92aWRlbz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlkZW8iLCJ2aWRlbyIsImlkIiwiY2xhc3MiLCJjb250cm9scyIsInByZWxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInBvc3RlciIsImRhdGEtc2V0dXAiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Video.js\n");

/***/ }),

/***/ "./components/VideoContent.js":
/*!************************************!*\
  !*** ./components/VideoContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideoContent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ \"./components/Carousel.js\");\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video */ \"./components/Video.js\");\n\n\n\n\nfunction VideoContent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"back-btn\",\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"video-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Video__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                                lineNumber: 14,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"video-desc\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Betsy & Irv trailer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"17d ago - Watch Betsy Sailor's story of survival and unexpected hero, Penn State offensive tackle Irv Pankey, who helped her as she confronted a predator, an institution and a justice system. Now streaming on ESPN+.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"LIVE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                lineNumber: 22,\n                columnNumber: 8\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"TRAILERS\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\components\\\\VideoContent.js\",\n                lineNumber: 23,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZGVvQ29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDUTtBQUNOO0FBRVosU0FBU0csWUFBWSxHQUFHO0lBQ3JDLHFCQUNFOzswQkFDQSw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O2tDQUN0Qiw4REFBQ0MsS0FBRztrQ0FDQSw0RUFBQ0YsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFVBQVU7c0NBQUMsTUFBSTs7Ozs7Z0NBQU07Ozs7OzRCQUNsQztrQ0FDTiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7MENBRTlCLDhEQUFDSCw4Q0FBSzs7OztvQ0FBRzswQ0FFVCw4REFBQ0UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFlBQVk7O2tEQUN6Qiw4REFBQ0UsSUFBRTtrREFBQyxxQkFBbUI7Ozs7OzRDQUFLO2tEQUM1Qiw4REFBQ0MsR0FBQztrREFBQyx5TkFBdU47Ozs7OzRDQUFJOzs7Ozs7b0NBQzFOOzs7Ozs7NEJBQ0Y7Ozs7OztvQkFDSjswQkFDSCw4REFBQ1AsaURBQVE7Z0JBQUNRLEtBQUssRUFBRSxNQUFNOzs7OztvQkFBRzswQkFDMUIsOERBQUNSLGlEQUFRO2dCQUFDUSxLQUFLLEVBQUUsVUFBVTs7Ozs7b0JBQUk7O29CQUMvQixDQUNKO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdGFwcC8uL2NvbXBvbmVudHMvVmlkZW9Db250ZW50LmpzPzllZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9DYXJvdXNlbCdcclxuaW1wb3J0IFZpZGVvIGZyb20gJy4vVmlkZW8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb0NvbnRlbnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFjay1idG4nPkJhY2s8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tY29udGFpbmVyJz5cclxuXHJcbiAgICAgICAgICA8VmlkZW8gLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tZGVzYyc+XHJcbiAgICAgICAgICAgIDxoMj5CZXRzeSAmIElydiB0cmFpbGVyPC9oMj5cclxuICAgICAgICAgICAgPHA+MTdkIGFnbyAtIFdhdGNoIEJldHN5IFNhaWxvcidzIHN0b3J5IG9mIHN1cnZpdmFsIGFuZCB1bmV4cGVjdGVkIGhlcm8sIFBlbm4gU3RhdGUgb2ZmZW5zaXZlIHRhY2tsZSBJcnYgUGFua2V5LCB3aG8gaGVscGVkIGhlciBhcyBzaGUgY29uZnJvbnRlZCBhIHByZWRhdG9yLCBhbiBpbnN0aXR1dGlvbiBhbmQgYSBqdXN0aWNlIHN5c3RlbS4gTm93IHN0cmVhbWluZyBvbiBFU1BOKy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgPENhcm91c2VsIHRpdGxlPXtcIkxJVkVcIn0vPlxyXG4gICAgICAgPENhcm91c2VsIHRpdGxlPXtcIlRSQUlMRVJTXCJ9IC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2Fyb3VzZWwiLCJWaWRlbyIsIlZpZGVvQ29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImgyIiwicCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoContent.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_VideoContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/VideoContent */ \"./components/VideoContent.js\");\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VideoContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\pages\\\\index.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Intel\\\\nexttest\\\\nexttestapp\\\\pages\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBcUQ7QUFFckQsU0FBU0MsUUFBUSxHQUFHO0lBQ2hCLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUNQLDRFQUFDRixnRUFBWTs7OztnQkFBRzs7Ozs7WUFDZDtDQUNQO0FBRUQsaUVBQWVDLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdGFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWRlb0NvbnRlbnRcIlxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8VmlkZW9Db250ZW50IC8+XHJcbiAgICA8L2Rpdj5cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiVmlkZW9Db250ZW50IiwiSG9tZVBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();