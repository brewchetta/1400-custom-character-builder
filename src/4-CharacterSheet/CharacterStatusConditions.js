import { useStatusConditionsContext } from 'context/StatusConditionsContext'

function CharacterStatusConditions() {

  const { statusConditions, setStatusConditions } = useStatusConditionsContext()

  const handleToggleCondition = key => setStatusConditions(prev => ({...prev, [key]: !prev[key]}))

  return (
    <div>
      <button onClick={() => handleToggleCondition('hindered')}>
      {statusConditions.hindered ? "Remove Hindered" : "Hindered"}
      </button>

      <button onClick={() => handleToggleCondition('injured')}>
      {statusConditions.injured ? "Remove Injured" : "Injured"}
      </button>

      <button onClick={() => handleToggleCondition('helped')}>
      {statusConditions.helped ? "Remove Helped By Circumstance" : "Helped By Circumstance"}
      </button>
    </div>
  )
}

export default CharacterStatusConditions