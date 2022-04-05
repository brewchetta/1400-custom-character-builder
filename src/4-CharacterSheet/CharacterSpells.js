import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import spellsObj from 'data/_spellsCore'
import CharacterSpellsAdd from './CharacterSpellsAdd'
import { useEditableContext } from 'context/EditableContext'

function CharacterSpells({spells, handleAddSpell, handleRemoveSpell}) {

  const { editable } = useEditableContext()

  const renderedSpells = spells.map(spell => (
      editable
      ?
      <div key={spell}>
        <button onClick={() => handleRemoveSpell(spell)}>X</button><span>{spellsObj[spell]?.name}</span>
      </div>
      :
      <div key={spell} className="crossable-checkbox">
        <Checkbox
          name={`spell-${toSpinalCase(spell)}`}
          labelText={spellsObj[spell]?.name}
        />
      </div>
  ))

  return (

    <>

      <h3>Spells:</h3>

      <ul className="skills-list grid-columns-small">

        {renderedSpells}

      </ul>

      <CharacterSpellsAdd displayCondition={editable} currentSpells={spells} handleAddSpell={handleAddSpell} />

    </>
  )
}

export default ConditionalWrapper(CharacterSpells)
