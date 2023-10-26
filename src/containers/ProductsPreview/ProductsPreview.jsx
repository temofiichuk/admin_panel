import "./ProductsPreview.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import useGetProducts from "../../hooks/useGetProducts";
import Button from "../../components/Button/Button";
import { RiStackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProductsPreview = () => {
  const [products] = useGetProducts();

  return (
    <section className="products-preview">
      <div className="container">
        <div className="product-editing__buttons">
          <Link to="/products-table">
            <Button text="Edit" icon={<RiStackFill />} />
          </Link>
        </div>
        <h1>Products</h1>
        <div className="products">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
