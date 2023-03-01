import {
  getAuth
} from "/build/_shared/chunk-KRXPUJNH.js";
import "/build/_shared/chunk-HIGJ6TCQ.js";
import "/build/_shared/chunk-RK4TBYVM.js";
import "/build/_shared/chunk-AB7SNNYG.js";
import "/build/_shared/chunk-U3LVU62Z.js";
import "/build/_shared/chunk-CUPSZOF3.js";

// app/core/firebase/admin/auth/get-user-from-session-cookie.ts
async function getUserFromSessionCookie(session) {
  const auth = getAuth();
  return auth.verifySessionCookie(session, true);
}
export {
  getUserFromSessionCookie
};
//# sourceMappingURL=/build/_shared/get-user-from-session-cookie-K3ONQV5P.js.map
