import React from 'react';
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
    return (
        <Grid>
            <Paper elevation = {10}  style ={propStyle} >
                <Grid align = "center">
                     <Avatar style = {styleAvatar}>
                 H
                </Avatar></Grid>
            <h2>Sign in</h2>
            <TextField label = "Username" placeholder = "Enter your username" fullWidth required/> 
            <TextField label = "Password" placeholder = "Enter your password" type ="password" fullWidth required/> 
            <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button type ="submit"  color ='primary'  fullWidth variant ="contained" style= {btnStyle}>Sign in</Button>
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


