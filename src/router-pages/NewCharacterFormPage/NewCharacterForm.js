import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLoadingContext } from 'context/LoadingContext'
import useToggleOnCondition from 'hooks/useToggleOnCondition'

import LoadingAnimation from 'shared/LoadingAnimation'
import CharacterBioForm from './CharacterBioForm'
import CharacterProfessionForm from './CharacterProfessionForm'
import Toast from 'shared/Toast'

import { buildUpgradedSkillsList } from 'utilities'
import { toSpinalCase } from 'utilities'
import { getCharacterCreationOptions } from 'async/fetch-characters'
import { postCharacter } from 'async/fetch-characters'
import { postStoryPlayerCharacter } from 'async/fetch-story-players'


function NewCharacterForm() {

  const {groupName, groupId, playerId} = useParams()
  
  const navigate = useNavigate()
  
  const { loading, setLoading } = useLoadingContext()

  const [ancestries, setAncestries] = useState([])
  const [items, setItems] = useState([])
  const [professions, setProfessions] = useState([])
  const [skills, setSkills] = useState([])
  const [spells, setSpells] = useState([])

  const [characterName, setCharacterName] = useState('')
  const [gender, setGender] = useState('')
  const [ancestry, setAncestry] = useState(null)
  const [characterQuirk, setCharacterQuirk] = useState('')
  const [characterHistory, setCharacterHistory] = useState('')

  const [currentProfession, setCurrentProfession] = useState(null)
  const [currentTraining, setCurrentTraining] = useState([])
  const [currentSpells, setCurrentSpells] = useState({})
  const [currentAncestrySpells, setCurrentAncestrySpells] = useState({})
  const [currentAncestrySkills, setCurrentAncestrySkills] = useState([])
  const [currentSkills, setCurrentSkills] = useState([])
  const [currentExpertise, setCurrentExpertise] = useState([])
  const [currentItems, setCurrentItems] = useState({})
  const [validationErrors, setValidationErrors] = useState([])

  useEffect(() => {
    async function fetchCreatorOptions() {
      const res = await getCharacterCreationOptions()
      if (res.ok) {
        const data = await res.json()
        setProfessions(data.result.professions)
        setSkills(data.result.skills)
        setSpells(data.result.spells)
        setAncestries(data.result.ancestries)
        setItems(data.result.items)
        setLoading(false)
      } else {
        console.warn("Something went wrong...")
      }
    }
    fetchCreatorOptions()
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCurrentAncestrySkills([])
    setCurrentAncestrySpells({})
  }, [ancestry])

  const shouldDisplayClassForm = useToggleOnCondition(
    ancestry
    && characterName.length
    && (currentAncestrySkills.length || 0) >= (ancestry.skills || 0)
    && (Object.keys(currentAncestrySpells).length || 0) >= (ancestries[ancestry]?.spells || 0)
  )

  if (loading) {
    return <LoadingAnimation />
  } // TODO: Build a more interesting loading screen with animations etc

  function validate() {
    const valErrs = []
    if (!characterName.length) { valErrs.push(`Name can't be empty`) }
    if (!ancestry) { valErrs.push(`Ancestry can't be blank`) }
    if (!currentProfession) { valErrs.push(`You must choose a class`) }
    if (currentProfession?.spells > Object.keys(currentSpells).length) { valErrs.push(`Not all spells have been chosen`) }
    if (currentProfession?.skillSlots > currentSkills.length) { valErrs.push(`Not all skills have been chosen`) }
    if (currentProfession?.expertise > currentExpertise.length) { valErrs.push(`Not all skills have been chosen`) }
    if (currentProfession?.equipmentGroups?.length > Object.keys(currentItems).length) { valErrs.push(`Not all equipment has been chosen`) }
    setValidationErrors(valErrs)
    return valErrs
  }

  function buildCharacterObject() {

    const character = {
      ancestry: ancestry._id,
      name: characterName,
      gender,
      quirk: characterQuirk,
      history: characterHistory,
      profession: currentProfession._id,
      skills: buildUpgradedSkillsList(
        [], 
        ...currentSkills.map(s => ({ name: s })), 
        { name: currentProfession.coreskill },
        ...currentAncestrySkills.map(s => ({ name: s })),
        ...currentExpertise.map(s => ({ name: s })), 
      ),
      spells: [
        ...Object.values(currentSpells).map(s => s._id),
        ...Object.values(currentAncestrySpells).map(s => s._id),
      ],
      items: [
        ...currentProfession.equipmentGuaranteed,
        ...Object.values(currentItems)
      ],
      gold: 2,
      trainings: [ currentTraining._id ]
    }

    return character

  }

  async function handleSubmit(e) {
    e.preventDefault()

    // if made using group player link
    if (!validate().length && playerId) {
      const res = await postStoryPlayerCharacter(playerId, buildCharacterObject())
      if (res.ok) {
        navigate(`/story-groups/${groupName}/${groupId}`)
      } else {
        console.warn("Something went wrong...")
      }
    // if character unattached to a group
    } else if (!validate().length) {
      const res = await postCharacter(buildCharacterObject())
      if (res.ok) {
        const data = await res.json()
        navigate(`/characters/${toSpinalCase(data.result.name)}/${data.result._id}`)
      } else {
        console.warn("Something went wrong...")
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="hand-written">

      <div className="grid-columns-large">


      <CharacterBioForm {...{
        characterName,
        setCharacterName,
        gender,
        setGender,
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
      }}/>

      <CharacterProfessionForm
      displayCondition={shouldDisplayClassForm}
      {...{
        currentProfession,
        setCurrentProfession,
        currentSpells,
        setCurrentSpells,
        currentSkills,
        setCurrentSkills,
        currentItems,
        setCurrentItems,
        currentExpertise,
        setCurrentExpertise,
        professions,
        spells,
        items,
        currentTraining,
        setCurrentTraining
      }} />

      </div>

      <input
        type="submit"
        value="Finalize Character"
      />

      <Toast
        displayCondition={validationErrors.length}
        messages={validationErrors}
        toastType={'error'}
      />

    </form>
  )

}

export default NewCharacterForm
