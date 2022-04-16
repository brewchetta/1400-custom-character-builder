import { useCharacterContext } from 'context/CharacterContext'

function EquipmentStoreItem({ item }) {

  const { currentCharacter: { gold }, setCurrentCharacter } = useCharacterContext()

  const cost = item.cost || 1

  const handleTakeItem = () => {
    setCurrentCharacter( prev => ({ ...prev, items: [ ...prev.items, item ] }) )
  }

  const handleBuyItem = () => {
    if ( gold >= cost ) {
      setCurrentCharacter( prev => ({
        ...prev,
        gold: prev.gold - cost,
        items: [ ...prev.items, item ]
      }) )
    }
  }

  return (
    <div className="border-dark-yellow">
      <p>{ item.name }</p>
      <button onClick={ handleBuyItem } disabled={gold - cost < 0}>Buy for { item.cost || 1 } gold</button>
      <button onClick={ handleTakeItem }>Add For Free</button>
    </div>
  )
}

export default EquipmentStoreItem
