import { useEffect } from 'react'
import FormSelect from 'shared/FormSelect'
import ClassDetailsDisplay from './ClassDetailsDisplay'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import ClassEquipmentInputs from './ClassEquipmentInputs'
import ClassEquipmentDisplay from "./ClassEquipmentDisplay"
import Conditional from 'shared/Conditional'
import useCharacterClasses from 'hooks/useCharacterClasses'
import useSpells from 'hooks/useSpells'

function CharacterClassForm({currentRulesets, currentClassKey, setCurrentClassKey, currentSpells, setCurrentSpells, currentSkills, setCurrentSkills, currentItems, setCurrentItems, currentExpertise, setCurrentExpertise}) {

  const { classes } = useCharacterClasses(currentRulesets)
  const { spells } = useSpells(currentRulesets)
  const currentClass = classes[currentClassKey]
  const maxSpells = classes[currentClassKey]?.spells

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

      <Conditional condition={currentClass}>
        <ClassDetailsDisplay characterClass={currentClass} />
      </Conditional>

      <Conditional condition={currentClass?.spells}>
        <SpellsInputs
          spells={spells}
          currentSpells={currentSpells}
          setCurrentSpells={setCurrentSpells}
          maxSpells={maxSpells}
        />
      </Conditional>

      <Conditional condition={currentClass?.skillSlots}>
        <SkillsInputs
          label={`Choose ${currentClass?.skillSlots - currentSkills.length} more skills to upgrade to d8`}
          possibleSkills={currentClass?.skills}
          currentSkills={currentSkills}
          setCurrentSkills={setCurrentSkills}
          maxSkills={currentClass?.skillSlots}
          defaultSkill={currentClass?.coreskill}
        />
      </Conditional>

      <Conditional condition={currentClass?.expertise && currentSkills.length}>
        <SkillsInputs
          label={`Choose ${currentClass?.expertise - currentExpertise.length} more skills to upgrade to d10`}
          possibleSkills={currentSkills}
          currentSkills={currentExpertise}
          setCurrentSkills={setCurrentExpertise}
          maxSkills={currentClass?.expertise}
        />
      </Conditional>

      <Conditional condition={currentClass?.equipmentGroups || currentClass?.equipmentGuaranteed}>
        <ClassEquipmentInputs
          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
          equipmentGroups={currentClass?.equipmentGroups || []}
          equipmentGuaranteed={currentClass?.equipmentGuaranteed || []}
        />
      </Conditional>

      <Conditional condition={currentClass && Object.keys(currentItems).length}>
        <ClassEquipmentDisplay
          currentItems={currentItems}
          equipmentGroups={currentClass?.equipmentGroups}
        />
      </Conditional>

    </>
  )

}

export default CharacterClassForm
