import { React, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { PokemonContext } from '../../contexts';
import { Overlay, Container, Footer } from './styles';

export default function Modal() {
  const { setShowPokemonInfo } = useContext(PokemonContext);

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>Titulo do modal</h1>
        <p>corpo do modal</p>
        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="button" onClick={() => setShowPokemonInfo(false)}>CLOSE</button>
        </Footer>
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
