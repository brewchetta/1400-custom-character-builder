import { Link } from 'react-router-dom'
import DarkModeButton from 'shared/DarkModeButton'
import { setLocalDarkMode } from 'utils/local-storage'
import { useNavigate } from 'react-router-dom'

import { useCurrentUserContext } from 'context/CurrentUserContext'
import { useLoadingContext } from 'context/LoadingContext'

function AppNavbar({ setDarkMode, darkMode }) {

  const navigate = useNavigate()
  const { currentUser, setCurrentUser } = useCurrentUserContext()
  const { loading } = useLoadingContext()

  const handleLogout = async (e) => {
    e.preventDefault()

    const res = await fetch('/users/logout', { method: 'DELETE' })
    if (res.ok) {
      setCurrentUser(null)
      navigate('/')
    } else {
      alert("Something went wrong...")
    }
  }
  

  const handleDarkModeClick = () => {
    setLocalDarkMode(!darkMode)
    setDarkMode(!darkMode)
  }

  if (loading) {
    return (
      <div className="grid-columns-medium centered margin-bottom-medium">
        <a href="#" className="text-black no-decoration swatch-hover-background-sky-blue margin-bottom-medium">Loading...</a>
      </div>

    )
  }

  if (currentUser) { // CURRENT USER
    return (
      <div className="grid-columns-medium centered margin-bottom-medium">
  
        <Link to='/' className="text-black no-decoration swatch-hover-background-sky-blue margin-bottom-medium">Home</Link>
        <Link to='create-character' className="text-black no-decoration swatch-hover-background-orange margin-bottom-medium">New Character</Link>
        <Link to='rulebook' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium">Rulebook</Link>
        <Link to='#' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium" onClick={handleLogout}>Logout</Link>
  
        <DarkModeButton darkMode={darkMode} handleDarkModeClick={handleDarkModeClick} />
  
      </div>
    )
  } else { // ANONYMOUS USER
    return (
      <div className="grid-columns-medium centered margin-bottom-medium">

        <Link to='/' className="text-black no-decoration swatch-hover-background-sky-blue margin-bottom-medium">Login/Signup</Link>
        <Link to='rulebook' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium">Rulebook</Link>
        {/* <Link to='changelog' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium">Change Log</Link> */}

        <DarkModeButton darkMode={darkMode} handleDarkModeClick={handleDarkModeClick} />

      </div>
    )
  }

}

export default AppNavbar
