import { useState } from "react";
import axios from "axios";
import Input from "../Input/Input";
import "./CardLogin.scss";
import {
  RiAccountPinCircleFill,
  RiEyeCloseLine,
  RiEyeFill,
  RiMailFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CardLogin = () => {
  const [authFields, setAuthFields] = useState({ login: "", password: "" });
  const [errorFields, setErrorFields] = useState({ login: "", password: "" });
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [message, setMessage] = useState("");

  const hidePasswordHandler = () => setIsHidePassword((prev) => !prev);

  const navigate = useNavigate();

  const validateFieldsLogin = (name, value) => {
    const isValid = value.length > 0;
    setErrorFields((prev) => ({
      ...prev,
      [name]: !isValid
        ? `${name.charAt(0).toUpperCase()}${name.slice(1)} is required`
        : "",
    }));
    return isValid;
  };

  const handleChangeLoginForm = ({ target: { name, value } }) => {
    if (message) setMessage("");
    validateFieldsLogin(name, value);
    setAuthFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    for (let key in authFields) {
      if (!validateFieldsLogin(key, authFields[key])) {
        isValid = false;
      }
    }
    if (!isValid) return;
    try {
      const { data: token } = await axios.post(
        `${process.env.REACT_APP_DB_SERVER}/users`,
        authFields
      );
      if (token) {
        localStorage.setItem("token", token);
        navigate("/products-table");
      }
    } catch (error) {
      setMessage(error?.response?.data?.message || "Something went wrong, try again");
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="login__container">
        <div className="login__bg-image">
          <RiAccountPinCircleFill className="login__image" />
        </div>
        <div className="wrapper">
          <Input
            id="login_name"
            type="text"
            name="login"
            placeholder="Email ID"
            onChange={handleChangeLoginForm}
            value={authFields.login}
            error={errorFields.login}
          />
          <RiMailFill />
        </div>
        <div className="wrapper">
          <Input
            id="login_password"
            type={isHidePassword ? "password" : "text"}
            name="password"
            placeholder="Password"
            onChange={handleChangeLoginForm}
            value={authFields.password}
            error={errorFields.password}
          />
          {isHidePassword ? (
            <RiEyeCloseLine onClick={hidePasswordHandler} className="btn" />
          ) : (
            <RiEyeFill onClick={hidePasswordHandler} className="btn" />
          )}
        </div>

        <button type="submit" className="secondary-btn">
          <span>Login</span>
        </button>
        {message && <p className="login__message fail">{message}</p>}
      </div>
    </form>
  );
};

export default CardLogin;
