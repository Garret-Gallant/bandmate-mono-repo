import { useEffect, useState } from "react";

const DemoManager = ({ handleDelete, demo }) => {
  // const [demo, setDemo] = useState(null)
  // const [demoName, setDemoName] = useState("")
  // const [demoGenre, setDemoGenre] = useState("")
  const {name, audio_file, genre, id} = demo

  // const handleDemoSubmit = (e) => {
  //   e.preventDefault()

  //   const formData = new FormData()
  //   formData.append('name', demoName)
  //   formData.append('genre', demoGenre)
  //   formData.append('audio_file', demo)
  //   formData.append('is_favorite?', false)
  //   formData.append('user_id', currentUser.id)

  //   fetch('/demos', {
  //     method: 'POST',
  //     body: formData
  //   })
  // }

  return (
    <div>
      <div className='relative left-2/3 w-fit'>
          <div className='border m-4 p-4'>
            <div className=''> 
              <p>{name}</p>
              <audio controls>
                <source src={audio_file} type='audio/mp3'></source>
              </audio>
              <p>{genre}</p>
            </div>
            <button className='demo-button' onClick={() => handleDelete(id)}>{`Delete ${name}?`}</button>
          </div>
      </div>

      {/* NEW DEMO FORM */}
      {/* <div className="fixed top-20 text-center w-1/5 left-20">
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
            onChange={(e) => setDemoGenre(e.target.value)}/>
          </label>
          <button onClick={handleDemoSubmit}>Add Demo</button>
        </form>
      </div> */}
    </div>
  );
};

export default DemoManager;
