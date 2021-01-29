import {h} from "../_snowpack/pkg/preact.js";
import "./App.css.proxy.js";
import {observer} from "../_snowpack/pkg/mobx-react-lite.js";
import {AriaTree} from "./Aria.js";
import {renderNode} from "./node.js";
const Content = observer(({explorer}) => {
  const selected = explorer.selected;
  function renderFileType() {
    switch (selected.filetype) {
      case "image": {
        return /* @__PURE__ */ h("div", {
          className: "relative"
        }, /* @__PURE__ */ h("div", {
          className: "cursor-auto opacity-60 p-28"
        }, /* @__PURE__ */ h("svg", {
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, /* @__PURE__ */ h("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        }))), /* @__PURE__ */ h("img", {
          className: "absolute top-0 left-0 rounded-sm",
          onLoadStart: ({target}) => {
            const img = target;
            target?.classList.add("hidden");
            img?.previousElementSibling?.classList.add("animate-pulse");
          },
          onLoad: ({target}) => {
            const img = target;
            img?.classList.remove("hidden");
            img?.previousElementSibling?.classList.remove("animate-pulse");
          },
          src: `https://picsum.photos/seed/${selected.name}/700`
        }));
      }
      case "folder": {
        return /* @__PURE__ */ h("p", null, "This is a folder, why not explore some of it's content?");
      }
      case "text": {
        return /* @__PURE__ */ h("div", {
          className: "space-y-2"
        }, selected.content.split("\n\n").map((content) => /* @__PURE__ */ h("p", null, content)));
      }
      default:
        return /* @__PURE__ */ h("span", null, "dunno how to render ", selected.filetype);
    }
  }
  return /* @__PURE__ */ h("main", {
    className: "z-0 flex-grow px-10 py-8 bg-white shadow-md rounded-md"
  }, selected ? /* @__PURE__ */ h("div", {
    className: "space-y-4"
  }, /* @__PURE__ */ h("h2", {
    className: "flex overflow-hidden font-mono font-bold slash-separated space-x-2"
  }, /* @__PURE__ */ h("button", {
    className: "flex-shrink-0 font-bold text-blue-800 whitespace-nowrap",
    onClick: (_) => explorer.clearSelected()
  }, "Home"), selected.path.map((crumb) => /* @__PURE__ */ h("div", {
    className: "whitespace-nowrap"
  }, crumb)), /* @__PURE__ */ h("div", {
    className: "whitespace-nowrap"
  }, selected.name)), renderFileType()) : /* @__PURE__ */ h("article", {
    className: "space-y-2"
  }, /* @__PURE__ */ h("h1", {
    className: "text-lg font-bold"
  }, "Hello!"), /* @__PURE__ */ h("p", null, "A simple file explorer to showcase some frontend technology. Oh, it supports keyboard navigation as well, try tab and arrow keys in the file tree. Tech stack:"), /* @__PURE__ */ h("ul", {
    className: "ml-2"
  }, /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    href: "https://www.typescriptlang.org"
  }, "Typescript")), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    href: "https://mobx-state-tree.js.org/"
  }, "MobX"), " for state management"), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    href: "https://preactjs.com/"
  }, "React"), " for UI"), /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("a", {
    href: "https://tailwindcss.com/"
  }, "Tailwind"), " for styling")), /* @__PURE__ */ h("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ h("svg", {
    id: "emoji",
    width: "200",
    height: "200",
    viewBox: "0 0 72 72"
  }, /* @__PURE__ */ h("g", {
    id: "hair"
  }), /* @__PURE__ */ h("g", {
    id: "skin"
  }, /* @__PURE__ */ h("path", {
    fill: "#fadcbc",
    d: "M18.6575,19.2409c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36"
  })), /* @__PURE__ */ h("g", {
    id: "skin-shadow"
  }), /* @__PURE__ */ h("g", {
    id: "color"
  }), /* @__PURE__ */ h("g", {
    id: "line"
  }, /* @__PURE__ */ h("path", {
    fill: "none",
    stroke: "#000000",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M18.6575,19.2409 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115c-1.6927,0.9684-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l11.5324,15.0998l2.6883,3.3878l-7.8906-10.3314 c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421 L21.752,46.226l6.2707,7.899c5.467,6.2731,14.5147,5.9306,20.7863,0.465c3.6045-3.1684,5.9226-7.5482,6.5154-12.3105 c0.3858-4.2326,0.807-15.301,0.807-15.301c-0.1826-2.6008-3.1353-4.5234-3.5158-3.1802l-4.8939,9.7575l-3.3657-4.2224 l3.3657,4.2224l-3.3657-4.2224L30.8909,12.1248c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115s-2.2799,3.1256-1.3115,4.8183 c0.1552,0.2714,0.3458,0.5209,0.5667,0.742l4.2488,5.5631L36,30.4167L22.581,12.7366c-0.9683-1.6927-3.1256-2.2799-4.8183-1.3115 s-2.2799,3.1256-1.3116,4.8183c0.1552,0.2714,0.3458,0.5209,0.5667,0.7421L31.6894,36"
  }), /* @__PURE__ */ h("path", {
    fill: "none",
    stroke: "#000000",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "2",
    d: "M11.6726,42.8719c0,2.5663,1.747,4.6428,3.9059,4.6428"
  }), /* @__PURE__ */ h("path", {
    fill: "none",
    stroke: "#000000",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "2",
    d: "M7.0614,42.4369c0,5.5959,3.8094,10.1241,8.5171,10.1241"
  }), /* @__PURE__ */ h("path", {
    fill: "none",
    stroke: "#000000",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "2",
    d: "M45.2619,21.2377c0-2.5663-1.747-4.6428-3.9059-4.6428"
  }), /* @__PURE__ */ h("path", {
    fill: "none",
    stroke: "#000000",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "2",
    d: "M49.8731,21.6727c0-5.5959-3.8094-10.1241-8.5171-10.1241"
  }))))));
});
const App = observer(({explorer}) => /* @__PURE__ */ h("div", {
  className: "relative flex sm:items-start sm:justify-center sm:p-10 sm:pt-14 sm:space-x-6 app"
}, /* @__PURE__ */ h("button", {
  onClick: (e) => e.currentTarget?.nextElementSibling?.classList.toggle("hidden"),
  className: "absolute top-0 right-0 z-50 block float-right p-3 m-3 bg-green-100 rounded-full sm:hidden"
}, /* @__PURE__ */ h("svg", {
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, /* @__PURE__ */ h("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M4 6h16M4 12h16M4 18h16"
}))), /* @__PURE__ */ h("nav", {
  className: "absolute z-30 hidden w-48 px-2 py-3 bg-white shadow-xl select-none ring-gray-300 ring-1 sm:ring-0 sm:block sm:shadow-md right-6 top-16 sm:static rounded-md"
}, /* @__PURE__ */ h("h2", {
  className: "hidden pl-1 font-bold sm:block"
}, explorer.label), /* @__PURE__ */ h(AriaTree, null, explorer.nodes.map(renderNode(explorer.nodes.length)))), /* @__PURE__ */ h(Content, {
  explorer
})));
export default App;
