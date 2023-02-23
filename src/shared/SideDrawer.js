import { useState, useEffect } from 'react'
import BackButton from 'shared/BackButton'

const setIsOpenNotDefinedWarning = () => console.warn('setIsOpen is not defined for SideDrawer.\nMake sure you pass it down as a prop.');

function SideDrawer({ isOpen=false, setIsOpen=setIsOpenNotDefinedWarning, children, style={}, className='' }) {

  const [visible, setVisible] = useState(true)

  const handleTransitionEnd = e => {
    if (!isOpen) {
      setVisible(false)
    }
  }

  useEffect(() => {
    setVisible(true)
  }, [isOpen])

  return (
    <>


      { isOpen ? <div className="drawer-mask" onClick={ () => setIsOpen(false) } /> : null }

      <div
      className={`side-drawer padding-large ${ isOpen ? 'open' : 'closed' } ${className}`}
      onTransitionEnd={handleTransitionEnd}
      style={style}
      >
        <BackButton onClick={() => setIsOpen(false)} />

        { visible ? children : null }

      </div>

    </>
  )

}

export default SideDrawer

// example:
// <SideDrawer isOpen={isOpen}>
//     <p>Hello!</p>
// </SideDrawer>
