import { React } from 'react';

import ReactDOM from 'react-dom';

import { Overlay } from './styles';
import CardFull from '../CardFull';

export default function Modal({ isError, children }) {
  return ReactDOM.createPortal(
    <Overlay>

      {isError && children}

      {!isError && <CardFull />}

    </Overlay>,
    document.getElementById('pokemonBanner'),
  );
}
