import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

  @media (max-width: 960px) {
    padding: 1rem 2rem;
  }
`;


export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: black;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 1.2rem;

  a {
    padding: 1rem;
  }

  a:first-child {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-weight: bold;
   
    &:hover {
      color:#28a745;
    }
  }

  @media (max-width: 960px) {
    display:flex;
    flex-direction: column;
    font-size: 1.2rem;    
  }

`;

export const LinkContainerStyled = styled.div`
  font-size: 1.8rem;
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;

  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    width: 100px;
  }
`;

export const MenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

  @media (max-width: 960px) {
      width: 100%;
      height: 90vh;    
      position: absolute;
      top: 100px;
      left:${({ click }) => (click ? 0 : '-100%')};
      flex-direction: column;
      transition: 0.5s all ease-in;
      background: #fff;
  }
      
`;

export const HiMenuButton = styled.div`
  display: none;

  @media (max-width: 960px) {
    display:flex;
    font-size: 1.5rem;
  }
`;

