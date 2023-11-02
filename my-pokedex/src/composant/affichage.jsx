import React, { useEffect, useState } from 'react';

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

    </div>
  );
}

export default MyComponent;
