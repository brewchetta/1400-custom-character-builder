import saveIcon from 'assets/images/save-icon.png'
import editIcon from 'assets/images/edit-icon.png'

function SaveAndEditButton({editable, setEditable}) {

  return (
    <button className="icon-button" onClick={() => setEditable(prev => !prev)}>
      {
        editable
        ?
        <img className="invert-on-darkmode" src={saveIcon} alt="Save Changes Button" style={{height: '1em'}} />
        :
        <img className="invert-on-darkmode" src={editIcon} alt="Edit Character Button" style={{height: '1em'}} />
      }
    </button>
  )

}

export default SaveAndEditButton

// TODO: hange edit icon to quill??
// or potentially get something more legible???