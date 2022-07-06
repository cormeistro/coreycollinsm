import './home.css';
import { LanguagesSection, TransitionSection, VennSection, XpSection } from './containers';

const Home = () => {
    return (
        <div className="home-section">
            <VennSection />
            <TransitionSection />
            <XpSection />
            <LanguagesSection />
        </div>
    );
}
 
export default Home;