import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage'; // adjust path if needed
import './index.css'; // ✅ Make sure this is included
function App() {
  return (
    <Router>
      <Routes>
        {/* Show Login on the root path */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<h1>Home Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
