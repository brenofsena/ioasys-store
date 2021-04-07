import React from "react";
import { render } from "react-dom";
import Router from "routes/router";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "styles";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "store/store";

render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
