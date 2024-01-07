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
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>3U</p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;