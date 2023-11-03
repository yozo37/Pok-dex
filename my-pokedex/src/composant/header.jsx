import React from 'react';
import Logo from '../composant/pokemon.png';
import './header.css';
// import {Link, Routes,Route} from 'react-router-dom';
// import ListePokemon from './ListePokemon';
// import Monpokedex from './Monpokedex';

export default function Header() {
  return (
    <div className ="header">
      <header>
            <div className ="Liste" >
            
        </div>
      <div className ="Logo">
            <img src={Logo} alt="" />
            {/* <Link to="/listePokemon">liste Pokemon</Link> */}
            {/* <Link to="/Monpokedex">mon pokedex</Link>
            <Routes>
                <Route path ="/listePokemon" element ={<ListePokemon/>}/>
                <Route path ="/Monpokedex" element ={<Monpokedex/>}/>
            </Routes> */}
      </div>
      </header>
    </div>
  );
}
