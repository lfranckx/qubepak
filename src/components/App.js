import '../styles/App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;