import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Home from "./components/Home";
import { useNavigate } from "react-router-dom";
import "./static/Homepage.css";
document.body.style.backgroundColor = "black";
document.title = "NLP WEB"
function App() {
  const history = useNavigate();
  const [token, setToken] = useState(
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  let [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authToken") ? true : false
  );
  setTimeout(function () {
    localStorage.removeItem("authToken");
  }, 120 * 60 * 1000);
  const userLogin = (tok) => {
    setToken(tok);
    setAuthenticated((authenticated) => true);
    console.log("homepage");
    //history('/homepage')
  };
  return (
    <>
   
    <Routes>
      <Route exact path="/" element={<Login userLogin={userLogin} />} />
      <Route exact path="/home" element={<Home />} />
      <Route
        exact
        path="/homepage"
        element={!authenticated ? <Navigate to="/" /> : <Homepage />}
      />
      <Route
        exact
        path="/signin"
        element={<Login userLogin={userLogin} />}
      ></Route>
    </Routes>
    </>
  );
}

export default App;
