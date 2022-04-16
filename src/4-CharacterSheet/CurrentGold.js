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
    <div>
      <span>{gold ? `${gold} Gold` : 'An Empty Coin Purse'}</span>
      <br/>
      <span className="italic text-dark-grey">Currency</span>
    </div>
    :
    (
      <div>
        <FormInput
          name="Gold"
          inputType="number"
          labelText="Gold:"
          value={gold}
          onChange={handleChangeGold}
        />
        <br/>
        <span className="italic text-dark-grey">Currency</span>
      </div>
    )

  )

}

export default CurrentGold

// {name, inputType="text", labelText, onChange, value}
