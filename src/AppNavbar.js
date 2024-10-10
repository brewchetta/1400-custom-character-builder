import { Link } from 'react-router-dom'
import DarkModeButton from 'shared/DarkModeButton'
import { setLocalDarkMode } from 'utils/local-storage'

function AppNavbar({ setDarkMode, darkMode }) {

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode)
    setLocalDarkMode(!darkMode)
  }
  
  return (
    <div className="grid-columns-medium centered margin-bottom-medium">

      <Link to='/' className="text-black no-decoration swatch-hover-background-sky-blue margin-bottom-medium">Home</Link>
      <Link to='create-character' className="text-black no-decoration swatch-hover-background-orange margin-bottom-medium">New Character</Link>
      <Link to='rulebook' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium">Rulebook</Link>
      
      {/* <button className="text-black no-decoration swatch-hover-background-purple no-border" 
      onClick={handleDarkModeClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button> */}

      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />

    </div>
  )
}

export default AppNavbar
