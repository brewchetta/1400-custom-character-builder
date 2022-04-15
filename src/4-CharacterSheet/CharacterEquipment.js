import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'

function CharacterEquipment() {

  const { editable } = useEditableContext()

  const { currentCharacter: { items, gold } } = useCharacterContext()

  const renderedEquipment = items.map(item => (
    <li key={item.key} className="skill-item">{item.name}{item.special ? ` [${item.special}]` : null}{ editable && <button>Remove</button> }</li>
  ))

  return (

    <>

      <h3>Equipment:</h3>

      <ul className="equipment-list">

        <li>{gold ? `${gold} Gold` : 'An Empty Coin Purse'}</li>

        {renderedEquipment}

      </ul>

    </>
  )
}

export default CharacterEquipment
