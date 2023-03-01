import {
  a,
  e,
  m,
  s,
  u
} from "/build/_shared/chunk-6E6B4MC5.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react = __toESM(require_react(), 1);
var u2;
var l = 0;
function r() {
  return ++l;
}
var I = (u2 = import_react.default.useId) != null ? u2 : function() {
  let n = a(), [e3, o2] = import_react.default.useState(n ? r : null);
  return s(() => {
    e3 === null && o2(r());
  }, [e3]), e3 != null ? "" + e3 : void 0;
};

// node_modules/@headlessui/react/dist/utils/owner.js
function e2(r3) {
  return e ? null : r3 instanceof Node ? r3.ownerDocument : r3 != null && r3.hasOwnProperty("current") && r3.current instanceof Node ? r3.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var m2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e3) => `${e3}:not([tabindex='-1'])`).join(",");
var T = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(T || {});
var M = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(M || {});
var b = ((r3) => (r3[r3.Previous = -1] = "Previous", r3[r3.Next = 1] = "Next", r3))(b || {});
function d(e3 = document.body) {
  return e3 == null ? [] : Array.from(e3.querySelectorAll(m2));
}
var N = ((r3) => (r3[r3.Strict = 0] = "Strict", r3[r3.Loose = 1] = "Loose", r3))(N || {});
function F(e3, t2 = 0) {
  var r3;
  return e3 === ((r3 = e2(e3)) == null ? void 0 : r3.body) ? false : u(t2, { [0]() {
    return e3.matches(m2);
  }, [1]() {
    let l2 = e3;
    for (; l2 !== null; ) {
      if (l2.matches(m2))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function I2(e3) {
  let t2 = e2(e3);
  m().nextFrame(() => {
    t2 && !F(t2.activeElement, 0) && h(e3);
  });
}
function h(e3) {
  e3 == null || e3.focus({ preventScroll: true });
}
var w = ["textarea", "input"].join(",");
function H(e3) {
  var t2, r3;
  return (r3 = (t2 = e3 == null ? void 0 : e3.matches) == null ? void 0 : t2.call(e3, w)) != null ? r3 : false;
}
function S(e3, t2 = (r3) => r3) {
  return e3.slice().sort((r3, l2) => {
    let o2 = t2(r3), s2 = t2(l2);
    if (o2 === null || s2 === null)
      return 0;
    let n = o2.compareDocumentPosition(s2);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function D(e3, t2) {
  return O(d(), t2, true, e3);
}
function O(e3, t2, r3 = true, l2 = null) {
  let o2 = Array.isArray(e3) ? e3.length > 0 ? e3[0].ownerDocument : document : e3.ownerDocument, s2 = Array.isArray(e3) ? r3 ? S(e3) : e3 : d(e3);
  l2 = l2 != null ? l2 : o2.activeElement;
  let n = (() => {
    if (t2 & 5)
      return 1;
    if (t2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), E = (() => {
    if (t2 & 1)
      return 0;
    if (t2 & 2)
      return Math.max(0, s2.indexOf(l2)) - 1;
    if (t2 & 4)
      return Math.max(0, s2.indexOf(l2)) + 1;
    if (t2 & 8)
      return s2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x = t2 & 32 ? { preventScroll: true } : {}, f = 0, i2 = s2.length, u3;
  do {
    if (f >= i2 || f + i2 <= 0)
      return 0;
    let a2 = E + f;
    if (t2 & 16)
      a2 = (a2 + i2) % i2;
    else {
      if (a2 < 0)
        return 3;
      if (a2 >= i2)
        return 1;
    }
    u3 = s2[a2], u3 == null || u3.focus(x), f += n;
  } while (u3 !== o2.activeElement);
  return t2 & 6 && H(u3) && u3.select(), u3.hasAttribute("tabindex") || u3.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n) {
  let e3 = n.parentElement, l2 = null;
  for (; e3 && !(e3 instanceof HTMLFieldSetElement); )
    e3 instanceof HTMLLegendElement && (l2 = e3), e3 = e3.parentElement;
  let t2 = (e3 == null ? void 0 : e3.getAttribute("disabled")) === "";
  return t2 && i(l2) ? false : t2;
}
function i(n) {
  if (!n)
    return false;
  let e3 = n.previousElementSibling;
  for (; e3 !== null; ) {
    if (e3 instanceof HTMLLegendElement)
      return false;
    e3 = e3.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o = ((r3) => (r3.Space = " ", r3.Enter = "Enter", r3.Escape = "Escape", r3.Backspace = "Backspace", r3.Delete = "Delete", r3.ArrowLeft = "ArrowLeft", r3.ArrowUp = "ArrowUp", r3.ArrowRight = "ArrowRight", r3.ArrowDown = "ArrowDown", r3.Home = "Home", r3.End = "End", r3.PageUp = "PageUp", r3.PageDown = "PageDown", r3.Tab = "Tab", r3))(o || {});

export {
  I,
  e2 as e,
  T,
  M,
  d,
  N,
  F,
  I2,
  h,
  S,
  D,
  O,
  r2 as r,
  o
};
//# sourceMappingURL=/build/_shared/chunk-UJJUUA64.js.map
