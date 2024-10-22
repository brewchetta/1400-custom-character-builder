function DarkModeButton({ darkMode, handleDarkModeClick }) {

    const className = darkMode ? "darkmode-button night" : "darkmode-button day"

    return (
        <button className={className} onClick={() => handleDarkModeClick()}>

            <span>★</span>
            <span>☀</span>

        </button>
    )

}

export default DarkModeButton

//  ☀ ☾ ★