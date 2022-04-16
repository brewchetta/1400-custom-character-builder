import CurrentGold from "./CurrentGold"
import CharacterEquipmentDurability from "./CharacterEquipmentDurability"
import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'

function CharacterEquipment() {

  const { editable } = useEditableContext()

  const { currentCharacter: { items }, setCurrentCharacter } = useCharacterContext()

  const handleRemoveItem = item => {
    const updatedItems = items.filter( i => i !== item )
    setCurrentCharacter( prev => ({ ...prev, items: updatedItems }))
  }

  const handleScrollToStore = () => document.querySelector('#equipment-store-header').scrollIntoView({behavior: "smooth", block: "start"})

  const renderedItems = items.map(item => (
    <li key={item.key} className={ item.maxDurability && !item.durability && "crossed-out" }>
      {item.name}
      {
        item.special
        &&
        ` [${item.special}]`
      }
      {
        editable
        &&
        <button onClick={ () => handleRemoveItem( item ) }>Remove</button>
      }
      {
        item.maxDurability
        &&
        <CharacterEquipmentDurability item={item} />
      }
    </li>
  ))

  return (

    <>

      <ul className="equipment-list">

        <h3>Equipment:</h3>

        {
          editable
          &&
          <button onClick={handleScrollToStore}>Buy Equipment</button>
        }

        <CurrentGold />

        {renderedItems}

      </ul>

    </>
  )
}

export default CharacterEquipment
