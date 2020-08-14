import React from "react";
import { NavLink } from "react-router-dom";

import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Brightness6Icon from "@material-ui/icons/Brightness6";

const styles = (theme: Theme) =>
  createStyles({
    optionButton: {
      position: "absolute",
      right: "10px",
      marginLeft: "50px",
    },
    navLinkTab: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  });

type NavbarUnstyledProps = {
  handleThemeChange: () => void;
} & WithStyles<typeof styles>;

const NavbarUnstyled: React.FC<NavbarUnstyledProps> = ({
  classes,
  handleThemeChange,
}) => {
  return (
    <div>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <NavLink className={classes.navLinkTab} to="/">
            <Button size="small" color="primary">
              Home
            </Button>
          </NavLink>
          <NavLink className={classes.navLinkTab} to="/skills">
            <Button size="small" color="primary">
              Skills
            </Button>
          </NavLink>
          <NavLink className={classes.navLinkTab} to="/projects">
            <Button size="small" color="primary">
              Projects
            </Button>
          </NavLink>
          <NavLink className={classes.navLinkTab} to="/contact">
            <Button size="small" color="primary">
              Contact
            </Button>
          </NavLink>
          <Button
            color="primary"
            onClick={handleThemeChange}
            className={classes.optionButton}
          >
            <Brightness6Icon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavbarUnstyled);
