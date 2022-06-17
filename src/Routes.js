import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PokemonsList from './pages/PokemonsList';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<PokemonsList />} />
    </Routes>
  );
}
