import { useState } from 'react'
import FormInput from '../shared-components/FormInput'

function CharacterBiographyForm({characterName, setCharacterName}) {

  return (
    <>

      <FormInput
        name="character-name"
        labelText="Character Name: "
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
      />

    </>
  )

}

export default CharacterBiographyForm
