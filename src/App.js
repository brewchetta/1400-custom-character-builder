import { useState } from 'react'
import CharacterForm from './1-CharacterForm'

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
        <p>CurrentCharacter: {currentCharacter?.name}</p>
        :
        null
      }

    </div>
  );
}

export default App;
