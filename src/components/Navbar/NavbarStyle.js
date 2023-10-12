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
    
    @media (max-width: 500px) {
      display:flex;
      flex-direction:column;
      align-items:center;
      width: 250px; 
  }
  }

 
`;

export const ContenedorCarrito = styled.div`
gap: 30px;
margin: 35px;
width: 350px;

background: var(--gray-bg);
box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
padding: 1rem;
border-radius: 15px;

@media (max-width: 500px) {
  width: 200px;
  display:flex;
  flex-direction: center;
  margin: 0px 15px;
}
`;
