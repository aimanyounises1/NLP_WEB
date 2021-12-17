import React ,{useState} from 'react';
import {Grid , Paper , Avatar,TextField , Button} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {useNavigate} from 'react-router-dom';
const Login = (props) => {
    const propStyle = {padding :20 , height :"70vh" , width :600 , margin :"20px auto", backgroundColor :"white"};
    const styleAvatar = {backgroundColor : 'green'};
    const preventDefault = (event) => event.preventDefault();
    const btnStyle ={margin :"8px 0 "};
    const history = useNavigate();

    const [state , setState] = useState ({
        credentials :{username :'' , password :''}
    })
    
    function updateInputPass(event){
       const cred = state.credentials;
       cred[event.target.name] = event.target.value;
       setState({credentials : cred});
    }

    function updateInputUser(event){
       const cred = state.credentials;
       cred[event.target.name] = event.target.value;
       console.log(event.target.value);
       setState({credentials : cred});
    }

    
    let register = async () => {
        fetch('http://127.0.0.1:8000/backendapi/users/' , {
            method :'POST',
            headers :{
                'Content-Type' :'application/json'
            },
            body : JSON.stringify(state.credentials),
           
        }).then(data => data.json())
         .then(
         data => {
        console.log("token = ",data.token)
        }).catch(error => console.log(error))
    }

    let User_data = async () => {
       let response = await
       fetch('http://127.0.0.1:8000/auth/' , {
            method :'POST',
            headers :{
                'Content-Type' :'application/json'
            },
            body : JSON.stringify(state.credentials),
           
        })
        let data = await response.json()
            console.log(data)
            if (response.status === 200){
                console.log(data.token)
                props.userLogin(data.token);
                localStorage.setItem('authToken' , JSON.stringify(data));
             }else{
                 alert('Please check your password or username')
             }
        }
    
    return (
        <Grid>
            <Paper elevation = {10}  style ={propStyle} >
                <h1 >Welcome to NLP Web</h1>
                <Grid align = "center">
                     <Avatar style = {styleAvatar}>
                 H
                </Avatar></Grid>
            <h2>Sign in</h2>
            <TextField
            value ={state.credentials.username}
            label = "Username"
            name = "username"
            placeholder = "Enter your username"
            fullWidth required
            onChange = {updateInputUser}
               /> 
            <TextField
            value ={state.credentials.password}
            label = "Password"
            placeholder = "Enter your password"
            type ="password"
            name ="password"
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
        variant ='outlined'
        fullWidth
         variant ="contained"
        style= {btnStyle}

          >
              Sign in</Button>

    <Button
    type ="submit"
    color ='primary'
    fullWidth variant ="contained"
    style = {btnStyle}
    onClick = {register}
    >Register</Button>
              
            
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


