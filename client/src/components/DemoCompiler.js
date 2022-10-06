import React from 'react'
import DemoManager from './DemoManager'
import { useState } from 'react'

const DemoCompiler = ( { currentUser, userDemos, handleDelete } ) => {
  const [demo, setDemo] = useState(null)
  const [demoName, setDemoName] = useState("")
  const [demoGenre, setDemoGenre] = useState("")
  
  const handleDemoSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', demoName)
    formData.append('genre', demoGenre)
    formData.append('audio_file', demo)
    formData.append('is_favorite?', false)
    formData.append('user_id', currentUser.id)

    fetch('/demos', {
      method: 'POST',
      body: formData
    })
  }

  return(
    <>
    {userDemos.map((demo) => (
      <DemoManager
        demo={demo} 
        currentUser={currentUser} 
        handleDelete={handleDelete}   
      />
    ))}

    <div className="fixed top-20 text-center w-1/5 left-20">
        <br />
        <form>
          <label className='relative text-xl outline-none'>Add a New Demo?</label>
          <br/>
          <br/>
          <label>
            MP3
            <input type="file" accept='audio/*' onChange={(e) => setDemo(e.target.files[0])}/>
          </label>
          <label>
            Name
            <input 
            type="text"
            className="text-black"
            onChange={(e) => setDemoName(e.target.value)}
            />
          </label>
          <label>
            Genre
            <input 
            type="text"
            className="text-black"
            onChange={(e) => setDemoGenre(e.target.value)}
            />
          </label>
          <button onClick={handleDemoSubmit}>Add Demo</button>
        </form>
      </div>
    </>
  )
}
export default DemoCompiler