import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./containers/Login/Login";
import ProductsEditing from "./containers/ProductsEditing/ProductsEditing";
import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";
import Product from "./containers/Product/Product";
import NotFound from "./containers/NotFound/NotFound";
import PrivateRoutes from "./privateRoute";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/edit" element={<ProductsEditing />} />
          <Route path="/preview" element={<ProductsPreview />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
