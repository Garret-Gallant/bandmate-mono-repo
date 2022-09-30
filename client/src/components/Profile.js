import { useState, useEffect } from 'react'

const Profile = ( {currentUser} ) => {

  // to get user profile by id
  console.log(currentUser)
  const username = currentUser.username
  const instrument = currentUser.instrument
  const bio = currentUser.bio
  const fav_genre = currentUser.fav_genre
  const demos = currentUser.demos.length
  
  return(
    <>
    <p>Username: {username}</p>
    <br />
    <p>Instrument: {instrument}</p>
    <br />
    <p>Bio: {bio}</p>
    <br />
    <p>Favorite Genre: {fav_genre}</p>
    <br />
    <p>Demo's Uploaded: {demos}</p>
    </>
  )
}

export default Profile;