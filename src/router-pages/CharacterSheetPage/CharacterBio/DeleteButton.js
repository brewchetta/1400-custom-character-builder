import { useNavigate } from 'react-router-dom'
import { deleteCharacter } from 'fetch/fetch-characters'

function DeleteButton({character}) {

  const navigate = useNavigate()

  async function handleDelete () {
    if ( window.confirm( "Are you sure?" ) ) {
      await deleteCharacter(character._id)
      navigate('/')
    }
  }

  return (
    <button className="border-dark-red text-dark-red" onClick={handleDelete}>Delete Character</button>
  )

}

export default DeleteButton
