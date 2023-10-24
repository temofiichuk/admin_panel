import "./Button.scss";

const Button = ({ icon, text, ...attrs }) => {
  return (
    <button className="secondary-btn" {...attrs}>
      {icon}
      <span> {text} </span>
    </button>
  );
};

export default Button;
