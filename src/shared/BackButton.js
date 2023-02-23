import arrow from 'assets/images/triangle-icon.png'
import IconButton from 'shared/IconButton'

function BackButton({onClick, className, style={}}) {

  return (
    <IconButton onClick={onClick} src={arrow} className={className} style={{...style, transform: 'rotate(90deg)', width: '1em'}} />
  )
}

export default BackButton
