import { capitalize } from 'utilities'

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

  const classNames = "text-black text-align-left margin-medium"

  const renderedInfo = (
    Array.isArray(info) ? info.map(section => <p className={classNames}>{section}</p>)
    : typeof info === "object" ? Object.keys(info).map(key => <p className={classNames}><i>{capitalize(key)}</i><br/>{info[key]}</p>)
    : <p className={classNames}>{info}</p>
  )

  return (
    <div
      className="border-black background-white"
      style={calculatedStyle}
    >

      {renderedInfo}

    </div>
  )

}

export default HelpPopup
