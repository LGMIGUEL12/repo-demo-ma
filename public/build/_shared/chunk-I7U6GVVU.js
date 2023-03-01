import {
  Dropdown_default,
  ProfileAvatar_default,
  qe
} from "/build/_shared/chunk-3RHYN7AX.js";
import {
  ArrowLeftOnRectangleIcon_default,
  ChevronDownIcon_default,
  Cog8ToothIcon_default,
  Squares2X2Icon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@heroicons/react/24/outline/Bars3Icon.js
var require_Bars3Icon = __commonJS({
  "node_modules/@heroicons/react/24/outline/Bars3Icon.js"(exports, module) {
    var React = require_react();
    function Bars3Icon({
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
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      }));
    }
    var ForwardRef = React.forwardRef(Bars3Icon);
    module.exports = ForwardRef;
  }
});

// app/components/ProfileDropdown.tsx
var import_react = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ProfileDropdown = ({ user, signOutRequested }) => {
  const ProfileDropdownButton = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Button, {
    as: "span",
    className: "flex cursor-pointer items-center space-x-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileAvatar_default, {
        user
      }, void 0, false, {
        fileName: "app/components/ProfileDropdown.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, {
        className: "hidden h-3 sm:block"
      }, void 0, false, {
        fileName: "app/components/ProfileDropdown.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/ProfileDropdown.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
  const signedInAsLabel = (0, import_react.useMemo)(() => {
    return user?.email ?? user?.phoneNumber ?? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
      i18nKey: "common:anonymousUser"
    }, void 0, false, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 35,
      columnNumber: 28
    }, this);
  }, [user]);
  const items = [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
      className: "rounded-none py-0",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-start text-left text-xs ellipsify",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-gray-500",
            children: "Signed in as"
          }, void 0, false, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "block ellipsify",
              children: signedInAsLabel
            }, void 0, false, {
              fileName: "app/components/ProfileDropdown.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/ProfileDropdown.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    }, "signedInAs", false, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, {}, "divider1", false, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 51,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdownMenuItem, {
      href: "/dashboard",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Squares2X2Icon_default, {
          className: "h-5"
        }, void 0, false, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "common:dashboardTabLabel"
          }, void 0, false, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this)
      ]
    }, "profile", true, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdownMenuItem, {
      href: "/settings/profile",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cog8ToothIcon_default, {
          className: "h-5"
        }, void 0, false, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "common:settingsTabLabel"
          }, void 0, false, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this)
      ]
    }, "profile", true, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, {}, "divider2", false, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 64,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdownMenuItem, {
      onClick: signOutRequested,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftOnRectangleIcon_default, {
          className: "h-5"
        }, void 0, false, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "auth:signOut"
          }, void 0, false, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this)
      ]
    }, "sign-out", true, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 65,
      columnNumber: 5
    }, this)
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
    button: ProfileDropdownButton,
    items
  }, void 0, false, {
    fileName: "app/components/ProfileDropdown.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
function ProfileDropdownMenuItem(props) {
  const onClick = "onClick" in props ? props.onClick : void 0;
  const href = "href" in props ? props.href : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
    href,
    onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "space-between flex w-full items-center space-x-4",
      children: props.children
    }, void 0, false, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/ProfileDropdown.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
var ProfileDropdown_default = ProfileDropdown;

export {
  require_Bars3Icon,
  ProfileDropdown_default
};
//# sourceMappingURL=/build/_shared/chunk-I7U6GVVU.js.map
