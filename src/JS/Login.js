import React from 'react';
import '../CSS/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        <h1 className="title1">Login</h1>
        <form className="form">
          <input type="text" className="input" placeholder="Username" />
          <input type="password" className="input" placeholder="Password" />
          <button className="button">Login</button>
        </form>
        <div className="links">
          <a href="#" className="link">Esqueceu a senha?</a>
          <Link to='/cadastro' className="link">Cadastrar-se</Link> 
        </div>
      </div>
    </div>
  );
};

export default Login;
