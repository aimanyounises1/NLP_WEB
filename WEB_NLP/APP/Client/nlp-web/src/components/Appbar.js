import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/MenuItem';
import '../static/Appbar.css';
export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1}} marginLeft={2}  marginRight={3}>
      <AppBar position= "static">
        <Toolbar style ={{backgroundColor:'#bfd6f6'}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }} 
          >
            <MenuIcon />
          </IconButton>
          <Typography  className="typography" variant="6hx" sx={{ flexGrow: 1 }}>
            Welcome to NLP WEB
          </Typography>
          <Button className= "btn__appbar" style={{marginRight:"20px"}} > Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
