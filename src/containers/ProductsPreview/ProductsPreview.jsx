import "./ProductsPreview.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import useGetProducts from "../../hooks/useGetProducts";

const ProductsPreview = () => {
  const products = useGetProducts();

  return (
    <section className="products-preview">
      <div className="container">
        <h1>Products</h1>
        <div className="products">
          {products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
