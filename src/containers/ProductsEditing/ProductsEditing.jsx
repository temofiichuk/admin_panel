import "./ProductsEditing.scss";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import Button from "../../components/Button/Button";
import { RiComputerFill, RiAddFill } from "react-icons/ri";
import useGetProducts from "../../hooks/useGetProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import axios from "axios";
import ModalForm from "../../components/ModalForm/ModalForm";

const ProductsEditing = () => {
  const [currentItemID, setCurrentItemID] = useState(null);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [isEditableForm, setIsEditableForm] = useState(false);
  const initialValues = {
    category: "",
    name: "",
    quantity: "",
    price: "",
    image: "",
    description: [],
  };
  const [initialValuesForm, setInitialValuesForm] = useState(initialValues);
  const [products, setCanUpdateProducts] = useGetProducts();

  const performRequest = async (method, endpoint, data) => {
    try {
      const response = await axios[method](
        `${process.env.REACT_APP_DB_SERVER}/products/${endpoint}`,
        data
      );
      if (response.data?.success) setCanUpdateProducts(true);
    } catch (error) {
      console.error(`Error ${method} product:`, error);
    }
    method === "delete" ? setIsOpenModalDelete(false) : setIsOpenModalForm(false);
  };

  const actions = {
    edit: (values) => performRequest("put", currentItemID, { product: values }),
    add: (values) => performRequest("post", "", { product: values }),
    remove: () => performRequest("delete", currentItemID),
  };

  const handleClickToDelete = (id) => {
    setCurrentItemID(id);
    setIsOpenModalDelete(true);
  };
  const handleClickToEdit = ({ id, ...product }) => {
    setCurrentItemID(id);
    setInitialValuesForm(product);
    setIsOpenModalForm(true);
    setIsEditableForm(true);
  };
  const handleClickToAdd = () => {
    setInitialValuesForm(initialValues);
    setIsOpenModalForm(true);
    setIsEditableForm(false);
  };

  return (
    <section className={"product-editing-page"}>
      {isOpenModalForm && (
        <ModalForm
          title={isEditableForm ? "Edit product" : "Add product"}
          initialValues={initialValuesForm}
          setIsOpenModal={setIsOpenModalForm}
          handleProduct={isEditableForm ? actions.edit : actions.add}
        />
      )}
      {isOpenModalDelete && (
        <ModalDelete
          handleDelete={actions.remove}
          setIsOpenModal={setIsOpenModalDelete}
        />
      )}
      <div className="container">
        <div className="product-editing__buttons">
          <Link to="/preview">
            <Button text="Preview" icon={<RiComputerFill />} />
          </Link>
          <Button text="Add Product" icon={<RiAddFill />} onClick={handleClickToAdd} />
        </div>
        <h1>Products</h1>
        {products && (
          <ProductsTable
            products={products}
            handleClickToEdit={handleClickToEdit}
            handleClickToDelete={handleClickToDelete}
          />
        )}
      </div>
    </section>
  );
};

export default ProductsEditing;
