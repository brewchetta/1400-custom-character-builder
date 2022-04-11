import CurrentEquipmentItem from "./CurrentEquipmentItem"

function CurrentEquipment({currentItems}) {

  const renderedEquipment = equipment.map(item => <CurrentEquipmentItem key={item.key} item={item} />)

  return (

    <>

      <h3>Equipment:</h3>

      <ul className="equipment-list">

        {renderedEquipment}

      </ul>

    </>
  )
}

export default CurrentEquipment
