import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../css/MainModal.css'

function MainModal(props) {
    // Destructuring the variables
    const { startProgram, questionState, handleChooseAnswer, handleNextQuestion, handlePrevQuestion, handleFinish, handlePlayAgain, handleExit, ...rest } = props
    const { questionsBank, count, correct, isStart, isFinish, playerAnswers, secondTimer, minuteTimer } = questionState

    return (
        <Modal
            {...rest}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
        >
            <Modal.Header className="modal-header bg-primary">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                    {isStart ?
                        (isFinish ?
                            <h1>Phew... finally over, huh?</h1>
                            :
                            <h1>Question {count + 1}</h1>
                        )
                        :
                        <h1>Welcome to English Quizzes!</h1>
                    }
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body className="modal-body">
                {isStart ?
                    (isFinish ?
                        <div>
                            <h1>Your result</h1>
                            <p>Correct answers: {correct}/10</p>
                            <p>Time wasted: {minuteTimer <= 9 ? '0' : null}{minuteTimer}:{secondTimer <= 9 ? '0' : null}{secondTimer}</p>
                            <p>Pretty Good</p>
                        </div>
                        :
                        <div>
                            <p>{(count + 1) + '. ' + questionsBank[count].title}</p>
                            <label>
                                <input type="radio" name="playerAnswers" value="0" checked={playerAnswers[count] === "0"} onChange={handleChooseAnswer} />
                                <span className="radio-styling">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                                </span>
                                {questionsBank[count].answers[0]}
                            </label><br />
                            <label>
                                <input type="radio" name="playerAnswers" value="1" checked={playerAnswers[count] === "1"} onChange={handleChooseAnswer} />
                                <span className="radio-styling">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                                </span>
                                {questionsBank[count].answers[1]}
                            </label><br />
                            <label>
                                <input type="radio" name="playerAnswers" value="2" checked={playerAnswers[count] === "2"} onChange={handleChooseAnswer} />
                                <span className="radio-styling">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                                </span>
                                {questionsBank[count].answers[2]}
                            </label><br />
                            <label>
                                <input type="radio" name="playerAnswers" value="3" checked={playerAnswers[count] === "3"} onChange={handleChooseAnswer} />
                                <span className="radio-styling">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                                </span>
                                {questionsBank[count].answers[3]}
                            </label>
                        </div>
                    )
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
                    (isFinish ?
                        <div className="button-container-middle">
                            <Button className="replay-button custom-button" onClick={handlePlayAgain}>Play Again</Button>
                            <Button className="exit-button custom-button" onClick={handleExit}>Exit</Button>
                        </div>
                        :
                        (count > 0 ?
                            (count === 9 ?
                                <div className="button-container-bothside">
                                    <Button className="prev-button custom-button" onClick={handlePrevQuestion}>Prev</Button>
                                    <p>{minuteTimer <= 9 ? '0' : null}{minuteTimer}:{secondTimer <= 9 ? '0' : null}{secondTimer}</p>
                                    <Button className="finish-button custom-button" onClick={handleFinish}>Finish</Button>
                                </div>
                                :
                                <div className="button-container-bothside">
                                    <Button className="prev-button custom-button" onClick={handlePrevQuestion}>Prev</Button>
                                    <p>{minuteTimer <= 9 ? '0' : null}{minuteTimer}:{secondTimer <= 9 ? '0' : null}{secondTimer}</p>
                                    <Button className="next-button custom-button" onClick={handleNextQuestion}>Next</Button>
                                </div>
                            )
                            :
                            <div className="firstTimer-container">
                                <p>{minuteTimer <= 9 ? '0' : null}{minuteTimer}:{secondTimer <= 9 ? '0' : null}{secondTimer}</p>
                                <Button className="next-button custom-button" onClick={handleNextQuestion}>Next</Button>
                            </div>
                        )
                    )
                    :
                    <Button className="ready-button custom-button" onClick={startProgram}>I'm Ready!</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

export default MainModal