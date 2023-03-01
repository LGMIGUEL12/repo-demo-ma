import {
  useApiRequest
} from "/build/_shared/chunk-FPJ4XJOD.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/hooks/use-create-server-side-session.ts
var import_react = __toESM(require_react());

// app/core/hooks/use-create-session.ts
function useCreateSession() {
  return useApiRequest("/auth/session", "POST");
}

// app/core/hooks/use-create-server-side-session.ts
function useCreateServerSideSession() {
  const [signIn, signInState] = useCreateSession();
  const signInCallback = (0, import_react.useCallback)(
    async (user, forceRefresh = true) => {
      const idToken = await user.getIdToken(forceRefresh);
      return signIn({ idToken });
    },
    [signIn]
  );
  return [signInCallback, signInState];
}
var use_create_server_side_session_default = useCreateServerSideSession;

export {
  use_create_server_side_session_default
};
//# sourceMappingURL=/build/_shared/chunk-IYPF5UAB.js.map
