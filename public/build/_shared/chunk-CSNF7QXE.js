import {
  require_react
} from "/build/_shared/chunk-HG654LJF.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/core/ui/Label.tsx
var import_react = __toESM(require_react());
var Label = ({ children, className, as, ...props }) => {
  const tag = as ?? `label`;
  return (0, import_react.createElement)(
    tag,
    {
      className: `Label ${className ?? ""}`,
      ...props
    },
    children
  );
};
var Label_default = Label;

export {
  Label_default
};
//# sourceMappingURL=/build/_shared/chunk-CSNF7QXE.js.map
