import './topBar.css';
import { LinksBar, NavBar } from '../../components';

const TopBar = () => {
    return (
        <div className="top-bar-section">
            <NavBar />
            <LinksBar />
        </div>
    );
}
 
export default TopBar;