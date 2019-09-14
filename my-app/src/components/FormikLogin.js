import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/FormikLogin.css'

const LoginForm = () => {
    return (
        <Form className="login-form">
            <h1>Welcome back, Thang!</h1>
            <div className="input-container">
                <FontAwesomeIcon icon={['fas', 'user']} className="login-icon" />
                <Field type="text" name="username" placeholder="Username" className="text-field" /><br />
            </div>
            <div className="input-container">
                <FontAwesomeIcon icon={['fas', 'lock']} className="login-icon" />
                <Field type="password" name="password" placeholder="Password" className="text-field" />
            </div>
            <button className="login-button">Sign In</button>
        </Form>
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    }
})(LoginForm)

export default FormikLogin
