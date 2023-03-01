import {
  i18next_default
} from "/build/_shared/chunk-LGUD5Z4W.js";
import {
  loadSelectedTheme
} from "/build/_shared/chunk-CZ7RPIMM.js";
import "/build/_shared/chunk-R32XIEQ6.js";
import {
  require_react_dom
} from "/build/_shared/chunk-CRZAZ7IR.js";
import {
  I18nextProvider,
  _classCallCheck,
  _createClass,
  es_exports,
  initReactI18next,
  init_classCallCheck,
  init_createClass,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import "/build/_shared/chunk-WULCHIKQ.js";
import {
  is_browser_default
} from "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
  RemixBrowser,
  esm_exports,
  init_esm,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import "/build/_shared/chunk-TUM7Q574.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var global2 = typeof self !== "undefined" ? self : exports;
    var __self__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = global2.DOMException;
      }
      F.prototype = global2;
      return new F();
    }();
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request2(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request2) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request2.prototype.clone = function() {
          return new Request2(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request2.prototype);
        function Response(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request3 = new Request2(input, init);
            if (request3.signal && request3.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request3.method, request3.url, true);
            if (request3.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request3.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request3.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (request3.signal) {
              request3.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request3.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request3._bodyInit === "undefined" ? null : request3._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers;
          self2.Request = Request2;
          self2.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request2;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__self__);
    __self__.fetch.ponyfill = true;
    delete __self__.fetch.polyfill;
    var ctx = __self__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/i18next-http-backend/esm/getFetch.cjs
var require_getFetch = __commonJS({
  "node_modules/i18next-http-backend/esm/getFetch.cjs"(exports, module) {
    var fetchApi2;
    if (typeof fetch === "function") {
      if (typeof globalThis !== "undefined" && globalThis.fetch) {
        fetchApi2 = globalThis.fetch;
      } else if (typeof window !== "undefined" && window.fetch) {
        fetchApi2 = window.fetch;
      } else {
        fetchApi2 = fetch;
      }
    }
    if (typeof __require !== "undefined" && (typeof window === "undefined" || typeof window.document === "undefined")) {
      f = fetchApi2 || require_browser_ponyfill();
      if (f.default)
        f = f.default;
      exports.default = f;
      module.exports = exports.default;
    }
    var f;
  }
});

// node_modules/remix-i18next/build/client.js
var require_client2 = __commonJS({
  "node_modules/remix-i18next/build/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInitialNamespaces = void 0;
    function getInitialNamespaces2() {
      let namespaces = new Set(Object.values(window.__remixRouteModules).filter((route) => {
        var _a;
        return ((_a = route.handle) === null || _a === void 0 ? void 0 : _a.i18n) !== void 0;
      }).flatMap((route) => route.handle.i18n));
      return [...namespaces];
    }
    exports.getInitialNamespaces = getInitialNamespaces2;
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV2(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV2(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/remix-i18next/build/react.js
var require_react2 = __commonJS({
  "node_modules/remix-i18next/build/react.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useChangeLanguage = exports.useLocale = exports.PreloadTranslations = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = (init_esm(), __toCommonJS(esm_exports));
    var react_2 = require_react();
    var react_i18next_1 = (init_es(), __toCommonJS(es_exports));
    function PreloadTranslations({ loadPath }) {
      let { i18n } = (0, react_i18next_1.useTranslation)();
      let namespaces = [
        ...new Set((0, react_1.useMatches)().filter((route) => {
          var _a;
          return ((_a = route.handle) === null || _a === void 0 ? void 0 : _a.i18n) !== void 0;
        }).flatMap((route) => route.handle.i18n))
      ];
      let lang = i18n.language;
      return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: namespaces.map((namespace) => {
        return (0, jsx_runtime_1.jsx)("link", { rel: "preload", as: "fetch", href: loadPath.replace("{{lng}}", lang).replace("{{ns}}", namespace) }, namespace);
      }) });
    }
    exports.PreloadTranslations = PreloadTranslations;
    function useLocale() {
      var _a;
      let [rootMatch] = (0, react_1.useMatches)();
      let { locale } = (_a = rootMatch.data) !== null && _a !== void 0 ? _a : {};
      if (!locale)
        throw new Error("Missing locale returned by the root loader.");
      if (typeof locale === "string")
        return locale;
      throw new Error("Invalid locale returned by the root loader.");
    }
    exports.useLocale = useLocale;
    function useChangeLanguage(locale) {
      let { i18n } = (0, react_i18next_1.useTranslation)();
      (0, react_2.useEffect)(() => {
        i18n.changeLanguage(locale);
      }, [locale, i18n]);
    }
    exports.useChangeLanguage = useChangeLanguage;
  }
});

// node_modules/accept-language-parser/index.js
var require_accept_language_parser = __commonJS({
  "node_modules/accept-language-parser/index.js"(exports, module) {
    var regex = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
    var isString = function(s) {
      return typeof s === "string";
    };
    function parse(al) {
      var strings = (al || "").match(regex);
      return strings.map(function(m) {
        if (!m) {
          return;
        }
        var bits = m.split(";");
        var ietf = bits[0].split("-");
        var hasScript = ietf.length === 3;
        return {
          code: ietf[0],
          script: hasScript ? ietf[1] : null,
          region: hasScript ? ietf[2] : ietf[1],
          quality: bits[1] ? parseFloat(bits[1].split("=")[1]) : 1
        };
      }).filter(function(r) {
        return r;
      }).sort(function(a, b) {
        return b.quality - a.quality;
      });
    }
    function pick(supportedLanguages, acceptLanguage, options) {
      options = options || {};
      if (!supportedLanguages || !supportedLanguages.length || !acceptLanguage) {
        return null;
      }
      if (isString(acceptLanguage)) {
        acceptLanguage = parse(acceptLanguage);
      }
      var supported = supportedLanguages.map(function(support) {
        var bits = support.split("-");
        var hasScript = bits.length === 3;
        return {
          code: bits[0],
          script: hasScript ? bits[1] : null,
          region: hasScript ? bits[2] : bits[1]
        };
      });
      for (var i = 0; i < acceptLanguage.length; i++) {
        var lang = acceptLanguage[i];
        var langCode = lang.code.toLowerCase();
        var langRegion = lang.region ? lang.region.toLowerCase() : lang.region;
        var langScript = lang.script ? lang.script.toLowerCase() : lang.script;
        for (var j = 0; j < supported.length; j++) {
          var supportedCode = supported[j].code.toLowerCase();
          var supportedScript = supported[j].script ? supported[j].script.toLowerCase() : supported[j].script;
          var supportedRegion = supported[j].region ? supported[j].region.toLowerCase() : supported[j].region;
          if (langCode === supportedCode && (options.loose || !langScript || langScript === supportedScript) && (options.loose || !langRegion || langRegion === supportedRegion)) {
            return supportedLanguages[j];
          }
        }
      }
      return null;
    }
    module.exports.parse = parse;
    module.exports.pick = pick;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof3(obj) {
      "@babel/helpers - typeof";
      return module.exports = _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof3(obj);
    }
    module.exports = _typeof3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck3(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    function _defineProperties2(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass3(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties2(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties2(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    module.exports = _createClass3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module) {
    var _typeof3 = require_typeof()["default"];
    var assertThisInitialized = require_assertThisInitialized();
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof3(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return assertThisInitialized(self2);
    }
    module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/getPrototypeOf.js
var require_getPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _getPrototypeOf(o);
    }
    module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/arrayWithHoles.js
var require_arrayWithHoles = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
    function _arrayWithHoles(arr3) {
      if (Array.isArray(arr3))
        return arr3;
    }
    module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/iterableToArray.js
var require_iterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/iterableToArray.js"(exports, module) {
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/arrayLikeToArray.js
var require_arrayLikeToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
    function _arrayLikeToArray(arr3, len) {
      if (len == null || len > arr3.length)
        len = arr3.length;
      for (var i = 0, arr22 = new Array(len); i < len; i++) {
        arr22[i] = arr3[i];
      }
      return arr22;
    }
    module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
var require_unsupportedIterableToArray = __commonJS({
  "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return arrayLikeToArray(o, minLen);
    }
    module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/nonIterableRest.js
var require_nonIterableRest = __commonJS({
  "node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toArray.js
var require_toArray = __commonJS({
  "node_modules/@babel/runtime/helpers/toArray.js"(exports, module) {
    var arrayWithHoles = require_arrayWithHoles();
    var iterableToArray = require_iterableToArray();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableRest = require_nonIterableRest();
    function _toArray(arr3) {
      return arrayWithHoles(arr3) || iterableToArray(arr3) || unsupportedIterableToArray(arr3) || nonIterableRest();
    }
    module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/i18next/dist/cjs/i18next.js
var require_i18next = __commonJS({
  "node_modules/i18next/dist/cjs/i18next.js"(exports, module) {
    "use strict";
    var _typeof3 = require_typeof();
    var _classCallCheck3 = require_classCallCheck();
    var _createClass3 = require_createClass();
    var _assertThisInitialized = require_assertThisInitialized();
    var _inherits = require_inherits();
    var _possibleConstructorReturn = require_possibleConstructorReturn();
    var _getPrototypeOf = require_getPrototypeOf();
    var _defineProperty2 = require_defineProperty();
    var _toArray = require_toArray();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var _typeof__default = /* @__PURE__ */ _interopDefaultLegacy(_typeof3);
    var _classCallCheck__default = /* @__PURE__ */ _interopDefaultLegacy(_classCallCheck3);
    var _createClass__default = /* @__PURE__ */ _interopDefaultLegacy(_createClass3);
    var _assertThisInitialized__default = /* @__PURE__ */ _interopDefaultLegacy(_assertThisInitialized);
    var _inherits__default = /* @__PURE__ */ _interopDefaultLegacy(_inherits);
    var _possibleConstructorReturn__default = /* @__PURE__ */ _interopDefaultLegacy(_possibleConstructorReturn);
    var _getPrototypeOf__default = /* @__PURE__ */ _interopDefaultLegacy(_getPrototypeOf);
    var _defineProperty__default = /* @__PURE__ */ _interopDefaultLegacy(_defineProperty2);
    var _toArray__default = /* @__PURE__ */ _interopDefaultLegacy(_toArray);
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    var consoleLogger = {
      type: "logger",
      log: function log(args) {
        this.output("log", args);
      },
      warn: function warn(args) {
        this.output("warn", args);
      },
      error: function error(args) {
        this.output("error", args);
      },
      output: function output(type, args) {
        if (console && console[type])
          console[type].apply(console, args);
      }
    };
    var Logger = function() {
      function Logger2(concreteLogger) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck__default["default"](this, Logger2);
        this.init(concreteLogger, options);
      }
      _createClass__default["default"](Logger2, [{
        key: "init",
        value: function init(concreteLogger) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.prefix = options.prefix || "i18next:";
          this.logger = concreteLogger || consoleLogger;
          this.options = options;
          this.debug = options.debug;
        }
      }, {
        key: "setDebug",
        value: function setDebug(bool) {
          this.debug = bool;
        }
      }, {
        key: "log",
        value: function log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return this.forward(args, "log", "", true);
        }
      }, {
        key: "warn",
        value: function warn() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return this.forward(args, "warn", "", true);
        }
      }, {
        key: "error",
        value: function error() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return this.forward(args, "error", "");
        }
      }, {
        key: "deprecate",
        value: function deprecate() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
        }
      }, {
        key: "forward",
        value: function forward(args, lvl, prefix, debugOnly) {
          if (debugOnly && !this.debug)
            return null;
          if (typeof args[0] === "string")
            args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
          return this.logger[lvl](args);
        }
      }, {
        key: "create",
        value: function create2(moduleName) {
          return new Logger2(this.logger, _objectSpread(_objectSpread({}, {
            prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
          }), this.options));
        }
      }, {
        key: "clone",
        value: function clone(options) {
          options = options || this.options;
          options.prefix = options.prefix || this.prefix;
          return new Logger2(this.logger, options);
        }
      }]);
      return Logger2;
    }();
    var baseLogger = new Logger();
    var EventEmitter = function() {
      function EventEmitter2() {
        _classCallCheck__default["default"](this, EventEmitter2);
        this.observers = {};
      }
      _createClass__default["default"](EventEmitter2, [{
        key: "on",
        value: function on(events, listener) {
          var _this = this;
          events.split(" ").forEach(function(event) {
            _this.observers[event] = _this.observers[event] || [];
            _this.observers[event].push(listener);
          });
          return this;
        }
      }, {
        key: "off",
        value: function off(event, listener) {
          if (!this.observers[event])
            return;
          if (!listener) {
            delete this.observers[event];
            return;
          }
          this.observers[event] = this.observers[event].filter(function(l) {
            return l !== listener;
          });
        }
      }, {
        key: "emit",
        value: function emit(event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (this.observers[event]) {
            var cloned = [].concat(this.observers[event]);
            cloned.forEach(function(observer) {
              observer.apply(void 0, args);
            });
          }
          if (this.observers["*"]) {
            var _cloned = [].concat(this.observers["*"]);
            _cloned.forEach(function(observer) {
              observer.apply(observer, [event].concat(args));
            });
          }
        }
      }]);
      return EventEmitter2;
    }();
    function defer() {
      var res;
      var rej;
      var promise = new Promise(function(resolve, reject) {
        res = resolve;
        rej = reject;
      });
      promise.resolve = res;
      promise.reject = rej;
      return promise;
    }
    function makeString(object) {
      if (object == null)
        return "";
      return "" + object;
    }
    function copy(a, s, t) {
      a.forEach(function(m) {
        if (s[m])
          t[m] = s[m];
      });
    }
    function getLastOfPath(object, path2, Empty) {
      function cleanKey(key2) {
        return key2 && key2.indexOf("###") > -1 ? key2.replace(/###/g, ".") : key2;
      }
      function canNotTraverseDeeper() {
        return !object || typeof object === "string";
      }
      var stack = typeof path2 !== "string" ? [].concat(path2) : path2.split(".");
      while (stack.length > 1) {
        if (canNotTraverseDeeper())
          return {};
        var key = cleanKey(stack.shift());
        if (!object[key] && Empty)
          object[key] = new Empty();
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          object = object[key];
        } else {
          object = {};
        }
      }
      if (canNotTraverseDeeper())
        return {};
      return {
        obj: object,
        k: cleanKey(stack.shift())
      };
    }
    function setPath(object, path2, newValue) {
      var _getLastOfPath = getLastOfPath(object, path2, Object), obj = _getLastOfPath.obj, k = _getLastOfPath.k;
      obj[k] = newValue;
    }
    function pushPath(object, path2, newValue, concat) {
      var _getLastOfPath2 = getLastOfPath(object, path2, Object), obj = _getLastOfPath2.obj, k = _getLastOfPath2.k;
      obj[k] = obj[k] || [];
      if (concat)
        obj[k] = obj[k].concat(newValue);
      if (!concat)
        obj[k].push(newValue);
    }
    function getPath(object, path2) {
      var _getLastOfPath3 = getLastOfPath(object, path2), obj = _getLastOfPath3.obj, k = _getLastOfPath3.k;
      if (!obj)
        return void 0;
      return obj[k];
    }
    function getPathWithDefaults(data, defaultData, key) {
      var value = getPath(data, key);
      if (value !== void 0) {
        return value;
      }
      return getPath(defaultData, key);
    }
    function deepExtend(target, source, overwrite) {
      for (var prop in source) {
        if (prop !== "__proto__" && prop !== "constructor") {
          if (prop in target) {
            if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
              if (overwrite)
                target[prop] = source[prop];
            } else {
              deepExtend(target[prop], source[prop], overwrite);
            }
          } else {
            target[prop] = source[prop];
          }
        }
      }
      return target;
    }
    function regexEscape(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    var _entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;"
    };
    function escape(data) {
      if (typeof data === "string") {
        return data.replace(/[&<>"'\/]/g, function(s) {
          return _entityMap[s];
        });
      }
      return data;
    }
    var isIE10 = typeof window !== "undefined" && window.navigator && typeof window.navigator.userAgentData === "undefined" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
    var chars = [" ", ",", "?", "!", ";"];
    function looksLikeObjectPath(key, nsSeparator, keySeparator) {
      nsSeparator = nsSeparator || "";
      keySeparator = keySeparator || "";
      var possibleChars = chars.filter(function(c) {
        return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
      });
      if (possibleChars.length === 0)
        return true;
      var r = new RegExp("(".concat(possibleChars.map(function(c) {
        return c === "?" ? "\\?" : c;
      }).join("|"), ")"));
      var matched = !r.test(key);
      if (!matched) {
        var ki = key.indexOf(keySeparator);
        if (ki > 0 && !r.test(key.substring(0, ki))) {
          matched = true;
        }
      }
      return matched;
    }
    function ownKeys$1(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$1(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function deepFind(obj, path2) {
      var keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
      if (!obj)
        return void 0;
      if (obj[path2])
        return obj[path2];
      var paths = path2.split(keySeparator);
      var current = obj;
      for (var i = 0; i < paths.length; ++i) {
        if (!current)
          return void 0;
        if (typeof current[paths[i]] === "string" && i + 1 < paths.length) {
          return void 0;
        }
        if (current[paths[i]] === void 0) {
          var j = 2;
          var p = paths.slice(i, i + j).join(keySeparator);
          var mix = current[p];
          while (mix === void 0 && paths.length > i + j) {
            j++;
            p = paths.slice(i, i + j).join(keySeparator);
            mix = current[p];
          }
          if (mix === void 0)
            return void 0;
          if (mix === null)
            return null;
          if (path2.endsWith(p)) {
            if (typeof mix === "string")
              return mix;
            if (p && typeof mix[p] === "string")
              return mix[p];
          }
          var joinedPath = paths.slice(i + j).join(keySeparator);
          if (joinedPath)
            return deepFind(mix, joinedPath, keySeparator);
          return void 0;
        }
        current = current[paths[i]];
      }
      return current;
    }
    var ResourceStore = function(_EventEmitter) {
      _inherits__default["default"](ResourceStore2, _EventEmitter);
      var _super = _createSuper(ResourceStore2);
      function ResourceStore2(data) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          ns: ["translation"],
          defaultNS: "translation"
        };
        _classCallCheck__default["default"](this, ResourceStore2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized__default["default"](_this));
        }
        _this.data = data || {};
        _this.options = options;
        if (_this.options.keySeparator === void 0) {
          _this.options.keySeparator = ".";
        }
        if (_this.options.ignoreJSONStructure === void 0) {
          _this.options.ignoreJSONStructure = true;
        }
        return _this;
      }
      _createClass__default["default"](ResourceStore2, [{
        key: "addNamespaces",
        value: function addNamespaces(ns) {
          if (this.options.ns.indexOf(ns) < 0) {
            this.options.ns.push(ns);
          }
        }
      }, {
        key: "removeNamespaces",
        value: function removeNamespaces(ns) {
          var index = this.options.ns.indexOf(ns);
          if (index > -1) {
            this.options.ns.splice(index, 1);
          }
        }
      }, {
        key: "getResource",
        value: function getResource(lng, ns, key) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
          var path2 = [lng, ns];
          if (key && typeof key !== "string")
            path2 = path2.concat(key);
          if (key && typeof key === "string")
            path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
          if (lng.indexOf(".") > -1) {
            path2 = lng.split(".");
          }
          var result = getPath(this.data, path2);
          if (result || !ignoreJSONStructure || typeof key !== "string")
            return result;
          return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
        }
      }, {
        key: "addResource",
        value: function addResource(lng, ns, key, value) {
          var options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: false
          };
          var keySeparator = this.options.keySeparator;
          if (keySeparator === void 0)
            keySeparator = ".";
          var path2 = [lng, ns];
          if (key)
            path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
          if (lng.indexOf(".") > -1) {
            path2 = lng.split(".");
            value = ns;
            ns = path2[1];
          }
          this.addNamespaces(ns);
          setPath(this.data, path2, value);
          if (!options.silent)
            this.emit("added", lng, ns, key, value);
        }
      }, {
        key: "addResources",
        value: function addResources(lng, ns, resources) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: false
          };
          for (var m in resources) {
            if (typeof resources[m] === "string" || Object.prototype.toString.apply(resources[m]) === "[object Array]")
              this.addResource(lng, ns, m, resources[m], {
                silent: true
              });
          }
          if (!options.silent)
            this.emit("added", lng, ns, resources);
        }
      }, {
        key: "addResourceBundle",
        value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
          var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: false
          };
          var path2 = [lng, ns];
          if (lng.indexOf(".") > -1) {
            path2 = lng.split(".");
            deep = resources;
            resources = ns;
            ns = path2[1];
          }
          this.addNamespaces(ns);
          var pack = getPath(this.data, path2) || {};
          if (deep) {
            deepExtend(pack, resources, overwrite);
          } else {
            pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
          }
          setPath(this.data, path2, pack);
          if (!options.silent)
            this.emit("added", lng, ns, resources);
        }
      }, {
        key: "removeResourceBundle",
        value: function removeResourceBundle(lng, ns) {
          if (this.hasResourceBundle(lng, ns)) {
            delete this.data[lng][ns];
          }
          this.removeNamespaces(ns);
          this.emit("removed", lng, ns);
        }
      }, {
        key: "hasResourceBundle",
        value: function hasResourceBundle(lng, ns) {
          return this.getResource(lng, ns) !== void 0;
        }
      }, {
        key: "getResourceBundle",
        value: function getResourceBundle(lng, ns) {
          if (!ns)
            ns = this.options.defaultNS;
          if (this.options.compatibilityAPI === "v1")
            return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
          return this.getResource(lng, ns);
        }
      }, {
        key: "getDataByLanguage",
        value: function getDataByLanguage(lng) {
          return this.data[lng];
        }
      }, {
        key: "hasLanguageSomeTranslations",
        value: function hasLanguageSomeTranslations(lng) {
          var data = this.getDataByLanguage(lng);
          var n = data && Object.keys(data) || [];
          return !!n.find(function(v) {
            return data[v] && Object.keys(data[v]).length > 0;
          });
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return this.data;
        }
      }]);
      return ResourceStore2;
    }(EventEmitter);
    var postProcessor = {
      processors: {},
      addPostProcessor: function addPostProcessor(module2) {
        this.processors[module2.name] = module2;
      },
      handle: function handle(processors, value, key, options, translator) {
        var _this = this;
        processors.forEach(function(processor) {
          if (_this.processors[processor])
            value = _this.processors[processor].process(value, key, options, translator);
        });
        return value;
      }
    };
    function ownKeys$2(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$2(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _createSuper$1(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$1() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var checkedLoadedFor = {};
    var Translator = function(_EventEmitter) {
      _inherits__default["default"](Translator2, _EventEmitter);
      var _super = _createSuper$1(Translator2);
      function Translator2(services) {
        var _this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck__default["default"](this, Translator2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized__default["default"](_this));
        }
        copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, _assertThisInitialized__default["default"](_this));
        _this.options = options;
        if (_this.options.keySeparator === void 0) {
          _this.options.keySeparator = ".";
        }
        _this.logger = baseLogger.create("translator");
        return _this;
      }
      _createClass__default["default"](Translator2, [{
        key: "changeLanguage",
        value: function changeLanguage(lng) {
          if (lng)
            this.language = lng;
        }
      }, {
        key: "exists",
        value: function exists(key) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          if (key === void 0 || key === null) {
            return false;
          }
          var resolved = this.resolve(key, options);
          return resolved && resolved.res !== void 0;
        }
      }, {
        key: "extractFromKey",
        value: function extractFromKey(key, options) {
          var nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
          if (nsSeparator === void 0)
            nsSeparator = ":";
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var namespaces = options.ns || this.options.defaultNS || [];
          var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
          var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
          if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
            var m = key.match(this.interpolator.nestingRegexp);
            if (m && m.length > 0) {
              return {
                key,
                namespaces
              };
            }
            var parts = key.split(nsSeparator);
            if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
              namespaces = parts.shift();
            key = parts.join(keySeparator);
          }
          if (typeof namespaces === "string")
            namespaces = [namespaces];
          return {
            key,
            namespaces
          };
        }
      }, {
        key: "translate",
        value: function translate(keys, options, lastKey) {
          var _this2 = this;
          if (_typeof__default["default"](options) !== "object" && this.options.overloadTranslationOptionHandler) {
            options = this.options.overloadTranslationOptionHandler(arguments);
          }
          if (!options)
            options = {};
          if (keys === void 0 || keys === null)
            return "";
          if (!Array.isArray(keys))
            keys = [String(keys)];
          var returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
          var keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
          var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options), key = _this$extractFromKey.key, namespaces = _this$extractFromKey.namespaces;
          var namespace = namespaces[namespaces.length - 1];
          var lng = options.lng || this.language;
          var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (lng && lng.toLowerCase() === "cimode") {
            if (appendNamespaceToCIMode) {
              var nsSeparator = options.nsSeparator || this.options.nsSeparator;
              if (returnDetails) {
                resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
                return resolved;
              }
              return "".concat(namespace).concat(nsSeparator).concat(key);
            }
            if (returnDetails) {
              resolved.res = key;
              return resolved;
            }
            return key;
          }
          var resolved = this.resolve(keys, options);
          var res = resolved && resolved.res;
          var resUsedKey = resolved && resolved.usedKey || key;
          var resExactUsedKey = resolved && resolved.exactUsedKey || key;
          var resType = Object.prototype.toString.apply(res);
          var noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
          var joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
          var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
          var handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
          if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && resType === "[object Array]")) {
            if (!options.returnObjects && !this.options.returnObjects) {
              if (!this.options.returnedObjectHandler) {
                this.logger.warn("accessing an object - but returnObjects options is not enabled!");
              }
              var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
                ns: namespaces
              })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
              if (returnDetails) {
                resolved.res = r;
                return resolved;
              }
              return r;
            }
            if (keySeparator) {
              var resTypeIsArray = resType === "[object Array]";
              var copy2 = resTypeIsArray ? [] : {};
              var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
              for (var m in res) {
                if (Object.prototype.hasOwnProperty.call(res, m)) {
                  var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
                  copy2[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                    joinArrays: false,
                    ns: namespaces
                  }));
                  if (copy2[m] === deepKey)
                    copy2[m] = res[m];
                }
              }
              res = copy2;
            }
          } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && resType === "[object Array]") {
            res = res.join(joinArrays);
            if (res)
              res = this.extendTranslation(res, keys, options, lastKey);
          } else {
            var usedDefault = false;
            var usedKey = false;
            var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
            var hasDefaultValue = Translator2.hasDefaultValue(options);
            var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
            var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;
            if (!this.isValidLookup(res) && hasDefaultValue) {
              usedDefault = true;
              res = defaultValue;
            }
            if (!this.isValidLookup(res)) {
              usedKey = true;
              res = key;
            }
            var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
            var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
            var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
            if (usedKey || usedDefault || updateMissing) {
              this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
              if (keySeparator) {
                var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
                  keySeparator: false
                }));
                if (fk && fk.res)
                  this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
              var lngs = [];
              var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
              if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
                for (var i = 0; i < fallbackLngs.length; i++) {
                  lngs.push(fallbackLngs[i]);
                }
              } else if (this.options.saveMissingTo === "all") {
                lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
              } else {
                lngs.push(options.lng || this.language);
              }
              var send = function send2(l, k, specificDefaultValue) {
                var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
                if (_this2.options.missingKeyHandler) {
                  _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
                } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
                  _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
                }
                _this2.emit("missingKey", l, namespace, k, res);
              };
              if (this.options.saveMissing) {
                if (this.options.saveMissingPlurals && needsPluralHandling) {
                  lngs.forEach(function(language) {
                    _this2.pluralResolver.getSuffixes(language, options).forEach(function(suffix) {
                      send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                    });
                  });
                } else {
                  send(lngs, key, defaultValue);
                }
              }
            }
            res = this.extendTranslation(res, keys, options, resolved, lastKey);
            if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
              res = "".concat(namespace, ":").concat(key);
            if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
              if (this.options.compatibilityAPI !== "v1") {
                res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : void 0);
              } else {
                res = this.options.parseMissingKeyHandler(res);
              }
            }
          }
          if (returnDetails) {
            resolved.res = res;
            return resolved;
          }
          return res;
        }
      }, {
        key: "extendTranslation",
        value: function extendTranslation(res, key, options, resolved, lastKey) {
          var _this3 = this;
          if (this.i18nFormat && this.i18nFormat.parse) {
            res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
              resolved
            });
          } else if (!options.skipInterpolation) {
            if (options.interpolation)
              this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
                interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
              }));
            var skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            var nestBef;
            if (skipOnVariables) {
              var nb = res.match(this.interpolator.nestingRegexp);
              nestBef = nb && nb.length;
            }
            var data = options.replace && typeof options.replace !== "string" ? options.replace : options;
            if (this.options.interpolation.defaultVariables)
              data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
            res = this.interpolator.interpolate(res, data, options.lng || this.language, options);
            if (skipOnVariables) {
              var na = res.match(this.interpolator.nestingRegexp);
              var nestAft = na && na.length;
              if (nestBef < nestAft)
                options.nest = false;
            }
            if (options.nest !== false)
              res = this.interpolator.nest(res, function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                if (lastKey && lastKey[0] === args[0] && !options.context) {
                  _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));
                  return null;
                }
                return _this3.translate.apply(_this3, args.concat([key]));
              }, options);
            if (options.interpolation)
              this.interpolator.reset();
          }
          var postProcess = options.postProcess || this.options.postProcess;
          var postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
          if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
            res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
              i18nResolved: resolved
            }, options) : options, this);
          }
          return res;
        }
      }, {
        key: "resolve",
        value: function resolve(keys) {
          var _this4 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var found;
          var usedKey;
          var exactUsedKey;
          var usedLng;
          var usedNS;
          if (typeof keys === "string")
            keys = [keys];
          keys.forEach(function(k) {
            if (_this4.isValidLookup(found))
              return;
            var extracted = _this4.extractFromKey(k, options);
            var key = extracted.key;
            usedKey = key;
            var namespaces = extracted.namespaces;
            if (_this4.options.fallbackNS)
              namespaces = namespaces.concat(_this4.options.fallbackNS);
            var needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
            var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();
            var needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
            var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
            namespaces.forEach(function(ns) {
              if (_this4.isValidLookup(found))
                return;
              usedNS = ns;
              if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
                checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;
                _this4.logger.warn('key "'.concat(usedKey, '" for languages "').concat(codes.join(", "), `" won't get resolved as namespace "`).concat(usedNS, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
              }
              codes.forEach(function(code) {
                if (_this4.isValidLookup(found))
                  return;
                usedLng = code;
                var finalKeys = [key];
                if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
                  _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
                } else {
                  var pluralSuffix;
                  if (needsPluralHandling)
                    pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
                  var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");
                  if (needsPluralHandling) {
                    finalKeys.push(key + pluralSuffix);
                    if (needsZeroSuffixLookup) {
                      finalKeys.push(key + zeroSuffix);
                    }
                  }
                  if (needsContextHandling) {
                    var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                    finalKeys.push(contextKey);
                    if (needsPluralHandling) {
                      finalKeys.push(contextKey + pluralSuffix);
                      if (needsZeroSuffixLookup) {
                        finalKeys.push(contextKey + zeroSuffix);
                      }
                    }
                  }
                }
                var possibleKey;
                while (possibleKey = finalKeys.pop()) {
                  if (!_this4.isValidLookup(found)) {
                    exactUsedKey = possibleKey;
                    found = _this4.getResource(code, ns, possibleKey, options);
                  }
                }
              });
            });
          });
          return {
            res: found,
            usedKey,
            exactUsedKey,
            usedLng,
            usedNS
          };
        }
      }, {
        key: "isValidLookup",
        value: function isValidLookup(res) {
          return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
        }
      }, {
        key: "getResource",
        value: function getResource(code, ns, key) {
          var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (this.i18nFormat && this.i18nFormat.getResource)
            return this.i18nFormat.getResource(code, ns, key, options);
          return this.resourceStore.getResource(code, ns, key, options);
        }
      }], [{
        key: "hasDefaultValue",
        value: function hasDefaultValue(options) {
          var prefix = "defaultValue";
          for (var option in options) {
            if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
              return true;
            }
          }
          return false;
        }
      }]);
      return Translator2;
    }(EventEmitter);
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    var LanguageUtil = function() {
      function LanguageUtil2(options) {
        _classCallCheck__default["default"](this, LanguageUtil2);
        this.options = options;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create("languageUtils");
      }
      _createClass__default["default"](LanguageUtil2, [{
        key: "getScriptPartFromCode",
        value: function getScriptPartFromCode(code) {
          if (!code || code.indexOf("-") < 0)
            return null;
          var p = code.split("-");
          if (p.length === 2)
            return null;
          p.pop();
          if (p[p.length - 1].toLowerCase() === "x")
            return null;
          return this.formatLanguageCode(p.join("-"));
        }
      }, {
        key: "getLanguagePartFromCode",
        value: function getLanguagePartFromCode(code) {
          if (!code || code.indexOf("-") < 0)
            return code;
          var p = code.split("-");
          return this.formatLanguageCode(p[0]);
        }
      }, {
        key: "formatLanguageCode",
        value: function formatLanguageCode(code) {
          if (typeof code === "string" && code.indexOf("-") > -1) {
            var specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            var p = code.split("-");
            if (this.options.lowerCaseLng) {
              p = p.map(function(part) {
                return part.toLowerCase();
              });
            } else if (p.length === 2) {
              p[0] = p[0].toLowerCase();
              p[1] = p[1].toUpperCase();
              if (specialCases.indexOf(p[1].toLowerCase()) > -1)
                p[1] = capitalize(p[1].toLowerCase());
            } else if (p.length === 3) {
              p[0] = p[0].toLowerCase();
              if (p[1].length === 2)
                p[1] = p[1].toUpperCase();
              if (p[0] !== "sgn" && p[2].length === 2)
                p[2] = p[2].toUpperCase();
              if (specialCases.indexOf(p[1].toLowerCase()) > -1)
                p[1] = capitalize(p[1].toLowerCase());
              if (specialCases.indexOf(p[2].toLowerCase()) > -1)
                p[2] = capitalize(p[2].toLowerCase());
            }
            return p.join("-");
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
        }
      }, {
        key: "isSupportedCode",
        value: function isSupportedCode(code) {
          if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
            code = this.getLanguagePartFromCode(code);
          }
          return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
        }
      }, {
        key: "getBestMatchFromCodes",
        value: function getBestMatchFromCodes(codes) {
          var _this = this;
          if (!codes)
            return null;
          var found;
          codes.forEach(function(code) {
            if (found)
              return;
            var cleanedLng = _this.formatLanguageCode(code);
            if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng))
              found = cleanedLng;
          });
          if (!found && this.options.supportedLngs) {
            codes.forEach(function(code) {
              if (found)
                return;
              var lngOnly = _this.getLanguagePartFromCode(code);
              if (_this.isSupportedCode(lngOnly))
                return found = lngOnly;
              found = _this.options.supportedLngs.find(function(supportedLng) {
                if (supportedLng.indexOf(lngOnly) === 0)
                  return supportedLng;
              });
            });
          }
          if (!found)
            found = this.getFallbackCodes(this.options.fallbackLng)[0];
          return found;
        }
      }, {
        key: "getFallbackCodes",
        value: function getFallbackCodes(fallbacks, code) {
          if (!fallbacks)
            return [];
          if (typeof fallbacks === "function")
            fallbacks = fallbacks(code);
          if (typeof fallbacks === "string")
            fallbacks = [fallbacks];
          if (Object.prototype.toString.apply(fallbacks) === "[object Array]")
            return fallbacks;
          if (!code)
            return fallbacks["default"] || [];
          var found = fallbacks[code];
          if (!found)
            found = fallbacks[this.getScriptPartFromCode(code)];
          if (!found)
            found = fallbacks[this.formatLanguageCode(code)];
          if (!found)
            found = fallbacks[this.getLanguagePartFromCode(code)];
          if (!found)
            found = fallbacks["default"];
          return found || [];
        }
      }, {
        key: "toResolveHierarchy",
        value: function toResolveHierarchy(code, fallbackCode) {
          var _this2 = this;
          var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
          var codes = [];
          var addCode = function addCode2(c) {
            if (!c)
              return;
            if (_this2.isSupportedCode(c)) {
              codes.push(c);
            } else {
              _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
            }
          };
          if (typeof code === "string" && code.indexOf("-") > -1) {
            if (this.options.load !== "languageOnly")
              addCode(this.formatLanguageCode(code));
            if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
              addCode(this.getScriptPartFromCode(code));
            if (this.options.load !== "currentOnly")
              addCode(this.getLanguagePartFromCode(code));
          } else if (typeof code === "string") {
            addCode(this.formatLanguageCode(code));
          }
          fallbackCodes.forEach(function(fc) {
            if (codes.indexOf(fc) < 0)
              addCode(_this2.formatLanguageCode(fc));
          });
          return codes;
        }
      }]);
      return LanguageUtil2;
    }();
    var sets = [{
      lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
      nr: [1, 2],
      fc: 1
    }, {
      lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
      nr: [1, 2],
      fc: 2
    }, {
      lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
      nr: [1],
      fc: 3
    }, {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4
    }, {
      lngs: ["ar"],
      nr: [0, 1, 2, 3, 11, 100],
      fc: 5
    }, {
      lngs: ["cs", "sk"],
      nr: [1, 2, 5],
      fc: 6
    }, {
      lngs: ["csb", "pl"],
      nr: [1, 2, 5],
      fc: 7
    }, {
      lngs: ["cy"],
      nr: [1, 2, 3, 8],
      fc: 8
    }, {
      lngs: ["fr"],
      nr: [1, 2],
      fc: 9
    }, {
      lngs: ["ga"],
      nr: [1, 2, 3, 7, 11],
      fc: 10
    }, {
      lngs: ["gd"],
      nr: [1, 2, 3, 20],
      fc: 11
    }, {
      lngs: ["is"],
      nr: [1, 2],
      fc: 12
    }, {
      lngs: ["jv"],
      nr: [0, 1],
      fc: 13
    }, {
      lngs: ["kw"],
      nr: [1, 2, 3, 4],
      fc: 14
    }, {
      lngs: ["lt"],
      nr: [1, 2, 10],
      fc: 15
    }, {
      lngs: ["lv"],
      nr: [1, 2, 0],
      fc: 16
    }, {
      lngs: ["mk"],
      nr: [1, 2],
      fc: 17
    }, {
      lngs: ["mnk"],
      nr: [0, 1, 2],
      fc: 18
    }, {
      lngs: ["mt"],
      nr: [1, 2, 11, 20],
      fc: 19
    }, {
      lngs: ["or"],
      nr: [2, 1],
      fc: 2
    }, {
      lngs: ["ro"],
      nr: [1, 2, 20],
      fc: 20
    }, {
      lngs: ["sl"],
      nr: [5, 1, 2, 3],
      fc: 21
    }, {
      lngs: ["he", "iw"],
      nr: [1, 2, 20, 21],
      fc: 22
    }];
    var _rulesPluralsTypes = {
      1: function _(n) {
        return Number(n > 1);
      },
      2: function _(n) {
        return Number(n != 1);
      },
      3: function _(n) {
        return 0;
      },
      4: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
      },
      5: function _(n) {
        return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
      },
      6: function _(n) {
        return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
      },
      7: function _(n) {
        return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
      },
      8: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
      },
      9: function _(n) {
        return Number(n >= 2);
      },
      10: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
      },
      11: function _(n) {
        return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
      },
      12: function _(n) {
        return Number(n % 10 != 1 || n % 100 == 11);
      },
      13: function _(n) {
        return Number(n !== 0);
      },
      14: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
      },
      15: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
      },
      16: function _(n) {
        return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
      },
      17: function _(n) {
        return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
      },
      18: function _(n) {
        return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
      },
      19: function _(n) {
        return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
      },
      20: function _(n) {
        return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
      },
      21: function _(n) {
        return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
      },
      22: function _(n) {
        return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
      }
    };
    var deprecatedJsonVersions = ["v1", "v2", "v3"];
    var suffixesOrder = {
      zero: 0,
      one: 1,
      two: 2,
      few: 3,
      many: 4,
      other: 5
    };
    function createRules() {
      var rules = {};
      sets.forEach(function(set) {
        set.lngs.forEach(function(l) {
          rules[l] = {
            numbers: set.nr,
            plurals: _rulesPluralsTypes[set.fc]
          };
        });
      });
      return rules;
    }
    var PluralResolver = function() {
      function PluralResolver2(languageUtils) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck__default["default"](this, PluralResolver2);
        this.languageUtils = languageUtils;
        this.options = options;
        this.logger = baseLogger.create("pluralResolver");
        if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl === "undefined" || !Intl.PluralRules)) {
          this.options.compatibilityJSON = "v3";
          this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
        }
        this.rules = createRules();
      }
      _createClass__default["default"](PluralResolver2, [{
        key: "addRule",
        value: function addRule(lng, obj) {
          this.rules[lng] = obj;
        }
      }, {
        key: "getRule",
        value: function getRule(code) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi()) {
            try {
              return new Intl.PluralRules(code, {
                type: options.ordinal ? "ordinal" : "cardinal"
              });
            } catch (_unused) {
              return;
            }
          }
          return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
        }
      }, {
        key: "needsPlural",
        value: function needsPlural(code) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var rule = this.getRule(code, options);
          if (this.shouldUseIntlApi()) {
            return rule && rule.resolvedOptions().pluralCategories.length > 1;
          }
          return rule && rule.numbers.length > 1;
        }
      }, {
        key: "getPluralFormsOfKey",
        value: function getPluralFormsOfKey(code, key) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(code, options).map(function(suffix) {
            return "".concat(key).concat(suffix);
          });
        }
      }, {
        key: "getSuffixes",
        value: function getSuffixes(code) {
          var _this = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var rule = this.getRule(code, options);
          if (!rule) {
            return [];
          }
          if (this.shouldUseIntlApi()) {
            return rule.resolvedOptions().pluralCategories.sort(function(pluralCategory1, pluralCategory2) {
              return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
            }).map(function(pluralCategory) {
              return "".concat(_this.options.prepend).concat(pluralCategory);
            });
          }
          return rule.numbers.map(function(number) {
            return _this.getSuffix(code, number, options);
          });
        }
      }, {
        key: "getSuffix",
        value: function getSuffix(code, count) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var rule = this.getRule(code, options);
          if (rule) {
            if (this.shouldUseIntlApi()) {
              return "".concat(this.options.prepend).concat(rule.select(count));
            }
            return this.getSuffixRetroCompatible(rule, count);
          }
          this.logger.warn("no plural rule found for: ".concat(code));
          return "";
        }
      }, {
        key: "getSuffixRetroCompatible",
        value: function getSuffixRetroCompatible(rule, count) {
          var _this2 = this;
          var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
          var suffix = rule.numbers[idx];
          if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
            if (suffix === 2) {
              suffix = "plural";
            } else if (suffix === 1) {
              suffix = "";
            }
          }
          var returnSuffix = function returnSuffix2() {
            return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
          };
          if (this.options.compatibilityJSON === "v1") {
            if (suffix === 1)
              return "";
            if (typeof suffix === "number")
              return "_plural_".concat(suffix.toString());
            return returnSuffix();
          } else if (this.options.compatibilityJSON === "v2") {
            return returnSuffix();
          } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
            return returnSuffix();
          }
          return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
        }
      }, {
        key: "shouldUseIntlApi",
        value: function shouldUseIntlApi() {
          return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
        }
      }]);
      return PluralResolver2;
    }();
    function ownKeys$3(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$3(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$3(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$3(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    var Interpolator = function() {
      function Interpolator2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck__default["default"](this, Interpolator2);
        this.logger = baseLogger.create("interpolator");
        this.options = options;
        this.format = options.interpolation && options.interpolation.format || function(value) {
          return value;
        };
        this.init(options);
      }
      _createClass__default["default"](Interpolator2, [{
        key: "init",
        value: function init() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!options.interpolation)
            options.interpolation = {
              escapeValue: true
            };
          var iOpts = options.interpolation;
          this.escape = iOpts.escape !== void 0 ? iOpts.escape : escape;
          this.escapeValue = iOpts.escapeValue !== void 0 ? iOpts.escapeValue : true;
          this.useRawValueToEscape = iOpts.useRawValueToEscape !== void 0 ? iOpts.useRawValueToEscape : false;
          this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || "{{";
          this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || "}}";
          this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
          this.unescapePrefix = iOpts.unescapeSuffix ? "" : iOpts.unescapePrefix || "-";
          this.unescapeSuffix = this.unescapePrefix ? "" : iOpts.unescapeSuffix || "";
          this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape("$t(");
          this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(")");
          this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ",";
          this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1e3;
          this.alwaysFormat = iOpts.alwaysFormat !== void 0 ? iOpts.alwaysFormat : false;
          this.resetRegExp();
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.options)
            this.init(this.options);
        }
      }, {
        key: "resetRegExp",
        value: function resetRegExp() {
          var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(regexpStr, "g");
          var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
          this.regexpUnescape = new RegExp(regexpUnescapeStr, "g");
          var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(nestingRegexpStr, "g");
        }
      }, {
        key: "interpolate",
        value: function interpolate(str, data, lng, options) {
          var _this = this;
          var match;
          var value;
          var replaces;
          var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
          function regexSafe(val) {
            return val.replace(/\$/g, "$$$$");
          }
          var handleFormat = function handleFormat2(key) {
            if (key.indexOf(_this.formatSeparator) < 0) {
              var path2 = getPathWithDefaults(data, defaultData, key);
              return _this.alwaysFormat ? _this.format(path2, void 0, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
                interpolationkey: key
              })) : path2;
            }
            var p = key.split(_this.formatSeparator);
            var k = p.shift().trim();
            var f = p.join(_this.formatSeparator).trim();
            return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
              interpolationkey: k
            }));
          };
          this.resetRegExp();
          var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
          var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
          var todos = [{
            regex: this.regexpUnescape,
            safeValue: function safeValue(val) {
              return regexSafe(val);
            }
          }, {
            regex: this.regexp,
            safeValue: function safeValue(val) {
              return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
            }
          }];
          todos.forEach(function(todo) {
            replaces = 0;
            while (match = todo.regex.exec(str)) {
              var matchedVar = match[1].trim();
              value = handleFormat(matchedVar);
              if (value === void 0) {
                if (typeof missingInterpolationHandler === "function") {
                  var temp = missingInterpolationHandler(str, match, options);
                  value = typeof temp === "string" ? temp : "";
                } else if (options && options.hasOwnProperty(matchedVar)) {
                  value = "";
                } else if (skipOnVariables) {
                  value = match[0];
                  continue;
                } else {
                  _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));
                  value = "";
                }
              } else if (typeof value !== "string" && !_this.useRawValueToEscape) {
                value = makeString(value);
              }
              var safeValue = todo.safeValue(value);
              str = str.replace(match[0], safeValue);
              if (skipOnVariables) {
                todo.regex.lastIndex += value.length;
                todo.regex.lastIndex -= match[0].length;
              } else {
                todo.regex.lastIndex = 0;
              }
              replaces++;
              if (replaces >= _this.maxReplaces) {
                break;
              }
            }
          });
          return str;
        }
      }, {
        key: "nest",
        value: function nest(str, fc) {
          var _this2 = this;
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var match;
          var value;
          var clonedOptions = _objectSpread$3({}, options);
          clonedOptions.applyPostProcessor = false;
          delete clonedOptions.defaultValue;
          function handleHasOptions(key, inheritedOptions) {
            var sep = this.nestingOptionsSeparator;
            if (key.indexOf(sep) < 0)
              return key;
            var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
            var optionsString = "{".concat(c[1]);
            key = c[0];
            optionsString = this.interpolate(optionsString, clonedOptions);
            var matchedSingleQuotes = optionsString.match(/'/g);
            var matchedDoubleQuotes = optionsString.match(/"/g);
            if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
              optionsString = optionsString.replace(/'/g, '"');
            }
            try {
              clonedOptions = JSON.parse(optionsString);
              if (inheritedOptions)
                clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
            } catch (e) {
              this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
              return "".concat(key).concat(sep).concat(optionsString);
            }
            delete clonedOptions.defaultValue;
            return key;
          }
          while (match = this.nestingRegexp.exec(str)) {
            var formatters = [];
            var doReduce = false;
            if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
              var r = match[1].split(this.formatSeparator).map(function(elem) {
                return elem.trim();
              });
              match[1] = r.shift();
              formatters = r;
              doReduce = true;
            }
            value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
            if (value && match[0] === str && typeof value !== "string")
              return value;
            if (typeof value !== "string")
              value = makeString(value);
            if (!value) {
              this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
              value = "";
            }
            if (doReduce) {
              value = formatters.reduce(function(v, f) {
                return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
                  interpolationkey: match[1].trim()
                }));
              }, value.trim());
            }
            str = str.replace(match[0], value);
            this.regexp.lastIndex = 0;
          }
          return str;
        }
      }]);
      return Interpolator2;
    }();
    function ownKeys$4(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$4(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$4(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$4(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function parseFormatStr(formatStr) {
      var formatName = formatStr.toLowerCase().trim();
      var formatOptions = {};
      if (formatStr.indexOf("(") > -1) {
        var p = formatStr.split("(");
        formatName = p[0].toLowerCase().trim();
        var optStr = p[1].substring(0, p[1].length - 1);
        if (formatName === "currency" && optStr.indexOf(":") < 0) {
          if (!formatOptions.currency)
            formatOptions.currency = optStr.trim();
        } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
          if (!formatOptions.range)
            formatOptions.range = optStr.trim();
        } else {
          var opts = optStr.split(";");
          opts.forEach(function(opt) {
            if (!opt)
              return;
            var _opt$split = opt.split(":"), _opt$split2 = _toArray__default["default"](_opt$split), key = _opt$split2[0], rest = _opt$split2.slice(1);
            var val = rest.join(":").trim().replace(/^'+|'+$/g, "");
            if (!formatOptions[key.trim()])
              formatOptions[key.trim()] = val;
            if (val === "false")
              formatOptions[key.trim()] = false;
            if (val === "true")
              formatOptions[key.trim()] = true;
            if (!isNaN(val))
              formatOptions[key.trim()] = parseInt(val, 10);
          });
        }
      }
      return {
        formatName,
        formatOptions
      };
    }
    function createCachedFormatter(fn) {
      var cache = {};
      return function invokeFormatter(val, lng, options) {
        var key = lng + JSON.stringify(options);
        var formatter = cache[key];
        if (!formatter) {
          formatter = fn(lng, options);
          cache[key] = formatter;
        }
        return formatter(val);
      };
    }
    var Formatter = function() {
      function Formatter2() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck__default["default"](this, Formatter2);
        this.logger = baseLogger.create("formatter");
        this.options = options;
        this.formats = {
          number: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.NumberFormat(lng, options2);
            return function(val) {
              return formatter.format(val);
            };
          }),
          currency: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options2), {}, {
              style: "currency"
            }));
            return function(val) {
              return formatter.format(val);
            };
          }),
          datetime: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.DateTimeFormat(lng, _objectSpread$4({}, options2));
            return function(val) {
              return formatter.format(val);
            };
          }),
          relativetime: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options2));
            return function(val) {
              return formatter.format(val, options2.range || "day");
            };
          }),
          list: createCachedFormatter(function(lng, options2) {
            var formatter = new Intl.ListFormat(lng, _objectSpread$4({}, options2));
            return function(val) {
              return formatter.format(val);
            };
          })
        };
        this.init(options);
      }
      _createClass__default["default"](Formatter2, [{
        key: "init",
        value: function init(services) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
          };
          var iOpts = options.interpolation;
          this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
        }
      }, {
        key: "add",
        value: function add(name, fc) {
          this.formats[name.toLowerCase().trim()] = fc;
        }
      }, {
        key: "addCached",
        value: function addCached(name, fc) {
          this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
        }
      }, {
        key: "format",
        value: function format(value, _format, lng, options) {
          var _this = this;
          var formats = _format.split(this.formatSeparator);
          var result = formats.reduce(function(mem, f) {
            var _parseFormatStr = parseFormatStr(f), formatName = _parseFormatStr.formatName, formatOptions = _parseFormatStr.formatOptions;
            if (_this.formats[formatName]) {
              var formatted = mem;
              try {
                var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
                var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
                formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
              } catch (error) {
                _this.logger.warn(error);
              }
              return formatted;
            } else {
              _this.logger.warn("there was no format function for ".concat(formatName));
            }
            return mem;
          }, value);
          return result;
        }
      }]);
      return Formatter2;
    }();
    function ownKeys$5(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$5(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$5(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$5(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _createSuper$2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$2() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function removePending(q, name) {
      if (q.pending[name] !== void 0) {
        delete q.pending[name];
        q.pendingCount--;
      }
    }
    var Connector = function(_EventEmitter) {
      _inherits__default["default"](Connector2, _EventEmitter);
      var _super = _createSuper$2(Connector2);
      function Connector2(backend, store, services) {
        var _this;
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        _classCallCheck__default["default"](this, Connector2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized__default["default"](_this));
        }
        _this.backend = backend;
        _this.store = store;
        _this.services = services;
        _this.languageUtils = services.languageUtils;
        _this.options = options;
        _this.logger = baseLogger.create("backendConnector");
        _this.waitingReads = [];
        _this.maxParallelReads = options.maxParallelReads || 10;
        _this.readingCalls = 0;
        _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
        _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
        _this.state = {};
        _this.queue = [];
        if (_this.backend && _this.backend.init) {
          _this.backend.init(services, options.backend, options);
        }
        return _this;
      }
      _createClass__default["default"](Connector2, [{
        key: "queueLoad",
        value: function queueLoad(languages, namespaces, options, callback) {
          var _this2 = this;
          var toLoad = {};
          var pending = {};
          var toLoadLanguages = {};
          var toLoadNamespaces = {};
          languages.forEach(function(lng) {
            var hasAllNamespaces = true;
            namespaces.forEach(function(ns) {
              var name = "".concat(lng, "|").concat(ns);
              if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
                _this2.state[name] = 2;
              } else if (_this2.state[name] < 0)
                ;
              else if (_this2.state[name] === 1) {
                if (pending[name] === void 0)
                  pending[name] = true;
              } else {
                _this2.state[name] = 1;
                hasAllNamespaces = false;
                if (pending[name] === void 0)
                  pending[name] = true;
                if (toLoad[name] === void 0)
                  toLoad[name] = true;
                if (toLoadNamespaces[ns] === void 0)
                  toLoadNamespaces[ns] = true;
              }
            });
            if (!hasAllNamespaces)
              toLoadLanguages[lng] = true;
          });
          if (Object.keys(toLoad).length || Object.keys(pending).length) {
            this.queue.push({
              pending,
              pendingCount: Object.keys(pending).length,
              loaded: {},
              errors: [],
              callback
            });
          }
          return {
            toLoad: Object.keys(toLoad),
            pending: Object.keys(pending),
            toLoadLanguages: Object.keys(toLoadLanguages),
            toLoadNamespaces: Object.keys(toLoadNamespaces)
          };
        }
      }, {
        key: "loaded",
        value: function loaded(name, err, data) {
          var s = name.split("|");
          var lng = s[0];
          var ns = s[1];
          if (err)
            this.emit("failedLoading", lng, ns, err);
          if (data) {
            this.store.addResourceBundle(lng, ns, data);
          }
          this.state[name] = err ? -1 : 2;
          var loaded2 = {};
          this.queue.forEach(function(q) {
            pushPath(q.loaded, [lng], ns);
            removePending(q, name);
            if (err)
              q.errors.push(err);
            if (q.pendingCount === 0 && !q.done) {
              Object.keys(q.loaded).forEach(function(l) {
                if (!loaded2[l])
                  loaded2[l] = {};
                var loadedKeys = q.loaded[l];
                if (loadedKeys.length) {
                  loadedKeys.forEach(function(ns2) {
                    if (loaded2[l][ns2] === void 0)
                      loaded2[l][ns2] = true;
                  });
                }
              });
              q.done = true;
              if (q.errors.length) {
                q.callback(q.errors);
              } else {
                q.callback();
              }
            }
          });
          this.emit("loaded", loaded2);
          this.queue = this.queue.filter(function(q) {
            return !q.done;
          });
        }
      }, {
        key: "read",
        value: function read2(lng, ns, fcName) {
          var _this3 = this;
          var tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          var wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
          var callback = arguments.length > 5 ? arguments[5] : void 0;
          if (!lng.length)
            return callback(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng,
              ns,
              fcName,
              tried,
              wait,
              callback
            });
            return;
          }
          this.readingCalls++;
          return this.backend[fcName](lng, ns, function(err, data) {
            _this3.readingCalls--;
            if (_this3.waitingReads.length > 0) {
              var next = _this3.waitingReads.shift();
              _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
            }
            if (err && data && tried < _this3.maxRetries) {
              setTimeout(function() {
                _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
              }, wait);
              return;
            }
            callback(err, data);
          });
        }
      }, {
        key: "prepareLoading",
        value: function prepareLoading(languages, namespaces) {
          var _this4 = this;
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var callback = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend) {
            this.logger.warn("No backend was added via i18next.use. Will not load resources.");
            return callback && callback();
          }
          if (typeof languages === "string")
            languages = this.languageUtils.toResolveHierarchy(languages);
          if (typeof namespaces === "string")
            namespaces = [namespaces];
          var toLoad = this.queueLoad(languages, namespaces, options, callback);
          if (!toLoad.toLoad.length) {
            if (!toLoad.pending.length)
              callback();
            return null;
          }
          toLoad.toLoad.forEach(function(name) {
            _this4.loadOne(name);
          });
        }
      }, {
        key: "load",
        value: function load(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {}, callback);
        }
      }, {
        key: "reload",
        value: function reload(languages, namespaces, callback) {
          this.prepareLoading(languages, namespaces, {
            reload: true
          }, callback);
        }
      }, {
        key: "loadOne",
        value: function loadOne(name) {
          var _this5 = this;
          var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          var s = name.split("|");
          var lng = s[0];
          var ns = s[1];
          this.read(lng, ns, "read", void 0, void 0, function(err, data) {
            if (err)
              _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data)
              _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);
            _this5.loaded(name, err, data);
          });
        }
      }, {
        key: "saveMissing",
        value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
          var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
            this.logger.warn('did not save key "'.concat(key, '" as the namespace "').concat(namespace, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return;
          }
          if (key === void 0 || key === null || key === "")
            return;
          if (this.backend && this.backend.create) {
            this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
              isUpdate
            }));
          }
          if (!languages || !languages[0])
            return;
          this.store.addResource(languages[0], namespace, key, fallbackValue);
        }
      }]);
      return Connector2;
    }(EventEmitter);
    function get() {
      return {
        debug: false,
        initImmediate: true,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: "all",
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: "fallback",
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: true,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler: function handle(args) {
          var ret = {};
          if (_typeof__default["default"](args[1]) === "object")
            ret = args[1];
          if (typeof args[1] === "string")
            ret.defaultValue = args[1];
          if (typeof args[2] === "string")
            ret.tDescription = args[2];
          if (_typeof__default["default"](args[2]) === "object" || _typeof__default["default"](args[3]) === "object") {
            var options = args[3] || args[2];
            Object.keys(options).forEach(function(key) {
              ret[key] = options[key];
            });
          }
          return ret;
        },
        interpolation: {
          escapeValue: true,
          format: function format(value, _format, lng, options) {
            return value;
          },
          prefix: "{{",
          suffix: "}}",
          formatSeparator: ",",
          unescapePrefix: "-",
          nestingPrefix: "$t(",
          nestingSuffix: ")",
          nestingOptionsSeparator: ",",
          maxReplaces: 1e3,
          skipOnVariables: true
        }
      };
    }
    function transformOptions(options) {
      if (typeof options.ns === "string")
        options.ns = [options.ns];
      if (typeof options.fallbackLng === "string")
        options.fallbackLng = [options.fallbackLng];
      if (typeof options.fallbackNS === "string")
        options.fallbackNS = [options.fallbackNS];
      if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
        options.supportedLngs = options.supportedLngs.concat(["cimode"]);
      }
      return options;
    }
    function ownKeys$6(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$6(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$6(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$6(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _createSuper$3(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$3() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function noop() {
    }
    function bindMemberFunctions(inst) {
      var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
      mems.forEach(function(mem) {
        if (typeof inst[mem] === "function") {
          inst[mem] = inst[mem].bind(inst);
        }
      });
    }
    var I18n = function(_EventEmitter) {
      _inherits__default["default"](I18n2, _EventEmitter);
      var _super = _createSuper$3(I18n2);
      function I18n2() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var callback = arguments.length > 1 ? arguments[1] : void 0;
        _classCallCheck__default["default"](this, I18n2);
        _this = _super.call(this);
        if (isIE10) {
          EventEmitter.call(_assertThisInitialized__default["default"](_this));
        }
        _this.options = transformOptions(options);
        _this.services = {};
        _this.logger = baseLogger;
        _this.modules = {
          external: []
        };
        bindMemberFunctions(_assertThisInitialized__default["default"](_this));
        if (callback && !_this.isInitialized && !options.isClone) {
          if (!_this.options.initImmediate) {
            _this.init(options, callback);
            return _possibleConstructorReturn__default["default"](_this, _assertThisInitialized__default["default"](_this));
          }
          setTimeout(function() {
            _this.init(options, callback);
          }, 0);
        }
        return _this;
      }
      _createClass__default["default"](I18n2, [{
        key: "init",
        value: function init() {
          var _this2 = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var callback = arguments.length > 1 ? arguments[1] : void 0;
          if (typeof options === "function") {
            callback = options;
            options = {};
          }
          if (!options.defaultNS && options.defaultNS !== false && options.ns) {
            if (typeof options.ns === "string") {
              options.defaultNS = options.ns;
            } else if (options.ns.indexOf("translation") < 0) {
              options.defaultNS = options.ns[0];
            }
          }
          var defOpts = get();
          this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));
          if (this.options.compatibilityAPI !== "v1") {
            this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
          }
          if (options.keySeparator !== void 0) {
            this.options.userDefinedKeySeparator = options.keySeparator;
          }
          if (options.nsSeparator !== void 0) {
            this.options.userDefinedNsSeparator = options.nsSeparator;
          }
          function createClassOnDemand(ClassOrObject) {
            if (!ClassOrObject)
              return null;
            if (typeof ClassOrObject === "function")
              return new ClassOrObject();
            return ClassOrObject;
          }
          if (!this.options.isClone) {
            if (this.modules.logger) {
              baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
            } else {
              baseLogger.init(null, this.options);
            }
            var formatter;
            if (this.modules.formatter) {
              formatter = this.modules.formatter;
            } else if (typeof Intl !== "undefined") {
              formatter = Formatter;
            }
            var lu = new LanguageUtil(this.options);
            this.store = new ResourceStore(this.options.resources, this.options);
            var s = this.services;
            s.logger = baseLogger;
            s.resourceStore = this.store;
            s.languageUtils = lu;
            s.pluralResolver = new PluralResolver(lu, {
              prepend: this.options.pluralSeparator,
              compatibilityJSON: this.options.compatibilityJSON,
              simplifyPluralSuffix: this.options.simplifyPluralSuffix
            });
            if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
              s.formatter = createClassOnDemand(formatter);
              s.formatter.init(s, this.options);
              this.options.interpolation.format = s.formatter.format.bind(s.formatter);
            }
            s.interpolator = new Interpolator(this.options);
            s.utils = {
              hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            };
            s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
            s.backendConnector.on("*", function(event) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              _this2.emit.apply(_this2, [event].concat(args));
            });
            if (this.modules.languageDetector) {
              s.languageDetector = createClassOnDemand(this.modules.languageDetector);
              s.languageDetector.init(s, this.options.detection, this.options);
            }
            if (this.modules.i18nFormat) {
              s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
              if (s.i18nFormat.init)
                s.i18nFormat.init(this);
            }
            this.translator = new Translator(this.services, this.options);
            this.translator.on("*", function(event) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              _this2.emit.apply(_this2, [event].concat(args));
            });
            this.modules.external.forEach(function(m) {
              if (m.init)
                m.init(_this2);
            });
          }
          this.format = this.options.interpolation.format;
          if (!callback)
            callback = noop;
          if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            if (codes.length > 0 && codes[0] !== "dev")
              this.options.lng = codes[0];
          }
          if (!this.services.languageDetector && !this.options.lng) {
            this.logger.warn("init: no languageDetector is used and no lng is defined");
          }
          var storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
          storeApi.forEach(function(fcName) {
            _this2[fcName] = function() {
              var _this2$store;
              return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
            };
          });
          var storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
          storeApiChained.forEach(function(fcName) {
            _this2[fcName] = function() {
              var _this2$store2;
              (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);
              return _this2;
            };
          });
          var deferred = defer();
          var load = function load2() {
            var finish = function finish2(err, t) {
              if (_this2.isInitialized && !_this2.initializedStoreOnce)
                _this2.logger.warn("init: i18next is already initialized. You should call init just once!");
              _this2.isInitialized = true;
              if (!_this2.options.isClone)
                _this2.logger.log("initialized", _this2.options);
              _this2.emit("initialized", _this2.options);
              deferred.resolve(t);
              callback(err, t);
            };
            if (_this2.languages && _this2.options.compatibilityAPI !== "v1" && !_this2.isInitialized)
              return finish(null, _this2.t.bind(_this2));
            _this2.changeLanguage(_this2.options.lng, finish);
          };
          if (this.options.resources || !this.options.initImmediate) {
            load();
          } else {
            setTimeout(load, 0);
          }
          return deferred;
        }
      }, {
        key: "loadResources",
        value: function loadResources(language) {
          var _this3 = this;
          var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
          var usedCallback = callback;
          var usedLng = typeof language === "string" ? language : this.language;
          if (typeof language === "function")
            usedCallback = language;
          if (!this.options.resources || this.options.partialBundledLanguages) {
            if (usedLng && usedLng.toLowerCase() === "cimode")
              return usedCallback();
            var toLoad = [];
            var append = function append2(lng) {
              if (!lng)
                return;
              var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
              lngs.forEach(function(l) {
                if (toLoad.indexOf(l) < 0)
                  toLoad.push(l);
              });
            };
            if (!usedLng) {
              var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              fallbacks.forEach(function(l) {
                return append(l);
              });
            } else {
              append(usedLng);
            }
            if (this.options.preload) {
              this.options.preload.forEach(function(l) {
                return append(l);
              });
            }
            this.services.backendConnector.load(toLoad, this.options.ns, function(e) {
              if (!e && !_this3.resolvedLanguage && _this3.language)
                _this3.setResolvedLanguage(_this3.language);
              usedCallback(e);
            });
          } else {
            usedCallback(null);
          }
        }
      }, {
        key: "reloadResources",
        value: function reloadResources(lngs, ns, callback) {
          var deferred = defer();
          if (!lngs)
            lngs = this.languages;
          if (!ns)
            ns = this.options.ns;
          if (!callback)
            callback = noop;
          this.services.backendConnector.reload(lngs, ns, function(err) {
            deferred.resolve();
            callback(err);
          });
          return deferred;
        }
      }, {
        key: "use",
        value: function use(module2) {
          if (!module2)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
          if (!module2.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          if (module2.type === "backend") {
            this.modules.backend = module2;
          }
          if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
            this.modules.logger = module2;
          }
          if (module2.type === "languageDetector") {
            this.modules.languageDetector = module2;
          }
          if (module2.type === "i18nFormat") {
            this.modules.i18nFormat = module2;
          }
          if (module2.type === "postProcessor") {
            postProcessor.addPostProcessor(module2);
          }
          if (module2.type === "formatter") {
            this.modules.formatter = module2;
          }
          if (module2.type === "3rdParty") {
            this.modules.external.push(module2);
          }
          return this;
        }
      }, {
        key: "setResolvedLanguage",
        value: function setResolvedLanguage(l) {
          if (!l || !this.languages)
            return;
          if (["cimode", "dev"].indexOf(l) > -1)
            return;
          for (var li = 0; li < this.languages.length; li++) {
            var lngInLngs = this.languages[li];
            if (["cimode", "dev"].indexOf(lngInLngs) > -1)
              continue;
            if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
              this.resolvedLanguage = lngInLngs;
              break;
            }
          }
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(lng, callback) {
          var _this4 = this;
          this.isLanguageChangingTo = lng;
          var deferred = defer();
          this.emit("languageChanging", lng);
          var setLngProps = function setLngProps2(l) {
            _this4.language = l;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
            _this4.resolvedLanguage = void 0;
            _this4.setResolvedLanguage(l);
          };
          var done = function done2(err, l) {
            if (l) {
              setLngProps(l);
              _this4.translator.changeLanguage(l);
              _this4.isLanguageChangingTo = void 0;
              _this4.emit("languageChanged", l);
              _this4.logger.log("languageChanged", l);
            } else {
              _this4.isLanguageChangingTo = void 0;
            }
            deferred.resolve(function() {
              return _this4.t.apply(_this4, arguments);
            });
            if (callback)
              callback(err, function() {
                return _this4.t.apply(_this4, arguments);
              });
          };
          var setLng = function setLng2(lngs) {
            if (!lng && !lngs && _this4.services.languageDetector)
              lngs = [];
            var l = typeof lngs === "string" ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);
            if (l) {
              if (!_this4.language) {
                setLngProps(l);
              }
              if (!_this4.translator.language)
                _this4.translator.changeLanguage(l);
              if (_this4.services.languageDetector)
                _this4.services.languageDetector.cacheUserLanguage(l);
            }
            _this4.loadResources(l, function(err) {
              done(err, l);
            });
          };
          if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
            setLng(this.services.languageDetector.detect());
          } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
            this.services.languageDetector.detect(setLng);
          } else {
            setLng(lng);
          }
          return deferred;
        }
      }, {
        key: "getFixedT",
        value: function getFixedT(lng, ns, keyPrefix) {
          var _this5 = this;
          var fixedT = function fixedT2(key, opts) {
            var options;
            if (_typeof__default["default"](opts) !== "object") {
              for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                rest[_key3 - 2] = arguments[_key3];
              }
              options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
            } else {
              options = _objectSpread$6({}, opts);
            }
            options.lng = options.lng || fixedT2.lng;
            options.lngs = options.lngs || fixedT2.lngs;
            options.ns = options.ns || fixedT2.ns;
            options.keyPrefix = options.keyPrefix || keyPrefix || fixedT2.keyPrefix;
            var keySeparator = _this5.options.keySeparator || ".";
            var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
            return _this5.t(resultKey, options);
          };
          if (typeof lng === "string") {
            fixedT.lng = lng;
          } else {
            fixedT.lngs = lng;
          }
          fixedT.ns = ns;
          fixedT.keyPrefix = keyPrefix;
          return fixedT;
        }
      }, {
        key: "t",
        value: function t() {
          var _this$translator;
          return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
        }
      }, {
        key: "exists",
        value: function exists() {
          var _this$translator2;
          return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
        }
      }, {
        key: "setDefaultNamespace",
        value: function setDefaultNamespace(ns) {
          this.options.defaultNS = ns;
        }
      }, {
        key: "hasLoadedNamespace",
        value: function hasLoadedNamespace(ns) {
          var _this6 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized) {
            this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
            return false;
          }
          if (!this.languages || !this.languages.length) {
            this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
            return false;
          }
          var lng = this.resolvedLanguage || this.languages[0];
          var fallbackLng = this.options ? this.options.fallbackLng : false;
          var lastLng = this.languages[this.languages.length - 1];
          if (lng.toLowerCase() === "cimode")
            return true;
          var loadNotPending = function loadNotPending2(l, n) {
            var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];
            return loadState === -1 || loadState === 2;
          };
          if (options.precheck) {
            var preResult = options.precheck(this, loadNotPending);
            if (preResult !== void 0)
              return preResult;
          }
          if (this.hasResourceBundle(lng, ns))
            return true;
          if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
            return true;
          if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
            return true;
          return false;
        }
      }, {
        key: "loadNamespaces",
        value: function loadNamespaces(ns, callback) {
          var _this7 = this;
          var deferred = defer();
          if (!this.options.ns) {
            callback && callback();
            return Promise.resolve();
          }
          if (typeof ns === "string")
            ns = [ns];
          ns.forEach(function(n) {
            if (_this7.options.ns.indexOf(n) < 0)
              _this7.options.ns.push(n);
          });
          this.loadResources(function(err) {
            deferred.resolve();
            if (callback)
              callback(err);
          });
          return deferred;
        }
      }, {
        key: "loadLanguages",
        value: function loadLanguages(lngs, callback) {
          var deferred = defer();
          if (typeof lngs === "string")
            lngs = [lngs];
          var preloaded = this.options.preload || [];
          var newLngs = lngs.filter(function(lng) {
            return preloaded.indexOf(lng) < 0;
          });
          if (!newLngs.length) {
            if (callback)
              callback();
            return Promise.resolve();
          }
          this.options.preload = preloaded.concat(newLngs);
          this.loadResources(function(err) {
            deferred.resolve();
            if (callback)
              callback(err);
          });
          return deferred;
        }
      }, {
        key: "dir",
        value: function dir(lng) {
          if (!lng)
            lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
          if (!lng)
            return "rtl";
          var rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
          return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
        }
      }, {
        key: "cloneInstance",
        value: function cloneInstance() {
          var _this8 = this;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
          var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
            isClone: true
          });
          var clone = new I18n2(mergedOptions);
          if (options.debug !== void 0 || options.prefix !== void 0) {
            clone.logger = clone.logger.clone(options);
          }
          var membersToCopy = ["store", "services", "language"];
          membersToCopy.forEach(function(m) {
            clone[m] = _this8[m];
          });
          clone.services = _objectSpread$6({}, this.services);
          clone.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          clone.translator = new Translator(clone.services, clone.options);
          clone.translator.on("*", function(event) {
            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              args[_key4 - 1] = arguments[_key4];
            }
            clone.emit.apply(clone, [event].concat(args));
          });
          clone.init(mergedOptions, callback);
          clone.translator.options = clone.options;
          clone.translator.backendConnector.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
          };
          return clone;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
          };
        }
      }]);
      return I18n2;
    }(EventEmitter);
    _defineProperty__default["default"](I18n, "createInstance", function() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : void 0;
      return new I18n(options, callback);
    });
    var instance = I18n.createInstance();
    instance.createInstance = I18n.createInstance;
    module.exports = instance;
  }
});

// node_modules/intl-parse-accept-language/dist/intl-parse-accept-language.esm.js
var intl_parse_accept_language_esm_exports = {};
__export(intl_parse_accept_language_esm_exports, {
  parseAcceptLanguage: () => parseAcceptLanguage
});
var defaultValidate, parseAcceptLanguage;
var init_intl_parse_accept_language_esm = __esm({
  "node_modules/intl-parse-accept-language/dist/intl-parse-accept-language.esm.js"() {
    defaultValidate = function defaultValidate2(locale) {
      return locale;
    };
    parseAcceptLanguage = function parseAcceptLanguage2(languageHeaderValue, options) {
      if (options === void 0) {
        options = {};
      }
      if (!languageHeaderValue)
        return [];
      var _options = options, _options$ignoreWildca = _options.ignoreWildcard, ignoreWildcard = _options$ignoreWildca === void 0 ? true : _options$ignoreWildca, _options$validate = _options.validate, validate = _options$validate === void 0 ? defaultValidate : _options$validate;
      return languageHeaderValue.split(",").map(function(lang) {
        var _lang$split = lang.split(";"), locale = _lang$split[0], _lang$split$ = _lang$split[1], q = _lang$split$ === void 0 ? "q=1" : _lang$split$;
        var trimmedLocale = locale.trim();
        var numQ = Number(q.replace(/q ?=/, ""));
        if (isNaN(numQ))
          return [0, trimmedLocale];
        return [numQ, trimmedLocale];
      }).sort(function(_ref, _ref2) {
        var q1 = _ref[0];
        var q2 = _ref2[0];
        return q2 - q1;
      }).flatMap(function(_ref3) {
        var locale = _ref3[1];
        if (locale === "*" && ignoreWildcard)
          return [];
        try {
          return validate(locale) || [];
        } catch (_unused) {
          return [];
        }
      });
    };
  }
});

// node_modules/remix-i18next/build/lib/get-client-locales.js
var require_get_client_locales = __commonJS({
  "node_modules/remix-i18next/build/lib/get-client-locales.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getClientLocales = void 0;
    var intl_parse_accept_language_1 = (init_intl_parse_accept_language_esm(), __toCommonJS(intl_parse_accept_language_esm_exports));
    function getClientLocales(requestOrHeaders) {
      let headers = getHeaders(requestOrHeaders);
      let acceptLanguage = headers.get("Accept-Language");
      if (!acceptLanguage)
        return void 0;
      let locales = (0, intl_parse_accept_language_1.parseAcceptLanguage)(acceptLanguage, {
        validate: Intl.DateTimeFormat.supportedLocalesOf,
        ignoreWildcard: true
      });
      if (locales.length === 0)
        return void 0;
      if (locales.length === 1)
        return locales[0];
      return locales;
    }
    exports.getClientLocales = getClientLocales;
    function getHeaders(requestOrHeaders) {
      if (requestOrHeaders instanceof Request) {
        return requestOrHeaders.headers;
      }
      return requestOrHeaders;
    }
  }
});

// node_modules/remix-i18next/build/server.js
var require_server = __commonJS({
  "node_modules/remix-i18next/build/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemixI18Next = void 0;
    var accept_language_parser_1 = require_accept_language_parser();
    var i18next_1 = require_i18next();
    var get_client_locales_1 = require_get_client_locales();
    var RemixI18Next = class {
      constructor(options) {
        this.options = options;
        this.detector = new LanguageDetector(this.options.detection);
      }
      async getLocale(request3) {
        return this.detector.detect(request3);
      }
      getRouteNamespaces(context) {
        let namespaces = Object.values(context.routeModules).filter((route) => {
          var _a;
          return ((_a = route.handle) === null || _a === void 0 ? void 0 : _a.i18n) !== void 0;
        }).flatMap((route) => {
          let i18n = route.handle.i18n;
          if (typeof i18n === "string")
            return i18n;
          if (!Array.isArray(i18n))
            return [];
          if (i18n.every((ns) => typeof ns === "string"))
            return i18n;
          return [];
        });
        return [...new Set(namespaces)];
      }
      async getFixedT(requestOrLocale, namespaces, options = {}) {
        var _a;
        if (!namespaces || namespaces.length === 0) {
          namespaces = ((_a = this.options.i18next) === null || _a === void 0 ? void 0 : _a.defaultNS) || "translation";
        }
        let [instance, locale] = await Promise.all([
          this.createInstance({
            ...this.options.i18next,
            ...options,
            fallbackNS: namespaces,
            defaultNS: typeof namespaces === "string" ? namespaces : namespaces[0]
          }),
          typeof requestOrLocale === "string" ? requestOrLocale : this.getLocale(requestOrLocale)
        ]);
        await instance.changeLanguage(locale);
        await instance.loadNamespaces(namespaces);
        return instance.getFixedT(locale, namespaces);
      }
      async createInstance(options = {}) {
        let instance = (0, i18next_1.createInstance)();
        if (this.options.backend)
          instance = instance.use(this.options.backend);
        await instance.init(options);
        return instance;
      }
    };
    exports.RemixI18Next = RemixI18Next;
    var LanguageDetector = class {
      constructor(options) {
        this.options = options;
        this.isSessionOnly(options);
        this.isCookieOnly(options);
      }
      isSessionOnly(options) {
        var _a;
        if (((_a = options.order) === null || _a === void 0 ? void 0 : _a.length) === 1 && options.order[0] === "session" && !options.sessionStorage) {
          throw new Error("You need a sessionStorage if you want to only get the locale from the session");
        }
      }
      isCookieOnly(options) {
        var _a;
        if (((_a = options.order) === null || _a === void 0 ? void 0 : _a.length) === 1 && options.order[0] === "cookie" && !options.cookie) {
          throw new Error("You need a cookie if you want to only get the locale from the cookie");
        }
      }
      async detect(request3) {
        var _a;
        let order = (_a = this.options.order) !== null && _a !== void 0 ? _a : [
          "searchParams",
          "cookie",
          "session",
          "header"
        ];
        for (let method of order) {
          let locale = null;
          if (method === "searchParams") {
            locale = await this.fromSearchParams(request3);
          }
          if (method === "cookie") {
            locale = await this.fromCookie(request3);
          }
          if (method === "session") {
            locale = await this.fromSessionStorage(request3);
          }
          if (method === "header") {
            locale = await this.fromHeader(request3);
          }
          if (locale)
            return locale;
        }
        return this.options.fallbackLanguage;
      }
      async fromSearchParams(request3) {
        let url = new URL(request3.url);
        if (!url.searchParams.has("lng"))
          return null;
        return this.fromSupported(url.searchParams.get("lng"));
      }
      async fromCookie(request3) {
        var _a;
        if (!this.options.cookie)
          return null;
        let cookie2 = this.options.cookie;
        let lng = (_a = await cookie2.parse(request3.headers.get("Cookie"))) !== null && _a !== void 0 ? _a : "";
        if (!lng)
          return null;
        return this.fromSupported(lng);
      }
      async fromSessionStorage(request3) {
        var _a;
        if (!this.options.sessionStorage)
          return null;
        let session = await this.options.sessionStorage.getSession(request3.headers.get("Cookie"));
        let lng = session.get((_a = this.options.sessionKey) !== null && _a !== void 0 ? _a : "lng");
        if (!lng)
          return null;
        return this.fromSupported(lng);
      }
      async fromHeader(request3) {
        let locales = (0, get_client_locales_1.getClientLocales)(request3);
        if (!locales)
          return null;
        if (Array.isArray(locales))
          return this.fromSupported(locales.join(","));
        return this.fromSupported(locales);
      }
      fromSupported(language) {
        return (0, accept_language_parser_1.pick)(this.options.supportedLanguages, language !== null && language !== void 0 ? language : this.options.fallbackLanguage, { loose: false }) || (0, accept_language_parser_1.pick)(this.options.supportedLanguages, language !== null && language !== void 0 ? language : this.options.fallbackLanguage, { loose: true });
      }
    };
  }
});

// node_modules/remix-i18next/build/index.js
var require_build = __commonJS({
  "node_modules/remix-i18next/build/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_client2(), exports);
    __exportStar(require_react2(), exports);
    __exportStar(require_server(), exports);
  }
});

// app/entry.client.tsx
init_esm();
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
init_es();

// node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js
init_classCallCheck();
init_createClass();
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0)
          obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
var serializeCookie = function serializeCookie2(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || "/";
  var value = encodeURIComponent(val);
  var str = "".concat(name, "=").concat(value);
  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge))
      throw new Error("maxAge should be a Number");
    str += "; Max-Age=".concat(Math.floor(maxAge));
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=".concat(opt.domain);
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=".concat(opt.path);
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=".concat(opt.expires.toUTCString());
  }
  if (opt.httpOnly)
    str += "; HttpOnly";
  if (opt.secure)
    str += "; Secure";
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
};
var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
    }
    if (domain)
      cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove: function remove(name) {
    this.create(name, "", -1);
  }
};
var cookie$1 = {
  name: "cookie",
  lookup: function lookup(options) {
    var found;
    if (options.lookupCookie && typeof document !== "undefined") {
      var c = cookie.read(options.lookupCookie);
      if (c)
        found = c;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== "undefined") {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};
var querystring = {
  name: "querystring",
  lookup: function lookup2(options) {
    var found;
    if (typeof window !== "undefined") {
      var search = window.location.search;
      if (!window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      var query = search.substring(1);
      var params = query.split("&");
      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf("=");
        if (pos > 0) {
          var key = params[i].substring(0, pos);
          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};
var hasLocalStorageSupport = null;
var localStorageAvailable = function localStorageAvailable2() {
  if (hasLocalStorageSupport !== null)
    return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== "undefined" && window.localStorage !== null;
    var testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: "localStorage",
  lookup: function lookup3(options) {
    var found;
    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng)
        found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage2(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};
var hasSessionStorageSupport = null;
var sessionStorageAvailable = function sessionStorageAvailable2() {
  if (hasSessionStorageSupport !== null)
    return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== "undefined" && window.sessionStorage !== null;
    var testKey = "i18next.translate.boo";
    window.sessionStorage.setItem(testKey, "foo");
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: "sessionStorage",
  lookup: function lookup4(options) {
    var found;
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng)
        found = lng;
    }
    return found;
  },
  cacheUserLanguage: function cacheUserLanguage3(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};
var navigator$1 = {
  name: "navigator",
  lookup: function lookup5(options) {
    var found = [];
    if (typeof navigator !== "undefined") {
      if (navigator.languages) {
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }
    return found.length > 0 ? found : void 0;
  }
};
var htmlTag = {
  name: "htmlTag",
  lookup: function lookup6(options) {
    var found;
    var htmlTag2 = options.htmlTag || (typeof document !== "undefined" ? document.documentElement : null);
    if (htmlTag2 && typeof htmlTag2.getAttribute === "function") {
      found = htmlTag2.getAttribute("lang");
    }
    return found;
  }
};
var path = {
  name: "path",
  lookup: function lookup7(options) {
    var found;
    if (typeof window !== "undefined") {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === "number") {
          if (typeof language[options.lookupFromPathIndex] !== "string") {
            return void 0;
          }
          found = language[options.lookupFromPathIndex].replace("/", "");
        } else {
          found = language[0].replace("/", "");
        }
      }
    }
    return found;
  }
};
var subdomain = {
  name: "subdomain",
  lookup: function lookup8(options) {
    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === "number" ? options.lookupFromSubdomainIndex + 1 : 1;
    var language = typeof window !== "undefined" && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (!language)
      return void 0;
    return language[lookupFromSubdomainIndex];
  }
};
function getDefaults() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"]
  };
}
var Browser = /* @__PURE__ */ function() {
  function Browser2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Browser2);
    this.type = "languageDetector";
    this.detectors = {};
    this.init(services, options);
  }
  _createClass(Browser2, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults());
      if (this.options.lookupFromUrlIndex)
        this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;
      if (!detectionOrder)
        detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function(detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup9 = _this.detectors[detectorName].lookup(_this.options);
          if (lookup9 && typeof lookup9 === "string")
            lookup9 = [lookup9];
          if (lookup9)
            detected = detected.concat(lookup9);
        }
      });
      if (this.services.languageUtils.getBestMatchFromCodes)
        return detected;
      return detected.length > 0 ? detected[0] : null;
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage4(lng, caches) {
      var _this2 = this;
      if (!caches)
        caches = this.options.caches;
      if (!caches)
        return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1)
        return;
      caches.forEach(function(cacheName) {
        if (_this2.detectors[cacheName])
          _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);
  return Browser2;
}();
Browser.type = "languageDetector";

// node_modules/i18next-http-backend/esm/utils.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var arr2 = [];
var each2 = arr2.forEach;
var slice2 = arr2.slice;
function defaults2(obj) {
  each2.call(slice2.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0)
          obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === "function" || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === "object";
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === "function";
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}

// node_modules/i18next-http-backend/esm/request.js
var fetchNode = __toESM(require_getFetch(), 1);
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
var fetchApi;
if (typeof fetch === "function") {
  if (typeof globalThis !== "undefined" && globalThis.fetch) {
    fetchApi = globalThis.fetch;
  } else if (typeof window !== "undefined" && window.fetch) {
    fetchApi = window.fetch;
  } else {
    fetchApi = fetch;
  }
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof globalThis !== "undefined" && globalThis.XMLHttpRequest) {
    XmlHttpRequestApi = globalThis.XMLHttpRequest;
  } else if (typeof window !== "undefined" && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === "function") {
  if (typeof globalThis !== "undefined" && globalThis.ActiveXObject) {
    ActiveXObjectApi = globalThis.ActiveXObject;
  } else if (typeof window !== "undefined" && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (!fetchApi && fetchNode && !XmlHttpRequestApi && !ActiveXObjectApi)
  fetchApi = fetchNode.default || fetchNode;
if (typeof fetchApi !== "function")
  fetchApi = void 0;
var addQueryString = function addQueryString2(url, params) {
  if (params && _typeof2(params) === "object") {
    var queryString = "";
    for (var paramName in params) {
      queryString += "&" + encodeURIComponent(paramName) + "=" + encodeURIComponent(params[paramName]);
    }
    if (!queryString)
      return url;
    url = url + (url.indexOf("?") !== -1 ? "&" : "?") + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt2(url, fetchOptions, callback) {
  fetchApi(url, fetchOptions).then(function(response) {
    if (!response.ok)
      return callback(response.statusText || "Error", {
        status: response.status
      });
    response.text().then(function(data) {
      callback(null, {
        status: response.status,
        data
      });
    }).catch(callback);
  }).catch(callback);
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch2(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers = defaults2({}, typeof options.customHeaders === "function" ? options.customHeaders() : options.customHeaders);
  if (payload)
    headers["Content-Type"] = "application/json";
  var reqOptions = typeof options.requestOptions === "function" ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = defaults2({
    method: payload ? "POST" : "GET",
    body: payload ? options.stringify(payload) : void 0,
    headers
  }, omitFetchOptions ? {} : reqOptions);
  try {
    fetchIt(url, fetchOptions, callback);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf("not implemented") < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function(opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest2(options, url, payload, callback) {
  if (payload && _typeof2(payload) === "object") {
    payload = addQueryString("", payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x;
    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi("MSXML2.XMLHTTP.3.0");
    }
    x.open(payload ? "POST" : "GET", url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    h = typeof h === "function" ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function() {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request2(options, url, payload, callback) {
  if (typeof payload === "function") {
    callback = payload;
    payload = void 0;
  }
  callback = callback || function() {
  };
  if (fetchApi && url.indexOf("file:") !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === "function") {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error("No fetch and no xhr implementation found!"));
};
var request_default = request;

// node_modules/i18next-http-backend/esm/index.js
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getDefaults2 = function getDefaults3() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    allowMultiLoading: false,
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return _defineProperty({}, key, fallbackValue || "");
    },
    request: request_default,
    reloadInterval: typeof window !== "undefined" ? false : 60 * 60 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
};
var Backend = function() {
  function Backend2(services) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck2(this, Backend2);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = "backend";
    this.init(services, options, allOptions);
  }
  _createClass2(Backend2, [{
    key: "init",
    value: function init(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      this.services = services;
      this.options = defaults2(options, this.options || {}, getDefaults2());
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        setInterval(function() {
          return _this.reload();
        }, this.options.reloadInterval);
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      this._readAny(languages, languages, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read2(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === "function") {
        loadPath = this.options.loadPath(languages, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function(resolvedLoadPath) {
        if (!resolvedLoadPath)
          return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages.join("+"),
          ns: namespaces.join("+")
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this3 = this;
      this.options.request(this.options, url, void 0, function(err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status))
          return callback("failed loading " + url + "; status code: " + res.status, true);
        if (res && res.status >= 400 && res.status < 500)
          return callback("failed loading " + url + "; status code: " + res.status, false);
        if (!res && err && err.message && err.message.indexOf("Failed to fetch") > -1)
          return callback("failed loading " + url + ": " + err.message, true);
        if (err)
          return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === "string") {
            ret = _this3.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = "failed parsing " + url + " to json";
        }
        if (parseErr)
          return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create2(languages, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath)
        return;
      if (typeof languages === "string")
        languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function(lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === "function") {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function(data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages.length) {
            if (callback)
              callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services, backendConnector = _this$services.backendConnector, languageUtils = _this$services.languageUtils, logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === "cimode")
        return;
      var toLoad = [];
      var append = function append2(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function(l) {
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload)
        this.allOptions.preload.forEach(function(l) {
          return append(l);
        });
      toLoad.forEach(function(lng) {
        _this5.allOptions.ns.forEach(function(ns) {
          backendConnector.read(lng, ns, "read", null, null, function(err, data) {
            if (err)
              logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data)
              logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
  return Backend2;
}();
Backend.type = "backend";
var esm_default = Backend;

// app/i18n/initialize-client-i18n.ts
init_es();
var import_remix_i18next = __toESM(require_build());

// app/i18n/i18next.config.ts
var env = is_browser_default() ? window.ENV : process.env;
var DEFAULT_LOCALE = env.DEFAULT_LOCALE ?? "en";
var i18Config = {
  fallbackLanguage: DEFAULT_LOCALE,
  supportedLanguages: [DEFAULT_LOCALE],
  defaultNS: ["common", "auth", "organization", "profile", "subscription"],
  react: { useSuspense: false }
};
var i18next_config_default = i18Config;

// app/i18n/initialize-client-i18n.ts
function initializeClientI18n() {
  return i18next_default.use(initReactI18next).use(Browser).use(esm_default).init({
    ...i18next_config_default,
    ns: [...i18next_config_default.defaultNS, ...(0, import_remix_i18next.getInitialNamespaces)()],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    detection: {
      order: ["htmlTag"],
      caches: []
    }
  }).then(() => i18next_default);
}
var initialize_client_i18n_default = initializeClientI18n;

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var hydrate = () => {
  (0, import_react2.startTransition)(() => {
    initialize_client_i18n_default().then((i18next) => {
      const App = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(I18nextProvider, {
          i18n: i18next,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
            fileName: "app/entry.client.tsx",
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/entry.client.tsx",
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this);
      if (false) {
        null.hydrate(App, document);
      } else {
        (0, import_client.hydrateRoot)(document, App);
      }
    });
  });
};
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
loadSelectedTheme();
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/entry.client-NMK42HVB.js.map
