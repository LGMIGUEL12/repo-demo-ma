import {
  EmailPasswordSignUpContainer_default
} from "/build/_shared/chunk-EHJUS7EI.js";
import {
  AuthCatchBoundary_default,
  EmailLinkAuth_default,
  PhoneNumberSignInContainer_default
} from "/build/_shared/chunk-GYDMDH2N.js";
import {
  EmailPasswordSignInContainer_default
} from "/build/_shared/chunk-REROTZRV.js";
import {
  OAuthProviders_default,
  PageLoadingIndicator
} from "/build/_shared/chunk-URFO34QJ.js";
import "/build/_shared/chunk-ZSN7SJIX.js";
import "/build/_shared/chunk-KH25R2OU.js";
import "/build/_shared/chunk-GN2EZ3CR.js";
import "/build/_shared/chunk-2LLES6IO.js";
import "/build/_shared/chunk-VECX4GTW.js";
import {
  useGetCsrfToken
} from "/build/_shared/chunk-JDRCLJ2Q.js";
import {
  require_memberships
} from "/build/_shared/chunk-X2TJ6V6V.js";
import {
  GuardedPage
} from "/build/_shared/chunk-ZPKYCPW6.js";
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
import "/build/_shared/chunk-4C3HDJAL.js";
import "/build/_shared/chunk-EYLCNKMF.js";
import "/build/_shared/chunk-U3LVU62Z.js";
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
  kt,
  qr
} from "/build/_shared/chunk-QTKR7OWQ.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  Button_default,
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
  init_esm,
  useLoaderData,
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

// app/routes/invite/$code.tsx
var import_react = __toESM(require_react());
init_es();
init_esm();
var import_memberships = __toESM(require_memberships());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CatchBoundary = AuthCatchBoundary_default;
var meta = ({ data }) => {
  return {
    title: `Join Organization`,
    "csrf-token": data?.csrfToken
  };
};
var InvitePage = () => {
  const data = useLoaderData();
  const [user, setUser] = (0, import_react.useState)(data.user);
  const signInCheck = qr();
  const transition = useTransition();
  const invite = data.invite;
  const organization = invite.organization;
  (0, import_react.useEffect)(() => {
    if (signInCheck.status === "success" && !signInCheck.data.signedIn) {
      setUser(void 0);
    }
  }, [signInCheck]);
  if (transition.state === "submitting") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
        i18nKey: "auth:addingToOrganization",
        values: { name: organization.name },
        components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, false, {
          fileName: "app/routes/invite/$code.tsx",
          lineNumber: 102,
          columnNumber: 28
        }, this) }
      }, void 0, false, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/invite/$code.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
        type: 4,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "auth:joinOrganizationHeading",
          values: {
            organization: invite.organization.name
          }
        }, void 0, false, {
          fileName: "app/routes/invite/$code.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "auth:joinOrganizationSubHeading",
              values: {
                organization: invite.organization.name
              },
              components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, false, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 126,
                columnNumber: 30
              }, this) }
            }, void 0, false, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 121,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: !user,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "auth:signUpToAcceptInvite"
              }, void 0, false, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 132,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 131,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 130,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcceptInviteContainer, {
        inviteCode: invite.code,
        user
      }, void 0, false, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 137,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/invite/$code.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
};
function AcceptInviteContainer({
  inviteCode,
  user
}) {
  const auth = kt();
  const submit = useSubmit();
  const getCsrfToken = useGetCsrfToken();
  const transition = useTransition();
  const redirectOnSignOut = getRedirectPath();
  const [mode, setMode] = (0, import_react.useState)(0 /* SignUp */);
  const onInviteAccepted = (0, import_react.useCallback)(
    (idToken) => {
      const csrfToken = getCsrfToken() ?? "";
      const body = {
        code: inviteCode,
        idToken,
        csrfToken
      };
      return submit(body, {
        method: "post"
      });
    },
    [getCsrfToken, inviteCode, submit]
  );
  if (transition.state !== "idle") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, false, {
      fileName: "app/routes/invite/$code.tsx",
      lineNumber: 174,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: user,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GuardedPage, {
          whenSignedOut: redirectOnSignOut,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            onSubmit: (e) => {
              e.preventDefault();
              return onInviteAccepted("");
            },
            className: "flex flex-col space-y-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center text-sm",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "auth:clickToAcceptAs",
                  values: { email: user?.email },
                  components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, false, {
                    fileName: "app/routes/invite/$code.tsx",
                    lineNumber: 193,
                    columnNumber: 34
                  }, this) }
                }, void 0, false, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 190,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 189,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                "data-cy": "accept-invite-submit-button",
                type: "submit",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                  i18nKey: "auth:acceptInvite"
                }, void 0, false, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 198,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 197,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-center",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-center text-sm text-gray-700 dark:text-gray-300",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                          i18nKey: "auth:acceptInviteWithDifferentAccount"
                        }, void 0, false, {
                          fileName: "app/routes/invite/$code.tsx",
                          lineNumber: 209,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 204,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 203,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      block: true,
                      color: "transparent",
                      size: "small",
                      onClick: () => auth.signOut(),
                      type: "button",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "auth:signOut"
                      }, void 0, false, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 220,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 213,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 202,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 201,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 182,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/invite/$code.tsx",
          lineNumber: 181,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: !user,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
            onSignIn: onInviteAccepted
          }, void 0, false, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 230,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: configuration_default.auth.providers.emailPassword,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: mode === 0 /* SignUp */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex w-full flex-col items-center space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignUpContainer_default, {
                      onSignUp: onInviteAccepted
                    }, void 0, false, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 235,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      block: true,
                      color: "transparent",
                      size: "small",
                      onClick: () => setMode(1 /* SignIn */),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "auth:alreadyHaveAccountStatement"
                      }, void 0, false, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 243,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 237,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 234,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 233,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: mode === 1 /* SignIn */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex w-full flex-col items-center space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInContainer_default, {
                      onSignIn: onInviteAccepted
                    }, void 0, false, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 250,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      block: true,
                      color: "transparent",
                      size: "small",
                      onClick: () => setMode(0 /* SignUp */),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                        i18nKey: "auth:doNotHaveAccountStatement"
                      }, void 0, false, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 252,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 249,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 248,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 232,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: configuration_default.auth.providers.phoneNumber,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberSignInContainer_default, {
              onSignIn: onInviteAccepted
            }, void 0, false, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 265,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 264,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: configuration_default.auth.providers.emailLink,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailLinkAuth_default, {}, void 0, false, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 269,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 268,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 229,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/invite/$code.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}
var code_default = InvitePage;
function getRedirectPath() {
  return is_browser_default() ? window.location.pathname : void 0;
}
export {
  CatchBoundary,
  code_default as default,
  meta
};
//# sourceMappingURL=/build/routes/invite/$code-KYWNSMWG.js.map
