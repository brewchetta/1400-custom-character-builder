// VERSION 1

// function DarkModeButton({ darkMode, setDarkMode }) {

//     return (
//         <button className="darkmode-button" onClick={() => setDarkMode(!darkMode)}>

//             <div/>
//             <span>☀</span>
//             <span>☾</span>

//         </button>
//     )

// }

// VERSION 2

function DarkModeButton({ darkMode, setDarkMode }) {

    const className = darkMode ? "darkmode-button night" : "darkmode-button day"

    return (
        <button className={className} onClick={() => setDarkMode(!darkMode)}>

            <span>★</span>
            <span>☀</span>

        </button>
    )

}

export default DarkModeButton

//  ☀ ☾ ★