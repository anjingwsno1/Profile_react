import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "@material-ui/core/Fade";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#424242"
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const [enableHeader, setEnableHeader] = useState(false);

  const handleScroll = function() {
    if (window.scrollY > 100) {
      setEnableHeader(true);
    } else {
      setEnableHeader(false);
    }
  };
  const scrollToAnchor = anchorName => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const scrollToAnchorAndClose = anchorName => {
    handleClose(anchorName);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [location, setLocation] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = anchorName => {
    setAnchorEl(null);
    setLocation(anchorName);
  };
  useEffect(() => {
    scrollToAnchor(location);
  }, [location]);

  return (
    <ThemeProvider theme={outerTheme}>
      <Fade in={enableHeader} timeout={1000}>
        <AppBar color="inherit" position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleClick} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
              >
                <MenuItem onClick={e => scrollToAnchorAndClose("profile", e)}>
                  about
                </MenuItem>
                <MenuItem onClick={e => scrollToAnchorAndClose("education", e)}>
                  education
                </MenuItem>
                <MenuItem onClick={e => scrollToAnchorAndClose("project", e)}>
                  project
                </MenuItem>
                <MenuItem onClick={e => scrollToAnchorAndClose("skill", e)}>
                  skill
                </MenuItem>
                <MenuItem onClick={e => scrollToAnchorAndClose("work", e)}>
                  work
                </MenuItem>
              </Menu>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Shen Wang
            </Typography>
            <Button onClick={e => scrollToAnchor("profile", e)}>about</Button>
            <Button onClick={e => scrollToAnchor("education", e)}>
              education
            </Button>
            <Button onClick={e => scrollToAnchor("project", e)}>project</Button>
            <Button onClick={e => scrollToAnchor("skill", e)}>skill</Button>
            <Button onClick={e => scrollToAnchor("work", e)}>work</Button>
          </Toolbar>
        </AppBar>
      </Fade>
    </ThemeProvider>
  );
}
