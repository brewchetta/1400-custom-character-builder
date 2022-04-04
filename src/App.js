import { useState } from 'react'
import CharacterForm from '1-CharacterForm'
import CharacterSheet from '4-CharacterSheet'

function App() {

  const [currentCharacter, setCurrentCharacter] = useState(null)

  return (
    <div className="App">

      {
        !currentCharacter
        ?
        <CharacterForm
          setCurrentCharacter={setCurrentCharacter}
        />
        :
        null
      }

      {
        currentCharacter
        ?
        <CharacterSheet
          currentCharacter={currentCharacter}
          setCurrentCharacter={setCurrentCharacter}
        />
        :
        null
      }

    </div>
  );
}

export default App;
