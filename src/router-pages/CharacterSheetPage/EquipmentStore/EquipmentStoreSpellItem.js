import { useCharacterContext } from 'context/CharacterContext'

// used for both spells and rituals, category determines the difference
function EquipmentStoreItem({ spell, spellKey, category = "spells" }) {

  const { currentCharacter: { gold }, setCurrentCharacter } = useCharacterContext()

  const cost = spell.cost || 1

  const handleTakeSpell = () => {
    if (category === "spells") {
      setCurrentCharacter( prev => ({ ...prev, spells: [ ...prev.spells || [], spellKey ] }))
    } else if (category === "rituals") {
      setCurrentCharacter( prev => ({ ...prev, rituals: [ ...prev.rituals || [], spellKey ] }))
    }
  }

  const handleBuySpell = () => {
    if (category === "spells" && gold >= spell.cost) {
      setCurrentCharacter( prev => ({ ...prev, spells: [ ...prev.spells, spellKey ], gold: prev.gold - spell.cost }) )
    } else if (category === "rituals" && gold >= spell.cost) {
      setCurrentCharacter( prev => ({ ...prev, rituals: prev.rituals ? [ ...prev.rituals, spellKey ] : [spellKey], gold: prev.gold - spell.cost }) )
    }
  }

  return (
    <tr className="background-light-grey text-black">
      <td className="padding-small">{ spell.name }</td>

      <td className="padding-small">
        <button className="text-black border-black" onClick={ handleBuySpell } disabled={gold - cost < 0}>
          Learn for { spell.cost || 1 } gold
        </button>
      </td>

      <td className="padding-small">
        <button className="text-black border-black" onClick={ handleTakeSpell }>Learn For Free</button>
      </td>
    </tr>
  )
}

export default EquipmentStoreItem
