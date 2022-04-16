import { Link } from 'react-router-dom'

function AppNavbar(props) {
  return (
    <div className="grid-columns-medium centered">

      <Link to='/' className="text-black">Home</Link>
      <Link to='create-character' className="text-black">Build New Character</Link>

    </div>
  )
}

export default AppNavbar
