import CharacterBio from './CharacterBio'
import CharacterSkills from "./CharacterSkills"
import CharacterEquipment from "./CharacterEquipment"
import CharacterSpells from "./CharacterSpells"

function CharacterSheet({currentCharacter, setCurrentCharacter}) {

  function handleChangeSkill(skillKey, numericChange) {

    const skills = {...currentCharacter.skills}
    const updatedValue = skills[skillKey] + numericChange

    if (updatedValue <= 6) {
      delete skills[skillKey]
    } else if (updatedValue <= 12) {
      skills[skillKey] = updatedValue
    }

    setCurrentCharacter(prev => ({...prev, skills}))
  }

  function handleAddSkill(skillName) {
    const skills = {...currentCharacter.skills}
    skills[skillName] = 8
    setCurrentCharacter(prev => ({...prev, skills}))
  }

  function handleAddSpell(spell) {
    setCurrentCharacter(prev => ({...prev, spells: [...prev.spells, spell]}))
  }

  function handleRemoveSpell(spell) {
    setCurrentCharacter(prev => ({...prev, spells: prev.spells.filter(s => s !== spell)}))
  }

  return (
    <div>
      <CharacterBio character={currentCharacter} setCharacter={setCurrentCharacter} />
      <CharacterSkills skills={currentCharacter.skills} handleChangeSkill={handleChangeSkill} handleAddSkill={handleAddSkill} />
      <CharacterSpells
        displayCondition={currentCharacter.spells.length}
        spells={currentCharacter.spells}
        {...{handleAddSpell, handleRemoveSpell}}
      />
      <CharacterEquipment equipment={currentCharacter.items} gold={currentCharacter.gold} />
    </div>
  )

}

export default CharacterSheet
