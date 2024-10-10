function DarkModeButton({ darkMode, setDarkMode }) {


    const mainStyles = {
        background: darkMode ? 'white' : 'black',
        color: darkMode ? 'black' : 'white',
        zIndex: 2,
        transition: "background 0.2s linear, color 0.2s linear",
        width: "4em",
        height: '1.5em',
        position: "relative",
    }

    const sunStyle = {
        position: 'absolute',
        left: '0.25em',
        top: 0
    }

    const moonStyle = {
        position: 'absolute',
        left: '3em',
        top: 0
    }

    const highlightStyles = {
        position: 'absolute',
        width: '1.2em',
        height: '1.2em',
        border: darkMode ? 'solid black 2px' : 'solid white 2px',
        top: 0,
        left: darkMode ? '0em' : '2.5em',
        borderRadius: '100%',
        transition: 'left 0.2s'
    }

    return (
        <button onClick={() => setDarkMode(!darkMode)} style={mainStyles}>

            <span style={sunStyle}>☀</span>
            <span style={moonStyle}>☾</span>
            <div style={highlightStyles} />

        </button>
    )

}

export default DarkModeButton

//  ☀ ☾