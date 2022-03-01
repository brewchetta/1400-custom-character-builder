import { useState } from 'react'
import * as rulesets from 'data/_rulesets'
import { capitalize } from 'utilities'
import FormSelect from 'shared/FormSelect'
import CharacterBioForm from "2-CharacterBioForm"
import CharacterClassForm from "3-CharacterClassForm"
import FormCheckbox from "shared/FormCheckbox"

function CharacterForm() {

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

  function handleSubmit(e) {
    e.preventDefault()
    alert('Under construction!')
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
        setCharacterHistory
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
        setCurrentExpertise
      }} />

    </form>
  )

}

export default CharacterForm
