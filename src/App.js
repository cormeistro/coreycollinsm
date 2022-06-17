import './css/app.css';
import './js/transition';

// COMPONENTS
import BarNotification from './components/decorations/barNotification';
import CertificatesBanner from './components/certificatesBanner';
import HeroBanner from "./components/heroBanner";
import LanguagesBanner from './components/languagesBanner';
import SeparatorGradient from './components/decorations/separatorGradient';
import TopBar from "./components/topBar";
import TransitionBanner from './components/transitionBanner';

function App() {
  return (
    <>
      <BarNotification onDismiss={handleNotificationDismiss} message="Please note that this site is still under development as a personal project. Some items like navigation and Contact buttons aren't fully functional yet" />
      <div className="container">
        <TopBar />
        {/* Who am I */}
        <HeroBanner />
        <LanguagesBanner />
        <SeparatorGradient />
        {/* What am I looking for */}
        <TransitionBanner />
        {/* Credentials */}
        <CertificatesBanner />
        {/* Projects */}
        {/* Contact */}
        {/* Bottom Bar */}
      </div>
    </>
  );
}

function handleNotificationDismiss() {
  document.getElementById("bar-notification").style.display = "none";
}

export default App;
