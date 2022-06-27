import './heroSection.css';
import { ContactForm } from '../../components';
import React from 'react';
import Modal from 'react-modal';
import { twitterURL, githubURL, linkedInURL, instagramURL } from '../../links';

const modalStyles = {
    content: {
        display: 'grid',
        justifyItems: 'right',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const HeroSection = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="hero-section" id="hero-section">
            <div className="hero-slogan">
                <h1>I don't just code.</h1>
                <h1>I solve problems.</h1>
            </div>
            <div className="hero-quote">
                <p>I spent 10 years as a Project Manager, soaking up all the experience I could. Now, I spend my days learning full stack development and working on projects that bring solutions to real-world problems.</p>
            </div>
            <div className="hero-links">
                <button className="bg-gradient btn-contact" onClick={openModal}>Contact Me</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={modalStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    >
                    <button onClick={closeModal} style={ { padding: '10px 25px' } }>X</button>
                    <ContactForm />
                </Modal>
                <a href={instagramURL} rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
                <a href={twitterURL} rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter-square"></i></a>
                <a href={linkedInURL} rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href={githubURL} rel="noreferrer" target="_blank"><i className="fa-brands fa-github-square"></i></a>
            </div>
        </div>
    );
}
 
export default HeroSection;