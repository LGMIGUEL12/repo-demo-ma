import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "/build/_shared/chunk-CUPSZOF3.js";

// node-modules-polyfills:child_process
var child_process_exports = {};
__export(child_process_exports, {
  default: () => child_process_default
});
var child_process_default;
var init_child_process = __esm({
  "node-modules-polyfills:child_process"() {
    child_process_default = {};
  }
});

// node-modules-polyfills-commonjs:child_process
var require_child_process = __commonJS({
  "node-modules-polyfills-commonjs:child_process"(exports, module) {
    var polyfill = (init_child_process(), __toCommonJS(child_process_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node-modules-polyfills:net
var net_exports = {};
__export(net_exports, {
  default: () => net_default
});
var net_default;
var init_net = __esm({
  "node-modules-polyfills:net"() {
    net_default = {};
  }
});

// node-modules-polyfills-commonjs:net
var require_net = __commonJS({
  "node-modules-polyfills-commonjs:net"(exports, module) {
    var polyfill = (init_net(), __toCommonJS(net_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

// node-modules-polyfills:tls
var tls_exports = {};
__export(tls_exports, {
  default: () => tls_default
});
var tls_default;
var init_tls = __esm({
  "node-modules-polyfills:tls"() {
    tls_default = {};
  }
});

// node-modules-polyfills-commonjs:tls
var require_tls = __commonJS({
  "node-modules-polyfills-commonjs:tls"(exports, module) {
    var polyfill = (init_tls(), __toCommonJS(tls_exports));
    if (polyfill && polyfill.default) {
      module.exports = polyfill.default;
      for (let k in polyfill) {
        module.exports[k] = polyfill[k];
      }
    } else if (polyfill) {
      module.exports = polyfill;
    }
  }
});

export {
  require_child_process,
  require_net,
  require_tls
};
//# sourceMappingURL=/build/_shared/chunk-BQRAC5F3.js.map
