import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { PokemonContext } from '../../../contexts';

import { ReactComponent as ArrowLeft } from '../../../assets/images/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/images/arrow_right.svg';

import { ButtonsContainer, Button } from './styles';

function PaginationButton() {
  const { colors } = useContext(ThemeContext);
  const { atualPage, setAtualPage } = useContext(PokemonContext);

  const disabledLeft = atualPage === 0 ? colors.gray[200] : colors.gray.medium;

  return (
    <ButtonsContainer>
      <Button
        disabled={atualPage === 0}
        type="button"
        onClick={() => setAtualPage((prevState) => prevState - 18)}
      >
        <ArrowLeft style={{ fill: disabledLeft }} />

      </Button>
      <Button
        type="button"
        onClick={() => setAtualPage((prevState) => prevState + 18)}
      >
        <ArrowRight style={{ fill: colors.gray.medium }} />
      </Button>
    </ButtonsContainer>
  );
}

export default PaginationButton;
