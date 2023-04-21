import { Link, useParams } from 'react-router-dom'
import BackButton from 'shared/BackButton'
import { capitalize } from 'utilities'

function RulePanel({ rule, style={}, className='', nav }) {

  const params = useParams()

  const isOpen = nav === params.nav ? 'open' : 'closed'

  const renderedInfo = (
    Array.isArray(rule) ? rule.map((section, i) => <p key={i} >{section}</p>)
    : typeof rule === "object" ? Object.keys(rule).map(key => <p key={key}><i>{capitalize(key)}</i><br/>{rule[key]}</p>)
    : <p className={className}>{rule}</p>
  )

  return (
    <div className={`${className} border-black background-white padding-medium bottom-drawer ${isOpen}`}
    style={{...style }}>
      <Link to="/rulebook">
        <BackButton onClick={() => 'clicked!'} />
      </Link>
      <h1 className="text-align-center">{capitalize(nav)}</h1>
      { renderedInfo }
    </div>
  )
}

export default RulePanel
