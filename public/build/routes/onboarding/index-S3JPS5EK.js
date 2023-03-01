import {
  Alert_default
} from "/build/_shared/chunk-75ATWWIY.js";
import {
  TextField_default
} from "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-4C3HDJAL.js";
import "/build/_shared/chunk-EYLCNKMF.js";
import "/build/_shared/chunk-U3LVU62Z.js";
import {
  FirebaseAppShell_default,
  FirebaseAuthProvider,
  Logo_default
} from "/build/_shared/chunk-MUXHQH4J.js";
import {
  firebase_config_default
} from "/build/_shared/chunk-MZJK6QBW.js";
import "/build/_shared/chunk-GZQSVEA4.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import {
  useUserSession
} from "/build/_shared/chunk-KHW4CDLX.js";
import {
  user_session_default
} from "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import {
  ArrowRightIcon_default
} from "/build/_shared/chunk-7KHFEMFW.js";
import "/build/_shared/chunk-7QMTLNFQ.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import {
  Heading_default
} from "/build/_shared/chunk-54TVJDMF.js";
import {
  SubHeading_default
} from "/build/_shared/chunk-M572OUI5.js";
import {
  Button_default,
  If_default,
  require_react_epic_spinners_umd_min
} from "/build/_shared/chunk-ZOBGVMBL.js";
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
  init_esm,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-EGSMFI33.js";
import {
  useNavigate
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

// app/routes/onboarding/index.tsx
var import_react4 = __toESM(require_react());
init_esm();
init_es();

// app/components/onboarding/OrganizationInfoStep.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OrganizationInfoStep = ({ onSubmit }) => {
  const user = useUserSession();
  const displayName = user?.auth?.displayName ?? user?.auth?.email ?? "";
  const handleFormSubmit = (0, import_react.useCallback)(
    (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const organization = data.get(`organization`);
      onSubmit({
        organization
      });
    },
    [onSubmit]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit: handleFormSubmit,
    className: "flex w-full flex-1 flex-col space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-1.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 2,
            children: [
              "Hi, ",
              displayName,
              "!"
            ]
          }, void 0, true, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
            children: "Let's create your organization."
          }, void 0, false, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-1 flex-col space-y-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                "Your organization's name",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  required: true,
                  name: "organization",
                  placeholder: "Organization Name"
                }, void 0, false, {
                  fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              type: "submit",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: "Continue"
                  }, void 0, false, {
                    fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                    lineNumber: 60,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRightIcon_default, {
                    className: "h-5"
                  }, void 0, false, {
                    fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                    lineNumber: 61,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                lineNumber: 59,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
};
var OrganizationInfoStep_default = OrganizationInfoStep;

// app/components/onboarding/OnboardingIllustration.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function OnboardingIllustration() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    "data-name": "Layer 1",
    width: "790",
    height: "701.99219",
    viewBox: "0 0 790 701.99219",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M862.36664,222.11816c-.01538,0-.0296.0044-.045.00489v-87.4292a35.69,35.69,0,0,0-35.69-35.68994h-273.72a35.69,35.69,0,0,0-35.69,35.68994v44.8208a2.89173,2.89173,0,0,0-2.83008,2.88867v22.2002a2.891,2.891,0,0,0,2.83008,2.88818v23.25684h-.14508a2.89485,2.89485,0,0,0-2.895,2.895v42.92969a2.89486,2.89486,0,0,0,2.895,2.895h.14508v17.05029h-.04511a2.89485,2.89485,0,0,0-2.89495,2.895v43.34961a2.89485,2.89485,0,0,0,2.89495,2.895h.04511V764.68408a35.69,35.69,0,0,0,35.69,35.68994h273.72a35.69,35.69,0,0,0,35.69-35.68994V307.13379c.01538,0,.0296.00439.045.00439a5.15473,5.15473,0,0,0,5.155-5.15478v-74.71A5.15515,5.15515,0,0,0,862.36664,222.11816Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M841.01166,144.684v610a27.41,27.41,0,0,1-27.41,27.4h-247.66a27.41,27.41,0,0,1-27.41-27.4v-610a27.41,27.41,0,0,1,27.41-27.41h37.06v4.81a22.58,22.58,0,0,0,22.57,22.57h126a22.57,22.57,0,0,0,22.52-22.57v-4.76h39.51A27.41,27.41,0,0,1,841.01166,144.684Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-white dark:fill-black-100"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M439.411,441.28564a10.74274,10.74274,0,0,0-14.42255,7.9585l-88.25427,47.98779,15.51715,17.46436,81.96-52.59912a10.80091,10.80091,0,0,0,5.19971-20.81153Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
        points: "211.903 687.551 222.9 680.438 200.697 634.635 184.466 645.133 211.903 687.551",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M413.53251,772.48423h41.16277a0,0,0,0,1,0,0V788.388a0,0,0,0,1,0,0H428.84164a15.30912,15.30912,0,0,1-15.30912-15.30912v-.59467a0,0,0,0,1,0,0Z",
        transform: "translate(1017.48743 1100.95886) rotate(147.10411)",
        fill: "#2f2e41"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
        points: "88.511 689.206 101.608 689.206 107.841 638.688 88.511 638.688 88.511 689.206",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M290.7046,784.46734h41.16277a0,0,0,0,1,0,0v15.9038a0,0,0,0,1,0,0H306.01373A15.30912,15.30912,0,0,1,290.7046,785.062v-.59467A0,0,0,0,1,290.7046,784.46734Z",
        transform: "translate(417.57198 1485.83458) rotate(-180)",
        fill: "#2f2e41"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M594,197.99609H567a2.5,2.5,0,0,1,0-5h27a2.5,2.5,0,0,1,0,5Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M594,204.99609H567a2.5,2.5,0,0,1,0-5h27a2.5,2.5,0,0,1,0,5Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M594,211.99609H567a2.5,2.5,0,0,1,0-5h27a2.5,2.5,0,0,1,0,5Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M803.29156,205.04605h-.91l-.35-.29a7.61019,7.61019,0,0,0,1.78-4.89,7.44,7.44,0,1,0-7.4,7.48,7.73,7.73,0,0,0,4.88-1.78l.34.29v.92l5.74,5.75,1.72-1.72Zm-6.88,0a5.18,5.18,0,1,1,5.15992-5.2l.00006.02a5.15,5.15,0,0,1-5.11994,5.17992c-.0133.00008-.02667.00011-.04.00008Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M649.00537,289.99609H600.5a11,11,0,0,1,0-22h48.50537a11,11,0,0,1,0,22Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M797.5,313.99609h-202a6,6,0,0,1,0-12h202a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M669.7002,337.99609H595.5a6,6,0,0,1,0-12h74.2002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M649.00537,555.99609H600.5a11,11,0,0,1,0-22h48.50537a11,11,0,0,1,0,22Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M797.5,579.99609h-202a6,6,0,0,1,0-12h202a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M669.7002,603.99609H595.5a6,6,0,0,1,0-12h74.2002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M649.00537,678.99609H600.5a11,11,0,0,1,0-22h48.50537a11,11,0,0,1,0,22Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M797.5,702.99609h-202a6,6,0,0,1,0-12h202a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M669.7002,726.99609H595.5a6,6,0,0,1,0-12h74.2002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 104,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M826,493.49609H440a8.50981,8.50981,0,0,1-8.5-8.5v-105a8.50951,8.50951,0,0,1,8.5-8.5H826a8.50982,8.50982,0,0,1,8.5,8.5v105A8.51013,8.51013,0,0,1,826,493.49609Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M301.23159,618.41614c3.69,25.89-15.85,140.59-13.68,140.57995l28.06-.15c1-1.92,13.88-63.81,17.92-73.74,5.64-13.78,11.33-27.73,13.55-42.45,2.09-13.82,1.06-27.9-.3-41.81a2.64,2.64,0,0,0-3.06-3l-37.65-1.94c-7.76-.4-9.6-2.1-8.42,5.52C298.47158,607.11615,300.41158,612.65613,301.23159,618.41614Z",
        transform: "translate(-205 -99.00391)",
        fill: "#2f2e41"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M308.63158,555.46616c-7.65,11-15.67,23.66-13.13,36.83,1.93,10,9.55,17.75,16.74,25,28.74,28.86,85.41,156.2,85.41,156.2,27.3484-17.50006-.6516.49994,27.1-18-2.46-.19-58.35-201.1-62.98-201.37C343.04159,552.88614,326.88158,551.05615,308.63158,555.46616Z",
        transform: "translate(-205 -99.00391)",
        fill: "#2f2e41"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M338.8901,450.76705c-3.88566-3.46527-31.19235-14.1516-31.19235-14.1516a4.68431,4.68431,0,0,0-1.5087.04526c-1.554.39225-2.26305,2.32338-1.93113,3.88489s-2.39129,27.22447-3.09283,38.89426c-1.22959,20.36744,10.76456,66.50345,10.659,67.91408a21.0765,21.0765,0,0,1-6.20829,13.29164c.93413,1.15954,60.265,3.48511,64.30074,4.858.81469-1.03345-4.594-74.2129-4.84293-78.34672C364.65868,480.88067,344.01966,455.51947,338.8901,450.76705Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M296.57277,609.55457a10.74272,10.74272,0,0,0,3.84156-16.01843l25.033-138.54005-23.36007-.30784-17.384,136.99816a10.80091,10.80091,0,0,0,11.86954,17.86816Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 129,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M296.37159,465.27612a4.43008,4.43008,0,0,1-2.76-.72c-1.39-1.19,9.95-19.4,12.19-19.67,7.29-.84,14.79-1.12,21.86.85s13.72,6.45,16.88,13.08c1.32,2.76-8.25,16.65-12.6,14.61C326.73159,470.98615,303.23159,465.44614,296.37159,465.27612Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 134,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
        cx: "117.102",
        cy: "309.88012",
        r: "26.2388",
        className: "fill-primary-500"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 139,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M296.32988,452.26749A21.92466,21.92466,0,0,0,319.41549,423.542c-1.04421-3.13933-2.78963-6.01687-3.74586-9.1841s-.98231-6.91217,1.13861-9.45136c4.14967-4.968,12.14792-1.84307,18.54524-2.83076,6.81664-1.05242,12.04628-7.59224,12.59177-14.46805s-3.03837-13.68-8.37342-18.05169-12.21571-6.5243-19.08006-7.19875a51.59436,51.59436,0,0,0-52.95464,70.4952c2.86787,7.17557,7.55225,13.85879,14.20586,17.78854s15.44129,4.68471,22.07272.71765",
        transform: "translate(-205 -99.00391)",
        fill: "#2f2e41"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 145,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M577.277,419.49609h-67.0539c-4.25851,0-7.723-4.93457-7.723-11s3.46454-11,7.72305-11H577.277c4.25851,0,7.723,4.93457,7.723,11S581.53546,419.49609,577.277,419.49609Z",
        transform: "translate(-205 -99.00391)",
        fill: "#fff"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 150,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M757.5,443.49609h-249a6,6,0,0,1,0-12h249a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 155,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M629.7002,467.49609H508.5a6,6,0,0,1,0-12H629.7002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, false, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 160,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/onboarding/OnboardingIllustration.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var OnboardingIllustration_default = OnboardingIllustration;

// app/components/onboarding/CompleteOnboardingStep.tsx
var import_react2 = __toESM(require_react());
init_esm();
var import_react_epic_spinners = __toESM(require_react_epic_spinners_umd_min());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CompleteOnboardingStep = ({ data }) => {
  const submit = useSubmit();
  const onboardingCompleteRequested = (0, import_react2.useRef)(false);
  const callRequestCallback = (0, import_react2.useCallback)(() => {
    return submit(
      { data: JSON.stringify(data) },
      {
        action: "/onboarding?index",
        method: "post"
      }
    );
  }, [submit, data]);
  (0, import_react2.useEffect)(() => {
    if (!onboardingCompleteRequested.current) {
      onboardingCompleteRequested.current = true;
      void callRequestCallback();
    }
  }, [callRequestCallback]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-col items-center space-y-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners.SpringSpinner, {
          size: 52,
          color: "currentColor"
        }, void 0, false, {
          fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: "Getting Started. Please wait..."
      }, void 0, false, {
        fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
};
var CompleteOnboardingStep_default = CompleteOnboardingStep;

// app/routes/onboarding/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: `Onboarding - ${configuration_default.site.siteName}`
  };
};
var Onboarding = () => {
  const data = useLoaderData();
  const [currentStep, setCurrentStep] = (0, import_react4.useState)(0);
  const [userSession, setUserSession] = (0, import_react4.useState)(data);
  const [formData, setFormData] = (0, import_react4.useState)();
  const onFirstStepSubmitted = (0, import_react4.useCallback)(
    (organizationInfo) => {
      setFormData({
        organization: organizationInfo.organization
      });
      setCurrentStep(1);
    },
    []
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession,
      setUserSession,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_session_default.Provider, {
        value: { userSession, setUserSession },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-1 flex-col dark:bg-black-500",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex divide-x divide-gray-100 dark:divide-black-300",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex h-screen flex-1 flex-col items-center justify-center w-full lg:w-6/12",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "absolute top-24 flex",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {
                      href: "/onboarding"
                    }, void 0, false, {
                      fileName: "app/routes/onboarding/index.tsx",
                      lineNumber: 83,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/onboarding/index.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-9/12",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                        condition: currentStep === 0,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationInfoStep_default, {
                          onSubmit: onFirstStepSubmitted
                        }, void 0, false, {
                          fileName: "app/routes/onboarding/index.tsx",
                          lineNumber: 88,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/onboarding/index.tsx",
                        lineNumber: 87,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                        condition: currentStep === 1 && formData,
                        children: (formData2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompleteOnboardingStep_default, {
                          data: formData2
                        }, void 0, false, {
                          fileName: "app/routes/onboarding/index.tsx",
                          lineNumber: 92,
                          columnNumber: 36
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/onboarding/index.tsx",
                        lineNumber: 91,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/onboarding/index.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/onboarding/index.tsx",
                lineNumber: 76,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "hidden w-6/12 flex-1 items-center bg-gray-50 justify-center dark:bg-black-400 lg:flex",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OnboardingIllustration_default, {}, void 0, false, {
                    fileName: "app/routes/onboarding/index.tsx",
                    lineNumber: 104,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/onboarding/index.tsx",
                  lineNumber: 103,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/routes/onboarding/index.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/onboarding/index.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/onboarding/index.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/onboarding/index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/onboarding/index.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
};
var onboarding_default = Onboarding;
function CatchBoundary() {
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-screen w-full flex-1 flex-col items-center justify-center",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col items-center space-y-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
            fileName: "app/routes/onboarding/index.tsx",
            lineNumber: 128,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 127,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "error",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
                i18nKey: "common:genericServerError"
              }, void 0, false, {
                fileName: "app/routes/onboarding/index.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/onboarding/index.tsx",
              lineNumber: 132,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
              i18nKey: "common:genericServerErrorHeading"
            }, void 0, false, {
              fileName: "app/routes/onboarding/index.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 131,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          onClick: () => navigate("."),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
            i18nKey: "common:retry"
          }, void 0, false, {
            fileName: "app/routes/onboarding/index.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 139,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/onboarding/index.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/onboarding/index.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  onboarding_default as default,
  meta
};
//# sourceMappingURL=/build/routes/onboarding/index-S3JPS5EK.js.map
