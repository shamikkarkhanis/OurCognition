import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'; // Assuming you have a Footer component
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import About from './pages/About';
import Contact from './pages/Contact';
import BrainMap from "./components/layout/BrainHeatmap";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper"> {/* Wrapper for content pages */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
