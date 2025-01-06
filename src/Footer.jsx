import { Link } from "react-router-dom"

function Footer() {

    return (
        <div className="position-bottom-right">
            <span>v241225 - <Link to='changelog' className="text-black no-decoration swatch-hover-background-green margin-bottom-medium">Change Log</Link></span>
        </div>
    )
}

export default Footer