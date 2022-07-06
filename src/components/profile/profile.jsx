import './profile.css';
import ProfileImage from './assets/profile.png';
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { githubURL, instagramURL, linkedInURL, twitterURL } from '../../links';

const Profile = () => {
    return (
        <div className="profile-section">
            <div className="bg-glass profile-image">
                <img src={ProfileImage} alt="Profile" />
            </div>
            <div className="profile-links">
                <a href={twitterURL} target="_blank" rel="noreferrer">
                    <div className="link"><BsTwitter /></div>
                </a>
                <a href={instagramURL} target="_blank" rel="noreferrer">
                    <div className="link"><BsInstagram /></div>
                </a>
                <a href={githubURL} target="_blank" rel="noreferrer">
                    <div className="link"><BsGithub /></div>
                </a>
                <a href={linkedInURL} target="_blank" rel="noreferrer">
                    <div className="link"><BsLinkedin /></div>
                </a>
            </div>
            <h1 className="t-gradient">Hi, I'm Corey.</h1>
            <div className="profile-text">
                <p>I am transitioning into development after 10 years as a Project Manager. I have loved my past experiences, but web development is what I am most passionate about. I am seeking my first role as a Jr Developer with a company that would like an experienced professional who is driven to grow and adapt. I am willing to ask questions, but also seek out answers myself.
                </p>
                <br />
                <p>
                No amount of education will prepare me 100% for any role in tech. I invite you to a conversation with me to learn where we may be able to help each other. If I am not a good fit for a role with your company, I would still value any input on my progress and what you might expect if I were to apply again in the future. I have found nothing but encouragement from the tech community on my journey, and I would cherish any input you have. Regardless of your decision, I wish you the best on all of your future endeavors.
                </p>
            </div>
        </div>
    );
}

export default Profile;