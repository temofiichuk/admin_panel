import "./ProductsEditing.scss";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Button from "../../components/Button/Button";
import { RiComputerFill, RiAddFill } from "react-icons/ri";
import useGetProducts from "../../hooks/useGetProducts";

const ProductsEditing = () => {
  const products = useGetProducts();

  return (
    <section className="product-editing-page">
      <div className="container">
        <div className="product-editing__buttons">
          <Button text="Review" icon={<RiComputerFill />} />
          <Button text="Add Product" icon={<RiAddFill />} />
        </div>
        <h1>Products</h1>
        {products && <ProductsTable products={products} />}
      </div>
    </section>
  );
};

export default ProductsEditing;
