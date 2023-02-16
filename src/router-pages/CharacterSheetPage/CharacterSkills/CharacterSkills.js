import CharacterStatusConditions from "./CharacterStatusConditions"
import CharacterSkillsAdd from './CharacterSkillsAdd'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'
import { useEditableContext } from 'context/EditableContext'
import { useStatusConditionsContext } from 'context/StatusConditionsContext'
import { useCharacterContext } from 'context/CharacterContext'

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
    <li key={skillKey} className="skill-item">
      {skillKey} [d{(!hindered && !injured) || editable ? skills[skillKey] : 4}{helped && ' + d6'}]
      {
        editable
        ?
        <>
          <button onClick={() => handleChangeSkill(skillKey, -2)}>-</button>
          <button onClick={() => handleChangeSkill(skillKey, 2)}>+</button>
        </>
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

      <CharacterSkillsAdd displayCondition={editable} currentSkills={skills} />

    </div>
  )
}

export default CharacterSkills