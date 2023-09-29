import React from "react";
import { selectItemsCarrito } from "../../redux/carrito/carritoSelectors";
import CarritoDetalleProducto from "./CarritoDetalleProducto"
import { CarritoSeccion } from "./CarritoDetalleStyle";


const CarritoDetalle = () => {
  const itemsCarrito = selectItemsCarrito();
  return (
    <>
      <CarritoSeccion>
        {itemsCarrito.map((productos) => (
          <CarritoDetalleProducto {...productos} key={productos.id} />
        ))}
      </CarritoSeccion>
    </>
  );
};

export default CarritoDetalle;