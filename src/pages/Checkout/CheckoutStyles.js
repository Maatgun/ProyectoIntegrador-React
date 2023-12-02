import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
   
`;