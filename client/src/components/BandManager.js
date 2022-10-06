import { useState, useEffect } from 'react'

const BandManager = ( {currentUser} ) => {

  const [allBands, setAllBands] = useState([])

  useEffect(() => {
    fetch('/bands')
    .then((r) => r.json())
    .then(data => setAllBands(data))
  }, [])



  return(
    <div>
    {allBands.map((band) => (
    <>
        <p>{band.name}</p>
    </>
    ))}
      <>
        <p className='text-center top-10'>{currentUser.username}'s Band Manager</p>
        <p className='text-center top-10'>{currentUser.bands[0].band_name}</p>
      </>
    </div>
  )
}

export default BandManager;