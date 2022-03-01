import FormCheckbox from 'shared/FormCheckbox'
import { toSpinalCase, randomAttribute } from 'utilities'

function SpellsInputs({spells, currentSpells, setCurrentSpells, maxSpells}) {

  const spellsLeftToChoose = maxSpells - Object.keys(currentSpells).length

  const handleChange = spell => {
    const spellIsChosen = !!currentSpells[spell]
    if (spellsLeftToChoose && !spellIsChosen) {
      setCurrentSpells(prev => ({...prev, [spell]: spells[spell]}))
    } else if (spellIsChosen) {
      const newSpells = {...currentSpells}
      delete newSpells[spell]
      setCurrentSpells(newSpells)
    }
  }

  function rollRandomSpell() {
    if (Object.keys(currentSpells).length < maxSpells) {
      const newSpell = randomAttribute(Object.keys(spells), Object.keys(currentSpells))
      setCurrentSpells(prev => ({...prev, [newSpell]: spells[newSpell]}))
    }
  }

  const renderedSpellCheckboxes = Object.keys(spells).map(spell => {
    const spellIsChosen = !!currentSpells[spell]
    return (
      <FormCheckbox
        key={spell}
        name={`spell-${toSpinalCase(spells[spell].name)}`}
        labelText={spells[spell].name}
        checked={spellIsChosen}
        onChange={() => handleChange(spell)}
        disabled={!spellsLeftToChoose && !spellIsChosen}
      />
    )
  })

  return (
    <div>

      <h4>Spells left: {spellsLeftToChoose}</h4>

      <div className="grid-columns-small">

        {renderedSpellCheckboxes}

      </div>

      <input
        type="button"
        value="Random Spell"
        disabled={Object.keys(currentSpells).length >= maxSpells}
        onClick={rollRandomSpell}
      />

    </div>
  )

}

export default SpellsInputs
