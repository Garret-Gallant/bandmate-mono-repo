import NotFound from './NotFound'

const BrowseList = ( { user, allDemos } ) => {

  const { id, username, avatar, fav_genre, instrument } = user

  if (user.demos != 0) {
    return (
      <div className='user-demo-card w-fit relative inset-0'>
        <img className='w-10 h-10 rounded-full mt-4' src={avatar} /> 
          <div className='user-demo-container'>
            <p>{username}</p>
            <p>Demo Title: {user.demos[0].name}</p>
            <audio controls>
              {/* Favorite demo should always be located at front of user demo array */}
              <source src={user.demos[0].audio_file} type='audio/mp3' />
            </audio>
            <p>Demo Genre: {user.demos[0].genre}</p>
          </div>
      </div>
    )
  }
}

export default BrowseList;