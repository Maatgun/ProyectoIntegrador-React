import { formatPrice } from '../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/carrito/cartSlice';
import { IoMdTrash } from 'react-icons/io';

const CardProductCheckout = ({img, name, price, quantity, id}) => {

  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
      <CardInfoStyled>
        <ProductTitleStyled>{name}</ProductTitleStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={() => dispatch(removeFromCart(id))}
        >
          {
            quantity === 1 ? <IoMdTrash /> : <FaMinus />
          }
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => dispatch(addToCart({img, name, price, quantity, id}))}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;