import FormInput from "shared/FormInput"
import { useCharacterContext } from 'context/CharacterContext'
import { useEditableContext } from 'context/EditableContext'

function CurrentGold() {

  const { editable } = useEditableContext()

  const { currentCharacter: { gold }, setCurrentCharacter } = useCharacterContext()

  const handleChangeGold = ({ target: { value } }) => {
    if ( parseInt(value) >= 0 ) {
      setCurrentCharacter( prev => ({ ...prev, gold: parseInt(value) }) )
    }
  }

  return (
    !editable
    ?
    <li>{gold ? `${gold} Gold` : 'An Empty Coin Purse'}</li>
    :
    (
      <li>
        <FormInput
          name="Gold"
          inputType="number"
          labelText="Gold:"
          value={gold}
          onChange={handleChangeGold}
        />
      </li>
    )

  )

}

export default CurrentGold

// {name, inputType="text", labelText, onChange, value}
