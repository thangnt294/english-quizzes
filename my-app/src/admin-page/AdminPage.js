import React, { useState, useEffect } from 'react'
import QuestionsData from './components/QuestionsData'
import Pagination from './components/Pagination'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import './css/AdminPage.css'
import AddModal from './components/AddModal'
import EditModal from './components/EditModal'
import DeleteModal from './components/DeleteModal'

const AdminTable = () => {
    // Setting the states
    const [allQuestions, setAllQuestions] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [questionsPerPage, setQuestionsPerPage] = useState(5)
    const [addModalShow, setAddModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [deleteModalShow, setDeleteModalShow] = useState(false)
    const [deleteQuestionID, setDeleteQuestionID] = useState(0)
    const [editQuestion, setEditQuestion] = useState({
        title: '',
        answers: ['', '', '', ''],
        correctAnswer: null
    })

    // Fetching the questions
    useEffect(() => {
        const fetchQuestions = async () => {
            const res = await axios.get('http://localhost:5000/questions')
            setAllQuestions(res.data)
        }
        fetchQuestions()
    }, [allQuestions])

    // Get current questions
    const indexOfLastQuestion = currentPage * questionsPerPage
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
    const currentQuestions = allQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion)

    // Get total number of questions
    const totalQuestions = allQuestions.length

    // Changing pages
    const paginate = (number) => {
        setCurrentPage(number)
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(totalQuestions / questionsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    // Changing number of questions per page
    const updateQuestionsPerPage = (e) => {
        setQuestionsPerPage(e.target.value)
        setCurrentPage(1)
    }

    // Handling the add modal
    const showAddModal = () => {
        setAddModalShow(true)
    }

    const hideAddModal = () => {
        setAddModalShow(false)
    }

    // Handling the edit modal
    const showEditModal = (id) => {
        setEditModalShow(true)
        const foo = allQuestions.find(question => {
            return id === question._id
        })
        setEditQuestion(foo)
    }

    const hideEditModal = () => {
        setEditModalShow(false)
    }

    // Updating correct answers
    const handleChange = (event) => {
        setEditQuestion({
            ...editQuestion,
            correctAnswer: parseInt(event.target.value)
        })
    }

    // Handling the delete modal
    const showDeleteModal = (id) => {
        setDeleteModalShow(true)
        setDeleteQuestionID(id)
    }

    const hideDeleteModal = () => {
        setDeleteModalShow(false)
    }

    return (
        <div className="table-container">
            <div className="table-content">
                <div className="table-title">
                    <h1>Welcome back, Thang!</h1>
                    <button className="logout-button">Log Out</button>
                </div>
                <div className="table-option">
                    <label>Show
                    <select className="select-box" value={questionsPerPage} onChange={updateQuestionsPerPage}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select>questions per page
                </label>
                    <button className="add-button" onClick={showAddModal}>Add</button>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Questions</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentQuestions.map(question =>
                            <QuestionsData question={question} key={question._id} showDeleteModal={showDeleteModal} showEditModal={showEditModal} />
                        )}
                    </tbody>
                </Table>
                <Pagination
                    totalQuestions={totalQuestions}
                    questionsPerPage={questionsPerPage}
                    paginate={paginate}
                    indexOfFirstQuestion={indexOfFirstQuestion}
                    indexOfLastQuestion={indexOfLastQuestion}
                    currentPage={currentPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </div>
            <AddModal show={addModalShow} onHide={hideAddModal} />
            <EditModal show={editModalShow} onHide={hideEditModal} editQuestion={editQuestion} handleChange={handleChange} />
            <DeleteModal show={deleteModalShow} onHide={hideDeleteModal} deleteQuestionID={deleteQuestionID} />
        </div>
    )
}

export default AdminTable