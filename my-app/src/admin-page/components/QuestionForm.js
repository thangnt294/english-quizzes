import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/QuestionForm.css'

const QuestionForm = ({ title, answers, correctAnswer, handleChange }) => {
    return (
        <form className="question-form container">
            <div className="row">
                <div className="input-container col-11 container-question">
                    <FontAwesomeIcon icon={['fas', 'question']} className="form-icon" />
                    <input type="text" name="question" placeholder="Question" onChange={handleChange} value={title} className="text-field" />
                </div>
            </div>
            <div className="row">
                <div className="input-container col-5 container-answer1">
                    <input type="radio" name="correctAnswer" className="correct-radio" value="0" onChange={handleChange} checked={correctAnswer === 0} />
                    <input type="text" name="answer0" placeholder="Answer 1" onChange={handleChange} value={answers[0]} className="text-field answer-field" />
                </div>
                <div className="input-container col-5 container-answer2">
                    <input type="radio" name="correctAnswer" className="correct-radio" value="1" onChange={handleChange} checked={correctAnswer === 1} />
                    <input type="text" name="answer1" placeholder="Answer 2" onChange={handleChange} value={answers[1]} className="text-field answer-field" />
                </div>
            </div>
            <div className="row">
                <div className="input-container col-5 container-answer3">
                    <input type="radio" name="correctAnswer" className="correct-radio" value="2" onChange={handleChange} checked={correctAnswer === 2} />
                    <input type="text" name="answer2" placeholder="Answer 3" onChange={handleChange} value={answers[2]} className="text-field answer-field" />
                </div>
                <div className="input-container col-5 container-answer4">
                    <input type="radio" name="correctAnswer" className="correct-radio" value="3" onChange={handleChange} checked={correctAnswer === 3} />
                    <input type="text" name="answer3" placeholder="Answer 4" onChange={handleChange} value={answers[3]} className="text-field answer-field" />
                </div>
            </div>
        </form>
    )
}

export default QuestionForm
