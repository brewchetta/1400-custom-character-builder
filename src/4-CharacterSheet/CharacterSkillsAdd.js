import { useState, useEffect } from 'react'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import allSkills from 'data/_skillsCore'

function CharacterSkillsAdd({currentSkills, handleAddSkill}) {

  const availableSkills = allSkills.filter(s => !Object.keys(currentSkills).includes(s))

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
