import CharacterStatusConditions from "./CharacterStatusConditions"
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'
import { useEditableContext } from 'context/EditableContext'
import { useStatusConditionsContext } from 'context/StatusConditionsContext'
import { useCharacterContext } from 'context/CharacterContext'
import triangleIcon from 'assets/images/triangle-icon.png'

function CharacterSkills() {

  const { editable } = useEditableContext()
  const { statusConditions: {hindered, injured, helped} } = useStatusConditionsContext()
  const { currentCharacter: { skills }, setCurrentCharacter } = useCharacterContext()

  const skillNames = Object.keys(skills)

  function handleChangeSkill(skillKey, numericChange) {

    const updatedSkills = {...skills}
    const updatedValue = updatedSkills[skillKey] + numericChange

    if (updatedValue <= 6) {
      delete updatedSkills[skillKey]
    } else if (updatedValue <= 12) {
      updatedSkills[skillKey] = updatedValue
    }

    setCurrentCharacter(prev => ({...prev, skills: updatedSkills}))
  }

  const renderedSkills = skillNames.map(skillKey => (
    <li key={skillKey} className={`skill-item margin-bottom-small ${editable ? 'centered' : null}`}
    style={{fontSize: '0.9em'}}>
      {skillKey} [d{(!hindered && !injured) || editable ? skills[skillKey] : 4}{helped && ' + d6'}]
      {
        editable
        ?
        <div className="centered">
          <button className="icon-button border-none background-none" onClick={() => handleChangeSkill(skillKey, -2)}>
            <img src={triangleIcon} alt={'decrease'} style={{ width: '0.6rem' }} />
          </button>

          <button className="icon-button border-none background-none" onClick={() => handleChangeSkill(skillKey, 2)}>
            <img src={triangleIcon} alt={'increase'} style={{ width: '0.6rem', transform: 'rotate(180deg)' }} />
          </button>
        </div>
        :
        null
      }
    </li>
  ))

  return (

    <div className="border-black background-white padding-small quill-background relative">

      <HelpButton
        className="position-top-right"
        info={rulesPlay.rolling}
      />

      <h3>Skills:</h3>

      <ul className="skills-list grid-columns-large">

        {renderedSkills}

      </ul>

      <CharacterStatusConditions displayCondition={!editable} />

    </div>
  )
}

export default CharacterSkills
