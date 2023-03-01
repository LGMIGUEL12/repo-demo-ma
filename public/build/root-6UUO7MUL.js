import "/build/_shared/chunk-4C3HDJAL.js";
import "/build/_shared/chunk-EYLCNKMF.js";
import "/build/_shared/chunk-U3LVU62Z.js";
import {
  SiteHeader_default
} from "/build/_shared/chunk-GRD7GKJM.js";
import "/build/_shared/chunk-KIPB2TCK.js";
import "/build/_shared/chunk-WGYKNE6A.js";
import "/build/_shared/chunk-DPK67K36.js";
import "/build/_shared/chunk-TX2LS7YD.js";
import "/build/_shared/chunk-FHC7QUPJ.js";
import "/build/_shared/chunk-2RQ7OU4V.js";
import "/build/_shared/chunk-5CBDJCHW.js";
import {
  ClientOnly_default
} from "/build/_shared/chunk-FT7OPBPM.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CZ7RPIMM.js";
import "/build/_shared/chunk-R32XIEQ6.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import {
  FirebaseAppShell_default,
  FirebaseAuthProvider
} from "/build/_shared/chunk-QUBT24CD.js";
import {
  firebase_config_default
} from "/build/_shared/chunk-MZJK6QBW.js";
import "/build/_shared/chunk-GZQSVEA4.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import {
  Hero_default
} from "/build/_shared/chunk-6UP67C3W.js";
import {
  SubHeading_default
} from "/build/_shared/chunk-M572OUI5.js";
import {
  Container_default
} from "/build/_shared/chunk-7W5X7L6G.js";
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
import "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  init_esm,
  useCatch,
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-EGSMFI33.js";
import {
  Outlet
} from "/build/_shared/chunk-TUM7Q574.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/styles/dist.css
var dist_default = "/build/_assets/dist-C65EHNAE.css";

// app/root.tsx
init_esm();
var import_classnames = __toESM(require_classnames());

// app/core/ui/Head.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Head = () => {
  const siteUrl = configuration_default.site.siteUrl;
  if (!siteUrl) {
    throw new Error(`Please add the property siteUrl in the configuration`);
  }
  const structuredData = {
    name: configuration_default.site.name,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/favicon/favicon-150x150.png`,
    "@context": "https://schema.org",
    "@type": "Organization"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
        children: configuration_default.site.name
      }, "title", false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/assets/images/favicon/favicon.ico"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/images/favicon/apple-touch-icon.png"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/images/favicon/favicon-16x16.png"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/images/favicon/favicon-32x32.png"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "manifest",
        href: "/assets/images/favicon/site.webmanifest"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "mask-icon",
        href: "/assets/images/favicon/safari-pinned-tab.svg",
        color: "#000000"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "dns-prefetch",
        href: "//fonts.googleapis.com"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "msapplication-config",
        content: "/favicon/browserconfig.xml"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "theme-color",
        content: configuration_default.site.themeColor
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "description",
        content: configuration_default.site.description
      }, "meta:description", false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "og:title",
        content: configuration_default.site.name
      }, "og:title", false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "og:description",
        content: configuration_default.site.description
      }, "og:description", false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "og:site_name",
        content: configuration_default.site.siteName
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "twitter:title",
        content: configuration_default.site.siteName
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "twitter:creator",
        content: configuration_default.site.twitterHandle
      }, void 0, false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
        async: true,
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(structuredData) }
      }, "ld:json", false, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 92,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/Head.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};
var Head_default = Head;

// app/components/AppRouteLoadingIndicator.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LoadingBar = (0, import_react2.lazy)(() => import("/build/_shared/index.modern-ECPYHJQ2.js"));
var DEFAULT_MIN_WAITING = 50;
function AppRouteLoadingIndicator() {
  const ref = (0, import_react2.createRef)();
  const runningRef = (0, import_react2.useRef)(false);
  const timeoutRef = (0, import_react2.useRef)();
  const transition = useTransition();
  const scheduleAnimation = (0, import_react2.useCallback)(() => {
    return window.setTimeout(() => {
      runningRef.current = true;
      ref.current?.continuousStart();
    }, DEFAULT_MIN_WAITING);
  }, [ref]);
  (0, import_react2.useEffect)(() => {
    const isIdle = transition.state === "idle";
    const isRouteLoading = transition.type === "normalLoad" && transition.state === "loading";
    if (isRouteLoading) {
      timeoutRef.current = scheduleAnimation();
    }
    if (isIdle) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      if (runningRef.current) {
        ref.current?.complete();
        runningRef.current = false;
      }
    }
  }, [ref, transition.type, transition.state, scheduleAnimation]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingBar, {
      waitingTime: 200,
      shadow: true,
      className: "bg-primary-500",
      color: "",
      ref
    }, void 0, false, {
      fileName: "app/components/AppRouteLoadingIndicator.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/AppRouteLoadingIndicator.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var AppRouteLoadingIndicator_default = AppRouteLoadingIndicator;

// app/components/RootCatchBoundary.tsx
init_esm();
init_es();

// app/core/generic/http-status-code.enum.ts
var HttpStatusCode = /* @__PURE__ */ ((HttpStatusCode2) => {
  HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
  HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
  HttpStatusCode2[HttpStatusCode2["MovedTemporarily"] = 302] = "MovedTemporarily";
  HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
  HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
  HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
  HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
  HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
  HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
  return HttpStatusCode2;
})(HttpStatusCode || {});
var http_status_code_enum_default = HttpStatusCode;

// app/components/RootCatchBoundary.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function RootCatchBoundary() {
  const error = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/RootCatchBoundary.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
          config: firebase_config_default,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
            useEmulator: firebase_config_default.emulator,
            userSession: void 0,
            setUserSession: () => ({}),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader_default, {}, void 0, false, {
                fileName: "app/components/RootCatchBoundary.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                          condition: error.status === http_status_code_enum_default.NotFound,
                          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                            i18nKey: "common:genericServerError"
                          }, void 0, false, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 41,
                            columnNumber: 31
                          }, this),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                            i18nKey: "common:pageNotFound"
                          }, void 0, false, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/RootCatchBoundary.tsx",
                          lineNumber: 39,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/RootCatchBoundary.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                          condition: error.status === http_status_code_enum_default.NotFound,
                          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                            i18nKey: "common:genericServerErrorHeading"
                          }, void 0, false, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 51,
                            columnNumber: 23
                          }, this),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                            i18nKey: "common:pageNotFoundSubHeading"
                          }, void 0, false, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/RootCatchBoundary.tsx",
                          lineNumber: 48,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/RootCatchBoundary.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/RootCatchBoundary.tsx",
                    lineNumber: 37,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "my-4",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      href: "/",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "common:backToHomePage"
                      }, void 0, false, {
                        fileName: "app/components/RootCatchBoundary.tsx",
                        lineNumber: 61,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/RootCatchBoundary.tsx",
                      lineNumber: 60,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/components/RootCatchBoundary.tsx",
                    lineNumber: 59,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/RootCatchBoundary.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/RootCatchBoundary.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/RootCatchBoundary.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/RootCatchBoundary.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var RootCatchBoundary_default = RootCatchBoundary;

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: dist_default }];
};
function App() {
  const data = useLoaderData();
  const className = (0, import_classnames.default)({
    dark: data.theme === "dark"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Head_default, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`
            }
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppRouteLoadingIndicator_default, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
var CatchBoundary = RootCatchBoundary_default;
export {
  CatchBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-6UUO7MUL.js.map
