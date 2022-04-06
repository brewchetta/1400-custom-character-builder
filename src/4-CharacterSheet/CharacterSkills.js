import CharacterSkillsAdd from './CharacterSkillsAdd'
import { useEditableContext } from 'context/EditableContext'
import { useStatusConditionsContext } from 'context/StatusConditionsContext'

function CharacterSkills({skills, handleChangeSkill, handleAddSkill}) {

  const { editable } = useEditableContext()
  const { statusConditions: {hindered, injured, helped} } = useStatusConditionsContext()

  const skillNames = Object.keys(skills)

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

    <>

      <h3>Skills:</h3>

      <ul className="skills-list grid-columns-small">

        {renderedSkills}

      </ul>

      <CharacterSkillsAdd displayCondition={editable} currentSkills={skills} handleAddSkill={handleAddSkill} />

    </>
  )
}

export default CharacterSkills
