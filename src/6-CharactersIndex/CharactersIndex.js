import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getLocalCharacters } from 'utils/local-storage'
import { toSpinalCase } from 'utilities'
import hops from 'assets/images/hops-1.png'
import hopsTwo from 'assets/images/hops-4.png'
import PlaceableImage from "shared/PlaceableImage"

function CharactersIndex(props) {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(getLocalCharacters())
  }, [])

  return (

    <div className="text-white chalkboard chalk-background padding-large" style={{position: 'relative'}}>

      <PlaceableImage src={hopsTwo} alt="image of hops" width='11em' left='50%' top='0' />
      <PlaceableImage src={hops} alt="image of hops" width='11em' left='50%' bottom='0.5em' />

      <h2 className="centered">Your Tavern</h2>

      <div className="grid-columns-medium padding-medium">

      {
        characters.map(c => (
          <Link key={c.id}
          to={`characters/${toSpinalCase(c.name)}/${c.id}`}
          className="text-white chalkboard no-decoration centered padding-medium swatch-hover-background-alternating">
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
