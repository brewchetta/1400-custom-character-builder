import { useRef } from 'react'

function CollapsibleWrapper({ children, isOpen, style = {} }) {

  const collapsible = useRef(null)

  const calculatedStyle = isOpen ? { ...style, maxHeight: collapsible.current.scrollHeight } : style

  return (
    <div
    className={`collapsible ${isOpen ? 'open' : 'closed'}`}
    ref={collapsible}
    style={calculatedStyle}
    >
      { children }
    </div>
  )
}

export default CollapsibleWrapper
