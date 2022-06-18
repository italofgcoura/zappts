import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import { ThemeContext } from 'styled-components';
import { PokemonContext } from '../../contexts/Pokemon';

import { CardContainer, PokemonImage, InnerCardContainer } from './styles';

import Type from '../Type';

// eslint-disable-next-line react/prop-types
function CardPage({ color, name, pokedex, pokemonForms, image, pokemon }) {
  const { colors } = useContext(ThemeContext);

  const { setSelectedPokemon,
    setShowPokemonInfo } = useContext(PokemonContext);

  const cardStyle = {
    backgroundColor: colors.pokemonsColors[color],
    color: color !== 'white' ? colors.pokemonsColors.white
      : colors.pokemonsColors.gray,
  };

  const handleSelectPokemon = () => {
    setShowPokemonInfo(true);
    setSelectedPokemon(pokemon);
  };

  return (
    <CardContainer style={cardStyle} onClick={() => handleSelectPokemon()} color={color}>
      <InnerCardContainer>
        <small>{name}</small>
        <span className="pokedex">{pokedex}</span>
        {pokemonForms.map((form) => (

          <Type name={form.type.name} />

        ))}
        <PokemonImage>
          <img src={image} alt="" />
        </PokemonImage>
      </InnerCardContainer>
    </CardContainer>
  );
}

export default CardPage;

CardPage.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pokedex: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pokemonForms: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
};
