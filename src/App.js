import { useState } from 'react'
import AppRoutes from "./AppRoutes"
import AppNavbar from "./AppNavbar"
import CharacterSheet from '4-CharacterSheet'

function App() {

  return (
    <div className="App">

      <AppNavbar />

      <AppRoutes />

    </div>
  );
}

export default App;
