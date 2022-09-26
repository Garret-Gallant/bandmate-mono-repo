import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Login = ( {toggleCreateAccount, onLogin} ) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch('login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {username, password} )
    })
    .then((res) => {
      if (res.ok) {
        res.json().then(user => {
          onLogin(user)
          navigate('/')
      })
    } else {
      res.json().then(json => setErrors(json.errors))
    }
  })
}

  return (
    <div>
      {/* <p>{errors}</p> */}
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
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
      <button type='submit'>
        Login
      </button>
      <button onClick={toggleCreateAccount}>
        Create Account
      </button>
    </form>
    </div>
  )
}

export default Login;