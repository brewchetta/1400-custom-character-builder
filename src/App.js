import { useLocation } from 'react-router-dom'

import AppRoutes from "./AppRoutes"
import AppNavbar from "./AppNavbar"

function App() {

  const location = useLocation()

  // console.log('LOCATION: ', location);

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
    <div className={`App ${determinedBackground()}`}>

      <AppNavbar />

      <AppRoutes />

    </div>
  );
}

export default App;
