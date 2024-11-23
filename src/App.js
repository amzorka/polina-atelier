import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Ecology from './pages/Ecology';
import Education from './pages/Education';
import Gallery from './pages/Gallery';
import Production from './pages/Production';
import Lens from './pages/Lens';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/ru/home" element={<Home />} /> 
        <Route  path="/ru/about" element={<About />} />
        <Route  path="/ru/ecology" element={<Ecology />} />
        <Route  path="/ru/education" element={<Education />} />
        <Route  path="/ru/gallery" element={<Gallery />} />
        <Route  path="/ru/production" element={<Production />} />
        <Route  path="/ru/lens" element={<Lens />} />

        <Route  path="/home" element={<Home />} /> 
        <Route  path="/about" element={<About />} />
        <Route  path="/ecology" element={<Ecology />} />
        <Route  path="/education" element={<Education />} />
        <Route  path="/gallery" element={<Gallery />} />
        <Route  path="/production" element={<Production />} />
        <Route  path="/lens" element={<Lens />} />

        <Route path="/" element={<Navigate to="/ru/home" />} />
      </Routes>
    </Router>
  );
}

export default App;