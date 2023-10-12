import "./ProductsTable.scss";
import { RiEdit2Fill, RiDeleteBin2Fill, RiSortAsc, RiSortDesc } from "react-icons/ri";
const ProductsTable = ({ products }) => {
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
        {products.map(({ id, category, name, quantity, price }) => (
          <tr key={id}>
            <th>{id}</th>
            <th>{category}</th>
            <th>{name}</th>
            <th>{price}</th>
            <th>{quantity}</th>
            <th className="buttons">
              <RiEdit2Fill className="btn" />
              <RiDeleteBin2Fill className="btn" />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
