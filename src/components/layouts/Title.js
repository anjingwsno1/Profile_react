import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../images/bg.jpg";
import Typography from "@material-ui/core/Typography";
import { BackgroundImg } from "./style";
import { Bounce, Pulse } from "./style";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 0, 18),
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "relative"
  },
  img: {
    padding: theme.spacing(16, 0, 30),
    background: "rgba(0, 0, 0, 0.4)",
    color: "white",
    height: "inherit"
  },
  content: {
    verticalAlign: "middle",
    textAlign: "center",
    position: "relative"
  }
}));

export default function Title() {
  const classes = useStyles();
  return (
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
  );
}
