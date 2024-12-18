import { Link } from 'react-router-dom'
import DarkModeButton from 'shared/DarkModeButton'
import { setLocalDarkMode } from 'utils/local-storage'

import { useCurrentUserContext } from 'context/CurrentUserContext'

function AppNavbar({ setDarkMode, darkMode }) {

  const { setCurrentUser } = useCurrentUserContext()

  const handleLogout = async (e) => {
    e.preventDefault()

    const res = await fetch('/users/logout', { method: 'DELETE' })
    if (res.ok) {
      setCurrentUser(null)
    } else {
      alert("Something went wrong...")
    }
  }
  

  const handleDarkModeClick = () => {
    setLocalDarkMode(!darkMode)
    setDarkMode(!darkMode)
  }
  
  return (
    <div className="grid-columns-medium centered margin-bottom-medium">

      <Link to='/' className="text-black no-decoration swatch-hover-background-sky-blue margin-bottom-medium">Home</Link>
      <Link to='create-character' className="text-black no-decoration swatch-hover-background-orange margin-bottom-medium">New Character</Link>
      <Link to='rulebook' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium">Rulebook</Link>
      <a href='/logout' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium" onClick={handleLogout}>Logout</a>

      <DarkModeButton darkMode={darkMode} handleDarkModeClick={handleDarkModeClick} />

    </div>
  )
}

export default AppNavbar
