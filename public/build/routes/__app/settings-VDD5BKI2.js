import {
  AppContainer_default,
  AppHeader_default
} from "/build/_shared/chunk-MNO4EYMT.js";
import "/build/_shared/chunk-W4DXIIZX.js";
import "/build/_shared/chunk-BHF276FC.js";
import "/build/_shared/chunk-NKQZC65O.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-J3G5H7Q2.js";
import "/build/_shared/chunk-CCK66CUU.js";
import "/build/_shared/chunk-OQCGFTRH.js";
import "/build/_shared/chunk-T4OLHNMO.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import {
  NavigationItem_default,
  NavigationMenu_default
} from "/build/_shared/chunk-KIPB2TCK.js";
import "/build/_shared/chunk-DPK67K36.js";
import "/build/_shared/chunk-TX2LS7YD.js";
import "/build/_shared/chunk-FHC7QUPJ.js";
import "/build/_shared/chunk-2RQ7OU4V.js";
import "/build/_shared/chunk-5CBDJCHW.js";
import "/build/_shared/chunk-FT7OPBPM.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-R32XIEQ6.js";
import "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-MEFOEGYP.js";
import "/build/_shared/chunk-4PMGBJWS.js";
import "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-54TVJDMF.js";
import "/build/_shared/chunk-ZOBGVMBL.js";
import "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
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
import "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/__app/settings.tsx
init_esm();
init_es();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = [
  {
    path: "/settings/profile",
    label: "common:profileSettingsTabLabel"
  },
  {
    path: "/settings/organization",
    label: "common:organizationSettingsTabLabel"
  },
  {
    path: "/settings/subscription",
    label: "common:subscriptionSettingsTabLabel"
  }
];
function SettingsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppHeader_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "common:settingsTabLabel"
        }, void 0, false, {
          fileName: "app/routes/__app/settings.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/settings.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
            children: links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
              link
            }, link.path, false, {
              fileName: "app/routes/__app/settings.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: "app/routes/__app/settings.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `flex flex-col space-y-4 md:space-y-0 lg:mt-8 lg:flex-row lg:space-x-16 xl:space-x-24`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
              fileName: "app/routes/__app/settings.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/__app/settings.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/__app/settings.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/settings.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var settings_default = SettingsLayout;
export {
  settings_default as default
};
//# sourceMappingURL=/build/routes/__app/settings-VDD5BKI2.js.map
