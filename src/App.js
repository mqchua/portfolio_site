import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';

import { Grid, Container, Paper, Slide, Divider} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import profilePic from'./images/pp.jpg';
import code from'./images/code.png';

import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: "900px",
    width: "100%", //prevent child width from shrinking
    // outline: "2px dashed blue",
    padding: "3rem",
  },
  headerSection: {
    maxWidth: "900px",
    width: "100%", //prevent child width from shrinking
    // outline: "2px dashed blue",
    padding: "3rem",
    paddingBottom: "150px",
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
  introText: {
    maxWidth: "360px",
    textAlign:"center",
  },
  socials: {
    display:"flex",
    justifyContent:"space-between",
    alignSelf: "center",
    width: "100px",
    // outline: "2px dashed blue",
  },
  largeIcon: {
    transform: "scale(2.0)",
  },
  outline: {
    // outline: "2px dashed blue",
    // maxWidth: "500px"
  },

  myCustomButton: {
    transition: "0.3s",
    "&:hover": {
      color: "#FFAA98",
    }
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
            <Grid container justify="center" className={classes.outline}>
              <Button>Home</Button>
              <Button>About</Button>
              <Button>Skills</Button>
              <Button>Contact</Button>
            </Grid>
        </Toolbar>
      </div>
    </AppBar>

    <IntroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>

    <div className= {classes.bgColor1}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h4>Get in Touch</h4>

          <br></br>

          <div className={classes.divCenter}>
            <div className={classes.socials}>
                <TwitterIcon className={classes.myCustomButton} onClick={event =>  window.open('https://twitter.com')} />
                <InstagramIcon className={classes.myCustomButton} onClick={event =>  window.open('https://instagram.com')} />
                <LinkedInIcon className={classes.myCustomButton} onClick={event =>  window.open('https://linkedin.com')} />
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
