import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
// import { AppContainer } from "react-hot-loader";

import "./styles/index.css";

import AppCanvas from "./js/components/AppCanvas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppCanvas />
  </>
);
