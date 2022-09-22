import '../index.css';
import { Route, Routes } from 'react-router-dom';
import { useState} from 'react';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import Home from './Home';
import Browse from './Browse';
import DemoManager from './DemoManager';
import BandManager from './BandManager';
import Profile from './Profile';

function App() {
  const [createAccount, setCreateAccount] = useState(true)
  const [loggedIn, setLoggedIn] = useState(true)

  const toggleCreateAccount = () => {
    setCreateAccount(!createAccount)
  }
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/login' element={ createAccount ?
          <Login toggleCreateAccount={toggleCreateAccount} /> 
          : 
          <Signup toggleCreateAccount={toggleCreateAccount} /> 
        }
        />
        <Route path='/home' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/demo-manager' element={<DemoManager />} />
        <Route path='/band-manager' element={<BandManager />} />
        <Route path='/user-profile' element={<Profile />} />
      </Routes>
    </div>
    
  );
}

export default App;
