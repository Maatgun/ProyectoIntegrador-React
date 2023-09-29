import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainerStyled,
  BtnNavbar,
  LinksContainerStyled,
  ButtonCartLogo,
  Logo,
  LinkContainerInicioSesion,
  Carrito,
  ContenedorCarrito,
  MenuButton,
  LinksContainer,
  NavLinkStyled,
} from "./NavbarStyle";
import { ButtonCart, BelowCarrito, LinkCarrito } from "./CarritoStyle";
import { RxAvatar } from "react-icons/rx";
import { BsFillBagHeartFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { GiDogBowl } from "react-icons/gi";
import { GiDogHouse } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import { PiDogFill } from "react-icons/pi";
import { Context } from "./MenuContext";
import { selectItemsCarrito } from "../../redux/carrito/carritoSelectors";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { borrarCarrito } from "../../redux/carrito/carritoActions";
import CarritoContainer from "./CarritoContenedor";
import { ModalCarrito } from "./modal/ModalReact";

const ButtonMenu = ({ onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    onClick();
  };

  return (
    <MenuButton onClick={handleMenuClick}>
      <HiMenu />
      {menuOpen && (
        <LinksContainer className={menuOpen ? "open" : ""}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Productos">Productos</NavLink>
          <NavLink to="/Contacto">Contacto</NavLink>
          <NavLink to="/AboutUs">About Us</NavLink>
        </LinksContainer>
      )}
    </MenuButton>
  );
};

const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const itemsCarrito = selectItemsCarrito();
  const dispatchRedux = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [carritoComprado, setCarritoComprado] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const comprarCarrito = () => {
    setCarritoComprado(true);
    openModal();
  };

  const borrarTodoCarrito = () => {
    setCarritoComprado(false);
    openModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const totalDeCompra = itemsCarrito.reduce((acc, producto) => {
    return (acc += producto.precio * producto.cantidad);
  }, 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavbarContainerStyled>
        <Logo>
          <img
            src="https://res.cloudinary.com/dvj7ctojo/image/upload/v1690864147/logo-dogChow_ixeecn.png"
            alt="Logo"
          />
        </Logo>
        {windowWidth <= 941 ? (
          <ButtonMenu onClick={() => dispatch({ type: "toggle_menu" })} />
        ) : (
          <LinksContainer>
            <NavLinkStyled to="/">
            <GiDogHouse/> Home
            </NavLinkStyled>

            <NavLinkStyled to="/Productos">
              <GiDogBowl/> Productos
            </NavLinkStyled>

            <NavLinkStyled to="/Contacto">
             <PiDogFill/> Contacto
              </NavLinkStyled>

            <NavLinkStyled to="/AboutUs">
            <SiDatadog/> About Us
            
            </NavLinkStyled>

          </LinksContainer>
        )}

        <BtnNavbar>
          <LinkContainerInicioSesion href="#">
            <RxAvatar/>
          </LinkContainerInicioSesion>
          <ButtonCartLogo onClick={() => dispatch({ type: "toggle_cart" })}>
            <BsFillBagHeartFill />
          </ButtonCartLogo>

          <Carrito className={state.isCartOpen ? "openCart" : ""}>
            <p>
              <BsCart4 />
              Mi carrito
            </p>
            {itemsCarrito.length === 0 && <p>No hay productos en el carrito</p>}
            <ContenedorCarrito>
              {itemsCarrito.map((producto) => (
                <CarritoContainer {...producto} key={producto.id} />
              ))}
            </ContenedorCarrito>

            {itemsCarrito.length !== 0 && (
              <BelowCarrito>
                <p style={{ border: "1px solid", margin: "0 4rem" }}>
                  Total $<span>{totalDeCompra.toLocaleString("es")}</span>
                </p>
                <ButtonCart onClick={comprarCarrito}>Comprar</ButtonCart>
                <ButtonCart onClick={borrarTodoCarrito}>Borrar todo</ButtonCart>
                <LinkCarrito to="checkout">Ir al carrito</LinkCarrito>
              </BelowCarrito>
            )}
          </Carrito>
        </BtnNavbar>
      </NavbarContainerStyled>

      <ModalCarrito
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        aceptarClick={carritoComprado ? () => { dispatchRedux(borrarCarrito()) } : () => { dispatchRedux(borrarCarrito()) }}
        mensaje={carritoComprado ? "¿Desea realizar la compra?" : "¿Desea borrar todo el carrito?"}
      />
    </>
  );
};

export default Navbar;