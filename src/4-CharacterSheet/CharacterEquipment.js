import CurrentGold from "./CurrentGold"
import CharacterEquipmentDurability from "./CharacterEquipmentDurability"
import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'

function CharacterEquipment() {

  const { editable } = useEditableContext()

  const { currentCharacter: { items }, setCurrentCharacter } = useCharacterContext()

  const handleRemoveItem = item => {
    const updatedItems = items.filter( i => i !== item )
    setCurrentCharacter( prev => ({ ...prev, items: updatedItems }))
  }

  const handleScrollToStore = () => document.querySelector('#equipment-store-header').scrollIntoView({behavior: "smooth", block: "start"})

  const renderedItems = items.map(item => (
    <div key={item.key} className="padding-small border-dark-grey flex-column space-between">
      <span className={ item.maxDurability && !item.durability ? "crossed-out" : null }>
        { item.name }
        {
          editable
          &&
          <button className="text-dark-red" onClick={ () => handleRemoveItem( item ) }>X</button>
        }
        <div>
          {
            item.special
            &&
            <>
            <span> [{item.special}]</span>
            </>
          }
        </div>
        <div>
          {
            item.maxDurability
            &&
            <CharacterEquipmentDurability item={item} />
          }
        </div>
      </span>
      <span className="italic text-dark-grey">
      {
        item.tags.join(', ')
      }
      </span>
    </div>
  ))

  return (

    <>

      <h3>Equipment {
        editable
        &&
        <button onClick={handleScrollToStore}>Buy Equipment</button>
      }</h3>

      <div className="grid-columns-medium standard-gap">

        <CurrentGold />

        {renderedItems}

      </div>

    </>
  )
}

export default CharacterEquipment
