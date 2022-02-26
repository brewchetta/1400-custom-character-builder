import FormInput from 'shared/FormInput'
import SpellsInputs from 'shared/SpellsInputs'
import SkillsInputs from 'shared/SkillsInputs'
import BioAncestryForm from './BioAncestryForm'
import BioAncestryDisplay from './BioAncestryDisplay'
import useCharacterAncestries from 'hooks/useCharacterAncestries'
import useSpells from 'hooks/useSpells'
import coreSkills from 'data/_skillsCore'

function CharacterBiographyForm({currentRuleset, characterName, setCharacterName, ancestry, setAncestry, setCurrentAncestrySkills, setCurrentAncestrySpells, currentAncestrySkills, currentAncestrySpells}) {

  const { ancestries } = useCharacterAncestries()

  const { spells } = useSpells(currentRuleset)

  const ancestryObj = ancestries[ancestry]

  return (
    <>

      <FormInput
        name="character-name"
        labelText="Character Name: "
        value={characterName}
        onChange={e => setCharacterName(e.target.value)}
      />

      <br/>

      <BioAncestryForm ancestry={ancestry} setAncestry={setAncestry} ancestries={ancestries}/>

      {ancestryObj ? <BioAncestryDisplay ancestry={ancestryObj}/> : null}

      {
        ancestryObj && ancestryObj.spells
        ?
        <SpellsInputs
          spells={spells}
          currentSpells={currentAncestrySpells}
          setCurrentSpells={setCurrentAncestrySpells}
          maxSpells={ancestryObj.spells}
        />
        :
        null
      }

      {
        ancestryObj && ancestryObj.skills
        ?
        <SkillsInputs
          possibleSkills={coreSkills}
          currentSkills={currentAncestrySkills}
          setCurrentSkills={setCurrentAncestrySkills}
          maxSkills={ancestryObj.skills}
        />
        :
        null
      }

      {ancestryObj && ancestryObj.skills ? null : null}

    </>
  )

}

export default CharacterBiographyForm
