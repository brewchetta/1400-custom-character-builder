function HelpPopup({info, position}) {

  // position = [cursorX,cursorY]
  const windowWidth = window.innerWidth
  const calculatedStyle = {
    position: "fixed",
    left: `${windowWidth - (position[0] + 250) > 40 ? position[0] : null }px`,
    right: `${windowWidth - (position[0] + 250) > 40 ? null : windowWidth - position[0] }px`,
    top: `${position[1]}px`,
    width: '250px',
    zIndex: 1
  }

  return (
    <div
      className="border-black background-white"
      style={calculatedStyle}
    >

      <p className="text-black">{info}</p>

    </div>
  )

}

export default HelpPopup
