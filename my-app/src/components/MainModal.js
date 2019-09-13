import React, { Component } from 'react'
import RenderModal from './RenderModal'
import axios from 'axios'

class MainModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionsBank: [],
            count: 0,
            correct: 0,
            isStart: false,
            isFinish: false,
            shouldUpdate: false,
            playerAnswers: new Array(10).fill(null),
            secondTimer: 0,
            minuteTimer: 0
        }
    }

    // Get questions from database
    componentDidMount() {
        axios.get('http://localhost:5000/questions/10random')
            .then(response =>
                this.setState({
                    questionsBank: [...response.data]
                })
            )
            .catch(err => console.log('err'))
    }

    // Replay
    componentDidUpdate() {
        if (this.state.shouldUpdate) {
            axios.get('http://localhost:5000/questions/10random')
                .then(response =>
                    this.setState({
                        questionsBank: [...response.data],
                        shouldUpdate: false
                    })
                )
                .catch(err => console.log('err'))
        }
    }

    // Handle starting program
    startProgram = () => {
        this.setState({
            isStart: true
        })
        this.myCounter = setInterval(() => {
            this.setState(prevState => ({
                secondTimer: prevState.secondTimer + 1
            }))
            if (this.state.secondTimer === 60) {
                this.setState(prevState => ({
                    minuteTimer: prevState.minuteTimer + 1,
                    secondTimer: 0
                }))
            }
            if (this.state.minuteTimer === 59 && this.state.secondTimer === 59) {
                clearInterval(this.myCounter)
            }
        }, 1000)
    }

    // Handle choosing and switching answers between questions
    handleChooseAnswer = (event) => {
        const value = event.target.value
        this.setState(prevState => ({
            playerAnswers: prevState.playerAnswers.map((playerAnswer, index) => {
                if (index === this.state.count) {
                    return value
                } else {
                    return playerAnswer
                }
            })
        }))
    }

    // Handle the next button
    handleNextQuestion = () => {
        if (this.state.playerAnswers.length === this.state.count) {
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
    handleFinish = () => {
        clearInterval(this.myCounter)
        let correctAnswers = this.state.questionsBank.map(question => question.correctAnswer)
        let playerAnswers = this.state.playerAnswers
        for (let x = 0; x < 10; x++) {
            if (correctAnswers[x] === parseInt(playerAnswers[x])) {
                this.setState(prevState => ({
                    correct: prevState.correct + 1
                }))
            }
        }
        this.setState({
            isFinish: true
        })
    }

    // Handle the play again button
    handlePlayAgain = () => {
        this.setState({
            questionsBank: [],
            count: 0,
            correct: 0,
            isStart: false,
            isFinish: false,
            shouldUpdate: true,
            playerAnswers: new Array(10).fill(null),
            secondTimer: 0,
            minuteTimer: 0
        })
    }

    // Handle the exit button
    handleExit = () => {
        this.props.onHide()
        setTimeout(() => {
            this.setState({
                questionsBank: [],
                count: 0,
                correct: 0,
                isStart: false,
                isFinish: false,
                shouldUpdate: true,
                playerAnswers: new Array(10).fill(null), secondTimer: 0,
                minuteTimer: 0
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <RenderModal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    startProgram={this.startProgram}
                    questionState={this.state}
                    handleChooseAnswer={this.handleChooseAnswer}
                    handleNextQuestion={this.handleNextQuestion}
                    handlePrevQuestion={this.handlePrevQuestion}
                    handleFinish={this.handleFinish}
                    handlePlayAgain={this.handlePlayAgain}
                    handleExit={this.handleExit}
                />
            </div>
        )
    }
}

export default MainModal
