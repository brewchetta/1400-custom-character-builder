import {useEffect} from 'react'
import { useCharacterContext } from 'context/CharacterContext'

function CharacterNotes() {

  const { currentCharacter: { notes }, setCurrentCharacter } = useCharacterContext()

  const handleChange = e => {
    const updatedNotes = JSON.stringify( e.target.value )
    setCurrentCharacter( prev => ({ ...prev, notes: updatedNotes }) )
  }

  const clearNotes = () => {
    setCurrentCharacter( prev => ({ ...prev, notes: JSON.stringify('') }) )
  }

  return (
    <div className="padding-small">

      <h3 className="flex-wrap-container space-between">
        <span>Notes:</span>
        <button onClick={clearNotes}>Clear</button>
      </h3>

      <textarea
        className="border-none"
        onChange={handleChange}
        style={{width: "100%"}}
        value={ notes && JSON.parse(notes) }
        placeholder='Write your notes here...'
      />

    </div>
  )

}

export default CharacterNotes