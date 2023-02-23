import FormInput from "shared/FormInput"
import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import { rulesGear } from 'data/rules'

function CurrentGold() {

  const { currentCharacter: { gold }, setCurrentCharacter } = useCharacterContext()

  const handleChangeGold = ({ target: { value } }) => {
    if ( parseInt(value) >= 0 ) {
      setCurrentCharacter( prev => ({ ...prev, gold: parseInt(value) }) )
    }
  }

  // return (
  //   !editable
  //   ?
  //   <div className="padding-small border-dark-grey flex-column space-between relative">
  //     <HelpButton info={rulesGear.costs} className="position-top-right" />
  //     <span>{gold ? `${gold} Gold` : 'An Empty Coin Purse'}</span>
  //     <br/>
  //     <span className="italic text-dark-grey">Currency</span>
  //   </div>
  //   :
  //   (
  //     <div className="padding-small border-dark-grey flex-column space-between">
  //       <FormInput
  //         name="Gold"
  //         inputType="number"
  //         labelText="Gold:"
  //         value={gold}
  //         onChange={handleChangeGold}
  //       />
  //       <br/>
  //       <span className="italic text-dark-grey">Currency</span>
  //     </div>
  //   )
  //
  // )

  return (
    <div className="padding-small border-dark-grey flex-column space-between relative">
      <HelpButton info={rulesGear.costs} className="position-top-right" />
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

}

export default CurrentGold

// {name, inputType="text", labelText, onChange, value}
