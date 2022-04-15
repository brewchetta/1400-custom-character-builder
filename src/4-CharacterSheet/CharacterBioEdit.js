import { useState } from 'react'
import FormInput from 'shared/FormInput'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterBioEdit() {

  // TODO: should edit the character when edit mode is turned off rather than when this particular save button

  const { currentCharacter: {
    name,
    quirk,
    history
  }, setCurrentCharacter } = useCharacterContext()

  const [formState, setFormState] = useState({ quirk, history, name })

  const handleChange = e => setFormState(prev => ({...prev, [e.target.name]: e.target.value}))

  const handleSubmit = e => {
    e.preventDefault()
    setCurrentCharacter(prev => ({...prev, ...formState}))
  }

  return (
    <form onSubmit={handleSubmit} className="labeled-input-section">

      <FormInput name='name' labelText='Name: ' onChange={handleChange} value={formState.name} />

      <FormInput name='quirk' labelText='Quirk: ' onChange={handleChange} value={formState.quirk} />

      <FormInput name='history' labelText='History: ' onChange={handleChange} value={formState.history} />

      <input type="submit" value="Save" />

    </form>
  )
}

export default ConditionalWrapper(CharacterBioEdit)
