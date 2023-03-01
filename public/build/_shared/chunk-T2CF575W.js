import {
  I
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  $,
  C,
  o,
  s,
  y
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react = __toESM(require_react(), 1);
var d = (0, import_react.createContext)(null);
function u() {
  let r = (0, import_react.useContext)(d);
  if (r === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, u), t;
  }
  return r;
}
function k() {
  let [r, t] = (0, import_react.useState)([]);
  return [r.length > 0 ? r.join(" ") : void 0, (0, import_react.useMemo)(() => function(e) {
    let i = o((n) => (t((o2) => [...o2, n]), () => t((o2) => {
      let c = o2.slice(), p = c.indexOf(n);
      return p !== -1 && c.splice(p, 1), c;
    }))), s2 = (0, import_react.useMemo)(() => ({ register: i, slot: e.slot, name: e.name, props: e.props }), [i, e.slot, e.name, e.props]);
    return import_react.default.createElement(d.Provider, { value: s2 }, e.children);
  }, [t])];
}
var S = "p";
var F = C(function(t, a) {
  let e = u(), i = `headlessui-description-${I()}`, s2 = y(a);
  s(() => e.register(i), [i, e.register]);
  let n = t, o2 = { ref: s2, ...e.props, id: i };
  return $({ ourProps: o2, theirProps: n, slot: e.slot || {}, defaultTag: S, name: e.name || "Description" });
});

export {
  k,
  F
};
//# sourceMappingURL=/build/_shared/chunk-T2CF575W.js.map
