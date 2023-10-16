import "./ProductCard.scss";
import { RiShoppingCartFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product: { id, name, image, price, quantity } }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${id}`)} className="product card">
      <div className="card__container">
        <div className="card__image">
          <img src={image} alt={name} loading="lazy" />
        </div>
        <div className="wrapper">
          <p className="card__name">{name}</p>
          <div className="wrapper">
            <p className="card__price">{price}₴</p>
            <p className="card__avaliable">Qty: {quantity}</p>
          </div>
          <button className="secondary-btn" disabled={quantity <= 0}>
            <RiShoppingCartFill />
            <span> {quantity > 0 ? "Ready for dispatch" : "Not available"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
