import FormInput from 'shared/FormInput'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterBioEdit() {

  const { currentCharacter: {
    name,
    quirk,
    history
  }, setCurrentCharacter } = useCharacterContext()

  const handleChange = e => setCurrentCharacter(prev => ({...prev, [e.target.name]: e.target.value}))

  return (
    <div className="labeled-input-section">

      <FormInput name='name' labelText='Name: ' onChange={handleChange} value={name} />

      <FormInput name='quirk' labelText='Quirk: ' onChange={handleChange} value={quirk} />

      <FormInput name='history' labelText='History: ' onChange={handleChange} value={history} />

    </div>
  )
}

export default ConditionalWrapper(CharacterBioEdit)
