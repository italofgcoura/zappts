import React, { useContext, useEffect, useState } from 'react';

import { PokemonContext } from '../../contexts';

import { api } from '../../httpClient';

import CardPage from '../../components/CardPage';

import { Container } from './styles';

import Modal from '../../components/Modal';

function PokemonsList() {
  const { pokemons, pokemonColors, showPokemonInfo } = useContext(PokemonContext);

  const [pokemonsPage, setPokemonsPage] = useState([]);

  const findItem = (array, compareTherm) => array.findIndex((i) => i.name === compareTherm);

  const loadPodemonsPage = (arrayPokemons) => {
    const tempPokemons = arrayPokemons;

    tempPokemons.forEach((pok) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of pokemonColors) {
        const temp = findItem(item.pokemon_species, pok.name);
        if (temp !== -1) {
          pok.color = item.name;
          return;
        }
      }
    });

    setPokemonsPage(tempPokemons);
  };

  const loadPokemonsInfo = async () => {
    const tempPromises = [];
    const tempPokemons = pokemons;
    const finalPromises = [];

    tempPokemons.forEach((item) => {
      tempPromises.push(api.get(item.url.split('v2')[1]));
    });
    const resultPromises = await Promise.all(tempPromises);

    resultPromises.forEach((item) => { finalPromises.push(item.data); });

    loadPodemonsPage(finalPromises);
  };

  useEffect(() => {
    if (pokemons.length > 0 && pokemonColors.length > 0) { loadPokemonsInfo(); }
  }, [pokemons, pokemonColors]);

  console.log('pokemonsPage', pokemonsPage);

  if (pokemons.length === 0 || pokemonColors.length === 0
    || pokemonsPage.length === 0) { return <p>Loading...</p>; }

  console.log('showPokemonInfoshowPokemonInfoshowPokemonInfo', showPokemonInfo);

  return (
    <>
      {showPokemonInfo && <Modal />}

      <Container>
        {pokemonsPage.map((pokemon) => (
          <CardPage
            name={pokemon.name}
            color={pokemon.color}
            pokedex={pokemon.id}
            pokemonForms={pokemon.types}
            pokemon={pokemon}
            // image={pokemon.sprites.other.dream_world.front_default}
            image={pokemon.sprites.other.home.front_default}
          />
        ))}
      </Container>
    </>
  );
}

export default PokemonsList;
