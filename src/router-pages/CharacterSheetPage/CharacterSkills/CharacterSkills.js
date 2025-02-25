import { useState } from 'react'

import HelpButton from 'shared/HelpButton'
import CharacterStatusConditions from './CharacterStatusConditions'
import { rulesPlay } from 'data/rules'
import { useCharacterContext } from 'context/CharacterContext'
import { useCurrentUserContext } from 'context/CurrentUserContext'
import triangleIcon from 'assets/images/triangle-icon.png'
import SaveAndEditButton from 'shared/SaveAndEditButton'
import { patchCharacter } from 'async/fetch-characters'
import useCheckForOwnedCharacter from 'hooks/useCheckForOwnedCharacter'

function CharacterSkills() {

  const { currentCharacter: { _id, skills, hindered, injured, helped }, setCurrentCharacter } = useCharacterContext()
  const ownedCharacter = useCheckForOwnedCharacter()

  const [editable, setEditable] = useState(false)

  async function handleChangeSkill(skillToUpdate, numericChange) {
    if (skillToUpdate.diceSize + numericChange <= 12 && ownedCharacter) {
      const updatedSkills = skills.map(skill => (
        skill.name === skillToUpdate.name
        ? 
        {...skillToUpdate, diceSize: skillToUpdate.diceSize + numericChange } 
        : 
        skill 
      ))
      .filter(skill => skill.diceSize >= 8)

      const res = await patchCharacter(_id, {skills: updatedSkills})
      if (res.ok) {
        const data = await res.json()
        setCurrentCharacter(data.result)
      } else {
        console.warn('Something went wrong...')
      }

    }

  }

  const renderedSkills = skills.map(skill => (
    <li key={skill.name} className={`skill-item margin-bottom-small ${editable ? 'centered' : null}`}
    style={{fontSize: '0.9em'}}>
      {skill.name} [d{(!hindered && !injured) || editable ? skill.diceSize : 4}{helped && ' + d6'}]
      {
        editable
        ?
        <div>
          <button className="icon-button border-none background-none" onClick={() => handleChangeSkill(skill, -2)}>-2</button>
          <button className="icon-button border-none background-none" onClick={() => handleChangeSkill(skill, -2)}>
            <img className="invert-on-darkmode" src={triangleIcon} alt={'decrease'} style={{ width: '0.6rem' }} />
          </button>

          <button className="icon-button border-none background-none" onClick={() => handleChangeSkill(skill, 2)} disabled={skill.diceSize >= 12}>+2</button>
          <button className="icon-button border-none background-none" onClick={() => handleChangeSkill(skill, 2)} disabled={skill.diceSize >= 12}>
            <img className="invert-on-darkmode" src={triangleIcon} alt={'increase'} style={{ width: '0.6rem', transform: 'rotate(180deg)' }} />
          </button>
        </div>
        :
        null
      }
    </li>
  ))

  return (

    <div className="border-black background-white padding-small quill-background relative">

      <HelpButton
        className="position-top-right"
        info={rulesPlay.rolling}
      />

      <h3>Skills<SaveAndEditButton displayCondition={ownedCharacter} editable={editable} setEditable={setEditable}/></h3>

      <ul className="skills-list grid-columns-large">

        {renderedSkills}

      </ul>

      <CharacterStatusConditions displayCondition={!editable && ownedCharacter} />

    </div>
  )
}

export default CharacterSkills
