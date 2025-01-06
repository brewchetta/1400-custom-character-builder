import { useCharacterContext } from 'context/CharacterContext'
import { postCharacterSpell, postCharacterRitual } from 'async/fetch-character-spells'

// used for both spells and rituals, category determines the difference
function EquipmentStoreItem({ item, itemKey, category = "spells" }) {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { gold } = currentCharacter

  const cost = item.cost || 1

  async function handleTakeSpell() {
    if (category === "spells") {
      const res = await postCharacterSpell(currentCharacter._id, { _id: item._id })
      if (res.ok) {
        const data = await res.json()
        setCurrentCharacter( prev => ({ ...prev, spells: data.result }) )
      }
    } else if (category === "rituals") {
      const res = await postCharacterRitual(currentCharacter._id, { _id: item._id })
      if (res.ok) {
        const data = await res.json()
        setCurrentCharacter( prev => ({ ...prev, rituals: data.result }) )
      }
    }
  }

  async function handleBuy () {
    if (category === "spells" && gold >= item.cost) {
      const res = await postCharacterSpell(currentCharacter._id, { _id: item._id, cost: item.cost })
      if (res.ok) {
        const data = await res.json()
        setCurrentCharacter( prev => ({ ...prev, spells: data.result, gold: prev.gold - item.cost }) )
      }
    } else if (category === "rituals" && gold >= item.cost) {
      const res = await postCharacterRitual(currentCharacter._id, { _id: item._id, cost: item.cost })
      if (res.ok) {
        const data = await res.json()
        setCurrentCharacter( prev => ({ ...prev, rituals: data.result, gold: prev.gold - item.cost }) )
      }
    }
  }

  return (
    <tr className="background-light-grey text-black">
      <td className="padding-small">{ item.name }</td>

      <td className="padding-small">
        <button className="text-black border-black" onClick={ handleBuy } disabled={gold - cost < 0}>
          Learn for { item.cost || 1 } gold
        </button>
      </td>

      <td className="padding-small">
        <button className="text-black border-black" onClick={ handleTakeSpell }>Learn For Free</button>
      </td>
    </tr>
  )
}

export default EquipmentStoreItem
