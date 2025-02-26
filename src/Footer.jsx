import { Link } from "react-router-dom"

function Footer() {

    return (
        <div className="position-bottom-right">
            <span>v250226 - <Link to='changelog' className="text-black swatch-hover-background-green margin-bottom-medium">Change Log</Link></span>
        </div>
    )
}

export default Footer