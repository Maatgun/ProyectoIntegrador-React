import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;

`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin:;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    margin: 5px;
  }
`;

export const InputStyled = styled.input`
  background-color: white;
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: black;
  width: 70%;
  margin-top: 1rem;

  ::placeholder {
    opacity: 30%;
  }
  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--gray-bg) inset;
  }

  @media (max-width: 950px) {
    width: 100%;
    align-self: center;
    text-align: center;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;