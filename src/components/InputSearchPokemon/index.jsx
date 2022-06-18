import React, {
  useContext,
  useState,
  useEffect,
} from 'react';

import { PokemonContext } from '../../contexts';

import { Input, InputContainer } from './styles';

import { ReactComponent as MagnifyingGlass } from '../../assets/images/magnifyingglass.svg';

// import { getPokemonByName } from '../../services/pokemon';

function InputSearchPokemon() {
  const { loadPokemons, loadPokemonByName } = useContext(PokemonContext);

  const [pokemonToSearch, setPokemonToSearch] = useState('');

  useEffect(() => {
    if (!pokemonToSearch) loadPokemons(0);
  }, [pokemonToSearch]);

  const handleSearchPokemon = async (event) => {
    event.preventDefault();

    await loadPokemonByName(pokemonToSearch.toLowerCase());
  };

  return (
    <InputContainer onSubmit={handleSearchPokemon}>
      <Input
        placeholder="Pesquisar pokemon"
        onChange={(e) => setPokemonToSearch(e.target.value)}
      />
      <MagnifyingGlass onClick={handleSearchPokemon} />
    </InputContainer>
  );
}

export default InputSearchPokemon;
