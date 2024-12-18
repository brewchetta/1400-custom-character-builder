import { useState, useEffect } from 'react'

import LoadingScreen from './LoadingScreen'
import LoginSignup from './LoginSignup'

import { useCurrentUserContext } from 'context/CurrentUserContext'

function Authenticator({children}) {

    const { currentUser, setCurrentUser } = useCurrentUserContext()
    const [loading, setLoading] = useState(true)

    async function authenticateCurrentUser() {
        const response = await fetch('http://localhost:5000/users/current')
        if (response.status === 200) {
            const user = await response.json()
            setCurrentUser(user)
        } else if (response.status >= 400) {
            try {
                console.error("Something went wrong...")
                const json = response.json()
                console.log(json)
            } catch {
                console.error(response)
            }
        }
        setLoading(false)
        // TODO use an animated element and the animationend event listener
    }

    useEffect(() => {
        authenticateCurrentUser()
    }, [])

    if (loading) {
        return <LoadingScreen />
    }

    if (!currentUser) {
        return <LoginSignup />
    }

    return children

}

export default Authenticator