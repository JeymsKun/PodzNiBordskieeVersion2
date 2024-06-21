import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Legal from './pages/Legal';
import Cookie from './pages/Cookie';
import Privacy from './pages/Privacy';
import FoodDetails from './pages/FoodHTML';

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/home/recipes" element={<Recipes />} />
        <Route path="/home/aboutus" element={<AboutUs />} />
        <Route path="/home/contactus" element={<ContactUs />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/cookie' element={<Cookie />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path="/food-details/:id" element={<FoodDetails />} /> 
      </Routes>
    </HashRouter>  
  );
}

export default App;
