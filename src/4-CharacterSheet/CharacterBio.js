function CharacterBio({character}) {
  console.log(character);
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

    </div>
  )
}

export default CharacterBio
