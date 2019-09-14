import React from 'react'
import StartPage from './components/StartPage'
import MainModal from './components/MainModal'
import AboutModal from './components/AboutModal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import LoginModal from './components/LoginModal'

function App() {
	// Creating a font awesome library
	library.add(fab, fas)
	const [mainModalShow, setMainModalShow] = React.useState(false)
	const [aboutModalShow, setAboutModalShow] = React.useState(false)
	const [loginModalShow, setLoginModalShow] = React.useState(false)

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

export default App