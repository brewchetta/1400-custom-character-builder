import { useState } from 'react'
import * as rulesets from 'data/_rulesets'
import { capitalize } from 'utilities'
import FormSelect from 'shared/FormSelect'
import CharacterBioForm from "2-CharacterBioForm"
import CharacterClassForm from "3-CharacterClassForm"

function CharacterForm(props) {

  const [currentRuleset, setCurrentRuleset] = useState(rulesets.core)

  const [characterName, setCharacterName] = useState('')
  const [ancestry, setAncestry] = useState('')

  const [currentClassKey, setCurrentClassKey] = useState('bard')
  const [currentSpells, setCurrentSpells] = useState({})
  const [currentAncestrySpells, setCurrentAncestrySpells] = useState({})
  const [currentAncestrySkills, setCurrentAncestrySkills] = useState([])
  const [currentSkills, setCurrentSkills] = useState([])
  const [currentExpertise, setCurrentExpertise] = useState([])
  const [currentItems, setCurrentItems] = useState({})
  const [characterQuirk, setCharacterQuirk] = useState('')
  const [characterHistory, setCharacterHistory] = useState('')
  // console.log('RULESET: ', ruleset);

  function handleSubmit(e) {
    e.preventDefault()
    alert('Under construction!')
  }

  return (
    <form onSubmit={handleSubmit}>

      <FormSelect
        value={currentRuleset}
        onChange={e => setCurrentRuleset(e.target.value)}
        labelText="Rulesets: "
      >
        {Object.values(rulesets).map(r => <option key={r} value={r}>{capitalize(r)}</option>)}
      </FormSelect>

      <br/>

      <CharacterBioForm {...{
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
        currentRuleset,
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
