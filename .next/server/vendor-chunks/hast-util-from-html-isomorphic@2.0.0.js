"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-html-isomorphic@2.0.0";
exports.ids = ["vendor-chunks/hast-util-from-html-isomorphic@2.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/index.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/index.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHtmlIsomorphic: () => (/* binding */ fromHtmlIsomorphic)\n/* harmony export */ });\n/* harmony import */ var hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-from-html */ \"(rsc)/./node_modules/.pnpm/hast-util-from-html@2.0.3/node_modules/hast-util-from-html/lib/index.js\");\n/* harmony import */ var unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-remove-position */ \"(rsc)/./node_modules/.pnpm/unist-util-remove-position@5.0.0/node_modules/unist-util-remove-position/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n *\n * @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options\n */\n\n\n\n\n/**\n * Turn HTML into a syntax tree, using browser APIs when available, so it has\n * a smaller bundle size there.\n *\n * @param {string} value\n *   Serialized HTML to parse.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {Root}\n *   Tree.\n */\nfunction fromHtmlIsomorphic(value, options) {\n  const tree = (0,hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__.fromHtml)(value, options)\n  ;(0,unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__.removePosition)(tree, {force: true})\n  delete tree.data\n  return tree\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljQDIuMC4wL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtZnJvbS1odG1sLWlzb21vcnBoaWMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQSxhQUFhLHlEQUF5RDtBQUN0RTs7QUFFNEM7QUFDYTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxlQUFlLDZEQUFRO0FBQ3ZCLEVBQUUsMkVBQWMsUUFBUSxZQUFZO0FBQ3BDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9oYXN0LXV0aWwtZnJvbS1odG1sLWlzb21vcnBoaWNAMi4wLjAvbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1mcm9tLWh0bWwtaXNvbW9ycGhpYy9saWIvaW5kZXguanM/MzY0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKlxuICogQHR5cGVkZWYge1BpY2s8aW1wb3J0KCdoYXN0LXV0aWwtZnJvbS1odG1sJykuT3B0aW9ucywgJ2ZyYWdtZW50Jz59IE9wdGlvbnNcbiAqL1xuXG5pbXBvcnQge2Zyb21IdG1sfSBmcm9tICdoYXN0LXV0aWwtZnJvbS1odG1sJ1xuaW1wb3J0IHtyZW1vdmVQb3NpdGlvbn0gZnJvbSAndW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24nXG5cbi8qKlxuICogVHVybiBIVE1MIGludG8gYSBzeW50YXggdHJlZSwgdXNpbmcgYnJvd3NlciBBUElzIHdoZW4gYXZhaWxhYmxlLCBzbyBpdCBoYXNcbiAqIGEgc21hbGxlciBidW5kbGUgc2l6ZSB0aGVyZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgU2VyaWFsaXplZCBIVE1MIHRvIHBhcnNlLlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtSb290fVxuICogICBUcmVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUh0bWxJc29tb3JwaGljKHZhbHVlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHRyZWUgPSBmcm9tSHRtbCh2YWx1ZSwgb3B0aW9ucylcbiAgcmVtb3ZlUG9zaXRpb24odHJlZSwge2ZvcmNlOiB0cnVlfSlcbiAgZGVsZXRlIHRyZWUuZGF0YVxuICByZXR1cm4gdHJlZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/hast-util-from-html-isomorphic@2.0.0/node_modules/hast-util-from-html-isomorphic/lib/index.js\n");

/***/ })

};
;