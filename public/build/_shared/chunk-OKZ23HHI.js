import {
  require_CheckCircleIcon
} from "/build/_shared/chunk-ODW25BWE.js";
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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/PricingTable.tsx
var import_CheckCircleIcon = __toESM(require_CheckCircleIcon());
var import_classnames = __toESM(require_classnames());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var PLANS = configuration_default.stripe.plans;
var PricingTable = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col items-start items-center space-y-6 lg:space-y-0 justify-center lg:flex-row lg:space-x-4",
    children: PLANS.map((plan) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingItem, {
        selectable: true,
        plan
      }, plan.stripePriceId, false, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 26,
        columnNumber: 16
      }, this);
    })
  }, void 0, false, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var PricingTable_default = PricingTable;
PricingTable.Item = PricingItem;
PricingTable.Price = Price;
PricingTable.FeaturesList = FeaturesList;
function PricingItem(props) {
  const linkHref = `${configuration_default.paths.signUp}?utm_source=${props.plan.stripePriceId}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames.default)(
      `
         relative flex w-full flex-col justify-between rounded-2xl border-2 border-gray-100
         p-4 shadow-2xl shadow-transparent transition-all duration-500 dark:border-black-300 dark:bg-black-500 
         sm:p-6 lg:w-4/12 xl:p-8 2xl:w-3/12
      `,
      {
        ["dark:hover:border-primary-500 dark:hover:bg-black-500 hover:scale-[1.01] dark:hover:shadow-primary-500/40"]: props.selectable
      }
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 2,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "font-semibold dark:text-white",
              children: props.plan.name
            }, void 0, false, {
              fileName: "app/components/PricingTable.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, {
            children: props.plan.price
          }, void 0, false, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-xl text-gray-500 dark:text-gray-400",
            children: props.plan.description
          }, void 0, false, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4 py-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturesList, {
          features: props.plan.features
        }, void 0, false, {
          fileName: "app/components/PricingTable.tsx",
          lineNumber: 82,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: props.selectable,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bottom-0 left-0 w-full p-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            block: true,
            href: linkHref,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "common:getStarted"
            }, void 0, false, {
              fileName: "app/components/PricingTable.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/PricingTable.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function FeaturesList(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    className: "flex flex-col space-y-2",
    children: props.features.map((feature) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: `common:plans.features.${feature}`,
          defaults: feature
        }, void 0, false, {
          fileName: "app/components/PricingTable.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this)
      }, feature, false, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
function Price({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-3xl font-extrabold lg:text-4xl",
      children
    }, void 0, false, {
      fileName: "app/components/PricingTable.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
function ListItem({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    className: "flex items-center space-x-3 text-lg font-medium",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CheckCircleIcon.default, {
          className: "h-7 text-green-500"
        }, void 0, false, {
          fileName: "app/components/PricingTable.tsx",
          lineNumber: 129,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 128,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children
      }, void 0, false, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 132,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}

export {
  PricingTable_default
};
//# sourceMappingURL=/build/_shared/chunk-OKZ23HHI.js.map
