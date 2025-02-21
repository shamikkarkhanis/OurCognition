import { useState } from 'react'
import './App.css'
import BrainHeatmap from "./components/BrainHeatmap.jsx";
import Content from "./components/Content.jsx";
import Timeline from "./components/Timeline.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <div>
      <h1> Our Cognition </h1>
      <Content />
    </div>
  );
}

export default App
