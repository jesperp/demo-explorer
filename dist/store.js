import {getParentOfType, getRoot, getType, types} from "../_snowpack/pkg/mobx-state-tree.js";
export var FileType;
(function(FileType2) {
  FileType2["Image"] = "image";
  FileType2["Txt"] = "text";
  FileType2["Folder"] = "folder";
})(FileType || (FileType = {}));
const NodeType = types.union(types.late(() => File), types.late(() => Folder));
const NodeBase = types.model({
  name: types.identifier
}).views((self) => ({
  get path() {
    const path = [];
    let current = self, parent;
    try {
      while (parent = getParentOfType(current, NodeType)) {
        path.unshift(parent.name);
        current = parent;
      }
    } catch (e) {
    }
    return path;
  }
})).actions((self) => ({
  select() {
    const root = getRoot(self);
    root.setSelected(self.name);
    console.log(`[NodeBase.select] selecting ${self}`);
  }
}));
const Folder = types.compose(NodeBase, types.model({
  filetype: types.literal(FileType.Folder),
  nodes: types.array(NodeType)
})).named("Folder");
const File = types.compose(NodeBase, types.model({
  filetype: types.enumeration(Object.values(FileType)),
  content: ""
})).named("File");
const Explorer = types.model("Explorer", {
  label: "",
  nodes: types.array(NodeType),
  selected: types.maybe(types.reference(NodeType))
}).actions((self) => ({
  clearSelected: () => {
    self.selected = void 0;
  },
  setSelected: (filename) => {
    self.selected = filename;
  }
}));
export const isFile = (node) => getType(node).name === "File";
export const isFolder = (node) => getType(node).name === "Folder";
export const explorer = Explorer.create({
  label: "Explore",
  nodes: [
    File.create({
      name: "readme.txt",
      filetype: FileType.Txt,
      content: `
      Hello world!

      This is cool
      `
    }),
    File.create({name: "life.jpg", filetype: FileType.Image}),
    Folder.create({
      name: "Pictures",
      filetype: FileType.Folder,
      nodes: [
        File.create({name: "joy.jpg", filetype: FileType.Image}),
        File.create({name: "peace.jpg", filetype: FileType.Image}),
        Folder.create({
          name: "Subfolder",
          filetype: FileType.Folder,
          nodes: [
            File.create({
              name: "note.txt",
              filetype: FileType.Txt,
              content: "Subfolders works too!"
            }),
            File.create({
              name: "verylongfilename.txt",
              filetype: FileType.Txt,
              content: "Long file names are truncated!"
            })
          ]
        })
      ]
    }),
    File.create({name: "nature.jpg", filetype: FileType.Image})
  ]
});
