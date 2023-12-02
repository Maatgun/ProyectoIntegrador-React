import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
padding: 0.8rem 1.5rem;
margin: 25px 0;
outline:none;
border:none;
border-radius: 15px;
color:black;
background: #63C363;
text-transform: uppercase;
font-weigth:400;
cursor:pointer;

&:hover{
    opacity:0.95;
}
&:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
`;