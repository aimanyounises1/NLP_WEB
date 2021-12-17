import React,{useState} from 'react';
import { Grid, Paper, TextField  } from '@material-ui/core';
import {makeStyles , Button , Container} from '@material-ui/core';
const useStyles = makeStyles({
    field: {
        width: '90%',
         height: '200px' ,
          marginTop: '' ,
          fontSize: 50
    },
    btn :{
        color: 'black',
        backgroundColor: 'blue',
        marginLeft :'70px'
    }

});

export const Homepage = () => {
    const propStyle = {padding :20 , height :"70vh" ,width :"90%" , margin :"20px auto", backgroundColor :"#bfd6f6"};

    const [state , setState] = useState({
        words : []
    });
    const classes = useStyles();
    const [sentence , setSentence] = useState('');  
    const [result , setResult] = useState('');  
    let [variable , setVariable] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(sentence){
            console.log(sentence);
        }
    }

let dataJson = async() =>{
    let response = await fetch('http://127.0.0.1:8000/backendapi/sum',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sentence)
    })
     let data = await response.json();
   //  console.log(data[0].summary_text);
     setResult(data[0].summary_text);
     console.log(result)

   //  console.log(JSON.parse(data));
}


    return (
        <div>
         <Paper elevation = {10} style = {propStyle} >
             <Grid>
            <h1>Welcome to the homepage</h1>
            <form noValidate onSubmit={handleSubmit}>
            <TextField
            className={classes.field}
            label ="Please enter your text"
            variant = "outlined"
            color = "secondary"
            required={true}
            rows ={7}
            multiline
            inputProps={{style:{fontSize:20 , fontWeight : "bold"}}}
            onChange={(e) => {setSentence(e.target.value)}}
               />
               <Grid align="left">    
            <Button
            className={classes.btn}
          align ="center"
          variant ="contained"
          type ="submit"
          onClick={dataJson}
            >
                Submit 
            </Button>
            </Grid>
            <h2>{result}</h2>
            </form>
            </Grid>
            </Paper>
        </div>
    )
}
export default Homepage;