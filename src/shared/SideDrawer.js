import { useState, useEffect } from 'react'

const setIsOpenNotDefinedWarning = () => console.warn('setIsOpen is not defined for SideDrawer.\nMake sure you pass it down as a prop.');

function SideDrawer({ isOpen=false, setIsOpen=setIsOpenNotDefinedWarning, children, style={}, className='' }) {

  const [visible, setVisible] = useState(true)

  const handleTransitionEnd = e => {
    if (!isOpen) {
      setVisible(false)
      console.log("should be invisible");
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
