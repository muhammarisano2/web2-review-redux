import React, { useState } from "react";
import styles from "./register.module.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../configs/redux/action/authAction";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  const { email: emailGlo, password: passwordGlo, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
 
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    dispatch(login(formLogin, navigate))
  };

  return (
    <div>
      <p>{emailGlo}</p>
      <p>{passwordGlo}</p>
      <h1 className="text-center">Page Login</h1>
      <div className={styles.formInput}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formLogin.email}
            id="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formLogin.password}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;
