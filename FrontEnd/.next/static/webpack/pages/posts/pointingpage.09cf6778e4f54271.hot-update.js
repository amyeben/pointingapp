"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/pointingpage",{

/***/ "./components/ArrivaltimeComponent.jsx":
/*!*********************************************!*\
  !*** ./components/ArrivaltimeComponent.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArrivaltimeComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Pointingpage.module.css */ \"./styles/Pointingpage.module.css\");\n/* harmony import */ var _styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./components/layout.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ArrivaltimeComponent() {\n    _s();\n    var date = new Date();\n    date.setMinutes(date.getMinutes() - 5);\n    var heure = (\"0\" + date.getHours()).slice(-2);\n    var minutes = (\"0\" + date.getMinutes()).slice(-2);\n    var time = heure + \" : \" + minutes;\n    var data = {\n        \"data\": time\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), commentArrival = ref[0], setCommentArrival = ref[1];\n    var comment = {\n        \"comment\": commentArrival\n    };\n    var name = {\n        \"name\": \"nameuser\"\n    };\n    var arrivalTime = function(e) {\n        e.preventDefault();\n        var handleSuccessData = function(res) {\n            date.setMinutes(date.getMinutes() + 5);\n            heure = (\"0\" + date.getHours()).slice(-2);\n            minutes = (\"0\" + date.getMinutes()).slice(-2);\n            time = heure + \":\" + minutes + \":00\";\n            console.log(res.data);\n        //console.log(time);\n        };\n        var handleSuccessComment = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccessDate = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccessUserId = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccess = function(res) {\n            console.log(res.data);\n        };\n        var handleFailure = function(error) {\n            console.log(\"ERROR\");\n        };\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha\", data).then(handleSuccessData).catch(handleFailure);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha/comment\", comment).then(handleSuccessComment).catch(handleFailure);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/date\").then(handleSuccessDate).catch(handleFailure);\n        axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/user_id\", name).then(handleSuccessUserId).catch(handleFailure);\n    //axios.post(`http://localhost:8000/arrival_time`, handleSuccessUserId, handleSuccessDate, handleSuccessData, handleSuccessComment)\n    //    .then(handleSuccessUserId)\n    //    .catch(handleFailure)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_5___default().formarr),\n            onSubmit: arrivalTime,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_5___default().blanc),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                heure,\n                                \" : \",\n                                minutes\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 51\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 56\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: commentArrival,\n                            type: \"text\",\n                            placeholder: \"Commentaires...\",\n                            size: 90,\n                            className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                            onChange: function(e) {\n                                return setCommentArrival(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 184\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"ptnarriver\",\n                    type: \"submit\",\n                    value: \"Pointer mon arriv\\xe9e\",\n                    className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_5___default().ptnarr)\n                }, void 0, false, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(ArrivaltimeComponent, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = ArrivaltimeComponent;\nvar _c;\n$RefreshReg$(_c, \"ArrivaltimeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxPQUFLO29CQUFDekIsSUFBSSxFQUFFLFlBQVk7b0JBQUUyQixJQUFJLEVBQUUsUUFBUTtvQkFBRUQsS0FBSyxFQUFFLHdCQUFxQjtvQkFBRVIsU0FBUyxFQUFFdEMsK0VBQWE7Ozs7O3dCQUFHOzs7Ozs7Z0JBRWpHO3FCQUNSLENBQUM7Q0FDUDtHQXJGdUJNLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJyaXZhbHRpbWVDb21wb25lbnQuanN4PzNkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1BvaW50aW5ncGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHt1c2VyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFycml2YWx0aW1lQ29tcG9uZW50KCkge1xuXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSAtIDUpO1xuICAgIGxldCBoZXVyZSA9IChcIjBcIiArIChkYXRlLmdldEhvdXJzKCkpKS5zbGljZSgtMik7XG4gICAgbGV0IG1pbnV0ZXMgPSAoXCIwXCIgKyAoZGF0ZS5nZXRNaW51dGVzKCkpKS5zbGljZSgtMik7XG4gICAgdmFyIHRpbWUgPSBoZXVyZSArIFwiIDogXCIgKyBtaW51dGVzIDtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgXCJkYXRhXCIgOiB0aW1lXG4gICAgfTtcbiAgICBjb25zdCBbY29tbWVudEFycml2YWwsIHNldENvbW1lbnRBcnJpdmFsXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgdmFyIGNvbW1lbnQgPSB7XG4gICAgICAgIFwiY29tbWVudFwiIDogY29tbWVudEFycml2YWxcbiAgICB9O1xuXG5cbiAgICB2YXIgbmFtZSA9IHtcbiAgICAgICAgXCJuYW1lXCIgOiBcIm5hbWV1c2VyXCJcbiAgICB9XG5cbiAgICBjb25zdCBhcnJpdmFsVGltZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzRGF0YSA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgNSk7XG4gICAgICAgICAgICBoZXVyZSA9IChcIjBcIiArIChkYXRlLmdldEhvdXJzKCkpKS5zbGljZSgtMik7XG4gICAgICAgICAgICBtaW51dGVzID0gKFwiMFwiICsgKGRhdGUuZ2V0TWludXRlcygpKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgdGltZSA9IGhldXJlICsgXCI6XCIgKyBtaW51dGVzICsgXCI6MDBcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzQ29tbWVudCA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzRGF0ZSA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlU3VjY2Vzc1VzZXJJZCA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlU3VjY2VzcyA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlRmFpbHVyZSA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oYWAsIGRhdGEpXG4gICAgICAgICAgICAudGhlbihoYW5kbGVTdWNjZXNzRGF0YSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVGYWlsdXJlKVxuXG4gICAgICAgIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oYS9jb21tZW50YCwgY29tbWVudClcbiAgICAgICAgICAgIC50aGVuKGhhbmRsZVN1Y2Nlc3NDb21tZW50KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUZhaWx1cmUpXG5cbiAgICAgICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2RhdGVgKVxuICAgICAgICAgICAgLnRoZW4oaGFuZGxlU3VjY2Vzc0RhdGUpXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRmFpbHVyZSlcblxuICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlcl9pZGAsIG5hbWUpXG4gICAgICAgICAgICAudGhlbihoYW5kbGVTdWNjZXNzVXNlcklkKVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUZhaWx1cmUpXG5cbiAgICAgICAgLy9heGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXJyaXZhbF90aW1lYCwgaGFuZGxlU3VjY2Vzc1VzZXJJZCwgaGFuZGxlU3VjY2Vzc0RhdGUsIGhhbmRsZVN1Y2Nlc3NEYXRhLCBoYW5kbGVTdWNjZXNzQ29tbWVudClcbiAgICAgICAgLy8gICAgLnRoZW4oaGFuZGxlU3VjY2Vzc1VzZXJJZClcbiAgICAgICAgLy8gICAgLmNhdGNoKGhhbmRsZUZhaWx1cmUpXG4gICAgfVxuXG5cbiAgICByZXR1cm4oPD5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWFycn0gb25TdWJtaXQ9e2Fycml2YWxUaW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxhbmN9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD57aGV1cmV9IDoge21pbnV0ZXN9PC9sYWJlbD48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtjb21tZW50QXJyaXZhbH0gdHlwZT17XCJ0ZXh0XCJ9IHBsYWNlaG9sZGVyPXtcIkNvbW1lbnRhaXJlcy4uLlwifSBzaXplPXsoOTApfSBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50QXJyaXZhbChlLnRhcmdldC52YWx1ZSkgfS8+PGJyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9e1wicHRuYXJyaXZlclwifSB0eXBlPXtcInN1Ym1pdFwifSB2YWx1ZT17XCJQb2ludGVyIG1vbiBhcnJpdsOpZVwifSBjbGFzc05hbWU9e3N0eWxlcy5wdG5hcnJ9Lz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgPC8+KVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VyU2VydmljZSIsIkxheW91dCIsIkFycml2YWx0aW1lQ29tcG9uZW50IiwiZGF0ZSIsIkRhdGUiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsImhldXJlIiwiZ2V0SG91cnMiLCJzbGljZSIsIm1pbnV0ZXMiLCJ0aW1lIiwiZGF0YSIsImNvbW1lbnRBcnJpdmFsIiwic2V0Q29tbWVudEFycml2YWwiLCJjb21tZW50IiwibmFtZSIsImFycml2YWxUaW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VjY2Vzc0RhdGEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VjY2Vzc0NvbW1lbnQiLCJoYW5kbGVTdWNjZXNzRGF0ZSIsImhhbmRsZVN1Y2Nlc3NVc2VySWQiLCJoYW5kbGVTdWNjZXNzIiwiaGFuZGxlRmFpbHVyZSIsImVycm9yIiwicG9zdCIsInRoZW4iLCJjYXRjaCIsImZvcm0iLCJjbGFzc05hbWUiLCJmb3JtYXJyIiwib25TdWJtaXQiLCJkaXYiLCJibGFuYyIsImxhYmVsIiwiYnIiLCJpbnB1dCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2l6ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicHRuYXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArrivaltimeComponent.jsx\n");

/***/ })

});