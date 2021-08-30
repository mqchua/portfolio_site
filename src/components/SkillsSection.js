import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper, Slide, Divider} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';

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




export default function SkillsSection() {

    const classes = useStyles();

    return(

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

    );
}
