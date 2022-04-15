import { useCharacterContext } from 'context/CharacterContext'

function CurrentGold() {

  const { currentCharacter: { gold } } = useCharacterContext()

  return (
    <p>Gold goes here</p>
  )
}

export default CurrentGold
