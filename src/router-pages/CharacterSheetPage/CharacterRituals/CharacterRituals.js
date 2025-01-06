import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'
import { deleteCharacterRitual } from 'async/fetch-character-spells'

function CharacterRituals() {

  const {currentCharacter, setCurrentCharacter} = useCharacterContext()

  const { editable } = useEditableContext()

  async function handleRemoveRitual(ritual) {
    const res = await deleteCharacterRitual(currentCharacter._id, ritual._id)
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({...prev, rituals: data.result}))
    } else {
      alert("Something went wrong...")
    }
  }

  /* CURRENTLY UNUSED AS TOGGLING RITUALS HAS BEEN REMOVED */
  // async function handleToggleRitual(ritual) {
  //   const res = await patchCharacterRitual(currentCharacter._id, ritual._id, { exhausted: !ritual.exhausted })
  //   if (res.ok) {
  //     const data = await res.json()
  //     setCurrentCharacter(prev => ({...prev, rituals: data.result}))
  //   } else {
  //     alert("Something went wrong...")
  //   }
  // }

  const renderedRituals = currentCharacter.rituals?.map(ritual => (
      editable
      ?
      <div key={ritual._id}>
        <span>{ritual.name}</span>
        <button className="border-none text-dark-red background-white" onClick={() => handleRemoveRitual(ritual)}>X</button>
      </div>
      :
      <div key={ritual._id}>
        <span>{ritual.name}</span>
      </div>
  ))

  return (

    <div className='border-black background-white magic-circle-background padding-small relative'>

      <h3>Rituals:</h3>

      <HelpButton
      className='position-top-right'
      info={rulesPlay.rituals}
      />

      <ul className='skills-list grid-columns-large'>

        {renderedRituals}

      </ul>

      { !currentCharacter.rituals?.length ? <span>You have no rituals. You may pay to learn them from the shop.</span> : null }

    </div>
  )
}

export default ConditionalWrapper(CharacterRituals)