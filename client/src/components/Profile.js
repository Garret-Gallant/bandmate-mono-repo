import { useState, useEffect } from 'react'

const Profile = ( { currentUser } ) => {

  // to get user profile by id
  const username = currentUser.username
  const instrument = currentUser.instrument
  const bio = currentUser.bio
  const fav_genre = currentUser.fav_genre
  const demos = currentUser.demos.length
  
  return(
    <div className='fixed w-screen left-10'>
      <button>Edit Profile</button>
      <div className='fixed text-left w-1/4 '>
        <p className='profile-category'>Username: </p>
        <p>{username}</p>
        <br />
        <p className='profile-category'>Instrument: </p>
        <p>{instrument}</p>
        <br />
        <p className='profile-category'>Bio: </p>
        <p className='break-words'>{bio}</p>
        <br />
        <p className='profile-category'>Favorite Genre: </p>
        <p>{fav_genre}</p>
        <br />
        <p className='profile-category'>Demo's Uploaded: </p>
        <p> {demos}</p>
      </div>
    </div>
  )
}

export default Profile;