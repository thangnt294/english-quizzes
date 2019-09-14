import React from 'react'
import Modal from 'react-bootstrap/Modal'
import FormikLogin from './FormikLogin'

function LoginModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="bg-primary">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                    <h1>Login</h1>
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body style={{ position: 'relative' }}>
                <FormikLogin />
            </Modal.Body>
        </Modal >
    )
}

export default LoginModal