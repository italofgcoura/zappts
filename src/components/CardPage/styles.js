import styled from 'styled-components';

export const CardContainer = styled.div`
max-height: 110px;
height: 110px;
border-radius: ${({ theme }) => theme.spacing.borderRadius};
position: relative;
overflow: hidden;
transition: 0.2s;
cursor: pointer;
&:hover{
  box-shadow: 0px 0px 6px ${({ color }) => (color !== 'white' ? color : '#000000')};
}

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
