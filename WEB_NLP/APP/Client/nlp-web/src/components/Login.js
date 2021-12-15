import React ,{useState} from 'react';
import {Grid , Paper , Avatar,TextField , Button} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
const Login = () => {
    const propStyle = {padding :20 , height :"70vh" , width :280 , margin :"20px auto"};
    const styleAvatar = {backgroundColor : 'green'};
    const preventDefault = (event) => event.preventDefault();
    const btnStyle ={margin :"8px 0 "};
    let [state , setState] = useState({
        name :"",
        pass:""

    });
    function updateInputPass(event){
        setState({
            ...state,
            pass :event.target.value
        });
    }

    function updateInputUser(event){
        setState({
            ...state,
            name :event.target.value
        });
    }

   
    let User_data = async () => {
        fetch('http://127.0.0.1:8000' , {
            method :'POST',
            headers :{
                'Content-Type' :'application/json'
            },
            body : JSON.stringify({'name' :state.name , 'pass' :state.pass}),
           
        }).then(
        data => {
            console.log(data)
        }).catch(error => console.log(error))
    }
    return (
        <Grid>
            <Paper elevation = {10}  style ={propStyle} >
                <Grid align = "center">
                     <Avatar style = {styleAvatar}>
                 H
                </Avatar></Grid>
            <h2>Sign in</h2>
            <TextField
            value ={state.name}
            label = "Username"
            placeholder = "Enter your username"
            fullWidth required
            onChange = {updateInputUser}
               /> 
            <TextField
            value ={state.pass}
            label = "Password"
            placeholder = "Enter your password"
            type ="password"
            fullWidth required
            onChange = {updateInputPass}
                /> 
            <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
     
    
      <Button 
          type ="submit"
        color ='primary' 
        onClick ={User_data}
        fullWidth variant ="contained"
        style= {btnStyle}

          >
              Sign in</Button>
              
            
      <Typography align= 'left'>
      <Link  href="#" onClick={preventDefault}>
    Forgot password?
  </Link>
      </Typography>

      <Typography align= 'left'> Do you have an account? 
      <Link  href="#" onClick={preventDefault}>
    Sign up
  </Link>
      </Typography>
                </Paper>

            </Grid>
    )
}

export default Login

