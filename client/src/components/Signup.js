import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = ({ toggleCreateAccount, onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const [genre, setGenre] = useState("");
  const [bio, setBio] = useState("");
  const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360'

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        name,
        instrument,
        genre,
        bio,
        avatar: defaultAvatar
      }),
    })
      .then((res) => res.json())
      .then((user) => onSignup(user));
    alert("Account created, you have been signed in to your new profile.");
  };

  return (
    <div>
      <form className='signup-form'>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Username: </label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Main Instrument: </label>
        <input
          type="text"
          onChange={(e) => setInstrument(e.target.value)}
        />
        <label>Favorite Genre: </label>
        <input
          type="text"
          onChange={(e) => setGenre(e.target.value)}
        />
        <label>Add Bio? (This can be added/updated later) </label>
        <textarea
          cols="10" rows="10"
          class='h-20 border-2 focus:ring rounded'
          name='paragraph-text'
          type="text"
          onChange={(e) => setBio(e.target.value)}
        />
        <NavLink to="/" className='nav-button right-2 text-center mb-4' onClick={handleSubmit}>Create Account</NavLink>
        <button className='landing-button' onClick={toggleCreateAccount}>Back to log in</button>
      </form>
    </div>
  );
};

export default Signup;
