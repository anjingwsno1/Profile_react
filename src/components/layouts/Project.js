import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 0, 6)
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

export default function Project() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="project">
      <Container>
        <Typography align="center" variant="h3" gutterBottom>
          PROJECT
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  Beatcoin
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Front-end: Ejs + CSS + jQuery
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Back-end: Node.js + MVC
                </Typography>
                <Typography variant="body2" gutterBottom>
                  The project is to visualize data about Bitcoin and related
                  cryptocurrency.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  SYDwisper
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Front-end: handleBar + CSS + Ajax
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Back-end: Node.js + MVC
                </Typography>
                <Typography variant="body2" gutterBottom>
                  The project enables sharing of education materials and
                  communication of users, it is an online blog system.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  AppClassifier
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Algorisms: PCA, Naïve Bayes and Logistic regression
                </Typography>
                <Typography variant="body2" gutterBottom>
                  This project is to build a classifier to classify apps from
                  the Apps Market into a set of categories based on their
                  descriptions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  SalaryPrediction
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Algorisms: PCA, Naïve Bayes, Logistic Regression, K-Nearest
                  neighbors, Random Forest, Adaptive Boosting, Support vector
                  machines
                </Typography>
                <Typography variant="body2" gutterBottom>
                  This project is to use information in UCI Adult Data set such
                  as education level or occupation to predict if a person’s
                  annual salary exceeds 50K dollars.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
