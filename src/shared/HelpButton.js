import { useState } from 'react'
import HelpPopup from './HelpPopup'

function HelpButton({info}) {

  const [open, setOpen] = useState(false)
  const [cursorPos, setCursorPos] = useState([0,0])

  const toggleOpen = () => setOpen(open => !open)

  const handleOpenHelp = event =>  {
    toggleOpen()
    setCursorPos([event.clientX, event.clientY])
  }

  const handleMouseLeave = () => setOpen(false)

  return (
    <>
      <button onClick={handleOpenHelp} onMouseLeave={handleMouseLeave}>?{ open ? <HelpPopup info={info} position={cursorPos} /> : null }</button>

    </>
  )

}

export default HelpButton
