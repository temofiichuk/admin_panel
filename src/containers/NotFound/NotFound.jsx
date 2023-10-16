import "./NotFound.scss";
import { RiGridFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="wrapper">
          <h1>Oops!</h1>
          <p>404 - Page not found</p>
          <button onClick={() => navigate("/preview")} className="secondary-btn">
            <RiGridFill />
            <span>Go To Preview Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
