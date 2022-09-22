import { NavLink } from 'react-router-dom';

const NavBar = () => {
  

  return (
    <>
      <NavLink className="nav-button" to="/home">Home</NavLink>
      <NavLink className="nav-button" to="/browse">Browse Band Mates</NavLink>
      <NavLink className="nav-button" to="/demo-manager">Demo Manager</NavLink>
      <NavLink className="nav-button" to="/band-manager">Band Manager</NavLink>
      <NavLink className="nav-button" to="/user-profile">Profile</NavLink>
      <NavLink className="nav-button" to="/login">Logout</NavLink>
    </>
  )
}

export default NavBar;
