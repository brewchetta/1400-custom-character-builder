import arrow from 'assets/images/triangle-icon.png'

function BackButton({onClick, className, style={}}) {
  return (
    <button onClick={onClick} className={`icon-button ${className}`} style={style}>
      <img src={arrow} alt={'Back'} style={{ width: style.width || '2em' }} />
    </button>
  )
}

export default BackButton
