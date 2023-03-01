import {
  user_session_default
} from "/build/_shared/chunk-52KVLBBL.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/hooks/use-user-session.ts
var import_react = __toESM(require_react());
function useUserSession() {
  const { userSession } = (0, import_react.useContext)(user_session_default);
  return userSession;
}

export {
  useUserSession
};
//# sourceMappingURL=/build/_shared/chunk-KHW4CDLX.js.map
