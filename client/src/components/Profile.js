import { useState, useEffect } from 'react'

const Profile = ( { currentUser } ) => {

  // to get user profile by id
  const [username, setUsername] = useState("")
  const [instrument, setInstrument] = useState("")
  const [bio, setBio] = useState("")
  const [favGenre, setFavGenre] = useState("")
  const [demosUploaded, setDemosUploaded] = useState("")
  const [editForm, setEditForm] = useState(true)

  const currentUsername = currentUser.username
  const currentInstrument = currentUser.instrument
  const currentBio = currentUser.bio
  const currentFavGenre = currentUser.fav_genre
  const currentDemosUploaded = currentUser.demos.length

  const toggleEditForm = () => {
    setEditForm(!editForm)
  }

  const updateProfileDetails = () => {
    fetch('/user/:id')
    // POST request to update profile
  }
  
  
  return(
    <div className='fixed w-screen left-10'>
      <button onClick={toggleEditForm}>Edit Profile</button>
      {
      editForm ? 
      <div className='fixed text-left w-1/4 '>
        <p className='profile-category'>Username: </p>
        <p>{currentUsername}</p>
        <br />
        <p className='profile-category'>Instrument: </p>
        <p>{currentInstrument}</p>
        <br />
        <p className='profile-category'>Bio: </p>
        <p className='break-words'>{currentBio}</p>
        <br />
        <p className='profile-category'>Favorite Genre: </p>
        <p>{currentFavGenre}</p>
        <br />
        <p className='profile-category'>Demo's Uploaded: </p>
        <p> {currentDemosUploaded}</p>
      </div>
      : 
      <div className='fixed text-left w-1/4 '>
      <form>
        <label>Username</label>
          <input
          className='profile-category'
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          />
        <label>Instrument (feel free to add multiple)</label>
          <input 
          className='profile-category' 
          type='text'
          onChange={(e) => setInstrument(e.target.value)}
          />
        <label>Bio</label>
        <br />
          <textarea 
          cols="10" rows="10"
          className='h-20 border-2 focus:ring rounded w-3/4'
          type='text'
          onChange={(e) => setBio(e.target.value)}
          />
        <br />
        <label>Favorite Genre</label>
          <input 
          className='profile-category' 
          type='text'
          onChange={(e) => setFavGenre(e.target.value)}
          />
      </form>
      <button onclick={updateProfileDetails}>Update!!</button>
      </div>
      }
    </div>
  )
}

export default Profile;