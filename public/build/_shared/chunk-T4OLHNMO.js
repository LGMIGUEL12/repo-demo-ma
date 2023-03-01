import {
  Label_default
} from "/build/_shared/chunk-CSNF7QXE.js";
import {
  require_XMarkIcon
} from "/build/_shared/chunk-XQJIPBYI.js";
import {
  We
} from "/build/_shared/chunk-TXT3OLG5.js";
import {
  IconButton_default
} from "/build/_shared/chunk-MEFOEGYP.js";
import {
  If_default
} from "/build/_shared/chunk-ZOBGVMBL.js";
import {
  require_classnames
} from "/build/_shared/chunk-DN742LHR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4FTOC32G.js";
import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/TextField.tsx
var import_react = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
var import_XMarkIcon = __toESM(require_XMarkIcon());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Hint = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: `TextFieldHint`,
    children
  }, void 0, false, {
    fileName: "app/core/ui/TextField.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
var Input = ({
  className,
  innerRef,
  children,
  useResetButton,
  onClear,
  defaultValue,
  onValueChange,
  ...props
}) => {
  const ref = innerRef ?? (0, import_react.createRef)();
  const currentValue = props.value ?? "";
  const [value, setValue] = (0, import_react.useState)(currentValue);
  const onReset = (0, import_react.useCallback)(() => {
    if (ref) {
      setValue("");
      if (onClear) {
        onClear();
      }
    }
  }, [onClear, ref]);
  const shouldShowResetButton = (0, import_react.useMemo)(() => {
    return Boolean(useResetButton && value);
  }, [value, useResetButton]);
  const onChange = (0, import_react.useCallback)(
    (event) => {
      if (props.onChange) {
        props.onChange(event);
      }
      const nextValue = event.currentTarget.value ?? "";
      if (onValueChange) {
        onValueChange(nextValue);
      }
      setValue(nextValue);
    },
    [onValueChange, props]
  );
  (0, import_react.useEffect)(() => {
    setValue(currentValue);
  }, [currentValue, onValueChange]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames.default)(`TextFieldInputContainer`, className, {
      [`TextFieldInputContainerDisabled`]: props.disabled
    }),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: children,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex pl-2.5",
          children
        }, void 0, false, {
          fileName: "app/core/ui/TextField.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/TextField.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        value: innerRef ? void 0 : value,
        defaultValue,
        className: `TextFieldInput flex-1 ${className ?? ""}`,
        ...props,
        ref,
        onChange
      }, void 0, false, {
        fileName: "app/core/ui/TextField.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: shouldShowResetButton,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex pr-2.5",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
            type: "button",
            onClick: onReset,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_XMarkIcon.default, {
              className: "h-5"
            }, void 0, false, {
              fileName: "app/core/ui/TextField.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/core/ui/TextField.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/core/ui/TextField.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/core/ui/TextField.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/core/ui/TextField.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
};
var TextField = ({ children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `TextField ${className ?? ""}`,
    children
  }, void 0, false, {
    fileName: "app/core/ui/TextField.tsx",
    lineNumber: 121,
    columnNumber: 10
  }, this);
};
var ErrorMessage = ({ error, ...props }) => {
  const shouldDisplay = !!error;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We, {
    show: shouldDisplay,
    appear: shouldDisplay,
    enter: "ease-out duration-200",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-50",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hint, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        ...props,
        className: "py-0.5 text-red-700 dark:text-red-500",
        children: error
      }, void 0, false, {
        fileName: "app/core/ui/TextField.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/core/ui/TextField.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/core/ui/TextField.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
};
TextField.Hint = Hint;
TextField.Label = Label_default;
TextField.Input = Input;
TextField.Error = ErrorMessage;
var TextField_default = TextField;

export {
  TextField_default
};
//# sourceMappingURL=/build/_shared/chunk-T4OLHNMO.js.map
