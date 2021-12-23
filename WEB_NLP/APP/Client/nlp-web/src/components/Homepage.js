import React, { useState } from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles, Button, Container } from "@material-ui/core";
import Appbar from "./Appbar";
import "../static/Homepage.css";
import "../static/Sidebar.css";
import "../static/Appbar.css";

const useStyles = makeStyles({
  field: {
    width: "100%",
    height: "200px",
    fontSize: 50,

  },
  btn: {
    color: "black",
    backgroundColor: "black",
    color: "white",
    width: "100%",
    fontSize: 17,
    fontWeight: "bold",
  },
  sidebar: {
    height: "90vh",
  },
});

export const Homepage = () => {
  const propStyle = {
    padding: 20,
    height: "90vh",
    width: "95%",
    backgroundColor: "#bfd6f6",
    position: "static",

  };

  const [state, setState] = useState({
    words: [],
  });
  const classes = useStyles();
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState("");
  let [variable, setVariable] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sentence) {
      console.log(sentence);
    }
  };

  let dataJson = async () => {
    let response = await fetch("http://127.0.0.1:8000/backendapi/sum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sentence),
    });
    let data = await response.json();
    setResult(data[0].summary_text);
    setVariable("Summarizer");
    console.log(result);
  };
  {
  }

  return (
    < div class="container" >
    <Appbar />  
    <div className="homepage" >
 
      <div className="homepage_in">
        <Paper elevation={10} style={propStyle}>
          <Grid >
            <h1>Welcome to the homepage</h1>
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                label="Please enter your text"
                variant="outlined"
                color="secondary"
                className={classes.field}
                required={true}
                rows={7}
                multiline
                inputProps={{ style: { fontSize: 20, fontWeight: "bold" , position: "static"} }}
                onChange={(e) => {
                  setSentence(e.target.value);
                }}
              />
              <Grid>
                <Button
                  className={classes.btn}
                  fontWeight="bold"
                  align="center"
                  variant="contained"
                  type="submit"
                  onClick={dataJson}
                  style={{position:"static"}}
                >
                  Submit
                </Button>
              </Grid>
              <h2>{result}</h2>
            </form>
          </Grid>
        </Paper>
      </div>
    </div>
    </div>
        
  );
};
export default Homepage;
