import "../index.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Home from "./Home";
import Browse from "./Browse";
import DemoManager from "./DemoManager";
import BandManager from "./BandManager";
import Profile from "./Profile";

function App() {
  const [createAccount, setCreateAccount] = useState(true);
  const [currentUser, setCurrentUser] = useState(null); 
  // Above is passed as onLogin, onSignup to respective components 

  const toggleCreateAccount = () => {
    setCreateAccount(!createAccount);
  };

  // fetch all existing user data
  // make a state dependent on current session

  useEffect(() => {
    fetch('me')
    .then ((res) => {
      if (res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])


  return (
    <div>
      <div>
        <Navbar currentUser={currentUser} />
      </div>
      <Routes>
        <Route
          path="/login"
          element={
            createAccount ? (
              <Login
                toggleCreateAccount={toggleCreateAccount}
                onLogin={setCurrentUser}
              />
            ) : (
              <Signup
                toggleCreateAccount={toggleCreateAccount}
                onSignup={setCurrentUser}
              />
            )
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/demo-manager" element={<DemoManager />} />
        <Route path="/band-manager" element={<BandManager />} />
        <Route path="/user-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
