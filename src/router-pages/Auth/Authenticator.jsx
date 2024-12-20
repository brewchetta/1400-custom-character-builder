import { useState, useEffect } from 'react'

import LoadingScreen from './LoadingScreen'
import LoginSignup from './LoginSignup'

import { useCurrentUserContext } from 'context/CurrentUserContext'

function Authenticator({children}) {

    const { currentUser, setCurrentUser } = useCurrentUserContext()
    const [loading, setLoading] = useState(true)

    async function authenticateCurrentUser() {
        const res = await fetch('/users/current')
        if (res.status === 200) {
            const data = await res.json()
            setCurrentUser(data.result)
        } else if (res.status >= 400) {
            try {
                console.error("Something went wrong...")
                const json = res.json()
                console.log(json)
            } catch {
                console.error(res)
            }
        }
        setLoading(false)
        // TODO use an animated element and the animationend event listener
    }

    useEffect(() => {
        authenticateCurrentUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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