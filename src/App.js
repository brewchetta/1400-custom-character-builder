import { useLocation } from 'react-router-dom'
import { useState, useMemo } from 'react'

import { getLocalDarkMode } from 'utils/local-storage'

import AppRoutes from "./AppRoutes"
import AppNavbar from "./AppNavbar"

function App() {

  const initialDarkMode = useMemo(() => {
    const browserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return getLocalDarkMode() !== null ? getLocalDarkMode() : browserDarkMode
  }, [])

  const [darkMode, setDarkMode] = useState(initialDarkMode)

  const location = useLocation()

  const determinedBackground = () => {
    switch (location.pathname) {
      case '/':
        return 'tavern-background'
      case '/create-character':
        return 'flock-background'
      case location.pathname.match(/\/characters\/\S+/)?.input:
        return 'castle-ruins-background'
      case location.pathname.match(/\/rulebook/)?.input:
        return 'spellbook-background'
      default:
        return 'tavern-background'
    }
  }

  return (
    <div className={`App ${determinedBackground()} ${darkMode ? 'dark-mode' : ''}`}>

      <AppNavbar setDarkMode={setDarkMode} darkMode={darkMode} />

      <AppRoutes />

    </div>
  );
}

export default App;
