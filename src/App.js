import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Login from './Login';
import Signup from './Signup';
import Notes from './Notes';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};

export default App;
