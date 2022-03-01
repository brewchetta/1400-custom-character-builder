import FormSelect from 'shared/FormSelect'

function ClassEquipmentInputs({currentItems, setCurrentItems, equipmentGroups, equipmentGuaranteed}) {

  function renderEquipmentGroupOptions(group) {
    return Object.keys(group).map(itemKey => (
      <option key={itemKey} value={itemKey}>
        {group[itemKey].name}
      </option>)
    )
  }

  function handleChange(e,i) {
    setCurrentItems(prev => ({...prev, [i]: equipmentGroups[i][e.target.value]}))
  }

  const renderEquipmentSelects = () => equipmentGroups?.map((group,i) => {
    return (
      <FormSelect
        key={`equipment-select-${i}`}
        name={`equipment-select-${i}`}
        onChange={(e) => handleChange(e,i)}
        value={currentItems[i].key}
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

export default ClassEquipmentInputs
