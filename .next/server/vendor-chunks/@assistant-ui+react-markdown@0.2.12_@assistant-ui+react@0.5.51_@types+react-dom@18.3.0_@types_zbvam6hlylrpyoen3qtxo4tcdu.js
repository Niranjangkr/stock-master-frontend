"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@assistant-ui+react-markdown@0.2.12_@assistant-ui+react@0.5.51_@types+react-dom@18.3.0_@types_zbvam6hlylrpyoen3qtxo4tcdu";
exports.ids = ["vendor-chunks/@assistant-ui+react-markdown@0.2.12_@assistant-ui+react@0.5.51_@types+react-dom@18.3.0_@types_zbvam6hlylrpyoen3qtxo4tcdu"];
exports.modules = {

/***/ "(ssr)/../node_modules/.pnpm/@assistant-ui+react-markdown@0.2.12_@assistant-ui+react@0.5.51_@types+react-dom@18.3.0_@types_zbvam6hlylrpyoen3qtxo4tcdu/node_modules/@assistant-ui/react-markdown/dist/index.mjs":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@assistant-ui+react-markdown@0.2.12_@assistant-ui+react@0.5.51_@types+react-dom@18.3.0_@types_zbvam6hlylrpyoen3qtxo4tcdu/node_modules/@assistant-ui/react-markdown/dist/index.mjs ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CodeHeader: () => (/* binding */ CodeHeader),\n/* harmony export */   MarkdownTextPrimitive: () => (/* binding */ MarkdownTextPrimitive),\n/* harmony export */   makeMarkdownText: () => (/* binding */ makeMarkdownText),\n/* harmony export */   useIsMarkdownCodeBlock: () => (/* binding */ useIsMarkdownCodeBlock)\n/* harmony export */ });\n/* harmony import */ var _assistant_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assistant-ui/react */ \"(ssr)/../node_modules/.pnpm/@assistant-ui+react@0.5.51_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3.1_react_7uyi4neb6eo7mndhuosvbsxsle/node_modules/@assistant-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../node_modules/.pnpm/next@14.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"(ssr)/../node_modules/.pnpm/react-markdown@9.0.1_@types+react@18.3.5_react@18.3.1/node_modules/react-markdown/lib/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/../node_modules/.pnpm/next@14.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.5_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(ssr)/../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,CopyIcon!=!lucide-react */ \"(ssr)/../node_modules/.pnpm/lucide-react@0.439.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,CopyIcon!=!lucide-react */ \"(ssr)/../node_modules/.pnpm/lucide-react@0.439.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/check.js\");\n/* __next_internal_client_entry_do_not_use__ CodeHeader,MarkdownTextPrimitive,makeMarkdownText,useIsMarkdownCodeBlock auto */ // src/primitives/MarkdownText.tsx\n\n\n\n// src/overrides/PreOverride.tsx\n\n\nvar PreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nvar useIsMarkdownCodeBlock = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PreContext) !== null;\n};\nvar PreOverride = ({ children, ...rest })=>{\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PreContext.Provider, {\n        value: rest,\n        children\n    });\n};\n// src/overrides/defaultComponents.tsx\n\nvar DefaultPre = ({ node, ...rest })=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"pre\", {\n        ...rest\n    });\nvar DefaultCode = ({ node, ...rest })=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"code\", {\n        ...rest\n    });\nvar DefaultCodeBlockContent = ({ components: { Pre, Code }, code })=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Pre, {\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Code, {\n            children: code\n        })\n    });\nvar DefaultCodeHeader = ()=>null;\n// src/primitives/MarkdownText.tsx\n\n// src/overrides/CodeOverride.tsx\n\n// src/overrides/CodeBlock.tsx\n\n\nvar DefaultCodeBlock = ({ components: { Pre, Code, SyntaxHighlighter, CodeHeader: CodeHeader2 }, language, code })=>{\n    const components = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({\n            Pre,\n            Code\n        }), [\n        Pre,\n        Code\n    ]);\n    const SH = !!language ? SyntaxHighlighter : DefaultCodeBlockContent;\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CodeHeader2, {\n                language,\n                code\n            }),\n            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SH, {\n                components,\n                language: language ?? \"unknown\",\n                code\n            })\n        ]\n    });\n};\n// src/overrides/CodeOverride.tsx\n\n// src/overrides/withDefaults.tsx\n\nvar withDefaultProps = ({ className, ...defaultProps })=>({ className: classNameProp, ...props })=>{\n        return {\n            className: classnames__WEBPACK_IMPORTED_MODULE_2__(className, classNameProp),\n            ...defaultProps,\n            ...props\n        };\n    };\n// src/overrides/CodeOverride.tsx\n\nvar CodeBlockOverride = ({ components: { Pre, Code, SyntaxHighlighter: FallbackSyntaxHighlighter, CodeHeader: FallbackCodeHeader, by_language = {} }, children, ...codeProps })=>{\n    const preProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PreContext);\n    const getPreProps = withDefaultProps(preProps);\n    const WrappedPre = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__.useCallbackRef)((props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Pre, {\n            ...getPreProps(props)\n        }));\n    const getCodeProps = withDefaultProps(codeProps);\n    const WrappedCode = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__.useCallbackRef)((props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Code, {\n            ...getCodeProps(props)\n        }));\n    const language = /language-(\\w+)/.exec(codeProps.className || \"\")?.[1] ?? \"\";\n    if (typeof children !== \"string\") {\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DefaultCodeBlockContent, {\n            components: {\n                Pre: WrappedPre,\n                Code: WrappedCode\n            },\n            code: children\n        });\n    }\n    const SyntaxHighlighter = by_language[language]?.SyntaxHighlighter ?? FallbackSyntaxHighlighter;\n    const CodeHeader2 = by_language[language]?.CodeHeader ?? FallbackCodeHeader;\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DefaultCodeBlock, {\n        components: {\n            Pre: WrappedPre,\n            Code: WrappedCode,\n            SyntaxHighlighter,\n            CodeHeader: CodeHeader2\n        },\n        language: language || \"unknown\",\n        code: children\n    });\n};\nvar CodeOverride = ({ components, ...props })=>{\n    const preProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PreContext);\n    if (!preProps) return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(components.Code, {\n        ...props\n    });\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CodeBlockOverride, {\n        components,\n        ...props\n    });\n};\n// src/primitives/MarkdownText.tsx\n\n\nvar { useSmooth } = _assistant_ui_react__WEBPACK_IMPORTED_MODULE_4__.INTERNAL;\nvar MarkdownTextPrimitive = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ components: userComponents, className, containerProps, containerComponent: Container = \"div\", ...rest }, forwardedRef, smooth = true)=>{\n    const { part: { text }, status } = useSmooth((0,_assistant_ui_react__WEBPACK_IMPORTED_MODULE_4__.useContentPartText)(), smooth);\n    const { pre = DefaultPre, code = DefaultCode, SyntaxHighlighter = DefaultCodeBlockContent, CodeHeader: CodeHeader2 = DefaultCodeHeader, by_language, ...componentsRest } = userComponents ?? {};\n    const components = {\n        ...componentsRest,\n        pre: PreOverride,\n        code: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__.useCallbackRef)((props)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CodeOverride, {\n                components: {\n                    Pre: pre,\n                    Code: code,\n                    SyntaxHighlighter,\n                    CodeHeader: CodeHeader2,\n                    by_language\n                },\n                ...props\n            }))\n    };\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container, {\n        \"data-status\": status.type,\n        ...containerProps,\n        className: classnames__WEBPACK_IMPORTED_MODULE_2__(className, containerProps?.className),\n        ref: forwardedRef,\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_markdown__WEBPACK_IMPORTED_MODULE_5__.Markdown, {\n            components,\n            ...rest,\n            children: text\n        })\n    });\n});\nMarkdownTextPrimitive.displayName = \"MarkdownTextPrimitive\";\n// src/ui/markdown-text.tsx\n\n// src/ui/code-header.tsx\n\n\n// src/ui/useCopyToClipboard.tsx\n\nvar useCopyToClipboard = ({ copiedDuration = 3e3 } = {})=>{\n    const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const copyToClipboard = (value)=>{\n        if (!value) return;\n        navigator.clipboard.writeText(value).then(()=>{\n            setIsCopied(true);\n            setTimeout(()=>setIsCopied(false), copiedDuration);\n        });\n    };\n    return {\n        isCopied,\n        copyToClipboard\n    };\n};\n// src/ui/code-header.tsx\n\nvar { TooltipIconButton } = _assistant_ui_react__WEBPACK_IMPORTED_MODULE_4__.INTERNAL;\nvar CodeHeader = ({ language, code })=>{\n    const { strings: { code: { header: { copy: { tooltip = \"Copy\" } = {} } = {} } = {} } = {} } = (0,_assistant_ui_react__WEBPACK_IMPORTED_MODULE_4__.useThreadConfig)();\n    const { isCopied, copyToClipboard } = useCopyToClipboard();\n    const onCopy = ()=>{\n        if (!code || isCopied) return;\n        copyToClipboard(code);\n    };\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        className: \"aui-code-header-root\",\n        children: [\n            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                className: \"aui-code-header-language\",\n                children: language\n            }),\n            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TooltipIconButton, {\n                tooltip,\n                onClick: onCopy,\n                children: [\n                    !isCopied && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_barrel_optimize_names_CheckIcon_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}),\n                    isCopied && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_barrel_optimize_names_CheckIcon_CopyIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {})\n                ]\n            })\n        ]\n    });\n};\n// src/ui/markdown-text.tsx\n\n\n\nvar { withSmoothContextProvider, useSmoothStatus } = _assistant_ui_react__WEBPACK_IMPORTED_MODULE_4__.INTERNAL;\nvar makeMarkdownText = ({ className, components: userComponents, ...rest } = {})=>{\n    const components = {\n        ...userComponents,\n        CodeHeader: userComponents?.CodeHeader ?? CodeHeader\n    };\n    const MarkdownTextImpl = ()=>{\n        const status = useSmoothStatus();\n        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownTextPrimitive, {\n            components,\n            ...rest,\n            className: classnames__WEBPACK_IMPORTED_MODULE_2__(\"aui-md-root\", status.type === \"running\" && \"aui-md-running\", className)\n        });\n    };\n    MarkdownTextImpl.displayName = \"MarkdownText\";\n    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(withSmoothContextProvider(MarkdownTextImpl), ()=>true);\n};\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0Bhc3Npc3RhbnQtdWkrcmVhY3QtbWFya2Rvd25AMC4yLjEyX0Bhc3Npc3RhbnQtdWkrcmVhY3RAMC41LjUxX0B0eXBlcytyZWFjdC1kb21AMTguMy4wX0B0eXBlc196YnZhbTZobHlscnB5b2VuM3F0eG80dGNkdS9ub2RlX21vZHVsZXMvQGFzc2lzdGFudC11aS9yZWFjdC1tYXJrZG93bi9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBU3RDO0FBQ3FDOztBQ1p3QjtBQWEzRDtBQVZGLElBQU1PLDJCQUFhSCxvREFBYUEsQ0FHN0I7QUFFSCxJQUFNSSx5QkFBeUI7SUFDcEMsT0FBT0gsaURBQVVBLENBQUNFLGdCQUFnQjtBQUNwQztBQUVPLElBQU1FLGNBQTRCLENBQUMsRUFBRUMsUUFBQSxFQUFVLEdBQUdDLE1BQUs7SUFDNUQsT0FBTyxnQkFBQUwsc0RBQUFBLENBQUNDLFdBQVdLLFFBQUEsRUFBWDtRQUFvQkMsT0FBT0Y7UUFBT0Q7SUFBQTtBQUM1Qzs7QUNWRTtBQURLLElBQU1JLGFBQTJCLENBQUMsRUFBRUMsSUFBQSxFQUFNLEdBQUdKLE1BQUssR0FDdkQsZ0JBQUFMLHNEQUFBQSxDQUFDO1FBQUssR0FBR0ssSUFBQTtJQUFBO0FBR0osSUFBTUssY0FBNkIsQ0FBQyxFQUFFRCxJQUFBLEVBQU0sR0FBR0osTUFBSyxHQUN6RCxnQkFBQUwsc0RBQUFBLENBQUM7UUFBTSxHQUFHSyxJQUFBO0lBQUE7QUFHTCxJQUFNTSwwQkFHUixDQUFDLEVBQUVDLFlBQVksRUFBRUMsR0FBQSxFQUFLQyxJQUFBLEVBQUssRUFBR0MsSUFBQSxFQUFLLEdBQ3RDLGdCQUFBZixzREFBQUEsQ0FBQ2EsS0FBQTtRQUNDVCxVQUFBLGdCQUFBSixzREFBQUEsQ0FBQ2MsTUFBQTtZQUFNVixVQUFBVztRQUFBO0lBQUs7QUFJVCxJQUFNQyxvQkFBb0QsSUFBTTs7QUZDeEM7O0FHckJ5Qzs7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O1NBQzFCO0lBQUE7QUFHTjs7QUQ3QnVCO0FBS0U7QUFtQm5CO0FBakJOLElBQU0sRUFBRXFCLHlCQUFBLEVBQTJCQyxlQUFBLEVBQWdCLEdBQUl6Rix5REFBQUE7QUFJaEQsSUFBTTBGLG1CQUFtQixDQUFDLEVBQy9CeEQsU0FBQSxFQUNBaEIsWUFBWWtDLGNBQUEsRUFDWixHQUFHekMsTUFDTCxHQUEyQixDQUFDO0lBQzFCLE1BQU1PLGFBQWE7UUFDakIsR0FBR2tDLGNBQUE7UUFDSHZCLFlBQVl1QixnQkFBZ0J2QixjQUFjQTtJQUM1QztJQUVBLE1BQU04RCxtQkFBdUI7UUFDM0IsTUFBTS9CLFNBQVM2QjtRQUNmLE9BQ0UsZ0JBQUFuRixzREFBQUEsQ0FBQzZDLHVCQUFBO1lBQ0NqQztZQUNDLEdBQUdQLElBQUE7WUFDSnVCLFdBQVdGLHVDQUFBQSxDQUNULGVBQ0E0QixPQUFPRyxJQUFBLEtBQVMsYUFBYSxrQkFDN0I3QjtRQUNGO0lBR047SUFDQXlELGlCQUFpQjFCLFdBQUEsR0FBYztJQUUvQixxQkFBT0MsMkNBQUlBLENBQUNzQiwwQkFBMEJHLG1CQUFtQixJQUFNO0FBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1sYW5nZ3JhcGgvLi4vc3JjL3ByaW1pdGl2ZXMvTWFya2Rvd25UZXh0LnRzeD85YmY5Iiwid2VicGFjazovL3dpdGgtbGFuZ2dyYXBoLy4uL3NyYy9vdmVycmlkZXMvUHJlT3ZlcnJpZGUudHN4P2NiNWMiLCJ3ZWJwYWNrOi8vd2l0aC1sYW5nZ3JhcGgvLi4vc3JjL292ZXJyaWRlcy9kZWZhdWx0Q29tcG9uZW50cy50c3g/NjA2ZSIsIndlYnBhY2s6Ly93aXRoLWxhbmdncmFwaC8uLi9zcmMvb3ZlcnJpZGVzL0NvZGVPdmVycmlkZS50c3g/ZGIwYyIsIndlYnBhY2s6Ly93aXRoLWxhbmdncmFwaC8uLi9zcmMvb3ZlcnJpZGVzL0NvZGVCbG9jay50c3g/YmY3MSIsIndlYnBhY2s6Ly93aXRoLWxhbmdncmFwaC8uLi9zcmMvb3ZlcnJpZGVzL3dpdGhEZWZhdWx0cy50c3g/M2FjZSIsIndlYnBhY2s6Ly93aXRoLWxhbmdncmFwaC8uLi9zcmMvdWkvbWFya2Rvd24tdGV4dC50c3g/ZWI4MyIsIndlYnBhY2s6Ly93aXRoLWxhbmdncmFwaC8uLi9zcmMvdWkvY29kZS1oZWFkZXIudHN4P2Q1ZjMiLCJ3ZWJwYWNrOi8vd2l0aC1sYW5nZ3JhcGgvLi4vc3JjL3VpL3VzZUNvcHlUb0NsaXBib2FyZC50c3g/MjhmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgSU5URVJOQUwsIHVzZUNvbnRlbnRQYXJ0VGV4dCB9IGZyb20gXCJAYXNzaXN0YW50LXVpL3JlYWN0XCI7XG5pbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBFbGVtZW50VHlwZSxcbiAgZm9yd2FyZFJlZixcbiAgRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudCxcbiAgUmVmQXR0cmlidXRlcyxcbiAgdHlwZSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYsXG4gIHR5cGUgQ29tcG9uZW50VHlwZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biwgeyB0eXBlIE9wdGlvbnMgfSBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IFN5bnRheEhpZ2hsaWdodGVyUHJvcHMsIENvZGVIZWFkZXJQcm9wcyB9IGZyb20gXCIuLi9vdmVycmlkZXMvdHlwZXNcIjtcbmltcG9ydCB7IFByZU92ZXJyaWRlIH0gZnJvbSBcIi4uL292ZXJyaWRlcy9QcmVPdmVycmlkZVwiO1xuaW1wb3J0IHtcbiAgRGVmYXVsdFByZSxcbiAgRGVmYXVsdENvZGUsXG4gIERlZmF1bHRDb2RlQmxvY2tDb250ZW50LFxuICBEZWZhdWx0Q29kZUhlYWRlcixcbn0gZnJvbSBcIi4uL292ZXJyaWRlcy9kZWZhdWx0Q29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2tSZWYgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXVzZS1jYWxsYmFjay1yZWZcIjtcbmltcG9ydCB7IENvZGVPdmVycmlkZSB9IGZyb20gXCIuLi9vdmVycmlkZXMvQ29kZU92ZXJyaWRlXCI7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuY29uc3QgeyB1c2VTbW9vdGggfSA9IElOVEVSTkFMO1xuXG50eXBlIE1hcmtkb3duVGV4dFByaW1pdGl2ZUVsZW1lbnQgPSBFbGVtZW50UmVmPHR5cGVvZiBQcmltaXRpdmUuZGl2PjtcbnR5cGUgUHJpbWl0aXZlRGl2UHJvcHMgPSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFByaW1pdGl2ZS5kaXY+O1xuXG5leHBvcnQgdHlwZSBNYXJrZG93blRleHRQcmltaXRpdmVQcm9wcyA9IE9taXQ8XG4gIE9wdGlvbnMsXG4gIFwiY29tcG9uZW50c1wiIHwgXCJjaGlsZHJlblwiXG4+ICYge1xuICBjb250YWluZXJQcm9wcz86IE9taXQ8UHJpbWl0aXZlRGl2UHJvcHMsIFwiY2hpbGRyZW5cIiB8IFwiYXNDaGlsZFwiPjtcbiAgY29udGFpbmVyQ29tcG9uZW50PzogRWxlbWVudFR5cGU7XG4gIGNvbXBvbmVudHM/OiBOb25OdWxsYWJsZTxPcHRpb25zW1wiY29tcG9uZW50c1wiXT4gJiB7XG4gICAgU3ludGF4SGlnaGxpZ2h0ZXI/OiBDb21wb25lbnRUeXBlPFN5bnRheEhpZ2hsaWdodGVyUHJvcHM+O1xuICAgIENvZGVIZWFkZXI/OiBDb21wb25lbnRUeXBlPENvZGVIZWFkZXJQcm9wcz47XG4gICAgYnlfbGFuZ3VhZ2U/OiBSZWNvcmQ8XG4gICAgICBzdHJpbmcsXG4gICAgICB7XG4gICAgICAgIENvZGVIZWFkZXI/OiBDb21wb25lbnRUeXBlPENvZGVIZWFkZXJQcm9wcz47XG4gICAgICAgIFN5bnRheEhpZ2hsaWdodGVyPzogQ29tcG9uZW50VHlwZTxTeW50YXhIaWdobGlnaHRlclByb3BzPjtcbiAgICAgIH1cbiAgICA+O1xuICB9O1xuICBzbW9vdGg/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hcmtkb3duVGV4dFByaW1pdGl2ZTogRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxNYXJrZG93blRleHRQcmltaXRpdmVQcm9wcz4gJlxuICBSZWZBdHRyaWJ1dGVzPE1hcmtkb3duVGV4dFByaW1pdGl2ZUVsZW1lbnQ+ID0gZm9yd2FyZFJlZjxcbiAgTWFya2Rvd25UZXh0UHJpbWl0aXZlRWxlbWVudCxcbiAgTWFya2Rvd25UZXh0UHJpbWl0aXZlUHJvcHNcbj4oXG4gIChcbiAgICB7XG4gICAgICBjb21wb25lbnRzOiB1c2VyQ29tcG9uZW50cyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbnRhaW5lclByb3BzLFxuICAgICAgY29udGFpbmVyQ29tcG9uZW50OiBDb250YWluZXIgPSBcImRpdlwiLFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgZm9yd2FyZGVkUmVmLFxuICAgIHNtb290aCA9IHRydWUsXG4gICkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcnQ6IHsgdGV4dCB9LFxuICAgICAgc3RhdHVzLFxuICAgIH0gPSB1c2VTbW9vdGgodXNlQ29udGVudFBhcnRUZXh0KCksIHNtb290aCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBwcmUgPSBEZWZhdWx0UHJlLFxuICAgICAgY29kZSA9IERlZmF1bHRDb2RlLFxuICAgICAgU3ludGF4SGlnaGxpZ2h0ZXIgPSBEZWZhdWx0Q29kZUJsb2NrQ29udGVudCxcbiAgICAgIENvZGVIZWFkZXIgPSBEZWZhdWx0Q29kZUhlYWRlcixcbiAgICAgIGJ5X2xhbmd1YWdlLFxuICAgICAgLi4uY29tcG9uZW50c1Jlc3RcbiAgICB9ID0gdXNlckNvbXBvbmVudHMgPz8ge307XG4gICAgY29uc3QgY29tcG9uZW50czogdHlwZW9mIHVzZXJDb21wb25lbnRzID0ge1xuICAgICAgLi4uY29tcG9uZW50c1Jlc3QsXG4gICAgICBwcmU6IFByZU92ZXJyaWRlLFxuICAgICAgY29kZTogdXNlQ2FsbGJhY2tSZWYoKHByb3BzKSA9PiAoXG4gICAgICAgIDxDb2RlT3ZlcnJpZGVcbiAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICBQcmU6IHByZSxcbiAgICAgICAgICAgIENvZGU6IGNvZGUsXG4gICAgICAgICAgICBTeW50YXhIaWdobGlnaHRlcixcbiAgICAgICAgICAgIENvZGVIZWFkZXIsXG4gICAgICAgICAgICBieV9sYW5ndWFnZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICkpLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBkYXRhLXN0YXR1cz17c3RhdHVzLnR5cGV9XG4gICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgY29udGFpbmVyUHJvcHM/LmNsYXNzTmFtZSl9XG4gICAgICAgIHJlZj17Zm9yd2FyZGVkUmVmfVxuICAgICAgPlxuICAgICAgICA8UmVhY3RNYXJrZG93biBjb21wb25lbnRzPXtjb21wb25lbnRzfSB7Li4ucmVzdH0+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvUmVhY3RNYXJrZG93bj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH0sXG4pO1xuXG5NYXJrZG93blRleHRQcmltaXRpdmUuZGlzcGxheU5hbWUgPSBcIk1hcmtkb3duVGV4dFByaW1pdGl2ZVwiO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQcmVDb21wb25lbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgUHJlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8T21pdDxcbiAgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPFByZUNvbXBvbmVudD4sXG4gIFwiY2hpbGRyZW5cIlxuPiB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgdXNlSXNNYXJrZG93bkNvZGVCbG9jayA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoUHJlQ29udGV4dCkgIT09IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgUHJlT3ZlcnJpZGU6IFByZUNvbXBvbmVudCA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIDxQcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZXN0fT57Y2hpbGRyZW59PC9QcmVDb250ZXh0LlByb3ZpZGVyPjtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENvbXBvbmVudFR5cGUsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUHJlQ29tcG9uZW50LCBDb2RlQ29tcG9uZW50LCBDb2RlSGVhZGVyUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFByZTogUHJlQ29tcG9uZW50ID0gKHsgbm9kZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxwcmUgey4uLnJlc3R9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdENvZGU6IENvZGVDb21wb25lbnQgPSAoeyBub2RlLCAuLi5yZXN0IH0pID0+IChcbiAgPGNvZGUgey4uLnJlc3R9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdENvZGVCbG9ja0NvbnRlbnQ6IENvbXBvbmVudFR5cGU8e1xuICBjb21wb25lbnRzOiB7IFByZTogUHJlQ29tcG9uZW50OyBDb2RlOiBDb2RlQ29tcG9uZW50IH07XG4gIGNvZGU6IHN0cmluZyB8IFJlYWN0Tm9kZSB8IHVuZGVmaW5lZDtcbn0+ID0gKHsgY29tcG9uZW50czogeyBQcmUsIENvZGUgfSwgY29kZSB9KSA9PiAoXG4gIDxQcmU+XG4gICAgPENvZGU+e2NvZGV9PC9Db2RlPlxuICA8L1ByZT5cbik7XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0Q29kZUhlYWRlcjogQ29tcG9uZW50VHlwZTxDb2RlSGVhZGVyUHJvcHM+ID0gKCkgPT4gbnVsbDtcbiIsImltcG9ydCB7IENvbXBvbmVudFByb3BzV2l0aG91dFJlZiwgQ29tcG9uZW50VHlwZSwgRkMsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByZUNvbnRleHQgfSBmcm9tIFwiLi9QcmVPdmVycmlkZVwiO1xuaW1wb3J0IHtcbiAgQ29kZUNvbXBvbmVudCxcbiAgQ29kZUhlYWRlclByb3BzLFxuICBQcmVDb21wb25lbnQsXG4gIFN5bnRheEhpZ2hsaWdodGVyUHJvcHMsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBEZWZhdWx0Q29kZUJsb2NrIH0gZnJvbSBcIi4vQ29kZUJsb2NrXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFja1JlZiB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZlwiO1xuaW1wb3J0IHsgd2l0aERlZmF1bHRQcm9wcyB9IGZyb20gXCIuL3dpdGhEZWZhdWx0c1wiO1xuaW1wb3J0IHsgRGVmYXVsdENvZGVCbG9ja0NvbnRlbnQgfSBmcm9tIFwiLi9kZWZhdWx0Q29tcG9uZW50c1wiO1xuXG5jb25zdCBDb2RlQmxvY2tPdmVycmlkZTogRkM8Q29kZU92ZXJyaWRlUHJvcHM+ID0gKHtcbiAgY29tcG9uZW50czoge1xuICAgIFByZSxcbiAgICBDb2RlLFxuICAgIFN5bnRheEhpZ2hsaWdodGVyOiBGYWxsYmFja1N5bnRheEhpZ2hsaWdodGVyLFxuICAgIENvZGVIZWFkZXI6IEZhbGxiYWNrQ29kZUhlYWRlcixcbiAgICBieV9sYW5ndWFnZSA9IHt9LFxuICB9LFxuICBjaGlsZHJlbixcbiAgLi4uY29kZVByb3BzXG59KSA9PiB7XG4gIGNvbnN0IHByZVByb3BzID0gdXNlQ29udGV4dChQcmVDb250ZXh0KSE7XG4gIGNvbnN0IGdldFByZVByb3BzID0gd2l0aERlZmF1bHRQcm9wczxhbnk+KHByZVByb3BzKTtcbiAgY29uc3QgV3JhcHBlZFByZTogUHJlQ29tcG9uZW50ID0gdXNlQ2FsbGJhY2tSZWYoKHByb3BzKSA9PiAoXG4gICAgPFByZSB7Li4uZ2V0UHJlUHJvcHMocHJvcHMpfSAvPlxuICApKTtcblxuICBjb25zdCBnZXRDb2RlUHJvcHMgPSB3aXRoRGVmYXVsdFByb3BzPGFueT4oY29kZVByb3BzKTtcbiAgY29uc3QgV3JhcHBlZENvZGU6IENvZGVDb21wb25lbnQgPSB1c2VDYWxsYmFja1JlZigocHJvcHMpID0+IChcbiAgICA8Q29kZSB7Li4uZ2V0Q29kZVByb3BzKHByb3BzKX0gLz5cbiAgKSk7XG5cbiAgY29uc3QgbGFuZ3VhZ2UgPSAvbGFuZ3VhZ2UtKFxcdyspLy5leGVjKGNvZGVQcm9wcy5jbGFzc05hbWUgfHwgXCJcIik/LlsxXSA/PyBcIlwiO1xuXG4gIC8vIGlmIHRoZSBjb2RlIGNvbnRlbnQgaXMgbm90IHN0cmluZyAoZHVlIHRvIHJlaHlwZSBwbHVnaW5zKSwgcmV0dXJuIGEgZGVmYXVsdCBjb2RlIGJsb2NrXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERlZmF1bHRDb2RlQmxvY2tDb250ZW50XG4gICAgICAgIGNvbXBvbmVudHM9e3sgUHJlOiBXcmFwcGVkUHJlLCBDb2RlOiBXcmFwcGVkQ29kZSB9fVxuICAgICAgICBjb2RlPXtjaGlsZHJlbn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IFN5bnRheEhpZ2hsaWdodGVyOiBDb21wb25lbnRUeXBlPFN5bnRheEhpZ2hsaWdodGVyUHJvcHM+ID1cbiAgICBieV9sYW5ndWFnZVtsYW5ndWFnZV0/LlN5bnRheEhpZ2hsaWdodGVyID8/IEZhbGxiYWNrU3ludGF4SGlnaGxpZ2h0ZXI7XG5cbiAgY29uc3QgQ29kZUhlYWRlcjogQ29tcG9uZW50VHlwZTxDb2RlSGVhZGVyUHJvcHM+ID1cbiAgICBieV9sYW5ndWFnZVtsYW5ndWFnZV0/LkNvZGVIZWFkZXIgPz8gRmFsbGJhY2tDb2RlSGVhZGVyO1xuXG4gIHJldHVybiAoXG4gICAgPERlZmF1bHRDb2RlQmxvY2tcbiAgICAgIGNvbXBvbmVudHM9e3tcbiAgICAgICAgUHJlOiBXcmFwcGVkUHJlLFxuICAgICAgICBDb2RlOiBXcmFwcGVkQ29kZSxcbiAgICAgICAgU3ludGF4SGlnaGxpZ2h0ZXIsXG4gICAgICAgIENvZGVIZWFkZXIsXG4gICAgICB9fVxuICAgICAgbGFuZ3VhZ2U9e2xhbmd1YWdlIHx8IFwidW5rbm93blwifVxuICAgICAgY29kZT17Y2hpbGRyZW59XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCB0eXBlIENvZGVPdmVycmlkZVByb3BzID0gQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPENvZGVDb21wb25lbnQ+ICYge1xuICBjb21wb25lbnRzOiB7XG4gICAgUHJlOiBQcmVDb21wb25lbnQ7XG4gICAgQ29kZTogQ29kZUNvbXBvbmVudDtcbiAgICBDb2RlSGVhZGVyOiBDb21wb25lbnRUeXBlPENvZGVIZWFkZXJQcm9wcz47XG4gICAgU3ludGF4SGlnaGxpZ2h0ZXI6IENvbXBvbmVudFR5cGU8U3ludGF4SGlnaGxpZ2h0ZXJQcm9wcz47XG4gICAgYnlfbGFuZ3VhZ2U/OiBSZWNvcmQ8XG4gICAgICBzdHJpbmcsXG4gICAgICB7XG4gICAgICAgIENvZGVIZWFkZXI/OiBDb21wb25lbnRUeXBlPENvZGVIZWFkZXJQcm9wcz47XG4gICAgICAgIFN5bnRheEhpZ2hsaWdodGVyPzogQ29tcG9uZW50VHlwZTxTeW50YXhIaWdobGlnaHRlclByb3BzPjtcbiAgICAgIH1cbiAgICA+O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IENvZGVPdmVycmlkZTogRkM8Q29kZU92ZXJyaWRlUHJvcHM+ID0gKHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgcHJlUHJvcHMgPSB1c2VDb250ZXh0KFByZUNvbnRleHQpO1xuICBpZiAoIXByZVByb3BzKSByZXR1cm4gPGNvbXBvbmVudHMuQ29kZSB7Li4uKHByb3BzIGFzIGFueSl9IC8+O1xuICByZXR1cm4gPENvZGVCbG9ja092ZXJyaWRlIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IHsuLi5wcm9wc30gLz47XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSwgRkMsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgQ29kZUNvbXBvbmVudCxcbiAgQ29kZUhlYWRlclByb3BzLFxuICBQcmVDb21wb25lbnQsXG4gIFN5bnRheEhpZ2hsaWdodGVyUHJvcHMsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBEZWZhdWx0Q29kZUJsb2NrQ29udGVudCB9IGZyb20gXCIuL2RlZmF1bHRDb21wb25lbnRzXCI7XG5cbmV4cG9ydCB0eXBlIENvZGVCbG9ja1Byb3BzID0ge1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBjb2RlOiBzdHJpbmc7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBQcmU6IFByZUNvbXBvbmVudDtcbiAgICBDb2RlOiBDb2RlQ29tcG9uZW50O1xuICAgIENvZGVIZWFkZXI6IENvbXBvbmVudFR5cGU8Q29kZUhlYWRlclByb3BzPjtcbiAgICBTeW50YXhIaWdobGlnaHRlcjogQ29tcG9uZW50VHlwZTxTeW50YXhIaWdobGlnaHRlclByb3BzPjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0Q29kZUJsb2NrOiBGQzxDb2RlQmxvY2tQcm9wcz4gPSAoe1xuICBjb21wb25lbnRzOiB7IFByZSwgQ29kZSwgU3ludGF4SGlnaGxpZ2h0ZXIsIENvZGVIZWFkZXIgfSxcbiAgbGFuZ3VhZ2UsXG4gIGNvZGUsXG59KSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudHMgPSB1c2VNZW1vKCgpID0+ICh7IFByZSwgQ29kZSB9KSwgW1ByZSwgQ29kZV0pO1xuXG4gIGNvbnN0IFNIID0gISFsYW5ndWFnZSA/IFN5bnRheEhpZ2hsaWdodGVyIDogRGVmYXVsdENvZGVCbG9ja0NvbnRlbnQ7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvZGVIZWFkZXIgbGFuZ3VhZ2U9e2xhbmd1YWdlfSBjb2RlPXtjb2RlfSAvPlxuICAgICAgPFNIXG4gICAgICAgIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9XG4gICAgICAgIGxhbmd1YWdlPXtsYW5ndWFnZSA/PyBcInVua25vd25cIn1cbiAgICAgICAgY29kZT17Y29kZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHdpdGhEZWZhdWx0UHJvcHMgPVxuICA8VFByb3BzIGV4dGVuZHMgeyBjbGFzc05hbWU/OiBzdHJpbmcgfCB1bmRlZmluZWQgfT4oe1xuICAgIGNsYXNzTmFtZSxcbiAgICAuLi5kZWZhdWx0UHJvcHNcbiAgfTogUGFydGlhbDxUUHJvcHM+KSA9PlxuICAoeyBjbGFzc05hbWU6IGNsYXNzTmFtZVByb3AsIC4uLnByb3BzIH06IFRQcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCBjbGFzc05hbWVQcm9wKSxcbiAgICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAgIC4uLnByb3BzLFxuICAgIH0gYXMgVFByb3BzO1xuICB9O1xuIiwiaW1wb3J0IHsgRkMsIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvZGVIZWFkZXIgfSBmcm9tIFwiLi9jb2RlLWhlYWRlclwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7XG4gIE1hcmtkb3duVGV4dFByaW1pdGl2ZSxcbiAgTWFya2Rvd25UZXh0UHJpbWl0aXZlUHJvcHMsXG59IGZyb20gXCIuLi9wcmltaXRpdmVzL01hcmtkb3duVGV4dFwiO1xuaW1wb3J0IHsgSU5URVJOQUwgfSBmcm9tIFwiQGFzc2lzdGFudC11aS9yZWFjdFwiO1xuXG5jb25zdCB7IHdpdGhTbW9vdGhDb250ZXh0UHJvdmlkZXIsIHVzZVNtb290aFN0YXR1cyB9ID0gSU5URVJOQUw7XG5cbmV4cG9ydCB0eXBlIE1ha2VNYXJrZG93blRleHRQcm9wcyA9IE1hcmtkb3duVGV4dFByaW1pdGl2ZVByb3BzO1xuXG5leHBvcnQgY29uc3QgbWFrZU1hcmtkb3duVGV4dCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY29tcG9uZW50czogdXNlckNvbXBvbmVudHMsXG4gIC4uLnJlc3Rcbn06IE1ha2VNYXJrZG93blRleHRQcm9wcyA9IHt9KSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgLi4udXNlckNvbXBvbmVudHMsXG4gICAgQ29kZUhlYWRlcjogdXNlckNvbXBvbmVudHM/LkNvZGVIZWFkZXIgPz8gQ29kZUhlYWRlcixcbiAgfTtcblxuICBjb25zdCBNYXJrZG93blRleHRJbXBsOiBGQyA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0dXMgPSB1c2VTbW9vdGhTdGF0dXMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPE1hcmtkb3duVGV4dFByaW1pdGl2ZVxuICAgICAgICBjb21wb25lbnRzPXtjb21wb25lbnRzfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIFwiYXVpLW1kLXJvb3RcIixcbiAgICAgICAgICBzdGF0dXMudHlwZSA9PT0gXCJydW5uaW5nXCIgJiYgXCJhdWktbWQtcnVubmluZ1wiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcbiAgTWFya2Rvd25UZXh0SW1wbC5kaXNwbGF5TmFtZSA9IFwiTWFya2Rvd25UZXh0XCI7XG5cbiAgcmV0dXJuIG1lbW8od2l0aFNtb290aENvbnRleHRQcm92aWRlcihNYXJrZG93blRleHRJbXBsKSwgKCkgPT4gdHJ1ZSk7XG59O1xuIiwiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrSWNvbiwgQ29weUljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBJTlRFUk5BTCwgdXNlVGhyZWFkQ29uZmlnIH0gZnJvbSBcIkBhc3Npc3RhbnQtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgQ29kZUhlYWRlclByb3BzIH0gZnJvbSBcIi4uL292ZXJyaWRlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQ29weVRvQ2xpcGJvYXJkIH0gZnJvbSBcIi4vdXNlQ29weVRvQ2xpcGJvYXJkXCI7XG5cbmNvbnN0IHsgVG9vbHRpcEljb25CdXR0b24gfSA9IElOVEVSTkFMO1xuXG5leHBvcnQgY29uc3QgQ29kZUhlYWRlcjogRkM8Q29kZUhlYWRlclByb3BzPiA9ICh7IGxhbmd1YWdlLCBjb2RlIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHN0cmluZ3M6IHtcbiAgICAgIGNvZGU6IHsgaGVhZGVyOiB7IGNvcHk6IHsgdG9vbHRpcCA9IFwiQ29weVwiIH0gPSB7fSB9ID0ge30gfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IHVzZVRocmVhZENvbmZpZygpO1xuXG4gIGNvbnN0IHsgaXNDb3BpZWQsIGNvcHlUb0NsaXBib2FyZCB9ID0gdXNlQ29weVRvQ2xpcGJvYXJkKCk7XG4gIGNvbnN0IG9uQ29weSA9ICgpID0+IHtcbiAgICBpZiAoIWNvZGUgfHwgaXNDb3BpZWQpIHJldHVybjtcbiAgICBjb3B5VG9DbGlwYm9hcmQoY29kZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1aS1jb2RlLWhlYWRlci1yb290XCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdWktY29kZS1oZWFkZXItbGFuZ3VhZ2VcIj57bGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgPFRvb2x0aXBJY29uQnV0dG9uIHRvb2x0aXA9e3Rvb2x0aXB9IG9uQ2xpY2s9e29uQ29weX0+XG4gICAgICAgIHshaXNDb3BpZWQgJiYgPENvcHlJY29uIC8+fVxuICAgICAgICB7aXNDb3BpZWQgJiYgPENoZWNrSWNvbiAvPn1cbiAgICAgIDwvVG9vbHRpcEljb25CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZUFjdGlvbkJhckNvcHlQcm9wcyB9IGZyb20gXCJAYXNzaXN0YW50LXVpL3JlYWN0XCI7XG5cbmV4cG9ydCB0eXBlIHVzZUNvcHlUb0NsaXBib2FyZFByb3BzID0gVXNlQWN0aW9uQmFyQ29weVByb3BzO1xuXG5leHBvcnQgY29uc3QgdXNlQ29weVRvQ2xpcGJvYXJkID0gKHtcbiAgY29waWVkRHVyYXRpb24gPSAzMDAwLFxufTogdXNlQ29weVRvQ2xpcGJvYXJkUHJvcHMgPSB7fSkgPT4ge1xuICBjb25zdCBbaXNDb3BpZWQsIHNldElzQ29waWVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzQ29waWVkKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0NvcGllZChmYWxzZSksIGNvcGllZER1cmF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBpc0NvcGllZCwgY29weVRvQ2xpcGJvYXJkIH07XG59O1xuIl0sIm5hbWVzIjpbIklOVEVSTkFMIiwidXNlQ29udGVudFBhcnRUZXh0IiwiZm9yd2FyZFJlZiIsIlJlYWN0TWFya2Rvd24iLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImpzeCIsIlByZUNvbnRleHQiLCJ1c2VJc01hcmtkb3duQ29kZUJsb2NrIiwiUHJlT3ZlcnJpZGUiLCJjaGlsZHJlbiIsInJlc3QiLCJQcm92aWRlciIsInZhbHVlIiwiRGVmYXVsdFByZSIsIm5vZGUiLCJEZWZhdWx0Q29kZSIsIkRlZmF1bHRDb2RlQmxvY2tDb250ZW50IiwiY29tcG9uZW50cyIsIlByZSIsIkNvZGUiLCJjb2RlIiwiRGVmYXVsdENvZGVIZWFkZXIiLCJ1c2VDYWxsYmFja1JlZiIsInVzZU1lbW8iLCJGcmFnbWVudCIsImpzeHMiLCJEZWZhdWx0Q29kZUJsb2NrIiwiU3ludGF4SGlnaGxpZ2h0ZXIiLCJDb2RlSGVhZGVyIiwibGFuZ3VhZ2UiLCJTSCIsImNsYXNzTmFtZXMiLCJ3aXRoRGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lUHJvcCIsInByb3BzIiwiQ29kZUJsb2NrT3ZlcnJpZGUiLCJGYWxsYmFja1N5bnRheEhpZ2hsaWdodGVyIiwiRmFsbGJhY2tDb2RlSGVhZGVyIiwiYnlfbGFuZ3VhZ2UiLCJjb2RlUHJvcHMiLCJwcmVQcm9wcyIsImdldFByZVByb3BzIiwiV3JhcHBlZFByZSIsImdldENvZGVQcm9wcyIsIldyYXBwZWRDb2RlIiwiZXhlYyIsIkNvZGVPdmVycmlkZSIsInVzZVNtb290aCIsIk1hcmtkb3duVGV4dFByaW1pdGl2ZSIsInVzZXJDb21wb25lbnRzIiwiY29udGFpbmVyUHJvcHMiLCJjb250YWluZXJDb21wb25lbnQiLCJDb250YWluZXIiLCJmb3J3YXJkZWRSZWYiLCJzbW9vdGgiLCJwYXJ0IiwidGV4dCIsInN0YXR1cyIsInByZSIsImNvbXBvbmVudHNSZXN0IiwidHlwZSIsInJlZiIsImRpc3BsYXlOYW1lIiwibWVtbyIsIkNoZWNrSWNvbiIsIkNvcHlJY29uIiwidXNlVGhyZWFkQ29uZmlnIiwidXNlU3RhdGUiLCJ1c2VDb3B5VG9DbGlwYm9hcmQiLCJjb3BpZWREdXJhdGlvbiIsImlzQ29waWVkIiwic2V0SXNDb3BpZWQiLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwic2V0VGltZW91dCIsIlRvb2x0aXBJY29uQnV0dG9uIiwic3RyaW5ncyIsImhlYWRlciIsImNvcHkiLCJ0b29sdGlwIiwib25Db3B5Iiwib25DbGljayIsIndpdGhTbW9vdGhDb250ZXh0UHJvdmlkZXIiLCJ1c2VTbW9vdGhTdGF0dXMiLCJtYWtlTWFya2Rvd25UZXh0IiwiTWFya2Rvd25UZXh0SW1wbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/.pnpm/@assistant-ui+react-markdown@0.2.12_@assistant-ui+react@0.5.51_@types+react-dom@18.3.0_@types_zbvam6hlylrpyoen3qtxo4tcdu/node_modules/@assistant-ui/react-markdown/dist/index.mjs\n");

/***/ })

};
;