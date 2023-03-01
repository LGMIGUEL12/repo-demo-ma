import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __commonJS
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@heroicons/react/24/outline/XMarkIcon.js
var require_XMarkIcon = __commonJS({
  "node_modules/@heroicons/react/24/outline/XMarkIcon.js"(exports, module) {
    var React = require_react();
    function XMarkIcon({
      title,
      titleId,
      ...props
    }, svgRef) {
      return /* @__PURE__ */ React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
      }, props), title ? /* @__PURE__ */ React.createElement("title", {
        id: titleId
      }, title) : null, /* @__PURE__ */ React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      }));
    }
    var ForwardRef = React.forwardRef(XMarkIcon);
    module.exports = ForwardRef;
  }
});

export {
  require_XMarkIcon
};
//# sourceMappingURL=/build/_shared/chunk-XQJIPBYI.js.map
