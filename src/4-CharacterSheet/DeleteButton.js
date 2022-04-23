import { useNavigate } from 'react-router-dom'
import { deleteLocalCharacter } from 'utils/local-storage'

function DeleteButton({character}) {

  const navigate = useNavigate()

  const handleDelete = () => {
    if ( window.confirm( "Are you sure?" ) ) {
      deleteLocalCharacter(character)
      navigate('/')
    }
  }

  return (
    <button onClick={handleDelete}>Delete Character</button>
  )

}

export default DeleteButton
