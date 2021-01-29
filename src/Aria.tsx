import { h, createContext, FunctionComponent } from 'preact';
import { useContext, useRef } from 'preact/hooks'

const AriaTreeLevel = createContext(1)

interface Props {
  posinset: number,
  setsize: number,
  expandable: boolean,
  onFocus?():void,
  onClick?():void,
}


//
// An implementation of roving tabindex as described at W3
// https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_roving_tabindex
//
export const AriaTreeItem:FunctionComponent<Props> = (props) => {
  const self = useRef<HTMLLIElement>(null)

  const setFocus = (next:HTMLElement, oldElement?:HTMLElement) => {
    console.log("[AriaTreeItem] setting focus to", next)
    if (!oldElement) {
      if (self.current) {
        self.current.tabIndex = -1
      }
    }
    else {
        oldElement.tabIndex = -1
    }
    next.tabIndex = 0;
    next.focus()
  }

  return (
    <li
      className="w-full px-2 mx-1 my-1"

      // ARIA related
      role="treeitem"
      tabIndex={-1}
      aria-level={ useContext(AriaTreeLevel) }
      aria-setsize={props.setsize}
      aria-posinset={props.posinset}
      aria-expanded={props.expandable ? true:undefined}

      // React related
      ref={self}
      onFocus={ props.onFocus }
      onClick={
        ev => {
          ev.stopPropagation()
          const oldTarget = document.querySelector('nav [tabindex="0"]') as HTMLElement
          setFocus(ev.currentTarget, oldTarget)
          if (props.onClick)
            props.onClick()
        }
      }
      onKeyDown={
        ev => {
          ev.stopPropagation();
          const currentTarget = ev.currentTarget

          switch (ev.code) {

            // Go to parent 
            case "ArrowLeft":
            case "KeyH": {
              const nextFocus = currentTarget.parentElement?.closest('[role="treeitem"],[role="tree"]') as HTMLElement;
              if (parent) {
                setFocus(nextFocus)
              }
              break
            }

            // Go to previous sibling in tree
            case "ArrowUp":
            case "KeyK": {
              ev.preventDefault()
              const prevSibling = currentTarget.previousElementSibling as HTMLElement
              if (prevSibling) {
                return setFocus(prevSibling)
              }
              break
            }

            // Go to next sibling in tree
            case "ArrowDown":
            case "KeyJ": {
              ev.preventDefault()
              const nextSibling = currentTarget.nextElementSibling as HTMLElement
              if (nextSibling) {
                return setFocus(nextSibling)
              }
              break
            }

            // Step into folder
            case "ArrowRight":
            case "KeyL": {
              const next = currentTarget.querySelector('[role="treeitem"]') as HTMLElement;
              if (next)
                setFocus(next)
              break
            }
          }

        }
      }
      >
      { props.children }
    </li>
  )
}

export const AriaTree:FunctionComponent<{}> = props =>
  <ul
    role="tree"
    tabIndex={0}
    onKeyDown={
      ev => {
        console.log("[AriaTree] keydown:", ev.code)
        switch (ev.code) {

          case "ArrowRight":
          case "KeyL":
            ev.stopPropagation()
            const next = ev.currentTarget.querySelector('[role="treeitem"]') as HTMLElement;
            if (next) {
              ev.currentTarget.tabIndex = -1
              next.tabIndex = 0;
              next.focus()
            }
            break

          default:
            ev.stopPropagation()
            console.log(`[AriaTree] I don't know how to handle ${ev.code}`)
            break

        }
      }
    }
    >
    <AriaTreeLevel.Provider value={1}>
      {props.children}
    </AriaTreeLevel.Provider>
  </ul>


export const AriaGroup:FunctionComponent<{}> = props => {
  const level = useContext(AriaTreeLevel)
  return (
    <ul role="group">
      <AriaTreeLevel.Provider value={level + 1}>
        {props.children}
      </AriaTreeLevel.Provider>
    </ul>
  )
}
