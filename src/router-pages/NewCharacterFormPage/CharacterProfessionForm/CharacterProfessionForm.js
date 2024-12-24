import { useEffect } from 'react'

import FormSelect from 'shared/FormSelect'
import ClassDetailsDisplay from './ClassDetailsDisplay'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import ClassEquipmentInputs from './ClassEquipmentInputs'
import ClassEquipmentDisplay from "./ClassEquipmentDisplay"
import ConditionalWrapper from 'shared/ConditionalWrapper'
import CharacterTrainingSelection from './CharacterTrainingSelection'

import useToggleOnCondition from 'hooks/useToggleOnCondition'

import { randomArrayItem } from 'utilities'

function CharacterProfessionForm({
  currentProfession,
  setCurrentProfession,
  currentSpells,
  setCurrentSpells,
  currentSkills,
  setCurrentSkills,
  currentItems,
  setCurrentItems,
  currentExpertise,
  setCurrentExpertise,
  professions,
  spells,
  items,
  currentTraining,
  setCurrentTraining
}) {

  const maxSpells = currentProfession?.spells

  const shouldDisplaySkills = useToggleOnCondition(currentProfession && Object.keys(currentSpells).length >= (maxSpells || 0))

  const shouldDisplayEquipment = useToggleOnCondition(currentProfession && currentSkills.length >= (currentProfession?.skillSlots || 0))

  useEffect(() => {
    for (let expertise of currentExpertise) {
      if (!currentSkills.includes(expertise) && currentProfession?.coreskill !== expertise) {
        setCurrentExpertise(prev => prev.filter(ex => ex !== expertise))
      }
    }
    // eslint-disable-next-line
  }, [currentSkills, currentExpertise])

  function resetClassAttributes() {
    setCurrentSpells({})
    setCurrentSkills([])
    setCurrentItems({})
  }  

  function handleProfessionChange(e) {
    resetClassAttributes()
    setCurrentProfession(professions.find(p => p.key === e.target.value))
  }

  const handleChooseRandomClass = () => setCurrentProfession( randomArrayItem( professions ) )

  return (
    <div className="border-black padding-small margin-small background-white">

      <FormSelect
        value={currentProfession?.key || 'default'}
        onChange={handleProfessionChange}
        labelText="Profession: "
        defaultText='--- Choose your profession ---'
      >
        {professions.map(p => <option key={p.key} value={p.key}>{p.name}</option>)}
      </FormSelect>

      <input type="button" value='Random Profession' onClick={handleChooseRandomClass}/>

      <ClassDetailsDisplay
        displayCondition={currentProfession}
        characterClass={currentProfession}
      />

      <SpellsInputs
        displayCondition={currentProfession?.spells}
        spells={spells}
        currentSpells={currentSpells}
        setCurrentSpells={setCurrentSpells}
        maxSpells={maxSpells}
        checkboxClass={"checkmark padding-small"}
        />

      <SkillsInputs
        displayCondition={shouldDisplaySkills && currentProfession?.skillSlots}
        label={`Choose ${currentProfession?.skillSlots - currentSkills.length} more skills to upgrade`}
        possibleSkills={currentProfession?.skills}
        currentSkills={currentSkills}
        setCurrentSkills={setCurrentSkills}
        maxSkills={currentProfession?.skillSlots}
        defaultSkill={currentProfession?.coreskill}
        checkboxClass={"checkmark padding-small"}
        />

      <SkillsInputs
        displayCondition={shouldDisplaySkills && currentProfession?.expertise && currentSkills.length}
        label={`Choose ${currentProfession?.expertise - currentExpertise.length} more skills to upgrade again`}
        possibleSkills={[...currentSkills, currentProfession?.coreskill]}
        currentSkills={currentExpertise}
        setCurrentSkills={setCurrentExpertise}
        maxSkills={currentProfession?.expertise}
        checkboxClass={"checkmark padding-small"}
        />

      <CharacterTrainingSelection
        displayCondition={shouldDisplayEquipment && currentProfession?.trainings.length}
        currentTraining={currentTraining}
        setCurrentTraining={setCurrentTraining}
        availableTrainings={currentProfession?.trainings || []}
        />

      <ClassEquipmentInputs
        items={items}
        displayCondition={shouldDisplayEquipment && (currentProfession?.equipmentGroups || currentProfession?.equipmentGuaranteed)}
        currentItems={currentItems}
        setCurrentItems={setCurrentItems}
        equipmentGroups={currentProfession?.equipmentGroups || []}
        equipmentGuaranteed={currentProfession?.equipmentGuaranteed || []}
        />

      <ClassEquipmentDisplay
        displayCondition={currentProfession && Object.keys(currentItems).length}
        currentItems={currentItems}
        equipmentGroups={currentProfession?.equipmentGroups}
      />

    </div>
  )

}

export default ConditionalWrapper(CharacterProfessionForm)
