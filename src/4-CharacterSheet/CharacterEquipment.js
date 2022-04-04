import { useState } from 'react'

function CharacterEquipment({equipment, gold}) {

  const [isEditable, setIsEditable] = useState(false)

  function renderEquipment() {
    return equipment.map(item => <li key={item.key} className="skill-item">{item.name}{item.special ? ` [${item.special}]` : null}</li>)
  }

  return (

    <>


      <h3>Equipment:</h3>

      <ul className="equipment-list">

        <li>{gold ? `${gold} Gold` : 'An Empty Coin Purse'}</li>

        {renderEquipment()}

      </ul>

    </>
  )
}

export default CharacterEquipment
