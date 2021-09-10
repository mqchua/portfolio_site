import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';



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


export default function App() {

  const classes = useStyles();

  return (
    <div className="App">

      <Router position="static">

        <div className= {classes.bgColor1}>
          <div className={classes.divCenter}>
            <div className={classes.container}>
                <Grid container justify="center" className={classes.outline}>
                  <Button component={Link} to="/">Home</Button>
                  <Button component={Link} to="/about">About</Button>
                  <Button component={Link} to="/projects">Projects</Button>
                  <Button component={Link} to="/contact">Contact</Button>
                </Grid>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>

      </Router>

      <Footer/>

    </div>
  );
}
