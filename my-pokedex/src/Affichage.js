import React, { useEffect, useState } from 'react';

import Header from './header.jsx';

// Créez une classe CSS pour le conteneur de la grille
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

// Fonction pour gérer l'ajout d'un Pokémon au panier (actuellement vide)
const handleAddToCart = () => {
  // Vous pouvez ajouter ici la logique pour ajouter un Pokémon au panier
};

function MyComponent() {
  // Utilisation de l'état local pour stocker les données des Pokémon
  const [pokemonData, setPokemonData] = useState([]);
  const startIndex = 1;

  // Utilisation de useEffect pour effectuer des appels à l'API PokeAPI
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

          // Ajout des données du Pokémon au tableau newPokemonData
          newPokemonData.push({ name, imageUrl, types });
        }
      }

      // Mise à jour de l'état local pokemonData avec les nouvelles données
      setPokemonData(newPokemonData);
    };

    // Appel de la fonction fetchPokemonData lorsque le composant est monté ou lorsque startIndex change
    fetchPokemonData();
  }, [startIndex]);

  // Rendu JSX du composant
  return (
    <div>
      {/* Inclusion du composant Header */}
      <Header />

      {/* Affichage des cartes Pokémon dans un conteneur de grille */}
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
