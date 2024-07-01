"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/FormProducts/page",{

/***/ "(app-pages-browser)/./src/app/FormProducts/page.tsx":
/*!***************************************!*\
  !*** ./src/app/FormProducts/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ \"(app-pages-browser)/./src/utils/utils.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ \"(app-pages-browser)/./node_modules/emailjs-com/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // Importa useState desde React\n\n\n\nfunction FormProducts() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const title = searchParams.get(\"title\");\n    const description2 = searchParams.get(\"description2\");\n    const serviceId = \"service_us7u2tn\";\n    const templateId = \"template_wlhgqbs\";\n    const userId = \"Mdhjv3jWQPovjW-f6\";\n    // Estado para controlar la visibilidad del modal de éxito\n    const [showSuccessModal, setShowSuccessModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        // Capturar los valores del formulario\n        const formData = {\n            product: event.target.product.value,\n            firstName: event.target.firstName.value,\n            lastname: event.target.lastname.value,\n            country: event.target.country.value,\n            email: event.target.email.value,\n            phone: event.target.phone.value,\n            help: event.target.help.value,\n            budget: event.target.budget.value\n        };\n        // Configurar los parámetros para enviar el correo electrónico\n        const params = {\n            name: formData.firstName,\n            lastname: formData.lastname,\n            product: formData.product,\n            country: formData.country,\n            email: formData.email,\n            phone: formData.phone,\n            message: formData.help,\n            budget: formData.budget\n        };\n        // Verificar si serviceId y templateId están definidos antes de enviar el correo electrónico\n        if (serviceId && templateId) {\n            try {\n                // Enviar el formulario usando EmailJS\n                const response = await emailjs_com__WEBPACK_IMPORTED_MODULE_4__[\"default\"].send(serviceId, templateId, params, userId);\n                console.log(\"Email successfully sent!\", response);\n                // Mostrar el modal de éxito\n                setShowSuccessModal(true);\n                // Limpiar los campos del formulario después de 3 segundos\n                setTimeout(()=>{\n                    setShowSuccessModal(false);\n                    // Limpiar los campos del formulario\n                    if (event.target instanceof HTMLFormElement) {\n                        event.target.reset();\n                    }\n                }, 2500);\n            } catch (error) {\n                console.error(\"Email send failed:\", error);\n            // Aquí podrías manejar el error, por ejemplo mostrando un mensaje de error al usuario\n            }\n        } else {\n            console.error(\"EmailJS service ID or template ID is not defined.\");\n        // Aquí podrías manejar el caso donde serviceId o templateId no están definidos, por ejemplo mostrando un mensaje de error al usuario\n        }\n    };\n    // Separar el texto de description2 por puntos y convertirlo en párrafos\n    const descriptionParagraphs = description2 ? description2.split(\". \").map((paragraph, index, array)=>{\n        // Añadir el punto final solo si no es el último párrafo\n        const paragraphWithPeriod = index < array.length - 1 ? \"\".concat(paragraph, \".\") : paragraph;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-base md:text-lg mb-4\",\n            children: paragraphWithPeriod\n        }, index, false, {\n            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n            lineNumber: 79,\n            columnNumber: 20\n        }, this);\n    }) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white bg-cover bg-center\",\n        style: {\n            backgroundImage: \"url(\".concat((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getBasePath)(), \"/assets/gradient2.png)\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-7xl flex flex-col md:flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 mb-8 md:mb-0 md:pr-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl md:text-4xl font-semibold mb-4\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, this),\n                            descriptionParagraphs\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-1/2 flex flex-col items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            width: \"100%\",\n                            height: \"100%\",\n                            src: \"https://c80e6f6d.sibforms.com/serve/MUIFAPmiQrSmWX1-GjvkFS9GKLvk56Z6vqC8Io0-PQ_ysIyGN2-8oz_7LbIBsy3-fr7QaWwH-nx-lIHwFyW5oA-rq3eUvWpRIjKMK9tG6VjTzNucqoF3ujhTiUkk5aZE771TOnTYBzZVAVR-nuQzTR7uihqpw9e7VZ99fey-U6Zh95DPgbiZ8vdAMOaHNq4bkHLrVWcle0cGrnY1\",\n                            frameBorder: \"0\",\n                            scrolling: \"no\",\n                            allowFullScreen: true,\n                            style: {\n                                display: \"block\",\n                                width: \"100%\",\n                                height: \"100%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            showSuccessModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-green-500 p-8 rounded shadow-lg text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-semibold mb-2\",\n                        children: \"Request sent successfully!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                lineNumber: 104,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"mt-20 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nahuelscudaletti/Documents/proedge-landing/src/app/FormProducts/page.tsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, this);\n}\n_s(FormProducts, \"n15K909Cbk/qGy8edpfIZlyHkX0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = FormProducts;\nvar _c;\n$RefreshReg$(_c, \"FormProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvRm9ybVByb2R1Y3RzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUMsQ0FBQywrQkFBK0I7QUFDckI7QUFDaUI7QUFDM0I7QUFFbkIsU0FBU0s7O0lBQ3BCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNSyxlQUFlSixnRUFBZUE7SUFDcEMsTUFBTUssUUFBUUQsYUFBYUUsR0FBRyxDQUFDO0lBQy9CLE1BQU1DLGVBQWVILGFBQWFFLEdBQUcsQ0FBQztJQUN0QyxNQUFNRSxZQUFZQyxpQkFBMEM7SUFDNUQsTUFBTUcsYUFBYUgsa0JBQTJDO0lBQzlELE1BQU1LLFNBQVNMLG1CQUF1QztJQUV0RCwwREFBMEQ7SUFDMUQsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHcEIsK0NBQVFBLENBQUM7SUFFekQsTUFBTXFCLGVBQWUsT0FBT0M7UUFDeEJBLE1BQU1DLGNBQWM7UUFFcEIsc0NBQXNDO1FBQ3RDLE1BQU1DLFdBQVc7WUFDYkMsU0FBUyxNQUFPQyxNQUFNLENBQXFCRCxPQUFPLENBQUNFLEtBQUs7WUFDeERDLFdBQVcsTUFBT0YsTUFBTSxDQUFxQkUsU0FBUyxDQUFDRCxLQUFLO1lBQzVERSxVQUFVLE1BQU9ILE1BQU0sQ0FBcUJHLFFBQVEsQ0FBQ0YsS0FBSztZQUMxREcsU0FBUyxNQUFPSixNQUFNLENBQXFCSSxPQUFPLENBQUNILEtBQUs7WUFDeERJLE9BQU8sTUFBT0wsTUFBTSxDQUFxQkssS0FBSyxDQUFDSixLQUFLO1lBQ3BESyxPQUFPLE1BQU9OLE1BQU0sQ0FBcUJNLEtBQUssQ0FBQ0wsS0FBSztZQUNwRE0sTUFBTSxNQUFPUCxNQUFNLENBQXFCTyxJQUFJLENBQUNOLEtBQUs7WUFDbERPLFFBQVEsTUFBT1IsTUFBTSxDQUFxQlEsTUFBTSxDQUFDUCxLQUFLO1FBQzFEO1FBRUEsOERBQThEO1FBQzlELE1BQU1RLFNBQVM7WUFDWEMsTUFBTVosU0FBU0ksU0FBUztZQUN4QkMsVUFBVUwsU0FBU0ssUUFBUTtZQUMzQkosU0FBU0QsU0FBU0MsT0FBTztZQUN6QkssU0FBU04sU0FBU00sT0FBTztZQUN6QkMsT0FBT1AsU0FBU08sS0FBSztZQUNyQkMsT0FBT1IsU0FBU1EsS0FBSztZQUNyQkssU0FBU2IsU0FBU1MsSUFBSTtZQUN0QkMsUUFBUVYsU0FBU1UsTUFBTTtRQUMzQjtRQUVBLDRGQUE0RjtRQUM1RixJQUFJdkIsYUFBYUksWUFBWTtZQUN6QixJQUFJO2dCQUNBLHNDQUFzQztnQkFDdEMsTUFBTXVCLFdBQVcsTUFBTWxDLHdEQUFZLENBQUNPLFdBQVdJLFlBQVlvQixRQUFRbEI7Z0JBQ25FdUIsUUFBUUMsR0FBRyxDQUFDLDRCQUE0Qkg7Z0JBRXhDLDRCQUE0QjtnQkFDNUJsQixvQkFBb0I7Z0JBRXBCLDBEQUEwRDtnQkFDMURzQixXQUFXO29CQUNQdEIsb0JBQW9CO29CQUNwQixvQ0FBb0M7b0JBQ3BDLElBQUlFLE1BQU1JLE1BQU0sWUFBWWlCLGlCQUFpQjt3QkFDekNyQixNQUFNSSxNQUFNLENBQUNrQixLQUFLO29CQUN0QjtnQkFDSixHQUFHO1lBQ1AsRUFBRSxPQUFPQyxPQUFPO2dCQUNaTCxRQUFRSyxLQUFLLENBQUMsc0JBQXNCQTtZQUNwQyxzRkFBc0Y7WUFDMUY7UUFDSixPQUFPO1lBQ0hMLFFBQVFLLEtBQUssQ0FBQztRQUNkLHFJQUFxSTtRQUN6STtJQUNKO0lBRUEsd0VBQXdFO0lBQ3hFLE1BQU1DLHdCQUF3QnBDLGVBQ3hCQSxhQUFhcUMsS0FBSyxDQUFDLE1BQU1DLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxPQUFPQztRQUM5Qyx3REFBd0Q7UUFDeEQsTUFBTUMsc0JBQXNCRixRQUFRQyxNQUFNRSxNQUFNLEdBQUcsSUFBSSxHQUFhLE9BQVZKLFdBQVUsT0FBS0E7UUFDekUscUJBQU8sOERBQUNLO1lBQWNDLFdBQVU7c0JBQTZCSDtXQUE5Q0Y7Ozs7O0lBQ25CLEtBQ0U7SUFFTixxQkFDSSw4REFBQ007UUFBSUQsV0FBVTtRQUF1R0UsT0FBTztZQUFFQyxpQkFBaUIsT0FBcUIsT0FBZHpELHlEQUFXQSxJQUFHO1FBQXdCOzswQkFDekwsOERBQUN1RDtnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQTJDL0M7Ozs7Ozs0QkFDeERzQzs7Ozs7OztrQ0FFTCw4REFBQ1U7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNLOzRCQUNPQyxPQUFNOzRCQUNOQyxRQUFPOzRCQUNQQyxLQUFJOzRCQUNKQyxhQUFZOzRCQUNaQyxXQUFVOzRCQUNWQyxlQUFlOzRCQUNmVCxPQUFPO2dDQUFFVSxTQUFTO2dDQUFTTixPQUFPO2dDQUFRQyxRQUFROzRCQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztZQUt4RTNDLGtDQUNHLDhEQUFDcUM7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDRDt3QkFBRUMsV0FBVTtrQ0FBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRELDhEQUFDYTtnQkFDR0MsU0FBUyxJQUFNL0QsT0FBT2dFLElBQUk7Z0JBQzFCZixXQUFVOzBCQUNiOzs7Ozs7Ozs7Ozs7QUFLYjtHQS9Hd0JsRDs7UUFDTEgsc0RBQVNBO1FBQ0hDLDREQUFlQTs7O0tBRmhCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0Zvcm1Qcm9kdWN0cy9wYWdlLnRzeD9lODBjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgLy8gSW1wb3J0YSB1c2VTdGF0ZSBkZXNkZSBSZWFjdFxuaW1wb3J0IHsgZ2V0QmFzZVBhdGggfSBmcm9tICdAL3V0aWxzL3V0aWxzJztcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICAgIGNvbnN0IHRpdGxlID0gc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbjIgPSBzZWFyY2hQYXJhbXMuZ2V0KCdkZXNjcmlwdGlvbjInKTtcbiAgICBjb25zdCBzZXJ2aWNlSWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTEpTX1NFUlZJQ0VfSUQ7XG4gICAgY29uc3QgdGVtcGxhdGVJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0VNQUlMSlNfVEVNUExBVEVfSUQ7XG4gICAgY29uc3QgdXNlcklkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRU1BSUxKU19VU0VSX0lEO1xuICAgIFxuICAgIC8vIEVzdGFkbyBwYXJhIGNvbnRyb2xhciBsYSB2aXNpYmlsaWRhZCBkZWwgbW9kYWwgZGUgw6l4aXRvXG4gICAgY29uc3QgW3Nob3dTdWNjZXNzTW9kYWwsIHNldFNob3dTdWNjZXNzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIENhcHR1cmFyIGxvcyB2YWxvcmVzIGRlbCBmb3JtdWxhcmlvXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuICAgICAgICAgICAgcHJvZHVjdDogKGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpLnByb2R1Y3QudmFsdWUsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KS5maXJzdE5hbWUudmFsdWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogKGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpLmxhc3RuYW1lLnZhbHVlLFxuICAgICAgICAgICAgY291bnRyeTogKGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpLmNvdW50cnkudmFsdWUsXG4gICAgICAgICAgICBlbWFpbDogKGV2ZW50LnRhcmdldCBhcyBIVE1MRm9ybUVsZW1lbnQpLmVtYWlsLnZhbHVlLFxuICAgICAgICAgICAgcGhvbmU6IChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KS5waG9uZS52YWx1ZSxcbiAgICAgICAgICAgIGhlbHA6IChldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KS5oZWxwLnZhbHVlLFxuICAgICAgICAgICAgYnVkZ2V0OiAoZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudCkuYnVkZ2V0LnZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ29uZmlndXJhciBsb3MgcGFyw6FtZXRyb3MgcGFyYSBlbnZpYXIgZWwgY29ycmVvIGVsZWN0csOzbmljb1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBuYW1lOiBmb3JtRGF0YS5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0bmFtZTogZm9ybURhdGEubGFzdG5hbWUsXG4gICAgICAgICAgICBwcm9kdWN0OiBmb3JtRGF0YS5wcm9kdWN0LFxuICAgICAgICAgICAgY291bnRyeTogZm9ybURhdGEuY291bnRyeSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgICAgIHBob25lOiBmb3JtRGF0YS5waG9uZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZvcm1EYXRhLmhlbHAsXG4gICAgICAgICAgICBidWRnZXQ6IGZvcm1EYXRhLmJ1ZGdldFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFZlcmlmaWNhciBzaSBzZXJ2aWNlSWQgeSB0ZW1wbGF0ZUlkIGVzdMOhbiBkZWZpbmlkb3MgYW50ZXMgZGUgZW52aWFyIGVsIGNvcnJlbyBlbGVjdHLDs25pY29cbiAgICAgICAgaWYgKHNlcnZpY2VJZCAmJiB0ZW1wbGF0ZUlkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEVudmlhciBlbCBmb3JtdWxhcmlvIHVzYW5kbyBFbWFpbEpTXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBlbWFpbGpzLnNlbmQoc2VydmljZUlkLCB0ZW1wbGF0ZUlkLCBwYXJhbXMsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsIHN1Y2Nlc3NmdWxseSBzZW50IScsIHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIC8vIE1vc3RyYXIgZWwgbW9kYWwgZGUgw6l4aXRvXG4gICAgICAgICAgICAgICAgc2V0U2hvd1N1Y2Nlc3NNb2RhbCh0cnVlKTtcblxuICAgICAgICAgICAgICAgIC8vIExpbXBpYXIgbG9zIGNhbXBvcyBkZWwgZm9ybXVsYXJpbyBkZXNwdcOpcyBkZSAzIHNlZ3VuZG9zXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTdWNjZXNzTW9kYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBMaW1waWFyIGxvcyBjYW1wb3MgZGVsIGZvcm11bGFyaW9cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAyNTAwKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRW1haWwgc2VuZCBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIC8vIEFxdcOtIHBvZHLDrWFzIG1hbmVqYXIgZWwgZXJyb3IsIHBvciBlamVtcGxvIG1vc3RyYW5kbyB1biBtZW5zYWplIGRlIGVycm9yIGFsIHVzdWFyaW9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VtYWlsSlMgc2VydmljZSBJRCBvciB0ZW1wbGF0ZSBJRCBpcyBub3QgZGVmaW5lZC4nKTtcbiAgICAgICAgICAgIC8vIEFxdcOtIHBvZHLDrWFzIG1hbmVqYXIgZWwgY2FzbyBkb25kZSBzZXJ2aWNlSWQgbyB0ZW1wbGF0ZUlkIG5vIGVzdMOhbiBkZWZpbmlkb3MsIHBvciBlamVtcGxvIG1vc3RyYW5kbyB1biBtZW5zYWplIGRlIGVycm9yIGFsIHVzdWFyaW9cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBTZXBhcmFyIGVsIHRleHRvIGRlIGRlc2NyaXB0aW9uMiBwb3IgcHVudG9zIHkgY29udmVydGlybG8gZW4gcMOhcnJhZm9zXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhZ3JhcGhzID0gZGVzY3JpcHRpb24yXG4gICAgICAgID8gZGVzY3JpcHRpb24yLnNwbGl0KCcuICcpLm1hcCgocGFyYWdyYXBoLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICAgICAgICAgIC8vIEHDsWFkaXIgZWwgcHVudG8gZmluYWwgc29sbyBzaSBubyBlcyBlbCDDumx0aW1vIHDDoXJyYWZvXG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGhXaXRoUGVyaW9kID0gaW5kZXggPCBhcnJheS5sZW5ndGggLSAxID8gYCR7cGFyYWdyYXBofS5gIDogcGFyYWdyYXBoO1xuICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIG1iLTRcIj57cGFyYWdyYXBoV2l0aFBlcmlvZH08L3A+O1xuICAgICAgICB9KVxuICAgICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYmctZ3JheS05MDAgdGV4dC13aGl0ZSBiZy1jb3ZlciBiZy1jZW50ZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtnZXRCYXNlUGF0aCgpfS9hc3NldHMvZ3JhZGllbnQyLnBuZylgIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctN3hsIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIG1iLTggbWQ6bWItMCBtZDpwci04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LXNlbWlib2xkIG1iLTRcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uUGFyYWdyYXBoc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2M4MGU2ZjZkLnNpYmZvcm1zLmNvbS9zZXJ2ZS9NVUlGQVBtaVFyU21XWDEtR2p2a0ZTOUdLTHZrNTZaNnZxQzhJbzAtUFFfeXNJeUdOMi04b3pfN0xiSUJzeTMtZnI3UWFXd0gtbngtbElId0Z5VzVvQS1ycTNlVXZXcFJJaktNSzl0RzZWalR6TnVjcW9GM3VqaFRpVWtrNWFaRTc3MVRPblRZQnpaVkFWUi1udVF6VFI3dWlocXB3OWU3Vlo5OWZleS1VNlpoOTVEUGdiaVo4dmRBTU9hSE5xNGJrSExyVldjbGUwY0dyblkxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogTW9kYWwgZGUgw6l4aXRvICovfVxuICAgICAgICAgICAge3Nob3dTdWNjZXNzTW9kYWwgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MCB6LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHAtOCByb3VuZGVkIHNoYWRvdy1sZyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTJcIj5SZXF1ZXN0IHNlbnQgc3VjY2Vzc2Z1bGx5ITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMjAgYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImdldEJhc2VQYXRoIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiZW1haWxqcyIsIkZvcm1Qcm9kdWN0cyIsInJvdXRlciIsInNlYXJjaFBhcmFtcyIsInRpdGxlIiwiZ2V0IiwiZGVzY3JpcHRpb24yIiwic2VydmljZUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0VNQUlMSlNfU0VSVklDRV9JRCIsInRlbXBsYXRlSWQiLCJORVhUX1BVQkxJQ19FTUFJTEpTX1RFTVBMQVRFX0lEIiwidXNlcklkIiwiTkVYVF9QVUJMSUNfRU1BSUxKU19VU0VSX0lEIiwic2hvd1N1Y2Nlc3NNb2RhbCIsInNldFNob3dTdWNjZXNzTW9kYWwiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJwcm9kdWN0IiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdE5hbWUiLCJsYXN0bmFtZSIsImNvdW50cnkiLCJlbWFpbCIsInBob25lIiwiaGVscCIsImJ1ZGdldCIsInBhcmFtcyIsIm5hbWUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJIVE1MRm9ybUVsZW1lbnQiLCJyZXNldCIsImVycm9yIiwiZGVzY3JpcHRpb25QYXJhZ3JhcGhzIiwic3BsaXQiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleCIsImFycmF5IiwicGFyYWdyYXBoV2l0aFBlcmlvZCIsImxlbmd0aCIsInAiLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgxIiwiaWZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJmcmFtZUJvcmRlciIsInNjcm9sbGluZyIsImFsbG93RnVsbFNjcmVlbiIsImRpc3BsYXkiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/FormProducts/page.tsx\n"));

/***/ })

});