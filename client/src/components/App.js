import "../index.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Home from "./Home";
import Browse from "./Browse";
import DemoCompiler from "./DemoCompiler";
import BandManager from "./BandManager";
import Profile from "./Profile";
import Footer from "./Footer";

function App() {
  const [createAccount, setCreateAccount] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [allDemos, setAllDemos] = useState([]);
  const userDemos = allDemos.filter((demo) => demo.user.id === currentUser.id);

  const toggleCreateAccount = () => {
    setCreateAccount(!createAccount);
  };

  console.log(currentUser);

  // fetch all existing user data
  // make a state dependent on current session

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/demos").then((res) => {
      if (res.ok) {
        res.json().then((data) => setAllDemos(data));
      }
    });
  }, []);

  const handleDelete = (id) => {
    fetch(`/demos/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => setAllDemos(data));
  };

  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
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
        <Route
          path="/browse"
          element={<Browse allDemos={allDemos} handleDelete={handleDelete} />}
        />
        <Route
          path="/demo-manager"
          element={
            <DemoCompiler
              currentUser={currentUser}
              userDemos={userDemos}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/band-manager"
          element={<BandManager currentUser={currentUser} />}
        />
        <Route
          path="/user-profile"
          element={<Profile currentUser={currentUser} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
