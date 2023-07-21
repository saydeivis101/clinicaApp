import React from "react";
import ReactDOM from "react-dom/client";
import { ClinicoMaternoApp } from "./ClinicoMaternoApp";
import { BrowserRouter } from "react-router-dom";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClinicoMaternoApp />
    </BrowserRouter>
  </React.StrictMode>
);
