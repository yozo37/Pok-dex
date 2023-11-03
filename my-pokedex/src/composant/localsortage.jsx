import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [pokemonData, setPokemonData] = useState([]);
  const startIndex = 1;
  const dataKey = 'pokemonData'; // Clé pour le localStorage

  useEffect(() => {
    // Fonction pour récupérer ou stocker les données dans le localStorage
    const getOrSetPokemonData = () => {
      const localData = localStorage.getItem(dataKey);
      if (localData) {
        setPokemonData(JSON.parse(localData));
      } else {
        const newPokemonData = [];
        for (let i = startIndex; i <= startIndex + 100; i++) {

        }
        setPokemonData(newPokemonData);
        // Stocke les données dans le localStorage
        localStorage.setItem(dataKey, JSON.stringify(newPokemonData));
      }
    };

    getOrSetPokemonData();
  }, []);

  return (
    <div>
      <h1>Liste des Pokémons :</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>
            <h2>Nom : {pokemon.name}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <p>Types : {pokemon.types.join(', ')}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
