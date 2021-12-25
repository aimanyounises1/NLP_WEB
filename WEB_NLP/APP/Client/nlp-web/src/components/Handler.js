import React, { useState,useEffect } from "react";
import "./Handler.scss";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { InputLabel, ListItemSecondaryAction } from "@material-ui/core";
import { FormControl, Box } from "@material-ui/core";
function Handler() {
  const [option, setOption] = useState("");
  const [input , setInput] = useState(""); 
  const [loading , setLoading] = useState(false); 
  const [url , setUrl] = useState("");
  const [output , setOutput] = useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setOption(event.target.value);
  };
useEffect (() => {
  sendInput();
},[option]);
  const sendInput =  () => {
      if(option === 1){
        setUrl("http://127.0.0.1:8000/backendapi/ner");
      }else if(option === 2){
        setUrl("http://127.0.0.1:8000/backendapi/sum");
      }else{
        
      }
  }
  const sendData = async () => {
     sendInput();
     console.log(input);
    console.log(url);
    let response = await fetch(url , {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    });
    let data  = await response.json();
    if(option === 2){
      console.log(data[0].summary_text);
      setOutput(data[0].summary_text);
    }else{
      setOutput(data);
      data.forEach(entity => {
        console.log(entity.score);
      })
      console.log(data);
    }
  
  }
  const handleOnChangeInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  }

useEffect(() => {
    
},[loading])
  return (
    <section className="input__sec" id="input__scroll">
      <h2>
        NLP <span style={{ color: "#007AF3" }}>WEB</span>
      </h2>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth >
          <InputLabel
            style={{ fontWeight: "bold", color: "black" }}
            id="option-label"
          >
            Choose option
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
      </Box>
      
        <textarea name="message" id="message" cols="30" rows="10" onChange={handleOnChangeInput}></textarea>
        <input type="submit" onClick={sendData} value="Submit" />
        <div className="output-parent">
        <div className= "output">
        {output&& output.map(function(item , i ){
            if(item.entity !== "O"){
              return <mark style={{padding: '0.45em 0.6em' ,margin: '0.25em', lineHeight: '1', borderRadius: '0.35em' }}>
                {item.word}<span key ={i} >
                  {item.entity} 
                  </span>
                  </mark>
          
            
            }else {
              return <h3 style ={{margin: '0.25em'}}>{item.word}</h3>
            }
        })}
        </div>
        </div>
    </section>
  );
  /*
   */
}

export default Handler;
