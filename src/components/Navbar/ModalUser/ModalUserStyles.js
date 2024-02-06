import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: white;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 300px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }

  @media (max-width: 351px) {
    width: 80%;
    border-radius: 1rem;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--orange);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;