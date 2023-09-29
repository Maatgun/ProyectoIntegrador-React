import styled from "styled-components";

export const ProductoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width:100%;
  text-align:center;
  max-width: 1300px;
  margin: 40px 15px;
  @media (max-width: 768px) {
    text-align:center;
  }

  h3 {
    margin: 40px;
  }

`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 40px 0;;
    margin: 50px;
    max-width: 1200px;

`;

export const ProductosCard = styled.div`

width:300px;
padding: 1rem;
background-color: #f5f5f5;
border: 1px solid #ddd;
border-radius: 4px;
padding: 10px;
text-align: center;

img{
    width:100%;
    margin-bottom: 1rem;
}

h2{
    font-size:16px;
    font-weight: 600;
    margin: 0;
}

p{
    color:white
    font-size: 1rem;
}
@media (max-width: 768px) {
    width:250px;
    
}
`;

export const ContainerPrice = styled.div`

display:flex;
justify-content: space-between;
margin:25px;
align-items:center;

@media (max-width: 460px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const CardPrice = styled.span`

font-weight:700;
font-size: 1.7rem;
`;

export const ButtonContainerStyled = styled.div`

display:flex;
justify-content: center;
gap:20px;
margin-top: 2rem;
`;

export const BtnCategory = styled.button`
background-color: #63C363;
color: #fff;
border: none;
padding: 10px 20px;
margin: 5px;
cursor: pointer;
border-radius: 15px;
transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


export const BtnStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    
    flex-direction: column;
    padding: 0px 40px 0px 10px;
    
  }
`;