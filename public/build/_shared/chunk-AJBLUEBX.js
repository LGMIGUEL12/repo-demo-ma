import {
  $,
  C
} from "/build/_shared/chunk-6E6B4MC5.js";

// node_modules/@headlessui/react/dist/internal/hidden.js
var a = "div";
var s = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s || {});
var h = C(function(t, o) {
  let { features: e = 1, ...r } = t, d = { ref: o, "aria-hidden": (e & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e & 4) === 4 && (e & 2) !== 2 && { display: "none" } } };
  return $({ ourProps: d, theirProps: r, slot: {}, defaultTag: a, name: "Hidden" });
});

export {
  s,
  h
};
//# sourceMappingURL=/build/_shared/chunk-AJBLUEBX.js.map
