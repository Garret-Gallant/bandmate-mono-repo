import { useEffect } from 'react'

const Profile = ( {currentUser} ) => {

  // to get user profile by id

  return(
    <>
    <p>Username: {currentUser.username}</p>
    <br/>
    <p>Bio: {currentUser.bio}</p>
    </>
  )
}

export default Profile;