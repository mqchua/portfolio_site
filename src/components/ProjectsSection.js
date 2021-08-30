import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Container, Paper, Slide, Divider, Typography} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import profilePic from'../images/pp.jpg';


const useStyles = makeStyles(theme => ({
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
  outline: {
    // outline: "2px dashed blue",
    // maxWidth: "500px"
  },
}));

export default function ProjectsSection() {

    const classes = useStyles();

    return(

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
    );
}
