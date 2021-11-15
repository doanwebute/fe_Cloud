import React from "react";

import "./Login.css";
import {Link} from "react-router-dom"
function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-title">Đăng nhập</div>
        <form className="login-form">
          <input
            type="text"
            placeholder="Tài khoản"
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            required
          />
          <Link to='./register'>
          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
          </Link>
        </form>
       
        <div className="login-other">
         
        </div>
      </div>
    </div>
  );
}

export default Login;
