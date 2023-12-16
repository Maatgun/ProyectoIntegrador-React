import { AnimatePresence } from "framer-motion";
import { HrStyled, LinkStyled, ModalContainerStyled, UsernameStyled } from "./ModalUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../../redux/user/userSlice";

const ModalUser = () => {
  const {hiddenMenu, currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <div onClick={() => dispatch(toggleHiddenMenu())} style={{position: 'fixed', inset: 0, zIndex: 1}}>
          <ModalContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ duration: 0.5 }}
            key="cart-user"
            onClick={(e) => e.stopPropagation()} 
          >
            <UsernameStyled>
              <span>Hola, Bienvenido/a {currentUser?.nombre}</span>
            </UsernameStyled>
            <HrStyled />
            <span onClick={() => {
              dispatch(setCurrentUser(null))
              dispatch(toggleHiddenMenu())
            }}>Cerrar Sesion</span>
          </ModalContainerStyled>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;