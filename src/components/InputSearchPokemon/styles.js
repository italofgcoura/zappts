import styled from 'styled-components';

export const InputContainer = styled.form`
max-width: 100%;
margin-bottom: 36px;
position: relative;
svg{
position: absolute;
right: 45px;
top: 15px;
}
`;

export const Input = styled.input`
padding: 8px 24px 8px 30px;
border: none;
height: 100%;
width: 100%;
height: 53px;
box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.gray[100]};
border-radius:  ${({ theme }) => theme.spacing.inputBorderRadius};
overflow: hidden;
font-size:  ${({ theme }) => theme.fontSize.medium};
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: ${({ theme }) => theme.colors.gray.medium};
  opacity: 1; /* Firefox */
}


`;
