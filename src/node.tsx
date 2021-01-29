import { h } from 'preact';
import { Folder } from './Folder'
import { File } from './File'
import { isFile, isFolder } from './store'
import type { IFile, IFolder } from './store'
import { AriaTreeItem } from './Aria'


// Note: ARIA requires each node to know the size of its set (Hence (setsize) => (...) => ...)
export const renderNode = (setsize:number) => (node:IFile|IFolder, index:number) => {
  const posinset = index + 1 // Note: ARIA posinset is 1-based, not 0-based
  return (
    <AriaTreeItem
      expandable={isFolder(node)}
      setsize={setsize}
      posinset={ posinset }
      onFocus={ () => node.select() }
      onClick={ () => node.select() }
      >
      {
        isFile(node)
          ?
          <File file={node} />
          :
          <Folder folder={node} />
      }
    </AriaTreeItem>
  )
}

