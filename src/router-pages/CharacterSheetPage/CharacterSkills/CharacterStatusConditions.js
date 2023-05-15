import { useStatusConditionsContext } from 'context/StatusConditionsContext'
import FormCheckbox from 'shared/FormCheckbox'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import { rulesPlay } from 'data/rules'

function CharacterStatusConditions() {

  const { statusConditions, setStatusConditions } = useStatusConditionsContext()

  const handleToggleCondition = key => setStatusConditions(prev => ({...prev, [key]: !prev[key]}))

  return (
    <div>
      <FormCheckbox
      name={'lucky'}
      labelText={'luck dice'}
      info={rulesPlay.luck}
      onChange={() => handleToggleCondition('luck')}
      checked={statusConditions.luck} />

      <FormCheckbox
      name={'injured'}
      className="crossmark crossable-checkbox"
      labelText={statusConditions.injured ? 'injured' : 'healthy'}
      info={rulesPlay.harm}
      onChange={() => handleToggleCondition('injured')}
      checked={statusConditions.injured} />
    </div>
  )
}
// <button onClick={() => handleToggleCondition('helped')}>
// {statusConditions.helped ? "Remove Helped By Circumstance" : "Helped By Circumstance"}
// </button>

export default ConditionalWrapper(CharacterStatusConditions)
