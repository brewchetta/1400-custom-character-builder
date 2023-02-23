import arrow from 'assets/images/triangle-icon.png'

function BackButton({onClick, className, style={}}) {

  if (onClick && typeof onClick !== "function") {
    console.warn('The onClick prop for the BackButton component must be a function')
  }

  return (
    <button onClick={onClick} className={`icon-button ${className}`} style={style}>
      <img src={arrow} alt={'Back'} style={{ width: style.width || '1em', transform: style.transform || 'rotate(90deg)' }} />
    </button>
  )
}

export default BackButton
