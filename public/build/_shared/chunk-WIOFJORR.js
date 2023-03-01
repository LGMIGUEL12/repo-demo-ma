// app/core/generic/is-browser.ts
function isBrowser() {
  return typeof window !== "undefined";
}
var is_browser_default = isBrowser;

// app/core/get-env.ts
function getEnv() {
  return is_browser_default() ? window.ENV : process.env;
}
var get_env_default = getEnv;

export {
  is_browser_default,
  get_env_default
};
//# sourceMappingURL=/build/_shared/chunk-WIOFJORR.js.map
