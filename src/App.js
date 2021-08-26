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
import code from'./images/code.png';

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
    flex: "0 0 20%",
    textAlign: "left",
    alignSelf: "flex-end", // align bottom
  },

  rightWrapper: {
    flex: "1",
    textAlign: "left",
  },

  introText: {
    maxWidth: "500px",
    textAlign: "left",
  },

  marginTop: {
    marginTop: "26px",
  }


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
          <p className={classes.alignLeft} ><small>Hi, my name is</small></p>
          <h1 className={classes.alignLeft} >John Doe.</h1>
          <p className={classes.introText} ><small>I'm an undergraduate specializing in Software Engineering. My passion lies
          in designing seamless web pages, and I enjoy collaborating with people.</small></p>
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
{/*          <Grid item xs={4} className={classes.alignLeft} >
              <img className={classes.code} src={code} alt="profilePic" />
          </Grid>*/}
          <Grid item xs={12}>


              <div className={classes.marginTop}></div>

              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Languages</h5>
                  <p className={classes.RightWrapper}><small>Java, Javasript, Python, PHP, Ruby, R</small></p>
              </div>


              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Frontend</h5>
                  <p className={classes.RightWrapper}><small>ReactJS, VueJS, WordPress</small></p>
              </div>

              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Backend</h5>
                  <p className={classes.RightWrapper}><small>Django, Flask, MySQL, Postgres</small></p>
              </div>

              <div className={classes.wrapper}>
                  <h5 className={classes.leftWrapper}>Tools</h5>
                  <p className={classes.RightWrapper}><small>Git, Jira, Asana</small></p>
              </div>

          </Grid>

        </Grid>

        </div>
      </div>
    </div>






    <div className= {classes.bgColor2}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h4 className={classes.alignLeft} >Projects</h4>
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
          <Grid item xs={3} className={classes.alignLeft} >
              <p className={classes.alignLeft}><small>LinkedIn</small></p>
              <p className={classes.alignLeft}><small>Twitter</small></p>
              <p className={classes.alignLeft}><small>Instagram</small></p>
              <p className={classes.alignLeft}><small>Github</small></p>
          </Grid>

          <Grid item xs={3} className={classes.alignLeft}>

            <p className={classes.alignLeft}><small>Email:</small></p>
            <p className={classes.alignLeft}><small>johndoe@gmail.com</small></p>

          </Grid>

          <Grid item xs={6} className={classes.alignLeft}>

          </Grid>

        </Grid>

        </div>
      </div>
    </div>









    </div>
  );
}

export default App;
