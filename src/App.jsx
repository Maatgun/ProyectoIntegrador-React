import "./App.css";
import React from 'react';
import Routes from './routes/Routes';
import { GlobalStyle } from './style/GlobalStyle';
import { MenuDespegable } from './components/Navbar/MenuContext';

function App() {
  return (
      
      
      <MenuDespegable>
        <Routes />
        <GlobalStyle />
      </MenuDespegable>
     
  );
}

export default App;

