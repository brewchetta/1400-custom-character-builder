import { Link } from 'react-router-dom'

function AppNavbar(props) {
  return (
    <div>

      <Link to='/'>Home</Link>
      <Link to='create-character'>Build New Character</Link>

    </div>
  )
}

export default AppNavbar
