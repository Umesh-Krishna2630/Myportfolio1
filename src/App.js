import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import Certificates from './components/Achievements/Certificates';
import CertificateDetails from './components/Achievements/CertificateDetails';
import Contact from './components/Contact/Contact'; // Import Contact
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certificates/:type" element={<Certificates />} />
          <Route path="/certificates/:type/:id" element={<CertificateDetails />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
