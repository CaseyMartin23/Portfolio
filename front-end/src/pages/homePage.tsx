import React from "react";
import { Link } from "react-router-dom";

import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import ProfileImage from "../assets/ProfilePicture.jpeg";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import HeaderBackground from "../assets/homepage-background-img/web-designer-tools-icon-pattern-background-vector.jpg";

// import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// import EmailIcon from "@material-ui/icons/Email";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
    },
    paperBackground: {
      padding: "20px",
      backgroundColor: theme.palette.background.paper,
    },
    profileDiv: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    profileImage: {
      border: `white solid 2px`,
      height: theme.spacing(30),
      width: theme.spacing(30),
      marginBottom: "20px",
    },
    avatarGrid: {
      placeContent: "center",
    },
    paragrahs: {
      padding: "5px",
      margin: "5px",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "5px",
      backgroundColor: "#323e45",
    },
    contactLink: {
      textDecoration: "none",
      color: theme.palette.primary.light,
      cursor: "pointer",
    },
    openningHeader: {
      color: "white",
      backgroundImage: `url(${HeaderBackground})`,
      backgroundRepeat: "repeat",
      backgroundSize: 300,
      paddingBottom: "10px",
      paddingTop: "30px",
    },
    socialBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "40px",
    },
    socialIconButtons: {
      margin: "10px",
      color: theme.palette.text.secondary,
    },
    socialIcons: {
      height: "40px",
      width: "40px",
    },
    contactLinkDiv: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "20px",
    },
  });

type HomeProps = {} & WithStyles<typeof styles>;

const HomeUnstyled: React.FC<HomeProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div id="openningHeader" className={classes.openningHeader}>
        <div className={classes.profileDiv}>
          <Avatar
            className={classes.profileImage}
            src={ProfileImage}
            alt="Profile-logo"
          />
        </div>
        <Typography style={{ margin: "7px" }} variant="h3">
          Hi there! I'm Casey
        </Typography>
        <Typography variant="h5" style={{ margin: "5px" }}>
          And You've Stumbled on my Portfolio! Well I have a lot to show you on
          this portfolio of mine ..
        </Typography>
      </div>
      <Box p={3}>
        <Paper className={classes.paperBackground}>
          <div>
            <Grid container>
              <Grid item sm={6}>
                <div className={classes.paragrahs}>
                  <Typography variant="caption" id="about">
                    I am Charles-Casey Martin, you can call me Casey though and
                    Im a Junior Web Developer. My Stack as a Full-Stack
                    Developer(as said by my boot-camp certificate) is the MERN
                    Stack. <br />
                    Even though my course was base on JavaScript I've also
                    self-studied building dynamic websites with PHP!
                    <br />
                    As a Developer my goal is to become a Professional, to be
                    able to learn, practise and grow.
                    <br />
                    This is where I put most on my energy.
                    <br /> Within five years I'd like to be Senior Developer, I
                    would like to make an impact in the world of development
                    one-way or another. No matter how small.
                  </Typography>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className={classes.paragrahs}>
                  <Typography variant="caption" id="about">
                    I've been in the Web Development industry for a year now,
                    and I already have learnt a lot due to the highly intense
                    boot-camp and internship at Vulcan Labs that I have been
                    fortunate to be apart of.
                    <br /> This increased my level of skills to a place far
                    beyond I could've dream of, and it just sparked a deeper
                    passion for this industry in myself. At this point of my
                    career, I seen so much and know so little, but it only
                    pushes me to want to learn more and discover more!
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.contactLinkDiv}>
            <Typography style={{ marginRight: "7px" }}>
              Would you like to keep in contact with me?{" "}
              <Link className={classes.contactLink} to="/contact">
                click here
              </Link>
            </Typography>
          </div>
        </Paper>
        <div id="socialmedia" className={classes.socialBar}>
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/casey-martin-321297195/"
            className={classes.socialIconButtons}
          >
            <LinkedInIcon className={classes.socialIcons} />
          </Button>
          <Button
            target="_blank"
            href="https://github.com/CaseyMartin23"
            className={classes.socialIconButtons}
          >
            <GitHubIcon className={classes.socialIcons} />
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default withStyles(styles)(HomeUnstyled);
