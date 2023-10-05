import "./Button.scss";

const Button = ({ icon, text }) => {
  return (
    <button className="secondary-btn">
      {icon}
      <span> {text} </span>
    </button>
  );
};

export default Button;
