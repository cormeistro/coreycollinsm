import './app.css';
import './transition';

import SeparatorGradient from './components/decorations/separatorGradient';
import { BottomBar, CertsSection, ContactSection, CtaSection, HeroSection, LanguagesSection, TopBar, TransitionSection, WorkHistorySection } from './containers';

function App() {
  return (
    <>
      <TopBar />
      <div className="container">
        {/* Who am I */}
        <HeroSection />
        <LanguagesSection />
        <SeparatorGradient />
        {/* What am I looking for */}
        <TransitionSection />
        {/* Credentials */}
        <CertsSection />
        <WorkHistorySection />
        <SeparatorGradient />
        {/* Call to Action */}
        <CtaSection />
        {/* Contact */}
        <ContactSection />
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
