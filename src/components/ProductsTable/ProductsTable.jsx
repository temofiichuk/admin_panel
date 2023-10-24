import "./ProductsTable.scss";
import { RiEdit2Fill, RiDeleteBin2Fill, RiSortAsc, RiSortDesc } from "react-icons/ri";
const ProductsTable = ({ products, handleClickToEdit, handleClickToDelete }) => {
  return (
    <table className="products__table">
      <thead>
        <tr>
          <th>
            <p>
              <span>ID</span> <RiSortDesc className="btn" />
            </p>
          </th>
          <th>
            <p>
              <span>Category</span> <RiSortDesc className="btn" />
            </p>
          </th>
          <th>
            <p>
              <span>Name</span> <RiSortDesc className="btn" />
            </p>
          </th>
          <th>
            <p>
              <span>Price (₴)</span> <RiSortAsc className="btn" />
            </p>
          </th>
          <th>
            <p>
              <span>Quantity</span> <RiSortDesc className="btn" />
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const { id, category, name, quantity, price } = product;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{category}</td>
              <td>{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <th className="buttons">
                <RiEdit2Fill onClick={() => handleClickToEdit(product)} className="btn" />
                <RiDeleteBin2Fill
                  onClick={() => handleClickToDelete(id)}
                  className="btn"
                />
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
