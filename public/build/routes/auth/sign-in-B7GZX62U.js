import {
  AuthCatchBoundary_default,
  EmailLinkAuth_default,
  PhoneNumberSignInContainer_default
} from "/build/_shared/chunk-Q74ZJ4G3.js";
import {
  EmailPasswordSignInContainer_default
} from "/build/_shared/chunk-BWSAXCWV.js";
import {
  OAuthProviders_default,
  PageLoadingIndicator
} from "/build/_shared/chunk-WRX2L3YT.js";
import "/build/_shared/chunk-UONGVETY.js";
import "/build/_shared/chunk-5GWCFEBO.js";
import "/build/_shared/chunk-FRQ5FQ7F.js";
import "/build/_shared/chunk-2LLES6IO.js";
import "/build/_shared/chunk-VECX4GTW.js";
import {
  useGetCsrfToken
} from "/build/_shared/chunk-JDRCLJ2Q.js";
import "/build/_shared/chunk-6EEWVN7Z.js";
import "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-45D3VFMN.js";
import "/build/_shared/chunk-75ATWWIY.js";
import "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-GZQSVEA4.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-7KHFEMFW.js";
import {
  kt
} from "/build/_shared/chunk-7QMTLNFQ.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
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
import {
  Link,
  init_esm,
  useSubmit,
  useTransition
} from "/build/_shared/chunk-EGSMFI33.js";
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

// app/routes/auth/sign-in.tsx
var import_react = __toESM(require_react());
init_esm();
init_es();

// app/core/generic/get-client-query-params.ts
function getClientQueryParams() {
  return new URLSearchParams(window.location.search);
}
var get_client_query_params_default = getClientQueryParams;

// app/routes/auth/sign-in.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CatchBoundary = AuthCatchBoundary_default;
var meta = () => {
  return {
    title: "Sign In"
  };
};
var SIGN_UP_PATH = configuration_default.paths.signUp;
var FORCE_SIGN_OUT_QUERY_PARAM = "signOut";
function SignInPage() {
  const auth = kt();
  const submit = useSubmit();
  const getCsrfToken = useGetCsrfToken();
  const transition = useTransition();
  const onSignIn = (0, import_react.useCallback)(
    (idToken) => {
      const csrfToken = getCsrfToken() ?? "";
      const payload = { idToken, csrfToken };
      submit(payload, { method: "post" });
    },
    [submit, getCsrfToken]
  );
  const shouldForceSignOut = (0, import_react.useMemo)(() => {
    if (!is_browser_default()) {
      return false;
    }
    const params = get_client_query_params_default();
    return params.has(FORCE_SIGN_OUT_QUERY_PARAM);
  }, []);
  (0, import_react.useEffect)(() => {
    if (shouldForceSignOut) {
      void auth.signOut();
    }
  }, [auth, shouldForceSignOut]);
  if (transition.state !== "idle") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, false, {
      fileName: "app/routes/auth/sign-in.tsx",
      lineNumber: 72,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
          type: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "auth:signInHeading"
          }, void 0, false, {
            fileName: "app/routes/auth/sign-in.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
        onSignIn
      }, void 0, false, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.emailPassword,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "text-xs text-gray-400",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:orContinueWithEmail"
              }, void 0, false, {
                fileName: "app/routes/auth/sign-in.tsx",
                lineNumber: 88,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/sign-in.tsx",
              lineNumber: 87,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/auth/sign-in.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInContainer_default, {
            onSignIn
          }, void 0, false, {
            fileName: "app/routes/auth/sign-in.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.phoneNumber,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberSignInContainer_default, {
          onSignIn
        }, void 0, false, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.emailLink,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailLinkAuth_default, {}, void 0, false, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center text-xs",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "flex space-x-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:doNotHaveAccountYet"
              }, void 0, false, {
                fileName: "app/routes/auth/sign-in.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/sign-in.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              className: "text-primary-800 hover:underline dark:text-primary-500",
              to: SIGN_UP_PATH,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:signUp"
              }, void 0, false, {
                fileName: "app/routes/auth/sign-in.tsx",
                lineNumber: 113,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/sign-in.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/auth/sign-in.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
var sign_in_default = SignInPage;
export {
  CatchBoundary,
  sign_in_default as default,
  meta
};
//# sourceMappingURL=/build/routes/auth/sign-in-B7GZX62U.js.map
