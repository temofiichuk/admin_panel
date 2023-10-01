import React from "react";
import Input from "./Input";
import anonymousAvatar from "../assets/img/icon/anonymous_avatar.svg";

const CardLogin = () => {
  return (
    <form className={"login"}>
      <div className='login__container'>
        <div className='login__image'>
          <img src={`${anonymousAvatar}`} alt='Anonymous Avatar' />
        </div>
        <Input
          id={"login_name"}
          type={"text"}
          name={"login_name"}
          className={"login__login-name"}
          placeholder={"Email ID"}
        />
        <Input
          id={"login_password"}
          type={"password"}
          name={"login_password"}
          className={"login__password"}
          placeholder={"Password"}
        />

        <button type='submit' className='login__btn primary-btn'>
          <span>Login</span>
        </button>
      </div>
    </form>
  );
};

export default CardLogin;
