import ConditionalWrapper from 'shared/ConditionalWrapper'
import Checkbox from 'shared/FormCheckbox'
import { toSpinalCase } from 'utilities'
import ritualsObj from 'data/_ritualsCore'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'

function CharacterRituals() {

  const {currentCharacter: { rituals }, setCurrentCharacter} = useCharacterContext()

  const { editable } = useEditableContext()

  function handleRemoveRitual(ritual) {
    setCurrentCharacter(prev => ({...prev, rituals: prev.rituals.filter(r => r !== ritual)}))
  }

  const renderedRituals = rituals?.map(ritual => (
      editable
      ?
      <div key={ritual}>
        <span>{ritualsObj[ritual]?.name}</span>
        <button className="border-none text-dark-red background-white" onClick={() => handleRemoveRitual(ritual)}>X</button>
      </div>
      :
      <div key={ritual} className="crossable-checkbox">
        <Checkbox
          name={`spell-${toSpinalCase(ritual)}`}
          labelText={ritualsObj[ritual]?.name}
          className="crossmark"
        />
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

      { !rituals?.length ? <span>You have no rituals. You may pay to learn them from the shop.</span> : null }

    </div>
  )
}

export default ConditionalWrapper(CharacterRituals)
