import { useState } from 'react'
import CharacterBioEdit from "./CharacterBioEdit"

function CharacterBio({character, setCharacter}) {

  const [isEditable, setIsEditable] = useState(false)

  const handleChangeBio = (newBio) => {
    setIsEditable(false)
    setCharacter(prev => ({...prev, ...newBio}))
  }

  return (
    <div>
      <h2>{character.name} - {character.ancestry} {character.className}</h2>
      {
        character.ancestrySpecial
        ?
        <p>{character.ancestrySpecial}</p>
        :
        null
      }

      <button onClick={() => setIsEditable(prev => !prev)}>📝</button>

      {
        !isEditable
        ?
        <>
        <p>Quirk: {character.quirk}</p>
        <p>History: {character.history}</p>
        </>
        :
        null
      }


      <CharacterBioEdit {...{character, handleChangeBio}} displayCondition={isEditable} />

    </div>
  )
}

export default CharacterBio
