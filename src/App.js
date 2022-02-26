import { useState } from 'react'
import CharacterForm from './CharacterForm'

function App() {

  const [character, setCharacter] = useState({})

  return (
    <div className="App">

      <CharacterForm />

    </div>
  );
}

export default App;
