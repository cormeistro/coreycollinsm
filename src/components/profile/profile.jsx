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
                <p>
                    In April, I voluntarily left my 10-year career as a Project Manager to pursue my passion of programming. I now spend my days learning my tech stack, networking, and practicing on practical projects. I am searching for my first job in tech as a Jr Web Developer.
                </p>
                <br />
                <p>
                    I am currently working with HTML, CSS, JavaScript while pursuing MERN. My front end abilities are solidifying daily as I move on to my studies of MongoDB & Express to handle back end.
                </p>
            </div>
        </div>
    );
}

export default Profile;