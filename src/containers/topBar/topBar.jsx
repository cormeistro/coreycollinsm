import React from 'react';
import Modal from 'react-modal';
import './topBar.css';
import { ContactForm } from '../../components';

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

const TopBar = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="top-bar" id="top-bar">
            <div className="logo">
                <a href="#hero-section"><h3 className="t-gradient">Corey Collins, M.</h3></a>
            </div>
            <nav className="blip">
                <ul>
                    <li><a href="#languages-section">About Me</a></li>
                    <li><a href="#certs-section">Certifications</a></li>
                    <li><a href="#work-history-section">Work History</a></li>
                </ul>
            </nav>
            <div className="bg-gradient blip btn-contact">
                <div className="bg-light border-gradient-inner">
                    <button className="t-gradient" onClick={openModal}>Contact Me</button>
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
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;