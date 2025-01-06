import { useCharacterContext } from 'context/CharacterContext'
import { postCharacterItem, postCharacterItemBuy } from 'async/fetch-character-items'

function EquipmentStoreItem({ item }) {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { cost } = item

  async function handleTakeItem() {
    const res = await postCharacterItem(currentCharacter._id, item)
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({ ...prev, items: data.result }))
    } else {
      console.warn("Something went wrong...")
    }
  }
  
  async function handleBuyItem() {
    if ( currentCharacter.gold >= cost ) {
      const res = await postCharacterItemBuy(currentCharacter._id, item)
      if (res.ok) {
        const data = await res.json()
        setCurrentCharacter(prev => ({...prev, items: data.result.items, gold: data.result.gold}))
      } else {
        console.warn("Something went wrong...")
      }
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
        <button className="text-black border-black" onClick={ handleBuyItem } disabled={currentCharacter.gold - cost < 0}>
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
