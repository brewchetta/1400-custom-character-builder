import rules from 'data/rules/_rulesPlay'
import RulebookNav from "./RulebookNav"
import RulePanel from "./RulePanel"

function TutorialMain(props) {

  const navOptions = ['play', 'rolling', 'spells', 'rituals', 'load', 'advancement', 'defense', 'harm', 'game mastery']

  return (
    <div className="">

      <RulebookNav navOptions={navOptions} nav={''} />

      <RulePanel rule={rules.play} nav={'play'} />

      <RulePanel rule={rules.rolling} nav={'rolling'} className="dice-background" />

      <RulePanel rule={rules.spells} nav={'spells'} />

      <RulePanel rule={rules.rituals} nav={'rituals'} />

      <RulePanel rule={rules.load} nav={'load'} />

      <RulePanel rule={rules.advancement} nav={'advancement'} />

      <RulePanel rule={rules.defence} nav={'defense'} />

      <RulePanel rule={rules.harm} nav={'harm'} />

      <RulePanel rule={rules['game mastery']} nav={'game mastery'} />

    </div>
  )
}

export default TutorialMain
