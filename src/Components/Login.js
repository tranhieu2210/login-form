import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectUser } from "../feautures/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const isLogin = useSelector(selectUser);
  const navigate = useNavigate()
  useEffect(()=>{
    if(isLogin) {
      navigate('/')
    } else {
      navigate()
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    dispatch(login(payload));
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
