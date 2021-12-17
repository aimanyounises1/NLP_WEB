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
            >
                Submit 
            </Button>
            </Grid>
                </form>
        </div>
    )
}
export default Homepage;