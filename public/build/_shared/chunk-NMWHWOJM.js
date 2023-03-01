import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/hooks/use-request-state.ts
var import_react = __toESM(require_react());
function useRequestState() {
  const [state, setState] = (0, import_react.useState)({
    loading: false,
    success: false,
    error: void 0,
    data: void 0
  });
  const setLoading = (0, import_react.useCallback)((loading) => {
    setState({
      loading,
      success: false,
      data: void 0,
      error: void 0
    });
  }, []);
  const setData = (0, import_react.useCallback)((data) => {
    setState({
      data,
      success: true,
      loading: false,
      error: void 0
    });
  }, []);
  const setError = (0, import_react.useCallback)((error) => {
    setState({
      data: void 0,
      loading: false,
      success: false,
      error
    });
  }, []);
  const resetState = (0, import_react.useCallback)(() => {
    setState({
      loading: false,
      success: false,
      error: void 0,
      data: void 0
    });
  }, []);
  return {
    state,
    setState,
    setLoading,
    setData,
    setError,
    resetState
  };
}

export {
  useRequestState
};
//# sourceMappingURL=/build/_shared/chunk-NMWHWOJM.js.map
