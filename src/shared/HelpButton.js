import { useState } from 'react'
import HelpPopup from './HelpPopup'
import helpIcon from 'assets/images/help-icon.png'

function HelpButton({ info, className="", style={} }) {

  const [open, setOpen] = useState(false)
  const [cursorPos, setCursorPos] = useState([0,0])

  const toggleOpen = () => setOpen(open => !open)

  const handleOpenHelp = event =>  {
    event.preventDefault()
    event.stopPropagation()
    toggleOpen()
    setCursorPos([event.clientX, event.clientY])
  }

  const handleMouseLeave = () => setOpen(false)

  return (
    <button className={`icon-button  no-invert ${className}`}
      style={style}
      onClick={handleOpenHelp}
      onMouseLeave={handleMouseLeave}
      >
      <img src={helpIcon} alt={'?'} />{ open ? <HelpPopup info={info} position={cursorPos} /> : null }
    </button>
  )
  
}

export default HelpButton
