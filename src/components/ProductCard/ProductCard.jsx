import "./ProductCard.scss";
import { RiShoppingCartFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/img/NoImage.svg";

const ProductCard = ({ product: { id, name, image, price, quantity } }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${id}`)} className="product card">
      <div className="card__container">
        <div className="card__image">
          <img
            src={image ?? noImage}
            alt={name}
            loading="lazy"
            onError={({ target }) => {
              target.src = noImage;
              target.alt = "No image";
            }}
          />
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
