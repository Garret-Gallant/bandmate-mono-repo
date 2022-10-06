import { useEffect, useState } from 'react'
import Modal from 'react-modal'

const BrowseList = ( { user, allDemos } ) => {

  const { username, avatar, instrument } = user
  const [showModal, setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState("")
  const [filteredDemos, setFilteredDemos] = useState([])

  useEffect(() => {
    setSelectedUser(user.id)
    setFilteredDemos(allDemos.filter(demo => demo.user.id === selectedUser))
  }, [showModal])

  const showUserDemos = () => {
    setShowModal(true)
  }

  if (user.demos != 0) {
    return (
      <div className='user-demo-card w-fit relative inset-0 top-10'>
        <img className='w-10 h-10 rounded-full mt-4' src={avatar} /> 
          <div className='user-demo-container'>
            <p>{username}</p>
            <p>Demo Title: {user.demos[0].name}</p>
            <p>{instrument}</p>
            <audio controls>
              <source src={user.demos[0].audio_file} type='audio/mp3' />
            </audio>
            <button onClick={showUserDemos}>View full {username} profile!</button>
          </div>
          <Modal isOpen={showModal} className='bg-hero relative w-1/3 rounded-full flex flex-col ml-auto mr-auto border-2 pl-40 pr-4 mb-6 p-14 top-40'>
            <>
            <p className='relative text-center right-20 font-bold'>{user.username.toUpperCase()}</p>
            <p className='relative text-center right-20 mb-5'>{user.bio}</p>
            {filteredDemos.map((demo) => 
              <div>
                <p>{demo.name}</p>
                <audio controls>
                  <source volume='0.5' src={demo.audio_file} type='audio/mp3' />
                </audio>
              </div>
            )}
            <button className='relative top-10 right-20' onClick={() => setShowModal(false)}>Return To Main Browser</button>
            </>
          </Modal>
      </div>
    )
  }
}

export default BrowseList;