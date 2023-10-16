import "./Product.scss";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { RiArrowGoBackLine, RiEmotionLaughLine, RiEmotionSadLine } from "react-icons/ri";
import Spinner from "../../components/Spinner/Spinner";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DB_SERVER}/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <Spinner text="Loading" />;
  if (!product) return <Navigate to="/404" />;

  const { name, image, price, quantity, description } = product;
  return (
    <section className="product-page">
      <div className="container">
        <div className="heading">
          <RiArrowGoBackLine
            onClick={() => navigate("/preview")}
            className="back-icon btn"
          />
          <h1>{name}</h1>
        </div>
        <div className="wrapper">
          <img src={image} alt={name} className="product-image" />
          <div className="product-info">
            {+quantity > 0 ? (
              <div className="available">
                <RiEmotionLaughLine /> <span>Available</span>
              </div>
            ) : (
              <div className="not-available">
                <RiEmotionSadLine /> <span>Not Available</span>
              </div>
            )}
            <p className="price">{price}₴</p>
            <p className="quantity">Quantity: {quantity}</p>
          </div>
        </div>
        {description && (
          <div className="description">
            <p>Description:</p>
            {description.map((describe) => {
              return (
                <div key={uuidv4()} className="block">
                  <p>{describe.head}</p>
                  <p>{describe.body}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
