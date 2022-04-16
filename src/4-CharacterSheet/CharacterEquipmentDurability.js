import { useCharacterContext } from 'context/CharacterContext'

function CharacterEquipmentDurability({ item }) {

  const { setCurrentCharacter } = useCharacterContext()

  const handleClickBox = isChecked => {
    const { durability, maxDurability } = item
    let updatedItem = item

    if ( durability > 0 && !isChecked ) {
      updatedItem = { ...item, durability: durability - 1 }
    } else if ( durability < maxDurability && isChecked ) {
      updatedItem = { ...item, durability: durability + 1 }
    }

    setCurrentCharacter( prev => {
      return { ...prev, items: prev.items.map( i => i === item ? updatedItem : i ) }
    })

  }

  const renderDurabilityCheckboxes = (number, isChecked) => {
    const checkboxes = []
    for (let i = 0; i < number; i++) {
      checkboxes.push(
        <input
          key={`${isChecked}-${i}`}
          type="checkbox"
          name='item-checkbox'
          onChange={ () => handleClickBox(isChecked) }
          checked={ isChecked }
        />
      )
    }
    return checkboxes
  }

  const checkedBoxes = item.maxDurability - item.durability
  const unCheckedBoxes = item.durability

  return (
    <>

      { renderDurabilityCheckboxes( checkedBoxes, true ) }
      { renderDurabilityCheckboxes( unCheckedBoxes, false ) }

    </>
  )

}

export default CharacterEquipmentDurability
