import { capitalize } from 'utilities'

function RulePanel({ rule, style={}, className='' }) {

  const renderedInfo = (
    Array.isArray(rule) ? rule.map((section, i) => <p key={i} className={className}>{section}</p>)
    : typeof rule === "object" ? Object.keys(rule).map(key => <p key={key} className={className}><i>{capitalize(key)}</i><br/>{rule[key]}</p>)
    : <p className={className}>{rule}</p>
  )

  return (
    <div className={`${className} border-black background-white padding-medium margin-medium`} style={style}>
      { renderedInfo }
    </div>
  )
}

export default RulePanel
