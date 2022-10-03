import NotFound from './NotFound'

const BrowseList = ( { user } ) => {

  const { id, username, avatar, fav_genre, instrument } = user

  let fav_user_demo = ""

  user.demos.forEach((demo) => { 
    if (demo.is_favorite === true) {
      fav_user_demo = demo.audio_file
    }
  })

  console.log(fav_user_demo)

  if (user.demos != 0) {
    return (
      <div className='user-demo-card w-fit relative inset-0'>
        <img className='w-10 h-10 rounded-full mt-4' src={avatar} /> 
          <div className='user-demo-container'>
            <p>{username}</p>
            <p>{instrument}</p>
            <audio controls>
              {/* Favorite demo should always be located at front of user demo array */}
              <source src={user.demos[0].audio_file} type='audio/mp3' />
            </audio>
            <p>{fav_genre}</p>
          </div>
      </div>
    )
  }
}

export default BrowseList;