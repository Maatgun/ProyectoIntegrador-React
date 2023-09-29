import styled from "styled-components";

export const Cardrec = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0 1rem 0;
flex-direction: column;
width: 280px;
height: auto;
background-color: white;
box-shadow: 5px 5px 15px gray;
border-radius: 15px;
border: solid 1px #152039;
margin: 0 1rem 0 1.5rem;

`

export const CardImg = styled.img`
    width: 90%;
    border: solid 1px #152039;
    border-radius: 3px;
`

export const CardH2 = styled.h3`
    font-size: 1.4rem;
    font-weight: 800;
    color: #152039;
`

export const CardSpan = styled.span`
    color: #4D77D8;
    font-weight: 600;
    margin-bottom: 20px;
`