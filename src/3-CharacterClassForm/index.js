import { useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
import ClassDetailsDisplay from './ClassDetailsDisplay'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import ClassEquipmentInputs from './ClassEquipmentInputs'
import ClassEquipmentDisplay from "./ClassEquipmentDisplay"
import useCharacterClasses from 'hooks/useCharacterClasses'
import useSpells from 'hooks/useSpells'
import { randomAttribute } from 'utilities'

function CharacterClassForm({currentRuleset, currentClassKey, setCurrentClassKey, currentSpells, setCurrentSpells, currentSkills, setCurrentSkills, currentItems, setCurrentItems, currentExpertise, setCurrentExpertise}) {

  const { classes } = useCharacterClasses(currentRuleset)
  const { spells } = useSpells(currentRuleset)
  const currentClass = classes[currentClassKey]
  const maxSpells = classes[currentClassKey]?.spells

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
  }, [classes, currentClassKey])

  useEffect(() => {
    for (let expertise of currentExpertise) {
      if (!currentSkills.includes(expertise)) {
        setCurrentExpertise(prev => prev.filter(ex => ex !== expertise))
      }
    }
  }, [currentSkills, currentExpertise])

  useEffect(() => {
    setCurrentSpells({})
  }, [spells])

  function resetClassAttributes() {
    setCurrentSpells({})
    setCurrentSkills([])
    setCurrentItems({})
  }

  function handleClassChange(e) {
    resetClassAttributes()
    setCurrentClassKey(e.target.value)
  }

  // console.log(currentSpells);

  function rollRandomSpell() {
    if (Object.keys(currentSpells).length < maxSpells) {
      const newSpell = randomAttribute(Object.keys(spells), Object.keys(currentSpells))
      setCurrentSpells(prev => ({...prev, [newSpell]: spells[newSpell]}))
    }
  }

  return (
    <>

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
        <>
        <SpellsInputs
          spells={spells}
          currentSpells={currentSpells}
          setCurrentSpells={setCurrentSpells}
          maxSpells={maxSpells}
        />
        <input
          type="button"
          value="Random Spell"
          disabled={Object.keys(currentSpells).length >= maxSpells}
          onClick={rollRandomSpell}
        />
        </>
        :
        null
      }


      {currentClass?.skillSlots
        ?
        (<SkillsInputs
          label={`Choose ${currentClass.skillSlots - currentSkills.length} more skills to upgrade to d8`}
          possibleSkills={currentClass.skills}
          currentSkills={currentSkills}
          setCurrentSkills={setCurrentSkills}
          maxSkills={currentClass.skillSlots}
          defaultSkill={currentClass.coreskill}
        />)
        :
        null
      }

      {currentClass?.expertise
        ?
        (<SkillsInputs
          label={`Choose ${currentClass.expertise - currentExpertise.length} more skills to upgrade to d10`}
          possibleSkills={currentSkills}
          currentSkills={currentExpertise}
          setCurrentSkills={setCurrentExpertise}
          maxSkills={currentClass.expertise}
        />)
        :
        null
      }

      {
        currentClass?.equipmentGroups || currentClass?.equipmentGuaranteed
        ?
        (<ClassEquipmentInputs
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

    </>
  )

}

export default CharacterClassForm
