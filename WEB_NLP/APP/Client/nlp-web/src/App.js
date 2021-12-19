import './App.css';
import React ,{useState} from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import  {Navigate  , Route , Routes} from 'react-router-dom';
import  Homepage  from './components/Homepage';
import Home from './components/Home';
import {useNavigate} from 'react-router-dom';
import Appbar from './components/Appbar';
import './static/Homepage.css';

document.body.style.backgroundColor ="black";
function App() {
  const history =  useNavigate()
  const [token , setToken] = useState(localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')) : null);
  let [authenticated , setAuthenticated] = useState(localStorage.getItem('authToken')? true : false);
  setTimeout(function(){localStorage.removeItem('authToken');}, 120 * 60 * 1000);
  const userLogin = (tok) =>{
    setToken(tok);
    setAuthenticated(authenticated => true);
    history('/home')
  }
  return (
    
      <Routes>
       <Route exact path = '/'  element = {<Login userLogin = {userLogin}/>} />
       <Route exact path = '/home' element = {<Home />} /> 
       <Route  exact path = '/homepage' element = {  
       !authenticated? <Navigate to="/" /> :  <Homepage />} />
     </Routes>


   
  );  
}

export default App;
