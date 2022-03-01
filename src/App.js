import { useState } from 'react'
import CharacterForm from './1-CharacterForm'

function App() {

  const [currentCharacter, setCurrentCharacter] = useState({})

  return (
    <div className="App">

      <CharacterForm />

    </div>
  );
}

export default App;
