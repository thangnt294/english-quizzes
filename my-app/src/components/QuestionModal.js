import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../css QuestionModal.css'

function QuestionModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            <Modal.Header className="modal-header bg-primary">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                    <h1>Welcome to English Quizzes!</h1>
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <p>You will be given a total of 10 questions, each of which will contain 4 possible answers. Choose the option that you think will fit the most.</p>
                <p>For each correct answer, you will be given 1 point. No point will be awarded for wrong answers. At the end of the test, you total score will be displayed.</p>
                <p>Once you're ready, click the button below.</p>
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                <Button className="ready-button">I'm Ready!</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default QuestionModal