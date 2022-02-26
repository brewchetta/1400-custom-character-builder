import FormCheckbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'

function SkillsInputs({possibleSkills, currentSkills, setCurrentSkills, maxSkills, defaultSkill, label}) {

  const skillsLeftToChoose = maxSkills - currentSkills.length

  const handleChange = (skill, isChosen) => {
    if (skillsLeftToChoose && !isChosen) {
      setCurrentSkills(prev => [...currentSkills, skill])
    } else if (isChosen) {
      setCurrentSkills(prev => prev.filter(s => s !== skill))
    }
  }

  const renderedSkillCheckboxes = possibleSkills.map(skill => {
    const isChosen = currentSkills.includes(skill)
    return (
      <FormCheckbox
        key={skill}
        name={`skill-${toSpinalCase(skill)}`}
        labelText={skill}
        checked={isChosen}
        onChange={() => handleChange(skill, isChosen)}
        disabled={!skillsLeftToChoose && !isChosen}
      />
    )
  })

  return (
    <div>

      <h4>{label}</h4>

      {defaultSkill
        ?
        <FormCheckbox
          key={defaultSkill}
          name={`skill-${toSpinalCase(defaultSkill)}`}
          labelText={defaultSkill}
          checked={true}
          disabled={true}
        />
        :
        null
      }

      {renderedSkillCheckboxes}

    </div>
  )

}

export default SkillsInputs
