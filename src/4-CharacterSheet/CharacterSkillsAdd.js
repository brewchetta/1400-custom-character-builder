import { useState, useEffect } from 'react'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import { useCharacterContext } from 'context/CharacterContext'
import allSkills from 'data/_skillsCore'


function CharacterSkillsAdd({currentSkills}) {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const availableSkills = allSkills.filter(s => !Object.keys(currentSkills).includes(s))

  function handleAddSkill(skillName) {
    const skills = {...currentCharacter.skills}
    skills[skillName] = 8
    setCurrentCharacter(prev => ({...prev, skills}))
  }

  const renderedAvailableSkills = availableSkills.map(skill => (
    <button key={skill} onClick={() => handleAddSkill(skill)}>{skill}</button>
  ))

  return (
    <div>
      <h4>Add New Skills:</h4>

      {renderedAvailableSkills}
    </div>

  )
}

export default ConditionalWrapper(CharacterSkillsAdd)
