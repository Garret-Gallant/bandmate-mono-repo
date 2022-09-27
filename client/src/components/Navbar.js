import { NavLink, Link } from 'react-router-dom';

const NavBar = ( {currentUser} ) => {
  
  const handleLogout = () => {
    fetch('logout', {method: 'DELETE'})
    alert('you have signed out of your account!')
  }

  return (
    <>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/browse">Browse Band Mates</NavLink>
      </button>
      <button>
        <NavLink to="/demo-manager">Demo Manager</NavLink>
      </button>
      <button>
        <NavLink to="/band-manager">Band Manager</NavLink>
      </button>
      <button>
        <NavLink to="/user-profile">Profile</NavLink>
      </button>
      <button>
      <NavLink to='/login' onClick={handleLogout}>Logout</NavLink>
      </button>
    </>
  )
}

export default NavBar;
