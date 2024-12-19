import { useEffect, useState } from 'react'
import CharacterBio from './CharacterBio'
// import CharacterSkillsAdd from './CharacterSkillsAdd'
import CharacterSkills from "./CharacterSkills"
// import CharacterEquipment from "./CharacterEquipment"
// import CharacterSpells from "./CharacterSpells"
// import CharacterRituals from "./CharacterRituals"
import CharacterNotes from "./CharacterNotes"
// import EquipmentStore from "./EquipmentStore"
// import SideDrawer from "shared/SideDrawer"
import { StatusConditionsContextProvider } from 'context/StatusConditionsContext'
import { useParams } from 'react-router-dom'
import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'

function CharacterSheet() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  // const { editable } = useEditableContext()

  // const [storeOpen, setStoreOpen] = useState(false)

  const params = useParams()

  async function fetchCurrentCharacter() {
    const res = await fetch(`/characters/${params.id}`)
    if (res.ok) {
      const char = await res.json()
      setCurrentCharacter(char)
    } else if (res.status === 404) {
      alert('404 - Character not found')
    } else {
      alert('500 - Something went wrong...')
    }
  }

  useEffect(() => {
    fetchCurrentCharacter()
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [params.id]) 


  if (currentCharacter._id) {
    return (
      <StatusConditionsContextProvider>

        <div className="grid-columns-large standard-gap">
          <CharacterBio />
          <CharacterNotes />
          <CharacterSkills />
          {/* 
          <CharacterSkillsAdd displayCondition={editable} />
          <CharacterSpells displayCondition={editable || currentCharacter.spells?.length} />
          <CharacterRituals displayCondition={editable || currentCharacter.rituals?.length} /> 
          */}
        </div>

        {/* <CharacterEquipment setStoreOpen={setStoreOpen} /> */}

        {/* <SideDrawer isOpen={storeOpen} setIsOpen={setStoreOpen} className="background-white">
          <EquipmentStore displayCondition={storeOpen} />
        </SideDrawer> */}

      </StatusConditionsContextProvider>
    )
  } else {
    return <div>Loading character...</div> // TODO: add short loading animation for incoming character
  }

}

export default CharacterSheet
