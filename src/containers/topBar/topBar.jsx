import React from 'react';
import './topBar.css';
import { ContactButton, ContactForm, Profile, ProfileButton } from '../../components';
import Modal from 'react-modal';

const TopBar = () => {

    const [contactFormIsOpen, setContactFormIsOpen] = React.useState(false);
    const [profileIsOpen, setProfileIsOpen] = React.useState(false);

    const contactStyles = {
        content: {
            backgroundColor: 'var(--blue-dark)',
            borderRadius: '50px',
            bottom: 'auto',
            left: '50%',
            marginRight: '-50%',
            right: 'auto',
            top: '55%',
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            backgroundColor: 'rgba(25,40,50,.9)',
            backdropFilter: 'blur( 12.5px )'

        }
    };

    function closeAllModals() {
        setContactFormIsOpen(false);
        setProfileIsOpen(false);
    }
    function openContactForm() {
        setContactFormIsOpen(true);
        setProfileIsOpen(false);
    }
    function openProfile() {
        setContactFormIsOpen(false);
        setProfileIsOpen(true);
    }

    return (
        <div className="bg-glass top-bar-section">
            <ProfileButton onClick={openProfile} />
            <Modal
                ariaHideApp={false}
                contentLabel="Example Label"
                isOpen={profileIsOpen}
                onRequestClose={closeAllModals}
                style={contactStyles}
            >
                <Profile />
            </Modal>
            <h1 className="t-gradient">corey.collins<sup>m</sup></h1>
            <ContactButton onClick={openContactForm} />
            <Modal
                ariaHideApp={false}
                contentLabel="Example Label"
                isOpen={contactFormIsOpen}
                onRequestClose={closeAllModals}
                style={contactStyles}
            >
                <ContactForm />
            </Modal>
        </div>
    );
}
 
export default TopBar;