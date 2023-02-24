import { Link } from 'react-router-dom'

function AppNavbar(props) {
  return (
    <div className="grid-columns-medium centered margin-bottom-medium">

      <Link to='/' className="text-black no-decoration swatch-hover-background-sky-blue">Home</Link>
      <Link to='create-character' className="text-black no-decoration swatch-hover-background-orange">Build New Character</Link>
      <Link to='rulebook' className="text-black no-decoration swatch-hover-background-green">Rulebook</Link>

    </div>
  )
}

export default AppNavbar
