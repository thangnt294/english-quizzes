import React, { Component } from 'react'
import IntroModal from './IntroModal'
import axios from 'axios'

class RenderModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionsBank: [],
            count: 0,
            isStart: false,
            choices: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/questions/10random')
            .then(response =>
                this.setState({
                    questionsBank: [...response.data]
                })
            )
            .catch(err => console.log('err'))
    }

    // Handle starting program
    startProgram = () => {
        this.setState({
            isStart: true
        })
    }

    // Handle choosing and switching answers between questions
    handleChooseAnswer = (event) => {
        const value = event.target.value
        if (this.state.choices.length === this.state.count) {
            this.setState(prevState => ({
                choices: [...prevState.choices, value]
            }))
        } else {
            this.setState(prevState => ({
                choices: prevState.choices.map((choice, index) => {
                    if (index === this.state.count) {
                        return value
                    } else {
                        return choice
                    }
                })
            }))
            console.log('else')
        }
    }

    // Handle the next button
    handleNextQuestion = () => {
        if (this.state.choices.length === this.state.count) {
            this.setState(prevState => ({
                choices: [...prevState.choices, null]
            }))
        }
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    // Handle the previous button
    handlePrevQuestion = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }

    // Handle the finish button


    render() {
        return (
            <div>
                <IntroModal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    startProgram={this.startProgram}
                    questionState={this.state}
                    handleChooseAnswer={this.handleChooseAnswer}
                    handleNextQuestion={this.handleNextQuestion}
                    handlePrevQuestion={this.handlePrevQuestion}
                />
            </div>
        )
    }
}

export default RenderModal
