import React from "react";
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    paperBackground: {
      padding: "10px",
      backgroundColor: theme.palette.background.paper,
    },
    paragrahs: {
      padding: "5px",
      margin: "5px",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "5px",
      backgroundColor: "#323e45",
      color: "white",
    },
  });

type ProjectsProps = {} & WithStyles<typeof styles>;

const ProjectsUnstyled: React.FC<ProjectsProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Box p={1}>
        <Paper className={classes.paperBackground}>
          <Typography color="primary" id="Projects" variant="h4">
            Projects Page
          </Typography>
          <Typography id="Projects" variant="h1">
            Coming Soon...
          </Typography>
        </Paper>
        <Box p={3}>
          <div className={classes.paragrahs}>
            <Typography variant="h6" id="about">
              Due to my internship that I've been so lucky to be a part of! This
              made time for my profile and personal projects less then I'd like.
              <br />
              But don't not fear, Casey is here!!!
              <br />
              And I plan to work on one project at a time and then updating my
              profile with the new project and show off my skills!
            </Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default withStyles(styles)(ProjectsUnstyled);
