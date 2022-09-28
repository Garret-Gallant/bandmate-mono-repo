const BrowseList = ( { user } ) => {
  console.log(user.demos)

  const { id, username, avatar, fav_genre, instrument } = user 

  return(
    <div className='user-demo-card w-fit'>
      <img className='w-10 h-610 rounded-full' src={avatar} /> 
        <div className='user-demo-container'>
          <p>{username}</p>
          <p>{instrument}</p>
          <audio controls>
            <source src='../assets/gerticus-test.mp3' type='audio/mp3' />
          </audio>
          <p>{fav_genre}</p>
        </div>
    </div>
  )
}

export default BrowseList;