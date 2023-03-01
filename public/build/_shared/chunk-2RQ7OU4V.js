import {
  e
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  s
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react = __toESM(require_react(), 1);
function F({ container: e2, accept: t, walk: r, enabled: c = true }) {
  let o = (0, import_react.useRef)(t), l = (0, import_react.useRef)(r);
  (0, import_react.useEffect)(() => {
    o.current = t, l.current = r;
  }, [t, r]), s(() => {
    if (!e2 || !c)
      return;
    let n = e(e2);
    if (!n)
      return;
    let f = o.current, p = l.current, d = Object.assign((i) => f(i), { acceptNode: f }), u = n.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, d, false);
    for (; u.nextNode(); )
      p(u.currentNode);
  }, [e2, c, o, l]);
}

export {
  F
};
//# sourceMappingURL=/build/_shared/chunk-2RQ7OU4V.js.map
