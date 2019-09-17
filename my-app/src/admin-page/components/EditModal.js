import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../css/EditModal.css'
import QuestionForm from './QuestionForm'

const EditModal = ({ editQuestion, onHide, handleChange, handleUpdateQuestion, checkUpdate, ...rest }) => {
    return (
        <div>
            <Modal
                {...rest}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="edit-modal"
            >
                <Modal.Header className="bg-warning">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>Edit Question</h1>
                    </Modal.Title>
                    <button type="button" className="close-button" onClick={onHide}>&times;</button>
                </Modal.Header>
                <Modal.Body>
                    <QuestionForm title={editQuestion.title} answers={editQuestion.answers} correctAnswer={editQuestion.correctAnswer} handleChange={handleChange} />
                    <p style={{ fontStyle: 'italic', marginTop: '3rem' }}>Please make changes before submitting</p>
                </Modal.Body>
                <Modal.Footer className="edit-footer">
                    <Button variant="warning" className="custom-button update-button" disabled={!checkUpdate} onClick={handleUpdateQuestion}>Update</Button>
                    <Button variant="secondary" className="custom-button" onClick={onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditModal
