import { useState } from 'react'
import * as rulesets from 'data/_rulesets'
import { capitalize, buildUpgradedSkillsList } from 'utilities'
import CharacterBioForm from "2-CharacterBioForm"
import CharacterClassForm from "3-CharacterClassForm"
import FormCheckbox from "shared/FormCheckbox"
import useCharacterClasses from 'hooks/useCharacterClasses'
import useCharacterAncestries from 'hooks/useCharacterAncestries'
import Toast from 'shared/Toast'

function CharacterForm({setCurrentCharacter, currentCharacter}) {

  const [currentRulesets, setCurrentRulesets] = useState([rulesets.core])
  const [characterName, setCharacterName] = useState('')
  const [ancestry, setAncestry] = useState('')
  const [characterQuirk, setCharacterQuirk] = useState('')
  const [characterHistory, setCharacterHistory] = useState('')

  const [currentClassKey, setCurrentClassKey] = useState('bard')
  const [currentSpells, setCurrentSpells] = useState({})
  const [currentAncestrySpells, setCurrentAncestrySpells] = useState({})
  const [currentAncestrySkills, setCurrentAncestrySkills] = useState([])
  const [currentSkills, setCurrentSkills] = useState([])
  const [currentExpertise, setCurrentExpertise] = useState([])
  const [currentItems, setCurrentItems] = useState({})
  const [validationErrors, setValidationErrors] = useState([])

  const { classes } = useCharacterClasses(currentRulesets)
  const { ancestries } = useCharacterAncestries(currentRulesets)

  function validate() {
    const valErrs = []
    if (!characterName.length) { valErrs.push(`Name can't be empty`) }
    if (ancestry === '') { valErrs.push(`Ancestry can't be blank`) }
    if (!currentClassKey.length) { valErrs.push(`You must choose a class`) }
    if (classes[currentClassKey]?.spells > Object.keys(currentSpells).length) { valErrs.push(`Not all spells have been chosen`) }
    if (classes[currentClassKey]?.skillSlots > currentSkills.length) { valErrs.push(`Not all skills have been chosen`) }
    if (classes[currentClassKey]?.expertise > currentExpertise.length) { valErrs.push(`Not all expert skills (d10) have been chosen`) }
    if (classes[currentClassKey]?.equipmentGroups?.length > Object.keys(currentItems).length) { valErrs.push(`Not all equipment has been chosen`) }
    setValidationErrors(valErrs)
    return valErrs
  }

  function buildCharacterObject() {

    const character = {
      ancestry,
      name: characterName,
      className: currentClassKey,
      quirk: characterQuirk,
      history: characterHistory,
      skills: buildUpgradedSkillsList({}, ...currentSkills, ...currentExpertise, ...currentAncestrySkills),
      spells: [...Object.keys(currentSpells), ...Object.keys(currentAncestrySpells)],
      items: [
        ...classes[currentClassKey].equipmentGuaranteed,
        ...Object.values(currentItems)
      ]
    }

    if (classes[currentClassKey].specialText) {
      character.classSpecial = classes[currentClassKey].specialText
    }

    if (ancestries[ancestry]?.specialText) {
      character.ancestrySpecial = ancestries[ancestry].specialText
    }

    return character

  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate().length) {
      setCurrentCharacter(buildCharacterObject())
    }
  }

  function toggleRuleset(rule) {
    if (currentRulesets.includes(rulesets[rule])) {
      setCurrentRulesets(prev => prev.filter(r => r !== rulesets[rule]))
    } else {
      setCurrentRulesets(prev => [...prev, rulesets[rule]])
    }
  }

  const renderedRulesets = Object.keys(rulesets).map(rule => {
    const displayName = capitalize(rulesets[rule])
    return (
      <FormCheckbox
        key={rule}
        name={`ruleset-${rule}`}
        labelText={displayName}
        onChange={() => toggleRuleset(rule)}
        checked={currentRulesets.includes(rulesets[rule])}
        disabled={rule === "core"}
      />
     )
  })

  return (
    <form onSubmit={handleSubmit}>

      <p>Rulesets:</p>

      <div className="flex-wrap-container">
        {renderedRulesets}
      </div>

      <br/>

      <CharacterBioForm {...{
        currentRulesets,
        characterName,
        setCharacterName,
        ancestry,
        setAncestry,
        currentAncestrySkills,
        setCurrentAncestrySkills,
        currentAncestrySpells,
        setCurrentAncestrySpells,
        characterQuirk,
        setCharacterQuirk,
        characterHistory,
        setCharacterHistory,
        ancestries
      }}/>

      <br/>

      <CharacterClassForm {...{
        currentRulesets,
        currentClassKey,
        setCurrentClassKey,
        currentSpells,
        setCurrentSpells,
        currentSkills,
        setCurrentSkills,
        currentItems,
        setCurrentItems,
        currentExpertise,
        setCurrentExpertise,
        classes
      }} />

      <input
        type="submit"
        value="Finalize Character"
      />

      <Toast
        displayCondition={validationErrors.length}
        messages={validationErrors}
        toastType={'error'}
      />

    </form>
  )

}

export default CharacterForm
