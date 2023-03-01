import {
  getCookie,
  setCookie
} from "/build/_shared/chunk-R32XIEQ6.js";
import {
  configuration_default
} from "/build/_shared/chunk-WULCHIKQ.js";
import {
  is_browser_default
} from "/build/_shared/chunk-WIOFJORR.js";

// app/core/theming.ts
var THEME_KEY = `theme`;
var LIGHT_THEME_META_COLOR = configuration_default.site.themeColor;
var DARK_THEME_META_COLOR = configuration_default.site.themeColorDark;
var DARK_THEME_CLASSNAME = `dark`;
var LIGHT_THEME_CLASSNAME = `light`;
function getDefaultTheme() {
  return getThemeFromHTML();
}
function getStoredTheme() {
  return getCookie("theme");
}
function setTheme(theme) {
  const root = getHtml();
  if (getDefaultTheme() === theme) {
    return;
  }
  if (theme === DARK_THEME_CLASSNAME) {
    root.classList.add(DARK_THEME_CLASSNAME);
    setMetaTag(DARK_THEME_META_COLOR);
    setCookie(THEME_KEY, DARK_THEME_CLASSNAME);
  } else {
    root.classList.remove(DARK_THEME_CLASSNAME);
    setMetaTag(LIGHT_THEME_META_COLOR);
    setCookie(THEME_KEY, LIGHT_THEME_CLASSNAME);
  }
}
function loadSelectedTheme() {
}
function getThemeFromHTML() {
  if (is_browser_default()) {
    const root = getHtml();
    return root.classList.contains(DARK_THEME_CLASSNAME) ? DARK_THEME_CLASSNAME : LIGHT_THEME_CLASSNAME;
  }
}
function getHtml() {
  return document.firstElementChild;
}
function getThemeMetaTag() {
  return document.querySelector(`meta[name='theme-color']`);
}
function setMetaTag(value) {
  const callback = () => {
    let tag = getThemeMetaTag();
    if (tag) {
      tag.setAttribute("content", value);
    } else {
      tag = document.createElement("meta");
      tag.setAttribute("name", "theme-color");
      tag.setAttribute("content", value);
      document.head.appendChild(tag);
    }
  };
  if (document.readyState === "complete") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

export {
  DARK_THEME_CLASSNAME,
  LIGHT_THEME_CLASSNAME,
  getDefaultTheme,
  getStoredTheme,
  setTheme,
  loadSelectedTheme
};
//# sourceMappingURL=/build/_shared/chunk-CZ7RPIMM.js.map
