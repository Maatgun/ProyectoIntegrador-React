import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProductoCarrito = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0.1rem;
padding: 15px;
background-color:#f8f8f8;
border: 1px solid;
border-radius: 5px; 
box-shadow: 5px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const ProdImgCarrito = styled.img`
  width: 40%;
  border: 1px solid;
  margin-bottom: 10px;
  border-radius: 5px;
  
`;

export const DatosProductCarrito = styled.div`
  display:flex;
  align-items:center;
  flex-direction: column;
  font-size: 10px;
  text-align:center;
`;

export const CambiarCantidad = styled.div`
  display: flex;
  gap: 0.3rem;
  margin: 8px;
`;

export const ButtonCart = styled.button`
  background-color: #63C363;
  padding: 0.4rem 0rem;
  border-radius: 5px;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 14px;
  color:#ffff;
  font-weigth: 600;

  @media (max-width: 500px) {
    width: 150px;
  }
`;

export const ButtonCambiarCantidad = styled.button`
  border: 1px solid;
  border-radius: 10px;
  height: 30px;

`;

export const BelowCarrito = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 500px) {
    display:flex;
    align-items:center;
  }
`;