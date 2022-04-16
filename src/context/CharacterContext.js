import CreateContextWrapper from './_useContextState'
import * as localStore from 'utils/local-storage'

const [useCharacterContext, CharacterContextProvider] = CreateContextWrapper({}, "currentCharacter", localStore.updateLocalCharacter)

export {useCharacterContext, CharacterContextProvider}
