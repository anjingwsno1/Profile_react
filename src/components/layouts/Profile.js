import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Percentage } from "./style";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#212121"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  }
});
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(8, 0, 6)
  }
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="profile">
      <Typography align="center" variant="h3" component="h2" gutterBottom>
        ABOUT ME
      </Typography>
      <Typography align="center" variant="subtitle1" gutterBottom>
        I'm a web developer, effective learner and problem-solver with advanced
        programming skills.
      </Typography>
      <Typography align="center" variant="subtitle1" gutterBottom>
        Graduated from University of Sydney and majoring in Software Engineering
        of Information Technology.
      </Typography>
      <Typography align="center" variant="subtitle1" gutterBottom>
        Seeking to apply experience in software engineering and web developer.
      </Typography>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Percentage className="title">HTML</Percentage>
            <Percentage>80%</Percentage>
            <LinearProgress variant="determinate" value="80" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Percentage className="title">UX/UI</Percentage>
            <Percentage>70%</Percentage>
            <LinearProgress variant="determinate" value="70" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Percentage className="title">REACT</Percentage>
            <Percentage>80%</Percentage>
            <LinearProgress variant="determinate" value="80" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Percentage className="title">FRONT-END</Percentage>
            <Percentage>85%</Percentage>
            <LinearProgress variant="determinate" value="85" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Percentage className="title">BACK-END</Percentage>
            <Percentage>70%</Percentage>
            <LinearProgress variant="determinate" value="70" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Percentage className="title">DEPLOY</Percentage>
            <Percentage>70%</Percentage>
            <LinearProgress variant="determinate" value="70" />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
