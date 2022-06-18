import styled from 'styled-components';

export const HomeContainer = styled.div`
margin: 0 auto;
max-width: 980px;
height: 85vh;

`;

export const HomeStyled = styled.div`
width: 100%;
position: relative;

img{
  position:absolute;
  right:0px;
  top:0;
  width: 50%;
}
`;

export const HomeInfos = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-top:100px;
h1{
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: bold;
  font-size: 54px;

}
p{
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: bold;
font-size: ${({ theme }) => theme.fontSize.medium};
margin: 24px 0;
line-height: 36px;
}
a{
  text-decoration: none;
  height: 66px;
  width: 230px;
  background-color: ${({ theme }) => theme.colors.pokemonValues.vlAtaque};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content:center;
  color:  ${({ theme }) => theme.colors.normal.white};
  font-weight: bold;
  font-size: 20px;
}
`;
