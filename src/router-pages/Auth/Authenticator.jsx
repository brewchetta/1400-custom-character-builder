import { useState, useEffect } from 'react'

import LoadingAnimation from 'shared/LoadingAnimation' 
import LoginSignup from './LoginSignup'

import { useCurrentUserContext } from 'context/CurrentUserContext'
import { useLoadingContext } from 'context/LoadingContext'

function Authenticator({children}) {

    const { setCurrentUser } = useCurrentUserContext()
    const { loading, setLoading } = useLoadingContext()
    

    async function authenticateCurrentUser() {
        const res = await fetch('/users/current')
        if (res.status === 200) {
            const data = await res.json()
            setCurrentUser(data.result)
        } else if (res.status >= 400) {
            try {
                console.warn("Something went wrong...")
                const json = res.json()
                console.log(json)
            } catch {
                console.error(res)
            }
        }
        setTimeout(() => setLoading(false), 1000)
        // TODO use an animated element and the animationend event listener
    }

    useEffect(() => {
        authenticateCurrentUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <LoadingAnimation />
    }

    return children

}

export default Authenticator