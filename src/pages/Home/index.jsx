import React from 'react';

import { Link } from 'react-router-dom';
import { HomeContainer, HomeInfos, HomeStyled } from './styles';

import bannerComplete from '../../assets/images/BannerComplete.png';

function Home() {
  return (
    <HomeStyled>
      <HomeContainer>
        <HomeInfos>
          <h1>Qual pokemon você escolheria?</h1>
          <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
          <Link to="/pokemons">Veja os pokemons</Link>
        </HomeInfos>
        <img src={bannerComplete} alt="banner" />
      </HomeContainer>
    </HomeStyled>
  );
}

export default Home;
