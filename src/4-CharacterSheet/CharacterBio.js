import CharacterBioEdit from "./CharacterBioEdit"
import saveIcon from 'assets/images/file-save.png'
import { useEditableContext } from 'context/EditableContext'

function CharacterBio({character, setCharacter}) {

  const { editable, setEditable } = useEditableContext()

  const handleChangeBio = (newBio) => {
    setCharacter(prev => ({...prev, ...newBio}))
  }

  return (
    <div>
      <h2>{character.name} - {character.ancestry} {character.className} <button onClick={() => setEditable(prev => !prev)}>{editable ? <img src={saveIcon} alt="Save Changes" style={{height: '1em'}} /> : '📝'}</button></h2>

      { character.ancestrySpecial && <p>{character.ancestrySpecial}</p> }

      {
        !editable
        ?
        <>
        <p>Quirk: {character.quirk}</p>
        <p>History: {character.history}</p>
        </>
        :
        <CharacterBioEdit {...{character, handleChangeBio}} />
      }



    </div>
  )
}

export default CharacterBio
