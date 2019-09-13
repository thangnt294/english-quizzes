import React from 'react'
import StartPage from './components/StartPage'
import MainModal from './components/MainModal'
import AboutModal from './components/AboutModal'

function App() {
	const [mainModalShow, setMainModalShow] = React.useState(false)
	const [aboutModalShow, setAboutModalShow] = React.useState(false)

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

	return (
		<div>
			<StartPage showMainModal={showMainModal} showAboutModal={showAboutModal} />
			<MainModal show={mainModalShow} onHide={hideMainModal} />
			<AboutModal show={aboutModalShow} onHide={hideAboutModal} />
		</div>
	)
}

export default App