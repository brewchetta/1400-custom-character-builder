import { useState, useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
import ClassDetailsDisplay from './ClassDetailsDisplay'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import ClassEquipmentInputs from './ClassEquipmentInputs'
import ClassEquipmentDisplay from "./ClassEquipmentDisplay"
import useSpells from 'hooks/useSpells'
import useToggleOnCondition from 'hooks/useToggleOnCondition'
import ConditionalWrapper from 'shared/ConditionalWrapper'

function CharacterClassForm({currentRulesets, currentClassKey, setCurrentClassKey, currentSpells, setCurrentSpells, currentSkills, setCurrentSkills, currentItems, setCurrentItems, currentExpertise, setCurrentExpertise, classes}) {

  const { spells } = useSpells(currentRulesets)
  const currentClass = classes[currentClassKey]
  const maxSpells = classes[currentClassKey]?.spells

  const shouldDisplaySkills = useToggleOnCondition(currentClass && Object.keys(currentSpells).length >= (maxSpells || 0))

  const shouldDisplayEquipment = useToggleOnCondition(currentClass && currentSkills.length >= (currentClass?.skillSlots || 0))

  useEffect(() => {
    if (!classes[currentClassKey]) {
      setCurrentClassKey('default')
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
        defaultText='--- Choose your class ---'
      >
        {Object.keys(classes).map(c => <option key={c} value={c}>{classes[c].name}</option>)}
      </FormSelect>

      <ClassDetailsDisplay
        displayCondition={currentClass}
        characterClass={currentClass}
      />

      <SpellsInputs
        displayCondition={currentClass?.spells}
        spells={spells}
        currentSpells={currentSpells}
        setCurrentSpells={setCurrentSpells}
        maxSpells={maxSpells}
        checkboxClass={"checkmark"}
      />

      <SkillsInputs
        displayCondition={shouldDisplaySkills && currentClass?.skillSlots}
        label={`Choose ${currentClass?.skillSlots - currentSkills.length} more skills to upgrade to d8`}
        possibleSkills={currentClass?.skills}
        currentSkills={currentSkills}
        setCurrentSkills={setCurrentSkills}
        maxSkills={currentClass?.skillSlots}
        defaultSkill={currentClass?.coreskill}
        checkboxClass={"checkmark"}
      />

      <SkillsInputs
        displayCondition={shouldDisplaySkills && currentClass?.expertise && currentSkills.length}
        label={`Choose ${currentClass?.expertise - currentExpertise.length} more skills to upgrade to d10`}
        possibleSkills={currentSkills}
        currentSkills={currentExpertise}
        setCurrentSkills={setCurrentExpertise}
        maxSkills={currentClass?.expertise}
        checkboxClass={"checkmark"}
      />

      <ClassEquipmentInputs
        displayCondition={shouldDisplayEquipment && (currentClass?.equipmentGroups || currentClass?.equipmentGuaranteed)}
        currentItems={currentItems}
        setCurrentItems={setCurrentItems}
        equipmentGroups={currentClass?.equipmentGroups || []}
        equipmentGuaranteed={currentClass?.equipmentGuaranteed || []}
      />

      <ClassEquipmentDisplay
        displayCondition={currentClass && Object.keys(currentItems).length}
        currentItems={currentItems}
        equipmentGroups={currentClass?.equipmentGroups}
      />

    </>
  )

}

export default ConditionalWrapper(CharacterClassForm)
