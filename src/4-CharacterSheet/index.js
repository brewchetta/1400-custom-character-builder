import { useState, useEffect } from 'react'
import CharacterBio from './CharacterBio'
import CharacterSkills from "./CharacterSkills"
import CharacterEquipment from "./CharacterEquipment"
import CharacterSpells from "./CharacterSpells"
import CharacterStatusConditions from "./CharacterStatusConditions"
import EquipmentStore from "../5-EquipmentStore"
import { EditableContextProvider } from 'context/EditableContext'
import { StatusConditionsContextProvider } from 'context/StatusConditionsContext'
import * as localStore from 'utils/local-storage'
import { useParams } from 'react-router-dom'

function CharacterSheet() {

  const [currentCharacter, setCurrentCharacter] = useState({})

  const params = useParams()

  useEffect(() => {
    setCurrentCharacter(localStore.findLocalCharacterById(params.id))
  }, [])

  function setCharacter(character) {
    setCurrentCharacter(
      localStore.updateLocalCharacter(character)
    )
  }

  function handleChangeSkill(skillKey, numericChange) {

    const skills = {...currentCharacter.skills}
    const updatedValue = skills[skillKey] + numericChange

    if (updatedValue <= 6) {
      delete skills[skillKey]
    } else if (updatedValue <= 12) {
      skills[skillKey] = updatedValue
    }

    setCharacter(prev => ({...prev, skills}))
  }

  function handleAddSkill(skillName) {
    const skills = {...currentCharacter.skills}
    skills[skillName] = 8
    setCharacter(prev => ({...prev, skills}))
  }

  function handleAddSpell(spell) {
    setCharacter(prev => ({...prev, spells: [...prev.spells, spell]}))
  }

  function handleRemoveSpell(spell) {
    setCharacter(prev => ({...prev, spells: prev.spells.filter(s => s !== spell)}))
  }

  if (currentCharacter.id) {
    return (
      <StatusConditionsContextProvider>
      <EditableContextProvider>

        <div>
          <CharacterBio character={currentCharacter} setCharacter={setCharacter} />
          <CharacterSkills skills={currentCharacter.skills} handleChangeSkill={handleChangeSkill} handleAddSkill={handleAddSkill} />
          <CharacterStatusConditions />
          <CharacterSpells
            displayCondition={currentCharacter.spells.length}
            spells={currentCharacter.spells}
            {...{handleAddSpell, handleRemoveSpell}}
          />
          <CharacterEquipment equipment={currentCharacter.items} gold={currentCharacter.gold} />
          <EquipmentStore currentItems={currentCharacter.items} currentGold={currentCharacter.gold} setCurrentItems={() => alert('TODO: build a setter')} setCurrentGold={() => alert('TODO: build a setter')} />
        </div>

      </EditableContextProvider>
      </StatusConditionsContextProvider>
    )
  } else {
    return <div>Loading character...</div>
  }

}

export default CharacterSheet
