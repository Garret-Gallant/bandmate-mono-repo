import { useEffect, useState } from "react";
import BrowseList from './BrowseList'

const Browse = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('users')
    .then((r) =>{ if (r.ok) {
    r.json().then((users) => setUsers(users))
      }
      else {
        throw new Error("Unable to retrieve users");
      }
    })
  }, [])

  return(
    <>
    {users.map((user) => (
      <BrowseList 
        key={user.id} 
        user={user}  
      />
    ))}
    </>
  )
}

export default Browse;