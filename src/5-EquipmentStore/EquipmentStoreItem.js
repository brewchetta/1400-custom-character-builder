import { useCharacterContext } from 'context/CharacterContext'

function EquipmentStoreItem({ item }) {

  const { currentCharacter: { gold }, setCurrentCharacter } = useCharacterContext()

  const cost = item.cost || 1

  const handleTakeItem = () => {
    setCurrentCharacter( prev => ({ ...prev, items: [ ...prev.items, {...item} ] }) )
  }

  const handleBuyItem = () => {
    if ( gold >= cost ) {
      setCurrentCharacter( prev => ({
        ...prev,
        gold: prev.gold - cost,
        items: [ ...prev.items, {...item} ]
      }) )
    }
  }

  return (
    <div className="border-dark-yellow background-white">
      <p>{ item.name }</p>

      <div>
        { item.special && <span> [{item.special}]</span> }
      </div>

      <div>
        { item.maxDurability && <span>{item.maxDurability} durability</span> }
      </div>

      <span className="italic text-dark-grey">
      { item.tags.join(', ') }
      </span>

      <br/>

      <button onClick={ handleBuyItem } disabled={gold - cost < 0}>
        Buy for { item.cost || 1 } gold
      </button>

      <button onClick={ handleTakeItem }>Add For Free</button>
    </div>
  )
}

export default EquipmentStoreItem
