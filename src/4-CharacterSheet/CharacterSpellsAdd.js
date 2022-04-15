import ConditionalWrapper from 'shared/ConditionalWrapper'
import allSpells from 'data/_spellsCore'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterSpellsAdd() {

  const {currentCharacter: { spells }, setCurrentCharacter} = useCharacterContext()

  const availableSpells = Object.keys(allSpells).filter(s => !spells.includes(s))

  const renderedSpells = availableSpells.map(spellKey => (
    <button key={spellKey} onClick={() => handleAddSpell(spellKey)}>
      {allSpells[spellKey].name}
    </button>
  ))

  function handleAddSpell(spell) {
    setCurrentCharacter(prev => ({...prev, spells: [...prev.spells, spell]}))
  }

  return (
    <>
      <h4>Add New Spells:</h4>

      <div className="grid-columns-small">
        {renderedSpells}
      </div>


    </>
  )
}

export default ConditionalWrapper(CharacterSpellsAdd)
