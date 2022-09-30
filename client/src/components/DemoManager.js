import { useEffect, useState } from "react";

const DemoManager = ({ currentUser }) => {
  const [demo, setDemo] = useState(null);
  const [demoName, setDemoName] = useState("")
  const [userDemoArr, setUserDemoArr] =useState([])

  // Populate user demos into stateful array
  const userDemos = currentUser.demos
  const userDemoList = userDemos.forEach((userDemo) => userDemoArr.push(userDemo))

  const onSongAdded = (e) => {
    // shovel file into state upon file upload
    const targetNewDemo = e.target.files[0];
    setDemo(targetNewDemo);
  };

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
                <input type="file" accept='.mp3, .wav' onChange={onSongAdded}/>
              </label>
            </form>
          </div>
    </div>
  );
};

export default DemoManager;
