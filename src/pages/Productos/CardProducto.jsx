import React from 'react';
import { useDispatch } from 'react-redux';
import { BtnAdd, CardPrice, ContainerPrice, ProductosCard } from './CardsProductosStyle';
import { formatPrice } from '../../utils/index';
import { addToCart } from '../../redux/carrito/cartSlice';

const CardProducto = ({img, title, price, id}) => {

  const dispatch = useDispatch();
  return (
    <ProductosCard>
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <BtnAdd onClick={() => dispatch(addToCart({img, title, price, id}))}>Agregar</BtnAdd>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
