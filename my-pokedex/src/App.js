import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Affichage from './Affichage';
import Monpokedex from './Monpokedex';
import Header from './header.jsx';


function App() {
  return (
   <div>   
  
    <Link to="/">Accueil</Link>
    <Link to="/Monpokedex">Pokedex</Link>
    <Routes>
        <Route  path="/" element={<Affichage/>} />
        <Route path="/Monpokedex" element={<Monpokedex/>} />
    </Routes>
    </div>
   
  );
}

export default App;
