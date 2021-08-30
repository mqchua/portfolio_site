import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper, Slide, Divider} from '@material-ui/core';

import profilePic from'../images/pp.jpg';
// import code from'./images/code.png';


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
  bgColor2: {
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    color: "#000000",
  },
  largeIcon: {
    transform: "scale(2.0)",
  },
  outline: {
    // outline: "2px dashed blue",
    // maxWidth: "500px"
  },

}));


export default function AboutSection() {

    const classes = useStyles();

    return(

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

              <div>
                <img src={profilePic} alt="Img" />
              </div>

          </Grid>
        </Grid>

        </div>
      </div>
    </div>

    );
}
