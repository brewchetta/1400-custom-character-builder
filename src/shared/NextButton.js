import arrow from 'assets/images/triangle-icon.png'
import IconButton from 'shared/IconButton'

function BackButton({onClick, className="", style={}, text}) {

  return (
    <div>
      {
        text
        ?
        <button className={`icon-button ${className}`} style={style}>{text}</button> 
        :
        null
      }
      <IconButton onClick={onClick} src={arrow} className={className} style={{...style, transform: 'rotate(180deg)', width: '1em'}} />
    </div>
  )
}

export default BackButton
