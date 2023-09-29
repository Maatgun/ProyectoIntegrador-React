import styled from "styled-components";


export const FooterContainerStyled = styled.footer`
 
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 7rem 0 2rem 0;
p span {
    font-weight: 800;
}
`;

export const LinksFooterContainerStyled = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;
@media (max-width:760px) {
    flex-direction:column;
    a {
        padding: 0.5rem 0;
    }
}
`;