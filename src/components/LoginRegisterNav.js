import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";

import './LoginRegisterNav.css';

const LoginRegisterNav = () => {

  let navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  }
  const goToLogin = () => {
    navigate("/login");
  }

  let classRegister, classLogin;
  if (window.location.pathname === "/login") {
    classLogin = "active loginRegNav_btn";
    classRegister = "loginRegNav_btn";
  } else if (window.location.pathname === "/register"){
    classLogin = "loginRegNav_btn";
    classRegister = "active loginRegNav_btn";
  }

  return (
    <div>
      <div className="buttonGroup">
        <button onClick={goToLogin} className={classLogin}>
          <b>Log in</b>
        </button>
        <button onClick={goToRegister} className={classRegister}>
          <b>Sign up</b>
        </button>
      </div>

      <Outlet />
    </div>
  )
};

export default LoginRegisterNav;