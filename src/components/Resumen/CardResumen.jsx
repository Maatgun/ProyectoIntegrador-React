import { formatPrice } from "../../utils";

import {
  PriceContainerStyled,
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from "./CardResumenStyles";

const CardResumen = ({title, quantity, img, price}) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src={img}
          alt={title}
        />
        <div>
          <h3>{title}</h3>
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