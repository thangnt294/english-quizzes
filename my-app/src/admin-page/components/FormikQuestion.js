import React from 'react'
import { withFormik, Form, Field } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/FormikQuestion.css'

const QuestionForm = (props) => {
    return (
        <Form className="question-form container">
            <div className="row">
                <div className="input-container col-11 container-question">
                    <FontAwesomeIcon icon={['fas', 'question']} className="form-icon" />
                    <Field type="text" name="question" placeholder="Question" className="text-field" />
                </div>
            </div>
            <div className="row">
                <div className="input-container col-5 container-answer1">
                    <Field type="radio" name="correctAnswer" className="correct-radio" />
                    <Field type="text" name="answer0" placeholder="Answer 1" className="text-field answer-field" />
                </div>
                <div className="input-container col-5 container-answer2">
                    <Field type="radio" name="correctAnswer" className="correct-radio" />
                    <Field type="text" name="answer1" placeholder="Answer 2" className="text-field answer-field" />
                </div>
            </div>
            <div className="row">
                <div className="input-container col-5 container-answer3">
                    <Field type="radio" name="correctAnswer" className="correct-radio" />
                    <Field type="text" name="answer2" placeholder="Answer 3" className="text-field answer-field" />
                </div>
                <div className="input-container col-5 container-answer4">
                    <Field type="radio" name="correctAnswer" className="correct-radio" />
                    <Field type="text" name="answer3" placeholder="Answer 4" className="text-field answer-field" />
                </div>
            </div>
        </Form>
    )
}

const FormikQuestion = withFormik({
    mapPropsToValues({ question, answer0, answer1, answer2, answer3 }) {
        return {
            question: '',
            answer0: '',
            answer1: '',
            answer2: '',
            answer3: ''
        }
    }
})(QuestionForm)

export default FormikQuestion
