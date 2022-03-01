import EquipmentDisplay from 'shared/EquipmentDisplay'
import { toSpinalCase } from 'utilities'

function ClassEquipmentDisplay({currentItems, equipmentGroups}) {

  return (
    <div>

      {Object.values(currentItems).map((item, i) => {
        const foundItem = equipmentGroups[i][item.key]
        if (foundItem) {
          return <EquipmentDisplay key={toSpinalCase(foundItem.name)} item={foundItem}/>
        } else {
          return null
        }
      })}

    </div>
  )

}

export default ClassEquipmentDisplay
