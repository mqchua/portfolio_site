import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: "900px",
    width: "100%",
    padding: "3rem",
  },
  divCenter: {
    display:"flex",
    justifyContent: "center"
  },
  bgColor1: {
    backgroundColor: "#FFFAF2",
    boxShadow: "none",
    color: "#000000",
  },
}));


function App() {

  const classes = useStyles();

  return (
    <div className="App">

    <Router position="static">

      <div className= {classes.bgColor1}>
        <div className={classes.divCenter}>
          <Toolbar className={classes.container}>
              <Grid container justify="center" className={classes.outline}>
                <Button component={Link} to="/">Home</Button>
                <Button component={Link} to="/about">About</Button>
                <Button component={Link} to="/projects">Projects</Button>
              </Grid>
          </Toolbar>
        </div>
      </div>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/projects' component={ProjectsPage} />
      </Switch>

    </Router>

    <Footer/>

    </div>
  );
}

export default App;
