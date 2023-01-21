import CharacterBioEdit from "./CharacterBioEdit"
import SaveAndEditButton from "./SaveAndEditButton"
import DeleteButton from "./DeleteButton"
import HelpButton from "shared/HelpButton"
import { capitalize } from 'utilities'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterBio() {

  const { currentCharacter, currentCharacter: {
    name,
    ancestry,
    className,
    ancestrySpecial,
    quirk,
    history
  } } = useCharacterContext()

  const { editable } = useEditableContext()
  const helpToEdit = "You can edit your character by hitting the button next to me"
  const helpWhenEdit = "I am information about editing"

  return (
    <div className="padding-small">
      <h2>{name} - {capitalize(ancestry)} {capitalize(className)} <SaveAndEditButton/><HelpButton info={editable ? helpToEdit : helpWhenEdit}/> {
        editable
        &&
        <DeleteButton character={currentCharacter}/>
      }</h2>

      { ancestrySpecial && <p>{ancestrySpecial}</p> }

      {
        !editable
        ?
        <>
        <p>Quirk: {quirk}</p>
        <p>History: {history}</p>
        </>
        :
        <CharacterBioEdit />
      }

    </div>
  )
}

export default CharacterBio
