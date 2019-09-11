import React, { Component } from 'react'
import IntroModal from './IntroModal'
import axios from 'axios'

class RenderModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionsBank: [],
            count: 0,
            isStart: false
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

    startProgram = () => {
        this.setState({
            isStart: true
        })
    }

    render() {
        return (
            <div>
                <IntroModal show={this.props.show} onHide={this.props.onHide} startProgram={this.startProgram} isStart={this.state.isStart} />
            </div>
        )
    }
}

export default RenderModal
