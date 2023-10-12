import React, { useState } from 'react';
import { BtnCategory, BtnStyle, ButtonContainerStyled, ProductoWrapper, ProductsContainer } from './CardsProductosStyle';
import CardsProducto from './CardProducto';
import Button from '../../components/UI/Button/Button';
import { products } from '../../data/Productos';

const CardsProductos = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [limit, setLimit] = useState(6);
  const INITIAL_LIMIT = 6;

  const filteredProducts = products.filter((producto) => {
    if (selectedCategory === "Todos") {
      return true;
    } else {
      return producto.category === selectedCategory;
    }
  });

  const totalProducts = filteredProducts.length;

  return (
    <ProductoWrapper>
      <h2>P R O D U C T O S</h2>

      <h3 className='Categoria'>C A T E G O R I A</h3>
      <BtnStyle>
        <BtnCategory onClick={() => setSelectedCategory("Todos")}>
          Todos
        </BtnCategory>

        <BtnCategory onClick={() => setSelectedCategory("Alimento")}>
          Alimento
        </BtnCategory>

        <BtnCategory onClick={() => setSelectedCategory("Comida Humeda")}>
          Comida Húmeda
        </BtnCategory>

        <BtnCategory onClick={() => setSelectedCategory("Galletas")}>
          Galletas
        </BtnCategory>
      </BtnStyle>

      <ProductsContainer>
        {filteredProducts.slice(0, limit).map((producto) => (
          <CardsProducto key={producto.id} {...producto} />
        ))}
      </ProductsContainer>

      {totalProducts > INITIAL_LIMIT && (
        <ButtonContainerStyled>
        {limit > INITIAL_LIMIT && (
          <Button
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={INITIAL_LIMIT === limit}
          >
            <span>Ver menos</span>
          </Button>
        )}
        {limit < totalProducts && (
          <Button
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={limit >= totalProducts}
          >
            Ver más
          </Button>
        )}
      </ButtonContainerStyled>
      
      )}
    </ProductoWrapper>
  );
};

export default CardsProductos;