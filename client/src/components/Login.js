import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";

const Login = ({ toggleCreateAccount, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          onLogin(user);
          navigate("/");
        });
      } else {
        setErrors("Invalid username or password, please try again");
      }
    });
  }

  return (
    <div className='relative top-40'>
      <p className='relative text-center mb-10'>{errors}</p>
      <form className="login-form">
        <label>Username: </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button
          className="landing-button right-2 text-center mb-8"
          onClick={handleSubmit}
        >
          Login
        </button>

        <button className="landing-button" onClick={toggleCreateAccount}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
