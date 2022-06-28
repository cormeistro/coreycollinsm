import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Logo, NavBar, Button } from './components';

function App() {
  return (
    <div className="mainWrapper">
      <div className="topBar">
        <Logo />
        <NavBar />
        <Button text="Contact Me" url="/contact" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<h1>Certifications Section</h1>} />
          <Route path="/work-history" element={<h1>Work History Section</h1>} />
          <Route path="/projects" element={<h1>Projects Section</h1>} />
          <Route path="/contact" element={<h1>Contact Section</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
