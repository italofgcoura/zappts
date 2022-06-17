import React, { useState, createContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { api } from '../../httpClient';

const PokemonContext = createContext();

function Pokemon({ children }) {
  const [pokemonColors, setPokemonColors] = useState([]);

  const [pokemons, setPokemons] = useState([]);

  const [selectedPokemon, setSelectedPokemon] = useState({});

  const [showPokemonInfo, setShowPokemonInfo] = useState(false);

  const loadPokemons = async (offset) => {
    const temp = await api.get(`/pokemon/?limit=18&offset=${offset}`);

    setPokemons(temp.data.results);
  };

  const loadPokemonsByColors = async (colors) => {
    const temp = [];
    colors.forEach((color) => temp.push(api.get(`/pokemon-color/${color.url.split('/')[6]}`)));
    const resultPromises = await Promise.all(temp);
    const pokemonByColors = [];

    resultPromises.forEach((result) => {
      pokemonByColors.push(result.data);
    });
    setPokemonColors(pokemonByColors);
    loadPokemons(0);
  };

  const loadArayColors = async () => {
    let temp = [];
    temp = await api.get('/pokemon-color/');
    loadPokemonsByColors(temp.data.results);
  };

  useEffect(() => {
    loadArayColors();
  }, []);

  console.log('selected pokemon', selectedPokemon);

  const contextValues = useMemo(() => ({
    pokemonColors: pokemonColors,
    pokemons: pokemons,
    selectedPokemon: selectedPokemon,
    showPokemonInfo: showPokemonInfo,
    setShowPokemonInfo: setShowPokemonInfo,
    setSelectedPokemon: setSelectedPokemon,
  }), [pokemonColors, pokemons, showPokemonInfo]);

  return (
    <PokemonContext.Provider value={contextValues}>
      {children}
    </PokemonContext.Provider>
  );
}

export { Pokemon, PokemonContext };

Pokemon.propTypes = { children: PropTypes.node.isRequired };
