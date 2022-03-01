import FormCheckbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'

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


    </div>
  )

}

export default SpellsInputs
