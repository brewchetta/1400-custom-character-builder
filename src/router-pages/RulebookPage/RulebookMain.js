import rules from 'data/rules/_rulesPlay'
import RulebookNav from "./RulebookNav"
import RulePanel from "./RulePanel"

function TutorialMain(props) {

  const navOptions = Object.keys(rules)

  const renderRulePanels = navOptions.map(rule => <RulePanel key={rule} rule={rules[rule]} nav={rule} />)

  return (
    <div className="">

      <RulebookNav navOptions={navOptions} nav={''} />

      {renderRulePanels}

    </div>
  )
}

export default TutorialMain
