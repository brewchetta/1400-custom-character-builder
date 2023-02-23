import arrow from 'assets/images/triangle-icon.png'

function BackButton({onClick, className, style}) {
  return (
    <button onClick={onClick} className={`${className}`} style={style}>
      <img src={arrow} alt={'Back'} />
    </button>
  )
}

export default BackButton
