import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Container, Paper, Slide } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

import profilePic from'./images/pp.jpg';

const useStyles = makeStyles(theme => ({
  root: {

  },
  container: {
    maxWidth: "900px",
    width: "100%", //prevent child width from shrinking
    // outline: "2px dashed blue",
    padding: "3rem",
  },
  divCenter: {
    display:"flex",
    justifyContent: "center"
  },
  alignLeft: {
    // outline: "2px dashed blue",
    textAlign: "left"
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
  },
  profilePic: {
    width: "100%",
    maxWidth: "220px",
    maxHeight: "220px",
  },
  dualcolTest: {
        marginBottom: "10px",
        background: "linear-gradient(to right, green 0%, green 80%, red 80%, red 100%)"
  },

  wrapper: {
    display: "flex",
    marginBottom: "20px",
  },

  leftWrapper: {
    flex: "0 0 30%",
    textAlign: "left",
    alignSelf: "flex-end", // align bottom
  },

  rightWrapper: {
    flex: "1",
    textAlign: "left",
  },


}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">

    <AppBar position="static" className={classes.bgColor1}>
    {/*<br></br>*/}
      <div className={classes.divCenter}>
        <Toolbar className={classes.container}>
          <Typography>Portfolio</Typography>
            <Grid container justify="flex-end">
              <Button>Home</Button>
              <Button>About</Button>
              <Button>Skills</Button>
              <Button>Contact</Button>
            </Grid>
        </Toolbar>
      </div>
    </AppBar>

    <div className= {classes.bgColor1}>
      <div className={classes.divCenter}>
        <div className={classes.container} >
          <h1 className={classes.alignLeft} >Hi, It's John,</h1>
          <h5 className={classes.alignLeft} >Software Engineer from Singapore</h5>
        </div>
      </div>
    </div>


    <div className= {classes.bgColor2}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h4 className={classes.alignLeft} >About me</h4>
          <br></br>

          <p className={classes.alignLeft}><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc in sapien ultrices interdum.
          Mauris sed lectus sem. Donec ligula libero,tempor vestibulum leo at, accumsan semper risus. Sed condimentum mauris eros, in bibendum purus
          gravida et. Vestibulum imperdiet sollicitudin odio ac ultricies. Fusce porta quis quam quis sollicitudin.</small></p>

          <br></br>

          <p className={classes.alignLeft}><small>Ut lacinia id lorem at cursus. Morbi efficitur arcu in tortor aliquam, ac porta eros hendrerit.
          Sed felis enim, gravida et urna vel, suscipit posuere mi. Nulla facilisis risus et sem lacinia, in tincidunt nunc volutpat. Vivamus
          sit amet mattis elit, in interdum tortor. Quisque nulla enim, aliquet eget bibendum id, tincidunt.</small></p>

        </div>
      </div>
    </div>


    <div className= {classes.bgColor1}>
      <div className={classes.divCenter}>
        <div className={classes.container}>

          <h4 className={classes.alignLeft}>Skills</h4>
          <br></br>

        <Grid container spacing={3}>
          <Grid item xs={4} className={classes.alignLeft} >
              <img className={classes.profilePic} src={profilePic} alt="profilePic" />
          </Grid>
          <Grid item xs={8}>
{/*
              <h5 className={classes.alignLeft} >Frontend</h5>
              <h5 className={classes.alignLeft} >Tools</h5>
              <h5 className={classes.alignLeft} >Backend</h5>
              <h5 className={classes.alignLeft} >Tools</h5>*/}


              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Profile</h5>
                  <p className={classes.RightWrapper}><small>Undergraduate, Software Engineer</small></p>
              </div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>


              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Frontend</h5>
                  <p className={classes.RightWrapper}><small>ReactJS, VueJS, WordPress</small></p>
              </div>

              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Backend</h5>
                  <p className={classes.RightWrapper}><small>Ruby, PHP, Django, Flask, MySQL</small></p>
              </div>

              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Tools</h5>
                  <p className={classes.RightWrapper}><small>Git, Jira, Asana</small></p>
              </div>




          </Grid>

          {/*<Grid item xs={6}>*/}

              {/*<p className={classes.dualcolTest}> This div has a green and red background </p>*/}
{/*              <p className={classes.alignLeft}><small>Ruby, PHP, Django</small></p>
              <p className={classes.alignLeft}><small>ReactJS, VueJS</small></p>

              <p className={classes.alignLeft}><small>Ruby, PHP, Django</small></p>
              <p className={classes.alignLeft}><small>Ruby, PHP, Django</small></p>
*/}
          {/*</Grid>*/}
        </Grid>

        </div>
      </div>
    </div>






    <div className= {classes.bgColor2}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h4 className={classes.alignLeft} >Portfolio</h4>
          <br></br>

          <p className={classes.alignLeft}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc in sapien ultrices interdum. Mauris sed lectus sem. Donec ligula libero, tempor vestibulum leo at, accumsan semper risus. Sed condimentum mauris eros, in bibendum purus gravida et. Vestibulum imperdiet sollicitudin odio ac ultricies. Fusce porta quis quam quis sollicitudin.</p>

          <br></br>

          <p className={classes.alignLeft}>Ut lacinia id lorem at cursus. Morbi efficitur arcu in tortor aliquam, ac porta eros hendrerit. Sed felis enim, gravida et urna vel, suscipit posuere mi. Nulla facilisis risus et sem lacinia, in tincidunt nunc volutpat. Vivamus sit amet mattis elit, in interdum tortor. Quisque nulla enim, aliquet eget bibendum id, tincidunt.</p>

        </div>
      </div>
    </div>


    <div className= {classes.bgColor1}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h4 className={classes.alignLeft}>Get in Touch</h4>
          <br></br>

        <Grid container spacing={3}>
          <Grid item xs={4} className={classes.alignLeft} >



          </Grid>

          <Grid item xs={4} className={classes.alignLeft}>

          </Grid>

          <Grid item xs={4} className={classes.alignLeft}>

          </Grid>

        </Grid>

        </div>
      </div>
    </div>









    </div>
  );
}

export default App;
