import { useState, useEffect, useRef } from 'react'
import { capitalize } from 'utilities'

function HelpPopup({info, position}) {

  const div = useRef(null)

  // useRef will begin as null so we use state to do one re-render to register the div
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    // eslint-disable-next-line
  }, [])

  // position => [cursorX,cursorY]

  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const divHeight = div.current?.scrollHeight || 0

  const calculatedStyle = {
    left: `${windowWidth - (position[0] + 250) > 40 ? position[0] : null }px`,
    right: `${windowWidth - (position[0] + 250) > 40 ? null : windowWidth - position[0] }px`,
    top: `${position[1] + divHeight < windowHeight ? position[1] : position[1] - divHeight }px`,
    display: loaded ? null : 'hidden'
  }

  const classNames = "text-black text-align-left margin-medium"

  const renderedInfo = (
    Array.isArray(info) ? info.map((section, i) => <p key={i} className={classNames}>{section}</p>)
    : typeof info === "object" ? Object.keys(info).map(key => <p key={key} className={classNames}><i>{capitalize(key)}</i><br/>{info[key]}</p>)
    : <p className={classNames}>{info}</p>
  )

  return (
    <div
      ref={div}
      className="help-popup border-black background-white"
      style={calculatedStyle}
    >

      {renderedInfo}

    </div>
  )

}

export default HelpPopup
