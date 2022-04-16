import { useCharacterContext } from 'context/CharacterContext'

function EquipmentStoreItem({ item }) {

  const { currentCharacter: { gold }, setCurrentCharacter } = useCharacterContext()

  const handleTakeItem = () => setCurrentCharacter( prev => ({ ...prev, items: [ ...prev.items, item ] }) )

  return (
    <div className="border-dark-yellow">
      <p>{ item.name }</p>
      <button>Buy for { item.cost || 1 } gold</button>
      <button onClick={handleTakeItem}>Add For Free</button>
    </div>
  )
}

export default EquipmentStoreItem
