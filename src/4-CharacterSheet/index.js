import { useEffect } from 'react'
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
import { useCharacterContext } from 'context/CharacterContext'

function CharacterSheet() {

  const {currentCharacter, setCurrentCharacter} = useCharacterContext()

  const params = useParams()

  useEffect(() => {
    setCurrentCharacter(
      localStore.findLocalCharacterById(params.id)
    )
  }, [params.id])

  if (currentCharacter.id) {
    return (
      <StatusConditionsContextProvider>
      <EditableContextProvider>

        <div>
          <CharacterBio />
          <CharacterSkills />
          <CharacterStatusConditions />
          <CharacterSpells displayCondition={currentCharacter.spells.length} />
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
