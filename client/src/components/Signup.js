import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = ({ toggleCreateAccount, onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [instrument, setInstrument] = useState("");
  const [genre, setGenre] = useState("");
  const [bio, setBio] = useState("");

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
      }),
    })
      .then((res) => res.json())
      .then((user) => onSignup(user));
    alert("Account created, you have been signed in to your new profile.");
  };

  console.log(bio)

  return (
    <div>
      <form className='signup-form'>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Main Instrument: </label>
        <input
          type="text"
          value={instrument}
          onChange={(e) => setInstrument(e.target.value)}
        />
        <label>Favorite Genre: </label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label>Add Bio? (This can be added/updated later) </label>
        <textarea
          cols="10" rows="10"
          class='h-20 border-2 focus:ring rounded'
          name='paragraph-text'
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button className='landing-button' onClick={handleSubmit}>Create Account</button>
        <button className='landing-button' onClick={toggleCreateAccount}>Back to log in</button>
      </form>
    </div>
  );
};

export default Signup;
