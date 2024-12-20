import CurrentGold from "./CurrentGold"
import CharacterEquipmentTile from "./CharacterEquipmentTile"
import CharacterEquipmentOpenStoreTile from "./CharacterEquipmentOpenStoreTile"
import HelpButton from "shared/HelpButton"
import { rulesGear } from "data/rules"
import { useCharacterContext } from 'context/CharacterContext'
import { deleteCharacterItem } from "fetch/fetch-character-items"


function CharacterEquipment({ setStoreOpen }) {

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
    <CharacterEquipmentTile key={item.key + item.epochStamp} item={item} handleRemoveItem={handleRemoveItem}  />
  ) )

  return (

    <>

      <h3>Equipment
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