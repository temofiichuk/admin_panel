import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/styles.scss";
import Login from "./containers/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
