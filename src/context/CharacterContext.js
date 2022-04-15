import CreateLocalStatefulContextWrapper from './_useLocalStoreContextState'
import * as localStore from 'utils/local-storage'

const [useCharacterContext, CharacterContextProvider] = CreateLocalStatefulContextWrapper({}, "currentCharacter", localStore.updateLocalCharacter)

export {useCharacterContext, CharacterContextProvider}
