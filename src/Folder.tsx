import { h, FunctionComponent } from 'preact';
import { observer } from "mobx-react-lite";
import type { IFolder } from './store'
import { AriaGroup } from './Aria'
import { renderNode } from './node'

type FolderProps = {
  folder: IFolder
}

export const Folder:FunctionComponent<FolderProps> = observer( ({ folder }) =>
  <div onClick={ _ => folder.select() }>
    <div className="flex">
      <div className="mr-2">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      </div>
      <div>{folder.name}</div>
    </div>

    <AriaGroup>
      {
        folder.nodes.length === 0
          ?
            <span className="ml-4 text-sm text-gray-800">(empty folder)</span>
          :
          folder.nodes.map(renderNode(folder.nodes.length))
      }
    </AriaGroup>
  </div>
)
