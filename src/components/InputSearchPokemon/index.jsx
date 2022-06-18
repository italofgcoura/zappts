import React, {
  useContext,
  useState,
  useEffect,

} from 'react';

import { PokemonContext } from '../../contexts';

import { Input, InputContainer } from './styles';

import { ReactComponent as MagnifyingGlass } from '../../assets/images/magnifyingglass.svg';

import Loader from '../Loader';

function InputSearchPokemon() {
  const { loadPokemons, loadPokemonByName } = useContext(PokemonContext);

  const [pokemonToSearch, setPokemonToSearch] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokemonToSearch) loadPokemons(0);
  }, [pokemonToSearch]);

  const handleSearchPokemon = async (event) => {
    event.preventDefault();
    setLoading(true);
    await loadPokemonByName(pokemonToSearch.toLowerCase());
    setLoading(false);
  };

  return (
    <InputContainer onSubmit={handleSearchPokemon}>
      <Input
        placeholder="Pesquisar pokemon"
        onChange={(e) => setPokemonToSearch(e.target.value)}
        disabled={loading}
      />
      {loading && <Loader loading={loading} />}

      {!loading && <MagnifyingGlass onClick={handleSearchPokemon} />}
    </InputContainer>
  );
}

export default InputSearchPokemon;
