import CurrentGold from "./CurrentGold"
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
    <li key={item.key} className="skill-item">
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
