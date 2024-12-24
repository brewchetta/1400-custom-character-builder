import { useMemo } from 'react'

import FormSelect from 'shared/FormSelect'
import ConditionalWrapper from 'shared/ConditionalWrapper'

function ClassEquipmentInputs({
  currentItems,
  setCurrentItems,
  equipmentGroups,
  equipmentGuaranteed,
  items
}) {

  // console.log(equipmentGroups)
  // console.log(items)

  const indexedItems = useMemo(() => {
    const result = {}
    items.forEach(item => {
      result[item.key] = item
    })
    return result
  }, [items])

  function renderEquipmentGroupOptions(group) {
    const groupItems = items.filter(item => item.tags.includes(group))
    return groupItems.map(item => (
      <option key={item.key} value={item.key}>
        {item.name}
      </option>)
    )
  }

  function handleChange(e,i) {
    setCurrentItems(prev => ({...prev, [i]: indexedItems[e.target.value]}))
  }

  const renderEquipmentSelects = () => equipmentGroups?.map((group,i) => {
    return (
      <FormSelect
        key={`equipment-select-${i}`}
        name={`equipment-select-${i}`}
        onChange={(e) => handleChange(e,i)}
        value={currentItems[i]?.key}
      >

        {
          !currentItems[i]?.key
          ?
          <option value={null}>=Choose {group}=</option>
          :
          null
        }

        { renderEquipmentGroupOptions(group) }

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

export default ConditionalWrapper(ClassEquipmentInputs)
