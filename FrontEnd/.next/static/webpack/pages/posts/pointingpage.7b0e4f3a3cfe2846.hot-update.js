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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArrivaltimeComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/ArrivaltimeCompleted.module.css */ \"./styles/ArrivaltimeCompleted.module.css\");\n/* harmony import */ var _styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ \"./components/layout.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ArrivaltimeComponent() {\n    var logout = function logout() {\n        _services__WEBPACK_IMPORTED_MODULE_3__.userService.logout();\n    };\n    _s();\n    var date1 = new Date();\n    date1.setMinutes(date1.getMinutes() - 5);\n    var heure = (\"0\" + date1.getHours()).slice(-2);\n    var minutes = (\"0\" + date1.getMinutes()).slice(-2);\n    var time = heure + \" : \" + minutes;\n    var data = {\n        \"data\": time\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), commentArrival = ref[0], setCommentArrival = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), user = ref1[0], setUser = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var subscription = _services__WEBPACK_IMPORTED_MODULE_3__.userService.user.subscribe(function(x) {\n            return setUser(x);\n        });\n        return function() {\n            return subscription.unsubscribe();\n        };\n    }, []);\n    // only show nav when logged in\n    if (!user) return null;\n    var comment1 = {\n        \"comment\": commentArrival\n    };\n    var nameuser = user.name;\n    var name = {\n        \"name\": nameuser\n    };\n    var arrivalTime = function(e) {\n        var getData = function getData() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha\", data);\n        };\n        var getComment = //.then(handleSuccessData)\n        //.catch(handleFailure)}\n        function getComment() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/ha/comment\", comment1);\n        };\n        var getDate = //.then(handleSuccessComment)\n        //.catch(handleFailure)}\n        function getDate() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/date\");\n        };\n        var getUserId = //.then(handleSuccessDate)\n        //.catch(handleFailure)}\n        function getUserId() {\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/user_id\", name);\n        };\n        e.preventDefault();\n        var handleSuccessData = function(res) {\n            date1.setMinutes(date1.getMinutes() + 5);\n            heure = (\"0\" + date1.getHours()).slice(-2);\n            minutes = (\"0\" + date1.getMinutes()).slice(-2);\n            time = heure + \":\" + minutes + \":00\";\n            console.log(res.data);\n        //console.log(time);\n        };\n        var handleSuccessComment = function(res) {\n            console.log(res.data);\n            return res.data;\n        };\n        var handleSuccessDate = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccessUserId = function(res) {\n            console.log(res.data);\n        };\n        var handleSuccess = function(res) {\n            console.log(res.data);\n        };\n        var handleFailure = function(error) {\n            console.log(\"ERROR\");\n        };\n        //.then(handleSuccessUserId)\n        //.catch(handleFailure)}\n        Promise.all([\n            getUserId(),\n            getDate(),\n            getData(),\n            getComment()\n        ]).then(function(results) {\n            var user_id = {\n                \"user_id\": results[0].data.toString()\n            };\n            var date = {\n                \"date\": results[1].data.toString()\n            };\n            var arrivaltime = {\n                \"arrivaltime\": results[2].data.toString()\n            };\n            var comment = {\n                \"comment\": results[3].data.toString()\n            };\n            axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:8000/arrival_time\", {\n                user_id: user_id,\n                date: date,\n                arrivaltime: arrivaltime,\n                comment: comment\n            }).then(handleSuccess).catch(handleFailure);\n        });\n    };\n    var id = document.querySelector(\".test\");\n    var content = \"<label className={styles.labelhs}><strong>Votre heure d'arriv\\xe9e est la suivante :</strong><br/><br/></label>\\n\" + \"                <label>{heure} : {minutes}</label><br/><br/>\\n\" + \"                <label className={styles.labelhs}><strong>Commentaire : </strong></label>\";\n    id.innerHTML = content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default().color),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ArrivaltimeCompleted_module_css__WEBPACK_IMPORTED_MODULE_6___default().test)\n            }, void 0, false, {\n                fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amy/Documents/GitHub/pointingapp/FrontEnd/components/ArrivaltimeCompleted.jsx\",\n            lineNumber: 124,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n};\n_s(ArrivaltimeComponent, \"8BkXLnureBfAys7eIwhOW4Xx0kI=\");\n_c = ArrivaltimeComponent;\nvar _c;\n$RefreshReg$(_c, \"ArrivaltimeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fycml2YWx0aW1lQ29tcGxldGVkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0Q7QUFDckI7QUFDaEI7QUFDYztBQUNWO0FBQ0U7O0FBRWpCLFNBQVNPLG9CQUFvQixHQUFHO1FBa0JsQ0MsTUFBTSxHQUFmLFNBQVNBLE1BQU0sR0FBRztRQUNkSix5REFBa0IsRUFBRSxDQUFDO0tBQ3hCOztJQWxCRCxJQUFJSyxLQUFJLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0lBQ3JCRCxLQUFJLENBQUNFLFVBQVUsQ0FBQ0YsS0FBSSxDQUFDRyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUlKLEtBQUksQ0FBQ0ssUUFBUSxFQUFFLENBQUUsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLElBQUlDLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBSVAsS0FBSSxDQUFDRyxVQUFVLEVBQUUsQ0FBRSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsSUFBSUUsSUFBSSxHQUFHSixLQUFLLEdBQUcsS0FBSyxHQUFHRyxPQUFPO0lBQ2xDLElBQUlFLElBQUksR0FBRztRQUNQLE1BQU0sRUFBR0QsSUFBSTtLQUNoQjtJQUNELElBQTRDZixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBakI1RCxjQWlCeUIsR0FBdUJBLEdBQVksR0FBbkMsRUFqQnpCLGlCQWlCNEMsR0FBSUEsR0FBWSxHQUFoQjtJQUN4QyxJQUF3QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWxCeEMsSUFrQmUsR0FBYUEsSUFBWSxHQUF6QixFQWxCZixPQWtCd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUVwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBTXNCLFlBQVksR0FBR25CLGlFQUEwQixDQUFDcUIsU0FBQUEsQ0FBQzttQkFBSUgsT0FBTyxDQUFDRyxDQUFDLENBQUM7U0FBQSxDQUFDO1FBQ2hFLE9BQU87bUJBQU1GLFlBQVksQ0FBQ0csV0FBVyxFQUFFO1NBQUEsQ0FBQztLQUMzQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBTVAsK0JBQStCO0lBQy9CLElBQUksQ0FBQ0wsSUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFDO0lBSXZCLElBQUlNLFFBQU8sR0FBRztRQUNWLFNBQVMsRUFBR1IsY0FBYztLQUM3QjtJQUVELElBQUlTLFFBQVEsR0FBR1AsSUFBSSxDQUFDUSxJQUFJO0lBRXhCLElBQUlBLElBQUksR0FBRztRQUNQLE1BQU0sRUFBR0QsUUFBUTtLQUNwQjtJQUVELElBQU1FLFdBQVcsR0FBRyxTQUFDQyxDQUFDLEVBQUs7WUFpQ2RDLE9BQU8sR0FBaEIsU0FBU0EsT0FBTyxHQUFHO1lBQUUsT0FBTzdCLGlEQUFVLENBQUUsMEJBQXdCLEVBQUdlLElBQUksQ0FBQztTQUFDO1lBSWhFZ0IsVUFBVSxHQUhuQiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBRXhCLFNBQVNBLFVBQVUsR0FBRztZQUFFLE9BQU8vQixpREFBVSxDQUFFLGtDQUFnQyxFQUFHd0IsUUFBTyxDQUFDO1NBQUM7WUFJOUVRLE9BQU8sR0FIaEIsNkJBQTZCO1FBQzdCLHdCQUF3QjtRQUV4QixTQUFTQSxPQUFPLEdBQUc7WUFBRSxPQUFPaEMsaURBQVUsQ0FBRSw0QkFBMEIsQ0FBRTtTQUFDO1lBSTVEaUMsU0FBUyxHQUhsQiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBRXhCLFNBQVNBLFNBQVMsR0FBRztZQUFFLE9BQU9qQyxpREFBVSxDQUFFLCtCQUE2QixFQUFHMEIsSUFBSSxDQUFDO1NBQUM7UUE1Q2hGRSxDQUFDLENBQUNNLGNBQWMsRUFBRSxDQUFDO1FBRW5CLElBQU1DLGlCQUFpQixHQUFHLFNBQUNDLEdBQUcsRUFBSztZQUMvQjlCLEtBQUksQ0FBQ0UsVUFBVSxDQUFDRixLQUFJLENBQUNHLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUlKLEtBQUksQ0FBQ0ssUUFBUSxFQUFFLENBQUUsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUNDLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBSVAsS0FBSSxDQUFDRyxVQUFVLEVBQUUsQ0FBRSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoREUsSUFBSSxHQUFHSixLQUFLLEdBQUcsR0FBRyxHQUFHRyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JDd0IsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQyxDQUFDO1FBQ3RCLG9CQUFvQjtTQUN2QjtRQUVELElBQU13QixvQkFBb0IsR0FBRyxTQUFDSCxHQUFHLEVBQUs7WUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNyQixJQUFJLENBQUM7WUFDckIsT0FBT3FCLEdBQUcsQ0FBQ3JCLElBQUk7U0FDbEI7UUFFRCxJQUFNeUIsaUJBQWlCLEdBQUcsU0FBQ0osR0FBRyxFQUFLO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDckIsSUFBSSxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFNMEIsbUJBQW1CLEdBQUcsU0FBQ0wsR0FBRyxFQUFLO1lBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDckIsSUFBSSxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFNMkIsYUFBYSxHQUFHLFNBQUNOLEdBQUcsRUFBSztZQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ3JCLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBTTRCLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7WUFDN0JQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBZUQsNEJBQTRCO1FBQzVCLHdCQUF3QjtRQUV4Qk8sT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFBQ2IsU0FBUyxFQUFFO1lBQUVELE9BQU8sRUFBRTtZQUFFSCxPQUFPLEVBQUU7WUFBRUUsVUFBVSxFQUFFO1NBQUMsQ0FBQyxDQUN6RGdCLElBQUksQ0FBQyxTQUFVQyxPQUFPLEVBQUU7WUFDckIsSUFBSUMsT0FBTyxHQUFHO2dCQUNWLFNBQVMsRUFBR0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDakMsSUFBSSxDQUFDbUMsUUFBUSxFQUFFO2FBQ3pDO1lBQ0QsSUFBSTVDLElBQUksR0FBRztnQkFDUCxNQUFNLEVBQUcwQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNqQyxJQUFJLENBQUNtQyxRQUFRLEVBQUU7YUFDdEM7WUFDRCxJQUFJQyxXQUFXLEdBQUc7Z0JBQ2QsYUFBYSxFQUFHSCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNqQyxJQUFJLENBQUNtQyxRQUFRLEVBQUU7YUFDN0M7WUFDRCxJQUFJMUIsT0FBTyxHQUFHO2dCQUNWLFNBQVMsRUFBR3dCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ2pDLElBQUksQ0FBQ21DLFFBQVEsRUFBRTthQUN6QztZQUVEbEQsaURBQVUsQ0FBRSxvQ0FBa0MsRUFBRztnQkFBQ2lELE9BQU8sRUFBUEEsT0FBTztnQkFBRTNDLElBQUksRUFBSkEsSUFBSTtnQkFBRTZDLFdBQVcsRUFBWEEsV0FBVztnQkFBRTNCLE9BQU8sRUFBUEEsT0FBTzthQUFDLENBQUMsQ0FDbEZ1QixJQUFJLENBQUNMLGFBQWEsQ0FBQyxDQUNuQlUsS0FBSyxDQUFDVCxhQUFhLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0tBR1Y7SUFDTyxJQUFJVSxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUN4QyxJQUFJQyxPQUFPLEdBQUcsbUhBQWdILEdBQzFILGdFQUFnRSxHQUNoRSwyRkFBMkY7SUFFL0ZILEVBQUUsQ0FBQ0ksU0FBUyxHQUFFRCxPQUFPO0lBQzdCLHFCQUFPO2tCQUVDLDRFQUFDRSxLQUFHO1lBQUNDLFNBQVMsRUFBRTlELHNGQUFZO3NCQUU1Qiw0RUFBQzZELEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTlELHFGQUFXOzs7OztvQkFBUTs7Ozs7Z0JBQzdCO3FCQUlYLENBQUM7Q0FDUDtHQTVIdUJPLG9CQUFvQjtBQUFwQkEsS0FBQUEsb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJyaXZhbHRpbWVDb21wbGV0ZWQuanN4P2Y1MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Fycml2YWx0aW1lQ29tcGxldGVkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge3VzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJpdmFsdGltZUNvbXBvbmVudCgpIHtcblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgLSA1KTtcbiAgICBsZXQgaGV1cmUgPSAoXCIwXCIgKyAoZGF0ZS5nZXRIb3VycygpKSkuc2xpY2UoLTIpO1xuICAgIGxldCBtaW51dGVzID0gKFwiMFwiICsgKGRhdGUuZ2V0TWludXRlcygpKSkuc2xpY2UoLTIpO1xuICAgIHZhciB0aW1lID0gaGV1cmUgKyBcIiA6IFwiICsgbWludXRlcyA7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIFwiZGF0YVwiIDogdGltZVxuICAgIH07XG4gICAgY29uc3QgW2NvbW1lbnRBcnJpdmFsLCBzZXRDb21tZW50QXJyaXZhbF0gPSB1c2VTdGF0ZSgnJykgO1xuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHVzZXJTZXJ2aWNlLnVzZXIuc3Vic2NyaWJlKHggPT4gc2V0VXNlcih4KSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgICAgIHVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgc2hvdyBuYXYgd2hlbiBsb2dnZWQgaW5cbiAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG5cblxuICAgIHZhciBjb21tZW50ID0ge1xuICAgICAgICBcImNvbW1lbnRcIiA6IGNvbW1lbnRBcnJpdmFsXG4gICAgfTtcblxuICAgIHZhciBuYW1ldXNlciA9IHVzZXIubmFtZVxuXG4gICAgdmFyIG5hbWUgPSB7XG4gICAgICAgIFwibmFtZVwiIDogbmFtZXVzZXJcbiAgICB9XG5cbiAgICBjb25zdCBhcnJpdmFsVGltZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzRGF0YSA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgNSk7XG4gICAgICAgICAgICBoZXVyZSA9IChcIjBcIiArIChkYXRlLmdldEhvdXJzKCkpKS5zbGljZSgtMik7XG4gICAgICAgICAgICBtaW51dGVzID0gKFwiMFwiICsgKGRhdGUuZ2V0TWludXRlcygpKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgdGltZSA9IGhldXJlICsgXCI6XCIgKyBtaW51dGVzICsgXCI6MDBcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzQ29tbWVudCA9IChyZXMpID0+IHsgLy8gaWYgc3VjY2Vzc1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICByZXR1cm4gcmVzLmRhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Y2Nlc3NEYXRlID0gKHJlcykgPT4geyAvLyBpZiBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzVXNlcklkID0gKHJlcykgPT4geyAvLyBpZiBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVTdWNjZXNzID0gKHJlcykgPT4geyAvLyBpZiBzdWNjZXNzXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVGYWlsdXJlID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YSgpIHsgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oYWAsIGRhdGEpfVxuICAgICAgICAvLy50aGVuKGhhbmRsZVN1Y2Nlc3NEYXRhKVxuICAgICAgICAvLy5jYXRjaChoYW5kbGVGYWlsdXJlKX1cblxuICAgICAgICBmdW5jdGlvbiBnZXRDb21tZW50KCkgeyByZXR1cm4gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hhL2NvbW1lbnRgLCBjb21tZW50KX1cbiAgICAgICAgLy8udGhlbihoYW5kbGVTdWNjZXNzQ29tbWVudClcbiAgICAgICAgLy8uY2F0Y2goaGFuZGxlRmFpbHVyZSl9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGF0ZSgpIHsgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXRlYCl9XG4gICAgICAgIC8vLnRoZW4oaGFuZGxlU3VjY2Vzc0RhdGUpXG4gICAgICAgIC8vLmNhdGNoKGhhbmRsZUZhaWx1cmUpfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFVzZXJJZCgpIHsgcmV0dXJuIGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2VyX2lkYCwgbmFtZSl9XG4gICAgICAgIC8vLnRoZW4oaGFuZGxlU3VjY2Vzc1VzZXJJZClcbiAgICAgICAgLy8uY2F0Y2goaGFuZGxlRmFpbHVyZSl9XG5cbiAgICAgICAgUHJvbWlzZS5hbGwoW2dldFVzZXJJZCgpLCBnZXREYXRlKCksIGdldERhdGEoKSwgZ2V0Q29tbWVudCgpXSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVzZXJfaWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlcl9pZFwiIDogcmVzdWx0c1swXS5kYXRhLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9IDtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRlXCIgOiByZXN1bHRzWzFdLmRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGFycml2YWx0aW1lID0ge1xuICAgICAgICAgICAgICAgICAgICBcImFycml2YWx0aW1lXCIgOiByZXN1bHRzWzJdLmRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29tbWVudFwiIDogcmVzdWx0c1szXS5kYXRhLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2Fycml2YWxfdGltZWAsIHt1c2VyX2lkLCBkYXRlLCBhcnJpdmFsdGltZSwgY29tbWVudH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGhhbmRsZVN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChoYW5kbGVGYWlsdXJlKVxuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdFwiKVxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBcIjxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbGhzfT48c3Ryb25nPlZvdHJlIGhldXJlIGQnYXJyaXbDqWUgZXN0IGxhIHN1aXZhbnRlIDo8L3N0cm9uZz48YnIvPjxici8+PC9sYWJlbD5cXG5cIiArXG4gICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGxhYmVsPntoZXVyZX0gOiB7bWludXRlc308L2xhYmVsPjxici8+PGJyLz5cXG5cIiArXG4gICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsaHN9PjxzdHJvbmc+Q29tbWVudGFpcmUgOiA8L3N0cm9uZz48L2xhYmVsPlwiXG5cbiAgICAgICAgICAgIGlkLmlubmVySFRNTCA9Y29udGVudFxuICAgIHJldHVybig8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbG9yfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXN0fT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvPilcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlclNlcnZpY2UiLCJMYXlvdXQiLCJSZWFjdERPTSIsIkFycml2YWx0aW1lQ29tcG9uZW50IiwibG9nb3V0IiwiZGF0ZSIsIkRhdGUiLCJzZXRNaW51dGVzIiwiZ2V0TWludXRlcyIsImhldXJlIiwiZ2V0SG91cnMiLCJzbGljZSIsIm1pbnV0ZXMiLCJ0aW1lIiwiZGF0YSIsImNvbW1lbnRBcnJpdmFsIiwic2V0Q29tbWVudEFycml2YWwiLCJ1c2VyIiwic2V0VXNlciIsInN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsIngiLCJ1bnN1YnNjcmliZSIsImNvbW1lbnQiLCJuYW1ldXNlciIsIm5hbWUiLCJhcnJpdmFsVGltZSIsImUiLCJnZXREYXRhIiwicG9zdCIsImdldENvbW1lbnQiLCJnZXREYXRlIiwiZ2V0VXNlcklkIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWNjZXNzRGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWNjZXNzQ29tbWVudCIsImhhbmRsZVN1Y2Nlc3NEYXRlIiwiaGFuZGxlU3VjY2Vzc1VzZXJJZCIsImhhbmRsZVN1Y2Nlc3MiLCJoYW5kbGVGYWlsdXJlIiwiZXJyb3IiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlc3VsdHMiLCJ1c2VyX2lkIiwidG9TdHJpbmciLCJhcnJpdmFsdGltZSIsImNhdGNoIiwiaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29sb3IiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ArrivaltimeCompleted.jsx\n");

/***/ })

});