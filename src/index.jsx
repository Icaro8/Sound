import React from "react";
import ReactDOM from "react-dom";
import { RoutesApplication } from "./routes";
import "react-jinke-music-player/assets/index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <RoutesApplication />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
