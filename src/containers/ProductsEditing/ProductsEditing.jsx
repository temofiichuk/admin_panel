import "./ProductsEditing.scss";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Button from "../../components/Button/Button";
import { RiComputerFill, RiAddFill } from "react-icons/ri";
import useGetProducts from "../../hooks/useGetProducts";
import { Link } from "react-router-dom";

const ProductsEditing = () => {
  const products = useGetProducts();

  return (
    <section className="product-editing-page">
      <div className="container">
        <div className="product-editing__buttons">
          <Link to="/preview">
            <Button text="Preview" icon={<RiComputerFill />} />
          </Link>
          <Button text="Add Product" icon={<RiAddFill />} />
        </div>
        <h1>Products</h1>
        {products && <ProductsTable products={products} />}
      </div>
    </section>
  );
};

export default ProductsEditing;
