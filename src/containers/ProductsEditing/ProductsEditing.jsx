import "./ProductsEditing.scss";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Button from "../../components/Button/Button";
import { RiComputerFill, RiAddFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductsEditing = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5678/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

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
        {products && <ProductsTable products={products} />}
      </div>
    </section>
  );
};

export default ProductsEditing;
