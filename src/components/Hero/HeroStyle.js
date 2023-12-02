import styled from "styled-components";

export const HeroContainerStyled = styled.section`
display:flex;
justify-content: space-round;
align-items:center;
margin: 0 auto;
gap:30px;

h1{
    margin-bottom:2rem;
}
@media (max-width:1000px){
    flex-direction:column;
}

`;

export const HeroTextContainerStyled = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width:50%;

h1{
    font-size: 5rem;
    margin: 10px 0;
    font-family: 'sans-serif';

}

h2{
    font-size: 2.5rem;
    margin: 10px 0;
    font-family:'cursive';
}

p{
    font-size: 1.2rem;
}

@media (max-width: 1000px) {
    width: 80%;
    align-items: center;
    text-align: center;
    
    h1{
    font-size: 3rem;
}

    h2{
        font-size:2rem;
    }

    p{
        font-size: 1rem;
    }
}


`;

export const HeroImgContainerStyle = styled.div`

width:100%;
img {
   width: 100%;
   padding-bottom: 75px;
}
@media (max-width: 320px) {
    display: none;
}
`;