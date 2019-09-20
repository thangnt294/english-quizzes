import React, { useState, useContext, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import '../css/LoginForm.css'
import { SetAdminContext, IsAdminContext } from '../../App'
import setAuthToken from '../../auth/setAuthToken'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [attemptedLogin, setAttemptedLogin] = useState(false)

    const handleSetAdmin = useContext(SetAdminContext)
    const isAdmin = useContext(IsAdminContext)

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    // Handle updating form
    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSignIn = (e) => {
        setAttemptedLogin(true)
        e.preventDefault()
        axios.post('/login', {
            username,
            password
        })
            .then(res => {
                if (res.status === 200) {
                    setLoginError('success')
                    const token = res.data
                    localStorage.setItem('jwtToken', token)
                    setAuthToken(token)
                    if (!isAdmin) {
                        setTimeout(handleSetAdmin, 2000)
                    }
                }
            })
            .catch(() => setLoginError('fail'))
    }

    return (
        <form className="login-form">
            <h1>Welcome back, Thang!</h1>
            {attemptedLogin ?
                (loginError === 'fail' ?
                    <div className="login-message error-message"><p>Invalid username or password!</p></div>
                    :
                    (loginError === 'success' ?
                        <div className="login-message success-message"><p>Yay it's really you!!!</p></div>
                        : null
                    )
                )
                : null}
            <div className="input-container">
                <FontAwesomeIcon icon={['fas', 'user']} className="form-icon" />
                <input type="text" name="username" placeholder="Username" className="text-field" value={username} onChange={handleChangeUsername} ref={inputRef} /><br />
            </div>
            <div className="input-container">
                <FontAwesomeIcon icon={['fas', 'lock']} className="form-icon" />
                <input type="password" name="password" placeholder="Password" className="text-field" value={password} onChange={handleChangePassword} />
            </div>
            <button className="login-button" onClick={handleSignIn}>Sign In</button>
        </form>
    )
}

export default LoginForm
