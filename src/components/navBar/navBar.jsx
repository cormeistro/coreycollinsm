import './navBar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <a href="/"><li>About Me</li></a>
                <a href="/certifications"><li>Certifications</li></a>
                <a href="/work-history"><li>Work History</li></a>
                <a href="/projects"><li>Projects</li></a>
            </ul>
        </div>
    );
}
 
export default NavBar;