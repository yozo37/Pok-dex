// import logo from './logo.svg';
import './App.css';
// import Header from './composant/header.jsx';
// import Footer from "./composant/Footer.jsx";
import Monpokedex from './composant/Monpokedex.jsx';
// import Affichage from'./composant/affichage.jsx';
// import Monpokedex from './composant/Monpokedex.jsx';
// import {Link, Routes, Route} from 'react-router-dom';
// import ListePokemon from './composant/ListePokemon.jsx';


function App() {
  return (
    <div className="App">
      {/* <Link to="/ListePokemon"><h2>Liste de Pokemons</h2></Link>
      <Link to="/Monpokedex"><h2>Pokedex</h2></Link>
      <Routes>
        <Route path="/ListePokemon" element={<ListePokemon />}/>
        <Route path="/Monpokedex" element={<Monpokedex />}/>
      </Routes> */}
      <Monpokedex/>

    </div>
  );
}
<div>
  <div classame="button">
  <input type="button" class="button1"/>
  <input type="button" class="button2"/>
  </div>
</div>

export default App;
