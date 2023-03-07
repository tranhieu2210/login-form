import { useSelector } from 'react-redux';
import {selectUser} from './feautures/userSlice'
import './App.css';
import Login from './Components/Login'
import Logout from './Components/Logout'

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {user ?
       <Logout /> : <Login />
      }
    </div>
  );
}

export default App;
