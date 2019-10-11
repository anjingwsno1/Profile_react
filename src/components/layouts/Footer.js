import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#111",
    padding: theme.spacing(8, 0, 6)
  }
}));

export default function Footer() {
  const classes = useStyles();
  return <div className={classes.root} />;
}
