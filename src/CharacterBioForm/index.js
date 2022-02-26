import { useState } from 'react'
import FormInput from '../shared-components/FormInput'
import BioAncestryForm from './BioAncestryForm'
import BioAncestryDisplay from './BioAncestryDisplay'
import SpellsInputs from '../shared-components/SpellsInputs'
import useCharacterAncestries from '../hooks/useCharacterAncestries'
import useSpells from '../hooks/useSpells'

function CharacterBiographyForm({currentRuleset, characterName, setCharacterName, ancestry, setAncestry, setCurrentAncestrySkills, setCurrentAncestrySpells, currentAncestrySkills, currentAncestrySpells}) {

  const { ancestries } = useCharacterAncestries()

  const { spells } = useSpells(currentRuleset)

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

      {
        ancestryObj && ancestryObj.spells
        ?
        <SpellsInputs
          spells={spells}
          currentSpells={currentAncestrySpells}
          setCurrentSpells={setCurrentAncestrySpells}
          maxSpells={ancestryObj.spells}
        />
        :
        null
      }

      {ancestryObj && ancestryObj.skills ? null : null}

    </>
  )

  // {spells, currentSpells, setCurrentSpells, maxSpells}

}

export default CharacterBiographyForm
