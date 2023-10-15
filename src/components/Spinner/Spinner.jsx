import "./Spinner.scss";
import { RiLoader2Line } from "react-icons/ri";

const Spinner = ({ text }) => {
  return (
    <div className="spinner-container">
      <div className="spinner-content">
        <RiLoader2Line className="spinner" />
        {text && (
          <span className="spinner-text" style={{ "--step": text.length * 2 }}>
            {text}
          </span>
        )}
      </div>
    </div>
  );
};

export default Spinner;
