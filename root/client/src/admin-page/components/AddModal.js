import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import QuestionForm from './QuestionForm'
import '../css/AddModal.css'
import Axios from 'axios'

class AddModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            answers: ['', '', '', ''],
            correctAnswer: null
        }
    }

    // Changing form
    handleChange = (event) => {
        switch (event.target.name) {
            case 'question':
                this.setState({
                    title: event.target.value
                })
                break
            case 'answer0':
                this.setState({
                    answers: this.state.answers.map((answer, index) => {
                        if (index === 0) {
                            return event.target.value
                        } else {
                            return answer
                        }
                    })
                })
                break
            case 'answer1':
                this.setState({
                    answers: this.state.answers.map((answer, index) => {
                        if (index === 1) {
                            return event.target.value
                        } else {
                            return answer
                        }
                    })
                })
                break
            case 'answer2':
                this.setState({
                    answers: this.state.answers.map((answer, index) => {
                        if (index === 2) {
                            return event.target.value
                        } else {
                            return answer
                        }
                    })
                })
                break
            case 'answer3':
                this.setState({
                    answers: this.state.answers.map((answer, index) => {
                        if (index === 3) {
                            return event.target.value
                        } else {
                            return answer
                        }
                    })
                })
                break
            case 'correctAnswer':
                this.setState({
                    correctAnswer: parseInt(event.target.value)
                })
                break
            default:
                break
        }
    }

    // Adding question
    handleAddQuestion = () => {
        const newQuestion = {
            title: this.state.title,
            answers: [this.state.answers[0], this.state.answers[1], this.state.answers[2], this.state.answers[3]],
            correctAnswer: this.state.correctAnswer
        }
        Axios.post('/questions/add', newQuestion)
            .then(res => {
                this.setState({
                    title: '',
                    answers: ['', '', '', ''],
                    correctAnswer: null
                })
                return res
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        this.props.onHide()
    }

    // Check if value is present
    checkValue = () => {
        if (this.state.title === '' ||
            this.state.answers[0] === '' ||
            this.state.answers[1] === '' ||
            this.state.answers[2] === '' ||
            this.state.answers[3] === '' ||
            this.state.correctAnswer === null) {
            return true
        } else {
            return false
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
                        <QuestionForm
                            title={this.state.title}
                            answers={this.state.answers}
                            correctAnswer={this.state.correctAnswer}
                            handleChange={this.handleChange}
                        />
                        <p style={{ fontStyle: 'italic', marginTop: '3rem' }}>Please fill out all the field and select the correct answer before submitting</p>
                    </Modal.Body>
                    <Modal.Footer className="add-footer">
                        <Button variant="success" className="custom-button" disabled={this.checkValue()} onClick={this.handleAddQuestion}>Add</Button>
                        <Button variant="secondary" className="custom-button" onClick={this.props.onHide}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddModal
