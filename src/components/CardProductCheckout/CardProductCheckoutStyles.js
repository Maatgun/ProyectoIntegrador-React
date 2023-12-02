 import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  width:85%;

  background: white;
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid #e6e6e6;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 240px;

  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;

@media (max-width: 768px) {
  font-size: 12px;
  text-align: center;

}
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 2rem;
  background: var(--btn-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;
`;