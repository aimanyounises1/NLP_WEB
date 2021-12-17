//import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
import Login from './components/Login';
import  {Navigate  , Route , Routes} from 'react-router-dom';
import  Homepage  from './components/Homepage';
import {useNavigate} from 'react-router-dom';
document.body.style.background = "#bfd6f6";

function App() {
  const history =  useNavigate()
  const [token , setToken] = useState(localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')) : null);
  let [authenticated , setAuthenticated] = useState(localStorage.getItem('authToken')? true : false);
  setTimeout(function(){localStorage.removeItem('authToken');}, 120 * 1000);
  const userLogin = (tok) =>{
    setToken(tok);
    setAuthenticated(authenticated => true);
    history('/homepage')
  }
  return (
    <div className="App">
     <Routes>
     <Route exact path = '/'  element = {<Login userLogin = {userLogin}/>} />
     <Route  exact path = '/homepage' element = {  
       !authenticated? <Navigate to="/" /> : <Homepage/>} />
     </Routes>
    </div>
 
  );  
}

export default App;
