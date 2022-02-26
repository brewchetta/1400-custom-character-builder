import { useState } from 'react'
import FormSelect from '../shared-components/FormSelect'
import { toSpinalCase } from '../utilities'

function ClassItemsInputs({currentItems, setCurrentItems, equipmentGroups, equipmentGuaranteed}) {

  // console.log('EQUIPMENT GROUPS: ', equipmentGroups);
  // console.log('EQUIPMENT GUARANTEED: ', equipmentGuaranteed);

  function renderEquipmentGroupOptions(group) {
    return Object.keys(group).map(itemKey => (
      <option key={itemKey} value={itemKey}>
        {group[itemKey].name}
      </option>)
    )
  }

  function handleChange(e,i) {
    setCurrentItems(prev => ({...prev, [i]: e.target.value}))
  }

  const renderEquipmentSelects = () => equipmentGroups?.map((group,i) => {
    return (
      <FormSelect
        key={`equipment-select-${i}`}
        name={`equipment-select-${i}`}
        onChange={(e) => handleChange(e,i)}
        value={currentItems[i]}
      >
        {renderEquipmentGroupOptions(group)}
      </FormSelect>
    )
  })

  return (
    <div>

      <h4>Choose Your Equipment: </h4>

      { equipmentGuaranteed?.length ? <p>You have: {equipmentGuaranteed.map(item => item.name).join(', ')}</p> : null }

      {renderEquipmentSelects()}

    </div>
  )

}

export default ClassItemsInputs
