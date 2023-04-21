function DrawerModal({className, style, children, isOpen}) {

  return (
    <>
      <div className="drawer-mask"/>

      <div className={`${className} bottom-drawer ${isOpen ? "open" : "closed"}`} style={style}>
        {children}
      </div>
    </>
  )
}

export default DrawerModal
