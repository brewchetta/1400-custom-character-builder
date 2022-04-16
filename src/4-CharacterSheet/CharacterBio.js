import CharacterBioEdit from "./CharacterBioEdit"
import saveIcon from 'assets/images/file-save.png'
import { capitalize } from 'utilities'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterBio() {

  const { currentCharacter: {
    name,
    ancestry,
    className,
    ancestrySpecial,
    quirk,
    history
  } } = useCharacterContext()

  const { editable, setEditable } = useEditableContext()

  return (
    <div>
      <h2>{name} - {capitalize(ancestry)} {capitalize(className)} <button onClick={() => setEditable(prev => !prev)}>{editable ? <img src={saveIcon} alt="Save Changes" style={{height: '1em'}} /> : '📝'}</button></h2>

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
