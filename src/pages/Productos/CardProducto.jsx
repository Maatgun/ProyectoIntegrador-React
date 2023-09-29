import React from 'react';
import { useDispatch } from 'react-redux'; // Importa useDispatch
import { CardPrice, ContainerPrice, ProductosCard } from './CardsProductosStyle';
import Button from '../../components/UI/Button/Button';
import { agregarProducto } from '../../redux/carrito/carritoActions'; // Importa la acción agregarProducto

const CardsProducto = ({ img, name, price }) => {
  const dispatch = useDispatch(); // Obtiene la función dispatch de Redux

  // Función para agregar un producto al carrito
  const handleAgregarAlCarrito = () => {
    // console.log("Se hizo click en Agregar");
    const producto = { img, name, price };
    dispatch(agregarProducto(producto)); // Dispatcha la acción agregarProducto con el producto
  };

  return (
    <ProductosCard>
      <img src={img} alt={name} />
      <h2>{name}</h2>

      <ContainerPrice>
        <CardPrice>${price}</CardPrice>
        <Button onClick={handleAgregarAlCarrito}>
          Agregar
        </Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardsProducto;
