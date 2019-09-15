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
            className="delete-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Question
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this question?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button>Confirm</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal
