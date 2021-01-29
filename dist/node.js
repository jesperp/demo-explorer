import {h} from "../_snowpack/pkg/preact.js";
import {Folder} from "./Folder.js";
import {File} from "./File.js";
import {isFile, isFolder} from "./store.js";
import {AriaTreeItem} from "./Aria.js";
export const renderNode = (setsize) => (node, index) => {
  const posinset = index + 1;
  return /* @__PURE__ */ h(AriaTreeItem, {
    expandable: isFolder(node),
    setsize,
    posinset,
    onFocus: () => node.select(),
    onClick: () => node.select()
  }, isFile(node) ? /* @__PURE__ */ h(File, {
    file: node
  }) : /* @__PURE__ */ h(Folder, {
    folder: node
  }));
};
