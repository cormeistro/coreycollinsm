import './profileButton.css';
import Profile from './assets/profile.png';

const ProfileButton = () => {
    return (
        <div className="bg-glass profile-button-comp">
            <img src={Profile} alt="Profile Image" />
        </div>
    );
}
 
export default ProfileButton;