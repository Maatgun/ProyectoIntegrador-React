import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & img {
    width: 100px;
  }
`;

export const LinkContainerInicioSesion = styled.a`
  display: flex;
  font-size: 2rem;

`;

export const LinksContainerStyled = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

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
  font-size: 1.2rem;
  display: flex;
  align-item: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #333333;
  font-size: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #28a745;
  }
`;

export const ProductsContainerStyled = styled(LinkContainerStyled)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    gap:10px;
  }
`;

export const BtnNavbar = styled.div`
  display: flex;
  gap:10px;
 
`;

export const ButtonCartLogo = styled.button`
  display: flex;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ButtonMenu = styled(ButtonCartLogo)`

  @media (min-width: 941px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 940px) {
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    font-size:20px;
    top: 60px;
    left: 5%;
    rigth:5%;
    margin: 35px;
    padding: 0px;
    width: 80%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 10px 10px;
    z-index: 2;
    transition: transform 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
    &.open {
      transform: scaleY(1);
      opacity: 2;
      pointer-events: auto;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  font-size: 2.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333333;
  margin-left: auto;
  

  @media (max-width: 941px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }
`;
export const Carrito = styled.div`
  display: none;

  &.openCart {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    background-color: #fff;
    width: 280px;
    height: 600px;
    top: 90px;
    right: 0;
    padding: 1rem;
    gap: 1rem;
    border: 2px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export const ContenedorCarrito = styled.div`
  gap: 0.3rem;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  max-height: 20rem;
  height: 20rem;
`;
