import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'
import { patchCharacterSpell, deleteCharacterSpell } from 'fetch/fetch-character-spells'

function CharacterSpells() {

  const { currentCharacter, setCurrentCharacter} = useCharacterContext()

  const { editable } = useEditableContext()

  async function handleRemoveSpell(spell) {
    const res = await deleteCharacterSpell(currentCharacter._id, spell._id)
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({...prev, spells: data.result}))
    } else {
      alert("Something went wrong...")
    }
  }


  async function handleToggleSpell(spell) {
    const res = await patchCharacterSpell(currentCharacter._id, spell._id, { exhausted: !spell.exhausted })
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({...prev, spells: data.result}))
    } else {
      alert("Something went wrong...")
    }
  }

  const renderedSpells = currentCharacter.spells.map(spell => (
      editable
      ?
      <div key={spell._id}>
        <span>{spell.spellData.name}</span>
        <button className="border-none text-dark-red background-white" 
        onClick={() => handleRemoveSpell(spell)}>X</button>
      </div>
      :
      <div key={spell._id} className="crossable-checkbox">
        <Checkbox
          name={`spell-${toSpinalCase(spell.spellData.name)}`}
          labelText={spell.spellData.name}
          className="crossmark"
          checked={spell.exhausted}
          onChange={() => handleToggleSpell(spell)}
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

      { !currentCharacter.spells?.length ? <span>You have no spells. You may pay to learn them from the shop.</span> : null }

    </div>
  )
}

export default ConditionalWrapper(CharacterSpells)
