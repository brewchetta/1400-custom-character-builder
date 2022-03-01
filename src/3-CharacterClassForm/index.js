import { useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
import ClassDetailsDisplay from './ClassDetailsDisplay'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import ClassEquipmentInputs from './ClassEquipmentInputs'
import ClassEquipmentDisplay from "./ClassEquipmentDisplay"
import useCharacterClasses from 'hooks/useCharacterClasses'
import useSpells from 'hooks/useSpells'

function CharacterClassForm({currentRulesets, currentClassKey, setCurrentClassKey, currentSpells, setCurrentSpells, currentSkills, setCurrentSkills, currentItems, setCurrentItems, currentExpertise, setCurrentExpertise}) {

  const { classes } = useCharacterClasses(currentRulesets)
  const { spells } = useSpells(currentRulesets)
  const currentClass = classes[currentClassKey]
  const maxSpells = classes[currentClassKey]?.spells

  // console.log('RULESET: ', currentRulesets);
  // console.log('CLASSES: ', classes);
  // console.log('CURRENT CLASS: ', currentClass)
  // console.log('CURRENT ITEMS: ', currentItems)
  // console.log('CURRENT SPELLS: ', currentSpells)
  // console.log('CURRENT SKILLS: ', currentSkills)

  // useEffect(() => {
  //   if (!classes[currentClassKey]) {
  //     setCurrentClassKey('bard')
  //     setCurrentSpells({})
  //     setCurrentSkills([])
  //     setCurrentItems({})
  //   }
  // }, [classes, currentClassKey])

  // useEffect(() => {
  //   for (let expertise of currentExpertise) {
  //     if (!currentSkills.includes(expertise)) {
  //       setCurrentExpertise(prev => prev.filter(ex => ex !== expertise))
  //     }
  //   }
  // }, [currentSkills, currentExpertise])

  // useEffect(() => {
  //   setCurrentSpells({})
  // }, [spells])

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
        <SpellsInputs
          spells={spells}
          currentSpells={currentSpells}
          setCurrentSpells={setCurrentSpells}
          maxSpells={maxSpells}
        />
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

      {currentClass?.expertise && currentSkills.length
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
        currentClass && Object.keys(currentItems).length
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
