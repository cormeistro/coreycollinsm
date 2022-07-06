import './topBar.css';
import { ContactButton, ProfileButton } from '../../components';

const TopBar = () => {
    return (
        <div className="bg-glass top-bar-section">
            <ProfileButton />
            <h1 className="t-gradient">corey.collins<sup>m</sup></h1>
            <ContactButton />
        </div>
    );
}
 
export default TopBar;