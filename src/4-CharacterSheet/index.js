import CharacterBio from './CharacterBio'
import CharacterSkills from "./CharacterSkills"
import CharacterEquipment from "./CharacterEquipment"
import CharacterSpells from "./CharacterSpells"

function CharacterSheet({currentCharacter, setCurrentCharacter}) {
  return (
    <div>
      <CharacterBio character={currentCharacter} />
      <CharacterSkills skills={currentCharacter.skills} />
      <CharacterSpells displayCondition={currentCharacter.spells.length} spells={currentCharacter.spells} />
      <CharacterEquipment equipment={currentCharacter.items} />
    </div>
  )
}

export default CharacterSheet
