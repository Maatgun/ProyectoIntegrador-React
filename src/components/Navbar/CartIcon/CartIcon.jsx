import { BsFillBagHeartFill } from "react-icons/bs";

import { LinkContainerStyled } from "./../NavbarStyle";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../../redux/carrito/cartSlice";

const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

  const dispatch = useDispatch()

  return (
    <LinkContainerStyled onClick={() => dispatch(toggleHiddenCart())}>
      <BsFillBagHeartFill/>
      <span>{totalCartItems}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;