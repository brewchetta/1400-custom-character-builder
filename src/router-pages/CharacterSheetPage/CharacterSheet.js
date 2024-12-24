import { useEffect, useState } from 'react'
import CharacterBio from './CharacterBio'
// import CharacterSkillsAdd from './CharacterSkillsAdd'
import CharacterSkills from "./CharacterSkills"
import CharacterTraining from './CharacterTraining'
import CharacterEquipment from "./CharacterEquipment"
import CharacterSpells from "./CharacterSpells"
import CharacterRituals from "./CharacterRituals"
import CharacterNotes from "./CharacterNotes"
import EquipmentStore from "./EquipmentStore"
import SideDrawer from "shared/SideDrawer"
import LoadingAnimation from 'shared/LoadingAnimation'

import { useParams } from 'react-router-dom'
import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'
import { useLoadingContext } from 'context/LoadingContext'

import { getCharacter } from 'fetch/fetch-characters'
import CharacterLevelUp from './CharacterLevelUp/CharacterLevelUp'

function CharacterSheet() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { editable } = useEditableContext()
  const { loading } = useLoadingContext()

  const [storeOpen, setStoreOpen] = useState(false)
  const [levelUpOpen, setLevelUpOpen] = useState(false)
  

  const params = useParams()

  async function fetchCurrentCharacter() {
    const res = await getCharacter(params.id)
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(data.result)
    } else if (res.status === 404) {
      alert('404 - Character not found')
    } else {
      console.warn('Something went wrong...')
    }
  }

  
  useEffect(() => {
    fetchCurrentCharacter()
  }, [params.id]) // eslint-disable-line react-hooks/exhaustive-deps


  if (currentCharacter._id && !loading) {
    return (
      <>
        <div className="grid-columns-large standard-gap">
          <CharacterBio setLevelUpOpen={setLevelUpOpen} />
          <CharacterNotes />
          <CharacterSkills />
          {/* <CharacterSkillsAdd displayCondition={editable} /> */}
          <CharacterTraining />
          <CharacterSpells displayCondition={editable || currentCharacter.spells?.length} />
          <CharacterRituals displayCondition={editable || currentCharacter.rituals?.length} /> 
          
        </div>

        <CharacterEquipment setStoreOpen={setStoreOpen} />

        <SideDrawer isOpen={storeOpen} setIsOpen={setStoreOpen} className="background-white">
          <EquipmentStore displayCondition={storeOpen} />
        </SideDrawer>

        <SideDrawer isOpen={levelUpOpen} setIsOpen={setLevelUpOpen} className="background-white">
          <CharacterLevelUp setLevelUpOpen={setLevelUpOpen} />
        </SideDrawer>
      </>
    )
  } else {
    return <LoadingAnimation /> // TODO: add short loading animation for incoming character
  }

}

export default CharacterSheet
