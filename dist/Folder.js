import {h} from "../_snowpack/pkg/preact.js";
import {observer} from "../_snowpack/pkg/mobx-react-lite.js";
import {AriaGroup} from "./Aria.js";
import {renderNode} from "./node.js";
export const Folder = observer(({folder}) => /* @__PURE__ */ h("div", {
  onClick: (_) => folder.select()
}, /* @__PURE__ */ h("div", {
  className: "flex"
}, /* @__PURE__ */ h("div", {
  className: "mr-2"
}, /* @__PURE__ */ h("svg", {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, /* @__PURE__ */ h("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}))), /* @__PURE__ */ h("div", null, folder.name)), /* @__PURE__ */ h(AriaGroup, null, folder.nodes.length === 0 ? /* @__PURE__ */ h("span", {
  className: "ml-4 text-sm text-gray-800"
}, "(empty folder)") : folder.nodes.map(renderNode(folder.nodes.length)))));
