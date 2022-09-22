import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = ( {toggleCreateAccount} ) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username, password)
    })
    .then((res) => res.json())
    // .then((user) => onLogin(user))
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Username/email: </label>
        <input 
        type = 'text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password: </label>
        <input 
        type = 'password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">
        <Link to='home'>
          Login
        </Link>
      </button>
      <button onClick={toggleCreateAccount}>
        Create Account
      </button>
    </form>
    </div>
  )
}

export default Login;