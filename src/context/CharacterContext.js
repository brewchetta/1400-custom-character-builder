import CreateContextWrapper from './_useContextState'

const [useCharacterContext, CharacterContextProvider] = CreateContextWrapper({}, "currentCharacter")

export {useCharacterContext, CharacterContextProvider}
