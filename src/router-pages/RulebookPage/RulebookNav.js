import { Link, useParams } from 'react-router-dom'
import { capitalize } from 'utilities'

function RulebookNav({navOptions}) {

  const params = useParams()
  const isOpen = !params.nav ? 'open' : 'closed'

  return (
    <div className={`border-black padding-medium bottom-drawer text-align-center semi-transparent-background ${isOpen}`}>
      <h1>Rulebook</h1>
      <div className='grid-columns-medium padding-top-small' style={{gridGap: '3em'}}>
        {
          navOptions.map(option => (
            <Link
            key={option}
            to={`/rulebook/${option}`}
            className="text-black no-decoration swatch-hover-background-alternating text-large">
            {capitalize(option)}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default RulebookNav
