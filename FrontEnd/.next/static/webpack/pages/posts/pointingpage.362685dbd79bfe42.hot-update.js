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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArrivaltimeComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Pointingpage.module.css */ \"./styles/Pointingpage.module.css\");\n/* harmony import */ var _styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./components/layout.js\");\n/* harmony import */ var _pages_posts_pointingpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/posts/pointingpage */ \"./pages/posts/pointingpage.jsx\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ArrivaltimeComponent() {\n    var logout = function logout() {\n        _services__WEBPACK_IMPORTED_MODULE_3__.userService.logout();\n    };\n    _s();\n    var date1 = new Date();\n    date1.setMinutes(date1.getMinutes() - 5);\n    var heure = (\"0\" + date1.getHours()).slice(-2);\n    var minutes = (\"0\" + date1.getMinutes()).slice(-2);\n    var time = heure + \" : \" + minutes;\n    var data = {\n        \"data\": time\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), commentArrival = ref[0], setCommentArrival = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), user = ref1[0], setUser = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var subscription = _services__WEBPACK_IMPORTED_MODULE_3__.userService.user.subscribe(function(x1) {\n            return setUser(x1);\n        });\n        return function() {\n            return subscription.unsubscribe();\n        };\n    }, []);\n    // only show nav when logged in\n    if (!user) return null;\n    var comment1 = {\n        \"comment\": commentArrival\n    };\n    var nameuser = user.name;\n    var name = {\n        \"name\": nameuser\n    };\n    var arrivalTime = function(e) {\n        var getData = function getData() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha\", data);\n        };\n        var getComment = //.then(handleSuccessData)\n        //.catch(handleFailure)}\n        function getComment() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha/comment\", comment1);\n        };\n        var getDate = //.then(handleSuccessComment)\n        //.catch(handleFailure)}\n        function getDate() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/date\");\n        };\n        var getUserId = //.then(handleSuccessDate)\n        //.catch(handleFailure)}\n        function getUserId() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/user_id\", name);\n        };\n        e.preventDefault();\n        var handleSuccessData = function(res) {\n            date1.setMinutes(date1.getMinutes() + 5);\n            heure = (\"0\" + date1.getHours()).slice(-2);\n            minutes = (\"0\" + date1.getMinutes()).slice(-2);\n            time = heure + \":\" + minutes + \":00\";\n            console.log(res.data);\n        //console.log(time);\n        };\n        var handleSuccessComment = function(res) {\n            console.log(res.data);\n            return res.data;\n        };\n        var handleSuccessDate = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccessUserId = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccess = function(res) {\n            (0,_pages_posts_pointingpage__WEBPACK_IMPORTED_MODULE_5__.x)();\n            console.log(res.data);\n        };\n        var handleFailure = function(error) {\n            console.log(\"ERROR\");\n        };\n        //.then(handleSuccessUserId)\n        //.catch(handleFailure)}\n        Promise.all([\n            getUserId(),\n            getDate(),\n            getData(),\n            getComment()\n        ]).then(function(results) {\n            var user_id = {\n                \"user_id\": results[0].data.toString()\n            };\n            var date = {\n                \"date\": results[1].data.toString()\n            };\n            var arrivaltime = {\n                \"arrivaltime\": results[2].data.toString()\n            };\n            var comment = {\n                \"comment\": results[3].data.toString()\n            };\n            axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/arrival_time\", {\n                user_id: user_id,\n                date: date,\n                arrivaltime: arrivaltime,\n                comment: comment\n            }).then(handleSuccess).catch(handleFailure);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_6___default().formarr),\n            onSubmit: arrivalTime,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_6___default().blanc),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                heure,\n                                \" : \",\n                                minutes\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 51\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 56\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: commentArrival,\n                            type: \"text\",\n                            placeholder: \"Commentaires...\",\n                            size: 90,\n                            className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                            onChange: function(e) {\n                                return setCommentArrival(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 184\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                    lineNumber: 124,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"ptnarriver\",\n                    type: \"submit\",\n                    value: \"Pointer mon arriv\\xe9e\",\n                    className: (_styles_Pointingpage_module_css__WEBPACK_IMPORTED_MODULE_6___default().ptnarr)\n                }, void 0, false, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeComponent.jsx\",\n            lineNumber: 123,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(ArrivaltimeComponent, \"8BkXLnureBfAys7eIwhOW4Xx0kI=\");\n_c = ArrivaltimeComponent;\nvar _c;\n$RefreshReg$(_c, \"ArrivaltimeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NBQUEsOERBQUM4QyxJQUFFOzs7O2dDQUFFO3NDQUFBLDhEQUFDQSxJQUFFOzs7O2dDQUFFO3NDQUM1Qyw4REFBQ0MsT0FBSzs0QkFBQ0MsS0FBSyxFQUFFN0MsY0FBYzs0QkFBRThDLElBQUksRUFBRSxNQUFNOzRCQUFFQyxXQUFXLEVBQUUsaUJBQWlCOzRCQUFFQyxJQUFJLEVBQUcsRUFBRTs0QkFBR1gsU0FBUyxFQUFFekQsOEVBQVk7NEJBQUVxRSxRQUFRLEVBQUUsU0FBQ3RDLENBQUM7dUNBQUtWLGlCQUFpQixDQUFDVSxDQUFDLENBQUN1QyxNQUFNLENBQUNMLEtBQUssQ0FBQzs2QkFBQTs7Ozs7Z0NBQUk7c0NBQUEsOERBQUNGLElBQUU7Ozs7Z0NBQUU7Ozs7Ozt3QkFDMUs7OEJBQ04sOERBQUNDLE9BQUs7b0JBQUNuQyxJQUFJLEVBQUUsWUFBWTtvQkFBRXFDLElBQUksRUFBRSxRQUFRO29CQUFFRCxLQUFLLEVBQUUsd0JBQXFCO29CQUFFUixTQUFTLEVBQUV6RCwrRUFBYTs7Ozs7d0JBQUc7Ozs7OztnQkFFakc7cUJBQ1IsQ0FBQztDQUNQO0dBM0h1QlEsb0JBQW9CO0FBQXBCQSxLQUFBQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnJpdmFsdGltZUNvbXBvbmVudC5qc3g/M2Q3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvUG9pbnRpbmdwYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBzdGF0ZSAsIHggfSBmcm9tIFwiLi4vcGFnZXMvcG9zdHMvcG9pbnRpbmdwYWdlXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJpdmFsdGltZUNvbXBvbmVudCgpIHtcblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgLSA1KTtcbiAgICBsZXQgaGV1cmUgPSAoXCIwXCIgKyAoZGF0ZS5nZXRIb3VycygpKSkuc2xpY2UoLTIpO1xuICAgIGxldCBtaW51dGVzID0gKFwiMFwiICsgKGRhdGUuZ2V0TWludXRlcygpKSkuc2xpY2UoLTIpO1xuICAgIHZhciB0aW1lID0gaGV1cmUgKyBcIiA6IFwiICsgbWludXRlcyA7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIFwiZGF0YVwiIDogdGltZVxuICAgIH07XG4gICAgY29uc3QgW2NvbW1lbnRBcnJpdmFsLCBzZXRDb21tZW50QXJyaXZhbF0gPSB1c2VTdGF0ZSgnJykgO1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHVzZXJTZXJ2aWNlLnVzZXIuc3Vic2NyaWJlKHggPT4gc2V0VXNlcih4KSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgc2hvdyBuYXYgd2hlbiBsb2dnZWQgaW5cbiAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG5cblxuICAgIHZhciBjb21tZW50ID0ge1xuICAgICAgICBcImNvbW1lbnRcIiA6IGNvbW1lbnRBcnJpdmFsXG4gICAgfTtcblxuICAgIHZhciBuYW1ldXNlciA9IHVzZXIubmFtZVxuXG4gICAgdmFyIG5hbWUgPSB7XG4gICAgICAgIFwibmFtZVwiIDogbmFtZXVzZXJcbiAgICB9XG5cbiAgICBjb25zdCBhcnJpdmFsVGltZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzRGF0YSA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgNSk7XG4gICAgICAgICAgICBoZXVyZSA9IChcIjBcIiArIChkYXRlLmdldEhvdXJzKCkpKS5zbGljZSgtMik7XG4gICAgICAgICAgICBtaW51dGVzID0gKFwiMFwiICsgKGRhdGUuZ2V0TWludXRlcygpKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgdGltZSA9IGhldXJlICsgXCI6XCIgKyBtaW51dGVzICsgXCI6MDBcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzQ29tbWVudCA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3NEYXRlID0gKHJlcykgPT4geyAvLyBpZiBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzVXNlcklkID0gKHJlcykgPT4geyAvLyBpZiBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc3QgaGFuZGxlU3VjY2VzcyA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgeCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVGYWlsdXJlID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YSgpIHsgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oYWAsIGRhdGEpfVxuICAgICAgICAgICAgLy8udGhlbihoYW5kbGVTdWNjZXNzRGF0YSlcbiAgICAgICAgICAgIC8vLmNhdGNoKGhhbmRsZUZhaWx1cmUpfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbW1lbnQoKSB7IHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvaGEvY29tbWVudGAsIGNvbW1lbnQpfVxuICAgICAgICAgICAgLy8udGhlbihoYW5kbGVTdWNjZXNzQ29tbWVudClcbiAgICAgICAgICAgIC8vLmNhdGNoKGhhbmRsZUZhaWx1cmUpfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldERhdGUoKSB7IHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvZGF0ZWApfVxuICAgICAgICAgICAgLy8udGhlbihoYW5kbGVTdWNjZXNzRGF0ZSlcbiAgICAgICAgICAgIC8vLmNhdGNoKGhhbmRsZUZhaWx1cmUpfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFVzZXJJZCgpIHsgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2VyX2lkYCwgbmFtZSl9XG4gICAgICAgICAgICAvLy50aGVuKGhhbmRsZVN1Y2Nlc3NVc2VySWQpXG4gICAgICAgICAgICAvLy5jYXRjaChoYW5kbGVGYWlsdXJlKX1cblxuICAgICAgICBQcm9taXNlLmFsbChbZ2V0VXNlcklkKCksIGdldERhdGUoKSwgZ2V0RGF0YSgpLCBnZXRDb21tZW50KCldKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXNlcl9pZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCIgOiByZXN1bHRzWzBdLmRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH0gO1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIiA6IHJlc3VsdHNbMV0uZGF0YS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgYXJyaXZhbHRpbWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJyaXZhbHRpbWVcIiA6IHJlc3VsdHNbMl0uZGF0YS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21tZW50XCIgOiByZXN1bHRzWzNdLmRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXJyaXZhbF90aW1lYCwge3VzZXJfaWQsIGRhdGUsIGFycml2YWx0aW1lLCBjb21tZW50fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaGFuZGxlU3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUZhaWx1cmUpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4oPD5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybWFycn0gb25TdWJtaXQ9e2Fycml2YWxUaW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxhbmN9PlxuICAgICAgICAgICAgICAgIDxsYWJlbD57aGV1cmV9IDoge21pbnV0ZXN9PC9sYWJlbD48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtjb21tZW50QXJyaXZhbH0gdHlwZT17XCJ0ZXh0XCJ9IHBsYWNlaG9sZGVyPXtcIkNvbW1lbnRhaXJlcy4uLlwifSBzaXplPXsoOTApfSBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50QXJyaXZhbChlLnRhcmdldC52YWx1ZSkgfS8+PGJyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9e1wicHRuYXJyaXZlclwifSB0eXBlPXtcInN1Ym1pdFwifSB2YWx1ZT17XCJQb2ludGVyIG1vbiBhcnJpdsOpZVwifSBjbGFzc05hbWU9e3N0eWxlcy5wdG5hcnJ9Lz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgPC8+KVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VyU2VydmljZSIsIkxheW91dCIsInN0YXRlIiwieCIsIkFycml2YWx0aW1lQ29tcG9uZW50IiwibG9nb3V0IiwiZGF0ZSIsIkRhdGUiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsImhldXJlIiwiZ2V0SG91cnMiLCJzbGljZSIsIm1pbnV0ZXMiLCJ0aW1lIiwiZGF0YSIsImNvbW1lbnRBcnJpdmFsIiwic2V0Q29tbWVudEFycml2YWwiLCJ1c2VyIiwic2V0VXNlciIsInN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsInVuc3Vic2NyaWJlIiwiY29tbWVudCIsIm5hbWV1c2VyIiwibmFtZSIsImFycml2YWxUaW1lIiwiZSIsImdldERhdGEiLCJwb3N0IiwiZ2V0Q29tbWVudCIsImdldERhdGUiLCJnZXRVc2VySWQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Y2Nlc3NEYXRhIiwicmVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Y2Nlc3NDb21tZW50IiwiaGFuZGxlU3VjY2Vzc0RhdGUiLCJoYW5kbGVTdWNjZXNzVXNlcklkIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUZhaWx1cmUiLCJlcnJvciIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwicmVzdWx0cyIsInVzZXJfaWQiLCJ0b1N0cmluZyIsImFycml2YWx0aW1lIiwiY2F0Y2giLCJmb3JtIiwiY2xhc3NOYW1lIiwiZm9ybWFyciIsIm9uU3VibWl0IiwiZGl2IiwiYmxhbmMiLCJsYWJlbCIsImJyIiwiaW5wdXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNpemUiLCJvbkNoYW5nZSIsInRhcmdldCIsInB0bmFyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ArrivaltimeComponent.jsx\n");

/***/ })

});