import "./ProductCard.scss";
import { RiShoppingCartFill } from "react-icons/ri";
const ProductCard = ({ product: { id, name, image, price, quantity } }) => {
  return (
    <div className="product card">
      <div className="card__container">
        <div className="card__image">
          <img src={image} alt="product" loading="lazy" />
        </div>
        <div className="wrapper">
          <p className="card__name">{name}</p>
          <div className="wrapper">
            <p className="card__price">{price}₴</p>
            <p className="card__avaliable">Qty: {quantity}</p>
          </div>
          <button className="secondary-btn">
            <RiShoppingCartFill />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
