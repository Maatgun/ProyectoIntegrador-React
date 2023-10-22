import { formatPrice } from "../../utils";

import {
  PriceContainerStyled,
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from "./CardResumenStyles";

const CardResumen = ({name, quantity, img, price}) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src={img}
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p></p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;