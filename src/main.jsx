import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Page1 from './pages/Page1';
import LandingPage from './pages/LandingPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/page1" element={<Page1 />} />
    </Routes>
  </Router>
);
