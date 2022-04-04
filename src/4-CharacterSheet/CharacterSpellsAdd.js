import { useState, useEffect } from 'react'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import allSpells from 'data/_spellsCore'

function CharacterSpellsAdd({currentSpells, handleAddSpell}) {

  const availableSpells = Object.keys(allSpells).filter(s => !currentSpells.includes(s))

  const renderedSpells = availableSpells.map(spellKey => (
    <button key={spellKey} onClick={() => handleAddSpell(spellKey)}>
      {allSpells[spellKey].name}
    </button>
  ))

  return (
    <>
      <h4>Add New Spells:</h4>

      {renderedSpells}

    </>
  )
}

export default ConditionalWrapper(CharacterSpellsAdd)
