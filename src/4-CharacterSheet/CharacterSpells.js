import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import spellsObj from 'data/_spellsCore'
import CharacterSpellsAdd from './CharacterSpellsAdd'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterSpells() {

  const {currentCharacter, setCurrentCharacter} = useCharacterContext()
  const { spells } = currentCharacter

  const { editable } = useEditableContext()

  function handleRemoveSpell(spell) {
    setCurrentCharacter(prev => ({...prev, spells: prev.spells.filter(s => s !== spell)}))
  }

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

      <CharacterSpellsAdd displayCondition={editable} />

    </>
  )
}

export default ConditionalWrapper(CharacterSpells)
