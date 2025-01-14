import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from './pages/HomePage';
import Info from './pages/Table';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Uncomment this if you add a Table page */}
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default App;
