import type { IAnyModelType } from 'mobx-state-tree'
import { getParentOfType, getRoot, getType, types, Instance } from "mobx-state-tree";


export enum FileType {
  Image = "image",
  Txt = "text",
  Folder = "folder",
}

// A node is a file or a folder
const NodeType = types
  .union(
    types.late( (): IAnyModelType => File ),
    types.late( (): IAnyModelType => Folder ),
  )

const NodeBase = types
  .model({
    name: types.identifier,
  })
  .views(
    self => ({
      get path() {
        // Get a path of breadcrumbs
        const path = []
        let current = self, parent

        try {
          // Recursively walk up the node tree
          while (parent = getParentOfType(current, NodeType)) {
              path.unshift(parent.name)
              current = parent
          }
        }
        catch (e) {}
        return path
      }
    })
  )
  .actions(
    self => ({
      select() {
        const root:IExplorer = getRoot(self)
        root.setSelected(self.name)
        console.log(`[NodeBase.select] selecting ${self}`)
      }
    })
  )

const Folder = types
  .compose(
    NodeBase,
    types.model({
      filetype: types.literal(FileType.Folder),
      nodes: types.array(NodeType),
    })
  )
  .named("Folder")

const File = types
  .compose(
    NodeBase,
    types.model({
      filetype: types.enumeration<FileType>(Object.values(FileType)),
      content: "",
    })
  )
  .named("File")

const Explorer = types
  .model("Explorer", {
    label: "",
    nodes: types.array(NodeType),
    selected: types.maybe(
      types.reference(NodeType)
    ),
  })
  .actions(
    self => ({
      clearSelected: () => {
        self.selected = undefined
      },
      setSelected: (filename:string) => {
        self.selected = filename
      }
    })
  )

export interface IFolder extends Instance<typeof Folder> {}
export interface IFile extends Instance<typeof File> {}
export interface IExplorer extends Instance<typeof Explorer> {}

// Type guards
export const isFile = (node: IFile | IFolder): node is IFile => getType(node).name === "File"
export const isFolder = (node: IFile | IFolder): node is IFolder => getType(node).name === "Folder"


// Explorer of a faked file system
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
    File.create({ name: "life.jpg", filetype: FileType.Image}),
    Folder.create({
      name: "Pictures",
      filetype: FileType.Folder,
      nodes: [
        File.create({ name: "joy.jpg", filetype: FileType.Image }),
        File.create({ name: "peace.jpg", filetype: FileType.Image }),
        Folder.create({
          name: "Subfolder",
          filetype: FileType.Folder,
          nodes: [
            File.create({
              name: "note.txt",
              filetype: FileType.Txt,
              content: "Subfolders works too!",
            }),
            File.create({
              name: "verylongfilename.txt",
              filetype: FileType.Txt,
              content: "Long file names are truncated!",
            }),
          ]
        }),
      ]
    }),
    File.create({ name: "nature.jpg", filetype: FileType.Image }),
  ]
})
