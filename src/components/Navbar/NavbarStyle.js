import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

`;

export const NavLinkStyled = styled(NavLink)`
  color: #333333;
  font-size: 16px;
  text-decoration: none;
  font-weight: 800;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #28a745;
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

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
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
`;

export const MenuContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
		display: flex;
        font-size: 2rem;
        color: ${(props) => (props.icon ? "#f7cac9" : "#ffdcdb")};  
        cursor: pointer;

        &:hover {
            transform: scale(0.9);
            transition: all 0.7s; 
        }
    }

    @media (max-width: 440px) {
        margin-right: 10px;
    }
`;

export const NavLinksWrapper = styled.ul`
    display: flex;
    gap: 25px;
    padding: 0;
    
    @media (max-width: 768px) {

        display: none;
        transition: transform 2s ease-out;

        &.open {
            position: absolute;
            z-index: 1;
            top: 80px;
            right: 25%;
            left: 25%;
            width: 50%;
            flex-direction: column;
            background-color: #7ca1d5;
            align-items: center;
            padding: 20px;
            gap: 40px;
            margin-top: 1rem;
            display: flex;
            transform: translateY(15px);

            @media (max-width: 576px) {
                width: 50%;
                right: 25%;
                left: 25%;
            }

            @media (max-width: 440px) {
                width: 100%;
                right: 0;
                left: 0;
                align-items: center;
                justify-content: center;
                text-align: center;
                margin: 1rem 0;
                padding: 20px 0;
            }
        }

        &.close {
            transform: translateY(0);
        }
    }
`;

export const HiMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px; // Ajusta el tamaño del icono según tus necesidades
  color: #333; // Cambia el color a tu preferencia
  margin-right: 15px; // Agrega espaciado a tu gusto
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #555; // Cambia el color al hacer hover si lo deseas
  }
`;