import logo from './logo.svg';
import './App.css';
import react from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core';
import Avatar from '@material-ui/core';
import SignIn from './components/login';
document.body.style.backgroundColor = 'white'
function App() {
  return (
    <div className="App">
    <h1> Welcome to NLP Web Application</h1>
    <SignIn/>
    </div>
  );
}

export default App;
