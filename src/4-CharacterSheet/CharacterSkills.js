import { useState } from 'react'
import CharacterSkillsAdd from './CharacterSkillsAdd'

function CharacterSkills({skills, handleChangeSkill, handleAddSkill}) {

  const [isEditable, setIsEditable] = useState(false)

  const skillNames = Object.keys(skills)


  const renderedSkills = skillNames.map(skillKey => (
    <li key={skillKey} className="skill-item">
      {skillKey} [d{skills[skillKey]}]
      {
        isEditable
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

      <h3>Skills <button onClick={() => setIsEditable(prev => !prev)}>📝</button>:</h3>

      <ul className="skills-list grid-columns-small">

        {renderedSkills}

      </ul>

      <CharacterSkillsAdd displayCondition={isEditable} currentSkills={skills} handleAddSkill={handleAddSkill} />

    </>
  )
}

export default CharacterSkills
