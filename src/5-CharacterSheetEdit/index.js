import { useState, useEffect } from 'react'

function CharacterSheetEdit(props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

      <button onClick={() => setIsOpen(true)}>Skills</button>
      <button onClick={() => setIsOpen(true)}>Spells</button>
      <button onClick={() => setIsOpen(true)}>Equipment</button>

      <h2>Edit Character</h2>

    </div>
  )

}

export default CharacterSheetEdit
