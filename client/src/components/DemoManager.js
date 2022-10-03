import { useState } from "react";

const DemoManager = ({ currentUser }) => {
  const [demo, setDemo] = useState(null)
  const [demoName, setDemoName] = useState("")
  console.log(demo)

  const handleDemoSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', demoName)
    formData.append('audio_file', demo)
    formData.append('total_plays', 0)
    formData.append('is_favorite?', true)
    formData.append('user_id', currentUser.id)

    fetch('/demos', {
      method: 'POST',
      body: formData
    })
  }

  // Populate user demos into array
  let userDemos = currentUser.demos
  const userDemoArr = []
  userDemos.forEach((userDemo) => userDemoArr.push(userDemo))
  
  console.log(userDemoArr)

  const handleDelete = () => {
    fetch(`/demos/${true}`, {
      method: "DELETE"
    })
  }

  return (
    <div>
      <div className='absolute left-2/3'>
        {userDemoArr.map((demo) => {
          return (
          <div className='border m-4 p-4'>
            <div className=''> 
              <p>{demo.name}</p>
              <audio controls>
                <source src={demo.audio_file} type='audio/mp3'></source>
              </audio>
              <p>{demo.total_plays}</p>
            </div>
            <button className='demo-button' onClick={handleDelete}>{`Delete ${demo.name}?`}</button>
          </div>
        )
        })}
      </div>

      {/* FORM BELOW */}
      <div className="fixed top-20 text-center w-1/5 left-20">
        <br />
        <form>
          <label className='relative text-xl outline-none'>Add a New Demo</label>
          <br/>
          <br/>
          <label>
            Name
            <input 
            type="text"
            className='text-black'
            onChange={(e) => setDemoName(e.target.value)}
            />
          </label>
          <label>
            MP3
            <input type="file" accept='audio/*' onChange={(e) => setDemo(e.target.files[0])}/>
          </label>
          <button onClick={handleDemoSubmit}>Add Demo</button>
        </form>
      </div>
    </div>
  );
};

export default DemoManager;
