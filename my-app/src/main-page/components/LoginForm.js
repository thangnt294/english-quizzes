import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import '../css/LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // Handle updating form
    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSignIn = () => {
        axios.post('http://localhost:3000/login', {
            username,
            password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form className="login-form">
            <h1>Welcome back, Thang!</h1>
            <div className="input-container">
                <FontAwesomeIcon icon={['fas', 'user']} className="form-icon" />
                <input type="text" name="username" placeholder="Username" className="text-field" value={username} onChange={handleChangeUsername} /><br />
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
