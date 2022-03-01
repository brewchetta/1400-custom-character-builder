import CharacterBio from './CharacterBio'

function CharacterSheet({currentCharacter, setCurrentCharacter}) {
  return (
    <CharacterBio character={currentCharacter} />
  )
}

export default CharacterSheet
