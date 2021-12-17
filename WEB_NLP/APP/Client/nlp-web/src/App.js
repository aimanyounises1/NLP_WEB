//import logo from './logo.svg';
import './App.css';
import React ,{useState , useEffect} from 'react';
import Login from './components/Login';
import  {Navigate , BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import  Homepage  from './components/Homepage';
import {useNavigate} from 'react-router-dom';

document.body.style.backgroundColor = 'white';
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
     <h1>Welcome to NLP WEB</h1> 
     <Routes>
     <Route exact path = '/'  element = {<Login userLogin = {userLogin}/>} />
     <Route  exact path = '/homepage' element = {  
        console.log("in route ",JSON.parse(localStorage.getItem('authToken'))),
       !authenticated? <Navigate to="/" /> : <Homepage/>} />
     </Routes>
    </div>
 
  );  
}

export default App;
