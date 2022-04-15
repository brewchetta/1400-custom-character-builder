import CharacterBioEdit from "./CharacterBioEdit"
import saveIcon from 'assets/images/file-save.png'
import { useEditableContext } from 'context/EditableContext'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterBio() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()

  const { editable, setEditable } = useEditableContext()

  return (
    <div>
      <h2>{currentCharacter.name} - {currentCharacter.ancestry} {currentCharacter.className} <button onClick={() => setEditable(prev => !prev)}>{editable ? <img src={saveIcon} alt="Save Changes" style={{height: '1em'}} /> : '📝'}</button></h2>

      { currentCharacter.ancestrySpecial && <p>{currentCharacter.ancestrySpecial}</p> }

      {
        !editable
        ?
        <>
        <p>Quirk: {currentCharacter.quirk}</p>
        <p>History: {currentCharacter.history}</p>
        </>
        :
        <CharacterBioEdit {...{currentCharacter}} />
      }



    </div>
  )
}

export default CharacterBio
