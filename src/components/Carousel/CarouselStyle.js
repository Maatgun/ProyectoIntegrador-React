import styled from "styled-components";

export const AlimentoWrapper = styled.section`

.alimentos-destacados-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.alimentos-destacados-carousel h2 {
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;
}

.carousel-root {
  border-radius: 10px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
}

.carousel {
  position: relative;
}

.carousel .slide {

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #489948;
  border-radius: 10px;
}

.carousel .slide img {
  max-width: 80%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel .slide .legend {
  font-size: 15px;
  text-align: center;
  margin-top: 15px;
  color: #fff;
}

.fullscreen-carousel {
  width: 100vw; 
  max-width: 1500px; 
}


`;

export const VerProductosButton = styled.button`

padding: 0.8rem 1.5rem;
outline:none;
border:none;
border-radius: ${({ radius }) => `${radius}px`};
color:black;
background: #63C363;
text-transform: uppercase;
font-weigth:400;
cursor:pointer;
&hover{
    opacity:95%;
}
&:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
`;