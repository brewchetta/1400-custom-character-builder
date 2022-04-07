import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getLocalCharacters } from 'utils/local-storage'

function CharactersIndex(props) {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(getLocalCharacters())
  }, [])

  return (
    <div>

    <h2>Your Tavern</h2>

    {
      characters.map(c => <Link to={`characters/${c.id}`}>{c.name}</Link>)
    }

    </div>
  )
}

export default CharactersIndex
