import { useState } from "react";

const DemoManager = ({ currentUser }) => {
  
  const [demo, setDemo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userDemo = new FormData()
    const postReqObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: userDemo,
    };
    fetch('demos', postReqObj)
    .then(r => r.json())
    
  };

  const onSongAdded = (e) => {
    // set file in state
    const targetNewDemo = e.target.files[0];
    setDemo(targetNewDemo);
  };

  return (
    <>
      <p>allow user to upload new demos at the top</p>
      <p>Map all current user demos here</p>
      <br />
      <form>
        <label>Add New Demo</label>
        <br/>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          MP3
          <input type="file" accept='.mp3, .wav' onChange={onSongAdded}/>
        </label>
      </form>
    </>
  );
};

export default DemoManager;
