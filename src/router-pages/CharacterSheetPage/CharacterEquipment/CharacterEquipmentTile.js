import CharacterEquipmentDurability from './CharacterEquipmentDurability'
import { useEditableContext } from 'context/EditableContext'

function CharacterEquipmentTile({ item, handleRemoveItem, removeable=false }) {

  const { editable } = useEditableContext()

  return (
    <div className="background-white padding-small border-dark-grey flex-column space-between">
      <span className={ item.maxDurability && !item.durability ? "crossed-out" : null }>
        { item.name }
        {
          editable || removeable
          ?
          <button className="text-dark-red border-none" onClick={ () => handleRemoveItem( item ) }>X</button>
          :
          null
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
  )
}

export default CharacterEquipmentTile
