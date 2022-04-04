import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import spellsObj from 'data/_spellsCore'
import CharacterSpellsAdd from './CharacterSpellsAdd'

function CharacterSpells({spells, handleAddSpell, handleRemoveSpell}) {

  const renderedSpells = spells.map(spell => (
    <div key={spell} className="crossable-checkbox">
      <Checkbox
        name={`spell-${toSpinalCase(spell)}`}
        labelText={spellsObj[spell]?.name}
      />
      <button onClick={() => handleRemoveSpell(spell)}>Remove</button>
    </div>
  ))

  return (

    <>

      <h3>Spells:</h3>

      <ul className="skills-list grid-columns-small">

        {renderedSpells}

      </ul>

      <CharacterSpellsAdd currentSpells={spells} handleAddSpell={handleAddSpell} />

    </>
  )
}

export default ConditionalWrapper(CharacterSpells)
