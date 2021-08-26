import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
  container: {
    maxWidth: "1000px",
    width: "100%", //prevent child width from shrinking
    outline: "2px dashed blue",
    padding: "3rem",
  },
  divCenter: {
    display:"flex",
    justifyContent: "center"
  },
  myInfo: {
    maxWidth: "1000px",
    width: "100%",
    outline: "2px dashed pink",
    float: "center"
  },
  outline: {
    outline: "2px dashed blue",
  },
  bgColor1: {
    backgroundColor: "#FFFAF2",
    boxShadow: "none",
    color: "#000000",
  },
  bgColor2: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    color: "#000000",
  }

}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">

    <AppBar position="static" className={classes.bgColor1}>
      <div className={classes.divCenter}>
        <Toolbar className={classes.container}>
          <Typography color="inherit">Portfolio</Typography>
            <Grid container justify="flex-end">
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Skills</Button>
              <Button color="inherit">Contact</Button>
            </Grid>
        </Toolbar>
      </div>
    </AppBar>

    <div className= {classes.bgColor1}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h1 className={classes.outline} >Hi, It's John,</h1>
          <h5 className={classes.outline} >Software Engineer from Singapore</h5>

        </div>
      </div>
    </div>


    <div className= {classes.bgColor2}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h4 className={classes.outline} >About me</h4>
          <br></br>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc in sapien ultrices interdum. Mauris sed lectus sem. Donec ligula libero, tempor vestibulum leo at, accumsan semper risus. Sed condimentum mauris eros, in bibendum purus gravida et. Vestibulum imperdiet sollicitudin odio ac ultricies. Fusce porta quis quam quis sollicitudin.</p>

          <br></br>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia id lorem at cursus. Morbi efficitur arcu in tortor aliquam, ac porta eros hendrerit. Sed felis enim, gravida et urna vel, suscipit posuere mi. Nulla facilisis risus et sem lacinia, in tincidunt nunc volutpat. Vivamus sit amet mattis elit, in interdum tortor. Quisque nulla enim, aliquet eget bibendum id, tincidunt.</p>

        </div>
      </div>
    </div>








    </div>
  );
}

export default App;
