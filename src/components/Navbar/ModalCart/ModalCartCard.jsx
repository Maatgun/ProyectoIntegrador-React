import { formatPrice } from "../../../utils/formatPrice";

import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

import Count from "../../UI/Count/Count";
import Increase from "../../UI/Increase/Increase";

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from "./ModalCartStyles";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/carrito/cartSlice";
import { IoMdTrash } from "react-icons/io";

const ModalCartCard = ({img, name, price, quantity, id}) => {

  const dispatch = useDispatch()

  return (
    <ProductContainerStyled>
      <img
        src={img}
        alt={name}
      />
      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
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
    </ProductContainerStyled>
  );
};

export default ModalCartCard;