import React, { useState, createContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { api } from '../../httpClient';

import { getPokemonsByIndex, getAllPokemons, getPokemonByName } from '../../services/pokemon';

const PokemonContext = createContext();

function Pokemon({ children }) {
  const [pokemonColors, setPokemonColors] = useState([]);

  const [allPokemons, setAllPokemons] = useState([]);

  const [pokemons, setPokemons] = useState([]);

  const [selectedPokemon, setSelectedPokemon] = useState({});

  const [showPokemonInfo, setShowPokemonInfo] = useState(false);

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const [atualPage, setAtualPage] = useState(0);

  const loadPokemons = async (offset) => {
    const temp = await getPokemonsByIndex(offset);
    setPokemons(temp.data.results);
    setFilteredPokemons(temp.data.results);
  };

  useEffect(() => {
    loadPokemons(atualPage);
  }, [atualPage]);

  const loadAllPokemons = async () => {
    const temp = await getAllPokemons();
    setAllPokemons(temp.data.results);
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
    loadAllPokemons();
  };

  const loadArrayColors = async () => {
    let temp = [];
    temp = await api.get('/pokemon-color/');
    loadPokemonsByColors(temp.data.results);
  };

  const loadPokemonByName = useCallback(async (name) => {
    try {
      const temp = await getPokemonByName(name);
      setFilteredPokemons([temp.data]);
    } catch (error) {
      setFilteredPokemons([]);
    }
  }, []);

  useEffect(() => {
    loadArrayColors();
  }, []);

  // const contextValues = useMemo(() => ({
  //   pokemonColors: pokemonColors,
  //   pokemons: pokemons,
  //   selectedPokemon: selectedPokemon,
  //   showPokemonInfo: showPokemonInfo,
  //   setShowPokemonInfo: setShowPokemonInfo,
  //   setSelectedPokemon: setSelectedPokemon,
  //   loadPokemonByName: loadPokemonByName,
  //   allPokemons: allPokemons,
  //   filteredPokemons: filteredPokemons,
  //   setFilteredPokemons: setFilteredPokemons,
  //   loadPokemons: loadPokemons,
  //   setAtualPage: setAtualPage,
  //   atualPage: atualPage,
  //   isLoadingPokemons: isLoadingPokemons,
  // }), [pokemonColors, pokemons, showPokemonInfo, filteredPokemons, isLoadingPokemons]);

  return (
    <PokemonContext.Provider value={{
      pokemonColors,
      pokemons,
      selectedPokemon,
      showPokemonInfo,
      setShowPokemonInfo,
      setSelectedPokemon,
      loadPokemonByName,
      allPokemons,
      filteredPokemons,
      setFilteredPokemons,
      loadPokemons,
      setAtualPage,
      atualPage,
    }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export { Pokemon, PokemonContext };

Pokemon.propTypes = { children: PropTypes.node.isRequired };
