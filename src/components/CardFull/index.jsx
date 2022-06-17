import React, { useContext } from 'react';

import { PokemonContext } from '../../contexts';

function CardFull() {
  const { selectedPokemon } = useContext(PokemonContext);

  console.log('selectedPokemonselectedPokemon', selectedPokemon);

  return (<p>card full</p>);
}

export default CardFull;
