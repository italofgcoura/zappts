import styled from 'styled-components';

export const CardContainer = styled.div`
max-height: 110px;
height: 110px;
max-width: 160px;
width: 160px;
border-radius: ${({ theme }) => theme.spacing.borderRadius};
position: relative;
overflow: hidden;

.pokedex{
  position: absolute;
  right:14px;
  top: 8px;
}

&:before{
  position: absolute;
  content:'';
  width: 100%;
  height: 100%;
    opacity: 0.4;
  z-index: -1;
}
`;

export const InnerCardContainer = styled.div`
padding: 14px;

small{
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: capitalize;

  font-weight: bold;
}

.pokemonFormType{
  font-size: ${({ theme }) => theme.fontSize.tiny};
  padding: 4px;
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  opacity: 0.8;
  margin-top: 4px;
  width: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &:before{
  position: absolute;
  content:'';
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.normal.white};
  opacity: 0.6;
  z-index: -1;
}
  p{
  color: ${({ theme }) => theme.colors.normal.white};
  font-weight: bold;
  z-index:99;
  text-transform: capitalize;
  }
}

`;

export const PokemonImage = styled.div`
position: absolute;
right: 8px;
bottom: 8px;
width: 80px;
height: 80px;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
`;
