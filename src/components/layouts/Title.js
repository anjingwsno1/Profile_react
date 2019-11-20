import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { BackgroundImg } from "./style";
import { Bounce, Pulse } from "./style";

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    width: "100%",
    height: "100%"
  },
  img: {
    padding: theme.spacing(0, 0, 0),
    background: "rgba(0, 0, 0, 0.4)",
    color: "white",
    height: "inherit"
  },
  content: {
    paddingTop: 300,
    verticalAlign: "middle",
    textAlign: "center",
    position: "relative"
  }
}));

export default function Title() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BackgroundImg>
        <div className={classes.img}>
          <div className={classes.content}>
            <Bounce>
              <Typography variant="h3" gutterBottom>
                Hello & Welcome
              </Typography>
            </Bounce>
            <Pulse>
              <Typography align="center" variant="h3" gutterBottom>
                Shen Wang (Walson).
              </Typography>
            </Pulse>
          </div>
        </div>
      </BackgroundImg>
    </div>
  );
}
