import FormInput from 'shared/FormInput'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import BioAncestryForm from './BioAncestryForm'
import BioAncestryDisplay from './BioAncestryDisplay'
import useSpells from 'hooks/useSpells'
import useCharacterQuirks from 'hooks/useCharacterQuirks'
import useCharacterHistories from 'hooks/useCharacterHistories'
import coreSkills from 'data/_skillsCore'
import { randomArrayItem } from 'utilities'

function CharacterBiographyForm({currentRulesets, characterName, setCharacterName, ancestry, setAncestry, setCurrentAncestrySkills, setCurrentAncestrySpells, currentAncestrySkills, currentAncestrySpells, characterQuirk, setCharacterQuirk, characterHistory, setCharacterHistory, ancestries}) {

  const { spells } = useSpells(currentRulesets)
  const { quirks } = useCharacterQuirks(currentRulesets)
  const { histories } = useCharacterHistories(currentRulesets)

  const ancestryObj = ancestries[ancestry]

  const handleRandomizeQuirk = () => setCharacterQuirk(randomArrayItem(quirks))
  const handleRandomizeHistory = () => setCharacterHistory(randomArrayItem(histories))

  return (
    <>

      <div className="labeled-input-section">

        <FormInput
          name="character-name"
          labelText="Character Name"
          value={characterName}
          onChange={e => setCharacterName(e.target.value)}
        />

        <FormInput
          name="character-quirk"
          labelText="Character Quirk: "
          value={characterQuirk}
          onChange={e => setCharacterQuirk(e.target.value)}
        />

        <input type='button' onClick={handleRandomizeQuirk} value="Random Quirk"/>

        <FormInput
          name="character-history"
          labelText="Character History: "
          value={characterHistory}
          onChange={e => setCharacterHistory(e.target.value)}
        />

        <input type='button' onClick={handleRandomizeHistory} value="Random History"/>

        <BioAncestryForm ancestry={ancestry} setAncestry={setAncestry} ancestries={ancestries}/>

        <BioAncestryDisplay displayCondition={ancestryObj} ancestry={ancestryObj}/>

        <SpellsInputs
          displayCondition={ancestryObj && ancestryObj.spells}
          spells={spells}
          currentSpells={currentAncestrySpells}
          setCurrentSpells={setCurrentAncestrySpells}
          maxSpells={ancestryObj?.spells}
        />

        <SkillsInputs
          displayCondition={ancestryObj && ancestryObj.skills}
          possibleSkills={coreSkills}
          currentSkills={currentAncestrySkills}
          setCurrentSkills={setCurrentAncestrySkills}
          maxSkills={ancestryObj?.skills}
        />

      </div>

    </>
  )

}

export default CharacterBiographyForm
