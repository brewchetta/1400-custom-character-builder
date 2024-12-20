import FormInput from 'shared/FormInput'
import ConditionalWrapper from 'shared/ConditionalWrapper'

function CharacterBioEdit({ editableStates, setEditableStates }) {

  const handleChange = e => setEditableStates(prev => ({...prev, [e.target.name]: e.target.value}))

  return (
    <div className="labeled-input-section">

      <FormInput name='name' labelText='Name: ' onChange={handleChange} value={editableStates.name} />

      <FormInput name='quirk' labelText='Quirk: ' onChange={handleChange} value={editableStates.quirk} />

      <FormInput name='history' labelText='History: ' onChange={handleChange} value={editableStates.history} />

    </div>
  )
}

export default ConditionalWrapper(CharacterBioEdit)