import { NavLink } from "react-router-dom";

const NavBar = ({ currentUser, setCurrentUser }) => {

  const handleLogout = () => {
    fetch("logout", { method: "DELETE" });
    setCurrentUser(null);
    alert("you have signed out of your account!");
  };

  return (
    <>
      {currentUser ? (
          <div className='relative top-0 pt-5 w-screen bg-gradient-to-b from-teal-700 to-transparent'>
            {/* <img className='relative w-80 h-30 mr-20' src='/nav-logo.png' /> */}
            <NavLink to="/" className='nav-button'>Home</NavLink>
            <NavLink to="/browse" className='nav-button'>Browse Band Mates</NavLink>
            <NavLink to="/demo-manager" className='nav-button'>Demo Manager</NavLink>
            {/* <NavLink to="/band-manager" className='nav-button'>Band Manager</NavLink> */}
            <NavLink to="/user-profile" className='nav-button'>Profile</NavLink>
            <NavLink to="/login" onClick={handleLogout} className='nav-button'>Logout</NavLink>
          </div>
      ) : (
          <div className='relative top-0 pt-5 w-screen bg-gradient-to-b from-teal-700 to-transparent'>
          {/* <img className='relative w-80 h-30 mr-20' src='/nav-logo.png' /> */}
              <NavLink className='nav-button' to="/">Home</NavLink>
              <NavLink className='nav-button' to="/login">Login</NavLink>
          </div>
      )}
    </>
  );
};

export default NavBar;
