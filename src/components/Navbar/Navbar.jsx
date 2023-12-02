import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiMenu } from "react-icons/hi";
import ModalUser from "./ModalUser/ModalUser";
import CartIcon from "./CartIcon/CartIcon";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import ModalCart from "./ModalCart/ModalCart";

import {
  NavbarContainerStyled,
  LinksContainerStyled,
  UserNavStyled,
  SpanStyled,
  CartNavStyled,
  UserContainerStyled,
  Logo,
  MenuStyled,
  HiMenuButton,
} from "./NavbarStyle";

import { RxAvatar } from "react-icons/rx";
import { GiDogBowl } from "react-icons/gi";
import { GiDogHouse } from "react-icons/gi";
import { SiDatadog } from "react-icons/si";
import { PiDogFill } from "react-icons/pi";
import {FaTimes} from "react-icons/fa";



function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [click, setClick] = useState(false);

  const changeClick = () => setClick(!click);

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />

      <Link to="/">
        <Logo>
          <img
            src="https://res.cloudinary.com/dvj7ctojo/image/upload/v1690864147/logo-dogChow_ixeecn.png"
            alt="Logo"
          />
        </Logo>
      </Link>


      <HiMenuButton onClick={() => changeClick()}>
        {click ? <FaTimes /> : <HiMenu />}
      </HiMenuButton>
      <MenuStyled click={click}>
        <LinksContainerStyled>
          <Link to="/" onClick={() => changeClick()}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <GiDogHouse />
              <span>Home</span>
            </motion.div>
          </Link>
          <Link to="/productos" onClick={() => changeClick()}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PiDogFill />
              <span>Productos</span>
            </motion.div>
          </Link>
          <Link to="/contacto" onClick={() => changeClick()}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <GiDogBowl />
              <span>Contacto</span>
            </motion.div>
          </Link>
          <Link to="/aboutus" onClick={() => changeClick()}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <SiDatadog />
              <span>About Us</span>
            </motion.div>
          </Link>
        </LinksContainerStyled>
      </MenuStyled>

      <UserNavStyled>
        <UserContainerStyled
          onClick={() => {
            currentUser ? dispatch(toggleHiddenMenu()) : navigate("/register");
          }}
        >
          <SpanStyled>{currentUser ? currentUser.nombre : ""}</SpanStyled>
          <RxAvatar />
        </UserContainerStyled>
      </UserNavStyled>

      <CartNavStyled>
        <CartIcon />
      </CartNavStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
