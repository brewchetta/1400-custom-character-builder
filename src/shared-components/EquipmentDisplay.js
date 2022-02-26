function EquipmentDisplay({item}) {

  return (
    <div>
      <p><b>{item.name}</b></p>
      {item.durability ? <p>Durability: {item.durability}</p> : null}
      {item.tags ? <p>Tags: {item.tags.join(", ")}</p> : null}
      {item.special ? <p>{item.special}</p> : null}
    </div>
  )

}

export default EquipmentDisplay
