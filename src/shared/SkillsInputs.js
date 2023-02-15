import FormCheckbox from 'shared/FormCheckbox'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import { toSpinalCase, randomAttribute } from 'utilities'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'

function SkillsInputs({possibleSkills, currentSkills, setCurrentSkills, maxSkills, defaultSkill, label, checkboxClass}) {

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
        className={checkboxClass}
      />
    )
  })

  function rollRandomSkill() {
    if (currentSkills.length < maxSkills) {
      const newSkill = randomAttribute(possibleSkills, currentSkills)
      setCurrentSkills(prev => [...prev, newSkill])
    }
  }

  return (
    <>

      {label ? <h4><HelpButton info={rulesPlay.rolling} /> {label}</h4> : null}

      <div className="flex-wrap-container">

      {defaultSkill
        ?
        <FormCheckbox
          key={defaultSkill}
          name={`skill-${toSpinalCase(defaultSkill)}`}
          labelText={defaultSkill}
          checked={true}
          disabled={true}
          className={checkboxClass}
        />
        :
        null
      }

      {renderedSkillCheckboxes}

      </div>

      {
        possibleSkills.length
        ?
        <input
          type="button"
          disabled={currentSkills.length >= maxSkills}
          onClick={rollRandomSkill}
          value="Random Skill"
        />
        :
        null
      }

    </>
  )

}

export default ConditionalWrapper(SkillsInputs)
