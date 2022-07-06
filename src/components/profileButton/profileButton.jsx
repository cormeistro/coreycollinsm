import './profileButton.css';
import Profile from './assets/profile.png';

const ProfileButton = (props) => {
    return (
        <div className="bg-glass profile-button-comp" onClick={props.onClick} >
            <img src={Profile} alt="Profile" />
        </div>
    );
}
 
export default ProfileButton;