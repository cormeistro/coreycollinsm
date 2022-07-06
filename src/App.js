import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { TopBar } from './containers';

function App() {
  return (
    <div className="main-container">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
