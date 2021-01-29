import {h, render} from "../_snowpack/pkg/preact.js";
import "../_snowpack/pkg/preact/devtools.js";
import App from "./App.js";
import "./index.css.proxy.js";
import {explorer} from "./store.js";
import "./tailwind.css.proxy.js";
const root = document.getElementById("root");
if (root) {
  render(/* @__PURE__ */ h(App, {
    explorer
  }), root);
}
