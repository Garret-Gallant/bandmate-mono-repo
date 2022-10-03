import { useEffect, useState } from "react";

const DemoManager = ({ currentUser }) => {
  const [demo, setDemo] = useState(null);
  const [demoName, setDemoName] = useState("")
  
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

  console.log(currentUser)
  // Populate user demos into array
  let userDemos = currentUser.demos
  const userDemoArr = []
  userDemos.forEach((userDemo) => userDemoArr.push(userDemo))

  return (
    <div>
      <div className='relative left-2/3 mt-10'>
        {userDemoArr.map((demo) => {
          return (
          <>
            <p>{demo.name}</p>
            <audio controls>
              <source src={demo.audio} type='audio/mp3'></source>
            </audio>
            <p>{demo.total_plays}</p>
          </>
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
