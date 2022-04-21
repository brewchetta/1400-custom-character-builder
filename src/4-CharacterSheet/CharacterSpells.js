import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import spellsObj from 'data/_spellsCore'
import CharacterSpellsAdd from './CharacterSpellsAdd'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterSpells() {

  const {currentCharacter: { spells }, setCurrentCharacter} = useCharacterContext()

  const { editable } = useEditableContext()

  function handleRemoveSpell(spell) {
    setCurrentCharacter(prev => ({...prev, spells: prev.spells.filter(s => s !== spell)}))
  }

  const renderedSpells = spells.map(spell => (
      editable
      ?
      <div key={spell}>
        <span>{spellsObj[spell]?.name}</span>
        <button className="border-none text-dark-red" onClick={() => handleRemoveSpell(spell)}>X</button>
      </div>
      :
      <div key={spell} className="crossable-checkbox">
        <Checkbox
          name={`spell-${toSpinalCase(spell)}`}
          labelText={spellsObj[spell]?.name}
          className="crossmark"
        />
      </div>
  ))

  return (

    <div className="border-black">

      <h3>Spells:</h3>

      <ul className="skills-list grid-columns-large">

        {renderedSpells}

      </ul>

      <CharacterSpellsAdd displayCondition={editable} />

    </div>
  )
}

export default ConditionalWrapper(CharacterSpells)
