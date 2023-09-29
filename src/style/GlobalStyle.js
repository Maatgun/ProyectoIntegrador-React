import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
    scrool-behavior:smooth;
}

body{
    margin:0;
    padding:0;
    background: #FAF5FA;
    font-family: 'Montserrat', sans-serif;
    color:black;
}

a{
    text-decoration:none;
    color:black;
}

li{
    list-style:none;
}
`;