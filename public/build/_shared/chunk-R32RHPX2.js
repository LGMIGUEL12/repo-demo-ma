import {
  useGetCsrfToken
} from "/build/_shared/chunk-JDRCLJ2Q.js";
import {
  useRequestState
} from "/build/_shared/chunk-NMWHWOJM.js";
import {
  Fe
} from "/build/_shared/chunk-7QMTLNFQ.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/hooks/use-api.ts
var import_react = __toESM(require_react());
var FIREBASE_APP_CHECK_HEADER = "X-Firebase-AppCheck";
var CSRF_TOKEN_HEADER = "x-csrf-token";
function useApiRequest(path, method = "POST", config) {
  const { setError, setLoading, setData, state } = useRequestState();
  const headersRef = (0, import_react.useRef)(config?.headers);
  const getAppCheckToken = useGetAppCheckToken();
  const getCsrfToken = useGetCsrfToken();
  const fn = (0, import_react.useCallback)(
    async (body) => {
      setLoading(true);
      try {
        const payload = JSON.stringify(body);
        const appCheckToken = await getAppCheckToken();
        const csrfToken = getCsrfToken();
        if (!headersRef.current) {
          headersRef.current = {};
        }
        if (appCheckToken) {
          headersRef.current[FIREBASE_APP_CHECK_HEADER] = appCheckToken;
        }
        if (csrfToken) {
          headersRef.current[CSRF_TOKEN_HEADER] = csrfToken;
        }
        const data = await executeFetchRequest({
          url: path,
          payload,
          method,
          headers: headersRef.current
        });
        setData(data);
        return Promise.resolve(data);
      } catch (error) {
        const message = error instanceof Error ? error.message : `Unknown error`;
        setError(message);
        return Promise.reject(error);
      }
    },
    [
      setLoading,
      getAppCheckToken,
      getCsrfToken,
      path,
      method,
      setData,
      setError
    ]
  );
  return [fn, state];
}
async function executeFetchRequest(params) {
  const { url, method, payload, redirect, headers } = params;
  const options = {
    method,
    redirect,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      ...headers ?? {}
    }
  };
  const methodsSupportingBody = ["POST", "PUT", "DELETE"];
  const supportsBody = methodsSupportingBody.includes(method);
  if (payload && supportsBody) {
    options.body = payload;
  }
  try {
    const response = await fetch(url, options);
    if (response.redirected) {
      window.location.href = response.url;
      return Promise.resolve();
    }
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(response.statusText);
  } catch (e) {
    return Promise.reject(e);
  }
}
function useGetAppCheckToken() {
  const sdk = (0, import_react.useContext)(Fe);
  return (0, import_react.useCallback)(async () => {
    try {
      if (!sdk) {
        return;
      }
      const forceRefresh = false;
      const { getToken } = await import("/build/_shared/index.esm-2XDRQQZD.js");
      const { token } = await getToken(sdk, forceRefresh);
      return token;
    } catch (e) {
      return;
    }
  }, [sdk]);
}

export {
  useApiRequest
};
//# sourceMappingURL=/build/_shared/chunk-R32RHPX2.js.map
