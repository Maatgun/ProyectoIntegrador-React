import React from 'react'
import { CardPrice, ContainerPrice, ProductosCard } from './CardsProductosStyle'
import Button from '../../components/UI/Button/Button'


const CardsProducto = ({img, name, price}) => {
    return (
        <ProductosCard>
            <img src={img} alt={name} />
            <h2>{name}</h2>

        <ContainerPrice>
        <CardPrice>${price}</CardPrice>
            <Button>
                Agregar
            </Button>
        </ContainerPrice>
        </ProductosCard>
    )
}

export default  CardsProducto