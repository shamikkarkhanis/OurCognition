import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import About from './pages/About';
import Contact from './pages/Contact';
import MicroSimPage from './pages/MicroSimPage';
import BrainMap from './components/layout/BrainHeatmap';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sim' element={<MicroSimPage />} />
          <Route path='/brain' element={<BrainMap />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
