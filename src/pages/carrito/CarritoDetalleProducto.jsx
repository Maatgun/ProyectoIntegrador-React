import { useDispatch } from "react-redux";
import {decrementar, incrementar,borrarProducto,} from "../../redux/carrito/carritoActions";
import {CarritoProductoDetalle,CambiarCantidades,ButtonCantidad,NombreProducto,Contenedor,ImgProducto,} from "./CarritoDetalleStyle";
import { BiSolidTrash } from "react-icons/bi";
import { GrSubtract, GrAdd } from "react-icons/gr";

const CarritoDetalleProducto = (producto) => {
  const dispatchRedux = useDispatch();
  const { img, name, price, cantidad } = producto;

  return (
    <>
      <CarritoProductoDetalle>
        <Contenedor>
          <ImgProducto src={img} />
          <NombreProducto>{name}</NombreProducto>
        </Contenedor>

        <CambiarCantidades>
          <ButtonCantidad onClick={() => dispatchRedux(decrementar(producto))}>
            <GrSubtract />
          </ButtonCantidad>
          <p>{cantidad}</p>
          <ButtonCantidad onClick={() => dispatchRedux(incrementar(producto))}>
            <GrAdd />
          </ButtonCantidad>
        </CambiarCantidades>

        <Contenedor>
          <p> ${price.toLocaleString("es")}</p>

          <button onClick={() => dispatchRedux(borrarProducto(producto))}>
            <BiSolidTrash />
          </button>
        </Contenedor>
      </CarritoProductoDetalle>
    </>
  );
};

export default CarritoDetalleProducto;