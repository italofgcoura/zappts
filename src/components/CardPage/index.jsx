import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import { PokemonContext } from '../../contexts/Pokemon';

import { CardContainer, PokemonImage, InnerCardContainer } from './styles';

const pokemonsColors = {
  black: '#393332',
  blue: '#4676A4',
  brown: 'rgba(206,128,131)',
  gray: '#bcbcbc',
  green: '#46A487',
  pink: '#F2CDD6',
  purple: 'rgba(164,153,193)',
  red: '#FB6C6C',
  white: '#ffffff',
  yellow: '#FFCE4B',
};

// eslint-disable-next-line react/prop-types
function CardPage({ color, name, pokedex, pokemonForms, image, pokemon }) {
  const { setSelectedPokemon,
    setShowPokemonInfo } = useContext(PokemonContext);

  const cardStyle = {
    backgroundColor: pokemonsColors[color],
    color: color !== 'white' ? pokemonsColors.white
      : pokemonsColors.gray,
  };

  const handleShowPokemonInfo = () => {
    setShowPokemonInfo(true);
    setSelectedPokemon(pokemon);
  };

  return (
    <CardContainer style={cardStyle} onClick={() => handleShowPokemonInfo()}>
      <InnerCardContainer>
        <small>{name}</small>
        <span className="pokedex">{pokedex}</span>
        {pokemonForms.map((form) => (
          <div
            className="pokemonFormType"
          >
            <p>{form.type.name}</p>
          </div>
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
