import React, { useState } from 'react'
import FormInput from 'shared/FormInput'
import Toast from 'shared/Toast'

import { useCurrentUserContext } from 'context/CurrentUserContext'

function LoginSignup() {

    const { setCurrentUser } = useCurrentUserContext()

    // FORM STATES

    const [loginFormState, setLoginFormState] = useState({
        username: '',
        password: ''
    })

    const [signupFormState, setSignupFormState] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChangeLoginForm = e => setLoginFormState(prev => ({...prev, [e.target.name]: e.target.value}))

    const handleChangeSignupForm = e => setSignupFormState(prev => ({...prev, [e.target.name]: e.target.value}))

    const [errors, setErrors] = useState([])


    // HANDLE SUBMITS

    async function handleSubmitLogin(e) {
        e.preventDefault()
        const res = await fetch('/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(loginFormState)
        })

        if (res.ok) {
            const data = await res.json()
            setCurrentUser(data.result)
        } else {
            try {
                const errorResponse = await res.json()
                setErrors([ errorResponse.error ])
            } catch (err) {
                console.error(err)
            }
        }
    }

    async function handleSubmitSignup(e) {
        e.preventDefault()
        const res = await fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(signupFormState)
        })

        if (res.ok) {
            const data = await res.json()
            setCurrentUser(data.result)
        } else {
            try {
                const errorResponse = await res.json()
                setErrors([ errorResponse.error ])
            } catch (err) {
                console.error(err)
            }
        }
    }

    return (
    <div>

        <form className="labeled-input-section padding-small margin-small" onSubmit={handleSubmitLogin}>

            <h2>Login</h2>

            <FormInput 
            name='username' 
            labelText='Username or Email' 
            onChange={handleChangeLoginForm} 
            value={loginFormState.username} />

            <FormInput 
            name='password' 
            labelText='New Password' 
            inputType='password'
            onChange={handleChangeLoginForm} 
            value={loginFormState.password} />

            <input type="submit" value="Login" />
            
        </form>

        <form className="labeled-input-section padding-small margin-small" onSubmit={handleSubmitSignup}>

            <h2>Sign up</h2>

            <FormInput 
            name='username' 
            labelText='Username' 
            onChange={handleChangeSignupForm} 
            value={signupFormState.username} />

            <FormInput 
            name='email' 
            labelText='Email' 
            inputType='email'
            onChange={handleChangeSignupForm} 
            value={signupFormState.email} />

            <FormInput 
            name='password' 
            labelText='New Password' 
            inputType='password'
            onChange={handleChangeSignupForm} 
            value={signupFormState.password} />

            <input type="submit" value="Sign Up" />

        </form>

        {
            errors.length ? <Toast toastType='error' messages={errors} /> : null
        }

    </div>
  )
}

export default LoginSignup