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
    <div className="padding-small border-black">

      <h3 className="flex-wrap-container space-between">
        <span>Notes:</span>
        <button className="invert-on-darkmode" onClick={clearNotes}>Clear</button>
      </h3>

      <textarea
        spellCheck="false"
        className="border-none"
        onChange={handleChange}
        style={{minWidth: "100%", minHeight: "10em"}}
        value={ notes && JSON.parse(notes) }
        placeholder='Write your notes here...'
      />

    </div>
  )

}

export default CharacterNotes
