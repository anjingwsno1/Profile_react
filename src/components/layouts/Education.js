import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { TitleFont } from "./style";
import { LogoImg } from "./style";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    padding: theme.spacing(8, 0, 6)
  },
  card: {
    maxWidth: 345
  }
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="education">
      <Container>
        <TitleFont align="center" variant="h3" gutterBottom>
          EDUCATION
        </TitleFont>
        <Grid container spacing={3} alignItems="center" alignContent="center">
          <Grid item xs={12} md={6}>
            <div align="center">
              <LogoImg
                src={require("../images/sydney.png")}
                alt="University of Sydney"
              />
              <Typography align="center" variant="subtitle1" gutterBottom>
                Master
              </Typography>
              <Typography align="center" variant="subtitle1" gutterBottom>
                [University of Sydney]
              </Typography>
              <Typography align="center" variant="subtitle1" gutterBottom>
                Master of IT and ITM
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div align="center">
              <LogoImg
                src={require("../images/Southeast_University_logo.png")}
                alt="SouthEast University"
              />
              <Typography align="center" variant="subtitle1" gutterBottom>
                Bachelor
              </Typography>
              <Typography align="center" variant="subtitle1" gutterBottom>
                [Southeast University]
              </Typography>
              <Typography align="center" variant="subtitle1" gutterBottom>
                Bachelor of Engineer
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
