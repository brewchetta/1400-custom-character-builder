import { useEffect } from 'react'
import CharacterBio from './CharacterBio'
import CharacterSkills from "./CharacterSkills"
import CharacterEquipment from "./CharacterEquipment"
import CharacterSpells from "./CharacterSpells"
import EquipmentStore from "../5-EquipmentStore"
import { StatusConditionsContextProvider } from 'context/StatusConditionsContext'
import * as localStore from 'utils/local-storage'
import { useParams } from 'react-router-dom'
import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'

function CharacterSheet() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { editable } = useEditableContext()

  const params = useParams()

  useEffect(() => {
    setCurrentCharacter(
      localStore.findLocalCharacterById(params.id)
    )
  }, [params.id])

  if (currentCharacter.id) {
    return (
      <StatusConditionsContextProvider>

        <div className="grid-columns-large standard-gap">
          <CharacterBio />
          <CharacterSkills />
          <CharacterSpells displayCondition={editable || currentCharacter.spells.length} />
          <CharacterEquipment />
        </div>

        <EquipmentStore displayCondition={editable} />

      </StatusConditionsContextProvider>
    )
  } else {
    return <div>Loading character...</div>
  }

}

export default CharacterSheet
