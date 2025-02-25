import { useCharacterContext } from 'context/CharacterContext'
import { patchCharacterItem } from 'async/fetch-character-items'
import useCheckForOwnedCharacter from 'hooks/useCheckForOwnedCharacter'

function CharacterEquipmentDurability({ item }) {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const ownedCharacter = useCheckForOwnedCharacter()

  async function handleClickBox(isChecked) {
    if (!ownedCharacter) return
    const { durability, maxDurability } = item
    let updatedDurability = item.durability

    if ( durability > 0 && !isChecked ) {
      updatedDurability = durability - 1
    } else if ( durability < maxDurability && isChecked ) {
      updatedDurability = durability + 1
    }

    const res = await patchCharacterItem(currentCharacter._id, item.epochStamp, { durability: updatedDurability })
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({ ...prev, items: data.result }))
    } else {
      console.log('Something went wrong...')
    }


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
          className="crossmark"
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