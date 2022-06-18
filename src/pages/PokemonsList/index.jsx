import React, { useContext, useEffect, useState } from 'react';

import { PokemonContext } from '../../contexts';

import { api } from '../../httpClient';

import CardPage from '../../components/CardPage';

import { Container, PageContainer, ErrorMessage } from './styles';

import InputSearchPokemon from '../../components/InputSearchPokemon';

import { ReactComponent as SadFace } from '../../assets/images/sentiment_dissatisfied_black_24dp.svg';

import PaginationButton from './PaginationButtons';

import Loader from '../../components/Loader';

import Modal from '../../components/Modal';

function PokemonsList() {
  const {
    filteredPokemons,
    pokemonColors,
    showPokemonInfo,
    isLoadingPokemons,
    loadPokemons,
  } = useContext(PokemonContext);

  const [pokemonsPage, setPokemonsPage] = useState([]);

  const findItem = (array, compareTherm) => array.findIndex((i) => i.name === compareTherm);

  const loadPokemonsPage = (arrayPokemons) => {
    const tempPokemons = arrayPokemons;

    tempPokemons.forEach((pok) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of pokemonColors) {
        const temp = findItem(item?.pokemon_species, pok?.name);
        if (temp !== -1) {
          pok.color = item?.name;
          return;
        }
      }
    });

    setPokemonsPage(tempPokemons);
  };

  const loadPokemonsInfo = async (arrayPokemonsToLoadInfo) => {
    const tempPromises = [];
    const tempPokemons = arrayPokemonsToLoadInfo;
    const finalPromises = [];

    tempPokemons.forEach((item) => {
      tempPromises.push(api.get(item.url.split('v2')[1]));
    });
    const resultPromises = await Promise.all(tempPromises);

    resultPromises.forEach((item) => { finalPromises.push(item.data); });

    loadPokemonsPage(finalPromises);
  };

  useEffect(() => {
    if (filteredPokemons.length === 1) {
      loadPokemonsPage(filteredPokemons);
    } else if (filteredPokemons?.length > 0 && pokemonColors?.length > 0) {
      loadPokemonsInfo(filteredPokemons);
    }
  }, [filteredPokemons, pokemonColors]);

  if (isLoadingPokemons) {
    return <Loader loading={isLoadingPokemons} />;
  }

  if (filteredPokemons?.length === 0) {
    return (
      <Modal isError>

        <ErrorMessage>
          <SadFace />

          <p>Nenhum pokemon encontrado</p>

          <button type="button" onClick={loadPokemons}>reload page</button>
        </ErrorMessage>
      </Modal>
    );
  }

  return (
    <>
      {showPokemonInfo && <Modal />}
      <PageContainer>
        <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
        <InputSearchPokemon />

        <Container>
          {pokemonsPage.map((pokemon) => (
            <CardPage
              name={pokemon.name}
              color={pokemon.color}
              pokedex={pokemon.id}
              pokemonForms={pokemon.types}
              pokemon={pokemon}
              key={pokemon.id}
              // image={pokemon.sprites.other.dream_world.front_default}
              image={pokemon.sprites.other.home.front_default}
            />
          ))}
        </Container>
        <PaginationButton />
      </PageContainer>
    </>
  );
}

export default PokemonsList;
