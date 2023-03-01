import {
  o
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/utils/form.js
function e(n = {}, r = null, t = []) {
  for (let [i, o3] of Object.entries(n))
    f(t, s(r, i), o3);
  return t;
}
function s(n, r) {
  return n ? n + "[" + r + "]" : r;
}
function f(n, r, t) {
  if (Array.isArray(t))
    for (let [i, o3] of t.entries())
      f(n, s(r, i.toString()), o3);
  else
    t instanceof Date ? n.push([r, t.toISOString()]) : typeof t == "boolean" ? n.push([r, t ? "1" : "0"]) : typeof t == "string" ? n.push([r, t]) : typeof t == "number" ? n.push([r, `${t}`]) : t == null ? n.push([r, ""]) : e(t, r, n);
}
function p(n) {
  var t;
  let r = (t = n == null ? void 0 : n.form) != null ? t : n.closest("form");
  if (!!r) {
    for (let i of r.elements)
      if (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image") {
        i.click();
        return;
      }
  }
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react = __toESM(require_react(), 1);
function T(l, r, c) {
  let [i, s2] = (0, import_react.useState)(c), e2 = l !== void 0, t = (0, import_react.useRef)(e2), u = (0, import_react.useRef)(false), d = (0, import_react.useRef)(false);
  return e2 && !t.current && !u.current ? (u.current = true, t.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t.current && !d.current && (d.current = true, t.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l : i, o((n) => (e2 || s2(n), r == null ? void 0 : r(n)))];
}

export {
  e,
  p,
  T
};
//# sourceMappingURL=/build/_shared/chunk-B76DMKWT.js.map
