import { useState } from "react"

import CurrentGold from "./CurrentGold"
import CharacterEquipmentTile from "./CharacterEquipmentTile"
import CharacterEquipmentOpenStoreTile from "./CharacterEquipmentOpenStoreTile"
import HelpButton from "shared/HelpButton"
import SaveAndEditButton from "shared/SaveAndEditButton"

import { rulesGear } from "data/rules"
import { useCharacterContext } from 'context/CharacterContext'
import { deleteCharacterItem } from "async/fetch-character-items"


function CharacterEquipment({ setStoreOpen }) {

  const [editable, setEditable] = useState(false)

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { items } = currentCharacter

  async function handleRemoveItem(item) {
    const res =  await deleteCharacterItem(currentCharacter._id, item.epochStamp)
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({...prev, items: data.result}))
    }
  }

  const toggleStoreOpen = () => setStoreOpen(prev => !prev)

  const renderedItems = items.map(item => (
    <CharacterEquipmentTile key={item.key + item.epochStamp} item={item} handleRemoveItem={handleRemoveItem} editable={editable} />
  ) )

  return (

    <>

      <h3>Equipment
        <SaveAndEditButton editable={editable} setEditable={setEditable} />
        <HelpButton info={rulesGear.management} />
      </h3>

      <div className="grid-columns-medium standard-gap">

        <CurrentGold />

        {renderedItems}

        <CharacterEquipmentOpenStoreTile toggleStoreOpen={ toggleStoreOpen } />

      </div>

    </>
  )
}

export default CharacterEquipment