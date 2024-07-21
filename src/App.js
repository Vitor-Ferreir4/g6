import React from 'react';
import Login from './JS/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './JS/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path='/cadastro' element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;