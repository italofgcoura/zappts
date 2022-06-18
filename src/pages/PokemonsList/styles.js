import styled from 'styled-components';

export const PageContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 980px;
h1{
  color: ${({ theme }) => theme.colors.black.title};
  margin: 16px 0 36px 0;
  font-size: ${({ theme }) => theme.fontSize.maxSize};
  text-align: center;
}
`;

export const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 18px;
  max-width: 100%;
  /* height: 80vh; */

  width:100%;
  margin: 8px auto;

  @media(max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    margin: 0 32px;
  }
`;

export const ErrorMessage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
  color: ${({ theme }) => theme.colors.normal.white};
  font-size: ${({ theme }) => theme.fontSize.maxSize};
}
button{
  margin-top: 44px;
  width: 240px;
  height: 44px;
  border: none;
  background-color: ${({ theme }) => theme.colors.normal.red};
  color: ${({ theme }) => theme.colors.normal.white};
  text-transform: uppercase;
  font-weight: bold;
}
`;
