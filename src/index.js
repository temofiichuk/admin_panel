import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Login from "./containers/Login/Login";
import ProductsEditing from "./containers/ProductsEditing/ProductsEditing";
import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<Login />*/}
    {/*<ProductsEditing />*/}
    <ProductsPreview />
  </React.StrictMode>
);
