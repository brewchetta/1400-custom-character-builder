import CharacterBioEdit from "./CharacterBioEdit"

function CharacterBio({character, setCharacter}) {

  const handleChangeBio = (newBio) => {
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

      <p>Quirk: {character.quirk}</p>
      <p>History: {character.history}</p>

      <CharacterBioEdit {...{character, handleChangeBio}} />

    </div>
  )
}

export default CharacterBio
