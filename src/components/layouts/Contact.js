import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(8, 40, 6)
  },
  card: {
    width: 200
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

export default function SimpleCard() {
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Icon className="fa fa-phone" />
              <Typography variant="body1">PHONE</Typography>
              <Typography variant="body1">+61 421822461</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Icon className="fas fa-envelope" />
              <Typography variant="body1">EMAIL</Typography>
              <Typography variant="body1">anjingwsno1@gmail.com</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Icon className="fa fa-map-marker" />
              <Typography variant="body1">ADDRESS</Typography>
              <Typography variant="body1">
                20 Chisholm Street, Wolli Creek, Sydney, NSW 2205
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
