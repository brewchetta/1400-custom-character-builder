import { useCharacterContext } from "context/CharacterContext"
import { useCurrentUserContext } from "context/CurrentUserContext"

// checks based on context whether a user owns a character
export default function useCheckForOwnedCharacter() {
    const { currentCharacter } = useCharacterContext()
    const { currentUser } = useCurrentUserContext()

    return currentCharacter?.user === currentUser?._id
}