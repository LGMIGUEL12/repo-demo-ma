import {
  FirebaseAnalyticsProvider_default
} from "/build/_shared/chunk-ICIVYV3I.js";
import {
  SiteHeader_default
} from "/build/_shared/chunk-T4KXVEUH.js";
import "/build/_shared/chunk-KIPB2TCK.js";
import "/build/_shared/chunk-WGYKNE6A.js";
import "/build/_shared/chunk-EZNTFUGB.js";
import "/build/_shared/chunk-FIWETJPJ.js";
import "/build/_shared/chunk-I3FHTHOI.js";
import "/build/_shared/chunk-2RQ7OU4V.js";
import "/build/_shared/chunk-5CBDJCHW.js";
import "/build/_shared/chunk-FT7OPBPM.js";
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
import {
  user_session_default
} from "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-SJ75ODAE.js";
import "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-7W5X7L6G.js";
import "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
import "/build/_shared/chunk-G4KZDRB7.js";
import "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  init_esm
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

// app/routes/__site.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SiteLayout() {
  const [userSession, setUserSession] = (0, import_react2.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession,
      setUserSession,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAnalyticsProvider_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_session_default.Provider, {
          value: { userSession, setUserSession },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader_default, {}, void 0, false, {
              fileName: "app/routes/__site.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
              fileName: "app/routes/__site.tsx",
              lineNumber: 25,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/__site.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__site.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/__site.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/__site.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var site_default = SiteLayout;
export {
  site_default as default
};
//# sourceMappingURL=/build/routes/__site-AIOM4JG3.js.map
