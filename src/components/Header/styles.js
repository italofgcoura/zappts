import styled from 'styled-components';

export const MenuContainer = styled.header`
max-width: 980px;
width:100%;
margin: 8px auto;
display: flex;
justify-content: space-between;
align-items: center;
height: 10vh;
`;

export const Menu = styled.ul`
display: flex;
width: 70%;
justify-content: center;

  li{
  padding: 0 24px;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.big};
  }
  a{
    text-decoration: none;
    color:  ${({ theme }) => theme.colors.gray[400]};
    font-weight: normal;
  }
  .active{
   position: relative;
   color:  ${({ theme }) => theme.colors.gray[900]};
   font-weight:bold;

   &:after{
    content:"";
    position:relative;
    background-color: ${({ theme }) => theme.colors.gray[900]};
    left: 0;
    bottom: 0;
    height: 2px;
    width: 90%;
    display: block;
   }
  }

`;
