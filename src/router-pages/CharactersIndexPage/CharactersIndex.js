import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getLocalCharacters } from 'utils/local-storage'
import { toSpinalCase } from 'utilities'
import hops from 'assets/images/hops-1.png'
import hopsTwo from 'assets/images/hops-4.png'
import PlaceableImage from "shared/PlaceableImage"
import DrawerModal from 'shared/DrawerModal'

function CharactersIndex(props) {

  const [characters, setCharacters] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  async function fetchUserCharacters() {
    const res = await fetch('/characters')

    if (res.ok) {
      const fetchedChars = await res.json()
      if (!fetchedChars.length) {
        setModalOpen(true)
      } else {
        setCharacters(fetchedChars)
      }
    } else {
      alert("500 - Unable to fetch from server")
    }
  }

  useEffect(() => {
    fetchUserCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderCharacters = characters.map(c => (
    <Link key={c._id}
    to={`characters/${toSpinalCase(c.name)}/${c._id}`}
    className="text-white chalkboard no-decoration centered padding-medium swatch-hover-background-alternating">
      <span>{c.name}</span>
      <br/>
      <span style={{fontSize: '0.8em'}}>{c.ancestry.name}</span>
    </Link>
  ))

  return (

    <>

      <div className="text-white chalkboard chalk-background padding-large" style={{position: 'relative'}}>

        <PlaceableImage src={hopsTwo} alt="image of hops" width='11em' left='50%' top='0' />
        <PlaceableImage src={hops} alt="image of hops" width='11em' left='50%' bottom='0.5em' />

        <h2 className="centered">Your Tavern</h2>

        <div className="grid-columns-medium padding-medium">

          { renderCharacters }

        </div>

      </div>

      <DrawerModal isOpen={modalOpen}>
        <div style={{position: "absolute", top: "6em", width: "100%"}}>
          <h3 className="text-white chalkboard text-align-center">There are no people here!</h3>
          <p className="text-white chalkboard text-align-center">To get started, check out the <Link to="rulebook" className="text-white">rulebook</Link> or <Link to="create-character" className="text-white">create a new character</Link>!</p>
        </div>
      </DrawerModal>

    </>
  )
}

export default CharactersIndex
