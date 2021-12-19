import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { useNavigate } from 'react-router-dom';
import '../static/Appbar.scss';

export default function Appbar() {
  const history = useNavigate();
  const Logout = () => {
    localStorage.removeItem('authToken');
    history('/');
  }
  return (
  
    <Box sx= {{ flexGrow: 1 }} >
    <AppBar >
      <Toolbar style ={{backgroundColor:'#bfd6f6'}} className="appbar" >
        <Typography className="typography"  >
          <mark className="mark">
        <span className="span"> Welcome to NLP WEB</span>
        </mark>
        </Typography> 
        <Button onClick={Logout} className="button" > Logout</Button>  
      </Toolbar>
    </AppBar>
  </Box>


  );
}
