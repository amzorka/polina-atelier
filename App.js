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
        <Route exact path="/ru/home" element={<Home />} /> 
        <Route exact path="/ru/about" element={<About />} />
        <Route exact path="/ru/ecology" element={<Ecology />} />
        <Route exact path="/ru/education" element={<Education />} />
        <Route exact path="/ru/gallery" element={<Gallery />} />
        <Route exact path="/ru/production" element={<Production />} />
        <Route exact path="/ru/lens" element={<Lens />} />

        <Route exact path="/home" element={<Home />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ecology" element={<Ecology />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/production" element={<Production />} />
        <Route exact path="/lens" element={<Lens />} />

        <Route path="/" element={<Navigate to="/ru/home" />} />
      </Routes>
    </Router>
  );
}

export default App;