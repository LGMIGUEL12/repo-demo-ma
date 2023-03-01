import {
  Badge_default
} from "/build/_shared/chunk-DAAZXNN4.js";
import {
  T as T2,
  e as e2,
  p
} from "/build/_shared/chunk-B76DMKWT.js";
import {
  IfHasPermissions_default
} from "/build/_shared/chunk-4I42Q7Y2.js";
import {
  canChangeBilling,
  useCurrentOrganization
} from "/build/_shared/chunk-OJUH3UKO.js";
import {
  SettingsTile_default
} from "/build/_shared/chunk-33GWQEOE.js";
import {
  useGetCsrfToken
} from "/build/_shared/chunk-JDRCLJ2Q.js";
import "/build/_shared/chunk-W4DXIIZX.js";
import {
  F as F3,
  k
} from "/build/_shared/chunk-T2CF575W.js";
import {
  h,
  s as s2
} from "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-CCK66CUU.js";
import {
  Alert_default
} from "/build/_shared/chunk-75ATWWIY.js";
import {
  F
} from "/build/_shared/chunk-2RQ7OU4V.js";
import {
  ClientOnly_default
} from "/build/_shared/chunk-FT7OPBPM.js";
import {
  I,
  M,
  O,
  S,
  T,
  e,
  o as o2,
  r
} from "/build/_shared/chunk-UJJUUA64.js";
import {
  $,
  C,
  F as F2,
  o,
  s,
  u,
  y
} from "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import {
  ArrowRightIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  PricingTable_default
} from "/build/_shared/chunk-OKZ23HHI.js";
import "/build/_shared/chunk-ODW25BWE.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  require_classnames
} from "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import {
  is_browser_default
} from "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import "/build/_shared/chunk-EGSMFI33.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app/settings/subscription/index.tsx
var import_react7 = __toESM(require_react());
init_es();

// app/components/subscriptions/Plans.tsx
init_es();

// app/components/subscriptions/PlanSelectionForm.tsx
var import_react5 = __toESM(require_react());
init_es();

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react = __toESM(require_react(), 1);
function b(g2 = 0) {
  let [r2, l] = (0, import_react.useState)(g2), u3 = (0, import_react.useCallback)((e3) => l((a) => a | e3), [r2]), n = (0, import_react.useCallback)((e3) => Boolean(r2 & e3), [r2]), o3 = (0, import_react.useCallback)((e3) => l((a) => a & ~e3), [l]), s3 = (0, import_react.useCallback)((e3) => l((a) => a ^ e3), [l]);
  return { addFlag: u3, hasFlag: n, removeFlag: o3, toggleFlag: s3 };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react2 = __toESM(require_react(), 1);
var u2 = (0, import_react2.createContext)(null);
function c() {
  let o3 = (0, import_react2.useContext)(u2);
  if (o3 === null) {
    let t2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t2, c), t2;
  }
  return o3;
}
function M2() {
  let [o3, t2] = (0, import_react2.useState)([]);
  return [o3.length > 0 ? o3.join(" ") : void 0, (0, import_react2.useMemo)(() => function(e3) {
    let l = o((a) => (t2((i) => [...i, a]), () => t2((i) => {
      let n = i.slice(), d = n.indexOf(a);
      return d !== -1 && n.splice(d, 1), n;
    }))), r2 = (0, import_react2.useMemo)(() => ({ register: l, slot: e3.slot, name: e3.name, props: e3.props }), [l, e3.slot, e3.name, e3.props]);
    return import_react2.default.createElement(u2.Provider, { value: r2 }, e3.children);
  }, [t2])];
}
var h2 = "label";
var F4 = C(function(t2, s3) {
  let { passive: e3 = false, ...l } = t2, r2 = c(), a = `headlessui-label-${I()}`, i = y(s3);
  s(() => r2.register(a), [a, r2.register]);
  let n = { ref: i, ...r2.props, id: a };
  return e3 && ("onClick" in n && delete n.onClick, "onClick" in l && delete l.onClick), $({ ourProps: n, theirProps: l, slot: r2.slot || {}, defaultTag: h2, name: r2.name || "Label" });
});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var ye = ((t2) => (t2[t2.RegisterOption = 0] = "RegisterOption", t2[t2.UnregisterOption = 1] = "UnregisterOption", t2))(ye || {});
var ge = { [0](a, n) {
  let t2 = [...a.options, { id: n.id, element: n.element, propsRef: n.propsRef }];
  return { ...a, options: S(t2, (l) => l.element.current) };
}, [1](a, n) {
  let t2 = a.options.slice(), l = a.options.findIndex((O2) => O2.id === n.id);
  return l === -1 ? a : (t2.splice(l, 1), { ...a, options: t2 });
} };
var V = (0, import_react3.createContext)(null);
V.displayName = "RadioGroupContext";
function te(a) {
  let n = (0, import_react3.useContext)(V);
  if (n === null) {
    let t2 = new Error(`<${a} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, te), t2;
  }
  return n;
}
function ve(a, n) {
  return u(n.type, ge, a, n);
}
var Oe = "div";
var Ee = C(function(n, t2) {
  let { value: l, defaultValue: O2, name: c2, onChange: M3, by: E = (e3, r2) => e3 === r2, disabled: P = false, ...S2 } = n, u3 = o(typeof E == "string" ? (e3, r2) => {
    let o3 = E;
    return (e3 == null ? void 0 : e3[o3]) === (r2 == null ? void 0 : r2[o3]);
  } : E), [_, A] = (0, import_react3.useReducer)(ve, { options: [] }), i = _.options, [R, U] = M2(), [f2, D] = k(), H = `headlessui-radiogroup-${I()}`, h3 = (0, import_react3.useRef)(null), G = y(h3, t2), [p3, k2] = T2(l, M3, O2), F5 = (0, import_react3.useMemo)(() => i.find((e3) => !e3.propsRef.current.disabled), [i]), L2 = (0, import_react3.useMemo)(() => i.some((e3) => u3(e3.propsRef.current.value, p3)), [i, p3]), T3 = o((e3) => {
    var o3;
    if (P || u3(e3, p3))
      return false;
    let r2 = (o3 = i.find((w) => u3(w.propsRef.current.value, e3))) == null ? void 0 : o3.propsRef.current;
    return r2 != null && r2.disabled ? false : (k2 == null || k2(e3), true);
  });
  F({ container: h3.current, accept(e3) {
    return e3.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e3) {
    e3.setAttribute("role", "none");
  } });
  let N = o((e3) => {
    let r2 = h3.current;
    if (!r2)
      return;
    let o3 = e(r2), w = i.filter((d) => d.propsRef.current.disabled === false).map((d) => d.element.current);
    switch (e3.key) {
      case o2.Enter:
        p(e3.currentTarget);
        break;
      case o2.ArrowLeft:
      case o2.ArrowUp:
        if (e3.preventDefault(), e3.stopPropagation(), O(w, T.Previous | T.WrapAround) === M.Success) {
          let m3 = i.find((K) => K.element.current === (o3 == null ? void 0 : o3.activeElement));
          m3 && T3(m3.propsRef.current.value);
        }
        break;
      case o2.ArrowRight:
      case o2.ArrowDown:
        if (e3.preventDefault(), e3.stopPropagation(), O(w, T.Next | T.WrapAround) === M.Success) {
          let m3 = i.find((K) => K.element.current === (o3 == null ? void 0 : o3.activeElement));
          m3 && T3(m3.propsRef.current.value);
        }
        break;
      case o2.Space:
        {
          e3.preventDefault(), e3.stopPropagation();
          let d = i.find((m3) => m3.element.current === (o3 == null ? void 0 : o3.activeElement));
          d && T3(d.propsRef.current.value);
        }
        break;
    }
  }), x = o((e3) => (A({ type: 0, ...e3 }), () => A({ type: 1, id: e3.id }))), s3 = (0, import_react3.useMemo)(() => ({ registerOption: x, firstOption: F5, containsCheckedOption: L2, change: T3, disabled: P, value: p3, compare: u3 }), [x, F5, L2, T3, P, p3, u3]), y2 = { ref: G, id: H, role: "radiogroup", "aria-labelledby": R, "aria-describedby": f2, onKeyDown: N }, W = (0, import_react3.useMemo)(() => ({ value: p3 }), [p3]);
  return import_react3.default.createElement(D, { name: "RadioGroup.Description" }, import_react3.default.createElement(U, { name: "RadioGroup.Label" }, import_react3.default.createElement(V.Provider, { value: s3 }, c2 != null && p3 != null && e2({ [c2]: p3 }).map(([e3, r2]) => import_react3.default.createElement(h, { features: s2.Hidden, ...F2({ key: e3, as: "input", type: "radio", checked: r2 != null, hidden: true, readOnly: true, name: e3, value: r2 }) })), $({ ourProps: y2, theirProps: S2, slot: W, defaultTag: Oe, name: "RadioGroup" }))));
});
var Pe = ((t2) => (t2[t2.Empty = 1] = "Empty", t2[t2.Active = 2] = "Active", t2))(Pe || {});
var Ae = "div";
var he = C(function(n, t2) {
  let l = (0, import_react3.useRef)(null), O2 = y(l, t2), c2 = `headlessui-radiogroup-option-${I()}`, [M3, E] = M2(), [P, S2] = k(), { addFlag: u3, removeFlag: _, hasFlag: A } = b(1), { value: i, disabled: R = false, ...U } = n, f2 = (0, import_react3.useRef)({ value: i, disabled: R });
  s(() => {
    f2.current.value = i;
  }, [i, f2]), s(() => {
    f2.current.disabled = R;
  }, [R, f2]);
  let { registerOption: D, disabled: H, change: h3, firstOption: G, containsCheckedOption: p3, value: k2, compare: F5 } = te("RadioGroup.Option");
  s(() => D({ id: c2, element: l, propsRef: f2 }), [c2, D, l, n]);
  let L2 = o((r2) => {
    var o3;
    if (r(r2.currentTarget))
      return r2.preventDefault();
    !h3(i) || (u3(2), (o3 = l.current) == null || o3.focus());
  }), T3 = o((r2) => {
    if (r(r2.currentTarget))
      return r2.preventDefault();
    u3(2);
  }), N = o(() => _(2)), x = (G == null ? void 0 : G.id) === c2, s3 = H || R, y2 = F5(k2, i), W = { ref: O2, id: c2, role: "radio", "aria-checked": y2 ? "true" : "false", "aria-labelledby": M3, "aria-describedby": P, "aria-disabled": s3 ? true : void 0, tabIndex: (() => s3 ? -1 : y2 || !p3 && x ? 0 : -1)(), onClick: s3 ? void 0 : L2, onFocus: s3 ? void 0 : T3, onBlur: s3 ? void 0 : N }, e3 = (0, import_react3.useMemo)(() => ({ checked: y2, disabled: s3, active: A(2) }), [y2, s3, A]);
  return import_react3.default.createElement(S2, { name: "RadioGroup.Description" }, import_react3.default.createElement(E, { name: "RadioGroup.Label" }, $({ ourProps: W, theirProps: U, slot: e3, defaultTag: Ae, name: "RadioGroup.Option" })));
});
var et = Object.assign(Ee, { Option: he, Label: F4, Description: F3 });

// app/components/subscriptions/PlanSelector.tsx
var import_classnames = __toESM(require_classnames());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var STRIPE_PLANS = configuration_default.stripe.plans;
function PlanSelector(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(et, {
        className: "w-full lg:w-6/12 2xl:w-4/12",
        value: props.plan,
        onChange: props.setPlan,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "w-full space-y-2.5",
          children: STRIPE_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(et.Option, {
            value: plan,
            "data-cy": `subscription-plan`,
            className: ({ active, checked }) => (0, import_classnames.default)(`PlanSelectorRadioItem`, {
              PlanSelectorRadioItemNonActive: !active,
              PlanSelectorRadioItemChecked: checked
            }),
            children: ({ checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex w-full items-center justify-between",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex w-full items-center space-x-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-shrink-0",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                        condition: checked,
                        fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UncheckIcon, {}, void 0, false, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 48,
                          columnNumber: 59
                        }, this),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckIcon, {
                          className: "PlanSelectorCheckIcon"
                        }, void 0, false, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 49,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/subscriptions/PlanSelector.tsx",
                        lineNumber: 48,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/subscriptions/PlanSelector.tsx",
                      lineNumber: 47,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-auto text-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(et.Label, {
                          as: "p",
                          className: `PlanSelectorName`,
                          children: plan.name
                        }, void 0, false, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 54,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(et.Description, {
                          as: "span",
                          className: (0, import_classnames.default)(`inline text-base`, {
                            "dark:text-gray-300": checked,
                            "text-gray-500 dark:text-gray-400": !checked
                          }),
                          children: plan.description
                        }, void 0, false, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 58,
                          columnNumber: 25
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/subscriptions/PlanSelector.tsx",
                      lineNumber: 53,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "PlanSelectorPrice",
                      children: plan.price
                    }, void 0, false, {
                      fileName: "app/components/subscriptions/PlanSelector.tsx",
                      lineNumber: 69,
                      columnNumber: 23
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/subscriptions/PlanSelector.tsx",
                  lineNumber: 46,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: "app/components/subscriptions/PlanSelector.tsx",
                lineNumber: 45,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: "app/components/subscriptions/PlanSelector.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this)
          }, plan.name, false, {
            fileName: "app/components/subscriptions/PlanSelector.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this))
        }, void 0, false, {
          fileName: "app/components/subscriptions/PlanSelector.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: props.plan,
        children: (plan) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex w-full flex-1 flex-col space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 2,
                    children: plan.name
                  }, void 0, false, {
                    fileName: "app/components/subscriptions/PlanSelector.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 4,
                    children: plan.description
                  }, void 0, false, {
                    fileName: "app/components/subscriptions/PlanSelector.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/subscriptions/PlanSelector.tsx",
                lineNumber: 83,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingTable_default.Price, {
                children: plan.price
              }, void 0, false, {
                fileName: "app/components/subscriptions/PlanSelector.tsx",
                lineNumber: 88,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingTable_default.FeaturesList, {
                features: plan.features
              }, void 0, false, {
                fileName: "app/components/subscriptions/PlanSelector.tsx",
                lineNumber: 90,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/subscriptions/PlanSelector.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this);
        }
      }, void 0, false, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/PlanSelector.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function CheckIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
        cx: 12,
        cy: 12,
        r: 12,
        fill: "#fff",
        opacity: "0.2"
      }, void 0, false, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M7 13l3 3 7-7",
        stroke: "#fff",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, false, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/PlanSelector.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
function UncheckIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
        cx: 12,
        cy: 12,
        r: 12,
        fill: "currentColor",
        opacity: "0.2"
      }, void 0, false, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 117,
        columnNumber: 7
      }, this),
      ";"
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/PlanSelector.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}

// app/components/subscriptions/CheckoutRedirectButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CHECKOUT_SESSION_API_ENDPOINT = configuration_default.paths.api.checkout;
var CheckoutRedirectButton = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    "data-cy": "checkout-form",
    action: CHECKOUT_SESSION_API_ENDPOINT,
    method: "POST",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckoutFormData, {
          customerId: props.customerId,
          organizationId: props.organizationId,
          priceId: props.priceId
        }, void 0, false, {
          fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        size: "large",
        color: "primary",
        type: "submit",
        disabled: props.disabled,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children
            }, void 0, false, {
              fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightIcon_default, {
              className: "h-6"
            }, void 0, false, {
              fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var CheckoutRedirectButton_default = CheckoutRedirectButton;
function CheckoutFormData(props) {
  const getCsrfToken = useGetCsrfToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "organizationId",
        defaultValue: props.organizationId
      }, void 0, false, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "csrfToken",
        defaultValue: getCsrfToken() ?? ""
      }, void 0, false, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "returnUrl",
        defaultValue: getReturnUrl()
      }, void 0, false, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "priceId",
        defaultValue: props.priceId
      }, void 0, false, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "customerId",
        defaultValue: props.customerId
      }, void 0, false, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function getReturnUrl() {
  return is_browser_default() ? [window.location.origin, window.location.pathname].join("") : void 0;
}

// app/components/subscriptions/BillingRedirectButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BILLING_PORTAL_REDIRECT_ENDPOINT = configuration_default.paths.api.billingPortal;
var BillingPortalRedirectButton = ({ children, customerId, className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    method: "POST",
    action: BILLING_PORTAL_REDIRECT_ENDPOINT,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "customerId",
        value: customerId
      }, void 0, false, {
        fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CsrfTokenInput, {}, void 0, false, {
          fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        size: "large",
        color: "secondary",
        className,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children
            }, void 0, false, {
              fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightIcon_default, {
              className: "h-6"
            }, void 0, false, {
              fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
function CsrfTokenInput() {
  const getCsrfToken = useGetCsrfToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
    type: "hidden",
    name: "csrfToken",
    defaultValue: getCsrfToken() ?? ""
  }, void 0, false, {
    fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var BillingRedirectButton_default = BillingPortalRedirectButton;

// app/components/subscriptions/PlanSelectionForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var stripePlans = configuration_default.stripe.plans;
var PlanSelectionForm = ({ organization }) => {
  const initialPlan = stripePlans.find((item) => {
    return item.stripePriceId === organization?.subscription?.priceId;
  });
  const [selectedPlan, setSelectedPlan] = (0, import_react5.useState)(initialPlan);
  const isCheckoutDisabled = initialPlan?.stripePriceId === selectedPlan?.stripePriceId;
  const customerId = organization.customerId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
      condition: canChangeBilling,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "w-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlanSelector, {
            plan: selectedPlan,
            setPlan: setSelectedPlan
          }, void 0, false, {
            fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckoutRedirectButton_default, {
              organizationId: organization.id,
              priceId: selectedPlan?.stripePriceId,
              customerId,
              disabled: isCheckoutDisabled,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "subscription:goToCheckout"
              }, void 0, false, {
                fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: customerId,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BillingRedirectButton_default, {
                customerId,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "subscription:manageBilling"
                }, void 0, false, {
                  fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
                  lineNumber: 57,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
                lineNumber: 56,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
var PlanSelectionForm_default = PlanSelectionForm;

// app/components/subscriptions/SubscriptionCard.tsx
var import_react6 = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SubscriptionCard = ({ subscription }) => {
  const plans = (0, import_react6.useMemo)(() => getPlans(), []);
  const plan = (0, import_react6.useMemo)(() => {
    return plans.find((item) => {
      return item.stripePriceId === subscription.priceId;
    });
  }, [plans, subscription.priceId]);
  const endDate = (0, import_react6.useMemo)(() => {
    const endDateMs = subscription.periodEndsAt * 1e3;
    return new Date(endDateMs).toLocaleDateString();
  }, [subscription.periodEndsAt]);
  const isSubscriptionActive = (0, import_react6.useMemo)(() => {
    return subscription.status === "paid" /* Paid */;
  }, [subscription.status]);
  if (!plan) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6",
    "data-cy": "subscription-card",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-2.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-xs text-gray-700 dark:text-gray-400",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:currentPlan"
            }, void 0, false, {
              fileName: "app/components/subscriptions/SubscriptionCard.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                type: 3,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  "data-cy": "subscription-name",
                  children: plan.name
                }, void 0, false, {
                  fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                  lineNumber: 47,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                lineNumber: 46,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: isSubscriptionActive,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge_default, {
                  size: "small",
                  color: "success",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                    i18nKey: "subscription:subscriptionActiveBadge"
                  }, void 0, false, {
                    fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                    lineNumber: 52,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                lineNumber: 50,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 6,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "text-gray-700 dark:text-gray-400",
              children: plan.description
            }, void 0, false, {
              fileName: "app/components/subscriptions/SubscriptionCard.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/subscriptions/SubscriptionCard.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            "data-cy": "subscription-period-end",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:subscriptionWillEndOn",
              values: { endDate }
            }, void 0, false, {
              fileName: "app/components/subscriptions/SubscriptionCard.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/subscriptions/SubscriptionCard.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/SubscriptionCard.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/SubscriptionCard.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};
function getPlans() {
  const { plans } = configuration_default.stripe;
  return [...plans, ...getTestingPlans()];
}
function getTestingPlans() {
  return [
    {
      name: "Testing Plan",
      description: "Description of your Testing plan",
      price: "$999/year",
      stripePriceId: "price_1LFibmKr5l4rxPx3wWcSO8UY",
      features: []
    }
  ];
}
var SubscriptionCard_default = SubscriptionCard;

// app/components/subscriptions/Plans.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Plans = () => {
  const organization = useCurrentOrganization();
  if (!organization) {
    return null;
  }
  const customerId = organization.customerId;
  const subscription = organization.subscription;
  if (!subscription) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlanSelectionForm_default, {
      organization
    }, void 0, false, {
      fileName: "app/components/subscriptions/Plans.tsx",
      lineNumber: 28,
      columnNumber: 12
    }, this);
  }
  const isAwaitingPayment = subscription.status === "awaitingPayment" /* AwaitingPayment */;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: isAwaitingPayment,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwaitingPaymentAlert, {}, void 0, false, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubscriptionCard_default, {
        subscription
      }, void 0, false, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
        condition: canChangeBilling,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: customerId,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BillingRedirectButton_default, {
            customerId,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:manageBilling"
            }, void 0, false, {
              fileName: "app/components/subscriptions/Plans.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/subscriptions/Plans.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/Plans.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
function AwaitingPaymentAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "warn",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "subscription:awaitingPaymentAlertHeading"
        }, void 0, false, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        "data-cy": "awaiting-payment-alert",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "subscription:awaitingPaymentAlert"
        }, void 0, false, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/subscriptions/Plans.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
var Plans_default = Plans;

// app/routes/__app/settings/subscription/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Subscription"
  };
};
var SubscriptionSettingsPage = () => {
  const status = useSubscriptionStatus();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "w-full",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "common:subscriptionSettingsTabLabel"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/subscription/index.tsx",
          lineNumber: 30,
          columnNumber: 20
        }, this),
        subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "subscription:subscriptionTabSubheading"
        }, void 0, false, {
          fileName: "app/routes/__app/settings/subscription/index.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: status !== void 0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlansStatusAlert, {
                status
              }, void 0, false, {
                fileName: "app/routes/__app/settings/subscription/index.tsx",
                lineNumber: 37,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plans_default, {}, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/__app/settings/subscription/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/__app/settings/subscription/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app/settings/subscription/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
};
var subscription_default = SubscriptionSettingsPage;
function PlansStatusAlert({
  status
}) {
  switch (status) {
    case "cancel" /* Cancel */:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
        type: "warn",
        useCloseButton: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:checkOutCanceledAlertHeading"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:checkOutCanceledAlert"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this);
    case "error" /* Error */:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
        type: "error",
        useCloseButton: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:unknownErrorAlertHeading"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:unknownErrorAlert"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this);
    case "success" /* Success */:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
        type: "success",
        useCloseButton: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:checkOutCompletedAlertHeading"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "subscription:checkOutCompletedAlert"
            }, void 0, false, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this);
  }
}
function useSubscriptionStatus() {
  const [status, setStatus] = (0, import_react7.useState)();
  (0, import_react7.useEffect)(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.has("error" /* Error */);
    const canceled = params.has("cancel" /* Cancel */);
    const success = params.has("success" /* Success */);
    if (canceled) {
      setStatus("cancel" /* Cancel */);
    } else if (success) {
      setStatus("success" /* Success */);
    } else if (error) {
      setStatus("error" /* Error */);
    }
  }, []);
  return status;
}
export {
  subscription_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app/settings/subscription/index-PMTEYGVS.js.map
