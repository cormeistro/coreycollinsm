import './home.css';
import { ContactSection, FocusSection, HeroSection, LeapSection, LoadingSection, PathSection, TwitterSection } from './';

const Home = () => {
    return (
        <>
            <HeroSection />
            <LoadingSection />
            <LeapSection />
            <FocusSection />
            <PathSection />
            <TwitterSection />
            <ContactSection />
        </>
    );
}
 
export default Home;