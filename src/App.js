import { useLocation } from 'react-router-dom'
import { useState, useMemo } from 'react'

import AppRoutes from "./AppRoutes"
import AppNavbar from "./AppNavbar"
import Authenticator from 'router-pages/Auth'
import Footer from './Footer'

import { CurrentUserContextProvider } from 'context/CurrentUserContext'
import { useDarkModeContext } from 'context/DarkModeContext'
import { useLoadingContext } from 'context/LoadingContext'

function App() {

  const {darkMode, setDarkMode} = useDarkModeContext()
  const { loading } = useLoadingContext()

  const location = useLocation()

  const determinedBackground = () => {
    if (loading) return ''
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
    <CurrentUserContextProvider>
      <div className={`App ${determinedBackground()} ${darkMode ? 'dark-mode' : ''}`}>

        <AppNavbar setDarkMode={setDarkMode} darkMode={darkMode} />

        <Authenticator>
          <AppRoutes />
        </Authenticator>

        <Footer />

      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
