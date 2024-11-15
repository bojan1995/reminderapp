import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CodingPage from './components/CodingPage';
import WordsReminder from './components/WordsReminder';



function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is rendered here */}
      <Routes>
        <Route path="/" element={<WordsReminder />} /> {/* Default route for Words Reminder */}
        <Route path="/coding" element={<CodingPage />} /> {/* Route for Coding Reminder */}
      </Routes>
    </Router>
  );
}

export default App;