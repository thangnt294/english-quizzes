import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/AboutModal.css'

function AboutModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="about-modal"
        >
            <Modal.Header className="modal-header bg-primary">
                <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                    <h1>English Quizzes version 1.0</h1>
                </Modal.Title>
                <button type="button" className="close-button" onClick={props.onHide}>&times;</button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <p>Author: Nguyen Toan Thang</p>
                    <p>Special thanks to: Stack Overflow, Youtube, and of course, Google-sama</p>
                    <p>Technology used: mainly MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS) and other related libraries (a lot of them in fact xD)</p>
                    <p>
                        Built by <span><a href="https://www.facebook.com/thang294" rel="noopener noreferrer" target="_blank">NGUYEN TOAN THANG</a></span> as my very first small project.
                        You are 100% allowed to use this web app for both personal and commercial use, but NOT to claim it as your own design.
                        A credit to the original author, Nguyen Toan Thang, is of course highly appreciated!
                    </p>
                    <br /><br />
                    <a href="https://www.facebook.com/thang294" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} className="icon-about icon-facebook" /></a>
                    <a href="https://github.com/CodingChicken101/first-app.git" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} className="icon-about icon-github" /></a>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AboutModal