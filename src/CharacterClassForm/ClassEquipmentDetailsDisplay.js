import { toSpinalCase } from '../utilities'

function ClassEquipmentDisplay({currentItems, equipmentGroups}) {

  return (
    <div>

      {Object.values(currentItems).map((item, i) => {
        const foundItem = equipmentGroups[i][item]
        if (foundItem) {
          return (
            <div key={toSpinalCase(foundItem.name)}>
              <p><b>{foundItem.name}</b></p>
              {foundItem.durability ? <p>Durability: {foundItem.durability}</p> : null}
              {foundItem.tags ? <p>Tags: {foundItem.tags.join(", ")}</p> : null}
              {foundItem.special ? <p>{foundItem.special}</p> : null}
            </div>
          )
        } else {
          return null
        }
      })}

    </div>
  )

}

export default ClassEquipmentDisplay
