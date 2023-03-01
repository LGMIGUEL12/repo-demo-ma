import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-QEOXWCFK.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/IconButton.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function IconButton({
  className,
  loading,
  disabled,
  children,
  label,
  ...props
}) {
  const allProps = {
    ...props,
    className: `IconButton ${className ?? ""}`,
    disabled: loading || disabled,
    "aria-label": label,
    title: label
  };
  const Element = ({ children: children2 }) => {
    const tag = "as" in props ? props.as : "button";
    return (0, import_react.createElement)(tag, allProps, children2);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Element, {
    ...props,
    children
  }, void 0, false, {
    fileName: "app/core/ui/IconButton.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
var IconButton_default = IconButton;

export {
  IconButton_default
};
//# sourceMappingURL=/build/_shared/chunk-VCZGRDVP.js.map
