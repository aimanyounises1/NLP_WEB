import React from "react";
import "../static/Sidebar.css";
import { Avatar, Grid, Paper } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar"> 
      <Paper 
       className="sidebar_top"
        elevation={10}
        style={{ backgroundColor: "#bfd6f6", height: "94vh" }}
      >
        <img
          src="https://img.freepik.com/free-vector/
             abstract-banner-background-with-red-shapes_1361-3348.jpg?size=626&ext=jpg&ga=GA1.2.1518270500.1634428800"
        ></img>
        <Avatar style={{position:"static"}}></Avatar>
        <h3 >Aiman Younis</h3>
        <button>Click me</button>
      </Paper>
    </div>
    
  );
}

export default Sidebar;
