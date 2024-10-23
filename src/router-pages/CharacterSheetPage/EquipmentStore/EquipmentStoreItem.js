import { useCharacterContext } from 'context/CharacterContext'

function EquipmentStoreItem({ item }) {

  const { currentCharacter: { gold }, setCurrentCharacter } = useCharacterContext()

  const cost = item.cost || 1

  const handleTakeItem = () => {
    setCurrentCharacter( prev => ({ ...prev, items: [ ...prev.items, {...item, epoch_stamp: Date.now()} ] }) )
  }

  const handleBuyItem = () => {
    if ( gold >= cost ) {
      setCurrentCharacter( prev => ({
        ...prev,
        gold: prev.gold - cost,
        items: [ ...prev.items, {...item, epoch_stamp: Date.now() } ]
      }) )
    }
  }

  return (
    <tr className="text-black background-light-grey">
      <td className="padding-small">{ item.name }</td>

      <td className="padding-small">
        { item.special && <span> [{item.special}]</span> }
      </td>

      <td className="padding-small">
        { item.maxDurability && <span>{item.maxDurability} durability</span> }
      </td>

      <td className="italic text-dark-grey padding-small">
        { item.tags.join(', ') }
      </td>

      <td className="padding-small">
        <button className="text-black border-black" onClick={ handleBuyItem } disabled={gold - cost < 0}>
          Buy for { item.cost || 1 } gold
        </button>
      </td>

      <td className="padding-small">
        <button className="text-black border-black" onClick={ handleTakeItem }>Add For Free</button>
      </td>
    </tr>
  )
}

export default EquipmentStoreItem
