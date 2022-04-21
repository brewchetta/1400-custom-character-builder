import { useEditableContext } from 'context/EditableContext'
import saveIcon from 'assets/images/file-save.png'
import editIcon from 'assets/images/pencil-paper-edit.png'

function SaveAndEditButton(props) {

  const { editable, setEditable } = useEditableContext()

  return (
    <button onClick={() => setEditable(prev => !prev)}>
      {
        editable
        ?
        <img src={saveIcon} alt="Save Changes Button" style={{height: '1em'}} />
        :
        <img src={editIcon} alt="Edit Character Button" style={{height: '1em'}} />
      }
    </button>
  )

}

export default SaveAndEditButton
