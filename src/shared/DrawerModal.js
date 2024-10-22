function DrawerModal({className, style, children, isOpen}) {

  return (
    <>
      { isOpen ? <div className="drawer-mask"/> : null }

      <div className={`${className} bottom-drawer ${isOpen ? "open" : "closed"}`} style={style}>
        {children}
      </div>
    </>
  )
}

export default DrawerModal
