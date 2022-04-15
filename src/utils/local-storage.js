// KEY determines the key local storage will use to store its values
const KEY = '1400-characters'

// EXPORTS
// getLocalCharacters() => [...characters]
// setLocalCharacaters(characters) => [...characters]
// addLocalCharacter(character) => {character}
// findLocalCharacterById(id) => {character}
// deleteLocalCharacter(character) => [...characters]
// updateLocalCharacter(character) => {character}

export function getLocalCharacters() {
  return JSON.parse(localStorage.getItem(KEY)) || []
}

export function setLocalCharacters(characters) {
  localStorage.setItem(KEY, JSON.stringify(characters))
  return characters
}

export function addLocalCharacter(character) {
  const currentChars = getLocalCharacters()
  const updatedChars = [...currentChars, character]
  setLocalCharacters(updatedChars)
  return character
}

export function findLocalCharacterById(id) {
  const currentChars = getLocalCharacters()
  return currentChars.find(c => c.id === id)
}

export function deleteLocalCharacter(deletedCharacter) {
  const currentChars = getLocalCharacters()
  const updatedChars = currentChars.filter(c => c.id !== deletedCharacter.id)
  return setLocalCharacters(updatedChars)
}

export function updateLocalCharacter(updatedCharacter) {
  const currentChars = getLocalCharacters()
  const updatedChars = currentChars.map(character => (
    character.id === updatedCharacter.id
    ?
    updatedCharacter
    :
    character
  ))
  return updatedCharacter
}
