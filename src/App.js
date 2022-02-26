import { useState } from 'react'
import CharacterClassForm from './CharacterClassForm'

function App() {

  const [character, setCharacter] = useState({})

  return (
    <div className="App">

      <CharacterClassForm />

    </div>
  );
}

export default App;
