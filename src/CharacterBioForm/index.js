import { useState } from 'react'
import FormInput from '../shared-components/FormInput'
import BioAncestryForm from './BioAncestryForm'
import BioAncestryDisplay from './BioAncestryDisplay'
import useCharacterAncestries from '../hooks/useCharacterAncestries'


function CharacterBiographyForm({characterName, setCharacterName, ancestry, setAncestry}) {

  const { ancestries } = useCharacterAncestries()

  const ancestryObj = ancestries[ancestry]

  return (
    <>

      <FormInput
        name="character-name"
        labelText="Character Name: "
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
      />

      <br/>

      <BioAncestryForm ancestry={ancestry} setAncestry={setAncestry} ancestries={ancestries}/>

      {ancestryObj ? <BioAncestryDisplay ancestry={ancestryObj}/> : null}

      {ancestryObj && ancestryObj.spells ? null : null}

      {ancestryObj && ancestryObj.skills ? null : null}

    </>
  )

}

export default CharacterBiographyForm
