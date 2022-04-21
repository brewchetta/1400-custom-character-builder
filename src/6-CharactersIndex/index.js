import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getLocalCharacters } from 'utils/local-storage'
import { toSpinalCase } from 'utilities'

function CharactersIndex(props) {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(getLocalCharacters())
  }, [])

  return (

    <div className="text-white chalkboard chalk-background">

      <h2 className="centered">Your Tavern</h2>

      <div className="grid-columns-medium padding-medium">

      {
        characters.map(c => (
          <Link key={c.id}
          to={`characters/${toSpinalCase(c.name)}/${c.id}`}
          className="text-white chalkboard no-decoration centered border-white-hover padding-medium" style={{borderRadius: '50%'}}>
            <span>{c.name}</span>
            <br/>
            <span style={{fontSize: '0.8em'}}>{c.ancestry} {c.className}</span>
          </Link>
        ))
      }

      </div>

    </div>
  )
}

export default CharactersIndex
