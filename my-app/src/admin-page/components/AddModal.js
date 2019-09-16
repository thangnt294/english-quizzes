import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FormikQuestion from './FormikQuestion'
import '../css/AddModal.css'

class AddModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: '',
            answer0: '',
            answer1: '',
            answer2: '',
            answer3: '',
            correctAnswer: null
        }
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    dialogClassName="add-modal"
                >
                    <Modal.Header className="bg-success">
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h1>Add Question</h1>
                        </Modal.Title>
                        <button type="button" className="close-button" onClick={this.props.onHide}>&times;</button>
                    </Modal.Header>
                    <Modal.Body className="add-modal-body">
                        <FormikQuestion />
                        <p style={{ fontStyle: 'italic', marginTop: '3rem' }}>Please select the correct answer before submitting</p>
                    </Modal.Body>
                    <Modal.Footer className="add-footer">
                        <Button variant="success" className="custom-button">Add</Button>
                        <Button variant="secondary" className="custom-button" onClick={this.props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddModal
