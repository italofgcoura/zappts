import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 12px;
  /* height: 80vh; */
  max-width: 980px;
  width:100%;
  margin: 8px auto;

  @media(max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    margin: 0 32px;
  }
`;
