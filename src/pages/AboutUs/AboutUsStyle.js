import styled from 'styled-components'

export const AboutUsContainerStyle = styled.section`

display:flex;
flex-direction:column;

h1 {
    text-align: center;
    font-size:40px;
}

h2 {
  text-align:center;
  font-size: 18px
}

a{
  color:green;
  font-size:15px;
}

@media (max-width:760px){

  h1{
    font-size: 20px;
  }

  h2 {
    font-size: 10px;
  }
  p {
    font-size:12px;
    text-align:center;
    margin:10px;
    
  
  }
`;