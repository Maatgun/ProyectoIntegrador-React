import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: ${({ bgColor }) => bgColor || '#63C363'};
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;