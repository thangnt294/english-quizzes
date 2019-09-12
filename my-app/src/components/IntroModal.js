import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../css/IntroModal.css'

function IntroModal(props) {
    const { startProgram, questionState, handleChooseAnswer, handleNextQuestion, handlePrevQuestion, ...rest } = props
    const { questionsBank, count, isStart, choices } = questionState
    return (
        <Modal
            {...rest}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            <Modal.Header className="modal-header bg-primary">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                    {isStart ? <h1>Question {count + 1}</h1> : <h1>Welcome to English Quizzes!</h1>}
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {isStart ?
                    <div>
                        <p>{(count + 1) + '. ' + questionsBank[count].title}</p>
                        <label>
                            <input type="radio" name="choices" value="0" checked={choices[count] === "0"} onChange={handleChooseAnswer} />{questionsBank[count].answers[0]}
                        </label><br />
                        <label>
                            <input type="radio" name="choices" value="1" checked={choices[count] === "1"} onChange={handleChooseAnswer} />{questionsBank[count].answers[1]}
                        </label><br />
                        <label>
                            <input type="radio" name="choices" value="2" checked={choices[count] === "2"} onChange={handleChooseAnswer} />{questionsBank[count].answers[2]}
                        </label><br />
                        <label>
                            <input type="radio" name="choices" value="3" checked={choices[count] === "3"} onChange={handleChooseAnswer} />{questionsBank[count].answers[3]}
                        </label>
                    </div>
                    :
                    <div>
                        <p>You will be given a total of 10 questions, each of which will contain 4 possible answers. Choose the option that you think will fit the most.</p>
                        <p>For each correct answer, you will be given 1 point. No point will be awarded for wrong answers. At the end of the test, you total score will be displayed.</p>
                        <p>Once you're ready, click the button below.</p>
                    </div>
                }
            </Modal.Body>
            <Modal.Footer className="modal-footer">
                {isStart ?
                    (count > 0 ?
                        (count === 9 ?
                            <div className="button-container">
                                <Button className="prev-button custom-button" onClick={handlePrevQuestion}>Prev</Button>
                                <Button className="finish-button custom-button">Finish!</Button>
                            </div>
                            :
                            <div className="button-container">
                                <Button className="prev-button custom-button" onClick={handlePrevQuestion}>Prev</Button>
                                <Button className="next-button custom-button" onClick={handleNextQuestion}>Next</Button>
                            </div>
                        )
                        :
                        <Button className="next-button custom-button" onClick={handleNextQuestion}>Next</Button>
                    )
                    :
                    <Button className="ready-button custom-button" onClick={startProgram}>I'm Ready!</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default IntroModal