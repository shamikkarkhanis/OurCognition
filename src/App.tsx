import React from 'react';
import Navbar from "./components/Navbar.jsx"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx"
import Content from "./components/pages/Content.jsx";
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={Home} />
          <Route path='/content' element={Content} />
          <Route path='/about' element={About} />
          <Route path='/sign-up' element={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default App;