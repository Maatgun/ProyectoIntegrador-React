import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: 950px) {
    font-size: 16px;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  width: 80%;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-width: 950px) {
    width: 100%;
  
  }
`;

export const PriceContainerStyled = styled.div`
  
  margin-top: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
  }
    
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: black;
  font-weight: 800;
  font-size: 1.3rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;

  @media (max-width: 500px) {
    margin: 0.5rem 0;
  }
`;