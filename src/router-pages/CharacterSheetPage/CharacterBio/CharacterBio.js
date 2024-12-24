import CharacterBioEdit from "./CharacterBioEdit"
import SaveAndEditButton from "./SaveAndEditButton"
import DeleteButton from "./DeleteButton"
import HelpButton from "shared/HelpButton"

import { capitalize } from 'utilities'
import { patchCharacter } from 'fetch/fetch-characters'

import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'
import { useCurrentUserContext } from "context/CurrentUserContext"

import { useState, useEffect } from 'react'

function CharacterBio({ setLevelUpOpen }) {

  const { currentCharacter, currentCharacter: {
    name,
    ancestry,
    quirk,
    history
  }, setCurrentCharacter } = useCharacterContext()

  const [editableStates, setEditableStates] = useState({ name, quirk, history})

  const { currentUser } = useCurrentUserContext()
  const isUserCharacter = currentCharacter.user === currentUser._id

  const { editable } = useEditableContext()
  const helpToEdit = "You can edit your character by clicking the button next to me"
  const helpWhenEdit = "You can save your character by clicking the button next to me"

  useEffect(() => {
    async function sendRequest() {
      const nameEdited = editableStates.name !== currentCharacter.name
      const quirkEdited = editableStates.quirk !== currentCharacter.quirk
      const historyEdited = editableStates.history !== currentCharacter.history
      if (currentCharacter && (nameEdited || quirkEdited || historyEdited)) {
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
  }, [editable])

  return (
    <div className="padding-small">
      <h2>{name} - {capitalize(ancestry.name)} 
      {
        isUserCharacter
        ?
        <>
          <SaveAndEditButton/>
          <HelpButton info={editable ? helpWhenEdit : helpToEdit }/> {
          editable
          &&
          <DeleteButton character={currentCharacter}/>
          }
          <button onClick={() => setLevelUpOpen(prev => !prev)}>Level Up</button>
        </>
        :
        null
      }</h2>

      { ancestry.specialText && <p>{ancestry.specialText}</p> }

      {
        !editable
        ?
        <>
        <p>Quirk: {quirk}</p>
        <p>History: {history}</p>
        </>
        : // TODO: fix character editor again
        <CharacterBioEdit editableStates={editableStates} setEditableStates={setEditableStates} /> 
      }

    </div>
  )
}

export default CharacterBio
