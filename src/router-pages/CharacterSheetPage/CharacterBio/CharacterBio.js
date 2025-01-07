import { useState, useEffect } from 'react'

import CharacterBioEdit from "./CharacterBioEdit"
import SaveAndEditButton from "shared/SaveAndEditButton"
import DeleteButton from "./DeleteButton"
import HelpButton from "shared/HelpButton"

import levelUpIcon from 'assets/images/level-up-icon.png'
import levelUpIconDark from 'assets/images/level-up-icon-dark.png'

import { capitalize } from 'utilities'
import { patchCharacter } from 'async/fetch-characters'

import { useCharacterContext } from 'context/CharacterContext'
import { useCurrentUserContext } from "context/CurrentUserContext"
import { useDarkModeContext } from 'context/DarkModeContext'


function CharacterBio({ setLevelUpOpen }) {

  const { darkMode } = useDarkModeContext()

  const { currentCharacter, currentCharacter: {
    name,
    gender,
    ancestry,
    quirk,
    history
  }, setCurrentCharacter } = useCharacterContext()

  const [editableStates, setEditableStates] = useState({ name, gender, quirk, history})
  const [editable, setEditable] = useState(false)

  const { currentUser } = useCurrentUserContext()
  const isUserCharacter = currentCharacter.user === currentUser._id

  const helpToEdit = "The button next to me allows you to edit your character"
  const helpWhenEdit = "The button next to me allows you to save your changes"

  useEffect(() => {
    async function sendRequest() {
      const nameEdited = editableStates.name !== currentCharacter.name
      const genderEdited = editableStates.gender !== currentCharacter.gender
      const quirkEdited = editableStates.quirk !== currentCharacter.quirk
      const historyEdited = editableStates.history !== currentCharacter.history
      if (currentCharacter && (nameEdited || genderEdited || quirkEdited || historyEdited)) {
        const res = await patchCharacter(currentCharacter._id, editableStates)
        if (res.ok) {
          const data = await res.json()
          setCurrentCharacter(data.result)
        } else {
          console.warn("Something went wrong...")
        }
      }
    }
    
    sendRequest()
  }, [editable])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="padding-small relative">
      <h2>{name} - {capitalize(ancestry.name)} 
      {
        isUserCharacter
        ?
        <>
          <SaveAndEditButton editable={editable} setEditable={setEditable}/>
          <HelpButton info={editable ? helpWhenEdit : helpToEdit }/> {
          editable
          &&
          <DeleteButton character={currentCharacter}/>
          }
        </>
        :
        null
      }</h2>

      { gender.length ? <p>{gender}</p> : null }

      { ancestry.specialText && <p>{ancestry.specialText}</p> }

      {
        !editable
        ?
        <>
          <p>Quirk: {quirk}</p>
          <p style={{ maxWidth: '50%' }}>History: {history}</p>
        </>
        :
        <CharacterBioEdit editableStates={editableStates} setEditableStates={setEditableStates} setEditable={setEditable} /> 
      }

      <button onClick={() => setLevelUpOpen(prev => !prev)} className="position-bottom-right border-none background-transparent">
        <img src={!darkMode ? levelUpIcon : levelUpIconDark} alt="level up" style={{ height: '3em' }} />
      </button>

    </div>
  )
}

export default CharacterBio