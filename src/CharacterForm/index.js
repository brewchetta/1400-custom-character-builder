import { useState } from 'react'
import * as rulesets from '../data/_rulesets'
import { capitalize } from '../utilities'
import FormSelect from '../shared-components/FormSelect'
import CharacterClassForm from "../CharacterClassForm"
import CharacterBiographyForm from "../CharacterBiographyForm"

function CharacterForm(props) {

  const [currentRuleset, setCurrentRuleset] = useState(rulesets.core)

  const [characterName, setCharacterName] = useState('')

  const [currentClassKey, setCurrentClassKey] = useState('bard')
  const [currentSpells, setCurrentSpells] = useState({})
  const [currentSkills, setCurrentSkills] = useState([])
  const [currentItems, setCurrentItems] = useState({})
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

      <CharacterBiographyForm />

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
        setCurrentItems
      }} />

    </form>
  )

}

export default CharacterForm
