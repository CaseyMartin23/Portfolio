import React from "react";

import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import Box from "@material-ui/core/Box";

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    media: {
      height: 0,
      paddingTop: "107.583px", // 16:9
    },
    actionArea: {
      minWidth: 120,
      borderRadius: "3px",
      transition: "0.2s",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    cardContent: {
      backgroundColor: theme.palette.primary.dark,
    },
  });

type SkillBadgeProps = {
  title: string;
  image: string;
} & WithStyles<typeof styles>;

const SkillBadgeUnstyled: React.FC<SkillBadgeProps> = ({
  classes,
  title,
  image,
}) => {
  return (
    <div className={classes.root}>
      <Box p={3}>
        <CardActionArea className={classes.actionArea}>
          <Card>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent className={classes.cardContent}>
              <Typography>{title}</Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Box>
    </div>
  );
};

export default withStyles(styles)(SkillBadgeUnstyled);
