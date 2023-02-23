import helpIcon from 'assets/images/help-icon.png'

function IconButton({onClick, className, src=helpIcon, alt='icon button', style={}}) {

  if (!onClick || typeof onClick !== "function") {
    console.warn('The onClick prop for the IconButton component must be a function')
  }

  return (
    <button onClick={onClick} className={`icon-button ${className}`} style={style}>
      <img src={src} alt={alt} />
    </button>
  )
}

export default IconButton

// example use:
// <IconButton
  // onClick={handleClick}
  // src={arrowIcon}
  // alt='Back Button'
  // style={ {transform: 'rotate(90deg)'} }
// />
