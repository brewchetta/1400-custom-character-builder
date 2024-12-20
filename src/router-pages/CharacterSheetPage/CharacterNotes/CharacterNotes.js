import { useCharacterContext } from 'context/CharacterContext'
import { useCurrentUserContext } from 'context/CurrentUserContext'
import { useState, useEffect } from 'react'

const DEBOUNCE_TIME = 2 * 1000

function CharacterNotes() {

  const { currentCharacter, setCurrentCharacter } = useCharacterContext()
  const { currentUser } = useCurrentUserContext()
  const isUserCharacter = currentUser._id === currentCharacter.user

  const [notesState, setNotesState] = useState(currentCharacter.notes || '')

  async function fetchSaveNotes(notes) {
    const res = await fetch(`/characters/${currentCharacter._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ notes })
    })
    if (res.ok) {
      setCurrentCharacter(prev => ({...prev, notes: notesState}))
    }
    if (!res.ok) {
      console.warn('Error saving notes!')
    } 
  }


  useEffect(() => {
    if (notesState !== currentCharacter.notes) {
      const timeout = setTimeout(() => {
        fetchSaveNotes(notesState)
      }, DEBOUNCE_TIME) // TODO: add save animation for notes?
  
      return () => clearTimeout(timeout)
    }
  }, [notesState, currentCharacter.notes]) // eslint-disable-line react-hooks/exhaustive-deps


  const handleChange = e => setNotesState(e.target.value)

  const clearNotes = () => setNotesState('')


  return (
    <div className="padding-small border-black">

      <h3 className="flex-wrap-container space-between">
        <span>Notes:</span>
        <button className="invert-on-darkmode" onClick={clearNotes}>Clear</button>
      </h3>

      {
        isUserCharacter
        ?
        <textarea
          spellCheck="false"
          className="border-none"
          onChange={handleChange}
          style={{minWidth: "100%", minHeight: "10em"}}
          value={ notesState }
          placeholder='Write your notes here...'
        />
        :
        <p>{currentCharacter.notes}</p>

      }


    </div>
  )

}

export default CharacterNotes
