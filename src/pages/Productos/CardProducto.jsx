import React from 'react';
import { useDispatch } from 'react-redux';
import { BtnAdd, CardPrice, ContainerPrice, ProductosCard } from './CardsProductosStyle';
import { agregarProducto } from '../../redux/carrito/carritoActions'; 
import { formatPrice } from '../../utils/index';

const CardProducto = ({img, name, price, id}) => {

  const dispatch = useDispatch();
  return (
    <ProductosCard>
      <img src={img} alt={name}/>
      <h2>{name}</h2>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <BtnAdd onClick={() => dispatch(agregarProducto({img, name, price, id}))}>Agregar</BtnAdd>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
