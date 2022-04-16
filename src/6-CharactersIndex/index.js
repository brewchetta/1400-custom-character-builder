import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getLocalCharacters } from 'utils/local-storage'

function CharactersIndex(props) {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(getLocalCharacters())
  }, [])

  return (

    <>

      <h2 className="centered">Your Tavern</h2>

      <div className="flex-wrap-container space-around">

      {
        characters.map(c => <Link to={`characters/${c.id}`} className="text-dark-cyan">{c.name}</Link>)
      }

      </div>

    </>
  )
}

export default CharactersIndex
