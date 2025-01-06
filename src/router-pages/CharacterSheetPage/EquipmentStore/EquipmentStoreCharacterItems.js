import { useCharacterContext } from 'context/CharacterContext'
import CharacterEquipmentTile from '../CharacterEquipment/CharacterEquipmentTile'
import CurrentGold from '../CharacterEquipment/CurrentGold'
import HelpButton from 'shared/HelpButton'
import { rulesGear } from 'data/rules'
import { deleteCharacterItem } from 'async/fetch-character-items'

function EquipmentStoreCharacterItems() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { items } = currentCharacter

  async function handleRemoveItem(item) {
    const res =  await deleteCharacterItem(currentCharacter._id, item.epochStamp)
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({...prev, items: data.result}))
    } else {
      console.warn('Something went wrong...')
    }
  }

  const renderedItems = items.map(item => (
    // TODO: epoch time is not a great unique id since it will get duplicated when mass producing items, maybe fix it with uuid?
    <CharacterEquipmentTile key={item.epochStamp + item.key || item.key} item={item} handleRemoveItem={handleRemoveItem} removeable={true}  />
  ) )

  return (
    <div className="border-bottom-black border-top-black padding-medium">
      <h3>Current Equipment <HelpButton info={rulesGear.management} /></h3>

      <div className="grid-columns-medium standard-gap">

        <CurrentGold />

        {renderedItems}

      </div>
    </div>
  )
}

export default EquipmentStoreCharacterItems