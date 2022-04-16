import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'

function CharacterEquipment() {

  const { editable } = useEditableContext()

  const { currentCharacter: { items, gold }, setCurrentCharacter } = useCharacterContext()

  const handleRemoveItem = item => {
    const updatedItems = items.filter( i => i !== item )
    setCurrentCharacter( prev => ({ ...prev, items: updatedItems }))
  }

  const renderedItems = items.map(item => (
    <li key={item.key} className="skill-item">{item.name}{item.special ? ` [${item.special}]` : null}{ editable && <button onClick={ () => handleRemoveItem( item ) }>Remove</button> }</li>
  ))

  return (

    <>

      <h3>Equipment:</h3>

      <ul className="equipment-list">

        <li>{gold ? `${gold} Gold` : 'An Empty Coin Purse'}</li>

        {renderedItems}

      </ul>

    </>
  )
}

export default CharacterEquipment
