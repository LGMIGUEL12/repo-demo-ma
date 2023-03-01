import {
  NavigationItem_default,
  NavigationMenu_default
} from "/build/_shared/chunk-KIPB2TCK.js";
import {
  Tooltip_default
} from "/build/_shared/chunk-WGYKNE6A.js";
import {
  ProfileDropdown_default,
  require_Bars3Icon
} from "/build/_shared/chunk-I7U6GVVU.js";
import {
  Dropdown_default,
  qe
} from "/build/_shared/chunk-3RHYN7AX.js";
import {
  ClientOnly_default
} from "/build/_shared/chunk-FT7OPBPM.js";
import {
  DARK_THEME_CLASSNAME,
  LIGHT_THEME_CLASSNAME,
  getDefaultTheme,
  getStoredTheme,
  setTheme
} from "/build/_shared/chunk-CZ7RPIMM.js";
import {
  Logo_default
} from "/build/_shared/chunk-PGVJYH6E.js";
import {
  We
} from "/build/_shared/chunk-TXT3OLG5.js";
import {
  useUserSession
} from "/build/_shared/chunk-KHW4CDLX.js";
import {
  IconButton_default
} from "/build/_shared/chunk-MEFOEGYP.js";
import {
  ArrowRightIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import {
  kt
} from "/build/_shared/chunk-QTKR7OWQ.js";
import {
  Container_default
} from "/build/_shared/chunk-7W5X7L6G.js";
import {
  Button_default,
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
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
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@heroicons/react/24/outline/MoonIcon.js
var require_MoonIcon = __commonJS({
  "node_modules/@heroicons/react/24/outline/MoonIcon.js"(exports, module) {
    var React = require_react();
    function MoonIcon2({
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
        d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      }));
    }
    var ForwardRef = React.forwardRef(MoonIcon2);
    module.exports = ForwardRef;
  }
});

// node_modules/@heroicons/react/24/outline/SunIcon.js
var require_SunIcon = __commonJS({
  "node_modules/@heroicons/react/24/outline/SunIcon.js"(exports, module) {
    var React = require_react();
    function SunIcon2({
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
        d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      }));
    }
    var ForwardRef = React.forwardRef(SunIcon2);
    module.exports = ForwardRef;
  }
});

// app/components/SiteHeader.tsx
var import_react4 = __toESM(require_react());

// app/components/SiteNavigation.tsx
var import_Bars3Icon = __toESM(require_Bars3Icon());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = {
  SignIn: {
    label: "Sign In",
    path: "/auth/sign-in"
  },
  Pricing: {
    label: "Pricing",
    path: "/pricing"
  },
  FAQ: {
    label: "FAQ",
    path: "/faq"
  }
};
var SiteNavigation = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "hidden items-center space-x-0.5 lg:flex",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
              className: "flex lg:hidden",
              link: links.SignIn
            }, void 0, false, {
              fileName: "app/components/SiteNavigation.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
              link: links.Pricing
            }, void 0, false, {
              fileName: "app/components/SiteNavigation.tsx",
              lineNumber: 38,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
              link: links.FAQ
            }, void 0, false, {
              fileName: "app/components/SiteNavigation.tsx",
              lineNumber: 39,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/SiteNavigation.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/SiteNavigation.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "ml-4 flex items-center lg:hidden",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileDropdown, {}, void 0, false, {
          fileName: "app/components/SiteNavigation.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/SiteNavigation.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/SiteNavigation.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
function MobileDropdown() {
  const Button = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Button, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Bars3Icon.default, {
      className: "h-9"
    }, void 0, false, {
      fileName: "app/components/SiteNavigation.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/SiteNavigation.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
  const Links = Object.values(links).map((item) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
      href: item.path,
      children: item.label
    }, item.path, false, {
      fileName: "app/components/SiteNavigation.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
    button: Button,
    items: Links
  }, void 0, false, {
    fileName: "app/components/SiteNavigation.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
var SiteNavigation_default = SiteNavigation;

// app/components/DarkModeToggle.tsx
var import_react2 = __toESM(require_react());
init_es();
var import_MoonIcon = __toESM(require_MoonIcon());
var import_SunIcon = __toESM(require_SunIcon());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DarkModeToggle = () => {
  const defaultTheme = (0, import_react2.useMemo)(() => {
    return getDefaultTheme() || getStoredTheme();
  }, []);
  const [currentTheme, setCurrentTheme] = (0, import_react2.useState)(defaultTheme);
  const toggleMode = (0, import_react2.useCallback)(() => {
    setCurrentTheme((currentTheme2) => {
      if (currentTheme2 === LIGHT_THEME_CLASSNAME) {
        return DARK_THEME_CLASSNAME;
      }
      return LIGHT_THEME_CLASSNAME;
    });
  }, []);
  const isDarkTheme = currentTheme === DARK_THEME_CLASSNAME;
  const TooltipText = isDarkTheme ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
    i18nKey: "common:switchToLightTheme"
  }, void 0, false, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
    i18nKey: "common:switchToDarkTheme"
  }, void 0, false, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
  const Icon = isDarkTheme ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_SunIcon.default, {
    className: "h-5"
  }, void 0, false, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_MoonIcon.default, {
    className: "h-5"
  }, void 0, false, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
  (0, import_react2.useEffect)(() => {
    setTheme(currentTheme);
  }, [currentTheme]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
    content: TooltipText,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
      className: "flex items-center bg-transparent p-1",
      onClick: toggleMode,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We, {
        appear: true,
        show: true,
        enter: "transition-opacity duration-500",
        enterFrom: "opacity-60",
        enterTo: "opacity-100",
        children: Icon
      }, void 0, false, {
        fileName: "app/components/DarkModeToggle.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/DarkModeToggle.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
};
var DarkModeToggle_default = DarkModeToggle;

// app/components/SiteHeader.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var fixedClassName = `FixedHeader`;
var SiteHeader = ({ fixed }) => {
  const auth = kt();
  const userSession = useUserSession();
  const signOutRequested = (0, import_react4.useCallback)(() => {
    return auth.signOut();
  }, [auth]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `w-full py-2.5 ${fixed ? fixedClassName : ""}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-row items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DarkModeToggle_default, {}, void 0, false, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/SiteHeader.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-1 justify-end space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "order-1 flex items-center space-x-4 lg:space-x-8 md:order-none md:ml-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteNavigation_default, {}, void 0, false, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 42,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: userSession?.auth,
                fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthButtons, {}, void 0, false, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 51,
                  columnNumber: 57
                }, this),
                children: (user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdown_default, {
                  user,
                  signOutRequested
                }, void 0, false, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 51,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/SiteHeader.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/SiteHeader.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
function AuthButtons() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "hidden space-x-2 lg:flex",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        color: "transparent",
        href: configuration_default.paths.signIn,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: "Sign In"
        }, void 0, false, {
          fileName: "app/components/SiteHeader.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        href: configuration_default.paths.signUp,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: "Sign Up"
            }, void 0, false, {
              fileName: "app/components/SiteHeader.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightIcon_default, {
              className: "h-4"
            }, void 0, false, {
              fileName: "app/components/SiteHeader.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/SiteHeader.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/SiteHeader.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
var SiteHeader_default = SiteHeader;

export {
  SiteHeader_default
};
//# sourceMappingURL=/build/_shared/chunk-SXE3VI7N.js.map
