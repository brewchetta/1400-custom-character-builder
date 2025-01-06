import { useCharacterContext } from 'context/CharacterContext'
import FormCheckbox from 'shared/FormCheckbox'
import ConditionalWrapper from 'shared/ConditionalWrapper'
import HelpButton from 'shared/HelpButton'
import { rulesPlay } from 'data/rules'
import { patchCharacter } from 'async/fetch-characters'

function CharacterStatusConditions() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()

  async function handleToggleInjured() {
    setCurrentCharacter(prev => ({...prev, injured: !currentCharacter.injured}))
    patchCharacter(currentCharacter._id, { injured: !currentCharacter.injured })
  }
  
  async function handleChangeLuck(i) {
    const { lucky, luckyMaximum } = currentCharacter
    let newLucky
    if (i <= lucky) {
      newLucky = lucky > 0 ? lucky - 1 : 0
      setCurrentCharacter(prev => ({ ...prev, lucky: newLucky }))
    } else {
      newLucky = luckyMaximum > lucky ? lucky + 1 : luckyMaximum
      setCurrentCharacter(prev => ({...prev, lucky: newLucky }))
    }
    patchCharacter(currentCharacter._id, { lucky: newLucky })
  }

  // iterates up to max number of luck and shows that number of luck boxes
  function renderLuckBoxes() {
    const luckBoxArray = []
    for (let i = 1; i <= (currentCharacter.luckyMaximum || i); i++) {
      luckBoxArray.push(
        <input
        className="boxmark"
        key={i}
        type="checkbox"
        name='lucky-checkbox'
        onChange={() => handleChangeLuck(i)}
        checked={currentCharacter.lucky >= i} />
      )
    }


    return luckBoxArray
  }

  return (
    <div>

      <div>
        { renderLuckBoxes() }
        <label htmlFor={'lucky'}> lucky <HelpButton info={rulesPlay.luck} /></label>
      </div>

      <FormCheckbox
      name={'injured'}
      className="crossmark crossable-checkbox"
      labelText={currentCharacter.injured ? 'injured' : 'healthy'}
      info={rulesPlay.harm}
      onChange={() => handleToggleInjured('injured')}
      checked={currentCharacter.injured} />
    </div>
  )
}

export default ConditionalWrapper(CharacterStatusConditions)
