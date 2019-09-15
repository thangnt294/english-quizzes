import React from 'react'
import StartPage from './components/StartPage'
import MainModal from './components/MainModal'
import AboutModal from './components/AboutModal'
import LoginModal from './components/LoginModal'

function MainPage() {
    // Initialize states using React Hooks
    const [mainModalShow, setMainModalShow] = React.useState(false)
    const [aboutModalShow, setAboutModalShow] = React.useState(false)
    const [loginModalShow, setLoginModalShow] = React.useState(false)

    // Toggling the modals
    function showMainModal() {
        setMainModalShow(true)
    }

    function hideMainModal() {
        setMainModalShow(false)
    }

    function showAboutModal() {
        setAboutModalShow(true)
    }

    function hideAboutModal() {
        setAboutModalShow(false)
    }

    function showLoginModal() {
        setLoginModalShow(true)
    }

    function hideLoginModal() {
        setLoginModalShow(false)
    }
    return (
        <div>
            <StartPage showMainModal={showMainModal} showAboutModal={showAboutModal} showLoginModal={showLoginModal} />
            <MainModal show={mainModalShow} onHide={hideMainModal} />
            <AboutModal show={aboutModalShow} onHide={hideAboutModal} />
            <LoginModal show={loginModalShow} onHide={hideLoginModal} />
        </div>
    )
}

export default MainPage
