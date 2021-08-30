import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
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
  bgColor1: {
    backgroundColor: "#FFFAF2",
    boxShadow: "none",
    color: "#000000",
  },
  introText: {
    maxWidth: "360px",
    textAlign:"center",
  },
  outline: {
    // outline: "2px dashed blue",
    // maxWidth: "500px"
  },

}));

export default function IntroSection() {

    const classes = useStyles();

    return(
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
    );
}
