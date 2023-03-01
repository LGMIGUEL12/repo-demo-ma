import {
  EmailPasswordSignUpContainer_default
} from "/build/_shared/chunk-BLM625XW.js";
import {
  AuthCatchBoundary_default,
  EmailLinkAuth_default,
  PhoneNumberSignInContainer_default
} from "/build/_shared/chunk-J5YRZBTU.js";
import {
  OAuthProviders_default,
  PageLoadingIndicator
} from "/build/_shared/chunk-6SWET3EL.js";
import "/build/_shared/chunk-ILFZUK6U.js";
import "/build/_shared/chunk-S67ARCQV.js";
import "/build/_shared/chunk-VCIE6KEO.js";
import "/build/_shared/chunk-2LLES6IO.js";
import "/build/_shared/chunk-TXV55N2L.js";
import "/build/_shared/chunk-6EEWVN7Z.js";
import "/build/_shared/chunk-S3UUNDGC.js";
import "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-OQCGFTRH.js";
import {
  useGetCsrfToken
} from "/build/_shared/chunk-JDRCLJ2Q.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-XTL7KJXM.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-DUR62BEZ.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-CEJB3CIX.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-VCZGRDVP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import {
  Heading_default
} from "/build/_shared/chunk-ISSCYSF5.js";
import {
  If_default
} from "/build/_shared/chunk-JLCRG65W.js";
import "/build/_shared/chunk-DN742LHR.js";
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
  Link,
  init_esm,
  require_jsx_dev_runtime,
  useSubmit,
  useTransition
} from "/build/_shared/chunk-QEOXWCFK.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/auth/sign-up.tsx
init_esm();
var import_react2 = __toESM(require_react());
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CatchBoundary = AuthCatchBoundary_default;
var meta = () => {
  return {
    title: "Sign Up"
  };
};
var SIGN_IN_PATH = configuration_default.paths.signIn;
function SignUpPage() {
  const submit = useSubmit();
  const getCsrfToken = useGetCsrfToken();
  const transition = useTransition();
  const onSignUp = (0, import_react2.useCallback)(
    (idToken) => {
      const csrfToken = getCsrfToken() ?? "";
      const payload = { idToken, csrfToken };
      submit(payload, {
        method: "post"
      });
    },
    [getCsrfToken, submit]
  );
  if (transition.state !== "idle") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, false, {
      fileName: "app/routes/auth/sign-up.tsx",
      lineNumber: 49,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
          type: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "auth:signUpHeading"
          }, void 0, false, {
            fileName: "app/routes/auth/sign-up.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
        onSignIn: onSignUp
      }, void 0, false, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 60,
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
                fileName: "app/routes/auth/sign-up.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/sign-up.tsx",
              lineNumber: 64,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/auth/sign-up.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignUpContainer_default, {
            onSignUp
          }, void 0, false, {
            fileName: "app/routes/auth/sign-up.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.phoneNumber,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberSignInContainer_default, {
          onSignIn: onSignUp
        }, void 0, false, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.emailLink,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailLinkAuth_default, {}, void 0, false, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center text-xs",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "flex space-x-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:alreadyHaveAnAccount"
              }, void 0, false, {
                fileName: "app/routes/auth/sign-up.tsx",
                lineNumber: 83,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/sign-up.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              className: "text-primary-800 hover:underline dark:text-primary-500",
              to: SIGN_IN_PATH,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:signIn"
              }, void 0, false, {
                fileName: "app/routes/auth/sign-up.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/auth/sign-up.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 81,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/auth/sign-up.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  SignUpPage as default,
  meta
};
//# sourceMappingURL=/build/routes/auth/sign-up-LHPCUOCL.js.map
