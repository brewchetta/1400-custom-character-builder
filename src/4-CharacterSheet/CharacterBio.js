import CharacterBioEdit from "./CharacterBioEdit"
import SaveAndEditButton from "./SaveAndEditButton"
import DeleteButton from "./DeleteButton"
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

  return (
    <div className="padding-small">
      <h2>{name} - {capitalize(ancestry)} {capitalize(className)} <SaveAndEditButton/>{
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
