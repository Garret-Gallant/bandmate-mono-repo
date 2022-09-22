import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = ( {toggleCreateAccount} ) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [instrument, setInstrument] = useState("")
  const [genre, setGenre] = useState("")
  const [bio, setBio] = useState("")

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('/create-account', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(username, password)
  //   })
  //   .then((res) => res.json())
  //   // .then((user) => onLogin(user))
  // }

  return (
    <div>
      <form>
      <label>Name: </label>
        <input 
        type = 'text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <label>Confirm Password: </label>
        <input 
        type = 'password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Main Instrument: </label>
        <input 
        type = 'text'
        value={instrument}
        onChange={(e) => setInstrument(e.target.value)}
      />
      <label>Favorite Genre: </label>
        <input 
        type = 'text'
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <label>Add Bio? (This can be added/updated later) </label>
        <input 
        type = 'text'
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit">
        <Link to='/'>
          Create Account
        </Link>
      </button>
        <button onClick={toggleCreateAccount}>
          Back to log in
        </button>
      </form>
    </div>
  )
}

export default Signup;