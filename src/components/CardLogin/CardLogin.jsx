import { useState } from "react";
import Input from "../Input/Input";
import "./CardLogin.scss";
import {
  RiAccountPinCircleFill,
  RiEyeCloseLine,
  RiEyeFill,
  RiMailFill
} from "react-icons/ri";

const CardLogin = () => {
  const [isHidePassword, setIsHidePassword] = useState(true);
  return (
    <form className={"login"}>
      <div className='login__container'>
        <div className='login__bg-image'>
          <RiAccountPinCircleFill className='login__image' />
        </div>
        <div>
          <Input
            id={"login_name"}
            type={"text"}
            name={"login_name"}
            className={"login__login-name"}
            placeholder={"Email ID"}
          />
          <RiMailFill className={"login__input-icon"} />
        </div>
        <div>
          <Input
            id={"login_password"}
            type={isHidePassword ? "password" : "text"}
            name={"login_password"}
            className={"login__password"}
            placeholder={"Password"}
          />
          {isHidePassword ? (
            <RiEyeCloseLine className={"login__input-icon btn"} />
          ) : (
            <RiEyeFill className={"login__input-icon btn"} />
          )}
        </div>

        <button
          type='submit'
          className='login__btn secondary-btn'>
          <span>Login</span>
        </button>
      </div>
    </form>
  );
};

export default CardLogin;
