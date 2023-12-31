import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GlobalStyle } from "./style/GlobalStyle";
import {Provider} from "react-redux"
import { persistor, store } from "./redux/store.jsx";
import {PersistGate} from "redux-persist/integration/react"
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <BrowserRouter>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "click"}>
          <App />
          </StyleSheetManager>
        </BrowserRouter>
      </PersistGate>
      
    </Provider>
  </React.StrictMode>
);
