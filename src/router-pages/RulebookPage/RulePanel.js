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
    <div className={`${className} border-black semi-transparent-background padding-medium bottom-drawer semi-transparent-background ${isOpen}`}
    style={{...style }}>
      <Link to="/rulebook">
        <BackButton className="invert-on-darkmode" onClick={() => 'clicked!'} />
      </Link>
      <h1 className="text-align-center">{capitalize(nav)}</h1>
      { renderedInfo }
    </div>
  )
}

export default RulePanel
