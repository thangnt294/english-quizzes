import React from 'react'
import StartPage from './components/StartPage'
import IntroModal from './components/IntroModal'

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  function showModal() {
    setModalShow(true)
  }

  return (
    <div>
      <StartPage showModal={showModal} />
      <IntroModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default App