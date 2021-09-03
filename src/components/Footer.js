import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


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

}));


export default function Footer() {
  const classes = useStyles();
    return (
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
    );
}

