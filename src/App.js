import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/stickToggle'; // Import your Redux store
import './App.css';
import HomePage from './components/HomePage'; // Ensure the correct path to HomePage
import QrCode from './components/QRCODESERVICES/QrCode'; // Ensure the correct path to QrCode
import ComingSoon from './components/CommingSoon'; // Ensure the correct path to ComingSoon
import FAQ from './components/FAQ'; // Ensure the correct path to FAQ
import TermsAndService from './components/TermsAndService'; // Ensure the correct path to TermsAndService

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<QrCode />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms&co" element={<TermsAndService />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
