import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
    <form>
      <label>Username/email: </label>
        <input 
        type = 'text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password: </label>
        <input 
        type = 'text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">
        <Link to='home'>
          Login
        </Link>
      </button>
      <button>
        Create Account
      </button>
    </form>
    </div>
  )
}

export default Login;