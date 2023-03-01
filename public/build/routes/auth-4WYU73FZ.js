import {
  AuthPageShell_default
} from "/build/_shared/chunk-3PN4DVM6.js";
import "/build/_shared/chunk-PGVJYH6E.js";
import "/build/_shared/chunk-MZJK6QBW.js";
import "/build/_shared/chunk-GZQSVEA4.js";
import "/build/_shared/chunk-QTKR7OWQ.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-DN742LHR.js";
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

// app/routes/auth.tsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return {
    "csrf-token": data?.csrfToken
  };
};
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthPageShell_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/auth.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/auth.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var auth_default = AuthLayout;
export {
  auth_default as default,
  meta
};
//# sourceMappingURL=/build/routes/auth-4WYU73FZ.js.map
