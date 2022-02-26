import { useState, useEffect } from 'react'
import FormInput from '../shared-components/FormInput'
import FormSelect from '../shared-components/FormSelect'
import ClassDetailsDisplay from './ClassDetailsDisplay'
import ClassSpellsInputs from './ClassSpellsInputs'
import ClassSkillsInputs from './ClassSkillsInputs'
import ClassItemsInputs from './ClassItemsInputs'
import ClassEquipmentDisplay from "./ClassEquipmentDisplay"
import useCharacterClasses from '../hooks/useCharacterClasses'
import useSpells from '../hooks/useSpells'
import * as rulesets from '../data/_rulesets'
import { capitalize } from '../utilities'

function CharacterClassForm({}) {

  const [characterName, setCharacterName] = useState('')
  const [currentRuleset, setCurrentRuleset] = useState(rulesets.core)
  const { classes } = useCharacterClasses(currentRuleset)
  const { spells } = useSpells(currentRuleset)
  const [currentClassKey, setCurrentClassKey] = useState('bard')
  const currentClass = classes[currentClassKey]
  const [currentSpells, setCurrentSpells] = useState({})
  const [currentSkills, setCurrentSkills] = useState([])
  const [currentItems, setCurrentItems] = useState({})

  // console.log('RULESET: ', ruleset);
  // console.log('CURRENT CLASS: ', currentClass)
  // console.log('CURRENT ITEMS: ', currentItems)
  // console.log('CURRENT SPELLS: ', currentSpells)
  // console.log('CURRENT SKILLS: ', currentSkills)

  useEffect(() => {
    if (!classes[currentClassKey]) {
      setCurrentClassKey('bard')
      setCurrentSpells({})
      setCurrentSkills([])
      setCurrentItems({})
    }
  }, [classes])

  function resetClassAttributes() {
    setCurrentSpells({})
    setCurrentSkills([])
    setCurrentItems({})
  }

  function handleClassChange(e) {
    resetClassAttributes()
    setCurrentClassKey(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submitted')
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

      <FormInput
        name="character-name"
        labelText="Character Name: "
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
      />

      <br/>

      <FormSelect
        value={currentClassKey}
        onChange={handleClassChange}
        labelText="Class: "
      >
        {Object.keys(classes).map(c => <option key={c} value={c}>{classes[c].name}</option>)}
      </FormSelect>

      {
        currentClass
        ?
        (<ClassDetailsDisplay characterClass={currentClass} /> )
        :
        null
      }

      {currentClass?.spells
        ?
        (<ClassSpellsInputs
          spells={spells}
          currentSpells={currentSpells}
          setCurrentSpells={setCurrentSpells}
          maxSpells={classes[currentClassKey]?.spells}
        />)
        :
        null
      }

      {currentClass?.skillSlots
        ?
        (<ClassSkillsInputs
          possibleSkills={currentClass.skills}
          currentSkills={currentSkills}
          setCurrentSkills={setCurrentSkills}
          maxSkills={currentClass.skillSlots}
          defaultSkill={currentClass.coreskill}
        />)
        :
        null
      }

      {
        currentClass?.equipmentGroups || currentClass?.equipmentGuaranteed
        ?
        (<ClassItemsInputs
          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
          equipmentGroups={currentClass.equipmentGroups || []}
          equipmentGuaranteed={currentClass.equipmentGuaranteed || []}
        />)
        :
        null
      }

      {
        Object.keys(currentItems).length
        ?
        <ClassEquipmentDisplay
          currentItems={currentItems}
          equipmentGroups={currentClass.equipmentGroups}
        />
        :
        null
      }

    </form>
  )

}

export default CharacterClassForm
