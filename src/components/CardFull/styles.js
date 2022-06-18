import styled from 'styled-components';

export const CardContainer = styled.div`
width: 100%;
max-width: 840px;
background: #ffffff;
border-radius: 4px;
box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
display: flex;
position: relative;
`;

export const CloseModalButton = styled.button`
font-size: ${({ theme }) => theme.fontSize.big};
font-weight: bold;
color: ${({ theme }) => theme.colors.normal.black};
border: none;
background-color: transparent;
position: absolute;
right: -0px;
top: -40px;
.vertical{
  position: inherit;
  transform: rotate(-90deg);
  right: -0px;
}
`;

export const Image = styled.div`
width: 40%;
height: 100%;
background-color: ${({ bgColor, theme }) => theme.colors.pokemonsColors[bgColor]};
position: relative;
display: flex;
align-items: center;
justify-content: center;
img{
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.pokemonFormTypeCardFull{
  padding: 4px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.normal.white};
  right: 24px;
  bottom: 20px;
}
`;

export const Info = styled.div`
width: 60%;
height: 100%;
background: ${({ theme }) => theme.colors.normal.white};
padding: 20px;

h1{
  font-size: ${({ theme }) => theme.fontSize.maxSize};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.gray[400]}
}

.description{
  color: ${({ theme }) => theme.colors.black[600]};
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 24px;
}
`;

export const Dimensions = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 14px;
`;

export const DimensionsItemComponent = styled.div`
display: flex;
flex-direction: column;

.title{
  font-size: ${({ theme }) => theme.fontSize.tiny};
  color: ${({ theme }) => theme.colors.gray.medium};
  text-align: center;
  margin-top: 4px;
}
`;

export const Infos = styled.div`
display: flex;
align-items: center;
.info{
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-left: 8px;
}
`;

export const AtaquesContainer = styled.div`
margin-top: 16px;
`;

export const AtaqueValuesContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
span{
  margin-right: 16px;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fontSize.small};
}
`;

export const TypesContainer = styled.div`
position: absolute;
bottom: 14px;
right: 14px;
display: flex;
`;
