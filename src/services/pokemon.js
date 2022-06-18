import { api } from '../httpClient';

const getPokemonsByIndex = async (offset) => api.get(`/pokemon/?limit=18&offset=${offset}`);

const getAllPokemons = async () => api.get('/pokemon/?limit=1126');

const getPokemonByName = async (name) => api.get(`/pokemon/${name}`);

export { getPokemonsByIndex, getAllPokemons, getPokemonByName };
