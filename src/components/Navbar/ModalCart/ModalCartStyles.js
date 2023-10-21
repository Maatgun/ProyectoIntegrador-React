import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 450px;
  height: calc(100vh - 4rem);

  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);


  @media (max-width: 529px) {
    width:250px;
    } 
  `;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: black;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;

  & h1 {
    margin-top: 0;
  }
`;

export const MainContainerStyled = styled.div`
  height: 55%;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;

  padding-left: 0;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;

  background: white;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 529px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;

  @media (max-width: 529px) {
    font-size: 0.8rem;
    text-align: center;
    }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: black;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: black;
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;

  @media (max-width: 529px) {
    font-size: 0.8rem;
    margin-top: 10px;
    scroll: none;
    }
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;