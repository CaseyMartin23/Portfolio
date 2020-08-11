import React from "react";

import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";

import SkillBadge from "../components/skillBadge";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import JsImg from "../assets/skills-img/javascript.svg";
import TsImg from "../assets/skills-img/typescript.png";
import CplusImg from "../assets/skills-img/cplus.png";
import CssImg from "../assets/skills-img/css.png";
import GitImg from "../assets/skills-img/git.png";
import HtmlImg from "../assets/skills-img/html.png";
import JavaImg from "../assets/skills-img/java.jpg";
import NodejsImg from "../assets/skills-img/nodejs.png";
import PhpImg from "../assets/skills-img/php.png";
import PgsqlImg from "../assets/skills-img/postgresql.png";
import PythonImg from "../assets/skills-img/python.jpg";
import ReactImg from "../assets/skills-img/react.png";
import ReactnativeImg from "../assets/skills-img/react-native.png";
import SqlserverImg from "../assets/skills-img/sqlserver.png";

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
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "5px",
      backgroundColor: "#323e45",
    },
  });

type SkillsProps = {} & WithStyles<typeof styles>;

const SkillsUnstyled: React.FC<SkillsProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Box p={3}>
        <Paper className={classes.paperBackground}>
          <Typography color="primary" variant="h4">
            Skills
          </Typography>
          <div className={classes.paragrahs}>
            <Box p={1}>
              <Typography variant="body2">
                Hey there! These are my skills I've acquired over the last year
                in the Web Developing industry
              </Typography>
            </Box>
            <Box p={1}>
              <Typography variant="body2">
                Many of these skills there are just basic understanding of them
                but I am able to get a better grasp on these languages/concepts
                <br />
                But I hate to admit it but JavaScript has my heart, so neglect
                most of these skills. I have seen that it is pretty easy to pick
                the language/skill when needed.
              </Typography>
            </Box>
          </div>
        </Paper>
      </Box>
      <Box p={1}>
        <Paper>
          <Box p={2}>
            <Grid container justify="center" spacing={5}>
              <Grid>
                <SkillBadge image={JsImg} title="JavaScript" />
              </Grid>
              <Grid>
                <SkillBadge image={TsImg} title="TypeScript" />
              </Grid>
              <Grid>
                <SkillBadge image={NodejsImg} title="NodeJS" />
              </Grid>
              <Grid>
                <SkillBadge image={ReactImg} title="ReactJS" />
              </Grid>
              <Grid>
                <SkillBadge image={GitImg} title="Git" />
              </Grid>
              <Grid>
                <SkillBadge image={HtmlImg} title="HTML" />
              </Grid>
              <Grid>
                <SkillBadge image={CssImg} title="CSS" />
              </Grid>
              <Grid>
                <SkillBadge image={SqlserverImg} title="SQL Server" />
              </Grid>
              <Grid>
                <SkillBadge image={PgsqlImg} title="PostgreSQL" />
              </Grid>
              <Grid>
                <SkillBadge image={PhpImg} title="PHP" />
              </Grid>
              <Grid>
                <SkillBadge image={ReactnativeImg} title="React Native" />
              </Grid>
              <Grid>
                <SkillBadge image={PythonImg} title="Python" />
              </Grid>
              <Grid>
                <SkillBadge image={JavaImg} title="Java" />
              </Grid>
              <Grid>
                <SkillBadge image={CplusImg} title="C++" />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default withStyles(styles)(SkillsUnstyled);
