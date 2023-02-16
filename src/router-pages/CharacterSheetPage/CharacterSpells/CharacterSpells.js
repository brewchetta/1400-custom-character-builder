import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import spellsObj from 'data/_spellsCore'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'

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
        <button className="border-none text-dark-red background-white" onClick={() => handleRemoveSpell(spell)}>X</button>
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

    <div className="border-black background-white alchemy-symbols-background padding-small relative">

      <h3>Spells:</h3>

      <HelpButton
        className="position-top-right"
        info={rulesPlay.spells}
      />

      <ul className="skills-list grid-columns-large">

        {renderedSpells}

      </ul>

      { !spells?.length ? <span>You have no spells. You may pay to learn them from the shop.</span> : null }

    </div>
  )
}

export default ConditionalWrapper(CharacterSpells)
