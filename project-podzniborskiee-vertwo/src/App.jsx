import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Legal from './pages/Legal';
import Cookie from './pages/Cookie';
import Privacy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/cookie' element={<Cookie />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
