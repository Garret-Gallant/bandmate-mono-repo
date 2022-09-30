import { NavLink, Link } from "react-router-dom";
import { useEffect } from 'react' 

const NavBar = ({ currentUser, setCurrentUser }) => {

  const handleLogout = () => {
    fetch("logout", { method: "DELETE" });
    setCurrentUser(null);
    alert("you have signed out of your account!");
  };

  return (
    <>
      {currentUser ? (
        <div className='relative mb-16'>
          <div className='fixed top-0 w-screen bg-gradient-to-b from-teal-700 to-transparent h-16'>
            <NavLink to="/" className='nav-button'>Home</NavLink>
            <NavLink to="/browse" className='nav-button'>Browse Band Mates</NavLink>
            <NavLink to="/demo-manager" className='nav-button'>Demo Manager</NavLink>
            <NavLink to="/band-manager" className='nav-button'>Band Manager</NavLink>
            <NavLink to="/user-profile" className='nav-button'>Profile</NavLink>
            <NavLink to="/login" onClick={handleLogout} className='nav-button'>Logout</NavLink>
          </div>
        </div>
      ) : (
        <div className='relative mb-16'>
          <div>
            <button>
              <NavLink to="/">Home</NavLink>
            </button>
            <button>
              <NavLink to="/login">Login</NavLink>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
