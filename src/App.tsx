import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import NotFound from './pages/404/NotFound';
import Home from './pages/Home/Home';
import InforCountry from './pages/InfoCountry/InfoCountry';
import InforMovies from './pages/InfoMovies/InfoMovies';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<InforMovies/>}/>
          <Route path="/country" element={<InforCountry/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
