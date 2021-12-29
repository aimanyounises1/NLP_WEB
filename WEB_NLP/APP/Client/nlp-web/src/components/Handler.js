import React, { useState, useEffect } from "react";
import "./Handler.scss";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { InputLabel, ListItemSecondaryAction } from "@material-ui/core";
import { FormControl, Box } from "@material-ui/core";
function Handler() {
  const [option, setOption] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState(null);
  const [sum_output, setSumOutput] = useState("");
  const [lanOp, setLanOp] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setOption(event.target.value);
  };
  useEffect(() => {
    sendInput();
  }, [option]);
  const sendInput = () => {
    if (option === 1) {
      setUrl("http://127.0.0.1:8000/backendapi/ner");
    } else if (option === 2) {
      setUrl("http://127.0.0.1:8000/backendapi/sum");
    } else {
    }
  };
  const sendData = async () => {
    sendInput();
    console.log(input);
    console.log(url);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: input, op: option, lan: lanOp }),
    });
    let data = await response.json();
    if (option === 2) {
      console.log(data[0].summary_text);
      setSumOutput(data[0].summary_text);
    } else {
      setOutput(data);
      data.forEach((entity) => {
        console.log(entity.score);
      });
      console.log(data);
    }
  };
  const handleOnChangeInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleChangeLan = (event) => {
    event.preventDefault();
    setLanOp(event.target.value);
  };

  useEffect(() => {}, [loading]);
  return (
    <section className="input__sec" id="input__scroll">
      <h2>
        NLP <span style={{ color: "#007AF3" }}>WEB</span>
      </h2>
      <Box sx={{ minWidth: 120, display: "flex" }}>
        <FormControl>
          <InputLabel
            style={{ fontWeight: "bold", color: "black" }}
            id="option-label"
          >
            Choose Option
          </InputLabel>
          <Select
            labelId="option-label"
            id="demo-simple-select"
            value={option}
            label="Choose option"
            style={{ width: "200px", margin: "1em 0 1em 0" }}
            onChange={handleChange}
          >
            <MenuItem value={1}>Named Entity Recognition</MenuItem>
            <MenuItem value={2}>Summarizer</MenuItem>
            <MenuItem value={3}>Mask Completion</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ marginLeft: "1em" }}>
          <InputLabel
            style={{ fontWeight: "bold", color: "black" }}
            id="language-label"
          >
            Choose Language
          </InputLabel>
          <Select
            labelId="language-label"
            id="demo-simple-select2"
            value={lanOp}
            label="Choose Language"
            style={{ width: "200px", margin: "1em 0 1em 0" }}
            onChange={handleChangeLan}
          >
            <MenuItem value={1}>English</MenuItem>
            <MenuItem value={2}>עברית</MenuItem>
            <MenuItem value={3}>العربيه</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        onChange={handleOnChangeInput}
      ></textarea>
      <input type="submit" onClick={sendData} value="Submit" />
      <div className="output-parent">
        <div className="output" style ={{direction : lanOp==3? "rtl" : "ltr"}}>
         
          {output && lanOp===1 &&<div style ={{width:"100%"}}> <h1><mark>Named Entity Recognition :</mark></h1></div>}
          {output && lanOp===2 && <h1><mark>זיהוי ישיות בשם : </mark></h1>}
          {output && lanOp===3 && <div style ={{width : "100%"}}><h1><mark>التعرف علي الكيانات المسماه</mark></h1></div>}


          {output &&
            output.map(function (item, i) {
              if (item.entity_group !== "O") {
                return (
                  <mark style={{ backgroundColor: item.COLOR}}>
                    {item.word}
                    <span key={i}>{item.entity_group}</span>
                  </mark>
                );
              } else {
                return <h3 style={{ margin: "0.25em" }}>{item.word}</h3>;
              }
            })
       }
            
          {sum_output &&<div><h1><mark>Summarizer :</mark></h1> <h3>{sum_output}</h3></div>}
        </div>
      </div>
    </section>
  );
  /*
   */
}

export default Handler;
