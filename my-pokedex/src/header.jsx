import React from 'react';
import Logo from './pokemon.png';
// import './header.css';
// import {Link, Routes,Route} from 'react-router-dom';
// import ListePokemon from './ListePokemon';
// import Monpokedex from './Monpokedex';

export default function Header() {
  return (
    <div className ="header">
      <header>
      <div className ="Logo">
            <img src={Logo} alt="" />
      </div>
      </header>
    </div>
  );
}
