import styled from 'styled-components';

export const StyledType = styled.div`

  font-size: ${({ theme }) => theme.fontSize.tiny};
  padding: 4px;
  border-radius: ${({ theme }) => theme.spacing.borderRadius};
  opacity: 0.8;
  margin-top: 4px;
  margin-right: 8px;
  width: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  p{
  color: ${({ theme }) => theme.colors.normal.white};
  font-weight: bold;
  z-index:99;
  text-transform: capitalize;
  }
&:before{
    position: absolute;
    content:'';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.normal.white};
    opacity: 0.5;
    z-index: -1;
  }
`;
