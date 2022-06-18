import React, { useContext, useCallback } from 'react';

import { ThemeContext } from 'styled-components';
import { PokemonContext } from '../../contexts';

import { CardContainer, Image, Info, Dimensions, AtaquesContainer, CloseModalButton, TypesContainer } from './styles';

import { ReactComponent as Close } from '../../assets/images/close.svg';

import DimensionsItem from './DimensionsItem';

import AtaqueValues from './AtaqueValues';

import Type from '../Type';

function CardFull() {
  const { colors } = useContext(ThemeContext);

  const { selectedPokemon, setShowPokemonInfo,
    setSelectedPokemon } = useContext(PokemonContext);

  const handleCloseModal = () => {
    setShowPokemonInfo(false);
    setSelectedPokemon({});
  };

  const transformToMeters = (weight) => (weight * 0.3048).toFixed(1);

  const generateRandomNumber = useCallback(() => {
    const ataque = Math.floor(Math.random() * 100);
    const defesa = Math.floor(Math.random() * 100);
    const vlAtaque = Math.floor(Math.random() * 100);
    const total = ataque + defesa + vlAtaque;

    return { ataque, defesa, vlAtaque, total };
  }, []);

  // const generateColor = () => { };

  return (
    <CardContainer>
      <Image bgColor={selectedPokemon.color}>
        <img src={selectedPokemon.sprites.other.home.front_default} alt={selectedPokemon.name} />
        <TypesContainer>
          {selectedPokemon.types.map((form) => (
            <Type name={form.type.name} />
            // <div
            //   className="pokemonFormTypeCardFull"
            // >
            //   <p></p>
            // </div>
          ))}
        </TypesContainer>
      </Image>
      <Info>
        <h1>{selectedPokemon.name}</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed venenatis sollicitudin magna,
          tincidunt sollicitudin justo vestibulum a.
          Cras lacinia nisi id ornare tempus. Mauris quis auctor augue, sed vehicula neque.
        </p>
        <Dimensions>
          <DimensionsItem info={`${selectedPokemon.weight} kg`} title="Peso" />
          <DimensionsItem info={`${transformToMeters(selectedPokemon.height)} m`} title="Altura" />
          <DimensionsItem info="Power" title="Poder Principal" />
        </Dimensions>

        <AtaquesContainer>
          <AtaqueValues type="Ataque" value={generateRandomNumber().ataque} color={colors.pokemonValues.ataque} maxValue={generateRandomNumber().total} />
          <AtaqueValues type="Defesa" value={generateRandomNumber().defesa} color={colors.pokemonValues.defesa} maxValue={generateRandomNumber().total} />
          <AtaqueValues type="Vl. Ataque" value={generateRandomNumber().vlAtaque} color={colors.pokemonValues.vlAtaque} maxValue={generateRandomNumber().total} />
          <AtaqueValues type="Total" value={generateRandomNumber().total} color={colors.pokemonValues.total} maxValue={generateRandomNumber().total} />
        </AtaquesContainer>
      </Info>
      <CloseModalButton type="button" onClick={handleCloseModal}>
        <Close />
        <Close className="vertical" />
      </CloseModalButton>
    </CardContainer>
  );
}

export default CardFull;
