import React, { useEffect, useState } from 'react';
//import Logo from '../composant/pokemon.png';
import './header.jsx';
// Créez une classe CSS pour la grille parent
const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Vous pouvez ajuster la largeur des cartes ici
  gap: '10px', // Espace entre les cartes
  padding: '20px',
};

// Créez une classe CSS pour chaque carte de Pokémon
const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
  textAlign: 'center',
};

  const handleAddToCart = () => {
   
    
  };

function MyComponent() {
  const [pokemonData, setPokemonData] = useState([]);
  const startIndex = 1;

  useEffect(() => {
    const fetchPokemonData = async () => {
      const newPokemonData = [];

      for (let i = startIndex; i <= startIndex + 100; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);

        if (response.ok) {
          const data = await response.json();
          const name = data.name;
          const imageUrl = data.sprites.front_default;
          const types = data.types.map(typeObj => typeObj.type.name);

          newPokemonData.push({ name, imageUrl, types });
        }
      }

      setPokemonData(newPokemonData);
    };

    fetchPokemonData();
  }, [startIndex]);

  return (
    <div>
      <header/>
      <div style={gridContainerStyle}>
        {pokemonData.map((pokemon, index) => (
          <div key={index} style={cardStyle}>
            <h2>Nom : {pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <p>Types : {pokemon.types.join(', ')}</p>
            <button onClick={handleAddToCart}>Ajouter</button>
    
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
