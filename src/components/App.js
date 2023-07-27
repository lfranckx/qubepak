import '../styles/App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

import Home from '../routes/Home';
import Footer from './Footer';

function App() {
  return (
    <div id="app">
      <Header />            
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;