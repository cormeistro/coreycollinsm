import './css/app.css';
import './js/transition';

// COMPONENTS
import CallToActionBanner from './components/ctaBanner';
import CertificatesBanner from './components/certificatesBanner';
import HeroBanner from "./components/heroBanner";
import JobHistory from './components/jobsBanner';
import LanguagesBanner from './components/languagesBanner';
import SeparatorGradient from './components/decorations/separatorGradient';
import TopBar from "./components/topBar";
import TransitionBanner from './components/transitionBanner';
import ContactBanner from './components/contactBanner';
import BottomBar from './components/bottomBar';

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        {/* Who am I */}
        <HeroBanner />
        <LanguagesBanner />
        <SeparatorGradient />
        {/* What am I looking for */}
        <TransitionBanner />
        {/* Credentials */}
        <CertificatesBanner />
        <JobHistory />
        <SeparatorGradient />
        {/* Call to Action */}
        <CallToActionBanner />
        {/* Contact */}
        <ContactBanner />
      </div>
      {/* Bottom Bar */}
      <BottomBar />
    </>
  );
}

function handleNotificationDismiss() {
  document.getElementById("bar-notification").style.display = "none";
}

export default App;
