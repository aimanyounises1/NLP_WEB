import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import MenuItem from "@material-ui/core/MenuItem";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
const Login = (props) => {
  const history = useNavigate();
  const propStyle = {
    padding: 20,
    height: "70vh",
    margin: "20px auto",
    width: 400,
    backgroundColor: "black",
    height: "100%",
  };
  const styleAvatar = { backgroundColor: "#007AF3" };
  const preventDefault = (event) => event.preventDefault();
  const btnStyle = {
    margin: "8px 0 ",
    border: "solid #007AF3",
    backgroundColor: "white",
    color: "#007AF3",
    fontWeight: "bold",
    borderRadius: "10em",
    fontSize: "1em",
  };
  const [state, setState] = useState({
    credentials: { username: "", password: "" },
  });

  function updateInputPass(event) {
    const cred = state.credentials;
    cred[event.target.name] = event.target.value;
    setState({ credentials: cred });
  }

  function updateInputUser(event) {
    const cred = state.credentials;
    cred[event.target.name] = event.target.value;
    console.log(event.target.value);
    setState({ credentials: cred });
  }
 // document.body.style.overflow = "hidden";

  let register = async () => {
    fetch("http://127.0.0.1:8000/backendapi/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("token = ", data.token);
      })
      .catch((error) => console.log(error));
  };

  let User_data = async () => {
    let response = await fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.credentials),
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      console.log(data.token);
      // props.userLogin(data.token);
      localStorage.setItem("authToken", JSON.stringify(data));
      history("/home");
      alert("You are logged in!");
    } else {
      alert("Please check your password or username");
    }
  };
  const Hide = () => {
    document.getElementById("parent").style.display = "none";
    props.exit(false);
    document.body.style.overflow = "unset";
  };
  return (
    <div id="parent">
      <Paper elevation={10} style={propStyle}>
        <div className="menu">
          <button className="btn__class" onClick={Hide}>
            {" "}
            &#x2573;
          </button>
        </div>
        <h1 align="center" className="header" text-color="#007AF3">
          Welcome to NLP Web
        </h1>
        <Grid align="center">
          <Avatar style={styleAvatar}>H</Avatar>
        </Grid>
        <h2>Sign in</h2>
        <TextField
          className="textfield"
          value={state.credentials.username}
          placeholder="Enter your username"
          label="Username"
          name="username"
          fullWidth
          required
          onChange={updateInputUser}
          inputProps={{ color: "gray" }}
          style={{
            backgroundColor: "gray ",
            marginBottom: "1em",
            borderRadius: "0.4em",
          }}
        />
        <TextField
          value={state.credentials.password}
          placeholder="Enter your password"
          type="password"
          fullWidth
          name="password"
          label="Password"
          required
          className="textfield"
          style={{
            backgroundColor: "gray",
            marginBottom: "1em",
            borderRadius: "0.4em",
          }}
          onChange={updateInputPass}
        />
        <FormControlLabel
          style={{
            margin: "0.3em",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
          }}
          control={
            <Checkbox
              name="checkBox"
              color="white"
              style={{
                backgroundColor: "gray",
                border: "0.1em solid",
                marginRight: "1em",
              }}
            />
          }
          label="Remember me"
        />

        <Button
          type="submit"
          color="primary"
          onClick={User_data}
          variant="outlined"
          fullWidth
          variant="contained"
          style={btnStyle}
        >
          Sign in
        </Button>

        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          style={btnStyle}
          onClick={register}
        >
          Register
        </Button>

        <Typography
          align="center"
          style={{ margin: "0.3em", color: "white", fontWeight: "bold" }}
        >
          <Link href="#" onClick={preventDefault}>
            Forgot password?
          </Link>
        </Typography>
        <Typography
          align="center"
          style={{ margin: "0.3em", color: "white", fontWeight: "bold" }}
        >
          {" "}
          Do you have an account?
          <Link href="#" onClick={preventDefault} style={{ margin: "1em" }}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
