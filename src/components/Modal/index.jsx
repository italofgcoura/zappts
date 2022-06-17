import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { PokemonContext } from '../../contexts';
import { Overlay, Container } from './styles';
import CardFull from '../CardFull';

export default function Modal() {
  const { setSelectedPokemon,
    setShowPokemonInfo } = useContext(PokemonContext);

  const handleCloseModal = () => {
    setShowPokemonInfo(false);
    setSelectedPokemon({});
  };

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <CardFull />
        <button type="button" onClick={() => handleCloseModal()}>close</button>
      </Container>
    </Overlay>,
    document.getElementById('pokemonBanner'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
