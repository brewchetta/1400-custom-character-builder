import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'
import { deleteCharacterSpell } from 'fetch/fetch-character-spells'

function CharacterSpells() {

  const { currentCharacter, setCurrentCharacter} = useCharacterContext()
  const { spellsMax } = currentCharacter

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


  /* CURRENTLY UNUSED AS TOGGLING SPELLS HAS BEEN REMOVED */
  // async function handleToggleSpell(spell) {
  //   const res = await patchCharacterSpell(currentCharacter._id, spell._id, { exhausted: !spell.exhausted })
  //   if (res.ok) {
  //     const data = await res.json()
  //     setCurrentCharacter(prev => ({...prev, spells: data.result}))
  //   } else {
  //     alert("Something went wrong...")
  //   }
  // }


  const renderedSpells = currentCharacter.spells.map(spell => (
      editable
      ?
      <div key={spell._id}>
        <span>{spell.name}</span>
        <button className="border-none text-dark-red background-white" 
        onClick={() => handleRemoveSpell(spell)}>X</button>
      </div>
      :
      <div key={spell._id}>
        <span>{spell.name}</span>
      </div>
  ))

  const renderMaxSpellsMessage = () => {
    if (currentCharacter.spells?.length && spellsMax < currentCharacter.spells?.length) {
      return ( <p className="italic text-dark-red">{ 
        `You can learn ${spellsMax} spells but you have ${currentCharacter.spells.length}! You are hindered when you cast spells! You can forget a spell by editing your character...`
      }</p> )
    }
  }

  return (

    <div className="border-black background-white alchemy-symbols-background padding-small relative">

      <h3>Spells:</h3>

      <HelpButton
        className="position-top-right"
        info={rulesPlay.spells}
      />

      { renderMaxSpellsMessage() }

      <ul className="skills-list grid-columns-large">

        {renderedSpells}

      </ul>

      { !currentCharacter.spells?.length ? <span>You have no spells. You may pay to learn them from the shop.</span> : null }

    </div>
  )
}

export default ConditionalWrapper(CharacterSpells)
