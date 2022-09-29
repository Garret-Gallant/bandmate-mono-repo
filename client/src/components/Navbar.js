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
        <div>
          <button>
            <NavLink to="/">Home</NavLink>
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
            <NavLink to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          </button>
        </div>
      ) : (
        <div>
          <button>
            <NavLink to="/">Home</NavLink>
          </button>
          <button>
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
