import styled from 'styled-components';

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(65vh - 100px);

  img {
    width: 230px;
    margin-top: 20px;
    margin-bottom: 20px; }
`;

export const TitleStyled = styled.h1`
  background: var(--btn-gradient);
  -webkit-background-clip: text;
`;


export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 20px;
  }
`;