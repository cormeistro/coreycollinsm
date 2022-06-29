import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, SubmitButton } from './components';
import { Contact, Home } from './pages';

function App() {
  return (
    <div className="main-wrapper">
      <div className="section top-bar">
        <a href="/"><h1 className="logo t-gradient">corey.collins<sup>m</sup></h1></a>
        <NavBar />
        <SubmitButton fill="bright" text="Contact Me" url="/contact" />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<h1>Certifications Section</h1>} />
          <Route path="/work-history" element={<h1>Work History Section</h1>} />
          <Route path="/projects" element={<h1>Projects Section</h1>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
