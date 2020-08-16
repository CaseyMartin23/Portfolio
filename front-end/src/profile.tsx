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
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const paperBackGroundColor = darkState ? "#2f404a" : "#535759";
  const backgroundColor = darkState ? "#25292e" : "#f5f5f5";
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

  useEffect(() => {
    checkThemeColor();
    bodyBackgroundColor();
  }, [darkState]);

  const checkThemeColor = () => {
    const themeStorage = localStorage.getItem("darkState");

    if (!themeStorage) {
      localStorage.setItem("darkState", palletType);
    } else if (themeStorage === "dark") {
      setDarkState(true);
    } else if (themeStorage === "light") {
      setDarkState(false);
    }
  };

  const bodyBackgroundColor = () => {
    const bodyTag: HTMLElement = document.getElementsByTagName(
      "body"
    )[0] as HTMLElement;
    if (bodyTag) {
      bodyTag.style.backgroundColor = backgroundColor;
    }
  };

  const handleThemeChange = () => {
    if (darkState) {
      setDarkState(false);
      localStorage.setItem("darkState", "light");
    } else if (!darkState) {
      setDarkState(true);
      localStorage.setItem("darkState", "dark");
    }
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar handleThemeChange={handleThemeChange} />
        <Switch>
          <Route exact path="/">
            <Home />
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
