import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiMenu } from 'react-icons/hi';
import ModalUser from './ModalUser/ModalUser';
import CartIcon from './CartIcon/CartIcon';
import { toggleHiddenMenu } from '../../redux/user/userSlice';
import ModalCart from './ModalCart/ModalCart';
import { useMenu } from './context/MenuContext';

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
} from './NavbarStyle';

import { RxAvatar } from 'react-icons/rx';
import { GiDogBowl } from 'react-icons/gi';
import { GiDogHouse } from 'react-icons/gi';
import { SiDatadog } from 'react-icons/si';
import { PiDogFill } from 'react-icons/pi';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { isMenuOpen, toggleMenu } = useMenu();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

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

      {windowWidth <= 951 ? (
        <HiMenuButton onClick={toggleMenu}>
          <HiMenu />
        </HiMenuButton>
      ) : (
        <MenuStyled>
          <LinksContainerStyled className={isMenuOpen ? 'open' : ''}>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="/" onClick={closeMenu}>
                <LinksContainerStyled>
                  <GiDogHouse />
                </LinksContainerStyled>
                Home
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="/Productos" onClick={closeMenu}>
                <LinksContainerStyled>
                  <GiDogBowl />
                </LinksContainerStyled>
                Productos
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="/Contacto" onClick={closeMenu}>
                <LinksContainerStyled>
                  <PiDogFill />
                </LinksContainerStyled>
                Contacto
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.97 }}>
              <Link to="/AboutUs" onClick={closeMenu}>
                <LinksContainerStyled>
                  <SiDatadog />
                </LinksContainerStyled>
                About Us
              </Link>
            </motion.div>
          </LinksContainerStyled>
        </MenuStyled>
      )}

      <UserNavStyled>
        <UserContainerStyled
          onClick={() => {
            currentUser ? dispatch(toggleHiddenMenu()) : navigate('/register');
          }}
        >
          <SpanStyled>
            {currentUser ? currentUser.nombre : ''}
          </SpanStyled>
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
