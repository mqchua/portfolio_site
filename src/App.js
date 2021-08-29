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
  introText: {
    maxWidth: "500px",
    textAlign: "left",
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
          <p className={classes.introText} ><small>I'm an undergraduate specializing in Software Engineering. I enjoy web
          design and collaborating with people.</small></p>
        </div>
      </div>
    </div>


    <div className= {classes.bgColor2}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h2 className={classes.alignLeft} >About me</h2>


          <Grid container spacing={3}>

          <Grid item xs={12} md={6} className={classes.alignLeft} >


            <br></br>
            <br></br>
            <p className={classes.alignLeft}><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nunc in sapien ultrices interdum.
            Mauris sed lectus sem. Donec ligula libero,tempor vestibulum leo at, accumsan semper risus. Sed condimentum mauris eros, in bibendum purus
            gravida et. Vestibulum imperdiet sollicitudin odio ac ultricies. Fusce porta quis quam quis sollicitudin.</small></p>

            <br></br>
            <p className={classes.alignLeft}><small>Ut lacinia id lorem at cursus. Morbi efficitur arcu in tortor aliquam, ac porta eros hendrerit.
            Sed felis enim, gravida et urna vel, suscipit posuere mi. Nulla facilisis risus et sem lacinia, in tincidunt nunc volutpat. Vivamus
            sit amet mattis elit, in interdum tortor. Quisque nulla enim, aliquet eget bibendum id, tincidunt.</small></p>

          </Grid>

          <Grid item xs={12} md={6} className={classes.profilePic}>

              <div className="profilePic">
                <img className="aboutImg" src={profilePic} alt="Img" />
              </div>

          </Grid>



        </Grid>



        </div>
      </div>
    </div>


    <div className= {classes.bgColor1}>
      <div className={classes.divCenter}>
        <div className={classes.container}>

          <h2 className={classes.alignLeft}>Skills</h2>

          <br></br>

          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={4}>


                <CodeIcon className={classes.largeIcon} />
                <br></br>
                <br></br>
                <p><h4>Full-stack Developer</h4></p>
                <br></br>
                <p><small>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</small></p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p><h5>Dev Tools:</h5></p>
                <br></br>
                <p><small>ReactJS</small></p>
                <p><small>WordPress</small></p>
                <p><small>Django</small></p>
                <p><small>Git</small></p>

            </Grid>


            <Grid item xs={2} md={1}>
               <Divider orientation="vertical"/>
            </Grid>

            <Hidden mdUp>
              <Grid item xs={12}>
                <Divider orientation="horizontal"/>
              </Grid>
            </Hidden>

            <Grid item xs={12} md={4}>


                <BrushIcon className={classes.largeIcon} />
                <br></br>
                <br></br>
                <p><h4>Designer</h4></p>
                <br></br>
                <p><small>I value simple content structure, clean design patterns, and thoughtful interactions.</small></p>

                <br></br>
                <br></br>
                <br></br>

                <p><h5>Design Tools:</h5></p>
                <br></br>
                <p><small>Figma</small></p>
                <p><small>Sketch</small></p>
                <p><small>Canva</small></p>
                <p><small>Photoshop</small></p>

            </Grid>
          </Grid>

        </div>
      </div>
    </div>



    <div className= {classes.bgColor2}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h2 className={classes.alignLeft}>My Projects</h2>


          <br></br>
          <br></br>


        <Grid container spacing={3}>

        <Grid item xs={12} md={4} className={classes.profilePic}>

        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={profilePic}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

          </Grid>

          <Grid item xs={12} md={4} className={classes.profilePic}>

          <CardActionArea>
              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={profilePic}
              title="Contemplative Reptile"
          />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>

          </Grid>

       <Grid item xs={12} md={4} className={classes.profilePic}>

            <CardActionArea>
              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={profilePic}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>

          </Grid>
        </Grid>

        </div>
      </div>
    </div>


    <div className= {classes.bgColor1}>
      <div className={classes.divCenter}>
        <div className={classes.container} >

          <h4>Get in Touch</h4>

          <br></br>

          <div className={classes.divCenter}>
            <div className={classes.socials}>
                <TwitterIcon></TwitterIcon>
                <InstagramIcon></InstagramIcon>
                <LinkedInIcon></LinkedInIcon>
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
