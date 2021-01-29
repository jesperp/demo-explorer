import {h, createContext} from "../_snowpack/pkg/preact.js";
import {useContext, useRef} from "../_snowpack/pkg/preact/hooks.js";
const AriaTreeLevel = createContext(1);
export const AriaTreeItem = (props) => {
  const self = useRef(null);
  const setFocus = (next, oldElement) => {
    console.log("[AriaTreeItem] setting focus to", next);
    if (!oldElement) {
      if (self.current) {
        self.current.tabIndex = -1;
      }
    } else {
      oldElement.tabIndex = -1;
    }
    next.tabIndex = 0;
    next.focus();
  };
  return /* @__PURE__ */ h("li", {
    className: "w-full px-2 mx-1 my-1",
    role: "treeitem",
    tabIndex: -1,
    "aria-level": useContext(AriaTreeLevel),
    "aria-setsize": props.setsize,
    "aria-posinset": props.posinset,
    "aria-expanded": props.expandable ? true : void 0,
    ref: self,
    onFocus: props.onFocus,
    onClick: (ev) => {
      ev.stopPropagation();
      const oldTarget = document.querySelector('nav [tabindex="0"]');
      setFocus(ev.currentTarget, oldTarget);
      if (props.onClick)
        props.onClick();
    },
    onKeyDown: (ev) => {
      ev.stopPropagation();
      const currentTarget = ev.currentTarget;
      switch (ev.code) {
        case "ArrowLeft":
        case "KeyH": {
          const nextFocus = currentTarget.parentElement?.closest('[role="treeitem"],[role="tree"]');
          if (parent) {
            setFocus(nextFocus);
          }
          break;
        }
        case "ArrowUp":
        case "KeyK": {
          ev.preventDefault();
          const prevSibling = currentTarget.previousElementSibling;
          if (prevSibling) {
            return setFocus(prevSibling);
          }
          break;
        }
        case "ArrowDown":
        case "KeyJ": {
          ev.preventDefault();
          const nextSibling = currentTarget.nextElementSibling;
          if (nextSibling) {
            return setFocus(nextSibling);
          }
          break;
        }
        case "ArrowRight":
        case "KeyL": {
          const next = currentTarget.querySelector('[role="treeitem"]');
          if (next)
            setFocus(next);
          break;
        }
      }
    }
  }, props.children);
};
export const AriaTree = (props) => /* @__PURE__ */ h("ul", {
  role: "tree",
  tabIndex: 0,
  onKeyDown: (ev) => {
    console.log("[AriaTree] keydown:", ev.code);
    switch (ev.code) {
      case "ArrowRight":
      case "KeyL":
        ev.stopPropagation();
        const next = ev.currentTarget.querySelector('[role="treeitem"]');
        if (next) {
          ev.currentTarget.tabIndex = -1;
          next.tabIndex = 0;
          next.focus();
        }
        break;
      default:
        ev.stopPropagation();
        console.log(`[AriaTree] I don't know how to handle ${ev.code}`);
        break;
    }
  }
}, /* @__PURE__ */ h(AriaTreeLevel.Provider, {
  value: 1
}, props.children));
export const AriaGroup = (props) => {
  const level = useContext(AriaTreeLevel);
  return /* @__PURE__ */ h("ul", {
    role: "group"
  }, /* @__PURE__ */ h(AriaTreeLevel.Provider, {
    value: level + 1
  }, props.children));
};
