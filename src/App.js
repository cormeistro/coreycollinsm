import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Certificates, Contact, Home, Work } from './pages';
import { TopBar } from './containers';

function App() {
  return (
    <div className="main-container">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
