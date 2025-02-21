import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Assuming you have a Footer component
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Content from './components/pages/Content';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

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
      <Footer /> {/* Footer visible on all pages */}
    </Router>
  );
}

export default App;
