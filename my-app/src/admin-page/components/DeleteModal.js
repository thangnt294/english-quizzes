import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../css/DeleteModal.css'

const DeleteModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="delete-modal"
        >
            <Modal.Header className="bg-danger">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1>Delete Question</h1>
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this question?</p>
            </Modal.Body>
            <Modal.Footer className="delete-footer">
                <Button variant="danger" className="custom-button">Confirm</Button>
                <Button variant="secondary" className="custom-button" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal
