import {
  F,
  N
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  s2 as s
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react = __toESM(require_react(), 1);
function d(e, r, n) {
  let o = s(r);
  (0, import_react.useEffect)(() => {
    function t(u) {
      o.current(u);
    }
    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n);
  }, [e, n]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L(E, m2, c = true) {
  let i = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    requestAnimationFrame(() => {
      i.current = c;
    });
  }, [c]);
  function f(e, o) {
    if (!i.current || e.defaultPrevented)
      return;
    let l = function r(t) {
      return typeof t == "function" ? r(t()) : Array.isArray(t) || t instanceof Set ? t : [t];
    }(E), n = o(e);
    if (n !== null && !!n.getRootNode().contains(n)) {
      for (let r of l) {
        if (r === null)
          continue;
        let t = r instanceof HTMLElement ? r : r.current;
        if (t != null && t.contains(n))
          return;
      }
      return !F(n, N.Loose) && n.tabIndex !== -1 && e.preventDefault(), m2(e, n);
    }
  }
  let u = (0, import_react2.useRef)(null);
  d("mousedown", (e) => {
    var o, l;
    i.current && (u.current = ((l = (o = e.composedPath) == null ? void 0 : o.call(e)) == null ? void 0 : l[0]) || e.target);
  }, true), d("click", (e) => {
    !u.current || (f(e, () => u.current), u.current = null);
  }, true), d("blur", (e) => f(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

export {
  L
};
//# sourceMappingURL=/build/_shared/chunk-6ZZPVUWI.js.map
