import { useState } from 'react'

function CharacterBiographyForm(props) {

  const [characterName, setCharacterName] = useState('')

  return (
    <form>

      <FormInput
        name="character-name"
        labelText="Character Name: "
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
      />

    </form>
  )

}

export default CharacterBiographyForm
