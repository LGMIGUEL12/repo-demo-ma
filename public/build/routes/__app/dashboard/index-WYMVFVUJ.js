import {
  AppContainer_default,
  AppHeader_default
} from "/build/_shared/chunk-HGBSDZA3.js";
import "/build/_shared/chunk-BHF276FC.js";
import "/build/_shared/chunk-S3UUNDGC.js";
import "/build/_shared/chunk-NMWHWOJM.js";
import "/build/_shared/chunk-ZVJCBF5E.js";
import "/build/_shared/chunk-OQCGFTRH.js";
import "/build/_shared/chunk-W4DXIIZX.js";
import "/build/_shared/chunk-T2CF575W.js";
import "/build/_shared/chunk-AJBLUEBX.js";
import "/build/_shared/chunk-CCK66CUU.js";
import "/build/_shared/chunk-XTL7KJXM.js";
import "/build/_shared/chunk-CSNF7QXE.js";
import "/build/_shared/chunk-XQJIPBYI.js";
import "/build/_shared/chunk-KMGI37Q6.js";
import "/build/_shared/chunk-GYXQQBXM.js";
import "/build/_shared/chunk-6N2R5K5U.js";
import "/build/_shared/chunk-5CBDJCHW.js";
import "/build/_shared/chunk-I5LWYJ5L.js";
import "/build/_shared/chunk-6ZZPVUWI.js";
import "/build/_shared/chunk-2RQ7OU4V.js";
import {
  ClientOnly_default
} from "/build/_shared/chunk-7RVK24SM.js";
import "/build/_shared/chunk-UJJUUA64.js";
import "/build/_shared/chunk-R32XIEQ6.js";
import {
  require_react_dom
} from "/build/_shared/chunk-CRZAZ7IR.js";
import "/build/_shared/chunk-TXT3OLG5.js";
import {
  nr
} from "/build/_shared/chunk-CXJ2SC35.js";
import "/build/_shared/chunk-L5VGBSV3.js";
import "/build/_shared/chunk-BNRSGPT3.js";
import "/build/_shared/chunk-6E6B4MC5.js";
import "/build/_shared/chunk-KHW4CDLX.js";
import "/build/_shared/chunk-52KVLBBL.js";
import "/build/_shared/chunk-VCZGRDVP.js";
import {
  ArrowSmallDownIcon_default,
  ArrowSmallUpIcon_default,
  Bars2Icon_default
} from "/build/_shared/chunk-4PMGBJWS.js";
import {
  Heading_default
} from "/build/_shared/chunk-ISSCYSF5.js";
import {
  require_prop_types
} from "/build/_shared/chunk-JLCRG65W.js";
import {
  require_classnames
} from "/build/_shared/chunk-DN742LHR.js";
import {
  Trans,
  init_es
} from "/build/_shared/chunk-G4KZDRB7.js";
import "/build/_shared/chunk-WULCHIKQ.js";
import "/build/_shared/chunk-WIOFJORR.js";
import "/build/_shared/chunk-A4KF3ELC.js";
import "/build/_shared/chunk-BCUDKLQK.js";
import {
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

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject2;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal2 = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    module.exports = freeGlobal2;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal2 = require_freeGlobal();
    var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
    module.exports = root2;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root2 = require_root();
    var Symbol3 = root2.Symbol;
    module.exports = Symbol3;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    var nativeObjectToString2 = objectProto2.toString;
    var symToStringTag2 = Symbol3 ? Symbol3.toStringTag : void 0;
    function getRawTag2(value) {
      var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
      try {
        value[symToStringTag2] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString2.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag2] = tag;
        } else {
          delete value[symToStringTag2];
        }
      }
      return result;
    }
    module.exports = getRawTag2;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto2 = Object.prototype;
    var nativeObjectToString2 = objectProto2.toString;
    function objectToString2(value) {
      return nativeObjectToString2.call(value);
    }
    module.exports = objectToString2;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var getRawTag2 = require_getRawTag();
    var objectToString2 = require_objectToString();
    var nullTag2 = "[object Null]";
    var undefinedTag2 = "[object Undefined]";
    var symToStringTag2 = Symbol3 ? Symbol3.toStringTag : void 0;
    function baseGetTag2(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag2 : nullTag2;
      }
      return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag2(value) : objectToString2(value);
    }
    module.exports = baseGetTag2;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObject2 = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction2(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag2(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction2;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root2 = require_root();
    var coreJsData = root2["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isMasked = require_isMasked();
    var isObject2 = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto2 = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root2 = require_root();
    var Map2 = getNative(root2, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty2.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map3, key) {
      var data = map3.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root2 = require_root();
    var Uint8Array = root2.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map3) {
      var index = -1, result = Array(map3.size);
      map3.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag2 = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag2:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto2 = Object.prototype;
    var propertyIsEnumerable = objectProto2.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike2(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike2;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike2(value) && baseGetTag2(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike2 = require_isObjectLike();
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    var propertyIsEnumerable = objectProto2.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root2 = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike2 = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag2(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal2 = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto2 = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty2.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction2 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root2 = require_root();
    var DataView2 = getNative(root2, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root2 = require_root();
    var Promise2 = getNative(root2, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root2 = require_root();
    var Set2 = getNative(root2, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root2 = require_root();
    var WeakMap = getNative(root2, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag2 = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag2;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag2(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto2 = Object.prototype;
    var hasOwnProperty2 = objectProto2.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike2 = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject2 = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject2(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var symbolTag2 = "[object Symbol]";
    function isSymbol2(value) {
      return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag2;
    }
    module.exports = isSymbol2;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol2 = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol2(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    function memoize3(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize3.Cache || MapCache)();
      return memoized;
    }
    memoize3.Cache = MapCache;
    module.exports = memoize3;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize3 = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize3(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number3, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number3 || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol2 = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol3 ? Symbol3.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol2(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol2 = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol2(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path2) {
      path2 = castPath(path2, object);
      var index = 0, length = path2.length;
      while (object != null && index < length) {
        object = object[toKey(path2[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get2(object, path2, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path2);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path2, hasFunc) {
      path2 = castPath(path2, object);
      var index = -1, length = path2.length, result = false;
      while (++index < length) {
        var key = toKey(path2[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path2) {
      return object != null && hasPath(object, path2, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get2 = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path2, srcValue) {
      if (isKey(path2) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path2), srcValue);
      }
      return function(object) {
        var objValue = get2(object, path2);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path2) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity7(value) {
      return value;
    }
    module.exports = identity7;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path2) {
      return function(object) {
        return baseGet(object, path2);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path2) {
      return isKey(path2) ? baseProperty(toKey(path2)) : basePropertyDeep(path2);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity7 = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity7;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set2 = iteratee ? null : createSet(array);
        if (set2) {
          return setToArray(set2);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniqBy.js
var require_uniqBy = __commonJS({
  "node_modules/lodash/uniqBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseUniq = require_baseUniq();
    function uniqBy(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    module.exports = uniqBy;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_castSlice.js
var require_castSlice = __commonJS({
  "node_modules/lodash/_castSlice.js"(exports, module) {
    var baseSlice = require_baseSlice();
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    module.exports = castSlice;
  }
});

// node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "node_modules/lodash/_hasUnicode.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
  }
});

// node_modules/lodash/_asciiToArray.js
var require_asciiToArray = __commonJS({
  "node_modules/lodash/_asciiToArray.js"(exports, module) {
    function asciiToArray(string) {
      return string.split("");
    }
    module.exports = asciiToArray;
  }
});

// node_modules/lodash/_unicodeToArray.js
var require_unicodeToArray = __commonJS({
  "node_modules/lodash/_unicodeToArray.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    module.exports = unicodeToArray;
  }
});

// node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  "node_modules/lodash/_stringToArray.js"(exports, module) {
    var asciiToArray = require_asciiToArray();
    var hasUnicode = require_hasUnicode();
    var unicodeToArray = require_unicodeToArray();
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
  }
});

// node_modules/lodash/_createCaseFirst.js
var require_createCaseFirst = __commonJS({
  "node_modules/lodash/_createCaseFirst.js"(exports, module) {
    var castSlice = require_castSlice();
    var hasUnicode = require_hasUnicode();
    var stringToArray = require_stringToArray();
    var toString = require_toString();
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    module.exports = createCaseFirst;
  }
});

// node_modules/lodash/upperFirst.js
var require_upperFirst = __commonJS({
  "node_modules/lodash/upperFirst.js"(exports, module) {
    var createCaseFirst = require_createCaseFirst();
    var upperFirst = createCaseFirst("toUpperCase");
    module.exports = upperFirst;
  }
});

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber3(value) {
      return typeof value == "number" || isObjectLike2(value) && baseGetTag2(value) == numberTag;
    }
    module.exports = isNumber3;
  }
});

// node_modules/lodash/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/lodash/isNaN.js"(exports, module) {
    var isNumber3 = require_isNumber();
    function isNaN2(value) {
      return isNumber3(value) && value != +value;
    }
    module.exports = isNaN2;
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike2 = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag;
    }
    module.exports = isString;
  }
});

// node_modules/lodash/isNil.js
var require_isNil = __commonJS({
  "node_modules/lodash/isNil.js"(exports, module) {
    function isNil(value) {
      return value == null;
    }
    module.exports = isNil;
  }
});

// node_modules/fast-equals/dist/fast-equals.js
var require_fast_equals = __commonJS({
  "node_modules/fast-equals/dist/fast-equals.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2["fast-equals"] = {}));
    })(exports, function(exports2) {
      "use strict";
      var HAS_WEAKSET_SUPPORT = typeof WeakSet === "function";
      var keys = Object.keys;
      function sameValueZeroEqual(a2, b) {
        return a2 === b || a2 !== a2 && b !== b;
      }
      function isPlainObject(value) {
        return value.constructor === Object || value.constructor == null;
      }
      function isPromiseLike(value) {
        return !!value && typeof value.then === "function";
      }
      function isReactElement(value) {
        return !!(value && value.$$typeof);
      }
      function getNewCacheFallback() {
        var values = [];
        return {
          add: function(value) {
            values.push(value);
          },
          has: function(value) {
            return values.indexOf(value) !== -1;
          }
        };
      }
      var getNewCache = function(canUseWeakMap) {
        if (canUseWeakMap) {
          return function _getNewCache() {
            return /* @__PURE__ */ new WeakSet();
          };
        }
        return getNewCacheFallback;
      }(HAS_WEAKSET_SUPPORT);
      function createCircularEqualCreator(isEqual) {
        return function createCircularEqual(comparator) {
          var _comparator = isEqual || comparator;
          return function circularEqual(a2, b, cache) {
            if (cache === void 0) {
              cache = getNewCache();
            }
            var isCacheableA = !!a2 && typeof a2 === "object";
            var isCacheableB = !!b && typeof b === "object";
            if (isCacheableA || isCacheableB) {
              var hasA = isCacheableA && cache.has(a2);
              var hasB = isCacheableB && cache.has(b);
              if (hasA || hasB) {
                return hasA && hasB;
              }
              if (isCacheableA) {
                cache.add(a2);
              }
              if (isCacheableB) {
                cache.add(b);
              }
            }
            return _comparator(a2, b, cache);
          };
        };
      }
      function areArraysEqual(a2, b, isEqual, meta2) {
        var index = a2.length;
        if (b.length !== index) {
          return false;
        }
        while (index-- > 0) {
          if (!isEqual(a2[index], b[index], meta2)) {
            return false;
          }
        }
        return true;
      }
      function areMapsEqual(a2, b, isEqual, meta2) {
        var isValueEqual = a2.size === b.size;
        if (isValueEqual && a2.size) {
          var matchedIndices_1 = {};
          a2.forEach(function(aValue, aKey) {
            if (isValueEqual) {
              var hasMatch_1 = false;
              var matchIndex_1 = 0;
              b.forEach(function(bValue, bKey) {
                if (!hasMatch_1 && !matchedIndices_1[matchIndex_1]) {
                  hasMatch_1 = isEqual(aKey, bKey, meta2) && isEqual(aValue, bValue, meta2);
                  if (hasMatch_1) {
                    matchedIndices_1[matchIndex_1] = true;
                  }
                }
                matchIndex_1++;
              });
              isValueEqual = hasMatch_1;
            }
          });
        }
        return isValueEqual;
      }
      var OWNER = "_owner";
      var hasOwnProperty2 = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
      function areObjectsEqual(a2, b, isEqual, meta2) {
        var keysA = keys(a2);
        var index = keysA.length;
        if (keys(b).length !== index) {
          return false;
        }
        if (index) {
          var key = void 0;
          while (index-- > 0) {
            key = keysA[index];
            if (key === OWNER) {
              var reactElementA = isReactElement(a2);
              var reactElementB = isReactElement(b);
              if ((reactElementA || reactElementB) && reactElementA !== reactElementB) {
                return false;
              }
            }
            if (!hasOwnProperty2(b, key) || !isEqual(a2[key], b[key], meta2)) {
              return false;
            }
          }
        }
        return true;
      }
      function areRegExpsEqual(a2, b) {
        return a2.source === b.source && a2.global === b.global && a2.ignoreCase === b.ignoreCase && a2.multiline === b.multiline && a2.unicode === b.unicode && a2.sticky === b.sticky && a2.lastIndex === b.lastIndex;
      }
      function areSetsEqual(a2, b, isEqual, meta2) {
        var isValueEqual = a2.size === b.size;
        if (isValueEqual && a2.size) {
          var matchedIndices_2 = {};
          a2.forEach(function(aValue) {
            if (isValueEqual) {
              var hasMatch_2 = false;
              var matchIndex_2 = 0;
              b.forEach(function(bValue) {
                if (!hasMatch_2 && !matchedIndices_2[matchIndex_2]) {
                  hasMatch_2 = isEqual(aValue, bValue, meta2);
                  if (hasMatch_2) {
                    matchedIndices_2[matchIndex_2] = true;
                  }
                }
                matchIndex_2++;
              });
              isValueEqual = hasMatch_2;
            }
          });
        }
        return isValueEqual;
      }
      var HAS_MAP_SUPPORT = typeof Map === "function";
      var HAS_SET_SUPPORT = typeof Set === "function";
      function createComparator(createIsEqual) {
        var isEqual = typeof createIsEqual === "function" ? createIsEqual(comparator) : comparator;
        function comparator(a2, b, meta2) {
          if (a2 === b) {
            return true;
          }
          if (a2 && b && typeof a2 === "object" && typeof b === "object") {
            if (isPlainObject(a2) && isPlainObject(b)) {
              return areObjectsEqual(a2, b, isEqual, meta2);
            }
            var aShape = Array.isArray(a2);
            var bShape = Array.isArray(b);
            if (aShape || bShape) {
              return aShape === bShape && areArraysEqual(a2, b, isEqual, meta2);
            }
            aShape = a2 instanceof Date;
            bShape = b instanceof Date;
            if (aShape || bShape) {
              return aShape === bShape && sameValueZeroEqual(a2.getTime(), b.getTime());
            }
            aShape = a2 instanceof RegExp;
            bShape = b instanceof RegExp;
            if (aShape || bShape) {
              return aShape === bShape && areRegExpsEqual(a2, b);
            }
            if (isPromiseLike(a2) || isPromiseLike(b)) {
              return a2 === b;
            }
            if (HAS_MAP_SUPPORT) {
              aShape = a2 instanceof Map;
              bShape = b instanceof Map;
              if (aShape || bShape) {
                return aShape === bShape && areMapsEqual(a2, b, isEqual, meta2);
              }
            }
            if (HAS_SET_SUPPORT) {
              aShape = a2 instanceof Set;
              bShape = b instanceof Set;
              if (aShape || bShape) {
                return aShape === bShape && areSetsEqual(a2, b, isEqual, meta2);
              }
            }
            return areObjectsEqual(a2, b, isEqual, meta2);
          }
          return a2 !== a2 && b !== b;
        }
        return comparator;
      }
      var deepEqual2 = createComparator();
      var shallowEqual2 = createComparator(function() {
        return sameValueZeroEqual;
      });
      var circularDeepEqual = createComparator(createCircularEqualCreator());
      var circularShallowEqual = createComparator(createCircularEqualCreator(sameValueZeroEqual));
      exports2.circularDeepEqual = circularDeepEqual;
      exports2.circularShallowEqual = circularShallowEqual;
      exports2.createCustomEqual = createComparator;
      exports2.deepEqual = deepEqual2;
      exports2.sameValueZeroEqual = sameValueZeroEqual;
      exports2.shallowEqual = shallowEqual2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/dom-helpers/class/hasClass.js
var require_hasClass = __commonJS({
  "node_modules/dom-helpers/class/hasClass.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports.default = hasClass;
    function hasClass(element, className) {
      if (element.classList)
        return !!className && element.classList.contains(className);
      else
        return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }
    module.exports = exports["default"];
  }
});

// node_modules/dom-helpers/class/addClass.js
var require_addClass = __commonJS({
  "node_modules/dom-helpers/class/addClass.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    exports.__esModule = true;
    exports.default = addClass;
    var _hasClass = _interopRequireDefault(require_hasClass());
    function addClass(element, className) {
      if (element.classList)
        element.classList.add(className);
      else if (!(0, _hasClass.default)(element, className))
        if (typeof element.className === "string")
          element.className = element.className + " " + className;
        else
          element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
    module.exports = exports["default"];
  }
});

// node_modules/dom-helpers/class/removeClass.js
var require_removeClass = __commonJS({
  "node_modules/dom-helpers/class/removeClass.js"(exports, module) {
    "use strict";
    function replaceClassName(origClass, classToRemove) {
      return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
    module.exports = function removeClass(element, className) {
      if (element.classList)
        element.classList.remove(className);
      else if (typeof element.className === "string")
        element.className = replaceClassName(element.className, className);
      else
        element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
    };
  }
});

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es_exports = {};
__export(react_lifecycles_compat_es_exports, {
  polyfill: () => polyfill
});
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
function polyfill(Component6) {
  var prototype = Component6.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component6.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component6;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component6.displayName || Component6.name;
    var newApiName = typeof Component6.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
    );
  }
  if (typeof Component6.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component6;
}
var init_react_lifecycles_compat_es = __esm({
  "node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js"() {
    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;
  }
});

// node_modules/react-transition-group/utils/PropTypes.js
var require_PropTypes = __commonJS({
  "node_modules/react-transition-group/utils/PropTypes.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.classNamesShape = exports.timeoutsShape = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var timeoutsShape = true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number,
      appear: _propTypes.default.number
    }).isRequired]) : null;
    exports.timeoutsShape = timeoutsShape;
    var classNamesShape = true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
      enter: _propTypes.default.string,
      exit: _propTypes.default.string,
      active: _propTypes.default.string
    }), _propTypes.default.shape({
      enter: _propTypes.default.string,
      enterDone: _propTypes.default.string,
      enterActive: _propTypes.default.string,
      exit: _propTypes.default.string,
      exitDone: _propTypes.default.string,
      exitActive: _propTypes.default.string
    })]) : null;
    exports.classNamesShape = classNamesShape;
  }
});

// node_modules/react-transition-group/Transition.js
var require_Transition = __commonJS({
  "node_modules/react-transition-group/Transition.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;
    var PropTypes4 = _interopRequireWildcard(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _reactLifecyclesCompat = (init_react_lifecycles_compat_es(), __toCommonJS(react_lifecycles_compat_es_exports));
    var _PropTypes = require_PropTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _objectWithoutPropertiesLoose13(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var UNMOUNTED = "unmounted";
    exports.UNMOUNTED = UNMOUNTED;
    var EXITED = "exited";
    exports.EXITED = EXITED;
    var ENTERING = "entering";
    exports.ENTERING = ENTERING;
    var ENTERED = "entered";
    exports.ENTERED = ENTERED;
    var EXITING = "exiting";
    exports.EXITING = EXITING;
    var Transition2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(Transition3, _React$Component);
      function Transition3(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context.transitionGroup;
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }
        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }
      var _proto = Transition3.prototype;
      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: null
        };
      };
      Transition3.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }
        return null;
      };
      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
          var status = this.state.status;
          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }
        this.updateStatus(false, nextStatus);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };
      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== "number") {
          exit = timeout.exit;
          enter = timeout.enter;
          appear = timeout.appear !== void 0 ? timeout.appear : enter;
        }
        return {
          exit,
          enter,
          appear
        };
      };
      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }
        if (nextStatus !== null) {
          this.cancelNextCallback();
          var node = _reactDom.default.findDOMNode(this);
          if (nextStatus === ENTERING) {
            this.performEnter(node, mounting);
          } else {
            this.performExit(node);
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };
      _proto.performEnter = function performEnter(node, mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
        if (!mounting && !enter) {
          this.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(node);
          });
          return;
        }
        this.props.onEnter(node, appearing);
        this.safeSetState({
          status: ENTERING
        }, function() {
          _this2.props.onEntering(node, appearing);
          _this2.onTransitionEnd(node, enterTimeout, function() {
            _this2.safeSetState({
              status: ENTERED
            }, function() {
              _this2.props.onEntered(node, appearing);
            });
          });
        });
      };
      _proto.performExit = function performExit(node) {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        if (!exit) {
          this.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(node);
          });
          return;
        }
        this.props.onExit(node);
        this.safeSetState({
          status: EXITING
        }, function() {
          _this3.props.onExiting(node);
          _this3.onTransitionEnd(node, timeouts.exit, function() {
            _this3.safeSetState({
              status: EXITED
            }, function() {
              _this3.props.onExited(node);
            });
          });
        });
      };
      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };
      _proto.safeSetState = function safeSetState(nextState, callback) {
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };
      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };
        this.nextCallback.cancel = function() {
          active = false;
        };
        return this.nextCallback;
      };
      _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
        this.setNextCallback(handler);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      };
      _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
          return null;
        }
        var _this$props = this.props, children = _this$props.children, childProps = _objectWithoutPropertiesLoose13(_this$props, ["children"]);
        delete childProps.in;
        delete childProps.mountOnEnter;
        delete childProps.unmountOnExit;
        delete childProps.appear;
        delete childProps.enter;
        delete childProps.exit;
        delete childProps.timeout;
        delete childProps.addEndListener;
        delete childProps.onEnter;
        delete childProps.onEntering;
        delete childProps.onEntered;
        delete childProps.onExit;
        delete childProps.onExiting;
        delete childProps.onExited;
        if (typeof children === "function") {
          return children(status, childProps);
        }
        var child = _react.default.Children.only(children);
        return _react.default.cloneElement(child, childProps);
      };
      return Transition3;
    }(_react.default.Component);
    Transition2.contextTypes = {
      transitionGroup: PropTypes4.object
    };
    Transition2.childContextTypes = {
      transitionGroup: function transitionGroup() {
      }
    };
    Transition2.propTypes = true ? {
      children: PropTypes4.oneOfType([PropTypes4.func.isRequired, PropTypes4.element.isRequired]).isRequired,
      in: PropTypes4.bool,
      mountOnEnter: PropTypes4.bool,
      unmountOnExit: PropTypes4.bool,
      appear: PropTypes4.bool,
      enter: PropTypes4.bool,
      exit: PropTypes4.bool,
      timeout: function timeout(props) {
        var pt = _PropTypes.timeoutsShape;
        if (!props.addEndListener)
          pt = pt.isRequired;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [props].concat(args));
      },
      addEndListener: PropTypes4.func,
      onEnter: PropTypes4.func,
      onEntering: PropTypes4.func,
      onEntered: PropTypes4.func,
      onExit: PropTypes4.func,
      onExiting: PropTypes4.func,
      onExited: PropTypes4.func
    } : {};
    function noop() {
    }
    Transition2.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition2.UNMOUNTED = 0;
    Transition2.EXITED = 1;
    Transition2.ENTERING = 2;
    Transition2.ENTERED = 3;
    Transition2.EXITING = 4;
    var _default = (0, _reactLifecyclesCompat.polyfill)(Transition2);
    exports.default = _default;
  }
});

// node_modules/react-transition-group/CSSTransition.js
var require_CSSTransition = __commonJS({
  "node_modules/react-transition-group/CSSTransition.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports.default = void 0;
    var PropTypes4 = _interopRequireWildcard(require_prop_types());
    var _addClass = _interopRequireDefault(require_addClass());
    var _removeClass = _interopRequireDefault(require_removeClass());
    var _react = _interopRequireDefault(require_react());
    var _Transition = _interopRequireDefault(require_Transition());
    var _PropTypes = require_PropTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _extends23() {
      _extends23 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends23.apply(this, arguments);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var addClass = function addClass2(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c2) {
        return (0, _addClass.default)(node, c2);
      });
    };
    var removeClass = function removeClass2(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c2) {
        return (0, _removeClass.default)(node, c2);
      });
    };
    var CSSTransition = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(CSSTransition2, _React$Component);
      function CSSTransition2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.onEnter = function(node, appearing) {
          var _this$getClassNames = _this.getClassNames(appearing ? "appear" : "enter"), className = _this$getClassNames.className;
          _this.removeClasses(node, "exit");
          addClass(node, className);
          if (_this.props.onEnter) {
            _this.props.onEnter(node, appearing);
          }
        };
        _this.onEntering = function(node, appearing) {
          var _this$getClassNames2 = _this.getClassNames(appearing ? "appear" : "enter"), activeClassName = _this$getClassNames2.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onEntering) {
            _this.props.onEntering(node, appearing);
          }
        };
        _this.onEntered = function(node, appearing) {
          var appearClassName = _this.getClassNames("appear").doneClassName;
          var enterClassName = _this.getClassNames("enter").doneClassName;
          var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;
          _this.removeClasses(node, appearing ? "appear" : "enter");
          addClass(node, doneClassName);
          if (_this.props.onEntered) {
            _this.props.onEntered(node, appearing);
          }
        };
        _this.onExit = function(node) {
          var _this$getClassNames3 = _this.getClassNames("exit"), className = _this$getClassNames3.className;
          _this.removeClasses(node, "appear");
          _this.removeClasses(node, "enter");
          addClass(node, className);
          if (_this.props.onExit) {
            _this.props.onExit(node);
          }
        };
        _this.onExiting = function(node) {
          var _this$getClassNames4 = _this.getClassNames("exit"), activeClassName = _this$getClassNames4.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onExiting) {
            _this.props.onExiting(node);
          }
        };
        _this.onExited = function(node) {
          var _this$getClassNames5 = _this.getClassNames("exit"), doneClassName = _this$getClassNames5.doneClassName;
          _this.removeClasses(node, "exit");
          addClass(node, doneClassName);
          if (_this.props.onExited) {
            _this.props.onExited(node);
          }
        };
        _this.getClassNames = function(type) {
          var classNames22 = _this.props.classNames;
          var isStringClassNames = typeof classNames22 === "string";
          var prefix = isStringClassNames && classNames22 ? classNames22 + "-" : "";
          var className = isStringClassNames ? prefix + type : classNames22[type];
          var activeClassName = isStringClassNames ? className + "-active" : classNames22[type + "Active"];
          var doneClassName = isStringClassNames ? className + "-done" : classNames22[type + "Done"];
          return {
            className,
            activeClassName,
            doneClassName
          };
        };
        return _this;
      }
      var _proto = CSSTransition2.prototype;
      _proto.removeClasses = function removeClasses(node, type) {
        var _this$getClassNames6 = this.getClassNames(type), className = _this$getClassNames6.className, activeClassName = _this$getClassNames6.activeClassName, doneClassName = _this$getClassNames6.doneClassName;
        className && removeClass(node, className);
        activeClassName && removeClass(node, activeClassName);
        doneClassName && removeClass(node, doneClassName);
      };
      _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
        if (className) {
          node && node.scrollTop;
          addClass(node, className);
        }
      };
      _proto.render = function render() {
        var props = _extends23({}, this.props);
        delete props.classNames;
        return _react.default.createElement(_Transition.default, _extends23({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };
      return CSSTransition2;
    }(_react.default.Component);
    CSSTransition.defaultProps = {
      classNames: ""
    };
    CSSTransition.propTypes = true ? _extends23({}, _Transition.default.propTypes, {
      classNames: _PropTypes.classNamesShape,
      onEnter: PropTypes4.func,
      onEntering: PropTypes4.func,
      onEntered: PropTypes4.func,
      onExit: PropTypes4.func,
      onExiting: PropTypes4.func,
      onExited: PropTypes4.func
    }) : {};
    var _default = CSSTransition;
    exports.default = _default;
    module.exports = exports["default"];
  }
});

// node_modules/react-transition-group/utils/ChildMapping.js
var require_ChildMapping = __commonJS({
  "node_modules/react-transition-group/utils/ChildMapping.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.getChildMapping = getChildMapping;
    exports.mergeChildMappings = mergeChildMappings;
    exports.getInitialChildMapping = getInitialChildMapping;
    exports.getNextChildMapping = getNextChildMapping;
    var _react = require_react();
    function getChildMapping(children, mapFn) {
      var mapper = function mapper2(child) {
        return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
      };
      var result = /* @__PURE__ */ Object.create(null);
      if (children)
        _react.Children.map(children, function(c2) {
          return c2;
        }).forEach(function(child) {
          result[child.key] = mapper(child);
        });
      return result;
    }
    function mergeChildMappings(prev, next) {
      prev = prev || {};
      next = next || {};
      function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
      }
      var nextKeysPending = /* @__PURE__ */ Object.create(null);
      var pendingKeys = [];
      for (var prevKey in prev) {
        if (prevKey in next) {
          if (pendingKeys.length) {
            nextKeysPending[prevKey] = pendingKeys;
            pendingKeys = [];
          }
        } else {
          pendingKeys.push(prevKey);
        }
      }
      var i;
      var childMapping = {};
      for (var nextKey in next) {
        if (nextKeysPending[nextKey]) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            var pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
          }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
      }
      for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
      }
      return childMapping;
    }
    function getProp(child, prop, props) {
      return props[prop] != null ? props[prop] : child.props[prop];
    }
    function getInitialChildMapping(props, onExited) {
      return getChildMapping(props.children, function(child) {
        return (0, _react.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          appear: getProp(child, "appear", props),
          enter: getProp(child, "enter", props),
          exit: getProp(child, "exit", props)
        });
      });
    }
    function getNextChildMapping(nextProps, prevChildMapping, onExited) {
      var nextChildMapping = getChildMapping(nextProps.children);
      var children = mergeChildMappings(prevChildMapping, nextChildMapping);
      Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!(0, _react.isValidElement)(child))
          return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in;
        if (hasNext && (!hasPrev || isLeaving)) {
          children[key] = (0, _react.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            in: true,
            exit: getProp(child, "exit", nextProps),
            enter: getProp(child, "enter", nextProps)
          });
        } else if (!hasNext && hasPrev && !isLeaving) {
          children[key] = (0, _react.cloneElement)(child, {
            in: false
          });
        } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
          children[key] = (0, _react.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            in: prevChild.props.in,
            exit: getProp(child, "exit", nextProps),
            enter: getProp(child, "enter", nextProps)
          });
        }
      });
      return children;
    }
  }
});

// node_modules/react-transition-group/TransitionGroup.js
var require_TransitionGroup = __commonJS({
  "node_modules/react-transition-group/TransitionGroup.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _reactLifecyclesCompat = (init_react_lifecycles_compat_es(), __toCommonJS(react_lifecycles_compat_es_exports));
    var _ChildMapping = require_ChildMapping();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutPropertiesLoose13(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _extends23() {
      _extends23 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends23.apply(this, arguments);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    function _assertThisInitialized18(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    var values = Object.values || function(obj) {
      return Object.keys(obj).map(function(k2) {
        return obj[k2];
      });
    };
    var defaultProps2 = {
      component: "div",
      childFactory: function childFactory(child) {
        return child;
      }
    };
    var TransitionGroup2 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(TransitionGroup3, _React$Component);
      function TransitionGroup3(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind(_assertThisInitialized18(_assertThisInitialized18(_this)));
        _this.state = {
          handleExited,
          firstRender: true
        };
        return _this;
      }
      var _proto = TransitionGroup3.prototype;
      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: {
            isMounting: !this.appeared
          }
        };
      };
      _proto.componentDidMount = function componentDidMount() {
        this.appeared = true;
        this.mounted = true;
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      TransitionGroup3.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
          children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
          firstRender: false
        };
      };
      _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
        if (child.key in currentChildMapping)
          return;
        if (child.props.onExited) {
          child.props.onExited(node);
        }
        if (this.mounted) {
          this.setState(function(state) {
            var children = _extends23({}, state.children);
            delete children[child.key];
            return {
              children
            };
          });
        }
      };
      _proto.render = function render() {
        var _this$props = this.props, Component6 = _this$props.component, childFactory = _this$props.childFactory, props = _objectWithoutPropertiesLoose13(_this$props, ["component", "childFactory"]);
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component6 === null) {
          return children;
        }
        return _react.default.createElement(Component6, props, children);
      };
      return TransitionGroup3;
    }(_react.default.Component);
    TransitionGroup2.childContextTypes = {
      transitionGroup: _propTypes.default.object.isRequired
    };
    TransitionGroup2.propTypes = true ? {
      component: _propTypes.default.any,
      children: _propTypes.default.node,
      appear: _propTypes.default.bool,
      enter: _propTypes.default.bool,
      exit: _propTypes.default.bool,
      childFactory: _propTypes.default.func
    } : {};
    TransitionGroup2.defaultProps = defaultProps2;
    var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup2);
    exports.default = _default;
    module.exports = exports["default"];
  }
});

// node_modules/react-transition-group/ReplaceTransition.js
var require_ReplaceTransition = __commonJS({
  "node_modules/react-transition-group/ReplaceTransition.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _reactDom = require_react_dom();
    var _TransitionGroup = _interopRequireDefault(require_TransitionGroup());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutPropertiesLoose13(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var ReplaceTransition = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(ReplaceTransition2, _React$Component);
      function ReplaceTransition2() {
        var _this;
        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
        _this.handleEnter = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _this.handleLifecycle("onEnter", 0, args);
        };
        _this.handleEntering = function() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return _this.handleLifecycle("onEntering", 0, args);
        };
        _this.handleEntered = function() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return _this.handleLifecycle("onEntered", 0, args);
        };
        _this.handleExit = function() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return _this.handleLifecycle("onExit", 1, args);
        };
        _this.handleExiting = function() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          return _this.handleLifecycle("onExiting", 1, args);
        };
        _this.handleExited = function() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          return _this.handleLifecycle("onExited", 1, args);
        };
        return _this;
      }
      var _proto = ReplaceTransition2.prototype;
      _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
        var _child$props;
        var children = this.props.children;
        var child = _react.default.Children.toArray(children)[idx];
        if (child.props[handler])
          (_child$props = child.props)[handler].apply(_child$props, originalArgs);
        if (this.props[handler])
          this.props[handler]((0, _reactDom.findDOMNode)(this));
      };
      _proto.render = function render() {
        var _this$props = this.props, children = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose13(_this$props, ["children", "in"]);
        var _React$Children$toArr = _react.default.Children.toArray(children), first = _React$Children$toArr[0], second2 = _React$Children$toArr[1];
        delete props.onEnter;
        delete props.onEntering;
        delete props.onEntered;
        delete props.onExit;
        delete props.onExiting;
        delete props.onExited;
        return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
          key: "first",
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : _react.default.cloneElement(second2, {
          key: "second",
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }));
      };
      return ReplaceTransition2;
    }(_react.default.Component);
    ReplaceTransition.propTypes = true ? {
      in: _propTypes.default.bool.isRequired,
      children: function children(props, propName) {
        if (_react.default.Children.count(props[propName]) !== 2)
          return new Error('"' + propName + '" must be exactly two transition components.');
        return null;
      }
    } : {};
    var _default = ReplaceTransition;
    exports.default = _default;
    module.exports = exports["default"];
  }
});

// node_modules/react-transition-group/index.js
var require_react_transition_group = __commonJS({
  "node_modules/react-transition-group/index.js"(exports, module) {
    "use strict";
    var _CSSTransition = _interopRequireDefault(require_CSSTransition());
    var _ReplaceTransition = _interopRequireDefault(require_ReplaceTransition());
    var _TransitionGroup = _interopRequireDefault(require_TransitionGroup());
    var _Transition = _interopRequireDefault(require_Transition());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = {
      Transition: _Transition.default,
      TransitionGroup: _TransitionGroup.default,
      ReplaceTransition: _ReplaceTransition.default,
      CSSTransition: _CSSTransition.default
    };
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol3 ? Symbol3.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  }
});

// node_modules/lodash/_baseSortBy.js
var require_baseSortBy = __commonJS({
  "node_modules/lodash/_baseSortBy.js"(exports, module) {
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    module.exports = baseSortBy;
  }
});

// node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  "node_modules/lodash/_compareAscending.js"(exports, module) {
    var isSymbol2 = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  }
});

// node_modules/lodash/_compareMultiple.js
var require_compareMultiple = __commonJS({
  "node_modules/lodash/_compareMultiple.js"(exports, module) {
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    module.exports = compareMultiple;
  }
});

// node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  "node_modules/lodash/_baseOrderBy.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity7 = require_identity();
    var isArray = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity7];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index, "value": value };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax2 = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax2(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax2(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity7 = require_identity();
    var baseSetToString = !defineProperty ? identity7 : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity7 = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity7), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject2 = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject2(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/lodash/sortBy.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    var root2 = require_root();
    var now2 = function() {
      return root2.Date.now();
    };
    module.exports = now2;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace2 = /\s/;
    function trimmedEndIndex2(string) {
      var index = string.length;
      while (index-- && reWhitespace2.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex2;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex2 = require_trimmedEndIndex();
    var reTrimStart2 = /^\s+/;
    function baseTrim2(string) {
      return string ? string.slice(0, trimmedEndIndex2(string) + 1).replace(reTrimStart2, "") : string;
    }
    module.exports = baseTrim2;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim2 = require_baseTrim();
    var isObject2 = require_isObject();
    var isSymbol2 = require_isSymbol();
    var NAN2 = 0 / 0;
    var reIsBadHex2 = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary2 = /^0b[01]+$/i;
    var reIsOctal2 = /^0o[0-7]+$/i;
    var freeParseInt2 = parseInt;
    function toNumber2(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol2(value)) {
        return NAN2;
      }
      if (isObject2(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject2(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim2(value);
      var isBinary = reIsBinary2.test(value);
      return isBinary || reIsOctal2.test(value) ? freeParseInt2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex2.test(value) ? NAN2 : +value;
    }
    module.exports = toNumber2;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    var isObject2 = require_isObject();
    var now2 = require_now();
    var toNumber2 = require_toNumber();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    var nativeMax2 = Math.max;
    var nativeMin2 = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      wait = toNumber2(wait) || 0;
      if (isObject2(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax2(toNumber2(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time2) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time2;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time2) {
        lastInvokeTime = time2;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time2) : result;
      }
      function remainingWait(time2) {
        var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin2(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time2) {
        var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time2 = now2();
        if (shouldInvoke(time2)) {
          return trailingEdge(time2);
        }
        timerId = setTimeout(timerExpired, remainingWait(time2));
      }
      function trailingEdge(time2) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time2);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now2());
      }
      function debounced() {
        var time2 = now2(), isInvoking = shouldInvoke(time2);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time2;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/parse.js
var require_parse = __commonJS({
  "node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/parse.js"(exports, module) {
    var openParentheses = "(".charCodeAt(0);
    var closeParentheses = ")".charCodeAt(0);
    var singleQuote = "'".charCodeAt(0);
    var doubleQuote = '"'.charCodeAt(0);
    var backslash = "\\".charCodeAt(0);
    var slash = "/".charCodeAt(0);
    var comma = ",".charCodeAt(0);
    var colon = ":".charCodeAt(0);
    var star = "*".charCodeAt(0);
    module.exports = function(input) {
      var tokens = [];
      var value = input;
      var next, quote, prev, token, escape, escapePos, whitespacePos;
      var pos = 0;
      var code = value.charCodeAt(pos);
      var max2 = value.length;
      var stack = [{ nodes: tokens }];
      var balanced = 0;
      var parent;
      var name = "";
      var before = "";
      var after = "";
      while (pos < max2) {
        if (code <= 32) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          token = value.slice(pos, next);
          prev = tokens[tokens.length - 1];
          if (code === closeParentheses && balanced) {
            after = token;
          } else if (prev && prev.type === "div") {
            prev.after = token;
          } else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star) {
            before = token;
          } else {
            tokens.push({
              type: "space",
              sourceIndex: pos,
              value: token
            });
          }
          pos = next;
        } else if (code === singleQuote || code === doubleQuote) {
          next = pos;
          quote = code === singleQuote ? "'" : '"';
          token = {
            type: "string",
            sourceIndex: pos,
            quote
          };
          do {
            escape = false;
            next = value.indexOf(quote, next + 1);
            if (~next) {
              escapePos = next;
              while (value.charCodeAt(escapePos - 1) === backslash) {
                escapePos -= 1;
                escape = !escape;
              }
            } else {
              value += quote;
              next = value.length - 1;
              token.unclosed = true;
            }
          } while (escape);
          token.value = value.slice(pos + 1, next);
          tokens.push(token);
          pos = next + 1;
          code = value.charCodeAt(pos);
        } else if (code === slash && value.charCodeAt(pos + 1) === star) {
          token = {
            type: "comment",
            sourceIndex: pos
          };
          next = value.indexOf("*/", pos);
          if (next === -1) {
            token.unclosed = true;
            next = value.length;
          }
          token.value = value.slice(pos + 2, next);
          tokens.push(token);
          pos = next + 2;
          code = value.charCodeAt(pos);
        } else if (code === slash || code === comma || code === colon) {
          token = value[pos];
          tokens.push({
            type: "div",
            sourceIndex: pos - before.length,
            value: token,
            before,
            after: ""
          });
          before = "";
          pos += 1;
          code = value.charCodeAt(pos);
        } else if (openParentheses === code) {
          next = pos;
          do {
            next += 1;
            code = value.charCodeAt(next);
          } while (code <= 32);
          token = {
            type: "function",
            sourceIndex: pos - name.length,
            value: name,
            before: value.slice(pos + 1, next)
          };
          pos = next;
          if (name === "url" && code !== singleQuote && code !== doubleQuote) {
            next -= 1;
            do {
              escape = false;
              next = value.indexOf(")", next + 1);
              if (~next) {
                escapePos = next;
                while (value.charCodeAt(escapePos - 1) === backslash) {
                  escapePos -= 1;
                  escape = !escape;
                }
              } else {
                value += ")";
                next = value.length - 1;
                token.unclosed = true;
              }
            } while (escape);
            whitespacePos = next;
            do {
              whitespacePos -= 1;
              code = value.charCodeAt(whitespacePos);
            } while (code <= 32);
            if (pos !== whitespacePos + 1) {
              token.nodes = [
                {
                  type: "word",
                  sourceIndex: pos,
                  value: value.slice(pos, whitespacePos + 1)
                }
              ];
            } else {
              token.nodes = [];
            }
            if (token.unclosed && whitespacePos + 1 !== next) {
              token.after = "";
              token.nodes.push({
                type: "space",
                sourceIndex: whitespacePos + 1,
                value: value.slice(whitespacePos + 1, next)
              });
            } else {
              token.after = value.slice(whitespacePos + 1, next);
            }
            pos = next + 1;
            code = value.charCodeAt(pos);
            tokens.push(token);
          } else {
            balanced += 1;
            token.after = "";
            tokens.push(token);
            stack.push(token);
            tokens = token.nodes = [];
            parent = token;
          }
          name = "";
        } else if (closeParentheses === code && balanced) {
          pos += 1;
          code = value.charCodeAt(pos);
          parent.after = after;
          after = "";
          balanced -= 1;
          stack.pop();
          parent = stack[balanced];
          tokens = parent.nodes;
        } else {
          next = pos;
          do {
            if (code === backslash) {
              next += 1;
            }
            next += 1;
            code = value.charCodeAt(next);
          } while (next < max2 && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === closeParentheses && balanced));
          token = value.slice(pos, next);
          if (openParentheses === code) {
            name = token;
          } else {
            tokens.push({
              type: "word",
              sourceIndex: pos,
              value: token
            });
          }
          pos = next;
        }
      }
      for (pos = stack.length - 1; pos; pos -= 1) {
        stack[pos].unclosed = true;
      }
      return stack[0].nodes;
    };
  }
});

// node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/walk.js
var require_walk = __commonJS({
  "node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/walk.js"(exports, module) {
    module.exports = function walk(nodes, cb, bubble) {
      var i, max2, node, result;
      for (i = 0, max2 = nodes.length; i < max2; i += 1) {
        node = nodes[i];
        if (!bubble) {
          result = cb(node, i, nodes);
        }
        if (result !== false && node.type === "function" && Array.isArray(node.nodes)) {
          walk(node.nodes, cb, bubble);
        }
        if (bubble) {
          cb(node, i, nodes);
        }
      }
    };
  }
});

// node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/stringify.js"(exports, module) {
    function stringifyNode(node, custom) {
      var type = node.type;
      var value = node.value;
      var buf;
      var customResult;
      if (custom && (customResult = custom(node)) !== void 0) {
        return customResult;
      } else if (type === "word" || type === "space") {
        return value;
      } else if (type === "string") {
        buf = node.quote || "";
        return buf + value + (node.unclosed ? "" : buf);
      } else if (type === "comment") {
        return "/*" + value + (node.unclosed ? "" : "*/");
      } else if (type === "div") {
        return (node.before || "") + value + (node.after || "");
      } else if (Array.isArray(node.nodes)) {
        buf = stringify(node.nodes);
        if (type !== "function") {
          return buf;
        }
        return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
      }
      return value;
    }
    function stringify(nodes, custom) {
      var result, i;
      if (Array.isArray(nodes)) {
        result = "";
        for (i = nodes.length - 1; ~i; i -= 1) {
          result = stringifyNode(nodes[i], custom) + result;
        }
        return result;
      }
      return stringifyNode(nodes, custom);
    }
    module.exports = stringify;
  }
});

// node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/unit.js
var require_unit = __commonJS({
  "node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/unit.js"(exports, module) {
    var minus = "-".charCodeAt(0);
    var plus = "+".charCodeAt(0);
    var dot = ".".charCodeAt(0);
    var exp = "e".charCodeAt(0);
    var EXP = "E".charCodeAt(0);
    module.exports = function(value) {
      var pos = 0;
      var length = value.length;
      var dotted = false;
      var sciPos = -1;
      var containsNumber = false;
      var code;
      while (pos < length) {
        code = value.charCodeAt(pos);
        if (code >= 48 && code <= 57) {
          containsNumber = true;
        } else if (code === exp || code === EXP) {
          if (sciPos > -1) {
            break;
          }
          sciPos = pos;
        } else if (code === dot) {
          if (dotted) {
            break;
          }
          dotted = true;
        } else if (code === plus || code === minus) {
          if (pos !== 0) {
            break;
          }
        } else {
          break;
        }
        pos += 1;
      }
      if (sciPos + 1 === pos)
        pos--;
      return containsNumber ? {
        number: value.slice(0, pos),
        unit: value.slice(pos)
      } : false;
    };
  }
});

// node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/index.js
var require_lib = __commonJS({
  "node_modules/reduce-css-calc/node_modules/postcss-value-parser/lib/index.js"(exports, module) {
    var parse = require_parse();
    var walk = require_walk();
    var stringify = require_stringify();
    function ValueParser(value) {
      if (this instanceof ValueParser) {
        this.nodes = parse(value);
        return this;
      }
      return new ValueParser(value);
    }
    ValueParser.prototype.toString = function() {
      return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
    };
    ValueParser.prototype.walk = function(cb, bubble) {
      walk(this.nodes, cb, bubble);
      return this;
    };
    ValueParser.unit = require_unit();
    ValueParser.walk = walk;
    ValueParser.stringify = stringify;
    module.exports = ValueParser;
  }
});

// node_modules/reduce-css-calc/dist/parser.js
var require_parser = __commonJS({
  "node_modules/reduce-css-calc/dist/parser.js"(exports) {
    var parser = function() {
      function JisonParserError(msg, hash) {
        Object.defineProperty(this, "name", {
          enumerable: false,
          writable: false,
          value: "JisonParserError"
        });
        if (msg == null)
          msg = "???";
        Object.defineProperty(this, "message", {
          enumerable: false,
          writable: true,
          value: msg
        });
        this.hash = hash;
        var stacktrace;
        if (hash && hash.exception instanceof Error) {
          var ex2 = hash.exception;
          this.message = ex2.message || msg;
          stacktrace = ex2.stack;
        }
        if (!stacktrace) {
          if (Error.hasOwnProperty("captureStackTrace")) {
            Error.captureStackTrace(this, this.constructor);
          } else {
            stacktrace = new Error(msg).stack;
          }
        }
        if (stacktrace) {
          Object.defineProperty(this, "stack", {
            enumerable: false,
            writable: false,
            value: stacktrace
          });
        }
      }
      if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(JisonParserError.prototype, Error.prototype);
      } else {
        JisonParserError.prototype = Object.create(Error.prototype);
      }
      JisonParserError.prototype.constructor = JisonParserError;
      JisonParserError.prototype.name = "JisonParserError";
      function bp(s3) {
        var rv = [];
        var p = s3.pop;
        var r = s3.rule;
        for (var i = 0, l = p.length; i < l; i++) {
          rv.push([
            p[i],
            r[i]
          ]);
        }
        return rv;
      }
      function bda(s3) {
        var rv = {};
        var d = s3.idx;
        var g = s3.goto;
        for (var i = 0, l = d.length; i < l; i++) {
          var j = d[i];
          rv[j] = g[i];
        }
        return rv;
      }
      function bt(s3) {
        var rv = [];
        var d = s3.len;
        var y2 = s3.symbol;
        var t = s3.type;
        var a2 = s3.state;
        var m = s3.mode;
        var g = s3.goto;
        for (var i = 0, l = d.length; i < l; i++) {
          var n = d[i];
          var q = {};
          for (var j = 0; j < n; j++) {
            var z = y2.shift();
            switch (t.shift()) {
              case 2:
                q[z] = [
                  m.shift(),
                  g.shift()
                ];
                break;
              case 0:
                q[z] = a2.shift();
                break;
              default:
                q[z] = [
                  3
                ];
            }
          }
          rv.push(q);
        }
        return rv;
      }
      function s2(c3, l, a2) {
        a2 = a2 || 0;
        for (var i = 0; i < l; i++) {
          this.push(c3);
          c3 += a2;
        }
      }
      function c2(i, l) {
        i = this.length - i;
        for (l += i; i < l; i++) {
          this.push(this[i]);
        }
      }
      function u(a2) {
        var rv = [];
        for (var i = 0, l = a2.length; i < l; i++) {
          var e = a2[i];
          if (typeof e === "function") {
            i++;
            e.apply(rv, a2[i]);
          } else {
            rv.push(e);
          }
        }
        return rv;
      }
      var parser2 = {
        trace: function no_op_trace() {
        },
        JisonParserError,
        yy: {},
        options: {
          type: "lalr",
          hasPartialLrUpgradeOnConflict: true,
          errorRecoveryTokenDiscardCount: 3
        },
        symbols_: {
          "$accept": 0,
          "$end": 1,
          "ADD": 3,
          "ANGLE": 16,
          "CHS": 22,
          "COMMA": 14,
          "CSS_CPROP": 13,
          "CSS_VAR": 12,
          "DIV": 6,
          "EMS": 20,
          "EOF": 1,
          "EXS": 21,
          "FREQ": 18,
          "LENGTH": 15,
          "LPAREN": 7,
          "MUL": 5,
          "NESTED_CALC": 9,
          "NUMBER": 11,
          "PERCENTAGE": 28,
          "PREFIX": 10,
          "REMS": 23,
          "RES": 19,
          "RPAREN": 8,
          "SUB": 4,
          "TIME": 17,
          "VHS": 24,
          "VMAXS": 27,
          "VMINS": 26,
          "VWS": 25,
          "css_value": 33,
          "css_variable": 32,
          "error": 2,
          "expression": 29,
          "math_expression": 30,
          "value": 31
        },
        terminals_: {
          1: "EOF",
          2: "error",
          3: "ADD",
          4: "SUB",
          5: "MUL",
          6: "DIV",
          7: "LPAREN",
          8: "RPAREN",
          9: "NESTED_CALC",
          10: "PREFIX",
          11: "NUMBER",
          12: "CSS_VAR",
          13: "CSS_CPROP",
          14: "COMMA",
          15: "LENGTH",
          16: "ANGLE",
          17: "TIME",
          18: "FREQ",
          19: "RES",
          20: "EMS",
          21: "EXS",
          22: "CHS",
          23: "REMS",
          24: "VHS",
          25: "VWS",
          26: "VMINS",
          27: "VMAXS",
          28: "PERCENTAGE"
        },
        TERROR: 2,
        EOF: 1,
        originalQuoteName: null,
        originalParseError: null,
        cleanupAfterParse: null,
        constructParseErrorInfo: null,
        yyMergeLocationInfo: null,
        __reentrant_call_depth: 0,
        __error_infos: [],
        __error_recovery_infos: [],
        quoteName: function parser_quoteName(id_str) {
          return '"' + id_str + '"';
        },
        getSymbolName: function parser_getSymbolName(symbol) {
          if (this.terminals_[symbol]) {
            return this.terminals_[symbol];
          }
          var s3 = this.symbols_;
          for (var key in s3) {
            if (s3[key] === symbol) {
              return key;
            }
          }
          return null;
        },
        describeSymbol: function parser_describeSymbol(symbol) {
          if (symbol !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[symbol]) {
            return this.terminal_descriptions_[symbol];
          } else if (symbol === this.EOF) {
            return "end of input";
          }
          var id = this.getSymbolName(symbol);
          if (id) {
            return this.quoteName(id);
          }
          return null;
        },
        collect_expected_token_set: function parser_collect_expected_token_set(state, do_not_describe) {
          var TERROR = this.TERROR;
          var tokenset = [];
          var check = {};
          if (!do_not_describe && this.state_descriptions_ && this.state_descriptions_[state]) {
            return [
              this.state_descriptions_[state]
            ];
          }
          for (var p in this.table[state]) {
            p = +p;
            if (p !== TERROR) {
              var d = do_not_describe ? p : this.describeSymbol(p);
              if (d && !check[d]) {
                tokenset.push(d);
                check[d] = true;
              }
            }
          }
          return tokenset;
        },
        productions_: bp({
          pop: u([
            29,
            s2,
            [30, 10],
            31,
            31,
            32,
            32,
            s2,
            [33, 15]
          ]),
          rule: u([
            2,
            s2,
            [3, 5],
            4,
            7,
            s2,
            [1, 4],
            2,
            4,
            6,
            s2,
            [1, 14],
            2
          ])
        }),
        performAction: function parser__PerformAction(yystate, yysp, yyvstack) {
          var yy = this.yy;
          var yyparser = yy.parser;
          var yylexer = yy.lexer;
          switch (yystate) {
            case 0:
              this.$ = yyvstack[yysp - 1];
              break;
            case 1:
              this.$ = yyvstack[yysp - 1];
              return yyvstack[yysp - 1];
              break;
            case 2:
            case 3:
            case 4:
            case 5:
              this.$ = { type: "MathExpression", operator: yyvstack[yysp - 1], left: yyvstack[yysp - 2], right: yyvstack[yysp] };
              break;
            case 6:
              this.$ = yyvstack[yysp - 1];
              break;
            case 7:
              this.$ = { type: "Calc", value: yyvstack[yysp - 1] };
              break;
            case 8:
              this.$ = { type: "Calc", value: yyvstack[yysp - 1], prefix: yyvstack[yysp - 5] };
              break;
            case 9:
            case 10:
            case 11:
              this.$ = yyvstack[yysp];
              break;
            case 12:
              this.$ = { type: "Value", value: parseFloat(yyvstack[yysp]) };
              break;
            case 13:
              this.$ = { type: "Value", value: parseFloat(yyvstack[yysp]) * -1 };
              break;
            case 14:
              this.$ = { type: "CssVariable", value: yyvstack[yysp - 1] };
              break;
            case 15:
              this.$ = { type: "CssVariable", value: yyvstack[yysp - 3], fallback: yyvstack[yysp - 1] };
              break;
            case 16:
              this.$ = { type: "LengthValue", value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
              break;
            case 17:
              this.$ = { type: "AngleValue", value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
              break;
            case 18:
              this.$ = { type: "TimeValue", value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
              break;
            case 19:
              this.$ = { type: "FrequencyValue", value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
              break;
            case 20:
              this.$ = { type: "ResolutionValue", value: parseFloat(yyvstack[yysp]), unit: /[a-z]+/.exec(yyvstack[yysp])[0] };
              break;
            case 21:
              this.$ = { type: "EmValue", value: parseFloat(yyvstack[yysp]), unit: "em" };
              break;
            case 22:
              this.$ = { type: "ExValue", value: parseFloat(yyvstack[yysp]), unit: "ex" };
              break;
            case 23:
              this.$ = { type: "ChValue", value: parseFloat(yyvstack[yysp]), unit: "ch" };
              break;
            case 24:
              this.$ = { type: "RemValue", value: parseFloat(yyvstack[yysp]), unit: "rem" };
              break;
            case 25:
              this.$ = { type: "VhValue", value: parseFloat(yyvstack[yysp]), unit: "vh" };
              break;
            case 26:
              this.$ = { type: "VwValue", value: parseFloat(yyvstack[yysp]), unit: "vw" };
              break;
            case 27:
              this.$ = { type: "VminValue", value: parseFloat(yyvstack[yysp]), unit: "vmin" };
              break;
            case 28:
              this.$ = { type: "VmaxValue", value: parseFloat(yyvstack[yysp]), unit: "vmax" };
              break;
            case 29:
              this.$ = { type: "PercentageValue", value: parseFloat(yyvstack[yysp]), unit: "%" };
              break;
            case 30:
              var prev = yyvstack[yysp];
              prev.value *= -1;
              this.$ = prev;
              break;
          }
        },
        table: bt({
          len: u([
            24,
            1,
            5,
            23,
            1,
            18,
            s2,
            [0, 3],
            1,
            s2,
            [0, 16],
            s2,
            [23, 4],
            c2,
            [28, 3],
            0,
            0,
            16,
            1,
            6,
            6,
            s2,
            [0, 3],
            5,
            1,
            2,
            c2,
            [37, 3],
            c2,
            [20, 3],
            5,
            0,
            0
          ]),
          symbol: u([
            4,
            7,
            9,
            11,
            12,
            s2,
            [15, 19, 1],
            1,
            1,
            s2,
            [3, 4, 1],
            c2,
            [30, 19],
            c2,
            [29, 4],
            7,
            4,
            10,
            11,
            c2,
            [22, 14],
            c2,
            [19, 3],
            c2,
            [43, 22],
            c2,
            [23, 69],
            c2,
            [139, 4],
            8,
            c2,
            [51, 24],
            4,
            c2,
            [138, 15],
            13,
            c2,
            [186, 5],
            8,
            c2,
            [6, 6],
            c2,
            [5, 5],
            9,
            8,
            14,
            c2,
            [159, 47],
            c2,
            [60, 10]
          ]),
          type: u([
            s2,
            [2, 19],
            s2,
            [0, 5],
            1,
            s2,
            [2, 24],
            s2,
            [0, 4],
            c2,
            [22, 19],
            c2,
            [43, 42],
            c2,
            [23, 70],
            c2,
            [28, 25],
            c2,
            [45, 25],
            c2,
            [113, 54]
          ]),
          state: u([
            1,
            2,
            8,
            6,
            7,
            30,
            c2,
            [4, 3],
            33,
            37,
            c2,
            [5, 3],
            38,
            c2,
            [4, 3],
            39,
            c2,
            [4, 3],
            40,
            c2,
            [4, 3],
            42,
            c2,
            [21, 4],
            50,
            c2,
            [5, 3],
            51,
            c2,
            [4, 3]
          ]),
          mode: u([
            s2,
            [1, 179],
            s2,
            [2, 3],
            c2,
            [5, 5],
            c2,
            [6, 4],
            s2,
            [1, 57]
          ]),
          goto: u([
            5,
            3,
            4,
            24,
            s2,
            [9, 15, 1],
            s2,
            [25, 5, 1],
            c2,
            [24, 19],
            31,
            35,
            32,
            34,
            c2,
            [18, 14],
            36,
            c2,
            [38, 19],
            c2,
            [19, 57],
            c2,
            [118, 4],
            41,
            c2,
            [24, 19],
            43,
            35,
            c2,
            [16, 14],
            44,
            s2,
            [2, 3],
            28,
            29,
            2,
            s2,
            [3, 3],
            28,
            29,
            3,
            c2,
            [53, 4],
            s2,
            [45, 5, 1],
            c2,
            [100, 42],
            52,
            c2,
            [5, 4],
            53
          ])
        }),
        defaultActions: bda({
          idx: u([
            6,
            7,
            8,
            s2,
            [10, 16, 1],
            33,
            34,
            39,
            40,
            41,
            45,
            47,
            52,
            53
          ]),
          goto: u([
            9,
            10,
            11,
            s2,
            [16, 14, 1],
            12,
            1,
            30,
            13,
            s2,
            [4, 4, 1],
            14,
            15,
            8
          ])
        }),
        parseError: function parseError(str, hash, ExceptionClass) {
          if (hash.recoverable) {
            if (typeof this.trace === "function") {
              this.trace(str);
            }
            hash.destroy();
          } else {
            if (typeof this.trace === "function") {
              this.trace(str);
            }
            if (!ExceptionClass) {
              ExceptionClass = this.JisonParserError;
            }
            throw new ExceptionClass(str, hash);
          }
        },
        parse: function parse(input) {
          var self2 = this;
          var stack = new Array(128);
          var sstack = new Array(128);
          var vstack = new Array(128);
          var table = this.table;
          var sp = 0;
          var symbol = 0;
          var TERROR = this.TERROR;
          var EOF = this.EOF;
          var ERROR_RECOVERY_TOKEN_DISCARD_COUNT = this.options.errorRecoveryTokenDiscardCount | 0 || 3;
          var NO_ACTION = [0, 54];
          var lexer2;
          if (this.__lexer__) {
            lexer2 = this.__lexer__;
          } else {
            lexer2 = this.__lexer__ = Object.create(this.lexer);
          }
          var sharedState_yy = {
            parseError: void 0,
            quoteName: void 0,
            lexer: void 0,
            parser: void 0,
            pre_parse: void 0,
            post_parse: void 0,
            pre_lex: void 0,
            post_lex: void 0
          };
          var ASSERT;
          if (typeof assert !== "function") {
            ASSERT = function JisonAssert(cond, msg) {
              if (!cond) {
                throw new Error("assertion failed: " + (msg || "***"));
              }
            };
          } else {
            ASSERT = assert;
          }
          this.yyGetSharedState = function yyGetSharedState() {
            return sharedState_yy;
          };
          function shallow_copy_noclobber(dst, src) {
            for (var k2 in src) {
              if (typeof dst[k2] === "undefined" && Object.prototype.hasOwnProperty.call(src, k2)) {
                dst[k2] = src[k2];
              }
            }
          }
          shallow_copy_noclobber(sharedState_yy, this.yy);
          sharedState_yy.lexer = lexer2;
          sharedState_yy.parser = this;
          if (typeof sharedState_yy.parseError === "function") {
            this.parseError = function parseErrorAlt(str, hash, ExceptionClass) {
              if (!ExceptionClass) {
                ExceptionClass = this.JisonParserError;
              }
              return sharedState_yy.parseError.call(this, str, hash, ExceptionClass);
            };
          } else {
            this.parseError = this.originalParseError;
          }
          if (typeof sharedState_yy.quoteName === "function") {
            this.quoteName = function quoteNameAlt(id_str) {
              return sharedState_yy.quoteName.call(this, id_str);
            };
          } else {
            this.quoteName = this.originalQuoteName;
          }
          this.cleanupAfterParse = function parser_cleanupAfterParse(resultValue, invoke_post_methods, do_not_nuke_errorinfos) {
            var rv;
            if (invoke_post_methods) {
              var hash;
              if (sharedState_yy.post_parse || this.post_parse) {
                hash = this.constructParseErrorInfo(null, null, null, false);
              }
              if (sharedState_yy.post_parse) {
                rv = sharedState_yy.post_parse.call(this, sharedState_yy, resultValue, hash);
                if (typeof rv !== "undefined")
                  resultValue = rv;
              }
              if (this.post_parse) {
                rv = this.post_parse.call(this, sharedState_yy, resultValue, hash);
                if (typeof rv !== "undefined")
                  resultValue = rv;
              }
              if (hash && hash.destroy) {
                hash.destroy();
              }
            }
            if (this.__reentrant_call_depth > 1)
              return resultValue;
            if (lexer2.cleanupAfterLex) {
              lexer2.cleanupAfterLex(do_not_nuke_errorinfos);
            }
            if (sharedState_yy) {
              sharedState_yy.lexer = void 0;
              sharedState_yy.parser = void 0;
              if (lexer2.yy === sharedState_yy) {
                lexer2.yy = void 0;
              }
            }
            sharedState_yy = void 0;
            this.parseError = this.originalParseError;
            this.quoteName = this.originalQuoteName;
            stack.length = 0;
            sstack.length = 0;
            vstack.length = 0;
            sp = 0;
            if (!do_not_nuke_errorinfos) {
              for (var i = this.__error_infos.length - 1; i >= 0; i--) {
                var el = this.__error_infos[i];
                if (el && typeof el.destroy === "function") {
                  el.destroy();
                }
              }
              this.__error_infos.length = 0;
            }
            return resultValue;
          };
          this.constructParseErrorInfo = function parser_constructParseErrorInfo(msg, ex, expected2, recoverable) {
            var pei = {
              errStr: msg,
              exception: ex,
              text: lexer2.match,
              value: lexer2.yytext,
              token: this.describeSymbol(symbol) || symbol,
              token_id: symbol,
              line: lexer2.yylineno,
              expected: expected2,
              recoverable,
              state,
              action,
              new_state: newState,
              symbol_stack: stack,
              state_stack: sstack,
              value_stack: vstack,
              stack_pointer: sp,
              yy: sharedState_yy,
              lexer: lexer2,
              parser: this,
              destroy: function destructParseErrorInfo() {
                var rec = !!this.recoverable;
                for (var key in this) {
                  if (this.hasOwnProperty(key) && typeof key === "object") {
                    this[key] = void 0;
                  }
                }
                this.recoverable = rec;
              }
            };
            this.__error_infos.push(pei);
            return pei;
          };
          function getNonTerminalFromCode(symbol2) {
            var tokenName = self2.getSymbolName(symbol2);
            if (!tokenName) {
              tokenName = symbol2;
            }
            return tokenName;
          }
          function stdLex() {
            var token = lexer2.lex();
            if (typeof token !== "number") {
              token = self2.symbols_[token] || token;
            }
            return token || EOF;
          }
          function fastLex() {
            var token = lexer2.fastLex();
            if (typeof token !== "number") {
              token = self2.symbols_[token] || token;
            }
            return token || EOF;
          }
          var lex = stdLex;
          var state, action, r, t;
          var yyval = {
            $: true,
            _$: void 0,
            yy: sharedState_yy
          };
          var p;
          var yyrulelen;
          var this_production;
          var newState;
          var retval = false;
          try {
            this.__reentrant_call_depth++;
            lexer2.setInput(input, sharedState_yy);
            if (typeof lexer2.canIUse === "function") {
              var lexerInfo = lexer2.canIUse();
              if (lexerInfo.fastLex && typeof fastLex === "function") {
                lex = fastLex;
              }
            }
            vstack[sp] = null;
            sstack[sp] = 0;
            stack[sp] = 0;
            ++sp;
            if (this.pre_parse) {
              this.pre_parse.call(this, sharedState_yy);
            }
            if (sharedState_yy.pre_parse) {
              sharedState_yy.pre_parse.call(this, sharedState_yy);
            }
            newState = sstack[sp - 1];
            for (; ; ) {
              state = newState;
              if (this.defaultActions[state]) {
                action = 2;
                newState = this.defaultActions[state];
              } else {
                if (!symbol) {
                  symbol = lex();
                }
                t = table[state] && table[state][symbol] || NO_ACTION;
                newState = t[1];
                action = t[0];
                if (!action) {
                  var errStr;
                  var errSymbolDescr = this.describeSymbol(symbol) || symbol;
                  var expected = this.collect_expected_token_set(state);
                  if (typeof lexer2.yylineno === "number") {
                    errStr = "Parse error on line " + (lexer2.yylineno + 1) + ": ";
                  } else {
                    errStr = "Parse error: ";
                  }
                  if (typeof lexer2.showPosition === "function") {
                    errStr += "\n" + lexer2.showPosition(79 - 10, 10) + "\n";
                  }
                  if (expected.length) {
                    errStr += "Expecting " + expected.join(", ") + ", got unexpected " + errSymbolDescr;
                  } else {
                    errStr += "Unexpected " + errSymbolDescr;
                  }
                  p = this.constructParseErrorInfo(errStr, null, expected, false);
                  r = this.parseError(p.errStr, p, this.JisonParserError);
                  if (typeof r !== "undefined") {
                    retval = r;
                  }
                  break;
                }
              }
              switch (action) {
                default:
                  if (action instanceof Array) {
                    p = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol, null, null, false);
                    r = this.parseError(p.errStr, p, this.JisonParserError);
                    if (typeof r !== "undefined") {
                      retval = r;
                    }
                    break;
                  }
                  p = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, false);
                  r = this.parseError(p.errStr, p, this.JisonParserError);
                  if (typeof r !== "undefined") {
                    retval = r;
                  }
                  break;
                case 1:
                  stack[sp] = symbol;
                  vstack[sp] = lexer2.yytext;
                  sstack[sp] = newState;
                  ++sp;
                  symbol = 0;
                  continue;
                case 2:
                  this_production = this.productions_[newState - 1];
                  yyrulelen = this_production[1];
                  r = this.performAction.call(yyval, newState, sp - 1, vstack);
                  if (typeof r !== "undefined") {
                    retval = r;
                    break;
                  }
                  sp -= yyrulelen;
                  var ntsymbol = this_production[0];
                  stack[sp] = ntsymbol;
                  vstack[sp] = yyval.$;
                  newState = table[sstack[sp - 1]][ntsymbol];
                  sstack[sp] = newState;
                  ++sp;
                  continue;
                case 3:
                  if (sp !== -2) {
                    retval = true;
                    sp--;
                    if (typeof vstack[sp] !== "undefined") {
                      retval = vstack[sp];
                    }
                  }
                  break;
              }
              break;
            }
          } catch (ex) {
            if (ex instanceof this.JisonParserError) {
              throw ex;
            } else if (lexer2 && typeof lexer2.JisonLexerError === "function" && ex instanceof lexer2.JisonLexerError) {
              throw ex;
            }
            p = this.constructParseErrorInfo("Parsing aborted due to exception.", ex, null, false);
            retval = false;
            r = this.parseError(p.errStr, p, this.JisonParserError);
            if (typeof r !== "undefined") {
              retval = r;
            }
          } finally {
            retval = this.cleanupAfterParse(retval, true, true);
            this.__reentrant_call_depth--;
          }
          return retval;
        }
      };
      parser2.originalParseError = parser2.parseError;
      parser2.originalQuoteName = parser2.quoteName;
      var lexer = function() {
        function JisonLexerError(msg, hash) {
          Object.defineProperty(this, "name", {
            enumerable: false,
            writable: false,
            value: "JisonLexerError"
          });
          if (msg == null)
            msg = "???";
          Object.defineProperty(this, "message", {
            enumerable: false,
            writable: true,
            value: msg
          });
          this.hash = hash;
          var stacktrace;
          if (hash && hash.exception instanceof Error) {
            var ex2 = hash.exception;
            this.message = ex2.message || msg;
            stacktrace = ex2.stack;
          }
          if (!stacktrace) {
            if (Error.hasOwnProperty("captureStackTrace")) {
              Error.captureStackTrace(this, this.constructor);
            } else {
              stacktrace = new Error(msg).stack;
            }
          }
          if (stacktrace) {
            Object.defineProperty(this, "stack", {
              enumerable: false,
              writable: false,
              value: stacktrace
            });
          }
        }
        if (typeof Object.setPrototypeOf === "function") {
          Object.setPrototypeOf(JisonLexerError.prototype, Error.prototype);
        } else {
          JisonLexerError.prototype = Object.create(Error.prototype);
        }
        JisonLexerError.prototype.constructor = JisonLexerError;
        JisonLexerError.prototype.name = "JisonLexerError";
        var lexer2 = {
          EOF: 1,
          ERROR: 2,
          __currentRuleSet__: null,
          __error_infos: [],
          __decompressed: false,
          done: false,
          _backtrack: false,
          _input: "",
          _more: false,
          _signaled_error_token: false,
          conditionStack: [],
          match: "",
          matched: "",
          matches: false,
          yytext: "",
          offset: 0,
          yyleng: 0,
          yylineno: 0,
          yylloc: null,
          constructLexErrorInfo: function lexer_constructLexErrorInfo(msg, recoverable, show_input_position) {
            msg = "" + msg;
            if (show_input_position == void 0) {
              show_input_position = !(msg.indexOf("\n") > 0 && msg.indexOf("^") > 0);
            }
            if (this.yylloc && show_input_position) {
              if (typeof this.prettyPrintRange === "function") {
                var pretty_src = this.prettyPrintRange(this.yylloc);
                if (!/\n\s*$/.test(msg)) {
                  msg += "\n";
                }
                msg += "\n  Erroneous area:\n" + this.prettyPrintRange(this.yylloc);
              } else if (typeof this.showPosition === "function") {
                var pos_str = this.showPosition();
                if (pos_str) {
                  if (msg.length && msg[msg.length - 1] !== "\n" && pos_str[0] !== "\n") {
                    msg += "\n" + pos_str;
                  } else {
                    msg += pos_str;
                  }
                }
              }
            }
            var pei = {
              errStr: msg,
              recoverable: !!recoverable,
              text: this.match,
              token: null,
              line: this.yylineno,
              loc: this.yylloc,
              yy: this.yy,
              lexer: this,
              destroy: function destructLexErrorInfo() {
                var rec = !!this.recoverable;
                for (var key in this) {
                  if (this.hasOwnProperty(key) && typeof key === "object") {
                    this[key] = void 0;
                  }
                }
                this.recoverable = rec;
              }
            };
            this.__error_infos.push(pei);
            return pei;
          },
          parseError: function lexer_parseError(str, hash, ExceptionClass) {
            if (!ExceptionClass) {
              ExceptionClass = this.JisonLexerError;
            }
            if (this.yy) {
              if (this.yy.parser && typeof this.yy.parser.parseError === "function") {
                return this.yy.parser.parseError.call(this, str, hash, ExceptionClass) || this.ERROR;
              } else if (typeof this.yy.parseError === "function") {
                return this.yy.parseError.call(this, str, hash, ExceptionClass) || this.ERROR;
              }
            }
            throw new ExceptionClass(str, hash);
          },
          yyerror: function yyError(str) {
            var lineno_msg = "";
            if (this.yylloc) {
              lineno_msg = " on line " + (this.yylineno + 1);
            }
            var p = this.constructLexErrorInfo(
              "Lexical error" + lineno_msg + ": " + str,
              this.options.lexerErrorsAreRecoverable
            );
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length) {
              p.extra_error_attributes = args;
            }
            return this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
          },
          cleanupAfterLex: function lexer_cleanupAfterLex(do_not_nuke_errorinfos) {
            this.setInput("", {});
            if (!do_not_nuke_errorinfos) {
              for (var i = this.__error_infos.length - 1; i >= 0; i--) {
                var el = this.__error_infos[i];
                if (el && typeof el.destroy === "function") {
                  el.destroy();
                }
              }
              this.__error_infos.length = 0;
            }
            return this;
          },
          clear: function lexer_clear() {
            this.yytext = "";
            this.yyleng = 0;
            this.match = "";
            this.matches = false;
            this._more = false;
            this._backtrack = false;
            var col = this.yylloc ? this.yylloc.last_column : 0;
            this.yylloc = {
              first_line: this.yylineno + 1,
              first_column: col,
              last_line: this.yylineno + 1,
              last_column: col,
              range: [this.offset, this.offset]
            };
          },
          setInput: function lexer_setInput(input, yy) {
            this.yy = yy || this.yy || {};
            if (!this.__decompressed) {
              var rules = this.rules;
              for (var i = 0, len = rules.length; i < len; i++) {
                var rule_re = rules[i];
                if (typeof rule_re === "number") {
                  rules[i] = rules[rule_re];
                }
              }
              var conditions = this.conditions;
              for (var k2 in conditions) {
                var spec = conditions[k2];
                var rule_ids = spec.rules;
                var len = rule_ids.length;
                var rule_regexes = new Array(len + 1);
                var rule_new_ids = new Array(len + 1);
                for (var i = 0; i < len; i++) {
                  var idx = rule_ids[i];
                  var rule_re = rules[idx];
                  rule_regexes[i + 1] = rule_re;
                  rule_new_ids[i + 1] = idx;
                }
                spec.rules = rule_new_ids;
                spec.__rule_regexes = rule_regexes;
                spec.__rule_count = len;
              }
              this.__decompressed = true;
            }
            this._input = input || "";
            this.clear();
            this._signaled_error_token = false;
            this.done = false;
            this.yylineno = 0;
            this.matched = "";
            this.conditionStack = ["INITIAL"];
            this.__currentRuleSet__ = null;
            this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
              range: [0, 0]
            };
            this.offset = 0;
            return this;
          },
          editRemainingInput: function lexer_editRemainingInput(callback, cpsArg) {
            var rv = callback.call(this, this._input, cpsArg);
            if (typeof rv !== "string") {
              if (rv) {
                this._input = "" + rv;
              }
            } else {
              this._input = rv;
            }
            return this;
          },
          input: function lexer_input() {
            if (!this._input) {
              return null;
            }
            var ch = this._input[0];
            this.yytext += ch;
            this.yyleng++;
            this.offset++;
            this.match += ch;
            this.matched += ch;
            var slice_len = 1;
            var lines = false;
            if (ch === "\n") {
              lines = true;
            } else if (ch === "\r") {
              lines = true;
              var ch2 = this._input[1];
              if (ch2 === "\n") {
                slice_len++;
                ch += ch2;
                this.yytext += ch2;
                this.yyleng++;
                this.offset++;
                this.match += ch2;
                this.matched += ch2;
                this.yylloc.range[1]++;
              }
            }
            if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
              this.yylloc.last_column = 0;
            } else {
              this.yylloc.last_column++;
            }
            this.yylloc.range[1]++;
            this._input = this._input.slice(slice_len);
            return ch;
          },
          unput: function lexer_unput(ch) {
            var len = ch.length;
            var lines = ch.split(/(?:\r\n?|\n)/g);
            this._input = ch + this._input;
            this.yytext = this.yytext.substr(0, this.yytext.length - len);
            this.yyleng = this.yytext.length;
            this.offset -= len;
            this.match = this.match.substr(0, this.match.length - len);
            this.matched = this.matched.substr(0, this.matched.length - len);
            if (lines.length > 1) {
              this.yylineno -= lines.length - 1;
              this.yylloc.last_line = this.yylineno + 1;
              var pre = this.match;
              var pre_lines = pre.split(/(?:\r\n?|\n)/g);
              if (pre_lines.length === 1) {
                pre = this.matched;
                pre_lines = pre.split(/(?:\r\n?|\n)/g);
              }
              this.yylloc.last_column = pre_lines[pre_lines.length - 1].length;
            } else {
              this.yylloc.last_column -= len;
            }
            this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng;
            this.done = false;
            return this;
          },
          more: function lexer_more() {
            this._more = true;
            return this;
          },
          reject: function lexer_reject() {
            if (this.options.backtrack_lexer) {
              this._backtrack = true;
            } else {
              var lineno_msg = "";
              if (this.yylloc) {
                lineno_msg = " on line " + (this.yylineno + 1);
              }
              var p = this.constructLexErrorInfo(
                "Lexical error" + lineno_msg + ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",
                false
              );
              this._signaled_error_token = this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
            }
            return this;
          },
          less: function lexer_less(n) {
            return this.unput(this.match.slice(n));
          },
          pastInput: function lexer_pastInput(maxSize, maxLines) {
            var past = this.matched.substring(0, this.matched.length - this.match.length);
            if (maxSize < 0)
              maxSize = past.length;
            else if (!maxSize)
              maxSize = 20;
            if (maxLines < 0)
              maxLines = past.length;
            else if (!maxLines)
              maxLines = 1;
            past = past.substr(-maxSize * 2 - 2);
            var a2 = past.replace(/\r\n|\r/g, "\n").split("\n");
            a2 = a2.slice(-maxLines);
            past = a2.join("\n");
            if (past.length > maxSize) {
              past = "..." + past.substr(-maxSize);
            }
            return past;
          },
          upcomingInput: function lexer_upcomingInput(maxSize, maxLines) {
            var next = this.match;
            if (maxSize < 0)
              maxSize = next.length + this._input.length;
            else if (!maxSize)
              maxSize = 20;
            if (maxLines < 0)
              maxLines = maxSize;
            else if (!maxLines)
              maxLines = 1;
            if (next.length < maxSize * 2 + 2) {
              next += this._input.substring(0, maxSize * 2 + 2);
            }
            var a2 = next.replace(/\r\n|\r/g, "\n").split("\n");
            a2 = a2.slice(0, maxLines);
            next = a2.join("\n");
            if (next.length > maxSize) {
              next = next.substring(0, maxSize) + "...";
            }
            return next;
          },
          showPosition: function lexer_showPosition(maxPrefix, maxPostfix) {
            var pre = this.pastInput(maxPrefix).replace(/\s/g, " ");
            var c3 = new Array(pre.length + 1).join("-");
            return pre + this.upcomingInput(maxPostfix).replace(/\s/g, " ") + "\n" + c3 + "^";
          },
          deriveLocationInfo: function lexer_deriveYYLLOC(actual, preceding, following, current) {
            var loc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
              range: [0, 0]
            };
            if (actual) {
              loc.first_line = actual.first_line | 0;
              loc.last_line = actual.last_line | 0;
              loc.first_column = actual.first_column | 0;
              loc.last_column = actual.last_column | 0;
              if (actual.range) {
                loc.range[0] = actual.range[0] | 0;
                loc.range[1] = actual.range[1] | 0;
              }
            }
            if (loc.first_line <= 0 || loc.last_line < loc.first_line) {
              if (loc.first_line <= 0 && preceding) {
                loc.first_line = preceding.last_line | 0;
                loc.first_column = preceding.last_column | 0;
                if (preceding.range) {
                  loc.range[0] = actual.range[1] | 0;
                }
              }
              if ((loc.last_line <= 0 || loc.last_line < loc.first_line) && following) {
                loc.last_line = following.first_line | 0;
                loc.last_column = following.first_column | 0;
                if (following.range) {
                  loc.range[1] = actual.range[0] | 0;
                }
              }
              if (loc.first_line <= 0 && current && (loc.last_line <= 0 || current.last_line <= loc.last_line)) {
                loc.first_line = current.first_line | 0;
                loc.first_column = current.first_column | 0;
                if (current.range) {
                  loc.range[0] = current.range[0] | 0;
                }
              }
              if (loc.last_line <= 0 && current && (loc.first_line <= 0 || current.first_line >= loc.first_line)) {
                loc.last_line = current.last_line | 0;
                loc.last_column = current.last_column | 0;
                if (current.range) {
                  loc.range[1] = current.range[1] | 0;
                }
              }
            }
            if (loc.last_line <= 0) {
              if (loc.first_line <= 0) {
                loc.first_line = this.yylloc.first_line;
                loc.last_line = this.yylloc.last_line;
                loc.first_column = this.yylloc.first_column;
                loc.last_column = this.yylloc.last_column;
                loc.range[0] = this.yylloc.range[0];
                loc.range[1] = this.yylloc.range[1];
              } else {
                loc.last_line = this.yylloc.last_line;
                loc.last_column = this.yylloc.last_column;
                loc.range[1] = this.yylloc.range[1];
              }
            }
            if (loc.first_line <= 0) {
              loc.first_line = loc.last_line;
              loc.first_column = 0;
              loc.range[1] = loc.range[0];
            }
            if (loc.first_column < 0) {
              loc.first_column = 0;
            }
            if (loc.last_column < 0) {
              loc.last_column = loc.first_column > 0 ? loc.first_column : 80;
            }
            return loc;
          },
          prettyPrintRange: function lexer_prettyPrintRange(loc, context_loc, context_loc2) {
            loc = this.deriveLocationInfo(loc, context_loc, context_loc2);
            const CONTEXT = 3;
            const CONTEXT_TAIL = 1;
            const MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT = 2;
            var input = this.matched + this._input;
            var lines = input.split("\n");
            var l0 = Math.max(1, context_loc ? context_loc.first_line : loc.first_line - CONTEXT);
            var l1 = Math.max(1, context_loc2 ? context_loc2.last_line : loc.last_line + CONTEXT_TAIL);
            var lineno_display_width = 1 + Math.log10(l1 | 1) | 0;
            var ws_prefix = new Array(lineno_display_width).join(" ");
            var nonempty_line_indexes = [];
            var rv = lines.slice(l0 - 1, l1 + 1).map(function injectLineNumber(line, index) {
              var lno = index + l0;
              var lno_pfx = (ws_prefix + lno).substr(-lineno_display_width);
              var rv2 = lno_pfx + ": " + line;
              var errpfx = new Array(lineno_display_width + 1).join("^");
              var offset = 2 + 1;
              var len = 0;
              if (lno === loc.first_line) {
                offset += loc.first_column;
                len = Math.max(
                  2,
                  (lno === loc.last_line ? loc.last_column : line.length) - loc.first_column + 1
                );
              } else if (lno === loc.last_line) {
                len = Math.max(2, loc.last_column + 1);
              } else if (lno > loc.first_line && lno < loc.last_line) {
                len = Math.max(2, line.length + 1);
              }
              if (len) {
                var lead = new Array(offset).join(".");
                var mark = new Array(len).join("^");
                rv2 += "\n" + errpfx + lead + mark;
                if (line.trim().length > 0) {
                  nonempty_line_indexes.push(index);
                }
              }
              rv2 = rv2.replace(/\t/g, " ");
              return rv2;
            });
            if (nonempty_line_indexes.length > 2 * MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT) {
              var clip_start = nonempty_line_indexes[MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT - 1] + 1;
              var clip_end = nonempty_line_indexes[nonempty_line_indexes.length - MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT] - 1;
              var intermediate_line = new Array(lineno_display_width + 1).join(" ") + "  (...continued...)";
              intermediate_line += "\n" + new Array(lineno_display_width + 1).join("-") + "  (---------------)";
              rv.splice(clip_start, clip_end - clip_start + 1, intermediate_line);
            }
            return rv.join("\n");
          },
          describeYYLLOC: function lexer_describe_yylloc(yylloc, display_range_too) {
            var l1 = yylloc.first_line;
            var l2 = yylloc.last_line;
            var c1 = yylloc.first_column;
            var c22 = yylloc.last_column;
            var dl = l2 - l1;
            var dc = c22 - c1;
            var rv;
            if (dl === 0) {
              rv = "line " + l1 + ", ";
              if (dc <= 1) {
                rv += "column " + c1;
              } else {
                rv += "columns " + c1 + " .. " + c22;
              }
            } else {
              rv = "lines " + l1 + "(column " + c1 + ") .. " + l2 + "(column " + c22 + ")";
            }
            if (yylloc.range && display_range_too) {
              var r1 = yylloc.range[0];
              var r2 = yylloc.range[1] - 1;
              if (r2 <= r1) {
                rv += " {String Offset: " + r1 + "}";
              } else {
                rv += " {String Offset range: " + r1 + " .. " + r2 + "}";
              }
            }
            return rv;
          },
          test_match: function lexer_test_match(match, indexed_rule) {
            var token, lines, backup, match_str, match_str_len;
            if (this.options.backtrack_lexer) {
              backup = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylloc.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                  range: this.yylloc.range.slice(0)
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
              };
            }
            match_str = match[0];
            match_str_len = match_str.length;
            lines = match_str.split(/(?:\r\n?|\n)/g);
            if (lines.length > 1) {
              this.yylineno += lines.length - 1;
              this.yylloc.last_line = this.yylineno + 1;
              this.yylloc.last_column = lines[lines.length - 1].length;
            } else {
              this.yylloc.last_column += match_str_len;
            }
            this.yytext += match_str;
            this.match += match_str;
            this.matched += match_str;
            this.matches = match;
            this.yyleng = this.yytext.length;
            this.yylloc.range[1] += match_str_len;
            this.offset += match_str_len;
            this._more = false;
            this._backtrack = false;
            this._input = this._input.slice(match_str_len);
            token = this.performAction.call(
              this,
              this.yy,
              indexed_rule,
              this.conditionStack[this.conditionStack.length - 1]
            );
            if (this.done && this._input) {
              this.done = false;
            }
            if (token) {
              return token;
            } else if (this._backtrack) {
              for (var k2 in backup) {
                this[k2] = backup[k2];
              }
              this.__currentRuleSet__ = null;
              return false;
            } else if (this._signaled_error_token) {
              token = this._signaled_error_token;
              this._signaled_error_token = false;
              return token;
            }
            return false;
          },
          next: function lexer_next() {
            if (this.done) {
              this.clear();
              return this.EOF;
            }
            if (!this._input) {
              this.done = true;
            }
            var token, match, tempMatch, index;
            if (!this._more) {
              this.clear();
            }
            var spec = this.__currentRuleSet__;
            if (!spec) {
              spec = this.__currentRuleSet__ = this._currentRules();
              if (!spec || !spec.rules) {
                var lineno_msg = "";
                if (this.options.trackPosition) {
                  lineno_msg = " on line " + (this.yylineno + 1);
                }
                var p = this.constructLexErrorInfo(
                  "Internal lexer engine error" + lineno_msg + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!',
                  false
                );
                return this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
              }
            }
            var rule_ids = spec.rules;
            var regexes = spec.__rule_regexes;
            var len = spec.__rule_count;
            for (var i = 1; i <= len; i++) {
              tempMatch = this._input.match(regexes[i]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                  token = this.test_match(tempMatch, rule_ids[i]);
                  if (token !== false) {
                    return token;
                  } else if (this._backtrack) {
                    match = void 0;
                    continue;
                  } else {
                    return false;
                  }
                } else if (!this.options.flex) {
                  break;
                }
              }
            }
            if (match) {
              token = this.test_match(match, rule_ids[index]);
              if (token !== false) {
                return token;
              }
              return false;
            }
            if (!this._input) {
              this.done = true;
              this.clear();
              return this.EOF;
            } else {
              var lineno_msg = "";
              if (this.options.trackPosition) {
                lineno_msg = " on line " + (this.yylineno + 1);
              }
              var p = this.constructLexErrorInfo(
                "Lexical error" + lineno_msg + ": Unrecognized text.",
                this.options.lexerErrorsAreRecoverable
              );
              var pendingInput = this._input;
              var activeCondition = this.topState();
              var conditionStackDepth = this.conditionStack.length;
              token = this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR;
              if (token === this.ERROR) {
                if (!this.matches && pendingInput === this._input && activeCondition === this.topState() && conditionStackDepth === this.conditionStack.length) {
                  this.input();
                }
              }
              return token;
            }
          },
          lex: function lexer_lex() {
            var r;
            if (typeof this.pre_lex === "function") {
              r = this.pre_lex.call(this, 0);
            }
            if (typeof this.options.pre_lex === "function") {
              r = this.options.pre_lex.call(this, r) || r;
            }
            if (this.yy && typeof this.yy.pre_lex === "function") {
              r = this.yy.pre_lex.call(this, r) || r;
            }
            while (!r) {
              r = this.next();
            }
            if (this.yy && typeof this.yy.post_lex === "function") {
              r = this.yy.post_lex.call(this, r) || r;
            }
            if (typeof this.options.post_lex === "function") {
              r = this.options.post_lex.call(this, r) || r;
            }
            if (typeof this.post_lex === "function") {
              r = this.post_lex.call(this, r) || r;
            }
            return r;
          },
          fastLex: function lexer_fastLex() {
            var r;
            while (!r) {
              r = this.next();
            }
            return r;
          },
          canIUse: function lexer_canIUse() {
            var rv = {
              fastLex: !(typeof this.pre_lex === "function" || typeof this.options.pre_lex === "function" || this.yy && typeof this.yy.pre_lex === "function" || this.yy && typeof this.yy.post_lex === "function" || typeof this.options.post_lex === "function" || typeof this.post_lex === "function") && typeof this.fastLex === "function"
            };
            return rv;
          },
          begin: function lexer_begin(condition) {
            return this.pushState(condition);
          },
          pushState: function lexer_pushState(condition) {
            this.conditionStack.push(condition);
            this.__currentRuleSet__ = null;
            return this;
          },
          popState: function lexer_popState() {
            var n = this.conditionStack.length - 1;
            if (n > 0) {
              this.__currentRuleSet__ = null;
              return this.conditionStack.pop();
            } else {
              return this.conditionStack[0];
            }
          },
          topState: function lexer_topState(n) {
            n = this.conditionStack.length - 1 - Math.abs(n || 0);
            if (n >= 0) {
              return this.conditionStack[n];
            } else {
              return "INITIAL";
            }
          },
          _currentRules: function lexer__currentRules() {
            if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]];
            } else {
              return this.conditions["INITIAL"];
            }
          },
          stateStackSize: function lexer_stateStackSize() {
            return this.conditionStack.length;
          },
          options: {
            trackPosition: true
          },
          JisonLexerError,
          performAction: function lexer__performAction(yy, yyrulenumber, YY_START) {
            var yy_ = this;
            var YYSTATE = YY_START;
            switch (yyrulenumber) {
              case 1:
                break;
              default:
                return this.simpleCaseActionClusters[yyrulenumber];
            }
          },
          simpleCaseActionClusters: {
            0: 13,
            2: 5,
            3: 6,
            4: 3,
            5: 4,
            6: 15,
            7: 15,
            8: 15,
            9: 15,
            10: 15,
            11: 15,
            12: 16,
            13: 16,
            14: 16,
            15: 16,
            16: 17,
            17: 17,
            18: 18,
            19: 18,
            20: 19,
            21: 19,
            22: 19,
            23: 20,
            24: 21,
            25: 22,
            26: 23,
            27: 25,
            28: 24,
            29: 26,
            30: 27,
            31: 28,
            32: 11,
            33: 9,
            34: 12,
            35: 10,
            36: 7,
            37: 8,
            38: 14,
            39: 1
          },
          rules: [
            /^(?:(--[\d\-A-Za-z]*))/,
            /^(?:\s+)/,
            /^(?:\*)/,
            /^(?:\/)/,
            /^(?:\+)/,
            /^(?:-)/,
            /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
            /^(?:(\d+(\.\d*)?|\.\d+)%)/,
            /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
            /^(?:(calc))/,
            /^(?:(var))/,
            /^(?:([a-z]+))/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:,)/,
            /^(?:$)/
          ],
          conditions: {
            "INITIAL": {
              rules: [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39
              ],
              inclusive: true
            }
          }
        };
        return lexer2;
      }();
      parser2.lexer = lexer;
      function Parser() {
        this.yy = {};
      }
      Parser.prototype = parser2;
      parser2.Parser = Parser;
      return new Parser();
    }();
    if (typeof __require !== "undefined" && typeof exports !== "undefined") {
      exports.parser = parser;
      exports.Parser = parser.Parser;
      exports.parse = function() {
        return parser.parse.apply(parser, arguments);
      };
    }
  }
});

// node_modules/css-unit-converter/index.js
var require_css_unit_converter = __commonJS({
  "node_modules/css-unit-converter/index.js"(exports, module) {
    var conversions = {
      "px": {
        "px": 1,
        "cm": 96 / 2.54,
        "mm": 96 / 25.4,
        "in": 96,
        "pt": 96 / 72,
        "pc": 16
      },
      "cm": {
        "px": 2.54 / 96,
        "cm": 1,
        "mm": 0.1,
        "in": 2.54,
        "pt": 2.54 / 72,
        "pc": 2.54 / 6
      },
      "mm": {
        "px": 25.4 / 96,
        "cm": 10,
        "mm": 1,
        "in": 25.4,
        "pt": 25.4 / 72,
        "pc": 25.4 / 6
      },
      "in": {
        "px": 1 / 96,
        "cm": 1 / 2.54,
        "mm": 1 / 25.4,
        "in": 1,
        "pt": 1 / 72,
        "pc": 1 / 6
      },
      "pt": {
        "px": 0.75,
        "cm": 72 / 2.54,
        "mm": 72 / 25.4,
        "in": 72,
        "pt": 1,
        "pc": 12
      },
      "pc": {
        "px": 6 / 96,
        "cm": 6 / 2.54,
        "mm": 6 / 25.4,
        "in": 6,
        "pt": 6 / 72,
        "pc": 1
      },
      "deg": {
        "deg": 1,
        "grad": 0.9,
        "rad": 180 / Math.PI,
        "turn": 360
      },
      "grad": {
        "deg": 400 / 360,
        "grad": 1,
        "rad": 200 / Math.PI,
        "turn": 400
      },
      "rad": {
        "deg": Math.PI / 180,
        "grad": Math.PI / 200,
        "rad": 1,
        "turn": Math.PI * 2
      },
      "turn": {
        "deg": 1 / 360,
        "grad": 1 / 400,
        "rad": 0.5 / Math.PI,
        "turn": 1
      },
      "s": {
        "s": 1,
        "ms": 1 / 1e3
      },
      "ms": {
        "s": 1e3,
        "ms": 1
      },
      "Hz": {
        "Hz": 1,
        "kHz": 1e3
      },
      "kHz": {
        "Hz": 1 / 1e3,
        "kHz": 1
      },
      "dpi": {
        "dpi": 1,
        "dpcm": 1 / 2.54,
        "dppx": 1 / 96
      },
      "dpcm": {
        "dpi": 2.54,
        "dpcm": 1,
        "dppx": 2.54 / 96
      },
      "dppx": {
        "dpi": 96,
        "dpcm": 96 / 2.54,
        "dppx": 1
      }
    };
    module.exports = function(value, sourceUnit, targetUnit, precision) {
      if (!conversions.hasOwnProperty(targetUnit))
        throw new Error("Cannot convert to " + targetUnit);
      if (!conversions[targetUnit].hasOwnProperty(sourceUnit))
        throw new Error("Cannot convert from " + sourceUnit + " to " + targetUnit);
      var converted = conversions[targetUnit][sourceUnit] * value;
      if (precision !== false) {
        precision = Math.pow(10, parseInt(precision) || 5);
        return Math.round(converted * precision) / precision;
      }
      return converted;
    };
  }
});

// node_modules/reduce-css-calc/dist/lib/convert.js
var require_convert = __commonJS({
  "node_modules/reduce-css-calc/dist/lib/convert.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _cssUnitConverter = require_css_unit_converter();
    var _cssUnitConverter2 = _interopRequireDefault(_cssUnitConverter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function convertNodes(left, right, precision) {
      switch (left.type) {
        case "LengthValue":
        case "AngleValue":
        case "TimeValue":
        case "FrequencyValue":
        case "ResolutionValue":
          return convertAbsoluteLength(left, right, precision);
        default:
          return { left, right };
      }
    }
    function convertAbsoluteLength(left, right, precision) {
      if (right.type === left.type) {
        right = {
          type: left.type,
          value: (0, _cssUnitConverter2.default)(right.value, right.unit, left.unit, precision),
          unit: left.unit
        };
      }
      return { left, right };
    }
    exports.default = convertNodes;
    module.exports = exports["default"];
  }
});

// node_modules/reduce-css-calc/dist/lib/reducer.js
var require_reducer = __commonJS({
  "node_modules/reduce-css-calc/dist/lib/reducer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.flip = flip;
    var _convert = require_convert();
    var _convert2 = _interopRequireDefault(_convert);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function reduce(node, precision) {
      if (node.type === "MathExpression")
        return reduceMathExpression(node, precision);
      if (node.type === "Calc")
        return reduce(node.value, precision);
      return node;
    }
    function isEqual(left, right) {
      return left.type === right.type && left.value === right.value;
    }
    function isValueType(type) {
      switch (type) {
        case "LengthValue":
        case "AngleValue":
        case "TimeValue":
        case "FrequencyValue":
        case "ResolutionValue":
        case "EmValue":
        case "ExValue":
        case "ChValue":
        case "RemValue":
        case "VhValue":
        case "VwValue":
        case "VminValue":
        case "VmaxValue":
        case "PercentageValue":
        case "Value":
          return true;
      }
      return false;
    }
    function convertMathExpression(node, precision) {
      var nodes = (0, _convert2.default)(node.left, node.right, precision);
      var left = reduce(nodes.left, precision);
      var right = reduce(nodes.right, precision);
      if (left.type === "MathExpression" && right.type === "MathExpression") {
        if (left.operator === "/" && right.operator === "*" || left.operator === "-" && right.operator === "+" || left.operator === "*" && right.operator === "/" || left.operator === "+" && right.operator === "-") {
          if (isEqual(left.right, right.right))
            nodes = (0, _convert2.default)(left.left, right.left, precision);
          else if (isEqual(left.right, right.left))
            nodes = (0, _convert2.default)(left.left, right.right, precision);
          left = reduce(nodes.left, precision);
          right = reduce(nodes.right, precision);
        }
      }
      node.left = left;
      node.right = right;
      return node;
    }
    function flip(operator) {
      return operator === "+" ? "-" : "+";
    }
    function flipValue(node) {
      if (isValueType(node.type))
        node.value = -node.value;
      else if (node.type == "MathExpression") {
        node.left = flipValue(node.left);
        node.right = flipValue(node.right);
      }
      return node;
    }
    function reduceAddSubExpression(node, precision) {
      var _node = node, left = _node.left, right = _node.right, op = _node.operator;
      if (left.type === "CssVariable" || right.type === "CssVariable")
        return node;
      if (right.value === 0)
        return left;
      if (left.value === 0 && op === "+")
        return right;
      if (left.value === 0 && op === "-")
        return flipValue(right);
      if (left.type === right.type && isValueType(left.type)) {
        node = Object.assign({}, left);
        if (op === "+")
          node.value = left.value + right.value;
        else
          node.value = left.value - right.value;
      }
      if (isValueType(left.type) && (right.operator === "+" || right.operator === "-") && right.type === "MathExpression") {
        if (left.type === right.left.type) {
          node = Object.assign({}, node);
          node.left = reduce({
            type: "MathExpression",
            operator: op,
            left,
            right: right.left
          }, precision);
          node.right = right.right;
          node.operator = op === "-" ? flip(right.operator) : right.operator;
          return reduce(node, precision);
        } else if (left.type === right.right.type) {
          node = Object.assign({}, node);
          node.left = reduce({
            type: "MathExpression",
            operator: op === "-" ? flip(right.operator) : right.operator,
            left,
            right: right.right
          }, precision);
          node.right = right.left;
          return reduce(node, precision);
        }
      }
      if (left.type === "MathExpression" && (left.operator === "+" || left.operator === "-") && isValueType(right.type)) {
        if (right.type === left.left.type) {
          node = Object.assign({}, left);
          node.left = reduce({
            type: "MathExpression",
            operator: op,
            left: left.left,
            right
          }, precision);
          return reduce(node, precision);
        } else if (right.type === left.right.type) {
          node = Object.assign({}, left);
          if (left.operator === "-") {
            node.right = reduce({
              type: "MathExpression",
              operator: op === "-" ? "+" : "-",
              left: right,
              right: left.right
            }, precision);
            node.operator = op === "-" ? "-" : "+";
          } else {
            node.right = reduce({
              type: "MathExpression",
              operator: op,
              left: left.right,
              right
            }, precision);
          }
          if (node.right.value < 0) {
            node.right.value *= -1;
            node.operator = node.operator === "-" ? "+" : "-";
          }
          return reduce(node, precision);
        }
      }
      return node;
    }
    function reduceDivisionExpression(node, precision) {
      if (!isValueType(node.right.type))
        return node;
      if (node.right.type !== "Value")
        throw new Error('Cannot divide by "' + node.right.unit + '", number expected');
      if (node.right.value === 0)
        throw new Error("Cannot divide by zero");
      if (node.left.type === "MathExpression") {
        if (isValueType(node.left.left.type) && isValueType(node.left.right.type)) {
          node.left.left.value /= node.right.value;
          node.left.right.value /= node.right.value;
          return reduce(node.left, precision);
        }
        return node;
      } else if (isValueType(node.left.type)) {
        node.left.value /= node.right.value;
        return node.left;
      }
      return node;
    }
    function reduceMultiplicationExpression(node) {
      if (node.left.type === "MathExpression" && node.right.type === "Value") {
        if (isValueType(node.left.left.type) && isValueType(node.left.right.type)) {
          node.left.left.value *= node.right.value;
          node.left.right.value *= node.right.value;
          return node.left;
        }
      } else if (isValueType(node.left.type) && node.right.type === "Value") {
        node.left.value *= node.right.value;
        return node.left;
      } else if (node.left.type === "Value" && node.right.type === "MathExpression") {
        if (isValueType(node.right.left.type) && isValueType(node.right.right.type)) {
          node.right.left.value *= node.left.value;
          node.right.right.value *= node.left.value;
          return node.right;
        }
      } else if (node.left.type === "Value" && isValueType(node.right.type)) {
        node.right.value *= node.left.value;
        return node.right;
      }
      return node;
    }
    function reduceMathExpression(node, precision) {
      node = convertMathExpression(node, precision);
      switch (node.operator) {
        case "+":
        case "-":
          return reduceAddSubExpression(node, precision);
        case "/":
          return reduceDivisionExpression(node, precision);
        case "*":
          return reduceMultiplicationExpression(node);
      }
      return node;
    }
    exports.default = reduce;
  }
});

// node_modules/reduce-css-calc/dist/lib/stringifier.js
var require_stringifier = __commonJS({
  "node_modules/reduce-css-calc/dist/lib/stringifier.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(calc, node, precision) {
      var str = stringify(node, precision);
      if (node.type === "MathExpression") {
        str = calc + "(" + str + ")";
      }
      return str;
    };
    var _reducer = require_reducer();
    var order = {
      "*": 0,
      "/": 0,
      "+": 1,
      "-": 1
    };
    function round(value, prec) {
      if (prec !== false) {
        var precision = Math.pow(10, prec);
        return Math.round(value * precision) / precision;
      }
      return value;
    }
    function stringify(node, prec) {
      switch (node.type) {
        case "MathExpression": {
          var left = node.left, right = node.right, op = node.operator;
          var str = "";
          if (left.type === "MathExpression" && order[op] < order[left.operator])
            str += "(" + stringify(left, prec) + ")";
          else
            str += stringify(left, prec);
          str += " " + node.operator + " ";
          if (right.type === "MathExpression" && order[op] < order[right.operator]) {
            str += "(" + stringify(right, prec) + ")";
          } else if (right.type === "MathExpression" && op === "-" && ["+", "-"].includes(right.operator)) {
            right.operator = (0, _reducer.flip)(right.operator);
            str += stringify(right, prec);
          } else {
            str += stringify(right, prec);
          }
          return str;
        }
        case "Value":
          return round(node.value, prec);
        case "CssVariable":
          if (node.fallback) {
            return "var(" + node.value + ", " + stringify(node.fallback, prec, true) + ")";
          }
          return "var(" + node.value + ")";
        case "Calc":
          if (node.prefix) {
            return "-" + node.prefix + "-calc(" + stringify(node.value, prec) + ")";
          }
          return "calc(" + stringify(node.value, prec) + ")";
        default:
          return round(node.value, prec) + node.unit;
      }
    }
    module.exports = exports["default"];
  }
});

// node_modules/reduce-css-calc/dist/index.js
var require_dist = __commonJS({
  "node_modules/reduce-css-calc/dist/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _postcssValueParser = require_lib();
    var _postcssValueParser2 = _interopRequireDefault(_postcssValueParser);
    var _parser = require_parser();
    var _reducer = require_reducer();
    var _reducer2 = _interopRequireDefault(_reducer);
    var _stringifier = require_stringifier();
    var _stringifier2 = _interopRequireDefault(_stringifier);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MATCH_CALC = /((?:\-[a-z]+\-)?calc)/;
    exports.default = function(value) {
      var precision = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
      return (0, _postcssValueParser2.default)(value).walk(function(node) {
        if (node.type !== "function" || !MATCH_CALC.test(node.value))
          return;
        var contents = _postcssValueParser2.default.stringify(node.nodes);
        if (contents.indexOf("constant") >= 0 || contents.indexOf("env") >= 0)
          return;
        var ast = _parser.parser.parse(contents);
        var reducedAst = (0, _reducer2.default)(ast, precision);
        node.type = "word";
        node.value = (0, _stringifier2.default)(node.value, reducedAst, precision);
      }, true).toString();
    };
    module.exports = exports["default"];
  }
});

// node_modules/recharts/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/recharts/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment2 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment2;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment2;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/recharts/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/recharts/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual;
  }
});

// node_modules/lodash/_baseExtremum.js
var require_baseExtremum = __commonJS({
  "node_modules/lodash/_baseExtremum.js"(exports, module) {
    var isSymbol2 = require_isSymbol();
    function baseExtremum(array, iteratee, comparator) {
      var index = -1, length = array.length;
      while (++index < length) {
        var value = array[index], current = iteratee(value);
        if (current != null && (computed === void 0 ? current === current && !isSymbol2(current) : comparator(current, computed))) {
          var computed = current, result = value;
        }
      }
      return result;
    }
    module.exports = baseExtremum;
  }
});

// node_modules/lodash/_baseGt.js
var require_baseGt = __commonJS({
  "node_modules/lodash/_baseGt.js"(exports, module) {
    function baseGt(value, other) {
      return value > other;
    }
    module.exports = baseGt;
  }
});

// node_modules/lodash/max.js
var require_max = __commonJS({
  "node_modules/lodash/max.js"(exports, module) {
    var baseExtremum = require_baseExtremum();
    var baseGt = require_baseGt();
    var identity7 = require_identity();
    function max2(array) {
      return array && array.length ? baseExtremum(array, identity7, baseGt) : void 0;
    }
    module.exports = max2;
  }
});

// node_modules/lodash/_baseLt.js
var require_baseLt = __commonJS({
  "node_modules/lodash/_baseLt.js"(exports, module) {
    function baseLt(value, other) {
      return value < other;
    }
    module.exports = baseLt;
  }
});

// node_modules/lodash/min.js
var require_min = __commonJS({
  "node_modules/lodash/min.js"(exports, module) {
    var baseExtremum = require_baseExtremum();
    var baseLt = require_baseLt();
    var identity7 = require_identity();
    function min2(array) {
      return array && array.length ? baseExtremum(array, identity7, baseLt) : void 0;
    }
    module.exports = min2;
  }
});

// node_modules/lodash/map.js
var require_map = __commonJS({
  "node_modules/lodash/map.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var isArray = require_isArray();
    function map3(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, baseIteratee(iteratee, 3));
    }
    module.exports = map3;
  }
});

// node_modules/lodash/flatMap.js
var require_flatMap = __commonJS({
  "node_modules/lodash/flatMap.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var map3 = require_map();
    function flatMap(collection, iteratee) {
      return baseFlatten(map3(collection, iteratee), 1);
    }
    module.exports = flatMap;
  }
});

// node_modules/decimal.js-light/decimal.js
var require_decimal = __commonJS({
  "node_modules/decimal.js-light/decimal.js"(exports, module) {
    (function(globalScope) {
      "use strict";
      var MAX_DIGITS = 1e9, Decimal3 = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
      }, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", exponentOutOfRange = decimalError + "Exponent out of range: ", mathfloor = Math.floor, mathpow = Math.pow, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ONE, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE), P = {};
      P.absoluteValue = P.abs = function() {
        var x2 = new this.constructor(this);
        if (x2.s)
          x2.s = 1;
        return x2;
      };
      P.comparedTo = P.cmp = function(y2) {
        var i, j, xdL, ydL, x2 = this;
        y2 = new x2.constructor(y2);
        if (x2.s !== y2.s)
          return x2.s || -y2.s;
        if (x2.e !== y2.e)
          return x2.e > y2.e ^ x2.s < 0 ? 1 : -1;
        xdL = x2.d.length;
        ydL = y2.d.length;
        for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
          if (x2.d[i] !== y2.d[i])
            return x2.d[i] > y2.d[i] ^ x2.s < 0 ? 1 : -1;
        }
        return xdL === ydL ? 0 : xdL > ydL ^ x2.s < 0 ? 1 : -1;
      };
      P.decimalPlaces = P.dp = function() {
        var x2 = this, w = x2.d.length - 1, dp = (w - x2.e) * LOG_BASE;
        w = x2.d[w];
        if (w)
          for (; w % 10 == 0; w /= 10)
            dp--;
        return dp < 0 ? 0 : dp;
      };
      P.dividedBy = P.div = function(y2) {
        return divide(this, new this.constructor(y2));
      };
      P.dividedToIntegerBy = P.idiv = function(y2) {
        var x2 = this, Ctor = x2.constructor;
        return round(divide(x2, new Ctor(y2), 0, 1), Ctor.precision);
      };
      P.equals = P.eq = function(y2) {
        return !this.cmp(y2);
      };
      P.exponent = function() {
        return getBase10Exponent(this);
      };
      P.greaterThan = P.gt = function(y2) {
        return this.cmp(y2) > 0;
      };
      P.greaterThanOrEqualTo = P.gte = function(y2) {
        return this.cmp(y2) >= 0;
      };
      P.isInteger = P.isint = function() {
        return this.e > this.d.length - 2;
      };
      P.isNegative = P.isneg = function() {
        return this.s < 0;
      };
      P.isPositive = P.ispos = function() {
        return this.s > 0;
      };
      P.isZero = function() {
        return this.s === 0;
      };
      P.lessThan = P.lt = function(y2) {
        return this.cmp(y2) < 0;
      };
      P.lessThanOrEqualTo = P.lte = function(y2) {
        return this.cmp(y2) < 1;
      };
      P.logarithm = P.log = function(base) {
        var r, x2 = this, Ctor = x2.constructor, pr = Ctor.precision, wpr = pr + 5;
        if (base === void 0) {
          base = new Ctor(10);
        } else {
          base = new Ctor(base);
          if (base.s < 1 || base.eq(ONE))
            throw Error(decimalError + "NaN");
        }
        if (x2.s < 1)
          throw Error(decimalError + (x2.s ? "NaN" : "-Infinity"));
        if (x2.eq(ONE))
          return new Ctor(0);
        external = false;
        r = divide(ln(x2, wpr), ln(base, wpr), wpr);
        external = true;
        return round(r, pr);
      };
      P.minus = P.sub = function(y2) {
        var x2 = this;
        y2 = new x2.constructor(y2);
        return x2.s == y2.s ? subtract(x2, y2) : add(x2, (y2.s = -y2.s, y2));
      };
      P.modulo = P.mod = function(y2) {
        var q, x2 = this, Ctor = x2.constructor, pr = Ctor.precision;
        y2 = new Ctor(y2);
        if (!y2.s)
          throw Error(decimalError + "NaN");
        if (!x2.s)
          return round(new Ctor(x2), pr);
        external = false;
        q = divide(x2, y2, 0, 1).times(y2);
        external = true;
        return x2.minus(q);
      };
      P.naturalExponential = P.exp = function() {
        return exp(this);
      };
      P.naturalLogarithm = P.ln = function() {
        return ln(this);
      };
      P.negated = P.neg = function() {
        var x2 = new this.constructor(this);
        x2.s = -x2.s || 0;
        return x2;
      };
      P.plus = P.add = function(y2) {
        var x2 = this;
        y2 = new x2.constructor(y2);
        return x2.s == y2.s ? add(x2, y2) : subtract(x2, (y2.s = -y2.s, y2));
      };
      P.precision = P.sd = function(z) {
        var e, sd, w, x2 = this;
        if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
          throw Error(invalidArgument + z);
        e = getBase10Exponent(x2) + 1;
        w = x2.d.length - 1;
        sd = w * LOG_BASE + 1;
        w = x2.d[w];
        if (w) {
          for (; w % 10 == 0; w /= 10)
            sd--;
          for (w = x2.d[0]; w >= 10; w /= 10)
            sd++;
        }
        return z && e > sd ? e : sd;
      };
      P.squareRoot = P.sqrt = function() {
        var e, n, pr, r, s2, t, wpr, x2 = this, Ctor = x2.constructor;
        if (x2.s < 1) {
          if (!x2.s)
            return new Ctor(0);
          throw Error(decimalError + "NaN");
        }
        e = getBase10Exponent(x2);
        external = false;
        s2 = Math.sqrt(+x2);
        if (s2 == 0 || s2 == 1 / 0) {
          n = digitsToString(x2.d);
          if ((n.length + e) % 2 == 0)
            n += "0";
          s2 = Math.sqrt(n);
          e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
          if (s2 == 1 / 0) {
            n = "5e" + e;
          } else {
            n = s2.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
          }
          r = new Ctor(n);
        } else {
          r = new Ctor(s2.toString());
        }
        pr = Ctor.precision;
        s2 = wpr = pr + 3;
        for (; ; ) {
          t = r;
          r = t.plus(divide(x2, t, wpr + 2)).times(0.5);
          if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
            n = n.slice(wpr - 3, wpr + 1);
            if (s2 == wpr && n == "4999") {
              round(t, pr + 1, 0);
              if (t.times(t).eq(x2)) {
                r = t;
                break;
              }
            } else if (n != "9999") {
              break;
            }
            wpr += 4;
          }
        }
        external = true;
        return round(r, pr);
      };
      P.times = P.mul = function(y2) {
        var carry, e, i, k2, r, rL, t, xdL, ydL, x2 = this, Ctor = x2.constructor, xd = x2.d, yd = (y2 = new Ctor(y2)).d;
        if (!x2.s || !y2.s)
          return new Ctor(0);
        y2.s *= x2.s;
        e = x2.e + y2.e;
        xdL = xd.length;
        ydL = yd.length;
        if (xdL < ydL) {
          r = xd;
          xd = yd;
          yd = r;
          rL = xdL;
          xdL = ydL;
          ydL = rL;
        }
        r = [];
        rL = xdL + ydL;
        for (i = rL; i--; )
          r.push(0);
        for (i = ydL; --i >= 0; ) {
          carry = 0;
          for (k2 = xdL + i; k2 > i; ) {
            t = r[k2] + yd[i] * xd[k2 - i - 1] + carry;
            r[k2--] = t % BASE | 0;
            carry = t / BASE | 0;
          }
          r[k2] = (r[k2] + carry) % BASE | 0;
        }
        for (; !r[--rL]; )
          r.pop();
        if (carry)
          ++e;
        else
          r.shift();
        y2.d = r;
        y2.e = e;
        return external ? round(y2, Ctor.precision) : y2;
      };
      P.toDecimalPlaces = P.todp = function(dp, rm) {
        var x2 = this, Ctor = x2.constructor;
        x2 = new Ctor(x2);
        if (dp === void 0)
          return x2;
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        return round(x2, dp + getBase10Exponent(x2) + 1, rm);
      };
      P.toExponential = function(dp, rm) {
        var str, x2 = this, Ctor = x2.constructor;
        if (dp === void 0) {
          str = toString(x2, true);
        } else {
          checkInt32(dp, 0, MAX_DIGITS);
          if (rm === void 0)
            rm = Ctor.rounding;
          else
            checkInt32(rm, 0, 8);
          x2 = round(new Ctor(x2), dp + 1, rm);
          str = toString(x2, true, dp + 1);
        }
        return str;
      };
      P.toFixed = function(dp, rm) {
        var str, y2, x2 = this, Ctor = x2.constructor;
        if (dp === void 0)
          return toString(x2);
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        y2 = round(new Ctor(x2), dp + getBase10Exponent(x2) + 1, rm);
        str = toString(y2.abs(), false, dp + getBase10Exponent(y2) + 1);
        return x2.isneg() && !x2.isZero() ? "-" + str : str;
      };
      P.toInteger = P.toint = function() {
        var x2 = this, Ctor = x2.constructor;
        return round(new Ctor(x2), getBase10Exponent(x2) + 1, Ctor.rounding);
      };
      P.toNumber = function() {
        return +this;
      };
      P.toPower = P.pow = function(y2) {
        var e, k2, pr, r, sign2, yIsInt, x2 = this, Ctor = x2.constructor, guard = 12, yn = +(y2 = new Ctor(y2));
        if (!y2.s)
          return new Ctor(ONE);
        x2 = new Ctor(x2);
        if (!x2.s) {
          if (y2.s < 1)
            throw Error(decimalError + "Infinity");
          return x2;
        }
        if (x2.eq(ONE))
          return x2;
        pr = Ctor.precision;
        if (y2.eq(ONE))
          return round(x2, pr);
        e = y2.e;
        k2 = y2.d.length - 1;
        yIsInt = e >= k2;
        sign2 = x2.s;
        if (!yIsInt) {
          if (sign2 < 0)
            throw Error(decimalError + "NaN");
        } else if ((k2 = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
          r = new Ctor(ONE);
          e = Math.ceil(pr / LOG_BASE + 4);
          external = false;
          for (; ; ) {
            if (k2 % 2) {
              r = r.times(x2);
              truncate(r.d, e);
            }
            k2 = mathfloor(k2 / 2);
            if (k2 === 0)
              break;
            x2 = x2.times(x2);
            truncate(x2.d, e);
          }
          external = true;
          return y2.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
        }
        sign2 = sign2 < 0 && y2.d[Math.max(e, k2)] & 1 ? -1 : 1;
        x2.s = 1;
        external = false;
        r = y2.times(ln(x2, pr + guard));
        external = true;
        r = exp(r);
        r.s = sign2;
        return r;
      };
      P.toPrecision = function(sd, rm) {
        var e, str, x2 = this, Ctor = x2.constructor;
        if (sd === void 0) {
          e = getBase10Exponent(x2);
          str = toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
        } else {
          checkInt32(sd, 1, MAX_DIGITS);
          if (rm === void 0)
            rm = Ctor.rounding;
          else
            checkInt32(rm, 0, 8);
          x2 = round(new Ctor(x2), sd, rm);
          e = getBase10Exponent(x2);
          str = toString(x2, sd <= e || e <= Ctor.toExpNeg, sd);
        }
        return str;
      };
      P.toSignificantDigits = P.tosd = function(sd, rm) {
        var x2 = this, Ctor = x2.constructor;
        if (sd === void 0) {
          sd = Ctor.precision;
          rm = Ctor.rounding;
        } else {
          checkInt32(sd, 1, MAX_DIGITS);
          if (rm === void 0)
            rm = Ctor.rounding;
          else
            checkInt32(rm, 0, 8);
        }
        return round(new Ctor(x2), sd, rm);
      };
      P.toString = P.valueOf = P.val = P.toJSON = function() {
        var x2 = this, e = getBase10Exponent(x2), Ctor = x2.constructor;
        return toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
      };
      function add(x2, y2) {
        var carry, d, e, i, k2, len, xd, yd, Ctor = x2.constructor, pr = Ctor.precision;
        if (!x2.s || !y2.s) {
          if (!y2.s)
            y2 = new Ctor(x2);
          return external ? round(y2, pr) : y2;
        }
        xd = x2.d;
        yd = y2.d;
        k2 = x2.e;
        e = y2.e;
        xd = xd.slice();
        i = k2 - e;
        if (i) {
          if (i < 0) {
            d = xd;
            i = -i;
            len = yd.length;
          } else {
            d = yd;
            e = k2;
            len = xd.length;
          }
          k2 = Math.ceil(pr / LOG_BASE);
          len = k2 > len ? k2 + 1 : len + 1;
          if (i > len) {
            i = len;
            d.length = 1;
          }
          d.reverse();
          for (; i--; )
            d.push(0);
          d.reverse();
        }
        len = xd.length;
        i = yd.length;
        if (len - i < 0) {
          i = len;
          d = yd;
          yd = xd;
          xd = d;
        }
        for (carry = 0; i; ) {
          carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
          xd[i] %= BASE;
        }
        if (carry) {
          xd.unshift(carry);
          ++e;
        }
        for (len = xd.length; xd[--len] == 0; )
          xd.pop();
        y2.d = xd;
        y2.e = e;
        return external ? round(y2, pr) : y2;
      }
      function checkInt32(i, min2, max2) {
        if (i !== ~~i || i < min2 || i > max2) {
          throw Error(invalidArgument + i);
        }
      }
      function digitsToString(d) {
        var i, k2, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
        if (indexOfLastWord > 0) {
          str += w;
          for (i = 1; i < indexOfLastWord; i++) {
            ws = d[i] + "";
            k2 = LOG_BASE - ws.length;
            if (k2)
              str += getZeroString(k2);
            str += ws;
          }
          w = d[i];
          ws = w + "";
          k2 = LOG_BASE - ws.length;
          if (k2)
            str += getZeroString(k2);
        } else if (w === 0) {
          return "0";
        }
        for (; w % 10 === 0; )
          w /= 10;
        return str + w;
      }
      var divide = function() {
        function multiplyInteger(x2, k2) {
          var temp, carry = 0, i = x2.length;
          for (x2 = x2.slice(); i--; ) {
            temp = x2[i] * k2 + carry;
            x2[i] = temp % BASE | 0;
            carry = temp / BASE | 0;
          }
          if (carry)
            x2.unshift(carry);
          return x2;
        }
        function compare(a2, b, aL, bL) {
          var i, r;
          if (aL != bL) {
            r = aL > bL ? 1 : -1;
          } else {
            for (i = r = 0; i < aL; i++) {
              if (a2[i] != b[i]) {
                r = a2[i] > b[i] ? 1 : -1;
                break;
              }
            }
          }
          return r;
        }
        function subtract2(a2, b, aL) {
          var i = 0;
          for (; aL--; ) {
            a2[aL] -= i;
            i = a2[aL] < b[aL] ? 1 : 0;
            a2[aL] = i * BASE + a2[aL] - b[aL];
          }
          for (; !a2[0] && a2.length > 1; )
            a2.shift();
        }
        return function(x2, y2, pr, dp) {
          var cmp, e, i, k2, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x2.constructor, sign2 = x2.s == y2.s ? 1 : -1, xd = x2.d, yd = y2.d;
          if (!x2.s)
            return new Ctor(x2);
          if (!y2.s)
            throw Error(decimalError + "Division by zero");
          e = x2.e - y2.e;
          yL = yd.length;
          xL = xd.length;
          q = new Ctor(sign2);
          qd = q.d = [];
          for (i = 0; yd[i] == (xd[i] || 0); )
            ++i;
          if (yd[i] > (xd[i] || 0))
            --e;
          if (pr == null) {
            sd = pr = Ctor.precision;
          } else if (dp) {
            sd = pr + (getBase10Exponent(x2) - getBase10Exponent(y2)) + 1;
          } else {
            sd = pr;
          }
          if (sd < 0)
            return new Ctor(0);
          sd = sd / LOG_BASE + 2 | 0;
          i = 0;
          if (yL == 1) {
            k2 = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k2) && sd--; i++) {
              t = k2 * BASE + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k2 = t % yd | 0;
            }
          } else {
            k2 = BASE / (yd[0] + 1) | 0;
            if (k2 > 1) {
              yd = multiplyInteger(yd, k2);
              xd = multiplyInteger(xd, k2);
              yL = yd.length;
              xL = xd.length;
            }
            xi = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; )
              rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= BASE / 2)
              ++yd0;
            do {
              k2 = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL)
                  rem0 = rem0 * BASE + (rem[1] || 0);
                k2 = rem0 / yd0 | 0;
                if (k2 > 1) {
                  if (k2 >= BASE)
                    k2 = BASE - 1;
                  prod = multiplyInteger(yd, k2);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k2--;
                    subtract2(prod, yL < prodL ? yz : yd, prodL);
                  }
                } else {
                  if (k2 == 0)
                    cmp = k2 = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL)
                  prod.unshift(0);
                subtract2(rem, prod, remL);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k2++;
                    subtract2(rem, yL < remL ? yz : yd, remL);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k2++;
                rem = [0];
              }
              qd[i++] = k2;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi] || 0;
              } else {
                rem = [xd[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] !== void 0) && sd--);
          }
          if (!qd[0])
            qd.shift();
          q.e = e;
          return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
        };
      }();
      function exp(x2, sd) {
        var denominator, guard, pow2, sum, t, wpr, i = 0, k2 = 0, Ctor = x2.constructor, pr = Ctor.precision;
        if (getBase10Exponent(x2) > 16)
          throw Error(exponentOutOfRange + getBase10Exponent(x2));
        if (!x2.s)
          return new Ctor(ONE);
        if (sd == null) {
          external = false;
          wpr = pr;
        } else {
          wpr = sd;
        }
        t = new Ctor(0.03125);
        while (x2.abs().gte(0.1)) {
          x2 = x2.times(t);
          k2 += 5;
        }
        guard = Math.log(mathpow(2, k2)) / Math.LN10 * 2 + 5 | 0;
        wpr += guard;
        denominator = pow2 = sum = new Ctor(ONE);
        Ctor.precision = wpr;
        for (; ; ) {
          pow2 = round(pow2.times(x2), wpr);
          denominator = denominator.times(++i);
          t = sum.plus(divide(pow2, denominator, wpr));
          if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
            while (k2--)
              sum = round(sum.times(sum), wpr);
            Ctor.precision = pr;
            return sd == null ? (external = true, round(sum, pr)) : sum;
          }
          sum = t;
        }
      }
      function getBase10Exponent(x2) {
        var e = x2.e * LOG_BASE, w = x2.d[0];
        for (; w >= 10; w /= 10)
          e++;
        return e;
      }
      function getLn10(Ctor, sd, pr) {
        if (sd > Ctor.LN10.sd()) {
          external = true;
          if (pr)
            Ctor.precision = pr;
          throw Error(decimalError + "LN10 precision limit exceeded");
        }
        return round(new Ctor(Ctor.LN10), sd);
      }
      function getZeroString(k2) {
        var zs = "";
        for (; k2--; )
          zs += "0";
        return zs;
      }
      function ln(y2, sd) {
        var c2, c0, denominator, e, numerator, sum, t, wpr, x2, n = 1, guard = 10, x3 = y2, xd = x3.d, Ctor = x3.constructor, pr = Ctor.precision;
        if (x3.s < 1)
          throw Error(decimalError + (x3.s ? "NaN" : "-Infinity"));
        if (x3.eq(ONE))
          return new Ctor(0);
        if (sd == null) {
          external = false;
          wpr = pr;
        } else {
          wpr = sd;
        }
        if (x3.eq(10)) {
          if (sd == null)
            external = true;
          return getLn10(Ctor, wpr);
        }
        wpr += guard;
        Ctor.precision = wpr;
        c2 = digitsToString(xd);
        c0 = c2.charAt(0);
        e = getBase10Exponent(x3);
        if (Math.abs(e) < 15e14) {
          while (c0 < 7 && c0 != 1 || c0 == 1 && c2.charAt(1) > 3) {
            x3 = x3.times(y2);
            c2 = digitsToString(x3.d);
            c0 = c2.charAt(0);
            n++;
          }
          e = getBase10Exponent(x3);
          if (c0 > 1) {
            x3 = new Ctor("0." + c2);
            e++;
          } else {
            x3 = new Ctor(c0 + "." + c2.slice(1));
          }
        } else {
          t = getLn10(Ctor, wpr + 2, pr).times(e + "");
          x3 = ln(new Ctor(c0 + "." + c2.slice(1)), wpr - guard).plus(t);
          Ctor.precision = pr;
          return sd == null ? (external = true, round(x3, pr)) : x3;
        }
        sum = numerator = x3 = divide(x3.minus(ONE), x3.plus(ONE), wpr);
        x2 = round(x3.times(x3), wpr);
        denominator = 3;
        for (; ; ) {
          numerator = round(numerator.times(x2), wpr);
          t = sum.plus(divide(numerator, new Ctor(denominator), wpr));
          if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
            sum = sum.times(2);
            if (e !== 0)
              sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
            sum = divide(sum, new Ctor(n), wpr);
            Ctor.precision = pr;
            return sd == null ? (external = true, round(sum, pr)) : sum;
          }
          sum = t;
          denominator += 2;
        }
      }
      function parseDecimal(x2, str) {
        var e, i, len;
        if ((e = str.indexOf(".")) > -1)
          str = str.replace(".", "");
        if ((i = str.search(/e/i)) > 0) {
          if (e < 0)
            e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {
          e = str.length;
        }
        for (i = 0; str.charCodeAt(i) === 48; )
          ++i;
        for (len = str.length; str.charCodeAt(len - 1) === 48; )
          --len;
        str = str.slice(i, len);
        if (str) {
          len -= i;
          e = e - i - 1;
          x2.e = mathfloor(e / LOG_BASE);
          x2.d = [];
          i = (e + 1) % LOG_BASE;
          if (e < 0)
            i += LOG_BASE;
          if (i < len) {
            if (i)
              x2.d.push(+str.slice(0, i));
            for (len -= LOG_BASE; i < len; )
              x2.d.push(+str.slice(i, i += LOG_BASE));
            str = str.slice(i);
            i = LOG_BASE - str.length;
          } else {
            i -= len;
          }
          for (; i--; )
            str += "0";
          x2.d.push(+str);
          if (external && (x2.e > MAX_E || x2.e < -MAX_E))
            throw Error(exponentOutOfRange + e);
        } else {
          x2.s = 0;
          x2.e = 0;
          x2.d = [0];
        }
        return x2;
      }
      function round(x2, sd, rm) {
        var i, j, k2, n, rd, doRound, w, xdi, xd = x2.d;
        for (n = 1, k2 = xd[0]; k2 >= 10; k2 /= 10)
          n++;
        i = sd - n;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w = xd[xdi = 0];
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k2 = xd.length;
          if (xdi >= k2)
            return x2;
          w = k2 = xd[xdi];
          for (n = 1; k2 >= 10; k2 /= 10)
            n++;
          i %= LOG_BASE;
          j = i - LOG_BASE + n;
        }
        if (rm !== void 0) {
          k2 = mathpow(10, n - j - 1);
          rd = w / k2 % 10 | 0;
          doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k2;
          doRound = rm < 4 ? (rd || doRound) && (rm == 0 || rm == (x2.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x2.s < 0 ? 8 : 7));
        }
        if (sd < 1 || !xd[0]) {
          if (doRound) {
            k2 = getBase10Exponent(x2);
            xd.length = 1;
            sd = sd - k2 - 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x2.e = mathfloor(-sd / LOG_BASE) || 0;
          } else {
            xd.length = 1;
            xd[0] = x2.e = x2.s = 0;
          }
          return x2;
        }
        if (i == 0) {
          xd.length = xdi;
          k2 = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k2 = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k2 : 0;
        }
        if (doRound) {
          for (; ; ) {
            if (xdi == 0) {
              if ((xd[0] += k2) == BASE) {
                xd[0] = 1;
                ++x2.e;
              }
              break;
            } else {
              xd[xdi] += k2;
              if (xd[xdi] != BASE)
                break;
              xd[xdi--] = 0;
              k2 = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; )
          xd.pop();
        if (external && (x2.e > MAX_E || x2.e < -MAX_E)) {
          throw Error(exponentOutOfRange + getBase10Exponent(x2));
        }
        return x2;
      }
      function subtract(x2, y2) {
        var d, e, i, j, k2, len, xd, xe, xLTy, yd, Ctor = x2.constructor, pr = Ctor.precision;
        if (!x2.s || !y2.s) {
          if (y2.s)
            y2.s = -y2.s;
          else
            y2 = new Ctor(x2);
          return external ? round(y2, pr) : y2;
        }
        xd = x2.d;
        yd = y2.d;
        e = y2.e;
        xe = x2.e;
        xd = xd.slice();
        k2 = xe - e;
        if (k2) {
          xLTy = k2 < 0;
          if (xLTy) {
            d = xd;
            k2 = -k2;
            len = yd.length;
          } else {
            d = yd;
            e = xe;
            len = xd.length;
          }
          i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
          if (k2 > i) {
            k2 = i;
            d.length = 1;
          }
          d.reverse();
          for (i = k2; i--; )
            d.push(0);
          d.reverse();
        } else {
          i = xd.length;
          len = yd.length;
          xLTy = i < len;
          if (xLTy)
            len = i;
          for (i = 0; i < len; i++) {
            if (xd[i] != yd[i]) {
              xLTy = xd[i] < yd[i];
              break;
            }
          }
          k2 = 0;
        }
        if (xLTy) {
          d = xd;
          xd = yd;
          yd = d;
          y2.s = -y2.s;
        }
        len = xd.length;
        for (i = yd.length - len; i > 0; --i)
          xd[len++] = 0;
        for (i = yd.length; i > k2; ) {
          if (xd[--i] < yd[i]) {
            for (j = i; j && xd[--j] === 0; )
              xd[j] = BASE - 1;
            --xd[j];
            xd[i] += BASE;
          }
          xd[i] -= yd[i];
        }
        for (; xd[--len] === 0; )
          xd.pop();
        for (; xd[0] === 0; xd.shift())
          --e;
        if (!xd[0])
          return new Ctor(0);
        y2.d = xd;
        y2.e = e;
        return external ? round(y2, pr) : y2;
      }
      function toString(x2, isExp, sd) {
        var k2, e = getBase10Exponent(x2), str = digitsToString(x2.d), len = str.length;
        if (isExp) {
          if (sd && (k2 = sd - len) > 0) {
            str = str.charAt(0) + "." + str.slice(1) + getZeroString(k2);
          } else if (len > 1) {
            str = str.charAt(0) + "." + str.slice(1);
          }
          str = str + (e < 0 ? "e" : "e+") + e;
        } else if (e < 0) {
          str = "0." + getZeroString(-e - 1) + str;
          if (sd && (k2 = sd - len) > 0)
            str += getZeroString(k2);
        } else if (e >= len) {
          str += getZeroString(e + 1 - len);
          if (sd && (k2 = sd - e - 1) > 0)
            str = str + "." + getZeroString(k2);
        } else {
          if ((k2 = e + 1) < len)
            str = str.slice(0, k2) + "." + str.slice(k2);
          if (sd && (k2 = sd - len) > 0) {
            if (e + 1 === len)
              str += ".";
            str += getZeroString(k2);
          }
        }
        return x2.s < 0 ? "-" + str : str;
      }
      function truncate(arr, len) {
        if (arr.length > len) {
          arr.length = len;
          return true;
        }
      }
      function clone(obj) {
        var i, p, ps;
        function Decimal4(value) {
          var x2 = this;
          if (!(x2 instanceof Decimal4))
            return new Decimal4(value);
          x2.constructor = Decimal4;
          if (value instanceof Decimal4) {
            x2.s = value.s;
            x2.e = value.e;
            x2.d = (value = value.d) ? value.slice() : value;
            return;
          }
          if (typeof value === "number") {
            if (value * 0 !== 0) {
              throw Error(invalidArgument + value);
            }
            if (value > 0) {
              x2.s = 1;
            } else if (value < 0) {
              value = -value;
              x2.s = -1;
            } else {
              x2.s = 0;
              x2.e = 0;
              x2.d = [0];
              return;
            }
            if (value === ~~value && value < 1e7) {
              x2.e = 0;
              x2.d = [value];
              return;
            }
            return parseDecimal(x2, value.toString());
          } else if (typeof value !== "string") {
            throw Error(invalidArgument + value);
          }
          if (value.charCodeAt(0) === 45) {
            value = value.slice(1);
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          if (isDecimal.test(value))
            parseDecimal(x2, value);
          else
            throw Error(invalidArgument + value);
        }
        Decimal4.prototype = P;
        Decimal4.ROUND_UP = 0;
        Decimal4.ROUND_DOWN = 1;
        Decimal4.ROUND_CEIL = 2;
        Decimal4.ROUND_FLOOR = 3;
        Decimal4.ROUND_HALF_UP = 4;
        Decimal4.ROUND_HALF_DOWN = 5;
        Decimal4.ROUND_HALF_EVEN = 6;
        Decimal4.ROUND_HALF_CEIL = 7;
        Decimal4.ROUND_HALF_FLOOR = 8;
        Decimal4.clone = clone;
        Decimal4.config = Decimal4.set = config;
        if (obj === void 0)
          obj = {};
        if (obj) {
          ps = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
          for (i = 0; i < ps.length; )
            if (!obj.hasOwnProperty(p = ps[i++]))
              obj[p] = this[p];
        }
        Decimal4.config(obj);
        return Decimal4;
      }
      function config(obj) {
        if (!obj || typeof obj !== "object") {
          throw Error(decimalError + "Object expected");
        }
        var i, p, v, ps = [
          "precision",
          1,
          MAX_DIGITS,
          "rounding",
          0,
          8,
          "toExpNeg",
          -1 / 0,
          0,
          "toExpPos",
          0,
          1 / 0
        ];
        for (i = 0; i < ps.length; i += 3) {
          if ((v = obj[p = ps[i]]) !== void 0) {
            if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
              this[p] = v;
            else
              throw Error(invalidArgument + p + ": " + v);
          }
        }
        if ((v = obj[p = "LN10"]) !== void 0) {
          if (v == Math.LN10)
            this[p] = new this(v);
          else
            throw Error(invalidArgument + p + ": " + v);
        }
        return this;
      }
      Decimal3 = clone(Decimal3);
      Decimal3["default"] = Decimal3.Decimal = Decimal3;
      ONE = new Decimal3(1);
      if (typeof define == "function" && define.amd) {
        define(function() {
          return Decimal3;
        });
      } else if (typeof module != "undefined" && module.exports) {
        module.exports = Decimal3;
      } else {
        if (!globalScope) {
          globalScope = typeof self != "undefined" && self && self.self == self ? self : Function("return this")();
        }
        globalScope.Decimal = Decimal3;
      }
    })(exports);
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    module.exports = last;
  }
});

// node_modules/lodash/_baseRange.js
var require_baseRange = __commonJS({
  "node_modules/lodash/_baseRange.js"(exports, module) {
    var nativeCeil = Math.ceil;
    var nativeMax2 = Math.max;
    function baseRange(start, end, step, fromRight) {
      var index = -1, length = nativeMax2(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }
    module.exports = baseRange;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber2 = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber2(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign2 = value < 0 ? -1 : 1;
        return sign2 * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/_createRange.js
var require_createRange = __commonJS({
  "node_modules/lodash/_createRange.js"(exports, module) {
    var baseRange = require_baseRange();
    var isIterateeCall = require_isIterateeCall();
    var toFinite = require_toFinite();
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
          end = step = void 0;
        }
        start = toFinite(start);
        if (end === void 0) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }
    module.exports = createRange;
  }
});

// node_modules/lodash/range.js
var require_range = __commonJS({
  "node_modules/lodash/range.js"(exports, module) {
    var createRange = require_createRange();
    var range3 = createRange();
    module.exports = range3;
  }
});

// node_modules/lodash/_baseSome.js
var require_baseSome = __commonJS({
  "node_modules/lodash/_baseSome.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseSome(collection, predicate) {
      var result;
      baseEach(collection, function(value, index, collection2) {
        result = predicate(value, index, collection2);
        return !result;
      });
      return !!result;
    }
    module.exports = baseSome;
  }
});

// node_modules/lodash/some.js
var require_some = __commonJS({
  "node_modules/lodash/some.js"(exports, module) {
    var arraySome = require_arraySome();
    var baseIteratee = require_baseIteratee();
    var baseSome = require_baseSome();
    var isArray = require_isArray();
    var isIterateeCall = require_isIterateeCall();
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = void 0;
      }
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = some;
  }
});

// node_modules/lodash/_arrayEvery.js
var require_arrayEvery = __commonJS({
  "node_modules/lodash/_arrayEvery.js"(exports, module) {
    function arrayEvery(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    module.exports = arrayEvery;
  }
});

// node_modules/lodash/_baseEvery.js
var require_baseEvery = __commonJS({
  "node_modules/lodash/_baseEvery.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection2) {
        result = !!predicate(value, index, collection2);
        return result;
      });
      return result;
    }
    module.exports = baseEvery;
  }
});

// node_modules/lodash/every.js
var require_every = __commonJS({
  "node_modules/lodash/every.js"(exports, module) {
    var arrayEvery = require_arrayEvery();
    var baseEvery = require_baseEvery();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    var isIterateeCall = require_isIterateeCall();
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = void 0;
      }
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = every;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "node_modules/lodash/mapValues.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    module.exports = mapValues;
  }
});

// node_modules/lodash/_createFind.js
var require_createFind = __commonJS({
  "node_modules/lodash/_createFind.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var isArrayLike = require_isArrayLike();
    var keys = require_keys();
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = baseIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) {
            return iteratee(iterable[key], key, iterable);
          };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
      };
    }
    module.exports = createFind;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// node_modules/lodash/findIndex.js
var require_findIndex = __commonJS({
  "node_modules/lodash/findIndex.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIteratee = require_baseIteratee();
    var toInteger = require_toInteger();
    var nativeMax2 = Math.max;
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax2(length + index, 0);
      }
      return baseFindIndex(array, baseIteratee(predicate, 3), index);
    }
    module.exports = findIndex;
  }
});

// node_modules/lodash/find.js
var require_find = __commonJS({
  "node_modules/lodash/find.js"(exports, module) {
    var createFind = require_createFind();
    var findIndex = require_findIndex();
    var find = createFind(findIndex);
    module.exports = find;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    var debounce2 = require_debounce();
    var isObject2 = require_isObject();
    var FUNC_ERROR_TEXT2 = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      if (isObject2(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// node_modules/lodash/isBoolean.js
var require_isBoolean = __commonJS({
  "node_modules/lodash/isBoolean.js"(exports, module) {
    var baseGetTag2 = require_baseGetTag();
    var isObjectLike2 = require_isObjectLike();
    var boolTag = "[object Boolean]";
    function isBoolean(value) {
      return value === true || value === false || isObjectLike2(value) && baseGetTag2(value) == boolTag;
    }
    module.exports = isBoolean;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// app/routes/__app/dashboard/index.tsx
init_es();

// node_modules/recharts/es6/container/Surface.js
var import_react2 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/recharts/es6/util/types.js
var import_isObject = __toESM(require_isObject());
var import_react = __toESM(require_react());
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
var SVGContainerPropKeys = ["viewBox", "children"];
var SVGElementPropKeys = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "type", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"];
var EventKeys = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
var filterProps = function filterProps2(props, includeEvents, isSvg) {
  if (!props || typeof props === "function" || typeof props === "boolean") {
    return null;
  }
  var inputProps = props;
  if (/* @__PURE__ */ (0, import_react.isValidElement)(props)) {
    inputProps = props.props;
  }
  if (!(0, import_isObject.default)(inputProps)) {
    return null;
  }
  var out = {};
  Object.keys(inputProps).forEach(function(key) {
    if (SVGElementPropKeys.includes(key) || isSvg && SVGContainerPropKeys.includes(key) || includeEvents && EventKeys.includes(key)) {
      out[key] = inputProps[key];
    }
  });
  return out;
};
var adaptEventHandlers = function adaptEventHandlers2(props, newHandler) {
  if (!props || typeof props === "function" || typeof props === "boolean") {
    return null;
  }
  var inputProps = props;
  if (/* @__PURE__ */ (0, import_react.isValidElement)(props)) {
    inputProps = props.props;
  }
  if (!(0, import_isObject.default)(inputProps)) {
    return null;
  }
  var out = {};
  Object.keys(inputProps).forEach(function(key) {
    if (EventKeys.includes(key)) {
      out[key] = newHandler || function(e) {
        return inputProps[key](inputProps, e);
      };
    }
  });
  return out;
};
var getEventHandlerOfChild = function getEventHandlerOfChild2(originalHandler, data, index) {
  return function(e) {
    originalHandler(data, index, e);
    return null;
  };
};
var adaptEventsOfChild = function adaptEventsOfChild2(props, data, index) {
  if (!(0, import_isObject.default)(props) || _typeof(props) !== "object") {
    return null;
  }
  var out = null;
  Object.keys(props).forEach(function(key) {
    var item = props[key];
    if (EventKeys.includes(key) && typeof item === "function") {
      if (!out)
        out = {};
      out[key] = getEventHandlerOfChild(item, data, index);
    }
  });
  return out;
};

// node_modules/recharts/es6/container/Surface.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function Surface(props) {
  var children = props.children, width = props.width, height = props.height, viewBox = props.viewBox, className = props.className, style = props.style, others = _objectWithoutProperties(props, ["children", "width", "height", "viewBox", "className", "style"]);
  var svgView = viewBox || {
    width,
    height,
    x: 0,
    y: 0
  };
  var layerClass = (0, import_classnames.default)("recharts-surface", className);
  return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({}, filterProps(others, true, true), {
    className: layerClass,
    width,
    height,
    style,
    viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height),
    version: "1.1"
  }), /* @__PURE__ */ import_react2.default.createElement("title", null, props.title), /* @__PURE__ */ import_react2.default.createElement("desc", null, props.desc), children);
}

// node_modules/recharts/es6/container/Layer.js
var import_react3 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Layer = /* @__PURE__ */ import_react3.default.forwardRef(function(props, ref) {
  var children = props.children, className = props.className, others = _objectWithoutProperties2(props, ["children", "className"]);
  var layerClass = (0, import_classnames2.default)("recharts-layer", className);
  return /* @__PURE__ */ import_react3.default.createElement("g", _extends2({
    className: layerClass
  }, filterProps(others, true), {
    ref
  }), children);
});

// node_modules/recharts/es6/component/Legend.js
var import_isFunction = __toESM(require_isFunction());
var import_uniqBy = __toESM(require_uniqBy());
var import_react6 = __toESM(require_react());

// node_modules/recharts/es6/component/DefaultLegendContent.js
var import_react5 = __toESM(require_react());
var import_classnames4 = __toESM(require_classnames());

// node_modules/recharts/es6/shape/Symbols.js
var import_upperFirst = __toESM(require_upperFirst());
var import_react4 = __toESM(require_react());

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function Path() {
  this._x0 = this._y0 = this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x2, y2) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x2, y2) {
    this._ += "L" + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  quadraticCurveTo: function(x1, y1, x2, y2) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x2) + "," + (this._y1 = +y2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau + tau;
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x2 - dx) + "," + (y2 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x2 + r * Math.cos(a1)) + "," + (this._y1 = y2 + r * Math.sin(a1));
    }
  },
  rect: function(x2, y2, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function() {
    return this._;
  }
};
var path_default = path;

// node_modules/d3-shape/src/constant.js
function constant_default(x2) {
  return function constant() {
    return x2;
  };
}

// node_modules/d3-shape/src/math.js
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var tau2 = 2 * pi2;

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined3 = constant_default(true), context = null, curve = linear_default, output = null;
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default(y2);
  function line(data) {
    var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path_default());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined3(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined3 = typeof _ === "function" ? _ : constant_default(!!_), line) : defined3;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined3 = constant_default(true), context = null, curve = linear_default, output = null;
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default(0) : constant_default(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default(+y1);
  function area(data) {
    var i, j, k2, n = (data = array_default(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null)
      output = curve(buffer = path_default());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined3(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined3).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined3 = typeof _ === "function" ? _ : constant_default(!!_), area) : defined3;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/symbol/circle.js
var circle_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi2);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau2);
  }
};

// node_modules/d3-shape/src/symbol/cross.js
var cross_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw: function(context, size) {
    var y2 = Math.sqrt(size / tan30_2), x2 = y2 * tan30;
    context.moveTo(0, -y2);
    context.lineTo(x2, 0);
    context.lineTo(0, y2);
    context.lineTo(-x2, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = Math.sin(pi2 / 10) / Math.sin(7 * pi2 / 10);
var kx = Math.sin(tau2 / 10) * kr;
var ky = -Math.cos(tau2 / 10) * kr;
var star_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka), x2 = kx * r, y2 = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x2, y2);
    for (var i = 1; i < 5; ++i) {
      var a2 = tau2 * i / 5, c2 = Math.cos(a2), s2 = Math.sin(a2);
      context.lineTo(s2 * r, -c2 * r);
      context.lineTo(c2 * x2 - s2 * y2, s2 * x2 + c2 * y2);
    }
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw: function(context, size) {
    var w = Math.sqrt(size), x2 = -w / 2;
    context.rect(x2, x2, w, w);
  }
};

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = Math.sqrt(3);
var triangle_default = {
  draw: function(context, size) {
    var y2 = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y2 * 2);
    context.lineTo(-sqrt3 * y2, -y2);
    context.lineTo(sqrt3 * y2, -y2);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/wye.js
var c = -0.5;
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;
var wye_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a), x0 = r / 2, y0 = r * k, x1 = x0, y1 = r * k + r, x2 = -x1, y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol.js
function symbol_default(type, size) {
  var context = null;
  type = typeof type === "function" ? type : constant_default(type || circle_default);
  size = typeof size === "function" ? size : constant_default(size === void 0 ? 64 : +size);
  function symbol() {
    var buffer;
    if (!context)
      context = buffer = path_default();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant_default(_), symbol) : type;
  };
  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant_default(+_), symbol) : size;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/basis.js
function point(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basis_default(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basisClosed_default(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point)
      this._context.lineTo(x2, y2);
    else
      this._point = 1, this._context.moveTo(x2, y2);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point2(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point2(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point2(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point2(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i)
    a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i)
    m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n = series.length) > 1))
    return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0)
    o[n] = n;
  return o;
}

// node_modules/d3-shape/src/stack.js
function stackValue(d, key) {
  return d[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack_default() {
  var keys = constant_default([]), order = none_default2, offset = none_default, value = stackValue;
  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }
    for (i = 0, oz = array_default(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant_default(Array.from(_)), stack) : keys;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default(Array.from(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none_default : _, stack) : offset;
  };
  return stack;
}

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
    for (y2 = i = 0; i < n; ++i)
      y2 += series[i][j][1] || 0;
    if (y2)
      for (i = 0; i < n; ++i)
        series[i][j][1] /= y2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y2 = 0; i < n; ++i)
      y2 += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y2 / 2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y2 = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k2 = 0; k2 < i; ++k2) {
        var sk = series[order[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y2;
    if (s1)
      y2 -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y2;
  none_default(series, order);
}

// node_modules/recharts/es6/shape/Symbols.js
var import_classnames3 = __toESM(require_classnames());
function _typeof2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof2(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
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
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var symbolFactories = {
  symbolCircle: circle_default,
  symbolCross: cross_default,
  symbolDiamond: diamond_default,
  symbolSquare: square_default,
  symbolStar: star_default,
  symbolTriangle: triangle_default,
  symbolWye: wye_default
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = function getSymbolFactory2(type) {
  var name = "symbol".concat((0, import_upperFirst.default)(type));
  return symbolFactories[name] || circle_default;
};
var calculateAreaSize = function calculateAreaSize2(size, sizeType, type) {
  if (sizeType === "area") {
    return size;
  }
  switch (type) {
    case "cross":
      return 5 * size * size / 9;
    case "diamond":
      return 0.5 * size * size / Math.sqrt(3);
    case "square":
      return size * size;
    case "star": {
      var angle = 18 * RADIAN;
      return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
    }
    case "triangle":
      return Math.sqrt(3) * size * size / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * size * size / 8;
    default:
      return Math.PI * size * size / 4;
  }
};
var Symbols = /* @__PURE__ */ function(_PureComponent) {
  _inherits(Symbols2, _PureComponent);
  var _super = _createSuper(Symbols2);
  function Symbols2() {
    _classCallCheck(this, Symbols2);
    return _super.apply(this, arguments);
  }
  _createClass(Symbols2, [{
    key: "getPath",
    value: function getPath() {
      var _this$props = this.props, size = _this$props.size, sizeType = _this$props.sizeType, type = _this$props.type;
      var symbolFactory = getSymbolFactory(type);
      var symbol = symbol_default().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
      return symbol();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, className = _this$props2.className, cx = _this$props2.cx, cy = _this$props2.cy, size = _this$props2.size;
      if (cx === +cx && cy === +cy && size === +size) {
        return /* @__PURE__ */ import_react4.default.createElement("path", _extends3({}, filterProps(this.props, true), {
          className: (0, import_classnames3.default)("recharts-symbols", className),
          transform: "translate(".concat(cx, ", ").concat(cy, ")"),
          d: this.getPath()
        }));
      }
      return null;
    }
  }]);
  return Symbols2;
}(import_react4.PureComponent);
Symbols.defaultProps = {
  type: "circle",
  size: 64,
  sizeType: "area"
};
Symbols.registerSymbol = function(key, factory) {
  symbolFactories["symbol".concat((0, import_upperFirst.default)(key))] = factory;
};

// node_modules/recharts/es6/component/DefaultLegendContent.js
function _typeof3(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof3 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof3 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof3(obj);
}
function _extends4() {
  _extends4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
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
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (_typeof3(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct2() {
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
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
var SIZE = 32;
var DefaultLegendContent = /* @__PURE__ */ function(_PureComponent) {
  _inherits2(DefaultLegendContent2, _PureComponent);
  var _super = _createSuper2(DefaultLegendContent2);
  function DefaultLegendContent2() {
    _classCallCheck2(this, DefaultLegendContent2);
    return _super.apply(this, arguments);
  }
  _createClass2(DefaultLegendContent2, [{
    key: "renderIcon",
    value: function renderIcon(data) {
      var inactiveColor = this.props.inactiveColor;
      var halfSize = SIZE / 2;
      var sixthSize = SIZE / 6;
      var thirdSize = SIZE / 3;
      var color2 = data.inactive ? inactiveColor : data.color;
      if (data.type === "plainline") {
        return /* @__PURE__ */ import_react5.default.createElement("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: color2,
          strokeDasharray: data.payload.strokeDasharray,
          x1: 0,
          y1: halfSize,
          x2: SIZE,
          y2: halfSize,
          className: "recharts-legend-icon"
        });
      }
      if (data.type === "line") {
        return /* @__PURE__ */ import_react5.default.createElement("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: color2,
          d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
          className: "recharts-legend-icon"
        });
      }
      if (data.type === "rect") {
        return /* @__PURE__ */ import_react5.default.createElement("path", {
          stroke: "none",
          fill: color2,
          d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
          className: "recharts-legend-icon"
        });
      }
      if (/* @__PURE__ */ import_react5.default.isValidElement(data.legendIcon)) {
        var iconProps = _objectSpread({}, data);
        delete iconProps.legendIcon;
        return /* @__PURE__ */ import_react5.default.cloneElement(data.legendIcon, iconProps);
      }
      return /* @__PURE__ */ import_react5.default.createElement(Symbols, {
        fill: color2,
        cx: halfSize,
        cy: halfSize,
        size: SIZE,
        sizeType: "diameter",
        type: data.type
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      var _this$props = this.props, payload = _this$props.payload, iconSize = _this$props.iconSize, layout = _this$props.layout, formatter = _this$props.formatter, inactiveColor = _this$props.inactiveColor;
      var viewBox = {
        x: 0,
        y: 0,
        width: SIZE,
        height: SIZE
      };
      var itemStyle = {
        display: layout === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      };
      var svgStyle = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return payload.map(function(entry, i) {
        var _classNames;
        var finalFormatter = entry.formatter || formatter;
        var className = (0, import_classnames4.default)((_classNames = {
          "recharts-legend-item": true
        }, _defineProperty(_classNames, "legend-item-".concat(i), true), _defineProperty(_classNames, "inactive", entry.inactive), _classNames));
        if (entry.type === "none") {
          return null;
        }
        var color2 = entry.inactive ? inactiveColor : entry.color;
        return /* @__PURE__ */ import_react5.default.createElement("li", _extends4({
          className,
          style: itemStyle,
          key: "legend-item-".concat(i)
        }, adaptEventsOfChild(_this.props, entry, i)), /* @__PURE__ */ import_react5.default.createElement(Surface, {
          width: iconSize,
          height: iconSize,
          viewBox,
          style: svgStyle
        }, _this.renderIcon(entry)), /* @__PURE__ */ import_react5.default.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: color2
          }
        }, finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, payload = _this$props2.payload, layout = _this$props2.layout, align = _this$props2.align;
      if (!payload || !payload.length) {
        return null;
      }
      var finalStyle = {
        padding: 0,
        margin: 0,
        textAlign: layout === "horizontal" ? align : "left"
      };
      return /* @__PURE__ */ import_react5.default.createElement("ul", {
        className: "recharts-default-legend",
        style: finalStyle
      }, this.renderItems());
    }
  }]);
  return DefaultLegendContent2;
}(import_react5.PureComponent);
DefaultLegendContent.displayName = "Legend";
DefaultLegendContent.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
};

// node_modules/recharts/es6/util/DataUtils.js
var import_get = __toESM(require_get());
var import_isArray = __toESM(require_isArray());
var import_isNaN = __toESM(require_isNaN());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());
var mathSign = function mathSign2(value) {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }
  return -1;
};
var isPercent = function isPercent2(value) {
  return (0, import_isString.default)(value) && value.indexOf("%") === value.length - 1;
};
var isNumber = function isNumber2(value) {
  return (0, import_isNumber.default)(value) && !(0, import_isNaN.default)(value);
};
var isNumOrStr = function isNumOrStr2(value) {
  return isNumber(value) || (0, import_isString.default)(value);
};
var idCounter = 0;
var uniqueId = function uniqueId2(prefix) {
  var id = ++idCounter;
  return "".concat(prefix || "").concat(id);
};
var getPercentValue = function getPercentValue2(percent, totalValue) {
  var defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var validate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!isNumber(percent) && !(0, import_isString.default)(percent)) {
    return defaultValue;
  }
  var value;
  if (isPercent(percent)) {
    var index = percent.indexOf("%");
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }
  if ((0, import_isNaN.default)(value)) {
    value = defaultValue;
  }
  if (validate && value > totalValue) {
    value = totalValue;
  }
  return value;
};
var getAnyElementOfObject = function getAnyElementOfObject2(obj) {
  if (!obj) {
    return null;
  }
  var keys = Object.keys(obj);
  if (keys && keys.length) {
    return obj[keys[0]];
  }
  return null;
};
var hasDuplicate = function hasDuplicate2(ary) {
  if (!(0, import_isArray.default)(ary)) {
    return false;
  }
  var len = ary.length;
  var cache = {};
  for (var i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};
var interpolateNumber = function interpolateNumber2(numberA, numberB) {
  if (isNumber(numberA) && isNumber(numberB)) {
    return function(t) {
      return numberA + t * (numberB - numberA);
    };
  }
  return function() {
    return numberB;
  };
};
function findEntryInArray(ary, specifiedKey, specifiedValue) {
  if (!ary || !ary.length) {
    return null;
  }
  return ary.find(function(entry) {
    return entry && (typeof specifiedKey === "function" ? specifiedKey(entry) : (0, import_get.default)(entry, specifiedKey)) === specifiedValue;
  });
}

// node_modules/recharts/es6/component/Legend.js
function _typeof4(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof4 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof4 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof4(obj);
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
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
    _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties3(Constructor, staticProps);
  return Constructor;
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p) {
  _setPrototypeOf3 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf3(o, p);
}
function _createSuper3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self2, call) {
  if (call && (_typeof4(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized3(self2);
}
function _assertThisInitialized3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct3() {
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
function _getPrototypeOf3(o) {
  _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf3(o);
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function defaultUniqBy(entry) {
  return entry.value;
}
function getUniqPayload(option, payload) {
  if (option === true) {
    return (0, import_uniqBy.default)(payload, defaultUniqBy);
  }
  if ((0, import_isFunction.default)(option)) {
    return (0, import_uniqBy.default)(payload, option);
  }
  return payload;
}
function renderContent(content, props) {
  if (/* @__PURE__ */ import_react6.default.isValidElement(content)) {
    return /* @__PURE__ */ import_react6.default.cloneElement(content, props);
  }
  if ((0, import_isFunction.default)(content)) {
    return /* @__PURE__ */ import_react6.default.createElement(content, props);
  }
  var ref = props.ref, otherProps = _objectWithoutProperties3(props, ["ref"]);
  return /* @__PURE__ */ import_react6.default.createElement(DefaultLegendContent, otherProps);
}
var EPS = 1;
var Legend = /* @__PURE__ */ function(_PureComponent) {
  _inherits3(Legend2, _PureComponent);
  var _super = _createSuper3(Legend2);
  function Legend2() {
    var _this;
    _classCallCheck3(this, Legend2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.wrapperNode = void 0;
    _this.state = {
      boxWidth: -1,
      boxHeight: -1
    };
    return _this;
  }
  _createClass3(Legend2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        return this.wrapperNode.getBoundingClientRect();
      }
      return null;
    }
  }, {
    key: "getBBoxSnapshot",
    value: function getBBoxSnapshot() {
      var _this$state = this.state, boxWidth = _this$state.boxWidth, boxHeight = _this$state.boxHeight;
      if (boxWidth >= 0 && boxHeight >= 0) {
        return {
          width: boxWidth,
          height: boxHeight
        };
      }
      return null;
    }
  }, {
    key: "getDefaultPosition",
    value: function getDefaultPosition(style) {
      var _this$props = this.props, layout = _this$props.layout, align = _this$props.align, verticalAlign = _this$props.verticalAlign, margin = _this$props.margin, chartWidth = _this$props.chartWidth, chartHeight = _this$props.chartHeight;
      var hPos, vPos;
      if (!style || (style.left === void 0 || style.left === null) && (style.right === void 0 || style.right === null)) {
        if (align === "center" && layout === "vertical") {
          var _box = this.getBBoxSnapshot() || {
            width: 0
          };
          hPos = {
            left: ((chartWidth || 0) - _box.width) / 2
          };
        } else {
          hPos = align === "right" ? {
            right: margin && margin.right || 0
          } : {
            left: margin && margin.left || 0
          };
        }
      }
      if (!style || (style.top === void 0 || style.top === null) && (style.bottom === void 0 || style.bottom === null)) {
        if (verticalAlign === "middle") {
          var _box2 = this.getBBoxSnapshot() || {
            height: 0
          };
          vPos = {
            top: ((chartHeight || 0) - _box2.height) / 2
          };
        } else {
          vPos = verticalAlign === "bottom" ? {
            bottom: margin && margin.bottom || 0
          } : {
            top: margin && margin.top || 0
          };
        }
      }
      return _objectSpread2(_objectSpread2({}, hPos), vPos);
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var _this$state2 = this.state, boxWidth = _this$state2.boxWidth, boxHeight = _this$state2.boxHeight;
      var onBBoxUpdate = this.props.onBBoxUpdate;
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var _box3 = this.wrapperNode.getBoundingClientRect();
        if (Math.abs(_box3.width - boxWidth) > EPS || Math.abs(_box3.height - boxHeight) > EPS) {
          this.setState({
            boxWidth: _box3.width,
            boxHeight: _box3.height
          }, function() {
            if (onBBoxUpdate) {
              onBBoxUpdate(_box3);
            }
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        }, function() {
          if (onBBoxUpdate) {
            onBBoxUpdate(null);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props, content = _this$props2.content, width = _this$props2.width, height = _this$props2.height, wrapperStyle = _this$props2.wrapperStyle, payloadUniqBy = _this$props2.payloadUniqBy, payload = _this$props2.payload;
      var outerStyle = _objectSpread2(_objectSpread2({
        position: "absolute",
        width: width || "auto",
        height: height || "auto"
      }, this.getDefaultPosition(wrapperStyle)), wrapperStyle);
      return /* @__PURE__ */ import_react6.default.createElement("div", {
        className: "recharts-legend-wrapper",
        style: outerStyle,
        ref: function ref(node) {
          _this2.wrapperNode = node;
        }
      }, renderContent(content, _objectSpread2(_objectSpread2({}, this.props), {}, {
        payload: getUniqPayload(payloadUniqBy, payload)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function getWithHeight(item, chartWidth) {
      var layout = item.props.layout;
      if (layout === "vertical" && isNumber(item.props.height)) {
        return {
          height: item.props.height
        };
      }
      if (layout === "horizontal") {
        return {
          width: item.props.width || chartWidth
        };
      }
      return null;
    }
  }]);
  return Legend2;
}(import_react6.PureComponent);
Legend.displayName = "Legend";
Legend.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
};

// node_modules/recharts/es6/component/Tooltip.js
var import_isNil2 = __toESM(require_isNil());
var import_isFunction2 = __toESM(require_isFunction());
var import_uniqBy2 = __toESM(require_uniqBy());
var import_react11 = __toESM(require_react());

// node_modules/react-smooth/es6/Animate.js
var import_react7 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_fast_equals = __toESM(require_fast_equals());

// node_modules/react-smooth/es6/setRafTimeout.js
function setRafTimeout(callback) {
  var timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var currTime = -1;
  var shouldUpdate = function shouldUpdate2(now2) {
    if (currTime < 0) {
      currTime = now2;
    }
    if (now2 - currTime > timeout) {
      callback(now2);
      currTime = -1;
    } else {
      requestAnimationFrame(shouldUpdate2);
    }
  };
  requestAnimationFrame(shouldUpdate);
}

// node_modules/react-smooth/es6/AnimateManager.js
function _typeof5(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof5 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof5 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof5(obj);
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function createAnimateManager() {
  var currStyle = {};
  var handleChange = function handleChange2() {
    return null;
  };
  var shouldStop = false;
  var setStyle = function setStyle2(_style) {
    if (shouldStop) {
      return;
    }
    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }
      var styles = _style;
      var _styles = _toArray(styles), curr = _styles[0], restStyles = _styles.slice(1);
      if (typeof curr === "number") {
        setRafTimeout(setStyle2.bind(null, restStyles), curr);
        return;
      }
      setStyle2(curr);
      setRafTimeout(setStyle2.bind(null, restStyles));
      return;
    }
    if (_typeof5(_style) === "object") {
      currStyle = _style;
      handleChange(currStyle);
    }
    if (typeof _style === "function") {
      _style();
    }
  };
  return {
    stop: function stop() {
      shouldStop = true;
    },
    start: function start(style) {
      shouldStop = false;
      setStyle(style);
    },
    subscribe: function subscribe(_handleChange) {
      handleChange = _handleChange;
      return function() {
        handleChange = function handleChange2() {
          return null;
        };
      };
    }
  };
}

// node_modules/react-smooth/es6/util.js
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var PREFIX_LIST = ["Webkit", "Moz", "O", "ms"];
var IN_LINE_PREFIX_LIST = ["-webkit-", "-moz-", "-o-", "-ms-"];
var IN_COMPATIBLE_PROPERTY = ["transform", "transformOrigin", "transition"];
var getIntersectionKeys = function getIntersectionKeys2(preObj, nextObj) {
  return [Object.keys(preObj), Object.keys(nextObj)].reduce(function(a2, b) {
    return a2.filter(function(c2) {
      return b.includes(c2);
    });
  });
};
var identity = function identity2(param) {
  return param;
};
var getDashCase = function getDashCase2(name) {
  return name.replace(/([A-Z])/g, function(v) {
    return "-".concat(v.toLowerCase());
  });
};
var generatePrefixStyle = function generatePrefixStyle2(name, value) {
  if (IN_COMPATIBLE_PROPERTY.indexOf(name) === -1) {
    return _defineProperty3({}, name, value);
  }
  var isTransition = name === "transition";
  var camelName = name.replace(/(\w)/, function(v) {
    return v.toUpperCase();
  });
  var styleVal = value;
  return PREFIX_LIST.reduce(function(result, property, i) {
    if (isTransition) {
      styleVal = value.replace(/(transform|transform-origin)/gim, "".concat(IN_LINE_PREFIX_LIST[i], "$1"));
    }
    return _objectSpread3(_objectSpread3({}, result), {}, _defineProperty3({}, property + camelName, styleVal));
  }, {});
};
var mapObject = function mapObject2(fn, obj) {
  return Object.keys(obj).reduce(function(res, key) {
    return _objectSpread3(_objectSpread3({}, res), {}, _defineProperty3({}, key, fn(key, obj[key])));
  }, {});
};
var translateStyle = function translateStyle2(style) {
  return Object.keys(style).reduce(function(res, key) {
    return _objectSpread3(_objectSpread3({}, res), generatePrefixStyle(key, res[key]));
  }, style);
};
var getTransitionVal = function getTransitionVal2(props, duration, easing) {
  return props.map(function(prop) {
    return "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing);
  }).join(",");
};
var isDev = true;
var warn = function warn2(condition, format2, a2, b, c2, d, e, f) {
  if (isDev && typeof console !== "undefined" && console.warn) {
    if (format2 === void 0) {
      console.warn("LogUtils requires an error message argument");
    }
    if (!condition) {
      if (format2 === void 0) {
        console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var args = [a2, b, c2, d, e, f];
        var argIndex = 0;
        console.warn(format2.replace(/%s/g, function() {
          return args[argIndex++];
        }));
      }
    }
  }
};

// node_modules/react-smooth/es6/easing.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var ACCURACY = 1e-4;
var cubicBezierFactor = function cubicBezierFactor2(c1, c2) {
  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
};
var multyTime = function multyTime2(params, t) {
  return params.map(function(param, i) {
    return param * Math.pow(t, i);
  }).reduce(function(pre, curr) {
    return pre + curr;
  });
};
var cubicBezier = function cubicBezier2(c1, c2) {
  return function(t) {
    var params = cubicBezierFactor(c1, c2);
    return multyTime(params, t);
  };
};
var derivativeCubicBezier = function derivativeCubicBezier2(c1, c2) {
  return function(t) {
    var params = cubicBezierFactor(c1, c2);
    var newParams = [].concat(_toConsumableArray(params.map(function(param, i) {
      return param * i;
    }).slice(1)), [0]);
    return multyTime(newParams, t);
  };
};
var configBezier = function configBezier2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var x1 = args[0], y1 = args[1], x2 = args[2], y2 = args[3];
  if (args.length === 1) {
    switch (args[0]) {
      case "linear":
        x1 = 0;
        y1 = 0;
        x2 = 1;
        y2 = 1;
        break;
      case "ease":
        x1 = 0.25;
        y1 = 0.1;
        x2 = 0.25;
        y2 = 1;
        break;
      case "ease-in":
        x1 = 0.42;
        y1 = 0;
        x2 = 1;
        y2 = 1;
        break;
      case "ease-out":
        x1 = 0.42;
        y1 = 0;
        x2 = 0.58;
        y2 = 1;
        break;
      case "ease-in-out":
        x1 = 0;
        y1 = 0;
        x2 = 0.58;
        y2 = 1;
        break;
      default: {
        var easing = args[0].split("(");
        if (easing[0] === "cubic-bezier" && easing[1].split(")")[0].split(",").length === 4) {
          var _easing$1$split$0$spl = easing[1].split(")")[0].split(",").map(function(x3) {
            return parseFloat(x3);
          });
          var _easing$1$split$0$spl2 = _slicedToArray(_easing$1$split$0$spl, 4);
          x1 = _easing$1$split$0$spl2[0];
          y1 = _easing$1$split$0$spl2[1];
          x2 = _easing$1$split$0$spl2[2];
          y2 = _easing$1$split$0$spl2[3];
        } else {
          warn(false, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", args);
        }
      }
    }
  }
  warn([x1, x2, y1, y2].every(function(num) {
    return typeof num === "number" && num >= 0 && num <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", args);
  var curveX = cubicBezier(x1, x2);
  var curveY = cubicBezier(y1, y2);
  var derCurveX = derivativeCubicBezier(x1, x2);
  var rangeValue = function rangeValue2(value) {
    if (value > 1) {
      return 1;
    } else if (value < 0) {
      return 0;
    }
    return value;
  };
  var bezier = function bezier2(_t) {
    var t = _t > 1 ? 1 : _t;
    var x3 = t;
    for (var i = 0; i < 8; ++i) {
      var evalT = curveX(x3) - t;
      var derVal = derCurveX(x3);
      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x3);
      }
      x3 = rangeValue(x3 - evalT / derVal);
    }
    return curveY(x3);
  };
  bezier.isStepper = false;
  return bezier;
};
var configSpring = function configSpring2() {
  var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _config$stiff = config.stiff, stiff = _config$stiff === void 0 ? 100 : _config$stiff, _config$damping = config.damping, damping = _config$damping === void 0 ? 8 : _config$damping, _config$dt = config.dt, dt = _config$dt === void 0 ? 17 : _config$dt;
  var stepper = function stepper2(currX, destX, currV) {
    var FSpring = -(currX - destX) * stiff;
    var FDamping = currV * damping;
    var newV = currV + (FSpring - FDamping) * dt / 1e3;
    var newX = currV * dt / 1e3 + currX;
    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }
    return [newX, newV];
  };
  stepper.isStepper = true;
  stepper.dt = dt;
  return stepper;
};
var configEasing = function configEasing2() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var easing = args[0];
  if (typeof easing === "string") {
    switch (easing) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return configBezier(easing);
      case "spring":
        return configSpring();
      default:
        if (easing.split("(")[0] === "cubic-bezier") {
          return configBezier(easing);
        }
        warn(false, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", args);
    }
  }
  if (typeof easing === "function") {
    return easing;
  }
  warn(false, "[configEasing]: first argument type should be function or string, instead received %s", args);
  return null;
};

// node_modules/react-smooth/es6/configUpdate.js
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray3(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray3(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray3(arr);
}
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys4(Object(source), true).forEach(function(key) {
        _defineProperty4(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
var alpha = function alpha2(begin, end, k2) {
  return begin + (end - begin) * k2;
};
var needContinue = function needContinue2(_ref) {
  var from = _ref.from, to = _ref.to;
  return from !== to;
};
var calStepperVals = function calStepperVals2(easing, preVals, steps) {
  var nextStepVals = mapObject(function(key, val) {
    if (needContinue(val)) {
      var _easing = easing(val.from, val.to, val.velocity), _easing2 = _slicedToArray2(_easing, 2), newX = _easing2[0], newV = _easing2[1];
      return _objectSpread4(_objectSpread4({}, val), {}, {
        from: newX,
        velocity: newV
      });
    }
    return val;
  }, preVals);
  if (steps < 1) {
    return mapObject(function(key, val) {
      if (needContinue(val)) {
        return _objectSpread4(_objectSpread4({}, val), {}, {
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps)
        });
      }
      return val;
    }, preVals);
  }
  return calStepperVals2(easing, nextStepVals, steps - 1);
};
var configUpdate_default = function(from, to, easing, duration, render) {
  var interKeys = getIntersectionKeys(from, to);
  var timingStyle = interKeys.reduce(function(res, key) {
    return _objectSpread4(_objectSpread4({}, res), {}, _defineProperty4({}, key, [from[key], to[key]]));
  }, {});
  var stepperStyle = interKeys.reduce(function(res, key) {
    return _objectSpread4(_objectSpread4({}, res), {}, _defineProperty4({}, key, {
      from: from[key],
      velocity: 0,
      to: to[key]
    }));
  }, {});
  var cafId = -1;
  var preTime;
  var beginTime;
  var update = function update2() {
    return null;
  };
  var getCurrStyle = function getCurrStyle2() {
    return mapObject(function(key, val) {
      return val.from;
    }, stepperStyle);
  };
  var shouldStopAnimation = function shouldStopAnimation2() {
    return !Object.values(stepperStyle).filter(needContinue).length;
  };
  var stepperUpdate = function stepperUpdate2(now2) {
    if (!preTime) {
      preTime = now2;
    }
    var deltaTime = now2 - preTime;
    var steps = deltaTime / easing.dt;
    stepperStyle = calStepperVals(easing, stepperStyle, steps);
    render(_objectSpread4(_objectSpread4(_objectSpread4({}, from), to), getCurrStyle(stepperStyle)));
    preTime = now2;
    if (!shouldStopAnimation()) {
      cafId = requestAnimationFrame(update);
    }
  };
  var timingUpdate = function timingUpdate2(now2) {
    if (!beginTime) {
      beginTime = now2;
    }
    var t = (now2 - beginTime) / duration;
    var currStyle = mapObject(function(key, val) {
      return alpha.apply(void 0, _toConsumableArray2(val).concat([easing(t)]));
    }, timingStyle);
    render(_objectSpread4(_objectSpread4(_objectSpread4({}, from), to), currStyle));
    if (t < 1) {
      cafId = requestAnimationFrame(update);
    } else {
      var finalStyle = mapObject(function(key, val) {
        return alpha.apply(void 0, _toConsumableArray2(val).concat([easing(1)]));
      }, timingStyle);
      render(_objectSpread4(_objectSpread4(_objectSpread4({}, from), to), finalStyle));
    }
  };
  update = easing.isStepper ? stepperUpdate : timingUpdate;
  return function() {
    requestAnimationFrame(update);
    return function() {
      cancelAnimationFrame(cafId);
    };
  };
};

// node_modules/react-smooth/es6/Animate.js
function _typeof6(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof6 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof6 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof6(obj);
}
function _objectWithoutProperties4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray4(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _iterableToArray4(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray4(arr);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys5(Object(source), true).forEach(function(key) {
        _defineProperty5(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties4(Constructor, staticProps);
  return Constructor;
}
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf4(subClass, superClass);
}
function _setPrototypeOf4(o, p) {
  _setPrototypeOf4 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf4(o, p);
}
function _createSuper4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct4();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn4(this, result);
  };
}
function _possibleConstructorReturn4(self2, call) {
  if (call && (_typeof6(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized4(self2);
}
function _assertThisInitialized4(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct4() {
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
function _getPrototypeOf4(o) {
  _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf4(o);
}
var Animate = /* @__PURE__ */ function(_PureComponent) {
  _inherits4(Animate2, _PureComponent);
  var _super = _createSuper4(Animate2);
  function Animate2(props, context) {
    var _this;
    _classCallCheck4(this, Animate2);
    _this = _super.call(this, props, context);
    var _this$props = _this.props, isActive = _this$props.isActive, attributeName = _this$props.attributeName, from = _this$props.from, to = _this$props.to, steps = _this$props.steps, children = _this$props.children;
    _this.handleStyleChange = _this.handleStyleChange.bind(_assertThisInitialized4(_this));
    _this.changeStyle = _this.changeStyle.bind(_assertThisInitialized4(_this));
    if (!isActive) {
      _this.state = {
        style: {}
      };
      if (typeof children === "function") {
        _this.state = {
          style: to
        };
      }
      return _possibleConstructorReturn4(_this);
    }
    if (steps && steps.length) {
      _this.state = {
        style: steps[0].style
      };
    } else if (from) {
      if (typeof children === "function") {
        _this.state = {
          style: from
        };
        return _possibleConstructorReturn4(_this);
      }
      _this.state = {
        style: attributeName ? _defineProperty5({}, attributeName, from) : from
      };
    } else {
      _this.state = {
        style: {}
      };
    }
    return _this;
  }
  _createClass4(Animate2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props, isActive = _this$props2.isActive, canBegin = _this$props2.canBegin;
      this.mounted = true;
      if (!isActive || !canBegin) {
        return;
      }
      this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props, isActive = _this$props3.isActive, canBegin = _this$props3.canBegin, attributeName = _this$props3.attributeName, shouldReAnimate = _this$props3.shouldReAnimate;
      if (!canBegin) {
        return;
      }
      if (!isActive) {
        var newState = {
          style: attributeName ? _defineProperty5({}, attributeName, this.props.to) : this.props.to
        };
        if (this.state && this.state.style) {
          if (attributeName && this.state.style[attributeName] !== this.props.to || !attributeName && this.state.style !== this.props.to) {
            this.setState(newState);
          }
        }
        return;
      }
      if ((0, import_fast_equals.deepEqual)(prevProps.to, this.props.to) && prevProps.canBegin && prevProps.isActive) {
        return;
      }
      var isTriggered = !prevProps.canBegin || !prevProps.isActive;
      if (this.manager) {
        this.manager.stop();
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      var from = isTriggered || shouldReAnimate ? this.props.from : prevProps.to;
      if (this.state && this.state.style) {
        var _newState = {
          style: attributeName ? _defineProperty5({}, attributeName, from) : from
        };
        if (attributeName && this.state.style[attributeName] !== from || !attributeName && this.state.style !== from) {
          this.setState(_newState);
        }
      }
      this.runAnimation(_objectSpread5(_objectSpread5({}, this.props), {}, {
        from,
        begin: 0
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      if (this.unSubscribe) {
        this.unSubscribe();
      }
      if (this.manager) {
        this.manager.stop();
        this.manager = null;
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
    }
  }, {
    key: "runJSAnimation",
    value: function runJSAnimation(props) {
      var _this2 = this;
      var from = props.from, to = props.to, duration = props.duration, easing = props.easing, begin = props.begin, onAnimationEnd2 = props.onAnimationEnd, onAnimationStart2 = props.onAnimationStart;
      var startAnimation = configUpdate_default(from, to, configEasing(easing), duration, this.changeStyle);
      var finalStartAnimation = function finalStartAnimation2() {
        _this2.stopJSAnimation = startAnimation();
      };
      this.manager.start([onAnimationStart2, begin, finalStartAnimation, duration, onAnimationEnd2]);
    }
  }, {
    key: "runStepAnimation",
    value: function runStepAnimation(props) {
      var _this3 = this;
      var steps = props.steps, begin = props.begin, onAnimationStart2 = props.onAnimationStart;
      var _steps$ = steps[0], initialStyle = _steps$.style, _steps$$duration = _steps$.duration, initialTime = _steps$$duration === void 0 ? 0 : _steps$$duration;
      var addStyle = function addStyle2(sequence, nextItem, index) {
        if (index === 0) {
          return sequence;
        }
        var duration = nextItem.duration, _nextItem$easing = nextItem.easing, easing = _nextItem$easing === void 0 ? "ease" : _nextItem$easing, style = nextItem.style, nextProperties = nextItem.properties, onAnimationEnd2 = nextItem.onAnimationEnd;
        var preItem = index > 0 ? steps[index - 1] : nextItem;
        var properties = nextProperties || Object.keys(style);
        if (typeof easing === "function" || easing === "spring") {
          return [].concat(_toConsumableArray3(sequence), [_this3.runJSAnimation.bind(_this3, {
            from: preItem.style,
            to: style,
            duration,
            easing
          }), duration]);
        }
        var transition = getTransitionVal(properties, duration, easing);
        var newStyle = _objectSpread5(_objectSpread5(_objectSpread5({}, preItem.style), style), {}, {
          transition
        });
        return [].concat(_toConsumableArray3(sequence), [newStyle, duration, onAnimationEnd2]).filter(identity);
      };
      return this.manager.start([onAnimationStart2].concat(_toConsumableArray3(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function runAnimation(props) {
      if (!this.manager) {
        this.manager = createAnimateManager();
      }
      var begin = props.begin, duration = props.duration, attributeName = props.attributeName, propsTo = props.to, easing = props.easing, onAnimationStart2 = props.onAnimationStart, onAnimationEnd2 = props.onAnimationEnd, steps = props.steps, children = props.children;
      var manager = this.manager;
      this.unSubscribe = manager.subscribe(this.handleStyleChange);
      if (typeof easing === "function" || typeof children === "function" || easing === "spring") {
        this.runJSAnimation(props);
        return;
      }
      if (steps.length > 1) {
        this.runStepAnimation(props);
        return;
      }
      var to = attributeName ? _defineProperty5({}, attributeName, propsTo) : propsTo;
      var transition = getTransitionVal(Object.keys(to), duration, easing);
      manager.start([onAnimationStart2, begin, _objectSpread5(_objectSpread5({}, to), {}, {
        transition
      }), duration, onAnimationEnd2]);
    }
  }, {
    key: "handleStyleChange",
    value: function handleStyleChange(style) {
      this.changeStyle(style);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      if (this.mounted) {
        this.setState({
          style
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, children = _this$props4.children, begin = _this$props4.begin, duration = _this$props4.duration, attributeName = _this$props4.attributeName, easing = _this$props4.easing, isActive = _this$props4.isActive, steps = _this$props4.steps, from = _this$props4.from, to = _this$props4.to, canBegin = _this$props4.canBegin, onAnimationEnd2 = _this$props4.onAnimationEnd, shouldReAnimate = _this$props4.shouldReAnimate, onAnimationReStart = _this$props4.onAnimationReStart, others = _objectWithoutProperties4(_this$props4, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"]);
      var count = import_react7.Children.count(children);
      var stateStyle = translateStyle(this.state.style);
      if (typeof children === "function") {
        return children(stateStyle);
      }
      if (!isActive || count === 0) {
        return children;
      }
      var cloneContainer = function cloneContainer2(container) {
        var _container$props = container.props, _container$props$styl = _container$props.style, style = _container$props$styl === void 0 ? {} : _container$props$styl, className = _container$props.className;
        var res = /* @__PURE__ */ (0, import_react7.cloneElement)(container, _objectSpread5(_objectSpread5({}, others), {}, {
          style: _objectSpread5(_objectSpread5({}, style), stateStyle),
          className
        }));
        return res;
      };
      if (count === 1) {
        return cloneContainer(import_react7.Children.only(children));
      }
      return /* @__PURE__ */ import_react7.default.createElement("div", null, import_react7.Children.map(children, function(child) {
        return cloneContainer(child);
      }));
    }
  }]);
  return Animate2;
}(import_react7.PureComponent);
Animate.displayName = "Animate";
Animate.propTypes = {
  from: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string]),
  to: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string]),
  attributeName: import_prop_types.default.string,
  duration: import_prop_types.default.number,
  begin: import_prop_types.default.number,
  easing: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  steps: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    duration: import_prop_types.default.number.isRequired,
    style: import_prop_types.default.object.isRequired,
    easing: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), import_prop_types.default.func]),
    properties: import_prop_types.default.arrayOf("string"),
    onAnimationEnd: import_prop_types.default.func
  })),
  children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.func]),
  isActive: import_prop_types.default.bool,
  canBegin: import_prop_types.default.bool,
  onAnimationEnd: import_prop_types.default.func,
  shouldReAnimate: import_prop_types.default.bool,
  onAnimationStart: import_prop_types.default.func,
  onAnimationReStart: import_prop_types.default.func
};
Animate.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: true,
  canBegin: true,
  steps: [],
  onAnimationEnd: function onAnimationEnd() {
  },
  onAnimationStart: function onAnimationStart() {
  }
};
var Animate_default = Animate;

// node_modules/react-smooth/es6/AnimateGroup.js
var import_react9 = __toESM(require_react());
var import_react_transition_group2 = __toESM(require_react_transition_group());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/react-smooth/es6/AnimateGroupChild.js
var import_react8 = __toESM(require_react());
var import_react_transition_group = __toESM(require_react_transition_group());
var import_prop_types2 = __toESM(require_prop_types());
function _typeof7(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof7 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof7 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof7(obj);
}
function _extends5() {
  _extends5 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys6(Object(source), true).forEach(function(key) {
        _defineProperty6(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties5(Constructor, staticProps);
  return Constructor;
}
function _inherits5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf5(subClass, superClass);
}
function _setPrototypeOf5(o, p) {
  _setPrototypeOf5 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf5(o, p);
}
function _createSuper5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self2, call) {
  if (call && (_typeof7(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized5(self2);
}
function _assertThisInitialized5(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct5() {
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
function _getPrototypeOf5(o) {
  _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf5(o);
}
if (Number.isFinite === void 0) {
  Number.isFinite = function(value) {
    return typeof value === "number" && isFinite(value);
  };
}
var parseDurationOfSingleTransition = function parseDurationOfSingleTransition2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var steps = options.steps, duration = options.duration;
  if (steps && steps.length) {
    return steps.reduce(function(result, entry) {
      return result + (Number.isFinite(entry.duration) && entry.duration > 0 ? entry.duration : 0);
    }, 0);
  }
  if (Number.isFinite(duration)) {
    return duration;
  }
  return 0;
};
var AnimateGroupChild = /* @__PURE__ */ function(_Component) {
  _inherits5(AnimateGroupChild2, _Component);
  var _super = _createSuper5(AnimateGroupChild2);
  function AnimateGroupChild2() {
    var _this;
    _classCallCheck5(this, AnimateGroupChild2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isActive: false
    };
    _this.handleEnter = function(node, isAppearing) {
      var _this$props = _this.props, appearOptions = _this$props.appearOptions, enterOptions = _this$props.enterOptions;
      _this.handleStyleActive(isAppearing ? appearOptions : enterOptions);
    };
    _this.handleExit = function() {
      _this.handleStyleActive(_this.props.leaveOptions);
    };
    return _this;
  }
  _createClass5(AnimateGroupChild2, [{
    key: "handleStyleActive",
    value: function handleStyleActive(style) {
      if (style) {
        var onAnimationEnd2 = style.onAnimationEnd ? function() {
          style.onAnimationEnd();
        } : null;
        this.setState(_objectSpread6(_objectSpread6({}, style), {}, {
          onAnimationEnd: onAnimationEnd2,
          isActive: true
        }));
      }
    }
  }, {
    key: "parseTimeout",
    value: function parseTimeout() {
      var _this$props2 = this.props, appearOptions = _this$props2.appearOptions, enterOptions = _this$props2.enterOptions, leaveOptions = _this$props2.leaveOptions;
      return parseDurationOfSingleTransition(appearOptions) + parseDurationOfSingleTransition(enterOptions) + parseDurationOfSingleTransition(leaveOptions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props, children = _this$props3.children, appearOptions = _this$props3.appearOptions, enterOptions = _this$props3.enterOptions, leaveOptions = _this$props3.leaveOptions, props = _objectWithoutProperties5(_this$props3, ["children", "appearOptions", "enterOptions", "leaveOptions"]);
      return /* @__PURE__ */ import_react8.default.createElement(import_react_transition_group.Transition, _extends5({}, props, {
        onEnter: this.handleEnter,
        onExit: this.handleExit,
        timeout: this.parseTimeout()
      }), function() {
        return /* @__PURE__ */ import_react8.default.createElement(Animate_default, _this2.state, import_react8.Children.only(children));
      });
    }
  }]);
  return AnimateGroupChild2;
}(import_react8.Component);
AnimateGroupChild.propTypes = {
  appearOptions: import_prop_types2.default.object,
  enterOptions: import_prop_types2.default.object,
  leaveOptions: import_prop_types2.default.object,
  children: import_prop_types2.default.element
};
var AnimateGroupChild_default = AnimateGroupChild;

// node_modules/react-smooth/es6/AnimateGroup.js
function AnimateGroup(props) {
  var component = props.component, children = props.children, appear = props.appear, enter = props.enter, leave = props.leave;
  return /* @__PURE__ */ import_react9.default.createElement(import_react_transition_group2.TransitionGroup, {
    component
  }, import_react9.Children.map(children, function(child, index) {
    return /* @__PURE__ */ import_react9.default.createElement(AnimateGroupChild_default, {
      appearOptions: appear,
      enterOptions: enter,
      leaveOptions: leave,
      key: "child-".concat(index)
    }, child);
  }));
}
AnimateGroup.propTypes = {
  appear: import_prop_types3.default.object,
  enter: import_prop_types3.default.object,
  leave: import_prop_types3.default.object,
  children: import_prop_types3.default.oneOfType([import_prop_types3.default.array, import_prop_types3.default.element]),
  component: import_prop_types3.default.any
};
AnimateGroup.defaultProps = {
  component: "span"
};

// node_modules/react-smooth/es6/index.js
var es6_default = Animate_default;

// node_modules/recharts/es6/component/Tooltip.js
var import_classnames6 = __toESM(require_classnames());

// node_modules/recharts/es6/component/DefaultTooltipContent.js
var import_isNil = __toESM(require_isNil());
var import_sortBy = __toESM(require_sortBy());
var import_isArray2 = __toESM(require_isArray());
var import_react10 = __toESM(require_react());
var import_classnames5 = __toESM(require_classnames());
function _typeof8(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof8 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof8 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof8(obj);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys7(Object(source), true).forEach(function(key) {
        _defineProperty7(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys7(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties6(Constructor, staticProps);
  return Constructor;
}
function _inherits6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  _setPrototypeOf6 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf6(o, p);
}
function _createSuper6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct6();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf6(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf6(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn6(this, result);
  };
}
function _possibleConstructorReturn6(self2, call) {
  if (call && (_typeof8(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized6(self2);
}
function _assertThisInitialized6(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct6() {
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
function _getPrototypeOf6(o) {
  _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf6(o);
}
function defaultFormatter(value) {
  return (0, import_isArray2.default)(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(" ~ ") : value;
}
var DefaultTooltipContent = /* @__PURE__ */ function(_PureComponent) {
  _inherits6(DefaultTooltipContent2, _PureComponent);
  var _super = _createSuper6(DefaultTooltipContent2);
  function DefaultTooltipContent2() {
    _classCallCheck6(this, DefaultTooltipContent2);
    return _super.apply(this, arguments);
  }
  _createClass6(DefaultTooltipContent2, [{
    key: "renderContent",
    value: function renderContent3() {
      var _this$props = this.props, payload = _this$props.payload, separator = _this$props.separator, formatter = _this$props.formatter, itemStyle = _this$props.itemStyle, itemSorter = _this$props.itemSorter;
      if (payload && payload.length) {
        var listStyle = {
          padding: 0,
          margin: 0
        };
        var items = (itemSorter ? (0, import_sortBy.default)(payload, itemSorter) : payload).map(function(entry, i) {
          if (entry.type === "none") {
            return null;
          }
          var finalItemStyle = _objectSpread7({
            display: "block",
            paddingTop: 4,
            paddingBottom: 4,
            color: entry.color || "#000"
          }, itemStyle);
          var finalFormatter = entry.formatter || formatter || defaultFormatter;
          var value = entry.value, name = entry.name;
          if (finalFormatter && value != null && name != null) {
            var formatted = finalFormatter(value, name, entry, i, payload);
            if (Array.isArray(formatted)) {
              var _ref = formatted;
              var _ref2 = _slicedToArray3(_ref, 2);
              value = _ref2[0];
              name = _ref2[1];
            } else {
              value = formatted;
            }
          }
          return /* @__PURE__ */ import_react10.default.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(i),
            style: finalItemStyle
          }, isNumOrStr(name) ? /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, name) : null, isNumOrStr(name) ? /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, separator) : null, /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, value), /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, entry.unit || ""));
        });
        return /* @__PURE__ */ import_react10.default.createElement("ul", {
          className: "recharts-tooltip-item-list",
          style: listStyle
        }, items);
      }
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, wrapperClassName = _this$props2.wrapperClassName, contentStyle = _this$props2.contentStyle, labelClassName = _this$props2.labelClassName, labelStyle = _this$props2.labelStyle, label = _this$props2.label, labelFormatter = _this$props2.labelFormatter, payload = _this$props2.payload;
      var finalStyle = _objectSpread7({
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap"
      }, contentStyle);
      var finalLabelStyle = _objectSpread7({
        margin: 0
      }, labelStyle);
      var hasLabel = !(0, import_isNil.default)(label);
      var finalLabel = hasLabel ? label : "";
      var wrapperCN = (0, import_classnames5.default)("recharts-default-tooltip", wrapperClassName);
      var labelCN = (0, import_classnames5.default)("recharts-tooltip-label", labelClassName);
      if (hasLabel && labelFormatter && payload !== void 0 && payload !== null) {
        finalLabel = labelFormatter(label, payload);
      }
      return /* @__PURE__ */ import_react10.default.createElement("div", {
        className: wrapperCN,
        style: finalStyle
      }, /* @__PURE__ */ import_react10.default.createElement("p", {
        className: labelCN,
        style: finalLabelStyle
      }, /* @__PURE__ */ import_react10.default.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), this.renderContent());
    }
  }]);
  return DefaultTooltipContent2;
}(import_react10.PureComponent);
DefaultTooltipContent.displayName = "DefaultTooltipContent";
DefaultTooltipContent.defaultProps = {
  separator: " : ",
  contentStyle: {},
  itemStyle: {},
  labelStyle: {}
};

// node_modules/recharts/es6/util/Global.js
var parseIsSsrByDefault = function parseIsSsrByDefault2() {
  return !(typeof window !== "undefined" && window.document && window.document.createElement && window.setTimeout);
};
var Global = {
  isSsr: parseIsSsrByDefault(),
  get: function get(key) {
    return Global[key];
  },
  set: function set(key, value) {
    if (typeof key === "string") {
      Global[key] = value;
    } else {
      var keys = Object.keys(key);
      if (keys && keys.length) {
        keys.forEach(function(k2) {
          Global[k2] = key[k2];
        });
      }
    }
  }
};

// node_modules/recharts/es6/component/Tooltip.js
function _typeof9(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof9 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof9 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof9(obj);
}
function ownKeys8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys8(Object(source), true).forEach(function(key) {
        _defineProperty8(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys8(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties7(Constructor, staticProps);
  return Constructor;
}
function _inherits7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf7(subClass, superClass);
}
function _setPrototypeOf7(o, p) {
  _setPrototypeOf7 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf7(o, p);
}
function _createSuper7(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct7();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf7(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf7(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn7(this, result);
  };
}
function _possibleConstructorReturn7(self2, call) {
  if (call && (_typeof9(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized7(self2);
}
function _assertThisInitialized7(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct7() {
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
function _getPrototypeOf7(o) {
  _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf7(o);
}
var CLS_PREFIX = "recharts-tooltip-wrapper";
var EPS2 = 1;
function defaultUniqBy2(entry) {
  return entry.dataKey;
}
function getUniqPayload2(option, payload) {
  if (option === true) {
    return (0, import_uniqBy2.default)(payload, defaultUniqBy2);
  }
  if ((0, import_isFunction2.default)(option)) {
    return (0, import_uniqBy2.default)(payload, option);
  }
  return payload;
}
function renderContent2(content, props) {
  if (/* @__PURE__ */ import_react11.default.isValidElement(content)) {
    return /* @__PURE__ */ import_react11.default.cloneElement(content, props);
  }
  if ((0, import_isFunction2.default)(content)) {
    return /* @__PURE__ */ import_react11.default.createElement(content, props);
  }
  return /* @__PURE__ */ import_react11.default.createElement(DefaultTooltipContent, props);
}
var Tooltip = /* @__PURE__ */ function(_PureComponent) {
  _inherits7(Tooltip2, _PureComponent);
  var _super = _createSuper7(Tooltip2);
  function Tooltip2() {
    var _this;
    _classCallCheck7(this, Tooltip2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      boxWidth: -1,
      boxHeight: -1,
      dismissed: false,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    };
    _this.wrapperNode = void 0;
    _this.getTranslate = function(_ref) {
      var key = _ref.key, tooltipDimension = _ref.tooltipDimension, viewBoxDimension = _ref.viewBoxDimension;
      var _this$props = _this.props, allowEscapeViewBox = _this$props.allowEscapeViewBox, coordinate = _this$props.coordinate, offset = _this$props.offset, position = _this$props.position, viewBox = _this$props.viewBox;
      if (position && isNumber(position[key])) {
        return position[key];
      }
      var restricted = coordinate[key] - tooltipDimension - offset;
      var unrestricted = coordinate[key] + offset;
      if (allowEscapeViewBox[key]) {
        return unrestricted;
      }
      var tooltipBoundary = coordinate[key] + tooltipDimension + offset;
      var viewBoxBoundary = viewBox[key] + viewBoxDimension;
      if (tooltipBoundary > viewBoxBoundary) {
        return Math.max(restricted, viewBox[key]);
      }
      return Math.max(unrestricted, viewBox[key]);
    };
    return _this;
  }
  _createClass7(Tooltip2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var _this$state = this.state, boxWidth = _this$state.boxWidth, boxHeight = _this$state.boxHeight, dismissed = _this$state.dismissed;
      if (dismissed) {
        this.wrapperNode.blur();
        if (this.props.coordinate.x !== this.state.dismissedAtCoordinate.x || this.props.coordinate.y !== this.state.dismissedAtCoordinate.y) {
          this.setState({
            dismissed: false
          });
        }
      } else {
        this.wrapperNode.focus({
          preventScroll: true
        });
      }
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();
        if (Math.abs(box.width - boxWidth) > EPS2 || Math.abs(box.height - boxHeight) > EPS2) {
          this.setState({
            boxWidth: box.width,
            boxHeight: box.height
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _this2 = this;
      var _this$props2 = this.props, payload = _this$props2.payload, isAnimationActive = _this$props2.isAnimationActive, animationDuration = _this$props2.animationDuration, animationEasing = _this$props2.animationEasing, filterNull = _this$props2.filterNull, payloadUniqBy = _this$props2.payloadUniqBy;
      var finalPayload = getUniqPayload2(payloadUniqBy, filterNull && payload && payload.length ? payload.filter(function(entry) {
        return !(0, import_isNil2.default)(entry.value);
      }) : payload);
      var hasPayload = finalPayload && finalPayload.length;
      var _this$props3 = this.props, content = _this$props3.content, viewBox = _this$props3.viewBox, coordinate = _this$props3.coordinate, position = _this$props3.position, active = _this$props3.active, wrapperStyle = _this$props3.wrapperStyle;
      var outerStyle = _objectSpread8({
        pointerEvents: "none",
        visibility: !this.state.dismissed && active && hasPayload ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, wrapperStyle);
      var translateX, translateY;
      if (position && isNumber(position.x) && isNumber(position.y)) {
        translateX = position.x;
        translateY = position.y;
      } else {
        var _this$state2 = this.state, boxWidth = _this$state2.boxWidth, boxHeight = _this$state2.boxHeight;
        if (boxWidth > 0 && boxHeight > 0 && coordinate) {
          translateX = this.getTranslate({
            key: "x",
            tooltipDimension: boxWidth,
            viewBoxDimension: viewBox.width
          });
          translateY = this.getTranslate({
            key: "y",
            tooltipDimension: boxHeight,
            viewBoxDimension: viewBox.height
          });
        } else {
          outerStyle.visibility = "hidden";
        }
      }
      outerStyle = _objectSpread8(_objectSpread8({}, translateStyle({
        transform: this.props.useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
      })), outerStyle);
      if (isAnimationActive && active) {
        outerStyle = _objectSpread8(_objectSpread8({}, translateStyle({
          transition: "transform ".concat(animationDuration, "ms ").concat(animationEasing)
        })), outerStyle);
      }
      var cls = (0, import_classnames6.default)(CLS_PREFIX, (_classNames = {}, _defineProperty8(_classNames, "".concat(CLS_PREFIX, "-right"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x), _defineProperty8(_classNames, "".concat(CLS_PREFIX, "-left"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x), _defineProperty8(_classNames, "".concat(CLS_PREFIX, "-bottom"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y), _defineProperty8(_classNames, "".concat(CLS_PREFIX, "-top"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y), _classNames));
      return /* @__PURE__ */ import_react11.default.createElement("div", {
        tabIndex: -1,
        role: "dialog",
        onKeyDown: function onKeyDown(event) {
          if (event.key === "Escape") {
            _this2.setState({
              dismissed: true,
              dismissedAtCoordinate: _objectSpread8(_objectSpread8({}, _this2.state.dismissedAtCoordinate), {}, {
                x: _this2.props.coordinate.x,
                y: _this2.props.coordinate.y
              })
            });
          }
        },
        className: cls,
        style: outerStyle,
        ref: function ref(node) {
          _this2.wrapperNode = node;
        }
      }, renderContent2(content, _objectSpread8(_objectSpread8({}, this.props), {}, {
        payload: finalPayload
      })));
    }
  }]);
  return Tooltip2;
}(import_react11.PureComponent);
Tooltip.displayName = "Tooltip";
Tooltip.defaultProps = {
  active: false,
  allowEscapeViewBox: {
    x: false,
    y: false
  },
  offset: 10,
  viewBox: {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  },
  coordinate: {
    x: 0,
    y: 0
  },
  cursorStyle: {},
  separator: " : ",
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
  trigger: "hover",
  isAnimationActive: !Global.isSsr,
  animationEasing: "ease",
  animationDuration: 400,
  filterNull: true,
  useTranslate3d: false
};

// node_modules/recharts/es6/component/ResponsiveContainer.js
var import_debounce = __toESM(require_debounce());
var import_classnames7 = __toESM(require_classnames());
var import_react13 = __toESM(require_react());

// node_modules/react-resize-detector/build/index.esm.js
var React11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s2, e) {
  var t = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
      t[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
        t[p[i]] = s2[p[i]];
    }
  return t;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function("return this")();
var _root = root$2;
var root$1 = _root;
var now$1 = function() {
  return root$1.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var root = _root;
var Symbol$2 = root.Symbol;
var _Symbol = Symbol$2;
var Symbol$1 = _Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol2 = _Symbol;
var getRawTag = _getRawTag;
var objectToString = _objectToString;
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
function baseGetTag$1(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$1;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag = _baseGetTag;
var isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;
var baseTrim = _baseTrim;
var isObject$2 = isObject_1;
var isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject$1 = isObject_1;
var now = now_1;
var toNumber = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time2) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time2;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time2) {
    lastInvokeTime = time2;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time2) : result;
  }
  function remainingWait(time2) {
    var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time2) {
    var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time2 = now();
    if (shouldInvoke(time2)) {
      return trailingEdge(time2);
    }
    timerId = setTimeout(timerExpired, remainingWait(time2));
  }
  function trailingEdge(time2) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time2);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time2 = now(), isInvoking = shouldInvoke(time2);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time2;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce$1;
var debounce = debounce_1;
var isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle;
var patchResizeHandler = function(resizeCallback, refreshMode, refreshRate, refreshOptions) {
  switch (refreshMode) {
    case "debounce":
      return debounce_1(resizeCallback, refreshRate, refreshOptions);
    case "throttle":
      return throttle_1(resizeCallback, refreshRate, refreshOptions);
    default:
      return resizeCallback;
  }
};
var isFunction = function(fn) {
  return typeof fn === "function";
};
var isSSR = function() {
  return typeof window === "undefined";
};
var isDOMElement = function(element) {
  return element instanceof Element || element instanceof HTMLDocument;
};
var createNotifier = function(onResize, setSize, handleWidth, handleHeight) {
  return function(_a) {
    var width = _a.width, height = _a.height;
    setSize(function(prev) {
      if (prev.width === width && prev.height === height) {
        return prev;
      }
      if (prev.width === width && !handleHeight || prev.height === height && !handleWidth) {
        return prev;
      }
      if (onResize && isFunction(onResize)) {
        onResize(width, height);
      }
      return { width, height };
    });
  };
};
var ResizeDetector = function(_super) {
  __extends(ResizeDetector2, _super);
  function ResizeDetector2(props) {
    var _this = _super.call(this, props) || this;
    _this.cancelHandler = function() {
      if (_this.resizeHandler && _this.resizeHandler.cancel) {
        _this.resizeHandler.cancel();
        _this.resizeHandler = null;
      }
    };
    _this.attachObserver = function() {
      var _a2 = _this.props, targetRef = _a2.targetRef, observerOptions = _a2.observerOptions;
      if (isSSR()) {
        return;
      }
      if (targetRef && targetRef.current) {
        _this.targetRef.current = targetRef.current;
      }
      var element = _this.getElement();
      if (!element) {
        return;
      }
      if (_this.observableElement && _this.observableElement === element) {
        return;
      }
      _this.observableElement = element;
      _this.resizeObserver.observe(element, observerOptions);
    };
    _this.getElement = function() {
      var _a2 = _this.props, querySelector = _a2.querySelector, targetDomEl = _a2.targetDomEl;
      if (isSSR())
        return null;
      if (querySelector)
        return document.querySelector(querySelector);
      if (targetDomEl && isDOMElement(targetDomEl))
        return targetDomEl;
      if (_this.targetRef && isDOMElement(_this.targetRef.current))
        return _this.targetRef.current;
      var currentElement = (0, import_react_dom.findDOMNode)(_this);
      if (!currentElement)
        return null;
      var renderType = _this.getRenderType();
      switch (renderType) {
        case "renderProp":
          return currentElement;
        case "childFunction":
          return currentElement;
        case "child":
          return currentElement;
        case "childArray":
          return currentElement;
        default:
          return currentElement.parentElement;
      }
    };
    _this.createResizeHandler = function(entries) {
      var _a2 = _this.props, _b = _a2.handleWidth, handleWidth = _b === void 0 ? true : _b, _c = _a2.handleHeight, handleHeight = _c === void 0 ? true : _c, onResize = _a2.onResize;
      if (!handleWidth && !handleHeight)
        return;
      var notifyResize = createNotifier(onResize, _this.setState.bind(_this), handleWidth, handleHeight);
      entries.forEach(function(entry) {
        var _a3 = entry && entry.contentRect || {}, width = _a3.width, height = _a3.height;
        var shouldSetSize = !_this.skipOnMount && !isSSR();
        if (shouldSetSize) {
          notifyResize({ width, height });
        }
        _this.skipOnMount = false;
      });
    };
    _this.getRenderType = function() {
      var _a2 = _this.props, render = _a2.render, children = _a2.children;
      if (isFunction(render)) {
        return "renderProp";
      }
      if (isFunction(children)) {
        return "childFunction";
      }
      if ((0, import_react12.isValidElement)(children)) {
        return "child";
      }
      if (Array.isArray(children)) {
        return "childArray";
      }
      return "parent";
    };
    var skipOnMount = props.skipOnMount, refreshMode = props.refreshMode, _a = props.refreshRate, refreshRate = _a === void 0 ? 1e3 : _a, refreshOptions = props.refreshOptions;
    _this.state = {
      width: void 0,
      height: void 0
    };
    _this.skipOnMount = skipOnMount;
    _this.targetRef = (0, import_react12.createRef)();
    _this.observableElement = null;
    if (isSSR()) {
      return _this;
    }
    _this.resizeHandler = patchResizeHandler(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
    _this.resizeObserver = new window.ResizeObserver(_this.resizeHandler);
    return _this;
  }
  ResizeDetector2.prototype.componentDidMount = function() {
    this.attachObserver();
  };
  ResizeDetector2.prototype.componentDidUpdate = function() {
    this.attachObserver();
  };
  ResizeDetector2.prototype.componentWillUnmount = function() {
    if (isSSR()) {
      return;
    }
    this.observableElement = null;
    this.resizeObserver.disconnect();
    this.cancelHandler();
  };
  ResizeDetector2.prototype.render = function() {
    var _a = this.props, render = _a.render, children = _a.children, _b = _a.nodeType, WrapperTag = _b === void 0 ? "div" : _b;
    var _c = this.state, width = _c.width, height = _c.height;
    var childProps = { width, height, targetRef: this.targetRef };
    var renderType = this.getRenderType();
    var typedChildren;
    switch (renderType) {
      case "renderProp":
        return render && render(childProps);
      case "childFunction":
        typedChildren = children;
        return typedChildren(childProps);
      case "child":
        typedChildren = children;
        if (typedChildren.type && typeof typedChildren.type === "string") {
          childProps.targetRef;
          var nativeProps = __rest(childProps, ["targetRef"]);
          return (0, import_react12.cloneElement)(typedChildren, nativeProps);
        }
        return (0, import_react12.cloneElement)(typedChildren, childProps);
      case "childArray":
        typedChildren = children;
        return typedChildren.map(function(el) {
          return !!el && (0, import_react12.cloneElement)(el, childProps);
        });
      default:
        return React11.createElement(WrapperTag, null);
    }
  };
  return ResizeDetector2;
}(import_react12.PureComponent);
var useEnhancedEffect = isSSR() ? import_react12.useEffect : import_react12.useLayoutEffect;

// node_modules/recharts/es6/util/LogUtils.js
var isDev2 = true;
var warn3 = function warn4(condition, format2) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (isDev2 && typeof console !== "undefined" && console.warn) {
    if (format2 === void 0) {
      console.warn("LogUtils requires an error message argument");
    }
    if (!condition) {
      if (format2 === void 0) {
        console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var argIndex = 0;
        console.warn(format2.replace(/%s/g, function() {
          return args[argIndex++];
        }));
      }
    }
  }
};

// node_modules/recharts/es6/component/ResponsiveContainer.js
function _extends6() {
  _extends6 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
function _slicedToArray4(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit4(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
var ResponsiveContainer = /* @__PURE__ */ (0, import_react13.forwardRef)(function(_ref, ref) {
  var aspect = _ref.aspect, _ref$width = _ref.width, width = _ref$width === void 0 ? "100%" : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? "100%" : _ref$height, minWidth = _ref.minWidth, minHeight = _ref.minHeight, maxHeight = _ref.maxHeight, children = _ref.children, _ref$debounce = _ref.debounce, debounce2 = _ref$debounce === void 0 ? 0 : _ref$debounce, id = _ref.id, className = _ref.className;
  var _useState = (0, import_react13.useState)({
    containerWidth: -1,
    containerHeight: -1
  }), _useState2 = _slicedToArray4(_useState, 2), sizes = _useState2[0], setSizes = _useState2[1];
  var containerRef = (0, import_react13.useRef)(null);
  (0, import_react13.useImperativeHandle)(ref, function() {
    return containerRef;
  }, [containerRef]);
  var _useState3 = (0, import_react13.useState)(false), _useState4 = _slicedToArray4(_useState3, 2), mounted = _useState4[0], setMounted = _useState4[1];
  var getContainerSize = function getContainerSize2() {
    if (!containerRef.current) {
      return null;
    }
    return {
      containerWidth: containerRef.current.clientWidth,
      containerHeight: containerRef.current.clientHeight
    };
  };
  var updateDimensionsImmediate = function updateDimensionsImmediate2() {
    if (!mounted) {
      return;
    }
    var newSize = getContainerSize();
    if (newSize) {
      var oldWidth = sizes.containerWidth, oldHeight = sizes.containerHeight;
      var containerWidth = newSize.containerWidth, containerHeight = newSize.containerHeight;
      if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
        setSizes({
          containerWidth,
          containerHeight
        });
      }
    }
  };
  var handleResize = debounce2 > 0 ? (0, import_debounce.default)(updateDimensionsImmediate, debounce2) : updateDimensionsImmediate;
  var renderChart = function renderChart2() {
    var containerWidth = sizes.containerWidth, containerHeight = sizes.containerHeight;
    if (containerWidth < 0 || containerHeight < 0) {
      return null;
    }
    warn3(isPercent(width) || isPercent(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
    warn3(!aspect || aspect > 0, "The aspect(%s) must be greater than zero.", aspect);
    var calculatedWidth = isPercent(width) ? containerWidth : width;
    var calculatedHeight = isPercent(height) ? containerHeight : height;
    if (aspect && aspect > 0) {
      if (calculatedWidth) {
        calculatedHeight = calculatedWidth / aspect;
      } else if (calculatedHeight) {
        calculatedWidth = calculatedHeight * aspect;
      }
      if (maxHeight && calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
      }
    }
    warn3(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
    return /* @__PURE__ */ (0, import_react13.cloneElement)(children, {
      width: calculatedWidth,
      height: calculatedHeight
    });
  };
  (0, import_react13.useEffect)(function() {
    if (mounted) {
      var size = getContainerSize();
      if (size) {
        setSizes(size);
      }
    }
  }, [mounted]);
  (0, import_react13.useEffect)(function() {
    setMounted(true);
  }, []);
  var style = {
    width,
    height,
    minWidth,
    minHeight,
    maxHeight
  };
  return /* @__PURE__ */ import_react13.default.createElement(ResizeDetector, {
    handleWidth: true,
    handleHeight: true,
    onResize: handleResize,
    targetRef: containerRef
  }, /* @__PURE__ */ import_react13.default.createElement("div", _extends6({}, id != null ? {
    id: "".concat(id)
  } : {}, {
    className: (0, import_classnames7.default)("recharts-responsive-container", className),
    style,
    ref: containerRef
  }), renderChart()));
});

// node_modules/recharts/es6/component/Text.js
var import_isNil3 = __toESM(require_isNil());
var import_react14 = __toESM(require_react());
var import_reduce_css_calc = __toESM(require_dist());
var import_classnames8 = __toESM(require_classnames());

// node_modules/recharts/es6/util/DOMUtils.js
function ownKeys9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys9(Object(source), true).forEach(function(key) {
        _defineProperty9(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys9(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray7(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _iterableToArray5(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray7(arr);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var stringCache = {
  widthCache: {},
  cacheCount: 0
};
var MAX_CACHE_NUM = 2e3;
var SPAN_STYLE = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
};
var STYLE_LIST = ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "lineHeight", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"];
var MEASUREMENT_SPAN_ID = "recharts_measurement_span";
function autoCompleteStyle(name, value) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return "".concat(value, "px");
  }
  return value;
}
function camelToMiddleLine(text) {
  var strs = text.split("");
  var formatStrs = strs.reduce(function(result, entry) {
    if (entry === entry.toUpperCase()) {
      return [].concat(_toConsumableArray4(result), ["-", entry.toLowerCase()]);
    }
    return [].concat(_toConsumableArray4(result), [entry]);
  }, []);
  return formatStrs.join("");
}
var getStyleString = function getStyleString2(style) {
  return Object.keys(style).reduce(function(result, s2) {
    return "".concat(result).concat(camelToMiddleLine(s2), ":").concat(autoCompleteStyle(s2, style[s2]), ";");
  }, "");
};
var getStringSize = function getStringSize2(text) {
  var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (text === void 0 || text === null || Global.isSsr) {
    return {
      width: 0,
      height: 0
    };
  }
  var str = "".concat(text);
  var styleString = getStyleString(style);
  var cacheKey = "".concat(str, "-").concat(styleString);
  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }
  try {
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement("span");
      measurementSpan.setAttribute("id", MEASUREMENT_SPAN_ID);
      measurementSpan.setAttribute("aria-hidden", "true");
      document.body.appendChild(measurementSpan);
    }
    var measurementSpanStyle = _objectSpread9(_objectSpread9({}, SPAN_STYLE), style);
    Object.keys(measurementSpanStyle).map(function(styleKey) {
      measurementSpan.style[styleKey] = measurementSpanStyle[styleKey];
      return styleKey;
    });
    measurementSpan.textContent = str;
    var rect = measurementSpan.getBoundingClientRect();
    var result = {
      width: rect.width,
      height: rect.height
    };
    stringCache.widthCache[cacheKey] = result;
    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }
    return result;
  } catch (e) {
    return {
      width: 0,
      height: 0
    };
  }
};
var getOffset = function getOffset2(el) {
  var html = el.ownerDocument.documentElement;
  var box = {
    top: 0,
    left: 0
  };
  if (typeof el.getBoundingClientRect !== "undefined") {
    box = el.getBoundingClientRect();
  }
  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft
  };
};
var calculateChartCoordinate = function calculateChartCoordinate2(event, offset) {
  return {
    chartX: Math.round(event.pageX - offset.left),
    chartY: Math.round(event.pageY - offset.top)
  };
};

// node_modules/recharts/es6/component/Text.js
function _typeof10(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof10 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof10 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof10(obj);
}
function _extends7() {
  _extends7 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
function _objectWithoutProperties6(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose6(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties8(Constructor, staticProps);
  return Constructor;
}
function _inherits8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf8(subClass, superClass);
}
function _setPrototypeOf8(o, p) {
  _setPrototypeOf8 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf8(o, p);
}
function _createSuper8(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct8();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf8(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf8(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn8(this, result);
  };
}
function _possibleConstructorReturn8(self2, call) {
  if (call && (_typeof10(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized8(self2);
}
function _assertThisInitialized8(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct8() {
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
function _getPrototypeOf8(o) {
  _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf8(o);
}
function _slicedToArray5(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys10(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread10(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys10(Object(source), true).forEach(function(key) {
        _defineProperty10(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys10(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty10(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = function calculateWordWidths2(props) {
  try {
    var words = [];
    if (!(0, import_isNil3.default)(props.children)) {
      if (props.breakAll) {
        words = props.children.toString().split("");
      } else {
        words = props.children.toString().split(BREAKING_SPACES);
      }
    }
    var wordsWithComputedWidth = words.map(function(word) {
      return {
        word,
        width: getStringSize(word, props.style).width
      };
    });
    var spaceWidth = props.breakAll ? 0 : getStringSize("\xA0", props.style).width;
    return {
      wordsWithComputedWidth,
      spaceWidth
    };
  } catch (e) {
    return null;
  }
};
var calculateWordsByLines = function calculateWordsByLines2(props, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
  var shouldLimitLines = isNumber(props.maxLines);
  var text = props.children;
  var calculate = function calculate2() {
    var words = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return words.reduce(function(result2, _ref) {
      var word = _ref.word, width = _ref.width;
      var currentLine = result2[result2.length - 1];
      if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
        currentLine.words.push(word);
        currentLine.width += width + spaceWidth;
      } else {
        var newLine = {
          words: [word],
          width
        };
        result2.push(newLine);
      }
      return result2;
    }, []);
  };
  var originalResult = calculate(initialWordsWithComputedWith);
  var findLongestLine = function findLongestLine2(words) {
    return words.reduce(function(a2, b) {
      return a2.width > b.width ? a2 : b;
    });
  };
  if (!shouldLimitLines) {
    return originalResult;
  }
  var suffix = "\u2026";
  var checkOverflow = function checkOverflow2(index) {
    var tempText = text.slice(0, index);
    var words = calculateWordWidths(_objectSpread10(_objectSpread10({}, props), {}, {
      children: tempText + suffix
    })).wordsWithComputedWidth;
    var result2 = calculate(words);
    var doesOverflow = result2.length > props.maxLines || findLongestLine(result2).width > lineWidth;
    return [doesOverflow, result2];
  };
  var start = 0;
  var end = text.length - 1;
  var iterations = 0;
  var trimmedResult;
  while (start <= end && iterations <= text.length - 1) {
    var middle = Math.floor((start + end) / 2);
    var prev = middle - 1;
    var _checkOverflow = checkOverflow(prev), _checkOverflow2 = _slicedToArray5(_checkOverflow, 2), doesPrevOverflow = _checkOverflow2[0], result = _checkOverflow2[1];
    var _checkOverflow3 = checkOverflow(middle), _checkOverflow4 = _slicedToArray5(_checkOverflow3, 1), doesMiddleOverflow = _checkOverflow4[0];
    if (!doesPrevOverflow && !doesMiddleOverflow) {
      start = middle + 1;
    }
    if (doesPrevOverflow && doesMiddleOverflow) {
      end = middle - 1;
    }
    if (!doesPrevOverflow && doesMiddleOverflow) {
      trimmedResult = result;
      break;
    }
    iterations++;
  }
  return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = function getWordsWithoutCalculate2(children) {
  var words = !(0, import_isNil3.default)(children) ? children.toString().split(BREAKING_SPACES) : [];
  return [{
    words
  }];
};
var getWordsByLines = function getWordsByLines2(props, needCalculate) {
  if ((props.width || props.scaleToFit) && !Global.isSsr) {
    var wordsWithComputedWidth, spaceWidth;
    if (needCalculate) {
      var wordWidths = calculateWordWidths(props);
      if (wordWidths) {
        var wcw = wordWidths.wordsWithComputedWidth, sw = wordWidths.spaceWidth;
        wordsWithComputedWidth = wcw;
        spaceWidth = sw;
      } else {
        return getWordsWithoutCalculate(props.children);
      }
      return calculateWordsByLines(props, wordsWithComputedWidth, spaceWidth, props.width, props.scaleToFit);
    }
  }
  return getWordsWithoutCalculate(props.children);
};
var Text = /* @__PURE__ */ function(_Component) {
  _inherits8(Text2, _Component);
  var _super = _createSuper8(Text2);
  function Text2() {
    var _this;
    _classCallCheck8(this, Text2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};
    return _this;
  }
  _createClass8(Text2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, dx = _this$props.dx, dy = _this$props.dy, textAnchor = _this$props.textAnchor, verticalAnchor = _this$props.verticalAnchor, scaleToFit = _this$props.scaleToFit, angle = _this$props.angle, lineHeight = _this$props.lineHeight, capHeight = _this$props.capHeight, className = _this$props.className, breakAll = _this$props.breakAll, textProps = _objectWithoutProperties6(_this$props, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]);
      var wordsByLines = this.state.wordsByLines;
      if (!isNumOrStr(textProps.x) || !isNumOrStr(textProps.y)) {
        return null;
      }
      var x2 = textProps.x + (isNumber(dx) ? dx : 0);
      var y2 = textProps.y + (isNumber(dy) ? dy : 0);
      var startDy;
      switch (verticalAnchor) {
        case "start":
          startDy = (0, import_reduce_css_calc.default)("calc(".concat(capHeight, ")"));
          break;
        case "middle":
          startDy = (0, import_reduce_css_calc.default)("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
          break;
        default:
          startDy = (0, import_reduce_css_calc.default)("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
          break;
      }
      var transforms = [];
      if (scaleToFit) {
        var lineWidth = wordsByLines[0].width;
        var width = this.props.width;
        transforms.push("scale(".concat((isNumber(width) ? width / lineWidth : 1) / lineWidth, ")"));
      }
      if (angle) {
        transforms.push("rotate(".concat(angle, ", ").concat(x2, ", ").concat(y2, ")"));
      }
      if (transforms.length) {
        textProps.transform = transforms.join(" ");
      }
      return /* @__PURE__ */ import_react14.default.createElement("text", _extends7({}, filterProps(textProps, true), {
        x: x2,
        y: y2,
        className: (0, import_classnames8.default)("recharts-text", className),
        textAnchor
      }), wordsByLines.map(function(line, index) {
        return /* @__PURE__ */ import_react14.default.createElement("tspan", {
          x: x2,
          dy: index === 0 ? startDy : lineHeight,
          key: index
        }, line.words.join(breakAll ? "" : " "));
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.width !== prevState.prevWidth || nextProps.scaleToFit !== prevState.prevScaleToFit || nextProps.children !== prevState.prevChildren || nextProps.style !== prevState.prevStyle || nextProps.breakAll !== prevState.prevBreakAll) {
        var needCalculate = nextProps.children !== prevState.prevChildren || nextProps.style !== prevState.prevStyle || nextProps.breakAll !== prevState.prevBreakAll;
        return {
          prevWidth: nextProps.width,
          prevScaleToFit: nextProps.scaleToFit,
          prevChildren: nextProps.children,
          prevStyle: nextProps.style,
          wordsByLines: getWordsByLines(nextProps, needCalculate)
        };
      }
      return null;
    }
  }]);
  return Text2;
}(import_react14.Component);
Text.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: "1em",
  capHeight: "0.71em",
  scaleToFit: false,
  textAnchor: "start",
  verticalAnchor: "end"
};

// node_modules/recharts/es6/component/Label.js
var import_isObject2 = __toESM(require_isObject());
var import_isFunction4 = __toESM(require_isFunction());
var import_isNil7 = __toESM(require_isNil());
var import_react16 = __toESM(require_react());
var import_classnames9 = __toESM(require_classnames());

// node_modules/recharts/es6/util/ReactUtils.js
var import_isString2 = __toESM(require_isString());
var import_get2 = __toESM(require_get());
var import_isNil4 = __toESM(require_isNil());
var import_isArray3 = __toESM(require_isArray());
var import_react15 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());

// node_modules/recharts/es6/util/ShallowEqual.js
function shallowEqual(a2, b) {
  for (var key in a2) {
    if ({}.hasOwnProperty.call(a2, key) && (!{}.hasOwnProperty.call(b, key) || a2[key] !== b[key])) {
      return false;
    }
  }
  for (var _key in b) {
    if ({}.hasOwnProperty.call(b, _key) && !{}.hasOwnProperty.call(a2, _key)) {
      return false;
    }
  }
  return true;
}

// node_modules/recharts/es6/util/ReactUtils.js
function _objectWithoutProperties7(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose7(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var REACT_BROWSER_EVENT_MAP = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart"
};
var getDisplayName = function getDisplayName2(Comp) {
  if (typeof Comp === "string") {
    return Comp;
  }
  if (!Comp) {
    return "";
  }
  return Comp.displayName || Comp.name || "Component";
};
var lastChildren = null;
var lastResult = null;
var toArray = function toArray2(children) {
  if (children === lastChildren && (0, import_isArray3.default)(lastResult)) {
    return lastResult;
  }
  var result = [];
  import_react15.Children.forEach(children, function(child) {
    if ((0, import_isNil4.default)(child))
      return;
    if ((0, import_react_is.isFragment)(child)) {
      result = result.concat(toArray2(child.props.children));
    } else {
      result.push(child);
    }
  });
  lastResult = result;
  lastChildren = children;
  return result;
};
var findAllByType = function findAllByType2(children, type) {
  var result = [];
  var types = [];
  if ((0, import_isArray3.default)(type)) {
    types = type.map(function(t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }
  toArray(children).forEach(function(child) {
    var childType = (0, import_get2.default)(child, "type.displayName") || (0, import_get2.default)(child, "type.name");
    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });
  return result;
};
var findChildByType = function findChildByType2(children, type) {
  var result = findAllByType(children, type);
  return result && result[0];
};
var validateWidthHeight = function validateWidthHeight2(el) {
  if (!el || !el.props) {
    return false;
  }
  var _el$props = el.props, width = _el$props.width, height = _el$props.height;
  if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0) {
    return false;
  }
  return true;
};
var SVG_TAGS = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"];
var isSvgElement = function isSvgElement2(child) {
  return child && child.type && (0, import_isString2.default)(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};
var isChildrenEqual = function isChildrenEqual2(nextChildren, prevChildren) {
  if (nextChildren === prevChildren) {
    return true;
  }
  var count = import_react15.Children.count(nextChildren);
  if (count !== import_react15.Children.count(prevChildren)) {
    return false;
  }
  if (count === 0) {
    return true;
  }
  if (count === 1) {
    return isSingleChildEqual((0, import_isArray3.default)(nextChildren) ? nextChildren[0] : nextChildren, (0, import_isArray3.default)(prevChildren) ? prevChildren[0] : prevChildren);
  }
  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];
    if ((0, import_isArray3.default)(nextChild) || (0, import_isArray3.default)(prevChild)) {
      if (!isChildrenEqual2(nextChild, prevChild)) {
        return false;
      }
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }
  return true;
};
var isSingleChildEqual = function isSingleChildEqual2(nextChild, prevChild) {
  if ((0, import_isNil4.default)(nextChild) && (0, import_isNil4.default)(prevChild)) {
    return true;
  }
  if (!(0, import_isNil4.default)(nextChild) && !(0, import_isNil4.default)(prevChild)) {
    var _ref = nextChild.props || {}, nextChildren = _ref.children, nextProps = _objectWithoutProperties7(_ref, ["children"]);
    var _ref2 = prevChild.props || {}, prevChildren = _ref2.children, prevProps = _objectWithoutProperties7(_ref2, ["children"]);
    if (nextChildren && prevChildren) {
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }
    if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }
    return false;
  }
  return false;
};
var renderByOrder = function renderByOrder2(children, renderMap) {
  var elements = [];
  var record = {};
  toArray(children).forEach(function(child, index) {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child) {
      var displayName = getDisplayName(child.type);
      var _ref3 = renderMap[displayName] || {}, handler = _ref3.handler, once = _ref3.once;
      if (handler && (!once || !record[displayName])) {
        var results = handler(child, displayName, index);
        elements.push(results);
        record[displayName] = true;
      }
    }
  });
  return elements;
};
var getReactEventByType = function getReactEventByType2(e) {
  var type = e && e.type;
  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }
  return null;
};
var parseChildIndex = function parseChildIndex2(child, children) {
  return toArray(children).indexOf(child);
};

// node_modules/recharts/es6/util/PolarUtils.js
var import_isNil6 = __toESM(require_isNil());

// node_modules/recharts/es6/util/ChartUtils.js
var import_isEqual = __toESM(require_isEqual());
var import_sortBy2 = __toESM(require_sortBy());
var import_isNaN2 = __toESM(require_isNaN());
var import_upperFirst2 = __toESM(require_upperFirst());
var import_isString3 = __toESM(require_isString());
var import_isArray4 = __toESM(require_isArray());
var import_max2 = __toESM(require_max());
var import_min2 = __toESM(require_min());
var import_flatMap = __toESM(require_flatMap());
var import_isFunction3 = __toESM(require_isFunction());
var import_get3 = __toESM(require_get());
var import_isNil5 = __toESM(require_isNil());

// node_modules/recharts-scale/es6/getNiceTickValues.js
var import_decimal2 = __toESM(require_decimal());

// node_modules/recharts-scale/es6/util/utils.js
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray9(o, minLen);
}
function _iterableToArray6(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var identity3 = function identity4(i) {
  return i;
};
var PLACE_HOLDER = {
  "@@functional/placeholder": true
};
var isPlaceHolder = function isPlaceHolder2(val) {
  return val === PLACE_HOLDER;
};
var curry0 = function curry02(fn) {
  return function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? void 0 : arguments[0])) {
      return _curried;
    }
    return fn.apply(void 0, arguments);
  };
};
var curryN = function curryN2(n, fn) {
  if (n === 1) {
    return fn;
  }
  return curry0(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var argsLength = args.filter(function(arg) {
      return arg !== PLACE_HOLDER;
    }).length;
    if (argsLength >= n) {
      return fn.apply(void 0, args);
    }
    return curryN2(n - argsLength, curry0(function() {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }
      var newArgs = args.map(function(arg) {
        return isPlaceHolder(arg) ? restArgs.shift() : arg;
      });
      return fn.apply(void 0, _toConsumableArray5(newArgs).concat(restArgs));
    }));
  });
};
var curry = function curry2(fn) {
  return curryN(fn.length, fn);
};
var range = function range2(begin, end) {
  var arr = [];
  for (var i = begin; i < end; ++i) {
    arr[i - begin] = i;
  }
  return arr;
};
var map = curry(function(fn, arr) {
  if (Array.isArray(arr)) {
    return arr.map(fn);
  }
  return Object.keys(arr).map(function(key) {
    return arr[key];
  }).map(fn);
});
var compose = function compose2() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  if (!args.length) {
    return identity3;
  }
  var fns = args.reverse();
  var firstFn = fns[0];
  var tailsFn = fns.slice(1);
  return function() {
    return tailsFn.reduce(function(res, fn) {
      return fn(res);
    }, firstFn.apply(void 0, arguments));
  };
};
var reverse = function reverse2(arr) {
  if (Array.isArray(arr)) {
    return arr.reverse();
  }
  return arr.split("").reverse.join("");
};
var memoize = function memoize2(fn) {
  var lastArgs = null;
  var lastResult2 = null;
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    if (lastArgs && args.every(function(val, i) {
      return val === lastArgs[i];
    })) {
      return lastResult2;
    }
    lastArgs = args;
    lastResult2 = fn.apply(void 0, args);
    return lastResult2;
  };
};

// node_modules/recharts-scale/es6/util/arithmetic.js
var import_decimal = __toESM(require_decimal());
function getDigitCount(value) {
  var result;
  if (value === 0) {
    result = 1;
  } else {
    result = Math.floor(new import_decimal.default(value).abs().log(10).toNumber()) + 1;
  }
  return result;
}
function rangeStep(start, end, step) {
  var num = new import_decimal.default(start);
  var i = 0;
  var result = [];
  while (num.lt(end) && i < 1e5) {
    result.push(num.toNumber());
    num = num.add(step);
    i++;
  }
  return result;
}
var interpolateNumber3 = curry(function(a2, b, t) {
  var newA = +a2;
  var newB = +b;
  return newA + t * (newB - newA);
});
var uninterpolateNumber = curry(function(a2, b, x2) {
  var diff = b - +a2;
  diff = diff || Infinity;
  return (x2 - a2) / diff;
});
var uninterpolateTruncation = curry(function(a2, b, x2) {
  var diff = b - +a2;
  diff = diff || Infinity;
  return Math.max(0, Math.min(1, (x2 - a2) / diff));
});
var arithmetic_default = {
  rangeStep,
  getDigitCount,
  interpolateNumber: interpolateNumber3,
  uninterpolateNumber,
  uninterpolateTruncation
};

// node_modules/recharts-scale/es6/getNiceTickValues.js
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray7(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray10(arr);
}
function _slicedToArray6(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray10(o, minLen);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function getValidInterval(_ref) {
  var _ref2 = _slicedToArray6(_ref, 2), min2 = _ref2[0], max2 = _ref2[1];
  var validMin = min2, validMax = max2;
  if (min2 > max2) {
    validMin = max2;
    validMax = min2;
  }
  return [validMin, validMax];
}
function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) {
    return new import_decimal2.default(0);
  }
  var digitCount = arithmetic_default.getDigitCount(roughStep.toNumber());
  var digitCountValue = new import_decimal2.default(10).pow(digitCount);
  var stepRatio = roughStep.div(digitCountValue);
  var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  var amendStepRatio = new import_decimal2.default(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
  var formatStep = amendStepRatio.mul(digitCountValue);
  return allowDecimals ? formatStep : new import_decimal2.default(Math.ceil(formatStep));
}
function getTickOfSingleValue(value, tickCount, allowDecimals) {
  var step = 1;
  var middle = new import_decimal2.default(value);
  if (!middle.isint() && allowDecimals) {
    var absVal = Math.abs(value);
    if (absVal < 1) {
      step = new import_decimal2.default(10).pow(arithmetic_default.getDigitCount(value) - 1);
      middle = new import_decimal2.default(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      middle = new import_decimal2.default(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new import_decimal2.default(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new import_decimal2.default(Math.floor(value));
  }
  var middleIndex = Math.floor((tickCount - 1) / 2);
  var fn = compose(map(function(n) {
    return middle.add(new import_decimal2.default(n - middleIndex).mul(step)).toNumber();
  }), range);
  return fn(0, tickCount);
}
function calculateStep(min2, max2, tickCount, allowDecimals) {
  var correctionFactor = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((max2 - min2) / (tickCount - 1))) {
    return {
      step: new import_decimal2.default(0),
      tickMin: new import_decimal2.default(0),
      tickMax: new import_decimal2.default(0)
    };
  }
  var step = getFormatStep(new import_decimal2.default(max2).sub(min2).div(tickCount - 1), allowDecimals, correctionFactor);
  var middle;
  if (min2 <= 0 && max2 >= 0) {
    middle = new import_decimal2.default(0);
  } else {
    middle = new import_decimal2.default(min2).add(max2).div(2);
    middle = middle.sub(new import_decimal2.default(middle).mod(step));
  }
  var belowCount = Math.ceil(middle.sub(min2).div(step).toNumber());
  var upCount = Math.ceil(new import_decimal2.default(max2).sub(middle).div(step).toNumber());
  var scaleCount = belowCount + upCount + 1;
  if (scaleCount > tickCount) {
    return calculateStep(min2, max2, tickCount, allowDecimals, correctionFactor + 1);
  }
  if (scaleCount < tickCount) {
    upCount = max2 > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max2 > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }
  return {
    step,
    tickMin: middle.sub(new import_decimal2.default(belowCount).mul(step)),
    tickMax: middle.add(new import_decimal2.default(upCount).mul(step))
  };
}
function getNiceTickValuesFn(_ref3) {
  var _ref4 = _slicedToArray6(_ref3, 2), min2 = _ref4[0], max2 = _ref4[1];
  var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var count = Math.max(tickCount, 2);
  var _getValidInterval = getValidInterval([min2, max2]), _getValidInterval2 = _slicedToArray6(_getValidInterval, 2), cormin = _getValidInterval2[0], cormax = _getValidInterval2[1];
  if (cormin === -Infinity || cormax === Infinity) {
    var _values = cormax === Infinity ? [cormin].concat(_toConsumableArray6(range(0, tickCount - 1).map(function() {
      return Infinity;
    }))) : [].concat(_toConsumableArray6(range(0, tickCount - 1).map(function() {
      return -Infinity;
    })), [cormax]);
    return min2 > max2 ? reverse(_values) : _values;
  }
  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }
  var _calculateStep = calculateStep(cormin, cormax, count, allowDecimals), step = _calculateStep.step, tickMin = _calculateStep.tickMin, tickMax = _calculateStep.tickMax;
  var values = arithmetic_default.rangeStep(tickMin, tickMax.add(new import_decimal2.default(0.1).mul(step)), step);
  return min2 > max2 ? reverse(values) : values;
}
function getTickValuesFn(_ref5) {
  var _ref6 = _slicedToArray6(_ref5, 2), min2 = _ref6[0], max2 = _ref6[1];
  var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var count = Math.max(tickCount, 2);
  var _getValidInterval3 = getValidInterval([min2, max2]), _getValidInterval4 = _slicedToArray6(_getValidInterval3, 2), cormin = _getValidInterval4[0], cormax = _getValidInterval4[1];
  if (cormin === -Infinity || cormax === Infinity) {
    return [min2, max2];
  }
  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }
  var step = getFormatStep(new import_decimal2.default(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var fn = compose(map(function(n) {
    return new import_decimal2.default(cormin).add(new import_decimal2.default(n).mul(step)).toNumber();
  }), range);
  var values = fn(0, count).filter(function(entry) {
    return entry >= cormin && entry <= cormax;
  });
  return min2 > max2 ? reverse(values) : values;
}
function getTickValuesFixedDomainFn(_ref7, tickCount) {
  var _ref8 = _slicedToArray6(_ref7, 2), min2 = _ref8[0], max2 = _ref8[1];
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var _getValidInterval5 = getValidInterval([min2, max2]), _getValidInterval6 = _slicedToArray6(_getValidInterval5, 2), cormin = _getValidInterval6[0], cormax = _getValidInterval6[1];
  if (cormin === -Infinity || cormax === Infinity) {
    return [min2, max2];
  }
  if (cormin === cormax) {
    return [cormin];
  }
  var count = Math.max(tickCount, 2);
  var step = getFormatStep(new import_decimal2.default(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var values = [].concat(_toConsumableArray6(arithmetic_default.rangeStep(new import_decimal2.default(cormin), new import_decimal2.default(cormax).sub(new import_decimal2.default(0.99).mul(step)), step)), [cormax]);
  return min2 > max2 ? reverse(values) : values;
}
var getNiceTickValues = memoize(getNiceTickValuesFn);
var getTickValues = memoize(getTickValuesFn);
var getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);

// node_modules/d3-scale/src/index.js
var src_exports = {};
__export(src_exports, {
  scaleBand: () => band,
  scaleDiverging: () => diverging,
  scaleDivergingLog: () => divergingLog,
  scaleDivergingPow: () => divergingPow,
  scaleDivergingSqrt: () => divergingSqrt,
  scaleDivergingSymlog: () => divergingSymlog,
  scaleIdentity: () => identity6,
  scaleImplicit: () => implicit,
  scaleLinear: () => linear2,
  scaleLog: () => log,
  scaleOrdinal: () => ordinal,
  scalePoint: () => point3,
  scalePow: () => pow,
  scaleQuantile: () => quantile2,
  scaleQuantize: () => quantize,
  scaleRadial: () => radial,
  scaleSequential: () => sequential,
  scaleSequentialLog: () => sequentialLog,
  scaleSequentialPow: () => sequentialPow,
  scaleSequentialQuantile: () => sequentialQuantile,
  scaleSequentialSqrt: () => sequentialSqrt,
  scaleSequentialSymlog: () => sequentialSymlog,
  scaleSqrt: () => sqrt,
  scaleSymlog: () => symlog,
  scaleThreshold: () => threshold,
  scaleTime: () => time,
  scaleUtc: () => utcTime,
  tickFormat: () => tickFormat
});

// node_modules/d3-array/src/ascending.js
function ascending_default(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector_default(f) {
  let delta = f;
  let compare = f;
  if (f.length === 1) {
    delta = (d, x2) => f(d) - x2;
    compare = ascendingComparator(f);
  }
  function left(a2, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) < 0)
        lo = mid + 1;
      else
        hi = mid;
    }
    return lo;
  }
  function right(a2, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a2.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (compare(a2[mid], x2) > 0)
        hi = mid;
      else
        lo = mid + 1;
    }
    return lo;
  }
  function center(a2, x2, lo, hi) {
    if (lo == null)
      lo = 0;
    if (hi == null)
      hi = a2.length;
    const i = left(a2, x2, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
  }
  return { left, center, right };
}
function ascendingComparator(f) {
  return (d, x2) => ascending_default(f(d), x2);
}

// node_modules/d3-array/src/number.js
function number_default(x2) {
  return x2 === null ? NaN : +x2;
}
function* numbers(values, valueof) {
  if (valueof === void 0) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector_default(number_default).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function ticks_default(start, stop, count) {
  var reverse3, i = -1, n, ticks, step;
  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0)
    return [start];
  if (reverse3 = stop < start)
    n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start)
      ++r0;
    if (r1 * step > stop)
      --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start)
      ++r0;
    if (r1 / step > stop)
      --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks[i] = (r0 + i) / step;
  }
  if (reverse3)
    ticks.reverse();
  return ticks;
}
function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop < start ? -step1 : step1;
}

// node_modules/d3-array/src/max.js
function max(values, valueof) {
  let max2;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (max2 < value || max2 === void 0 && value >= value)) {
        max2 = value;
      }
    }
  }
  return max2;
}

// node_modules/d3-array/src/min.js
function min(values, valueof) {
  let min2;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (min2 > value || min2 === void 0 && value >= value)) {
        min2 = value;
      }
    }
  }
  return min2;
}

// node_modules/d3-array/src/quickselect.js
function quickselect(array, k2, left = 0, right = array.length - 1, compare = ascending_default) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k2 - left + 1;
      const z = Math.log(n);
      const s2 = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s2 * (n - s2) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k2 - m * s2 / n + sd));
      const newRight = Math.min(right, Math.floor(k2 + (n - m) * s2 / n + sd));
      quickselect(array, k2, newLeft, newRight, compare);
    }
    const t = array[k2];
    let i = left;
    let j = right;
    swap(array, left, k2);
    if (compare(array[right], t) > 0)
      swap(array, left, right);
    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0)
        ++i;
      while (compare(array[j], t) > 0)
        --j;
    }
    if (compare(array[left], t) === 0)
      swap(array, left, j);
    else
      ++j, swap(array, j, right);
    if (j <= k2)
      left = j + 1;
    if (k2 <= j)
      right = j - 1;
  }
  return array;
}
function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

// node_modules/d3-array/src/quantile.js
function quantile(values, p, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!(n = values.length))
    return;
  if ((p = +p) <= 0 || n < 2)
    return min(values);
  if (p >= 1)
    return max(values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values, i0).subarray(0, i0 + 1)), value1 = min(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values, p, valueof = number_default) {
  if (!(n = values.length))
    return;
  if ((p = +p) <= 0 || n < 2)
    return +valueof(values[0], 0, values);
  if (p >= 1)
    return +valueof(values[n - 1], n - 1, values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

// node_modules/d3-array/src/range.js
function range_default(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range3 = new Array(n);
  while (++i < n) {
    range3[i] = start + i * step;
  }
  return range3;
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range3) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range3).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function")
        this.interpolator(domain);
      else
        this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function")
        this.interpolator(interpolator);
      else
        this.range(interpolator);
      break;
    }
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index = /* @__PURE__ */ new Map(), domain = [], range3 = [], unknown = implicit;
  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit)
        return unknown;
      index.set(key, i = domain.push(d));
    }
    return range3[(i - 1) % range3.length];
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index = /* @__PURE__ */ new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key))
        continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), scale) : range3.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range3).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse3 = r1 < r0, start = reverse3 ? r1 : r0, stop = reverse3 ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range_default(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse3 ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point3() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a2 = this.opacity;
  a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
  return (a2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a2 === 1 ? ")" : ", " + a2 + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0)
    h = s2 = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s2 = NaN;
  else if (s2 <= 0)
    h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s2 = max2 - min2, l = (max2 + min2) / 2;
  if (s2) {
    if (r === max2)
      h = (g - b) / s2 + (g < b) * 6;
    else if (g === max2)
      h = (b - r) / s2 + 2;
    else
      h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a2 = this.opacity;
    a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
    return (a2 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a2 === 1 ? ")" : ", " + a2 + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t2 = t12 * t12, t3 = t2 * t12;
  return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default2(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default2(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default2 = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y2) {
  return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
    return Math.pow(a2 + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y2) : constant_default2(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default2(isNaN(a2) ? b : a2);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start, end) {
    var r = color2((start = rgb(start)).r, (end = rgb(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default2);
var rgbBasisClosed = rgbSpline(basisClosed_default2);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b)
    b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c2 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c2[i] = a2[i] * (1 - t) + b[i] * t;
    return c2;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c2 = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x2[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i)
    c2[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c2[i] = x2[i](t);
    return c2;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default2(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c2 = {}, k2;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c2[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i)
      c2[k2] = i[k2](t);
    return c2;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i])
        s2[i] += bm;
      else
        s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({ i, x: number_default2(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i])
      s2[i] += bs;
    else
      s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c2;
  return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default2 : t === "string" ? (c2 = color(b)) ? (b = c2, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default2)(a2, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}

// node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values) {
  if (values === void 0)
    values = interpolate, interpolate = value_default;
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n)
    I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}

// node_modules/d3-scale/src/constant.js
function constants(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-scale/src/number.js
function number(x2) {
  return +x2;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity5(x2) {
  return x2;
}
function normalize(a2, b) {
  return (b -= a2 = +a2) ? function(x2) {
    return (x2 - a2) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a2, b) {
  var t;
  if (a2 > b)
    t = a2, a2 = b, b = t;
  return function(x2) {
    return Math.max(a2, Math.min(b, x2));
  };
}
function bimap(domain, range3, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range3[0], r1 = range3[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range3, interpolate) {
  var j = Math.min(domain.length, range3.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range3 = range3.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range3[i], range3[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range3 = unit, interpolate = value_default, transform, untransform, unknown, clamp = identity5, piecewise2, output, input;
  function rescale() {
    var n = Math.min(domain.length, range3.length);
    if (clamp !== identity5)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise2(domain.map(transform), range3, interpolate)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise2(range3, domain.map(transform), number_default2)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale.rangeRound = function(_) {
    return range3 = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity5, rescale()) : clamp !== identity5;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity5, identity5);
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out:
    for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default(x2) {
  return x2;
}

// node_modules/d3-format/src/locale.js
var map2 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default : formatGroup_default(map2.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default : formatNumerals_default(map2.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes_default[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c2;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c2 = value.charCodeAt(i), 48 > c2 || c2 > 57) {
              valueSuffix = (c2 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k2 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max2) {
  step = Math.abs(step), max2 = Math.abs(max2) - step;
  return Math.max(0, exponent_default(max2) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks_default(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/identity.js
function identity6(domain) {
  var unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : x2;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number), scale) : domain.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return identity6(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number) : [0, 1];
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x2) {
    return Math.pow(base, x2);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x2) {
    return Math.log(x2) / base;
  });
}
function reflect(f) {
  return function(x2) {
    return -f(-x2);
  };
}
function loggish(transform) {
  var scale = transform(transformLog, transformExp), domain = scale.domain, base = 10, logs, pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = function(count) {
    var d = domain(), u = d[0], v = d[d.length - 1], r;
    if (r = v < u)
      i = u, u = v, v = i;
    var i = logs(u), j = logs(v), p, k2, t, n = count == null ? 10 : +count, z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0)
        for (; i <= j; ++i) {
          for (k2 = 1, p = pows(i); k2 < base; ++k2) {
            t = p * k2;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      else
        for (; i <= j; ++i) {
          for (k2 = base - 1, p = pows(i); k2 >= 1; --k2) {
            t = p * k2;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      if (z.length * 2 < n)
        z = ticks_default(u, v, n);
    } else {
      z = ticks_default(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = function(count, specifier) {
    if (specifier == null)
      specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function")
      specifier = format(specifier);
    if (count === Infinity)
      return specifier;
    if (count == null)
      count = 10;
    var k2 = Math.max(1, base * count / scale.ticks().length);
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5)
        i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x2) {
        return pows(Math.floor(logs(x2)));
      },
      ceil: function(x2) {
        return pows(Math.ceil(logs(x2)));
      }
    }));
  };
  return scale;
}
function log() {
  var scale = loggish(transformer()).domain([1, 10]);
  scale.copy = function() {
    return copy(scale, log()).base(scale.base());
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c2));
  };
}
function transformSymexp(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c2;
  };
}
function symlogish(transform) {
  var c2 = 1, scale = transform(transformSymlog(c2), transformSymexp(c2));
  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c2 = +_), transformSymexp(c2)) : c2;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/pow.js
function transformPow(exponent) {
  return function(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent) : Math.pow(x2, exponent);
  };
}
function transformSqrt(x2) {
  return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
}
function transformSquare(x2) {
  return x2 < 0 ? -x2 * x2 : x2 * x2;
}
function powish(transform) {
  var scale = transform(identity5, identity5), exponent = 1;
  function rescale() {
    return exponent === 1 ? transform(identity5, identity5) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };
  return linearish(scale);
}
function pow() {
  var scale = powish(transformer());
  scale.copy = function() {
    return copy(scale, pow()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/radial.js
function square(x2) {
  return Math.sign(x2) * x2 * x2;
}
function unsquare(x2) {
  return Math.sign(x2) * Math.sqrt(Math.abs(x2));
}
function radial() {
  var squared = continuous(), range3 = [0, 1], round = false, unknown;
  function scale(x2) {
    var y2 = unsquare(squared(x2));
    return isNaN(y2) ? unknown : round ? Math.round(y2) : y2;
  }
  scale.invert = function(y2) {
    return squared.invert(square(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };
  scale.range = function(_) {
    return arguments.length ? (squared.range((range3 = Array.from(_, number)).map(square)), scale) : range3.slice();
  };
  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };
  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return radial(squared.domain(), range3).round(round).clamp(squared.clamp()).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/quantile.js
function quantile2() {
  var domain = [], range3 = [], thresholds = [], unknown;
  function rescale() {
    var i = 0, n = Math.max(1, range3.length);
    thresholds = new Array(n - 1);
    while (++i < n)
      thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : range3[bisect_default(thresholds, x2)];
  }
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d of _)
      if (d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending_default);
    return rescale();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), rescale()) : range3.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile2().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/quantize.js
function quantize() {
  var x0 = 0, x1 = 1, n = 1, domain = [0.5], range3 = [0, 1], unknown;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range3[bisect_default(domain, x2, 0, n)] : unknown;
  }
  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n)
      domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };
  scale.range = function(_) {
    return arguments.length ? (n = (range3 = Array.from(_)).length - 1, rescale()) : range3.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };
  scale.thresholds = function() {
    return domain.slice();
  };
  scale.copy = function() {
    return quantize().domain([x0, x1]).range(range3).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}

// node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range3 = [0, 1], unknown, n = 1;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range3[bisect_default(domain, x2, 0, n)] : unknown;
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range3 = Array.from(_), n = Math.min(domain.length, range3.length - 1), scale) : range3.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range3.indexOf(y2);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range3).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-time/src/interval.js
var t0 = new Date();
var t1 = new Date();
function newInterval(floori, offseti, count, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? new Date() : new Date(+date2)), date2;
  }
  interval.floor = function(date2) {
    return floori(date2 = new Date(+date2)), date2;
  };
  interval.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = function(date2) {
    var d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = function(date2, step) {
    return offseti(date2 = new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = function(start, stop, step) {
    var range3 = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0))
      return range3;
    do
      range3.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range3;
  };
  interval.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
        return field(d) % step === 0;
      } : function(d) {
        return interval.count(0, d) % step === 0;
      });
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = newInterval(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start, end) {
  return end - start;
});
millisecond.every = function(k2) {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k2);
  }, function(start, end) {
    return (end - start) / k2;
  });
};
var millisecond_default = millisecond;
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date2) {
  return date2.getUTCSeconds();
});
var second_default = second;
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date2) {
  return date2.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// node_modules/d3-time/src/hour.js
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date2) {
  return date2.getHours();
});
var hour_default = hour;
var hours = hour.range;

// node_modules/d3-time/src/day.js
var day = newInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var day_default = day;
var days = day.range;

// node_modules/d3-time/src/week.js
function weekday(i) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// node_modules/d3-time/src/month.js
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var month_default = month;
var months = month.range;

// node_modules/d3-time/src/year.js
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
var year_default = year;
var years = year.range;

// node_modules/d3-time/src/utcMinute.js
var utcMinute = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute_default = utcMinute;
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/utcHour.js
var utcHour = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour_default = utcHour;
var utcHours = utcHour.range;

// node_modules/d3-time/src/utcDay.js
var utcDay = newInterval(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay_default = utcDay;
var utcDays = utcDay.range;

// node_modules/d3-time/src/utcWeek.js
function utcWeekday(i) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/utcMonth.js
var utcMonth = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth_default = utcMonth;
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/utcYear.js
var utcYear = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
var utcYear_default = utcYear;
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year2, month2, week, day2, hour2, minute2) {
  const tickIntervals = [
    [second_default, 1, durationSecond],
    [second_default, 5, 5 * durationSecond],
    [second_default, 15, 15 * durationSecond],
    [second_default, 30, 30 * durationSecond],
    [minute2, 1, durationMinute],
    [minute2, 5, 5 * durationMinute],
    [minute2, 15, 15 * durationMinute],
    [minute2, 30, 30 * durationMinute],
    [hour2, 1, durationHour],
    [hour2, 3, 3 * durationHour],
    [hour2, 6, 6 * durationHour],
    [hour2, 12, 12 * durationHour],
    [day2, 1, durationDay],
    [day2, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month2, 1, durationMonth],
    [month2, 3, 3 * durationMonth],
    [year2, 1, durationYear]
  ];
  function ticks(start, stop, count) {
    const reverse3 = stop < start;
    if (reverse3)
      [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks2 = interval ? interval.range(start, +stop + 1) : [];
    return reverse3 ? ticks2.reverse() : ticks2;
  }
  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector_default(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length)
      return year2.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0)
      return millisecond_default.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default);
var [timeTicks, timeTickInterval] = ticker(year_default, month_default, sunday, day_default, hour_default, minute_default);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c2, pad2, format2;
      if (!(date2 instanceof Date))
        date2 = new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c2 = specifier.charAt(++i)]) != null)
            c2 = specifier.charAt(++i);
          else
            pad2 = c2 === "e" ? " " : "0";
          if (format2 = formats2[c2])
            c2 = format2(date2, pad2);
          string.push(c2);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day2;
      if (i != string.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay_default.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
          week = day_default.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day2 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day2 + 5) % 7 : d.w + d.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c2, parse;
    while (i < n) {
      if (j >= m)
        return -1;
      c2 = specifier.charCodeAt(i++);
      if (c2 === 37) {
        c2 = specifier.charAt(i++);
        parse = parses[c2 in pads ? specifier.charAt(i++) : c2];
        if (!parse || (j = parse(d, string, j)) < 0)
          return -1;
      } else if (c2 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + day_default.count(year_default(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day2 = d.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year_default(d) - 1, d), p, 2);
}
function dISO(d) {
  var day2 = d.getDay();
  return day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(year_default(d), d) + (year_default(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year_default(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day2 = d.getDay();
  d = day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay_default.count(utcYear_default(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear_default(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day2 = d.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear_default(d), d) + (utcYear_default(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear_default(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day2 = d.getUTCDay();
  d = day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number2(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number2)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function")
      interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks, tickInterval, year2, month2, week, day2, hour2, minute2, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, year_default, month_default, sunday, day_default, hour_default, minute_default, second_default, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default, second_default, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/sequential.js
function transformer2() {
  var x0 = 0, x1 = 1, t02, t12, k10, transform, interpolator = identity5, clamp = false, unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : interpolator(k10 === 0 ? 0.5 : (x2 = (transform(x2) - t02) * k10, clamp ? Math.max(0, Math.min(1, x2)) : x2));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02), scale) : [x0, x1];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range3(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range3(value_default);
  scale.rangeRound = range3(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t02 = t(x0), t12 = t(x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02);
    return scale;
  };
}
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer2()(identity5));
  scale.copy = function() {
    return copy2(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
  var scale = loggish(transformer2()).domain([1, 10]);
  scale.copy = function() {
    return copy2(scale, sequentialLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = symlogish(transformer2());
  scale.copy = function() {
    return copy2(scale, sequentialSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
  var scale = powish(transformer2());
  scale.copy = function() {
    return copy2(scale, sequentialPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/sequentialQuantile.js
function sequentialQuantile() {
  var domain = [], interpolator = identity5;
  function scale(x2) {
    if (x2 != null && !isNaN(x2 = +x2))
      return interpolator((bisect_default(domain, x2, 1) - 1) / (domain.length - 1));
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d of _)
      if (d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending_default);
    return scale;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };
  scale.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (_, i) => quantile(domain, i / n));
  };
  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };
  return initInterpolator.apply(scale, arguments);
}

// node_modules/d3-scale/src/diverging.js
function transformer3() {
  var x0 = 0, x1 = 0.5, x2 = 1, s2 = 1, t02, t12, t2, k10, k21, interpolator = identity5, transform, clamp = false, unknown;
  function scale(x3) {
    return isNaN(x3 = +x3) ? unknown : (x3 = 0.5 + ((x3 = +transform(x3)) - t12) * (s2 * x3 < s2 * t12 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x3)) : x3));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s2 = t12 < t02 ? -1 : 1, scale) : [x0, x1, x2];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range3(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range3(value_default);
  scale.rangeRound = range3(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t02 = t(x0), t12 = t(x1), t2 = t(x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s2 = t12 < t02 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer3()(identity5));
  scale.copy = function() {
    return copy2(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer3()).domain([0.1, 1, 10]);
  scale.copy = function() {
    return copy2(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

// node_modules/recharts/es6/util/ChartUtils.js
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray11(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray11(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray11(o, minLen);
}
function _iterableToArray8(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray11(arr);
}
function _arrayLikeToArray11(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys11(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread11(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys11(Object(source), true).forEach(function(key) {
        _defineProperty11(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys11(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty11(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function getValueByDataKey(obj, dataKey, defaultValue) {
  if ((0, import_isNil5.default)(obj) || (0, import_isNil5.default)(dataKey)) {
    return defaultValue;
  }
  if (isNumOrStr(dataKey)) {
    return (0, import_get3.default)(obj, dataKey, defaultValue);
  }
  if ((0, import_isFunction3.default)(dataKey)) {
    return dataKey(obj);
  }
  return defaultValue;
}
function getDomainOfDataByKey(data, key, type, filterNil) {
  var flattenData = (0, import_flatMap.default)(data, function(entry) {
    return getValueByDataKey(entry, key);
  });
  if (type === "number") {
    var domain = flattenData.filter(function(entry) {
      return isNumber(entry) || parseFloat(entry);
    });
    return domain.length ? [(0, import_min2.default)(domain), (0, import_max2.default)(domain)] : [Infinity, -Infinity];
  }
  var validateData = filterNil ? flattenData.filter(function(entry) {
    return !(0, import_isNil5.default)(entry);
  }) : flattenData;
  return validateData.map(function(entry) {
    return isNumOrStr(entry) || entry instanceof Date ? entry : "";
  });
}
var calculateActiveTickIndex = function calculateActiveTickIndex2(coordinate) {
  var _ticks$length;
  var ticks = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var unsortedTicks = arguments.length > 2 ? arguments[2] : void 0;
  var axis = arguments.length > 3 ? arguments[3] : void 0;
  var index = -1;
  var len = (_ticks$length = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
  if (len > 1) {
    if (axis && axis.axisType === "angleAxis" && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
      var range3 = axis.range;
      for (var i = 0; i < len; i++) {
        var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
        var cur = unsortedTicks[i].coordinate;
        var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
        var sameDirectionCoord = void 0;
        if (mathSign(cur - before) !== mathSign(after - cur)) {
          var diffInterval = [];
          if (mathSign(after - cur) === mathSign(range3[1] - range3[0])) {
            sameDirectionCoord = after;
            var curInRange = cur + range3[1] - range3[0];
            diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
            diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
          } else {
            sameDirectionCoord = before;
            var afterInRange = after + range3[1] - range3[0];
            diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
            diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
          }
          var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];
          if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
            index = unsortedTicks[i].index;
            break;
          }
        } else {
          var min2 = Math.min(before, after);
          var max2 = Math.max(before, after);
          if (coordinate > (min2 + cur) / 2 && coordinate <= (max2 + cur) / 2) {
            index = unsortedTicks[i].index;
            break;
          }
        }
      }
    } else {
      for (var _i = 0; _i < len; _i++) {
        if (_i === 0 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2) {
          index = ticks[_i].index;
          break;
        }
      }
    }
  } else {
    index = 0;
  }
  return index;
};
var getMainColorOfGraphicItem = function getMainColorOfGraphicItem2(item) {
  var _ref = item, displayName = _ref.type.displayName;
  var _item$props = item.props, stroke = _item$props.stroke, fill = _item$props.fill;
  var result;
  switch (displayName) {
    case "Line":
      result = stroke;
      break;
    case "Area":
    case "Radar":
      result = stroke && stroke !== "none" ? stroke : fill;
      break;
    default:
      result = fill;
      break;
  }
  return result;
};
var getLegendProps = function getLegendProps2(_ref2) {
  var children = _ref2.children, formattedGraphicalItems = _ref2.formattedGraphicalItems, legendWidth = _ref2.legendWidth, legendContent = _ref2.legendContent;
  var legendItem = findChildByType(children, Legend.displayName);
  if (!legendItem) {
    return null;
  }
  var legendData;
  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === "children") {
    legendData = (formattedGraphicalItems || []).reduce(function(result, _ref3) {
      var item = _ref3.item, props = _ref3.props;
      var data = props.sectors || props.data || [];
      return result.concat(data.map(function(entry) {
        return {
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry
        };
      }));
    }, []);
  } else {
    legendData = (formattedGraphicalItems || []).map(function(_ref4) {
      var item = _ref4.item;
      var _item$props2 = item.props, dataKey = _item$props2.dataKey, name = _item$props2.name, legendType = _item$props2.legendType, hide = _item$props2.hide;
      return {
        inactive: hide,
        dataKey,
        type: legendItem.props.iconType || legendType || "square",
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        payload: item.props
      };
    });
  }
  return _objectSpread11(_objectSpread11(_objectSpread11({}, legendItem.props), Legend.getWithHeight(legendItem, legendWidth)), {}, {
    payload: legendData,
    item: legendItem
  });
};
var getBarSizeList = function getBarSizeList2(_ref5) {
  var globalSize = _ref5.barSize, _ref5$stackGroups = _ref5.stackGroups, stackGroups = _ref5$stackGroups === void 0 ? {} : _ref5$stackGroups;
  if (!stackGroups) {
    return {};
  }
  var result = {};
  var numericAxisIds = Object.keys(stackGroups);
  for (var i = 0, len = numericAxisIds.length; i < len; i++) {
    var sgs = stackGroups[numericAxisIds[i]].stackGroups;
    var stackIds = Object.keys(sgs);
    for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
      var _sgs$stackIds$j = sgs[stackIds[j]], items = _sgs$stackIds$j.items, cateAxisId = _sgs$stackIds$j.cateAxisId;
      var barItems = items.filter(function(item) {
        return getDisplayName(item.type).indexOf("Bar") >= 0;
      });
      if (barItems && barItems.length) {
        var selfSize = barItems[0].props.barSize;
        var cateId = barItems[0].props[cateAxisId];
        if (!result[cateId]) {
          result[cateId] = [];
        }
        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: (0, import_isNil5.default)(selfSize) ? globalSize : selfSize
        });
      }
    }
  }
  return result;
};
var getBarPosition = function getBarPosition2(_ref6) {
  var barGap = _ref6.barGap, barCategoryGap = _ref6.barCategoryGap, bandSize = _ref6.bandSize, _ref6$sizeList = _ref6.sizeList, sizeList = _ref6$sizeList === void 0 ? [] : _ref6$sizeList, maxBarSize = _ref6.maxBarSize;
  var len = sizeList.length;
  if (len < 1)
    return null;
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result;
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce(function(res, entry) {
      return res + entry.barSize || 0;
    }, 0);
    sum += (len - 1) * realBarGap;
    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }
    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce(function(res, entry) {
      var newRes = [].concat(_toConsumableArray7(res), [{
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          size: useFull ? fullBarSize : entry.barSize
        }
      }]);
      prev = newRes[newRes.length - 1].position;
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function(item) {
          newRes.push({
            item,
            position: prev
          });
        });
      }
      return newRes;
    }, []);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }
    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce(function(res, entry, i) {
      var newRes = [].concat(_toConsumableArray7(res), [{
        item: entry.item,
        position: {
          offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size
        }
      }]);
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function(item) {
          newRes.push({
            item,
            position: newRes[newRes.length - 1].position
          });
        });
      }
      return newRes;
    }, []);
  }
  return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend2(offset, items, props, legendBox) {
  var children = props.children, width = props.width, margin = props.margin;
  var legendWidth = width - (margin.left || 0) - (margin.right || 0);
  var legendProps = getLegendProps({
    children,
    legendWidth
  });
  var newOffset = offset;
  if (legendProps) {
    var box = legendBox || {};
    var align = legendProps.align, verticalAlign = legendProps.verticalAlign, layout = legendProps.layout;
    if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "center") && isNumber(offset[align])) {
      newOffset = _objectSpread11(_objectSpread11({}, offset), {}, _defineProperty11({}, align, newOffset[align] + (box.width || 0)));
    }
    if ((layout === "horizontal" || layout === "vertical" && align === "center") && isNumber(offset[verticalAlign])) {
      newOffset = _objectSpread11(_objectSpread11({}, offset), {}, _defineProperty11({}, verticalAlign, newOffset[verticalAlign] + (box.height || 0)));
    }
  }
  return newOffset;
};
var isErrorBarRelevantForAxis = function isErrorBarRelevantForAxis2(layout, axisType, direction) {
  if ((0, import_isNil5.default)(axisType)) {
    return true;
  }
  if (layout === "horizontal") {
    return axisType === "yAxis";
  }
  if (layout === "vertical") {
    return axisType === "xAxis";
  }
  if (direction === "x") {
    return axisType === "xAxis";
  }
  if (direction === "y") {
    return axisType === "yAxis";
  }
  return true;
};
var getDomainOfErrorBars = function getDomainOfErrorBars2(data, item, dataKey, layout, axisType) {
  var children = item.props.children;
  var errorBars = findAllByType(children, "ErrorBar").filter(function(errorBarChild) {
    return isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction);
  });
  if (errorBars && errorBars.length) {
    var keys = errorBars.map(function(errorBarChild) {
      return errorBarChild.props.dataKey;
    });
    return data.reduce(function(result, entry) {
      var entryValue = getValueByDataKey(entry, dataKey, 0);
      var mainValue = (0, import_isArray4.default)(entryValue) ? [(0, import_min2.default)(entryValue), (0, import_max2.default)(entryValue)] : [entryValue, entryValue];
      var errorDomain = keys.reduce(function(prevErrorArr, k2) {
        var errorValue = getValueByDataKey(entry, k2, 0);
        var lowerValue = mainValue[0] - Math.abs((0, import_isArray4.default)(errorValue) ? errorValue[0] : errorValue);
        var upperValue = mainValue[1] + Math.abs((0, import_isArray4.default)(errorValue) ? errorValue[1] : errorValue);
        return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
      }, [Infinity, -Infinity]);
      return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis2(data, items, dataKey, axisType, layout) {
  var domains = items.map(function(item) {
    return getDomainOfErrorBars(data, item, dataKey, layout, axisType);
  }).filter(function(entry) {
    return !(0, import_isNil5.default)(entry);
  });
  if (domains && domains.length) {
    return domains.reduce(function(result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};
var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis2(data, items, type, layout, filterNil) {
  var domains = items.map(function(item) {
    var dataKey = item.props.dataKey;
    if (type === "number" && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey, layout) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }
    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });
  if (type === "number") {
    return domains.reduce(function(result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }
  var tag = {};
  return domains.reduce(function(result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;
        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};
var isCategoricalAxis = function isCategoricalAxis2(layout, axisType) {
  return layout === "horizontal" && axisType === "xAxis" || layout === "vertical" && axisType === "yAxis" || layout === "centric" && axisType === "angleAxis" || layout === "radial" && axisType === "radiusAxis";
};
var getCoordinatesOfGrid = function getCoordinatesOfGrid2(ticks, min2, max2) {
  var hasMin, hasMax;
  var values = ticks.map(function(entry) {
    if (entry.coordinate === min2) {
      hasMin = true;
    }
    if (entry.coordinate === max2) {
      hasMax = true;
    }
    return entry.coordinate;
  });
  if (!hasMin) {
    values.push(min2);
  }
  if (!hasMax) {
    values.push(max2);
  }
  return values;
};
var getTicksOfAxis = function getTicksOfAxis2(axis, isGrid, isAll) {
  if (!axis)
    return null;
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain, type = axis.type, range3 = axis.range;
  var offsetForBand = axis.realScaleType === "scaleBand" ? scale.bandwidth() / 2 : 2;
  var offset = (isGrid || isAll) && type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
  offset = axis.axisType === "angleAxis" ? mathSign(range3[0] - range3[1]) * 2 * offset : offset;
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map(function(entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
      return {
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset
      };
    });
  }
  if (axis.isCategorical && axis.categoricalDomain) {
    return axis.categoricalDomain.map(function(entry, index) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset
      };
    });
  }
  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function(entry) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        offset
      };
    });
  }
  return scale.domain().map(function(entry, index) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset
    };
  });
};
var combineEventHandlers = function combineEventHandlers2(defaultHandler, parentHandler, childHandler) {
  var customizedHandler;
  if ((0, import_isFunction3.default)(childHandler)) {
    customizedHandler = childHandler;
  } else if ((0, import_isFunction3.default)(parentHandler)) {
    customizedHandler = parentHandler;
  }
  if ((0, import_isFunction3.default)(defaultHandler) || customizedHandler) {
    return function(arg1, arg2, arg3, arg4) {
      if ((0, import_isFunction3.default)(defaultHandler)) {
        defaultHandler(arg1, arg2, arg3, arg4);
      }
      if ((0, import_isFunction3.default)(customizedHandler)) {
        customizedHandler(arg1, arg2, arg3, arg4);
      }
    };
  }
  return null;
};
var parseScale = function parseScale2(axis, chartType, hasBar) {
  var scale = axis.scale, type = axis.type, layout = axis.layout, axisType = axis.axisType;
  if (scale === "auto") {
    if (layout === "radial" && axisType === "radiusAxis") {
      return {
        scale: band(),
        realScaleType: "band"
      };
    }
    if (layout === "radial" && axisType === "angleAxis") {
      return {
        scale: linear2(),
        realScaleType: "linear"
      };
    }
    if (type === "category" && chartType && (chartType.indexOf("LineChart") >= 0 || chartType.indexOf("AreaChart") >= 0 || chartType.indexOf("ComposedChart") >= 0 && !hasBar)) {
      return {
        scale: point3(),
        realScaleType: "point"
      };
    }
    if (type === "category") {
      return {
        scale: band(),
        realScaleType: "band"
      };
    }
    return {
      scale: linear2(),
      realScaleType: "linear"
    };
  }
  if ((0, import_isString3.default)(scale)) {
    var name = "scale".concat((0, import_upperFirst2.default)(scale));
    return {
      scale: (src_exports[name] || point3)(),
      realScaleType: src_exports[name] ? name : "point"
    };
  }
  return (0, import_isFunction3.default)(scale) ? {
    scale
  } : {
    scale: point3(),
    realScaleType: "point"
  };
};
var EPS3 = 1e-4;
var checkDomainOfScale = function checkDomainOfScale2(scale) {
  var domain = scale.domain();
  if (!domain || domain.length <= 2) {
    return;
  }
  var len = domain.length;
  var range3 = scale.range();
  var min2 = Math.min(range3[0], range3[1]) - EPS3;
  var max2 = Math.max(range3[0], range3[1]) + EPS3;
  var first = scale(domain[0]);
  var last = scale(domain[len - 1]);
  if (first < min2 || first > max2 || last < min2 || last > max2) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};
var offsetSign = function offsetSign2(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;
    for (var i = 0; i < n; ++i) {
      var value = (0, import_isNaN2.default)(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
    }
  }
};
var offsetPositive = function offsetPositive2(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    for (var i = 0; i < n; ++i) {
      var value = (0, import_isNaN2.default)(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = 0;
        series[i][j][1] = 0;
      }
    }
  }
};
var STACK_OFFSET_MAP = {
  sign: offsetSign,
  expand: expand_default,
  none: none_default,
  silhouette: silhouette_default,
  wiggle: wiggle_default,
  positive: offsetPositive
};
var getStackedData = function getStackedData2(data, stackItems, offsetType) {
  var dataKeys = stackItems.map(function(item) {
    return item.props.dataKey;
  });
  var stack = stack_default().keys(dataKeys).value(function(d, key) {
    return +getValueByDataKey(d, key, 0);
  }).order(none_default2).offset(STACK_OFFSET_MAP[offsetType]);
  return stack(data);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId2(data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
  if (!data) {
    return null;
  }
  var items = reverseStackOrder ? _items.reverse() : _items;
  var stackGroups = items.reduce(function(result, item) {
    var _item$props3 = item.props, stackId = _item$props3.stackId, hide = _item$props3.hide;
    if (hide) {
      return result;
    }
    var axisId = item.props[numericAxisId];
    var parentGroup = result[axisId] || {
      hasStack: false,
      stackGroups: {}
    };
    if (isNumOrStr(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId,
        cateAxisId,
        items: []
      };
      childGroup.items.push(item);
      parentGroup.hasStack = true;
      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId("_stackId_")] = {
        numericAxisId,
        cateAxisId,
        items: [item]
      };
    }
    return _objectSpread11(_objectSpread11({}, result), {}, _defineProperty11({}, axisId, parentGroup));
  }, {});
  return Object.keys(stackGroups).reduce(function(result, axisId) {
    var group = stackGroups[axisId];
    if (group.hasStack) {
      group.stackGroups = Object.keys(group.stackGroups).reduce(function(res, stackId) {
        var g = group.stackGroups[stackId];
        return _objectSpread11(_objectSpread11({}, res), {}, _defineProperty11({}, stackId, {
          numericAxisId,
          cateAxisId,
          items: g.items,
          stackedData: getStackedData(data, g.items, offsetType)
        }));
      }, {});
    }
    return _objectSpread11(_objectSpread11({}, result), {}, _defineProperty11({}, axisId, group));
  }, {});
};
var calculateDomainOfTicks = function calculateDomainOfTicks2(ticks, type) {
  if (type === "number") {
    return [(0, import_min2.default)(ticks), (0, import_max2.default)(ticks)];
  }
  return ticks;
};
var getTicksOfScale = function getTicksOfScale2(scale, opts) {
  var realScaleType = opts.realScaleType, type = opts.type, tickCount = opts.tickCount, originalDomain = opts.originalDomain, allowDecimals = opts.allowDecimals;
  var scaleType = realScaleType || opts.scale;
  if (scaleType !== "auto" && scaleType !== "linear") {
    return null;
  }
  if (tickCount && type === "number" && originalDomain && (originalDomain[0] === "auto" || originalDomain[1] === "auto")) {
    var domain = scale.domain();
    if (!domain.length) {
      return null;
    }
    var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);
    scale.domain(calculateDomainOfTicks(tickValues, type));
    return {
      niceTicks: tickValues
    };
  }
  if (tickCount && type === "number") {
    var _domain = scale.domain();
    var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);
    return {
      niceTicks: _tickValues
    };
  }
  return null;
};
var getCateCoordinateOfLine = function getCateCoordinateOfLine2(_ref7) {
  var axis = _ref7.axis, ticks = _ref7.ticks, bandSize = _ref7.bandSize, entry = _ref7.entry, index = _ref7.index, dataKey = _ref7.dataKey;
  if (axis.type === "category") {
    if (!axis.allowDuplicatedCategory && axis.dataKey && !(0, import_isNil5.default)(entry[axis.dataKey])) {
      var matchedTick = findEntryInArray(ticks, "value", entry[axis.dataKey]);
      if (matchedTick) {
        return matchedTick.coordinate + bandSize / 2;
      }
    }
    return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
  }
  var value = getValueByDataKey(entry, !(0, import_isNil5.default)(dataKey) ? dataKey : axis.dataKey);
  return !(0, import_isNil5.default)(value) ? axis.scale(value) : null;
};
var getStackedDataOfItem = function getStackedDataOfItem2(item, stackGroups) {
  var stackId = item.props.stackId;
  if (isNumOrStr(stackId)) {
    var group = stackGroups[stackId];
    if (group && group.items.length) {
      var itemIndex = -1;
      for (var i = 0, len = group.items.length; i < len; i++) {
        if (group.items[i] === item) {
          itemIndex = i;
          break;
        }
      }
      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }
  return null;
};
var getDomainOfSingle = function getDomainOfSingle2(data) {
  return data.reduce(function(result, entry) {
    return [(0, import_min2.default)(entry.concat([result[0]]).filter(isNumber)), (0, import_max2.default)(entry.concat([result[1]]).filter(isNumber))];
  }, [Infinity, -Infinity]);
};
var getDomainOfStackGroups = function getDomainOfStackGroups2(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function(result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;
    var domain = stackedData.reduce(function(res, entry) {
      var s2 = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
      return [Math.min(res[0], s2[0]), Math.max(res[1], s2[1])];
    }, [Infinity, -Infinity]);
    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function(result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain2(specifiedDomain, dataDomain, allowDataOverflow) {
  if ((0, import_isFunction3.default)(specifiedDomain)) {
    return specifiedDomain(dataDomain, allowDataOverflow);
  }
  if (!(0, import_isArray4.default)(specifiedDomain)) {
    return dataDomain;
  }
  var domain = [];
  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
    domain[0] = dataDomain[0] - value;
  } else if ((0, import_isFunction3.default)(specifiedDomain[0])) {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }
  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
    domain[1] = dataDomain[1] + _value;
  } else if ((0, import_isFunction3.default)(specifiedDomain[1])) {
    domain[1] = specifiedDomain[1](dataDomain[1]);
  } else {
    domain[1] = dataDomain[1];
  }
  return domain;
};
var getBandSizeOfAxis = function getBandSizeOfAxis2(axis, ticks, isBar) {
  if (axis && axis.scale && axis.scale.bandwidth) {
    var bandWidth = axis.scale.bandwidth();
    if (!isBar || bandWidth > 0) {
      return bandWidth;
    }
  }
  if (axis && ticks && ticks.length >= 2) {
    var orderedTicks = (0, import_sortBy2.default)(ticks, function(o) {
      return o.coordinate;
    });
    var bandSize = Infinity;
    for (var i = 1, len = orderedTicks.length; i < len; i++) {
      var cur = orderedTicks[i];
      var prev = orderedTicks[i - 1];
      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }
    return bandSize === Infinity ? 0 : bandSize;
  }
  return isBar ? void 0 : 0;
};
var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis2(specifiedDomain, calculatedDomain, axisChild) {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }
  if ((0, import_isEqual.default)(specifiedDomain, (0, import_get3.default)(axisChild, "type.defaultProps.domain"))) {
    return calculatedDomain;
  }
  return specifiedDomain;
};
var getTooltipItem = function getTooltipItem2(graphicalItem, payload) {
  var _graphicalItem$props = graphicalItem.props, dataKey = _graphicalItem$props.dataKey, name = _graphicalItem$props.name, unit2 = _graphicalItem$props.unit, formatter = _graphicalItem$props.formatter, tooltipType = _graphicalItem$props.tooltipType, chartType = _graphicalItem$props.chartType;
  return _objectSpread11(_objectSpread11({}, filterProps(graphicalItem)), {}, {
    dataKey,
    unit: unit2,
    formatter,
    name: name || dataKey,
    color: getMainColorOfGraphicItem(graphicalItem),
    value: getValueByDataKey(payload, dataKey),
    type: tooltipType,
    payload,
    chartType
  });
};

// node_modules/recharts/es6/util/PolarUtils.js
function ownKeys12(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread12(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys12(Object(source), true).forEach(function(key) {
        _defineProperty12(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys12(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty12(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var RADIAN2 = Math.PI / 180;
var radianToDegree = function radianToDegree2(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian2(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN2 * angle) * radius,
    y: cy + Math.sin(-RADIAN2 * angle) * radius
  };
};
var distanceBetweenPoints = function distanceBetweenPoints2(point4, anotherPoint) {
  var x1 = point4.x, y1 = point4.y;
  var x2 = anotherPoint.x, y2 = anotherPoint.y;
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint2(_ref, _ref2) {
  var x2 = _ref.x, y2 = _ref.y;
  var cx = _ref2.cx, cy = _ref2.cy;
  var radius = distanceBetweenPoints({
    x: x2,
    y: y2
  }, {
    x: cx,
    y: cy
  });
  if (radius <= 0) {
    return {
      radius
    };
  }
  var cos = (x2 - cx) / radius;
  var angleInRadian = Math.acos(cos);
  if (y2 > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }
  return {
    radius,
    angle: radianToDegree(angleInRadian),
    angleInRadian
  };
};
var formatAngleOfSector = function formatAngleOfSector2(_ref3) {
  var startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min2 = Math.min(startCnt, endCnt);
  return {
    startAngle: startAngle - min2 * 360,
    endAngle: endAngle - min2 * 360
  };
};
var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor2(angle, _ref4) {
  var startAngle = _ref4.startAngle, endAngle = _ref4.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min2 = Math.min(startCnt, endCnt);
  return angle + min2 * 360;
};
var inRangeOfSector = function inRangeOfSector2(_ref5, sector) {
  var x2 = _ref5.x, y2 = _ref5.y;
  var _getAngleOfPoint = getAngleOfPoint({
    x: x2,
    y: y2
  }, sector), radius = _getAngleOfPoint.radius, angle = _getAngleOfPoint.angle;
  var innerRadius = sector.innerRadius, outerRadius = sector.outerRadius;
  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }
  if (radius === 0) {
    return true;
  }
  var _formatAngleOfSector = formatAngleOfSector(sector), startAngle = _formatAngleOfSector.startAngle, endAngle = _formatAngleOfSector.endAngle;
  var formatAngle = angle;
  var inRange;
  if (startAngle <= endAngle) {
    while (formatAngle > endAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < startAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= startAngle && formatAngle <= endAngle;
  } else {
    while (formatAngle > startAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < endAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= endAngle && formatAngle <= startAngle;
  }
  if (inRange) {
    return _objectSpread12(_objectSpread12({}, sector), {}, {
      radius,
      angle: reverseFormatAngleOfSetor(formatAngle, sector)
    });
  }
  return null;
};

// node_modules/recharts/es6/component/Label.js
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray12(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray12(o, minLen);
}
function _iterableToArray9(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray12(arr);
}
function _arrayLikeToArray12(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys13(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread13(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys13(Object(source), true).forEach(function(key) {
        _defineProperty13(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys13(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty13(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends8() {
  _extends8 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
var getLabel = function getLabel2(props) {
  var value = props.value, formatter = props.formatter;
  var label = (0, import_isNil7.default)(props.children) ? value : props.children;
  if ((0, import_isFunction4.default)(formatter)) {
    return formatter(label);
  }
  return label;
};
var getDeltaAngle = function getDeltaAngle2(startAngle, endAngle) {
  var sign2 = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign2 * deltaAngle;
};
var renderRadialLabel = function renderRadialLabel2(labelProps, label, attrs) {
  var position = labelProps.position, viewBox = labelProps.viewBox, offset = labelProps.offset, className = labelProps.className;
  var _ref = viewBox, cx = _ref.cx, cy = _ref.cy, innerRadius = _ref.innerRadius, outerRadius = _ref.outerRadius, startAngle = _ref.startAngle, endAngle = _ref.endAngle, clockWise = _ref.clockWise;
  var radius = (innerRadius + outerRadius) / 2;
  var deltaAngle = getDeltaAngle(startAngle, endAngle);
  var sign2 = deltaAngle >= 0 ? 1 : -1;
  var labelAngle, direction;
  if (position === "insideStart") {
    labelAngle = startAngle + sign2 * offset;
    direction = clockWise;
  } else if (position === "insideEnd") {
    labelAngle = endAngle - sign2 * offset;
    direction = !clockWise;
  } else if (position === "end") {
    labelAngle = endAngle + sign2 * offset;
    direction = clockWise;
  }
  direction = deltaAngle <= 0 ? direction : !direction;
  var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  var path2 = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
  var id = (0, import_isNil7.default)(labelProps.id) ? uniqueId("recharts-radial-line-") : labelProps.id;
  return /* @__PURE__ */ import_react16.default.createElement("text", _extends8({}, attrs, {
    dominantBaseline: "central",
    className: (0, import_classnames9.default)("recharts-radial-bar-label", className)
  }), /* @__PURE__ */ import_react16.default.createElement("defs", null, /* @__PURE__ */ import_react16.default.createElement("path", {
    id,
    d: path2
  })), /* @__PURE__ */ import_react16.default.createElement("textPath", {
    xlinkHref: "#".concat(id)
  }, label));
};
var getAttrsOfPolarLabel = function getAttrsOfPolarLabel2(props) {
  var viewBox = props.viewBox, offset = props.offset, position = props.position;
  var _ref2 = viewBox, cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
  var midAngle = (startAngle + endAngle) / 2;
  if (position === "outside") {
    var _polarToCartesian = polarToCartesian(cx, cy, outerRadius + offset, midAngle), _x = _polarToCartesian.x, _y = _polarToCartesian.y;
    return {
      x: _x,
      y: _y,
      textAnchor: _x >= cx ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (position === "center") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  }
  if (position === "centerTop") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  }
  if (position === "centerBottom") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  }
  var r = (innerRadius + outerRadius) / 2;
  var _polarToCartesian2 = polarToCartesian(cx, cy, r, midAngle), x2 = _polarToCartesian2.x, y2 = _polarToCartesian2.y;
  return {
    x: x2,
    y: y2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
};
var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel2(props) {
  var viewBox = props.viewBox, parentViewBox = props.parentViewBox, offset = props.offset, position = props.position;
  var _ref3 = viewBox, x2 = _ref3.x, y2 = _ref3.y, width = _ref3.width, height = _ref3.height;
  var verticalSign = height >= 0 ? 1 : -1;
  var verticalOffset = verticalSign * offset;
  var verticalEnd = verticalSign > 0 ? "end" : "start";
  var verticalStart = verticalSign > 0 ? "start" : "end";
  var horizontalSign = width >= 0 ? 1 : -1;
  var horizontalOffset = horizontalSign * offset;
  var horizontalEnd = horizontalSign > 0 ? "end" : "start";
  var horizontalStart = horizontalSign > 0 ? "start" : "end";
  if (position === "top") {
    var attrs = {
      x: x2 + width / 2,
      y: y2 - verticalSign * offset,
      textAnchor: "middle",
      verticalAnchor: verticalEnd
    };
    return _objectSpread13(_objectSpread13({}, attrs), parentViewBox ? {
      height: Math.max(y2 - parentViewBox.y, 0),
      width
    } : {});
  }
  if (position === "bottom") {
    var _attrs = {
      x: x2 + width / 2,
      y: y2 + height + verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalStart
    };
    return _objectSpread13(_objectSpread13({}, _attrs), parentViewBox ? {
      height: Math.max(parentViewBox.y + parentViewBox.height - (y2 + height), 0),
      width
    } : {});
  }
  if (position === "left") {
    var _attrs2 = {
      x: x2 - horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: "middle"
    };
    return _objectSpread13(_objectSpread13({}, _attrs2), parentViewBox ? {
      width: Math.max(_attrs2.x - parentViewBox.x, 0),
      height
    } : {});
  }
  if (position === "right") {
    var _attrs3 = {
      x: x2 + width + horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: "middle"
    };
    return _objectSpread13(_objectSpread13({}, _attrs3), parentViewBox ? {
      width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
      height
    } : {});
  }
  var sizeAttrs = parentViewBox ? {
    width,
    height
  } : {};
  if (position === "insideLeft") {
    return _objectSpread13({
      x: x2 + horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: "middle"
    }, sizeAttrs);
  }
  if (position === "insideRight") {
    return _objectSpread13({
      x: x2 + width - horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: "middle"
    }, sizeAttrs);
  }
  if (position === "insideTop") {
    return _objectSpread13({
      x: x2 + width / 2,
      y: y2 + verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideBottom") {
    return _objectSpread13({
      x: x2 + width / 2,
      y: y2 + height - verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === "insideTopLeft") {
    return _objectSpread13({
      x: x2 + horizontalOffset,
      y: y2 + verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideTopRight") {
    return _objectSpread13({
      x: x2 + width - horizontalOffset,
      y: y2 + verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideBottomLeft") {
    return _objectSpread13({
      x: x2 + horizontalOffset,
      y: y2 + height - verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === "insideBottomRight") {
    return _objectSpread13({
      x: x2 + width - horizontalOffset,
      y: y2 + height - verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if ((0, import_isObject2.default)(position) && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
    return _objectSpread13({
      x: x2 + getPercentValue(position.x, width),
      y: y2 + getPercentValue(position.y, height),
      textAnchor: "end",
      verticalAnchor: "end"
    }, sizeAttrs);
  }
  return _objectSpread13({
    x: x2 + width / 2,
    y: y2 + height / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, sizeAttrs);
};
var isPolar = function isPolar2(viewBox) {
  return isNumber(viewBox.cx);
};
function Label(props) {
  var viewBox = props.viewBox, position = props.position, value = props.value, children = props.children, content = props.content, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className, textBreakAll = props.textBreakAll;
  if (!viewBox || (0, import_isNil7.default)(value) && (0, import_isNil7.default)(children) && !/* @__PURE__ */ (0, import_react16.isValidElement)(content) && !(0, import_isFunction4.default)(content)) {
    return null;
  }
  if (/* @__PURE__ */ (0, import_react16.isValidElement)(content)) {
    return /* @__PURE__ */ (0, import_react16.cloneElement)(content, props);
  }
  var label;
  if ((0, import_isFunction4.default)(content)) {
    label = /* @__PURE__ */ (0, import_react16.createElement)(content, props);
    if (/* @__PURE__ */ (0, import_react16.isValidElement)(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }
  var isPolarLabel = isPolar(viewBox);
  var attrs = filterProps(props, true);
  if (isPolarLabel && (position === "insideStart" || position === "insideEnd" || position === "end")) {
    return renderRadialLabel(props, label, attrs);
  }
  var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
  return /* @__PURE__ */ import_react16.default.createElement(Text, _extends8({
    className: (0, import_classnames9.default)("recharts-label", className)
  }, attrs, positionAttrs, {
    breakAll: textBreakAll
  }), label);
}
Label.displayName = "Label";
Label.defaultProps = {
  offset: 5
};
var parseViewBox = function parseViewBox2(props) {
  var cx = props.cx, cy = props.cy, angle = props.angle, startAngle = props.startAngle, endAngle = props.endAngle, r = props.r, radius = props.radius, innerRadius = props.innerRadius, outerRadius = props.outerRadius, x2 = props.x, y2 = props.y, top = props.top, left = props.left, width = props.width, height = props.height, clockWise = props.clockWise, labelViewBox = props.labelViewBox;
  if (labelViewBox) {
    return labelViewBox;
  }
  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x2) && isNumber(y2)) {
      return {
        x: x2,
        y: y2,
        width,
        height
      };
    }
    if (isNumber(top) && isNumber(left)) {
      return {
        x: top,
        y: left,
        width,
        height
      };
    }
  }
  if (isNumber(x2) && isNumber(y2)) {
    return {
      x: x2,
      y: y2,
      width: 0,
      height: 0
    };
  }
  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx,
      cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise
    };
  }
  if (props.viewBox) {
    return props.viewBox;
  }
  return {};
};
var parseLabel = function parseLabel2(label, viewBox) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /* @__PURE__ */ import_react16.default.createElement(Label, {
      key: "label-implicit",
      viewBox
    });
  }
  if (isNumOrStr(label)) {
    return /* @__PURE__ */ import_react16.default.createElement(Label, {
      key: "label-implicit",
      viewBox,
      value: label
    });
  }
  if (/* @__PURE__ */ (0, import_react16.isValidElement)(label)) {
    if (label.type === Label) {
      return /* @__PURE__ */ (0, import_react16.cloneElement)(label, {
        key: "label-implicit",
        viewBox
      });
    }
    return /* @__PURE__ */ import_react16.default.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox
    });
  }
  if ((0, import_isFunction4.default)(label)) {
    return /* @__PURE__ */ import_react16.default.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox
    });
  }
  if ((0, import_isObject2.default)(label)) {
    return /* @__PURE__ */ import_react16.default.createElement(Label, _extends8({
      viewBox
    }, label, {
      key: "label-implicit"
    }));
  }
  return null;
};
var renderCallByParent = function renderCallByParent2(parentProps, viewBox) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var parentViewBox = parseViewBox(parentProps);
  var explicitChildren = findAllByType(children, Label.displayName).map(function(child, index) {
    return /* @__PURE__ */ (0, import_react16.cloneElement)(child, {
      viewBox: viewBox || parentViewBox,
      key: "label-".concat(index)
    });
  });
  if (!checkPropsLabel) {
    return explicitChildren;
  }
  var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
  return [implicitLabel].concat(_toConsumableArray8(explicitChildren));
};
Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;

// node_modules/recharts/es6/component/LabelList.js
var import_isObject3 = __toESM(require_isObject());
var import_isFunction5 = __toESM(require_isFunction());
var import_isNil8 = __toESM(require_isNil());
var import_last = __toESM(require_last());
var import_isArray5 = __toESM(require_isArray());
var import_react17 = __toESM(require_react());
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray10(arr) || _unsupportedIterableToArray13(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray13(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray13(o, minLen);
}
function _iterableToArray10(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray13(arr);
}
function _arrayLikeToArray13(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _extends9() {
  _extends9 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
function ownKeys14(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread14(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys14(Object(source), true).forEach(function(key) {
        _defineProperty14(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys14(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty14(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties8(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose8(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var defaultProps = {
  valueAccessor: function valueAccessor(entry) {
    return (0, import_isArray5.default)(entry.value) ? (0, import_last.default)(entry.value) : entry.value;
  }
};
function LabelList(props) {
  var data = props.data, valueAccessor2 = props.valueAccessor, dataKey = props.dataKey, clockWise = props.clockWise, id = props.id, textBreakAll = props.textBreakAll, others = _objectWithoutProperties8(props, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]);
  if (!data || !data.length) {
    return null;
  }
  return /* @__PURE__ */ import_react17.default.createElement(Layer, {
    className: "recharts-label-list"
  }, data.map(function(entry, index) {
    var value = (0, import_isNil8.default)(dataKey) ? valueAccessor2(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
    var idProps = (0, import_isNil8.default)(id) ? {} : {
      id: "".concat(id, "-").concat(index)
    };
    return /* @__PURE__ */ import_react17.default.createElement(Label, _extends9({}, filterProps(entry, true), others, idProps, {
      parentViewBox: entry.parentViewBox,
      index,
      value,
      textBreakAll,
      viewBox: Label.parseViewBox((0, import_isNil8.default)(clockWise) ? entry : _objectSpread14(_objectSpread14({}, entry), {}, {
        clockWise
      })),
      key: "label-".concat(index)
    }));
  }));
}
LabelList.displayName = "LabelList";
function parseLabelList(label, data) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /* @__PURE__ */ import_react17.default.createElement(LabelList, {
      key: "labelList-implicit",
      data
    });
  }
  if (/* @__PURE__ */ import_react17.default.isValidElement(label) || (0, import_isFunction5.default)(label)) {
    return /* @__PURE__ */ import_react17.default.createElement(LabelList, {
      key: "labelList-implicit",
      data,
      content: label
    });
  }
  if ((0, import_isObject3.default)(label)) {
    return /* @__PURE__ */ import_react17.default.createElement(LabelList, _extends9({
      data
    }, label, {
      key: "labelList-implicit"
    }));
  }
  return null;
}
function renderCallByParent3(parentProps, data) {
  var ckeckPropsLabel = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!parentProps || !parentProps.children && ckeckPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var explicitChilren = findAllByType(children, LabelList.displayName).map(function(child, index) {
    return /* @__PURE__ */ (0, import_react17.cloneElement)(child, {
      data,
      key: "labelList-".concat(index)
    });
  });
  if (!ckeckPropsLabel) {
    return explicitChilren;
  }
  var implicitLabelList = parseLabelList(parentProps.label, data);
  return [implicitLabelList].concat(_toConsumableArray9(explicitChilren));
}
LabelList.renderCallByParent = renderCallByParent3;
LabelList.defaultProps = defaultProps;

// node_modules/recharts/es6/shape/Sector.js
var import_react18 = __toESM(require_react());
var import_classnames10 = __toESM(require_classnames());
function _typeof11(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof11 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof11 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof11(obj);
}
function _extends10() {
  _extends10 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends10.apply(this, arguments);
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties9(Constructor, staticProps);
  return Constructor;
}
function _inherits9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf9(subClass, superClass);
}
function _setPrototypeOf9(o, p) {
  _setPrototypeOf9 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf9(o, p);
}
function _createSuper9(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct9();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf9(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf9(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn9(this, result);
  };
}
function _possibleConstructorReturn9(self2, call) {
  if (call && (_typeof11(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized9(self2);
}
function _assertThisInitialized9(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct9() {
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
function _getPrototypeOf9(o) {
  _getPrototypeOf9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf9(o);
}
var getDeltaAngle3 = function getDeltaAngle4(startAngle, endAngle) {
  var sign2 = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  return sign2 * deltaAngle;
};
var getTangentCircle = function getTangentCircle2(_ref) {
  var cx = _ref.cx, cy = _ref.cy, radius = _ref.radius, angle = _ref.angle, sign2 = _ref.sign, isExternal = _ref.isExternal, cornerRadius = _ref.cornerRadius, cornerIsExternal = _ref.cornerIsExternal;
  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / RADIAN2;
  var centerAngle = cornerIsExternal ? angle : angle + sign2 * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  var lineTangencyAngle = cornerIsExternal ? angle - sign2 * theta : angle;
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN2), lineTangencyAngle);
  return {
    center,
    circleTangency,
    lineTangency,
    theta
  };
};
var getSectorPath = function getSectorPath2(_ref2) {
  var cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
  var angle = getDeltaAngle3(startAngle, endAngle);
  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
  var path2 = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path2 += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
  } else {
    path2 += "L ".concat(cx, ",").concat(cy, " Z");
  }
  return path2;
};
var getSectorWithCorner = function getSectorWithCorner2(_ref3) {
  var cx = _ref3.cx, cy = _ref3.cy, innerRadius = _ref3.innerRadius, outerRadius = _ref3.outerRadius, cornerRadius = _ref3.cornerRadius, forceCornerRadius = _ref3.forceCornerRadius, cornerIsExternal = _ref3.cornerIsExternal, startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
  var sign2 = mathSign(endAngle - startAngle);
  var _getTangentCircle = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: startAngle,
    sign: sign2,
    cornerRadius,
    cornerIsExternal
  }), soct = _getTangentCircle.circleTangency, solt = _getTangentCircle.lineTangency, sot = _getTangentCircle.theta;
  var _getTangentCircle2 = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: endAngle,
    sign: -sign2,
    cornerRadius,
    cornerIsExternal
  }), eoct = _getTangentCircle2.circleTangency, eolt = _getTangentCircle2.lineTangency, eot = _getTangentCircle2.theta;
  var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
    }
    return getSectorPath({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    });
  }
  var path2 = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign2 < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
  if (innerRadius > 0) {
    var _getTangentCircle3 = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: startAngle,
      sign: sign2,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    }), sict = _getTangentCircle3.circleTangency, silt = _getTangentCircle3.lineTangency, sit = _getTangentCircle3.theta;
    var _getTangentCircle4 = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: endAngle,
      sign: -sign2,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    }), eict = _getTangentCircle4.circleTangency, eilt = _getTangentCircle4.lineTangency, eit = _getTangentCircle4.theta;
    var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
    if (innerArcAngle < 0 && cornerRadius === 0) {
      return "".concat(path2, "L").concat(cx, ",").concat(cy, "Z");
    }
    path2 += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign2 > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
  } else {
    path2 += "L".concat(cx, ",").concat(cy, "Z");
  }
  return path2;
};
var Sector = /* @__PURE__ */ function(_PureComponent) {
  _inherits9(Sector2, _PureComponent);
  var _super = _createSuper9(Sector2);
  function Sector2() {
    _classCallCheck9(this, Sector2);
    return _super.apply(this, arguments);
  }
  _createClass9(Sector2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, cx = _this$props.cx, cy = _this$props.cy, innerRadius = _this$props.innerRadius, outerRadius = _this$props.outerRadius, cornerRadius = _this$props.cornerRadius, forceCornerRadius = _this$props.forceCornerRadius, cornerIsExternal = _this$props.cornerIsExternal, startAngle = _this$props.startAngle, endAngle = _this$props.endAngle, className = _this$props.className;
      if (outerRadius < innerRadius || startAngle === endAngle) {
        return null;
      }
      var layerClass = (0, import_classnames10.default)("recharts-sector", className);
      var deltaRadius = outerRadius - innerRadius;
      var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
      var path2;
      if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
        path2 = getSectorWithCorner({
          cx,
          cy,
          innerRadius,
          outerRadius,
          cornerRadius: Math.min(cr, deltaRadius / 2),
          forceCornerRadius,
          cornerIsExternal,
          startAngle,
          endAngle
        });
      } else {
        path2 = getSectorPath({
          cx,
          cy,
          innerRadius,
          outerRadius,
          startAngle,
          endAngle
        });
      }
      return /* @__PURE__ */ import_react18.default.createElement("path", _extends10({}, filterProps(this.props, true), {
        className: layerClass,
        d: path2
      }));
    }
  }]);
  return Sector2;
}(import_react18.PureComponent);
Sector.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false
};

// node_modules/recharts/es6/shape/Curve.js
var import_isArray6 = __toESM(require_isArray());
var import_upperFirst3 = __toESM(require_upperFirst());
var import_isFunction6 = __toESM(require_isFunction());
var import_react19 = __toESM(require_react());
var import_classnames11 = __toESM(require_classnames());
function _typeof12(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof12 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof12 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof12(obj);
}
function _extends11() {
  _extends11 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends11.apply(this, arguments);
}
function ownKeys15(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread15(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys15(Object(source), true).forEach(function(key) {
        _defineProperty15(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys15(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty15(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties10(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties10(Constructor, staticProps);
  return Constructor;
}
function _inherits10(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf10(subClass, superClass);
}
function _setPrototypeOf10(o, p) {
  _setPrototypeOf10 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf10(o, p);
}
function _createSuper10(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct10();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf10(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf10(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn10(this, result);
  };
}
function _possibleConstructorReturn10(self2, call) {
  if (call && (_typeof12(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized10(self2);
}
function _assertThisInitialized10(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct10() {
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
function _getPrototypeOf10(o) {
  _getPrototypeOf10 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf10(o);
}
var CURVE_FACTORIES = {
  curveBasisClosed: basisClosed_default,
  curveBasisOpen: basisOpen_default,
  curveBasis: basis_default,
  curveLinearClosed: linearClosed_default,
  curveLinear: linear_default,
  curveMonotoneX: monotoneX,
  curveMonotoneY: monotoneY,
  curveNatural: natural_default,
  curveStep: step_default,
  curveStepAfter: stepAfter,
  curveStepBefore: stepBefore
};
var defined = function defined2(p) {
  return p.x === +p.x && p.y === +p.y;
};
var getX = function getX2(p) {
  return p.x;
};
var getY = function getY2(p) {
  return p.y;
};
var getCurveFactory = function getCurveFactory2(type, layout) {
  if ((0, import_isFunction6.default)(type)) {
    return type;
  }
  var name = "curve".concat((0, import_upperFirst3.default)(type));
  if (name === "curveMonotone" && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === "vertical" ? "Y" : "X")];
  }
  return CURVE_FACTORIES[name] || linear_default;
};
var Curve = /* @__PURE__ */ function(_PureComponent) {
  _inherits10(Curve2, _PureComponent);
  var _super = _createSuper10(Curve2);
  function Curve2() {
    _classCallCheck10(this, Curve2);
    return _super.apply(this, arguments);
  }
  _createClass10(Curve2, [{
    key: "getPath",
    value: function getPath() {
      var _this$props = this.props, type = _this$props.type, points = _this$props.points, baseLine = _this$props.baseLine, layout = _this$props.layout, connectNulls = _this$props.connectNulls;
      var curveFactory = getCurveFactory(type, layout);
      var formatPoints = connectNulls ? points.filter(function(entry) {
        return defined(entry);
      }) : points;
      var lineFunction;
      if ((0, import_isArray6.default)(baseLine)) {
        var formatBaseLine = connectNulls ? baseLine.filter(function(base) {
          return defined(base);
        }) : baseLine;
        var areaPoints = formatPoints.map(function(entry, index) {
          return _objectSpread15(_objectSpread15({}, entry), {}, {
            base: formatBaseLine[index]
          });
        });
        if (layout === "vertical") {
          lineFunction = area_default().y(getY).x1(getX).x0(function(d) {
            return d.base.x;
          });
        } else {
          lineFunction = area_default().x(getX).y1(getY).y0(function(d) {
            return d.base.y;
          });
        }
        lineFunction.defined(defined).curve(curveFactory);
        return lineFunction(areaPoints);
      }
      if (layout === "vertical" && isNumber(baseLine)) {
        lineFunction = area_default().y(getY).x1(getX).x0(baseLine);
      } else if (isNumber(baseLine)) {
        lineFunction = area_default().x(getX).y1(getY).y0(baseLine);
      } else {
        lineFunction = line_default().x(getX).y(getY);
      }
      lineFunction.defined(defined).curve(curveFactory);
      return lineFunction(formatPoints);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, className = _this$props2.className, points = _this$props2.points, path2 = _this$props2.path, pathRef = _this$props2.pathRef;
      if ((!points || !points.length) && !path2) {
        return null;
      }
      var realPath = points && points.length ? this.getPath() : path2;
      return /* @__PURE__ */ import_react19.default.createElement("path", _extends11({}, filterProps(this.props), adaptEventHandlers(this.props), {
        className: (0, import_classnames11.default)("recharts-curve", className),
        d: realPath,
        ref: pathRef
      }));
    }
  }]);
  return Curve2;
}(import_react19.PureComponent);
Curve.defaultProps = {
  type: "linear",
  points: [],
  connectNulls: false
};

// node_modules/recharts/es6/shape/Rectangle.js
var import_react20 = __toESM(require_react());
var import_classnames12 = __toESM(require_classnames());
function _typeof13(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof13 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof13 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof13(obj);
}
function _extends12() {
  _extends12 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends12.apply(this, arguments);
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties11(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties11(Constructor, staticProps);
  return Constructor;
}
function _inherits11(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf11(subClass, superClass);
}
function _setPrototypeOf11(o, p) {
  _setPrototypeOf11 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf11(o, p);
}
function _createSuper11(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct11();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf11(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf11(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn11(this, result);
  };
}
function _possibleConstructorReturn11(self2, call) {
  if (call && (_typeof13(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized11(self2);
}
function _assertThisInitialized11(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct11() {
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
function _getPrototypeOf11(o) {
  _getPrototypeOf11 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf11(o);
}
var getRectanglePath = function getRectanglePath2(x2, y2, width, height, radius) {
  var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
  var ySign = height >= 0 ? 1 : -1;
  var xSign = width >= 0 ? 1 : -1;
  var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
  var path2;
  if (maxRadius > 0 && radius instanceof Array) {
    var newRadius = [0, 0, 0, 0];
    for (var i = 0, len = 4; i < len; i++) {
      newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
    }
    path2 = "M".concat(x2, ",").concat(y2 + ySign * newRadius[0]);
    if (newRadius[0] > 0) {
      path2 += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x2 + xSign * newRadius[0], ",").concat(y2);
    }
    path2 += "L ".concat(x2 + width - xSign * newRadius[1], ",").concat(y2);
    if (newRadius[1] > 0) {
      path2 += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width, ",").concat(y2 + ySign * newRadius[1]);
    }
    path2 += "L ".concat(x2 + width, ",").concat(y2 + height - ySign * newRadius[2]);
    if (newRadius[2] > 0) {
      path2 += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width - xSign * newRadius[2], ",").concat(y2 + height);
    }
    path2 += "L ".concat(x2 + xSign * newRadius[3], ",").concat(y2 + height);
    if (newRadius[3] > 0) {
      path2 += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x2, ",").concat(y2 + height - ySign * newRadius[3]);
    }
    path2 += "Z";
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    var _newRadius = Math.min(maxRadius, radius);
    path2 = "M ".concat(x2, ",").concat(y2 + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + xSign * _newRadius, ",").concat(y2, "\n            L ").concat(x2 + width - xSign * _newRadius, ",").concat(y2, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width, ",").concat(y2 + ySign * _newRadius, "\n            L ").concat(x2 + width, ",").concat(y2 + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width - xSign * _newRadius, ",").concat(y2 + height, "\n            L ").concat(x2 + xSign * _newRadius, ",").concat(y2 + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2, ",").concat(y2 + height - ySign * _newRadius, " Z");
  } else {
    path2 = "M ".concat(x2, ",").concat(y2, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
  }
  return path2;
};
var isInRectangle = function isInRectangle2(point4, rect) {
  if (!point4 || !rect) {
    return false;
  }
  var px = point4.x, py = point4.y;
  var x2 = rect.x, y2 = rect.y, width = rect.width, height = rect.height;
  if (Math.abs(width) > 0 && Math.abs(height) > 0) {
    var minX = Math.min(x2, x2 + width);
    var maxX = Math.max(x2, x2 + width);
    var minY = Math.min(y2, y2 + height);
    var maxY = Math.max(y2, y2 + height);
    return px >= minX && px <= maxX && py >= minY && py <= maxY;
  }
  return false;
};
var Rectangle = /* @__PURE__ */ function(_PureComponent) {
  _inherits11(Rectangle2, _PureComponent);
  var _super = _createSuper11(Rectangle2);
  function Rectangle2() {
    var _this;
    _classCallCheck11(this, Rectangle2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      totalLength: -1
    };
    _this.node = void 0;
    return _this;
  }
  _createClass11(Rectangle2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.node && this.node.getTotalLength) {
        try {
          var totalLength = this.node.getTotalLength();
          if (totalLength) {
            this.setState({
              totalLength
            });
          }
        } catch (err) {
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props, x2 = _this$props.x, y2 = _this$props.y, width = _this$props.width, height = _this$props.height, radius = _this$props.radius, className = _this$props.className;
      var totalLength = this.state.totalLength;
      var _this$props2 = this.props, animationEasing = _this$props2.animationEasing, animationDuration = _this$props2.animationDuration, animationBegin = _this$props2.animationBegin, isAnimationActive = _this$props2.isAnimationActive, isUpdateAnimationActive = _this$props2.isUpdateAnimationActive;
      if (x2 !== +x2 || y2 !== +y2 || width !== +width || height !== +height || width === 0 || height === 0) {
        return null;
      }
      var layerClass = (0, import_classnames12.default)("recharts-rectangle", className);
      if (!isUpdateAnimationActive) {
        return /* @__PURE__ */ import_react20.default.createElement("path", _extends12({}, filterProps(this.props, true), {
          className: layerClass,
          d: getRectanglePath(x2, y2, width, height, radius)
        }));
      }
      return /* @__PURE__ */ import_react20.default.createElement(es6_default, {
        canBegin: totalLength > 0,
        from: {
          width,
          height,
          x: x2,
          y: y2
        },
        to: {
          width,
          height,
          x: x2,
          y: y2
        },
        duration: animationDuration,
        animationEasing,
        isActive: isUpdateAnimationActive
      }, function(_ref) {
        var currWidth = _ref.width, currHeight = _ref.height, currX = _ref.x, currY = _ref.y;
        return /* @__PURE__ */ import_react20.default.createElement(es6_default, {
          canBegin: totalLength > 0,
          from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
          to: "".concat(totalLength, "px 0px"),
          attributeName: "strokeDasharray",
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing
        }, /* @__PURE__ */ import_react20.default.createElement("path", _extends12({}, filterProps(_this2.props, true), {
          className: layerClass,
          d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
          ref: function ref(node) {
            _this2.node = node;
          }
        })));
      });
    }
  }]);
  return Rectangle2;
}(import_react20.PureComponent);
Rectangle.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};

// node_modules/recharts/es6/shape/Dot.js
var import_react21 = __toESM(require_react());
var import_classnames13 = __toESM(require_classnames());
function _typeof14(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof14 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof14 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof14(obj);
}
function _extends13() {
  _extends13 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends13.apply(this, arguments);
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties12(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties12(Constructor, staticProps);
  return Constructor;
}
function _inherits12(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf12(subClass, superClass);
}
function _setPrototypeOf12(o, p) {
  _setPrototypeOf12 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf12(o, p);
}
function _createSuper12(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct12();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf12(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf12(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn12(this, result);
  };
}
function _possibleConstructorReturn12(self2, call) {
  if (call && (_typeof14(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized12(self2);
}
function _assertThisInitialized12(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct12() {
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
function _getPrototypeOf12(o) {
  _getPrototypeOf12 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf12(o);
}
var Dot = /* @__PURE__ */ function(_PureComponent) {
  _inherits12(Dot2, _PureComponent);
  var _super = _createSuper12(Dot2);
  function Dot2() {
    _classCallCheck12(this, Dot2);
    return _super.apply(this, arguments);
  }
  _createClass12(Dot2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, cx = _this$props.cx, cy = _this$props.cy, r = _this$props.r, className = _this$props.className;
      var layerClass = (0, import_classnames13.default)("recharts-dot", className);
      if (cx === +cx && cy === +cy && r === +r) {
        return /* @__PURE__ */ import_react21.default.createElement("circle", _extends13({}, filterProps(this.props), adaptEventHandlers(this.props), {
          className: layerClass,
          cx,
          cy,
          r
        }));
      }
      return null;
    }
  }]);
  return Dot2;
}(import_react21.PureComponent);

// node_modules/recharts/es6/shape/Cross.js
var import_react22 = __toESM(require_react());
var import_classnames14 = __toESM(require_classnames());
function _typeof15(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof15 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof15 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof15(obj);
}
function _extends14() {
  _extends14 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends14.apply(this, arguments);
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties13(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties13(Constructor, staticProps);
  return Constructor;
}
function _inherits13(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf13(subClass, superClass);
}
function _setPrototypeOf13(o, p) {
  _setPrototypeOf13 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf13(o, p);
}
function _createSuper13(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct13();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf13(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf13(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn13(this, result);
  };
}
function _possibleConstructorReturn13(self2, call) {
  if (call && (_typeof15(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized13(self2);
}
function _assertThisInitialized13(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct13() {
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
function _getPrototypeOf13(o) {
  _getPrototypeOf13 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf13(o);
}
var Cross = /* @__PURE__ */ function(_PureComponent) {
  _inherits13(Cross2, _PureComponent);
  var _super = _createSuper13(Cross2);
  function Cross2() {
    _classCallCheck13(this, Cross2);
    return _super.apply(this, arguments);
  }
  _createClass13(Cross2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, x2 = _this$props.x, y2 = _this$props.y, width = _this$props.width, height = _this$props.height, top = _this$props.top, left = _this$props.left, className = _this$props.className;
      if (!isNumber(x2) || !isNumber(y2) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
        return null;
      }
      return /* @__PURE__ */ import_react22.default.createElement("path", _extends14({}, filterProps(this.props, true), {
        className: (0, import_classnames14.default)("recharts-cross", className),
        d: Cross2.getPath(x2, y2, width, height, top, left)
      }));
    }
  }], [{
    key: "getPath",
    value: function getPath(x2, y2, width, height, top, left) {
      return "M".concat(x2, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y2, "h").concat(width);
    }
  }]);
  return Cross2;
}(import_react22.PureComponent);
Cross.defaultProps = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0
};

// node_modules/recharts/es6/cartesian/Brush.js
var import_isFunction7 = __toESM(require_isFunction());
var import_range2 = __toESM(require_range());
var import_react23 = __toESM(require_react());
var import_classnames15 = __toESM(require_classnames());

// node_modules/recharts/es6/util/CssPrefixUtils.js
function ownKeys16(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread16(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys16(Object(source), true).forEach(function(key) {
        _defineProperty16(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys16(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty16(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var PREFIX_LIST2 = ["Webkit", "Moz", "O", "ms"];
var generatePrefixStyle3 = function generatePrefixStyle4(name, value) {
  if (!name) {
    return null;
  }
  var camelName = name.replace(/(\w)/, function(v) {
    return v.toUpperCase();
  });
  var result = PREFIX_LIST2.reduce(function(res, entry) {
    return _objectSpread16(_objectSpread16({}, res), {}, _defineProperty16({}, entry + camelName, value));
  }, {});
  result[name] = value;
  return result;
};

// node_modules/recharts/es6/cartesian/Brush.js
function _typeof16(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof16 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof16 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof16(obj);
}
function _extends15() {
  _extends15 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends15.apply(this, arguments);
}
function ownKeys17(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread17(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys17(Object(source), true).forEach(function(key) {
        _defineProperty17(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys17(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty17(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties14(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties14(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties14(Constructor, staticProps);
  return Constructor;
}
function _inherits14(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf14(subClass, superClass);
}
function _setPrototypeOf14(o, p) {
  _setPrototypeOf14 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf14(o, p);
}
function _createSuper14(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct14();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf14(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf14(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn14(this, result);
  };
}
function _possibleConstructorReturn14(self2, call) {
  if (call && (_typeof16(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized14(self2);
}
function _assertThisInitialized14(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct14() {
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
function _getPrototypeOf14(o) {
  _getPrototypeOf14 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf14(o);
}
var createScale = function createScale2(_ref) {
  var data = _ref.data, startIndex = _ref.startIndex, endIndex = _ref.endIndex, x2 = _ref.x, width = _ref.width, travellerWidth = _ref.travellerWidth;
  if (!data || !data.length) {
    return {};
  }
  var len = data.length;
  var scale = point3().domain((0, import_range2.default)(0, len)).range([x2, x2 + width - travellerWidth]);
  var scaleValues = scale.domain().map(function(entry) {
    return scale(entry);
  });
  return {
    isTextActive: false,
    isSlideMoving: false,
    isTravellerMoving: false,
    startX: scale(startIndex),
    endX: scale(endIndex),
    scale,
    scaleValues
  };
};
var isTouch = function isTouch2(e) {
  return e.changedTouches && !!e.changedTouches.length;
};
var Brush = /* @__PURE__ */ function(_PureComponent) {
  _inherits14(Brush2, _PureComponent);
  var _super = _createSuper14(Brush2);
  function Brush2(props) {
    var _this;
    _classCallCheck14(this, Brush2);
    _this = _super.call(this, props);
    _this.leaveTimer = void 0;
    _this.travellerDragStartHandlers = void 0;
    _this.handleDrag = function(e) {
      if (_this.leaveTimer) {
        clearTimeout(_this.leaveTimer);
        _this.leaveTimer = null;
      }
      if (_this.state.isTravellerMoving) {
        _this.handleTravellerMove(e);
      } else if (_this.state.isSlideMoving) {
        _this.handleSlideDrag(e);
      }
    };
    _this.handleTouchMove = function(e) {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        _this.handleDrag(e.changedTouches[0]);
      }
    };
    _this.handleDragEnd = function() {
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: false
      });
      _this.detachDragEndListener();
    };
    _this.handleLeaveWrapper = function() {
      if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
        _this.leaveTimer = window.setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
      }
    };
    _this.handleEnterSlideOrTraveller = function() {
      _this.setState({
        isTextActive: true
      });
    };
    _this.handleLeaveSlideOrTraveller = function() {
      _this.setState({
        isTextActive: false
      });
    };
    _this.handleSlideDragStart = function(e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: true,
        slideMoveStartX: event.pageX
      });
      _this.attachDragEndListener();
    };
    _this.travellerDragStartHandlers = {
      startX: _this.handleTravellerDragStart.bind(_assertThisInitialized14(_this), "startX"),
      endX: _this.handleTravellerDragStart.bind(_assertThisInitialized14(_this), "endX")
    };
    _this.state = {};
    return _this;
  }
  _createClass14(Brush2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.leaveTimer) {
        clearTimeout(this.leaveTimer);
        this.leaveTimer = null;
      }
      this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function getIndex(_ref2) {
      var startX = _ref2.startX, endX = _ref2.endX;
      var scaleValues = this.state.scaleValues;
      var _this$props = this.props, gap = _this$props.gap, data = _this$props.data;
      var lastIndex = data.length - 1;
      var min2 = Math.min(startX, endX);
      var max2 = Math.max(startX, endX);
      var minIndex = Brush2.getIndexInRange(scaleValues, min2);
      var maxIndex = Brush2.getIndexInRange(scaleValues, max2);
      return {
        startIndex: minIndex - minIndex % gap,
        endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap
      };
    }
  }, {
    key: "getTextOfTick",
    value: function getTextOfTick(index) {
      var _this$props2 = this.props, data = _this$props2.data, tickFormatter = _this$props2.tickFormatter, dataKey = _this$props2.dataKey;
      var text = getValueByDataKey(data[index], dataKey, index);
      return (0, import_isFunction7.default)(tickFormatter) ? tickFormatter(text, index) : text;
    }
  }, {
    key: "attachDragEndListener",
    value: function attachDragEndListener() {
      window.addEventListener("mouseup", this.handleDragEnd, true);
      window.addEventListener("touchend", this.handleDragEnd, true);
    }
  }, {
    key: "detachDragEndListener",
    value: function detachDragEndListener() {
      window.removeEventListener("mouseup", this.handleDragEnd, true);
      window.removeEventListener("touchend", this.handleDragEnd, true);
    }
  }, {
    key: "handleSlideDrag",
    value: function handleSlideDrag(e) {
      var _this$state = this.state, slideMoveStartX = _this$state.slideMoveStartX, startX = _this$state.startX, endX = _this$state.endX;
      var _this$props3 = this.props, x2 = _this$props3.x, width = _this$props3.width, travellerWidth = _this$props3.travellerWidth, startIndex = _this$props3.startIndex, endIndex = _this$props3.endIndex, onChange = _this$props3.onChange;
      var delta = e.pageX - slideMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x2 + width - travellerWidth - endX, x2 + width - travellerWidth - startX);
      } else if (delta < 0) {
        delta = Math.max(delta, x2 - startX, x2 - endX);
      }
      var newIndex = this.getIndex({
        startX: startX + delta,
        endX: endX + delta
      });
      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }
      this.setState({
        startX: startX + delta,
        endX: endX + delta,
        slideMoveStartX: e.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function handleTravellerDragStart(id, e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      this.setState({
        isSlideMoving: false,
        isTravellerMoving: true,
        movingTravellerId: id,
        brushMoveStartX: event.pageX
      });
      this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function handleTravellerMove(e) {
      var _this$setState;
      var _this$state2 = this.state, brushMoveStartX = _this$state2.brushMoveStartX, movingTravellerId = _this$state2.movingTravellerId, endX = _this$state2.endX, startX = _this$state2.startX;
      var prevValue = this.state[movingTravellerId];
      var _this$props4 = this.props, x2 = _this$props4.x, width = _this$props4.width, travellerWidth = _this$props4.travellerWidth, onChange = _this$props4.onChange, gap = _this$props4.gap, data = _this$props4.data;
      var params = {
        startX: this.state.startX,
        endX: this.state.endX
      };
      var delta = e.pageX - brushMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x2 + width - travellerWidth - prevValue);
      } else if (delta < 0) {
        delta = Math.max(delta, x2 - prevValue);
      }
      params[movingTravellerId] = prevValue + delta;
      var newIndex = this.getIndex(params);
      var startIndex = newIndex.startIndex, endIndex = newIndex.endIndex;
      var isFullGap = function isFullGap2() {
        var lastIndex = data.length - 1;
        if (movingTravellerId === "startX" && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0) || endX < startX && endIndex === lastIndex || movingTravellerId === "endX" && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) || endX > startX && endIndex === lastIndex) {
          return true;
        }
        return false;
      };
      this.setState((_this$setState = {}, _defineProperty17(_this$setState, movingTravellerId, prevValue + delta), _defineProperty17(_this$setState, "brushMoveStartX", e.pageX), _this$setState), function() {
        if (onChange) {
          if (isFullGap()) {
            onChange(newIndex);
          }
        }
      });
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this$props5 = this.props, x2 = _this$props5.x, y2 = _this$props5.y, width = _this$props5.width, height = _this$props5.height, fill = _this$props5.fill, stroke = _this$props5.stroke;
      return /* @__PURE__ */ import_react23.default.createElement("rect", {
        stroke,
        fill,
        x: x2,
        y: y2,
        width,
        height
      });
    }
  }, {
    key: "renderPanorama",
    value: function renderPanorama() {
      var _this$props6 = this.props, x2 = _this$props6.x, y2 = _this$props6.y, width = _this$props6.width, height = _this$props6.height, data = _this$props6.data, children = _this$props6.children, padding = _this$props6.padding;
      var chartElement = import_react23.Children.only(children);
      if (!chartElement) {
        return null;
      }
      return /* @__PURE__ */ import_react23.default.cloneElement(chartElement, {
        x: x2,
        y: y2,
        width,
        height,
        margin: padding,
        compact: true,
        data
      });
    }
  }, {
    key: "renderTravellerLayer",
    value: function renderTravellerLayer(travellerX, id) {
      var _this$props7 = this.props, y2 = _this$props7.y, travellerWidth = _this$props7.travellerWidth, height = _this$props7.height, traveller = _this$props7.traveller;
      var x2 = Math.max(travellerX, this.props.x);
      var travellerProps = _objectSpread17(_objectSpread17({}, filterProps(this.props)), {}, {
        x: x2,
        y: y2,
        width: travellerWidth,
        height
      });
      return /* @__PURE__ */ import_react23.default.createElement(Layer, {
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[id],
        onTouchStart: this.travellerDragStartHandlers[id],
        style: {
          cursor: "col-resize"
        }
      }, Brush2.renderTraveller(traveller, travellerProps));
    }
  }, {
    key: "renderSlide",
    value: function renderSlide(startX, endX) {
      var _this$props8 = this.props, y2 = _this$props8.y, height = _this$props8.height, stroke = _this$props8.stroke, travellerWidth = _this$props8.travellerWidth;
      var x2 = Math.min(startX, endX) + travellerWidth;
      var width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);
      return /* @__PURE__ */ import_react23.default.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: stroke,
        fillOpacity: 0.2,
        x: x2,
        y: y2,
        width,
        height
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var _this$props9 = this.props, startIndex = _this$props9.startIndex, endIndex = _this$props9.endIndex, y2 = _this$props9.y, height = _this$props9.height, travellerWidth = _this$props9.travellerWidth, stroke = _this$props9.stroke;
      var _this$state3 = this.state, startX = _this$state3.startX, endX = _this$state3.endX;
      var offset = 5;
      var attrs = {
        pointerEvents: "none",
        fill: stroke
      };
      return /* @__PURE__ */ import_react23.default.createElement(Layer, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ import_react23.default.createElement(Text, _extends15({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(startX, endX) - offset,
        y: y2 + height / 2
      }, attrs), this.getTextOfTick(startIndex)), /* @__PURE__ */ import_react23.default.createElement(Text, _extends15({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(startX, endX) + travellerWidth + offset,
        y: y2 + height / 2
      }, attrs), this.getTextOfTick(endIndex)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props10 = this.props, data = _this$props10.data, className = _this$props10.className, children = _this$props10.children, x2 = _this$props10.x, y2 = _this$props10.y, width = _this$props10.width, height = _this$props10.height, alwaysShowText = _this$props10.alwaysShowText;
      var _this$state4 = this.state, startX = _this$state4.startX, endX = _this$state4.endX, isTextActive = _this$state4.isTextActive, isSlideMoving = _this$state4.isSlideMoving, isTravellerMoving = _this$state4.isTravellerMoving;
      if (!data || !data.length || !isNumber(x2) || !isNumber(y2) || !isNumber(width) || !isNumber(height) || width <= 0 || height <= 0) {
        return null;
      }
      var layerClass = (0, import_classnames15.default)("recharts-brush", className);
      var isPanoramic = import_react23.default.Children.count(children) === 1;
      var style = generatePrefixStyle3("userSelect", "none");
      return /* @__PURE__ */ import_react23.default.createElement(Layer, {
        className: layerClass,
        onMouseMove: this.handleDrag,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style
      }, this.renderBackground(), isPanoramic && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTravellerLayer(startX, "startX"), this.renderTravellerLayer(endX, "endX"), (isTextActive || isSlideMoving || isTravellerMoving || alwaysShowText) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function renderDefaultTraveller(props) {
      var x2 = props.x, y2 = props.y, width = props.width, height = props.height, stroke = props.stroke;
      var lineY = Math.floor(y2 + height / 2) - 1;
      return /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null, /* @__PURE__ */ import_react23.default.createElement("rect", {
        x: x2,
        y: y2,
        width,
        height,
        fill: stroke,
        stroke: "none"
      }), /* @__PURE__ */ import_react23.default.createElement("line", {
        x1: x2 + 1,
        y1: lineY,
        x2: x2 + width - 1,
        y2: lineY,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ import_react23.default.createElement("line", {
        x1: x2 + 1,
        y1: lineY + 2,
        x2: x2 + width - 1,
        y2: lineY + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function renderTraveller(option, props) {
      var rectangle;
      if (/* @__PURE__ */ import_react23.default.isValidElement(option)) {
        rectangle = /* @__PURE__ */ import_react23.default.cloneElement(option, props);
      } else if ((0, import_isFunction7.default)(option)) {
        rectangle = option(props);
      } else {
        rectangle = Brush2.renderDefaultTraveller(props);
      }
      return rectangle;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var data = nextProps.data, width = nextProps.width, x2 = nextProps.x, travellerWidth = nextProps.travellerWidth, updateId = nextProps.updateId, startIndex = nextProps.startIndex, endIndex = nextProps.endIndex;
      if (data !== prevState.prevData || updateId !== prevState.prevUpdateId) {
        return _objectSpread17({
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x2,
          prevWidth: width
        }, data && data.length ? createScale({
          data,
          width,
          x: x2,
          travellerWidth,
          startIndex,
          endIndex
        }) : {
          scale: null,
          scaleValues: null
        });
      }
      if (prevState.scale && (width !== prevState.prevWidth || x2 !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)) {
        prevState.scale.range([x2, x2 + width - travellerWidth]);
        var scaleValues = prevState.scale.domain().map(function(entry) {
          return prevState.scale(entry);
        });
        return {
          prevData: data,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x2,
          prevWidth: width,
          startX: prevState.scale(nextProps.startIndex),
          endX: prevState.scale(nextProps.endIndex),
          scaleValues
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function getIndexInRange(range3, x2) {
      var len = range3.length;
      var start = 0;
      var end = len - 1;
      while (end - start > 1) {
        var middle = Math.floor((start + end) / 2);
        if (range3[middle] > x2) {
          end = middle;
        } else {
          start = middle;
        }
      }
      return x2 >= range3[end] ? end : start;
    }
  }]);
  return Brush2;
}(import_react23.PureComponent);
Brush.displayName = "Brush";
Brush.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: false
};

// node_modules/recharts/es6/cartesian/ReferenceLine.js
var import_some = __toESM(require_some());
var import_isFunction8 = __toESM(require_isFunction());
var import_react24 = __toESM(require_react());
var import_classnames16 = __toESM(require_classnames());

// node_modules/recharts/es6/util/IfOverflowMatches.js
var ifOverflowMatches = function ifOverflowMatches2(props, value) {
  var alwaysShow = props.alwaysShow;
  var ifOverflow = props.ifOverflow;
  if (alwaysShow) {
    ifOverflow = "extendDomain";
  }
  return ifOverflow === value;
};

// node_modules/recharts/es6/util/CartesianUtils.js
var import_every = __toESM(require_every());
var import_mapValues = __toESM(require_mapValues());
function _classCallCheck15(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties15(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass15(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties15(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties15(Constructor, staticProps);
  return Constructor;
}
function ownKeys18(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread18(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys18(Object(source), true).forEach(function(key) {
        _defineProperty18(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys18(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty18(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var formatAxisMap = function formatAxisMap2(props, axisMap, offset, axisType, chartName) {
  var width = props.width, height = props.height, layout = props.layout, children = props.children;
  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };
  var hasBar = !!findChildByType(children, "Bar");
  return ids.reduce(function(result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation, domain = axis.domain, _axis$padding = axis.padding, padding = _axis$padding === void 0 ? {} : _axis$padding, mirror = axis.mirror, reversed = axis.reversed;
    var offsetKey = "".concat(orientation).concat(mirror ? "Mirror" : "");
    var calculatedPadding, range3, x2, y2, needSpace;
    if (axis.type === "number" && (axis.padding === "gap" || axis.padding === "no-gap")) {
      var diff = domain[1] - domain[0];
      var smallestDistanceBetweenValues = Infinity;
      var sortedValues = axis.categoricalDomain.sort();
      sortedValues.forEach(function(value, index) {
        if (index > 0) {
          smallestDistanceBetweenValues = Math.min((value || 0) - (sortedValues[index - 1] || 0), smallestDistanceBetweenValues);
        }
      });
      var smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
      var rangeWidth = axis.layout === "vertical" ? offset.height : offset.width;
      if (axis.padding === "gap") {
        calculatedPadding = smallestDistanceInPercent * rangeWidth / 2;
      }
      if (axis.padding === "no-gap") {
        var gap = getPercentValue(props.barCategoryGap, smallestDistanceInPercent * rangeWidth);
        var halfBand = smallestDistanceInPercent * rangeWidth / 2;
        calculatedPadding = halfBand - gap - (halfBand - gap) / rangeWidth * gap;
      }
    }
    if (axisType === "xAxis") {
      range3 = [offset.left + (padding.left || 0) + (calculatedPadding || 0), offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0)];
    } else if (axisType === "yAxis") {
      range3 = layout === "horizontal" ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0) + (calculatedPadding || 0), offset.top + offset.height - (padding.bottom || 0) - (calculatedPadding || 0)];
    } else {
      range3 = axis.range;
    }
    if (reversed) {
      range3 = [range3[1], range3[0]];
    }
    var _parseScale = parseScale(axis, chartName, hasBar), scale = _parseScale.scale, realScaleType = _parseScale.realScaleType;
    scale.domain(domain).range(range3);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, _objectSpread18(_objectSpread18({}, axis), {}, {
      realScaleType
    }));
    if (axisType === "xAxis") {
      needSpace = orientation === "top" && !mirror || orientation === "bottom" && mirror;
      x2 = offset.left;
      y2 = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === "yAxis") {
      needSpace = orientation === "left" && !mirror || orientation === "right" && mirror;
      x2 = steps[offsetKey] - needSpace * axis.width;
      y2 = offset.top;
    }
    var finalAxis = _objectSpread18(_objectSpread18(_objectSpread18({}, axis), ticks), {}, {
      realScaleType,
      x: x2,
      y: y2,
      scale,
      width: axisType === "xAxis" ? offset.width : axis.width,
      height: axisType === "yAxis" ? offset.height : axis.height
    });
    finalAxis.bandSize = getBandSizeOfAxis(finalAxis, ticks);
    if (!axis.hide && axisType === "xAxis") {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }
    return _objectSpread18(_objectSpread18({}, result), {}, _defineProperty18({}, id, finalAxis));
  }, {});
};
var rectWithPoints = function rectWithPoints2(_ref, _ref2) {
  var x1 = _ref.x, y1 = _ref.y;
  var x2 = _ref2.x, y2 = _ref2.y;
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  };
};
var rectWithCoords = function rectWithCoords2(_ref3) {
  var x1 = _ref3.x1, y1 = _ref3.y1, x2 = _ref3.x2, y2 = _ref3.y2;
  return rectWithPoints({
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  });
};
var ScaleHelper = /* @__PURE__ */ function() {
  function ScaleHelper2(scale) {
    _classCallCheck15(this, ScaleHelper2);
    this.scale = void 0;
    this.scale = scale;
  }
  _createClass15(ScaleHelper2, [{
    key: "domain",
    get: function get2() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function get2() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function get2() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function get2() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function get2() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function apply(value) {
      var _ref4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, bandAware = _ref4.bandAware, position = _ref4.position;
      if (value === void 0) {
        return void 0;
      }
      if (position) {
        switch (position) {
          case "start": {
            return this.scale(value);
          }
          case "middle": {
            var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(value) + offset;
          }
          case "end": {
            var _offset = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(value) + _offset;
          }
          default: {
            return this.scale(value);
          }
        }
      }
      if (bandAware) {
        var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(value) + _offset2;
      }
      return this.scale(value);
    }
  }, {
    key: "isInRange",
    value: function isInRange(value) {
      var range3 = this.range();
      var first = range3[0];
      var last = range3[range3.length - 1];
      return first <= last ? value >= first && value <= last : value >= last && value <= first;
    }
  }], [{
    key: "create",
    value: function create(obj) {
      return new ScaleHelper2(obj);
    }
  }]);
  return ScaleHelper2;
}();
ScaleHelper.EPS = 1e-4;
var createLabeledScales = function createLabeledScales2(options) {
  var scales = Object.keys(options).reduce(function(res, key) {
    return _objectSpread18(_objectSpread18({}, res), {}, _defineProperty18({}, key, ScaleHelper.create(options[key])));
  }, {});
  return _objectSpread18(_objectSpread18({}, scales), {}, {
    apply: function apply(coord) {
      var _ref5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, bandAware = _ref5.bandAware, position = _ref5.position;
      return (0, import_mapValues.default)(coord, function(value, label) {
        return scales[label].apply(value, {
          bandAware,
          position
        });
      });
    },
    isInRange: function isInRange(coord) {
      return (0, import_every.default)(coord, function(value, label) {
        return scales[label].isInRange(value);
      });
    }
  });
};

// node_modules/recharts/es6/cartesian/ReferenceLine.js
function ownKeys19(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread19(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys19(Object(source), true).forEach(function(key) {
        _defineProperty19(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys19(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty19(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray7(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray14(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray14(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray14(o, minLen);
}
function _arrayLikeToArray14(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _extends16() {
  _extends16 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends16.apply(this, arguments);
}
var renderLine = function renderLine2(option, props) {
  var line;
  if (/* @__PURE__ */ import_react24.default.isValidElement(option)) {
    line = /* @__PURE__ */ import_react24.default.cloneElement(option, props);
  } else if ((0, import_isFunction8.default)(option)) {
    line = option(props);
  } else {
    line = /* @__PURE__ */ import_react24.default.createElement("line", _extends16({}, props, {
      className: "recharts-reference-line-line"
    }));
  }
  return line;
};
var getEndPoints = function getEndPoints2(scales, isFixedX, isFixedY, isSegment, props) {
  var _props$viewBox = props.viewBox, x2 = _props$viewBox.x, y2 = _props$viewBox.y, width = _props$viewBox.width, height = _props$viewBox.height, position = props.position;
  if (isFixedY) {
    var yCoord = props.y, orientation = props.yAxis.orientation;
    var coord = scales.y.apply(yCoord, {
      position
    });
    if (ifOverflowMatches(props, "discard") && !scales.y.isInRange(coord)) {
      return null;
    }
    var points = [{
      x: x2 + width,
      y: coord
    }, {
      x: x2,
      y: coord
    }];
    return orientation === "left" ? points.reverse() : points;
  }
  if (isFixedX) {
    var xCoord = props.x, _orientation = props.xAxis.orientation;
    var _coord = scales.x.apply(xCoord, {
      position
    });
    if (ifOverflowMatches(props, "discard") && !scales.x.isInRange(_coord)) {
      return null;
    }
    var _points = [{
      x: _coord,
      y: y2 + height
    }, {
      x: _coord,
      y: y2
    }];
    return _orientation === "top" ? _points.reverse() : _points;
  }
  if (isSegment) {
    var segment = props.segment;
    var _points2 = segment.map(function(p) {
      return scales.apply(p, {
        position
      });
    });
    if (ifOverflowMatches(props, "discard") && (0, import_some.default)(_points2, function(p) {
      return !scales.isInRange(p);
    })) {
      return null;
    }
    return _points2;
  }
  return null;
};
function ReferenceLine(props) {
  var fixedX = props.x, fixedY = props.y, segment = props.segment, xAxis = props.xAxis, yAxis = props.yAxis, shape = props.shape, className = props.className, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
  warn3(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var isX = isNumOrStr(fixedX);
  var isY = isNumOrStr(fixedY);
  var isSegment = segment && segment.length === 2;
  var endPoints = getEndPoints(scales, isX, isY, isSegment, props);
  if (!endPoints) {
    return null;
  }
  var _endPoints = _slicedToArray7(endPoints, 2), _endPoints$ = _endPoints[0], x1 = _endPoints$.x, y1 = _endPoints$.y, _endPoints$2 = _endPoints[1], x2 = _endPoints$2.x, y2 = _endPoints$2.y;
  var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
  var lineProps = _objectSpread19(_objectSpread19({
    clipPath
  }, filterProps(props, true)), {}, {
    x1,
    y1,
    x2,
    y2
  });
  return /* @__PURE__ */ import_react24.default.createElement(Layer, {
    className: (0, import_classnames16.default)("recharts-reference-line", className)
  }, renderLine(shape, lineProps), Label.renderCallByParent(props, rectWithCoords({
    x1,
    y1,
    x2,
    y2
  })));
}
ReferenceLine.displayName = "ReferenceLine";
ReferenceLine.defaultProps = {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
};

// node_modules/recharts/es6/cartesian/ReferenceDot.js
var import_isFunction9 = __toESM(require_isFunction());
var import_react25 = __toESM(require_react());
var import_classnames17 = __toESM(require_classnames());
function _extends17() {
  _extends17 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends17.apply(this, arguments);
}
function ownKeys20(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread20(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys20(Object(source), true).forEach(function(key) {
        _defineProperty20(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys20(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty20(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getCoordinate = function getCoordinate2(props) {
  var x2 = props.x, y2 = props.y, xAxis = props.xAxis, yAxis = props.yAxis;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var result = scales.apply({
    x: x2,
    y: y2
  }, {
    bandAware: true
  });
  if (ifOverflowMatches(props, "discard") && !scales.isInRange(result)) {
    return null;
  }
  return result;
};
function ReferenceDot(props) {
  var x2 = props.x, y2 = props.y, r = props.r, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
  var isX = isNumOrStr(x2);
  var isY = isNumOrStr(y2);
  warn3(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  if (!isX || !isY) {
    return null;
  }
  var coordinate = getCoordinate(props);
  if (!coordinate) {
    return null;
  }
  var cx = coordinate.x, cy = coordinate.y;
  var shape = props.shape, className = props.className;
  var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
  var dotProps = _objectSpread20(_objectSpread20({
    clipPath
  }, filterProps(props, true)), {}, {
    cx,
    cy
  });
  return /* @__PURE__ */ import_react25.default.createElement(Layer, {
    className: (0, import_classnames17.default)("recharts-reference-dot", className)
  }, ReferenceDot.renderDot(shape, dotProps), Label.renderCallByParent(props, {
    x: cx - r,
    y: cy - r,
    width: 2 * r,
    height: 2 * r
  }));
}
ReferenceDot.displayName = "ReferenceDot";
ReferenceDot.defaultProps = {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
};
ReferenceDot.renderDot = function(option, props) {
  var dot;
  if (/* @__PURE__ */ import_react25.default.isValidElement(option)) {
    dot = /* @__PURE__ */ import_react25.default.cloneElement(option, props);
  } else if ((0, import_isFunction9.default)(option)) {
    dot = option(props);
  } else {
    dot = /* @__PURE__ */ import_react25.default.createElement(Dot, _extends17({}, props, {
      cx: props.cx,
      cy: props.cy,
      className: "recharts-reference-dot-dot"
    }));
  }
  return dot;
};

// node_modules/recharts/es6/cartesian/ReferenceArea.js
var import_isFunction10 = __toESM(require_isFunction());
var import_react26 = __toESM(require_react());
var import_classnames18 = __toESM(require_classnames());
function _extends18() {
  _extends18 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends18.apply(this, arguments);
}
function ownKeys21(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread21(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys21(Object(source), true).forEach(function(key) {
        _defineProperty21(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys21(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty21(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getRect = function getRect2(hasX1, hasX2, hasY1, hasY2, props) {
  var xValue1 = props.x1, xValue2 = props.x2, yValue1 = props.y1, yValue2 = props.y2, xAxis = props.xAxis, yAxis = props.yAxis;
  if (!xAxis || !yAxis)
    return null;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var p1 = {
    x: hasX1 ? scales.x.apply(xValue1, {
      position: "start"
    }) : scales.x.rangeMin,
    y: hasY1 ? scales.y.apply(yValue1, {
      position: "start"
    }) : scales.y.rangeMin
  };
  var p2 = {
    x: hasX2 ? scales.x.apply(xValue2, {
      position: "end"
    }) : scales.x.rangeMax,
    y: hasY2 ? scales.y.apply(yValue2, {
      position: "end"
    }) : scales.y.rangeMax
  };
  if (ifOverflowMatches(props, "discard") && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }
  return rectWithPoints(p1, p2);
};
function ReferenceArea(props) {
  var x1 = props.x1, x2 = props.x2, y1 = props.y1, y2 = props.y2, className = props.className, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
  warn3(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var hasX1 = isNumOrStr(x1);
  var hasX2 = isNumOrStr(x2);
  var hasY1 = isNumOrStr(y1);
  var hasY2 = isNumOrStr(y2);
  var shape = props.shape;
  if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
    return null;
  }
  var rect = getRect(hasX1, hasX2, hasY1, hasY2, props);
  if (!rect && !shape) {
    return null;
  }
  var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
  return /* @__PURE__ */ import_react26.default.createElement(Layer, {
    className: (0, import_classnames18.default)("recharts-reference-area", className)
  }, ReferenceArea.renderRect(shape, _objectSpread21(_objectSpread21({
    clipPath
  }, filterProps(props, true)), rect)), Label.renderCallByParent(props, rect));
}
ReferenceArea.displayName = "ReferenceArea";
ReferenceArea.defaultProps = {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
};
ReferenceArea.renderRect = function(option, props) {
  var rect;
  if (/* @__PURE__ */ import_react26.default.isValidElement(option)) {
    rect = /* @__PURE__ */ import_react26.default.cloneElement(option, props);
  } else if ((0, import_isFunction10.default)(option)) {
    rect = option(props);
  } else {
    rect = /* @__PURE__ */ import_react26.default.createElement(Rectangle, _extends18({}, props, {
      className: "recharts-reference-area-rect"
    }));
  }
  return rect;
};

// node_modules/recharts/es6/cartesian/CartesianAxis.js
var import_get4 = __toESM(require_get());
var import_isFunction11 = __toESM(require_isFunction());
var import_react27 = __toESM(require_react());
var import_classnames19 = __toESM(require_classnames());
function _typeof17(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof17 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof17 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof17(obj);
}
function _extends19() {
  _extends19 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends19.apply(this, arguments);
}
function ownKeys22(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys22(Object(source), true).forEach(function(key) {
        _defineProperty22(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys22(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty22(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties9(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose9(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose9(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck16(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties16(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass16(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties16(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties16(Constructor, staticProps);
  return Constructor;
}
function _inherits15(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf15(subClass, superClass);
}
function _setPrototypeOf15(o, p) {
  _setPrototypeOf15 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf15(o, p);
}
function _createSuper15(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct15();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf15(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf15(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn15(this, result);
  };
}
function _possibleConstructorReturn15(self2, call) {
  if (call && (_typeof17(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized15(self2);
}
function _assertThisInitialized15(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct15() {
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
function _getPrototypeOf15(o) {
  _getPrototypeOf15 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf15(o);
}
var CartesianAxis = /* @__PURE__ */ function(_Component) {
  _inherits15(CartesianAxis2, _Component);
  var _super = _createSuper15(CartesianAxis2);
  function CartesianAxis2(props) {
    var _this;
    _classCallCheck16(this, CartesianAxis2);
    _this = _super.call(this, props);
    _this.layerReference = void 0;
    _this.state = {
      fontSize: "",
      letterSpacing: ""
    };
    return _this;
  }
  _createClass16(CartesianAxis2, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, nextState) {
      var viewBox = _ref.viewBox, restProps = _objectWithoutProperties9(_ref, ["viewBox"]);
      var _this$props = this.props, viewBoxOld = _this$props.viewBox, restPropsOld = _objectWithoutProperties9(_this$props, ["viewBox"]);
      return !shallowEqual(viewBox, viewBoxOld) || !shallowEqual(restProps, restPropsOld) || !shallowEqual(nextState, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var htmlLayer = this.layerReference;
      if (!htmlLayer)
        return;
      var tick = htmlLayer.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      if (tick) {
        this.setState({
          fontSize: window.getComputedStyle(tick).fontSize,
          letterSpacing: window.getComputedStyle(tick).letterSpacing
        });
      }
    }
  }, {
    key: "getTickLineCoord",
    value: function getTickLineCoord(data) {
      var _this$props2 = this.props, x2 = _this$props2.x, y2 = _this$props2.y, width = _this$props2.width, height = _this$props2.height, orientation = _this$props2.orientation, tickSize = _this$props2.tickSize, mirror = _this$props2.mirror, tickMargin = _this$props2.tickMargin;
      var x1, x22, y1, y22, tx, ty;
      var sign2 = mirror ? -1 : 1;
      var finalTickSize = data.tickSize || tickSize;
      var tickCoord = isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;
      switch (orientation) {
        case "top":
          x1 = x22 = data.coordinate;
          y22 = y2 + +!mirror * height;
          y1 = y22 - sign2 * finalTickSize;
          ty = y1 - sign2 * tickMargin;
          tx = tickCoord;
          break;
        case "left":
          y1 = y22 = data.coordinate;
          x22 = x2 + +!mirror * width;
          x1 = x22 - sign2 * finalTickSize;
          tx = x1 - sign2 * tickMargin;
          ty = tickCoord;
          break;
        case "right":
          y1 = y22 = data.coordinate;
          x22 = x2 + +mirror * width;
          x1 = x22 + sign2 * finalTickSize;
          tx = x1 + sign2 * tickMargin;
          ty = tickCoord;
          break;
        default:
          x1 = x22 = data.coordinate;
          y22 = y2 + +mirror * height;
          y1 = y22 + sign2 * finalTickSize;
          ty = y1 + sign2 * tickMargin;
          tx = tickCoord;
          break;
      }
      return {
        line: {
          x1,
          y1,
          x2: x22,
          y2: y22
        },
        tick: {
          x: tx,
          y: ty
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var _this$props3 = this.props, orientation = _this$props3.orientation, mirror = _this$props3.mirror;
      var textAnchor;
      switch (orientation) {
        case "left":
          textAnchor = mirror ? "start" : "end";
          break;
        case "right":
          textAnchor = mirror ? "end" : "start";
          break;
        default:
          textAnchor = "middle";
          break;
      }
      return textAnchor;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function getTickVerticalAnchor() {
      var _this$props4 = this.props, orientation = _this$props4.orientation, mirror = _this$props4.mirror;
      var verticalAnchor = "end";
      switch (orientation) {
        case "left":
        case "right":
          verticalAnchor = "middle";
          break;
        case "top":
          verticalAnchor = mirror ? "start" : "end";
          break;
        default:
          verticalAnchor = mirror ? "end" : "start";
          break;
      }
      return verticalAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props5 = this.props, x2 = _this$props5.x, y2 = _this$props5.y, width = _this$props5.width, height = _this$props5.height, orientation = _this$props5.orientation, mirror = _this$props5.mirror, axisLine = _this$props5.axisLine;
      var props = _objectSpread22(_objectSpread22(_objectSpread22({}, filterProps(this.props)), filterProps(axisLine)), {}, {
        fill: "none"
      });
      if (orientation === "top" || orientation === "bottom") {
        var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
        props = _objectSpread22(_objectSpread22({}, props), {}, {
          x1: x2,
          y1: y2 + needHeight * height,
          x2: x2 + width,
          y2: y2 + needHeight * height
        });
      } else {
        var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
        props = _objectSpread22(_objectSpread22({}, props), {}, {
          x1: x2 + needWidth * width,
          y1: y2,
          x2: x2 + needWidth * width,
          y2: y2 + height
        });
      }
      return /* @__PURE__ */ import_react27.default.createElement("line", _extends19({}, props, {
        className: (0, import_classnames19.default)("recharts-cartesian-axis-line", (0, import_get4.default)(axisLine, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks(ticks, fontSize, letterSpacing) {
      var _this2 = this;
      var _this$props6 = this.props, tickLine = _this$props6.tickLine, stroke = _this$props6.stroke, tick = _this$props6.tick, tickFormatter = _this$props6.tickFormatter, unit2 = _this$props6.unit;
      var finalTicks = CartesianAxis2.getTicks(_objectSpread22(_objectSpread22({}, this.props), {}, {
        ticks
      }), fontSize, letterSpacing);
      var textAnchor = this.getTickTextAnchor();
      var verticalAnchor = this.getTickVerticalAnchor();
      var axisProps = filterProps(this.props);
      var customTickProps = filterProps(tick);
      var tickLineProps = _objectSpread22(_objectSpread22({}, axisProps), {}, {
        fill: "none"
      }, filterProps(tickLine));
      var items = finalTicks.map(function(entry, i) {
        var _this2$getTickLineCoo = _this2.getTickLineCoord(entry), lineCoord = _this2$getTickLineCoo.line, tickCoord = _this2$getTickLineCoo.tick;
        var tickProps = _objectSpread22(_objectSpread22(_objectSpread22(_objectSpread22({
          textAnchor,
          verticalAnchor
        }, axisProps), {}, {
          stroke: "none",
          fill: stroke
        }, customTickProps), tickCoord), {}, {
          index: i,
          payload: entry,
          visibleTicksCount: finalTicks.length,
          tickFormatter
        });
        return /* @__PURE__ */ import_react27.default.createElement(Layer, _extends19({
          className: "recharts-cartesian-axis-tick",
          key: "tick-".concat(i)
        }, adaptEventsOfChild(_this2.props, entry, i)), tickLine && /* @__PURE__ */ import_react27.default.createElement("line", _extends19({}, tickLineProps, lineCoord, {
          className: (0, import_classnames19.default)("recharts-cartesian-axis-tick-line", (0, import_get4.default)(tickLine, "className"))
        })), tick && CartesianAxis2.renderTickItem(tick, tickProps, "".concat((0, import_isFunction11.default)(tickFormatter) ? tickFormatter(entry.value, i) : entry.value).concat(unit2 || "")));
      });
      return /* @__PURE__ */ import_react27.default.createElement("g", {
        className: "recharts-cartesian-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props7 = this.props, axisLine = _this$props7.axisLine, width = _this$props7.width, height = _this$props7.height, ticksGenerator = _this$props7.ticksGenerator, className = _this$props7.className, hide = _this$props7.hide;
      if (hide) {
        return null;
      }
      var _this$props8 = this.props, ticks = _this$props8.ticks, noTicksProps = _objectWithoutProperties9(_this$props8, ["ticks"]);
      var finalTicks = ticks;
      if ((0, import_isFunction11.default)(ticksGenerator)) {
        finalTicks = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
      }
      if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
        return null;
      }
      return /* @__PURE__ */ import_react27.default.createElement(Layer, {
        className: (0, import_classnames19.default)("recharts-cartesian-axis", className),
        ref: function ref(_ref2) {
          _this3.layerReference = _ref2;
        }
      }, axisLine && this.renderAxisLine(), this.renderTicks(finalTicks, this.state.fontSize, this.state.letterSpacing), Label.renderCallByParent(this.props));
    }
  }], [{
    key: "getTicks",
    value: function getTicks(props, fontSize, letterSpacing) {
      var tick = props.tick, ticks = props.ticks, viewBox = props.viewBox, minTickGap = props.minTickGap, orientation = props.orientation, interval = props.interval, tickFormatter = props.tickFormatter, unit2 = props.unit;
      if (!ticks || !ticks.length || !tick) {
        return [];
      }
      if (isNumber(interval) || Global.isSsr) {
        return CartesianAxis2.getNumberIntervalTicks(ticks, typeof interval === "number" && isNumber(interval) ? interval : 0);
      }
      if (interval === "preserveStartEnd") {
        return CartesianAxis2.getTicksStart({
          ticks,
          tickFormatter,
          viewBox,
          orientation,
          minTickGap,
          unit: unit2,
          fontSize,
          letterSpacing
        }, true);
      }
      if (interval === "preserveStart") {
        return CartesianAxis2.getTicksStart({
          ticks,
          tickFormatter,
          viewBox,
          orientation,
          minTickGap,
          unit: unit2,
          fontSize,
          letterSpacing
        });
      }
      return CartesianAxis2.getTicksEnd({
        ticks,
        tickFormatter,
        viewBox,
        orientation,
        minTickGap,
        unit: unit2,
        fontSize,
        letterSpacing
      });
    }
  }, {
    key: "getNumberIntervalTicks",
    value: function getNumberIntervalTicks(ticks, interval) {
      return ticks.filter(function(entry, i) {
        return i % (interval + 1) === 0;
      });
    }
  }, {
    key: "getTicksStart",
    value: function getTicksStart(_ref3, preserveEnd) {
      var ticks = _ref3.ticks, tickFormatter = _ref3.tickFormatter, viewBox = _ref3.viewBox, orientation = _ref3.orientation, minTickGap = _ref3.minTickGap, unit2 = _ref3.unit, fontSize = _ref3.fontSize, letterSpacing = _ref3.letterSpacing;
      var x2 = viewBox.x, y2 = viewBox.y, width = viewBox.width, height = viewBox.height;
      var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
      var result = (ticks || []).slice();
      var unitSize = unit2 && sizeKey === "width" ? getStringSize(unit2, {
        fontSize,
        letterSpacing
      })[sizeKey] : 0;
      var len = result.length;
      var sign2 = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;
      var start, end;
      if (sign2 === 1) {
        start = sizeKey === "width" ? x2 : y2;
        end = sizeKey === "width" ? x2 + width : y2 + height;
      } else {
        start = sizeKey === "width" ? x2 + width : y2 + height;
        end = sizeKey === "width" ? x2 : y2;
      }
      if (preserveEnd) {
        var tail = ticks[len - 1];
        var tailContent = (0, import_isFunction11.default)(tickFormatter) ? tickFormatter(tail.value, len - 1) : tail.value;
        var tailSize = getStringSize(tailContent, {
          fontSize,
          letterSpacing
        })[sizeKey] + unitSize;
        var tailGap = sign2 * (tail.coordinate + sign2 * tailSize / 2 - end);
        result[len - 1] = tail = _objectSpread22(_objectSpread22({}, tail), {}, {
          tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign2 : tail.coordinate
        });
        var isTailShow = sign2 * (tail.tickCoord - sign2 * tailSize / 2 - start) >= 0 && sign2 * (tail.tickCoord + sign2 * tailSize / 2 - end) <= 0;
        if (isTailShow) {
          end = tail.tickCoord - sign2 * (tailSize / 2 + minTickGap);
          result[len - 1] = _objectSpread22(_objectSpread22({}, tail), {}, {
            isShow: true
          });
        }
      }
      var count = preserveEnd ? len - 1 : len;
      for (var i = 0; i < count; i++) {
        var entry = result[i];
        var content = (0, import_isFunction11.default)(tickFormatter) ? tickFormatter(entry.value, i) : entry.value;
        var size = getStringSize(content, {
          fontSize,
          letterSpacing
        })[sizeKey] + unitSize;
        if (i === 0) {
          var gap = sign2 * (entry.coordinate - sign2 * size / 2 - start);
          result[i] = entry = _objectSpread22(_objectSpread22({}, entry), {}, {
            tickCoord: gap < 0 ? entry.coordinate - gap * sign2 : entry.coordinate
          });
        } else {
          result[i] = entry = _objectSpread22(_objectSpread22({}, entry), {}, {
            tickCoord: entry.coordinate
          });
        }
        var isShow = sign2 * (entry.tickCoord - sign2 * size / 2 - start) >= 0 && sign2 * (entry.tickCoord + sign2 * size / 2 - end) <= 0;
        if (isShow) {
          start = entry.tickCoord + sign2 * (size / 2 + minTickGap);
          result[i] = _objectSpread22(_objectSpread22({}, entry), {}, {
            isShow: true
          });
        }
      }
      return result.filter(function(entry2) {
        return entry2.isShow;
      });
    }
  }, {
    key: "getTicksEnd",
    value: function getTicksEnd(_ref4) {
      var ticks = _ref4.ticks, tickFormatter = _ref4.tickFormatter, viewBox = _ref4.viewBox, orientation = _ref4.orientation, minTickGap = _ref4.minTickGap, unit2 = _ref4.unit, fontSize = _ref4.fontSize, letterSpacing = _ref4.letterSpacing;
      var x2 = viewBox.x, y2 = viewBox.y, width = viewBox.width, height = viewBox.height;
      var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
      var unitSize = unit2 && sizeKey === "width" ? getStringSize(unit2, {
        fontSize,
        letterSpacing
      })[sizeKey] : 0;
      var result = (ticks || []).slice();
      var len = result.length;
      var sign2 = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;
      var start, end;
      if (sign2 === 1) {
        start = sizeKey === "width" ? x2 : y2;
        end = sizeKey === "width" ? x2 + width : y2 + height;
      } else {
        start = sizeKey === "width" ? x2 + width : y2 + height;
        end = sizeKey === "width" ? x2 : y2;
      }
      for (var i = len - 1; i >= 0; i--) {
        var entry = result[i];
        var content = (0, import_isFunction11.default)(tickFormatter) ? tickFormatter(entry.value, len - i - 1) : entry.value;
        var size = getStringSize(content, {
          fontSize,
          letterSpacing
        })[sizeKey] + unitSize;
        if (i === len - 1) {
          var gap = sign2 * (entry.coordinate + sign2 * size / 2 - end);
          result[i] = entry = _objectSpread22(_objectSpread22({}, entry), {}, {
            tickCoord: gap > 0 ? entry.coordinate - gap * sign2 : entry.coordinate
          });
        } else {
          result[i] = entry = _objectSpread22(_objectSpread22({}, entry), {}, {
            tickCoord: entry.coordinate
          });
        }
        var isShow = sign2 * (entry.tickCoord - sign2 * size / 2 - start) >= 0 && sign2 * (entry.tickCoord + sign2 * size / 2 - end) <= 0;
        if (isShow) {
          end = entry.tickCoord - sign2 * (size / 2 + minTickGap);
          result[i] = _objectSpread22(_objectSpread22({}, entry), {}, {
            isShow: true
          });
        }
      }
      return result.filter(function(entry2) {
        return entry2.isShow;
      });
    }
  }, {
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if (/* @__PURE__ */ import_react27.default.isValidElement(option)) {
        tickItem = /* @__PURE__ */ import_react27.default.cloneElement(option, props);
      } else if ((0, import_isFunction11.default)(option)) {
        tickItem = option(props);
      } else {
        tickItem = /* @__PURE__ */ import_react27.default.createElement(Text, _extends19({}, props, {
          className: "recharts-cartesian-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
  return CartesianAxis2;
}(import_react27.Component);
CartesianAxis.displayName = "CartesianAxis";
CartesianAxis.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
};

// node_modules/recharts/es6/cartesian/Line.js
var import_isEqual2 = __toESM(require_isEqual());
var import_isFunction12 = __toESM(require_isFunction());
var import_isNil9 = __toESM(require_isNil());
var import_react29 = __toESM(require_react());
var import_classnames20 = __toESM(require_classnames());

// node_modules/recharts/es6/cartesian/ErrorBar.js
var import_react28 = __toESM(require_react());
function _extends20() {
  _extends20 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends20.apply(this, arguments);
}
function _slicedToArray8(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray15(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray15(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray15(o, minLen);
}
function _arrayLikeToArray15(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit8(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectWithoutProperties10(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose10(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose10(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ErrorBar(props) {
  var offset = props.offset, layout = props.layout, width = props.width, dataKey = props.dataKey, data = props.data, dataPointFormatter = props.dataPointFormatter, xAxis = props.xAxis, yAxis = props.yAxis, others = _objectWithoutProperties10(props, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]);
  var svgProps = filterProps(others);
  var errorBars = data.map(function(entry, i) {
    var _dataPointFormatter = dataPointFormatter(entry, dataKey), x2 = _dataPointFormatter.x, y2 = _dataPointFormatter.y, value = _dataPointFormatter.value, errorVal = _dataPointFormatter.errorVal;
    if (!errorVal) {
      return null;
    }
    var lineCoordinates = [];
    var lowBound, highBound;
    if (Array.isArray(errorVal)) {
      var _errorVal = _slicedToArray8(errorVal, 2);
      lowBound = _errorVal[0];
      highBound = _errorVal[1];
    } else {
      lowBound = highBound = errorVal;
    }
    if (layout === "vertical") {
      var scale = xAxis.scale;
      var yMid = y2 + offset;
      var yMin = yMid + width;
      var yMax = yMid - width;
      var xMin = scale(value - lowBound);
      var xMax = scale(value + highBound);
      lineCoordinates.push({
        x1: xMax,
        y1: yMin,
        x2: xMax,
        y2: yMax
      });
      lineCoordinates.push({
        x1: xMin,
        y1: yMid,
        x2: xMax,
        y2: yMid
      });
      lineCoordinates.push({
        x1: xMin,
        y1: yMin,
        x2: xMin,
        y2: yMax
      });
    } else if (layout === "horizontal") {
      var _scale = yAxis.scale;
      var xMid = x2 + offset;
      var _xMin = xMid - width;
      var _xMax = xMid + width;
      var _yMin = _scale(value - lowBound);
      var _yMax = _scale(value + highBound);
      lineCoordinates.push({
        x1: _xMin,
        y1: _yMax,
        x2: _xMax,
        y2: _yMax
      });
      lineCoordinates.push({
        x1: xMid,
        y1: _yMin,
        x2: xMid,
        y2: _yMax
      });
      lineCoordinates.push({
        x1: _xMin,
        y1: _yMin,
        x2: _xMax,
        y2: _yMin
      });
    }
    return /* @__PURE__ */ import_react28.default.createElement(Layer, _extends20({
      className: "recharts-errorBar",
      key: "bar-".concat(i)
    }, svgProps), lineCoordinates.map(function(coordinates, index) {
      return /* @__PURE__ */ import_react28.default.createElement("line", _extends20({}, coordinates, {
        key: "line-".concat(index)
      }));
    }));
  });
  return /* @__PURE__ */ import_react28.default.createElement(Layer, {
    className: "recharts-errorBars"
  }, errorBars);
}
ErrorBar.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
ErrorBar.displayName = "ErrorBar";

// node_modules/recharts/es6/cartesian/Line.js
function _typeof18(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof18 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof18 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof18(obj);
}
function _objectWithoutProperties11(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose11(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose11(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends21() {
  _extends21 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends21.apply(this, arguments);
}
function ownKeys23(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread23(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys23(Object(source), true).forEach(function(key) {
        _defineProperty23(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys23(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty23(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray10(arr) {
  return _arrayWithoutHoles10(arr) || _iterableToArray11(arr) || _unsupportedIterableToArray16(arr) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray16(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray16(o, minLen);
}
function _iterableToArray11(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles10(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray16(arr);
}
function _arrayLikeToArray16(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck17(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties17(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass17(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties17(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties17(Constructor, staticProps);
  return Constructor;
}
function _inherits16(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf16(subClass, superClass);
}
function _setPrototypeOf16(o, p) {
  _setPrototypeOf16 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf16(o, p);
}
function _createSuper16(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct16();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf16(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf16(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn16(this, result);
  };
}
function _possibleConstructorReturn16(self2, call) {
  if (call && (_typeof18(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized16(self2);
}
function _assertThisInitialized16(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct16() {
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
function _getPrototypeOf16(o) {
  _getPrototypeOf16 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf16(o);
}
var Line = /* @__PURE__ */ function(_PureComponent) {
  _inherits16(Line2, _PureComponent);
  var _super = _createSuper16(Line2);
  function Line2() {
    var _this;
    _classCallCheck17(this, Line2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.mainCurve = void 0;
    _this.state = {
      isAnimationFinished: true,
      totalLength: 0
    };
    _this.getStrokeDasharray = function(length, totalLength, lines) {
      var lineLength = lines.reduce(function(pre, next) {
        return pre + next;
      });
      var count = Math.floor(length / lineLength);
      var remainLength = length % lineLength;
      var restLength = totalLength - length;
      var remainLines = [];
      for (var i = 0, sum = 0; ; sum += lines[i], ++i) {
        if (sum + lines[i] > remainLength) {
          remainLines = [].concat(_toConsumableArray10(lines.slice(0, i)), [remainLength - sum]);
          break;
        }
      }
      var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
      return [].concat(_toConsumableArray10(Line2.repeat(lines, count)), _toConsumableArray10(remainLines), emptyLines).map(function(line) {
        return "".concat(line, "px");
      }).join(", ");
    };
    _this.id = uniqueId("recharts-line-");
    _this.pathRef = function(node) {
      _this.mainCurve = node;
    };
    _this.handleAnimationEnd = function() {
      _this.setState({
        isAnimationFinished: true
      });
      if (_this.props.onAnimationEnd) {
        _this.props.onAnimationEnd();
      }
    };
    _this.handleAnimationStart = function() {
      _this.setState({
        isAnimationFinished: false
      });
      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    };
    return _this;
  }
  _createClass17(Line2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.isAnimationActive) {
        return;
      }
      var totalLength = this.getTotalLength();
      this.setState({
        totalLength
      });
    }
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      var curveDom = this.mainCurve;
      try {
        return curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;
      } catch (err) {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar() {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, points = _this$props.points, xAxis = _this$props.xAxis, yAxis = _this$props.yAxis, layout = _this$props.layout, children = _this$props.children;
      var errorBarItems = findAllByType(children, ErrorBar.displayName);
      if (!errorBarItems) {
        return null;
      }
      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint.payload, dataKey)
        };
      }
      return errorBarItems.map(function(item, i) {
        return /* @__PURE__ */ import_react29.default.cloneElement(item, {
          key: "bar-".concat(i),
          data: points,
          xAxis,
          yAxis,
          layout,
          dataPointFormatter
        });
      });
    }
  }, {
    key: "renderDots",
    value: function renderDots(needClip, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props2 = this.props, dot = _this$props2.dot, points = _this$props2.points, dataKey = _this$props2.dataKey;
      var lineProps = filterProps(this.props);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread23(_objectSpread23(_objectSpread23({
          key: "dot-".concat(i),
          r: 3
        }, lineProps), customDotProps), {}, {
          value: entry.value,
          dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          payload: entry.payload
        });
        return Line2.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ import_react29.default.createElement(Layer, _extends21({
        className: "recharts-line-dots",
        key: "dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderCurveStatically",
    value: function renderCurveStatically(points, needClip, clipPathId, props) {
      var _this$props3 = this.props, type = _this$props3.type, layout = _this$props3.layout, connectNulls = _this$props3.connectNulls, ref = _this$props3.ref, others = _objectWithoutProperties11(_this$props3, ["type", "layout", "connectNulls", "ref"]);
      var curveProps = _objectSpread23(_objectSpread23(_objectSpread23({}, filterProps(others, true)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null,
        points
      }, props), {}, {
        type,
        layout,
        connectNulls
      });
      return /* @__PURE__ */ import_react29.default.createElement(Curve, _extends21({}, curveProps, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function renderCurveWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props4 = this.props, points = _this$props4.points, strokeDasharray = _this$props4.strokeDasharray, isAnimationActive = _this$props4.isAnimationActive, animationBegin = _this$props4.animationBegin, animationDuration = _this$props4.animationDuration, animationEasing = _this$props4.animationEasing, animationId = _this$props4.animationId, animateNewValues = _this$props4.animateNewValues, width = _this$props4.width, height = _this$props4.height;
      var _this$state = this.state, prevPoints = _this$state.prevPoints, totalLength = _this$state.totalLength;
      return /* @__PURE__ */ import_react29.default.createElement(es6_default, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepData = points.map(function(entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = interpolateNumber(prev.x, entry.x);
              var interpolatorY = interpolateNumber(prev.y, entry.y);
              return _objectSpread23(_objectSpread23({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }
            if (animateNewValues) {
              var _interpolatorX = interpolateNumber(width * 2, entry.x);
              var _interpolatorY = interpolateNumber(height / 2, entry.y);
              return _objectSpread23(_objectSpread23({}, entry), {}, {
                x: _interpolatorX(t),
                y: _interpolatorY(t)
              });
            }
            return _objectSpread23(_objectSpread23({}, entry), {}, {
              x: entry.x,
              y: entry.y
            });
          });
          return _this2.renderCurveStatically(stepData, needClip, clipPathId);
        }
        var interpolator = interpolateNumber(0, totalLength);
        var curLength = interpolator(t);
        var currentStrokeDasharray;
        if (strokeDasharray) {
          var lines = "".concat(strokeDasharray).split(/[,\s]+/gim).map(function(num) {
            return parseFloat(num);
          });
          currentStrokeDasharray = _this2.getStrokeDasharray(curLength, totalLength, lines);
        } else {
          currentStrokeDasharray = "".concat(curLength, "px ").concat(totalLength - curLength, "px");
        }
        return _this2.renderCurveStatically(points, needClip, clipPathId, {
          strokeDasharray: currentStrokeDasharray
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function renderCurve(needClip, clipPathId) {
      var _this$props5 = this.props, points = _this$props5.points, isAnimationActive = _this$props5.isAnimationActive;
      var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !(0, import_isEqual2.default)(prevPoints, points))) {
        return this.renderCurveWithAnimation(needClip, clipPathId);
      }
      return this.renderCurveStatically(points, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props, hide = _this$props6.hide, dot = _this$props6.dot, points = _this$props6.points, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, top = _this$props6.top, left = _this$props6.left, width = _this$props6.width, height = _this$props6.height, isAnimationActive = _this$props6.isAnimationActive, id = _this$props6.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = (0, import_classnames20.default)("recharts-line", className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
      var clipPathId = (0, import_isNil9.default)(id) ? this.id : id;
      return /* @__PURE__ */ import_react29.default.createElement(Layer, {
        className: layerClass
      }, needClip ? /* @__PURE__ */ import_react29.default.createElement("defs", null, /* @__PURE__ */ import_react29.default.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ import_react29.default.createElement("rect", {
        x: left,
        y: top,
        width,
        height
      }))) : null, !hasSinglePoint && this.renderCurve(needClip, clipPathId), this.renderErrorBar(), (hasSinglePoint || dot) && this.renderDots(needClip, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }, {
    key: "repeat",
    value: function repeat(lines, count) {
      var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray10(lines), [0]) : lines;
      var result = [];
      for (var i = 0; i < count; ++i) {
        result = [].concat(_toConsumableArray10(result), _toConsumableArray10(linesUnit));
      }
      return result;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;
      if (/* @__PURE__ */ import_react29.default.isValidElement(option)) {
        dotItem = /* @__PURE__ */ import_react29.default.cloneElement(option, props);
      } else if ((0, import_isFunction12.default)(option)) {
        dotItem = option(props);
      } else {
        var className = (0, import_classnames20.default)("recharts-line-dot", option ? option.className : "");
        dotItem = /* @__PURE__ */ import_react29.default.createElement(Dot, _extends21({}, props, {
          className
        }));
      }
      return dotItem;
    }
  }]);
  return Line2;
}(import_react29.PureComponent);
Line.displayName = "Line";
Line.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: false,
  activeDot: true,
  dot: true,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Global.isSsr,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: false
};
Line.getComposedData = function(_ref2) {
  var props = _ref2.props, xAxis = _ref2.xAxis, yAxis = _ref2.yAxis, xAxisTicks = _ref2.xAxisTicks, yAxisTicks = _ref2.yAxisTicks, dataKey = _ref2.dataKey, bandSize = _ref2.bandSize, displayedData = _ref2.displayedData, offset = _ref2.offset;
  var layout = props.layout;
  var points = displayedData.map(function(entry, index) {
    var value = getValueByDataKey(entry, dataKey);
    if (layout === "horizontal") {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          entry,
          index
        }),
        y: (0, import_isNil9.default)(value) ? null : yAxis.scale(value),
        value,
        payload: entry
      };
    }
    return {
      x: (0, import_isNil9.default)(value) ? null : xAxis.scale(value),
      y: getCateCoordinateOfLine({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        entry,
        index
      }),
      value,
      payload: entry
    };
  });
  return _objectSpread23({
    points,
    layout
  }, offset);
};

// node_modules/recharts/es6/cartesian/XAxis.js
var XAxis = function XAxis2() {
  return null;
};
XAxis.displayName = "XAxis";
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  domain: [0, "auto"],
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: false,
  scale: "auto",
  reversed: false,
  allowDuplicatedCategory: true
};

// node_modules/recharts/es6/cartesian/YAxis.js
var YAxis = function YAxis2() {
  return null;
};
YAxis.displayName = "YAxis";
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  domain: [0, "auto"],
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: false,
  scale: "auto",
  reversed: false
};

// node_modules/recharts/es6/chart/generateCategoricalChart.js
var import_every2 = __toESM(require_every());
var import_find = __toESM(require_find());
var import_isFunction13 = __toESM(require_isFunction());
var import_throttle = __toESM(require_throttle());
var import_sortBy3 = __toESM(require_sortBy());
var import_get5 = __toESM(require_get());
var import_range3 = __toESM(require_range());
var import_isNil10 = __toESM(require_isNil());
var import_isBoolean = __toESM(require_isBoolean());
var import_isArray7 = __toESM(require_isArray());
var import_react30 = __toESM(require_react());
var import_classnames21 = __toESM(require_classnames());

// node_modules/recharts/es6/util/DetectReferenceElementsDomain.js
var detectReferenceElementsDomain = function detectReferenceElementsDomain2(children, domain, axisId, axisType, specifiedTicks) {
  var lines = findAllByType(children, ReferenceLine.displayName);
  var dots = findAllByType(children, ReferenceDot.displayName);
  var elements = lines.concat(dots);
  var areas = findAllByType(children, ReferenceArea.displayName);
  var idKey = "".concat(axisType, "Id");
  var valueKey = axisType[0];
  var finalDomain = domain;
  if (elements.length) {
    finalDomain = elements.reduce(function(result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && isNumber(el.props[valueKey])) {
        var value = el.props[valueKey];
        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }
  if (areas.length) {
    var key1 = "".concat(valueKey, "1");
    var key2 = "".concat(valueKey, "2");
    finalDomain = areas.reduce(function(result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && isNumber(el.props[key1]) && isNumber(el.props[key2])) {
        var value1 = el.props[key1];
        var value2 = el.props[key2];
        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }
      return result;
    }, finalDomain);
  }
  if (specifiedTicks && specifiedTicks.length) {
    finalDomain = specifiedTicks.reduce(function(result, tick) {
      if (isNumber(tick)) {
        return [Math.min(result[0], tick), Math.max(result[1], tick)];
      }
      return result;
    }, finalDomain);
  }
  return finalDomain;
};

// node_modules/recharts/es6/util/Events.js
var import_eventemitter3 = __toESM(require_eventemitter3());
var eventCenter = new import_eventemitter3.default();
if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}
var SYNC_EVENT = "recharts.syncMouseEvents";

// node_modules/recharts/es6/chart/generateCategoricalChart.js
function _typeof19(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof19 = function _typeof20(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof19 = function _typeof20(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof19(obj);
}
function _slicedToArray9(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray17(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit9(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _extends22() {
  _extends22 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends22.apply(this, arguments);
}
function _objectWithoutProperties12(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose12(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose12(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck18(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties18(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass18(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties18(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties18(Constructor, staticProps);
  return Constructor;
}
function _inherits17(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf17(subClass, superClass);
}
function _setPrototypeOf17(o, p) {
  _setPrototypeOf17 = Object.setPrototypeOf || function _setPrototypeOf18(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf17(o, p);
}
function _createSuper17(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct17();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf17(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf17(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn17(this, result);
  };
}
function _possibleConstructorReturn17(self2, call) {
  if (call && (_typeof19(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized17(self2);
}
function _assertThisInitialized17(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct17() {
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
function _getPrototypeOf17(o) {
  _getPrototypeOf17 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf18(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf17(o);
}
function _toConsumableArray11(arr) {
  return _arrayWithoutHoles11(arr) || _iterableToArray12(arr) || _unsupportedIterableToArray17(arr) || _nonIterableSpread11();
}
function _nonIterableSpread11() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray17(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray17(o, minLen);
}
function _iterableToArray12(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles11(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray17(arr);
}
function _arrayLikeToArray17(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys24(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols2 = symbols2.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread24(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys24(Object(source), true).forEach(function(key) {
        _defineProperty24(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys24(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty24(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ORIENT_MAP = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
};
var originCoordinate = {
  x: 0,
  y: 0
};
var isFinit = Number.isFinite ? Number.isFinite : isFinite;
var defer = typeof requestAnimationFrame === "function" ? requestAnimationFrame : typeof setImmediate === "function" ? setImmediate : setTimeout;
var deferClear = typeof cancelAnimationFrame === "function" ? cancelAnimationFrame : typeof clearImmediate === "function" ? clearImmediate : clearTimeout;
var calculateTooltipPos = function calculateTooltipPos2(rangeObj, layout) {
  if (layout === "horizontal") {
    return rangeObj.x;
  }
  if (layout === "vertical") {
    return rangeObj.y;
  }
  if (layout === "centric") {
    return rangeObj.angle;
  }
  return rangeObj.radius;
};
var getActiveCoordinate = function getActiveCoordinate2(layout, tooltipTicks, activeIndex, rangeObj) {
  var entry = tooltipTicks.find(function(tick) {
    return tick && tick.index === activeIndex;
  });
  if (entry) {
    if (layout === "horizontal") {
      return {
        x: entry.coordinate,
        y: rangeObj.y
      };
    }
    if (layout === "vertical") {
      return {
        x: rangeObj.x,
        y: entry.coordinate
      };
    }
    if (layout === "centric") {
      var _angle = entry.coordinate;
      var _radius = rangeObj.radius;
      return _objectSpread24(_objectSpread24(_objectSpread24({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
        angle: _angle,
        radius: _radius
      });
    }
    var radius = entry.coordinate;
    var angle = rangeObj.angle;
    return _objectSpread24(_objectSpread24(_objectSpread24({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
      angle,
      radius
    });
  }
  return originCoordinate;
};
var getDisplayedData = function getDisplayedData2(data, _ref, item) {
  var graphicalItems = _ref.graphicalItems, dataStartIndex = _ref.dataStartIndex, dataEndIndex = _ref.dataEndIndex;
  var itemsData = (graphicalItems || []).reduce(function(result, child) {
    var itemData = child.props.data;
    if (itemData && itemData.length) {
      return [].concat(_toConsumableArray11(result), _toConsumableArray11(itemData));
    }
    return result;
  }, []);
  if (itemsData && itemsData.length > 0) {
    return itemsData;
  }
  if (item && item.props && item.props.data && item.props.data.length > 0) {
    return item.props.data;
  }
  if (data && data.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
    return data.slice(dataStartIndex, dataEndIndex + 1);
  }
  return [];
};
var getTooltipContent = function getTooltipContent2(state, chartData, activeIndex, activeLabel) {
  var graphicalItems = state.graphicalItems, tooltipAxis = state.tooltipAxis;
  var displayedData = getDisplayedData(chartData, state);
  if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
    return null;
  }
  return graphicalItems.reduce(function(result, child) {
    var hide = child.props.hide;
    if (hide) {
      return result;
    }
    var data = child.props.data;
    var payload;
    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
      var entries = data === void 0 ? displayedData : data;
      payload = findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
    } else {
      payload = data && data[activeIndex] || displayedData[activeIndex];
    }
    if (!payload) {
      return result;
    }
    return [].concat(_toConsumableArray11(result), [getTooltipItem(child, payload)]);
  }, []);
};
var getTooltipData = function getTooltipData2(state, chartData, layout, rangeObj) {
  var rangeData = rangeObj || {
    x: state.chartX,
    y: state.chartY
  };
  var pos = calculateTooltipPos(rangeData, layout);
  var ticks = state.orderedTooltipTicks, axis = state.tooltipAxis, tooltipTicks = state.tooltipTicks;
  var activeIndex = calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);
  if (activeIndex >= 0 && tooltipTicks) {
    var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
    var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
    var activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);
    return {
      activeTooltipIndex: activeIndex,
      activeLabel,
      activePayload,
      activeCoordinate
    };
  }
  return null;
};
var getAxisMapByAxes = function getAxisMapByAxes2(props, _ref2) {
  var axes = _ref2.axes, graphicalItems = _ref2.graphicalItems, axisType = _ref2.axisType, axisIdKey = _ref2.axisIdKey, stackGroups = _ref2.stackGroups, dataStartIndex = _ref2.dataStartIndex, dataEndIndex = _ref2.dataEndIndex;
  var layout = props.layout, children = props.children, stackOffset = props.stackOffset;
  var isCategorical = isCategoricalAxis(layout, axisType);
  var axisMap = axes.reduce(function(result, child) {
    var _child$props = child.props, type = _child$props.type, dataKey = _child$props.dataKey, allowDataOverflow = _child$props.allowDataOverflow, allowDuplicatedCategory = _child$props.allowDuplicatedCategory, scale = _child$props.scale, ticks = _child$props.ticks;
    var axisId = child.props[axisIdKey];
    var displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter(function(item) {
        return item.props[axisIdKey] === axisId;
      }),
      dataStartIndex,
      dataEndIndex
    });
    var len = displayedData.length;
    if (!result[axisId]) {
      var domain, duplicateDomain, categoricalDomain;
      if (dataKey) {
        domain = getDomainOfDataByKey(displayedData, dataKey, type);
        if (type === "category" && isCategorical) {
          var duplicate = hasDuplicate(domain);
          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain;
            domain = (0, import_range3.default)(0, len);
          } else if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function(finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(_toConsumableArray11(finalDomain), [entry]);
            }, []);
          }
        } else if (type === "category") {
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function(finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 || entry === "" || (0, import_isNil10.default)(entry) ? finalDomain : [].concat(_toConsumableArray11(finalDomain), [entry]);
            }, []);
          } else {
            domain = domain.filter(function(entry) {
              return entry !== "" && !(0, import_isNil10.default)(entry);
            });
          }
        } else if (type === "number") {
          var errorBarsDomain = parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function(item) {
            return item.props[axisIdKey] === axisId && !item.props.hide;
          }), dataKey, axisType, layout);
          if (errorBarsDomain) {
            domain = errorBarsDomain;
          }
        }
        if (isCategorical && (type === "number" || scale !== "auto")) {
          categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, "category");
        }
      } else if (isCategorical) {
        domain = (0, import_range3.default)(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === "number") {
        domain = stackOffset === "expand" ? [0, 1] : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
      } else {
        domain = getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function(item) {
          return item.props[axisIdKey] === axisId && !item.props.hide;
        }), type, layout, true);
      }
      if (type === "number") {
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);
        if (child.props.domain) {
          domain = parseSpecifiedDomain(child.props.domain, domain, allowDataOverflow);
        }
      } else if (type === "category" && child.props.domain) {
        var axisDomain = child.props.domain;
        var isDomainValidate = domain.every(function(entry) {
          return axisDomain.indexOf(entry) >= 0;
        });
        if (isDomainValidate) {
          domain = axisDomain;
        }
      }
      return _objectSpread24(_objectSpread24({}, result), {}, _defineProperty24({}, axisId, _objectSpread24(_objectSpread24({}, child.props), {}, {
        axisType,
        domain,
        categoricalDomain,
        duplicateDomain,
        originalDomain: child.props.domain,
        isCategorical,
        layout
      })));
    }
    return result;
  }, {});
  return axisMap;
};
var getAxisMapByItems = function getAxisMapByItems2(props, _ref3) {
  var graphicalItems = _ref3.graphicalItems, Axis = _ref3.Axis, axisType = _ref3.axisType, axisIdKey = _ref3.axisIdKey, stackGroups = _ref3.stackGroups, dataStartIndex = _ref3.dataStartIndex, dataEndIndex = _ref3.dataEndIndex;
  var layout = props.layout, children = props.children;
  var displayedData = getDisplayedData(props.data, {
    graphicalItems,
    dataStartIndex,
    dataEndIndex
  });
  var len = displayedData.length;
  var isCategorical = isCategoricalAxis(layout, axisType);
  var index = -1;
  var axisMap = graphicalItems.reduce(function(result, child) {
    var axisId = child.props[axisIdKey];
    if (!result[axisId]) {
      index++;
      var domain;
      if (isCategorical) {
        domain = (0, import_range3.default)(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
        domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      } else {
        domain = parseSpecifiedDomain(Axis.defaultProps.domain, getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function(item) {
          return item.props[axisIdKey] === axisId && !item.props.hide;
        }), "number", layout), Axis.defaultProps.allowDataOverflow);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      }
      return _objectSpread24(_objectSpread24({}, result), {}, _defineProperty24({}, axisId, _objectSpread24(_objectSpread24({
        axisType
      }, Axis.defaultProps), {}, {
        hide: true,
        orientation: (0, import_get5.default)(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
        domain,
        originalDomain: Axis.defaultProps.domain,
        isCategorical,
        layout
      })));
    }
    return result;
  }, {});
  return axisMap;
};
var getAxisMap = function getAxisMap2(props, _ref4) {
  var _ref4$axisType = _ref4.axisType, axisType = _ref4$axisType === void 0 ? "xAxis" : _ref4$axisType, AxisComp = _ref4.AxisComp, graphicalItems = _ref4.graphicalItems, stackGroups = _ref4.stackGroups, dataStartIndex = _ref4.dataStartIndex, dataEndIndex = _ref4.dataEndIndex;
  var children = props.children;
  var axisIdKey = "".concat(axisType, "Id");
  var axes = findAllByType(children, AxisComp);
  var axisMap = {};
  if (axes && axes.length) {
    axisMap = getAxisMapByAxes(props, {
      axes,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex
    });
  } else if (graphicalItems && graphicalItems.length) {
    axisMap = getAxisMapByItems(props, {
      Axis: AxisComp,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex
    });
  }
  return axisMap;
};
var tooltipTicksGenerator = function tooltipTicksGenerator2(axisMap) {
  var axis = getAnyElementOfObject(axisMap);
  var tooltipTicks = getTicksOfAxis(axis, false, true);
  return {
    tooltipTicks,
    orderedTooltipTicks: (0, import_sortBy3.default)(tooltipTicks, function(o) {
      return o.coordinate;
    }),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis, tooltipTicks)
  };
};
var createDefaultState = function createDefaultState2(props) {
  var children = props.children, defaultShowTooltip = props.defaultShowTooltip;
  var brushItem = findChildByType(children, Brush.displayName);
  var startIndex = brushItem && brushItem.props && brushItem.props.startIndex || 0;
  var endIndex = brushItem && brushItem.props && brushItem.props.endIndex || props.data && props.data.length - 1 || 0;
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: !(0, import_isNil10.default)(defaultShowTooltip) ? defaultShowTooltip : false
  };
};
var hasGraphicalBarItem = function hasGraphicalBarItem2(graphicalItems) {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }
  return graphicalItems.some(function(item) {
    var name = getDisplayName(item && item.type);
    return name && name.indexOf("Bar") >= 0;
  });
};
var getAxisNameByLayout = function getAxisNameByLayout2(layout) {
  if (layout === "horizontal") {
    return {
      numericAxisName: "yAxis",
      cateAxisName: "xAxis"
    };
  }
  if (layout === "vertical") {
    return {
      numericAxisName: "xAxis",
      cateAxisName: "yAxis"
    };
  }
  if (layout === "centric") {
    return {
      numericAxisName: "radiusAxis",
      cateAxisName: "angleAxis"
    };
  }
  return {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
};
var calculateOffset = function calculateOffset2(_ref5, prevLegendBBox) {
  var props = _ref5.props, graphicalItems = _ref5.graphicalItems, _ref5$xAxisMap = _ref5.xAxisMap, xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap, _ref5$yAxisMap = _ref5.yAxisMap, yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
  var width = props.width, height = props.height, children = props.children;
  var margin = props.margin || {};
  var brushItem = findChildByType(children, Brush.displayName);
  var legendItem = findChildByType(children, Legend.displayName);
  var offsetH = Object.keys(yAxisMap).reduce(function(result, id) {
    var entry = yAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return _objectSpread24(_objectSpread24({}, result), {}, _defineProperty24({}, orientation, result[orientation] + entry.width));
    }
    return result;
  }, {
    left: margin.left || 0,
    right: margin.right || 0
  });
  var offsetV = Object.keys(xAxisMap).reduce(function(result, id) {
    var entry = xAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return _objectSpread24(_objectSpread24({}, result), {}, _defineProperty24({}, orientation, (0, import_get5.default)(result, "".concat(orientation)) + entry.height));
    }
    return result;
  }, {
    top: margin.top || 0,
    bottom: margin.bottom || 0
  });
  var offset = _objectSpread24(_objectSpread24({}, offsetV), offsetH);
  var brushBottom = offset.bottom;
  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }
  if (legendItem && prevLegendBBox) {
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }
  return _objectSpread24(_objectSpread24({
    brushBottom
  }, offset), {}, {
    width: width - offset.left - offset.right,
    height: height - offset.top - offset.bottom
  });
};
var generateCategoricalChart = function generateCategoricalChart2(_ref6) {
  var _class, _temp;
  var chartName = _ref6.chartName, GraphicalChild = _ref6.GraphicalChild, _ref6$defaultTooltipE = _ref6.defaultTooltipEventType, defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? "axis" : _ref6$defaultTooltipE, _ref6$validateTooltip = _ref6.validateTooltipEventTypes, validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? ["axis"] : _ref6$validateTooltip, axisComponents = _ref6.axisComponents, legendContent = _ref6.legendContent, formatAxisMap3 = _ref6.formatAxisMap, defaultProps2 = _ref6.defaultProps;
  var getFormatItems = function getFormatItems2(props, currentState) {
    var graphicalItems = currentState.graphicalItems, stackGroups = currentState.stackGroups, offset = currentState.offset, updateId = currentState.updateId, dataStartIndex = currentState.dataStartIndex, dataEndIndex = currentState.dataEndIndex;
    var barSize = props.barSize, layout = props.layout, barGap = props.barGap, barCategoryGap = props.barCategoryGap, globalMaxBarSize = props.maxBarSize;
    var _getAxisNameByLayout = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout.numericAxisName, cateAxisName = _getAxisNameByLayout.cateAxisName;
    var hasBar = hasGraphicalBarItem(graphicalItems);
    var sizeList = hasBar && getBarSizeList({
      barSize,
      stackGroups
    });
    var formattedItems = [];
    graphicalItems.forEach(function(item, index) {
      var displayedData = getDisplayedData(props.data, {
        dataStartIndex,
        dataEndIndex
      }, item);
      var _item$props = item.props, dataKey = _item$props.dataKey, childMaxBarSize = _item$props.maxBarSize;
      var numericAxisId = item.props["".concat(numericAxisName, "Id")];
      var cateAxisId = item.props["".concat(cateAxisName, "Id")];
      var axisObj = axisComponents.reduce(function(result, entry) {
        var _objectSpread62;
        var axisMap = currentState["".concat(entry.axisType, "Map")];
        var id = item.props["".concat(entry.axisType, "Id")];
        var axis = axisMap && axisMap[id];
        return _objectSpread24(_objectSpread24({}, result), {}, (_objectSpread62 = {}, _defineProperty24(_objectSpread62, entry.axisType, axis), _defineProperty24(_objectSpread62, "".concat(entry.axisType, "Ticks"), getTicksOfAxis(axis)), _objectSpread62));
      }, {});
      var cateAxis = axisObj[cateAxisName];
      var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
      var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      var itemIsBar = getDisplayName(item.type).indexOf("Bar") >= 0;
      var bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      var barPosition = [];
      if (itemIsBar) {
        var _ref7, _getBandSizeOfAxis;
        var maxBarSize = (0, import_isNil10.default)(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        var barBandSize = (_ref7 = (_getBandSizeOfAxis = getBandSizeOfAxis(cateAxis, cateTicks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref7 !== void 0 ? _ref7 : 0;
        barPosition = getBarPosition({
          barGap,
          barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize
        });
        if (barBandSize !== bandSize) {
          barPosition = barPosition.map(function(pos) {
            return _objectSpread24(_objectSpread24({}, pos), {}, {
              position: _objectSpread24(_objectSpread24({}, pos.position), {}, {
                offset: pos.position.offset - barBandSize / 2
              })
            });
          });
        }
      }
      var composedFn = item && item.type && item.type.getComposedData;
      if (composedFn) {
        var _objectSpread72;
        formattedItems.push({
          props: _objectSpread24(_objectSpread24({}, composedFn(_objectSpread24(_objectSpread24({}, axisObj), {}, {
            displayedData,
            props,
            dataKey,
            item,
            bandSize,
            barPosition,
            offset,
            stackedData,
            layout,
            dataStartIndex,
            dataEndIndex
          }))), {}, (_objectSpread72 = {
            key: item.key || "item-".concat(index)
          }, _defineProperty24(_objectSpread72, numericAxisName, axisObj[numericAxisName]), _defineProperty24(_objectSpread72, cateAxisName, axisObj[cateAxisName]), _defineProperty24(_objectSpread72, "animationId", updateId), _objectSpread72)),
          childIndex: parseChildIndex(item, props.children),
          item
        });
      }
    });
    return formattedItems;
  };
  var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups2(_ref8, prevState) {
    var props = _ref8.props, dataStartIndex = _ref8.dataStartIndex, dataEndIndex = _ref8.dataEndIndex, updateId = _ref8.updateId;
    if (!validateWidthHeight({
      props
    })) {
      return null;
    }
    var children = props.children, layout = props.layout, stackOffset = props.stackOffset, data = props.data, reverseStackOrder = props.reverseStackOrder;
    var _getAxisNameByLayout2 = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout2.numericAxisName, cateAxisName = _getAxisNameByLayout2.cateAxisName;
    var graphicalItems = findAllByType(children, GraphicalChild);
    var stackGroups = getStackGroupsByAxisId(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
    var axisObj = axisComponents.reduce(function(result, entry) {
      var name = "".concat(entry.axisType, "Map");
      return _objectSpread24(_objectSpread24({}, result), {}, _defineProperty24({}, name, getAxisMap(props, _objectSpread24(_objectSpread24({}, entry), {}, {
        graphicalItems,
        stackGroups: entry.axisType === numericAxisName && stackGroups,
        dataStartIndex,
        dataEndIndex
      }))));
    }, {});
    var offset = calculateOffset(_objectSpread24(_objectSpread24({}, axisObj), {}, {
      props,
      graphicalItems
    }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
    Object.keys(axisObj).forEach(function(key) {
      axisObj[key] = formatAxisMap3(props, axisObj[key], offset, key.replace("Map", ""), chartName);
    });
    var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
    var ticksObj = tooltipTicksGenerator(cateAxisMap);
    var formattedGraphicalItems = getFormatItems(props, _objectSpread24(_objectSpread24({}, axisObj), {}, {
      dataStartIndex,
      dataEndIndex,
      updateId,
      graphicalItems,
      stackGroups,
      offset
    }));
    return _objectSpread24(_objectSpread24({
      formattedGraphicalItems,
      graphicalItems,
      offset,
      stackGroups
    }, ticksObj), axisObj);
  };
  return _temp = _class = /* @__PURE__ */ function(_Component) {
    _inherits17(CategoricalChartWrapper, _Component);
    var _super = _createSuper17(CategoricalChartWrapper);
    function CategoricalChartWrapper(_props) {
      var _this;
      _classCallCheck18(this, CategoricalChartWrapper);
      _this = _super.call(this, _props);
      _this.uniqueChartId = void 0;
      _this.clipPathId = void 0;
      _this.legendInstance = void 0;
      _this.deferId = void 0;
      _this.container = void 0;
      _this.clearDeferId = function() {
        if (!(0, import_isNil10.default)(_this.deferId) && deferClear) {
          deferClear(_this.deferId);
        }
        _this.deferId = null;
      };
      _this.handleLegendBBoxUpdate = function(box) {
        if (box) {
          var _this$state = _this.state, dataStartIndex = _this$state.dataStartIndex, dataEndIndex = _this$state.dataEndIndex, updateId = _this$state.updateId;
          _this.setState(_objectSpread24({
            legendBBox: box
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex,
            dataEndIndex,
            updateId
          }, _objectSpread24(_objectSpread24({}, _this.state), {}, {
            legendBBox: box
          }))));
        }
      };
      _this.handleReceiveSyncEvent = function(cId, chartId, data) {
        var syncId = _this.props.syncId;
        if (syncId === cId && chartId !== _this.uniqueChartId) {
          _this.clearDeferId();
          _this.deferId = defer && defer(_this.applySyncEvent.bind(_assertThisInitialized17(_this), data));
        }
      };
      _this.handleBrushChange = function(_ref9) {
        var startIndex = _ref9.startIndex, endIndex = _ref9.endIndex;
        if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
          var updateId = _this.state.updateId;
          _this.setState(function() {
            return _objectSpread24({
              dataStartIndex: startIndex,
              dataEndIndex: endIndex
            }, updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId
            }, _this.state));
          });
          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        }
      };
      _this.handleMouseEnter = function(e) {
        var onMouseEnter = _this.props.onMouseEnter;
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState = _objectSpread24(_objectSpread24({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState);
          _this.triggerSyncEvent(_nextState);
          if ((0, import_isFunction13.default)(onMouseEnter)) {
            onMouseEnter(_nextState, e);
          }
        }
      };
      _this.triggeredAfterMouseMove = function(e) {
        var onMouseMove = _this.props.onMouseMove;
        var mouse = _this.getMouseInfo(e);
        var nextState = mouse ? _objectSpread24(_objectSpread24({}, mouse), {}, {
          isTooltipActive: true
        }) : {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        if ((0, import_isFunction13.default)(onMouseMove)) {
          onMouseMove(nextState, e);
        }
      };
      _this.handleItemMouseEnter = function(el) {
        _this.setState(function() {
          return {
            isTooltipActive: true,
            activeItem: el,
            activePayload: el.tooltipPayload,
            activeCoordinate: el.tooltipPosition || {
              x: el.cx,
              y: el.cy
            }
          };
        });
      };
      _this.handleItemMouseLeave = function() {
        _this.setState(function() {
          return {
            isTooltipActive: false
          };
        });
      };
      _this.handleMouseMove = function(e) {
        if (e && (0, import_isFunction13.default)(e.persist)) {
          e.persist();
        }
        _this.triggeredAfterMouseMove(e);
      };
      _this.handleMouseLeave = function(e) {
        var onMouseLeave = _this.props.onMouseLeave;
        var nextState = {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        if ((0, import_isFunction13.default)(onMouseLeave)) {
          onMouseLeave(nextState, e);
        }
        _this.cancelThrottledTriggerAfterMouseMove();
      };
      _this.handleOuterEvent = function(e) {
        var eventName = getReactEventByType(e);
        var event = (0, import_get5.default)(_this.props, "".concat(eventName));
        if (eventName && (0, import_isFunction13.default)(event)) {
          var mouse;
          if (/.*touch.*/i.test(eventName)) {
            mouse = _this.getMouseInfo(e.changedTouches[0]);
          } else {
            mouse = _this.getMouseInfo(e);
          }
          var handler = event;
          handler(mouse, e);
        }
      };
      _this.handleClick = function(e) {
        var onClick = _this.props.onClick;
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState2 = _objectSpread24(_objectSpread24({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState2);
          _this.triggerSyncEvent(_nextState2);
          if ((0, import_isFunction13.default)(onClick)) {
            onClick(_nextState2, e);
          }
        }
      };
      _this.handleMouseDown = function(e) {
        var onMouseDown = _this.props.onMouseDown;
        if ((0, import_isFunction13.default)(onMouseDown)) {
          var _nextState3 = _this.getMouseInfo(e);
          onMouseDown(_nextState3, e);
        }
      };
      _this.handleMouseUp = function(e) {
        var onMouseUp = _this.props.onMouseUp;
        if ((0, import_isFunction13.default)(onMouseUp)) {
          var _nextState4 = _this.getMouseInfo(e);
          onMouseUp(_nextState4, e);
        }
      };
      _this.handleTouchMove = function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseMove(e.changedTouches[0]);
        }
      };
      _this.handleTouchStart = function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseDown(e.changedTouches[0]);
        }
      };
      _this.handleTouchEnd = function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseUp(e.changedTouches[0]);
        }
      };
      _this.verticalCoordinatesGenerator = function(_ref10) {
        var xAxis = _ref10.xAxis, width = _ref10.width, height = _ref10.height, offset = _ref10.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread24(_objectSpread24(_objectSpread24({}, CartesianAxis.defaultProps), xAxis), {}, {
          ticks: getTicksOfAxis(xAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width,
            height
          }
        })), offset.left, offset.left + offset.width);
      };
      _this.horizontalCoordinatesGenerator = function(_ref11) {
        var yAxis = _ref11.yAxis, width = _ref11.width, height = _ref11.height, offset = _ref11.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread24(_objectSpread24(_objectSpread24({}, CartesianAxis.defaultProps), yAxis), {}, {
          ticks: getTicksOfAxis(yAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width,
            height
          }
        })), offset.top, offset.top + offset.height);
      };
      _this.axesTicksGenerator = function(axis) {
        return getTicksOfAxis(axis, true);
      };
      _this.renderCursor = function(element) {
        var _this$state2 = _this.state, isTooltipActive = _this$state2.isTooltipActive, activeCoordinate = _this$state2.activeCoordinate, activePayload = _this$state2.activePayload, offset = _this$state2.offset, activeTooltipIndex = _this$state2.activeTooltipIndex;
        var tooltipEventType = _this.getTooltipEventType();
        if (!element || !element.props.cursor || !isTooltipActive || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") {
          return null;
        }
        var layout = _this.props.layout;
        var restProps;
        var cursorComp = Curve;
        if (chartName === "ScatterChart") {
          restProps = activeCoordinate;
          cursorComp = Cross;
        } else if (chartName === "BarChart") {
          restProps = _this.getCursorRectangle();
          cursorComp = Rectangle;
        } else if (layout === "radial") {
          var _this$getCursorPoints = _this.getCursorPoints(), cx = _this$getCursorPoints.cx, cy = _this$getCursorPoints.cy, radius = _this$getCursorPoints.radius, startAngle = _this$getCursorPoints.startAngle, endAngle = _this$getCursorPoints.endAngle;
          restProps = {
            cx,
            cy,
            startAngle,
            endAngle,
            innerRadius: radius,
            outerRadius: radius
          };
          cursorComp = Sector;
        } else {
          restProps = {
            points: _this.getCursorPoints()
          };
          cursorComp = Curve;
        }
        var key = element.key || "_recharts-cursor";
        var cursorProps = _objectSpread24(_objectSpread24(_objectSpread24(_objectSpread24({
          stroke: "#ccc",
          pointerEvents: "none"
        }, offset), restProps), filterProps(element.props.cursor)), {}, {
          payload: activePayload,
          payloadIndex: activeTooltipIndex,
          key,
          className: "recharts-tooltip-cursor"
        });
        return /* @__PURE__ */ (0, import_react30.isValidElement)(element.props.cursor) ? /* @__PURE__ */ (0, import_react30.cloneElement)(element.props.cursor, cursorProps) : /* @__PURE__ */ (0, import_react30.createElement)(cursorComp, cursorProps);
      };
      _this.renderPolarAxis = function(element, displayName, index) {
        var axisType = (0, import_get5.default)(element, "type.axisType");
        var axisMap = (0, import_get5.default)(_this.state, "".concat(axisType, "Map"));
        var axisOption = axisMap[element.props["".concat(axisType, "Id")]];
        return /* @__PURE__ */ (0, import_react30.cloneElement)(element, _objectSpread24(_objectSpread24({}, axisOption), {}, {
          className: axisType,
          key: element.key || "".concat(displayName, "-").concat(index),
          ticks: getTicksOfAxis(axisOption, true)
        }));
      };
      _this.renderXAxis = function(element, displayName, index) {
        var xAxisMap = _this.state.xAxisMap;
        var axisObj = xAxisMap[element.props.xAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };
      _this.renderYAxis = function(element, displayName, index) {
        var yAxisMap = _this.state.yAxisMap;
        var axisObj = yAxisMap[element.props.yAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };
      _this.renderGrid = function(element) {
        var _this$state3 = _this.state, xAxisMap = _this$state3.xAxisMap, yAxisMap = _this$state3.yAxisMap, offset = _this$state3.offset;
        var _this$props = _this.props, width = _this$props.width, height = _this$props.height;
        var xAxis = getAnyElementOfObject(xAxisMap);
        var yAxisWithFiniteDomain = (0, import_find.default)(yAxisMap, function(axis) {
          return (0, import_every2.default)(axis.domain, isFinit);
        });
        var yAxis = yAxisWithFiniteDomain || getAnyElementOfObject(yAxisMap);
        var props = element.props || {};
        return /* @__PURE__ */ (0, import_react30.cloneElement)(element, {
          key: element.key || "grid",
          x: isNumber(props.x) ? props.x : offset.left,
          y: isNumber(props.y) ? props.y : offset.top,
          width: isNumber(props.width) ? props.width : offset.width,
          height: isNumber(props.height) ? props.height : offset.height,
          xAxis,
          yAxis,
          offset,
          chartWidth: width,
          chartHeight: height,
          verticalCoordinatesGenerator: props.verticalCoordinatesGenerator || _this.verticalCoordinatesGenerator,
          horizontalCoordinatesGenerator: props.horizontalCoordinatesGenerator || _this.horizontalCoordinatesGenerator
        });
      };
      _this.renderPolarGrid = function(element) {
        var _element$props = element.props, radialLines = _element$props.radialLines, polarAngles = _element$props.polarAngles, polarRadius = _element$props.polarRadius;
        var _this$state4 = _this.state, radiusAxisMap = _this$state4.radiusAxisMap, angleAxisMap = _this$state4.angleAxisMap;
        var radiusAxis = getAnyElementOfObject(radiusAxisMap);
        var angleAxis = getAnyElementOfObject(angleAxisMap);
        var cx = angleAxis.cx, cy = angleAxis.cy, innerRadius = angleAxis.innerRadius, outerRadius = angleAxis.outerRadius;
        return /* @__PURE__ */ (0, import_react30.cloneElement)(element, {
          polarAngles: (0, import_isArray7.default)(polarAngles) ? polarAngles : getTicksOfAxis(angleAxis, true).map(function(entry) {
            return entry.coordinate;
          }),
          polarRadius: (0, import_isArray7.default)(polarRadius) ? polarRadius : getTicksOfAxis(radiusAxis, true).map(function(entry) {
            return entry.coordinate;
          }),
          cx,
          cy,
          innerRadius,
          outerRadius,
          key: element.key || "polar-grid",
          radialLines
        });
      };
      _this.renderLegend = function() {
        var formattedGraphicalItems = _this.state.formattedGraphicalItems;
        var _this$props2 = _this.props, children = _this$props2.children, width = _this$props2.width, height = _this$props2.height;
        var margin = _this.props.margin || {};
        var legendWidth = width - (margin.left || 0) - (margin.right || 0);
        var props = getLegendProps({
          children,
          formattedGraphicalItems,
          legendWidth,
          legendContent
        });
        if (!props) {
          return null;
        }
        var item = props.item, otherProps = _objectWithoutProperties12(props, ["item"]);
        return /* @__PURE__ */ (0, import_react30.cloneElement)(item, _objectSpread24(_objectSpread24({}, otherProps), {}, {
          chartWidth: width,
          chartHeight: height,
          margin,
          ref: function ref(legend) {
            _this.legendInstance = legend;
          },
          onBBoxUpdate: _this.handleLegendBBoxUpdate
        }));
      };
      _this.renderTooltip = function() {
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip.displayName);
        if (!tooltipItem) {
          return null;
        }
        var _this$state5 = _this.state, isTooltipActive = _this$state5.isTooltipActive, activeCoordinate = _this$state5.activeCoordinate, activePayload = _this$state5.activePayload, activeLabel = _this$state5.activeLabel, offset = _this$state5.offset;
        return /* @__PURE__ */ (0, import_react30.cloneElement)(tooltipItem, {
          viewBox: _objectSpread24(_objectSpread24({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }),
          active: isTooltipActive,
          label: activeLabel,
          payload: isTooltipActive ? activePayload : [],
          coordinate: activeCoordinate
        });
      };
      _this.renderBrush = function(element) {
        var _this$props3 = _this.props, margin = _this$props3.margin, data = _this$props3.data;
        var _this$state6 = _this.state, offset = _this$state6.offset, dataStartIndex = _this$state6.dataStartIndex, dataEndIndex = _this$state6.dataEndIndex, updateId = _this$state6.updateId;
        return /* @__PURE__ */ (0, import_react30.cloneElement)(element, {
          key: element.key || "_recharts-brush",
          onChange: combineEventHandlers(_this.handleBrushChange, null, element.props.onChange),
          data,
          x: isNumber(element.props.x) ? element.props.x : offset.left,
          y: isNumber(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
          width: isNumber(element.props.width) ? element.props.width : offset.width,
          startIndex: dataStartIndex,
          endIndex: dataEndIndex,
          updateId: "brush-".concat(updateId)
        });
      };
      _this.renderReferenceElement = function(element, displayName, index) {
        if (!element) {
          return null;
        }
        var _assertThisInitialize = _assertThisInitialized17(_this), clipPathId = _assertThisInitialize.clipPathId;
        var _this$state7 = _this.state, xAxisMap = _this$state7.xAxisMap, yAxisMap = _this$state7.yAxisMap, offset = _this$state7.offset;
        var _element$props2 = element.props, xAxisId = _element$props2.xAxisId, yAxisId = _element$props2.yAxisId;
        return /* @__PURE__ */ (0, import_react30.cloneElement)(element, {
          key: element.key || "".concat(displayName, "-").concat(index),
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          },
          clipPathId
        });
      };
      _this.renderActivePoints = function(_ref12) {
        var item = _ref12.item, activePoint = _ref12.activePoint, basePoint = _ref12.basePoint, childIndex = _ref12.childIndex, isRange = _ref12.isRange;
        var result = [];
        var key = item.props.key;
        var _item$item$props = item.item.props, activeDot = _item$item$props.activeDot, dataKey = _item$item$props.dataKey;
        var dotProps = _objectSpread24(_objectSpread24({
          index: childIndex,
          dataKey,
          cx: activePoint.x,
          cy: activePoint.y,
          r: 4,
          fill: getMainColorOfGraphicItem(item.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: activePoint.payload,
          value: activePoint.value,
          key: "".concat(key, "-activePoint-").concat(childIndex)
        }, filterProps(activeDot)), adaptEventHandlers(activeDot));
        result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps));
        if (basePoint) {
          result.push(CategoricalChartWrapper.renderActiveDot(activeDot, _objectSpread24(_objectSpread24({}, dotProps), {}, {
            cx: basePoint.x,
            cy: basePoint.y,
            key: "".concat(key, "-basePoint-").concat(childIndex)
          })));
        } else if (isRange) {
          result.push(null);
        }
        return result;
      };
      _this.renderGraphicChild = function(element, displayName, index) {
        var item = _this.filterFormatItem(element, displayName, index);
        if (!item) {
          return null;
        }
        var tooltipEventType = _this.getTooltipEventType();
        var _this$state8 = _this.state, isTooltipActive = _this$state8.isTooltipActive, tooltipAxis = _this$state8.tooltipAxis, activeTooltipIndex = _this$state8.activeTooltipIndex, activeLabel = _this$state8.activeLabel;
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip.displayName);
        var _item$props2 = item.props, points = _item$props2.points, isRange = _item$props2.isRange, baseLine = _item$props2.baseLine;
        var _item$item$props2 = item.item.props, activeDot = _item$item$props2.activeDot, hide = _item$item$props2.hide;
        var hasActive = !hide && isTooltipActive && tooltipItem && activeDot && activeTooltipIndex >= 0;
        var itemEvents = {};
        if (tooltipEventType !== "axis" && tooltipItem && tooltipItem.props.trigger === "click") {
          itemEvents = {
            onClick: combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onCLick)
          };
        } else if (tooltipEventType !== "axis") {
          itemEvents = {
            onMouseLeave: combineEventHandlers(_this.handleItemMouseLeave, null, element.props.onMouseLeave),
            onMouseEnter: combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onMouseEnter)
          };
        }
        var graphicalItem = /* @__PURE__ */ (0, import_react30.cloneElement)(element, _objectSpread24(_objectSpread24({}, item.props), itemEvents));
        function findWithPayload(entry) {
          return typeof tooltipAxis.dataKey === "function" ? tooltipAxis.dataKey(entry.payload) : null;
        }
        if (hasActive) {
          var activePoint, basePoint;
          if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            var specifiedKey = typeof tooltipAxis.dataKey === "function" ? findWithPayload : "payload.".concat(tooltipAxis.dataKey.toString());
            activePoint = findEntryInArray(points, specifiedKey, activeLabel);
            basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
          } else {
            activePoint = points[activeTooltipIndex];
            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
          }
          if (!(0, import_isNil10.default)(activePoint)) {
            return [graphicalItem].concat(_toConsumableArray11(_this.renderActivePoints({
              item,
              activePoint,
              basePoint,
              childIndex: activeTooltipIndex,
              isRange
            })));
          }
        }
        if (isRange) {
          return [graphicalItem, null, null];
        }
        return [graphicalItem, null];
      };
      _this.renderCustomized = function(element, displayName, index) {
        return /* @__PURE__ */ (0, import_react30.cloneElement)(element, _objectSpread24(_objectSpread24({
          key: "recharts-customized-".concat(index)
        }, _this.props), _this.state));
      };
      _this.uniqueChartId = (0, import_isNil10.default)(_props.id) ? uniqueId("recharts") : _props.id;
      _this.clipPathId = "".concat(_this.uniqueChartId, "-clip");
      if (_props.throttleDelay) {
        _this.triggeredAfterMouseMove = (0, import_throttle.default)(_this.triggeredAfterMouseMove, _props.throttleDelay);
      }
      _this.state = {};
      return _this;
    }
    _createClass18(CategoricalChartWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!(0, import_isNil10.default)(this.props.syncId)) {
          this.addListener();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if ((0, import_isNil10.default)(prevProps.syncId) && !(0, import_isNil10.default)(this.props.syncId)) {
          this.addListener();
        }
        if (!(0, import_isNil10.default)(prevProps.syncId) && (0, import_isNil10.default)(this.props.syncId)) {
          this.removeListener();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDeferId();
        if (!(0, import_isNil10.default)(this.props.syncId)) {
          this.removeListener();
        }
        this.cancelThrottledTriggerAfterMouseMove();
      }
    }, {
      key: "cancelThrottledTriggerAfterMouseMove",
      value: function cancelThrottledTriggerAfterMouseMove() {
        if (typeof this.triggeredAfterMouseMove.cancel === "function") {
          this.triggeredAfterMouseMove.cancel();
        }
      }
    }, {
      key: "getTooltipEventType",
      value: function getTooltipEventType() {
        var tooltipItem = findChildByType(this.props.children, Tooltip.displayName);
        if (tooltipItem && (0, import_isBoolean.default)(tooltipItem.props.shared)) {
          var eventType = tooltipItem.props.shared ? "axis" : "item";
          return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
        }
        return defaultTooltipEventType;
      }
    }, {
      key: "getMouseInfo",
      value: function getMouseInfo(event) {
        if (!this.container) {
          return null;
        }
        var containerOffset = getOffset(this.container);
        var e = calculateChartCoordinate(event, containerOffset);
        var rangeObj = this.inRange(e.chartX, e.chartY);
        if (!rangeObj) {
          return null;
        }
        var _this$state9 = this.state, xAxisMap = _this$state9.xAxisMap, yAxisMap = _this$state9.yAxisMap;
        var tooltipEventType = this.getTooltipEventType();
        if (tooltipEventType !== "axis" && xAxisMap && yAxisMap) {
          var xScale = getAnyElementOfObject(xAxisMap).scale;
          var yScale = getAnyElementOfObject(yAxisMap).scale;
          var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
          var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
          return _objectSpread24(_objectSpread24({}, e), {}, {
            xValue,
            yValue
          });
        }
        var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);
        if (toolTipData) {
          return _objectSpread24(_objectSpread24({}, e), toolTipData);
        }
        return null;
      }
    }, {
      key: "getCursorRectangle",
      value: function getCursorRectangle() {
        var layout = this.props.layout;
        var _this$state10 = this.state, activeCoordinate = _this$state10.activeCoordinate, offset = _this$state10.offset, tooltipAxisBandSize = _this$state10.tooltipAxisBandSize;
        var halfSize = tooltipAxisBandSize / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + 0.5,
          y: layout === "horizontal" ? offset.top + 0.5 : activeCoordinate.y - halfSize,
          width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
          height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
        };
      }
    }, {
      key: "getCursorPoints",
      value: function getCursorPoints() {
        var layout = this.props.layout;
        var _this$state11 = this.state, activeCoordinate = _this$state11.activeCoordinate, offset = _this$state11.offset;
        var x1, y1, x2, y2;
        if (layout === "horizontal") {
          x1 = activeCoordinate.x;
          x2 = x1;
          y1 = offset.top;
          y2 = offset.top + offset.height;
        } else if (layout === "vertical") {
          y1 = activeCoordinate.y;
          y2 = y1;
          x1 = offset.left;
          x2 = offset.left + offset.width;
        } else if (!(0, import_isNil10.default)(activeCoordinate.cx) || !(0, import_isNil10.default)(activeCoordinate.cy)) {
          if (layout === "centric") {
            var cx = activeCoordinate.cx, cy = activeCoordinate.cy, innerRadius = activeCoordinate.innerRadius, outerRadius = activeCoordinate.outerRadius, angle = activeCoordinate.angle;
            var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
            var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
            x1 = innerPoint.x;
            y1 = innerPoint.y;
            x2 = outerPoint.x;
            y2 = outerPoint.y;
          } else {
            var _cx = activeCoordinate.cx, _cy = activeCoordinate.cy, radius = activeCoordinate.radius, startAngle = activeCoordinate.startAngle, endAngle = activeCoordinate.endAngle;
            var startPoint = polarToCartesian(_cx, _cy, radius, startAngle);
            var endPoint = polarToCartesian(_cx, _cy, radius, endAngle);
            return {
              points: [startPoint, endPoint],
              cx: _cx,
              cy: _cy,
              radius,
              startAngle,
              endAngle
            };
          }
        }
        return [{
          x: x1,
          y: y1
        }, {
          x: x2,
          y: y2
        }];
      }
    }, {
      key: "inRange",
      value: function inRange(x2, y2) {
        var layout = this.props.layout;
        if (layout === "horizontal" || layout === "vertical") {
          var offset = this.state.offset;
          var isInRange = x2 >= offset.left && x2 <= offset.left + offset.width && y2 >= offset.top && y2 <= offset.top + offset.height;
          return isInRange ? {
            x: x2,
            y: y2
          } : null;
        }
        var _this$state12 = this.state, angleAxisMap = _this$state12.angleAxisMap, radiusAxisMap = _this$state12.radiusAxisMap;
        if (angleAxisMap && radiusAxisMap) {
          var angleAxis = getAnyElementOfObject(angleAxisMap);
          return inRangeOfSector({
            x: x2,
            y: y2
          }, angleAxis);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function parseEventsOfWrapper() {
        var children = this.props.children;
        var tooltipEventType = this.getTooltipEventType();
        var tooltipItem = findChildByType(children, Tooltip.displayName);
        var tooltipEvents = {};
        if (tooltipItem && tooltipEventType === "axis") {
          if (tooltipItem.props.trigger === "click") {
            tooltipEvents = {
              onClick: this.handleClick
            };
          } else {
            tooltipEvents = {
              onMouseEnter: this.handleMouseEnter,
              onMouseMove: this.handleMouseMove,
              onMouseLeave: this.handleMouseLeave,
              onTouchMove: this.handleTouchMove,
              onTouchStart: this.handleTouchStart,
              onTouchEnd: this.handleTouchEnd
            };
          }
        }
        var outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);
        return _objectSpread24(_objectSpread24({}, outerEvents), tooltipEvents);
      }
    }, {
      key: "addListener",
      value: function addListener() {
        eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);
        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners + 1);
        }
      }
    }, {
      key: "removeListener",
      value: function removeListener() {
        eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);
        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners - 1);
        }
      }
    }, {
      key: "triggerSyncEvent",
      value: function triggerSyncEvent(data) {
        var syncId = this.props.syncId;
        if (!(0, import_isNil10.default)(syncId)) {
          eventCenter.emit(SYNC_EVENT, syncId, this.uniqueChartId, data);
        }
      }
    }, {
      key: "applySyncEvent",
      value: function applySyncEvent(data) {
        var _this$props4 = this.props, layout = _this$props4.layout, syncMethod = _this$props4.syncMethod;
        var updateId = this.state.updateId;
        var dataStartIndex = data.dataStartIndex, dataEndIndex = data.dataEndIndex;
        if (!(0, import_isNil10.default)(data.dataStartIndex) || !(0, import_isNil10.default)(data.dataEndIndex)) {
          this.setState(_objectSpread24({
            dataStartIndex,
            dataEndIndex
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: this.props,
            dataStartIndex,
            dataEndIndex,
            updateId
          }, this.state)));
        } else if (!(0, import_isNil10.default)(data.activeTooltipIndex)) {
          var chartX = data.chartX, chartY = data.chartY;
          var activeTooltipIndex = data.activeTooltipIndex;
          var _this$state13 = this.state, offset = _this$state13.offset, tooltipTicks = _this$state13.tooltipTicks;
          if (!offset) {
            return;
          }
          if (typeof syncMethod === "function") {
            activeTooltipIndex = syncMethod(tooltipTicks, data);
          } else if (syncMethod === "value") {
            activeTooltipIndex = -1;
            for (var i = 0; i < tooltipTicks.length; i++) {
              if (tooltipTicks[i].value === data.activeLabel) {
                activeTooltipIndex = i;
                break;
              }
            }
          }
          var viewBox = _objectSpread24(_objectSpread24({}, offset), {}, {
            x: offset.left,
            y: offset.top
          });
          var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
          var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
          var activePayload = getTooltipContent(this.state, this.props.data, activeTooltipIndex);
          var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
            x: layout === "horizontal" ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
            y: layout === "horizontal" ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
          } : originCoordinate;
          this.setState(_objectSpread24(_objectSpread24({}, data), {}, {
            activeLabel,
            activeCoordinate,
            activePayload,
            activeTooltipIndex
          }));
        } else {
          this.setState(data);
        }
      }
    }, {
      key: "filterFormatItem",
      value: function filterFormatItem(item, displayName, childIndex) {
        var formattedGraphicalItems = this.state.formattedGraphicalItems;
        for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
          var entry = formattedGraphicalItems[i];
          if (entry.item === item || entry.props.key === item.key || displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex) {
            return entry;
          }
        }
        return null;
      }
    }, {
      key: "renderAxis",
      value: function renderAxis(axisOptions, element, displayName, index) {
        var _this$props5 = this.props, width = _this$props5.width, height = _this$props5.height;
        return /* @__PURE__ */ import_react30.default.createElement(CartesianAxis, _extends22({}, axisOptions, {
          className: "recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType),
          key: element.key || "".concat(displayName, "-").concat(index),
          viewBox: {
            x: 0,
            y: 0,
            width,
            height
          },
          ticksGenerator: this.axesTicksGenerator
        }));
      }
    }, {
      key: "renderClipPath",
      value: function renderClipPath() {
        var clipPathId = this.clipPathId;
        var _this$state$offset = this.state.offset, left = _this$state$offset.left, top = _this$state$offset.top, height = _this$state$offset.height, width = _this$state$offset.width;
        return /* @__PURE__ */ import_react30.default.createElement("defs", null, /* @__PURE__ */ import_react30.default.createElement("clipPath", {
          id: clipPathId
        }, /* @__PURE__ */ import_react30.default.createElement("rect", {
          x: left,
          y: top,
          height,
          width
        })));
      }
    }, {
      key: "getXScales",
      value: function getXScales() {
        var xAxisMap = this.state.xAxisMap;
        return xAxisMap ? Object.entries(xAxisMap).reduce(function(res, _ref13) {
          var _ref14 = _slicedToArray9(_ref13, 2), axisId = _ref14[0], axisProps = _ref14[1];
          return _objectSpread24(_objectSpread24({}, res), {}, _defineProperty24({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function getYScales() {
        var yAxisMap = this.state.yAxisMap;
        return yAxisMap ? Object.entries(yAxisMap).reduce(function(res, _ref15) {
          var _ref16 = _slicedToArray9(_ref15, 2), axisId = _ref16[0], axisProps = _ref16[1];
          return _objectSpread24(_objectSpread24({}, res), {}, _defineProperty24({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function getXScaleByAxisId(axisId) {
        var _this$state$xAxisMap, _this$state$xAxisMap$;
        return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 ? void 0 : (_this$state$xAxisMap$ = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap$ === void 0 ? void 0 : _this$state$xAxisMap$.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function getYScaleByAxisId(axisId) {
        var _this$state$yAxisMap, _this$state$yAxisMap$;
        return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 ? void 0 : (_this$state$yAxisMap$ = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap$ === void 0 ? void 0 : _this$state$yAxisMap$.scale;
      }
    }, {
      key: "getItemByXY",
      value: function getItemByXY(chartXY) {
        var formattedGraphicalItems = this.state.formattedGraphicalItems;
        if (formattedGraphicalItems && formattedGraphicalItems.length) {
          for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
            var graphicalItem = formattedGraphicalItems[i];
            var props = graphicalItem.props, item = graphicalItem.item;
            var itemDisplayName = getDisplayName(item.type);
            if (itemDisplayName === "Bar") {
              var activeBarItem = (props.data || []).find(function(entry) {
                return isInRectangle(chartXY, entry);
              });
              if (activeBarItem) {
                return {
                  graphicalItem,
                  payload: activeBarItem
                };
              }
            } else if (itemDisplayName === "RadialBar") {
              var _activeBarItem = (props.data || []).find(function(entry) {
                return inRangeOfSector(chartXY, entry);
              });
              if (_activeBarItem) {
                return {
                  graphicalItem,
                  payload: _activeBarItem
                };
              }
            }
          }
        }
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        if (!validateWidthHeight(this)) {
          return null;
        }
        var _this$props6 = this.props, children = _this$props6.children, className = _this$props6.className, width = _this$props6.width, height = _this$props6.height, style = _this$props6.style, compact = _this$props6.compact, title = _this$props6.title, desc = _this$props6.desc, others = _objectWithoutProperties12(_this$props6, ["children", "className", "width", "height", "style", "compact", "title", "desc"]);
        var attrs = filterProps(others);
        var map3 = {
          CartesianGrid: {
            handler: this.renderGrid,
            once: true
          },
          ReferenceArea: {
            handler: this.renderReferenceElement
          },
          ReferenceLine: {
            handler: this.renderReferenceElement
          },
          ReferenceDot: {
            handler: this.renderReferenceElement
          },
          XAxis: {
            handler: this.renderXAxis
          },
          YAxis: {
            handler: this.renderYAxis
          },
          Brush: {
            handler: this.renderBrush,
            once: true
          },
          Bar: {
            handler: this.renderGraphicChild
          },
          Line: {
            handler: this.renderGraphicChild
          },
          Area: {
            handler: this.renderGraphicChild
          },
          Radar: {
            handler: this.renderGraphicChild
          },
          RadialBar: {
            handler: this.renderGraphicChild
          },
          Scatter: {
            handler: this.renderGraphicChild
          },
          Pie: {
            handler: this.renderGraphicChild
          },
          Funnel: {
            handler: this.renderGraphicChild
          },
          Tooltip: {
            handler: this.renderCursor,
            once: true
          },
          PolarGrid: {
            handler: this.renderPolarGrid,
            once: true
          },
          PolarAngleAxis: {
            handler: this.renderPolarAxis
          },
          PolarRadiusAxis: {
            handler: this.renderPolarAxis
          },
          Customized: {
            handler: this.renderCustomized
          }
        };
        if (compact) {
          return /* @__PURE__ */ import_react30.default.createElement(Surface, _extends22({}, attrs, {
            width,
            height,
            title,
            desc
          }), this.renderClipPath(), renderByOrder(children, map3));
        }
        var events = this.parseEventsOfWrapper();
        return /* @__PURE__ */ import_react30.default.createElement("div", _extends22({
          className: (0, import_classnames21.default)("recharts-wrapper", className),
          style: _objectSpread24({
            position: "relative",
            cursor: "default",
            width,
            height
          }, style)
        }, events, {
          ref: function ref(node) {
            _this2.container = node;
          }
        }), /* @__PURE__ */ import_react30.default.createElement(Surface, _extends22({}, attrs, {
          width,
          height,
          title,
          desc
        }), this.renderClipPath(), renderByOrder(children, map3)), this.renderLegend(), this.renderTooltip());
      }
    }]);
    return CategoricalChartWrapper;
  }(import_react30.Component), _class.displayName = chartName, _class.defaultProps = _objectSpread24({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false,
    syncMethod: "index"
  }, defaultProps2), _class.getDerivedStateFromProps = function(nextProps, prevState) {
    var data = nextProps.data, children = nextProps.children, width = nextProps.width, height = nextProps.height, layout = nextProps.layout, stackOffset = nextProps.stackOffset, margin = nextProps.margin;
    if ((0, import_isNil10.default)(prevState.updateId)) {
      var defaultState = createDefaultState(nextProps);
      return _objectSpread24(_objectSpread24(_objectSpread24({}, defaultState), {}, {
        updateId: 0
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread24(_objectSpread24({
        props: nextProps
      }, defaultState), {}, {
        updateId: 0
      }), prevState)), {}, {
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !shallowEqual(margin, prevState.prevMargin)) {
      var _defaultState = createDefaultState(nextProps);
      var keepFromPrevState = {
        chartX: prevState.chartX,
        chartY: prevState.chartY,
        isTooltipActive: prevState.isTooltipActive
      };
      var updatesToState = _objectSpread24(_objectSpread24({}, getTooltipData(prevState, data, layout)), {}, {
        updateId: prevState.updateId + 1
      });
      var newState = _objectSpread24(_objectSpread24(_objectSpread24({}, _defaultState), keepFromPrevState), updatesToState);
      return _objectSpread24(_objectSpread24(_objectSpread24({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread24({
        props: nextProps
      }, newState), prevState)), {}, {
        prevData: data,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (!isChildrenEqual(children, prevState.prevChildren)) {
      var hasGlobalData = !(0, import_isNil10.default)(data);
      var newUpdateId = hasGlobalData ? prevState.updateId : prevState.updateId + 1;
      return _objectSpread24(_objectSpread24({
        updateId: newUpdateId
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread24(_objectSpread24({
        props: nextProps
      }, prevState), {}, {
        updateId: newUpdateId
      }), prevState)), {}, {
        prevChildren: children
      });
    }
    return null;
  }, _class.renderActiveDot = function(option, props) {
    var dot;
    if (/* @__PURE__ */ (0, import_react30.isValidElement)(option)) {
      dot = /* @__PURE__ */ (0, import_react30.cloneElement)(option, props);
    } else if ((0, import_isFunction13.default)(option)) {
      dot = option(props);
    } else {
      dot = /* @__PURE__ */ import_react30.default.createElement(Dot, props);
    }
    return /* @__PURE__ */ import_react30.default.createElement(Layer, {
      className: "recharts-active-dot",
      key: props.key
    }, dot);
  }, _temp;
};

// node_modules/recharts/es6/chart/LineChart.js
var LineChart = generateCategoricalChart({
  chartName: "LineChart",
  GraphicalChild: Line,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});

// app/components/dashboard/DashboardDemo.tsx
var import_react32 = __toESM(require_react());

// app/core/ui/Tile.tsx
var import_react31 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Tile = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-3 rounded-2xl border border-gray-100 bg-white p-5 dark:border-black-400 dark:bg-black-500",
    children
  }, void 0, false, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};
function TileHeader(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex",
    children: props.children
  }, void 0, false, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
function TileHeading(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
    type: 5,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "font-normal font-medium text-gray-600 dark:text-gray-400",
      children: props.children
    }, void 0, false, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function TileBody(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-5",
    children: props.children
  }, void 0, false, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
function TileFigure(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "text-3xl font-bold",
    children: props.children
  }, void 0, false, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
function TileTrend(props) {
  const Icon = (0, import_react31.useMemo)(() => {
    switch (props.trend) {
      case "up":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowSmallUpIcon_default, {
          className: "h-4 text-green-500"
        }, void 0, false, {
          fileName: "app/core/ui/Tile.tsx",
          lineNumber: 63,
          columnNumber: 16
        }, this);
      case "down":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowSmallDownIcon_default, {
          className: "h-4 text-red-500"
        }, void 0, false, {
          fileName: "app/core/ui/Tile.tsx",
          lineNumber: 65,
          columnNumber: 16
        }, this);
      case "stale":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars2Icon_default, {
          className: "h-4 text-yellow-500"
        }, void 0, false, {
          fileName: "app/core/ui/Tile.tsx",
          lineNumber: 67,
          columnNumber: 16
        }, this);
    }
  }, [props.trend]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TileBadge, {
    trend: props.trend,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex items-center space-x-1",
      children: [
        Icon,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: props.children
        }, void 0, false, {
          fileName: "app/core/ui/Tile.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
function TileBadge(props) {
  const className = `inline-flex items-center rounded-3xl py-1 px-2.5 text-sm font-semibold justify-center`;
  if (props.trend === `up`) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: `${className} bg-green-50 text-green-600 dark:bg-green-500/10`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: props.children
      }, void 0, false, {
        fileName: "app/core/ui/Tile.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this);
  }
  if (props.trend === `down`) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: `${className} bg-red-50 text-red-600 dark:bg-red-500/10`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: props.children
      }, void 0, false, {
        fileName: "app/core/ui/Tile.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${className} bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: props.children
    }, void 0, false, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
Tile.Header = TileHeader;
Tile.Heading = TileHeading;
Tile.Body = TileBody;
Tile.Figure = TileFigure;
Tile.Trend = TileTrend;
Tile.Badge = TileBadge;
var Tile_default = Tile;

// app/components/dashboard/DashboardDemo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DashboardDemo() {
  const mrr = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const visitors = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const returningVisitors = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const churn = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const netRevenue = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const fees = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const newCustomers = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const tickets = (0, import_react32.useMemo)(() => generateDemoData(), []);
  const activeUsers = (0, import_react32.useMemo)(() => generateDemoData(), []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6 pb-36",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserGreetings, {}, void 0, false, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Monthly Recurring Revenue"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 30,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: `$${mrr[1]}`
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 34,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "20%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 35,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 33,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: mrr[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 32,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Revenue"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 43,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: `$${netRevenue[1]}`
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 47,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "12%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 48,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: netRevenue[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Fees"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 56,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: `$${fees[1]}`
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 60,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "9%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 61,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: fees[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 58,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "New Customers"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 69,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: `${newCustomers[1]}`
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 73,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "down",
                        children: "-25%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 74,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: newCustomers[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 71,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Visitors"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 82,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: visitors[1]
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 86,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "down",
                        children: "-4.3%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 87,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 85,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: visitors[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 84,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Returning Visitors"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 95,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: returningVisitors[1]
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 99,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "stale",
                        children: "10%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 98,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: returningVisitors[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 103,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 97,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Churn"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 108,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: [
                          churn[1],
                          "%"
                        ]
                      }, void 0, true, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 112,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "-10%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 113,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 111,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: churn[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Support Tickets"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 121,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                        children: tickets[1]
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 125,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "-30%"
                      }, void 0, false, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 126,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 124,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: tickets[0]
                  }, void 0, false, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 129,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 123,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
              children: "Active Users"
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Figure, {
                      children: activeUsers[1]
                    }, void 0, false, {
                      fileName: "app/components/dashboard/DashboardDemo.tsx",
                      lineNumber: 140,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                      trend: "up",
                      children: "10%"
                    }, void 0, false, {
                      fileName: "app/components/dashboard/DashboardDemo.tsx",
                      lineNumber: 141,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 139,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                  data: activeUsers[0]
                }, void 0, false, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 144,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 138,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 134,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
              children: "Customers"
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 151,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomersTable, {}, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 154,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 153,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 150,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 149,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/dashboard/DashboardDemo.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function UserGreetings() {
  const user = nr();
  const userDisplayName = user.data?.displayName ?? user.data?.email ?? "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
        type: 4,
        children: [
          "Welcome Back, ",
          userDisplayName
        ]
      }, void 0, true, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 168,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-gray-500 dark:text-gray-400",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: "Here's what is happening in your SaaS"
        }, void 0, false, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 171,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 170,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/dashboard/DashboardDemo.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}
function generateDemoData() {
  const today = new Date();
  const formatter = new Intl.DateTimeFormat("en-us", {
    month: "long",
    year: "2-digit"
  });
  const data = [];
  for (let n = 8; n > 0; n -= 1) {
    const date2 = new Date(today.getFullYear(), today.getMonth() - n, 1);
    data.push({
      name: formatter.format(date2),
      value: (Math.random() * 1e3).toFixed(1)
    });
  }
  return [data, data[data.length - 1].value];
}
function Chart(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-36",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
      width: "100%",
      height: "100%",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LineChart, {
        width: 400,
        height: 100,
        data: props.data,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Line, {
            type: "monotone",
            dataKey: "value",
            stroke: "#3b82f6",
            strokeWidth: 2.5,
            dot: false
          }, void 0, false, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 205,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
            style: { fontSize: 9 },
            axisLine: false,
            tickSize: 0,
            dataKey: "name",
            height: 15,
            dy: 10
          }, void 0, false, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 213,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/components/dashboard/DashboardDemo.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/dashboard/DashboardDemo.tsx",
    lineNumber: 202,
    columnNumber: 5
  }, this);
}
function CustomersTable() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
    className: "Table",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "Customer"
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 232,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "Plan"
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 233,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "MRR"
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 234,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "Logins"
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 235,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "Status"
            }, void 0, false, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 236,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 231,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 230,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Pippin Oddo"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 242,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Pro"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 243,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$100.2"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 244,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "920"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 245,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "up",
                  children: "Healthy"
                }, void 0, false, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 247,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 246,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 241,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "V\xE4in\xF6 P\xE1nfilo"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 252,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Basic"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 253,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$40.6"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 254,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "300"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 255,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "stale",
                  children: "Possible Churn"
                }, void 0, false, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 257,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 256,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 251,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Giorgos Quinten"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 262,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Pro"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 263,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$2004.3"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 264,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "1000"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 265,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "up",
                  children: "Healthy"
                }, void 0, false, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 267,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 266,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 261,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Adhelm Otis"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 272,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Basic"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 273,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$0"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 274,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "10"
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 275,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "down",
                  children: "Churned"
                }, void 0, false, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 277,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 276,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 271,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 240,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/dashboard/DashboardDemo.tsx",
    lineNumber: 229,
    columnNumber: 5
  }, this);
}

// app/routes/__app/dashboard/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Dashboard"
  };
};
function DashboardPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppHeader_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trans, {
          i18nKey: "common:dashboardTabLabel"
        }, void 0, false, {
          fileName: "app/routes/__app/dashboard/index.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/dashboard/index.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardDemo, {}, void 0, false, {
            fileName: "app/routes/__app/dashboard/index.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/__app/dashboard/index.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/__app/dashboard/index.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/__app/dashboard/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var dashboard_default = DashboardPage;
export {
  dashboard_default as default,
  meta
};
/*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/__app/dashboard/index-WYMVFVUJ.js.map
