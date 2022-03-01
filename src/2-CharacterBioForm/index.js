import FormInput from 'shared/FormInput'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import BioAncestryForm from './BioAncestryForm'
import BioAncestryDisplay from './BioAncestryDisplay'
import Conditional from 'shared/Conditional'
import useCharacterAncestries from 'hooks/useCharacterAncestries'
import useSpells from 'hooks/useSpells'
import coreSkills from 'data/_skillsCore'

function CharacterBiographyForm({currentRulesets, characterName, setCharacterName, ancestry, setAncestry, setCurrentAncestrySkills, setCurrentAncestrySpells, currentAncestrySkills, currentAncestrySpells, characterQuirk, setCharacterQuirk, characterHistory, setCharacterHistory}) {

  const { ancestries } = useCharacterAncestries(currentRulesets)

  const { spells } = useSpells(currentRulesets)

  const ancestryObj = ancestries[ancestry]

  return (
    <>

      <div className="labeled-input-section">

        <FormInput
        name="character-name"
        labelText="Character Name"
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
        />

        <BioAncestryForm ancestry={ancestry} setAncestry={setAncestry} ancestries={ancestries}/>

        <Conditional condition={ancestryObj}>
          <BioAncestryDisplay ancestry={ancestryObj}/>
        </Conditional>

        <Conditional condition={ancestryObj && ancestryObj.spells}>
          <SpellsInputs
            spells={spells}
            currentSpells={currentAncestrySpells}
            setCurrentSpells={setCurrentAncestrySpells}
            maxSpells={ancestryObj?.spells}
          />
        </Conditional>

        <Conditional condition={ancestryObj && ancestryObj.skills}>
          <SkillsInputs
            possibleSkills={coreSkills}
            currentSkills={currentAncestrySkills}
            setCurrentSkills={setCurrentAncestrySkills}
            maxSkills={ancestryObj?.skills}
          />
        </Conditional>

        <FormInput
          name="character-quirk"
          labelText="Character Quirk: "
          value={characterQuirk}
          onChange={e => setCharacterQuirk(e.target.value)}
        />

        <FormInput
          name="character-history"
          labelText="Character History: "
          value={characterHistory}
          onChange={e => setCharacterHistory(e.target.value)}
        />

      </div>

    </>
  )

}

export default CharacterBiographyForm
