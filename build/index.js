var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/core/ui/If.tsx
function If({
  condition,
  children,
  fallback
}) {
  return (0, import_react5.useMemo)(() => condition ? typeof children == "function" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: children(condition)
  }, void 0, !1, {
    fileName: "app/core/ui/If.tsx",
    lineNumber: 17,
    columnNumber: 16
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, !1, {
    fileName: "app/core/ui/If.tsx",
    lineNumber: 20,
    columnNumber: 14
  }, this) : fallback ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: fallback
  }, void 0, !1, {
    fileName: "app/core/ui/If.tsx",
    lineNumber: 24,
    columnNumber: 14
  }, this) : null, [condition, fallback, children]);
}
var import_react5, import_jsx_dev_runtime, If_default, init_If = __esm({
  "app/core/ui/If.tsx"() {
    "use strict";
    import_react5 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
    If_default = If;
  }
});

// app/core/ui/Button.tsx
function Animation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: "mx-2",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners.SpringSpinner, {
      className: "mx-auto",
      color: "currentColor",
      size: 20,
      animationDuration: 2e3
    }, void 0, !1, {
      fileName: "app/core/ui/Button.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Button.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
function InnerButtonContainerElement({
  children,
  href,
  className
}) {
  return href ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
    className: `${className} flex w-full items-center`,
    to: href,
    children
  }, void 0, !1, {
    fileName: "app/core/ui/Button.tsx",
    lineNumber: 142,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    className: `${className} flex w-full items-center`,
    children
  }, void 0, !1, {
    fileName: "app/core/ui/Button.tsx",
    lineNumber: 149,
    columnNumber: 5
  }, this);
}
var import_react6, import_react_epic_spinners, import_classnames, import_jsx_dev_runtime, getColorClasses, getSizeClasses, getVariantClasses, Button, Button_default, init_Button = __esm({
  "app/core/ui/Button.tsx"() {
    "use strict";
    import_react6 = require("@remix-run/react"), import_react_epic_spinners = require("react-epic-spinners"), import_classnames = __toESM(require("classnames"));
    init_If();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), getColorClasses = (color) => ({
      primary: "ButtonPrimary",
      danger: "ButtonDanger",
      secondary: "ButtonSecondary",
      transparent: "ButtonTransparent",
      custom: ""
    })[color], getSizeClasses = (size) => `${{
      normal: "ButtonNormal",
      large: "ButtonLarge",
      small: "ButtonSmall",
      custom: ""
    }[size]} w-full`, getVariantClasses = (variant, color = "primary") => ({
      normal: {
        primary: "",
        danger: "",
        secondary: "",
        transparent: "",
        custom: ""
      },
      outline: {
        primary: "ButtonPrimaryOutline",
        danger: "ButtonDangerOutline",
        secondary: "ButtonSecondaryOutline",
        transparent: "",
        custom: ""
      },
      flat: {
        primary: "ButtonPrimaryFlat",
        danger: "ButtonDangerFlat",
        secondary: "",
        transparent: "",
        custom: ""
      }
    })[variant][color], Button = ({
      children,
      color,
      size,
      variant,
      block,
      loading,
      href,
      ...props
    }) => {
      let defaultColor = "primary", defaultSize = "normal", defaultVariant = "normal", useColor = color ?? defaultColor, useSize = size ?? defaultSize, useVariant = variant ?? defaultVariant, className = (0, import_classnames.default)(
        "Button",
        getColorClasses(useColor),
        getVariantClasses(useVariant, useColor),
        block ? "w-full" : "",
        loading ? "opacity-70" : "",
        props.className ?? ""
      );
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        ...props,
        className,
        disabled: loading || props.disabled,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InnerButtonContainerElement, {
          href,
          className: getSizeClasses(useSize),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "flex w-full flex-1 items-center justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Animation, {}, void 0, !1, {
                  fileName: "app/core/ui/Button.tsx",
                  lineNumber: 112,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/Button.tsx",
                lineNumber: 111,
                columnNumber: 11
              }, this),
              children
            ]
          }, void 0, !0, {
            fileName: "app/core/ui/Button.tsx",
            lineNumber: 110,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/core/ui/Button.tsx",
          lineNumber: 106,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/Button.tsx",
        lineNumber: 101,
        columnNumber: 5
      }, this);
    };
    Button_default = Button;
  }
});

// app/core/ui/Dropdown.tsx
function Divider() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
    className: "DropdownDivider"
  }, void 0, !1, {
    fileName: "app/core/ui/Dropdown.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
function Item({ children, className, ...props }) {
  let isStaticItem = !props.onClick && !props.href;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Menu.Item, {
    as: "div",
    children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: `${active ? "DropdownActiveItem" : "text-gray-900"} DropdownItem`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        block: !0,
        href: props.href,
        onClick: props.onClick,
        color: "custom",
        size: "custom",
        className: (0, import_classnames5.default)("justify-start", className, {
          static: isStaticItem
        }),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex w-full flex-1 px-5 py-3 font-normal",
          children
        }, void 0, !1, {
          fileName: "app/core/ui/Dropdown.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/Dropdown.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/Dropdown.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Dropdown.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
var import_react9, import_react10, import_classnames5, import_jsx_dev_runtime, Dropdown, Dropdown_default, init_Dropdown = __esm({
  "app/core/ui/Dropdown.tsx"() {
    "use strict";
    import_react9 = require("react"), import_react10 = require("@headlessui/react"), import_classnames5 = __toESM(require("classnames"));
    init_Button();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Dropdown = ({ items, button }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Menu, {
      as: "div",
      className: "DropdownMenu",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "DropdownMenuButtonContainer",
          children: button
        }, void 0, !1, {
          fileName: "app/core/ui/Dropdown.tsx",
          lineNumber: 23,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Transition, {
          as: import_react9.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Menu.Items, {
            className: "DropdownMenuItemsContainer",
            children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Fragment, {
              children: item
            }, index, !1, {
              fileName: "app/core/ui/Dropdown.tsx",
              lineNumber: 36,
              columnNumber: 20
            }, this))
          }, void 0, !1, {
            fileName: "app/core/ui/Dropdown.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/core/ui/Dropdown.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/core/ui/Dropdown.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this);
    Dropdown.Divider = Divider;
    Dropdown.Item = Item;
    Dropdown_default = Dropdown;
  }
});

// app/components/FallbackUserAvatar.tsx
var import_outline, import_jsx_dev_runtime, FallbackUserAvatar, FallbackUserAvatar_default, init_FallbackUserAvatar = __esm({
  "app/components/FallbackUserAvatar.tsx"() {
    "use strict";
    import_outline = require("@heroicons/react/24/outline"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), FallbackUserAvatar = ({ text }) => text ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "FallbackUserAvatar",
      children: text[0]
    }, void 0, !1, {
      fileName: "app/components/FallbackUserAvatar.tsx",
      lineNumber: 12,
      columnNumber: 10
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "FallbackUserAvatar",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.UserIcon, {
        className: "h-5"
      }, void 0, !1, {
        fileName: "app/components/FallbackUserAvatar.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/FallbackUserAvatar.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this), FallbackUserAvatar_default = FallbackUserAvatar;
  }
});

// app/components/ProfileAvatar.tsx
function getUserInitials(user) {
  return getDisplayName(user)[0] ?? "";
}
function getDisplayName(user) {
  return user.displayName ? user.displayName : user.email ?? "";
}
var import_jsx_dev_runtime, ProfileAvatar, ProfileAvatar_default, init_ProfileAvatar = __esm({
  "app/components/ProfileAvatar.tsx"() {
    "use strict";
    init_FallbackUserAvatar();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ProfileAvatar = ({
      user
    }) => {
      if (!user)
        return null;
      let photoURL = user == null ? void 0 : user.photoURL, size = 36;
      return photoURL ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          loading: "lazy",
          decoding: "async",
          width: size,
          height: size,
          className: "rounded-full object-cover",
          src: photoURL,
          alt: photoURL,
          style: { height: size }
        }, void 0, !1, {
          fileName: "app/components/ProfileAvatar.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/ProfileAvatar.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FallbackUserAvatar_default, {
        text: getUserInitials(user)
      }, void 0, !1, {
        fileName: "app/components/ProfileAvatar.tsx",
        lineNumber: 31,
        columnNumber: 10
      }, this);
    };
    ProfileAvatar_default = ProfileAvatar;
  }
});

// app/core/ui/IconButton.tsx
function IconButton({
  className,
  loading,
  disabled,
  children,
  label,
  ...props
}) {
  let allProps = {
    ...props,
    className: `IconButton ${className ?? ""}`,
    disabled: loading || disabled,
    "aria-label": label,
    title: label
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(({ children: children2 }) => {
    let tag = "as" in props ? props.as : "button";
    return (0, import_react15.createElement)(tag, allProps, children2);
  }, {
    ...props,
    children
  }, void 0, !1, {
    fileName: "app/core/ui/IconButton.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
var import_react15, import_jsx_dev_runtime, IconButton_default, init_IconButton = __esm({
  "app/core/ui/IconButton.tsx"() {
    "use strict";
    import_react15 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
    IconButton_default = IconButton;
  }
});

// app/core/session/contexts/user-session.ts
var import_react18, UserSessionContext, user_session_default, init_user_session = __esm({
  "app/core/session/contexts/user-session.ts"() {
    "use strict";
    import_react18 = require("react"), UserSessionContext = (0, import_react18.createContext)({
      userSession: void 0,
      setUserSession: (_) => _
    }), user_session_default = UserSessionContext;
  }
});

// app/core/hooks/use-user-session.ts
function useUserSession() {
  let { userSession } = (0, import_react19.useContext)(user_session_default);
  return userSession;
}
var import_react19, init_use_user_session = __esm({
  "app/core/hooks/use-user-session.ts"() {
    "use strict";
    import_react19 = require("react");
    init_user_session();
  }
});

// app/core/ui/Heading.tsx
var import_jsx_dev_runtime, Heading, Heading_default, init_Heading = __esm({
  "app/core/ui/Heading.tsx"() {
    "use strict";
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Heading = ({ type, children }) => {
      switch (type) {
        case 1:
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-4xl font-extrabold",
            children
          }, void 0, !1, {
            fileName: "app/core/ui/Heading.tsx",
            lineNumber: 6,
            columnNumber: 14
          }, this);
        case 2:
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-bold",
            children
          }, void 0, !1, {
            fileName: "app/core/ui/Heading.tsx",
            lineNumber: 8,
            columnNumber: 14
          }, this);
        case 3:
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "text-2xl font-bold",
            children
          }, void 0, !1, {
            fileName: "app/core/ui/Heading.tsx",
            lineNumber: 10,
            columnNumber: 14
          }, this);
        case 4:
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
            className: "text-xl font-semibold",
            children
          }, void 0, !1, {
            fileName: "app/core/ui/Heading.tsx",
            lineNumber: 12,
            columnNumber: 14
          }, this);
        case 5:
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
            className: "text-lg font-semibold",
            children
          }, void 0, !1, {
            fileName: "app/core/ui/Heading.tsx",
            lineNumber: 14,
            columnNumber: 14
          }, this);
        case 6:
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", {
            className: "text-base font-medium",
            children
          }, void 0, !1, {
            fileName: "app/core/ui/Heading.tsx",
            lineNumber: 16,
            columnNumber: 14
          }, this);
        default:
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {
            type: 1,
            children
          }, void 0, !1, {
            fileName: "app/core/ui/Heading.tsx",
            lineNumber: 19,
            columnNumber: 14
          }, this);
      }
    }, Heading_default = Heading;
  }
});

// app/core/ui/Alert.tsx
function AlertHeading({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "mb-2",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
      type: 4,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "font-bold",
        children
      }, void 0, !1, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/Alert.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Alert.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
var import_react26, import_outline4, import_jsx_dev_runtime, colorClassNames, icons, Alert, Alert_default, init_Alert = __esm({
  "app/core/ui/Alert.tsx"() {
    "use strict";
    import_react26 = require("react"), import_outline4 = require("@heroicons/react/24/outline");
    init_IconButton();
    init_If();
    init_Heading();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), colorClassNames = {
      success: "AlertSuccess",
      error: "AlertError",
      warn: "AlertWarn",
      info: "AlertInfo"
    }, icons = {
      success: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.CheckCircleIcon, {
        className: "AlertIcon h-6"
      }, void 0, !1, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 23,
        columnNumber: 18
      }, this),
      error: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.ExclamationCircleIcon, {
        className: "AlertIcon h-6"
      }, void 0, !1, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 24,
        columnNumber: 16
      }, this),
      warn: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.ShieldExclamationIcon, {
        className: "AlertIcon h-6"
      }, void 0, !1, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      info: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.InformationCircleIcon, {
        className: "AlertIcon h-6"
      }, void 0, !1, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this)
    }, Alert = ({ children, type, useCloseButton, className }) => {
      let [visible, setVisible] = (0, import_react26.useState)(!0), Icon = (0, import_react26.useMemo)(() => icons[type](), [type]);
      return visible ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `Alert ${colorClassNames[type]} ${className ?? ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "flex items-center space-x-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: Icon
              }, void 0, !1, {
                fileName: "app/core/ui/Alert.tsx",
                lineNumber: 46,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children
              }, void 0, !1, {
                fileName: "app/core/ui/Alert.tsx",
                lineNumber: 47,
                columnNumber: 9
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/core/ui/Alert.tsx",
            lineNumber: 45,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: useCloseButton ?? !1,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
              className: "dark:hover:bg-transparent",
              onClick: () => setVisible(!1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.XMarkIcon, {
                className: "h-6"
              }, void 0, !1, {
                fileName: "app/core/ui/Alert.tsx",
                lineNumber: 55,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/Alert.tsx",
              lineNumber: 51,
              columnNumber: 9
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/Alert.tsx",
            lineNumber: 50,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/core/ui/Alert.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this) : null;
    };
    Alert.Heading = AlertHeading;
    Alert_default = Alert;
  }
});

// app/core/ui/Label.tsx
var import_react27, Label, Label_default, init_Label = __esm({
  "app/core/ui/Label.tsx"() {
    "use strict";
    import_react27 = require("react"), Label = ({ children, className, as, ...props }) => (0, import_react27.createElement)(
      as ?? "label",
      {
        className: `Label ${className ?? ""}`,
        ...props
      },
      children
    ), Label_default = Label;
  }
});

// app/lib/firestore-collections.ts
var USERS_COLLECTION, ORGANIZATIONS_COLLECTION, INVITES_COLLECTION, TASKS_COLLECTION, init_firestore_collections = __esm({
  "app/lib/firestore-collections.ts"() {
    "use strict";
    USERS_COLLECTION = "users", ORGANIZATIONS_COLLECTION = "organizations", INVITES_COLLECTION = "invites", TASKS_COLLECTION = "tasks";
  }
});

// app/lib/server/collections.ts
function getUsersCollection() {
  return getCollectionByName(USERS_COLLECTION);
}
function getOrganizationsCollection() {
  return getCollectionByName(
    ORGANIZATIONS_COLLECTION
  );
}
function getInvitesCollection() {
  return getCollectionGroupByName(
    INVITES_COLLECTION
  );
}
function getCollectionByName(collection7) {
  return (0, import_firestore.getFirestore)().collection(collection7);
}
function getCollectionGroupByName(collection7) {
  return (0, import_firestore.getFirestore)().collectionGroup(collection7);
}
var import_firestore, init_collections = __esm({
  "app/lib/server/collections.ts"() {
    "use strict";
    import_firestore = require("firebase-admin/firestore");
    init_firestore_collections();
  }
});

// app/lib/server/queries.ts
var queries_exports = {};
__export(queries_exports, {
  getOrganizationById: () => getOrganizationById,
  getUserData: () => getUserData,
  getUserRefById: () => getUserRefById
});
async function getOrganizationById(organizationId) {
  return getOrganizationsCollection().doc(organizationId).get();
}
async function getUserRefById(userId) {
  return getUsersCollection().doc(userId).get();
}
async function getUserData(userId) {
  let user = await getUserRefById(userId), data = user.data();
  if (data)
    return {
      ...data,
      id: user.id
    };
}
var init_queries = __esm({
  "app/lib/server/queries.ts"() {
    "use strict";
    init_collections();
  }
});

// app/lib/organizations/types/membership-role.ts
var MembershipRole, membership_role_default, init_membership_role = __esm({
  "app/lib/organizations/types/membership-role.ts"() {
    "use strict";
    MembershipRole = /* @__PURE__ */ ((MembershipRole2) => (MembershipRole2[MembershipRole2.Member = 0] = "Member", MembershipRole2[MembershipRole2.Admin = 1] = "Admin", MembershipRole2[MembershipRole2.Owner = 2] = "Owner", MembershipRole2))(MembershipRole || {}), membership_role_default = MembershipRole;
  }
});

// app/core/firebase/admin/auth/get-user-from-session-cookie.ts
var get_user_from_session_cookie_exports = {};
__export(get_user_from_session_cookie_exports, {
  getUserFromSessionCookie: () => getUserFromSessionCookie
});
async function getUserFromSessionCookie(session) {
  return (0, import_auth4.getAuth)().verifySessionCookie(session, !0);
}
var import_auth4, init_get_user_from_session_cookie = __esm({
  "app/core/firebase/admin/auth/get-user-from-session-cookie.ts"() {
    "use strict";
    import_auth4 = require("firebase-admin/auth");
  }
});

// app/lib/organizations/permissions.ts
function canUpdateUser(currentUserRole, targetUser) {
  return currentUserRole > targetUser;
}
function canChangeBilling(currentUserRole) {
  return currentUserRole === membership_role_default.Owner;
}
function canInviteUsers(currentUserRole) {
  return currentUserRole >= membership_role_default.Admin;
}
function canInviteUser(inviterRole, inviteeRole) {
  let canInvite = canInviteUsers(inviterRole), hasGreaterRole = inviterRole >= inviteeRole, isNotOwner = inviteeRole !== membership_role_default.Owner;
  return canInvite && hasGreaterRole && isNotOwner;
}
function canDeleteInvites(inviterRole) {
  return canInviteUsers(inviterRole);
}
var init_permissions = __esm({
  "app/lib/organizations/permissions.ts"() {
    "use strict";
    init_membership_role();
  }
});

// app/core/hooks/use-request-state.ts
function useRequestState() {
  let [state, setState] = (0, import_react40.useState)({
    loading: !1,
    success: !1,
    error: void 0,
    data: void 0
  }), setLoading = (0, import_react40.useCallback)((loading) => {
    setState({
      loading,
      success: !1,
      data: void 0,
      error: void 0
    });
  }, []), setData = (0, import_react40.useCallback)((data) => {
    setState({
      data,
      success: !0,
      loading: !1,
      error: void 0
    });
  }, []), setError = (0, import_react40.useCallback)((error) => {
    setState({
      data: void 0,
      loading: !1,
      success: !1,
      error
    });
  }, []), resetState = (0, import_react40.useCallback)(() => {
    setState({
      loading: !1,
      success: !1,
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
var import_react40, init_use_request_state = __esm({
  "app/core/hooks/use-request-state.ts"() {
    "use strict";
    import_react40 = require("react");
  }
});

// app/core/ui/Modal.tsx
var import_react43, import_react44, import_XMarkIcon2, import_react_i18next10, import_jsx_dev_runtime, Modal, Modal_default, init_Modal = __esm({
  "app/core/ui/Modal.tsx"() {
    "use strict";
    import_react43 = require("react"), import_react44 = require("@headlessui/react"), import_XMarkIcon2 = __toESM(require("@heroicons/react/24/outline/XMarkIcon")), import_react_i18next10 = require("react-i18next");
    init_IconButton();
    init_If();
    init_Button();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Modal = ({ isOpen, setIsOpen, closeButton, heading, children }) => {
      let useCloseButton = closeButton ?? !0;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Transition, {
        appear: !0,
        show: isOpen,
        as: import_react43.Fragment,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Dialog, {
          open: isOpen,
          as: "div",
          className: "fixed inset-0 z-10 h-screen bg-gray-500 bg-opacity-30 transition-all",
          onClose: () => {
            useCloseButton && setIsOpen(!1);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "h-full min-h-screen px-4 text-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Transition.Child, {
                as: import_react43.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Dialog.Overlay, {
                  className: "fixed inset-0"
                }, void 0, !1, {
                  fileName: "app/core/ui/Modal.tsx",
                  lineNumber: 44,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/Modal.tsx",
                lineNumber: 35,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "inline-block h-screen align-middle",
                "aria-hidden": "true",
                children: "\u200B"
              }, void 0, !1, {
                fileName: "app/core/ui/Modal.tsx",
                lineNumber: 47,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Transition.Child, {
                as: import_react43.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-70",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-80",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "my-4 inline-block max-h-[90%] w-full max-w-xl transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-black-400",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react44.Dialog.Title, {
                          as: "h2",
                          className: "flex w-full text-2xl font-bold leading-4 text-current",
                          children: heading
                        }, void 0, !1, {
                          fileName: "app/core/ui/Modal.tsx",
                          lineNumber: 65,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                          condition: useCloseButton,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "justify-end",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                              label: "Close Modal",
                              onClick: () => setIsOpen(!1),
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_XMarkIcon2.default, {
                                className: "h-6"
                              }, void 0, !1, {
                                fileName: "app/core/ui/Modal.tsx",
                                lineNumber: 78,
                                columnNumber: 23
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/core/ui/Modal.tsx",
                              lineNumber: 74,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/core/ui/Modal.tsx",
                            lineNumber: 73,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/core/ui/Modal.tsx",
                          lineNumber: 72,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/core/ui/Modal.tsx",
                      lineNumber: 64,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "relative mt-4",
                      children
                    }, void 0, !1, {
                      fileName: "app/core/ui/Modal.tsx",
                      lineNumber: 84,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: useCloseButton,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "mt-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                          "data-cy": "close-modal-button",
                          block: !0,
                          color: "secondary",
                          onClick: () => setIsOpen(!1),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next10.Trans, {
                            i18nKey: "common:cancel"
                          }, void 0, !1, {
                            fileName: "app/core/ui/Modal.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/core/ui/Modal.tsx",
                          lineNumber: 88,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/core/ui/Modal.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/core/ui/Modal.tsx",
                      lineNumber: 86,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/core/ui/Modal.tsx",
                  lineNumber: 63,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/Modal.tsx",
                lineNumber: 54,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/core/ui/Modal.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/core/ui/Modal.tsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/Modal.tsx",
        lineNumber: 23,
        columnNumber: 5
      }, this);
    }, Modal_default = Modal;
  }
});

// app/core/firebase/hooks/use-get-csrf-token.ts
function useGetCsrfToken() {
  return (0, import_react56.useCallback)(() => {
    let element = document.querySelector('meta[name="csrf-token"]');
    return element == null ? void 0 : element.getAttribute("content");
  }, []);
}
var import_react56, init_use_get_csrf_token = __esm({
  "app/core/firebase/hooks/use-get-csrf-token.ts"() {
    "use strict";
    import_react56 = require("react");
  }
});

// app/core/firebase/admin/create-emulator-admin-app.ts
var create_emulator_admin_app_exports = {};
__export(create_emulator_admin_app_exports, {
  createEmulatorAdminApp: () => createEmulatorAdminApp
});
async function createEmulatorAdminApp(appName) {
  let options = { projectId: process.env.GCLOUD_PROJECT }, { getApps, getApp, initializeApp } = await import("firebase-admin/app");
  return getApps().length ? getApp(appName) : initializeApp(options, appName);
}
var init_create_emulator_admin_app = __esm({
  "app/core/firebase/admin/create-emulator-admin-app.ts"() {
    "use strict";
  }
});

// app/core/firebase/admin/create-admin-app.ts
var create_admin_app_exports = {};
__export(create_admin_app_exports, {
  createFirebaseAdminApp: () => createFirebaseAdminApp
});
async function createFirebaseAdminApp(params) {
  let { getApps, getApp, cert, initializeApp } = await import("firebase-admin/app");
  if (getApps().length > 0)
    return getApp();
  let privateKey = formatFirebasePrivateKey(params.privateKey), credential = cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey
  });
  return initializeApp({
    credential,
    projectId: params.projectId,
    storageBucket: params.storageBucket
  });
}
function formatFirebasePrivateKey(key) {
  return key.replace(/\\n/g, `
`);
}
var init_create_admin_app = __esm({
  "app/core/firebase/admin/create-admin-app.ts"() {
    "use strict";
  }
});

// app/lib/contexts/organization.ts
var import_react60, OrganizationContext, organization_default, init_organization = __esm({
  "app/lib/contexts/organization.ts"() {
    "use strict";
    import_react60 = require("react"), OrganizationContext = (0, import_react60.createContext)({
      organization: void 0,
      setOrganization: (_) => _
    }), organization_default = OrganizationContext;
  }
});

// app/lib/organizations/hooks/use-current-organization.ts
function useCurrentOrganization() {
  let { organization } = (0, import_react85.useContext)(organization_default);
  return organization;
}
var import_react85, init_use_current_organization = __esm({
  "app/lib/organizations/hooks/use-current-organization.ts"() {
    "use strict";
    import_react85 = require("react");
    init_organization();
  }
});

// app/lib/organizations/hooks/use-current-user-role.ts
function useCurrentUserRole() {
  var _a, _b;
  let organization = useCurrentOrganization(), user = useUserSession(), userId = (_a = user == null ? void 0 : user.auth) == null ? void 0 : _a.uid;
  if (!!userId)
    return (_b = organization == null ? void 0 : organization.members[userId]) == null ? void 0 : _b.role;
}
var init_use_current_user_role = __esm({
  "app/lib/organizations/hooks/use-current-user-role.ts"() {
    "use strict";
    init_use_current_organization();
    init_use_user_session();
  }
});

// app/components/IfHasPermissions.tsx
function IfHasPermissions({
  children,
  condition
}) {
  let currentUserRole = useCurrentUserRole();
  return currentUserRole === void 0 || !condition(currentUserRole) ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, !1, {
    fileName: "app/components/IfHasPermissions.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
var import_jsx_dev_runtime, IfHasPermissions_default, init_IfHasPermissions = __esm({
  "app/components/IfHasPermissions.tsx"() {
    "use strict";
    init_use_current_user_role();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime");
    IfHasPermissions_default = IfHasPermissions;
  }
});

// app/core/ui/Badge.tsx
function getColorClasses2(color) {
  return colorClasses[color || "normal"];
}
function getSizeClasses2(size) {
  return sizeClasses[size || "normal"];
}
var import_jsx_dev_runtime, colorClasses, sizeClasses, Badge, Badge_default, init_Badge = __esm({
  "app/core/ui/Badge.tsx"() {
    "use strict";
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), colorClasses = {
      normal: "ColorNormal",
      success: "ColorSuccess",
      custom: ""
    }, sizeClasses = {
      normal: "SizeNormal",
      small: "SizeSmall"
    };
    Badge = ({ children, color, size, className }) => {
      let colorClasses2 = getColorClasses2(color), sizeClasses2 = getSizeClasses2(size);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `Badge ${colorClasses2} ${sizeClasses2} ${className ?? ""}`,
        children
      }, void 0, !1, {
        fileName: "app/core/ui/Badge.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this);
    }, Badge_default = Badge;
  }
});

// app/core/hooks/use-api.ts
function useApiRequest(path, method = "POST", config) {
  let { setError, setLoading, setData, state } = useRequestState(), headersRef = (0, import_react91.useRef)(config == null ? void 0 : config.headers), getAppCheckToken = useGetAppCheckToken(), getCsrfToken = useGetCsrfToken();
  return [(0, import_react91.useCallback)(
    async (body) => {
      setLoading(!0);
      try {
        let payload = JSON.stringify(body), appCheckToken = await getAppCheckToken(), csrfToken = getCsrfToken();
        headersRef.current || (headersRef.current = {}), appCheckToken && (headersRef.current[FIREBASE_APP_CHECK_HEADER] = appCheckToken), csrfToken && (headersRef.current[CSRF_TOKEN_HEADER] = csrfToken);
        let data = await executeFetchRequest({
          url: path,
          payload,
          method,
          headers: headersRef.current
        });
        return setData(data), Promise.resolve(data);
      } catch (error) {
        let message = error instanceof Error ? error.message : "Unknown error";
        return setError(message), Promise.reject(error);
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
  ), state];
}
async function executeFetchRequest(params) {
  let { url, method, payload, redirect: redirect12, headers } = params, options = {
    method,
    redirect: redirect12,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      ...headers ?? {}
    }
  }, supportsBody = ["POST", "PUT", "DELETE"].includes(method);
  payload && supportsBody && (options.body = payload);
  try {
    let response = await fetch(url, options);
    return response.redirected ? (window.location.href = response.url, Promise.resolve()) : response.ok ? await response.json() : Promise.reject(response.statusText);
  } catch (e) {
    return Promise.reject(e);
  }
}
function useGetAppCheckToken() {
  let sdk = (0, import_react91.useContext)(import_reactfire22.AppCheckSdkContext);
  return (0, import_react91.useCallback)(async () => {
    try {
      if (!sdk)
        return;
      let forceRefresh = !1, { getToken } = await import("firebase/app-check"), { token } = await getToken(sdk, forceRefresh);
      return token;
    } catch {
      return;
    }
  }, [sdk]);
}
var import_react91, import_reactfire22, FIREBASE_APP_CHECK_HEADER, CSRF_TOKEN_HEADER, init_use_api = __esm({
  "app/core/hooks/use-api.ts"() {
    "use strict";
    import_react91 = require("react"), import_reactfire22 = require("reactfire");
    init_use_request_state();
    init_use_get_csrf_token();
    FIREBASE_APP_CHECK_HEADER = "X-Firebase-AppCheck", CSRF_TOKEN_HEADER = "x-csrf-token";
  }
});

// app/core/ui/SelectorIcon.tsx
function SelectorIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex flex-col ${props.className ?? ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline16.ChevronUpIcon, {
        className: "relative top-[0.1rem] h-3"
      }, void 0, !1, {
        fileName: "app/core/ui/SelectorIcon.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline16.ChevronDownIcon, {
        className: "relative bottom-[0.1rem] h-3"
      }, void 0, !1, {
        fileName: "app/core/ui/SelectorIcon.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/core/ui/SelectorIcon.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var import_outline16, import_jsx_dev_runtime, SelectorIcon_default, init_SelectorIcon = __esm({
  "app/core/ui/SelectorIcon.tsx"() {
    "use strict";
    import_outline16 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
    SelectorIcon_default = SelectorIcon;
  }
});

// app/core/ui/ListBox/ListBox.tsx
function ListBox({
  cy,
  value,
  setValue,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react93.Listbox, {
    value,
    onChange: setValue,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "relative",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react93.Listbox.Button, {
          "data-cy": cy,
          className: ({ open }) => `ListBoxButton ${open ? "ListBoxButtonOpen" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: value,
              children: ({ label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "block truncate",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next35.Trans, {
                  i18nKey: label
                }, void 0, !1, {
                  fileName: "app/core/ui/ListBox/ListBox.tsx",
                  lineNumber: 39,
                  columnNumber: 19
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/ListBox/ListBox.tsx",
                lineNumber: 38,
                columnNumber: 17
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/ListBox/ListBox.tsx",
              lineNumber: 35,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "ListBoxButtonIcon",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectorIcon_default, {
                "aria-hidden": "true"
              }, void 0, !1, {
                fileName: "app/core/ui/ListBox/ListBox.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/ListBox/ListBox.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/core/ui/ListBox/ListBox.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react93.Transition, {
          as: import_react92.Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react93.Listbox.Options, {
            className: "ListBoxOptionsContainer",
            children
          }, void 0, !1, {
            fileName: "app/core/ui/ListBox/ListBox.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/core/ui/ListBox/ListBox.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/core/ui/ListBox/ListBox.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/ListBox/ListBox.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var import_react92, import_react_i18next35, import_react93, import_jsx_dev_runtime, ListBox_default, init_ListBox = __esm({
  "app/core/ui/ListBox/ListBox.tsx"() {
    "use strict";
    import_react92 = require("react"), import_react_i18next35 = require("react-i18next"), import_react93 = require("@headlessui/react");
    init_SelectorIcon();
    init_If();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime");
    ListBox_default = ListBox;
  }
});

// app/core/ui/ListBox/ListBoxOption.tsx
var import_react94, import_react_i18next36, import_CheckCircleIcon2, import_jsx_dev_runtime, ListBoxOption, ListBoxOption_default, init_ListBoxOption = __esm({
  "app/core/ui/ListBox/ListBoxOption.tsx"() {
    "use strict";
    import_react94 = require("@headlessui/react"), import_react_i18next36 = require("react-i18next"), import_CheckCircleIcon2 = __toESM(require("@heroicons/react/24/outline/CheckCircleIcon"));
    init_If();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ListBoxOption = ({ option }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react94.Listbox.Option, {
      className: ({ active, selected }) => `${selected ? "ListBoxOptionSelected" : "ListBoxOptionNotSelected"} ${active ? "ListBoxOptionActive" : "ListBoxOptionNotActive"} ListBoxOption`,
      value: option,
      children: ({ selected }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-1",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            "data-cy": `listbox-option-${option.value}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "block truncate",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next36.Trans, {
                  i18nKey: option.label
                }, void 0, !1, {
                  fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                  lineNumber: 29,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                lineNumber: 28,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: selected,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "ListBoxOptionIcon",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CheckCircleIcon2.default, {
                    className: "h-6 w-6",
                    "aria-hidden": "true"
                  }, void 0, !1, {
                    fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                  lineNumber: 33,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                lineNumber: 32,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: option.description,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "ListBoxOptionDescription",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next36.Trans, {
                i18nKey: option.description
              }, void 0, !1, {
                fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
                lineNumber: 41,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/ListBox/ListBoxOption.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this), ListBoxOption_default = ListBoxOption;
  }
});

// app/lib/organizations/roles.ts
var OWNER, ADMIN, MEMBER, roles, roles_default, init_roles = __esm({
  "app/lib/organizations/roles.ts"() {
    "use strict";
    init_membership_role();
    OWNER = {
      label: "common:roles.owner.label",
      description: "common:roles.owner.description",
      value: membership_role_default.Owner
    }, ADMIN = {
      label: "common:roles.admin.label",
      description: "common:roles.admin.description",
      value: membership_role_default.Admin
    }, MEMBER = {
      label: "common:roles.member.label",
      description: "common:roles.member.description",
      value: membership_role_default.Member
    }, roles = [OWNER, ADMIN, MEMBER], roles_default = roles;
  }
});

// app/components/organizations/MembershipRoleSelector.tsx
function getSelectedRoleModel(currentRole) {
  let memberRole = roles_default[2];
  return roles_default.find((role) => role.value === currentRole) ?? memberRole;
}
var import_jsx_dev_runtime, MembershipRoleSelector, MembershipRoleSelector_default, init_MembershipRoleSelector = __esm({
  "app/components/organizations/MembershipRoleSelector.tsx"() {
    "use strict";
    init_ListBox();
    init_ListBoxOption();
    init_roles();
    init_IfHasPermissions();
    init_permissions();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MembershipRoleSelector = ({ value: currentRole, onChange }) => {
      let selectedRole = getSelectedRoleModel(currentRole);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBox_default, {
        value: selectedRole,
        setValue: (role) => {
          onChange && onChange(role.value);
        },
        cy: "invite-role-selector-button",
        children: roles_default.map((role) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
          condition: (currentUserRole) => canInviteUser(currentUserRole, role.value),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBoxOption_default, {
            option: role
          }, void 0, !1, {
            fileName: "app/components/organizations/MembershipRoleSelector.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, role.value, !1, {
          fileName: "app/components/organizations/MembershipRoleSelector.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/components/organizations/MembershipRoleSelector.tsx",
        lineNumber: 16,
        columnNumber: 5
      }, this);
    };
    MembershipRoleSelector_default = MembershipRoleSelector;
  }
});

// app/core/hooks/use-user-id.ts
function useUserId() {
  var _a;
  let session = useUserSession();
  return (_a = session == null ? void 0 : session.auth) == null ? void 0 : _a.uid;
}
var init_use_user_id = __esm({
  "app/core/hooks/use-user-id.ts"() {
    "use strict";
    init_use_user_session();
  }
});

// app/components/organizations/RoleBadge.tsx
var import_react_i18next39, import_jsx_dev_runtime, classNames12, RoleBadge, RoleBadge_default, init_RoleBadge = __esm({
  "app/components/organizations/RoleBadge.tsx"() {
    "use strict";
    import_react_i18next39 = require("react-i18next");
    init_membership_role();
    init_Badge();
    init_roles();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), classNames12 = {
      [membership_role_default.Owner]: "bg-yellow-400 text-current font-semibold dark:text-black-500",
      [membership_role_default.Admin]: "bg-blue-500 text-white font-semibold",
      [membership_role_default.Member]: "bg-blue-500 text-white font-semibold"
    }, RoleBadge = ({ role }) => {
      let data = roles_default.find((item) => item.value === role);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge_default, {
        color: "custom",
        size: "small",
        className: classNames12[role],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          "data-cy": "member-role-badge",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next39.Trans, {
            i18nKey: data == null ? void 0 : data.label
          }, void 0, !1, {
            fileName: "app/components/organizations/RoleBadge.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/organizations/RoleBadge.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/RoleBadge.tsx",
        lineNumber: 20,
        columnNumber: 5
      }, this);
    }, RoleBadge_default = RoleBadge;
  }
});

// app/lib/organizations/hooks/use-fetch-organization.ts
function useFetchOrganization(organizationId) {
  let firestore = (0, import_reactfire23.useFirestore)(), ref3 = (0, import_firestore12.doc)(
    firestore,
    ORGANIZATIONS_COLLECTION,
    organizationId
  );
  return (0, import_reactfire23.useFirestoreDocData)(ref3, { idField: "id" });
}
var import_reactfire23, import_firestore12, init_use_fetch_organization = __esm({
  "app/lib/organizations/hooks/use-fetch-organization.ts"() {
    "use strict";
    import_reactfire23 = require("reactfire"), import_firestore12 = require("firebase/firestore");
    init_firestore_collections();
  }
});

// app/components/organizations/LoadingMembersSpinner.tsx
var import_react_epic_spinners5, import_jsx_dev_runtime, LoadingMembersSpinner, LoadingMembersSpinner_default, init_LoadingMembersSpinner = __esm({
  "app/components/organizations/LoadingMembersSpinner.tsx"() {
    "use strict";
    import_react_epic_spinners5 = require("react-epic-spinners"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LoadingMembersSpinner = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-row items-center space-x-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners5.SpringSpinner, {
          color: "currentColor",
          size: 32
        }, void 0, !1, {
          fileName: "app/components/organizations/LoadingMembersSpinner.tsx",
          lineNumber: 6,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-sm",
          children
        }, void 0, !1, {
          fileName: "app/components/organizations/LoadingMembersSpinner.tsx",
          lineNumber: 8,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/organizations/LoadingMembersSpinner.tsx",
      lineNumber: 5,
      columnNumber: 5
    }, this), LoadingMembersSpinner_default = LoadingMembersSpinner;
  }
});

// app/lib/organizations/hooks/use-transfer-organization-ownership.ts
function useTransferOrganizationOwnership() {
  return useApiRequest(
    "/settings/organization/members/owner",
    "PUT"
  );
}
var use_transfer_organization_ownership_default, init_use_transfer_organization_ownership = __esm({
  "app/lib/organizations/hooks/use-transfer-organization-ownership.ts"() {
    "use strict";
    init_use_api();
    use_transfer_organization_ownership_default = useTransferOrganizationOwnership;
  }
});

// app/components/organizations/TransferOrganizationOwnershipModal.tsx
var import_react96, import_react_i18next40, import_react_hot_toast9, import_jsx_dev_runtime, TransferOrganizationOwnershipModal, TransferOrganizationOwnershipModal_default, init_TransferOrganizationOwnershipModal = __esm({
  "app/components/organizations/TransferOrganizationOwnershipModal.tsx"() {
    "use strict";
    import_react96 = require("react"), import_react_i18next40 = require("react-i18next"), import_react_hot_toast9 = __toESM(require("react-hot-toast"));
    init_use_transfer_organization_ownership();
    init_Button();
    init_Modal();
    init_If();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), TransferOrganizationOwnershipModal = ({ isOpen, setIsOpen, member }) => {
      let targetMemberDisplayName = member.displayName ?? member.email, targetMemberId = member.uid, { t: t2 } = (0, import_react_i18next40.useTranslation)(), heading = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next40.Trans, {
        i18nKey: "organization:transferOwnership"
      }, void 0, !1, {
        fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
        lineNumber: 20,
        columnNumber: 19
      }, this), [transferOrganizationOwnership, transferOrganizationOwnershipState] = use_transfer_organization_ownership_default(), loading = transferOrganizationOwnershipState.loading, onConfirmTransferOwnership = (0, import_react96.useCallback)(async () => {
        let promise = transferOrganizationOwnership({
          userId: targetMemberId
        });
        await import_react_hot_toast9.default.promise(promise, {
          loading: t2("organization:transferringOwnership"),
          success: t2("organization:transferOwnershipSuccess"),
          error: t2("organization:transferOwnershipError")
        }), setIsOpen(!1);
      }, [setIsOpen, t2, targetMemberId, transferOrganizationOwnership]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading,
        isOpen,
        setIsOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next40.Trans, {
                i18nKey: "organization:transferOwnershipDisclaimer",
                values: {
                  member: targetMemberDisplayName
                },
                components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, !1, {
                  fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
                  lineNumber: 50,
                  columnNumber: 30
                }, this) }
              }, void 0, !1, {
                fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
              lineNumber: 44,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next40.Trans, {
                i18nKey: "common:modalConfirmationQuestion"
              }, void 0, !1, {
                fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
                lineNumber: 55,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
              lineNumber: 54,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              block: !0,
              "data-cy": "confirm-transfer-ownership-button",
              color: "danger",
              onClick: onConfirmTransferOwnership,
              loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: loading,
                fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next40.Trans, {
                  i18nKey: "organization:transferOwnership"
                }, void 0, !1, {
                  fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
                  lineNumber: 67,
                  columnNumber: 23
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next40.Trans, {
                  i18nKey: "organization:transferringOwnership"
                }, void 0, !1, {
                  fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
                  lineNumber: 69,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
                lineNumber: 65,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
              lineNumber: 58,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/TransferOrganizationOwnershipModal.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this);
    }, TransferOrganizationOwnershipModal_default = TransferOrganizationOwnershipModal;
  }
});

// app/components/organizations/OrganizationMemberActionsDropdown.tsx
function DropdownButton({
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react97.Menu.Button, {
    "data-cy": "member-actions-dropdown",
    as: "button",
    disabled,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
      label: "Open members actions menu",
      as: "div",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline17.EllipsisVerticalIcon, {
        className: "h-6"
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
var import_react97, import_react_i18next41, import_outline17, import_jsx_dev_runtime, OrganizationMemberActionsDropdown, OrganizationMemberActionsDropdown_default, init_OrganizationMemberActionsDropdown = __esm({
  "app/components/organizations/OrganizationMemberActionsDropdown.tsx"() {
    "use strict";
    import_react97 = require("@headlessui/react"), import_react_i18next41 = require("react-i18next"), import_outline17 = require("@heroicons/react/24/outline");
    init_Dropdown();
    init_IconButton();
    init_If();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), OrganizationMemberActionsDropdown = (props) => {
      let Button2 = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownButton, {
        disabled: props.disabled
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 23,
        columnNumber: 18
      }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
        button: Button2,
        items: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
            "data-cy": "update-member-role-action",
            onClick: props.onChangeRoleSelected,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex items-center space-x-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline17.AdjustmentsHorizontalIcon, {
                  className: "h-5"
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next41.Trans, {
                    i18nKey: "organization:changeRole"
                  }, void 0, !1, {
                    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                    lineNumber: 37,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                  lineNumber: 36,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
              lineNumber: 34,
              columnNumber: 11
            }, this)
          }, 1, !1, {
            fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: props.isOwner,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
              "data-cy": "transfer-ownership-action",
              onClick: props.onTransferOwnershipSelected,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline17.UserCircleIcon, {
                    className: "h-5"
                  }, void 0, !1, {
                    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                    lineNumber: 47,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next41.Trans, {
                      i18nKey: "organization:transferOwnership"
                    }, void 0, !1, {
                      fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                      lineNumber: 49,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                    lineNumber: 48,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, 2, !1, {
            fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, {}, "divider", !1, {
            fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
            "data-cy": "remove-member-action",
            onClick: props.onRemoveSelected,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex items-center space-x-2 text-red-700 dark:text-red-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline17.XMarkIcon, {
                  className: "h-5"
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                  lineNumber: 65,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next41.Trans, {
                    i18nKey: "organization:removeMember"
                  }, void 0, !1, {
                    fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
                  lineNumber: 66,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this)
          }, 3, !1, {
            fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationMemberActionsDropdown.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this);
    };
    OrganizationMemberActionsDropdown_default = OrganizationMemberActionsDropdown;
  }
});

// app/lib/organizations/hooks/use-remove-member.ts
function useRemoveMemberRequest(memberId) {
  let path = `/settings/organization/members/${memberId}`;
  return useApiRequest(path, "DELETE");
}
var use_remove_member_default, init_use_remove_member = __esm({
  "app/lib/organizations/hooks/use-remove-member.ts"() {
    "use strict";
    init_use_api();
    use_remove_member_default = useRemoveMemberRequest;
  }
});

// app/components/organizations/RemoveOrganizationMemberModal.tsx
var import_react98, import_react_i18next42, import_i18next4, import_react_hot_toast10, import_jsx_dev_runtime, RemoveOrganizationMemberModal, RemoveOrganizationMemberModal_default, init_RemoveOrganizationMemberModal = __esm({
  "app/components/organizations/RemoveOrganizationMemberModal.tsx"() {
    "use strict";
    import_react98 = require("react"), import_react_i18next42 = require("react-i18next"), import_i18next4 = require("i18next"), import_react_hot_toast10 = __toESM(require("react-hot-toast"));
    init_use_remove_member();
    init_Button();
    init_Modal();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), RemoveOrganizationMemberModal = ({ isOpen, setIsOpen, member }) => {
      let [removeMemberRequest, { loading }] = use_remove_member_default(member.uid), onUserRemoved = (0, import_react98.useCallback)(async () => {
        await import_react_hot_toast10.default.promise(removeMemberRequest(), {
          success: (0, import_i18next4.t)("removeMemberSuccessMessage"),
          error: (0, import_i18next4.t)("removeMemberErrorMessage"),
          loading: (0, import_i18next4.t)("removeMemberLoadingMessage")
        }), setIsOpen(!1);
      }, [removeMemberRequest, setIsOpen]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next42.Trans, {
          i18nKey: "organization:removeMemberModalHeading"
        }, void 0, !1, {
          fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
          lineNumber: 29,
          columnNumber: 19
        }, this),
        isOpen,
        setIsOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next42.Trans, {
                i18nKey: "common:modalConfirmationQuestion"
              }, void 0, !1, {
                fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
                lineNumber: 35,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
              lineNumber: 34,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              block: !0,
              "data-cy": "confirm-remove-member",
              color: "danger",
              onClick: onUserRemoved,
              loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next42.Trans, {
                i18nKey: "organization:removeMemberSubmitLabel"
              }, void 0, !1, {
                fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
              lineNumber: 38,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/RemoveOrganizationMemberModal.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this);
    }, RemoveOrganizationMemberModal_default = RemoveOrganizationMemberModal;
  }
});

// app/lib/organizations/hooks/use-update-member-role.ts
function useUpdateMemberRequest(memberId) {
  return useApiRequest(
    `/settings/organization/members/${memberId}`,
    "PUT"
  );
}
var use_update_member_role_default, init_use_update_member_role = __esm({
  "app/lib/organizations/hooks/use-update-member-role.ts"() {
    "use strict";
    init_use_api();
    use_update_member_role_default = useUpdateMemberRequest;
  }
});

// app/components/organizations/UpdateMemberRoleModal.tsx
var import_react99, import_react_hot_toast11, import_react_i18next43, import_jsx_dev_runtime, UpdateMemberRoleModal, UpdateMemberRoleModal_default, init_UpdateMemberRoleModal = __esm({
  "app/components/organizations/UpdateMemberRoleModal.tsx"() {
    "use strict";
    import_react99 = require("react"), import_react_hot_toast11 = __toESM(require("react-hot-toast")), import_react_i18next43 = require("react-i18next");
    init_Button();
    init_Modal();
    init_Label();
    init_MembershipRoleSelector();
    init_use_update_member_role();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), UpdateMemberRoleModal = ({ isOpen, setIsOpen, memberRole, member }) => {
      let { t: t2 } = (0, import_react_i18next43.useTranslation)("organization"), [role, setRole] = (0, import_react99.useState)(memberRole), [updateMember, state] = use_update_member_role_default(member.uid), onRoleUpdated = (0, import_react99.useCallback)(async () => {
        if (role === memberRole) {
          let message = t2("chooseDifferentRoleError");
          import_react_hot_toast11.default.error(message, {
            className: "chooseDifferentRoleError"
          });
          return;
        }
        let promise = updateMember({ role });
        await import_react_hot_toast11.default.promise(promise, {
          loading: t2("updateRoleLoadingMessage"),
          success: t2("updateRoleSuccessMessage"),
          error: t2("updatingRoleErrorMessage")
        }), setIsOpen(!1);
      }, [role, memberRole, updateMember, t2, setIsOpen]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next43.Trans, {
          i18nKey: "organization:updateMemberRoleModalHeading"
        }, void 0, !1, {
          fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
          lineNumber: 47,
          columnNumber: 5
        }, this),
        isOpen,
        setIsOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col space-y-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next43.Trans, {
                    i18nKey: "organization:memberRoleInputLabel"
                  }, void 0, !1, {
                    fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
                  lineNumber: 54,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MembershipRoleSelector_default, {
                  value: memberRole,
                  onChange: setRole
                }, void 0, !1, {
                  fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
                  lineNumber: 58,
                  columnNumber: 11
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
              lineNumber: 53,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              "data-cy": "confirm-update-member-role",
              block: !0,
              loading: state.loading,
              onClick: onRoleUpdated,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next43.Trans, {
                i18nKey: "organization:updateRoleSubmitLabel"
              }, void 0, !1, {
                fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
                lineNumber: 67,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
              lineNumber: 61,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/UpdateMemberRoleModal.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this);
    }, UpdateMemberRoleModal_default = UpdateMemberRoleModal;
  }
});

// app/components/organizations/OrganizationMembersActionsContainer.tsx
var import_react100, import_jsx_dev_runtime, OrganizationMembersActionsContainer, OrganizationMembersActionsContainer_default, init_OrganizationMembersActionsContainer = __esm({
  "app/components/organizations/OrganizationMembersActionsContainer.tsx"() {
    "use strict";
    import_react100 = require("react");
    init_membership_role();
    init_TransferOrganizationOwnershipModal();
    init_OrganizationMemberActionsDropdown();
    init_RemoveOrganizationMemberModal();
    init_UpdateMemberRoleModal();
    init_If();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), OrganizationMembersActionsContainer = (props) => {
      let [isUpdatingRole, setIsUpdatingRole] = (0, import_react100.useState)(!1), [isRemovingUser, setIsRemovingUser] = (0, import_react100.useState)(!1), [isTransferringOwnership, setIsTransferringOwnership] = (0, import_react100.useState)(!1), isOwner = props.currentUserRole === membership_role_default.Owner;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationMemberActionsDropdown_default, {
            disabled: props.disabled,
            isOwner,
            onRemoveSelected: () => setIsRemovingUser(!0),
            onChangeRoleSelected: () => setIsUpdatingRole(!0),
            onTransferOwnershipSelected: () => setIsTransferringOwnership(!0)
          }, void 0, !1, {
            fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
            lineNumber: 26,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemoveOrganizationMemberModal_default, {
            setIsOpen: setIsRemovingUser,
            isOpen: isRemovingUser,
            member: props.targetMember
          }, void 0, !1, {
            fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
            lineNumber: 34,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateMemberRoleModal_default, {
            setIsOpen: setIsUpdatingRole,
            isOpen: isUpdatingRole,
            member: props.targetMember,
            memberRole: props.targetMemberRole
          }, void 0, !1, {
            fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
            lineNumber: 40,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: isOwner,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TransferOrganizationOwnershipModal_default, {
              setIsOpen: setIsTransferringOwnership,
              isOpen: isTransferringOwnership,
              member: props.targetMember
            }, void 0, !1, {
              fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
              lineNumber: 48,
              columnNumber: 9
            }, this)
          }, void 0, !1, {
            fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
            lineNumber: 47,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/organizations/OrganizationMembersActionsContainer.tsx",
        lineNumber: 25,
        columnNumber: 5
      }, this);
    }, OrganizationMembersActionsContainer_default = OrganizationMembersActionsContainer;
  }
});

// app/components/organizations/OrganizationMembersList.tsx
var OrganizationMembersList_exports = {};
__export(OrganizationMembersList_exports, {
  default: () => OrganizationMembersList_default
});
function OrganizationMembersList({
  organizationId,
  membersMetadata
}) {
  let userId = useUserId(), {
    data: organization,
    status,
    error
  } = useFetchOrganization(organizationId);
  if (status === "loading")
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingMembersSpinner_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next44.Trans, {
        i18nKey: "organization:loadingMembers"
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationMembersList.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/organizations/OrganizationMembersList.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this);
  if (error)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
      type: "error",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next44.Trans, {
        i18nKey: "organization:loadMembersError"
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationMembersList.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/organizations/OrganizationMembersList.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this);
  let members = getSortedMembers(organization), currentUser = members.find((member) => member.id === userId);
  if (!currentUser)
    return null;
  let userRole = currentUser.role;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full space-y-10",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col divide-y divide-gray-100 dark:divide-black-400",
      children: members.map(({ role, id: memberId }) => {
        let metadata = membersMetadata == null ? void 0 : membersMetadata.find((metadata2) => metadata2.uid === memberId);
        if (!metadata)
          return null;
        let displayName = metadata.displayName ? metadata.displayName : metadata.email, isCurrentUser = userId === metadata.uid, shouldEnableActions = canUpdateUser(userRole, role), key = `${metadata.uid}:${userRole}`;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          "data-cy": "organization-member",
          className: "flex flex-col py-2 lg:flex-row lg:items-center lg:space-x-2 justify-between space-y-2 lg:space-y-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-auto items-center space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileAvatar_default, {
                  user: metadata
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 96,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "block truncate text-sm",
                  children: displayName
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 98,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: isCurrentUser,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge_default, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next44.Trans, {
                      i18nKey: "organization:youBadgeLabel"
                    }, void 0, !1, {
                      fileName: "app/components/organizations/OrganizationMembersList.tsx",
                      lineNumber: 102,
                      columnNumber: 21
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/OrganizationMembersList.tsx",
                    lineNumber: 101,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 100,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/OrganizationMembersList.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center justify-end space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoleBadge_default, {
                    role
                  }, void 0, !1, {
                    fileName: "app/components/organizations/OrganizationMembersList.tsx",
                    lineNumber: 109,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 108,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationMembersActionsContainer_default, {
                  disabled: !shouldEnableActions,
                  targetMember: metadata,
                  targetMemberRole: role,
                  currentUserRole: userRole
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationMembersList.tsx",
                  lineNumber: 112,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/OrganizationMembersList.tsx",
              lineNumber: 107,
              columnNumber: 15
            }, this)
          ]
        }, key, !0, {
          fileName: "app/components/organizations/OrganizationMembersList.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this);
      })
    }, void 0, !1, {
      fileName: "app/components/organizations/OrganizationMembersList.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/organizations/OrganizationMembersList.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
function getSortedMembers(organization) {
  return Object.keys(organization.members).map((memberId) => ({
    ...organization.members[memberId],
    id: memberId
  })).sort((prev, next) => next.role > prev.role ? 1 : -1);
}
var import_react_i18next44, import_jsx_dev_runtime, OrganizationMembersList_default, init_OrganizationMembersList = __esm({
  "app/components/organizations/OrganizationMembersList.tsx"() {
    "use strict";
    import_react_i18next44 = require("react-i18next");
    init_If();
    init_Badge();
    init_use_user_id();
    init_RoleBadge();
    init_ProfileAvatar();
    init_Alert();
    init_permissions();
    init_use_fetch_organization();
    init_LoadingMembersSpinner();
    init_OrganizationMembersActionsContainer();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime");
    OrganizationMembersList_default = OrganizationMembersList;
  }
});

// app/lib/organizations/hooks/use-fetch-invited-members.ts
function useFetchInvitedMembers(organizationId) {
  let firestore = (0, import_reactfire24.useFirestore)(), collectionRef = (0, import_firestore13.collection)(
    firestore,
    ORGANIZATIONS_COLLECTION,
    organizationId,
    INVITES_COLLECTION
  );
  return (0, import_reactfire24.useFirestoreCollectionData)(collectionRef, {
    idField: "id"
  });
}
var import_firestore13, import_reactfire24, use_fetch_invited_members_default, init_use_fetch_invited_members = __esm({
  "app/lib/organizations/hooks/use-fetch-invited-members.ts"() {
    "use strict";
    import_firestore13 = require("firebase/firestore"), import_reactfire24 = require("reactfire");
    init_firestore_collections();
    use_fetch_invited_members_default = useFetchInvitedMembers;
  }
});

// app/lib/organizations/hooks/use-delete-invite.ts
function useDeleteInvite() {
  let firestore = (0, import_reactfire25.useFirestore)();
  return (0, import_react101.useCallback)(
    (organizationId, inviteId) => {
      let path = getDeleteInvitePath(organizationId, inviteId), docRef = (0, import_firestore14.doc)(firestore, path);
      return (0, import_firestore14.deleteDoc)(docRef);
    },
    [firestore]
  );
}
function getDeleteInvitePath(organizationId, inviteId) {
  return [
    ORGANIZATIONS_COLLECTION,
    organizationId,
    INVITES_COLLECTION,
    inviteId
  ].join("/");
}
var import_reactfire25, import_firestore14, import_react101, use_delete_invite_default, init_use_delete_invite = __esm({
  "app/lib/organizations/hooks/use-delete-invite.ts"() {
    "use strict";
    import_reactfire25 = require("reactfire"), import_firestore14 = require("firebase/firestore"), import_react101 = require("react");
    init_firestore_collections();
    use_delete_invite_default = useDeleteInvite;
  }
});

// app/components/organizations/DeleteInviteButton.tsx
var import_react102, import_react_hot_toast12, import_react_i18next45, import_XMarkIcon4, import_jsx_dev_runtime, DeleteInviteButton, DeleteInviteButton_default, init_DeleteInviteButton = __esm({
  "app/components/organizations/DeleteInviteButton.tsx"() {
    "use strict";
    import_react102 = require("react"), import_react_hot_toast12 = __toESM(require("react-hot-toast")), import_react_i18next45 = require("react-i18next"), import_XMarkIcon4 = __toESM(require("@heroicons/react/24/outline/XMarkIcon"));
    init_use_delete_invite();
    init_IconButton();
    init_If();
    init_Modal();
    init_Button();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DeleteInviteButton = ({ inviteId, organizationId, memberEmail }) => {
      let [isDeleting, setIsDeleting] = (0, import_react102.useState)(!1), deleteRequest = use_delete_invite_default(), { t: t2 } = (0, import_react_i18next45.useTranslation)("organization"), onInviteDeleteRequested = (0, import_react102.useCallback)(async () => {
        let promise = deleteRequest(organizationId, inviteId);
        await import_react_hot_toast12.default.promise(promise, {
          success: t2("deleteInviteSuccessMessage"),
          error: t2("deleteInviteErrorMessage"),
          loading: t2("deleteInviteLoadingMessage")
        }), setIsDeleting(!1);
      }, [deleteRequest, inviteId, organizationId, t2]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
            "data-cy": "delete-invite-button",
            label: "Delete Invite",
            onClick: () => setIsDeleting(!0),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_XMarkIcon4.default, {
              className: "h-6"
            }, void 0, !1, {
              fileName: "app/components/organizations/DeleteInviteButton.tsx",
              lineNumber: 43,
              columnNumber: 9
            }, this)
          }, void 0, !1, {
            fileName: "app/components/organizations/DeleteInviteButton.tsx",
            lineNumber: 38,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: isDeleting,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
              heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next45.Trans, {
                i18nKey: "organization:deleteInviteModalHeading"
              }, void 0, !1, {
                fileName: "app/components/organizations/DeleteInviteButton.tsx",
                lineNumber: 34,
                columnNumber: 19
              }, this),
              isOpen: isDeleting,
              setIsOpen: setIsDeleting,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col space-y-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next45.Trans, {
                      i18nKey: "organization:confirmDeletingMemberInvite",
                      values: { email: memberEmail },
                      components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, !1, {
                        fileName: "app/components/organizations/DeleteInviteButton.tsx",
                        lineNumber: 53,
                        columnNumber: 34
                      }, this) }
                    }, void 0, !1, {
                      fileName: "app/components/organizations/DeleteInviteButton.tsx",
                      lineNumber: 50,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/DeleteInviteButton.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next45.Trans, {
                      i18nKey: "common:modalConfirmationQuestion"
                    }, void 0, !1, {
                      fileName: "app/components/organizations/DeleteInviteButton.tsx",
                      lineNumber: 58,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/DeleteInviteButton.tsx",
                    lineNumber: 57,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                    "data-cy": "confirm-delete-invite-button",
                    color: "danger",
                    onClick: onInviteDeleteRequested,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next45.Trans, {
                      i18nKey: "organization:deleteInviteSubmitLabel"
                    }, void 0, !1, {
                      fileName: "app/components/organizations/DeleteInviteButton.tsx",
                      lineNumber: 66,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/DeleteInviteButton.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/organizations/DeleteInviteButton.tsx",
                lineNumber: 48,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/DeleteInviteButton.tsx",
              lineNumber: 47,
              columnNumber: 9
            }, this)
          }, void 0, !1, {
            fileName: "app/components/organizations/DeleteInviteButton.tsx",
            lineNumber: 46,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/organizations/DeleteInviteButton.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this);
    }, DeleteInviteButton_default = DeleteInviteButton;
  }
});

// app/components/organizations/OrganizationInvitedMembersList.tsx
var OrganizationInvitedMembersList_exports = {};
__export(OrganizationInvitedMembersList_exports, {
  default: () => OrganizationInvitedMembersList_default
});
var import_react_i18next46, import_jsx_dev_runtime, OrganizationInvitedMembersList, OrganizationInvitedMembersList_default, init_OrganizationInvitedMembersList = __esm({
  "app/components/organizations/OrganizationInvitedMembersList.tsx"() {
    "use strict";
    import_react_i18next46 = require("react-i18next");
    init_use_fetch_invited_members();
    init_permissions();
    init_FallbackUserAvatar();
    init_RoleBadge();
    init_DeleteInviteButton();
    init_IfHasPermissions();
    init_LoadingMembersSpinner();
    init_Alert();
    import_jsx_dev_runtime = require("react/jsx-dev-runtime"), OrganizationInvitedMembersList = ({ organizationId }) => {
      let { data: members, status } = use_fetch_invited_members_default(organizationId);
      return status === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingMembersSpinner_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next46.Trans, {
          i18nKey: "organization:loadingInvitedMembers"
        }, void 0, !1, {
          fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this) : status === "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
        type: "error",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next46.Trans, {
          i18nKey: "organization:loadInvitedMembersError"
        }, void 0, !1, {
          fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this) : members.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col divide-y divide-gray-100 dark:divide-black-400",
        children: members.map(({ email, role, code, id }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          "data-cy": "invited-member",
          "data-code": code,
          className: "flex flex-col py-2 lg:flex-row lg:items-center lg:space-x-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-auto items-center space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FallbackUserAvatar_default, {
                  text: email
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                  lineNumber: 56,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "block truncate text-sm",
                  children: email
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                  lineNumber: 58,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center justify-end space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RoleBadge_default, {
                  role
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
                  condition: canDeleteInvites,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteInviteButton_default, {
                    inviteId: id,
                    organizationId,
                    memberEmail: email
                  }, void 0, !1, {
                    fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
                  lineNumber: 64,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
              lineNumber: 61,
              columnNumber: 13
            }, this)
          ]
        }, id, !0, {
          fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-sm",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next46.Trans, {
          i18nKey: "organization:noPendingInvites"
        }, void 0, !1, {
          fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationInvitedMembersList.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this);
    }, OrganizationInvitedMembersList_default = OrganizationInvitedMembersList;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_react_i18next2 = require("react-i18next");

// app/i18n/initialize-server-i18n.ts
var import_node_path2 = require("path"), import_i18next2 = require("i18next"), import_i18next_fs_backend2 = __toESM(require("i18next-fs-backend")), import_react_i18next = require("react-i18next");

// app/i18n/i18n.server.ts
var import_node_path = require("path"), import_i18next_fs_backend = __toESM(require("i18next-fs-backend")), import_remix_i18next = require("remix-i18next");

// app/core/generic/is-browser.ts
function isBrowser() {
  return typeof window < "u";
}
var is_browser_default = isBrowser;

// app/i18n/i18next.config.ts
var env = is_browser_default() ? window.ENV : process.env, DEFAULT_LOCALE = env.DEFAULT_LOCALE ?? "en", i18Config = {
  fallbackLanguage: DEFAULT_LOCALE,
  supportedLanguages: [DEFAULT_LOCALE],
  defaultNS: [
    "common",
    "auth",
    "organization",
    "profile",
    "subscription",
    "task",
    "photo"
  ],
  react: { useSuspense: !1 }
}, i18next_config_default = i18Config;

// app/i18n/i18n.server.ts
var i18nNext = new import_remix_i18next.RemixI18Next({
  detection: {
    supportedLanguages: i18next_config_default.supportedLanguages,
    fallbackLanguage: i18next_config_default.fallbackLanguage
  },
  i18next: {
    ...i18next_config_default,
    backend: {
      loadPath: (0, import_node_path.resolve)("./public/locales/{{lng}}/{{ns}}.json")
    }
  },
  backend: import_i18next_fs_backend.default
}), i18n_server_default = i18nNext;

// app/i18n/initialize-server-i18n.ts
async function initializeServerI18n(request, context) {
  let instance = (0, import_i18next2.createInstance)(), lng = await i18n_server_default.getLocale(request), ns = [...i18next_config_default.defaultNS, ...i18n_server_default.getRouteNamespaces(context)];
  return await instance.use(import_react_i18next.initReactI18next).use(import_i18next_fs_backend2.default).init({
    ...i18next_config_default,
    lng,
    ns,
    backend: {
      loadPath: (0, import_node_path2.resolve)("./public/locales/{{lng}}/{{ns}}.json")
    }
  }), instance;
}
var initialize_server_i18n_default = initializeServerI18n;

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady", i18n = await initialize_server_i18n_default(request, remixContext);
  return new Promise((resolve3, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next2.I18nextProvider, {
        i18n,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve3(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links2,
  loader: () => loader
});

// app/styles/dist.css
var dist_default = "/build/_assets/dist-GEPXDC2U.css";

// app/root.tsx
var import_node2 = require("@remix-run/node"), import_react25 = require("@remix-run/react"), import_classnames6 = __toESM(require("classnames"));

// app/configuration.ts
var import_auth = require("firebase/auth");

// app/core/get-env.ts
function getEnv() {
  return is_browser_default() ? window.ENV : process.env;
}
var get_env_default = getEnv;

// app/configuration.ts
var env2 = get_env_default() ?? {}, configuration = {
  site: {
    name: "Awesomely - Your SaaS Title",
    description: "Your SaaS Description",
    themeColor: "#ffffff",
    themeColorDark: "#0a0a0a",
    siteUrl: env2.SITE_URL,
    siteName: "Awesomely",
    twitterHandle: "",
    githubHandle: "",
    language: "en",
    convertKitFormId: "",
    locale: env2.DEFAULT_LOCALE
  },
  auth: {
    enableMultiFactorAuth: !1,
    providers: {
      emailPassword: !0,
      phoneNumber: !1,
      emailLink: !1,
      oAuth: [import_auth.GoogleAuthProvider]
    }
  },
  emulatorHost: env2.EMULATOR_HOST,
  emulator: env2.EMULATOR === "true",
  production: env2.NODE_ENV === "production",
  environment: env2.ENVIRONMENT,
  paths: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
    emailLinkSignIn: "/auth/link",
    onboarding: "/onboarding",
    appHome: "/dashboard",
    settings: {
      profile: "/settings/profile",
      authentication: "/settings/profile/authentication",
      email: "/settings/profile/email",
      password: "/settings/profile/password"
    },
    api: {
      checkout: "/stripe/checkout",
      billingPortal: "/stripe/portal"
    },
    searchIndex: "/public/search-index"
  },
  appCheckSiteKey: env2.APPCHECK_KEY,
  email: {
    host: "",
    port: 587,
    user: "",
    password: "",
    senderAddress: "MakerKit Team <info@makerkit.dev>"
  },
  sentry: {
    dsn: env2.SENTRY_DSN
  },
  stripe: {
    plans: [
      {
        name: "Basic",
        description: "Description of your Basic plan",
        price: "$9/month",
        stripePriceId: "price_1LfXGaI1i3VnbZTq7l3VgZNa",
        trialPeriodDays: 0,
        features: [
          "Basic Reporting",
          "Up to 20 users",
          "1GB for each user",
          "Chat Support"
        ]
      },
      {
        name: "Pro",
        description: "Description of your Pro plan",
        price: "29/month",
        stripePriceId: "pro-plan",
        features: [
          "Advanced Reporting",
          "Up to 50 users",
          "5GB for each user",
          "Chat and Phone Support"
        ]
      },
      {
        name: "Premium",
        description: "Description of your Premium plan",
        price: "$79/year",
        stripePriceId: "premium-plan",
        features: [
          "Advanced Reporting",
          "Unlimited users",
          "50GB for each user",
          "Account Manager"
        ]
      }
    ]
  }
}, configuration_default = configuration;

// app/core/ui/Head.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Head = () => {
  let siteUrl = configuration_default.site.siteUrl;
  if (!siteUrl)
    throw new Error("Please add the property siteUrl in the configuration");
  let structuredData = {
    name: configuration_default.site.name,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/favicon/favicon-150x150.png`,
    "@context": "https://schema.org",
    "@type": "Organization"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
        children: configuration_default.site.name
      }, "title", !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/assets/images/favicon/favicon.ico"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/assets/images/favicon/apple-touch-icon.png"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/images/favicon/favicon-16x16.png"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/images/favicon/favicon-32x32.png"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "manifest",
        href: "/assets/images/favicon/site.webmanifest"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "mask-icon",
        href: "/assets/images/favicon/safari-pinned-tab.svg",
        color: "#000000"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "dns-prefetch",
        href: "//fonts.googleapis.com"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "msapplication-config",
        content: "/favicon/browserconfig.xml"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "theme-color",
        content: configuration_default.site.themeColor
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "description",
        content: configuration_default.site.description
      }, "meta:description", !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "og:title",
        content: configuration_default.site.name
      }, "og:title", !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "og:description",
        content: configuration_default.site.description
      }, "og:description", !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "og:site_name",
        content: configuration_default.site.siteName
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "twitter:title",
        content: configuration_default.site.siteName
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        property: "twitter:creator",
        content: configuration_default.site.twitterHandle
      }, void 0, !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
        async: !0,
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(structuredData) }
      }, "ld:json", !1, {
        fileName: "app/core/ui/Head.tsx",
        lineNumber: 92,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/core/ui/Head.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, Head_default = Head;

// app/core/generic/get-cookie-header.ts
function getCookieHeader(request) {
  return request.headers.get("Cookie");
}
var get_cookie_header_default = getCookieHeader;

// app/lib/server/cookies/theme.cookie.ts
var THEME_COOKIE_NAME = "theme";
async function parseThemeCookie(request) {
  return (await getThemeCookie()).parse(get_cookie_header_default(request));
}
async function getThemeCookie() {
  let { createCookie } = await import("@remix-run/node");
  return createCookie(THEME_COOKIE_NAME, {
    path: "/",
    httpOnly: !1,
    secure: process.env.EMULATOR !== "true",
    sameSite: "lax"
  });
}

// app/components/AppRouteLoadingIndicator.tsx
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/core/ui/ClientOnly.tsx
var import_react2 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ClientOnly({ children }) {
  let [mounted, setMounted] = (0, import_react2.useState)(!1);
  return (0, import_react2.useEffect)(() => {
    setMounted(!0);
  }, []), mounted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Suspense, {
    fallback: "",
    children
  }, void 0, !1, {
    fileName: "app/core/ui/ClientOnly.tsx",
    lineNumber: 11,
    columnNumber: 20
  }, this) : null;
}
var ClientOnly_default = ClientOnly;

// app/components/AppRouteLoadingIndicator.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LoadingBar = (0, import_react4.lazy)(() => import("react-top-loading-bar")), DEFAULT_MIN_WAITING = 50;
function AppRouteLoadingIndicator() {
  let ref3 = (0, import_react4.createRef)(), runningRef = (0, import_react4.useRef)(!1), timeoutRef = (0, import_react4.useRef)(), transition = (0, import_react3.useTransition)(), scheduleAnimation = (0, import_react4.useCallback)(() => window.setTimeout(() => {
    var _a;
    runningRef.current = !0, (_a = ref3.current) == null || _a.continuousStart();
  }, DEFAULT_MIN_WAITING), [ref3]);
  return (0, import_react4.useEffect)(() => {
    var _a;
    let isIdle = transition.state === "idle";
    transition.type === "normalLoad" && transition.state === "loading" && (timeoutRef.current = scheduleAnimation()), isIdle && (timeoutRef.current && window.clearTimeout(timeoutRef.current), runningRef.current && ((_a = ref3.current) == null || _a.complete(), runningRef.current = !1));
  }, [ref3, transition.type, transition.state, scheduleAnimation]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingBar, {
      waitingTime: 200,
      shadow: !0,
      className: "bg-primary-500",
      color: "",
      ref: ref3
    }, void 0, !1, {
      fileName: "app/components/AppRouteLoadingIndicator.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/AppRouteLoadingIndicator.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var AppRouteLoadingIndicator_default = AppRouteLoadingIndicator;

// app/components/RootCatchBoundary.tsx
var import_react24 = require("@remix-run/react"), import_react_i18next6 = require("react-i18next");

// app/core/ui/Container.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Container = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "Container",
  children
}, void 0, !1, {
  fileName: "app/core/ui/Container.tsx",
  lineNumber: 2,
  columnNumber: 10
}, this), Container_default = Container;

// app/components/RootCatchBoundary.tsx
init_Button();

// app/core/ui/Hero.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Hero = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
  className: "Hero",
  children
}, void 0, !1, {
  fileName: "app/core/ui/Hero.tsx",
  lineNumber: 2,
  columnNumber: 10
}, this), Hero_default = Hero;

// app/components/RootCatchBoundary.tsx
init_If();

// app/core/ui/SubHeading.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SubHeading = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
  className: "SubHeading",
  children
}, void 0, !1, {
  fileName: "app/core/ui/SubHeading.tsx",
  lineNumber: 2,
  columnNumber: 10
}, this), SubHeading_default = SubHeading;

// app/components/SiteHeader.tsx
var import_react20 = require("react"), import_reactfire = require("reactfire"), import_outline3 = require("@heroicons/react/24/outline");

// app/core/ui/Logo/Logo.tsx
var import_react7 = require("@remix-run/react");

// app/core/ui/Logo/LogoImage.tsx
var import_classnames2 = __toESM(require("classnames")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LogoImage = ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  width: 105,
  className: (0, import_classnames2.default)("w-[95px] sm:w-[105px]", className),
  viewBox: "0 0 733 140",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M119.081 138V73.209C119.081 67.551 117.08 62.79 113.078 58.926C109.214 55.062 104.453 53.13 98.7951 53.13C93.2751 53.13 88.4451 55.062 84.3051 58.926C80.3031 62.652 78.3021 67.344 78.3021 73.002V138H59.4651V73.002C59.4651 67.206 57.5331 62.514 53.6691 58.926C49.5291 55.062 44.6301 53.13 38.9721 53.13C33.4521 53.13 28.7601 55.062 24.8961 58.926C20.7561 63.066 18.6861 67.965 18.6861 73.623V138H0.0560548V36.984H18.6861V44.643C21.0321 41.745 24.0681 39.33 27.7941 37.398C31.6581 35.466 35.3841 34.5 38.9721 34.5C45.0441 34.5 50.5641 35.742 55.5321 38.226C60.6381 40.572 65.0541 43.884 68.7801 48.162C72.5061 43.884 76.9221 40.572 82.0281 38.226C87.1341 35.742 92.7231 34.5 98.7951 34.5C104.177 34.5 109.214 35.466 113.906 37.398C118.598 39.33 122.738 42.09 126.326 45.678C129.914 49.266 132.674 53.475 134.606 58.305C136.676 62.997 137.711 67.965 137.711 73.209V138H119.081ZM242.173 138V122.268C237.757 127.374 232.651 131.445 226.855 134.481C221.059 137.517 214.918 139.035 208.432 139.035C201.256 139.035 194.494 137.724 188.146 135.102C181.936 132.48 176.416 128.754 171.586 123.924C166.756 119.232 162.961 113.712 160.201 107.364C157.579 100.878 156.268 94.116 156.268 87.078C156.268 80.04 157.579 73.347 160.201 66.999C162.961 60.513 166.756 54.855 171.586 50.025C176.416 45.195 181.936 41.469 188.146 38.847C194.494 36.225 201.256 34.914 208.432 34.914C215.056 34.914 221.266 36.294 227.062 39.054C232.996 41.814 238.033 45.678 242.173 50.646V36.984H260.803V138H242.173ZM208.432 53.337C203.878 53.337 199.462 54.234 195.184 56.028C191.044 57.684 187.456 60.03 184.42 63.066C181.384 66.102 178.969 69.759 177.175 74.037C175.519 78.177 174.691 82.524 174.691 87.078C174.691 91.632 175.519 95.979 177.175 100.119C178.969 104.259 181.384 107.847 184.42 110.883C187.456 113.919 191.044 116.334 195.184 118.128C199.462 119.784 203.878 120.612 208.432 120.612C212.986 120.612 217.333 119.784 221.473 118.128C225.613 116.334 229.201 113.919 232.237 110.883C235.273 107.847 237.619 104.259 239.275 100.119C241.069 95.979 241.966 91.632 241.966 87.078C241.966 82.524 241.069 78.177 239.275 74.037C237.619 69.759 235.273 66.102 232.237 63.066C229.201 60.03 225.613 57.684 221.473 56.028C217.333 54.234 212.986 53.337 208.432 53.337ZM331.127 138L299.663 99.705V138H281.447V0.344996H299.663V59.754L327.815 33.258H354.932L305.873 78.798L355.139 138H331.127ZM379.299 94.116C379.299 97.428 380.472 100.878 382.818 104.466C385.302 108.054 388.131 111.09 391.305 113.574C397.101 118.128 403.863 120.405 411.591 120.405C423.873 120.405 433.878 114.471 441.606 102.603L457.338 111.918C451.956 120.612 445.332 127.305 437.466 131.997C429.6 136.689 420.975 139.035 411.591 139.035C404.553 139.035 397.86 137.724 391.512 135.102C385.164 132.342 379.575 128.547 374.745 123.717C369.915 118.887 366.12 113.298 363.36 106.95C360.738 100.602 359.427 93.909 359.427 86.871C359.427 79.833 360.738 73.14 363.36 66.792C366.12 60.306 369.915 54.648 374.745 49.818C379.437 44.988 384.957 41.262 391.305 38.64C397.791 36.018 404.553 34.707 411.591 34.707C418.629 34.707 425.322 36.018 431.67 38.64C438.156 41.262 443.745 44.988 448.437 49.818C458.649 60.306 463.755 72.45 463.755 86.25C463.755 88.734 463.548 91.356 463.134 94.116H379.299ZM411.591 51.681C405.933 51.681 400.62 52.923 395.652 55.407C390.684 57.891 386.682 61.203 383.646 65.343C380.748 69.345 379.299 73.623 379.299 78.177H443.883C443.883 73.623 442.365 69.345 439.329 65.343C436.431 61.203 432.498 57.891 427.53 55.407C422.562 52.923 417.249 51.681 411.591 51.681ZM528.543 54.372C525.231 52.854 522.264 52.095 519.642 52.095C514.122 52.095 509.568 54.027 505.98 57.891C502.116 62.031 500.184 66.792 500.184 72.174V138H482.382V72.174C482.382 64.722 484.245 57.891 487.971 51.681C491.835 45.471 497.079 40.641 503.703 37.191C508.671 34.845 513.984 33.672 519.642 33.672C524.196 33.672 528.543 34.5 532.683 36.156C536.823 37.812 541.17 40.503 545.724 44.229L528.543 54.372ZM610.092 138L578.628 99.705V138H560.412V0.344996H578.628V59.754L606.78 33.258H633.897L584.838 78.798L634.104 138H610.092ZM656.049 19.596C653.427 19.596 651.15 18.699 649.218 16.905C647.424 14.973 646.527 12.696 646.527 10.074C646.527 7.45199 647.424 5.24399 649.218 3.44999C651.15 1.51799 653.427 0.551993 656.049 0.551993C658.671 0.551993 660.879 1.51799 662.673 3.44999C664.605 5.24399 665.571 7.45199 665.571 10.074C665.571 12.696 664.605 14.973 662.673 16.905C660.879 18.699 658.671 19.596 656.049 19.596ZM647.562 138V34.5H664.95V138H647.562ZM717.4 53.13V138H699.805V53.13H684.28V34.5H699.805V0.344996H717.4V34.5H732.925V53.13H717.4Z",
      fill: "url(#paint0_linear_1666_2)"
    }, void 0, !1, {
      fileName: "app/core/ui/Logo/LogoImage.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
        id: "paint0_linear_1666_2",
        x1: "1.12419",
        y1: "78",
        x2: "724.566",
        y2: "63.6614",
        gradientUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            stopColor: "#0E73CC"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImage.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "0.255208",
            stopColor: "#8E79DE"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImage.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "0.494792",
            stopColor: "#EF4444"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImage.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "0.755208",
            stopColor: "#FCB061"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImage.tsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "1",
            stopColor: "#FFE81D"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImage.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/core/ui/Logo/LogoImage.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/Logo/LogoImage.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/core/ui/Logo/LogoImage.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), LogoImage_default = LogoImage;

// app/core/ui/Logo/Logo.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Logo = ({
  href,
  className
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
  to: href ?? "/",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage_default, {
    className
  }, void 0, !1, {
    fileName: "app/core/ui/Logo/Logo.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/core/ui/Logo/Logo.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), Logo_default = Logo;

// app/components/SiteHeader.tsx
init_If();
init_Button();

// app/components/SiteNavigation.tsx
var import_react11 = require("@headlessui/react"), import_Bars3Icon = __toESM(require("@heroicons/react/24/outline/Bars3Icon"));

// app/core/ui/Navigation/NavigationItem.tsx
var import_react8 = require("@remix-run/react"), import_react_i18next3 = require("react-i18next"), import_classnames3 = __toESM(require("classnames")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), NavigationMenuItem = ({ link, className, end, disabled }) => {
  let label = link.label;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.NavLink, {
    end,
    className: (props) => (0, import_classnames3.default)("NavigationItem", className, {
      NavigationItemActive: props.isActive,
      NavigationItemNotActive: !props.isActive
    }),
    "aria-disabled": disabled,
    to: disabled ? "" : link.path,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next3.Trans, {
      i18nKey: label,
      defaults: label
    }, void 0, !1, {
      fileName: "app/core/ui/Navigation/NavigationItem.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Navigation/NavigationItem.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, NavigationItem_default = NavigationMenuItem;

// app/core/ui/Navigation/NavigationMenu.tsx
var import_classnames4 = __toESM(require("classnames")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function NavigationMenu(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    className: (0, import_classnames4.default)("NavigationMenu", {
      BorderedNavigationMenu: "bordered" in props && props.bordered,
      SecondaryNavigationMenu: "secondary" in props && props.secondary,
      VerticalNavigationMenu: props.vertical
    }),
    children: props.children
  }, void 0, !1, {
    fileName: "app/core/ui/Navigation/NavigationMenu.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var NavigationMenu_default = NavigationMenu;

// app/components/SiteNavigation.tsx
init_Dropdown();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = {
  SignIn: {
    label: "Sign In",
    path: "/auth/sign-in"
  },
  Pricing: {
    label: "Pricing",
    path: "/pricing"
  },
  FAQ: {
    label: "FAQ",
    path: "/faq"
  }
}, SiteNavigation = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "hidden items-center space-x-0.5 lg:flex",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
            className: "flex lg:hidden",
            link: links.SignIn
          }, void 0, !1, {
            fileName: "app/components/SiteNavigation.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
            link: links.Pricing
          }, void 0, !1, {
            fileName: "app/components/SiteNavigation.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
            link: links.FAQ
          }, void 0, !1, {
            fileName: "app/components/SiteNavigation.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/SiteNavigation.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/SiteNavigation.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "ml-4 flex items-center lg:hidden",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileDropdown, {}, void 0, !1, {
        fileName: "app/components/SiteNavigation.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/SiteNavigation.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/SiteNavigation.tsx",
  lineNumber: 30,
  columnNumber: 5
}, this);
function MobileDropdown() {
  let Button2 = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Menu.Button, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Bars3Icon.default, {
      className: "h-9"
    }, void 0, !1, {
      fileName: "app/components/SiteNavigation.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/SiteNavigation.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this), Links3 = Object.values(links).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
    href: item.path,
    children: item.label
  }, item.path, !1, {
    fileName: "app/components/SiteNavigation.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
    button: Button2,
    items: Links3
  }, void 0, !1, {
    fileName: "app/components/SiteNavigation.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
var SiteNavigation_default = SiteNavigation;

// app/components/ProfileDropdown.tsx
var import_react12 = require("react"), import_react_i18next4 = require("react-i18next"), import_react13 = require("@headlessui/react"), import_outline2 = require("@heroicons/react/24/outline");
init_Dropdown();
init_ProfileAvatar();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ProfileDropdown = ({ user, signOutRequested }) => {
  let ProfileDropdownButton = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react13.Menu.Button, {
    as: "span",
    className: "flex cursor-pointer items-center space-x-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileAvatar_default, {
        user
      }, void 0, !1, {
        fileName: "app/components/ProfileDropdown.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.ChevronDownIcon, {
        className: "hidden h-3 sm:block"
      }, void 0, !1, {
        fileName: "app/components/ProfileDropdown.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/ProfileDropdown.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this), signedInAsLabel = (0, import_react12.useMemo)(() => (user == null ? void 0 : user.email) ?? (user == null ? void 0 : user.phoneNumber) ?? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next4.Trans, {
    i18nKey: "common:anonymousUser"
  }, void 0, !1, {
    fileName: "app/components/ProfileDropdown.tsx",
    lineNumber: 35,
    columnNumber: 28
  }, this), [user]), items = [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
      className: "rounded-none py-0",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-start text-left text-xs ellipsify",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-gray-500",
            children: "Signed in as"
          }, void 0, !1, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "block ellipsify",
              children: signedInAsLabel
            }, void 0, !1, {
              fileName: "app/components/ProfileDropdown.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/ProfileDropdown.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    }, "signedInAs", !1, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, {}, "divider1", !1, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 51,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdownMenuItem, {
      href: "/dashboard",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.Squares2X2Icon, {
          className: "h-5"
        }, void 0, !1, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next4.Trans, {
            i18nKey: "common:dashboardTabLabel"
          }, void 0, !1, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 54,
          columnNumber: 7
        }, this)
      ]
    }, "profile", !0, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdownMenuItem, {
      href: "/settings/profile",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.Cog8ToothIcon, {
          className: "h-5"
        }, void 0, !1, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next4.Trans, {
            i18nKey: "common:settingsTabLabel"
          }, void 0, !1, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 60,
          columnNumber: 7
        }, this)
      ]
    }, "profile", !0, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, {}, "divider2", !1, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 64,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdownMenuItem, {
      onClick: signOutRequested,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.ArrowLeftOnRectangleIcon, {
          className: "h-5"
        }, void 0, !1, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next4.Trans, {
            i18nKey: "auth:signOut"
          }, void 0, !1, {
            fileName: "app/components/ProfileDropdown.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        }, void 0, !1, {
          fileName: "app/components/ProfileDropdown.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this)
      ]
    }, "sign-out", !0, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 65,
      columnNumber: 5
    }, this)
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
    button: ProfileDropdownButton,
    items
  }, void 0, !1, {
    fileName: "app/components/ProfileDropdown.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
};
function ProfileDropdownMenuItem(props) {
  let onClick = "onClick" in props ? props.onClick : void 0, href = "href" in props ? props.href : void 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
    href,
    onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "space-between flex w-full items-center space-x-4",
      children: props.children
    }, void 0, !1, {
      fileName: "app/components/ProfileDropdown.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/ProfileDropdown.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}
var ProfileDropdown_default = ProfileDropdown;

// app/components/DarkModeToggle.tsx
var import_react16 = require("react"), import_react_i18next5 = require("react-i18next"), import_react17 = require("@headlessui/react"), import_MoonIcon = __toESM(require("@heroicons/react/24/outline/MoonIcon")), import_SunIcon = __toESM(require("@heroicons/react/24/outline/SunIcon"));

// app/core/generic/cookies.ts
var import_uri_js = require("uri-js");
function getCookie(name) {
  let cookieDict = document.cookie.split(";").map((x) => x.split("=")).reduce((accum, current) => (accum[current[0]] = current[1], accum), Object());
  return JSON.parse(decodeURIComponent(atob(cookieDict[name])));
}
function setCookie(name, value) {
  document.cookie = `${name}=${encodeCookie(value)}; Path=/`;
}
function encodeCookie(value) {
  return btoa((0, import_uri_js.unescapeComponent)(encodeURIComponent(JSON.stringify(value))));
}

// app/core/theming.ts
var THEME_KEY = "theme", LIGHT_THEME_META_COLOR = configuration_default.site.themeColor, DARK_THEME_META_COLOR = configuration_default.site.themeColorDark, DARK_THEME_CLASSNAME = "dark", LIGHT_THEME_CLASSNAME = "light";
function getDefaultTheme() {
  return getThemeFromHTML();
}
function getStoredTheme() {
  return getCookie("theme");
}
function setTheme(theme) {
  let root = getHtml();
  getDefaultTheme() !== theme && (theme === DARK_THEME_CLASSNAME ? (root.classList.add(DARK_THEME_CLASSNAME), setMetaTag(DARK_THEME_META_COLOR), setCookie(THEME_KEY, DARK_THEME_CLASSNAME)) : (root.classList.remove(DARK_THEME_CLASSNAME), setMetaTag(LIGHT_THEME_META_COLOR), setCookie(THEME_KEY, LIGHT_THEME_CLASSNAME)));
}
function getThemeFromHTML() {
  if (is_browser_default())
    return getHtml().classList.contains(DARK_THEME_CLASSNAME) ? DARK_THEME_CLASSNAME : LIGHT_THEME_CLASSNAME;
}
function getHtml() {
  return document.firstElementChild;
}
function getThemeMetaTag() {
  return document.querySelector("meta[name='theme-color']");
}
function setMetaTag(value) {
  let callback = () => {
    let tag = getThemeMetaTag();
    tag ? tag.setAttribute("content", value) : (tag = document.createElement("meta"), tag.setAttribute("name", "theme-color"), tag.setAttribute("content", value), document.head.appendChild(tag));
  };
  document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
}

// app/core/ui/Tooltip.tsx
var import_react14 = __toESM(require("@tippyjs/react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Tooltip = ({ children, className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.default, {
  ...props,
  disabled: !props.content,
  theme: "makerkit",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className,
    children
  }, void 0, !1, {
    fileName: "app/core/ui/Tooltip.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/core/ui/Tooltip.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), Tooltip_default = Tooltip;

// app/components/DarkModeToggle.tsx
init_IconButton();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DarkModeToggle = () => {
  let defaultTheme = (0, import_react16.useMemo)(() => getDefaultTheme() || getStoredTheme(), []), [currentTheme, setCurrentTheme] = (0, import_react16.useState)(defaultTheme), toggleMode = (0, import_react16.useCallback)(() => {
    setCurrentTheme((currentTheme2) => currentTheme2 === LIGHT_THEME_CLASSNAME ? DARK_THEME_CLASSNAME : LIGHT_THEME_CLASSNAME);
  }, []), isDarkTheme = currentTheme === DARK_THEME_CLASSNAME, TooltipText = isDarkTheme ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next5.Trans, {
    i18nKey: "common:switchToLightTheme"
  }, void 0, !1, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next5.Trans, {
    i18nKey: "common:switchToDarkTheme"
  }, void 0, !1, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this), Icon = isDarkTheme ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_SunIcon.default, {
    className: "h-5"
  }, void 0, !1, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_MoonIcon.default, {
    className: "h-5"
  }, void 0, !1, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
  return (0, import_react16.useEffect)(() => {
    setTheme(currentTheme);
  }, [currentTheme]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
    content: TooltipText,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
      className: "flex items-center bg-transparent p-1",
      onClick: toggleMode,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Transition, {
        appear: !0,
        show: !0,
        enter: "transition-opacity duration-500",
        enterFrom: "opacity-60",
        enterTo: "opacity-100",
        children: Icon
      }, void 0, !1, {
        fileName: "app/components/DarkModeToggle.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/DarkModeToggle.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}, DarkModeToggle_default = DarkModeToggle;

// app/components/SiteHeader.tsx
init_use_user_session();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), fixedClassName = "FixedHeader", SiteHeader = ({ fixed }) => {
  let auth = (0, import_reactfire.useAuth)(), userSession = useUserSession(), signOutRequested = (0, import_react20.useCallback)(() => auth.signOut(), [auth]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `w-full py-2.5 ${fixed ? fixedClassName : ""}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-row items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, !1, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DarkModeToggle_default, {}, void 0, !1, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/SiteHeader.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-1 justify-end space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "order-1 flex items-center space-x-4 lg:space-x-8 md:order-none md:ml-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteNavigation_default, {}, void 0, !1, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 42,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: userSession == null ? void 0 : userSession.auth,
                fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthButtons, {}, void 0, !1, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 51,
                  columnNumber: 57
                }, this),
                children: (user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdown_default, {
                  user,
                  signOutRequested
                }, void 0, !1, {
                  fileName: "app/components/SiteHeader.tsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/SiteHeader.tsx",
                lineNumber: 51,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/SiteHeader.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/SiteHeader.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
function AuthButtons() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "hidden space-x-2 lg:flex",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        color: "transparent",
        href: configuration_default.paths.signIn,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: "Sign In"
        }, void 0, !1, {
          fileName: "app/components/SiteHeader.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        href: configuration_default.paths.signUp,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: "Sign Up"
            }, void 0, !1, {
              fileName: "app/components/SiteHeader.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline3.ArrowRightIcon, {
              className: "h-4"
            }, void 0, !1, {
              fileName: "app/components/SiteHeader.tsx",
              lineNumber: 76,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/SiteHeader.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/SiteHeader.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
var SiteHeader_default = SiteHeader;

// app/core/firebase/components/FirebaseAppShell.tsx
var import_reactfire2 = require("reactfire"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FirebaseAppShell({
  children,
  config
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactfire2.FirebaseAppProvider, {
    firebaseConfig: config,
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseAppShell.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var FirebaseAppShell_default = FirebaseAppShell;

// app/core/firebase/components/FirebaseAuthProvider.tsx
var import_react23 = require("react"), import_reactfire3 = require("reactfire"), import_auth2 = require("firebase/auth");

// app/core/hooks/use-destroy-session.ts
var import_react21 = require("@remix-run/react"), import_react22 = require("react");
function useDestroySession() {
  let fetcher = (0, import_react21.useFetcher)();
  return (0, import_react22.useCallback)(() => (fetcher.submit(
    {},
    {
      method: "post",
      action: "/auth/sign-out"
    }
  ), fetcher), [fetcher]);
}
var use_destroy_session_default = useDestroySession;

// app/core/firebase/components/FirebaseAuthProvider.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), FirebaseAuthStateListener = ({ children, onAuthStateChange }) => {
  let auth = (0, import_reactfire3.useAuth)();
  return (0, import_react23.useEffect)(() => {
    let subscription = auth.onIdTokenChanged(onAuthStateChange);
    return () => subscription();
  }, [auth, onAuthStateChange]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseAuthProvider.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
function FirebaseAuthProvider({
  userSession,
  setUserSession,
  children,
  useEmulator
}) {
  var _a, _b;
  let app = (0, import_reactfire3.useFirebaseApp)(), signOut = use_destroy_session_default(), userRef = (0, import_react23.useRef)(), persistence = (0, import_react23.useMemo)(() => is_browser_default() ? import_auth2.indexedDBLocalPersistence : import_auth2.inMemoryPersistence, []), sdk = (0, import_react23.useMemo)(
    () => (0, import_auth2.initializeAuth)(app, { persistence }),
    [app, persistence]
  ), shouldConnectEmulator = useEmulator && !("emulator" in sdk.config), onAuthStateChanged = (0, import_react23.useCallback)(
    async (user) => {
      var _a2, _b2;
      if (user) {
        let session = {
          auth: {
            ...user,
            customClaims: {},
            disabled: ((_a2 = userSession == null ? void 0 : userSession.auth) == null ? void 0 : _a2.disabled) ?? !1,
            multiFactor: ((_b2 = userSession == null ? void 0 : userSession.auth) == null ? void 0 : _b2.multiFactor) ?? []
          },
          data: userSession == null ? void 0 : userSession.data
        };
        return userRef.current = user, setUserSession(session);
      }
      if (userRef.current)
        try {
          signOut();
        } finally {
          setUserSession(void 0), userRef.current = void 0;
        }
    },
    [
      setUserSession,
      signOut,
      (_a = userSession == null ? void 0 : userSession.auth) == null ? void 0 : _a.disabled,
      (_b = userSession == null ? void 0 : userSession.auth) == null ? void 0 : _b.multiFactor,
      userSession == null ? void 0 : userSession.data
    ]
  );
  return (0, import_react23.useEffect)(() => {
    if (shouldConnectEmulator) {
      let host = getAuthEmulatorHost();
      (0, import_auth2.connectAuthEmulator)(sdk, host);
    }
  }, [sdk, shouldConnectEmulator]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactfire3.AuthProvider, {
    sdk,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthStateListener, {
      onAuthStateChange: onAuthStateChanged,
      children
    }, void 0, !1, {
      fileName: "app/core/firebase/components/FirebaseAuthProvider.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseAuthProvider.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}
function getAuthEmulatorHost() {
  return ["http://", "localhost", ":", 9099].join("");
}

// app/firebase.config.ts
var env3 = get_env_default(), firebaseConfig = {
  apiKey: env3.FIREBASE_API_KEY,
  authDomain: env3.FIREBASE_AUTH_DOMAIN,
  projectId: env3.FIREBASE_PROJECT_ID,
  storageBucket: env3.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env3.FIREBASE_MESSAGING_SENDER_ID,
  appId: env3.FIREBASE_APP_ID,
  measurementId: env3.FIREBASE_MEASUREMENT_ID,
  emulator: env3.EMULATOR === "true"
}, firebase_config_default = firebaseConfig;

// app/core/generic/http-status-code.enum.ts
var HttpStatusCode = /* @__PURE__ */ ((HttpStatusCode2) => (HttpStatusCode2[HttpStatusCode2.Ok = 200] = "Ok", HttpStatusCode2[HttpStatusCode2.MovedPermanently = 301] = "MovedPermanently", HttpStatusCode2[HttpStatusCode2.MovedTemporarily = 302] = "MovedTemporarily", HttpStatusCode2[HttpStatusCode2.SeeOther = 303] = "SeeOther", HttpStatusCode2[HttpStatusCode2.BadRequest = 400] = "BadRequest", HttpStatusCode2[HttpStatusCode2.Unauthorized = 401] = "Unauthorized", HttpStatusCode2[HttpStatusCode2.Forbidden = 403] = "Forbidden", HttpStatusCode2[HttpStatusCode2.NotFound = 404] = "NotFound", HttpStatusCode2[HttpStatusCode2.MethodNotAllowed = 405] = "MethodNotAllowed", HttpStatusCode2[HttpStatusCode2.InternalServerError = 500] = "InternalServerError", HttpStatusCode2))(HttpStatusCode || {}), http_status_code_enum_default = HttpStatusCode;

// app/components/RootCatchBoundary.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function RootCatchBoundary() {
  let error = (0, import_react24.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Meta, {}, void 0, !1, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Links, {}, void 0, !1, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react24.Scripts, {}, void 0, !1, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/RootCatchBoundary.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
          config: firebase_config_default,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
            useEmulator: firebase_config_default.emulator,
            userSession: void 0,
            setUserSession: () => ({}),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader_default, {}, void 0, !1, {
                fileName: "app/components/RootCatchBoundary.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                          condition: error.status === http_status_code_enum_default.NotFound,
                          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next6.Trans, {
                            i18nKey: "common:genericServerError"
                          }, void 0, !1, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 41,
                            columnNumber: 31
                          }, this),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next6.Trans, {
                            i18nKey: "common:pageNotFound"
                          }, void 0, !1, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/RootCatchBoundary.tsx",
                          lineNumber: 39,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/RootCatchBoundary.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                          condition: error.status === http_status_code_enum_default.NotFound,
                          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next6.Trans, {
                            i18nKey: "common:genericServerErrorHeading"
                          }, void 0, !1, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 51,
                            columnNumber: 23
                          }, this),
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next6.Trans, {
                            i18nKey: "common:pageNotFoundSubHeading"
                          }, void 0, !1, {
                            fileName: "app/components/RootCatchBoundary.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/RootCatchBoundary.tsx",
                          lineNumber: 48,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/RootCatchBoundary.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/RootCatchBoundary.tsx",
                    lineNumber: 37,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "my-4",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      href: "/",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next6.Trans, {
                        i18nKey: "common:backToHomePage"
                      }, void 0, !1, {
                        fileName: "app/components/RootCatchBoundary.tsx",
                        lineNumber: 61,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/RootCatchBoundary.tsx",
                      lineNumber: 60,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/RootCatchBoundary.tsx",
                    lineNumber: 59,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/RootCatchBoundary.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/RootCatchBoundary.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/RootCatchBoundary.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/RootCatchBoundary.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/RootCatchBoundary.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var RootCatchBoundary_default = RootCatchBoundary;

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: dist_default }], loader = async ({ request }) => {
  let theme = await parseThemeCookie(request);
  return (0, import_node2.json)({
    theme,
    ENV: getBrowserEnvironment()
  });
};
function App() {
  let data = (0, import_react25.useLoaderData)(), className = (0, import_classnames6.default)({
    dark: data.theme === "dark"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Head_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`
            }
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppRouteLoadingIndicator_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react25.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
var CatchBoundary = RootCatchBoundary_default;
function getBrowserEnvironment() {
  let env4 = process.env;
  return {
    FIREBASE_API_KEY: env4.FIREBASE_API_KEY,
    FIREBASE_PROJECT_ID: env4.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: env4.FIREBASE_STORAGE_BUCKET,
    FIREBASE_AUTH_DOMAIN: env4.FIREBASE_AUTH_DOMAIN,
    FIREBASE_MESSAGING_SENDER_ID: env4.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: env4.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: env4.FIREBASE_MEASUREMENT_ID,
    EMULATOR: env4.EMULATOR,
    EMULATOR_HOST: env4.EMULATOR_HOST,
    FIRESTORE_EMULATOR_PORT: env4.FIRESTORE_EMULATOR_PORT,
    SITE_URL: env4.SITE_URL,
    DEFAULT_LOCALE: env4.DEFAULT_LOCALE,
    NODE_ENV: env4.NODE_ENV,
    SENTRY_DSN: env4.SENTRY_DSN,
    APPCHECK_KEY: env4.APPCHECK_KEY
  };
}

// app/routes/onboarding/index.tsx
var onboarding_exports = {};
__export(onboarding_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action,
  default: () => onboarding_default,
  loader: () => loader2,
  meta: () => meta
});
var import_react33 = require("react"), import_node3 = require("@remix-run/node"), import_react34 = require("@remix-run/react"), import_zod = require("zod"), import_react_i18next7 = require("react-i18next");
init_If();
init_Alert();
init_Button();

// app/core/http-exceptions.ts
var throwInternalServerErrorException = buildException(
  http_status_code_enum_default.InternalServerError
), throwBadRequestException = buildException(
  http_status_code_enum_default.BadRequest
), throwNotFoundException = buildException(http_status_code_enum_default.NotFound), throwMethodNotAllowedException = function(allowedMethodsList, methodNotAllowed) {
  let errorMessage = `Method ${methodNotAllowed ?? "[unknown]"} is not allowed. Please use one of the following methods: ${allowedMethodsList.join(
    ", "
  )}`;
  throw new Response(errorMessage, {
    status: http_status_code_enum_default.MethodNotAllowed
  });
}, throwUnauthorizedException = buildException(
  http_status_code_enum_default.Unauthorized
), throwForbiddenException = buildException(http_status_code_enum_default.Forbidden);
function buildException(statusCode) {
  return (message) => {
    throw new Response(message ?? "Unknown Error", {
      status: statusCode
    });
  };
}

// app/components/onboarding/OrganizationInfoStep.tsx
var import_react30 = require("react"), import_outline5 = require("@heroicons/react/24/outline");
init_Heading();
init_Button();

// app/core/ui/TextField.tsx
var import_react28 = require("react"), import_classnames7 = __toESM(require("classnames")), import_react29 = require("@headlessui/react"), import_XMarkIcon = __toESM(require("@heroicons/react/24/outline/XMarkIcon"));
init_Label();
init_If();
init_IconButton();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Hint = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
  className: "TextFieldHint",
  children
}, void 0, !1, {
  fileName: "app/core/ui/TextField.tsx",
  lineNumber: 27,
  columnNumber: 10
}, this), Input = ({
  className,
  innerRef,
  children,
  useResetButton,
  onClear,
  defaultValue,
  onValueChange,
  ...props
}) => {
  let ref3 = innerRef ?? (0, import_react28.createRef)(), currentValue = props.value ?? "", [value, setValue] = (0, import_react28.useState)(currentValue), onReset = (0, import_react28.useCallback)(() => {
    ref3 && (setValue(""), onClear && onClear());
  }, [onClear, ref3]), shouldShowResetButton = (0, import_react28.useMemo)(() => Boolean(useResetButton && value), [value, useResetButton]), onChange = (0, import_react28.useCallback)(
    (event) => {
      props.onChange && props.onChange(event);
      let nextValue = event.currentTarget.value ?? "";
      onValueChange && onValueChange(nextValue), setValue(nextValue);
    },
    [onValueChange, props]
  );
  return (0, import_react28.useEffect)(() => {
    setValue(currentValue);
  }, [currentValue, onValueChange]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames7.default)("TextFieldInputContainer", className, {
      TextFieldInputContainerDisabled: props.disabled
    }),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: children,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex pl-2.5",
          children
        }, void 0, !1, {
          fileName: "app/core/ui/TextField.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/TextField.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        value: innerRef ? void 0 : value,
        defaultValue,
        className: `TextFieldInput flex-1 ${className ?? ""}`,
        ...props,
        ref: ref3,
        onChange
      }, void 0, !1, {
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
            }, void 0, !1, {
              fileName: "app/core/ui/TextField.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/TextField.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/core/ui/TextField.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/TextField.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/core/ui/TextField.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}, TextField = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: `TextField ${className ?? ""}`,
  children
}, void 0, !1, {
  fileName: "app/core/ui/TextField.tsx",
  lineNumber: 121,
  columnNumber: 10
}, this), ErrorMessage = ({ error, ...props }) => {
  let shouldDisplay = !!error;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react29.Transition, {
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
      }, void 0, !1, {
        fileName: "app/core/ui/TextField.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/TextField.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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

// app/components/onboarding/OrganizationInfoStep.tsx
init_use_user_session();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), OrganizationInfoStep = ({ onSubmit }) => {
  var _a, _b;
  let user = useUserSession(), displayName = ((_a = user == null ? void 0 : user.auth) == null ? void 0 : _a.displayName) ?? ((_b = user == null ? void 0 : user.auth) == null ? void 0 : _b.email) ?? "", handleFormSubmit = (0, import_react30.useCallback)(
    (event) => {
      event.preventDefault();
      let organization = new FormData(event.currentTarget).get("organization");
      onSubmit({
        organization
      });
    },
    [onSubmit]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit: handleFormSubmit,
    className: "flex w-full flex-1 flex-col space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-1.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 2,
            children: [
              "Hi, ",
              displayName,
              "!"
            ]
          }, void 0, !0, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
            children: "Let's create your organization."
          }, void 0, !1, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-1 flex-col space-y-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                "Your organization's name",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  required: !0,
                  name: "organization",
                  placeholder: "Organization Name"
                }, void 0, !1, {
                  fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              type: "submit",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: "Continue"
                  }, void 0, !1, {
                    fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                    lineNumber: 60,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline5.ArrowRightIcon, {
                    className: "h-5"
                  }, void 0, !1, {
                    fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                    lineNumber: 61,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
                lineNumber: 59,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/onboarding/OrganizationInfoStep.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, OrganizationInfoStep_default = OrganizationInfoStep;

// app/components/onboarding/OnboardingIllustration.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OnboardingIllustration() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    "data-name": "Layer 1",
    width: "790",
    height: "701.99219",
    viewBox: "0 0 790 701.99219",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M862.36664,222.11816c-.01538,0-.0296.0044-.045.00489v-87.4292a35.69,35.69,0,0,0-35.69-35.68994h-273.72a35.69,35.69,0,0,0-35.69,35.68994v44.8208a2.89173,2.89173,0,0,0-2.83008,2.88867v22.2002a2.891,2.891,0,0,0,2.83008,2.88818v23.25684h-.14508a2.89485,2.89485,0,0,0-2.895,2.895v42.92969a2.89486,2.89486,0,0,0,2.895,2.895h.14508v17.05029h-.04511a2.89485,2.89485,0,0,0-2.89495,2.895v43.34961a2.89485,2.89485,0,0,0,2.89495,2.895h.04511V764.68408a35.69,35.69,0,0,0,35.69,35.68994h273.72a35.69,35.69,0,0,0,35.69-35.68994V307.13379c.01538,0,.0296.00439.045.00439a5.15473,5.15473,0,0,0,5.155-5.15478v-74.71A5.15515,5.15515,0,0,0,862.36664,222.11816Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M841.01166,144.684v610a27.41,27.41,0,0,1-27.41,27.4h-247.66a27.41,27.41,0,0,1-27.41-27.4v-610a27.41,27.41,0,0,1,27.41-27.41h37.06v4.81a22.58,22.58,0,0,0,22.57,22.57h126a22.57,22.57,0,0,0,22.52-22.57v-4.76h39.51A27.41,27.41,0,0,1,841.01166,144.684Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-white dark:fill-black-100"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M439.411,441.28564a10.74274,10.74274,0,0,0-14.42255,7.9585l-88.25427,47.98779,15.51715,17.46436,81.96-52.59912a10.80091,10.80091,0,0,0,5.19971-20.81153Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
        points: "211.903 687.551 222.9 680.438 200.697 634.635 184.466 645.133 211.903 687.551",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M413.53251,772.48423h41.16277a0,0,0,0,1,0,0V788.388a0,0,0,0,1,0,0H428.84164a15.30912,15.30912,0,0,1-15.30912-15.30912v-.59467a0,0,0,0,1,0,0Z",
        transform: "translate(1017.48743 1100.95886) rotate(147.10411)",
        fill: "#2f2e41"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polygon", {
        points: "88.511 689.206 101.608 689.206 107.841 638.688 88.511 638.688 88.511 689.206",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M290.7046,784.46734h41.16277a0,0,0,0,1,0,0v15.9038a0,0,0,0,1,0,0H306.01373A15.30912,15.30912,0,0,1,290.7046,785.062v-.59467A0,0,0,0,1,290.7046,784.46734Z",
        transform: "translate(417.57198 1485.83458) rotate(-180)",
        fill: "#2f2e41"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M594,197.99609H567a2.5,2.5,0,0,1,0-5h27a2.5,2.5,0,0,1,0,5Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M594,204.99609H567a2.5,2.5,0,0,1,0-5h27a2.5,2.5,0,0,1,0,5Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M594,211.99609H567a2.5,2.5,0,0,1,0-5h27a2.5,2.5,0,0,1,0,5Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M803.29156,205.04605h-.91l-.35-.29a7.61019,7.61019,0,0,0,1.78-4.89,7.44,7.44,0,1,0-7.4,7.48,7.73,7.73,0,0,0,4.88-1.78l.34.29v.92l5.74,5.75,1.72-1.72Zm-6.88,0a5.18,5.18,0,1,1,5.15992-5.2l.00006.02a5.15,5.15,0,0,1-5.11994,5.17992c-.0133.00008-.02667.00011-.04.00008Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-[#3f3d56] dark:fill-white"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M649.00537,289.99609H600.5a11,11,0,0,1,0-22h48.50537a11,11,0,0,1,0,22Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M797.5,313.99609h-202a6,6,0,0,1,0-12h202a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M669.7002,337.99609H595.5a6,6,0,0,1,0-12h74.2002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M649.00537,555.99609H600.5a11,11,0,0,1,0-22h48.50537a11,11,0,0,1,0,22Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M797.5,579.99609h-202a6,6,0,0,1,0-12h202a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M669.7002,603.99609H595.5a6,6,0,0,1,0-12h74.2002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M649.00537,678.99609H600.5a11,11,0,0,1,0-22h48.50537a11,11,0,0,1,0,22Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M797.5,702.99609h-202a6,6,0,0,1,0-12h202a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M669.7002,726.99609H595.5a6,6,0,0,1,0-12h74.2002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 104,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M826,493.49609H440a8.50981,8.50981,0,0,1-8.5-8.5v-105a8.50951,8.50951,0,0,1,8.5-8.5H826a8.50982,8.50982,0,0,1,8.5,8.5v105A8.51013,8.51013,0,0,1,826,493.49609Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M301.23159,618.41614c3.69,25.89-15.85,140.59-13.68,140.57995l28.06-.15c1-1.92,13.88-63.81,17.92-73.74,5.64-13.78,11.33-27.73,13.55-42.45,2.09-13.82,1.06-27.9-.3-41.81a2.64,2.64,0,0,0-3.06-3l-37.65-1.94c-7.76-.4-9.6-2.1-8.42,5.52C298.47158,607.11615,300.41158,612.65613,301.23159,618.41614Z",
        transform: "translate(-205 -99.00391)",
        fill: "#2f2e41"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M308.63158,555.46616c-7.65,11-15.67,23.66-13.13,36.83,1.93,10,9.55,17.75,16.74,25,28.74,28.86,85.41,156.2,85.41,156.2,27.3484-17.50006-.6516.49994,27.1-18-2.46-.19-58.35-201.1-62.98-201.37C343.04159,552.88614,326.88158,551.05615,308.63158,555.46616Z",
        transform: "translate(-205 -99.00391)",
        fill: "#2f2e41"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M338.8901,450.76705c-3.88566-3.46527-31.19235-14.1516-31.19235-14.1516a4.68431,4.68431,0,0,0-1.5087.04526c-1.554.39225-2.26305,2.32338-1.93113,3.88489s-2.39129,27.22447-3.09283,38.89426c-1.22959,20.36744,10.76456,66.50345,10.659,67.91408a21.0765,21.0765,0,0,1-6.20829,13.29164c.93413,1.15954,60.265,3.48511,64.30074,4.858.81469-1.03345-4.594-74.2129-4.84293-78.34672C364.65868,480.88067,344.01966,455.51947,338.8901,450.76705Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 124,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M296.57277,609.55457a10.74272,10.74272,0,0,0,3.84156-16.01843l25.033-138.54005-23.36007-.30784-17.384,136.99816a10.80091,10.80091,0,0,0,11.86954,17.86816Z",
        transform: "translate(-205 -99.00391)",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 129,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M296.37159,465.27612a4.43008,4.43008,0,0,1-2.76-.72c-1.39-1.19,9.95-19.4,12.19-19.67,7.29-.84,14.79-1.12,21.86.85s13.72,6.45,16.88,13.08c1.32,2.76-8.25,16.65-12.6,14.61C326.73159,470.98615,303.23159,465.44614,296.37159,465.27612Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 134,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
        cx: "117.102",
        cy: "309.88012",
        r: "26.2388",
        className: "fill-primary-500"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 139,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M296.32988,452.26749A21.92466,21.92466,0,0,0,319.41549,423.542c-1.04421-3.13933-2.78963-6.01687-3.74586-9.1841s-.98231-6.91217,1.13861-9.45136c4.14967-4.968,12.14792-1.84307,18.54524-2.83076,6.81664-1.05242,12.04628-7.59224,12.59177-14.46805s-3.03837-13.68-8.37342-18.05169-12.21571-6.5243-19.08006-7.19875a51.59436,51.59436,0,0,0-52.95464,70.4952c2.86787,7.17557,7.55225,13.85879,14.20586,17.78854s15.44129,4.68471,22.07272.71765",
        transform: "translate(-205 -99.00391)",
        fill: "#2f2e41"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 145,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M577.277,419.49609h-67.0539c-4.25851,0-7.723-4.93457-7.723-11s3.46454-11,7.72305-11H577.277c4.25851,0,7.723,4.93457,7.723,11S581.53546,419.49609,577.277,419.49609Z",
        transform: "translate(-205 -99.00391)",
        fill: "#fff"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 150,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M757.5,443.49609h-249a6,6,0,0,1,0-12h249a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 155,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M629.7002,467.49609H508.5a6,6,0,0,1,0-12H629.7002a6,6,0,0,1,0,12Z",
        transform: "translate(-205 -99.00391)",
        fill: "#e6e6e6"
      }, void 0, !1, {
        fileName: "app/components/onboarding/OnboardingIllustration.tsx",
        lineNumber: 160,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/onboarding/OnboardingIllustration.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var OnboardingIllustration_default = OnboardingIllustration;

// app/components/onboarding/CompleteOnboardingStep.tsx
var import_react31 = require("react"), import_react32 = require("@remix-run/react"), import_react_epic_spinners2 = require("react-epic-spinners"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), CompleteOnboardingStep = ({ data }) => {
  let submit = (0, import_react32.useSubmit)(), onboardingCompleteRequested = (0, import_react31.useRef)(!1), callRequestCallback = (0, import_react31.useCallback)(() => submit(
    { data: JSON.stringify(data) },
    {
      action: "/onboarding?index",
      method: "post"
    }
  ), [submit, data]);
  return (0, import_react31.useEffect)(() => {
    onboardingCompleteRequested.current || (onboardingCompleteRequested.current = !0, callRequestCallback());
  }, [callRequestCallback]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-1 flex-col items-center space-y-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners2.SpringSpinner, {
          size: 52,
          color: "currentColor"
        }, void 0, !1, {
          fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: "Getting Started. Please wait..."
      }, void 0, !1, {
        fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/onboarding/CompleteOnboardingStep.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}, CompleteOnboardingStep_default = CompleteOnboardingStep;

// app/lib/server/organizations/get-current-organization.ts
init_queries();
init_collections();
async function getCurrentOrganization(userId, organizationId) {
  return getOrganizationByIdOrFirst(userId, organizationId);
}
async function getOrganizationByIdOrFirst(userId, organizationId) {
  if (organizationId) {
    let organization = await getOrganizationData(organizationId);
    if (userId in ((organization == null ? void 0 : organization.members) ?? {}))
      return organization;
  }
  return getFirstOrganization(userId);
}
async function getFirstOrganization(userId) {
  try {
    let doc7 = (await getOrganizationsByUserId(userId).limit(1).get()).docs[0];
    return serializeOrganizationData(doc7.data(), doc7.id);
  } catch {
    return null;
  }
}
async function getOrganizationData(organizationId) {
  let data = (await getOrganizationById(organizationId)).data();
  return data ? serializeOrganizationData(data, organizationId) : void 0;
}
function serializeOrganizationData(organization, id) {
  let members = Object.keys(organization.members).reduce((acc, userId) => {
    let member = organization.members[userId], item = {
      role: member.role,
      user: member.user.id
    };
    return {
      ...acc,
      [userId]: item
    };
  }, {});
  return {
    ...organization,
    members,
    id
  };
}
function getOrganizationsByUserId(userId) {
  let organizations = getOrganizationsCollection(), path = `members.${userId}`;
  return organizations.where(path, "!=", null);
}

// app/lib/server/onboarding/complete-onboarding.ts
var import_firestore2 = require("firebase-admin/firestore"), import_auth3 = require("firebase-admin/auth");
init_membership_role();

// app/core/session/types/global-role.ts
var GlobalRole = /* @__PURE__ */ ((GlobalRole2) => (GlobalRole2[GlobalRole2.User = 0] = "User", GlobalRole2[GlobalRole2.SuperAdmin = 1] = "SuperAdmin", GlobalRole2))(GlobalRole || {}), global_role_default = GlobalRole;

// app/lib/server/onboarding/complete-onboarding.ts
init_collections();
async function completeOnboarding({ userId, organizationName }) {
  let firestore = (0, import_firestore2.getFirestore)(), auth = (0, import_auth3.getAuth)(), batch = firestore.batch(), organizationRef = getOrganizationsCollection().doc(), userRef = getUsersCollection().doc(userId), organizationMembers = {
    [userId]: {
      user: userRef,
      role: membership_role_default.Owner
    }
  };
  return batch.create(organizationRef, {
    name: organizationName,
    members: organizationMembers
  }), batch.set(userRef, {
    role: global_role_default.User
  }), await batch.commit(), await auth.setCustomUserClaims(userId, {
    onboarded: !0
  }), organizationRef.id;
}
var complete_onboarding_default = completeOnboarding;

// app/lib/server/cookies/organization.cookie.ts
var ORGANIZATION_ID_COOKIE_NAME = "organizationId";
async function getOrganizationCookie() {
  let { createCookie } = await import("@remix-run/node"), secure = process.env.EMULATOR !== "true";
  return createCookie(ORGANIZATION_ID_COOKIE_NAME, {
    httpOnly: !1,
    secure,
    path: "/",
    sameSite: "lax"
  });
}
async function parseOrganizationIdCookie(request) {
  return (await getOrganizationCookie()).parse(get_cookie_header_default(request));
}
async function serializeOrganizationIdCookie(organizationId) {
  return (await getOrganizationCookie()).serialize(organizationId);
}

// app/lib/server/auth/save-session-cookie.ts
async function createFirebaseSessionCookie(idToken, expiresIn) {
  let { getAuth: getAuth4 } = await import("firebase-admin/auth");
  return getAuth4().createSessionCookie(idToken, {
    expiresIn
  });
}
function getSessionCookieTTL(days = 14) {
  return 864e5 * days;
}

// app/core/logger.ts
var import_pino = __toESM(require("pino")), logger;
function getLogger() {
  if (logger)
    return logger;
  if (!0) {
    let pretty = require("pino-pretty");
    logger = (0, import_pino.default)(
      {},
      pretty({
        colorize: !0
      })
    );
  } else
    logger = (0, import_pino.default)({
      browser: {},
      level: "debug",
      base: {
        env: "development"
      }
    });
  return logger;
}
var logger_default = getLogger;

// app/lib/server/cookies/session.cookie.ts
var SESSION_COOKIE_NAME = "session";
function getSessionIdCookie() {
  return createSessionCookie(SESSION_COOKIE_NAME);
}
async function deleteSessionIdCookie() {
  return (await getSessionIdCookie()).serialize("", { maxAge: -1 });
}
async function serializeSessionIdCookie(sessionId) {
  return (await getSessionIdCookie()).serialize(sessionId);
}
async function parseSessionIdCookie(request) {
  return (await getSessionIdCookie()).parse(get_cookie_header_default(request));
}
async function createSessionCookie(cookieName) {
  let { createCookie } = await import("@remix-run/node"), secure = shouldUseSecureCookies(), secret = process.env.SECRET_KEY, secrets = secret ? [secret] : [];
  secrets.length || logger_default().warn(
    'Please set your "SECRET_KEY" environment variable to sign your cookies'
  );
  let options = {
    maxAge: getSessionCookieTTL(),
    httpOnly: !0,
    secure,
    path: "/",
    sameSite: "lax",
    secrets
  };
  return createCookie(cookieName, options);
}
function shouldUseSecureCookies() {
  return process.env.EMULATOR !== "true";
}

// app/core/firebase/admin/auth/get-logged-in-user.ts
async function getLoggedInUser(session) {
  if (!session)
    return Promise.reject("Session ID not found");
  let { getUserFromSessionCookie: getUserFromSessionCookie2 } = await Promise.resolve().then(() => (init_get_user_from_session_cookie(), get_user_from_session_cookie_exports));
  return getUserFromSessionCookie2(session);
}

// app/core/firebase/admin/auth/get-user-info-by-id.ts
var import_auth5 = require("firebase-admin/auth");

// app/core/firebase/utils/serialize-auth-user.ts
function serializeAuthUser(user) {
  return {
    uid: user.uid,
    email: getValue(user.email),
    emailVerified: user.emailVerified,
    displayName: getValue(user.displayName),
    photoURL: getValue(user.photoURL),
    phoneNumber: getValue(user.phoneNumber),
    disabled: user.disabled,
    customClaims: user.customClaims ?? {},
    tenantId: getValue(user.tenantId),
    providerData: user.providerData.map((item) => JSON.parse(JSON.stringify(item.toJSON()))),
    multiFactor: user.multiFactor ? user.multiFactor.enrolledFactors.map((item) => ({
      displayName: getValue(item.displayName),
      uid: item.uid,
      factorId: item.factorId,
      enrollmentTime: getValue(item.enrollmentTime)
    })) : null
  };
}
var serialize_auth_user_default = serializeAuthUser;
function getValue(value) {
  return value ?? null;
}

// app/core/firebase/admin/auth/get-user-info-by-id.ts
async function getUserInfoById(userId) {
  let auth = (0, import_auth5.getAuth)(), logger2 = logger_default();
  try {
    let user = await auth.getUser(userId);
    return user ? serialize_auth_user_default(user) : null;
  } catch {
    logger2.warn(
      {
        userId
      },
      "User was not found"
    );
    return;
  }
}

// app/core/middleware/with-methods-guard.ts
function withMethodsGuard(request, methods) {
  let method = request.method;
  methods.includes(method) || throwMethodNotAllowedException(methods, method);
}
var with_methods_guard_default = withMethodsGuard;

// app/routes/onboarding/index.tsx
init_user_session();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  title: `Onboarding - ${configuration_default.site.siteName}`
}), Onboarding = () => {
  let data = (0, import_react34.useLoaderData)(), [currentStep, setCurrentStep] = (0, import_react33.useState)(0), [userSession, setUserSession] = (0, import_react33.useState)(data), [formData, setFormData] = (0, import_react33.useState)(), onFirstStepSubmitted = (0, import_react33.useCallback)(
    (organizationInfo) => {
      setFormData({
        organization: organizationInfo.organization
      }), setCurrentStep(1);
    },
    []
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession,
      setUserSession,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_session_default.Provider, {
        value: { userSession, setUserSession },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-1 flex-col dark:bg-black-500",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex divide-x divide-gray-100 dark:divide-black-300",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex h-screen flex-1 flex-col items-center justify-center w-full lg:w-6/12",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "absolute top-24 flex",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {
                      href: "/onboarding"
                    }, void 0, !1, {
                      fileName: "app/routes/onboarding/index.tsx",
                      lineNumber: 83,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/onboarding/index.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-9/12",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                        condition: currentStep === 0,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationInfoStep_default, {
                          onSubmit: onFirstStepSubmitted
                        }, void 0, !1, {
                          fileName: "app/routes/onboarding/index.tsx",
                          lineNumber: 88,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/onboarding/index.tsx",
                        lineNumber: 87,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                        condition: currentStep === 1 && formData,
                        children: (formData2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CompleteOnboardingStep_default, {
                          data: formData2
                        }, void 0, !1, {
                          fileName: "app/routes/onboarding/index.tsx",
                          lineNumber: 92,
                          columnNumber: 36
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/onboarding/index.tsx",
                        lineNumber: 91,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/onboarding/index.tsx",
                    lineNumber: 86,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/onboarding/index.tsx",
                lineNumber: 76,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "hidden w-6/12 flex-1 items-center bg-gray-50 justify-center dark:bg-black-400 lg:flex",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OnboardingIllustration_default, {}, void 0, !1, {
                    fileName: "app/routes/onboarding/index.tsx",
                    lineNumber: 104,
                    columnNumber: 19
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/onboarding/index.tsx",
                  lineNumber: 103,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/onboarding/index.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/onboarding/index.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/onboarding/index.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/onboarding/index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/onboarding/index.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}, onboarding_default = Onboarding;
function CatchBoundary2() {
  let navigate = (0, import_react34.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-screen w-full flex-1 flex-col items-center justify-center",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col items-center space-y-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, !1, {
            fileName: "app/routes/onboarding/index.tsx",
            lineNumber: 128,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 127,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "error",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next7.Trans, {
                i18nKey: "common:genericServerError"
              }, void 0, !1, {
                fileName: "app/routes/onboarding/index.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/onboarding/index.tsx",
              lineNumber: 132,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next7.Trans, {
              i18nKey: "common:genericServerErrorHeading"
            }, void 0, !1, {
              fileName: "app/routes/onboarding/index.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 131,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          onClick: () => navigate("."),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next7.Trans, {
            i18nKey: "common:retry"
          }, void 0, !1, {
            fileName: "app/routes/onboarding/index.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/onboarding/index.tsx",
          lineNumber: 139,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/onboarding/index.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/onboarding/index.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}
async function action(args) {
  let req = args.request, formData = await req.formData(), body = JSON.parse(formData.get("data")), parsedBody = await getBodySchema().safeParseAsync(body);
  if (!parsedBody.success)
    return throwBadRequestException();
  await with_methods_guard_default(req, ["POST"]);
  let sessionId = await parseSessionIdCookie(req), userId = (await getLoggedInUser(sessionId)).uid, organizationName = parsedBody.data.organization, organizationId = await complete_onboarding_default({
    userId,
    organizationName
  }), headers = new Headers({
    "Set-Cookie": await serializeOrganizationIdCookie(organizationId)
  });
  return (0, import_node3.redirect)(configuration_default.paths.appHome, {
    headers
  });
}
async function loader2(args) {
  var _a;
  let sessionId = await parseSessionIdCookie(args.request), user = await getLoggedInUser(sessionId).catch(() => {
  });
  if (!user)
    throw redirectToSignIn();
  let userId = user.uid, [userInfo, userData] = await Promise.all([
    getUserInfoById(userId),
    getUserData2(userId)
  ]);
  if (!userData)
    return (0, import_node3.json)({
      auth: userInfo || void 0,
      data: userData
    });
  let organization = await getCurrentOrganization(user.uid);
  if (((_a = userInfo == null ? void 0 : userInfo.customClaims) == null ? void 0 : _a.onboarded) && organization)
    throw redirectToAppHome();
  return (0, import_node3.json)({
    auth: userInfo || void 0,
    data: userData
  });
}
function redirectToSignIn() {
  return (0, import_node3.redirect)(configuration_default.paths.signIn);
}
function redirectToAppHome() {
  return (0, import_node3.redirect)(configuration_default.paths.appHome);
}
async function getUserData2(userId) {
  let { getUserRefById: getUserRefById2 } = await Promise.resolve().then(() => (init_queries(), queries_exports)), ref3 = await getUserRefById2(userId), data = ref3.data();
  if (data)
    return {
      ...data,
      id: ref3.id
    };
}
function getBodySchema() {
  return import_zod.z.object({
    organization: import_zod.z.string()
  });
}

// app/routes/stripe/checkout.ts
var checkout_exports = {};
__export(checkout_exports, {
  action: () => action2
});
var import_node4 = require("@remix-run/node"), import_zod2 = require("zod"), import_path = require("path");

// app/core/generic/get-api-referer-path.ts
var import_url = require("url");
function getApiRefererPath(headers, defaultPath = "/") {
  let fullPath = headers.get("referer") || headers.get("origin");
  return fullPath ? new import_url.URL(fullPath).pathname : defaultPath;
}

// app/core/middleware/with-csrf.ts
var import_csrf = __toESM(require("csrf"));

// app/lib/server/cookies/csrf-secret.cookie.ts
var CSRF_SECRET_COOKIE_NAME = "csrfSecret";
async function getCsrfSecretCookie() {
  let { createCookie } = await import("@remix-run/node"), secret = process.env.SECRET_KEY, secrets = secret ? [secret] : [];
  return secrets.length || logger_default().warn(
    'Please set your "SECRET_KEY" environment variable to sign your cookies'
  ), createCookie(CSRF_SECRET_COOKIE_NAME, {
    path: "/",
    httpOnly: !0,
    secure: process.env.EMULATOR !== "true",
    sameSite: "strict",
    secrets
  });
}
async function parseCsrfSecretCookie(request) {
  return (await getCsrfSecretCookie()).parse(get_cookie_header_default(request));
}
async function serializeCsrfSecretCookie(csrfSecret) {
  return (await getCsrfSecretCookie()).serialize(csrfSecret);
}
async function deleteCsrfSecretCookie() {
  return (await getCsrfSecretCookie()).serialize("", { maxAge: -1 });
}

// app/core/middleware/with-csrf.ts
async function withCsrf(request, tokenProvider = defaultTokenProvider) {
  let csrf = new import_csrf.default(), secret = await parseCsrfSecretCookie(request), token = await evaluateTokenProvider(tokenProvider)(request);
  if (!isMockToken(token)) {
    if (!token)
      return throwUnauthorizedException("CSRF token is invalid");
    if (!secret)
      return throwUnauthorizedException("CSRF secret not found");
    if (!csrf.verify(secret, token))
      return throwUnauthorizedException("CSRF check failed");
  }
}
function defaultTokenProvider(req) {
  return req.headers.get("x-csrf-token");
}
function isTestEnv() {
  return !1;
}
function isMockToken(token) {
  return isTestEnv() && token === "MOCKCSRFTOKEN";
}
function evaluateTokenProvider(tokenProvider) {
  return (request) => {
    if (typeof tokenProvider == "string")
      return tokenProvider;
    if (typeof tokenProvider == "function")
      return tokenProvider(request);
  };
}
var with_csrf_default = withCsrf;

// app/lib/stripe/create-checkout.ts
var import_url2 = require("url");

// app/core/stripe/get-stripe.ts
var STRIPE_API_VERSION = "2022-11-15";
async function getStripeInstance() {
  return isCypressEnv() ? (console.warn("Stripe is running in Testing mode"), getStripeEmulatorInstance()) : getStripeProductionInstance();
}
async function getStripeProductionInstance() {
  let Stripe = await loadStripe(), key = getStripeKey();
  return new Stripe(key, {
    apiVersion: STRIPE_API_VERSION
  });
}
function isCypressEnv() {
  return process.env.IS_CI === "true";
}
async function getStripeEmulatorInstance() {
  let Stripe = await loadStripe();
  return new Stripe("sk_test_12345", {
    host: "localhost",
    port: 12111,
    apiVersion: STRIPE_API_VERSION,
    protocol: "http"
  });
}
function getStripeKey() {
  let STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
  if (!STRIPE_SECRET_KEY)
    throw new Error(
      "'STRIPE_SECRET_KEY' environment variable was not provided"
    );
  return STRIPE_SECRET_KEY;
}
async function loadStripe() {
  let { default: Stripe } = await import("stripe");
  return Stripe;
}

// app/lib/stripe/create-checkout.ts
async function createStripeCheckout(params) {
  let successUrl = getUrlWithParams(params.returnUrl, {
    success: "true"
  }), cancelUrl = getUrlWithParams(params.returnUrl, {
    cancel: "true"
  }), clientReferenceId = params.organizationId, customer = params.customerId || void 0, mode = "subscription", stripe = await getStripeInstance(), lineItem = {
    quantity: 1,
    price: params.priceId
  };
  return stripe.checkout.sessions.create({
    mode,
    customer,
    line_items: [lineItem],
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: clientReferenceId
  });
}
function getUrlWithParams(origin, params) {
  let url = new import_url2.URL(origin), returnUrl = cleanParams(url);
  for (let param in params)
    returnUrl.searchParams.set(param, params[param]);
  return returnUrl.toString();
}
function cleanParams(returnUrl) {
  return returnUrl.searchParams.delete("cancel"), returnUrl.searchParams.delete("success"), returnUrl.searchParams.delete("error"), returnUrl;
}

// app/routes/stripe/checkout.ts
init_permissions();

// app/lib/server/organizations/memberships.server.ts
var import_firestore3 = require("firebase-admin/firestore");
init_queries();
init_collections();
async function getOrganizationMembers(params) {
  let auth = await loadAuth(), organization = (await getOrganizationById(params.organizationId)).data(), userIsMember = params.userId in ((organization == null ? void 0 : organization.members) ?? {});
  if (!organization || !userIsMember)
    return throwForbiddenException("User is not part of the organization");
  let data = Object.values(organization.members).map(({ user }) => auth.getUser(user.id).then(serialize_auth_user_default));
  return await Promise.all(data);
}
async function removeMemberFromOrganization(params) {
  let { targetUserId, currentUserId, organizationId } = params, doc7 = await getOrganizationById(organizationId), organization = doc7.data();
  if (!organization)
    throw throwNotFoundException();
  assertUserCanUpdateMember({
    organization,
    currentUserId,
    targetUserId
  });
  let memberPath = getMemberPath(targetUserId);
  return doc7.ref.update({
    [memberPath]: import_firestore3.FieldValue.delete()
  });
}
async function updateMemberRole(params) {
  let { role, currentUserId, targetUserId, organizationId } = params, doc7 = await getOrganizationById(organizationId), organization = doc7.data();
  if (!organization)
    throw throwNotFoundException();
  assertUserCanUpdateMember({
    organization,
    currentUserId,
    targetUserId
  });
  let user = await getUserRefById(targetUserId), memberPath = getMemberPath(targetUserId);
  await doc7.ref.update({
    [memberPath]: {
      role,
      user: user.ref
    }
  });
}
async function acceptInviteToOrganization({
  code,
  userId
}) {
  let firestore = (0, import_firestore3.getFirestore)(), auth = await loadAuth(), batch = firestore.batch(), inviteDoc = await getInviteByCode(code);
  if (!(inviteDoc != null && inviteDoc.exists))
    return throwNotFoundException();
  let invite = inviteDoc.data();
  if (new Date().getTime() > invite.expiresAt)
    throw await inviteDoc.ref.delete(), new Error("Invite is expired");
  let organizationId = invite.organization.id, role = invite.role, userPath = `/users/${userId}`, organizationRef = firestore.doc(`/organizations/${organizationId}`), userRef = firestore.doc(userPath), memberPath = getMemberPath(userId);
  return batch.update(organizationRef, {
    [memberPath]: {
      user: userRef,
      role
    }
  }), batch.set(userRef, {}, {}), batch.delete(inviteDoc.ref), await auth.setCustomUserClaims(userId, {
    onboarded: !0
  }), await batch.commit(), invite;
}
function getMemberPath(userId) {
  return `members.${userId}`;
}
function assertUserCanUpdateMember(params) {
  let members = params.organization.members, currentUser = members[params.currentUserId], targetUser = members[params.targetUserId];
  if (!targetUser)
    return throwNotFoundException("Target member was not found");
  if (!currentUser)
    return throwNotFoundException("Current member was not found");
  if (currentUser.role <= targetUser.role)
    return throwUnauthorizedException(
      "Current member does not have a greater role than target member"
    );
}
async function getInviteByCode(code) {
  let collection7 = getInvitesCollection(), path = "code", op = "==", ref3 = await collection7.where(path, op, code).get();
  if (ref3.size)
    return ref3.docs[0];
}
async function getUserRoleByOrganization(params) {
  var _a;
  let data = (await getOrganizationById(params.organizationId)).data();
  return (_a = data == null ? void 0 : data.members[params.userId]) == null ? void 0 : _a.role;
}
async function loadAuth() {
  let { getAuth: getAuth4 } = await import("firebase-admin/auth");
  return getAuth4();
}

// app/routes/stripe/checkout.ts
async function action2(props) {
  let req = props.request, data = await req.formData(), body = Object.fromEntries(data.entries()), bodyResult = await getBodySchema2().safeParseAsync(body), redirectToErrorPage2 = () => {
    let referer = getApiRefererPath(req.headers), url = (0, import_path.join)(referer, "?error=true");
    return (0, import_node4.redirect)(url);
  };
  if (!bodyResult.success)
    return redirectToErrorPage2();
  await with_csrf_default(req, bodyResult.data.csrfToken);
  let sessionId = await parseSessionIdCookie(req), userId = (await getLoggedInUser(sessionId)).uid, currentOrganizationId = await parseOrganizationIdCookie(req);
  if (!bodyResult.success)
    return redirectToErrorPage2();
  let { organizationId, priceId, customerId, returnUrl } = bodyResult.data;
  if (!(currentOrganizationId === organizationId))
    return redirectToErrorPage2();
  if (!await getUserCanAccessCheckout({
    organizationId,
    userId
  }))
    return logger_default().debug(
      {
        userId,
        organizationId
      },
      "User attempted to access checkout but lacked permissions"
    ), redirectToErrorPage2();
  try {
    let { url } = await createStripeCheckout({
      returnUrl,
      organizationId,
      priceId,
      customerId
    }), portalUrl = getCheckoutPortalUrl(url, returnUrl);
    return (0, import_node4.redirect)(portalUrl, {
      status: http_status_code_enum_default.SeeOther
    });
  } catch (e) {
    return logger_default().error(e, "Stripe Checkout error"), redirectToErrorPage2();
  }
}
async function getUserCanAccessCheckout(params) {
  try {
    let userRole = await getUserRoleByOrganization(params);
    return userRole === void 0 ? !1 : canChangeBilling(userRole);
  } catch (e) {
    return logger_default().error(e, "Could not retrieve user role"), !1;
  }
}
function getBodySchema2() {
  return import_zod2.z.object({
    csrfToken: import_zod2.z.string().min(1),
    organizationId: import_zod2.z.string().min(1),
    priceId: import_zod2.z.string().min(1),
    customerId: import_zod2.z.string().optional(),
    returnUrl: import_zod2.z.string().min(1)
  });
}
function getCheckoutPortalUrl(portalUrl, returnUrl) {
  return isTestingMode() && !portalUrl ? [returnUrl, "success=true"].join("?") : portalUrl;
}
function isTestingMode() {
  return process.env.ENABLE_STRIPE_TESTING === "true";
}

// app/routes/stripe/webhook.ts
var webhook_exports = {};
__export(webhook_exports, {
  action: () => action3
});
var import_node5 = require("@remix-run/node");

// app/core/stripe/stripe-webhooks.enum.ts
var StripeWebhooks = /* @__PURE__ */ ((StripeWebhooks2) => (StripeWebhooks2.AsyncPaymentSuccess = "checkout.session.async_payment_succeeded", StripeWebhooks2.Completed = "checkout.session.completed", StripeWebhooks2.AsyncPaymentFailed = "checkout.session.async_payment_failed", StripeWebhooks2.SubscriptionDeleted = "customer.subscription.deleted", StripeWebhooks2.SubscriptionUpdated = "customer.subscription.updated", StripeWebhooks2))(StripeWebhooks || {}), stripe_webhooks_enum_default = StripeWebhooks;

// app/lib/server/organizations/subscriptions.ts
var import_firestore4 = require("firebase-admin/firestore");
init_collections();
function setOrganizationSubscription(props) {
  let { customerId, subscription, organizationId } = props;
  return getOrganizationsCollection().doc(organizationId).update({
    subscription,
    customerId
  });
}
async function deleteOrganizationSubscription(subscriptionId) {
  return (await getOrganizationBySubscriptionId(subscriptionId)).update({
    subscription: import_firestore4.FieldValue.delete()
  });
}
async function activatePendingSubscription(organizationId) {
  return getOrganizationsCollection().doc(organizationId).update({
    "subscription.status": "paid" /* Paid */
  });
}
async function updateSubscriptionById(subscriptionId, subscription) {
  return (await getOrganizationBySubscriptionId(subscriptionId)).update({
    subscription
  });
}
async function getOrganizationBySubscriptionId(subscriptionId) {
  let path = "subscription.id", op = "==", { docs, size } = await getOrganizationsCollection().where(path, op, subscriptionId).limit(1).get();
  if (!size)
    throw new Error(
      `No organization found with subscription ${subscriptionId}`
    );
  return docs[0].ref;
}
async function getOrganizationByCustomerId(customerId) {
  let organizations = getOrganizationsCollection(), path = "customerId", op = "==";
  return (await organizations.where(path, op, customerId).get()).docs[0];
}

// app/lib/stripe/build-organization-subscription.ts
function buildOrganizationSubscription(subscription, status = "paid" /* Paid */) {
  var _a, _b;
  let lineItem = subscription.items.data[0], price = lineItem.price;
  return {
    id: subscription.id,
    priceId: price == null ? void 0 : price.id,
    status,
    currency: lineItem.price.currency ?? null,
    interval: ((_a = price == null ? void 0 : price.recurring) == null ? void 0 : _a.interval) ?? null,
    intervalCount: ((_b = price == null ? void 0 : price.recurring) == null ? void 0 : _b.interval_count) ?? null,
    createdAt: subscription.created,
    periodStartsAt: subscription.current_period_start,
    periodEndsAt: subscription.current_period_end,
    trialStartsAt: subscription.trial_start ?? null,
    trialEndsAt: subscription.trial_end ?? null
  };
}

// app/routes/stripe/webhook.ts
var STRIPE_SIGNATURE_HEADER = "stripe-signature", webhookSecretKey = process.env.STRIPE_WEBHOOK_SECRET;
async function action3(props) {
  let req = props.request, signature = req.headers.get(STRIPE_SIGNATURE_HEADER);
  if (!webhookSecretKey)
    return throwInternalServerErrorException(
      "The variable STRIPE_WEBHOOK_SECRET is unset. Please add the STRIPE_WEBHOOK_SECRET environment variable"
    );
  if (!signature)
    return throwBadRequestException();
  let logger2 = logger_default(), rawBody = await req.text(), stripe = await getStripeInstance(), event = stripe.webhooks.constructEvent(
    rawBody,
    signature,
    webhookSecretKey
  );
  logger2.info(
    {
      type: event.type
    },
    "[Stripe] Received Stripe Webhook"
  );
  try {
    switch (event.type) {
      case stripe_webhooks_enum_default.Completed: {
        let session = event.data.object, subscriptionId = session.subscription, subscription = await stripe.subscriptions.retrieve(
          subscriptionId
        );
        await onCheckoutCompleted(session, subscription);
        break;
      }
      case stripe_webhooks_enum_default.AsyncPaymentSuccess: {
        let organizationId = event.data.object.client_reference_id;
        await activatePendingSubscription(organizationId);
        break;
      }
      case stripe_webhooks_enum_default.SubscriptionDeleted: {
        let subscription = event.data.object;
        await deleteOrganizationSubscription(subscription.id);
        break;
      }
      case stripe_webhooks_enum_default.SubscriptionUpdated: {
        let subscription = event.data.object;
        await onSubscriptionUpdated(subscription);
        break;
      }
    }
    return (0, import_node5.json)({ success: !0 });
  } catch (e) {
    return logger2.error(
      {
        type: event.type
      },
      "[Stripe] Webhook handling failed"
    ), logger2.debug(e), throwInternalServerErrorException();
  }
}
async function onCheckoutCompleted(session, subscription) {
  let organizationId = session.client_reference_id, customerId = session.customer, status = getOrderStatus(session.payment_status), subscriptionData = buildOrganizationSubscription(subscription, status);
  return setOrganizationSubscription({
    organizationId,
    customerId,
    subscription: subscriptionData
  });
}
async function onSubscriptionUpdated(subscription) {
  let subscriptionData = buildOrganizationSubscription(subscription);
  await updateSubscriptionById(subscription.id, subscriptionData);
}
function getOrderStatus(paymentStatus) {
  return paymentStatus === "paid" ? "paid" /* Paid */ : "awaitingPayment" /* AwaitingPayment */;
}

// app/routes/stripe/portal.ts
var portal_exports = {};
__export(portal_exports, {
  action: () => action4
});
var import_zod3 = require("zod"), import_path2 = require("path"), import_node6 = require("@remix-run/node");
init_permissions();

// app/lib/stripe/create-billing-portal-session.ts
async function createBillingPortalSession(params) {
  return (await getStripeInstance()).billingPortal.sessions.create({
    customer: params.customerId,
    return_url: params.returnUrl
  });
}

// app/routes/stripe/portal.ts
async function action4(props) {
  let req = props.request, data = await req.formData(), body = Object.fromEntries(data.entries()), bodyResult = await getBodySchema3().safeParseAsync(body), referrerPath = getApiRefererPath(req.headers);
  if (!bodyResult.success)
    return redirectToErrorPage(referrerPath);
  let { customerId, csrfToken } = bodyResult.data;
  await with_csrf_default(req, csrfToken);
  let logger2 = logger_default(), session = await parseSessionIdCookie(req), userId = (await getLoggedInUser(session)).uid;
  if (!await getUserCanAccessCustomerPortal({
    customerId,
    userId
  }))
    return redirectToErrorPage(referrerPath);
  try {
    let referer = req.headers.get("referer"), origin = req.headers.get("origin"), returnUrl = referer || origin || configuration_default.paths.appHome, { url } = await createBillingPortalSession({
      returnUrl,
      customerId
    });
    return (0, import_node6.redirect)(url, {
      status: http_status_code_enum_default.SeeOther
    });
  } catch (error) {
    return logger2.error(error, "Stripe Billing Portal redirect error"), redirectToErrorPage(referrerPath);
  }
}
async function getUserCanAccessCustomerPortal(params) {
  try {
    let organization = await getOrganizationByCustomerId(params.customerId), userRole = await getUserRoleByOrganization({
      organizationId: organization.id,
      userId: params.userId
    });
    return userRole === void 0 ? !1 : canChangeBilling(userRole);
  } catch (e) {
    return logger_default().error(e, "Could not retrieve user role"), !1;
  }
}
function getBodySchema3() {
  return import_zod3.z.object({
    customerId: import_zod3.z.string(),
    csrfToken: import_zod3.z.string()
  });
}
function redirectToErrorPage(referrerPath) {
  let url = (0, import_path2.join)(referrerPath, "?error=true");
  return (0, import_node6.redirect)(url);
}

// app/routes/__site.tsx
var site_exports = {};
__export(site_exports, {
  default: () => site_default
});
var import_react36 = require("@remix-run/react"), import_react37 = require("react");
init_user_session();

// app/core/firebase/components/FirebaseAnalyticsProvider.tsx
var import_reactfire4 = require("reactfire");

// app/core/firebase/hooks/use-track-signed-in-user.ts
var import_react35 = require("react");
init_use_user_session();
function useTrackSignedInUser() {
  var _a;
  let user = useUserSession(), userId = (_a = user == null ? void 0 : user.auth) == null ? void 0 : _a.uid;
  (0, import_react35.useEffect)(() => {
    !is_browser_default() || (async () => {
      let { getAnalytics, setUserId } = await import("firebase/analytics");
      userId && setUserId(getAnalytics(), userId);
    })();
  }, [userId]);
}

// app/core/firebase/hooks/use-analytics-tracking.ts
function useAnalyticsTracking() {
  useTrackSignedInUser();
}

// app/core/firebase/components/FirebaseAnalyticsProvider.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), FirebaseAnalyticsProvider = ({ children }) => configuration_default.emulator || !is_browser_default() ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children
}, void 0, !1, {
  fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
  lineNumber: 11,
  columnNumber: 12
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BrowserFirebaseAnalyticsProvider, {
  children
}, void 0, !1, {
  fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this);
function BrowserFirebaseAnalyticsProvider(props) {
  let { data: sdk, status } = (0, import_reactfire4.useInitAnalytics)(async (app) => {
    let { getAnalytics } = await import("firebase/analytics");
    return getAnalytics(app);
  });
  return status !== "success" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: props.children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
    lineNumber: 29,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactfire4.AnalyticsProvider, {
    sdk,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnalyticsTrackingEventsProvider, {
      children: props.children
    }, void 0, !1, {
      fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
function AnalyticsTrackingEventsProvider({
  children
}) {
  return useAnalyticsTracking(), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseAnalyticsProvider.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
var FirebaseAnalyticsProvider_default = FirebaseAnalyticsProvider;

// app/routes/__site.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function SiteLayout() {
  let [userSession, setUserSession] = (0, import_react37.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession,
      setUserSession,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAnalyticsProvider_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_session_default.Provider, {
          value: { userSession, setUserSession },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader_default, {}, void 0, !1, {
              fileName: "app/routes/__site.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react36.Outlet, {}, void 0, !1, {
              fileName: "app/routes/__site.tsx",
              lineNumber: 25,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__site.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__site.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__site.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__site.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var site_default = SiteLayout;

// app/routes/__site/pricing.tsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => pricing_default,
  meta: () => meta2
});

// app/components/PricingTable.tsx
var import_CheckCircleIcon = __toESM(require("@heroicons/react/24/outline/CheckCircleIcon")), import_classnames8 = __toESM(require("classnames")), import_react_i18next8 = require("react-i18next");
init_Heading();
init_Button();
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PLANS = configuration_default.stripe.plans, PricingTable = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "flex flex-col items-start items-center space-y-6 lg:space-y-0 justify-center lg:flex-row lg:space-x-4",
  children: PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingItem, {
    selectable: !0,
    plan
  }, plan.stripePriceId, !1, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 26,
    columnNumber: 16
  }, this))
}, void 0, !1, {
  fileName: "app/components/PricingTable.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this), PricingTable_default = PricingTable;
PricingTable.Item = PricingItem;
PricingTable.Price = Price;
PricingTable.FeaturesList = FeaturesList;
function PricingItem(props) {
  let linkHref = `${configuration_default.paths.signUp}?utm_source=${props.plan.stripePriceId}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames8.default)(
      `
         relative flex w-full flex-col justify-between rounded-2xl border-2 border-gray-100
         p-4 shadow-2xl shadow-transparent transition-all duration-500 dark:border-black-300 dark:bg-black-500 
         sm:p-6 lg:w-4/12 xl:p-8 2xl:w-3/12
      `,
      {
        ["dark:hover:border-primary-500 dark:hover:bg-black-500 hover:scale-[1.01] dark:hover:shadow-primary-500/40"]: props.selectable
      }
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 2,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "font-semibold dark:text-white",
              children: props.plan.name
            }, void 0, !1, {
              fileName: "app/components/PricingTable.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, {
            children: props.plan.price
          }, void 0, !1, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-xl text-gray-500 dark:text-gray-400",
            children: props.plan.description
          }, void 0, !1, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4 py-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FeaturesList, {
          features: props.plan.features
        }, void 0, !1, {
          fileName: "app/components/PricingTable.tsx",
          lineNumber: 82,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: props.selectable,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bottom-0 left-0 w-full p-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            block: !0,
            href: linkHref,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next8.Trans, {
              i18nKey: "common:getStarted"
            }, void 0, !1, {
              fileName: "app/components/PricingTable.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/PricingTable.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/PricingTable.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function FeaturesList(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
    className: "flex flex-col space-y-2",
    children: props.features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next8.Trans, {
        i18nKey: `common:plans.features.${feature}`,
        defaults: feature
      }, void 0, !1, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this)
    }, feature, !1, {
      fileName: "app/components/PricingTable.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this))
  }, void 0, !1, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
function Price({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-3xl font-extrabold lg:text-4xl",
      children
    }, void 0, !1, {
      fileName: "app/components/PricingTable.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
function ListItem({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
    className: "flex items-center space-x-3 text-lg font-medium",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CheckCircleIcon.default, {
          className: "h-7 text-green-500"
        }, void 0, !1, {
          fileName: "app/components/PricingTable.tsx",
          lineNumber: 129,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 128,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children
      }, void 0, !1, {
        fileName: "app/components/PricingTable.tsx",
        lineNumber: 132,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/PricingTable.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}

// app/routes/__site/pricing.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: `Pricing - ${configuration_default.site.siteName}`
});
function Pricing() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
        children: "Pricing"
      }, void 0, !1, {
        fileName: "app/routes/__site/pricing.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
        children: "Fair pricing for your customers"
      }, void 0, !1, {
        fileName: "app/routes/__site/pricing.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingTable_default, {}, void 0, !1, {
          fileName: "app/routes/__site/pricing.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__site/pricing.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__site/pricing.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var pricing_default = Pricing;

// app/routes/__site/index.tsx
var site_exports2 = {};
__export(site_exports2, {
  default: () => Index
});
var import_outline6 = require("@heroicons/react/24/outline");

// app/components/newsletter/ConvertkitSignupForm.tsx
init_Button();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ConvertkitSignupForm = ({ formId, children }) => {
  let action13 = `https://app.convertkit.com/forms/${formId}/subscriptions`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    action: action13,
    method: "POST",
    target: "_blank",
    className: "space-around flex w-full flex-1 justify-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
          type: "email",
          className: "formkit-input w-50 !rounded-tr-none !rounded-br-none border-r-transparent py-1 text-sm hover:border-r-transparent sm:w-60 md:w-80 md:text-base",
          name: "email_address",
          "aria-label": "Your email address",
          placeholder: "your@email.com",
          required: !0
        }, void 0, !1, {
          fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        className: "flex justify-center rounded-tl-none rounded-bl-none text-sm md:text-base",
        children
      }, void 0, !1, {
        fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/newsletter/ConvertkitSignupForm.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}, ConvertkitSignupForm_default = ConvertkitSignupForm;

// app/routes/__site/index.tsx
init_Heading();
init_Button();

// app/components/Footer.tsx
var import_react38 = require("@remix-run/react");
init_Heading();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), YEAR = new Date().getFullYear();
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "Footer",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-y-0 lg:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex w-full space-x-8 lg:w-4/12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col space-y-2.5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage_default, {
                    className: "w-[85px] md:w-[115px]"
                  }, void 0, !1, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 22,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400",
                    children: "Add a short tagline about your product"
                  }, void 0, !1, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex text-xs text-gray-500 dark:text-gray-400",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    children: [
                      "\xA9 Copyright ",
                      YEAR,
                      " ",
                      configuration_default.site.siteName,
                      ". All Rights Reserved."
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/Footer.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 32,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-8 lg:space-y-0 lg:space-x-24 lg:flex-row lg:justify-end",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-2.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                      type: 6,
                      children: "Our Company"
                    }, void 0, !1, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 49,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "#",
                            children: "Who we are"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 56,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "/blog",
                            children: "Blog"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 59,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "/contact",
                            children: "Contact"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 62,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 51,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-2.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                      type: 6,
                      children: "Product"
                    }, void 0, !1, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 71,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "/docs",
                            children: "Documentation"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 78,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "#",
                            children: "Help Center"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 81,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "#",
                            children: "Changelog"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 84,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 73,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 70,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                      type: 6,
                      children: "Legal"
                    }, void 0, !1, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 93,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                      className: "flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "#",
                            children: "Terms of Service"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 100,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "#",
                            children: "Privacy Policy"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 103,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react38.Link, {
                            to: "#",
                            children: "Cookie Policy"
                          }, void 0, !1, {
                            fileName: "app/components/Footer.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/Footer.tsx",
                          lineNumber: 106,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/Footer.tsx",
                      lineNumber: 95,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 92,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 91,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var Footer_default = Footer;

// app/routes/__site/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-8 mb-8 flex flex-col items-center md:mt-24 md:flex-row mx-auto flex-1 justify-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex w-full flex-1 flex-col items-center space-y-12",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroTitle, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      children: "Tell your visitors why"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 31,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-primary-500",
                      children: "your SaaS is awesome"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 32,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center text-gray-700 dark:text-gray-400",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                      children: "Here you can write a short description of your SaaS"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 36,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                      children: "This subheading is usually laid out on multiple lines"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 40,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                      children: "Just like this."
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 44,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col items-center space-y-2.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      className: "GradientButton rounded-full p-1",
                      size: "large",
                      href: "/auth/sign-up",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "flex items-center space-x-2 text-xl",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            children: "Get Started for free"
                          }, void 0, !1, {
                            fileName: "app/routes/__site/index.tsx",
                            lineNumber: 54,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline6.ArrowRightIcon, {
                            className: "h-6"
                          }, void 0, !1, {
                            fileName: "app/routes/__site/index.tsx",
                            lineNumber: 55,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 48,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-xs",
                      children: "No credit-card required"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 59,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 47,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__site/index.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-center py-12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              decoding: "async",
              className: "rounded-2xl",
              width: 800,
              height: 600,
              src: "/assets/images/browser.webp",
              alt: "App"
            }, void 0, !1, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 65,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__site/index.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider2, {}, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col items-center justify-center space-y-24 py-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex max-w-3xl flex-col items-center space-y-4 text-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col items-center space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline6.FireIcon, {
                        className: "h-6 text-primary-500"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 90,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
                      className: "text-primary-500",
                      children: "Features"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 94,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 89,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
                  children: "The best tool in the space"
                }, void 0, !1, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 97,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                }, void 0, !1, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 99,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "grid gap-12 lg:grid-cols-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 107,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 116,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 125,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 134,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 143,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 152,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider2, {}, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 165,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col items-center justify-center space-y-24 py-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex max-w-3xl flex-col items-center space-y-4 text-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col items-center space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline6.UserGroupIcon, {
                        className: "h-6 text-primary-500"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 179,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
                      className: "text-primary-500",
                      children: "Testimonials"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 183,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 178,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
                  children: "Trusted by indie-hackers all over the world"
                }, void 0, !1, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 186,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                }, void 0, !1, {
                  fileName: "app/routes/__site/index.tsx",
                  lineNumber: 188,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 173,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "grid gap-12 lg:grid-cols-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 196,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 205,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 215,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 214,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 226,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 223,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 233,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 232,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                        type: 3,
                        children: "Item"
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
                      }, void 0, !1, {
                        fileName: "app/routes/__site/index.tsx",
                        lineNumber: 244,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__site/index.tsx",
              lineNumber: 194,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 168,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 167,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col justify-between rounded-lg md:flex-row space-y-2 bg-primary-50 px-8 py-12 dark:bg-primary-600/10 md:space-y-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col justify-between space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 2,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-gray-800 dark:text-white",
                      children: "The application you were waiting for."
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 265,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 264,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 2,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-primary-500",
                      children: "Sign up for free, today."
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 271,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 270,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 263,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col justify-end space-y-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      className: "w-full md:w-auto",
                      size: "large",
                      href: "/auth/sign-up",
                      children: "Get Started for free"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 277,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 276,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-2 text-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-xs",
                      children: "No credit-card required"
                    }, void 0, !1, {
                      fileName: "app/routes/__site/index.tsx",
                      lineNumber: 287,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__site/index.tsx",
                    lineNumber: 286,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__site/index.tsx",
                lineNumber: 275,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__site/index.tsx",
            lineNumber: 256,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 255,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 254,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
          fileName: "app/routes/__site/index.tsx",
          lineNumber: 295,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 294,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider2, {}, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 298,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 300,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function NewsletterSignup() {
  let formId = configuration_default.site.convertKitFormId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col items-center justify-center space-y-4 py-16 text-sm text-gray-500 dark:text-gray-400 lg:py-24",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Let's stay in touch."
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 314,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Subscribe to Makerkit's Newsletter to receive updates."
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 316,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConvertkitSignupForm_default, {
        formId,
        children: "Subscribe"
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 318,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-center text-xs",
        children: "No spam. Ever."
      }, void 0, !1, {
        fileName: "app/routes/__site/index.tsx",
        lineNumber: 320,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 309,
    columnNumber: 5
  }, this);
}
function Divider2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
    className: "border border-gray-50 dark:border-black-400"
  }, void 0, !1, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 326,
    columnNumber: 10
  }, this);
}
function HeroTitle({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
    className: "text-center text-4xl text-black-500 dark:text-white flex flex-col space-y-2 font-extrabold md:text-6xl xl:text-7xl 2xl:text-8xl",
    children
  }, void 0, !1, {
    fileName: "app/routes/__site/index.tsx",
    lineNumber: 331,
    columnNumber: 5
  }, this);
}

// app/routes/__site/faq.tsx
var faq_exports = {};
__export(faq_exports, {
  default: () => faq_default,
  meta: () => meta3
});
init_Heading();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DATA = [
  {
    question: "Here goes a question",
    answer: "<p>And here is the answer</p>"
  }
], meta3 = () => ({
  title: `FAQ - ${configuration_default.site.siteName}`
}), Faq = () => {
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(structuredData) }
      }, "ld:json", !1, {
        fileName: "app/routes/__site/faq.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero_default, {
            children: "FAQ"
          }, void 0, !1, {
            fileName: "app/routes/__site/faq.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
            children: "Frequently Asked Questions"
          }, void 0, !1, {
            fileName: "app/routes/__site/faq.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col space-y-6",
              children: DATA.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "FaqItem",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 2,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "font-semibold dark:text-white",
                      children: item.question
                    }, void 0, !1, {
                      fileName: "app/routes/__site/faq.tsx",
                      lineNumber: 57,
                      columnNumber: 21
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__site/faq.tsx",
                    lineNumber: 56,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex flex-col space-y-4 py-4 text-lg lg:text-xl dark:text-gray-400",
                    dangerouslySetInnerHTML: { __html: item.answer }
                  }, void 0, !1, {
                    fileName: "app/routes/__site/faq.tsx",
                    lineNumber: 62,
                    columnNumber: 19
                  }, this)
                ]
              }, index, !0, {
                fileName: "app/routes/__site/faq.tsx",
                lineNumber: 55,
                columnNumber: 17
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/__site/faq.tsx",
              lineNumber: 52,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__site/faq.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__site/faq.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, !1, {
        fileName: "app/routes/__site/faq.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__site/faq.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}, faq_default = Faq;

// app/routes/invite.tsx
var invite_exports = {};
__export(invite_exports, {
  default: () => invite_default
});
var import_react39 = require("@remix-run/react");

// app/components/auth/AuthPageShell.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AuthPageShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession: void 0,
      setUserSession: () => ({}),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-screen flex-col items-center justify-center space-y-8 lg:bg-gray-50 dark:lg:bg-black-700",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, !1, {
              fileName: "app/components/auth/AuthPageShell.tsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/auth/AuthPageShell.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex w-11/12 max-w-xl flex-col items-center space-y-5 rounded-xl border border-transparent bg-white p-8 dark:bg-black-600 dark:bg-black-500 sm:border-gray-100 dark:sm:border-black-500 md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12",
            children
          }, void 0, !1, {
            fileName: "app/components/auth/AuthPageShell.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/auth/AuthPageShell.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/auth/AuthPageShell.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/auth/AuthPageShell.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var AuthPageShell_default = AuthPageShell;

// app/routes/invite.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function InviteLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthPageShell_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react39.Outlet, {}, void 0, !1, {
      fileName: "app/routes/invite.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/invite.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var invite_default = InviteLayout;

// app/routes/invite/$code.tsx
var code_exports = {};
__export(code_exports, {
  CatchBoundary: () => CatchBoundary3,
  action: () => action5,
  default: () => code_default,
  loader: () => loader3,
  meta: () => meta4
});
var import_react58 = require("react"), import_react_i18next18 = require("react-i18next"), import_zod4 = require("zod"), import_node7 = require("@remix-run/node"), import_react59 = require("@remix-run/react"), import_reactfire13 = require("reactfire");
init_If();
init_Button();
init_Heading();

// app/components/auth/OAuthProviders.tsx
var import_react47 = require("react"), import_react_i18next12 = require("react-i18next");

// app/core/ui/AuthProviderButton.tsx
init_Button();

// app/core/ui/AuthProviderLogo.tsx
var import_outline7 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DEFAULT_IMAGE_SIZE = 28, AuthProviderLogo = ({ firebaseProviderId, width, height }) => {
  let image = getOAuthProviderLogos()[firebaseProviderId];
  return typeof image == "string" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
    loading: "lazy",
    src: image,
    alt: `${firebaseProviderId} logo`,
    width: width ?? DEFAULT_IMAGE_SIZE,
    height: height ?? DEFAULT_IMAGE_SIZE
  }, void 0, !1, {
    fileName: "app/core/ui/AuthProviderLogo.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: image
  }, void 0, !1, {
    fileName: "app/core/ui/AuthProviderLogo.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
function getOAuthProviderLogos() {
  return {
    password: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline7.AtSymbolIcon, {
      className: "h-7"
    }, void 0, !1, {
      fileName: "app/core/ui/AuthProviderLogo.tsx",
      lineNumber: 32,
      columnNumber: 15
    }, this),
    phone: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline7.DevicePhoneMobileIcon, {
      className: "h-7"
    }, void 0, !1, {
      fileName: "app/core/ui/AuthProviderLogo.tsx",
      lineNumber: 33,
      columnNumber: 12
    }, this),
    "google.com": "/assets/images/google.webp",
    "facebook.com": "/assets/images/facebook.webp",
    "twitter.com": "/assets/images/twitter.webp",
    "github.com": "/assets/images/github.webp",
    "microsoft.com": "/assets/images/microsoft.webp",
    "apple.com": "/assets/images/apple.webp"
  };
}
var AuthProviderLogo_default = AuthProviderLogo;

// app/core/ui/AuthProviderButton.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AuthProviderButton = ({ children, providerId, onClick }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
  "data-cy": "auth-provider-button",
  block: !0,
  color: "custom",
  size: "large",
  className: "AuthProviderButton",
  onClick,
  "data-provider": providerId,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "absolute left-3 flex items-center justify-start",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderLogo_default, {
        firebaseProviderId: providerId
      }, void 0, !1, {
        fileName: "app/core/ui/AuthProviderButton.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/AuthProviderButton.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex w-full flex-1 items-center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "flex w-full items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-current",
          children
        }, void 0, !1, {
          fileName: "app/core/ui/AuthProviderButton.tsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/AuthProviderButton.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/AuthProviderButton.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/core/ui/AuthProviderButton.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), AuthProviderButton_default = AuthProviderButton;

// app/core/firebase/hooks/use-sign-up-with-email-and-password.ts
var import_react41 = require("react"), import_reactfire5 = require("reactfire");
init_use_request_state();
function useSignUpWithEmailAndPassword() {
  let auth = (0, import_reactfire5.useAuth)(), { state, setLoading, setData, setError } = useRequestState();
  return [(0, import_react41.useCallback)(
    async (email, password) => {
      setLoading(!0);
      try {
        let { createUserWithEmailAndPassword } = await import("firebase/auth"), credential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        return setData(credential), credential;
      } catch (error) {
        setError(error);
      }
    },
    [auth, setData, setError, setLoading]
  ), state];
}

// app/core/firebase/hooks/use-sign-in-with-provider.ts
var import_react42 = require("react"), import_reactfire6 = require("reactfire");
init_use_request_state();
function useSignInWithProvider() {
  let auth = (0, import_reactfire6.useAuth)(), { state, setLoading, setData, setError, resetState } = useRequestState();
  return { signInWithProvider: (0, import_react42.useCallback)(
    async (provider) => {
      setLoading(!0);
      try {
        let credential = await getCredential(auth, provider);
        return setData(credential), credential;
      } catch (error) {
        return setError(error), Promise.reject(error);
      }
    },
    [auth, setData, setError, setLoading]
  ), state, resetState };
}
async function getCredential(auth, provider) {
  let user = auth.currentUser, {
    signInWithPopup,
    browserPopupRedirectResolver: browserPopupRedirectResolver2,
    reauthenticateWithPopup
  } = await import("firebase/auth");
  return user ? reauthenticateWithPopup(
    user,
    provider,
    browserPopupRedirectResolver2
  ) : signInWithPopup(auth, provider, browserPopupRedirectResolver2);
}

// app/core/firebase/utils/get-firebase-error-code.ts
var import_app = require("firebase/app");
function getFirebaseErrorCode(error) {
  if (!!error)
    return isFirebaseError(error) ? error.code : void 0;
}
function isFirebaseError(error) {
  return error instanceof import_app.FirebaseError;
}

// app/components/auth/OAuthProviders.tsx
init_If();

// app/components/auth/AuthErrorMessage.tsx
var import_react_i18next9 = require("react-i18next");
init_Alert();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AuthErrorMessage({ error }) {
  if (!error)
    return null;
  let DefaultError = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next9.Trans, {
    i18nKey: "auth:errors.default"
  }, void 0, !1, {
    fileName: "app/components/auth/AuthErrorMessage.tsx",
    lineNumber: 16,
    columnNumber: 24
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    className: "w-full",
    type: "error",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      className: "text-sm font-semibold",
      "data-cy": "auth-error-message",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next9.Trans, {
        i18nKey: `auth:errors.${error}`,
        defaults: "<DefaultError />",
        components: { DefaultError }
      }, void 0, !1, {
        fileName: "app/components/auth/AuthErrorMessage.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/auth/AuthErrorMessage.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/auth/AuthErrorMessage.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/auth/MultiFactorAuthChallengeModal.tsx
var import_auth6 = require("firebase/auth"), import_react46 = require("react"), import_reactfire8 = require("reactfire"), import_react_epic_spinners3 = require("react-epic-spinners"), import_react_i18next11 = require("react-i18next");
init_Modal();
init_Button();
init_If();
init_Alert();
init_use_request_state();

// app/core/firebase/hooks/use-recaptcha-verifier.ts
var import_reactfire7 = require("reactfire"), import_react45 = require("react");
function useRecaptchaVerifier(id) {
  let auth = (0, import_reactfire7.useAuth)();
  return (0, import_react45.useCallback)(async () => {
    let { RecaptchaVerifier } = await import("firebase/auth");
    return new RecaptchaVerifier(
      id,
      {
        size: "invisible"
      },
      auth
    );
  }, [auth, id]);
}
var use_recaptcha_verifier_default = useRecaptchaVerifier;

// app/components/auth/MultiFactorAuthChallengeModal.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), buttonId = "multi-factor-auth-challenge-button", MultiFactorAuthChallengeModal = ({ error, isOpen, setIsOpen, onSuccess, cancelButton }) => {
  let auth = (0, import_reactfire8.useAuth)(), verificationIdState = useRequestState(), verificationCodeState = useRequestState(), getRecaptchaVerifier = use_recaptcha_verifier_default(buttonId), phoneVerificationSent = (0, import_react46.useRef)(!1), resolver = (0, import_react46.useMemo)(() => (0, import_auth6.getMultiFactorResolver)(auth, error), [auth, error]), { setLoading, setData, setError, state } = verificationIdState, onCodeSubmit = (0, import_react46.useCallback)(
    async (verificationCode) => {
      let verificationId = state.data;
      if (!verificationId)
        return;
      verificationCodeState.setLoading(!0);
      let phoneAuthCredential = import_auth6.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      ), multiFactorAssertion = import_auth6.PhoneMultiFactorGenerator.assertion(phoneAuthCredential);
      try {
        let credential = await resolver.resolveSignIn(multiFactorAssertion);
        onSuccess(credential);
      } catch (e) {
        let error2 = e;
        verificationCodeState.setError(error2.code);
      }
    },
    [onSuccess, resolver, state.data, verificationCodeState]
  );
  return (0, import_react46.useEffect)(() => {
    if (state.loading || state.data || phoneVerificationSent.current)
      return;
    setLoading(!0), phoneVerificationSent.current = !0;
    let phoneInfoOptions = {
      multiFactorHint: resolver.hints[0],
      session: resolver.session
    }, phoneAuthProvider = new import_auth6.PhoneAuthProvider(auth);
    (async () => {
      try {
        let recaptchaVerifier = await getRecaptchaVerifier(), verificationId = await phoneAuthProvider.verifyPhoneNumber(
          phoneInfoOptions,
          recaptchaVerifier
        );
        setData(verificationId);
      } catch (e) {
        console.error(e), setError(e);
      }
    })();
  }, [
    auth,
    resolver.session,
    resolver.hints,
    getRecaptchaVerifier,
    setData,
    setLoading,
    setError,
    state.data,
    state.loading
  ]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        id: buttonId
      }, void 0, !1, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next11.Trans, {
          i18nKey: "auth:verificationCode"
        }, void 0, !1, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 124,
          columnNumber: 18
        }, this),
        isOpen,
        setIsOpen,
        closeButton: cancelButton,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          onSubmit: async (e) => {
            e.preventDefault();
            let code = new FormData(e.currentTarget).get("verificationCode");
            !code || await onCodeSubmit(code);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoadingSpinner, {}, void 0, !1, {
                fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                lineNumber: 144,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
              lineNumber: 143,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.error,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
                type: "error",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next11.Trans, {
                  i18nKey: "auth:sendMfaCodeError"
                }, void 0, !1, {
                  fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                  lineNumber: 149,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                lineNumber: 148,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
              lineNumber: 147,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.data,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-col space-y-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next11.Trans, {
                        i18nKey: "auth:verificationCode"
                      }, void 0, !1, {
                        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                        autoComplete: "off",
                        required: !0,
                        name: "verificationCode"
                      }, void 0, !1, {
                        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next11.Trans, {
                          i18nKey: "auth:verificationCodeHint"
                        }, void 0, !1, {
                          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                          lineNumber: 165,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                    lineNumber: 155,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: verificationCodeState.state.error,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                      error: verificationCodeState.state.error
                    }, void 0, !1, {
                      fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                      lineNumber: 170,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                    loading: verificationCodeState.state.loading,
                    block: !0,
                    type: "submit",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next11.Trans, {
                      i18nKey: "auth:verificationCodeSubmitButtonLabel"
                    }, void 0, !1, {
                      fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                      lineNumber: 180,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                    lineNumber: 175,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
                lineNumber: 154,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
              lineNumber: 153,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 129,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 123,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
    lineNumber: 120,
    columnNumber: 5
  }, this);
};
function LoadingSpinner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "my-6 flex flex-col items-center justify-center space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners3.SpringSpinner, {
          color: "currentColor",
          size: 36
        }, void 0, !1, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 194,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 193,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next11.Trans, {
            i18nKey: "auth:sendingMfaCode"
          }, void 0, !1, {
            fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
            lineNumber: 199,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
          lineNumber: 198,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
        lineNumber: 197,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/MultiFactorAuthChallengeModal.tsx",
    lineNumber: 192,
    columnNumber: 5
  }, this);
}
var MultiFactorAuthChallengeModal_default = MultiFactorAuthChallengeModal;

// app/core/firebase/utils/is-multi-factor-error.ts
var import_app2 = require("firebase/app");
function isMultiFactorError(error) {
  return error instanceof import_app2.FirebaseError ? error.code === "auth/multi-factor-auth-required" : !1;
}

// app/core/ui/PageLoadingIndicator.tsx
var import_react_epic_spinners4 = require("react-epic-spinners");
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PageLoadingIndicator({
  children,
  fullPage,
  displayLogo
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `flex flex-col items-center justify-center space-y-6 ${fullPage ?? !0 ? "fixed top-0 left-0 z-[100] h-screen w-screen bg-white dark:bg-black-500" : ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: displayLogo ?? !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "my-2",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage_default, {}, void 0, !1, {
            fileName: "app/core/ui/PageLoadingIndicator.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/core/ui/PageLoadingIndicator.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/PageLoadingIndicator.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_epic_spinners4.FulfillingBouncingCircleSpinner, {
        size: 48,
        color: "currentColor"
      }, void 0, !1, {
        fileName: "app/core/ui/PageLoadingIndicator.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-sm font-medium",
        children
      }, void 0, !1, {
        fileName: "app/core/ui/PageLoadingIndicator.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/core/ui/PageLoadingIndicator.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/auth/OAuthProviders.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), OAUTH_PROVIDERS = configuration_default.auth.providers.oAuth, OAuthProviders = ({ onSignIn }) => {
  let {
    signInWithProvider,
    state: signInWithProviderState,
    resetState
  } = useSignInWithProvider(), loading = signInWithProviderState.loading, [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react47.useState)(), createSession = (0, import_react47.useCallback)(
    async (user) => {
      let idToken = await user.getIdToken();
      onSignIn(idToken);
    },
    [onSignIn]
  ), onSignInWithProvider = (0, import_react47.useCallback)(
    async (signInRequest) => {
      try {
        let credential = await signInRequest();
        if (!credential)
          return Promise.reject();
        await createSession(credential.user);
      } catch (error) {
        if (isMultiFactorError(error))
          setMultiFactorAuthError(error);
        else
          throw getFirebaseErrorCode(error);
      }
    },
    [setMultiFactorAuthError, createSession]
  );
  return !OAUTH_PROVIDERS || !OAUTH_PROVIDERS.length ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: loading,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, !1, {
          fileName: "app/components/auth/OAuthProviders.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/OAuthProviders.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex w-full flex-1 flex-col space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-col space-y-2",
            children: OAUTH_PROVIDERS.map((OAuthProviderClass) => {
              let providerInstance = new OAuthProviderClass(), providerId = providerInstance.providerId;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderButton_default, {
                providerId,
                onClick: () => onSignInWithProvider(
                  () => signInWithProvider(providerInstance)
                ),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next12.Trans, {
                  i18nKey: "auth:signInWithProvider",
                  values: {
                    provider: getProviderName(providerId)
                  }
                }, void 0, !1, {
                  fileName: "app/components/auth/OAuthProviders.tsx",
                  lineNumber: 92,
                  columnNumber: 17
                }, this)
              }, providerId, !1, {
                fileName: "app/components/auth/OAuthProviders.tsx",
                lineNumber: 83,
                columnNumber: 15
              }, this);
            })
          }, void 0, !1, {
            fileName: "app/components/auth/OAuthProviders.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: signInWithProviderState.error,
            children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
              error: getFirebaseErrorCode(error)
            }, void 0, !1, {
              fileName: "app/components/auth/OAuthProviders.tsx",
              lineNumber: 104,
              columnNumber: 23
            }, this)
          }, void 0, !1, {
            fileName: "app/components/auth/OAuthProviders.tsx",
            lineNumber: 103,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/auth/OAuthProviders.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: !0,
          setIsOpen: (isOpen) => {
            setMultiFactorAuthError(void 0), isOpen || resetState();
          },
          onSuccess: async (credential) => createSession(credential.user)
        }, void 0, !1, {
          fileName: "app/components/auth/OAuthProviders.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/OAuthProviders.tsx",
        lineNumber: 108,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/OAuthProviders.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
};
function getProviderName(providerId) {
  let capitalize2 = (value) => value.slice(0, 1).toUpperCase() + value.slice(1);
  return providerId.endsWith(".com") ? capitalize2(providerId.split(".com")[0]) : capitalize2(providerId);
}
var OAuthProviders_default = OAuthProviders;

// app/core/firebase/components/GuardedPage.tsx
var import_react49 = require("react"), import_reactfire9 = require("reactfire");

// app/core/hooks/use-clear-firestore-cache.ts
var import_react48 = require("react");
function useClearFirestoreCache() {
  return (0, import_react48.useCallback)(() => {
    let reactFirePreloadedObservables = globalThis._reactFirePreloadedObservables;
    reactFirePreloadedObservables && Array.from(reactFirePreloadedObservables.keys()).filter((key) => key.includes("firestore")).forEach((key) => reactFirePreloadedObservables.delete(key));
  }, []);
}
var use_clear_firestore_cache_default = useClearFirestoreCache;

// app/core/firebase/components/GuardedPage.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AuthRedirectListener = ({ children, whenSignedOut }) => {
  let auth = (0, import_reactfire9.useAuth)(), { status } = (0, import_reactfire9.useSigninCheck)(), redirectUserAway = useRedirectUserAway(), clearCache = use_clear_firestore_cache_default(), isSignInCheckDone = status === "success";
  return (0, import_react49.useEffect)(() => {
    if (!isSignInCheckDone)
      return;
    let listener = auth.onAuthStateChanged((user) => {
      let shouldLogOut = !user && whenSignedOut;
      if (user || clearCache(), shouldLogOut)
        return redirectUserAway(whenSignedOut);
    });
    return () => listener();
  }, [
    auth,
    clearCache,
    isSignInCheckDone,
    redirectUserAway,
    status,
    whenSignedOut
  ]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/GuardedPage.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
function GuardedPage({
  children,
  whenSignedOut
}) {
  return is_browser_default() ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthRedirectListener, {
    whenSignedOut,
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/GuardedPage.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/GuardedPage.tsx",
    lineNumber: 63,
    columnNumber: 12
  }, this);
}
function useRedirectUserAway() {
  return (0, import_react49.useCallback)((path) => {
    window.location.pathname !== path && window.location.assign(path);
  }, []);
}

// app/core/generic/create-csrf-token.ts
var import_csrf2 = __toESM(require("csrf"));
async function createCsrfToken() {
  let csrf = new import_csrf2.default(), secret = await csrf.secret();
  return {
    token: csrf.create(secret),
    secret
  };
}
var create_csrf_token_default = createCsrfToken;

// app/core/firebase/admin/auth/create-server-side-session.ts
async function createServerSideSession(idToken) {
  let expiresIn = getSessionCookieTTL(), sessionCookie = await createFirebaseSessionCookie(idToken, expiresIn);
  return serializeSessionIdCookie(sessionCookie);
}
var create_server_side_session_default = createServerSideSession;

// app/components/auth/EmailPasswordSignUpContainer.tsx
var import_react50 = require("react");
init_If();

// app/components/auth/EmailPasswordSignUpForm.tsx
var import_react_i18next13 = require("react-i18next"), import_react_hook_form = require("react-hook-form");
init_Button();
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), EmailPasswordSignUpForm = ({ onSubmit, loading }) => {
  var _a, _b, _c;
  let { t: t2 } = (0, import_react_i18next13.useTranslation)(), { register, handleSubmit, watch, formState } = (0, import_react_hook_form.useForm)({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  }), emailControl = register("email", { required: !0 }), errors = formState.errors, passwordControl = register("password", {
    required: !0,
    minLength: {
      value: 6,
      message: t2("auth:passwordLengthError")
    }
  }), passwordValue = watch("password"), repeatPasswordControl = register("repeatPassword", {
    required: !0,
    minLength: {
      value: 6,
      message: t2("auth:passwordLengthError")
    },
    validate: (value) => value !== passwordValue ? t2("auth:passwordsDoNotMatch") : !0
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "w-full",
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next13.Trans, {
                  i18nKey: "common:emailAddress"
                }, void 0, !1, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  "data-cy": "email-input",
                  required: !0,
                  type: "email",
                  placeholder: "your@email.com",
                  innerRef: emailControl.ref,
                  onBlur: emailControl.onBlur,
                  onChange: emailControl.onChange,
                  name: emailControl.name
                }, void 0, !1, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
              error: (_a = errors.email) == null ? void 0 : _a.message
            }, void 0, !1, {
              fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next13.Trans, {
                i18nKey: "common:password"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 78,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                "data-cy": "password-input",
                required: !0,
                type: "password",
                placeholder: "",
                innerRef: passwordControl.ref,
                onBlur: passwordControl.onBlur,
                onChange: passwordControl.onChange,
                name: passwordControl.name
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 80,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next13.Trans, {
                  i18nKey: "auth:passwordHint"
                }, void 0, !1, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 92,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 91,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                "data-cy": "password-error",
                error: (_b = errors.password) == null ? void 0 : _b.message
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 95,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
            lineNumber: 77,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 76,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next13.Trans, {
                i18nKey: "auth:repeatPassword"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 104,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                "data-cy": "repeat-password-input",
                required: !0,
                type: "password",
                placeholder: "",
                innerRef: repeatPasswordControl.ref,
                onBlur: repeatPasswordControl.onBlur,
                onChange: repeatPasswordControl.onChange,
                name: repeatPasswordControl.name
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next13.Trans, {
                  i18nKey: "auth:repeatPasswordHint"
                }, void 0, !1, {
                  fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                  lineNumber: 118,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 117,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                "data-cy": "repeat-password-error",
                error: (_c = errors.repeatPassword) == null ? void 0 : _c.message
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 121,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
            lineNumber: 103,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            "data-cy": "auth-submit-button",
            className: "w-full",
            color: "primary",
            type: "submit",
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: loading,
              fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next13.Trans, {
                i18nKey: "auth:getStarted"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 139,
                columnNumber: 25
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next13.Trans, {
                i18nKey: "auth:signingUp"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
                lineNumber: 141,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
              lineNumber: 137,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
            lineNumber: 129,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
          lineNumber: 128,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/auth/EmailPasswordSignUpForm.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}, EmailPasswordSignUpForm_default = EmailPasswordSignUpForm;

// app/components/auth/EmailPasswordSignUpContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), EmailPasswordSignUpContainer = ({ onSignUp, onError }) => {
  let [signUp, state] = useSignUpWithEmailAndPassword(), redirecting = (0, import_react50.useRef)(!1), loading = state.loading || redirecting.current, callOnErrorCallback = (0, import_react50.useCallback)(() => {
    state.error && onError && onError(state.error);
  }, [state.error, onError]), createSession = (0, import_react50.useCallback)(
    async (user) => {
      let idToken = await user.getIdToken();
      redirecting.current = !0, onSignUp(idToken);
    },
    [onSignUp]
  );
  (0, import_react50.useEffect)(() => {
    callOnErrorCallback();
  }, [callOnErrorCallback]);
  let onSubmit = (0, import_react50.useCallback)(
    async (params) => {
      if (loading)
        return;
      let credential = await signUp(params.email, params.password);
      credential && await createSession(credential.user);
    },
    [loading, signUp, createSession]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: state.error,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
          error: getFirebaseErrorCode(error)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
          lineNumber: 64,
          columnNumber: 21
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignUpForm_default, {
        onSubmit,
        loading
      }, void 0, !1, {
        fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/EmailPasswordSignUpContainer.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}, EmailPasswordSignUpContainer_default = EmailPasswordSignUpContainer;

// app/components/auth/EmailPasswordSignInContainer.tsx
var import_react52 = require("react"), import_auth7 = require("firebase/auth"), import_reactfire10 = require("reactfire");
init_use_request_state();

// app/components/auth/EmailPasswordSignInForm.tsx
var import_react51 = require("@remix-run/react"), import_react_i18next14 = require("react-i18next"), import_react_hook_form2 = require("react-hook-form");
init_Button();
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), EmailPasswordSignInForm = ({ onSubmit, loading }) => {
  let { register, handleSubmit } = (0, import_react_hook_form2.useForm)({
    defaultValues: {
      email: "",
      password: ""
    }
  }), emailControl = register("email", { required: !0 }), passwordControl = register("password", { required: !0 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "w-full",
    onSubmit: handleSubmit(onSubmit),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next14.Trans, {
                i18nKey: "common:emailAddress"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 28,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                "data-cy": "email-input",
                required: !0,
                type: "email",
                placeholder: "your@email.com",
                innerRef: emailControl.ref,
                onBlur: emailControl.onBlur,
                onChange: emailControl.onChange,
                name: emailControl.name
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 30,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next14.Trans, {
                i18nKey: "common:password"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 45,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                required: !0,
                "data-cy": "password-input",
                type: "password",
                placeholder: "",
                innerRef: passwordControl.ref,
                onBlur: passwordControl.onBlur,
                onChange: passwordControl.onChange,
                name: passwordControl.name
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "py-0.5 text-xs",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react51.Link, {
                  to: "/auth/password-reset",
                  className: "hover:underline",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next14.Trans, {
                    i18nKey: "auth:passwordForgottenQuestion"
                  }, void 0, !1, {
                    fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                  lineNumber: 59,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 58,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            className: "w-full",
            color: "primary",
            "data-cy": "auth-submit-button",
            type: "submit",
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: loading,
              fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next14.Trans, {
                i18nKey: "auth:signIn"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 77,
                columnNumber: 25
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next14.Trans, {
                i18nKey: "auth:signingIn"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
                lineNumber: 79,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/auth/EmailPasswordSignInForm.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}, EmailPasswordSignInForm_default = EmailPasswordSignInForm;

// app/components/auth/EmailPasswordSignInContainer.tsx
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), EmailPasswordSignInContainer = ({ onSignIn }) => {
  let auth = (0, import_reactfire10.useAuth)(), requestState = useRequestState(), [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react52.useState)(), isLoading = requestState.state.loading, signInWithCredentials = (0, import_react52.useCallback)(
    async (params) => {
      if (!isLoading) {
        requestState.setLoading(!0);
        try {
          let credential = await getCredential2(auth, params);
          if (credential) {
            let idToken = await credential.user.getIdToken();
            onSignIn(idToken);
          }
        } catch (error) {
          isMultiFactorError(error) ? setMultiFactorAuthError(error) : requestState.setError(error);
        }
      }
    },
    [isLoading, auth, onSignIn, requestState]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: requestState.state.error,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
          error: getFirebaseErrorCode(requestState.state.error)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInForm_default, {
        onSubmit: signInWithCredentials,
        loading: isLoading
      }, void 0, !1, {
        fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: !0,
          setIsOpen: (isOpen) => {
            setMultiFactorAuthError(void 0), isOpen || requestState.resetState();
          },
          onSuccess: async (credential) => {
            let idToken = await credential.user.getIdToken();
            onSignIn(idToken);
          }
        }, void 0, !1, {
          fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/EmailPasswordSignInContainer.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
};
async function getCredential2(auth, params) {
  let { email, password } = params, user = auth.currentUser;
  if (user) {
    let credential = import_auth7.EmailAuthProvider.credential(email, password);
    return (0, import_auth7.reauthenticateWithCredential)(user, credential);
  }
  return (0, import_auth7.signInWithEmailAndPassword)(auth, email, password);
}
var EmailPasswordSignInContainer_default = EmailPasswordSignInContainer;

// app/components/auth/PhoneNumberSignInContainer.tsx
var import_react54 = require("react");

// app/components/auth/PhoneNumberCredentialForm.tsx
var import_react53 = require("react"), import_reactfire11 = require("reactfire"), import_react_hot_toast = __toESM(require("react-hot-toast")), import_react_i18next15 = require("react-i18next");
init_use_request_state();
init_If();
init_Button();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), RECAPTCHA_ACTION_BUTTON_ID = "phone-recaptcha-button", PhoneNumberCredentialForm = ({ action: action13, onSuccess }) => {
  let { t: t2 } = (0, import_react_i18next15.useTranslation)(), verifyPhoneNumberState = useRequestState(), verifyVerificationCodeState = useRequestState(), getPhoneNumberSignInMethod = useGetPhoneNumberSignInMethod(action13), onLinkPhoneNumberSubmit = (0, import_react53.useCallback)(
    async (event) => {
      event.preventDefault(), verifyPhoneNumberState.setLoading(!0);
      let phoneNumber = new FormData(event.currentTarget).get("phoneNumber"), promise = getPhoneNumberSignInMethod(phoneNumber).then((confirmationResult) => {
        verifyPhoneNumberState.setData(confirmationResult);
      }).catch((error) => {
        throw verifyPhoneNumberState.setError(error), getFirebaseErrorCode(error);
      });
      await import_react_hot_toast.default.promise(promise, {
        loading: t2("profile:verifyPhoneNumberLoading"),
        success: t2("profile:verifyPhoneNumberSuccess"),
        error: t2("profile:verifyPhoneNumberError")
      });
    },
    [verifyPhoneNumberState, getPhoneNumberSignInMethod, t2]
  ), onVerificationCodeSubmit = (0, import_react53.useCallback)(
    async (event) => {
      event.preventDefault();
      let verificationCode = new FormData(event.currentTarget).get("verificationCode"), confirmationResult = verifyPhoneNumberState.state.data;
      if (!confirmationResult)
        return;
      verifyVerificationCodeState.setLoading(!0);
      let promise = confirmationResult.confirm(verificationCode).then(onSuccess).catch((error) => {
        throw verifyVerificationCodeState.setError(error), getFirebaseErrorCode(error);
      });
      await import_react_hot_toast.default.promise(promise, {
        loading: t2("profile:verificationCodeLoading"),
        success: t2("profile:verificationCodeSuccess"),
        error: t2("profile:verificationCodeError")
      });
    },
    [
      verifyPhoneNumberState.state.data,
      verifyVerificationCodeState,
      t2,
      onSuccess
    ]
  ), shouldDisplayPhoneNumberForm = verifyPhoneNumberState.state.data === void 0, shouldDisplayVerificationCodeForm = !shouldDisplayPhoneNumberForm;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: shouldDisplayPhoneNumberForm,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          className: "w-full",
          onSubmit: onLinkPhoneNumberSubmit,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next15.Trans, {
                    i18nKey: "profile:phoneNumberLabel"
                  }, void 0, !1, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 121,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    required: !0,
                    pattern: "^\\+?[1-9]\\d{1,14}$",
                    name: "phoneNumber",
                    type: "tel",
                    placeholder: "Ex. +919367788755",
                    disabled: verifyPhoneNumberState.state.loading
                  }, void 0, !1, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 123,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 120,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: verifyPhoneNumberState.state.error,
                children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                  error: getFirebaseErrorCode(error)
                }, void 0, !1, {
                  fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                  lineNumber: 135,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                size: "large",
                id: RECAPTCHA_ACTION_BUTTON_ID,
                block: !0,
                type: "submit",
                loading: verifyPhoneNumberState.state.loading,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: action13 === "link",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next15.Trans, {
                      i18nKey: "profile:verifyPhoneNumberSubmitLabel"
                    }, void 0, !1, {
                      fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                      lineNumber: 147,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 146,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: action13 === "signIn",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next15.Trans, {
                      i18nKey: "auth:signInWithPhoneNumber"
                    }, void 0, !1, {
                      fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                      lineNumber: 151,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 150,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 139,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
            lineNumber: 119,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
        lineNumber: 117,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: shouldDisplayVerificationCodeForm,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          className: "w-full",
          onSubmit: onVerificationCodeSubmit,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next15.Trans, {
                    i18nKey: "profile:verificationCode"
                  }, void 0, !1, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 162,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    required: !0,
                    autoComplete: "off",
                    name: "verificationCode"
                  }, void 0, !1, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 164,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next15.Trans, {
                      i18nKey: "profile:verifyActivationCodeDescription"
                    }, void 0, !1, {
                      fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                      lineNumber: 171,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                    lineNumber: 170,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 161,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: verifyVerificationCodeState.state.error,
                children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                  error: getFirebaseErrorCode(error)
                }, void 0, !1, {
                  fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                  lineNumber: 177,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 175,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                size: "large",
                block: !0,
                loading: verifyVerificationCodeState.state.loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next15.Trans, {
                  i18nKey: "profile:verifyActivationCodeSubmitLabel"
                }, void 0, !1, {
                  fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                  lineNumber: 186,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
                lineNumber: 181,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
          lineNumber: 159,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
        lineNumber: 158,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/PhoneNumberCredentialForm.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
};
function useGetPhoneNumberSignInMethod(action13) {
  let auth = (0, import_reactfire11.useAuth)(), getRecaptchaVerifier = use_recaptcha_verifier_default(RECAPTCHA_ACTION_BUTTON_ID);
  return (0, import_react53.useCallback)(
    async (phoneNumber) => {
      let verifier = await getRecaptchaVerifier();
      if (action13 === "link") {
        let { linkWithPhoneNumber } = await import("firebase/auth"), user = auth.currentUser;
        return user ? linkWithPhoneNumber(user, phoneNumber, verifier) : Promise.reject("User is not logged in");
      }
      if (action13 === "signIn") {
        let { signInWithPhoneNumber } = await import("firebase/auth");
        return signInWithPhoneNumber(auth, phoneNumber, verifier);
      }
      return Promise.reject(`Invalid action "${action13}"`);
    },
    [action13, auth, getRecaptchaVerifier]
  );
}
var PhoneNumberCredentialForm_default = PhoneNumberCredentialForm;

// app/components/auth/PhoneNumberSignInContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PhoneNumberSignInContainer = ({ onSignIn }) => {
  let onSuccess = (0, import_react54.useCallback)(
    async (credential) => {
      let idToken = await credential.user.getIdToken();
      onSignIn(idToken);
    },
    [onSignIn]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberCredentialForm_default, {
    action: "signIn",
    onSuccess
  }, void 0, !1, {
    fileName: "app/components/auth/PhoneNumberSignInContainer.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}, PhoneNumberSignInContainer_default = PhoneNumberSignInContainer;

// app/components/auth/EmailLinkAuth.tsx
var import_react_i18next16 = require("react-i18next"), import_react55 = require("react"), import_reactfire12 = require("reactfire"), import_auth8 = require("firebase/auth"), import_react_hot_toast2 = __toESM(require("react-hot-toast"));
init_use_request_state();
init_Button();
init_If();
init_Alert();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), EmailLinkAuth = () => {
  let auth = (0, import_reactfire12.useAuth)(), { t: t2 } = (0, import_react_i18next16.useTranslation)(), { state, setLoading, setData, setError } = useRequestState(), onSubmit = (0, import_react55.useCallback)(
    async (event) => {
      event.preventDefault();
      let target = event.currentTarget, email = new FormData(target).get("email"), url = getAuthUrl();
      setLoading(!0);
      let promise = (0, import_auth8.sendSignInLinkToEmail)(auth, email, {
        url,
        handleCodeInApp: !0
      }).then(() => {
        storeEmailInStorage(email), setData();
      }).catch((error) => {
        throw setError(error), getFirebaseErrorCode(error);
      });
      await import_react_hot_toast2.default.promise(promise, {
        loading: t2("auth:sendingEmailLink"),
        success: t2("auth:sendLinkSuccessToast"),
        error: t2("auth:errors.link")
      });
    },
    [auth, t2, setData, setError, setLoading]
  );
  return state.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "success",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next16.Trans, {
      i18nKey: "auth:sendLinkSuccess"
    }, void 0, !1, {
      fileName: "app/components/auth/EmailLinkAuth.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/auth/EmailLinkAuth.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "w-full",
    onSubmit,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next16.Trans, {
                  i18nKey: "common:emailAddress"
                }, void 0, !1, {
                  fileName: "app/components/auth/EmailLinkAuth.tsx",
                  lineNumber: 73,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  "data-cy": "email-input",
                  required: !0,
                  type: "email",
                  placeholder: "your@email.com",
                  name: "email"
                }, void 0, !1, {
                  fileName: "app/components/auth/EmailLinkAuth.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/auth/EmailLinkAuth.tsx",
              lineNumber: 72,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/auth/EmailLinkAuth.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            size: "large",
            loading: state.loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: state.loading,
              fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next16.Trans, {
                i18nKey: "auth:sendEmailLink"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailLinkAuth.tsx",
                lineNumber: 88,
                columnNumber: 23
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next16.Trans, {
                i18nKey: "auth:sendingEmailLink"
              }, void 0, !1, {
                fileName: "app/components/auth/EmailLinkAuth.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/auth/EmailLinkAuth.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/auth/EmailLinkAuth.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/auth/EmailLinkAuth.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: state.error,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "error",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next16.Trans, {
            i18nKey: "auth:errors.link"
          }, void 0, !1, {
            fileName: "app/components/auth/EmailLinkAuth.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/EmailLinkAuth.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/EmailLinkAuth.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/EmailLinkAuth.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
};
function getAuthUrl() {
  let origin = window.location.origin, path = configuration_default.paths.emailLinkSignIn;
  return [origin, path].join("");
}
function storeEmailInStorage(email) {
  window.localStorage.setItem("emailForSignIn", email);
}
var EmailLinkAuth_default = EmailLinkAuth;

// app/routes/invite/$code.tsx
init_use_get_csrf_token();

// app/core/firebase/admin/initialize-firebase-admin-app.ts
var import_tiny_invariant = __toESM(require("tiny-invariant"));
async function initializeFirebaseAdminApp() {
  if (configuration_default.emulator) {
    let { createEmulatorAdminApp: createEmulatorAdminApp2 } = await Promise.resolve().then(() => (init_create_emulator_admin_app(), create_emulator_admin_app_exports));
    return createEmulatorAdminApp2();
  }
  let clientEmail = process.env.FIREBASE_CLIENT_EMAIL, privateKey = process.env.FIREBASE_PRIVATE_KEY, projectId = firebase_config_default.projectId, storageBucket = firebase_config_default.storageBucket;
  (0, import_tiny_invariant.default)(clientEmail, "Firebase Client email not provided"), (0, import_tiny_invariant.default)(privateKey, "Firebase Private key not provided"), (0, import_tiny_invariant.default)(projectId, "GCloud Project ID not provided"), (0, import_tiny_invariant.default)(storageBucket, "Firebase Storage bucket not provided");
  let { createFirebaseAdminApp: createFirebaseAdminApp2 } = await Promise.resolve().then(() => (init_create_admin_app(), create_admin_app_exports));
  return createFirebaseAdminApp2({
    projectId,
    storageBucket,
    clientEmail,
    privateKey
  });
}

// app/core/middleware/with-firebase-admin.ts
function withFirebaseAdmin() {
  return initializeFirebaseAdminApp();
}
var with_firebase_admin_default = withFirebaseAdmin;

// app/components/auth/AuthCatchBoundary.tsx
var import_react57 = require("@remix-run/react"), import_react_i18next17 = require("react-i18next");
init_Button();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AuthCatchBoundary() {
  let navigate = (0, import_react57.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
        error: "generic"
      }, void 0, !1, {
        fileName: "app/components/auth/AuthCatchBoundary.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        onClick: () => navigate("."),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next17.Trans, {
          i18nKey: "common:retry",
          default: "Retry"
        }, void 0, !1, {
          fileName: "app/components/auth/AuthCatchBoundary.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/AuthCatchBoundary.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/AuthCatchBoundary.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var AuthCatchBoundary_default = AuthCatchBoundary;

// app/routes/invite/$code.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var CatchBoundary3 = AuthCatchBoundary_default, meta4 = ({ data }) => ({
  title: "Join Organization",
  "csrf-token": data == null ? void 0 : data.csrfToken
}), InvitePage = () => {
  let data = (0, import_react59.useLoaderData)(), [user, setUser] = (0, import_react58.useState)(data.user), signInCheck = (0, import_reactfire13.useSigninCheck)(), transition = (0, import_react59.useTransition)(), invite = data.invite, organization = invite.organization;
  return (0, import_react58.useEffect)(() => {
    signInCheck.status === "success" && !signInCheck.data.signedIn && setUser(void 0);
  }, [signInCheck]), transition.state === "submitting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
      i18nKey: "auth:addingToOrganization",
      values: { name: organization.name },
      components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, !1, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 102,
        columnNumber: 28
      }, this) }
    }, void 0, !1, {
      fileName: "app/routes/invite/$code.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/invite/$code.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
        type: 4,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
          i18nKey: "auth:joinOrganizationHeading",
          values: {
            organization: invite.organization.name
          }
        }, void 0, !1, {
          fileName: "app/routes/invite/$code.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
              i18nKey: "auth:joinOrganizationSubHeading",
              values: {
                organization: invite.organization.name
              },
              components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, !1, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 126,
                columnNumber: 30
              }, this) }
            }, void 0, !1, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 121,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: !user,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
                i18nKey: "auth:signUpToAcceptInvite"
              }, void 0, !1, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 132,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 131,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 130,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AcceptInviteContainer, {
        inviteCode: invite.code,
        user
      }, void 0, !1, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 137,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/invite/$code.tsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
};
function AcceptInviteContainer({
  inviteCode,
  user
}) {
  let auth = (0, import_reactfire13.useAuth)(), submit = (0, import_react59.useSubmit)(), getCsrfToken = useGetCsrfToken(), transition = (0, import_react59.useTransition)(), redirectOnSignOut = getRedirectPath(), [mode, setMode] = (0, import_react58.useState)(0 /* SignUp */), onInviteAccepted = (0, import_react58.useCallback)(
    (idToken) => {
      let csrfToken = getCsrfToken() ?? "";
      return submit({
        code: inviteCode,
        idToken,
        csrfToken
      }, {
        method: "post"
      });
    },
    [getCsrfToken, inviteCode, submit]
  );
  return transition.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, !1, {
    fileName: "app/routes/invite/$code.tsx",
    lineNumber: 174,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: user,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GuardedPage, {
          whenSignedOut: redirectOnSignOut,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            onSubmit: (e) => (e.preventDefault(), onInviteAccepted("")),
            className: "flex flex-col space-y-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-center text-sm",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
                  i18nKey: "auth:clickToAcceptAs",
                  values: { email: user == null ? void 0 : user.email },
                  components: { b: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {}, void 0, !1, {
                    fileName: "app/routes/invite/$code.tsx",
                    lineNumber: 193,
                    columnNumber: 34
                  }, this) }
                }, void 0, !1, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 190,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 189,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                "data-cy": "accept-invite-submit-button",
                type: "submit",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
                  i18nKey: "auth:acceptInvite"
                }, void 0, !1, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 198,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 197,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-center",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-center text-sm text-gray-700 dark:text-gray-300",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
                          i18nKey: "auth:acceptInviteWithDifferentAccount"
                        }, void 0, !1, {
                          fileName: "app/routes/invite/$code.tsx",
                          lineNumber: 209,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 204,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 203,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      block: !0,
                      color: "transparent",
                      size: "small",
                      onClick: () => auth.signOut(),
                      type: "button",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
                        i18nKey: "auth:signOut"
                      }, void 0, !1, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 220,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 213,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 202,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 201,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 182,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/invite/$code.tsx",
          lineNumber: 181,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 180,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: !user,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
            onSignIn: onInviteAccepted
          }, void 0, !1, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 230,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: configuration_default.auth.providers.emailPassword,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: mode === 0 /* SignUp */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex w-full flex-col items-center space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignUpContainer_default, {
                      onSignUp: onInviteAccepted
                    }, void 0, !1, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 235,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      block: !0,
                      color: "transparent",
                      size: "small",
                      onClick: () => setMode(1 /* SignIn */),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
                        i18nKey: "auth:alreadyHaveAccountStatement"
                      }, void 0, !1, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 243,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 237,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 234,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 233,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: mode === 1 /* SignIn */,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex w-full flex-col items-center space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInContainer_default, {
                      onSignIn: onInviteAccepted
                    }, void 0, !1, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 250,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      block: !0,
                      color: "transparent",
                      size: "small",
                      onClick: () => setMode(0 /* SignUp */),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next18.Trans, {
                        i18nKey: "auth:doNotHaveAccountStatement"
                      }, void 0, !1, {
                        fileName: "app/routes/invite/$code.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/invite/$code.tsx",
                      lineNumber: 252,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/invite/$code.tsx",
                  lineNumber: 249,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/invite/$code.tsx",
                lineNumber: 248,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 232,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: configuration_default.auth.providers.phoneNumber,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberSignInContainer_default, {
              onSignIn: onInviteAccepted
            }, void 0, !1, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 265,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 264,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: configuration_default.auth.providers.emailLink,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailLinkAuth_default, {}, void 0, !1, {
              fileName: "app/routes/invite/$code.tsx",
              lineNumber: 269,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/invite/$code.tsx",
            lineNumber: 268,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/invite/$code.tsx",
        lineNumber: 229,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/invite/$code.tsx",
    lineNumber: 178,
    columnNumber: 5
  }, this);
}
var code_default = InvitePage;
async function loader3(args) {
  await with_firebase_admin_default();
  let code = args.params.code, logger2 = logger_default();
  if (!code)
    return throwNotFoundException();
  let inviteRef = await getInviteByCode(code).catch(() => {
  }), invite = inviteRef == null ? void 0 : inviteRef.data();
  if (!invite)
    return logger2.warn(
      {
        code
      },
      "User navigated to invite page, but it wasn't found. Redirecting to home page..."
    ), throwNotFoundException();
  try {
    let sessionId = await parseSessionIdCookie(args.request), user = await getLoggedInUser(sessionId).catch(() => {
    }), userId = user == null ? void 0 : user.uid, userData = userId ? await getUserInfoById(userId) : void 0, organizationId = invite.organization.id;
    if (userId && await getUserRoleByOrganization({
      organizationId,
      userId
    }) !== void 0)
      return throwForbiddenException();
    let { token: csrfToken, secret } = await create_csrf_token_default();
    return (0, import_node7.json)(
      {
        user: userData,
        invite,
        csrfToken
      },
      {
        headers: {
          "Set-Cookie": await serializeCsrfSecretCookie(secret)
        }
      }
    );
  } catch (e) {
    return logger2.debug(e), logger2.error(
      "Error encountered while fetching invite. Redirecting to home page..."
    ), redirectToHomePage();
  }
}
async function action5(args) {
  let req = args.request, formData = await req.formData(), fields = Object.fromEntries(formData.entries()), result = await getBodySchema4().safeParseAsync(fields);
  if (!result.success)
    return throwBadRequestException();
  await with_csrf_default(req, result.data.csrfToken);
  let logger2 = logger_default(), headers = new Headers(), { code, idToken } = result.data, userId;
  if (idToken) {
    let serializedSessionId = await create_server_side_session_default(idToken), sessionId = await (await getSessionIdCookie()).parse(serializedSessionId), user = await getLoggedInUser(sessionId);
    userId = user == null ? void 0 : user.uid, headers.append("Set-Cookie", serializedSessionId);
  } else
    userId = await getUserIdFromSession(req);
  logger2.info(
    {
      code,
      userId
    },
    "Adding member to organization..."
  );
  let organizationId = (await acceptInviteToOrganization({ code, userId })).organization.id;
  return logger2.info(
    {
      code,
      organizationId,
      userId
    },
    "Member successfully added to organization"
  ), headers.append(
    "Set-Cookie",
    await serializeOrganizationIdCookie(organizationId)
  ), (0, import_node7.redirect)(configuration_default.paths.appHome, {
    headers
  });
}
function redirectToHomePage() {
  return (0, import_node7.redirect)("/");
}
function getRedirectPath() {
  return is_browser_default() ? window.location.pathname : void 0;
}
function getBodySchema4() {
  return import_zod4.z.object({
    code: import_zod4.z.string().min(1),
    idToken: import_zod4.z.string(),
    csrfToken: import_zod4.z.string().min(1)
  });
}
async function getUserIdFromSession(request) {
  let sessionId = await parseSessionIdCookie(request);
  return (await getLoggedInUser(sessionId)).uid;
}

// app/routes/__app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => app_default,
  loader: () => loader4,
  meta: () => meta5
});
var import_react67 = require("react"), import_react68 = require("@remix-run/react");

// app/lib/server/loaders/load-app-data.ts
var import_node8 = require("@remix-run/node");
init_queries();

// app/lib/server/cookies/sidebar-state.cookie.ts
var SIDEBAR_STATE_COOKIE_NAME = "sidebarState";
async function parseSidebarStateCookie(request) {
  return (await getSidebarCookie()).parse(get_cookie_header_default(request));
}
async function getSidebarCookie() {
  let { createCookie } = await import("@remix-run/node");
  return createCookie(SIDEBAR_STATE_COOKIE_NAME, {
    path: "/",
    httpOnly: !1,
    secure: process.env.EMULATOR !== "true",
    sameSite: "strict"
  });
}

// app/lib/server/loaders/utils/get-ui-state-cookies.ts
async function getUIStateCookies(request) {
  let [theme, sidebarState] = await Promise.all([
    parseThemeCookie(request),
    parseSidebarStateCookie(request)
  ]);
  return {
    theme,
    sidebarState
  };
}
var get_ui_state_cookies_default = getUIStateCookies;

// app/lib/server/loaders/load-app-data.ts
var loadAppData = async ({ request }) => {
  var _a;
  try {
    await initializeFirebaseAdminApp();
    let session = await parseSessionIdCookie(request), metadata = await getUserAuthMetadata(session);
    if (!metadata)
      return redirectToLogin(request.url);
    if (!Boolean((_a = metadata == null ? void 0 : metadata.customClaims) == null ? void 0 : _a.onboarded))
      return redirectToOnboarding();
    let user = await getUserData(metadata.uid), currentOrganizationId = await parseOrganizationIdCookie(request);
    if (!user)
      return redirectToOnboarding();
    let organization = await getCurrentOrganization(
      user.id,
      currentOrganizationId
    ), headers = new Headers();
    if (organization) {
      let organizationIdCookie = await serializeOrganizationIdCookie(
        organization.id
      );
      headers.append("Set-Cookie", organizationIdCookie);
    }
    let { token: csrfToken, secret } = await create_csrf_token_default();
    headers.append("Set-Cookie", await serializeCsrfSecretCookie(secret));
    let ui = await get_ui_state_cookies_default(request);
    return (0, import_node8.json)(
      {
        csrfToken,
        organization,
        session: metadata,
        user,
        ui
      },
      {
        headers
      }
    );
  } catch {
    return redirectToLogin(request.url);
  }
};
async function getUserAuthMetadata(session) {
  let user = await getLoggedInUser(session);
  return getUserInfoById(user.uid);
}
function redirectToOnboarding() {
  return (0, import_node8.redirect)(configuration_default.paths.onboarding);
}
function redirectToLogin(returnUrl, redirectPath = configuration_default.paths.signIn) {
  let destination = `${redirectPath}?returnUrl=${returnUrl}&signOut=true`;
  return (0, import_node8.redirect)(destination, {
    status: http_status_code_enum_default.SeeOther
  });
}
var load_app_data_default = loadAppData;

// app/routes/__app.tsx
init_organization();
init_user_session();

// app/components/RouteShell.tsx
var import_react66 = require("react"), import_react_hot_toast3 = require("react-hot-toast");

// app/core/firebase/components/FirebaseFirestoreProvider.tsx
var import_reactfire14 = require("reactfire"), import_firestore5 = require("firebase/firestore");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FirebaseFirestoreProvider({
  children,
  useEmulator
}) {
  let app = (0, import_reactfire14.useFirebaseApp)(), firestore = (0, import_firestore5.initializeFirestore)(app, getFirestoreConfig());
  if (configuration_default.emulator ?? useEmulator) {
    let host = getFirestoreHost(), port = Number(getFirestorePort());
    try {
      executeSafely(() => {
        didFirestoreInitialize(firestore) || (0, import_firestore5.connectFirestoreEmulator)(firestore, host, port);
      });
    } catch {
    }
  }
  return is_browser_default() && !didFirestoreInitialize(firestore) && !isTestEnv2() && executeSafely(() => (0, import_firestore5.enableIndexedDbPersistence)(firestore)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactfire14.FirestoreProvider, {
    sdk: firestore,
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseFirestoreProvider.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
function executeSafely(callback) {
  try {
    callback();
  } catch {
  }
}
function getFirestoreHost() {
  return get_env_default().FIREBASE_EMULATOR_HOST ?? "localhost";
}
function getFirestorePort() {
  return get_env_default().FIRESTORE_EMULATOR_PORT ?? 8080;
}
function didFirestoreInitialize(firestore) {
  if ("_settingsFrozen" in firestore)
    return firestore._settingsFrozen;
}
function isTestEnv2() {
  return is_browser_default() && "Cypress" in window;
}
function getFirestoreConfig() {
  return isTestEnv2() ? {
    ssl: !1,
    host: "",
    experimentalForceLongPolling: !0
  } : {};
}

// app/lib/contexts/sidebar.ts
var import_react61 = require("react"), SidebarContext = (0, import_react61.createContext)({
  collapsed: !1,
  setCollapsed: (_) => _
}), sidebar_default = SidebarContext;

// app/core/hooks/use-sidebar-state.ts
var import_react62 = require("react");
var SIDEBAR_COLLAPSED_STORAGE_KEY = "sidebarState";
function useCollapsible(initialValue) {
  let [isCollapsed, setIsCollapsed] = (0, import_react62.useState)(initialValue), onCollapseChange = (0, import_react62.useCallback)((collapsed) => {
    setIsCollapsed(collapsed), storeCollapsibleState(collapsed);
  }, []);
  return [isCollapsed, onCollapseChange];
}
function storeCollapsibleState(collapsed) {
  setCookie(
    SIDEBAR_COLLAPSED_STORAGE_KEY,
    collapsed ? "collapsed" : "expanded"
  );
}
var use_sidebar_state_default = useCollapsible;

// app/components/AppSidebar.tsx
var import_react65 = require("react"), import_react_i18next20 = require("react-i18next"), import_classnames10 = __toESM(require("classnames")), import_outline9 = require("@heroicons/react/24/outline");

// app/core/ui/Logo/LogoMini.tsx
var import_react63 = require("@remix-run/react");

// app/core/ui/Logo/LogoImageMini.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LogoImageMini = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 334 250",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M288.338 250V93.5C288.338 79.8333 283.505 68.3333 273.838 59C264.505 49.6667 253.005 45 239.338 45C226.005 45 214.338 49.6667 204.338 59C194.671 68 189.838 79.3333 189.838 93V250H144.338V93C144.338 79 139.671 67.6667 130.338 59C120.338 49.6667 108.505 45 94.8379 45C81.5046 45 70.1712 49.6667 60.8379 59C50.8379 69 45.8379 80.8333 45.8379 94.5V250H0.837891V5.99998H45.8379V24.5C51.5046 17.5 58.8379 11.6667 67.8379 6.99998C77.1712 2.33333 86.1712 0 94.8379 0C109.505 0 122.838 3 134.838 8.99999C147.171 14.6667 157.838 22.6667 166.838 33C175.838 22.6667 186.505 14.6667 198.838 8.99999C211.171 3 224.671 0 239.338 0C252.338 0 264.505 2.33333 275.838 6.99998C287.171 11.6667 297.171 18.3333 305.838 27C314.505 35.6667 321.171 45.8333 325.838 57.5C330.838 68.8333 333.338 80.8333 333.338 93.5V250H288.338Z",
      fill: "url(#paint0_linear_1667_17)"
    }, void 0, !1, {
      fileName: "app/core/ui/Logo/LogoImageMini.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
        id: "paint0_linear_1667_17",
        x1: "-73.1035",
        y1: "106.673",
        x2: "403.784",
        y2: "104.812",
        gradientUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "0.0104167",
            stopColor: "#2563EB"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImageMini.tsx",
            lineNumber: 23,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "0.135417",
            stopColor: "#7657A8"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImageMini.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "0.489583",
            stopColor: "#EF4444"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImageMini.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "0.802083",
            stopColor: "#F79B3F"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImageMini.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
            offset: "1",
            stopColor: "#FFEB3B"
          }, void 0, !1, {
            fileName: "app/core/ui/Logo/LogoImageMini.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/core/ui/Logo/LogoImageMini.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/core/ui/Logo/LogoImageMini.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/core/ui/Logo/LogoImageMini.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), LogoImageMini_default = LogoImageMini;

// app/core/ui/Logo/LogoMini.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LogoMini = ({ href }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react63.Link, {
  to: href ?? "/",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImageMini_default, {}, void 0, !1, {
    fileName: "app/core/ui/Logo/LogoMini.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/core/ui/Logo/LogoMini.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), LogoMini_default = LogoMini;

// app/components/AppSidebar.tsx
init_IconButton();

// app/components/AppSidebarNavigation.tsx
var import_react64 = require("@remix-run/react"), import_react_i18next19 = require("react-i18next"), import_classnames9 = __toESM(require("classnames"));

// app/navigation.config.tsx
var import_outline8 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), NAVIGATION_CONFIG = {
  items: [
    {
      label: "common:dashboardTabLabel",
      path: configuration_default.paths.appHome,
      Icon: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline8.Squares2X2Icon, {
        className
      }, void 0, !1, {
        fileName: "app/navigation.config.tsx",
        lineNumber: 10,
        columnNumber: 16
      }, this)
    },
    {
      label: "common:settingsTabLabel",
      path: "/settings",
      Icon: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline8.Cog8ToothIcon, {
        className
      }, void 0, !1, {
        fileName: "app/navigation.config.tsx",
        lineNumber: 17,
        columnNumber: 16
      }, this)
    },
    {
      label: "common:tasksTabLabel",
      path: "/tasks",
      Icon: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline8.ClipboardDocumentIcon, {
        className
      }, void 0, !1, {
        fileName: "app/navigation.config.tsx",
        lineNumber: 24,
        columnNumber: 16
      }, this)
    },
    {
      label: "common:photosTabLabel",
      path: "/photos",
      Icon: ({ className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline8.PhotoIcon, {
        className
      }, void 0, !1, {
        fileName: "app/navigation.config.tsx",
        lineNumber: 31,
        columnNumber: 16
      }, this)
    }
  ]
}, navigation_config_default = NAVIGATION_CONFIG;

// app/components/AppSidebarNavigation.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AppSidebarNavigation({
  collapsed
}) {
  let iconClassName = (0, import_classnames9.default)("AppSidebarItemIcon", {
    "h-6": !collapsed,
    "h-7": collapsed
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-1.5",
    children: navigation_config_default.items.map((item) => {
      let Label2 = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next19.Trans, {
        i18nKey: item.label,
        defaults: item.label
      }, void 0, !1, {
        fileName: "app/components/AppSidebarNavigation.tsx",
        lineNumber: 21,
        columnNumber: 23
      }, this);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarItem, {
        href: item.path,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
            placement: "right",
            content: collapsed ? Label2 : null,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.Icon, {
              className: iconClassName
            }, void 0, !1, {
              fileName: "app/components/AppSidebarNavigation.tsx",
              lineNumber: 26,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/AppSidebarNavigation.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: Label2
          }, void 0, !1, {
            fileName: "app/components/AppSidebarNavigation.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        ]
      }, item.path, !0, {
        fileName: "app/components/AppSidebarNavigation.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this);
    })
  }, void 0, !1, {
    fileName: "app/components/AppSidebarNavigation.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function AppSidebarItem({
  children,
  href
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react64.NavLink, {
    to: href,
    className: ({ isActive }) => (0, import_classnames9.default)("AppSidebarItem", {
      AppSidebarItemActive: isActive,
      AppSidebarItemNotActive: !isActive
    }),
    children
  }, void 0, !1, {
    fileName: "app/components/AppSidebarNavigation.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
var AppSidebarNavigation_default = AppSidebarNavigation;

// app/components/AppSidebar.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AppSidebar = () => {
  let { collapsed, setCollapsed } = (0, import_react65.useContext)(sidebar_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames10.default)("AppSidebar", {
      "AppSidebarCollapsed w-[5rem]": collapsed,
      ["w-2/12 max-w-xs sm:min-w-[12rem] lg:min-w-[16rem]"]: !collapsed
    }),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex w-full flex-col space-y-7 px-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarHeader, {
            collapsed
          }, void 0, !1, {
            fileName: "app/components/AppSidebar.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarNavigation_default, {
            collapsed
          }, void 0, !1, {
            fileName: "app/components/AppSidebar.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebarFooterMenu, {
        collapsed,
        setCollapsed
      }, void 0, !1, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
};
function AppSidebarHeader({
  collapsed
}) {
  let logoHref = configuration_default.paths.appHome;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex justify-center px-2.5 py-1",
    children: collapsed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMini_default, {
      href: logoHref
    }, void 0, !1, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 47,
      columnNumber: 20
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {
      href: logoHref
    }, void 0, !1, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 47,
      columnNumber: 51
    }, this)
  }, void 0, !1, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function AppSidebarFooterMenu(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_classnames10.default)("absolute bottom-8 w-full", {
      "px-6": !props.collapsed,
      "flex justify-center px-2": props.collapsed
    }),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "AppSidebarFooterItem",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CollapsibleButton, {
        collapsed: props.collapsed,
        onClick: props.setCollapsed
      }, void 0, !1, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
function CollapsibleButton(props) {
  return props.collapsed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
    content: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next20.Trans, {
      i18nKey: "common:expandSidebar"
    }, void 0, !1, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 83,
      columnNumber: 25
    }, this),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
      onClick: () => props.onClick(!props.collapsed),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline9.ArrowRightCircleIcon, {
        className: "h-6"
      }, void 0, !1, {
        fileName: "app/components/AppSidebar.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    }, void 0, !1, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "AppFooterItem",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
      className: "flex items-center space-x-2 bg-transparent",
      onClick: () => props.onClick(!props.collapsed),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline9.ArrowLeftCircleIcon, {
          className: "h-6"
        }, void 0, !1, {
          fileName: "app/components/AppSidebar.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next20.Trans, {
            i18nKey: "common:collapseSidebar"
          }, void 0, !1, {
            fileName: "app/components/AppSidebar.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/AppSidebar.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/AppSidebar.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/AppSidebar.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
var AppSidebar_default = AppSidebar;

// app/components/RouteShell.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), redirectPathWhenSignedOut = "/", RouteShell = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseFirestoreProvider, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GuardedPage, {
    whenSignedOut: redirectPathWhenSignedOut,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_hot_toast3.Toaster, {}, void 0, !1, {
          fileName: "app/components/RouteShell.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouteShellWithSidebar, {
          collapsed: props.sidebarCollapsed,
          children: props.children
        }, void 0, !1, {
          fileName: "app/components/RouteShell.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/RouteShell.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/RouteShell.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/RouteShell.tsx",
  lineNumber: 18,
  columnNumber: 5
}, this), RouteShell_default = RouteShell;
function RouteShellWithSidebar(props) {
  let [collapsed, setCollapsed] = use_sidebar_state_default(props.collapsed);
  return useDisableBodyScrolling(), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex h-full flex-1 overflow-hidden",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sidebar_default.Provider, {
      value: { collapsed, setCollapsed },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "hidden lg:block",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppSidebar_default, {}, void 0, !1, {
            fileName: "app/components/RouteShell.tsx",
            lineNumber: 47,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/RouteShell.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "relative mx-auto h-screen w-full overflow-y-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: props.children
          }, void 0, !1, {
            fileName: "app/components/RouteShell.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/RouteShell.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/RouteShell.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/RouteShell.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function useDisableBodyScrolling() {
  (0, import_react66.useEffect)(() => {
    if (!!is_browser_default())
      return document.body.style.setProperty("overflow", "hidden"), () => {
        document.body.style.removeProperty("overflow");
      };
  }, []);
}

// app/routes/__app.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = load_app_data_default, meta5 = ({ data }) => ({
  "csrf-token": data.csrfToken
});
function AppRoot() {
  var _a;
  let data = (0, import_react68.useLoaderData)(), userSessionContext = (0, import_react67.useMemo)(() => ({
    auth: data.session,
    data: data.user
  }), [data]), [organization, setOrganization] = (0, import_react67.useState)(
    data.organization || void 0
  ), [userSession, setUserSession] = (0, import_react67.useState)(userSessionContext), updateCurrentOrganization = (0, import_react67.useCallback)(() => {
    setOrganization(data.organization ?? void 0);
  }, [data.organization]), updateCurrentUser = (0, import_react67.useCallback)(() => {
    userSessionContext.auth && setUserSession(userSessionContext);
  }, [userSessionContext]);
  (0, import_react67.useEffect)(updateCurrentOrganization, [updateCurrentOrganization]), (0, import_react67.useEffect)(updateCurrentUser, [updateCurrentUser]);
  let sidebarCollapsed = ((_a = data == null ? void 0 : data.ui) == null ? void 0 : _a.sidebarState) === "collapsed";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAppShell_default, {
    config: firebase_config_default,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAuthProvider, {
      useEmulator: firebase_config_default.emulator,
      userSession,
      setUserSession,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseAnalyticsProvider_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_session_default.Provider, {
          value: { userSession, setUserSession },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(organization_default.Provider, {
            value: { organization, setOrganization },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RouteShell_default, {
              sidebarCollapsed,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react68.Outlet, {}, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 71,
                columnNumber: 17
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
var app_default = AppRoot;

// app/routes/__app/dashboard/index.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  meta: () => meta6
});
var import_react_i18next24 = require("react-i18next");

// app/components/dashboard/DashboardDemo.tsx
var import_reactfire15 = require("reactfire"), import_recharts = require("recharts"), import_react70 = require("react");

// app/core/ui/Tile.tsx
var import_react69 = require("react");
init_Heading();
var import_outline10 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Tile = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "flex flex-col space-y-3 rounded-2xl border border-gray-100 bg-white p-5 dark:border-black-400 dark:bg-black-500",
  children
}, void 0, !1, {
  fileName: "app/core/ui/Tile.tsx",
  lineNumber: 20,
  columnNumber: 5
}, this);
function TileHeader(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex",
    children: props.children
  }, void 0, !1, {
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
    }, void 0, !1, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function TileBody(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-5",
    children: props.children
  }, void 0, !1, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
function TileFigure(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "text-3xl font-bold",
    children: props.children
  }, void 0, !1, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
function TileTrend(props) {
  let Icon = (0, import_react69.useMemo)(() => {
    switch (props.trend) {
      case "up":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline10.ArrowSmallUpIcon, {
          className: "h-4 text-green-500"
        }, void 0, !1, {
          fileName: "app/core/ui/Tile.tsx",
          lineNumber: 63,
          columnNumber: 16
        }, this);
      case "down":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline10.ArrowSmallDownIcon, {
          className: "h-4 text-red-500"
        }, void 0, !1, {
          fileName: "app/core/ui/Tile.tsx",
          lineNumber: 65,
          columnNumber: 16
        }, this);
      case "stale":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline10.Bars2Icon, {
          className: "h-4 text-yellow-500"
        }, void 0, !1, {
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
        }, void 0, !1, {
          fileName: "app/core/ui/Tile.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}
function TileBadge(props) {
  let className = "inline-flex items-center rounded-3xl py-1 px-2.5 text-sm font-semibold justify-center";
  return props.trend === "up" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${className} bg-green-50 text-green-600 dark:bg-green-500/10`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: props.children
    }, void 0, !1, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) : props.trend === "down" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${className} bg-red-50 text-red-600 dark:bg-red-500/10`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: props.children
    }, void 0, !1, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/core/ui/Tile.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${className} bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: props.children
    }, void 0, !1, {
      fileName: "app/core/ui/Tile.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
init_Heading();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function DashboardDemo() {
  let mrr = (0, import_react70.useMemo)(() => generateDemoData(), []), visitors = (0, import_react70.useMemo)(() => generateDemoData(), []), returningVisitors = (0, import_react70.useMemo)(() => generateDemoData(), []), churn = (0, import_react70.useMemo)(() => generateDemoData(), []), netRevenue = (0, import_react70.useMemo)(() => generateDemoData(), []), fees = (0, import_react70.useMemo)(() => generateDemoData(), []), newCustomers = (0, import_react70.useMemo)(() => generateDemoData(), []), tickets = (0, import_react70.useMemo)(() => generateDemoData(), []), activeUsers = (0, import_react70.useMemo)(() => generateDemoData(), []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6 pb-36",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserGreetings, {}, void 0, !1, {
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
              }, void 0, !1, {
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
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 34,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "20%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 35,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 33,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: mrr[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 32,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Revenue"
              }, void 0, !1, {
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
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 47,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "12%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 48,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: netRevenue[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 45,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Fees"
              }, void 0, !1, {
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
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 60,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "9%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 61,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: fees[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 58,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "New Customers"
              }, void 0, !1, {
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
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 73,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "down",
                        children: "-25%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 74,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 72,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: newCustomers[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 71,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Visitors"
              }, void 0, !1, {
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
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 86,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "down",
                        children: "-4.3%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 87,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 85,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: visitors[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 84,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Returning Visitors"
              }, void 0, !1, {
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
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 99,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "stale",
                        children: "10%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 100,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 98,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: returningVisitors[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 103,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 97,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 94,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Churn"
              }, void 0, !1, {
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
                      }, void 0, !0, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 112,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "-10%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 113,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 111,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: churn[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
                children: "Support Tickets"
              }, void 0, !1, {
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
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 125,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                        trend: "up",
                        children: "-30%"
                      }, void 0, !1, {
                        fileName: "app/components/dashboard/DashboardDemo.tsx",
                        lineNumber: 126,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 124,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                    data: tickets[0]
                  }, void 0, !1, {
                    fileName: "app/components/dashboard/DashboardDemo.tsx",
                    lineNumber: 129,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 123,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
              children: "Active Users"
            }, void 0, !1, {
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
                    }, void 0, !1, {
                      fileName: "app/components/dashboard/DashboardDemo.tsx",
                      lineNumber: 140,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Trend, {
                      trend: "up",
                      children: "10%"
                    }, void 0, !1, {
                      fileName: "app/components/dashboard/DashboardDemo.tsx",
                      lineNumber: 141,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 139,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, {
                  data: activeUsers[0]
                }, void 0, !1, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 144,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 138,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 134,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Heading, {
              children: "Customers"
            }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 151,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Body, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CustomersTable, {}, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 154,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 153,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 150,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 149,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/dashboard/DashboardDemo.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function UserGreetings() {
  var _a, _b;
  let user = (0, import_reactfire15.useUser)(), userDisplayName = ((_a = user.data) == null ? void 0 : _a.displayName) ?? ((_b = user.data) == null ? void 0 : _b.email) ?? "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
        type: 4,
        children: [
          "Welcome Back, ",
          userDisplayName
        ]
      }, void 0, !0, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 168,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "text-gray-500 dark:text-gray-400",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: "Here's what is happening in your SaaS"
        }, void 0, !1, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 171,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 170,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/dashboard/DashboardDemo.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}
function generateDemoData() {
  let today = new Date(), formatter = new Intl.DateTimeFormat("en-us", {
    month: "long",
    year: "2-digit"
  }), data = [];
  for (let n = 8; n > 0; n -= 1) {
    let date = new Date(today.getFullYear(), today.getMonth() - n, 1);
    data.push({
      name: formatter.format(date),
      value: (Math.random() * 1e3).toFixed(1)
    });
  }
  return [data, data[data.length - 1].value];
}
function Chart(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-36",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_recharts.ResponsiveContainer, {
      width: "100%",
      height: "100%",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_recharts.LineChart, {
        width: 400,
        height: 100,
        data: props.data,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_recharts.Line, {
            type: "monotone",
            dataKey: "value",
            stroke: "#3b82f6",
            strokeWidth: 2.5,
            dot: !1
          }, void 0, !1, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 205,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_recharts.XAxis, {
            style: { fontSize: 9 },
            axisLine: !1,
            tickSize: 0,
            dataKey: "name",
            height: 15,
            dy: 10
          }, void 0, !1, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 213,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/dashboard/DashboardDemo.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
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
            }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 232,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "Plan"
            }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 233,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "MRR"
            }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 234,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "Logins"
            }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 235,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
              children: "Status"
            }, void 0, !1, {
              fileName: "app/components/dashboard/DashboardDemo.tsx",
              lineNumber: 236,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/dashboard/DashboardDemo.tsx",
          lineNumber: 231,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
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
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 242,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Pro"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 243,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$100.2"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 244,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "920"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 245,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "up",
                  children: "Healthy"
                }, void 0, !1, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 247,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 246,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 241,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "V\xE4in\xF6 P\xE1nfilo"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 252,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Basic"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 253,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$40.6"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 254,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "300"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 255,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "stale",
                  children: "Possible Churn"
                }, void 0, !1, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 257,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 256,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 251,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Giorgos Quinten"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 262,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Pro"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 263,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$2004.3"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 264,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "1000"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 265,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "up",
                  children: "Healthy"
                }, void 0, !1, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 267,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 266,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 261,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Adhelm Otis"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 272,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "Basic"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 273,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "$0"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 274,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: "10"
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 275,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tile_default.Badge, {
                  trend: "down",
                  children: "Churned"
                }, void 0, !1, {
                  fileName: "app/components/dashboard/DashboardDemo.tsx",
                  lineNumber: 277,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/dashboard/DashboardDemo.tsx",
                lineNumber: 276,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/dashboard/DashboardDemo.tsx",
            lineNumber: 271,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/dashboard/DashboardDemo.tsx",
        lineNumber: 240,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/dashboard/DashboardDemo.tsx",
    lineNumber: 229,
    columnNumber: 5
  }, this);
}

// app/components/AppHeader.tsx
var import_reactfire18 = require("reactfire"), import_ChevronRightIcon = __toESM(require("@heroicons/react/20/solid/ChevronRightIcon"));
init_use_user_session();

// app/components/MobileNavigation.tsx
var import_react_i18next21 = require("react-i18next"), import_react71 = require("@headlessui/react"), import_Bars3Icon2 = __toESM(require("@heroicons/react/24/outline/Bars3Icon"));
init_Dropdown();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MobileNavigation = () => {
  let Button2 = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react71.Menu.Button, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Bars3Icon2.default, {
      className: "h-9"
    }, void 0, !1, {
      fileName: "app/components/MobileNavigation.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/MobileNavigation.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this), Links3 = navigation_config_default.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, {
    href: item.path,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex items-center space-x-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.Icon, {
          className: "h-6"
        }, void 0, !1, {
          fileName: "app/components/MobileNavigation.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next21.Trans, {
            i18nKey: item.label,
            defaults: item.label
          }, void 0, !1, {
            fileName: "app/components/MobileNavigation.tsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/MobileNavigation.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/MobileNavigation.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  }, item.path, !1, {
    fileName: "app/components/MobileNavigation.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, {
    button: Button2,
    items: Links3
  }, void 0, !1, {
    fileName: "app/components/MobileNavigation.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}, MobileNavigation_default = MobileNavigation;

// app/components/AppHeader.tsx
init_If();
init_Heading();

// app/components/AppContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AppContainer(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full p-3",
    children: props.children
  }, void 0, !1, {
    fileName: "app/components/AppContainer.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}
var AppContainer_default = AppContainer;

// app/components/organizations/OrganizationsSelector.tsx
var import_react76 = require("react"), import_react_i18next23 = require("react-i18next"), import_outline11 = require("@heroicons/react/24/outline");

// app/lib/organizations/hooks/use-fetch-user-organizations.ts
var import_firestore6 = require("firebase/firestore"), import_reactfire16 = require("reactfire");
init_firestore_collections();
function useFetchUserOrganizations(userId) {
  let firestore = (0, import_reactfire16.useFirestore)(), organizationsCollection = (0, import_firestore6.collection)(
    firestore,
    ORGANIZATIONS_COLLECTION
  ), userPath = `members.${userId}`, constraint = (0, import_firestore6.where)(userPath, "!=", null), organizationsQuery = (0, import_firestore6.query)(organizationsCollection, constraint);
  return (0, import_reactfire16.useFirestoreCollectionData)(organizationsQuery, {
    idField: "id"
  });
}

// app/components/organizations/OrganizationsSelector.tsx
init_organization();

// app/core/ui/Popover.tsx
var import_react72 = require("react"), import_react73 = require("@headlessui/react"), import_ChevronDownIcon = __toESM(require("@heroicons/react/20/solid/ChevronDownIcon")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PopoverItem = (0, import_react72.createContext)({
  close() {
  }
}), PopoverDropdown = ({ children, button }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react73.Popover, {
  className: "relative",
  children: ({ open, close }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react73.Popover.Button, {
        className: `PopoverButton ${open ? "PopoverButtonActive" : " "}`,
        children: [
          button,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "flex flex-1 justify-end",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ChevronDownIcon.default, {
              className: `PopoverChevronDownIcon ${open ? "" : "text-opacity-70"}`,
              "aria-hidden": "true"
            }, void 0, !1, {
              fileName: "app/core/ui/Popover.tsx",
              lineNumber: 25,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/Popover.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/core/ui/Popover.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react73.Transition, {
        as: import_react72.Fragment,
        enter: "transition ease-out duration-200",
        enterFrom: "opacity-0 translate-y-1",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition ease-in duration-150",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-1",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react73.Popover.Panel, {
          className: "PopoverPanel",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "overflow-hidden rounded-md",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative flex flex-col bg-white dark:bg-black-300",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverItem.Provider, {
                value: { close },
                children
              }, void 0, !1, {
                fileName: "app/core/ui/Popover.tsx",
                lineNumber: 46,
                columnNumber: 19
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/Popover.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/Popover.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/core/ui/Popover.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/core/ui/Popover.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/core/ui/Popover.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this)
}, void 0, !1, {
  fileName: "app/core/ui/Popover.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this), ItemIcon = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "PopoverItemIcon",
  children
}, void 0, !1, {
  fileName: "app/core/ui/Popover.tsx",
  lineNumber: 60,
  columnNumber: 10
}, this), ItemLabel = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
  className: `PopoverItemLabel ${className ?? ""}`,
  children
}, void 0, !1, {
  fileName: "app/core/ui/Popover.tsx",
  lineNumber: 66,
  columnNumber: 10
}, this), Item2 = ({
  children,
  className,
  onClick
}) => {
  let popover = (0, import_react72.useContext)(PopoverItem), itemClicked = () => {
    onClick && onClick(), popover.close();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `PopoverPanelItem ${className ?? ""}`,
    onClick: itemClicked,
    children
  }, void 0, !1, {
    fileName: "app/core/ui/Popover.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
};
Item2.Label = ItemLabel;
Item2.Icon = ItemIcon;
PopoverDropdown.Item = Item2;
var PopoverDropdownItem = Item2;

// app/components/organizations/OrganizationsSelector.tsx
init_If();

// app/components/organizations/CreateOrganizationModal.tsx
var import_react75 = require("react"), import_react_hot_toast4 = __toESM(require("react-hot-toast")), import_react_i18next22 = require("react-i18next");
init_Modal();
init_Button();

// app/lib/organizations/hooks/use-create-organization.ts
var import_react74 = require("react"), import_reactfire17 = require("reactfire"), import_firestore7 = require("firebase/firestore");
init_use_request_state();
init_membership_role();
init_firestore_collections();
function useCreateOrganization() {
  var _a;
  let userId = (_a = (0, import_reactfire17.useUser)().data) == null ? void 0 : _a.uid, { state, setError, setData, setLoading } = useRequestState();
  return [(0, import_react74.useCallback)(
    async (name) => {
      let firestore = (0, import_firestore7.getFirestore)(), batch = (0, import_firestore7.writeBatch)(firestore);
      try {
        setLoading(!0);
        let organizations = (0, import_firestore7.collection)(firestore, ORGANIZATIONS_COLLECTION), userDoc = (0, import_firestore7.doc)(
          firestore,
          USERS_COLLECTION,
          userId
        ), organizationDoc = (0, import_firestore7.doc)(organizations), organizationData = {
          name,
          members: {
            [userDoc.id]: {
              role: membership_role_default.Owner,
              user: userDoc
            }
          }
        };
        batch.set(organizationDoc, organizationData), await batch.commit(), setData({
          name,
          id: organizationDoc.id,
          members: {
            [userDoc.id]: {
              role: membership_role_default.Owner,
              user: userDoc
            }
          }
        });
      } catch (e) {
        setError(e.message);
      }
    },
    [setData, setError, setLoading, userId]
  ), state];
}
var use_create_organization_default = useCreateOrganization;

// app/components/organizations/CreateOrganizationModal.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), CreateOrganizationModal = ({ isOpen, setIsOpen, onCreate }) => {
  let [createOrganization, createOrganizationState] = use_create_organization_default(), { loading, data: newOrganization } = createOrganizationState, { t: t2 } = (0, import_react_i18next22.useTranslation)(), Heading2 = (0, import_react75.useMemo)(
    () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next22.Trans, {
      i18nKey: "organization:createOrganizationModalHeading"
    }, void 0, !1, {
      fileName: "app/components/organizations/CreateOrganizationModal.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this),
    []
  ), onError = (0, import_react75.useCallback)(() => {
    import_react_hot_toast4.default.error("Please use a valid name");
  }, []), onSubmit = (0, import_react75.useCallback)(
    async (event) => {
      event.preventDefault();
      let name = new FormData(event.currentTarget).get("name");
      if (!name || name.trim().length === 0)
        return onError();
      await import_react_hot_toast4.default.promise(createOrganization(name), {
        success: t2("organization:createOrganizationSuccess"),
        error: t2("organization:createOrganizationError"),
        loading: t2("organization:createOrganizationLoading")
      }), setIsOpen(!1);
    },
    [createOrganization, onError, setIsOpen, t2]
  );
  return (0, import_react75.useEffect)(() => {
    newOrganization && onCreate(newOrganization);
  }, [newOrganization, onCreate]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    isOpen,
    setIsOpen,
    heading: Heading2,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      onSubmit,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next22.Trans, {
                  i18nKey: "organization:organizationNameLabel"
                }, void 0, !1, {
                  fileName: "app/components/organizations/CreateOrganizationModal.tsx",
                  lineNumber: 69,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  "data-cy": "create-organization-name-input",
                  name: "name",
                  minLength: 1,
                  required: !0,
                  placeholder: "ex. IndieCorp"
                }, void 0, !1, {
                  fileName: "app/components/organizations/CreateOrganizationModal.tsx",
                  lineNumber: 71,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/organizations/CreateOrganizationModal.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/organizations/CreateOrganizationModal.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            "data-cy": "confirm-create-organization-button",
            block: !0,
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next22.Trans, {
              i18nKey: "organization:createOrganizationSubmitLabel"
            }, void 0, !1, {
              fileName: "app/components/organizations/CreateOrganizationModal.tsx",
              lineNumber: 86,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/organizations/CreateOrganizationModal.tsx",
            lineNumber: 81,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/organizations/CreateOrganizationModal.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/organizations/CreateOrganizationModal.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/organizations/CreateOrganizationModal.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}, CreateOrganizationModal_default = CreateOrganizationModal;

// app/components/organizations/OrganizationsSelector.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PopoverButton = ({ organization }) => organization ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationItem, {
  organization
}, void 0, !1, {
  fileName: "app/components/organizations/OrganizationsSelector.tsx",
  lineNumber: 20,
  columnNumber: 12
}, this) : null, OrganizationsSelector = ({ userId }) => {
  let [isOrganizationModalOpen, setIsOrganizationModalOpen] = (0, import_react76.useState)(!1), { organization, setOrganization } = (0, import_react76.useContext)(organization_default), organizationSelected = (0, import_react76.useCallback)(
    (item) => {
      setOrganization(item), saveOrganizationIdInCookie(item.id);
    },
    [setOrganization]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        "data-cy": "organization-selector",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdown, {
          button: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverButton, {
            organization
          }, void 0, !1, {
            fileName: "app/components/organizations/OrganizationsSelector.tsx",
            lineNumber: 47,
            columnNumber: 34
          }, this),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationsOptions, {
                organizationId: organization == null ? void 0 : organization.id,
                userId,
                onSelect: organizationSelected
              }, void 0, !1, {
                fileName: "app/components/organizations/OrganizationsSelector.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/OrganizationsSelector.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem, {
              className: "border-t border-gray-100 dark:border-black-400",
              onClick: () => setIsOrganizationModalOpen(!0),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem.Label, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  "data-cy": "create-organization-button",
                  className: "flex flex-row items-center space-x-2 ellipsify",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline11.PlusCircleIcon, {
                      className: "h-5"
                    }, void 0, !1, {
                      fileName: "app/components/organizations/OrganizationsSelector.tsx",
                      lineNumber: 65,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next23.Trans, {
                        i18nKey: "organization:createOrganizationDropdownLabel"
                      }, void 0, !1, {
                        fileName: "app/components/organizations/OrganizationsSelector.tsx",
                        lineNumber: 68,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/organizations/OrganizationsSelector.tsx",
                      lineNumber: 67,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/organizations/OrganizationsSelector.tsx",
                  lineNumber: 61,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/organizations/OrganizationsSelector.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/OrganizationsSelector.tsx",
              lineNumber: 56,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/organizations/OrganizationsSelector.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateOrganizationModal_default, {
        setIsOpen: setIsOrganizationModalOpen,
        isOpen: isOrganizationModalOpen,
        onCreate: organizationSelected
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/organizations/OrganizationsSelector.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
};
function OrganizationsOptions(props) {
  let { data: organizations, status } = useFetchUserOrganizations(
    props.userId
  );
  return status !== "success" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: (organizations ?? []).map((item) => item.id === props.organizationId ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem, {
      onClick: () => props.onSelect(item),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverDropdownItem.Label, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationItem, {
          organization: item
        }, void 0, !1, {
          fileName: "app/components/organizations/OrganizationsSelector.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 113,
        columnNumber: 15
      }, this)
    }, item.name, !1, {
      fileName: "app/components/organizations/OrganizationsSelector.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this))
  }, void 0, !1, {
    fileName: "app/components/organizations/OrganizationsSelector.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
function OrganizationItem({ organization }) {
  let { logoURL, name } = organization, imageSize = 18;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
    "data-cy": "organization-selector-item",
    className: "flex max-w-[12rem] items-center space-x-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: logoURL,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            decoding: "async",
            loading: "lazy",
            style: {
              width: imageSize,
              height: imageSize
            },
            width: imageSize,
            height: imageSize,
            alt: `${name} Logo`,
            className: "object-contain",
            src: logoURL
          }, void 0, !1, {
            fileName: "app/components/organizations/OrganizationsSelector.tsx",
            lineNumber: 137,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/organizations/OrganizationsSelector.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "w-auto text-left font-medium ellipsify",
        children: name
      }, void 0, !1, {
        fileName: "app/components/organizations/OrganizationsSelector.tsx",
        lineNumber: 153,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/organizations/OrganizationsSelector.tsx",
    lineNumber: 131,
    columnNumber: 5
  }, this);
}
function saveOrganizationIdInCookie(id) {
  setCookie("organizationId", id);
}
var OrganizationsSelector_default = OrganizationsSelector;

// app/components/AppHeader.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AppHeader = ({ children }) => {
  var _a;
  let userSession = useUserSession(), auth = (0, import_reactfire18.useAuth)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "AppHeader",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex w-full flex-1 justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center justify-between space-x-2 lg:space-x-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:hidden",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileNavigation_default, {}, void 0, !1, {
                  fileName: "app/components/AppHeader.tsx",
                  lineNumber: 28,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/AppHeader.tsx",
                lineNumber: 27,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center space-x-1 lg:space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "min-w-[8rem]",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: (_a = userSession == null ? void 0 : userSession.auth) == null ? void 0 : _a.uid,
                      children: (uid) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationsSelector_default, {
                        userId: uid
                      }, void 0, !1, {
                        fileName: "app/components/AppHeader.tsx",
                        lineNumber: 34,
                        columnNumber: 29
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/AppHeader.tsx",
                      lineNumber: 33,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/AppHeader.tsx",
                    lineNumber: 32,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ChevronRightIcon.default, {
                    className: "h-6"
                  }, void 0, !1, {
                    fileName: "app/components/AppHeader.tsx",
                    lineNumber: 38,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                    type: 4,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "font-semibold dark:text-white",
                      children
                    }, void 0, !1, {
                      fileName: "app/components/AppHeader.tsx",
                      lineNumber: 41,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/AppHeader.tsx",
                    lineNumber: 40,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/AppHeader.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 22,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileDropdown_default, {
              user: userSession == null ? void 0 : userSession.auth,
              signOutRequested: () => auth.signOut()
            }, void 0, !1, {
              fileName: "app/components/AppHeader.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/AppHeader.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/AppHeader.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/AppHeader.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/AppHeader.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, AppHeader_default = AppHeader;

// app/routes/__app/dashboard/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta6 = () => ({
  title: "Dashboard"
});
function DashboardPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppHeader_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next24.Trans, {
          i18nKey: "common:dashboardTabLabel"
        }, void 0, !1, {
          fileName: "app/routes/__app/dashboard/index.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/dashboard/index.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DashboardDemo, {}, void 0, !1, {
            fileName: "app/routes/__app/dashboard/index.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/dashboard/index.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/dashboard/index.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/dashboard/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var dashboard_default = DashboardPage;

// app/routes/__app/photos/index.tsx
var photos_exports = {};
__export(photos_exports, {
  default: () => photos_default
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function PhotosPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
      children: "hola mundo desde photosPage"
    }, void 0, !1, {
      fileName: "app/routes/__app/photos/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/photos/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var photos_default = PhotosPage;

// app/routes/__app/tasks/index.tsx
var tasks_exports = {};
__export(tasks_exports, {
  default: () => tasks_default
});
var import_react_i18next29 = require("react-i18next");

// app/components/tasks/TasksContainer.tsx
init_Heading();

// app/components/tasks/CreateTaskForm.tsx
var import_react78 = require("react"), import_react_hook_form3 = require("react-hook-form"), import_react_hot_toast5 = require("react-hot-toast"), import_react_i18next25 = require("react-i18next");
init_Button();

// app/lib/tasks/hooks/use-create-task.ts
init_firestore_collections();
var import_react77 = require("react");
init_use_request_state();
var import_firestore8 = require("firebase/firestore");
function useCreateTask() {
  let { state, setLoading, setData, setError } = useRequestState();
  return [(0, import_react77.useCallback)(
    async (title, description) => {
      let firestore = (0, import_firestore8.getFirestore)(), tasksCollection = (0, import_firestore8.collection)(firestore, TASKS_COLLECTION);
      try {
        setLoading(!0);
        let data = {
          title,
          description,
          isCompleted: !1
        }, docRef = await (0, import_firestore8.addDoc)(tasksCollection, data);
        setData({
          id: docRef.id,
          title,
          description,
          isCompleted: data.isCompleted
        });
      } catch (error) {
        setError(error.message);
      }
    },
    [setData, setError, setLoading]
  ), state];
}
var use_create_task_default = useCreateTask;

// app/components/tasks/CreateTaskForm.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), CreateTaskForm = () => {
  let [createTask, createTaskState] = use_create_task_default(), { loading } = createTaskState, { t: t2 } = (0, import_react_i18next25.useTranslation)(), { register, handleSubmit, reset } = (0, import_react_hook_form3.useForm)({
    defaultValues: {
      title: "",
      description: ""
    }
  }), titleControl = register("title", { required: !0 }), descriptionControl = register("description", { required: !0 }), onError = (0, import_react78.useCallback)(() => {
    import_react_hot_toast5.toast.error("Error: please fill in all the required fields");
  }, []), onSubmit = async (title, description) => {
    if (console.log(title), console.log(description), !title || !description)
      return onError();
    await import_react_hot_toast5.toast.promise(createTask(title, description), {
      success: t2("task:createTaskSuccess"),
      error: t2("task:createTaskError"),
      loading: t2("task:createTaskLoading")
    }), reset({
      title: "",
      description: ""
    });
  };
  return (0, import_react78.useEffect)(() => {
    reset({ title: "", description: "" });
  }, [reset]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      onSubmit: handleSubmit((value) => onSubmit(value.title, value.description)),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ml-2 mr-2 flex-auto",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next25.Trans, {
                      i18nKey: "task:titleInputLabel"
                    }, void 0, !1, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 62,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      name: titleControl.name,
                      innerRef: titleControl.ref,
                      onChange: titleControl.onChange,
                      onBlur: titleControl.onBlur,
                      required: !0,
                      "data-cy": "task-title-input",
                      placeholder: 'Ex. "Do this by night"'
                    }, void 0, !1, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 63,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/tasks/CreateTaskForm.tsx",
                  lineNumber: 61,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 60,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                className: "pt-1",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next25.Trans, {
                      i18nKey: "task:descriptionInputLabel"
                    }, void 0, !1, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      name: descriptionControl.name,
                      innerRef: descriptionControl.ref,
                      onChange: descriptionControl.onChange,
                      onBlur: descriptionControl.onBlur,
                      required: !0,
                      "data-cy": "task-description-input",
                      placeholder: "Write a detailed description about your task."
                    }, void 0, !1, {
                      fileName: "app/components/tasks/CreateTaskForm.tsx",
                      lineNumber: 77,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/tasks/CreateTaskForm.tsx",
                  lineNumber: 75,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 74,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/tasks/CreateTaskForm.tsx",
            lineNumber: 59,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "ml-2 mr-2 flex-initial pb-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              className: "w-full md:w-auto",
              "data-cy": "create-task-submit-button",
              loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next25.Trans, {
                i18nKey: "task:createTaskSubmitLabel"
              }, void 0, !1, {
                fileName: "app/components/tasks/CreateTaskForm.tsx",
                lineNumber: 95,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/tasks/CreateTaskForm.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/tasks/CreateTaskForm.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/tasks/CreateTaskForm.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/tasks/CreateTaskForm.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/tasks/CreateTaskForm.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}, CreateTaskForm_default = CreateTaskForm;

// app/components/tasks/ListTasks.tsx
var import_react_i18next28 = require("react-i18next");
init_Alert();
init_If();

// app/lib/tasks/hooks/use-list-tasks.ts
init_firestore_collections();
var import_firestore9 = require("firebase/firestore"), import_reactfire19 = require("reactfire");
function useListTasks() {
  let firestore = (0, import_reactfire19.useFirestore)(), taskCollection = (0, import_firestore9.collection)(
    firestore,
    TASKS_COLLECTION
  ), listTaskQuery = (0, import_firestore9.query)(
    taskCollection
  );
  return (0, import_reactfire19.useFirestoreCollectionData)(listTaskQuery, {
    initialData: [],
    idField: "id"
  });
}
var use_list_tasks_default = useListTasks;

// app/components/tasks/DeleteTaskButton.tsx
var import_outline12 = require("@heroicons/react/24/outline");
init_IconButton();
var import_react_hot_toast6 = __toESM(require("react-hot-toast")), import_react80 = require("react");

// app/lib/tasks/hooks/use-delete-task.ts
var import_reactfire20 = require("reactfire"), import_firestore10 = require("firebase/firestore");
init_firestore_collections();
var import_react79 = require("react");
function useDeleteTask() {
  let firestore = (0, import_reactfire20.useFirestore)();
  return (0, import_react79.useCallback)(
    (taskId) => {
      let postRef = (0, import_firestore10.doc)(
        firestore,
        TASKS_COLLECTION,
        taskId
      );
      return (0, import_firestore10.deleteDoc)(postRef);
    },
    [firestore]
  );
}
var use_delete_task_default = useDeleteTask;

// app/components/tasks/DeleteTaskButton.tsx
var import_react_i18next26 = require("react-i18next");
init_If();
init_Modal();
init_Button();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DeleteTaskButton = ({ taskId }) => {
  let [isDeleting, setIsDeleting] = (0, import_react80.useState)(!1), deleteTaskRequest = use_delete_task_default(), { t: t2 } = (0, import_react_i18next26.useTranslation)(), onTaskDeleteRequest = (0, import_react80.useCallback)(async () => {
    let promise = deleteTaskRequest(taskId);
    await import_react_hot_toast6.default.promise(promise, {
      success: t2("post:deletePostSuccessMessage"),
      error: t2("post:deletePostErrorMessage"),
      loading: t2("post:deletePostLoadingMessage")
    }), setIsDeleting(!1);
  }, [deleteTaskRequest, taskId, t2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        "data-cy": "delete-post-button",
        onClick: () => setIsDeleting(!0),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline12.TrashIcon, {
          className: "dark h-6"
        }, void 0, !1, {
          fileName: "app/components/tasks/DeleteTaskButton.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/tasks/DeleteTaskButton.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: isDeleting,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
          heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next26.Trans, {
            i18nKey: "post:deletePostModalHeading"
          }, void 0, !1, {
            fileName: "app/components/tasks/DeleteTaskButton.tsx",
            lineNumber: 38,
            columnNumber: 20
          }, this),
          isOpen: isDeleting,
          setIsOpen: setIsDeleting,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next26.Trans, {
                  i18nKey: "common:modalConfirmationQuestion"
                }, void 0, !1, {
                  fileName: "app/components/tasks/DeleteTaskButton.tsx",
                  lineNumber: 44,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/tasks/DeleteTaskButton.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                "data-cy": "confirm-delete-post-button",
                color: "danger",
                onClick: onTaskDeleteRequest,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next26.Trans, {
                  i18nKey: "post:deletePostSubmitLabel"
                }, void 0, !1, {
                  fileName: "app/components/tasks/DeleteTaskButton.tsx",
                  lineNumber: 51,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/tasks/DeleteTaskButton.tsx",
                lineNumber: 46,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/tasks/DeleteTaskButton.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/tasks/DeleteTaskButton.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/tasks/DeleteTaskButton.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/tasks/DeleteTaskButton.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}, DeleteTaskButton_default = DeleteTaskButton;

// app/components/tasks/EditTaskButton.tsx
var import_outline13 = require("@heroicons/react/24/outline"), import_react83 = require("react");
init_IconButton();
init_If();

// app/components/tasks/UpdateTasksCard.tsx
var import_react82 = require("react");
init_Button();
init_Modal();
var import_react_i18next27 = require("react-i18next"), import_react_hook_form4 = require("react-hook-form");

// app/lib/tasks/hooks/use-update-task.ts
var import_react81 = require("react"), import_reactfire21 = require("reactfire"), import_firestore11 = require("firebase/firestore");
init_use_request_state();
init_firestore_collections();
function useUpdateTask() {
  var _a;
  let userId = (_a = (0, import_reactfire21.useUser)().data) == null ? void 0 : _a.uid, { state, setError, setData, setLoading } = useRequestState();
  return [(0, import_react81.useCallback)(
    async (tasktId, taskText, organizationId) => {
      let firestore = (0, import_firestore11.getFirestore)();
      try {
        setLoading(!0);
        let tasksCollection = (0, import_firestore11.collection)(firestore, TASKS_COLLECTION), userDoc = (0, import_firestore11.doc)(
          firestore,
          USERS_COLLECTION,
          userId
        ), taskDoc = (0, import_firestore11.doc)(tasksCollection, `/${tasktId}`), updatedAt = (0, import_firestore11.serverTimestamp)(), taskData = {
          taskText,
          userId: userDoc.id,
          updatedAt
        };
        (0, import_firestore11.updateDoc)(taskDoc, taskData), setData({
          id: taskDoc.id,
          taskText,
          userId: userDoc.id,
          updatedAt
        });
      } catch (e) {
        console.error(e.message), setError(e.message);
      }
    },
    [setData, setError, setLoading, userId]
  ), state];
}
var use_update_task_default = useUpdateTask;

// app/components/tasks/UpdateTasksCard.tsx
var import_react_hot_toast7 = __toESM(require("react-hot-toast"));
init_organization();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), EditTaskButton = ({ isOpen, setIsOpen, task }) => {
  let { organization } = (0, import_react82.useContext)(organization_default), { t: t2 } = (0, import_react_i18next27.useTranslation)(), currentTaskText = task.taskText ?? "", [updateTask, updateTaskstate] = use_update_task_default(), { loading } = updateTaskstate, { register, handleSubmit, reset } = (0, import_react_hook_form4.useForm)({
    defaultValues: {
      taskText: currentTaskText
    }
  }), taskTextControl = register("taskText", { value: currentTaskText }), onError = (0, import_react82.useCallback)(() => {
    import_react_hot_toast7.default.error("Please write some text to post");
  }, []), onSubmit = async (taskText) => {
    if (!taskText)
      return onError();
    await import_react_hot_toast7.default.promise(
      updateTask(task.id, taskText, organization == null ? void 0 : organization.id),
      {
        success: () => (setIsOpen(!1), t2("post:updateTaskSuccess")),
        error: t2("post:updateTaskError"),
        loading: t2("post:updateTaskLoading")
      }
    );
  };
  return (0, import_react82.useEffect)(() => {
    reset({
      taskText: currentTaskText
    });
  }, [currentTaskText, reset]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    isOpen,
    setIsOpen,
    heading: t2("post:EditTaskButtonHeading"),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
      onSubmit: handleSubmit((value) => onSubmit(value.taskText)),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next27.Trans, {
                  i18nKey: "task:titleInputLabel"
                }, void 0, !1, {
                  fileName: "app/components/tasks/UpdateTasksCard.tsx",
                  lineNumber: 75,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  name: taskTextControl.name,
                  innerRef: taskTextControl.ref,
                  onChange: taskTextControl.onChange,
                  onBlur: taskTextControl.onBlur,
                  required: !0,
                  "data-cy": "task-title-input",
                  placeholder: 'Ex. "Do this by night"'
                }, void 0, !1, {
                  fileName: "app/components/tasks/UpdateTasksCard.tsx",
                  lineNumber: 76,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/tasks/UpdateTasksCard.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/tasks/UpdateTasksCard.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next27.Trans, {
                  i18nKey: "post:taskTextInputLabel"
                }, void 0, !1, {
                  fileName: "app/components/tasks/UpdateTasksCard.tsx",
                  lineNumber: 89,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                  "data-cy": "task-title-input",
                  required: !0,
                  name: taskTextControl.name,
                  innerRef: taskTextControl.ref,
                  onChange: taskTextControl.onChange,
                  onBlur: taskTextControl.onBlur
                }, void 0, !1, {
                  fileName: "app/components/tasks/UpdateTasksCard.tsx",
                  lineNumber: 90,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/tasks/UpdateTasksCard.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/tasks/UpdateTasksCard.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            "data-cy": "create-task-submit-button",
            className: "w-full md:w-auto",
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next27.Trans, {
              i18nKey: "post:updateTaskSubmitLabel"
            }, void 0, !1, {
              fileName: "app/components/tasks/UpdateTasksCard.tsx",
              lineNumber: 105,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/tasks/UpdateTasksCard.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/tasks/UpdateTasksCard.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/tasks/UpdateTasksCard.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/tasks/UpdateTasksCard.tsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}, UpdateTasksCard_default = EditTaskButton;

// app/components/tasks/EditTaskButton.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), EditTaskButton2 = ({ task }) => {
  let [isUpdateTaskOpen, setIsUpdateTaskOpen] = (0, import_react83.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
        "data-cy": "update-post-button",
        onClick: () => setIsUpdateTaskOpen(!0),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline13.PencilSquareIcon, {
          className: "dark h-6"
        }, void 0, !1, {
          fileName: "app/components/tasks/EditTaskButton.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/tasks/EditTaskButton.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: isUpdateTaskOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateTasksCard_default, {
          isOpen: isUpdateTaskOpen,
          setIsOpen: setIsUpdateTaskOpen,
          task
        }, void 0, !1, {
          fileName: "app/components/tasks/EditTaskButton.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/tasks/EditTaskButton.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/tasks/EditTaskButton.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, EditTaskButton_default = EditTaskButton2;

// app/components/tasks/TaskCard.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), TaskCard = ({ task }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "h-30 p6 border-1 m-5 flex flex-col rounded border-inherit text-center",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      className: "text-center text-base font-bold",
      children: task.title
    }, void 0, !1, {
      fileName: "app/components/tasks/TaskCard.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
      className: "text-base",
      children: task.description
    }, void 0, !1, {
      fileName: "app/components/tasks/TaskCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex justify-around",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EditTaskButton_default, {
            task
          }, void 0, !1, {
            fileName: "app/components/tasks/TaskCard.tsx",
            lineNumber: 13,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/tasks/TaskCard.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteTaskButton_default, {
            taskId: task.id
          }, void 0, !1, {
            fileName: "app/components/tasks/TaskCard.tsx",
            lineNumber: 16,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/tasks/TaskCard.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/tasks/TaskCard.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/tasks/TaskCard.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), TaskCard_default = TaskCard;

// app/components/tasks/ListTasks.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ListTasks = () => {
  let { data: tasks, error, status } = use_list_tasks_default();
  return status === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubHeading_default, {
    children: "Loading ..."
  }, void 0, !1, {
    fileName: "app/components/tasks/ListTasks.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this) : status === "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "error",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next28.Trans, {
        i18nKey: "task: loadTasksError"
      }, void 0, !1, {
        fileName: "app/components/tasks/ListTasks.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: error == null ? void 0 : error.message
      }, void 0, !1, {
        fileName: "app/components/tasks/ListTasks.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/tasks/ListTasks.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-4 md:space-y-0 lg:mt-8 lg:flex-row lg:space-x-14 xl:space-x-20",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid grid-cols-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === "success",
        children: tasks.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TaskCard_default, {
          task
        }, task.id, !1, {
          fileName: "app/components/tasks/ListTasks.tsx",
          lineNumber: 32,
          columnNumber: 20
        }, this))
      }, void 0, !1, {
        fileName: "app/components/tasks/ListTasks.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/tasks/ListTasks.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/tasks/ListTasks.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}, ListTasks_default = ListTasks;

// app/components/tasks/TasksContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), TasksContainer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col ",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreateTaskForm_default, {}, void 0, !1, {
          fileName: "app/components/tasks/TasksContainer.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/tasks/TasksContainer.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
        className: "mt-3 mb-3"
      }, void 0, !1, {
        fileName: "app/components/tasks/TasksContainer.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
          type: 2,
          children: "Tasks To Do"
        }, void 0, !1, {
          fileName: "app/components/tasks/TasksContainer.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/tasks/TasksContainer.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListTasks_default, {}, void 0, !1, {
          fileName: "app/components/tasks/TasksContainer.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/tasks/TasksContainer.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/tasks/TasksContainer.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/tasks/TasksContainer.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), TasksContainer_default = TasksContainer;

// app/routes/__app/tasks/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TasksPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppHeader_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next29.Trans, {
          i18nKey: "common:tasksTabLabel"
        }, void 0, !1, {
          fileName: "app/routes/__app/tasks/index.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/tasks/index.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TasksContainer_default, {}, void 0, !1, {
            fileName: "app/routes/__app/tasks/index.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/tasks/index.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/tasks/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/tasks/index.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var tasks_default = TasksPage;

// app/routes/__app/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => settings_default
});
var import_react84 = require("@remix-run/react"), import_react_i18next30 = require("react-i18next");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links3 = [
  {
    path: "/settings/profile",
    label: "common:profileSettingsTabLabel"
  },
  {
    path: "/settings/organization",
    label: "common:organizationSettingsTabLabel"
  },
  {
    path: "/settings/subscription",
    label: "common:subscriptionSettingsTabLabel"
  }
];
function SettingsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppHeader_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next30.Trans, {
          i18nKey: "common:settingsTabLabel"
        }, void 0, !1, {
          fileName: "app/routes/__app/settings.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppContainer_default, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
            children: links3.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
              link
            }, link.path, !1, {
              fileName: "app/routes/__app/settings.tsx",
              lineNumber: 35,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/settings.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col space-y-4 md:space-y-0 lg:mt-8 lg:flex-row lg:space-x-16 xl:space-x-24",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react84.Outlet, {}, void 0, !1, {
              fileName: "app/routes/__app/settings.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/settings.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/settings.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var settings_default = SettingsLayout;

// app/routes/__app/settings/subscription/index.tsx
var subscription_exports = {};
__export(subscription_exports, {
  default: () => subscription_default,
  meta: () => meta7
});
var import_react89 = require("react"), import_react_i18next34 = require("react-i18next");

// app/components/subscriptions/Plans.tsx
var import_react_i18next33 = require("react-i18next");
init_use_current_organization();

// app/components/subscriptions/PlanSelectionForm.tsx
var import_react87 = require("react"), import_react_i18next31 = require("react-i18next");

// app/components/subscriptions/PlanSelector.tsx
var import_react86 = require("@headlessui/react"), import_classnames11 = __toESM(require("classnames"));
init_If();
init_Heading();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), STRIPE_PLANS = configuration_default.stripe.plans;
function PlanSelector(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react86.RadioGroup, {
        className: "w-full lg:w-6/12 2xl:w-4/12",
        value: props.plan,
        onChange: props.setPlan,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "w-full space-y-2.5",
          children: STRIPE_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react86.RadioGroup.Option, {
            value: plan,
            "data-cy": "subscription-plan",
            className: ({ active, checked }) => (0, import_classnames11.default)("PlanSelectorRadioItem", {
              PlanSelectorRadioItemNonActive: !active,
              PlanSelectorRadioItemChecked: checked
            }),
            children: ({ checked }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex w-full items-center justify-between",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex w-full items-center space-x-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-shrink-0",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                        condition: checked,
                        fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UncheckIcon, {}, void 0, !1, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 48,
                          columnNumber: 59
                        }, this),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckIcon, {
                          className: "PlanSelectorCheckIcon"
                        }, void 0, !1, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 49,
                          columnNumber: 27
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/subscriptions/PlanSelector.tsx",
                        lineNumber: 48,
                        columnNumber: 25
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/subscriptions/PlanSelector.tsx",
                      lineNumber: 47,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-auto text-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react86.RadioGroup.Label, {
                          as: "p",
                          className: "PlanSelectorName",
                          children: plan.name
                        }, void 0, !1, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 54,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react86.RadioGroup.Description, {
                          as: "span",
                          className: (0, import_classnames11.default)("inline text-base", {
                            "dark:text-gray-300": checked,
                            "text-gray-500 dark:text-gray-400": !checked
                          }),
                          children: plan.description
                        }, void 0, !1, {
                          fileName: "app/components/subscriptions/PlanSelector.tsx",
                          lineNumber: 58,
                          columnNumber: 25
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/subscriptions/PlanSelector.tsx",
                      lineNumber: 53,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "PlanSelectorPrice",
                      children: plan.price
                    }, void 0, !1, {
                      fileName: "app/components/subscriptions/PlanSelector.tsx",
                      lineNumber: 69,
                      columnNumber: 23
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/subscriptions/PlanSelector.tsx",
                  lineNumber: 46,
                  columnNumber: 21
                }, this)
              }, void 0, !1, {
                fileName: "app/components/subscriptions/PlanSelector.tsx",
                lineNumber: 45,
                columnNumber: 19
              }, this)
            }, void 0, !1, {
              fileName: "app/components/subscriptions/PlanSelector.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this)
          }, plan.name, !1, {
            fileName: "app/components/subscriptions/PlanSelector.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this))
        }, void 0, !1, {
          fileName: "app/components/subscriptions/PlanSelector.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: props.plan,
        children: (plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex w-full flex-1 flex-col space-y-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col space-y-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                  type: 2,
                  children: plan.name
                }, void 0, !1, {
                  fileName: "app/components/subscriptions/PlanSelector.tsx",
                  lineNumber: 84,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                  type: 4,
                  children: plan.description
                }, void 0, !1, {
                  fileName: "app/components/subscriptions/PlanSelector.tsx",
                  lineNumber: 85,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/subscriptions/PlanSelector.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingTable_default.Price, {
              children: plan.price
            }, void 0, !1, {
              fileName: "app/components/subscriptions/PlanSelector.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingTable_default.FeaturesList, {
              features: plan.features
            }, void 0, !1, {
              fileName: "app/components/subscriptions/PlanSelector.tsx",
              lineNumber: 90,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/subscriptions/PlanSelector.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 79,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/subscriptions/PlanSelector.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function CheckIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    viewBox: "0 0 24 24",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
        cx: 12,
        cy: 12,
        r: 12,
        fill: "#fff",
        opacity: "0.2"
      }, void 0, !1, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M7 13l3 3 7-7",
        stroke: "#fff",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, void 0, !1, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/subscriptions/PlanSelector.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
function UncheckIcon() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
        cx: 12,
        cy: 12,
        r: 12,
        fill: "currentColor",
        opacity: "0.2"
      }, void 0, !1, {
        fileName: "app/components/subscriptions/PlanSelector.tsx",
        lineNumber: 117,
        columnNumber: 7
      }, this),
      ";"
    ]
  }, void 0, !0, {
    fileName: "app/components/subscriptions/PlanSelector.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}

// app/components/subscriptions/CheckoutRedirectButton.tsx
var import_outline14 = require("@heroicons/react/24/outline");
init_Button();
init_use_get_csrf_token();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), CHECKOUT_SESSION_API_ENDPOINT = configuration_default.paths.api.checkout, CheckoutRedirectButton = ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
  "data-cy": "checkout-form",
  action: CHECKOUT_SESSION_API_ENDPOINT,
  method: "POST",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckoutFormData, {
        customerId: props.customerId,
        organizationId: props.organizationId,
        priceId: props.priceId
      }, void 0, !1, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
      size: "large",
      color: "primary",
      type: "submit",
      disabled: props.disabled,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "flex items-center space-x-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children
          }, void 0, !1, {
            fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline14.ArrowRightIcon, {
            className: "h-6"
          }, void 0, !1, {
            fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this), CheckoutRedirectButton_default = CheckoutRedirectButton;
function CheckoutFormData(props) {
  let getCsrfToken = useGetCsrfToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "organizationId",
        defaultValue: props.organizationId
      }, void 0, !1, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "csrfToken",
        defaultValue: getCsrfToken() ?? ""
      }, void 0, !1, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "returnUrl",
        defaultValue: getReturnUrl()
      }, void 0, !1, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "priceId",
        defaultValue: props.priceId
      }, void 0, !1, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        type: "hidden",
        name: "customerId",
        defaultValue: props.customerId
      }, void 0, !1, {
        fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/subscriptions/CheckoutRedirectButton.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function getReturnUrl() {
  return is_browser_default() ? [window.location.origin, window.location.pathname].join("") : void 0;
}

// app/components/subscriptions/BillingRedirectButton.tsx
var import_outline15 = require("@heroicons/react/24/outline");
init_Button();
init_use_get_csrf_token();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), BILLING_PORTAL_REDIRECT_ENDPOINT = configuration_default.paths.api.billingPortal, BillingPortalRedirectButton = ({ children, customerId, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
  method: "POST",
  action: BILLING_PORTAL_REDIRECT_ENDPOINT,
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
      type: "hidden",
      name: "customerId",
      value: customerId
    }, void 0, !1, {
      fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CsrfTokenInput, {}, void 0, !1, {
        fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
      size: "large",
      color: "secondary",
      className,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "flex items-center space-x-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children
          }, void 0, !1, {
            fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline15.ArrowRightIcon, {
            className: "h-6"
          }, void 0, !1, {
            fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this);
function CsrfTokenInput() {
  let getCsrfToken = useGetCsrfToken();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
    type: "hidden",
    name: "csrfToken",
    defaultValue: getCsrfToken() ?? ""
  }, void 0, !1, {
    fileName: "app/components/subscriptions/BillingRedirectButton.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var BillingRedirectButton_default = BillingPortalRedirectButton;

// app/components/subscriptions/PlanSelectionForm.tsx
init_IfHasPermissions();
init_permissions();
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), stripePlans = configuration_default.stripe.plans, PlanSelectionForm = ({ organization }) => {
  let initialPlan = stripePlans.find((item) => {
    var _a;
    return item.stripePriceId === ((_a = organization == null ? void 0 : organization.subscription) == null ? void 0 : _a.priceId);
  }), [selectedPlan, setSelectedPlan] = (0, import_react87.useState)(initialPlan), isCheckoutDisabled = (initialPlan == null ? void 0 : initialPlan.stripePriceId) === (selectedPlan == null ? void 0 : selectedPlan.stripePriceId), customerId = organization.customerId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
      condition: canChangeBilling,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "w-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlanSelector, {
            plan: selectedPlan,
            setPlan: setSelectedPlan
          }, void 0, !1, {
            fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckoutRedirectButton_default, {
              organizationId: organization.id,
              priceId: selectedPlan == null ? void 0 : selectedPlan.stripePriceId,
              customerId,
              disabled: isCheckoutDisabled,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next31.Trans, {
                i18nKey: "subscription:goToCheckout"
              }, void 0, !1, {
                fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: customerId,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BillingRedirectButton_default, {
                customerId,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next31.Trans, {
                  i18nKey: "subscription:manageBilling"
                }, void 0, !1, {
                  fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
                  lineNumber: 57,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
                lineNumber: 56,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/subscriptions/PlanSelectionForm.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}, PlanSelectionForm_default = PlanSelectionForm;

// app/components/subscriptions/Plans.tsx
init_If();

// app/components/subscriptions/SubscriptionCard.tsx
var import_react88 = require("react"), import_react_i18next32 = require("react-i18next");
init_Heading();
init_Badge();
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SubscriptionCard = ({ subscription }) => {
  let plans = (0, import_react88.useMemo)(() => getPlans(), []), plan = (0, import_react88.useMemo)(() => plans.find((item) => item.stripePriceId === subscription.priceId), [plans, subscription.priceId]), endDate = (0, import_react88.useMemo)(() => {
    let endDateMs = subscription.periodEndsAt * 1e3;
    return new Date(endDateMs).toLocaleDateString();
  }, [subscription.periodEndsAt]), isSubscriptionActive = (0, import_react88.useMemo)(() => subscription.status === "paid" /* Paid */, [subscription.status]);
  return plan ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6",
    "data-cy": "subscription-card",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-2.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "text-xs text-gray-700 dark:text-gray-400",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next32.Trans, {
              i18nKey: "subscription:currentPlan"
            }, void 0, !1, {
              fileName: "app/components/subscriptions/SubscriptionCard.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center space-x-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                type: 3,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  "data-cy": "subscription-name",
                  children: plan.name
                }, void 0, !1, {
                  fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                  lineNumber: 47,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                lineNumber: 46,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: isSubscriptionActive,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge_default, {
                  size: "small",
                  color: "success",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next32.Trans, {
                    i18nKey: "subscription:subscriptionActiveBadge"
                  }, void 0, !1, {
                    fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                    lineNumber: 52,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                  lineNumber: 51,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/subscriptions/SubscriptionCard.tsx",
                lineNumber: 50,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 6,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "text-gray-700 dark:text-gray-400",
              children: plan.description
            }, void 0, !1, {
              fileName: "app/components/subscriptions/SubscriptionCard.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/subscriptions/SubscriptionCard.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            "data-cy": "subscription-period-end",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next32.Trans, {
              i18nKey: "subscription:subscriptionWillEndOn",
              values: { endDate }
            }, void 0, !1, {
              fileName: "app/components/subscriptions/SubscriptionCard.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/subscriptions/SubscriptionCard.tsx",
            lineNumber: 66,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/subscriptions/SubscriptionCard.tsx",
          lineNumber: 65,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/subscriptions/SubscriptionCard.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/subscriptions/SubscriptionCard.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this) : null;
};
function getPlans() {
  let { plans } = configuration_default.stripe;
  return [...plans, ...getTestingPlans()];
}
function getTestingPlans() {
  return [
    {
      name: "Testing Plan",
      description: "Description of your Testing plan",
      price: "$999/year",
      stripePriceId: "price_1LFibmKr5l4rxPx3wWcSO8UY",
      features: []
    }
  ];
}
var SubscriptionCard_default = SubscriptionCard;

// app/components/subscriptions/Plans.tsx
init_Alert();
init_permissions();
init_IfHasPermissions();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Plans = () => {
  let organization = useCurrentOrganization();
  if (!organization)
    return null;
  let customerId = organization.customerId, subscription = organization.subscription;
  if (!subscription)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlanSelectionForm_default, {
      organization
    }, void 0, !1, {
      fileName: "app/components/subscriptions/Plans.tsx",
      lineNumber: 28,
      columnNumber: 12
    }, this);
  let isAwaitingPayment = subscription.status === "awaitingPayment" /* AwaitingPayment */;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: isAwaitingPayment,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AwaitingPaymentAlert, {}, void 0, !1, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SubscriptionCard_default, {
        subscription
      }, void 0, !1, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IfHasPermissions_default, {
        condition: canChangeBilling,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: customerId,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BillingRedirectButton_default, {
            customerId,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next33.Trans, {
              i18nKey: "subscription:manageBilling"
            }, void 0, !1, {
              fileName: "app/components/subscriptions/Plans.tsx",
              lineNumber: 45,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/subscriptions/Plans.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/subscriptions/Plans.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};
function AwaitingPaymentAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "warn",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next33.Trans, {
          i18nKey: "subscription:awaitingPaymentAlertHeading"
        }, void 0, !1, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        "data-cy": "awaiting-payment-alert",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next33.Trans, {
          i18nKey: "subscription:awaitingPaymentAlert"
        }, void 0, !1, {
          fileName: "app/components/subscriptions/Plans.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/subscriptions/Plans.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/subscriptions/Plans.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
var Plans_default = Plans;

// app/components/settings/SettingsTile.tsx
init_Heading();
init_If();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SettingsTile = ({ children, heading, subHeading }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "flex flex-col space-y-6",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-1.5",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: heading,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
            type: 3,
            children: heading
          }, void 0, !1, {
            fileName: "app/components/settings/SettingsTile.tsx",
            lineNumber: 12,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/settings/SettingsTile.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: subHeading,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl font-medium text-gray-500 dark:text-gray-400",
            children: subHeading
          }, void 0, !1, {
            fileName: "app/components/settings/SettingsTile.tsx",
            lineNumber: 16,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/settings/SettingsTile.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/settings/SettingsTile.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "rounded-lg border border-gray-100 p-2.5 dark:border-black-300 lg:p-6",
      children
    }, void 0, !1, {
      fileName: "app/components/settings/SettingsTile.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/settings/SettingsTile.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), SettingsTile_default = SettingsTile;

// app/routes/__app/settings/subscription/index.tsx
init_If();
init_Alert();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var meta7 = () => ({
  title: "Subscription"
}), SubscriptionSettingsPage = () => {
  let status = useSubscriptionStatus();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "w-full",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
          i18nKey: "common:subscriptionSettingsTabLabel"
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/subscription/index.tsx",
          lineNumber: 30,
          columnNumber: 20
        }, this),
        subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
          i18nKey: "subscription:subscriptionTabSubheading"
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/subscription/index.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: status !== void 0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlansStatusAlert, {
                status
              }, void 0, !1, {
                fileName: "app/routes/__app/settings/subscription/index.tsx",
                lineNumber: 37,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plans_default, {}, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/settings/subscription/index.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/subscription/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/subscription/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}, subscription_default = SubscriptionSettingsPage;
function PlansStatusAlert({
  status
}) {
  switch (status) {
    case "cancel" /* Cancel */:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
        type: "warn",
        useCloseButton: !0,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
              i18nKey: "subscription:checkOutCanceledAlertHeading"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 62,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
              i18nKey: "subscription:checkOutCanceledAlert"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this);
    case "error" /* Error */:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
        type: "error",
        useCloseButton: !0,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
              i18nKey: "subscription:unknownErrorAlertHeading"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 75,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
              i18nKey: "subscription:unknownErrorAlert"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 79,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 78,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this);
    case "success" /* Success */:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
        type: "success",
        useCloseButton: !0,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
              i18nKey: "subscription:checkOutCompletedAlertHeading"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next34.Trans, {
              i18nKey: "subscription:checkOutCompletedAlert"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/subscription/index.tsx",
              lineNumber: 92,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/subscription/index.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/settings/subscription/index.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this);
  }
}
function useSubscriptionStatus() {
  let [status, setStatus] = (0, import_react89.useState)();
  return (0, import_react89.useEffect)(() => {
    let params = new URLSearchParams(window.location.search), error = params.has("error" /* Error */), canceled = params.has("cancel" /* Cancel */), success = params.has("success" /* Success */);
    canceled ? setStatus("cancel" /* Cancel */) : success ? setStatus("success" /* Success */) : error && setStatus("error" /* Error */);
  }, []), status;
}

// app/routes/__app/settings/organization.tsx
var organization_exports = {};
__export(organization_exports, {
  default: () => organization_default2
});
var import_react90 = require("@remix-run/react");

// app/components/settings/SettingsContentContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), SettingsContentContainer = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "w-full lg:max-w-4xl",
  children
}, void 0, !1, {
  fileName: "app/components/settings/SettingsContentContainer.tsx",
  lineNumber: 2,
  columnNumber: 10
}, this), SettingsContentContainer_default = SettingsContentContainer;

// app/components/organizations/OrganizationSettingsTabs.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links4 = {
  General: {
    path: "/settings/organization",
    label: "organization:generalTabLabel"
  },
  Members: {
    path: "/settings/organization/members",
    label: "organization:membersTabLabel"
  }
}, OrganizationSettingsTabs = () => {
  let itemClassName = "flex justify-center lg:justify-start items-center flex-auto lg:flex-initial";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
      secondary: !0,
      vertical: !0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
          end: !0,
          className: itemClassName,
          link: links4.General
        }, void 0, !1, {
          fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
          className: itemClassName,
          link: links4.Members
        }, void 0, !1, {
          fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/organizations/OrganizationSettingsTabs.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}, OrganizationSettingsTabs_default = OrganizationSettingsTabs;

// app/routes/__app/settings/organization.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OrganizationSettingsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationSettingsTabs_default, {}, void 0, !1, {
          fileName: "app/routes/__app/settings/organization.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/organization.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsContentContainer_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react90.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__app/settings/organization.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/organization.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/settings/organization.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var organization_default2 = OrganizationSettingsLayout;

// app/routes/__app/settings/organization/members/$member.ts
var member_exports = {};
__export(member_exports, {
  action: () => action6
});
var import_node9 = require("@remix-run/node"), import_zod5 = require("zod");
init_membership_role();
async function action6(args) {
  let req = args.request, targetUserId = args.params.member;
  switch (await with_csrf_default(req), await with_methods_guard_default(req, ["DELETE", "PUT"]), req.method) {
    case "PUT":
      return handleMemberRoleUpdate(req, targetUserId);
    case "DELETE":
      return handleMemberRemovedFromOrganization(req, targetUserId);
  }
}
async function handleMemberRoleUpdate(req, targetUserId) {
  let body = await req.json(), result = await getUpdateMemberBodySchema().safeParseAsync(body);
  if (!result.success)
    return throwBadRequestException();
  let logger2 = logger_default(), organizationId = await parseOrganizationIdCookie(req), sessionId = await parseSessionIdCookie(req), currentUserId = (await getLoggedInUser(sessionId)).uid, role = result.data.role, payload = {
    organizationId,
    currentUserId,
    targetUserId
  };
  if (payload.targetUserId === currentUserId)
    return logger2.warn("The current user cannot dispatch actions about itself"), throwForbiddenException();
  let updatePayload = { ...payload, role };
  return await updateMemberRole(updatePayload), logger2.info(updatePayload, "User role successfully updated"), (0, import_node9.json)({ success: !0 });
}
async function handleMemberRemovedFromOrganization(req, targetUserId) {
  let organizationId = await parseOrganizationIdCookie(req), sessionId = await parseSessionIdCookie(req), currentUserId = (await getLoggedInUser(sessionId)).uid, payload = {
    organizationId,
    currentUserId,
    targetUserId
  };
  return await removeMemberFromOrganization(payload), logger_default().info(payload, "User removed from organization"), (0, import_node9.json)({ success: !0 });
}
function getUpdateMemberBodySchema() {
  return import_zod5.z.object({
    role: import_zod5.z.nativeEnum(membership_role_default)
  });
}

// app/routes/__app/settings/organization/members/invite.tsx
var invite_exports2 = {};
__export(invite_exports2, {
  action: () => action7,
  default: () => invite_default2,
  meta: () => meta8
});
var import_react_i18next38 = require("react-i18next"), import_node10 = require("@remix-run/node"), import_ArrowLeftIcon = __toESM(require("@heroicons/react/24/outline/ArrowLeftIcon")), import_zod6 = require("zod");

// app/lib/server/organizations/invite-members.ts
var import_date_fns = require("date-fns");
init_permissions();

// app/lib/emails/invite.tsx
var import_mjml_react3 = require("mjml-react");

// app/components/emails/EmailNavbar.tsx
var import_mjml_react = require("mjml-react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function EmailNavbar(props) {
  let productName = props.productName ?? configuration_default.site.name;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react.MjmlSection, {
    fullWidth: !0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react.MjmlColumn, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react.MjmlText, {
        align: "center",
        children: productName
      }, void 0, !1, {
        fileName: "app/components/emails/EmailNavbar.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/emails/EmailNavbar.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/emails/EmailNavbar.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var EmailNavbar_default = EmailNavbar;

// app/components/emails/CallToActionButton.tsx
var import_mjml_react2 = require("mjml-react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), PRIMARY_COLOR = "#3b82f6";
function CallToActionButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react2.MjmlButton, {
    padding: "12px",
    backgroundColor: PRIMARY_COLOR,
    borderRadius: "8px",
    href: props.href,
    children: props.children
  }, void 0, !1, {
    fileName: "app/components/emails/CallToActionButton.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var CallToActionButton_default = CallToActionButton;

// app/lib/emails/invite.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function renderInviteEmail(props) {
  let title = `You have been invited to join ${props.organizationName}`;
  return (0, import_mjml_react3.render)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.Mjml, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlHead, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlTitle, {
              children: title
            }, void 0, !1, {
              fileName: "app/lib/emails/invite.tsx",
              lineNumber: 31,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlPreview, {
              children: title
            }, void 0, !1, {
              fileName: "app/lib/emails/invite.tsx",
              lineNumber: 32,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/lib/emails/invite.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlBody, {
          width: 500,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailNavbar_default, {}, void 0, !1, {
              fileName: "app/lib/emails/invite.tsx",
              lineNumber: 36,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlSection, {
              fullWidth: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlColumn, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlText, {
                    children: "Hi,"
                  }, void 0, !1, {
                    fileName: "app/lib/emails/invite.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlText, {
                    children: [
                      props.inviter,
                      " with ",
                      props.organizationName,
                      " has invited you to use ",
                      props.productName,
                      " to collaborate with them."
                    ]
                  }, void 0, !0, {
                    fileName: "app/lib/emails/invite.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlText, {
                    children: "Use the button below to set up your account and get started:"
                  }, void 0, !1, {
                    fileName: "app/lib/emails/invite.tsx",
                    lineNumber: 47,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/lib/emails/invite.tsx",
                lineNumber: 39,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/lib/emails/invite.tsx",
              lineNumber: 38,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlSection, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlColumn, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CallToActionButton_default, {
                  href: props.link,
                  children: [
                    "Join ",
                    props.organizationName
                  ]
                }, void 0, !0, {
                  fileName: "app/lib/emails/invite.tsx",
                  lineNumber: 55,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/lib/emails/invite.tsx",
                lineNumber: 54,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/lib/emails/invite.tsx",
              lineNumber: 53,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlSection, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlColumn, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlText, {
                    children: "Welcome aboard,"
                  }, void 0, !1, {
                    fileName: "app/lib/emails/invite.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mjml_react3.MjmlText, {
                    children: [
                      "The ",
                      props.productName,
                      " Team"
                    ]
                  }, void 0, !0, {
                    fileName: "app/lib/emails/invite.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/lib/emails/invite.tsx",
                lineNumber: 62,
                columnNumber: 11
              }, this)
            }, void 0, !1, {
              fileName: "app/lib/emails/invite.tsx",
              lineNumber: 61,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/lib/emails/invite.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/lib/emails/invite.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this),
    { validationLevel: "soft" }
  );
}

// app/core/email/send-email.ts
async function sendEmail(config) {
  return (await getTransporter()).sendMail(config);
}
function getTransporter() {
  return process.env.IS_CI ? getMockMailTransporter() : configuration_default.emulator ? getEtherealMailTransporter() : getSMTPTransporter();
}
async function getSMTPTransporter() {
  let nodemailer = await import("nodemailer"), { host, port, user, password: pass } = configuration_default.email, secure = port === 465 && !configuration_default.emulator;
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
    }
  });
}
async function getEtherealMailTransporter() {
  let nodemailer = await import("nodemailer"), testAccount = await getEtherealTestAccount(), host = "smtp.ethereal.email", port = 587;
  return nodemailer.createTransport({
    host,
    port,
    secure: !1,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
}
function getMockMailTransporter() {
  return {
    sendMail(params) {
      console.log(
        "Using mock email transporter with params",
        JSON.stringify(params, null, 2)
      );
    }
  };
}
async function getEtherealTestAccount() {
  let user = process.env.ETHEREAL_EMAIL, pass = process.env.ETHEREAL_PASSWORD;
  return user && pass ? (console.log("Sending email with Ethereal test account..."), {
    user,
    pass
  }) : createEtherealTestAccount();
}
async function createEtherealTestAccount() {
  let newAccount = await (await import("nodemailer")).createTestAccount();
  return console.warn(`
    Configuration property "emailEtherealTestAccount" was not found! 
    Consider adding a fixed Ethereal account so that you don't need to update the credentials each time you use it.
    To do so, please use the guide at https://makerkit.dev/docs/email
  `), console.log(
    `Created Ethereal test account: ${JSON.stringify(newAccount, null, 2)}`
  ), console.log("Consider adding these credentials to your configuration file"), newAccount;
}

// app/lib/server/organizations/invite-members.ts
init_queries();
var INVITE_EXPIRATION_DAYS = 7;
async function inviteMembers(params) {
  let { organizationId, invites, inviterId } = params, logger2 = logger_default(), inviter = await getUserInfoById(inviterId), organization = await getOrganizationById(organizationId), organizationData = organization.data();
  if (!organizationData)
    throw new Error(
      `Organization data with ID ${organizationId} was not found`
    );
  let organizationName = organizationData.name, inviterRole = organizationData == null ? void 0 : organizationData.members[inviterId].role;
  if (inviterRole === void 0)
    throw new Error(
      `Invitee with ID ${inviterId} does not belong to the organization`
    );
  let invitesCollection = organization.ref.collection("invites"), requests = [], expiresAt = (0, import_date_fns.addDays)(new Date(), INVITE_EXPIRATION_DAYS).getTime();
  for (let invite of invites) {
    let ref3 = invitesCollection.doc();
    if (!canInviteUser(inviterRole, invite.role))
      return;
    let inviterDisplayName = (inviter == null ? void 0 : inviter.displayName) ?? (inviter == null ? void 0 : inviter.email) ?? void 0, organizationLogo = (organizationData == null ? void 0 : organizationData.logoURL) ?? void 0, sendEmailRequest = () => sendInviteEmail({
      invitedUserEmail: invite.email,
      inviteCode: ref3.id,
      organizationName,
      organizationLogo,
      inviter: inviterDisplayName
    }), field = "email", op = "==", existingInvite = await invitesCollection.where(field, op, invite.email).get(), inviteExists = !existingInvite.empty, catchCallback = (error) => (logger2.error(
      {
        inviteId: ref3.id,
        inviter: inviter == null ? void 0 : inviter.uid,
        organizationId
      },
      "Error while sending invite to member"
    ), logger2.debug(error), Promise.reject(error));
    if (inviteExists) {
      let doc7 = existingInvite.docs[0], request = async () => {
        try {
          await doc7.ref.update({ ...invite }), await sendEmailRequest();
        } catch (e) {
          return catchCallback(e);
        }
      };
      requests.push(request());
    } else {
      let request = async () => {
        let data = {
          ...invite,
          code: ref3.id,
          expiresAt,
          organization: {
            id: organizationId,
            name: (organizationData == null ? void 0 : organizationData.name) ?? ""
          }
        };
        try {
          let doc7 = await invitesCollection.add(data);
          logger2.info(
            {
              organizationId,
              inviteId: doc7.id
            },
            "Invite successfully added"
          ), await sendEmailRequest(), logger2.info(
            {
              organizationId,
              inviteId: doc7.id
            },
            "Invite successfully sent"
          );
        } catch (e) {
          return catchCallback(e);
        }
      };
      requests.push(request());
    }
  }
  return Promise.all(requests);
}
function sendInviteEmail(props) {
  let {
    invitedUserEmail,
    inviteCode,
    organizationName,
    organizationLogo,
    inviter
  } = props, sender = configuration_default.email.senderAddress, productName = configuration_default.site.siteName, subject = "You have been invited to join an organization!", link = getInvitePageFullUrl(inviteCode), { html, errors } = renderInviteEmail({
    productName,
    link,
    organizationName,
    organizationLogo,
    invitedUserEmail,
    inviter
  });
  if (errors.length)
    throw new Error(
      `Found errors while rendering invitation email: ${JSON.stringify(
        errors,
        null,
        2
      )}`
    );
  return sendEmail({
    to: invitedUserEmail,
    from: sender,
    subject,
    html
  });
}
function getInvitePageFullUrl(inviteCode) {
  let siteUrl = configuration_default.site.siteUrl;
  return configuration_default.emulator && (siteUrl = getEmulatorHost()), assertSiteUrl(siteUrl), [siteUrl, "invite", inviteCode].join("/");
}
function assertSiteUrl(siteUrl) {
  if (!siteUrl && configuration_default.production)
    throw new Error(
      'Please configure the "siteUrl" property in the configuration file ~/configuration.ts'
    );
}
function getEmulatorHost() {
  return ["http://localhost", 3e3].join(":");
}

// app/components/organizations/InviteMembersForm.tsx
var import_react_i18next37 = require("react-i18next"), import_react95 = require("react"), import_react_hook_form5 = require("react-hook-form"), import_react_hot_toast8 = __toESM(require("react-hot-toast")), import_PlusCircleIcon = __toESM(require("@heroicons/react/24/outline/PlusCircleIcon")), import_XMarkIcon3 = __toESM(require("@heroicons/react/24/outline/XMarkIcon"));
init_membership_role();

// app/lib/organizations/hooks/use-invite-members.ts
init_use_api();
function useInviteMembers() {
  return useApiRequest(
    "/settings/organization/members/invite",
    "POST",
    {
      redirect: "follow"
    }
  );
}

// app/components/organizations/InviteMembersForm.tsx
init_If();
init_Button();
init_IconButton();
init_MembershipRoleSelector();
init_use_user_session();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), InviteMembersForm = () => {
  let { t: t2 } = (0, import_react_i18next37.useTranslation)("organization"), user = useUserSession(), [inviteMembers2, { loading }] = useInviteMembers(), { register, handleSubmit, setValue, control, clearErrors, watch } = useInviteMembersForm(), { fields, append, remove } = (0, import_react_hook_form5.useFieldArray)({
    control,
    name: "members",
    shouldUnregister: !0
  }), watchFieldArray = watch("members"), controlledFields = fields.map((field, index) => ({
    ...field,
    ...watchFieldArray[index]
  })), onSubmit = (0, import_react95.useCallback)(
    async ({ members }) => {
      let promise = inviteMembers2(members);
      return import_react_hot_toast8.default.promise(promise, {
        success: t2("inviteMembersSuccess"),
        error: t2("inviteMembersError"),
        loading: t2("inviteMembersLoading")
      });
    },
    [inviteMembers2, t2]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    className: "flex flex-col space-y-4",
    "data-cy": "invite-members-form",
    onSubmit: (event) => {
      handleSubmit(onSubmit)(event);
    },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-2",
        children: [
          controlledFields.map((field, index) => {
            let emailInputName = `members.${index}.email`, roleInputName = `members.${index}.role`, emailControl = register(emailInputName, {
              required: !0,
              validate: (value) => {
                var _a;
                return getFormValidator(watchFieldArray)(value, index) ? t2("duplicateInviteEmailError") : ((_a = user == null ? void 0 : user.auth) == null ? void 0 : _a.email) === value ? t2("invitingOwnAccountError") : !0;
              }
            });
            return register(roleInputName, {
              value: field.role
            }), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react95.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center space-x-0.5 md:space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-7/12 md:w-8/12",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      "data-cy": "invite-email-input",
                      name: emailControl.name,
                      onChange: (event) => {
                        emailControl.onChange(event);
                      },
                      onBlur: (event) => {
                        emailControl.onBlur(event);
                      },
                      innerRef: emailControl.ref,
                      placeholder: "member@email.com",
                      type: "email",
                      required: !0
                    }, void 0, !1, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 101,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-4/12 md:w-3/12",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MembershipRoleSelector_default, {
                      value: field.role,
                      onChange: (role) => {
                        setValue(roleInputName, role);
                      }
                    }, void 0, !1, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 118,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 117,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: fields.length > 1,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-1/12",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, {
                        className: "flex justify-center",
                        content: t2("removeInviteButtonLabel"),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
                          "data-cy": "remove-invite-button",
                          label: t2("removeInviteButtonLabel"),
                          onClick: () => {
                            remove(index), clearErrors(emailInputName);
                          },
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_XMarkIcon3.default, {
                            className: "h-4 lg:h-5"
                          }, void 0, !1, {
                            fileName: "app/components/organizations/InviteMembersForm.tsx",
                            lineNumber: 140,
                            columnNumber: 25
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/organizations/InviteMembersForm.tsx",
                          lineNumber: 132,
                          columnNumber: 23
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/organizations/InviteMembersForm.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 127,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 99,
                columnNumber: 15
              }, this)
            }, field.id, !1, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 98,
              columnNumber: 13
            }, this);
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              "data-cy": "append-new-invite-button",
              type: "button",
              color: "transparent",
              size: "small",
              disabled: loading,
              onClick: () => append(memberFactory()),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_PlusCircleIcon.default, {
                    className: "h-5"
                  }, void 0, !1, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 160,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next37.Trans, {
                      i18nKey: "organization:addAnotherMemberButtonLabel"
                    }, void 0, !1, {
                      fileName: "app/components/organizations/InviteMembersForm.tsx",
                      lineNumber: 163,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/organizations/InviteMembersForm.tsx",
                    lineNumber: 162,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 159,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 151,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/organizations/InviteMembersForm.tsx",
            lineNumber: 150,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/organizations/InviteMembersForm.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          className: "w-full lg:w-auto",
          "data-cy": "send-invites-button",
          type: "submit",
          loading,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: !loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next37.Trans, {
                i18nKey: "organization:inviteMembersSubmitLabel"
              }, void 0, !1, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 178,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 177,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: loading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next37.Trans, {
                i18nKey: "organization:inviteMembersLoading"
              }, void 0, !1, {
                fileName: "app/components/organizations/InviteMembersForm.tsx",
                lineNumber: 182,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/InviteMembersForm.tsx",
              lineNumber: 181,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/organizations/InviteMembersForm.tsx",
          lineNumber: 171,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/organizations/InviteMembersForm.tsx",
        lineNumber: 170,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/organizations/InviteMembersForm.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
};
function memberFactory() {
  return {
    email: "",
    role: membership_role_default.Member
  };
}
function useInviteMembersForm() {
  return (0, import_react_hook_form5.useForm)({
    defaultValues: {
      members: [memberFactory()]
    },
    shouldUseNativeValidation: !0,
    shouldFocusError: !0,
    shouldUnregister: !0
  });
}
function getFormValidator(members) {
  return function(value, index) {
    let valueIndex = members.map((member) => member.email).indexOf(value);
    return valueIndex >= 0 && valueIndex !== index;
  };
}
var InviteMembersForm_default = InviteMembersForm;

// app/routes/__app/settings/organization/members/invite.tsx
init_Button();
init_membership_role();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta8 = () => ({
  title: "Invite Members"
});
async function action7(props) {
  let req = props.request;
  await with_csrf_default(req), await with_methods_guard_default(req, ["POST"]);
  let session = await parseSessionIdCookie(req), organizationId = await parseOrganizationIdCookie(req), user = await getLoggedInUser(session), json11 = await req.json(), result = await getInviteMembersBodySchema().safeParseAsync(json11);
  if (!result.success)
    return throwBadRequestException();
  let params = {
    invites: result.data,
    organizationId,
    inviterId: user.uid
  };
  try {
    return await inviteMembers(params), (0, import_node10.redirect)("/settings/organization/members");
  } catch {
    return throwInternalServerErrorException();
  }
}
var OrganizationMembersInvitePage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
      heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next38.Trans, {
        i18nKey: "organization:inviteMembersPageHeading"
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/organization/members/invite.tsx",
        lineNumber: 67,
        columnNumber: 18
      }, this),
      subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next38.Trans, {
        i18nKey: "organization:inviteMembersPageSubheading"
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/organization/members/invite.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InviteMembersForm_default, {}, void 0, !1, {
        fileName: "app/routes/__app/settings/organization/members/invite.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/organization/members/invite.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mt-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoBackToMembersButton, {}, void 0, !1, {
        fileName: "app/routes/__app/settings/organization/members/invite.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/organization/members/invite.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/routes/__app/settings/organization/members/invite.tsx",
  lineNumber: 65,
  columnNumber: 5
}, this), invite_default2 = OrganizationMembersInvitePage;
function GoBackToMembersButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    size: "small",
    color: "transparent",
    href: "/settings/organization/members",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex items-center space-x-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ArrowLeftIcon.default, {
          className: "h-3"
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next38.Trans, {
            i18nKey: "organization:goBackToMembersPage"
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/organization/members/invite.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/organization/members/invite.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/settings/organization/members/invite.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/organization/members/invite.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function getInviteMembersBodySchema() {
  return import_zod6.z.array(
    import_zod6.z.object({
      role: import_zod6.z.nativeEnum(membership_role_default),
      email: import_zod6.z.string().email()
    })
  );
}

// app/routes/__app/settings/organization/members/index.tsx
var members_exports = {};
__export(members_exports, {
  default: () => members_default,
  loader: () => loader5,
  meta: () => meta9
});
var import_react103 = require("react"), import_node11 = require("@remix-run/node"), import_react104 = require("@remix-run/react"), import_outline18 = require("@heroicons/react/24/outline"), import_react_i18next47 = require("react-i18next");
init_Button();
init_If();
init_use_current_organization();

// app/lib/organizations/hooks/use-user-can-invite-users.ts
init_permissions();
init_use_current_user_role();
function useUserCanInviteUsers() {
  let role = useCurrentUserRole();
  return role !== void 0 && canInviteUsers(role);
}

// app/routes/__app/settings/organization/members/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), OrganizationMembersList2 = (0, import_react103.lazy)(
  () => Promise.resolve().then(() => (init_OrganizationMembersList(), OrganizationMembersList_exports))
), OrganizationInvitedMembersList2 = (0, import_react103.lazy)(
  () => Promise.resolve().then(() => (init_OrganizationInvitedMembersList(), OrganizationInvitedMembersList_exports))
), meta9 = () => ({
  title: "Members"
}), loader5 = async ({ request }) => {
  await initializeFirebaseAdminApp();
  let organizationId = await parseOrganizationIdCookie(request);
  if (!organizationId)
    return (0, import_node11.redirect)(configuration_default.paths.appHome);
  let session = await parseSessionIdCookie(request), user = await getLoggedInUser(session), members = await getOrganizationMembers({
    organizationId,
    userId: user.uid
  });
  return (0, import_node11.json)(members);
}, OrganizationMembersPage = () => {
  let members = (0, import_react104.useLoaderData)(), canInviteUsers2 = useUserCanInviteUsers(), organization = useCurrentOrganization(), organizationId = organization == null ? void 0 : organization.id;
  return useReloadMembersOnOrganizationChanged(), organizationId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4 flex justify-end",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: canInviteUsers2,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InviteMembersButton, {}, void 0, !1, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 76,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/organization/members/index.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/organization/members/index.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-1 flex-col space-y-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
            heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next47.Trans, {
              i18nKey: "organization:membersTabLabel"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 82,
              columnNumber: 20
            }, this),
            subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next47.Trans, {
              i18nKey: "organization:membersTabSubheading"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 83,
              columnNumber: 23
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationMembersList2, {
                membersMetadata: members,
                organizationId
              }, void 0, !1, {
                fileName: "app/routes/__app/settings/organization/members/index.tsx",
                lineNumber: 86,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
            heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next47.Trans, {
              i18nKey: "organization:pendingInvitesHeading"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 94,
              columnNumber: 20
            }, this),
            subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next47.Trans, {
              i18nKey: "organization:pendingInvitesSubheading"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrganizationInvitedMembersList2, {
                organizationId
              }, void 0, !1, {
                fileName: "app/routes/__app/settings/organization/members/index.tsx",
                lineNumber: 100,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/organization/members/index.tsx",
              lineNumber: 99,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/settings/organization/members/index.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/settings/organization/members/index.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this) : null;
}, members_default = OrganizationMembersPage;
function useReloadMembersOnOrganizationChanged() {
  let navigate = (0, import_react104.useNavigate)(), organization = useCurrentOrganization(), organizationId = organization == null ? void 0 : organization.id, oldOrganizationId = (0, import_react103.useRef)(organizationId);
  (0, import_react103.useEffect)(() => {
    organizationId !== oldOrganizationId.current && navigate(".", { replace: !0 });
  }, [navigate, organizationId]);
}
function InviteMembersButton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    className: "w-full lg:w-auto",
    "data-cy": "invite-form-link",
    type: "button",
    href: "/settings/organization/members/invite",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex items-center space-x-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline18.UserPlusIcon, {
          className: "h-5"
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/organization/members/index.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next47.Trans, {
            i18nKey: "organization:inviteMembersButtonLabel"
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/organization/members/index.tsx",
            lineNumber: 135,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/organization/members/index.tsx",
          lineNumber: 134,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/settings/organization/members/index.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/organization/members/index.tsx",
    lineNumber: 125,
    columnNumber: 5
  }, this);
}

// app/routes/__app/settings/organization/members/owner.ts
var owner_exports = {};
__export(owner_exports, {
  action: () => action8
});
var import_node12 = require("@remix-run/node"), import_zod7 = require("zod");
init_queries();
init_membership_role();
async function action8(args) {
  let req = args.request;
  await with_csrf_default(req), await with_methods_guard_default(req, ["PUT"]);
  let body = await req.json(), logger2 = logger_default(), organizationId = await parseOrganizationIdCookie(req), sessionId = await parseSessionIdCookie(req), user = await getLoggedInUser(sessionId), { userId: targetUserId } = getBodySchema5().parse(body), currentUserId = user.uid, organizationRef = await getOrganizationById(organizationId), organization = organizationRef.data();
  if (logger2.info(
    {
      organizationId,
      currentUserId,
      targetUserId
    },
    "Transferring Ownership"
  ), !organizationRef.exists || !organization)
    return throwNotFoundException("Organization was not found");
  let members = organization.members, currentUserMembership = members[currentUserId];
  if (!members[targetUserId])
    return throwNotFoundException("Target member was not found");
  if (!currentUserMembership)
    return throwNotFoundException("Current member was not found");
  if (currentUserMembership.role !== membership_role_default.Owner)
    return throwForbiddenException("Current member is not the Owner");
  let updateData = {
    [`members.${currentUserId}.role`]: membership_role_default.Admin,
    [`members.${targetUserId}.role`]: membership_role_default.Owner
  };
  return await organizationRef.ref.update(updateData), logger2.info(
    {
      organizationId,
      currentUserId,
      targetUserId
    },
    "Ownership successfully transferred to target user"
  ), (0, import_node12.json)({ success: !0 });
}
function getBodySchema5() {
  return import_zod7.z.object({
    userId: import_zod7.z.string().min(1)
  });
}

// app/routes/__app/settings/organization/index.tsx
var organization_exports2 = {};
__export(organization_exports2, {
  default: () => organization_default3,
  meta: () => meta10
});
var import_react_i18next49 = require("react-i18next");

// app/core/firebase/components/FirebaseStorageProvider.tsx
var import_reactfire26 = require("reactfire");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FirebaseStorageProvider({
  children,
  useEmulator
}) {
  let emulator = useEmulator ?? firebase_config_default.emulator, { data: sdk, status } = (0, import_reactfire26.useInitStorage)(async (app) => {
    let bucketUrl = firebase_config_default.storageBucket, { getStorage } = await import("firebase/storage"), storage = getStorage(app, bucketUrl);
    return emulator && await connectToEmulator(storage), storage;
  });
  return status === "loading" ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactfire26.StorageProvider, {
    sdk,
    children
  }, void 0, !1, {
    fileName: "app/core/firebase/components/FirebaseStorageProvider.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
async function connectToEmulator(storage) {
  let { connectStorageEmulator } = await import("firebase/storage"), port = 9199, emulatorHost = configuration_default.emulatorHost ?? "localhost";
  connectStorageEmulator(storage, emulatorHost, port);
}

// app/components/organizations/UpdateOrganizationForm.tsx
var import_react107 = require("react"), import_react_hot_toast13 = __toESM(require("react-hot-toast")), import_reactfire28 = require("reactfire"), import_react_i18next48 = require("react-i18next"), import_react_hook_form6 = require("react-hook-form"), import_storage = require("firebase/storage");
init_organization();

// app/lib/organizations/hooks/use-update-organization.ts
var import_firestore15 = require("firebase/firestore"), import_reactfire27 = require("reactfire"), import_react105 = require("react");
init_use_request_state();
init_firestore_collections();
function useUpdateOrganization() {
  let { state, setError, setData, setLoading } = useRequestState(), firestore = (0, import_reactfire27.useFirestore)();
  return [(0, import_react105.useCallback)(
    async (organization) => {
      setLoading(!0);
      try {
        let ref3 = (0, import_firestore15.doc)(firestore, ORGANIZATIONS_COLLECTION, organization.id);
        await (0, import_firestore15.updateDoc)(ref3, organization), setData(organization);
      } catch (e) {
        setError(e.message);
      }
    },
    [firestore, setData, setError, setLoading]
  ), state];
}

// app/components/organizations/UpdateOrganizationForm.tsx
init_Button();

// app/core/ui/ImageUploadInput.tsx
var import_react106 = require("react"), import_outline19 = require("@heroicons/react/24/outline");
init_Label();
init_If();
init_IconButton();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), IMAGE_SIZE = 22, ImageUploadInput = ({
  children,
  image,
  onClear,
  innerRef,
  ...props
}) => {
  let propValue = image ?? null, [value, setValue] = (0, import_react106.useState)(propValue), [fileName, setFileName] = (0, import_react106.useState)(""), ref3 = (0, import_react106.useRef)(), onInput = (e) => {
    e.preventDefault();
    let files = e.currentTarget.files;
    if (files != null && files.length) {
      let file = files[0], data = URL.createObjectURL(file);
      setValue(data), setFileName(file.name);
    }
    props.onInput && props.onInput(e);
  }, imageRemoved = (e) => {
    e.preventDefault(), setValue(""), setFileName(""), ref3.current && (ref3.current.value = ""), onClear && onClear();
  };
  return (0, import_react106.useEffect)(() => {
    setValue(propValue);
  }, [propValue]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "ImageUploadInput",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        ...props,
        ref: (inputRef) => {
          ref3.current = inputRef ?? void 0, innerRef && innerRef(inputRef);
        },
        className: "hidden",
        type: "file",
        onInput,
        accept: "image/*"
      }, void 0, !1, {
        fileName: "app/core/ui/ImageUploadInput.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center space-x-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: !value,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline19.CloudArrowUpIcon, {
                  className: "h-5 text-gray-500 dark:text-black-100"
                }, void 0, !1, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 87,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: value,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  loading: "lazy",
                  style: {
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE
                  },
                  className: "object-contain",
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  src: value,
                  alt: props.alt ?? ""
                }, void 0, !1, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 93,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 92,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: !value,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-auto",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
                as: "span",
                className: "cursor-pointer text-xs",
                children
              }, void 0, !1, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 110,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/ImageUploadInput.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: value,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-auto",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: fileName,
                fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
                  as: "span",
                  className: "cursor-pointer text-xs ellipsify",
                  children
                }, void 0, !1, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                }, this),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
                  as: "span",
                  className: "text-xs ellipsify",
                  children: fileName
                }, void 0, !1, {
                  fileName: "app/core/ui/ImageUploadInput.tsx",
                  lineNumber: 129,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 118,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/ImageUploadInput.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 116,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: value,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton_default, {
              onClick: imageRemoved,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline19.XMarkIcon, {
                className: "h-3 w-3"
              }, void 0, !1, {
                fileName: "app/core/ui/ImageUploadInput.tsx",
                lineNumber: 138,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/core/ui/ImageUploadInput.tsx",
              lineNumber: 137,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/core/ui/ImageUploadInput.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/core/ui/ImageUploadInput.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/core/ui/ImageUploadInput.tsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}, ImageUploadInput_default = ImageUploadInput;

// app/components/organizations/UpdateOrganizationForm.tsx
init_Label();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), UpdateOrganizationForm = () => {
  let storage = (0, import_reactfire28.useStorage)(), { organization, setOrganization } = (0, import_react107.useContext)(organization_default), [updateOrganization, { loading }] = useUpdateOrganization(), [logoIsDirty, setLogoIsDirty] = (0, import_react107.useState)(!1), { t: t2 } = (0, import_react_i18next48.useTranslation)("organization"), currentOrganizationName = (organization == null ? void 0 : organization.name) ?? "", currentLogoUrl = (organization == null ? void 0 : organization.logoURL) || null, { register, handleSubmit, reset } = (0, import_react_hook_form6.useForm)({
    defaultValues: {
      name: currentOrganizationName,
      logoURL: currentLogoUrl
    }
  }), onLogoCleared = (0, import_react107.useCallback)(() => {
    setLogoIsDirty(!0);
  }, []), onSubmit = (0, import_react107.useCallback)(
    async (organizationName, logoFile) => {
      let organizationId = organization == null ? void 0 : organization.id;
      if (!organizationId) {
        let errorMessage = t2("updateOrganizationErrorMessage");
        return import_react_hot_toast13.default.error(errorMessage);
      }
      let logoName = logoFile == null ? void 0 : logoFile.name, logoURL = logoName ? await uploadLogo({
        logo: logoFile,
        storage,
        organizationId
      }).catch(() => {
        let errorMessage = t2("updateLogoErrorMessage");
        import_react_hot_toast13.default.error(errorMessage);
      }) : currentLogoUrl, isLogoRemoved = logoIsDirty && !logoName;
      if (isLogoRemoved && currentLogoUrl)
        try {
          await (0, import_storage.deleteObject)((0, import_storage.ref)(storage, currentLogoUrl));
        } catch {
        }
      let organizationData = {
        id: organization.id,
        name: organizationName,
        logoURL: isLogoRemoved ? null : logoURL
      }, promise = updateOrganization(organizationData).then(() => {
        setOrganization({
          ...organization,
          ...organizationData
        });
      });
      await import_react_hot_toast13.default.promise(promise, {
        loading: t2("updateOrganizationLoadingMessage"),
        success: t2("updateOrganizationSuccessMessage"),
        error: t2("updateOrganizationErrorMessage")
      });
    },
    [
      logoIsDirty,
      currentLogoUrl,
      organization,
      setOrganization,
      storage,
      t2,
      updateOrganization
    ]
  );
  (0, import_react107.useEffect)(() => {
    reset({
      name: organization == null ? void 0 : organization.name,
      logoURL: organization == null ? void 0 : organization.logoURL
    });
  }, [organization, reset]);
  let nameControl = register("name", {
    required: !0
  }), logoControl = register("logoURL");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit: handleSubmit((value) => onSubmit(value.name, getLogoFile(value.logoURL))),
    className: "space-y-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next48.Trans, {
                i18nKey: "organization:organizationNameInputLabel"
              }, void 0, !1, {
                fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
                lineNumber: 135,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                "data-cy": "organization-name-input",
                required: !0,
                name: nameControl.name,
                innerRef: nameControl.ref,
                onChange: nameControl.onChange,
                onBlur: nameControl.onBlur,
                placeholder: "ex. IndieCorp"
              }, void 0, !1, {
                fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
                lineNumber: 137,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
            lineNumber: 134,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
          lineNumber: 133,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label_default, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next48.Trans, {
              i18nKey: "organization:organizationLogoInputLabel"
            }, void 0, !1, {
              fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
              lineNumber: 150,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageUploadInput_default, {
              name: logoControl.name,
              onChange: logoControl.onChange,
              onBlur: logoControl.onBlur,
              innerRef: logoControl.ref,
              image: currentLogoUrl,
              onClear: onLogoCleared,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next48.Trans, {
                i18nKey: "common:imageInputLabel"
              }, void 0, !1, {
                fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
                lineNumber: 160,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
              lineNumber: 152,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
          lineNumber: 149,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            className: "w-full md:w-auto",
            "data-cy": "update-organization-submit-button",
            loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next48.Trans, {
              i18nKey: "organization:updateOrganizationSubmitLabel"
            }, void 0, !1, {
              fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
              lineNumber: 170,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
            lineNumber: 165,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
          lineNumber: 164,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/organizations/UpdateOrganizationForm.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
};
async function uploadLogo({
  storage,
  organizationId,
  logo
}) {
  let path = getLogoStoragePath(organizationId, logo.name), bytes = await logo.arrayBuffer(), fileRef = (0, import_storage.ref)(storage, path);
  return await (0, import_storage.uploadBytes)(fileRef, bytes), await (0, import_storage.getDownloadURL)(fileRef);
}
function getLogoStoragePath(organizationId, fileName) {
  return ["/organizations", organizationId, fileName].join("/");
}
function getLogoFile(value) {
  if (!(!value || typeof value == "string"))
    return value.item(0) ?? void 0;
}
var UpdateOrganizationForm_default = UpdateOrganizationForm;

// app/routes/__app/settings/organization/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta10 = () => ({
  title: "Organization Details"
}), OrganizationSettingsPage = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
  heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next49.Trans, {
    i18nKey: "organization:generalTabLabel"
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/organization/index.tsx",
    lineNumber: 17,
    columnNumber: 16
  }, this),
  subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next49.Trans, {
    i18nKey: "organization:generalTabLabelSubheading"
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/organization/index.tsx",
    lineNumber: 18,
    columnNumber: 19
  }, this),
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseStorageProvider, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateOrganizationForm_default, {}, void 0, !1, {
      fileName: "app/routes/__app/settings/organization/index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/organization/index.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/routes/__app/settings/organization/index.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this), organization_default3 = OrganizationSettingsPage;

// app/routes/__app/settings/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => profile_default
});
var import_react109 = require("@remix-run/react");

// app/components/profile/ProfileSettingsTabs.tsx
var import_react108 = require("react"), import_auth9 = require("firebase/auth"), import_reactfire29 = require("reactfire");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links5 = {
  General: {
    path: "/settings/profile",
    label: "profile:generalTab"
  },
  Authentication: {
    path: "/settings/profile/authentication",
    label: "profile:authenticationTab"
  },
  Email: {
    path: "/settings/profile/email",
    label: "profile:emailTab"
  },
  Password: {
    path: "/settings/profile/password",
    label: "profile:passwordTab"
  }
}, ProfileSettingsTabs = () => {
  let { data: user } = (0, import_reactfire29.useUser)(), canEditEmailAndPassword = (0, import_react108.useMemo)(() => {
    let emailProviderId = import_auth9.EmailAuthProvider.PROVIDER_ID;
    return user ? user.providerData.some((item) => item.providerId === emailProviderId) : !1;
  }, [user]), itemClassName = "flex justify-center md:justify-start items-center flex-auto md:flex-initial";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenu_default, {
    vertical: !0,
    secondary: !0,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        end: !0,
        className: itemClassName,
        link: links5.General
      }, void 0, !1, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        className: itemClassName,
        link: links5.Authentication
      }, void 0, !1, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        className: itemClassName,
        disabled: !canEditEmailAndPassword,
        link: links5.Email
      }, void 0, !1, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 52,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationItem_default, {
        className: itemClassName,
        disabled: !canEditEmailAndPassword,
        link: links5.Password
      }, void 0, !1, {
        fileName: "app/components/profile/ProfileSettingsTabs.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/ProfileSettingsTabs.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}, ProfileSettingsTabs_default = ProfileSettingsTabs;

// app/routes/__app/settings/profile.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProfileSettingsLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileSettingsTabs_default, {}, void 0, !1, {
          fileName: "app/routes/__app/settings/profile.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsContentContainer_default, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react109.Outlet, {}, void 0, !1, {
          fileName: "app/routes/__app/settings/profile.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/settings/profile.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var profile_default = ProfileSettingsLayout;

// app/routes/__app/settings/profile/authentication.tsx
var authentication_exports = {};
__export(authentication_exports, {
  default: () => authentication_default,
  meta: () => meta11
});
var import_react120 = require("react"), import_react_i18next60 = require("react-i18next");

// app/components/profile/accounts/ConnectedAccountsContainer.tsx
var import_react112 = require("react"), import_react_hot_toast15 = __toESM(require("react-hot-toast")), import_reactfire31 = require("reactfire"), import_auth11 = require("firebase/auth"), import_react_i18next52 = require("react-i18next"), import_outline20 = require("@heroicons/react/24/outline");
init_Button();
init_If();
init_Modal();
init_Heading();

// app/components/profile/accounts/LinkPhoneNumberModal.tsx
var import_react_i18next50 = require("react-i18next");
init_Modal();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function LinkPhoneNumberModal({
  isOpen,
  setIsOpen,
  onSuccess
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next50.Trans, {
      i18nKey: "profile:linkPhoneNumber"
    }, void 0, !1, {
      fileName: "app/components/profile/accounts/LinkPhoneNumberModal.tsx",
      lineNumber: 16,
      columnNumber: 16
    }, this),
    isOpen,
    setIsOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberCredentialForm_default, {
      action: "link",
      onSuccess: (credential) => {
        if (onSuccess) {
          let phoneNumber = credential.user.phoneNumber;
          phoneNumber && onSuccess(phoneNumber);
        }
        setIsOpen(!1);
      }
    }, void 0, !1, {
      fileName: "app/components/profile/accounts/LinkPhoneNumberModal.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/profile/accounts/LinkPhoneNumberModal.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var LinkPhoneNumberModal_default = LinkPhoneNumberModal;

// app/components/profile/accounts/LinkEmailPasswordModal.tsx
var import_reactfire30 = require("reactfire"), import_react111 = require("react"), import_auth10 = require("firebase/auth"), import_react_hook_form7 = require("react-hook-form"), import_react_hot_toast14 = __toESM(require("react-hot-toast")), import_react_i18next51 = require("react-i18next");

// app/core/hooks/use-create-server-side-session.ts
var import_react110 = require("react");

// app/core/hooks/use-create-session.ts
init_use_api();
function useCreateSession() {
  return useApiRequest("/auth/session", "POST");
}

// app/core/hooks/use-create-server-side-session.ts
function useCreateServerSideSession() {
  let [signIn, signInState] = useCreateSession();
  return [(0, import_react110.useCallback)(
    async (user, forceRefresh = !0) => {
      let idToken = await user.getIdToken(forceRefresh);
      return signIn({ idToken });
    },
    [signIn]
  ), signInState];
}
var use_create_server_side_session_default = useCreateServerSideSession;

// app/components/profile/accounts/LinkEmailPasswordModal.tsx
init_use_request_state();
init_Modal();
init_If();
init_Button();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function LinkEmailPasswordModal({
  isOpen,
  setIsOpen
}) {
  var _a, _b;
  let { t: t2 } = (0, import_react_i18next51.useTranslation)(), { state, setLoading, setError, resetState } = useRequestState(), auth = (0, import_reactfire30.useAuth)(), [sessionRequest] = use_create_server_side_session_default(), [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react111.useState)(), user = auth.currentUser, { register, handleSubmit, watch, reset, formState } = (0, import_react_hook_form7.useForm)({
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  }), errors = formState.errors, emailControl = register("email", { required: !0 }), passwordControl = register("password", {
    required: !0,
    minLength: {
      value: 6,
      message: t2("auth:passwordLengthError")
    }
  }), passwordValue = watch("password"), repeatPasswordControl = register("repeatPassword", {
    required: !0,
    minLength: {
      value: 6,
      message: t2("auth:passwordLengthError")
    },
    validate: (value) => value !== passwordValue ? t2("auth:passwordsDoNotMatch") : !0
  }), onSubmit = (0, import_react111.useCallback)(
    async (params) => {
      if (state.loading || !user)
        return;
      setLoading(!0);
      let authCredential = import_auth10.EmailAuthProvider.credential(
        params.email,
        params.password
      ), promise = new Promise((resolve3, reject) => (0, import_auth10.linkWithCredential)(user, authCredential).then(async () => {
        let newCredential = await (0, import_auth10.signInWithCredential)(
          auth,
          authCredential
        );
        await sessionRequest(newCredential.user), resolve3();
      }).catch((error) => {
        if (isMultiFactorError(error))
          setMultiFactorAuthError(error), setIsOpen(!1), import_react_hot_toast14.default.dismiss();
        else
          return setError(error), reject();
      }));
      await import_react_hot_toast14.default.promise(promise, {
        success: t2("profile:linkActionSuccess"),
        error: t2("profile:linkActionError"),
        loading: t2("profile:linkActionLoading")
      }), resetState(), setIsOpen(!1), reset();
    },
    [
      state.loading,
      setLoading,
      t2,
      resetState,
      setIsOpen,
      reset,
      user,
      auth,
      sessionRequest,
      setError
    ]
  );
  return (0, import_react111.useEffect)(() => (isOpen || reset(), () => {
    reset();
  }), [reset, isOpen]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: "Link Password",
        isOpen,
        setIsOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          className: "w-full",
          onSubmit: handleSubmit(onSubmit),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex-col space-y-2.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next51.Trans, {
                      i18nKey: "common:emailAddress"
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 163,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      "data-cy": "email-input",
                      required: !0,
                      type: "email",
                      placeholder: "your@email.com",
                      innerRef: emailControl.ref,
                      onBlur: emailControl.onBlur,
                      onChange: emailControl.onChange,
                      name: emailControl.name
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 165,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 162,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 161,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next51.Trans, {
                      i18nKey: "common:password"
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 180,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      "data-cy": "password-input",
                      required: !0,
                      type: "password",
                      placeholder: "",
                      innerRef: passwordControl.ref,
                      onBlur: passwordControl.onBlur,
                      onChange: passwordControl.onChange,
                      name: passwordControl.name
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 182,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next51.Trans, {
                        i18nKey: "auth:passwordHint"
                      }, void 0, !1, {
                        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                        lineNumber: 194,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 193,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                      error: (_a = errors.password) == null ? void 0 : _a.message
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 197,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 179,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 178,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next51.Trans, {
                        i18nKey: "auth:repeatPassword"
                      }, void 0, !1, {
                        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                        "data-cy": "repeat-password-input",
                        required: !0,
                        type: "password",
                        placeholder: "",
                        innerRef: repeatPasswordControl.ref,
                        onBlur: repeatPasswordControl.onBlur,
                        onChange: repeatPasswordControl.onChange,
                        name: repeatPasswordControl.name
                      }, void 0, !1, {
                        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                        lineNumber: 205,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                    lineNumber: 202,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                    error: (_b = errors.repeatPassword) == null ? void 0 : _b.message
                  }, void 0, !1, {
                    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                    lineNumber: 217,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 201,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: state.error,
                children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                  error: getFirebaseErrorCode(error)
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 222,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 220,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                  size: "large",
                  "data-cy": "auth-submit-button",
                  className: "w-full",
                  color: "primary",
                  type: "submit",
                  loading: state.loading,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                    condition: state.loading,
                    fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next51.Trans, {
                      i18nKey: "profile:linkAccount"
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 237,
                      columnNumber: 29
                    }, this),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next51.Trans, {
                      i18nKey: "profile:linkActionLoading"
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                      lineNumber: 239,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                    lineNumber: 235,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                  lineNumber: 227,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
                lineNumber: 226,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
            lineNumber: 160,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
          lineNumber: 159,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
        lineNumber: 158,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: !0,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async (credential) => {
            await sessionRequest(credential.user), setMultiFactorAuthError(void 0), reset(), resetState();
          }
        }, void 0, !1, {
          fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
          lineNumber: 249,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
        lineNumber: 247,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/accounts/LinkEmailPasswordModal.tsx",
    lineNumber: 157,
    columnNumber: 5
  }, this);
}
var LinkEmailPasswordModal_default = LinkEmailPasswordModal;

// app/core/firebase/utils/get-firebase-auth-provider-id.ts
var cache = /* @__PURE__ */ new WeakMap();
function getFirebaseAuthProviderId(AuthProviderClass) {
  if (cache.has(AuthProviderClass))
    return cache.get(AuthProviderClass);
  if ("PROVIDER_ID" in AuthProviderClass) {
    let id2 = AuthProviderClass.PROVIDER_ID;
    return cache.set(AuthProviderClass, id2), id2;
  }
  let id = new AuthProviderClass().providerId;
  return cache.set(AuthProviderClass, id), id;
}
var get_firebase_auth_provider_id_default = getFirebaseAuthProviderId;

// app/components/profile/accounts/ConnectedAccountsContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ConnectedAccountsContainer = () => {
  let { data: user } = (0, import_reactfire31.useUser)(), { t: t2 } = (0, import_react_i18next52.useTranslation)(), supportedProviders = useSupportedAuthProviders(), [linkWithPhoneNumber, setLinkWithPhoneNumber] = (0, import_react112.useState)(!1), [linkWithPassword, setLinkWithPassword] = (0, import_react112.useState)(!1), [displayUnlinkConfirmationModal, setDisplayUnlinkConfirmationModal] = (0, import_react112.useState)(!1), [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react112.useState)(), selectedUnlinkProvider = (0, import_react112.useRef)(), providerData = (0, import_react112.useMemo)(
    () => (user == null ? void 0 : user.providerData) ?? [],
    [user == null ? void 0 : user.providerData]
  ), [providers, setProviders] = (0, import_react112.useState)(providerData), canUnlink = providers.length > 1, onUnlinkRequested = (0, import_react112.useCallback)(
    async (providerId) => {
      if (!user || user.providerData.length < 2)
        return;
      let promise = (0, import_auth11.unlink)(user, providerId);
      await import_react_hot_toast15.default.promise(promise, {
        success: t2("profile:unlinkActionSuccess"),
        loading: t2("profile:unlinkActionLoading"),
        error: t2("profile:unlinkActionError")
      }), setProviders(
        (providers2) => providers2.filter((provider) => provider.providerId !== providerId)
      );
    },
    [user, t2]
  ), onLinkSuccess = (0, import_react112.useCallback)(() => {
    let message = t2("profile:linkActionSuccess");
    return import_react_hot_toast15.default.success(message);
  }, [t2]), onLinkError = (0, import_react112.useCallback)(
    (error) => {
      let message = t2(error ? `auth:errors.${error}` : "profile:linkActionError");
      import_react_hot_toast15.default.error(message);
    },
    [t2]
  ), connectedProviders = (0, import_react112.useMemo)(() => supportedProviders.filter((supportedProvider) => providers.some(
    (connectedProvider) => connectedProvider.providerId === get_firebase_auth_provider_id_default(supportedProvider)
  )), [providers, supportedProviders]), notConnectedProviders = (0, import_react112.useMemo)(() => supportedProviders.filter((supportedProvider) => !connectedProviders.includes(supportedProvider)), [connectedProviders, supportedProviders]), linkPopupAuthProvider = (0, import_react112.useCallback)(
    async (AuthProviderClass) => {
      if (!user)
        return null;
      try {
        let authCredential = await (0, import_auth11.linkWithPopup)(
          user,
          new AuthProviderClass(),
          import_auth11.browserPopupRedirectResolver
        );
        return AuthProviderClass.credentialFromResult(authCredential) ? onLinkSuccess() : onLinkError();
      } catch (error) {
        isMultiFactorError(error) ? setMultiFactorAuthError(error) : onLinkError(getFirebaseErrorCode(error));
      }
    },
    [onLinkError, onLinkSuccess, user]
  ), onLinkRequested = (0, import_react112.useCallback)(
    async (provider) => {
      if (!user)
        return null;
      switch (get_firebase_auth_provider_id_default(provider)) {
        case import_auth11.EmailAuthProvider.PROVIDER_ID:
          return setLinkWithPassword(!0);
        case import_auth11.PhoneAuthProvider.PROVIDER_ID:
          return setLinkWithPhoneNumber(!0);
        default:
          return linkPopupAuthProvider(provider);
      }
    },
    [linkPopupAuthProvider, user]
  );
  return (0, import_react112.useEffect)(() => {
    setProviders(providerData);
  }, [providerData]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mb-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                type: 4,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
                  i18nKey: "profile:connectedAccounts"
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 187,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 186,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "text-gray-500 dark:text-gray-400",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
                    i18nKey: "profile:connectedAccountsSubheading"
                  }, void 0, !1, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 192,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 191,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 190,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 185,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-4 flex flex-col divide-y divide-gray-50 dark:divide-black-400",
            children: connectedProviders.map((provider, index) => {
              let providerId = get_firebase_auth_provider_id_default(provider);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react112.Fragment, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnlinkAuthProviderButton, {
                  canUnlink,
                  providerId,
                  onUnlink: () => {
                    !canUnlink || (selectedUnlinkProvider.current = providerId, setDisplayUnlinkConfirmationModal(!0));
                  }
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 207,
                  columnNumber: 17
                }, this)
              }, index, !1, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 206,
                columnNumber: 15
              }, this);
            })
          }, void 0, !1, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 197,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 184,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: notConnectedProviders.length,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mb-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
                  type: 4,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
                    i18nKey: "profile:availableProviders"
                  }, void 0, !1, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 229,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 228,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "text-gray-500 dark:text-gray-400",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
                      i18nKey: "profile:availableProvidersSubheading"
                    }, void 0, !1, {
                      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                      lineNumber: 234,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 233,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 232,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 227,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col space-y-1.5",
              children: notConnectedProviders.map((provider, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConnectAuthProviderButton, {
                  provider,
                  onLink: () => onLinkRequested(provider)
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 243,
                  columnNumber: 19
                }, this)
              }, index, !1, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 242,
                columnNumber: 17
              }, this))
            }, void 0, !1, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 239,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 226,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 225,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: !0,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async () => {
          }
        }, void 0, !1, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 254,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: linkWithPassword,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkEmailPasswordModal_default, {
          isOpen: !0,
          setIsOpen: setLinkWithPassword
        }, void 0, !1, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 268,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 267,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: linkWithPhoneNumber,
        children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkPhoneNumberModal_default, {
          isOpen: !0,
          setIsOpen: setLinkWithPhoneNumber
        }, void 0, !1, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 273,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 271,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConfirmUnlinkAccountModal, {
        isOpen: displayUnlinkConfirmationModal,
        setIsOpen: (isOpen) => {
          isOpen || (selectedUnlinkProvider.current = void 0), setDisplayUnlinkConfirmationModal(isOpen);
        },
        onUnlink: async () => {
          selectedUnlinkProvider.current && (await onUnlinkRequested(selectedUnlinkProvider.current), setDisplayUnlinkConfirmationModal(!1));
        }
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 280,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
};
function ConnectAuthProviderButton({
  onLink,
  provider
}) {
  let providerId = get_firebase_auth_provider_id_default(provider), providerName = capitalize(providerId);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "max-w-md",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderButton_default, {
      "data-cy": "link-provider-button",
      "data-provider": providerId,
      providerId,
      onClick: onLink,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
        i18nKey: "profile:connectWithProvider",
        values: { provider: providerName }
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 319,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 312,
    columnNumber: 5
  }, this);
}
function UnlinkAuthProviderButton({
  providerId,
  canUnlink,
  onUnlink
}) {
  let provider = capitalize(providerId);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex items-center justify-between py-1",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex items-center space-x-6",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex items-center space-x-4 font-medium",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProviderLogo_default, {
              firebaseProviderId: providerId
            }, void 0, !1, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 343,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "flex items-center space-x-2 text-sm font-semibold text-green-600 dark:text-green-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
                    i18nKey: "profile:connectedWithProvider",
                    values: { provider }
                  }, void 0, !1, {
                    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                    lineNumber: 352,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 351,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline20.CheckCircleIcon, {
                  className: "h-5"
                }, void 0, !1, {
                  fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                  lineNumber: 358,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 345,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 342,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 341,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: canUnlink,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          "data-cy": "unlink-provider-button",
          "data-provider": providerId,
          className: "font-medium",
          color: "danger",
          variant: "flat",
          onClick: onUnlink,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
              i18nKey: "profile:unlinkActionLabel"
            }, void 0, !1, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 373,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 372,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 364,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
        lineNumber: 363,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 340,
    columnNumber: 5
  }, this);
}
function ConfirmUnlinkAccountModal({
  isOpen,
  setIsOpen,
  onUnlink
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
      i18nKey: "profile:unlinkAccountModalHeading"
    }, void 0, !1, {
      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
      lineNumber: 392,
      columnNumber: 16
    }, this),
    isOpen,
    setIsOpen,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
                i18nKey: "profile:confirmUnlink"
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 399,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 398,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
                i18nKey: "common:modalConfirmationQuestion"
              }, void 0, !1, {
                fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
                lineNumber: 403,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
              lineNumber: 402,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 397,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          "data-cy": "confirm-unlink-provider-button",
          block: !0,
          color: "danger",
          onClick: onUnlink,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next52.Trans, {
            i18nKey: "profile:confirmUnlinkSubmitLabel"
          }, void 0, !1, {
            fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
            lineNumber: 413,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
          lineNumber: 407,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
      lineNumber: 396,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/profile/accounts/ConnectedAccountsContainer.tsx",
    lineNumber: 391,
    columnNumber: 5
  }, this);
}
function useSupportedAuthProviders() {
  return (0, import_react112.useMemo)(() => {
    let providers = configuration_default.auth.providers;
    return [
      ...providers.phoneNumber ? [import_auth11.PhoneAuthProvider] : [],
      ...providers.emailPassword ? [import_auth11.EmailAuthProvider] : [],
      ...providers.oAuth ?? []
    ];
  }, []);
}
function capitalize(providerId) {
  return providerId.slice(0, 1).toUpperCase() + providerId.slice(1);
}
var ConnectedAccountsContainer_default = ConnectedAccountsContainer;

// app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx
var import_react_i18next57 = require("react-i18next"), import_outline21 = require("@heroicons/react/24/outline"), import_react117 = require("react"), import_reactfire35 = require("reactfire");
init_Alert();
init_Button();
init_If();

// app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx
var import_react115 = require("react"), import_react_i18next55 = require("react-i18next"), import_reactfire34 = require("reactfire");
init_Modal();
init_If();

// app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx
var import_react113 = require("react"), import_react_i18next53 = require("react-i18next"), import_auth12 = require("firebase/auth"), import_react_hot_toast16 = __toESM(require("react-hot-toast")), import_reactfire32 = require("reactfire");
init_Button();
init_If();
init_use_request_state();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), buttonId2 = "multi-factor-auth-phone-number-button", MultiFactorAuthPhoneNumberForm = ({ onComplete, onReauthenticateError }) => {
  let auth = (0, import_reactfire32.useAuth)(), { t: t2 } = (0, import_react_i18next53.useTranslation)(), requestState = useRequestState(), getRecaptchaVerifier = use_recaptcha_verifier_default(buttonId2), onVerifyPhoneNumber = (0, import_react113.useCallback)(
    async (phoneNumber) => {
      let user = auth.currentUser;
      if (!user || requestState.state.loading)
        return;
      requestState.setLoading(!0);
      let multiFactorSession = await (0, import_auth12.multiFactor)(user).getSession(), phoneInfoOptions = {
        phoneNumber,
        session: multiFactorSession
      }, phoneAuthProvider = new import_auth12.PhoneAuthProvider(auth), recaptchaVerifier = await getRecaptchaVerifier(), promise = phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier).then((verificationId) => (requestState.setData(), onComplete(verificationId), t2("profile:verifyPhoneNumberSuccess"))).catch((error) => {
        if (isNeedsReauthenticationError(error))
          return onReauthenticateError(), t2("auth:auth/requires-recent-login");
        throw requestState.setError(error), error.code;
      });
      await import_react_hot_toast16.default.promise(promise, {
        success: (value) => value,
        error: t2("profile:verifyPhoneNumberError"),
        loading: t2("profile:verifyPhoneNumberLoading")
      });
    },
    [
      auth,
      requestState,
      getRecaptchaVerifier,
      t2,
      onComplete,
      onReauthenticateError
    ]
  ), onSubmit = (0, import_react113.useCallback)(
    async (e) => {
      e.preventDefault();
      let phoneNumber = new FormData(e.currentTarget).get("phoneNumber");
      return onVerifyPhoneNumber(phoneNumber);
    },
    [onVerifyPhoneNumber]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-2.5 text-gray-400 dark:text-gray-400",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next53.Trans, {
          i18nKey: "profile:verifyPhoneNumberDescription"
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next53.Trans, {
                i18nKey: "profile:phoneNumberLabel"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
                lineNumber: 111,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                required: !0,
                pattern: "^\\+?[1-9]\\d{1,14}$",
                name: "phoneNumber",
                type: "tel",
                placeholder: "Ex. +919367788755",
                disabled: requestState.state.loading
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
                lineNumber: 113,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
            lineNumber: 110,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: requestState.state.error,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
              error: getFirebaseErrorCode(requestState.state.error)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
              lineNumber: 124,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            id: buttonId2,
            block: !0,
            type: "submit",
            loading: requestState.state.loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next53.Trans, {
              i18nKey: "profile:verifyPhoneNumberSubmitLabel"
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
              lineNumber: 135,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
            lineNumber: 129,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
        lineNumber: 109,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/mfa/MultiFactorAuthPhoneNumberForm.tsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
};
function isNeedsReauthenticationError(error) {
  return error.code === "auth/requires-recent-login";
}
var MultiFactorAuthPhoneNumberForm_default = MultiFactorAuthPhoneNumberForm;

// app/components/profile/mfa/VerificationCodeForm.tsx
var import_react114 = require("react"), import_react_i18next54 = require("react-i18next"), import_auth13 = require("firebase/auth"), import_react_hot_toast17 = __toESM(require("react-hot-toast")), import_reactfire33 = require("reactfire");
init_Button();
init_use_request_state();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MultiFactorAuthVerificationCodeForm = ({ onComplete, verificationId }) => {
  let auth = (0, import_reactfire33.useAuth)(), { t: t2 } = (0, import_react_i18next54.useTranslation)(), requestState = useRequestState(), user = auth.currentUser, onEnrolRequested = (0, import_react114.useCallback)(
    async (params) => {
      if (!user || requestState.state.loading)
        return;
      requestState.setLoading(!0);
      let { verificationCode, authFactorName } = params, phoneAuthCredential = import_auth13.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      ), multiFactorAssertion = import_auth13.PhoneMultiFactorGenerator.assertion(phoneAuthCredential), displayName = authFactorName ?? null, promise = (0, import_auth13.multiFactor)(user).enroll(multiFactorAssertion, displayName).then(() => {
        onComplete(!0);
      }).catch((error) => {
        throw requestState.setError(error), error.code;
      });
      return await import_react_hot_toast17.default.promise(promise, {
        success: t2("profile:mfaEnabledSuccessTitle"),
        error: t2("profile:verificationCodeError"),
        loading: t2("profile:mfaActivationLoading")
      });
    },
    [verificationId, t2, onComplete, user, requestState]
  ), onSubmit = (0, import_react114.useCallback)(
    (e) => {
      e.preventDefault();
      let data = new FormData(e.currentTarget), verificationCode = data.get("verificationCode"), authFactorName = data.get("authFactorName");
      return onEnrolRequested({ verificationCode, authFactorName });
    },
    [onEnrolRequested]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
    onSubmit,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mb-2.5 text-gray-400 dark:text-gray-400",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next54.Trans, {
          i18nKey: "profile:verifyActivationCodeDescription"
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
          lineNumber: 84,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next54.Trans, {
                i18nKey: "profile:verificationCode"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 89,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                required: !0,
                autoComplete: "off",
                name: "verificationCode"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 90,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
            lineNumber: 88,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next54.Trans, {
                i18nKey: "profile:authFactorName"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 98,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                name: "authFactorName"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 99,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Hint, {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next54.Trans, {
                  i18nKey: "profile:authFactorNameHint"
                }, void 0, !1, {
                  fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                  lineNumber: 101,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
                lineNumber: 100,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            block: !0,
            type: "submit",
            loading: requestState.state.loading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next54.Trans, {
              i18nKey: "profile:verifyActivationCodeSubmitLabel"
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
              lineNumber: 106,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/mfa/VerificationCodeForm.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}, VerificationCodeForm_default = MultiFactorAuthVerificationCodeForm;

// app/components/auth/ReauthenticationForm.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ReauthenticationForm = ({ onSuccess }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
  className: "flex flex-col space-y-4",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
      onSignIn: onSuccess
    }, void 0, !1, {
      fileName: "app/components/auth/ReauthenticationForm.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInContainer_default, {
      onSignIn: onSuccess
    }, void 0, !1, {
      fileName: "app/components/auth/ReauthenticationForm.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/auth/ReauthenticationForm.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this), ReauthenticationForm_default = ReauthenticationForm;

// app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var EnrolMultiFactorAuthContainer = ({ onComplete }) => {
  let auth = (0, import_reactfire34.useAuth)(), [createServerSideSession2] = use_create_server_side_session_default(), [status, setStatus] = (0, import_react115.useState)(1 /* PhoneNumberForm */), verificationIdRef = (0, import_react115.useRef)(), onSuccessfulEnrollment = (0, import_react115.useCallback)(async () => {
    let user = await auth.currentUser;
    user && await createServerSideSession2(user);
  }, [createServerSideSession2, auth]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next55.Trans, {
      i18nKey: "profile:multiFactorAuth"
    }, void 0, !1, {
      fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
      lineNumber: 37,
      columnNumber: 16
    }, this),
    isOpen: !0,
    setIsOpen: () => onComplete(!1),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === 0 /* Reauthenticate */,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "my-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next55.Trans, {
                i18nKey: "auth:reauthenticateDescription"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
                lineNumber: 44,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReauthenticationForm_default, {
            onSuccess: () => setStatus(1 /* PhoneNumberForm */)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === 1 /* PhoneNumberForm */,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthPhoneNumberForm_default, {
          onReauthenticateError: () => {
            setStatus(0 /* Reauthenticate */);
          },
          onComplete: (verificationId) => {
            verificationIdRef.current = verificationId, setStatus(2 /* VerificationCodeForm */);
          }
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
          lineNumber: 54,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: status === 2 /* VerificationCodeForm */,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: verificationIdRef.current,
          children: (verificationId) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerificationCodeForm_default, {
            verificationId,
            onComplete: async (isSuccessful) => {
              isSuccessful && await onSuccessfulEnrollment(), onComplete(isSuccessful);
            }
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/mfa/EnrolMultiFactorAuthContainer.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}, EnrolMultiFactorAuthContainer_default = EnrolMultiFactorAuthContainer;

// app/components/profile/mfa/EmailVerificationAlert.tsx
var import_auth14 = require("firebase/auth"), import_react_i18next56 = require("react-i18next"), import_react116 = require("react"), import_react_hot_toast18 = __toESM(require("react-hot-toast"));
init_use_request_state();
init_Alert();
init_If();
init_Button();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function EmailVerificationAlert(props) {
  let requestState = useRequestState(), { t: t2 } = (0, import_react_i18next56.useTranslation)(), onLinkRequested = (0, import_react116.useCallback)(async () => {
    requestState.setLoading(!0);
    let promise = (0, import_auth14.sendEmailVerification)(props.user).then(() => {
      requestState.setData();
    }).catch((error) => {
      throw requestState.setError(error), getFirebaseErrorCode(error);
    });
    await import_react_hot_toast18.default.promise(promise, {
      loading: t2("profile:sendingEmailVerificationLink"),
      success: t2("profile:sendEmailVerificationLinkSuccess"),
      error: t2("profile:sendEmailVerificationLinkError")
    });
  }, [props, requestState, t2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col space-y-3",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "warn",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next56.Trans, {
                i18nKey: "profile:verifyEmailAlertHeading"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
                lineNumber: 48,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next56.Trans, {
                  i18nKey: "profile:verificationLinkAlertDescription"
                }, void 0, !1, {
                  fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: requestState.state.error,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
            error: getFirebaseErrorCode(requestState.state.error)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: requestState.state.success,
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
            loading: requestState.state.loading,
            onClick: onLinkRequested,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next56.Trans, {
              i18nKey: "profile:sendVerificationLinkSubmitLabel"
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailSentSuccessAlert, {}, void 0, !1, {
            fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function EmailSentSuccessAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "success",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next56.Trans, {
        i18nKey: "profile:sendVerificationLinkSuccessLabel"
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/profile/mfa/EmailVerificationAlert.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
var EmailVerificationAlert_default = EmailVerificationAlert;

// app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), MultiFactorAuthSetupContainer = ({ onComplete }) => {
  let [enableMFAVisible, setEnableMFAVisible] = (0, import_react117.useState)(!1), { data: user, status } = (0, import_reactfire35.useUser)();
  if (!user || status === "loading")
    return null;
  let isEmailVerified = user.emailVerified;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
          type: "info",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next57.Trans, {
                i18nKey: "profile:multiFactorAuthHeading"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
                lineNumber: 30,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next57.Trans, {
                i18nKey: "profile:multiFactorAuthDescription"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: isEmailVerified,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnableMFAButton, {
              onClick: () => setEnableMFAVisible(!0)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: isEmailVerified,
          fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailVerificationAlert_default, {
            user
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 46,
            columnNumber: 21
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: enableMFAVisible,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnrolMultiFactorAuthContainer_default, {
              onComplete: (success) => {
                onComplete(success), setEnableMFAVisible(!1);
              }
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
              lineNumber: 49,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};
function EnableMFAButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    color: "primary",
    onClick: props.onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "flex space-x-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline21.ShieldCheckIcon, {
          className: "h-5"
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next57.Trans, {
            i18nKey: "profile:setupMfaButtonLabel"
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/profile/mfa/MultiFactorAuthSetupContainer.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
var MultiFactorAuthSetupContainer_default = MultiFactorAuthSetupContainer;

// app/components/profile/mfa/DisableMultiFactorButton.tsx
var import_react118 = require("react"), import_react_i18next58 = require("react-i18next"), import_react_hot_toast19 = __toESM(require("react-hot-toast"));
init_Button();
init_Modal();

// app/lib/profile/hooks/use-disable-multi-factor-auth.ts
init_use_api();
function useDisableMultiFactorAuthentication() {
  return useApiRequest("/api/user/mfa/disable", "POST");
}
var use_disable_multi_factor_auth_default = useDisableMultiFactorAuthentication;

// app/components/profile/mfa/DisableMultiFactorButton.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), DisableMultiFactorButton = ({ onDisable }) => {
  let [disableMultiFactorAuthentication, { loading }] = use_disable_multi_factor_auth_default(), [isModalOpen, setIsModalOpen] = (0, import_react118.useState)(!1), { t: t2 } = (0, import_react_i18next58.useTranslation)(), onDisableSubmit = (0, import_react118.useCallback)(async () => {
    let promise = disableMultiFactorAuthentication().then(onDisable);
    return import_react_hot_toast19.default.promise(promise, {
      loading: t2("profile:disablingMfa"),
      error: t2("profile:disableMfaError"),
      success: t2("profile:disableMfaSuccess")
    });
  }, [disableMultiFactorAuthentication, onDisable, t2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
          color: "danger",
          variant: "flat",
          onClick: () => setIsModalOpen(!0),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "font-medium",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next58.Trans, {
              i18nKey: "profile:disableMfaButtonLabel"
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
              lineNumber: 38,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
            lineNumber: 37,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next58.Trans, {
          i18nKey: "profile:disableMfa"
        }, void 0, !1, {
          fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
          lineNumber: 44,
          columnNumber: 18
        }, this),
        isOpen: isModalOpen,
        setIsOpen: setIsModalOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next58.Trans, {
                  i18nKey: "common:modalConfirmationQuestion"
                }, void 0, !1, {
                  fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
                  lineNumber: 51,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              color: "danger",
              block: !0,
              loading,
              onClick: onDisableSubmit,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next58.Trans, {
                i18nKey: "profile:confirmDisableMfaButtonLabel"
              }, void 0, !1, {
                fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/mfa/DisableMultiFactorButton.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}, DisableMultiFactorButton_default = DisableMultiFactorButton;

// app/components/auth/ReauthenticationModal.tsx
var import_react119 = require("react"), import_react_i18next59 = require("react-i18next");
init_Modal();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ReauthenticationModal = ({ isOpen, setIsOpen }) => {
  let onSuccess = (0, import_react119.useCallback)(() => {
    setIsOpen(!1);
  }, [setIsOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next59.Trans, {
      i18nKey: "auth:reauthenticate"
    }, void 0, !1, {
      fileName: "app/components/auth/ReauthenticationModal.tsx",
      lineNumber: 17,
      columnNumber: 16
    }, this),
    isOpen,
    setIsOpen,
    closeButton: !1,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "my-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next59.Trans, {
            i18nKey: "auth:reauthenticateDescription"
          }, void 0, !1, {
            fileName: "app/components/auth/ReauthenticationModal.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/auth/ReauthenticationModal.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/auth/ReauthenticationModal.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReauthenticationForm_default, {
        onSuccess
      }, void 0, !1, {
        fileName: "app/components/auth/ReauthenticationModal.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/auth/ReauthenticationModal.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, ReauthenticationModal_default = ReauthenticationModal;

// app/routes/__app/settings/profile/authentication.tsx
init_If();
init_Alert();
init_Heading();
init_use_user_session();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta11 = () => ({
  title: "Authentication"
}), ProfileAuthenticationPage = () => {
  var _a;
  let user = useUserSession(), multiFactor3 = (0, import_react120.useMemo)(
    () => {
      var _a2;
      return ((_a2 = user == null ? void 0 : user.auth) == null ? void 0 : _a2.multiFactor) ?? [];
    },
    [(_a = user == null ? void 0 : user.auth) == null ? void 0 : _a.multiFactor]
  ), [shouldReauthenticate, setShouldReauthenticate] = (0, import_react120.useState)(!1), refreshPage = (0, import_react120.useCallback)((success) => {
    success && window.location.reload();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
          heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next60.Trans, {
            i18nKey: "profile:manageConnectedAccounts"
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 47,
            columnNumber: 20
          }, this),
          subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next60.Trans, {
            i18nKey: "profile:manageConnectedAccountsSubheading"
          }, void 0, !1, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConnectedAccountsContainer_default, {}, void 0, !1, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
          condition: configuration_default.auth.enableMultiFactorAuth,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
            heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next60.Trans, {
              i18nKey: "profile:multiFactorAuth"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/profile/authentication.tsx",
              lineNumber: 58,
              columnNumber: 22
            }, this),
            subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next60.Trans, {
              i18nKey: "profile:multiFactorAuthSubheading"
            }, void 0, !1, {
              fileName: "app/routes/__app/settings/profile/authentication.tsx",
              lineNumber: 59,
              columnNumber: 25
            }, this),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: !multiFactor3,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthSetupContainer_default, {
                  onComplete: refreshPage
                }, void 0, !1, {
                  fileName: "app/routes/__app/settings/profile/authentication.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/settings/profile/authentication.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: multiFactor3,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorSuccessAlert, {}, void 0, !1, {
                      fileName: "app/routes/__app/settings/profile/authentication.tsx",
                      lineNumber: 69,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DisableMultiFactorButton_default, {
                      onDisable: async () => {
                        setShouldReauthenticate(!0);
                      }
                    }, void 0, !1, {
                      fileName: "app/routes/__app/settings/profile/authentication.tsx",
                      lineNumber: 71,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/settings/profile/authentication.tsx",
                  lineNumber: 68,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/settings/profile/authentication.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                condition: shouldReauthenticate,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReauthenticationModal_default, {
                  isOpen: !0,
                  setIsOpen: async () => {
                    setShouldReauthenticate(!1), await refreshPage(!0);
                  }
                }, void 0, !1, {
                  fileName: "app/routes/__app/settings/profile/authentication.tsx",
                  lineNumber: 83,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app/settings/profile/authentication.tsx",
                lineNumber: 82,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/settings/profile/authentication.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/settings/profile/authentication.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/profile/authentication.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}, authentication_default = ProfileAuthenticationPage;
function MultiFactorSuccessAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "success",
    className: "flex flex-col space-y-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
        type: 4,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next60.Trans, {
          i18nKey: "profile:mfaEnabledSuccessTitle"
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/authentication.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next60.Trans, {
          i18nKey: "profile:mfaEnabledSuccessDescription"
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/profile/authentication.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/authentication.tsx",
        lineNumber: 111,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/settings/profile/authentication.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/routes/__app/settings/profile/password.tsx
var password_exports = {};
__export(password_exports, {
  default: () => password_default,
  meta: () => meta12
});
var import_reactfire36 = require("reactfire"), import_react_i18next62 = require("react-i18next"), import_auth16 = require("firebase/auth");
init_Alert();
init_If();

// app/components/profile/UpdatePasswordForm.tsx
var import_react121 = require("react"), import_auth15 = require("firebase/auth"), import_react_hot_toast20 = __toESM(require("react-hot-toast")), import_react_i18next61 = require("react-i18next"), import_react_hook_form8 = require("react-hook-form");
init_Button();
init_Alert();
init_If();
init_use_request_state();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), UpdatePasswordForm = ({ user }) => {
  var _a, _b;
  let { t: t2 } = (0, import_react_i18next61.useTranslation)(), [createServerSideSession2] = use_create_server_side_session_default(), requestState = useRequestState(), [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react121.useState)(), { register, handleSubmit, reset, getValues, formState } = (0, import_react_hook_form8.useForm)({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      repeatPassword: ""
    }
  }), errors = formState.errors, currentPasswordControl = register("currentPassword", {
    value: "",
    required: !0,
    minLength: {
      value: 6,
      message: t2("auth:passwordLengthError")
    }
  }), newPasswordControl = register("newPassword", {
    value: "",
    required: !0,
    minLength: {
      value: 6,
      message: t2("auth:passwordLengthError")
    },
    validate: (value) => {
      if (value === getValues("currentPassword"))
        return t2("profile:passwordNotChanged");
    }
  }), repeatPasswordControl = register("repeatPassword", {
    value: "",
    required: !0,
    minLength: {
      value: 6,
      message: t2("profile:passwordLengthError")
    },
    validate: (value) => {
      if (value !== getValues("newPassword"))
        return t2("profile:passwordNotMatching");
    }
  }), reauthenticateUser = (0, import_react121.useCallback)(
    (email, currentPassword) => {
      let emailAuthCredential = import_auth15.EmailAuthProvider.credential(
        email,
        currentPassword
      );
      return (0, import_auth15.reauthenticateWithCredential)(user, emailAuthCredential).catch(
        (error) => {
          if (isMultiFactorError(error))
            setMultiFactorAuthError(error);
          else
            return requestState.setError(getFirebaseErrorCode(error)), Promise.reject(error);
        }
      );
    },
    [user, setMultiFactorAuthError, requestState]
  ), updatePasswordFromCredential = (0, import_react121.useCallback)(
    async (credential, newPassword) => {
      let promise = new Promise(async (resolve3, reject) => {
        try {
          await (0, import_auth15.updatePassword)(user, newPassword), await createServerSideSession2(credential.user), requestState.setData(), resolve3();
        } catch (e) {
          reject(e);
        }
      });
      return await import_react_hot_toast20.default.promise(promise, {
        success: t2("profile:updatePasswordSuccess"),
        error: t2("profile:updatePasswordError"),
        loading: t2("profile:updatePasswordLoading")
      });
    },
    [requestState, createServerSideSession2, t2, user]
  ), updatePasswordCallback = (0, import_react121.useCallback)(
    async (user2, currentPassword, newPassword) => {
      let email = user2.email;
      if (!email)
        return Promise.reject(t2("profile:cannotUpdatePassword"));
      try {
        let credential = await reauthenticateUser(email, currentPassword);
        return credential ? await updatePasswordFromCredential(credential, newPassword) : void 0;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    [reauthenticateUser, updatePasswordFromCredential, t2]
  ), onSubmit = (0, import_react121.useCallback)(
    async (params) => {
      let { newPassword, currentPassword } = params;
      return requestState.setLoading(!0), updatePasswordCallback(user, currentPassword, newPassword).catch(
        (e) => (requestState.setError(t2("profile:updatePasswordError")), e)
      );
    },
    [t2, user, requestState, updatePasswordCallback]
  );
  return (0, import_react121.useEffect)(() => {
    requestState.state.success && (reset(), requestState.resetState());
  }, [reset, requestState]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        "data-cy": "update-password-form",
        onSubmit: handleSubmit(onSubmit),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: requestState.state.error,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                "data-cy": "update-password-error-alert",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
                  type: "error",
                  children: requestState.state.error
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdatePasswordForm.tsx",
                  lineNumber: 196,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 195,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 194,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next61.Trans, {
                    i18nKey: "profile:currentPassword"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 202,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "current-password",
                    required: !0,
                    type: "password",
                    name: currentPasswordControl.name,
                    innerRef: currentPasswordControl.ref,
                    onChange: currentPasswordControl.onChange,
                    onBlur: currentPasswordControl.onBlur
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 204,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 201,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 200,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next61.Trans, {
                    i18nKey: "profile:newPassword"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 218,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "new-password",
                    required: !0,
                    type: "password",
                    name: newPasswordControl.name,
                    innerRef: newPasswordControl.ref,
                    onChange: newPasswordControl.onChange,
                    onBlur: newPasswordControl.onBlur
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 220,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                    "data-cy": "new-password-error",
                    error: (_a = errors.newPassword) == null ? void 0 : _a.message
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 230,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 217,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 216,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next61.Trans, {
                    i18nKey: "profile:repeatPassword"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 239,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "repeat-new-password",
                    required: !0,
                    type: "password",
                    name: repeatPasswordControl.name,
                    innerRef: repeatPasswordControl.ref,
                    onChange: repeatPasswordControl.onChange,
                    onBlur: repeatPasswordControl.onBlur
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 241,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Error, {
                    "data-cy": "repeat-password-error",
                    error: (_b = errors.repeatPassword) == null ? void 0 : _b.message
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdatePasswordForm.tsx",
                    lineNumber: 251,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 238,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 237,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                className: "w-full md:w-auto",
                loading: requestState.state.loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next61.Trans, {
                  i18nKey: "profile:updatePasswordSubmitLabel"
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdatePasswordForm.tsx",
                  lineNumber: 263,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/UpdatePasswordForm.tsx",
                lineNumber: 259,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdatePasswordForm.tsx",
              lineNumber: 258,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/UpdatePasswordForm.tsx",
          lineNumber: 193,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdatePasswordForm.tsx",
        lineNumber: 192,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: !0,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async (credential) => {
            await updatePasswordFromCredential(
              credential,
              getValues("newPassword")
            ), setMultiFactorAuthError(void 0);
          }
        }, void 0, !1, {
          fileName: "app/components/profile/UpdatePasswordForm.tsx",
          lineNumber: 271,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdatePasswordForm.tsx",
        lineNumber: 269,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/UpdatePasswordForm.tsx",
    lineNumber: 191,
    columnNumber: 5
  }, this);
}, UpdatePasswordForm_default = UpdatePasswordForm;

// app/routes/__app/settings/profile/password.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta12 = () => ({
  title: "Update Password"
}), ProfilePasswordSettings = () => {
  let { data: user } = (0, import_reactfire36.useUser)();
  if (!user)
    return null;
  let canUpdatePassword = user.providerData.find(
    (item) => item.providerId === import_auth16.EmailAuthProvider.PROVIDER_ID
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next62.Trans, {
      i18nKey: "profile:passwordTab"
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 32,
      columnNumber: 16
    }, this),
    subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next62.Trans, {
      i18nKey: "profile:passwordTabSubheading"
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 33,
      columnNumber: 19
    }, this),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
      condition: canUpdatePassword,
      fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WarnCannotUpdatePasswordAlert, {}, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/password.tsx",
        lineNumber: 37,
        columnNumber: 19
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdatePasswordForm_default, {
        user
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/password.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/profile/password.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};
function WarnCannotUpdatePasswordAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "warn",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next62.Trans, {
      i18nKey: "profile:cannotUpdatePassword"
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/password.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/profile/password.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var password_default = ProfilePasswordSettings;

// app/routes/__app/settings/profile/email.tsx
var email_exports = {};
__export(email_exports, {
  default: () => email_default,
  meta: () => meta13
});
var import_auth18 = require("firebase/auth"), import_react_i18next64 = require("react-i18next"), import_reactfire37 = require("reactfire");
init_If();
init_Alert();

// app/components/profile/UpdateEmailForm.tsx
var import_auth17 = require("firebase/auth"), import_react122 = require("react"), import_react_hot_toast21 = __toESM(require("react-hot-toast")), import_react_i18next63 = require("react-i18next"), import_react_hook_form9 = require("react-hook-form");
init_Button();
init_Alert();
init_If();
init_use_request_state();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), UpdateEmailForm = ({ user }) => {
  let [errorMessage, setErrorMessage] = (0, import_react122.useState)(), { t: t2 } = (0, import_react_i18next63.useTranslation)(), [createServerSideSession2] = use_create_server_side_session_default(), requestState = useRequestState(), [multiFactorAuthError, setMultiFactorAuthError] = (0, import_react122.useState)(), updateEmailWithCredential = (0, import_react122.useCallback)(
    (credential, email) => {
      let promise = (0, import_auth17.updateEmail)(credential.user, email).then(() => createServerSideSession2(credential.user)).then(() => {
        setErrorMessage(void 0);
      }).catch((e) => (setErrorMessage(t2("profile:updateEmailError")), e));
      return import_react_hot_toast21.default.promise(promise, {
        success: t2("profile:updateEmailSuccess"),
        loading: t2("profile:updateEmailLoading"),
        error: t2("profile:updateEmailError")
      });
    },
    [createServerSideSession2, setErrorMessage, t2]
  ), currentEmail = user == null ? void 0 : user.email, { register, handleSubmit, getValues, reset } = (0, import_react_hook_form9.useForm)({
    defaultValues: {
      email: "",
      repeatEmail: "",
      password: ""
    }
  }), onSubmit = (0, import_react122.useCallback)(
    async (params) => {
      let { email, repeatEmail, password } = params;
      if (email !== repeatEmail) {
        let message = t2("profile:emailsNotMatching");
        setErrorMessage(message);
        return;
      }
      if (email === currentEmail) {
        let message = t2("profile:updatingSameEmail");
        setErrorMessage(message);
        return;
      }
      requestState.setLoading(!0);
      let emailAuthCredential = import_auth17.EmailAuthProvider.credential(
        currentEmail,
        password
      ), credential = await (0, import_auth17.reauthenticateWithCredential)(user, emailAuthCredential).catch((error) => {
        if (isMultiFactorError(error))
          setMultiFactorAuthError(error);
        else {
          let message = t2("profile:updateEmailError");
          setErrorMessage(message);
        }
        requestState.setError(error);
      });
      if (!!credential)
        return await updateEmailWithCredential(credential, email).finally(() => {
          requestState.setData();
        });
    },
    [currentEmail, t2, requestState, updateEmailWithCredential, user]
  ), emailControl = register("email", {
    value: "",
    required: !0
  }), repeatEmailControl = register("repeatEmail", {
    value: "",
    required: !0
  }), passwordControl = register("password", {
    value: "",
    required: !0
  });
  return (0, import_react122.useEffect)(() => {
    requestState.state.success && (reset(), requestState.resetState());
  }, [reset, requestState]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        "data-cy": "update-email-form",
        onSubmit: handleSubmit(onSubmit),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: errorMessage,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                "data-cy": "update-email-error-alert",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
                  type: "error",
                  children: errorMessage
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdateEmailForm.tsx",
                  lineNumber: 159,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 158,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 157,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next63.Trans, {
                    i18nKey: "profile:newEmail"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 165,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "profile-new-email-input",
                    name: emailControl.name,
                    onChange: emailControl.onChange,
                    onBlur: emailControl.onBlur,
                    innerRef: emailControl.ref,
                    required: !0,
                    type: "email",
                    placeholder: ""
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 167,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 164,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next63.Trans, {
                    i18nKey: "profile:repeatEmail"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 182,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "profile-repeat-email-input",
                    name: repeatEmailControl.name,
                    onChange: repeatEmailControl.onChange,
                    onBlur: repeatEmailControl.onBlur,
                    innerRef: repeatEmailControl.ref,
                    required: !0,
                    type: "email"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 184,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 181,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 180,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next63.Trans, {
                    i18nKey: "profile:yourPassword"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 198,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    "data-cy": "profile-password-input",
                    required: !0,
                    type: "password",
                    name: passwordControl.name,
                    onChange: passwordControl.onChange,
                    onBlur: passwordControl.onBlur,
                    innerRef: passwordControl.ref,
                    placeholder: ""
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateEmailForm.tsx",
                    lineNumber: 200,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 197,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 196,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                className: "w-full md:w-auto",
                loading: requestState.state.loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next63.Trans, {
                  i18nKey: "profile:updateEmailSubmitLabel"
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdateEmailForm.tsx",
                  lineNumber: 218,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/UpdateEmailForm.tsx",
                lineNumber: 214,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateEmailForm.tsx",
              lineNumber: 213,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/UpdateEmailForm.tsx",
          lineNumber: 156,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdateEmailForm.tsx",
        lineNumber: 155,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: multiFactorAuthError,
        children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MultiFactorAuthChallengeModal_default, {
          error,
          isOpen: !0,
          setIsOpen: () => setMultiFactorAuthError(void 0),
          onSuccess: async (credential) => {
            await updateEmailWithCredential(credential, getValues("email")), setMultiFactorAuthError(void 0), requestState.setData();
          }
        }, void 0, !1, {
          fileName: "app/components/profile/UpdateEmailForm.tsx",
          lineNumber: 226,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdateEmailForm.tsx",
        lineNumber: 224,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/UpdateEmailForm.tsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
}, UpdateEmailForm_default = UpdateEmailForm;

// app/routes/__app/settings/profile/email.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta13 = () => ({
  title: "Update Email"
}), ProfileEmailSettings = () => {
  let { data: user } = (0, import_reactfire37.useUser)();
  if (!user)
    return null;
  let canUpdateEmail = user.providerData.find(
    (item) => item.providerId === import_auth18.EmailAuthProvider.PROVIDER_ID
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
      heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next64.Trans, {
        i18nKey: "profile:emailTab"
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/email.tsx",
        lineNumber: 32,
        columnNumber: 18
      }, this),
      subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next64.Trans, {
        i18nKey: "profile:emailTabTabSubheading"
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/email.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: canUpdateEmail,
        fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WarnCannotUpdateEmailAlert, {}, void 0, !1, {
          fileName: "app/routes/__app/settings/profile/email.tsx",
          lineNumber: 37,
          columnNumber: 21
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateEmailForm_default, {
          user
        }, void 0, !1, {
          fileName: "app/routes/__app/settings/profile/email.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/email.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/email.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/profile/email.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};
function WarnCannotUpdateEmailAlert() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
    type: "warn",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next64.Trans, {
      i18nKey: "profile:cannotUpdateEmail"
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/email.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/profile/email.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
var email_default = ProfileEmailSettings;

// app/routes/__app/settings/profile/index.tsx
var profile_exports2 = {};
__export(profile_exports2, {
  default: () => profile_default2,
  meta: () => meta14
});
var import_react125 = require("react"), import_react_i18next66 = require("react-i18next"), import_reactfire40 = require("reactfire");
init_user_session();

// app/components/profile/UpdateProfileForm.tsx
var import_react124 = require("react"), import_reactfire39 = require("reactfire"), import_react_i18next65 = require("react-i18next"), import_react_hot_toast22 = __toESM(require("react-hot-toast")), import_react_hook_form10 = require("react-hook-form"), import_storage2 = require("firebase/storage"), import_auth20 = require("firebase/auth");
init_use_request_state();

// app/lib/profile/hooks/use-update-profile.ts
var import_react123 = require("react"), import_reactfire38 = require("reactfire"), import_auth19 = require("firebase/auth");
init_use_request_state();
function useUpdateProfile() {
  let { data: user } = (0, import_reactfire38.useUser)(), { state, setLoading, setData, setError } = useRequestState();
  return [(0, import_react123.useCallback)(
    async (info) => {
      if (info && user) {
        setLoading(!0);
        try {
          await (0, import_auth19.updateProfile)(user, info), setData();
        } catch (e) {
          return setError("Could not update Profile"), Promise.reject(e);
        }
      }
    },
    [setData, setError, setLoading, user]
  ), state];
}

// app/components/profile/UpdateProfileForm.tsx
init_Button();
init_If();
init_Modal();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function UpdateProfileForm({
  user,
  onUpdate
}) {
  let [updateProfile2, { loading }] = useUpdateProfile(), [displayUpdatePhoneNumber, setDisplayUpdatePhoneNumber] = (0, import_react124.useState)(!1), storage = (0, import_reactfire39.useStorage)(), { t: t2 } = (0, import_react_i18next65.useTranslation)(), currentPhotoURL = (user == null ? void 0 : user.photoURL) ?? "", currentDisplayName = (user == null ? void 0 : user.displayName) ?? "", currentPhoneNumber = (user == null ? void 0 : user.phoneNumber) ?? "", { register, handleSubmit, reset } = (0, import_react_hook_form10.useForm)({
    defaultValues: {
      displayName: currentDisplayName,
      photoURL: ""
    }
  }), [avatarIsDirty, setAvatarIsDirty] = (0, import_react124.useState)(!1), onAvatarCleared = (0, import_react124.useCallback)(() => {
    setAvatarIsDirty(!0);
  }, []), onSubmit = async (displayName, photoFile) => {
    let photoName = photoFile == null ? void 0 : photoFile.name, photoUrl = photoName ? await uploadUserProfilePhoto(storage, photoFile, user.uid) : currentPhotoURL, isAvatarRemoved = avatarIsDirty && !photoName, info = {
      displayName,
      photoURL: isAvatarRemoved ? "" : photoUrl
    };
    if (isAvatarRemoved && currentPhotoURL)
      try {
        await (0, import_storage2.deleteObject)((0, import_storage2.ref)(storage, currentPhotoURL));
      } catch {
      }
    let promise = updateProfile2(info).then(() => {
      onUpdate(info);
    });
    return import_react_hot_toast22.default.promise(promise, {
      success: t2("profile:updateProfileSuccess"),
      error: t2("profile:updateProfileError"),
      loading: t2("profile:updateProfileLoading")
    });
  }, displayNameControl = register("displayName", {
    value: currentDisplayName
  }), photoURLControl = register("photoURL");
  return (0, import_react124.useEffect)(() => {
    reset({
      displayName: currentDisplayName ?? "",
      photoURL: currentPhotoURL ?? ""
    });
  }, [currentDisplayName, currentPhotoURL, reset]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
        "data-cy": "update-profile-form",
        onSubmit: handleSubmit((value) => onSubmit(value.displayName, getPhotoFile(value.photoURL))),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                    i18nKey: "profile:displayNameLabel"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 129,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                    innerRef: displayNameControl.ref,
                    onChange: displayNameControl.onChange,
                    onBlur: displayNameControl.onBlur,
                    name: displayNameControl.name,
                    "data-cy": "profile-display-name",
                    minLength: 2,
                    placeholder: ""
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 131,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 128,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 127,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                    i18nKey: "profile:profilePictureLabel"
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 145,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImageUploadInput_default, {
                    multiple: !1,
                    onClear: onAvatarCleared,
                    name: photoURLControl.name,
                    image: currentPhotoURL,
                    onChange: photoURLControl.onChange,
                    onBlur: photoURLControl.onBlur,
                    innerRef: photoURLControl.ref,
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                      i18nKey: "common:imageInputLabel"
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 156,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 147,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 144,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 143,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                      i18nKey: "profile:emailLabel"
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 163,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      disabled: !0,
                      value: user.email ?? ""
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 165,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 162,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: user.email,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      type: "button",
                      color: "transparent",
                      size: "small",
                      href: configuration_default.paths.settings.email,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-xs font-normal",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                          i18nKey: "profile:updateEmailSubmitLabel"
                        }, void 0, !1, {
                          fileName: "app/components/profile/UpdateProfileForm.tsx",
                          lineNumber: 177,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 176,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 170,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 169,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 168,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: !user.email,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      type: "button",
                      color: "transparent",
                      size: "small",
                      href: configuration_default.paths.settings.authentication,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "text-xs font-normal",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                          i18nKey: "profile:addEmailAddress"
                        }, void 0, !1, {
                          fileName: "app/components/profile/UpdateProfileForm.tsx",
                          lineNumber: 192,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 191,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 185,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 184,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 183,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 161,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                      i18nKey: "profile:phoneNumberLabel"
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 201,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                      disabled: !0,
                      value: currentPhoneNumber
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 203,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 200,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                  condition: configuration_default.auth.providers.phoneNumber,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: !currentPhoneNumber,
                      fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemovePhoneNumberButton, {
                        user,
                        onSuccess: () => {
                          onUpdate({
                            phoneNumber: null
                          });
                        }
                      }, void 0, !1, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 212,
                        columnNumber: 21
                      }, this),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AddPhoneNumberButton, {
                        onClick: () => setDisplayUpdatePhoneNumber(!0)
                      }, void 0, !1, {
                        fileName: "app/components/profile/UpdateProfileForm.tsx",
                        lineNumber: 222,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/profile/UpdateProfileForm.tsx",
                      lineNumber: 209,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/profile/UpdateProfileForm.tsx",
                    lineNumber: 208,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 207,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 199,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                className: "w-full md:w-auto",
                loading,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                  i18nKey: "profile:updateProfileSubmitLabel"
                }, void 0, !1, {
                  fileName: "app/components/profile/UpdateProfileForm.tsx",
                  lineNumber: 232,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 231,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 230,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: displayUpdatePhoneNumber,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinkPhoneNumberModal_default, {
          isOpen: !0,
          setIsOpen: setDisplayUpdatePhoneNumber,
          onSuccess: (phoneNumber) => {
            onUpdate({
              phoneNumber
            });
          }
        }, void 0, !1, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 239,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 238,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/UpdateProfileForm.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
function getPhotoFile(value) {
  if (!(!value || typeof value == "string"))
    return value.item(0) ?? void 0;
}
async function uploadUserProfilePhoto(storage, photoFile, userId) {
  let url = `/profiles/${userId}/${photoFile.name}`, bytes = await photoFile.arrayBuffer(), fileRef = (0, import_storage2.ref)(storage, url);
  return await (0, import_storage2.uploadBytes)(fileRef, bytes), await (0, import_storage2.getDownloadURL)(fileRef);
}
function RemovePhoneNumberButton({
  user,
  onSuccess
}) {
  let [isModalOpen, setIsModalOpen] = (0, import_react124.useState)(!1), requestState = useRequestState(), { t: t2 } = (0, import_react_i18next65.useTranslation)(), onUnlinkPhoneNumber = (0, import_react124.useCallback)(() => {
    let promise = (0, import_auth20.unlink)(user, import_auth20.PhoneAuthProvider.PROVIDER_ID).then(() => {
      setIsModalOpen(!1), onSuccess();
    }).catch((error) => {
      throw requestState.setError(error), getFirebaseErrorCode(error);
    });
    return requestState.setLoading(!0), import_react_hot_toast22.default.promise(promise, {
      loading: t2("profile:unlinkActionLoading"),
      success: t2("profile:unlinkActionSuccess"),
      error: t2("profile:unlinkActionError")
    });
  }, [user, requestState, t2, onSuccess]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
        type: "button",
        color: "transparent",
        size: "small",
        onClick: () => setIsModalOpen(!0),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-xs font-normal",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
            i18nKey: "profile:removePhoneNumber"
          }, void 0, !1, {
            fileName: "app/components/profile/UpdateProfileForm.tsx",
            lineNumber: 322,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 321,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 315,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, {
        heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
          i18nKey: "profile:removePhoneNumber"
        }, void 0, !1, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 327,
          columnNumber: 18
        }, this),
        isOpen: isModalOpen,
        setIsOpen: setIsModalOpen,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col space-y-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                i18nKey: "profile:confirmRemovePhoneNumberDescription"
              }, void 0, !1, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 333,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 332,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                i18nKey: "common:modalConfirmationQuestion"
              }, void 0, !1, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 337,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 336,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
              condition: requestState.state.error,
              children: (error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                error
              }, void 0, !1, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 341,
                columnNumber: 25
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 340,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
              block: !0,
              loading: requestState.state.loading,
              color: "danger",
              onClick: onUnlinkPhoneNumber,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
                i18nKey: "profile:confirmRemovePhoneNumber"
              }, void 0, !1, {
                fileName: "app/components/profile/UpdateProfileForm.tsx",
                lineNumber: 350,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/profile/UpdateProfileForm.tsx",
              lineNumber: 344,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/profile/UpdateProfileForm.tsx",
          lineNumber: 331,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 326,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/profile/UpdateProfileForm.tsx",
    lineNumber: 314,
    columnNumber: 5
  }, this);
}
function AddPhoneNumberButton(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
    type: "button",
    color: "transparent",
    size: "small",
    onClick: props.onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-xs font-normal",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next65.Trans, {
        i18nKey: "profile:addPhoneNumber"
      }, void 0, !1, {
        fileName: "app/components/profile/UpdateProfileForm.tsx",
        lineNumber: 371,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/profile/UpdateProfileForm.tsx",
      lineNumber: 370,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/profile/UpdateProfileForm.tsx",
    lineNumber: 364,
    columnNumber: 5
  }, this);
}
var UpdateProfileForm_default = UpdateProfileForm;

// app/routes/__app/settings/profile/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta14 = () => ({
  title: "Profile Settings"
}), ProfileDetailsPage = () => {
  let { userSession, setUserSession } = (0, import_react125.useContext)(user_session_default), { data: user } = (0, import_reactfire40.useUser)(), onUpdate = (0, import_react125.useCallback)(
    (data) => {
      let authData = userSession == null ? void 0 : userSession.auth;
      authData && setUserSession({
        auth: {
          ...authData,
          ...data
        },
        data: userSession.data
      });
    },
    [setUserSession, userSession]
  );
  return user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsTile_default, {
    heading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next66.Trans, {
      i18nKey: "profile:generalTab"
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/index.tsx",
      lineNumber: 48,
      columnNumber: 16
    }, this),
    subHeading: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next66.Trans, {
      i18nKey: "profile:generalTabSubheading"
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/index.tsx",
      lineNumber: 49,
      columnNumber: 19
    }, this),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirebaseStorageProvider, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UpdateProfileForm_default, {
        user,
        onUpdate
      }, void 0, !1, {
        fileName: "app/routes/__app/settings/profile/index.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/settings/profile/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/settings/profile/index.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this) : null;
}, profile_default2 = ProfileDetailsPage;

// app/routes/__app/settings/index.tsx
var settings_exports2 = {};
__export(settings_exports2, {
  loader: () => loader6
});
var import_node13 = require("@remix-run/node");
function loader6() {
  return (0, import_node13.redirect)(configuration_default.paths.settings.profile);
}

// app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  loader: () => loader7,
  meta: () => meta15
});
var import_react126 = require("@remix-run/react");

// app/lib/server/loaders/load-auth-page-data.ts
var import_node14 = require("@remix-run/node");
var loadAuthPageData = async ({ request }) => {
  let session = await parseSessionIdCookie(request), { headers, token } = await getCsrfTokenHeaders(), ok = () => (0, import_node14.json)(
    {
      csrfToken: token
    },
    {
      headers
    }
  );
  try {
    return await getLoggedInUser(session) ? (0, import_node14.redirect)(configuration_default.paths.appHome) : ok();
  } catch {
    return ok();
  }
};
async function getCsrfTokenHeaders() {
  let headers = new Headers(), { secret, token } = await create_csrf_token_default();
  return headers.append("Set-Cookie", await serializeCsrfSecretCookie(secret)), {
    headers,
    token
  };
}
var load_auth_page_data_default = loadAuthPageData;

// app/routes/auth.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader7 = load_auth_page_data_default, meta15 = ({ data }) => ({
  "csrf-token": data == null ? void 0 : data.csrfToken
});
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthPageShell_default, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react126.Outlet, {}, void 0, !1, {
      fileName: "app/routes/auth.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/auth.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var auth_default = AuthLayout;

// app/routes/auth/password-reset.tsx
var password_reset_exports = {};
__export(password_reset_exports, {
  default: () => password_reset_default,
  loader: () => loader8,
  meta: () => meta16
});
var import_react127 = require("react"), import_react128 = require("@remix-run/react"), import_auth21 = require("@firebase/auth"), import_react_i18next67 = require("react-i18next"), import_reactfire41 = require("reactfire");
init_Heading();
init_Button();
init_Alert();
init_If();
init_use_request_state();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader8 = load_auth_page_data_default, meta16 = () => ({
  title: "Password Reset"
});
function PasswordResetPage() {
  let auth = (0, import_reactfire41.useAuth)(), { state, setError, setData, setLoading } = useRequestState(), onSubmit = (0, import_react127.useCallback)(
    async (event) => {
      event.preventDefault();
      let email = new FormData(event.currentTarget).get("email");
      setLoading(!0);
      try {
        let returnUrl = getReturnUrl2();
        await (0, import_auth21.sendPasswordResetEmail)(auth, email, {
          url: returnUrl
        }), setData(!0);
      } catch (e) {
        setError(getFirebaseErrorCode(e));
      }
    },
    [auth, setData, setError, setLoading]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
          type: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next67.Trans, {
            i18nKey: "auth:passwordResetLabel"
          }, void 0, !1, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/auth/password-reset.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/password-reset.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col space-y-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: state.success,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, {
              type: "success",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next67.Trans, {
                i18nKey: "auth:passwordResetSuccessMessage"
              }, void 0, !1, {
                fileName: "app/routes/auth/password-reset.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/password-reset.tsx",
              lineNumber: 68,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
            condition: !state.data,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                onSubmit: (e) => void onSubmit(e),
                className: "container mx-auto flex justify-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex-col space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "text-sm text-gray-700 dark:text-gray-400",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next67.Trans, {
                          i18nKey: "auth:passwordResetSubheading"
                        }, void 0, !1, {
                          fileName: "app/routes/auth/password-reset.tsx",
                          lineNumber: 82,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 81,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 80,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Label, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next67.Trans, {
                            i18nKey: "common:emailAddress"
                          }, void 0, !1, {
                            fileName: "app/routes/auth/password-reset.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default.Input, {
                            name: "email",
                            required: !0,
                            type: "email",
                            placeholder: "your@email.com"
                          }, void 0, !1, {
                            fileName: "app/routes/auth/password-reset.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 87,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 86,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
                      condition: state.error,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthErrorMessage, {
                        error: state.error
                      }, void 0, !1, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 100,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 99,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, {
                      loading: state.loading,
                      type: "submit",
                      size: "large",
                      block: !0,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next67.Trans, {
                        i18nKey: "auth:passwordResetLabel"
                      }, void 0, !1, {
                        fileName: "app/routes/auth/password-reset.tsx",
                        lineNumber: 109,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/auth/password-reset.tsx",
                      lineNumber: 103,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/auth/password-reset.tsx",
                  lineNumber: 79,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/auth/password-reset.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/password-reset.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-center text-xs",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "flex space-x-1",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next67.Trans, {
                    i18nKey: "auth:passwordRecoveredQuestion"
                  }, void 0, !1, {
                    fileName: "app/routes/auth/password-reset.tsx",
                    lineNumber: 119,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/auth/password-reset.tsx",
                  lineNumber: 118,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react128.Link, {
                  className: "text-primary-800 hover:underline dark:text-primary-500",
                  to: configuration_default.paths.signIn,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next67.Trans, {
                    i18nKey: "auth:signIn"
                  }, void 0, !1, {
                    fileName: "app/routes/auth/password-reset.tsx",
                    lineNumber: 128,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/auth/password-reset.tsx",
                  lineNumber: 122,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth/password-reset.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/auth/password-reset.tsx",
            lineNumber: 116,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/auth/password-reset.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/auth/password-reset.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
var password_reset_default = PasswordResetPage;
function getReturnUrl2() {
  return `${window.location.origin}${configuration_default.paths.signIn}`;
}

// app/routes/auth/sign-out.ts
var sign_out_exports = {};
__export(sign_out_exports, {
  action: () => action9
});
var import_node15 = require("@remix-run/node");
var action9 = async ({ request }) => {
  await with_firebase_admin_default();
  let session = await parseSessionIdCookie(request);
  if (!session)
    return signOutAndRedirect();
  try {
    await revokeFirebaseSessionToken(session);
  } catch (e) {
    logger_default().warn(e, "Could not destroy the user's session");
  }
  return signOutAndRedirect();
};
async function revokeFirebaseSessionToken(sessionCookie) {
  let { getAuth: getAuth4 } = await import("firebase-admin/auth"), auth = getAuth4(), { sub } = await auth.verifySessionCookie(sessionCookie);
  return auth.revokeRefreshTokens(sub);
}
async function getNewHeaders() {
  let headers = new Headers();
  return headers.append("Set-Cookie", await deleteSessionIdCookie()), headers.append("Set-Cookie", await deleteCsrfSecretCookie()), headers;
}
async function signOutAndRedirect() {
  let headers = await getNewHeaders();
  return (0, import_node15.redirect)("/", {
    headers
  });
}

// app/routes/auth/session.ts
var session_exports = {};
__export(session_exports, {
  action: () => action10
});
var import_node16 = require("@remix-run/node"), import_zod8 = require("zod");
var action10 = async ({ request }) => {
  let payload = await request.json(), body = await getBodySchema6().safeParseAsync(payload);
  if (!body.success)
    return throwBadRequestException();
  await with_csrf_default(request), await with_firebase_admin_default();
  let session = await create_server_side_session_default(body.data.idToken), headers = new Headers();
  return headers.append("Set-Cookie", session), (0, import_node16.json)({ success: !0 }, { headers });
};
function getBodySchema6() {
  return import_zod8.z.object({
    idToken: import_zod8.z.string().min(1)
  });
}

// app/routes/auth/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  CatchBoundary: () => CatchBoundary4,
  action: () => action11,
  default: () => sign_in_default,
  meta: () => meta17
});
var import_react129 = require("react"), import_react130 = require("@remix-run/react"), import_react_i18next68 = require("react-i18next"), import_reactfire42 = require("reactfire");

// app/lib/server/auth/actions/create-server-session.action.ts
var import_node17 = require("@remix-run/node"), import_zod9 = require("zod");
var RETURN_URL_QUERY_PARAM = "returnUrl", createServerSessionAction = async ({
  request,
  params
}) => {
  let formData = await request.formData(), fields = Object.fromEntries(formData.entries()), result = await getFormDataSchema().safeParseAsync(fields);
  if (!result.success)
    return throwBadRequestException();
  await with_csrf_default(request, () => result.data.csrfToken), await with_firebase_admin_default();
  let session = await create_server_side_session_default(result.data.idToken), headers = new Headers({
    "Set-Cookie": session
  }), redirectUrl = getReturnPath(request.url) || configuration_default.paths.appHome;
  return (0, import_node17.redirect)(redirectUrl, {
    headers
  });
}, create_server_session_action_default = createServerSessionAction;
function getFormDataSchema() {
  return import_zod9.z.object({
    idToken: import_zod9.z.string().min(1),
    csrfToken: import_zod9.z.string().min(1)
  });
}
function getReturnPath(url) {
  return new URL(url).searchParams.get(RETURN_URL_QUERY_PARAM);
}

// app/routes/auth/sign-in.tsx
init_Heading();
init_If();

// app/core/generic/get-client-query-params.ts
function getClientQueryParams() {
  return new URLSearchParams(window.location.search);
}
var get_client_query_params_default = getClientQueryParams;

// app/routes/auth/sign-in.tsx
init_use_get_csrf_token();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action11 = create_server_session_action_default, CatchBoundary4 = AuthCatchBoundary_default, meta17 = () => ({
  title: "Sign In"
}), SIGN_UP_PATH = configuration_default.paths.signUp, FORCE_SIGN_OUT_QUERY_PARAM = "signOut";
function SignInPage() {
  let auth = (0, import_reactfire42.useAuth)(), submit = (0, import_react130.useSubmit)(), getCsrfToken = useGetCsrfToken(), transition = (0, import_react130.useTransition)(), onSignIn = (0, import_react129.useCallback)(
    (idToken) => {
      let csrfToken = getCsrfToken() ?? "";
      submit({ idToken, csrfToken }, { method: "post" });
    },
    [submit, getCsrfToken]
  ), shouldForceSignOut = (0, import_react129.useMemo)(() => is_browser_default() ? get_client_query_params_default().has(FORCE_SIGN_OUT_QUERY_PARAM) : !1, []);
  return (0, import_react129.useEffect)(() => {
    shouldForceSignOut && auth.signOut();
  }, [auth, shouldForceSignOut]), transition.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, !1, {
    fileName: "app/routes/auth/sign-in.tsx",
    lineNumber: 72,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
          type: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next68.Trans, {
            i18nKey: "auth:signInHeading"
          }, void 0, !1, {
            fileName: "app/routes/auth/sign-in.tsx",
            lineNumber: 79,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
        onSignIn
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 83,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.emailPassword,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "text-xs text-gray-400",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next68.Trans, {
                i18nKey: "auth:orContinueWithEmail"
              }, void 0, !1, {
                fileName: "app/routes/auth/sign-in.tsx",
                lineNumber: 88,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/sign-in.tsx",
              lineNumber: 87,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/auth/sign-in.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignInContainer_default, {
            onSignIn
          }, void 0, !1, {
            fileName: "app/routes/auth/sign-in.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.phoneNumber,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberSignInContainer_default, {
          onSignIn
        }, void 0, !1, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.emailLink,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailLinkAuth_default, {}, void 0, !1, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center text-xs",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "flex space-x-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next68.Trans, {
                i18nKey: "auth:doNotHaveAccountYet"
              }, void 0, !1, {
                fileName: "app/routes/auth/sign-in.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/sign-in.tsx",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react130.Link, {
              className: "text-primary-800 hover:underline dark:text-primary-500",
              to: SIGN_UP_PATH,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next68.Trans, {
                i18nKey: "auth:signUp"
              }, void 0, !1, {
                fileName: "app/routes/auth/sign-in.tsx",
                lineNumber: 113,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/sign-in.tsx",
              lineNumber: 109,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/auth/sign-in.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-in.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/auth/sign-in.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}
var sign_in_default = SignInPage;

// app/routes/auth/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  CatchBoundary: () => CatchBoundary5,
  action: () => action12,
  default: () => SignUpPage,
  meta: () => meta18
});
var import_react131 = require("@remix-run/react"), import_react132 = require("react"), import_react_i18next69 = require("react-i18next");
init_Heading();
init_If();
init_use_get_csrf_token();
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action12 = create_server_session_action_default, CatchBoundary5 = AuthCatchBoundary_default, meta18 = () => ({
  title: "Sign Up"
}), SIGN_IN_PATH = configuration_default.paths.signIn;
function SignUpPage() {
  let submit = (0, import_react131.useSubmit)(), getCsrfToken = useGetCsrfToken(), transition = (0, import_react131.useTransition)(), onSignUp = (0, import_react132.useCallback)(
    (idToken) => {
      let csrfToken = getCsrfToken() ?? "";
      submit({ idToken, csrfToken }, {
        method: "post"
      });
    },
    [getCsrfToken, submit]
  );
  return transition.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageLoadingIndicator, {}, void 0, !1, {
    fileName: "app/routes/auth/sign-up.tsx",
    lineNumber: 49,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {
          type: 4,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next69.Trans, {
            i18nKey: "auth:signUpHeading"
          }, void 0, !1, {
            fileName: "app/routes/auth/sign-up.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OAuthProviders_default, {
        onSignIn: onSignUp
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.emailPassword,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "text-xs text-gray-400",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next69.Trans, {
                i18nKey: "auth:orContinueWithEmail"
              }, void 0, !1, {
                fileName: "app/routes/auth/sign-up.tsx",
                lineNumber: 65,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/sign-up.tsx",
              lineNumber: 64,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/auth/sign-up.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailPasswordSignUpContainer_default, {
            onSignUp
          }, void 0, !1, {
            fileName: "app/routes/auth/sign-up.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.phoneNumber,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneNumberSignInContainer_default, {
          onSignIn: onSignUp
        }, void 0, !1, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(If_default, {
        condition: configuration_default.auth.providers.emailLink,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailLinkAuth_default, {}, void 0, !1, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 77,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex justify-center text-xs",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "flex space-x-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next69.Trans, {
                i18nKey: "auth:alreadyHaveAnAccount"
              }, void 0, !1, {
                fileName: "app/routes/auth/sign-up.tsx",
                lineNumber: 83,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/sign-up.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react131.Link, {
              className: "text-primary-800 hover:underline dark:text-primary-500",
              to: SIGN_IN_PATH,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_i18next69.Trans, {
                i18nKey: "auth:signIn"
              }, void 0, !1, {
                fileName: "app/routes/auth/sign-up.tsx",
                lineNumber: 90,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/auth/sign-up.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/auth/sign-up.tsx",
          lineNumber: 81,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/sign-up.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/auth/sign-up.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e24727bc", entry: { module: "/build/entry.client-W6NURKSL.js", imports: ["/build/_shared/chunk-LGUD5Z4W.js", "/build/_shared/chunk-CZ7RPIMM.js", "/build/_shared/chunk-R32XIEQ6.js", "/build/_shared/chunk-CRZAZ7IR.js", "/build/_shared/chunk-G4KZDRB7.js", "/build/_shared/chunk-WULCHIKQ.js", "/build/_shared/chunk-WIOFJORR.js", "/build/_shared/chunk-A4KF3ELC.js", "/build/_shared/chunk-BCUDKLQK.js", "/build/_shared/chunk-EGSMFI33.js", "/build/_shared/chunk-TUM7Q574.js", "/build/_shared/chunk-4FTOC32G.js", "/build/_shared/chunk-HG654LJF.js", "/build/_shared/chunk-CUPSZOF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TQTKWP2C.js", imports: ["/build/_shared/chunk-4C3HDJAL.js", "/build/_shared/chunk-EYLCNKMF.js", "/build/_shared/chunk-U3LVU62Z.js", "/build/_shared/chunk-SXE3VI7N.js", "/build/_shared/chunk-KIPB2TCK.js", "/build/_shared/chunk-WGYKNE6A.js", "/build/_shared/chunk-I7U6GVVU.js", "/build/_shared/chunk-3RHYN7AX.js", "/build/_shared/chunk-EPY2ZBMR.js", "/build/_shared/chunk-2RQ7OU4V.js", "/build/_shared/chunk-5CBDJCHW.js", "/build/_shared/chunk-FT7OPBPM.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-PGVJYH6E.js", "/build/_shared/chunk-MZJK6QBW.js", "/build/_shared/chunk-GZQSVEA4.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-KHW4CDLX.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-6UP67C3W.js", "/build/_shared/chunk-M572OUI5.js", "/build/_shared/chunk-7W5X7L6G.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-EROZQRJX.js", imports: ["/build/_shared/chunk-ZPKYCPW6.js", "/build/_shared/chunk-EHUQ3EN7.js", "/build/_shared/chunk-CCK66CUU.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-J6NN4ZNV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/dashboard/index": { id: "routes/__app/dashboard/index", parentId: "routes/__app", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/__app/dashboard/index-Q67FLLOC.js", imports: ["/build/_shared/chunk-X4STHRTE.js", "/build/_shared/chunk-W4DXIIZX.js", "/build/_shared/chunk-MLX6CK2L.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I7U6GVVU.js", "/build/_shared/chunk-3RHYN7AX.js", "/build/_shared/chunk-EPY2ZBMR.js", "/build/_shared/chunk-2RQ7OU4V.js", "/build/_shared/chunk-5CBDJCHW.js", "/build/_shared/chunk-FT7OPBPM.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-KHW4CDLX.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/photos/index": { id: "routes/__app/photos/index", parentId: "routes/__app", path: "photos", index: !0, caseSensitive: void 0, module: "/build/routes/__app/photos/index-LGLJO2O7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings": { id: "routes/__app/settings", parentId: "routes/__app", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings-4YBNFUQF.js", imports: ["/build/_shared/chunk-X4STHRTE.js", "/build/_shared/chunk-W4DXIIZX.js", "/build/_shared/chunk-MLX6CK2L.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-KIPB2TCK.js", "/build/_shared/chunk-I7U6GVVU.js", "/build/_shared/chunk-3RHYN7AX.js", "/build/_shared/chunk-EPY2ZBMR.js", "/build/_shared/chunk-2RQ7OU4V.js", "/build/_shared/chunk-5CBDJCHW.js", "/build/_shared/chunk-FT7OPBPM.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-KHW4CDLX.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/index": { id: "routes/__app/settings/index", parentId: "routes/__app/settings", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/settings/index-MSSGPDTY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/organization": { id: "routes/__app/settings/organization", parentId: "routes/__app/settings", path: "organization", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/organization-SS3ODWV6.js", imports: ["/build/_shared/chunk-APO3SRLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/organization/index": { id: "routes/__app/settings/organization/index", parentId: "routes/__app/settings/organization", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/settings/organization/index-ACODV662.js", imports: ["/build/_shared/chunk-QMBBQ6UD.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-MLX6CK2L.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-CCK66CUU.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-MZJK6QBW.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/organization/members/$member": { id: "routes/__app/settings/organization/members/$member", parentId: "routes/__app/settings/organization", path: "members/:member", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/organization/members/$member-2YQUUTPT.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/organization/members/index": { id: "routes/__app/settings/organization/members/index", parentId: "routes/__app/settings/organization", path: "members", index: !0, caseSensitive: void 0, module: "/build/routes/__app/settings/organization/members/index-OGRSPUPS.js", imports: ["/build/_shared/chunk-OJUH3UKO.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-X2TJ6V6V.js", "/build/_shared/chunk-W4DXIIZX.js", "/build/_shared/chunk-CCK66CUU.js", "/build/_shared/chunk-4C3HDJAL.js", "/build/_shared/chunk-EYLCNKMF.js", "/build/_shared/chunk-U3LVU62Z.js", "/build/_shared/chunk-FT7OPBPM.js", "/build/_shared/chunk-KHW4CDLX.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/organization/members/invite": { id: "routes/__app/settings/organization/members/invite", parentId: "routes/__app/settings/organization", path: "members/invite", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/organization/members/invite-C4E32BLY.js", imports: ["/build/_shared/chunk-SYTY7UFF.js", "/build/_shared/chunk-MGQONI2O.js", "/build/_shared/chunk-ZQKII5EY.js", "/build/_shared/chunk-B76DMKWT.js", "/build/_shared/chunk-4I42Q7Y2.js", "/build/_shared/chunk-OJUH3UKO.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-W4DXIIZX.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-CCK66CUU.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-4C3HDJAL.js", "/build/_shared/chunk-EYLCNKMF.js", "/build/_shared/chunk-U3LVU62Z.js", "/build/_shared/chunk-WGYKNE6A.js", "/build/_shared/chunk-5CBDJCHW.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-KHW4CDLX.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-ODW25BWE.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/organization/members/owner": { id: "routes/__app/settings/organization/members/owner", parentId: "routes/__app/settings/organization", path: "members/owner", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/organization/members/owner-W6ZBITSG.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/profile": { id: "routes/__app/settings/profile", parentId: "routes/__app/settings", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/profile-PHTMGO4L.js", imports: ["/build/_shared/chunk-APO3SRLV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/profile/authentication": { id: "routes/__app/settings/profile/authentication", parentId: "routes/__app/settings/profile", path: "authentication", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/profile/authentication-FA7VLBB5.js", imports: ["/build/_shared/chunk-RH6ANKBC.js", "/build/_shared/chunk-3THJO2UF.js", "/build/_shared/chunk-ZQKII5EY.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-REROTZRV.js", "/build/_shared/chunk-URFO34QJ.js", "/build/_shared/chunk-ZSN7SJIX.js", "/build/_shared/chunk-KH25R2OU.js", "/build/_shared/chunk-GN2EZ3CR.js", "/build/_shared/chunk-2LLES6IO.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-GZQSVEA4.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-KHW4CDLX.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/profile/email": { id: "routes/__app/settings/profile/email", parentId: "routes/__app/settings/profile", path: "email", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/profile/email-TI5IDE2D.js", imports: ["/build/_shared/chunk-RH6ANKBC.js", "/build/_shared/chunk-ZQKII5EY.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-ZSN7SJIX.js", "/build/_shared/chunk-GN2EZ3CR.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/profile/index": { id: "routes/__app/settings/profile/index", parentId: "routes/__app/settings/profile", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/settings/profile/index-QRBSOZAF.js", imports: ["/build/_shared/chunk-3THJO2UF.js", "/build/_shared/chunk-QMBBQ6UD.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-KH25R2OU.js", "/build/_shared/chunk-GN2EZ3CR.js", "/build/_shared/chunk-2LLES6IO.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-MZJK6QBW.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/profile/password": { id: "routes/__app/settings/profile/password", parentId: "routes/__app/settings/profile", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/settings/profile/password-P5QLAE3Y.js", imports: ["/build/_shared/chunk-RH6ANKBC.js", "/build/_shared/chunk-ZQKII5EY.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-ZSN7SJIX.js", "/build/_shared/chunk-GN2EZ3CR.js", "/build/_shared/chunk-2LLES6IO.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/settings/subscription/index": { id: "routes/__app/settings/subscription/index", parentId: "routes/__app/settings", path: "subscription", index: !0, caseSensitive: void 0, module: "/build/routes/__app/settings/subscription/index-PMTEYGVS.js", imports: ["/build/_shared/chunk-DAAZXNN4.js", "/build/_shared/chunk-B76DMKWT.js", "/build/_shared/chunk-4I42Q7Y2.js", "/build/_shared/chunk-OJUH3UKO.js", "/build/_shared/chunk-33GWQEOE.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-CCK66CUU.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-OKZ23HHI.js", "/build/_shared/chunk-ODW25BWE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/tasks/index": { id: "routes/__app/tasks/index", parentId: "routes/__app", path: "tasks", index: !0, caseSensitive: void 0, module: "/build/routes/__app/tasks/index-TXVHPTBE.js", imports: ["/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-X4STHRTE.js", "/build/_shared/chunk-W4DXIIZX.js", "/build/_shared/chunk-MLX6CK2L.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I7U6GVVU.js", "/build/_shared/chunk-3RHYN7AX.js", "/build/_shared/chunk-EPY2ZBMR.js", "/build/_shared/chunk-2RQ7OU4V.js", "/build/_shared/chunk-5CBDJCHW.js", "/build/_shared/chunk-FT7OPBPM.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-KHW4CDLX.js", "/build/_shared/chunk-52KVLBBL.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-M572OUI5.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__site": { id: "routes/__site", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__site-7HI523C5.js", imports: ["/build/_shared/chunk-J6NN4ZNV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__site/faq": { id: "routes/__site/faq", parentId: "routes/__site", path: "faq", index: void 0, caseSensitive: void 0, module: "/build/routes/__site/faq-KRTMU63F.js", imports: ["/build/_shared/chunk-M6BS7J37.js", "/build/_shared/chunk-GZQSVEA4.js", "/build/_shared/chunk-6UP67C3W.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-M572OUI5.js", "/build/_shared/chunk-7W5X7L6G.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__site/index": { id: "routes/__site/index", parentId: "routes/__site", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__site/index-A5HYENI6.js", imports: ["/build/_shared/chunk-M6BS7J37.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-GZQSVEA4.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-6UP67C3W.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-M572OUI5.js", "/build/_shared/chunk-7W5X7L6G.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__site/pricing": { id: "routes/__site/pricing", parentId: "routes/__site", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/__site/pricing-ANBXQTY2.js", imports: ["/build/_shared/chunk-OKZ23HHI.js", "/build/_shared/chunk-ODW25BWE.js", "/build/_shared/chunk-6UP67C3W.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-M572OUI5.js", "/build/_shared/chunk-7W5X7L6G.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-4WYU73FZ.js", imports: ["/build/_shared/chunk-3PN4DVM6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/password-reset": { id: "routes/auth/password-reset", parentId: "routes/auth", path: "password-reset", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/password-reset-22IV5IBK.js", imports: ["/build/_shared/chunk-2LLES6IO.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/session": { id: "routes/auth/session", parentId: "routes/auth", path: "session", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/session-XR7JDT3D.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/sign-in": { id: "routes/auth/sign-in", parentId: "routes/auth", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/sign-in-67D64TAC.js", imports: ["/build/_shared/chunk-GYDMDH2N.js", "/build/_shared/chunk-REROTZRV.js", "/build/_shared/chunk-URFO34QJ.js", "/build/_shared/chunk-ZSN7SJIX.js", "/build/_shared/chunk-KH25R2OU.js", "/build/_shared/chunk-GN2EZ3CR.js", "/build/_shared/chunk-2LLES6IO.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-GZQSVEA4.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/auth/sign-out": { id: "routes/auth/sign-out", parentId: "routes/auth", path: "sign-out", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/sign-out-LFXZFEAH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/sign-up": { id: "routes/auth/sign-up", parentId: "routes/auth", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/sign-up-TBHZPAGQ.js", imports: ["/build/_shared/chunk-EHJUS7EI.js", "/build/_shared/chunk-GYDMDH2N.js", "/build/_shared/chunk-URFO34QJ.js", "/build/_shared/chunk-ZSN7SJIX.js", "/build/_shared/chunk-KH25R2OU.js", "/build/_shared/chunk-GN2EZ3CR.js", "/build/_shared/chunk-2LLES6IO.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-GZQSVEA4.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/invite": { id: "routes/invite", parentId: "root", path: "invite", index: void 0, caseSensitive: void 0, module: "/build/routes/invite-ZNE4SUPT.js", imports: ["/build/_shared/chunk-3PN4DVM6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/invite/$code": { id: "routes/invite/$code", parentId: "routes/invite", path: ":code", index: void 0, caseSensitive: void 0, module: "/build/routes/invite/$code-KYWNSMWG.js", imports: ["/build/_shared/chunk-EHJUS7EI.js", "/build/_shared/chunk-GYDMDH2N.js", "/build/_shared/chunk-REROTZRV.js", "/build/_shared/chunk-URFO34QJ.js", "/build/_shared/chunk-ZSN7SJIX.js", "/build/_shared/chunk-KH25R2OU.js", "/build/_shared/chunk-GN2EZ3CR.js", "/build/_shared/chunk-2LLES6IO.js", "/build/_shared/chunk-VECX4GTW.js", "/build/_shared/chunk-JDRCLJ2Q.js", "/build/_shared/chunk-X2TJ6V6V.js", "/build/_shared/chunk-ZPKYCPW6.js", "/build/_shared/chunk-6EEWVN7Z.js", "/build/_shared/chunk-NKQZC65O.js", "/build/_shared/chunk-T2CF575W.js", "/build/_shared/chunk-AJBLUEBX.js", "/build/_shared/chunk-NMWHWOJM.js", "/build/_shared/chunk-45D3VFMN.js", "/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-4C3HDJAL.js", "/build/_shared/chunk-EYLCNKMF.js", "/build/_shared/chunk-U3LVU62Z.js", "/build/_shared/chunk-I5LWYJ5L.js", "/build/_shared/chunk-6ZZPVUWI.js", "/build/_shared/chunk-UJJUUA64.js", "/build/_shared/chunk-GZQSVEA4.js", "/build/_shared/chunk-TXT3OLG5.js", "/build/_shared/chunk-6E6B4MC5.js", "/build/_shared/chunk-MEFOEGYP.js", "/build/_shared/chunk-7KHFEMFW.js", "/build/_shared/chunk-QTKR7OWQ.js", "/build/_shared/chunk-L5VGBSV3.js", "/build/_shared/chunk-BNRSGPT3.js", "/build/_shared/chunk-54TVJDMF.js", "/build/_shared/chunk-ZOBGVMBL.js", "/build/_shared/chunk-DN742LHR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/onboarding/index": { id: "routes/onboarding/index", parentId: "root", path: "onboarding", index: !0, caseSensitive: void 0, module: "/build/routes/onboarding/index-2LURVXPY.js", imports: ["/build/_shared/chunk-75ATWWIY.js", "/build/_shared/chunk-T4OLHNMO.js", "/build/_shared/chunk-CSNF7QXE.js", "/build/_shared/chunk-XQJIPBYI.js", "/build/_shared/chunk-54TVJDMF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/stripe/checkout": { id: "routes/stripe/checkout", parentId: "root", path: "stripe/checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/stripe/checkout-CRG6VE7U.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stripe/portal": { id: "routes/stripe/portal", parentId: "root", path: "stripe/portal", index: void 0, caseSensitive: void 0, module: "/build/routes/stripe/portal-DHEVFXM6.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stripe/webhook": { id: "routes/stripe/webhook", parentId: "root", path: "stripe/webhook", index: void 0, caseSensitive: void 0, module: "/build/routes/stripe/webhook-WV5CGMZF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-E24727BC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/onboarding/index": {
    id: "routes/onboarding/index",
    parentId: "root",
    path: "onboarding",
    index: !0,
    caseSensitive: void 0,
    module: onboarding_exports
  },
  "routes/stripe/checkout": {
    id: "routes/stripe/checkout",
    parentId: "root",
    path: "stripe/checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/stripe/webhook": {
    id: "routes/stripe/webhook",
    parentId: "root",
    path: "stripe/webhook",
    index: void 0,
    caseSensitive: void 0,
    module: webhook_exports
  },
  "routes/stripe/portal": {
    id: "routes/stripe/portal",
    parentId: "root",
    path: "stripe/portal",
    index: void 0,
    caseSensitive: void 0,
    module: portal_exports
  },
  "routes/__site": {
    id: "routes/__site",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: site_exports
  },
  "routes/__site/pricing": {
    id: "routes/__site/pricing",
    parentId: "routes/__site",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: pricing_exports
  },
  "routes/__site/index": {
    id: "routes/__site/index",
    parentId: "routes/__site",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: site_exports2
  },
  "routes/__site/faq": {
    id: "routes/__site/faq",
    parentId: "routes/__site",
    path: "faq",
    index: void 0,
    caseSensitive: void 0,
    module: faq_exports
  },
  "routes/invite": {
    id: "routes/invite",
    parentId: "root",
    path: "invite",
    index: void 0,
    caseSensitive: void 0,
    module: invite_exports
  },
  "routes/invite/$code": {
    id: "routes/invite/$code",
    parentId: "routes/invite",
    path: ":code",
    index: void 0,
    caseSensitive: void 0,
    module: code_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/dashboard/index": {
    id: "routes/__app/dashboard/index",
    parentId: "routes/__app",
    path: "dashboard",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/__app/photos/index": {
    id: "routes/__app/photos/index",
    parentId: "routes/__app",
    path: "photos",
    index: !0,
    caseSensitive: void 0,
    module: photos_exports
  },
  "routes/__app/tasks/index": {
    id: "routes/__app/tasks/index",
    parentId: "routes/__app",
    path: "tasks",
    index: !0,
    caseSensitive: void 0,
    module: tasks_exports
  },
  "routes/__app/settings": {
    id: "routes/__app/settings",
    parentId: "routes/__app",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/__app/settings/subscription/index": {
    id: "routes/__app/settings/subscription/index",
    parentId: "routes/__app/settings",
    path: "subscription",
    index: !0,
    caseSensitive: void 0,
    module: subscription_exports
  },
  "routes/__app/settings/organization": {
    id: "routes/__app/settings/organization",
    parentId: "routes/__app/settings",
    path: "organization",
    index: void 0,
    caseSensitive: void 0,
    module: organization_exports
  },
  "routes/__app/settings/organization/members/$member": {
    id: "routes/__app/settings/organization/members/$member",
    parentId: "routes/__app/settings/organization",
    path: "members/:member",
    index: void 0,
    caseSensitive: void 0,
    module: member_exports
  },
  "routes/__app/settings/organization/members/invite": {
    id: "routes/__app/settings/organization/members/invite",
    parentId: "routes/__app/settings/organization",
    path: "members/invite",
    index: void 0,
    caseSensitive: void 0,
    module: invite_exports2
  },
  "routes/__app/settings/organization/members/index": {
    id: "routes/__app/settings/organization/members/index",
    parentId: "routes/__app/settings/organization",
    path: "members",
    index: !0,
    caseSensitive: void 0,
    module: members_exports
  },
  "routes/__app/settings/organization/members/owner": {
    id: "routes/__app/settings/organization/members/owner",
    parentId: "routes/__app/settings/organization",
    path: "members/owner",
    index: void 0,
    caseSensitive: void 0,
    module: owner_exports
  },
  "routes/__app/settings/organization/index": {
    id: "routes/__app/settings/organization/index",
    parentId: "routes/__app/settings/organization",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: organization_exports2
  },
  "routes/__app/settings/profile": {
    id: "routes/__app/settings/profile",
    parentId: "routes/__app/settings",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/__app/settings/profile/authentication": {
    id: "routes/__app/settings/profile/authentication",
    parentId: "routes/__app/settings/profile",
    path: "authentication",
    index: void 0,
    caseSensitive: void 0,
    module: authentication_exports
  },
  "routes/__app/settings/profile/password": {
    id: "routes/__app/settings/profile/password",
    parentId: "routes/__app/settings/profile",
    path: "password",
    index: void 0,
    caseSensitive: void 0,
    module: password_exports
  },
  "routes/__app/settings/profile/email": {
    id: "routes/__app/settings/profile/email",
    parentId: "routes/__app/settings/profile",
    path: "email",
    index: void 0,
    caseSensitive: void 0,
    module: email_exports
  },
  "routes/__app/settings/profile/index": {
    id: "routes/__app/settings/profile/index",
    parentId: "routes/__app/settings/profile",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: profile_exports2
  },
  "routes/__app/settings/index": {
    id: "routes/__app/settings/index",
    parentId: "routes/__app/settings",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: settings_exports2
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/auth/password-reset": {
    id: "routes/auth/password-reset",
    parentId: "routes/auth",
    path: "password-reset",
    index: void 0,
    caseSensitive: void 0,
    module: password_reset_exports
  },
  "routes/auth/sign-out": {
    id: "routes/auth/sign-out",
    parentId: "routes/auth",
    path: "sign-out",
    index: void 0,
    caseSensitive: void 0,
    module: sign_out_exports
  },
  "routes/auth/session": {
    id: "routes/auth/session",
    parentId: "routes/auth",
    path: "session",
    index: void 0,
    caseSensitive: void 0,
    module: session_exports
  },
  "routes/auth/sign-in": {
    id: "routes/auth/sign-in",
    parentId: "routes/auth",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/auth/sign-up": {
    id: "routes/auth/sign-up",
    parentId: "routes/auth",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
