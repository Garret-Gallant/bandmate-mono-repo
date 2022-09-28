import { useEffect, useState } from "react";
import BrowseList from './BrowseList'

const Browse = () => {
  const [users, setUsers] = useState([])
  // const [demos, setDemos] = useState([])

  // get all users
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

  // get all demos
  // useEffect(() => {
  //   fetch('demos')
  //   .then((r) =>{ if (r.ok) {
  //   r.json().then((demos) => setDemos(demos))
  //     }
  //     else {
  //       throw new Error("Unable to retrieve user demos");
  //     }
  //   })
  // }, [])

  return(
    <>
    {users.map((user) => (
      <BrowseList key={user.id} user={user} />
    ))}
    </>
  )
}

export default Browse;