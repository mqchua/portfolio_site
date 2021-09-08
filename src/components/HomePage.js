import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';

import { Grid, Container, Paper, Slide, Divider} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import profilePic from'../images/pp.jpg';
import '../App.css';

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
  },
  introText: {
    maxWidth: "360px",
    textAlign:"center",
  },

}));



export default function HomePage() {

    const classes = useStyles();

    return(

    <div>

    {/*Intro Section*/}
      <div className= {classes.bgColor1}>
        <div className={classes.divCenter}>
          <div className={classes.headerSection} >
            <p ><small>Hi, my name is</small></p>
            <h1 >John Doe.</h1>
            <div className={classes.divCenter}>
              <p className={classes.introText} ><small>I'm an undergraduate specializing in Software Engineering. I enjoy web
              design and collaborating with people.</small></p>
            </div>
          </div>
        </div>
      </div>
    {/*Intro Section End*/}

    {/*About Section*/}
      <div className= {classes.bgColor2}>
        <div className={classes.divCenter}>
          <div className={classes.container} >

            <h2 className={classes.alignLeft} >About me</h2>


            <Grid container spacing={3}>

            <Grid item xs={12} md={6} className={classes.alignLeft} >

              <br></br>
              <br></br>
              <p className={classes.alignLeft}><small>My name is John Doe, penultimate student from the National University of Singapore. I am open to new opportunities to broaden
              my network and gain relevant skills in the industry. I am currently freelancing, making websites for companies to expand their outreach.
               I believe that consistency is the key to success.</small></p>

              <br></br>
              <p className={classes.alignLeft}><small>I love meeting new people and hearing new perspectives. Feel free to reach out if you want to talk to me about tech,
              creating software products, or collaboration. </small></p>

              <br></br>
              <br></br>

              <Button style={{
                    borderRadius: 35,
                    backgroundColor: "#FFFAF2",
                    color: "#000000",
                }}
                variant="contained" color="primary">
                Contact
              </Button>

            </Grid>

            <Grid item xs={12} md={6} className={classes.profilePic}>

                <div>
                  <img src={profilePic} alt="Img" />
                </div>
              </Grid>
            </Grid>

          </div>
        </div>
      </div>
    {/*About Section End*/}


    {/*Skills Section*/}
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
      {/*Skills Section End*/}


      {/*Projects Section*/}
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
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Developed a fullstack web application to increase revenue of company. Utilized Selenium to perform web scraping
                  and gather insights on customers.
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
                    Project 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Built an internal dashboard to track cashflows of the organization. Improved productivity of department by 50%.
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
                    Project 3
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Developed a fully-responsive web-pages for Orbital. Worked primarily in HTML, CSS and Javascript.
                  </Typography>
                </CardContent>
              </CardActionArea>

              </Grid>
            </Grid>

            </div>
          </div>
        </div>
      {/*Projects Section End*/}

    </div>
  );
}
