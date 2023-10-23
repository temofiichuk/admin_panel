import "./ProductsEditing.scss";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Button from "../../components/Button/Button";
import { RiComputerFill, RiAddFill } from "react-icons/ri";
import useGetProducts from "../../hooks/useGetProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import axios from "axios";

const ProductsEditing = () => {
  const [currentItemID, setCurrentItemID] = useState(null);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const [products, setCanUpdateProducts] = useGetProducts();

  const handleDeleteItem = async () => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_DB_SERVER}/products/${currentItemID}`
      );
      if (data?.success) setCanUpdateProducts(true);
    } catch (error) {
      console.error("Error delete product:", error);
    }
    setIsOpenModalDelete(false);
  };

  return (
    <section className={"product-editing-page"}>
      {isOpenModalDelete && (
        <ModalDelete
          handleDelete={handleDeleteItem}
          setIsOpenModal={setIsOpenModalDelete}
        />
      )}
      <div className="container">
        <div className="product-editing__buttons">
          <Link to="/preview">
            <Button text="Preview" icon={<RiComputerFill />} />
          </Link>
          <Button text="Add Product" icon={<RiAddFill />} />
        </div>
        <h1>Products</h1>
        {products && (
          <ProductsTable
            products={products}
            setCurrentItemID={setCurrentItemID}
            setIsOpenModalDelete={setIsOpenModalDelete}
          />
        )}
      </div>
    </section>
  );
};

export default ProductsEditing;
