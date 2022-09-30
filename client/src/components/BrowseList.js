const BrowseList = ( { user } ) => {

  const { id, username, avatar, fav_genre, instrument, demos } = user
  let demoArr = []
  const demoList = demos.forEach((demo) => demoArr.push(demo))

  return(
    <div className='user-demo-card w-fit relative inset-0'>
      <img className='w-10 h-10 rounded-full mt-4' src={avatar} /> 
        <div className='user-demo-container'>
          <p>{username}</p>
          <p>{instrument}</p>
          <audio controls>
            <source src={user.demos[0]} type='audio/mp3' />
          </audio>
          <p>{fav_genre}</p>
        </div>
    </div>
  )
}

export default BrowseList;