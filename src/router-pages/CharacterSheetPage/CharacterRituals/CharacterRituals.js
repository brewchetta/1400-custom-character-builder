import { useState } from 'react'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'
import { deleteCharacterRitual } from 'async/fetch-character-spells'
import SaveAndEditButton from 'shared/SaveAndEditButton'
import useCheckForOwnedCharacter from 'hooks/useCheckForOwnedCharacter'

function CharacterRituals() {

  const {currentCharacter, setCurrentCharacter} = useCharacterContext()
  const ownedCharacter = useCheckForOwnedCharacter()

  const [editable, setEditable] = useState(false)

  async function handleRemoveRitual(ritual) {
    if (!ownedCharacter) return
    const res = await deleteCharacterRitual(currentCharacter._id, ritual._id)
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(prev => ({...prev, rituals: data.result}))
      if (data.result.length) { // doing this to avoid react state updates on unmounted components
        setEditable(false)
      }
    } else {
      alert("Something went wrong...")
    }
  }

  const renderedRituals = currentCharacter.rituals?.map(ritual => (
      editable
      ? // EDITABLE
      <div key={ritual._id}>
        <span>{ritual.name}</span>
        <button className="border-none text-dark-red background-white" onClick={() => handleRemoveRitual(ritual)}>X</button>
      </div>
      : // NOT EDITABLE
      <div key={ritual._id}>
        <span>{ritual.name}</span>
      </div>
  ))

  return (

    <div className='border-black background-white magic-circle-background padding-small relative'>

      <h3>Rituals<SaveAndEditButton displayCondition={ownedCharacter} editable={editable} setEditable={setEditable}/></h3>

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