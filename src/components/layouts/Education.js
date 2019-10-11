import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    padding: theme.spacing(8, 0, 6)
  }
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="education">
      <Container>
        <Typography align="center" variant="h3" gutterBottom>
          EDUCATION
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography align="center" variant="subtitle1" gutterBottom>
              Master
            </Typography>
            <Typography align="center" variant="subtitle1" gutterBottom>
              [University of Sydney]
            </Typography>
            <Typography align="center" variant="subtitle1" gutterBottom>
              Master of IT and ITM
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography align="center" variant="subtitle1" gutterBottom>
              Bachelor
            </Typography>
            <Typography align="center" variant="subtitle1" gutterBottom>
              [Southeast University]
            </Typography>
            <Typography align="center" variant="subtitle1" gutterBottom>
              Bachelor of Engineer
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
