import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/QuestionsData.css'

const QuestionsData = ({
    question,
    showDeleteModal
}) => {
    const [showAnswers, setShowAnswers] = useState(false)
    const hide = {
        display: 'none'
    }
    return (
        <>
            <tr>
                <td onClick={() => setShowAnswers(!showAnswers)}>{showAnswers ? <FontAwesomeIcon className="icon-caret" icon={['fas', 'caret-down']} /> : <FontAwesomeIcon className="icon-caret" icon={['fas', 'caret-right']} />}</td>
                <td>{question.title}</td>
                <td><FontAwesomeIcon className="icon-edit" icon={['fas', 'edit']} />|<FontAwesomeIcon onClick={showDeleteModal} className="icon-trash" icon={['fas', 'trash']} /></td>
            </tr>
            <tr style={showAnswers ? null : hide}>
                <td className={question.correctAnswer === 0 ? "correct-answer" : null}>A.</td>
                <td colSpan="2" className={question.correctAnswer === 0 ? "correct-answer normal-answer" : "normal-answer"}>{question.answers[0]}
                    {question.correctAnswer === 0 ? <FontAwesomeIcon icon={['fas', 'check']} className="icon-check" /> : null}
                </td>
            </tr>
            <tr style={showAnswers ? null : hide}>
                <td className={question.correctAnswer === 1 ? "correct-answer" : null}>B.</td>
                <td colSpan="2" className={question.correctAnswer === 1 ? "correct-answer normal-answer" : "normal-answer"}>{question.answers[1]}
                    {question.correctAnswer === 1 ? <FontAwesomeIcon icon={['fas', 'check']} className="icon-check" /> : null}
                </td>
            </tr>
            <tr style={showAnswers ? null : hide}>
                <td className={question.correctAnswer === 2 ? "correct-answer" : null}>C.</td>
                <td colSpan="2" className={question.correctAnswer === 2 ? "correct-answer normal-answer" : "normal-answer"}>{question.answers[2]}
                    {question.correctAnswer === 2 ? <FontAwesomeIcon icon={['fas', 'check']} className="icon-check" /> : null}
                </td>
            </tr>
            <tr style={showAnswers ? null : hide}>
                <td className={question.correctAnswer === 3 ? "correct-answer" : null}>D.</td>
                <td colSpan="2" className={question.correctAnswer === 3 ? "correct-answer normal-answer" : "normal-answer"}>{question.answers[3]}
                    {question.correctAnswer === 3 ? <FontAwesomeIcon icon={['fas', 'check']} className="icon-check" /> : null}
                </td>
            </tr>
        </>
    )
}

export default QuestionsData
