import { useCharacterContext } from 'context/CharacterContext'
import CharacterEquipmentTile from '../CharacterEquipment/CharacterEquipmentTile'
import CurrentGold from '../CharacterEquipment/CurrentGold'
import HelpButton from 'shared/HelpButton'
import { rulesGear } from 'data/rules'

function EquipmentStoreCharacterItems(props) {

  const { currentCharacter: { items }, setCurrentCharacter } = useCharacterContext()

  const handleRemoveItem = item => {
    const updatedItems = items.filter( i => i !== item )
    setCurrentCharacter( prev => ({ ...prev, items: updatedItems }))
  }

  const renderedItems = items.map(item => (
    <CharacterEquipmentTile key={item.key} item={item} handleRemoveItem={handleRemoveItem} removeable={true}  />
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
