import './css/app.css';
import './js/transition';
import HeroBanner from "./components/heroBanner";
import TopBar from "./components/topBar";
import LanguagesBanner from './components/languagesBanner';
import TransitionBanner from './components/transitionBanner';
import BarNotification from './components/decorations/barNotification';

function App() {
  return (
    <>
      <BarNotification onDismiss={handleNotificationDismiss} message="Please note that this site is still under development as a personal project. Some items like navigation and Contact buttons aren't fully functional yet" />
      <div className="container">
        <TopBar />
        {/* Who am I */}
        <HeroBanner />
        <LanguagesBanner />
        <TransitionBanner />
        {/* What am I looking for */}
        {/* Credentials */}
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
