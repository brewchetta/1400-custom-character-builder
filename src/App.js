import { useState } from 'react'
import CharacterForm from './1-CharacterForm'
import Conditional from 'shared/Conditional'

function App() {

  const [currentCharacter, setCurrentCharacter] = useState(null)

  return (
    <div className="App">

      <Conditional condition={!currentCharacter}>
        <CharacterForm
          setCurrentCharacter={setCurrentCharacter}
        />
      </Conditional>

      <Conditional condition={currentCharacter}>
        <p>CurrentCharacter: {currentCharacter?.name}</p>
      </Conditional>

    </div>
  );
}

export default App;
