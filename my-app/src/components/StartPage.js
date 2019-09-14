import React from 'react'
import AnimationBackground from './AnimationBackground'
import '../css/StartPage.css'

class StartPage extends React.Component {
    render() {
        return (
            <div className="start-page">
                <div className="title">
                    <h1>English Quizzes</h1>
                    <h3>Test your knowledge of English now!</h3>
                    <button className="main-button" onClick={this.props.showMainModal}>Start</button>
                    <div className="login-text">
                        <p>Are you an admin?</p>
                        <p onClick={this.props.showLoginModal}>Login</p>
                        <p onClick={this.props.showAboutModal}>About</p>
                    </div>
                </div>
                <AnimationBackground />
            </div>
        )
    }
}

export default StartPage