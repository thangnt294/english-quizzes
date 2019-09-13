import React from 'react'
import '../css/ModalBody.css'

function ModalBody(props) {
    const { handleChooseAnswer, questionState } = props
    const { questionsBank, count, correct, isStart, isFinish, playerAnswers, secondTimer, minuteTimer } = questionState

    const renderSwitch = number => {
        // eslint-disable-next-line
        switch (number) {
            case 0:
                return 'Wow... 0/10? You\'ve got to be kidding me. Maybe you should try again?'
                // eslint-disable-next-line
                break
            case 1:
                return 'Hey, cheer up. You got one. At least it\'s not zero, am I right?'
                // eslint-disable-next-line
                break
            case 2:
                return '2 points. Well, still better than 0 or 1. High five!'
                // eslint-disable-next-line
                break
            case 3:
                return '1 2 3... hey you got three of them! That\'s like... almost a third!'
                // eslint-disable-next-line
                break
            case 4:
                return 'There\'s just something about the number 4 that got me really hypnotized. Dunno why.'
                // eslint-disable-next-line
                break
            case 5:
                return '5. The middle number. It means that you\'ve got half of the questions right. Good job, maybe?'
                // eslint-disable-next-line
                break
            case 6:
                return 'Do you know that the number 6 is usually associated with the devil? I think that\'s just silly, because to me you\'re more like an angel ;) '
                // eslint-disable-next-line
                break
            case 7:
                return 'Ohhh... am I looking at a lucky 7? It must be my lucky day! Or yours... maybe ;)'
                // eslint-disable-next-line
                break
            case 8:
                return 'That\'s a decent score, eh? You should be proud of yourself. Well done!'
                // eslint-disable-next-line
                break
            case 9:
                return 'Impressive. You should consider being a teacher. Now how about trying again to get a perfect 10? ;)'
                // eslint-disable-next-line
                break
            default:
                return 'Spendid, marvelous, or should I say "supercalifragilisticexpialidocious"! (please don\'t ever use that word in real life)'
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
                        <br />
                        <br />
                        <p>{renderSwitch(correct)}</p>
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
        </div>
    )
}

export default ModalBody
