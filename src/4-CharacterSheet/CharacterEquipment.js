function CharacterEquipment({equipment}) {

  function renderEquipment() {
    return equipment.map(item => <li key={item.key} className="skill-item">{item.name}{item.special ? ` [${item.special}]` : null}</li>)
  }

  return (

    <>

      <h3>Equipment:</h3>

      <ul className="equipment-list">

        {renderEquipment()}

      </ul>

    </>
  )
}

export default CharacterEquipment
