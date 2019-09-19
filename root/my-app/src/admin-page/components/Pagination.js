import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Pagination.css'

const Pagination = ({
    totalQuestions,
    questionsPerPage,
    paginate,
    indexOfFirstQuestion,
    indexOfLastQuestion,
    currentPage,
    nextPage,
    prevPage,
    currentQuestionsNumber
}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalQuestions / questionsPerPage); i++) {
        pageNumbers.push(i)
    }

    const currentPageStyle = {
        backgroundColor: '#0072ff',
        color: '#fff'
    }

    const disableIcon = {
        color: '#d2d4dc'
    }

    const enableIcon = {
        cursor: 'pointer'
    }

    const realIndexOfFirstQuestion = indexOfFirstQuestion + 1

    const renderInSpan = () => {
        if (currentQuestionsNumber > 2) {
            if (currentPage === pageNumbers.length) {
                return `${realIndexOfFirstQuestion}-${totalQuestions}`
            } else {
                return `${realIndexOfFirstQuestion}-${indexOfLastQuestion}`
            }
        } else {
            return `${realIndexOfFirstQuestion}`
        }
    }

    return (
        <nav>
            <p>Showing questions <span className="strong-text spacing-text">{renderInSpan()}</span> of <span className="strong-text">{totalQuestions}</span> questions</p>
            <ul className="pagination">
                <li style={currentPage === 1 ? disableIcon : enableIcon} onClick={prevPage}><FontAwesomeIcon icon={['fas', 'angle-left']} className="pagination-icon" /></li>
                {pageNumbers.map(number => <li key={number}><button style={currentPage === number ? currentPageStyle : null} className="pagination-button" onClick={() => paginate(number)}>{number}</button></li>)}
                <li style={currentPage === pageNumbers.length ? disableIcon : enableIcon} onClick={nextPage}><FontAwesomeIcon icon={['fas', 'angle-right']} className="pagination-icon" /></li>
            </ul>
        </nav >
    )
}

export default Pagination
