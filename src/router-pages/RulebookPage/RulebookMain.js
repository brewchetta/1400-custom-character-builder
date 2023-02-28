import rules from 'data/rules/_rulesPlay'
import RulePanel from "./RulePanel"

function TutorialMain(props) {
  return (
    <div className="grid-columns-large">

      <RulePanel rule={rules.play} />

      <RulePanel rule={rules.rolling} />

      <RulePanel rule={rules.spells} />

      <RulePanel rule={rules.rituals} />

      <RulePanel rule={rules.load} />

      <RulePanel rule={rules.advancement} />

      <RulePanel rule={rules.defence} />

      <RulePanel rule={rules.harm} />

      <RulePanel rule={rules['game mastery']} />

    </div>
  )
}

export default TutorialMain
