const DemoManager = ({ handleDelete, demo }) => {

  const {name, audio_file, genre, id} = demo

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
    </div>
  );
};

export default DemoManager;
