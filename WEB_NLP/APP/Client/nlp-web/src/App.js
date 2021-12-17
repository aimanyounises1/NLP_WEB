//import logo from './logo.svg';
import './App.css';
import React ,{useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core';
import Avatar from '@material-ui/core';
import Login from './components/Login';
import {Paper} from '@material-ui/core';
import  {Navigate , BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import  Homepage  from './components/Homepage';
import {useNavigate} from 'react-router-dom';

document.body.style.backgroundColor = 'white';
function App() {
  const [token , setToken] = useState('');
  let [authenticated , setAuthenticated] = useState(false);
  const history = useNavigate();

  const userLogin =(tok)=> {
    setToken(tok)
    setAuthenticated(true);
    //console.log(token); 
   // console.log(authenticated);
    history('/homepage');
    
  }
  //<Route exact path = '/homepage' element = {<Homepage/>} />
  return (
  
    <div className="App">
     <h1>Welcome to NLP WEB</h1> 
     <Routes>
     <Route exact path = '/'  element = {<Login userLogin = {userLogin}/>} />
     <Route  path = '/homepage' element = {
        console.log(authenticated),
       !authenticated? <Navigate to = '/' /> : <Homepage/>} />
     </Routes>
    </div>
 
  );  
}

export default App;
