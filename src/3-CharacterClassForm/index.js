import { useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
import ClassDetailsDisplay from './ClassDetailsDisplay'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import ClassEquipmentInputs from './ClassEquipmentInputs'
import ClassEquipmentDisplay from "./ClassEquipmentDisplay"
import useCharacterClasses from 'hooks/useCharacterClasses'
import useSpells from 'hooks/useSpells'

function CharacterClassForm({currentRuleset, currentClassKey, setCurrentClassKey, currentSpells, setCurrentSpells, currentSkills, setCurrentSkills, currentItems, setCurrentItems, currentExpertise, setCurrentExpertise}) {

  const { classes } = useCharacterClasses(currentRuleset)
  const { spells } = useSpells(currentRuleset)
  const currentClass = classes[currentClassKey]

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
        (<SpellsInputs
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
        (<SkillsInputs
          label={`Trained Skills Left (upgrade to d8): ${currentClass.skillSlots - currentSkills.length}`}
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
          label={`Expert Skills Left (upgrade to d10): ${currentClass.expertise - currentExpertise.length}`}
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
