import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as rulesets from 'data/_rulesets'
import { capitalize, buildUpgradedSkillsList } from 'utilities'
import CharacterBioForm from './CharacterBioForm'
import CharacterClassForm from './CharacterClassForm'
import FormCheckbox from 'shared/FormCheckbox'
import Toast from 'shared/Toast'
import useCharacterClasses from 'hooks/useCharacterClasses'
import useCharacterAncestries from 'hooks/useCharacterAncestries'
import useToggleOnCondition from 'hooks/useToggleOnCondition'
import { addLocalCharacter } from 'utils/local-storage'
import { toSpinalCase } from 'utilities'
import { v4 as uuid } from 'uuid'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'

function NewCharacterForm() {

  const navigate = useNavigate()

  const [currentRulesets, setCurrentRulesets] = useState([rulesets.core])
  const [characterName, setCharacterName] = useState('')
  const [ancestry, setAncestry] = useState('default')
  const [characterQuirk, setCharacterQuirk] = useState('')
  const [characterHistory, setCharacterHistory] = useState('')

  const [currentClassKey, setCurrentClassKey] = useState('default')
  const [currentSpells, setCurrentSpells] = useState({})
  const [currentAncestrySpells, setCurrentAncestrySpells] = useState({})
  const [currentAncestrySkills, setCurrentAncestrySkills] = useState([])
  const [currentSkills, setCurrentSkills] = useState([])
  const [currentExpertise, setCurrentExpertise] = useState([])
  const [currentItems, setCurrentItems] = useState({})
  const [validationErrors, setValidationErrors] = useState([])

  const { classes } = useCharacterClasses(currentRulesets)
  const { ancestries } = useCharacterAncestries(currentRulesets)

  const shouldDisplayClassForm = useToggleOnCondition(
    ancestry !== 'default'
    && characterName.length
    && (currentAncestrySkills.length || 0) >= (ancestries[ancestry]?.skills || 0)
    && (Object.keys(currentAncestrySpells).length || 0) >= (ancestries[ancestry]?.spells || 0)
  )

  function validate() {
    const valErrs = []
    if (!characterName.length) { valErrs.push(`Name can't be empty`) }
    if (!ancestry || ancestry === 'default') { valErrs.push(`Ancestry can't be blank`) }
    if (!currentClassKey.length || currentClassKey === 'default') { valErrs.push(`You must choose a class`) }
    if (classes[currentClassKey]?.spells > Object.keys(currentSpells).length) { valErrs.push(`Not all spells have been chosen`) }
    if (classes[currentClassKey]?.skillSlots > currentSkills.length) { valErrs.push(`Not all skills have been chosen`) }
    if (classes[currentClassKey]?.expertise > currentExpertise.length) { valErrs.push(`Not all skills have been chosen`) }
    if (classes[currentClassKey]?.equipmentGroups?.length > Object.keys(currentItems).length) { valErrs.push(`Not all equipment has been chosen`) }
    setValidationErrors(valErrs)
    return valErrs
  }

  function buildCharacterObject() {

    const character = {
      id: uuid(),
      ancestry,
      name: characterName,
      className: currentClassKey,
      quirk: characterQuirk,
      history: characterHistory,
      skills: buildUpgradedSkillsList({}, ...currentSkills, ...currentExpertise, ...currentAncestrySkills, classes[currentClassKey]?.coreskill),
      spells: [...Object.keys(currentSpells), ...Object.keys(currentAncestrySpells)],
      items: [
        ...classes[currentClassKey].equipmentGuaranteed,
        ...Object.values(currentItems)
      ],
      gold: 2
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
      const { id, name } = addLocalCharacter(buildCharacterObject())
      navigate(`/characters/${toSpinalCase(name)}/${id}`)
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
        className="checkmark"
      />
     )
  })

  return (
    <form onSubmit={handleSubmit} className="hand-written">

      <p><HelpButton info={rulesPlay['custom rules']} /> Rulesets:</p>

      <div className="flex-wrap-container">
        {renderedRulesets}
      </div>

      <br/>

      <div className="grid-columns-large">


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

      <CharacterClassForm
      displayCondition={shouldDisplayClassForm}
      {...{
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

      </div>

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

export default NewCharacterForm
