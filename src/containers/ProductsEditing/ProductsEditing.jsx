import "./ProductsEditing.scss";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Button from "../../components/Button/Button";
import { RiComputerFill, RiAddFill } from "react-icons/ri";

const ProductsEditing = () => {
  const products = [
    {
      id: 1,
      category: "PC",
      name: "Lenovo Y50-70",
      quantity: 5,
      price: 25000.0
    },
    {
      id: 2,
      category: "Clothes",
      name: "Nike M Nk Df Acd21",
      quantity: 22,
      price: 4000.0
    },
    {
      id: 3,
      category: "Plumbing",
      name: "CERSANIT MITO 17",
      quantity: 1337,
      price: 5000.0
    }
  ];

  return (
    <section className="product-editing-page">
      <div className="container">
        <div className="product-editing__buttons">
          <Button
            text="Review"
            icon={<RiComputerFill />}
          />
          <Button
            text="Add Product"
            icon={<RiAddFill />}
          />
        </div>
        <h1>Products</h1>
        <ProductsTable products={products} />
      </div>
    </section>
  );
};

export default ProductsEditing;
