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

/***/ "./components/ArrivaltimeCompleted.jsx":
/*!*********************************************!*\
  !*** ./components/ArrivaltimeCompleted.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArrivaltimeComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ArrivaltimeCompleted.module.css */ \"./styles/ArrivaltimeCompleted.module.css\");\n/* harmony import */ var _styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./components/layout.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ArrivaltimeComponent() {\n    var logout = function logout() {\n        _services__WEBPACK_IMPORTED_MODULE_3__.userService.logout();\n    };\n    _s();\n    var date1 = new Date();\n    date1.setMinutes(date1.getMinutes() - 5);\n    var heure = (\"0\" + date1.getHours()).slice(-2);\n    var minutes = (\"0\" + date1.getMinutes()).slice(-2);\n    var time = heure + \" : \" + minutes;\n    var data = {\n        \"data\": time\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), commentArrival = ref[0], setCommentArrival = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), user = ref1[0], setUser = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var subscription = _services__WEBPACK_IMPORTED_MODULE_3__.userService.user.subscribe(function(x) {\n            return setUser(x);\n        });\n        return function() {\n            return subscription.unsubscribe();\n        };\n    }, []);\n    // only show nav when logged in\n    if (!user) return null;\n    var comment1 = {\n        \"comment\": commentArrival\n    };\n    var nameuser = user.name;\n    var name = {\n        \"name\": nameuser\n    };\n    var arrivalTime = function(e) {\n        var getData = function getData() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha\", data);\n        };\n        var getComment = //.then(handleSuccessData)\n        //.catch(handleFailure)}\n        function getComment() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha/comment\", comment1);\n        };\n        var getDate = //.then(handleSuccessComment)\n        //.catch(handleFailure)}\n        function getDate() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/date\");\n        };\n        var getUserId = //.then(handleSuccessDate)\n        //.catch(handleFailure)}\n        function getUserId() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/user_id\", name);\n        };\n        e.preventDefault();\n        var handleSuccessData = function(res) {\n            date1.setMinutes(date1.getMinutes() + 5);\n            heure = (\"0\" + date1.getHours()).slice(-2);\n            minutes = (\"0\" + date1.getMinutes()).slice(-2);\n            time = heure + \":\" + minutes + \":00\";\n            console.log(res.data);\n        //console.log(time);\n        };\n        var handleSuccessComment = function(res) {\n            console.log(res.data);\n            return res.data;\n        };\n        var handleSuccessDate = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccessUserId = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccess = function(res) {\n            console.log(res.data);\n        };\n        var handleFailure = function(error) {\n            console.log(\"ERROR\");\n        };\n        //.then(handleSuccessUserId)\n        //.catch(handleFailure)}\n        Promise.all([\n            getUserId(),\n            getDate(),\n            getData(),\n            getComment()\n        ]).then(function(results) {\n            var user_id = {\n                \"user_id\": results[0].data.toString()\n            };\n            var date = {\n                \"date\": results[1].data.toString()\n            };\n            var arrivaltime = {\n                \"arrivaltime\": results[2].data.toString()\n            };\n            var comment = {\n                \"comment\": results[3].data.toString()\n            };\n            axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/arrival_time\", {\n                user_id: user_id,\n                date: date,\n                arrivaltime: arrivaltime,\n                comment: comment\n            }).then(handleSuccess).catch(handleFailure);\n        });\n    };\n    var id = document.querySelector(\".color\");\n    var content = \"<label className={styles.labelhs}><strong>Votre heure d'arriv\\xe9e est la suivante :</strong><br/><br/></label>\\n\" + \"                <label>{heure} : {minutes}</label><br/><br/>\\n\" + \"                <label className={styles.labelhs}><strong>Commentaire : </strong></label>\";\n    document.getElementsByClassName(\"color\").innerHTML = content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default().color),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: (_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default().labelhs),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Votre heure d'arriv\\xe9e est la suivante :\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 77\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 133\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 138\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                    lineNumber: 124,\n                    columnNumber: 43\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        heure,\n                        \" : \",\n                        minutes\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 51\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 56\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: (_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default().labelhs),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Commentaire : \"\n                    }, void 0, false, {\n                        fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 51\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default().test)\n                }, void 0, false, {\n                    fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                    lineNumber: 127,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n            lineNumber: 124,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n};\n_s(ArrivaltimeComponent, \"8BkXLnureBfAys7eIwhOW4Xx0kI=\");\n_c = ArrivaltimeComponent;\nvar _c;\n$RefreshReg$(_c, \"ArrivaltimeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fycml2YWx0aW1lQ29tcGxldGVkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0Q7QUFDckI7QUFDaEI7QUFDYztBQUNWO0FBQ0U7O0FBRWpCLFNBQVNPLG9CQUFvQixHQUFHO1FBa0JsQ0MsTUFBTSxHQUFmLFNBQVNBLE1BQU0sR0FBRztRQUNkSix5REFBa0IsRUFBRSxDQUFDO0tBQ3hCOztJQWxCRCxJQUFJSyxLQUFJLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQ3JCRCxLQUFJLENBQUNFLFVBQVUsQ0FBQ0YsS0FBSSxDQUFDRyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUlKLEtBQUksQ0FBQ0ssUUFBUSxFQUFFLENBQUUsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLElBQUlDLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBSVAsS0FBSSxDQUFDRyxVQUFVLEVBQUUsQ0FBRSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSUUsSUFBSSxHQUFHSixLQUFLLEdBQUcsS0FBSyxHQUFHRyxPQUFPO0lBQ2xDLElBQUlFLElBQUksR0FBRztRQUNQLE1BQU0sRUFBR0QsSUFBSTtLQUNoQjtJQUNELElBQTRDZixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBakI1RCxjQWlCeUIsR0FBdUJBLEdBQVksR0FBbkMsRUFqQnpCLGlCQWlCNEMsR0FBSUEsR0FBWSxHQUFoQjtJQUN4QyxJQUF3QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWxCeEMsSUFrQmUsR0FBYUEsSUFBWSxHQUF6QixFQWxCZixPQWtCd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUVwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTXNCLFlBQVksR0FBR25CLGlFQUEwQixDQUFDcUIsU0FBQUEsQ0FBQztt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LEVBQUUvRCxzRkFBWTs7OEJBQUUsOERBQUNpRSxPQUFLO29CQUFDRixTQUFTLEVBQUUvRCx3RkFBYzs7c0NBQUUsOERBQUNtRSxRQUFNO3NDQUFDLDRDQUF1Qzs7Ozs7Z0NBQVM7c0NBQUEsOERBQUNDLElBQUU7Ozs7Z0NBQUU7c0NBQUEsOERBQUNBLElBQUU7Ozs7Z0NBQUU7Ozs7Ozt3QkFBUTs4QkFDdEksOERBQUNILE9BQUs7O3dCQUFFcEQsS0FBSzt3QkFBQyxLQUFHO3dCQUFDRyxPQUFPOzs7Ozs7d0JBQVM7OEJBQUEsOERBQUNvRCxJQUFFOzs7O3dCQUFFOzhCQUFBLDhEQUFDQSxJQUFFOzs7O3dCQUFFOzhCQUM1Qyw4REFBQ0gsT0FBSztvQkFBQ0YsU0FBUyxFQUFFL0Qsd0ZBQWM7OEJBQUUsNEVBQUNtRSxRQUFNO2tDQUFDLGdCQUFjOzs7Ozs0QkFBUzs7Ozs7d0JBQVE7OEJBQzdFLDhEQUFDTCxLQUFHO29CQUFDQyxTQUFTLEVBQUUvRCxxRkFBVzs7Ozs7d0JBQVE7Ozs7OztnQkFDN0I7cUJBSVgsQ0FBQztDQUNQO0dBN0h1Qk8sb0JBQW9CO0FBQXBCQSxLQUFBQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnJpdmFsdGltZUNvbXBsZXRlZC5qc3g/ZjUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQXJyaXZhbHRpbWVDb21wbGV0ZWQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7dXNlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFycml2YWx0aW1lQ29tcG9uZW50KCkge1xuXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSAtIDUpO1xuICAgIGxldCBoZXVyZSA9IChcIjBcIiArIChkYXRlLmdldEhvdXJzKCkpKS5zbGljZSgtMik7XG4gICAgbGV0IG1pbnV0ZXMgPSAoXCIwXCIgKyAoZGF0ZS5nZXRNaW51dGVzKCkpKS5zbGljZSgtMik7XG4gICAgdmFyIHRpbWUgPSBoZXVyZSArIFwiIDogXCIgKyBtaW51dGVzIDtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgXCJkYXRhXCIgOiB0aW1lXG4gICAgfTtcbiAgICBjb25zdCBbY29tbWVudEFycml2YWwsIHNldENvbW1lbnRBcnJpdmFsXSA9IHVzZVN0YXRlKCcnKSA7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdXNlclNlcnZpY2UudXNlci5zdWJzY3JpYmUoeCA9PiBzZXRVc2VyKHgpKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgdXNlclNlcnZpY2UubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgLy8gb25seSBzaG93IG5hdiB3aGVuIGxvZ2dlZCBpblxuICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cblxuXG4gICAgdmFyIGNvbW1lbnQgPSB7XG4gICAgICAgIFwiY29tbWVudFwiIDogY29tbWVudEFycml2YWxcbiAgICB9O1xuXG4gICAgdmFyIG5hbWV1c2VyID0gdXNlci5uYW1lXG5cbiAgICB2YXIgbmFtZSA9IHtcbiAgICAgICAgXCJuYW1lXCIgOiBuYW1ldXNlclxuICAgIH1cblxuICAgIGNvbnN0IGFycml2YWxUaW1lID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3NEYXRhID0gKHJlcykgPT4geyAvLyBpZiBzdWNjZXNzXG4gICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyA1KTtcbiAgICAgICAgICAgIGhldXJlID0gKFwiMFwiICsgKGRhdGUuZ2V0SG91cnMoKSkpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIG1pbnV0ZXMgPSAoXCIwXCIgKyAoZGF0ZS5nZXRNaW51dGVzKCkpKS5zbGljZSgtMik7XG4gICAgICAgICAgICB0aW1lID0gaGV1cmUgKyBcIjpcIiArIG1pbnV0ZXMgKyBcIjowMFwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3NDb21tZW50ID0gKHJlcykgPT4geyAvLyBpZiBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgICAgIHJldHVybiByZXMuZGF0YVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGFuZGxlU3VjY2Vzc0RhdGUgPSAocmVzKSA9PiB7IC8vIGlmIHN1Y2Nlc3NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3NVc2VySWQgPSAocmVzKSA9PiB7IC8vIGlmIHN1Y2Nlc3NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3MgPSAocmVzKSA9PiB7IC8vIGlmIHN1Y2Nlc3NcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUZhaWx1cmUgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXREYXRhKCkgeyByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hhYCwgZGF0YSl9XG4gICAgICAgIC8vLnRoZW4oaGFuZGxlU3VjY2Vzc0RhdGEpXG4gICAgICAgIC8vLmNhdGNoKGhhbmRsZUZhaWx1cmUpfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbW1lbnQoKSB7IHJldHVybiBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvaGEvY29tbWVudGAsIGNvbW1lbnQpfVxuICAgICAgICAvLy50aGVuKGhhbmRsZVN1Y2Nlc3NDb21tZW50KVxuICAgICAgICAvLy5jYXRjaChoYW5kbGVGYWlsdXJlKX1cblxuICAgICAgICBmdW5jdGlvbiBnZXREYXRlKCkgeyByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2RhdGVgKX1cbiAgICAgICAgLy8udGhlbihoYW5kbGVTdWNjZXNzRGF0ZSlcbiAgICAgICAgLy8uY2F0Y2goaGFuZGxlRmFpbHVyZSl9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VXNlcklkKCkgeyByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJfaWRgLCBuYW1lKX1cbiAgICAgICAgLy8udGhlbihoYW5kbGVTdWNjZXNzVXNlcklkKVxuICAgICAgICAvLy5jYXRjaChoYW5kbGVGYWlsdXJlKX1cblxuICAgICAgICBQcm9taXNlLmFsbChbZ2V0VXNlcklkKCksIGdldERhdGUoKSwgZ2V0RGF0YSgpLCBnZXRDb21tZW50KCldKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXNlcl9pZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX2lkXCIgOiByZXN1bHRzWzBdLmRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH0gO1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRhdGVcIiA6IHJlc3VsdHNbMV0uZGF0YS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgYXJyaXZhbHRpbWUgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJyaXZhbHRpbWVcIiA6IHJlc3VsdHNbMl0uZGF0YS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb21tZW50XCIgOiByZXN1bHRzWzNdLmRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXJyaXZhbF90aW1lYCwge3VzZXJfaWQsIGRhdGUsIGFycml2YWx0aW1lLCBjb21tZW50fSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaGFuZGxlU3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUZhaWx1cmUpXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgfVxuICAgICAgICAgICAgdmFyIGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2xvclwiKVxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBcIjxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbGhzfT48c3Ryb25nPlZvdHJlIGhldXJlIGQnYXJyaXbDqWUgZXN0IGxhIHN1aXZhbnRlIDo8L3N0cm9uZz48YnIvPjxici8+PC9sYWJlbD5cXG5cIiArXG4gICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGxhYmVsPntoZXVyZX0gOiB7bWludXRlc308L2xhYmVsPjxici8+PGJyLz5cXG5cIiArXG4gICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsaHN9PjxzdHJvbmc+Q29tbWVudGFpcmUgOiA8L3N0cm9uZz48L2xhYmVsPlwiXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb2xvclwiKS5pbm5lckhUTUwgPWNvbnRlbnRcbiAgICByZXR1cm4oPD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xvcn0+PGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsaHN9PjxzdHJvbmc+Vm90cmUgaGV1cmUgZCdhcnJpdsOpZSBlc3QgbGEgc3VpdmFudGUgOjwvc3Ryb25nPjxici8+PGJyLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57aGV1cmV9IDoge21pbnV0ZXN9PC9sYWJlbD48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsaHN9PjxzdHJvbmc+Q29tbWVudGFpcmUgOiA8L3N0cm9uZz48L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0fT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvPilcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlclNlcnZpY2UiLCJMYXlvdXQiLCJSZWFjdERPTSIsIkFycml2YWx0aW1lQ29tcG9uZW50IiwibG9nb3V0IiwiZGF0ZSIsIkRhdGUiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsImhldXJlIiwiZ2V0SG91cnMiLCJzbGljZSIsIm1pbnV0ZXMiLCJ0aW1lIiwiZGF0YSIsImNvbW1lbnRBcnJpdmFsIiwic2V0Q29tbWVudEFycml2YWwiLCJ1c2VyIiwic2V0VXNlciIsInN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsIngiLCJ1bnN1YnNjcmliZSIsImNvbW1lbnQiLCJuYW1ldXNlciIsIm5hbWUiLCJhcnJpdmFsVGltZSIsImUiLCJnZXREYXRhIiwicG9zdCIsImdldENvbW1lbnQiLCJnZXREYXRlIiwiZ2V0VXNlcklkIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWNjZXNzRGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWNjZXNzQ29tbWVudCIsImhhbmRsZVN1Y2Nlc3NEYXRlIiwiaGFuZGxlU3VjY2Vzc1VzZXJJZCIsImhhbmRsZVN1Y2Nlc3MiLCJoYW5kbGVGYWlsdXJlIiwiZXJyb3IiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc3VsdHMiLCJ1c2VyX2lkIiwidG9TdHJpbmciLCJhcnJpdmFsdGltZSIsImNhdGNoIiwiaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVySFRNTCIsImRpdiIsImNsYXNzTmFtZSIsImNvbG9yIiwibGFiZWwiLCJsYWJlbGhzIiwic3Ryb25nIiwiYnIiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArrivaltimeCompleted.jsx\n");

/***/ })

});