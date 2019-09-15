import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalTitle from './ModalTitle'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import '../css/MainModal.css'

function RenderModal(props) {
    // Destructuring the variables
    const { startProgram, questionState, handleChooseAnswer, handleNextQuestion, handlePrevQuestion, handleFinish, handlePlayAgain, handleExit, ...rest } = props
    const { count, isStart, isFinish } = questionState

    return (
        <Modal
            {...rest}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            <Modal.Header className="modal-header bg-primary">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                    <ModalTitle count={count} isStart={isStart} isFinish={isFinish} />
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <ModalBody handleChooseAnswer={handleChooseAnswer} questionState={questionState} />
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <ModalFooter
                    startProgram={startProgram}
                    questionState={questionState}
                    handleChooseAnswer={handleChooseAnswer}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleFinish={handleFinish}
                    handlePlayAgain={handlePlayAgain}
                    handleExit={handleExit}
                />
            </Modal.Footer>
        </Modal>
    )
}

export default RenderModal