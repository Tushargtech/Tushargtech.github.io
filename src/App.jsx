import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import CorporateTraining from './pages/CorporateTraining';
import OnlineRegistration from './pages/OnlineRegistration';
import Certificate from './pages/Certificate';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporate-training" element={<CorporateTraining />} />
        <Route path="/online-registration" element={<OnlineRegistration />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;