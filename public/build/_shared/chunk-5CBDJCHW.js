import {
  s
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react = __toESM(require_react(), 1);
function i(t) {
  var n;
  if (t.type)
    return t.type;
  let e = (n = t.as) != null ? n : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function s2(t, e) {
  let [n, u] = (0, import_react.useState)(() => i(t));
  return s(() => {
    u(i(t));
  }, [t.type, t.as]), s(() => {
    n || !e.current || e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u("button");
  }, [n, e]), n;
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f(r) {
  throw new Error("Unexpected object: " + r);
}
var a = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(a || {});
function x(r, n) {
  let t = n.resolveItems();
  if (t.length <= 0)
    return null;
  let l = n.resolveActiveIndex(), s3 = l != null ? l : -1, d = (() => {
    switch (r.focus) {
      case 0:
        return t.findIndex((e) => !n.resolveDisabled(e));
      case 1: {
        let e = t.slice().reverse().findIndex((i2, c, u) => s3 !== -1 && u.length - c - 1 >= s3 ? false : !n.resolveDisabled(i2));
        return e === -1 ? e : t.length - 1 - e;
      }
      case 2:
        return t.findIndex((e, i2) => i2 <= s3 ? false : !n.resolveDisabled(e));
      case 3: {
        let e = t.slice().reverse().findIndex((i2) => !n.resolveDisabled(i2));
        return e === -1 ? e : t.length - 1 - e;
      }
      case 4:
        return t.findIndex((e) => n.resolveId(e) === r.id);
      case 5:
        return null;
      default:
        f(r);
    }
  })();
  return d === -1 ? l : d;
}

export {
  s2 as s,
  a,
  x
};
//# sourceMappingURL=/build/_shared/chunk-5CBDJCHW.js.map
