import ConditionalWrapper from 'shared/ConditionalWrapper'
import HelpButton from 'shared/HelpButton'
import { useCharacterContext } from 'context/CharacterContext'
import allSkills from 'data/_skillsCore'
import { rulesPlay } from 'data/rules'


function CharacterSkillsAdd() {


  const { currentCharacter: { skills }, setCurrentCharacter } = useCharacterContext()
  const availableSkills = allSkills.filter(s => !Object.keys(skills).includes(s))

  function handleAddSkill(skillName) {
    const updatedSkills = {...skills}
    updatedSkills[skillName] = 8
    setCurrentCharacter(prev => ({...prev, skills: updatedSkills}))
  }

  const renderedAvailableSkills = availableSkills.map(skill => (
    <button key={skill} onClick={() => handleAddSkill(skill)}>{skill}</button>
  ))

  return (
    <div className="border-black background-white padding-small quill-background relative">
      <h4>Add New Skills:</h4>

      {renderedAvailableSkills}

      <HelpButton
        className="position-top-right"
        info={rulesPlay.rolling}
      />
    </div>

  )
}

export default ConditionalWrapper(CharacterSkillsAdd)
