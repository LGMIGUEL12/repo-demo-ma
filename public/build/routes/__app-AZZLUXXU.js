import {
  GuardedPage
} from "/build/_shared/chunk-MH5BFEKW.js";
import {
  navigation_config_default
} from "/build/_shared/chunk-ZVJCBF5E.js";
import {
  Ie
} from "/build/_shared/chunk-OQCGFTRH.js";
import {
  organization_default
} from "/build/_shared/chunk-CCK66CUU.js";
import {
  FirebaseAnalyticsProvider_default
} from "/build/_shared/chunk-QHME3JPW.js";
import {
  Tooltip_default
} from "/build/_shared/chunk-4YC2HMPQ.js";
import {
  setCookie
} from "/build/_shared/chunk-R32XIEQ6.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import {
  FirebaseAppShell_default,
  FirebaseAuthProvider,
  Logo_default
} from "/build/_shared/chunk-F3RSYHQM.js";
import {
  firebase_config_default
} from "/build/_shared/chunk-MZJK6QBW.js";
import "/build/_shared/chunk-CEJB3CIX.js";
import {
  Ba,
  Ka,
  Yc,
  pi,
  yt
} from "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import {
  user_session_default
} from "/build/_shared/chunk-52KVLBBL.js";
import {
  IconButton_default
} from "/build/_shared/chunk-VCZGRDVP.js";
import {
  ArrowLeftCircleIcon_default,
  ArrowRightCircleIcon_default
} from "/build/_shared/chunk-4PMGBJWS.js";
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
  get_env_default,
  is_browser_default
} from "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  Link,
  NavLink,
  init_esm,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  Outlet
} from "/build/_shared/chunk-TUM7Q574.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app.tsx
var import_react7 = __toESM(require_react());
init_esm();

// app/components/RouteShell.tsx
var import_react6 = __toESM(require_react());

// app/core/firebase/components/FirebaseFirestoreProvider.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FirebaseFirestoreProvider({
  children,
  useEmulator
}) {
  const app = yt();
  const firestore = Ba(app, getFirestoreConfig());
  const isEmulatorEnv = configuration_default.emulator ?? useEmulator;
  if (isEmulatorEnv) {
    const host = getFirestoreHost();
    const port = Number(getFirestorePort());
    try {
      executeSafely(() => {
        if (!didFirestoreInitialize(firestore)) {
          Yc(firestore, host, port);
        }
      });
    } catch (e) {
    }
  }
  const enablePersistence = is_browser_default() && !didFirestoreInitialize(firestore) && !isTestEnv();
  if (enablePersistence) {
    executeSafely(() => Ka(firestore));
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pi, {
    sdk: firestore,
    children
  }, void 0, false, {
    fileName: "app/core/firebase/components/FirebaseFirestoreProvider.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
function executeSafely(callback) {
  try {
    void callback();
  } catch (e) {
  }
}
function getFirestoreHost() {
  return get_env_default().FIREBASE_EMULATOR_HOST ?? "localhost";
}
function getFirestorePort() {
  return get_env_default().FIRESTORE_EMULATOR_PORT ?? 8080;
}
function didFirestoreInitialize(firestore) {
  if ("_settingsFrozen" in firestore) {
    return firestore["_settingsFrozen"];
  }
}
function isTestEnv() {
  return is_browser_default() && "Cypress" in window;
}
function getFirestoreConfig() {
  return isTestEnv() ? {
    ssl: false,
    host: "",
    experimentalForceLongPolling: true
  } : {};
}

// app/lib/contexts/sidebar.ts
var import_react = __toESM(require_react());
var SidebarContext = (0, import_react.createContext)({
  collapsed: false,
  setCollapsed: (_) => _
});
var sidebar_default = SidebarContext;

// app/core/hooks/use-sidebar-state.ts
var import_react2 = __toESM(require_react());
var SIDEBAR_COLLAPSED_STORAGE_KEY = "sidebarState";
function useCollapsible(initialValue) {
  const [isCollapsed, setIsCollapsed] = (0, import_react2.useState)(initialValue);
  const onCollapseChange = (0, import_react2.useCallback)((collapsed) => {
    setIsCollapsed(collapsed);
    storeCollapsibleState(collapsed);
  }, []);
  return [isCollapsed, onCollapseChange];
}
function storeCollapsibleState(collapsed) {
  setCookie(
    SIDEBAR_COLLAPSED_STORAGE_KEY,
    collapsed ? "collapsed" : "expanded"
  );
}
var use_sidebar_state_default = useCollapsible;

// app/components/AppSidebar.tsx
var import_react5 = __toESM(require_react());
init_es();
var import_classnames2 = __toESM(require_classnames());

// app/core/ui/Logo/LogoMini.tsx
init_esm();

// app/core/ui/Logo/LogoImageMini.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LogoImageMini = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 334 250",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M288.338 250V93.5C288.338 79.8333 283.505 68.3333 273.838 59C264.505 49.6667 253.005 45 239.338 45C226.005 45 214.338 49.6667 204.338 59C194.671 68 189.838 79.3333 189.838 93V250H144.338V93C144.338 79 139.671 67.6667 130.338 59C120.338 49.6667 108.505 45 94.8379 45C81.5046 45 70.1712 49.6667 60.8379 59C50.8379 69 45.8379 80.8333 45.8379 94.5V250H0.837891V5.99998H45.8379V24.5C51.5046 17.5 58.8379 11.6667 67.8379 6.99998C77.1712 2.33333 86.1712 0 94.8379 0C109.505 0 122.838 3 134.838 8.99999C147.171 14.6667 157.838 22.6667 166.838 33C175.838 22.6667 186.505 14.6667 198.838 8.99999C211.171 3 224.671 0 239.338 0C252.338 0 264.505 2.33333 275.838 6.99998C287.171 11.6667 297.171 18.3333 305.838 27C314.505 35.6667 321.171 45.8333 325.838 57.5C330.838 68.8333 333.338 80.8333 333.338 93.5V250H288.338Z",
        fill: "url(#paint0_linear_1667_17)"
      }, void 0, false, {
        fileName: "app/core/ui/Logo/LogoImageMini.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
          id: "paint0_linear_1667_17",
          x1: "-73.1035",
          y1: "106.673",
          x2: "403.784",
          y2: "104.812",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0.0104167",
              stopColor: "#2563EB"
            }, void 0, false, {
              fileName: "app/core/ui/Logo/LogoImageMini.tsx",
              lineNumber: 23,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0.135417",
              stopColor: "#7657A8"
            }, void 0, false, {
              fileName: "app/core/ui/Logo/LogoImageMini.tsx",
              lineNumber: 24,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0.489583",
              stopColor: "#EF4444"
            }, void 0, false, {
              fileName: "app/core/ui/Logo/LogoImageMini.tsx",
              lineNumber: 25,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "0.802083",
              stopColor: "#F79B3F"
            }, void 0, false, {
              fileName: "app/core/ui/Logo/LogoImageMini.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
              offset: "1",
              stopColor: "#FFEB3B"
            }, void 0, false, {
              fileName: "app/core/ui/Logo/LogoImageMini.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/core/ui/Logo/LogoImageMini.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/Logo/LogoImageMini.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/Logo/LogoImageMini.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
};
var LogoImageMini_default = LogoImageMini;

// app/core/ui/Logo/LogoMini.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LogoMini = ({ href }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
    to: href ?? "/",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImageMini_default, {}, void 0, false, {
      fileName: "app/core/ui/Logo/LogoMini.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Logo/LogoMini.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var LogoMini_default = LogoMini;

// app/components/AppSidebarNavigation.tsx
init_esm();
init_es();
var import_classnames = __toESM(require_classnames());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AppSidebarNavigation({
  collapsed
}) {
  const iconClassName = (0, import_classnames.default)("AppSidebarItemIcon", {
    "h-6": !collapsed,
    "h-7": collapsed
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-1.5",
    children: navigation_config_default.items.map((item) => {
      const Label = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: item.label,
        defaults: item.label
      }, void 0, false, {
        fileName: "app/components/AppSidebarNavigation.tsx",
        lineNumber: 21,
        columnNumber: 23
      }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarItem, {
        href: item.path,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
            placement: "right",
            content: collapsed ? Label : null,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.Icon, {
              className: iconClassName
            }, void 0, false, {
              fileName: "app/components/AppSidebarNavigation.tsx",
              lineNumber: 26,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/components/AppSidebarNavigation.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: Label
          }, void 0, false, {
            fileName: "app/components/AppSidebarNavigation.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        ]
      }, item.path, true, {
        fileName: "app/components/AppSidebarNavigation.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: "app/components/AppSidebarNavigation.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function AppSidebarItem({
  children,
  href
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
    to: href,
    className: ({ isActive }) => {
      return (0, import_classnames.default)(`AppSidebarItem`, {
        AppSidebarItemActive: isActive,
        AppSidebarItemNotActive: !isActive
      });
    },
    children
  }, void 0, false, {
    fileName: "app/components/AppSidebarNavigation.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
var AppSidebarNavigation_default = AppSidebarNavigation;

// app/components/AppSidebar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var AppSidebar = () => {
  const { collapsed, setCollapsed } = (0, import_react5.useContext)(sidebar_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames2.default)("AppSidebar", {
      "AppSidebarCollapsed w-[5rem]": collapsed,
      [`w-2/12 max-w-xs sm:min-w-[12rem] lg:min-w-[16rem]`]: !collapsed
    }),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex w-full flex-col space-y-7 px-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarHeader, {
            collapsed
          }, void 0, false, {
            fileName: "app/components/AppSidebar.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarNavigation_default, {
            collapsed
          }, void 0, false, {
            fileName: "app/components/AppSidebar.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarFooterMenu, {
        collapsed,
        setCollapsed
      }, void 0, false, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};
function AppSidebarHeader({
  collapsed
}) {
  const logoHref = configuration_default.paths.appHome;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex justify-center px-2.5 py-1",
    children: collapsed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMini_default, {
      href: logoHref
    }, void 0, false, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 47,
      columnNumber: 20
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {
      href: logoHref
    }, void 0, false, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 47,
      columnNumber: 51
    }, this)
  }, void 0, false, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function AppSidebarFooterMenu(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames2.default)(`absolute bottom-8 w-full`, {
      "px-6": !props.collapsed,
      "flex justify-center px-2": props.collapsed
    }),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "AppSidebarFooterItem",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollapsibleButton, {
        collapsed: props.collapsed,
        onClick: props.setCollapsed
      }, void 0, false, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function CollapsibleButton(props) {
  if (props.collapsed) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
      content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "common:expandSidebar"
      }, void 0, false, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 83,
        columnNumber: 25
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        onClick: () => props.onClick(!props.collapsed),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightCircleIcon_default, {
          className: "h-6"
        }, void 0, false, {
          fileName: "app/components/AppSidebar.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "AppFooterItem",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
      className: "flex items-center space-x-2 bg-transparent",
      onClick: () => props.onClick(!props.collapsed),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeftCircleIcon_default, {
          className: "h-6"
        }, void 0, false, {
          fileName: "app/components/AppSidebar.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "common:collapseSidebar"
          }, void 0, false, {
            fileName: "app/components/AppSidebar.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/AppSidebar.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
var AppSidebar_default = AppSidebar;

// app/components/RouteShell.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var redirectPathWhenSignedOut = "/";
var RouteShell = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseFirestoreProvider, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GuardedPage, {
      whenSignedOut: redirectPathWhenSignedOut,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ie, {}, void 0, false, {
            fileName: "app/components/RouteShell.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouteShellWithSidebar, {
            collapsed: props.sidebarCollapsed,
            children: props.children
          }, void 0, false, {
            fileName: "app/components/RouteShell.tsx",
            lineNumber: 23,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/RouteShell.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/RouteShell.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/RouteShell.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var RouteShell_default = RouteShell;
function RouteShellWithSidebar(props) {
  const [collapsed, setCollapsed] = use_sidebar_state_default(props.collapsed);
  useDisableBodyScrolling();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full flex-1 overflow-hidden",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sidebar_default.Provider, {
      value: { collapsed, setCollapsed },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "hidden lg:block",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebar_default, {}, void 0, false, {
            fileName: "app/components/RouteShell.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/RouteShell.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "relative mx-auto h-screen w-full overflow-y-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: props.children
          }, void 0, false, {
            fileName: "app/components/RouteShell.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/RouteShell.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/RouteShell.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/RouteShell.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function useDisableBodyScrolling() {
  (0, import_react6.useEffect)(() => {
    if (!is_browser_default()) {
      return;
    }
    document.body.style.setProperty("overflow", "hidden");
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, []);
}

// app/routes/__app.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return {
    "csrf-token": data.csrfToken
  };
};
function AppRoot() {
  const data = useLoaderData();
  const userSessionContext = (0, import_react7.useMemo)(() => {
    return {
      auth: data.session,
      data: data.user
    };
  }, [data]);
  const [organization, setOrganization] = (0, import_react7.useState)(
    data.organization || void 0
  );
  const [userSession, setUserSession] = (0, import_react7.useState)(userSessionContext);
  const updateCurrentOrganization = (0, import_react7.useCallback)(() => {
    setOrganization(data.organization ?? void 0);
  }, [data.organization]);
  const updateCurrentUser = (0, import_react7.useCallback)(() => {
    if (userSessionContext.auth) {
      setUserSession(userSessionContext);
    }
  }, [userSessionContext]);
  (0, import_react7.useEffect)(updateCurrentOrganization, [updateCurrentOrganization]);
  (0, import_react7.useEffect)(updateCurrentUser, [updateCurrentUser]);
  const sidebarCollapsed = data?.ui?.sidebarState === "collapsed";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession,
      setUserSession,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAnalyticsProvider_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_session_default.Provider, {
          value: { userSession, setUserSession },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(organization_default.Provider, {
            value: { organization, setOrganization },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouteShell_default, {
              sidebarCollapsed,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 71,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
var app_default = AppRoot;
export {
  app_default as default,
  meta
};
//# sourceMappingURL=/build/routes/__app-AZZLUXXU.js.map
