import React from 'react'
import { CardH2, CardImg, CardSpan, Cardrec } from './CardStyled'
import Button from '../Button/Button'


const Card = ({name , price, src}) => {
  return (
      
       <Cardrec>
        <CardImg>{src}</CardImg>
        <CardH2>{name}</CardH2>
      <CardSpan>{price}</CardSpan>
        <Button>Comprar</Button>

       </Cardrec>

  
  )
}

export default Card