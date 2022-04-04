import { useState } from 'react'
import FormInput from 'shared/FormInput'
import ConditionalWrapper from 'shared/ConditionalWrapper'

function CharacterBioEdit({character, handleChangeBio}) {

  const [formState, setFormState] = useState({
    quirk: character.quirk,
    history: character.history,
    name: character.name
  })

  const handleChange = e => setFormState(prev => ({...prev, [e.target.name]: e.target.value}))

  const handleSubmit = e => {
    e.preventDefault()
    handleChangeBio(formState)
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
