import { useEffect } from 'react'
import CharacterBio from './CharacterBio'
import CharacterSkillsAdd from './CharacterSkillsAdd'
import CharacterSkills from "./CharacterSkills"
import CharacterEquipment from "./CharacterEquipment"
import CharacterSpells from "./CharacterSpells"
import CharacterRituals from "./CharacterRituals"
import CharacterNotes from "./CharacterNotes"
import EquipmentStore from "./EquipmentStore"
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
  }, [params.id]) // eslint-disable-line react-hooks/exhaustive-deps

  if (currentCharacter.id) {
    return (
      <StatusConditionsContextProvider>

        <div className="grid-columns-large standard-gap">
          <CharacterBio />
          <CharacterNotes />
          <CharacterSkills />
          <CharacterSkillsAdd displayCondition={editable} />
          <CharacterSpells displayCondition={editable || currentCharacter.spells?.length} />
          <CharacterRituals displayCondition={editable || currentCharacter.rituals?.length} />
        </div>

        <CharacterEquipment />
        <EquipmentStore displayCondition={editable} />

      </StatusConditionsContextProvider>
    )
  } else {
    return <div>Loading character...</div>
  }

}

export default CharacterSheet
