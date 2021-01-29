import { h, FunctionComponent } from 'preact';
import { observer } from "mobx-react-lite";
import { FileType } from './store'
import type { IFile } from './store'

type FileProps = {
  file: IFile,
}

const getIcon = (filetype:FileType) => {
  switch (filetype) {
    case FileType.Image:
      return (
        <svg className="inline" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )

    case FileType.Txt:
      return (
        <svg className="inline" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    )

    case FileType.Folder:
      return (
        <svg className="inline" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
    )
  }
}

export const File:FunctionComponent<FileProps> = observer( ({ file }) =>
  <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
    <span className="mr-2">{getIcon(file.filetype)}</span>
    <span className="">{file.name}</span>
  </div>
)


