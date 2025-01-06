import sunIcon from "assets/images/sun-mode-icon.png"
import starIcon from "assets/images/star-mode-icon.png"

function DarkModeButton({ darkMode, handleDarkModeClick }) {

    const className = darkMode ? "darkmode-button night" : "darkmode-button day"

    return (
        <button className={className} onClick={() => handleDarkModeClick()}>
                <span><img src={starIcon} alt="★"/></span>
                <span><img src={sunIcon} alt="☀"/></span>
        </button>
    )

}

export default DarkModeButton

//  ☀ ★