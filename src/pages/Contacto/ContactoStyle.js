import styled from "styled-components";

export const ContactoStyled = styled.div`
.form-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  h2 {
    font-size: 30px;
    text-align: center;
  }
  
  label {
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  input {
    padding: 10px;
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  textarea {
    width: 50%;
    height:200px;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

`;