import CharacterBioEdit from "./CharacterBioEdit"
import SaveAndEditButton from "./SaveAndEditButton"
import DeleteButton from "./DeleteButton"
import HelpButton from "shared/HelpButton"
import { capitalize } from 'utilities'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'
import { useCurrentUserContext } from "context/CurrentUserContext"

function CharacterBio() {

  const { currentCharacter, currentCharacter: {
    name,
    ancestry,
    quirk,
    history
  } } = useCharacterContext()

  const { currentUser } = useCurrentUserContext()
  const isUserCharacter = currentCharacter.user === currentUser._id

  const { editable } = useEditableContext()
  const helpToEdit = "You can edit your character by clicking the button next to me"
  const helpWhenEdit = "You can save your character by clicking the button next to me"

  return (
    <div className="padding-small">
      <h2>{name} - {capitalize(ancestry.name)} 
      {
        isUserCharacter
        ?
        <>
          {/* <SaveAndEditButton/>
          <HelpButton info={editable ? helpWhenEdit : helpToEdit }/> {
          editable
          &&
          <DeleteButton character={currentCharacter}/>
          } */} {/* TODO: Add back in edit/delete button */}
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
        <CharacterBioEdit /> 
      }

    </div>
  )
}

export default CharacterBio
