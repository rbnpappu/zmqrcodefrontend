// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'; // Ensure the correct path to HomePage
import QrCode from './components/QRCODESERVICES/QrCode'; // Ensure the correct path to Services
import ComingSoon from './components/CommingSoon'; // Corrected component name
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<QrCode />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
