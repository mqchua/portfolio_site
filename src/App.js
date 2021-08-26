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
    boxShadow: "none",
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "2rem"
  },
  toolbar: {
    maxWidth: "1000px",
    width: "100%", //prevent child width from shrinking
    outline: "2px dashed blue"
  },
  divCenter: {
    display:"flex",
    justifyContent: "center"
  },

}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">

    <AppBar position="static" className={classes.root}>
      <div className={classes.divCenter}>
      <Toolbar className={classes.toolbar}>
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









    </div>
  );
}

export default App;
