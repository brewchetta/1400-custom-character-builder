import FormInput from 'shared/FormInput'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import BioAncestryForm from './BioAncestryForm'
import BioAncestryDisplay from './BioAncestryDisplay'
import useSpells from 'hooks/useSpells'
import useCharacterQuirks from 'hooks/useCharacterQuirks'
import useCharacterHistories from 'hooks/useCharacterHistories'
import { randomArrayItem } from 'utilities'
import quirks from 'data/_quirksCore'
import histories from 'data/_historyCore'

function CharacterBiographyForm({
  characterName,
  setCharacterName,
  ancestry,
  setAncestry,
  currentAncestrySkills,
  setCurrentAncestrySkills,
  currentAncestrySpells,
  setCurrentAncestrySpells,
  characterQuirk,
  setCharacterQuirk,
  characterHistory,
  setCharacterHistory,
  ancestries,
  skills,
  spells
}) {

  const handleRandomizeQuirk = () => setCharacterQuirk(randomArrayItem(quirks))
  const handleRandomizeHistory = () => setCharacterHistory(randomArrayItem(histories))

  return (
    <>

      <div className="labeled-input-section padding-small margin-small">

        <FormInput
          name="character-name"
          info="This is the name of your character"
          labelText="Character Name"
          value={characterName}
          onChange={e => setCharacterName(e.target.value)}
        />
        <FormInput
          name="character-quirk"
          info="Give your character a defining quirk"
          labelText="Character Quirk: "
          value={characterQuirk}
          onChange={e => setCharacterQuirk(e.target.value)}
          />

        <input type='button' onClick={handleRandomizeQuirk} value="Random Quirk"/>

        <FormInput
          name="character-history"
          info="A three or four word summary of what led your character to adventure"
          labelText="Character History: "
          value={characterHistory}
          onChange={e => setCharacterHistory(e.target.value)}
          />

        <input type='button' onClick={handleRandomizeHistory} value="Random History"/>

        <BioAncestryForm ancestry={ancestry} setAncestry={setAncestry} ancestries={ancestries}/>

        <BioAncestryDisplay displayCondition={ancestry} ancestry={ancestry}/>


        <SpellsInputs
          displayCondition={ancestry && ancestry.spells}
          spells={spells}
          currentSpells={currentAncestrySpells}
          setCurrentSpells={setCurrentAncestrySpells}
          maxSpells={ancestry?.spells}
          checkboxClass="checkmark padding-small"
          />

        <SkillsInputs
          displayCondition={ancestry && ancestry.skills}
          possibleSkills={skills}
          currentSkills={currentAncestrySkills}
          setCurrentSkills={setCurrentAncestrySkills}
          maxSkills={ancestry?.skills}
          checkboxClass="checkmark padding-small"
          /> 

      </div>

    </>
  )

}

export default CharacterBiographyForm
