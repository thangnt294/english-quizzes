import React from 'react'
import StartPage from './components/StartPage'
import RenderModal from './components/RenderModal'

function App() {
	const [modalShow, setModalShow] = React.useState(false)

	function showModal() {
		setModalShow(true)
	}

	function hideModal() {
		setModalShow(false)
	}

	return (
		<div>
			<StartPage showModal={showModal} />
			<RenderModal show={modalShow} onHide={hideModal} />
		</div>
	)
}

export default App