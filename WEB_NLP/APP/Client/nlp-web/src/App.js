import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core';
import Avatar from '@material-ui/core';
import Login from './components/Login';
import {Paper} from '@material-ui/core';
document.body.style.backgroundColor = 'white'
function App() {
  return (
    <div className="App">
      <h1> Welcome to NLP Web</h1>
    <Login/>
    </div>
  );
}

export default App;
