import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/ModalBody.css'

function ModalBody(props) {
    const { handleChooseAnswer, questionState } = props
    const { questionsBank, count, correct, isStart, isFinish, playerAnswers, secondTimer, minuteTimer } = questionState

    const renderSwitch = number => {
        // eslint-disable-next-line
        switch (number) {
            case 0:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'dizzy']} className="icon-result" />
                        <p>{'Wow... 0/10? You\'ve got to be kidding me. Maybe you should try again?'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 1:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'sad-cry']} className="icon-result" />
                        <p>{'Hey, cheer up. You got one. At least it\'s not zero, am I right?'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 2:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'frown-open']} className="icon-result" />
                        <p>{'2 points. Well, still better than 0 or 1. Try harder next time!'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 3:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'grin-beam-sweat']} className="icon-result" />
                        <p>{'1 2 3... hey you got three of them! That\'s like... almost a third!'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 4:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'grin-tongue-squint']} className="icon-result" />
                        <p>{'There\'s just something about the number 4 that got me really hypnotized. Dunno why.'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 5:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'grimace']} className="icon-result" />
                        <p>{'5. The middle ground. It means that you\'ve got half of the questions right. Good job, maybe?'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 6:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'smile-wink']} className="icon-result" />
                        <p>{'Did you know that the number 6 is usually associated with the devil? Well I think that\'s just silly, because to me you\'re more like an angel ;)'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 7:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'grin-tongue-wink']} className="icon-result" />
                        <p>{'Ohhh... am I looking at a lucky 7? It must be my lucky day! Or yours... maybe ;)'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 8:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'grin-beam']} className="icon-result" />
                        <p>{'That\'s a decent score, eh? You should be proud of yourself. Well done!'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 9:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'surprise']} className="icon-result" />
                        <p>{'9 out of 10. Impressive. Go for 10 next? ;)'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            case 10:
                return (
                    <div>
                        <FontAwesomeIcon icon={['far', 'grin-stars']} className="icon-result" />
                        <p>{'Spendid, marvelous, impeccable! You\'ve officially earned my respect ;) well done. Go rest now.'}</p>
                    </div>
                )
                // eslint-disable-next-line
                break
            default:
                return <p>Uh oh... Something's wrong with the score system. Couldn't get your result... sorry.</p>
        }
    }

    return (
        <div>
            {isStart ?
                (isFinish ?
                    <div className="result-container">
                        <h1>Your result</h1>
                        <p>Correct answers: {correct}/10</p>
                        <p>Total time wasted: {minuteTimer <= 9 ? '0' : null}{minuteTimer}:{secondTimer <= 9 ? '0' : null}{secondTimer}</p>
                        {renderSwitch(correct)}
                    </div>
                    :
                    <div>
                        <p>{(count + 1) + '. ' + questionsBank[count].title}</p>
                        <label>
                            <input className="answers-option" type="radio" name="playerAnswers" value="0" checked={playerAnswers[count] === "0"} onChange={handleChooseAnswer} />
                            <span className="radio-styling">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                            {questionsBank[count].answers[0]}
                        </label><br />
                        <label>
                            <input className="answers-option" type="radio" name="playerAnswers" value="1" checked={playerAnswers[count] === "1"} onChange={handleChooseAnswer} />
                            <span className="radio-styling">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                            {questionsBank[count].answers[1]}
                        </label><br />
                        <label>
                            <input className="answers-option" type="radio" name="playerAnswers" value="2" checked={playerAnswers[count] === "2"} onChange={handleChooseAnswer} />
                            <span className="radio-styling">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                            </span>
                            {questionsBank[count].answers[2]}
                        </label><br />
                        <label>
                            <input className="answers-option" type="radio" name="playerAnswers" value="3" checked={playerAnswers[count] === "3"} onChange={handleChooseAnswer} />
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
        </div>
    )
}

export default ModalBody
