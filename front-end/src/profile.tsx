import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/homePage";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import {
  WithStyles,
  createStyles,
  withStyles,
  Theme,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
  });

type ProfileProps = {} & WithStyles<typeof styles>;

const ProfileUnstyled: React.FC<ProfileProps> = ({ classes }) => {
  const [value, setValue] = useState(0);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const paperBackGroundColor = darkState ? "#2f404a" : "#535759";
  const textThemeColor = "#ffffff";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: "#009dff",
      },
      secondary: {
        main: "#2f404a",
      },
      text: {
        primary: textThemeColor,
      },
      divider: textThemeColor,
      background: {
        paper: paperBackGroundColor,
      },
    },
  });

  const bodyBackgroundColor = () => {
    const bodyTag = document.getElementById("body");
    if (bodyTag && darkState) {
      bodyTag.style.backgroundColor = "#25292e";
    } else if (bodyTag && !darkState) {
      bodyTag.style.backgroundColor = "#f5f5f5";
    }
  };

  useEffect(() => {
    bodyBackgroundColor();
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar
          handleChange={handleChange}
          handleThemeChange={handleThemeChange}
          value={value}
        />
        <Switch>
          <Route exact path="/">
            <Home onLinkClick={handleChange} />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default withStyles(styles)(ProfileUnstyled);
