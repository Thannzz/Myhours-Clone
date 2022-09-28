import './App.css';
import  Navbar  from './Components/Navbar';
import Home from './Components/Home';

import Dashboard from './Components/Dashboard';

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Allroutes from './Components/Allroutes';


function App() {
  return (
    <div className="App">
       {/* <Navbar/> */}
     <Allroutes/>
    </div>
  );
}

export default App;
