import React from 'react'
import Button from 'react-bootstrap/Button'
import '../css/ModalFooter.css'

function ModalFooter(props) {
    const { handlePlayAgain, handlePrevQuestion, handleNextQuestion, handleFinish, handleExit, startProgram, questionState } = props
    const { isStart, isFinish, minuteTimer, secondTimer, count } = questionState
    return (
        <>
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
        </>
    )
}

export default ModalFooter
