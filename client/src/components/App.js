import '../index.css';
import { Route } from 'react-router-dom';
import { useState} from 'react'
import Login from './Login'
import Signup from './Signup'

function App() {

  const [createAccount, setCreateAccount] = useState(true)

  const toggleCreateAccount = () => {
    setCreateAccount(!createAccount)
  }
  
  return (
    <div>
      {createAccount ? <Login toggleCreateAccount={toggleCreateAccount} /> : <Signup toggleCreateAccount={toggleCreateAccount}/>}
    </div>
  );
}

export default App;
