import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TitleFont } from "./style";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#f6f6f6",
    padding: theme.spacing(8, 0, 6)
  },
  tab: {
    backgroundColor: theme.palette.background.paper,
    width: "60%"
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="skill">
      <TitleFont>SKILL</TitleFont>
      <Container align="center">
        <Paper className={classes.tab}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="JAVA" />
            <Tab label="Python" />
            <Tab label="Javascript" />
            <Tab label="HTML" />
            <Tab label="CSS" />
            <Tab label="Node.js" />
            <Tab label="React.js" />
            <Tab label="MongoDB" />
          </Tabs>
        </Paper>
      </Container>
    </div>
  );
}
