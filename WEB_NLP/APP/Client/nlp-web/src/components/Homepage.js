import React,{useState} from 'react';
import { Grid, TextField  } from '@material-ui/core';
import {makeStyles , Button , Container} from '@material-ui/core';
const useStyles = makeStyles({
    field: {
        width: '90%',
         height: '200px' ,
          marginTop: '' ,
    },
    btn :{
        color: 'black',
        backgroundColor: 'blue',
        marginLeft :'70px'
    }

})
export const Homepage = () => {
    const classes = useStyles();
    const [sentence , setSentence] = useState('');    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(sentence){
            console.log(sentence);
        }
    }

let dataJson = async() =>{
    let response = await fetch('http://127.0.0.1:8000/backendapi/ner',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sentence)
    })
    let data = await response.json();
    console.log(data)
}

    return (
        <div>
            <h1>Welcome to the homepage</h1>
            <form noValidate onSubmit={handleSubmit}>
            <TextField
            className={classes.field}

            label ="Please enter your text"
            variant = "outlined"
            color = "secondary"
            required={true}
            rows ={6}
            multiline
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
                </form>
        </div>
    )
}
export default Homepage;