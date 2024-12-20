import { useCharacterContext } from 'context/CharacterContext'
import HelpButton from 'shared/HelpButton'
import IconButton from 'shared/IconButton'
import { rulesGear } from 'data/rules'
import plusIcon from 'assets/images/plus-circle.png'
import minusIcon from 'assets/images/minus-circle.png'
import { patchCharacter } from 'fetch/fetch-characters'

function CurrentGold() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { gold } = currentCharacter

  async function handleAddGold() {
    setCurrentCharacter( prev => ({...prev, gold: prev.gold + 1}) )
    const res = await patchCharacter(currentCharacter._id, { gold: gold + 1 })
    if (res.ok) {
      const data = await res.json()
      setCurrentCharacter(data.result) 
    }
  }

  async function handleSubtractGold() {
    if (gold > 0) {
      setCurrentCharacter( prev => ({...prev, gold: prev.gold - 1}) )
      const res = await patchCharacter(currentCharacter._id, { gold: gold - 1 })
      if (res.ok) {
        const data = await res.json()
        setCurrentCharacter(data.result) 
      }
    }
  }


  return (
    <div className="padding-small border-dark-grey flex-column space-between relative">
      <HelpButton info={rulesGear.costs} className="position-top-right" />
      <label>Gold:</label>
      <p>
        <IconButton className="invert-on-darkmode" src={minusIcon} onClick={handleSubtractGold} style={{top: '0.1em', position: 'relative'}} />
        {` ${gold}`}
        <IconButton className="invert-on-darkmode" src={plusIcon} onClick={handleAddGold} style={{top: '0.1em', position: 'relative'}} />
      </p>

      <br/>
      <span className="italic text-dark-grey">Currency</span>
    </div>
  )

}

export default CurrentGold

// {name, inputType="text", labelText, onChange, value}
