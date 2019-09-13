import React from 'react'
import '../css/ModalTitle.css'

function ModalTitle(props) {
    const { count, isStart, isFinish } = props
    return (
        <div>
            {isStart ?
                (isFinish ?
                    <h1>Phew... finally over, huh?</h1>
                    :
                    <h1>Question {count + 1}</h1>
                )
                :
                <h1>Welcome to English Quizzes!</h1>
            }
        </div>
    )
}

export default ModalTitle
